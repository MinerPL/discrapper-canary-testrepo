function r(e) {
    let {
        id: t,
        username: n,
        discriminator: r,
        globalName: i,
        avatar: a,
        avatarDecoration: o,
        bot: s,
        flags: l,
        premiumType: u
    } = e;
    return {
        id: t,
        username: n,
        discriminator: r,
        global_name: i,
        avatar: a,
        avatar_decoration_data: null != o ? {
            asset: o.asset,
            sku_id: o.skuId
        } : null,
        bot: s,
        flags: l,
        premium_type: null != u ? u : 0
    };
}
n.d(t, {
    Z: function () {
        return r;
    }
}), n(789020);
