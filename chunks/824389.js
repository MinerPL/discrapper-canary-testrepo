t.d(n, {
    Je: function () {
        return u;
    },
    gs: function () {
        return d;
    },
    mh: function () {
        return s;
    },
    p9: function () {
        return c;
    },
    uV: function () {
        return a;
    }
});
var r = t(544891), i = t(881052), o = t(73346), l = t(981631);
let u = async (e, n, t) => {
        let {
            priceTier: o,
            imageName: u,
            createNewRole: s,
            unlinkRole: a,
            ...c
        } = t;
        try {
            return (await r.tn.patch({
                url: l.ANM.GUILD_PRODUCT_LISTINGS(e, n),
                body: {
                    ...c,
                    image_name: u,
                    price_tier: o,
                    create_new_role: s,
                    unlink_role: a
                }
            })).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    }, s = async (e, n) => {
        try {
            await r.tn.del({ url: l.ANM.GUILD_PRODUCT_LISTINGS(e, n) });
        } catch (e) {
            throw new i.Hx(e);
        }
    }, a = async e => {
        try {
            return (await (0, o.Kb)({ url: l.ANM.GUILD_PRODUCT_LISTINGS(e) })).body.listings;
        } catch (e) {
            throw new i.Hx(e);
        }
    }, c = async (e, n) => {
        try {
            return (await (0, o.Kb)({ url: l.ANM.GUILD_PRODUCT_LISTINGS(e, n) })).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    }, d = async e => {
        let {
            guildId: n,
            productId: t,
            attachmentId: o
        } = e;
        try {
            return (await r.tn.post({ url: l.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(n, t, o) })).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    };
