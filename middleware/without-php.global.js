//удаление слеша в конце
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path.endsWith(".php")) {
      const nextPath = to.path.replace(/\.php$/, "");
      const nextRoute = { path: nextPath, query: to.query, hash: to.hash };
      return navigateTo(nextRoute, { redirectCode: 301 });
    }
  });
  