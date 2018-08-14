import config from './envConfig';
import { Server } from './app';

// create http server
export const app = Server.bootstrap().app;
export const server = app.listen(config.port);

console.log(`listening at port ${config.port}`);