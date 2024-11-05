n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(350810),
    u = n(579806),
    c = n(40851),
    d = n(358221),
    f = n(540059),
    _ = n(754347),
    h = n(428548),
    p = n(718759),
    m = n(679219),
    g = n(835225),
    E = n(939039),
    v = n(117795),
    I = n(358085),
    S = n(998502),
    T = n(388032),
    b = n(211149);
let y = (e) => S.ZP.close(e),
    A = (e) => S.ZP.minimize(e),
    N = (e, t) => {
        (0, I.isMac)() && !t.altKey ? S.ZP.fullscreen(e) : S.ZP.maximize(e);
    },
    C = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: s, isRefreshEnabled: l } = e,
            u = (0, r.jsx)(o.Clickable, {
                className: b.winButtonClose,
                onClick: () => y(n),
                'aria-label': T.intl.string(T.t.ZdNUj4),
                tabIndex: -1,
                children: (0, r.jsx)(h.Z, {})
            }),
            c = (0, r.jsx)(o.Clickable, {
                className: b.winButtonMinMax,
                onClick: (e) => N(n, e),
                'aria-label': T.intl.string(T.t.G1u0hI),
                tabIndex: -1,
                children: (0, r.jsx)(m.Z, {})
            }),
            d = (0, r.jsx)(o.Clickable, {
                className: b.winButtonMinMax,
                onClick: () => A(n),
                'aria-label': T.intl.string(T.t.CxOC4e),
                tabIndex: -1,
                children: (0, r.jsx)(E.Z, {})
            }),
            f = l
                ? (0, r.jsxs)('div', {
                      className: b.winButtons,
                      children: [d, c, u]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [u, c, d]
                  });
        return (0, r.jsx)(o.ThemeProvider, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: a()(b.typeWindows, e, { [b.withBackgroundOverride]: !s }),
                    children: [
                        (0, r.jsx)('div', {
                            className: b.wordmarkWindows,
                            children: (0, r.jsx)(_.Z, {})
                        }),
                        t,
                        f
                    ]
                })
        });
    },
    R = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: s, hasOpenLayer: l, children: c } = e;
        return (0, r.jsx)(o.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)(o.Clickable, {
                    className: a()(i ? b.typeMacOSWithFrame : b.typeMacOS, t ? b.focused : b.unfocused, e, { [b.withBackgroundOverride]: !l }),
                    onDoubleClick: () => S.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? c
                            : (0, r.jsxs)('div', {
                                  className: b.macButtons,
                                  children: [
                                      (0, r.jsx)(o.Clickable, {
                                          className: b.macButtonClose,
                                          onClick: () => y(n),
                                          'aria-label': T.intl.string(T.t.ZdNUj4),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(p.Z, { color: '#4c0000' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: b.macButtonMinimize,
                                          onClick: () => A(n),
                                          'aria-label': T.intl.string(T.t.CxOC4e),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(v.Z, { color: '#975500' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: b.macButtonMaximize,
                                          onClick: (e) => N(n, e),
                                          'aria-label': T.intl.string(T.t['2nM3Pj']),
                                          tabIndex: -1,
                                          children: (0, r.jsx)(g.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        i
                            ? (0, r.jsx)('div', {
                                  className: b.wordmarkMacOS,
                                  children: (0, r.jsx)(_.Z, { color: '#ffffff' })
                              })
                            : null
                    ]
                })
        });
    };
function O(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: o } = e,
        u = (0, c.bp)(),
        _ = (0, s.e7)([d.Z], () => d.Z.isFullscreenInContext(u)),
        h = (0, l.Z)(),
        p = (0, f.Q)('AppPanels');
    if (_) return null;
    switch (n) {
        case I.PlatformTypes.WINDOWS:
            return (0, r.jsx)(C, {
                windowKey: i,
                themeOverride: o,
                hasOpenLayer: h,
                isRefreshEnabled: p
            });
        case I.PlatformTypes.OSX:
            return (0, r.jsx)(R, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: o,
                hasOpenLayer: h
            });
        default:
            return null;
    }
}
