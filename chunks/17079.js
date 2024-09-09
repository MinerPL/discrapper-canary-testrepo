t.d(n, {
    T: function () {
        return o;
    }
});
var r = t(570140),
    i = t(155414);
async function o(e, n) {
    r.Z.dispatch({
        type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH',
        guildId: e,
        priceTierType: n
    });
    try {
        let t = await i.X(e, n);
        r.Z.dispatch({
            type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS',
            guildId: e,
            priceTierType: n,
            priceTiers: t
        });
    } catch (t) {
        r.Z.dispatch({
            type: 'CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE',
            guildId: e,
            priceTierType: n
        });
    }
}
