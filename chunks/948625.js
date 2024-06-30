n.d(t, {
    E8: function () {
        return Z;
    },
    yc: function () {
        return A;
    }
});
var s = n(180650), r = n(44315), a = n(981631), o = n(689938), i = n(994745), l = n(341364), c = n(763542), d = n(354873), u = n(525071), p = n(737140), g = n(194349), f = n(523569), C = n(55817), m = n(696228), h = n(202796), _ = n(570593), b = n(199546), x = n(613540), E = n(769411), I = n(125257), L = n(6412), S = n(238286);
let v = () => o.Z.Messages.LIMITED_TIME, T = () => o.Z.Messages.MOST_POPULAR, N = () => o.Z.Messages.APPLICATION_STORE_NEW_RELEASE, O = () => o.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE, j = () => o.Z.Messages.TAKE_ME_THERE, R = [
        {
            id: 'category_tide',
            backgroundStaticSrc: S,
            overflowSrcStatic: L,
            logoSrc: I,
            textColor: (0, r.Lq)(a.Ilk.WHITE_100),
            badge: { label: v },
            cta: {
                label: j,
                categorySkuId: s.T.TIDE
            }
        },
        {
            id: 'category_anime',
            backgroundStaticSrc: p,
            backgroundVideoSrc: i,
            overflowSrcStatic: u,
            overflowSrcAnimatedBackground: d,
            overflowSrcAnimated: c,
            logoSrc: l,
            textColor: (0, r.Lq)(a.Ilk.BLACK_500),
            badge: { label: T },
            cta: {
                label: j,
                categorySkuId: s.T.ANIME_V2
            }
        },
        {
            id: 'category_galaxy',
            backgroundStaticSrc: E,
            backgroundVideoSrc: b,
            logoSrc: x,
            textColor: (0, r.Lq)(a.Ilk.WHITE_100),
            badge: { label: N },
            cta: {
                label: j,
                categorySkuId: s.T.GALAXY
            }
        },
        {
            id: 'category_disxcore',
            backgroundStaticSrc: _,
            overflowSrcStatic: h,
            logoSrc: m,
            textColor: (0, r.Lq)(a.Ilk.WHITE_100),
            badge: { label: O },
            cta: {
                label: j,
                categorySkuId: s.T.DISXCORE
            }
        },
        {
            id: 'category_cyberpunk',
            backgroundStaticSrc: C,
            backgroundVideoSrc: g,
            logoSrc: f,
            textColor: (0, r.Lq)(a.Ilk.WHITE_100),
            badge: { label: T },
            cta: {
                label: j,
                categorySkuId: s.T.CYBERPUNK
            }
        }
    ], A = e => R.filter(t => {
        var n;
        let s = null === (n = t.cta) || void 0 === n ? void 0 : n.categorySkuId;
        return null == s || null != e[s];
    }), Z = (e, t) => {
        let {
            overflowSrcStatic: n,
            overflowSrcAnimated: s,
            overflowSrcAnimatedBackground: r
        } = e;
        return null == n ? [] : t || null == s ? [n] : null == r ? [s] : [
            r,
            s
        ];
    };
