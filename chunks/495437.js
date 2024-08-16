t.d(n, {
    EB: function () {
        return l;
    },
    Je: function () {
        return a;
    },
    cf: function () {
        return u;
    },
    mh: function () {
        return s;
    }
});
var r = t(570140),
    i = t(881052),
    o = t(824389);
let l = async (e) => {
        r.Z.dispatch({
            type: 'GUILD_PRODUCTS_FETCH',
            guildId: e
        });
        try {
            let n = await o.uV(e);
            r.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_SUCCESS',
                guildId: e,
                products: n
            });
        } catch (n) {
            r.Z.dispatch({
                type: 'GUILD_PRODUCTS_FETCH_FAILURE',
                guildId: e
            });
        }
    },
    u = async (e, n) => {
        r.Z.dispatch({
            type: 'GUILD_PRODUCT_FETCH',
            productId: n
        });
        try {
            let t = await o.p9(e, n);
            return (
                r.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_SUCCESS',
                    product: t
                }),
                t
            );
        } catch (e) {
            throw (
                (r.Z.dispatch({
                    type: 'GUILD_PRODUCT_FETCH_FAILURE',
                    productId: n,
                    error: new i.Hx(e)
                }),
                e)
            );
        }
    };
async function a(e, n, t) {
    let i = await o.Je(e, n, t);
    return (
        r.Z.dispatch({
            type: 'GUILD_PRODUCT_UPDATE',
            product: i
        }),
        i
    );
}
async function s(e, n) {
    return (
        await o.mh(e, n),
        r.Z.dispatch({
            type: 'GUILD_PRODUCT_DELETE',
            productId: n
        }),
        !0
    );
}
