import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Route, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';

interface SiteMapNode {
  label: string;
  path: string;
  children: SiteMapNode[];
}

@Component({
  imports: [RouterLink, RouterLinkActive, NgTemplateOutlet],
  selector: 'app-site-map',
  styleUrl: './site-map.scss',
  templateUrl: './site-map.html',
})
export class SiteMap {
  private readonly router = inject(Router);

  // <app-site-map> lives outside <router-outlet> and is created once, so a
  // one-shot ngOnInit snapshot read would never update on later navigations.
  protected readonly activeRoute = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
    ),
    { initialValue: this.router.routerState.snapshot.root }
  );

  // Built once from the static route config, so new routes appear automatically.
  protected readonly nodes: SiteMapNode[] = buildSiteMapTree(flattenRoutes(this.router.config));
}

// A page's absolute URL, decoupled from how the router config expressed its nesting.
interface SiteMapPage {
  label: string;
  path: string;
}

function flattenRoutes(routes: Route[], parentPath = ''): SiteMapPage[] {
  const pages: SiteMapPage[] = [];

  for (const route of routes) {
    if (route.path === undefined || route.path === '**') {
      continue; // no real page (wildcard) to list
    }

    // Path-less wrapper routes (e.g. hosting a guard) add no URL segment or page of their own.
    if (route.path === '' && !route.component && route.children) {
      pages.push(...flattenRoutes(route.children, parentPath));
      continue;
    }

    const path = route.path ? `${parentPath}/${route.path}` : parentPath || '/';
    pages.push({ label: toLabel(route.path), path });

    if (route.children) {
      pages.push(...flattenRoutes(route.children, path));
    }
  }

  return pages;
}

// Nests each page under whichever other page's path is its nearest URL-segment prefix, so
// "explicit" children (router `children` arrays) and "implicit" ones (compound path strings
// like 'contact/telegram') both end up nested the same way, purely from the resulting URL.
function buildSiteMapTree(pages: SiteMapPage[]): SiteMapNode[] {
  const nodeByPath = new Map<string, SiteMapNode>();
  for (const page of pages) {
    nodeByPath.set(page.path, { label: page.label, path: page.path, children: [] });
  }

  const roots: SiteMapNode[] = [];
  for (const page of pages) {
    const node = nodeByPath.get(page.path)!;
    const parent = findParent(page.path, nodeByPath);
    (parent ? parent.children : roots).push(node);
  }

  return roots;
}

function findParent(path: string, nodeByPath: Map<string, SiteMapNode>): SiteMapNode | undefined {
  const segments = path.split('/').filter(Boolean);
  for (let i = segments.length - 1; i > 0; i--) {
    const parent = nodeByPath.get('/' + segments.slice(0, i).join('/'));
    if (parent) {
      return parent;
    }
  }
  return undefined;
}

function toLabel(path: string): string {
  const segment = path.split('/').pop() || 'Home';
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}
