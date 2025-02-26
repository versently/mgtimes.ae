export default defineNuxtRouteMiddleware((to, from) => {
  const redirectPaths = [
    "/cities/nice",
    "/cities/monako",
    "/cities/milan",
    "/cities/paris",
    "/cities/london",
    "/cities/istanbul",
    "/ru/cities/nice",
    "/ru/cities/monako",
    "/ru/cities/milan",
    "/ru/cities/paris",
    "/ru/cities/london",
    "/ru/cities/istanbul",
  ];

  if (redirectPaths.includes(to.path)) {
    return navigateTo("/", { redirectCode: 301 }); // Перенаправляем на главную
  }
});
