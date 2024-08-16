function r(e) {
    let { id: t, username: n, discriminator: r, globalName: i, avatar: a, avatarDecoration: s, bot: o, flags: l, premiumType: u } = e;
    return {
        id: t,
        username: n,
        discriminator: r,
        global_name: i,
        avatar: a,
        avatar_decoration_data:
            null != s
                ? {
                      asset: s.asset,
                      sku_id: s.skuId
                  }
                : null,
        bot: o,
        flags: l,
        premium_type: null != u ? u : 0
    };
}
n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(789020);
