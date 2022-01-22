const {
    default: axios
} = require('axios');
const Router = require('koa-router')
const HttpCode = require('../utils/HttpCode')
const router = new Router();

router.get('/category', async (ctx, next) => {
    console.log('aaa');
    const {
        data
    } = await axios.get('https://api.juejin.cn/tag_api/v1/query_category_briefs?aid=2608&uuid=7050641888232212007');
    ctx.body = {
        code: HttpCode.Success.success_ok,
        msg: HttpCode.Success.success_ok_msg,
        data
    }
    next()
})

module.exports = router;