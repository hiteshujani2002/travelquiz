'use strict';

/**
 *  question controller
 */

const { createCoreController } = require('@strapi/strapi').factories;



module.exports = createCoreController("api::question.question", ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
  
      const query = {
        filters: { slug },
        ...ctx.query,
      };
  
      const post = await strapi.entityService.findMany("api::question.question",{
        populate: '*',
      } ,query);

  
      return this.transformResponse(post[0]);
    },
  }));
