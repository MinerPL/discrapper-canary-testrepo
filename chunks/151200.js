l.d(n, {
    Z: function () {
        return h;
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
    f = l(313201),
    p = l(792125),
    E = l(231338),
    v = l(689938),
    C = l(917056);
function h(e) {
    let { entry: n, channel: l, title: r, subtitle: h, thumbnailUrl: N, onClickTitle: T, onClickSubtitle: _, onClickThumbnail: x, providerIconProps: I, style: S = {} } = e,
        g = (0, f.Dt)(),
        { primaryColor: O, secondaryColor: Z } = (0, c.Z)(N);
    return (
        null != N && (S.background = 'linear-gradient(45deg, '.concat(O, ', ').concat(Z, ')')),
        (0, t.jsx)(a.ThemeContextProvider, {
            theme: E.BR.DARK,
            children: (0, t.jsxs)('figure', {
                'aria-roledescription': v.Z.Messages.CONTENT_INVENTORY_ACTIVITY_CARD_ARIA_ROLE_DESCRIPTION,
                'aria-labelledby': g,
                'data-disable-adaptive-theme': !0,
                className: i()(C.container, (0, p.Q)(E.BR.DARK)),
                style: S,
                children: [
                    (0, t.jsx)(a.Clickable, {
                        onClick: x,
                        className: i()(C.thumbnailContainer, null != x && C.clickable),
                        children: (0, t.jsx)(m.f, {
                            src: N,
                            constrain: 'width',
                            size: 64
                        })
                    }),
                    (0, t.jsxs)('div', {
                        className: C.infoContainer,
                        children: [
                            (0, t.jsx)(s.Z, {
                                channel: l,
                                entry: n,
                                className: C.users
                            }),
                            (0, t.jsx)(a.Spacer, { size: 2 }),
                            (0, t.jsx)(u.Z, {
                                onClick: T,
                                children: (0, t.jsx)(a.Heading, {
                                    id: g,
                                    variant: 'heading-md/medium',
                                    lineClamp: 1,
                                    className: i()(C.textPrimary, C.truncatedText),
                                    scaleFontToUserSetting: !0,
                                    children: r
                                })
                            }),
                            null != h
                                ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(a.Spacer, { size: 2 }),
                                          (0, t.jsx)(u.Z, {
                                              onClick: _,
                                              children: (0, t.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  className: i()(C.textSecondary, C.truncatedText),
                                                  lineClamp: 1,
                                                  scaleFontToUserSetting: !0,
                                                  children: h
                                              })
                                          })
                                      ]
                                  })
                                : null,
                            (0, t.jsx)(d.PZ, {
                                className: C.badges,
                                entry: n,
                                location: d.Gt.EMBED
                            })
                        ]
                    }),
                    (0, t.jsx)('div', {
                        className: C.headerIcons,
                        children: null != I ? (0, t.jsx)(o.Z, { ...I }) : null
                    })
                ]
            })
        })
    );
}
