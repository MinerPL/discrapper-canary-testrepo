l.d(n, {
    Z: function () {
        return v;
    }
});
var t = l(735250);
l(470079);
var r = l(120356),
    i = l.n(r),
    a = l(481060),
    u = l(256139),
    s = l(328731),
    o = l(435439),
    c = l(206295),
    d = l(297781),
    m = l(43205),
    f = l(792125),
    p = l(231338),
    E = l(917056);
function v(e) {
    let { entry: n, channel: l, title: r, subtitle: v, thumbnailUrl: C, onClickTitle: h, onClickSubtitle: x, onClickThumbnail: _, providerIconProps: N, style: T = {} } = e,
        { primaryColor: I, secondaryColor: g } = (0, c.Z)(C);
    return (
        null != C && (T.background = 'linear-gradient(45deg, '.concat(I, ', ').concat(g, ')')),
        (0, t.jsx)(a.ThemeContextProvider, {
            theme: p.BR.DARK,
            children: (0, t.jsxs)('div', {
                'data-disable-adaptive-theme': !0,
                className: i()(E.container, (0, f.Q)(p.BR.DARK)),
                style: T,
                children: [
                    (0, t.jsx)(a.Clickable, {
                        onClick: _,
                        className: i()(E.thumbnailContainer, null != _ && E.clickable),
                        children: (0, t.jsx)(m.f, {
                            src: C,
                            constrain: 'width',
                            size: 64
                        })
                    }),
                    (0, t.jsxs)('div', {
                        className: E.infoContainer,
                        children: [
                            (0, t.jsx)(s.Z, {
                                channel: l,
                                entry: n,
                                className: E.users
                            }),
                            (0, t.jsx)(a.Spacer, { size: 2 }),
                            (0, t.jsx)(u.Z, {
                                onClick: h,
                                children: (0, t.jsx)(a.Heading, {
                                    variant: 'heading-md/medium',
                                    lineClamp: 1,
                                    className: i()(E.textPrimary, E.truncatedText),
                                    scaleFontToUserSetting: !0,
                                    children: r
                                })
                            }),
                            null != v
                                ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(a.Spacer, { size: 2 }),
                                          (0, t.jsx)(u.Z, {
                                              onClick: x,
                                              children: (0, t.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: i()(E.textSecondary, E.truncatedText),
                                                  lineClamp: 1,
                                                  scaleFontToUserSetting: !0,
                                                  children: v
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            (0, t.jsx)(d.PZ, {
                                className: E.badges,
                                entry: n,
                                location: d.Gt.EMBED
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: E.headerIcons,
                        children: null != N ? (0, t.jsx)(o.Z, { ...N }) : null
                    })
                ]
            })
        })
    );
}
