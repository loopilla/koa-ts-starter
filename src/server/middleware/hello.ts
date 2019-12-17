import { Context, Next } from 'koa';

export async function hello(ctx: Context, next: Next) {
    ctx.body = 'Hello from koa';
}
