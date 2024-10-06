n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(392711),
    o = n(481060),
    c = n(70097),
    d = n(626135),
    _ = n(526167),
    E = n(409100),
    u = n(831964),
    T = n(981631),
    I = n(869783),
    R = n(689938),
    g = n(916548);
let N = (e) => {
    let { name: t, title: n, description: r, descriptionCta: R, previewImage: N, videoUrl: m, shouldLoadVideo: C, isCompact: f, onClick: p, index: A } = e,
        M = (0, _.rO)(),
        S = a.useRef(null),
        [h, x] = a.useState(0),
        b = (function (e) {
            let t;
            switch (e) {
                case u.dm.EMOJIS:
                    t = g.emojisBackground;
                    break;
                case u.dm.REFERRAL_PROGRAM:
                    t = g.referralProgramBackground;
                    break;
                case u.dm.NO_LIMITS:
                    t = g.noLimitsBackground;
                    break;
                case u.dm.NEW_APP_STYLES:
                    t = g.newStylesBackground;
                    break;
                case u.dm.YOUR_SPACE:
                    t = g.yourSpaceBackground;
                    break;
                case u.dm.SERVER_PROFILES:
                    t = g.serverProfilesBackground;
                    break;
                case u.dm.SHOW_YOUR_STYLE:
                    t = g.yourStyleBackground;
            }
            return t;
        })(t),
        O = (0, l.debounce)(() => {
            d.default.track(T.rMx.PREMIUM_WHATS_NEW_BOX_CTA_CLICKED, { box_type: (0, l.snakeCase)(t) });
        }, 800),
        P = () => {
            null != S.current && ((S.current.currentTime = h), S.current.play());
        },
        v = () => {
            null != S.current && (x(S.current.currentTime), S.current.pause());
        },
        L = () =>
            (0, s.jsxs)('div', {
                className: i()({
                    [g.whatsNewTextBoxOuter]: !f,
                    [g.compactTextBox]: f
                }),
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'display-md',
                        color: 'header-primary',
                        className: i()({
                            [g.whatsNewBoxHeader]: !f,
                            [g.compactBoxHeader]: f
                        }),
                        children: n
                    }),
                    (0, s.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-normal',
                        className: g.whatsNewBoxDescription,
                        children: r
                    }),
                    null != R &&
                        (null != p
                            ? (0, s.jsx)(o.Button, {
                                  className: g.whatsNewBoxButton,
                                  onClick: () => {
                                      O(), p();
                                  },
                                  children: R
                              })
                            : (0, s.jsx)(E.Z, {
                                  className: g.whatsNewBoxButton,
                                  onClick: O,
                                  buttonText: R,
                                  color: o.Button.Colors.BRAND,
                                  look: o.Button.Looks.FILLED,
                                  showIcon: !1
                              }))
                ]
            }),
        Z = (e) => {
            let { isLeft: t } = e;
            return (0, s.jsx)('div', {
                className: i()({
                    [g.whatsNewArtContainer]: !f,
                    [g.compactBoxArtContainer]: f
                }),
                children: (0, s.jsx)(c.Z, {
                    playsInline: !0,
                    preload: C ? 'auto' : 'none',
                    muted: !0,
                    poster: N,
                    loop: !0,
                    className: i()({
                        [g.perkBoxVideo]: !f,
                        [g.leftSideArt]: t && !f,
                        [g.compactBoxVideo]: f
                    }),
                    ref: S,
                    children: (0, s.jsx)('source', {
                        src: m,
                        type: M ? I.m.MP4 : I.m.WEBM
                    })
                })
            });
        };
    return A % 2 != 0
        ? (0, s.jsxs)('div', {
              className: i()(b, {
                  [g.whatsNewBoxContainer]: !f,
                  [g.compactBoxContainer]: f
              }),
              onMouseEnter: P,
              onFocus: P,
              onBlur: v,
              onMouseLeave: v,
              children: [(0, s.jsx)(L, {}), (0, s.jsx)(Z, { isLeft: !1 })]
          })
        : (0, s.jsxs)('div', {
              className: i()(b, {
                  [g.whatsNewBoxContainer]: !f,
                  [g.compactBoxContainer]: f,
                  boxBackgroundColor: b
              }),
              onMouseEnter: P,
              onFocus: P,
              onBlur: v,
              onMouseLeave: v,
              children: [(0, s.jsx)(Z, { isLeft: !0 }), (0, s.jsx)(L, {})]
          });
};
t.Z = a.memo(function (e) {
    let { className: t, shouldLoadVideo: n, isBestOfNitro: a = !1 } = e,
        r = Object.values((0, u.ZP)(a)),
        l = a ? Object.values((0, u.__)()) : null;
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: i()(g.boxBackdrop, t),
            children: [
                (0, s.jsx)(o.Heading, {
                    className: g.whatsNewHeader,
                    variant: 'heading-xxl/extrabold',
                    children: a ? R.Z.Messages.PREMIUM_MARKETING_BEST_OF_NITRO : R.Z.Messages.WHATS_NEW
                }),
                r.map((e, t) =>
                    (0, s.jsx)(
                        N,
                        {
                            shouldLoadVideo: n,
                            ...e,
                            index: t
                        },
                        e.name
                    )
                ),
                null != l &&
                    (0, s.jsx)('div', {
                        className: g.compactBoxOuterContainer,
                        children: l.map((e, t) =>
                            (0, s.jsx)(
                                N,
                                {
                                    shouldLoadVideo: n,
                                    ...e,
                                    index: t
                                },
                                e.name
                            )
                        )
                    })
            ]
        })
    });
});
