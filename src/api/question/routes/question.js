'use strict';

/**
 * question router.
 */


const { createCoreRouter } = require("@strapi/strapi").factories;

const defaultRouter = createCoreRouter("api::question.question");

const customRouter = (innerRouter, routeOveride = [], extraRoutes = []) => {
  let routes;

  return {
    get prefix() {
      return innerRouter.prefix;
    },
    get routes() {
      if (!routes) routes = innerRouter.routes;

      const newRoutes = routes.map((route) => {
        let found = false;

        routeOveride.forEach((overide) => {
          if (
            route.handler === overide.handler &&
            route.method === overide.method
          ) {
            found = overide;
          }
        });

        return found || route;

      });
      
      return newRoutes.concat(extraRoutes);
    },
  };
};

const myExtraRoutes = [];

const myOverideRoute = [
  {
    method: "GET",
    path: "/questions/:slug",
    handler: "api::question.question.find",
  },
];

module.exports = customRouter(defaultRouter, myOverideRoute, myExtraRoutes);
