export function navigateTo(path: string) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function isPriceListPath(pathname: string): boolean {
  const path = pathname.replace(/^\/+/, "").split("/")[1] ?? "";
  return ["prijslijst", "price-list", "preisliste"].includes(path);
}
