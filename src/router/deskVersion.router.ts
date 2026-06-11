import Router from 'koa-router';

import deskVersionController from '@/controller/deskVersion.controller';

const deskUserRouter = new Router({ prefix: '/desk_version' });

deskUserRouter.get('/latest', deskVersionController.latest);

deskUserRouter.get('/check', deskVersionController.check);

deskUserRouter.get('/find_by_version', deskVersionController.findByVersion);

export default deskUserRouter;
