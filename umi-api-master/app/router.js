'use strict';

module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth(app.config.auth, app);
  router.post('/api/signup', controller.user.signup);// 注册上
  router.post('/api/signin', controller.user.signin);// 登录进去
  router.resources('user', '/api/user', controller.user);
  router.resources('role', '/api/role', controller.role);
  router.resources('roleUser', '/api/roleUser', controller.roleUser);
  router.resources('roleResource', '/api/roleResource', controller.roleResource);
  router.resources('resource', '/api/resource', controller.resource);
};
