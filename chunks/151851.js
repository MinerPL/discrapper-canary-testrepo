n.d(t, {
    Z: function () {
        return D;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(442837), s = n(481060), l = n(350810), u = n(579806), c = n(40851), d = n(358221), _ = n(754347), E = n(428548), f = n(718759), h = n(679219), p = n(835225), m = n(939039), I = n(117795), T = n(358085), g = n(792125), S = n(998502), A = n(689938), N = n(204172);
let v = e => S.ZP.close(e), O = e => S.ZP.minimize(e), R = (e, t) => {
        (0, T.isMac)() && !t.altKey ? S.ZP.fullscreen(e) : S.ZP.maximize(e);
    }, C = e => {
        let {
            windowKey: t,
            themeOverride: n,
            hasOpenLayer: i
        } = e;
        return (0, r.jsxs)('div', {
            className: a()(N.typeWindows, (0, g.Q)(n), { [N.withBackgroundOverride]: !i }),
            children: [
                (0, r.jsx)('div', {
                    className: N.wordmarkWindows,
                    children: (0, r.jsx)(_.Z, {})
                }),
                (0, r.jsx)(s.Clickable, {
                    className: N.winButtonClose,
                    onClick: () => v(t),
                    'aria-label': A.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
                    tabIndex: -1,
                    children: (0, r.jsx)(E.Z, {})
                }),
                (0, r.jsx)(s.Clickable, {
                    className: N.winButtonMinMax,
                    onClick: e => R(t, e),
                    'aria-label': A.Z.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                    tabIndex: -1,
                    children: (0, r.jsx)(h.Z, {})
                }),
                (0, r.jsx)(s.Clickable, {
                    className: N.winButtonMinMax,
                    onClick: () => O(t),
                    'aria-label': A.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                    tabIndex: -1,
                    children: (0, r.jsx)(m.Z, {})
                })
            ]
        });
    }, y = e => {
        let {
            focused: t,
            windowKey: n,
            frame: i,
            themeOverride: o,
            hasOpenLayer: l
        } = e;
        return (0, r.jsxs)(s.Clickable, {
            className: a()(i ? N.typeMacOSWithFrame : N.typeMacOS, t ? N.focused : N.unfocused, (0, g.Q)(o), { [N.withBackgroundOverride]: !l }),
            onDoubleClick: () => S.ZP.maximize(n),
            tabIndex: -1,
            children: [
                u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, r.jsx)('div', { className: N.macDragRegion }) : (0, r.jsxs)('div', {
                    className: N.macButtons,
                    children: [
                        (0, r.jsx)(s.Clickable, {
                            className: N.macButtonClose,
                            onClick: () => v(n),
                            'aria-label': A.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
                            tabIndex: -1,
                            children: (0, r.jsx)(f.Z, { color: '#4c0000' })
                        }),
                        (0, r.jsx)(s.Clickable, {
                            className: N.macButtonMinimize,
                            onClick: () => O(n),
                            'aria-label': A.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                            tabIndex: -1,
                            children: (0, r.jsx)(I.Z, { color: '#975500' })
                        }),
                        (0, r.jsx)(s.Clickable, {
                            className: N.macButtonMaximize,
                            onClick: e => R(n, e),
                            'aria-label': A.Z.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                            tabIndex: -1,
                            children: (0, r.jsx)(p.Z, { color: '#006500' })
                        })
                    ]
                }),
                i ? (0, r.jsx)('div', {
                    className: N.wordmarkMacOS,
                    children: (0, r.jsx)(_.Z, { color: '#ffffff' })
                }) : null
            ]
        });
    };
function D(e) {
    let {
            focused: t,
            type: n,
            windowKey: i,
            macOSFrame: a = !1,
            themeOverride: s
        } = e, u = (0, c.bp)(), _ = (0, o.e7)([d.Z], () => d.Z.isFullscreenInContext(u)), E = (0, l.Z)();
    if (_)
        return null;
    switch (n) {
    case T.PlatformTypes.WINDOWS:
        return (0, r.jsx)(C, {
            windowKey: i,
            themeOverride: s,
            hasOpenLayer: E
        });
    case T.PlatformTypes.OSX:
        return (0, r.jsx)(y, {
            focused: t,
            windowKey: i,
            frame: a,
            themeOverride: s,
            hasOpenLayer: E
        });
    default:
        return null;
    }
}
