import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';

import { hello } from './middleware/hello';

export class Server {
    private _koa = new Koa();
    private _router = new KoaRouter();

    constructor() {
        this.setup();
    }

    setup = () => {
        this._router.get('/hello', hello);
        this._koa.use(this._router.routes());
        this._koa.listen(3000, () => {
            console.log('Server running');
        });
    }
}