'use strict';

/**
 * our-services service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-services.our-services');
