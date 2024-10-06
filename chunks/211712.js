t.d(s, {
    J2: function () {
        return m;
    },
    _h: function () {
        return g;
    },
    eQ: function () {
        return a;
    },
    m4: function () {
        return h;
    }
});
var n,
    a,
    i = t(470079),
    r = t(442837),
    o = t(597688),
    l = t(350327),
    c = t(689938),
    d = t(201016),
    _ = t(673497),
    u = t(421450),
    E = t(977787),
    T = t(187812),
    S = t(947557),
    I = t(808236),
    N = t(265665),
    A = t(181793),
    C = t(338430);
((n = a || (a = {}))[(n.ABOVE_THE_CLOUDS = 0)] = 'ABOVE_THE_CLOUDS'), (n[(n.CYBERPUNK = 1)] = 'CYBERPUNK'), (n[(n.STARLIT_DREAM = 2)] = 'STARLIT_DREAM'), (n[(n.SHADOW_REALM = 3)] = 'SHADOW_REALM'), (n[(n.NEON_SPACE = 4)] = 'NEON_SPACE');
let m = {
    0: {
        presetName: 0,
        presetBackgroundUrl: S.Z,
        themeColors: [752280, 9215590],
        bannerImageUrl: d.Z,
        avatarDecorationSkuId: '1144059132517826601'
    },
    1: {
        presetName: 1,
        presetBackgroundUrl: I.Z,
        themeColors: [1967991, 742532],
        bannerImageUrl: _.Z
    },
    3: {
        presetName: 3,
        presetBackgroundUrl: N.Z,
        themeColors: [0, 4458504],
        bannerImageUrl: u.Z,
        avatarDecorationSkuId: '1144058522808614923'
    },
    2: {
        presetName: 2,
        presetBackgroundUrl: A.Z,
        themeColors: [5123751, 590625],
        bannerImageUrl: E.Z,
        avatarDecorationSkuId: '1144058844004233369'
    },
    4: {
        presetName: 4,
        presetBackgroundUrl: C.Z,
        themeColors: [6094952, 1007678],
        bannerImageUrl: T.Z
    }
};
function g(e) {
    switch (e) {
        case 0:
            return c.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_ABOVE_THE_CLOUDS;
        case 1:
            return c.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_CYBERPUNK;
        case 2:
            return c.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_STARLIT_DREAM;
        case 3:
            return c.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_SHADOW_REALM;
        case 4:
            return c.Z.Messages.PREMIUM_UPSELL_TRY_IT_OUT_PRESET_NEON_SPACE;
    }
}
function h(e) {
    let s = (0, r.e7)([o.Z], () => o.Z.lastSuccessfulFetch);
    i.useEffect(() => {
        var s;
        let t = m[e];
        (0, l.x3)({
            bannerImage: t.bannerImageUrl,
            themeColors: t.themeColors,
            avatarDecoration: null != t.avatarDecorationSkuId ? (null === (s = o.Z.getProduct(t.avatarDecorationSkuId)) || void 0 === s ? void 0 : s.items[0]) : void 0
        });
    }, [s, e]);
}
