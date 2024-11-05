n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(607070),
    c = n(361213),
    d = n(778569),
    u = n(783097),
    h = n(70097),
    m = n(768581),
    p = n(829409),
    g = n(131795);
let f = 16 / 9,
    _ = 17 / 6;
function E(e) {
    let { application: t, isHovered: n, botBannerUrl: a, botBannerUrlAnimated: s } = e,
        o = (0, d.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        m = r.useMemo(() => {
            let e = (0, u.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, c.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        { imageUrl: p, imageUrlAnimated: f } = r.useMemo(
            () =>
                'fetched' === o.state && null != o.url
                    ? { imageUrl: o.url }
                    : {
                          imageUrl: a,
                          imageUrlAnimated: s
                      },
            [o.state, o.url, a, s]
        ),
        _ = null != p,
        E = null != m;
    if ('loading' !== o.state) {
        if (E)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    _
                        ? (0, i.jsx)(I, {
                              isHovered: n,
                              url: p,
                              animatedUrl: void 0
                          })
                        : (0, i.jsx)(h.Z, {
                              src: m,
                              className: l()(g.bannerImage, g.bannerMedia),
                              muted: !0
                          }),
                    (0, i.jsx)(C, {
                        isHovered: n,
                        url: m,
                        isVideo: !0
                    })
                ]
            });
        if (_)
            return (0, i.jsx)(I, {
                isHovered: n,
                url: p,
                animatedUrl: f
            });
    }
    return null;
}
function I(e) {
    let { isHovered: t, url: n, animatedUrl: a } = e,
        [s, o] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: '',
                className: l()(g.bannerImage, g.bannerMedia, { [g.loaded]: s }),
                onLoad: () => o(!0)
            }),
            null != a
                ? (0, i.jsx)(C, {
                      isHovered: t,
                      url: a,
                      isVideo: !1
                  })
                : null
        ]
    });
}
function C(e) {
    let { isHovered: t, url: n, isVideo: a } = e,
        [s, o] = r.useState(!1),
        [c, d] = r.useState(t);
    return (r.useEffect(() => {
        t && d(!0);
    }, [t]),
    c)
        ? (0, i.jsx)('div', {
              className: l()(g.bannerAnimatedContainer, {
                  [g.videoFadeOut]: !t,
                  [g.videoFadeIn]: t && s
              }),
              onAnimationEnd: () => (t ? null : d(!1)),
              children: a
                  ? (0, i.jsx)(h.Z, {
                        src: n,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0,
                        className: g.bannerMedia,
                        onLoadedData: () => o(!0)
                    })
                  : (0, i.jsx)('img', {
                        src: n,
                        alt: '',
                        className: g.bannerMedia,
                        onLoad: () => o(!0)
                    })
          })
        : null;
}
t.Z = function (e) {
    let { application: t, bannerType: n, iconURL: a } = e,
        l = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        [c, d] = r.useState(!1),
        h = r.useCallback(() => {
            d(!0);
        }, []),
        C = r.useCallback(() => d(!1), []),
        v = (0, u.ye)(t),
        S = (0, p.u)(a),
        N = t.bot,
        { botBannerUrl: T, botBannerUrlAnimated: x } = r.useMemo(
            () =>
                (null == N ? void 0 : N.id) == null || (null == N ? void 0 : N.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, m.aN)({
                              id: N.id,
                              banner: N.banner,
                              canAnimate: !1,
                              size: 600
                          }),
                          botBannerUrlAnimated: l
                              ? void 0
                              : (0, m.aN)({
                                    id: N.id,
                                    banner: N.banner,
                                    canAnimate: !0,
                                    size: 600
                                })
                      },
            [null == N ? void 0 : N.id, null == N ? void 0 : N.banner, l]
        );
    return (0, i.jsx)('div', {
        className: g.banner,
        style: {
            backgroundImage: S,
            aspectRatio: 'card' === n ? f : _
        },
        onMouseEnter: h,
        onFocus: h,
        onMouseLeave: C,
        onBlur: C,
        children:
            'card' === n && v
                ? (0, i.jsx)(E, {
                      application: t,
                      isHovered: c,
                      botBannerUrl: null == T ? void 0 : T,
                      botBannerUrlAnimated: null == x ? void 0 : x
                  })
                : null != T
                  ? (0, i.jsx)(I, {
                        isHovered: c,
                        url: T,
                        animatedUrl: x
                    })
                  : null
    });
};
