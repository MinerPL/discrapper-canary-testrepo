n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(393238),
    c = n(605236),
    u = n(279745),
    d = n(921944),
    h = n(689938),
    p = n(121865);
t.Z = l.forwardRef(function (e, t) {
    let { body: n, header: r, artClassName: _, headerClassName: f, contentClassName: g, tryItText: m, dismissText: C, onTryFeature: I, onClose: E, className: N, inlineArt: x = !1, isPremiumFeature: S = !1, shouldUseHorizontalButtons: v = !1, showGIFTag: Z = !1, dismissibleContent: T, position: L = 'top', align: A = 'center', art: b, isPremiumEarlyAccess: M = !1, maxWidth: R = 280 } = e,
        O = v ? s.Button.Sizes.LARGE : s.Button.Sizes.MAX,
        [P, y] = l.useState(!1),
        { ref: j, width: D } = (0, o.Z)();
    function w(e) {
        (0, c.EW)(T, { dismissAction: e });
    }
    return (
        l.useEffect(() => {
            var e, t;
            let n = (null !== (t = null === (e = j.current) || void 0 === e ? void 0 : e.scrollWidth) && void 0 !== t ? t : 0) + 64;
            !P && n > R && y(!0);
        }, [P, D, j, R]),
        l.useEffect(() => {
            (0, c.kk)(T);
        }, [T]),
        (0, i.jsx)('div', {
            className: N,
            ref: t,
            children: (0, i.jsxs)('div', {
                className: a()(p.content, g, {
                    [p.contentNoArt]: null == _ || x,
                    [p.contentPremium]: S || M
                }),
                children: [
                    (0, i.jsxs)('div', {
                        className: a()(_, x ? p.artInline : p.artAbsolute),
                        children: [Z && (0, i.jsx)(u.Z, { className: p.gifTag }), b]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.body,
                        children: [
                            (0, i.jsxs)(s.Heading, {
                                className: a()(S ? p.headerWithPremiumIcon : p.header, f),
                                variant: 'heading-md/bold',
                                color: 'always-white',
                                children: [
                                    S && !M
                                        ? (0, i.jsx)(s.NitroWheelIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.premiumIcon
                                          })
                                        : null,
                                    M
                                        ? (0, i.jsxs)(s.Text, {
                                              color: 'always-white',
                                              variant: 'eyebrow',
                                              className: p.earlyAccessBadgeContainer,
                                              children: [
                                                  (0, i.jsx)(s.NitroWheelIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: p.earlyAccessIcon
                                                  }),
                                                  (0, i.jsx)('span', {
                                                      className: p.earlyAccessText,
                                                      children: h.Z.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                                  })
                                              ]
                                          })
                                        : null,
                                    r
                                ]
                            }),
                            null == n
                                ? null
                                : 'string' == typeof n
                                  ? (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'always-white',
                                        children: n
                                    })
                                  : n
                        ]
                    }),
                    (0, i.jsx)('div', {
                        ref: j,
                        className: P || !v ? p.buttonContainerVertical : p.buttonContainerHorizontal,
                        children:
                            null != I
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(s.Button, {
                                              className: p.button,
                                              size: O,
                                              onClick: (e) => {
                                                  null == E || E(e), I(e), w(d.L.PRIMARY);
                                              },
                                              color: S || M ? s.Button.Colors.BRAND_INVERTED : s.Button.Colors.WHITE,
                                              children: null != m ? m : h.Z.Messages.EDUCATION_NEW_FEATURE_TRY_IT
                                          }),
                                          (0, i.jsx)(s.Button, {
                                              className: p.button,
                                              size: O,
                                              onClick: (e) => {
                                                  null == E || E(e), w(d.L.DISMISS);
                                              },
                                              color: S || M ? s.Button.Colors.WHITE : s.Button.Colors.BRAND,
                                              look: S || M ? s.Button.Looks.LINK : s.Button.Looks.FILLED,
                                              children: null != C ? C : h.Z.Messages.EDUCATION_NEW_FEATURE_DISMISS
                                          })
                                      ]
                                  })
                                : (0, i.jsx)(s.Button, {
                                      className: p.button,
                                      size: s.Button.Sizes.MAX,
                                      onClick: (e) => {
                                          null == E || E(e), w(d.L.PRIMARY);
                                      },
                                      color: s.Button.Colors.WHITE,
                                      children: h.Z.Messages.EDUCATION_NEW_FEATURE_CONFIRM
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: a()(p.pointer, {
                            [p.bottomPointer]: 'top' === L,
                            [p.centerLeftPointer]: 'right' === L && 'center' === A,
                            [p.topLeftPointer]: 'right' === L && 'top' === A
                        })
                    })
                ]
            })
        })
    );
});
