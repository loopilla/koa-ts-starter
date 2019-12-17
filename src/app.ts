import * as koa from 'koa';
import { Server } from './server/server';

class App {
    private server: Server;

    constructor() {
        this.init();
    }

    init = () => {
        this.server = new Server();
    }
}

export default new App();
