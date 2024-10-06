r.d(t, {
    I: function () {
        return h;
    }
});
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(442837),
    l = r(780384),
    c = r(481060),
    d = r(425493),
    u = r(410030),
    f = r(984370),
    p = r(594174),
    m = r(471731),
    C = r(335131),
    _ = r(689938),
    g = r(454801);
function h(e) {
    let { isFullScreen: t, isLayer: r, onClose: s, isCatalogView: h, handleTransition: b, transparent: E } = e,
        I = (0, u.ZP)(),
        x = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        T = (null == x ? void 0 : x.isStaff()) || (null == x ? void 0 : x.isStaffPersonal()) || !1;
    return (0, a.jsx)(c.ThemeProvider, {
        theme: I,
        children: (e) =>
            (0, a.jsxs)(f.Z, {
                className: i()(e, g.headerBar, {
                    [g.fullscreenHeaderBar]: t,
                    [g.headerBarRegularBackground]: !E,
                    [g.headerBarTransparentLightBackground]: E && !(0, l.wj)(I),
                    [g.headerBarTransparentDarkBackground]: E && (0, l.wj)(I)
                }),
                transparent: E,
                toolbar: t || !T ? null : (0, a.jsx)(n.Fragment, {}),
                children: [
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            h &&
                                null != b &&
                                (0, a.jsx)(c.Clickable, {
                                    onClick: b,
                                    className: g.back,
                                    'aria-label': _.Z.Messages.BACK,
                                    children: (0, a.jsx)(c.ArrowLargeLeftIcon, {})
                                }),
                            (0, a.jsx)(m.Z, {
                                color: E ? ((0, l.wj)(I) ? 'white' : 'black') : void 0,
                                className: g.discordLogo
                            })
                        ]
                    }),
                    (0, a.jsx)(f.Z.Title, { children: _.Z.Messages.COLLECTIBLES_SHOP }),
                    h &&
                        (0, a.jsx)(f.Z.Title, {
                            className: g.shopAllHeader,
                            children: _.Z.Messages.COLLECTIBLES_SHOP_ALL
                        }),
                    t &&
                        (0, a.jsx)(d.Z, {
                            className: g.closeIcon,
                            closeAction: r ? C.DR : s,
                            keybind: 'ESC'
                        })
                ]
            })
    });
}
