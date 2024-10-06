n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(361213),
    u = n(778569),
    _ = n(783097),
    E = n(220082),
    h = n(70097),
    m = n(768581),
    I = n(803537);
function p(e) {
    let { application: t, isHovered: n, botBannerUrl: s, botBannerUrlAnimated: r } = e,
        l = (0, u.Z)({
            applicationId: t.id,
            size: 600,
            names: ['embedded_cover']
        }),
        o = a.useMemo(() => {
            let e = (0, _.yJ)(t);
            return null != e && null != e.activity_preview_video_asset_id ? (0, d.Z)(t.id, e.activity_preview_video_asset_id) : null;
        }, [t]),
        { imageUrl: c, imageUrlAnimated: E } = a.useMemo(
            () =>
                'fetched' === l.state && null != l.url
                    ? { imageUrl: l.url }
                    : {
                          imageUrl: s,
                          imageUrlAnimated: r
                      },
            [l.state, l.url, s, r]
        ),
        m = null != c,
        p = null != o;
    if ('loading' !== l.state) {
        if (p)
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(T, {
                        isHovered: n,
                        url: o,
                        isVideo: !0
                    }),
                    m
                        ? (0, i.jsx)(g, {
                              isHovered: n,
                              url: c,
                              animatedUrl: void 0
                          })
                        : (0, i.jsx)(h.Z, {
                              src: o,
                              className: I.bannerImage,
                              muted: !0
                          })
                ]
            });
        if (m)
            return (0, i.jsx)(g, {
                isHovered: n,
                url: c,
                animatedUrl: E
            });
    }
    return null;
}
function g(e) {
    let { isHovered: t, url: n, animatedUrl: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != a
                ? (0, i.jsx)(T, {
                      isHovered: t,
                      url: a,
                      isVideo: !1
                  })
                : null,
            (0, i.jsx)('img', {
                src: n,
                alt: '',
                className: I.bannerImage
            })
        ]
    });
}
function T(e) {
    let { isHovered: t, url: n, isVideo: s } = e,
        [l, o] = a.useState(t);
    return (a.useEffect(() => {
        t && o(!0);
    }, [t]),
    l)
        ? (0, i.jsx)('div', {
              className: r()(I.activityAnimatedContainer, { [I.videoFadeOut]: !t }),
              onAnimationEnd: () => (t ? null : o(!1)),
              children: s
                  ? (0, i.jsx)(h.Z, {
                        src: n,
                        className: I.activityVideo,
                        loop: !0,
                        autoPlay: !0,
                        muted: !0
                    })
                  : (0, i.jsx)('img', {
                        src: n,
                        alt: '',
                        className: I.activityVideo
                    })
          })
        : null;
}
t.Z = function (e) {
    let { application: t, iconURL: n } = e,
        s = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        [r, d] = a.useState(!1),
        u = a.useCallback(() => {
            d(!0);
        }, []),
        h = a.useCallback(() => d(!1), []),
        T = (0, _.ye)(t),
        f = (0, o.useToken)(o.tokens.colors.BACKGROUND_PRIMARY).hex(),
        S = (0, E.ZP)(n, f),
        C = t.bot,
        { botBannerUrl: N, botBannerUrlAnimated: A } = a.useMemo(
            () =>
                (null == C ? void 0 : C.id) == null || (null == C ? void 0 : C.banner) == null
                    ? {}
                    : {
                          botBannerUrl: (0, m.aN)({
                              id: C.id,
                              banner: C.banner,
                              canAnimate: !1,
                              size: 600
                          }),
                          botBannerUrlAnimated: s
                              ? void 0
                              : (0, m.aN)({
                                    id: C.id,
                                    banner: C.banner,
                                    canAnimate: !0,
                                    size: 600
                                })
                      },
            [null == C ? void 0 : C.id, null == C ? void 0 : C.banner, s]
        );
    return (0, i.jsx)('div', {
        className: I.banner,
        style: { backgroundColor: S },
        onMouseEnter: u,
        onFocus: u,
        onMouseLeave: h,
        onBlur: h,
        children: T
            ? (0, i.jsx)(p, {
                  application: t,
                  isHovered: r,
                  botBannerUrl: null == N ? void 0 : N,
                  botBannerUrlAnimated: null == A ? void 0 : A
              })
            : null != N
              ? (0, i.jsx)(g, {
                    isHovered: r,
                    url: N,
                    animatedUrl: A
                })
              : null
    });
};
