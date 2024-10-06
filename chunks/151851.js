n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(350810),
    u = n(579806),
    c = n(40851),
    d = n(358221),
    _ = n(540059),
    E = n(754347),
    f = n(428548),
    h = n(718759),
    p = n(679219),
    I = n(835225),
    m = n(939039),
    T = n(117795),
    S = n(358085),
    g = n(998502),
    A = n(663993),
    N = n(689938),
    O = n(211149);
let R = (0, A.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('23357'), n.e('23755'), n.e('29549'), n.e('6380'), n.e('18543'), n.e('31605'), n.e('72181'), n.e('30671'), n.e('81272'), n.e('95393'), n.e('52774'), n.e('56602'), n.e('90508'), n.e('46097'), n.e('88390'), n.e('8739'), n.e('58059'), n.e('18895'), n.e('43244'), n.e('37447'), n.e('59743'), n.e('68241'), n.e('43149'), n.e('39371'), n.e('23366')]).then(n.bind(n, 191741)),
        webpackId: 191741
    }),
    v = (e) => g.ZP.close(e),
    C = (e) => g.ZP.minimize(e),
    L = (e, t) => {
        (0, S.isMac)() && !t.altKey ? g.ZP.fullscreen(e) : g.ZP.maximize(e);
    },
    y = (e) => {
        let { children: t, windowKey: n, themeOverride: i, hasOpenLayer: s, isRefreshEnabled: l } = e,
            u = (0, r.jsx)(o.Clickable, {
                className: O.winButtonClose,
                onClick: () => v(n),
                'aria-label': N.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(f.Z, {})
            }),
            c = (0, r.jsx)(o.Clickable, {
                className: O.winButtonMinMax,
                onClick: (e) => L(n, e),
                'aria-label': N.Z.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(p.Z, {})
            }),
            d = (0, r.jsx)(o.Clickable, {
                className: O.winButtonMinMax,
                onClick: () => C(n),
                'aria-label': N.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                tabIndex: -1,
                children: (0, r.jsx)(m.Z, {})
            }),
            _ = l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [d, c, u]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [u, c, d]
                  });
        return (0, r.jsx)(o.ThemeProvider, {
            theme: i,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: a()(O.typeWindows, e, { [O.withBackgroundOverride]: !s }),
                    children: [
                        (0, r.jsx)('div', {
                            className: O.wordmarkWindows,
                            children: (0, r.jsx)(E.Z, {})
                        }),
                        t,
                        _
                    ]
                })
        });
    },
    D = (e) => {
        let { focused: t, windowKey: n, frame: i, themeOverride: s, hasOpenLayer: l, children: c } = e;
        return (0, r.jsx)(o.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, r.jsxs)(o.Clickable, {
                    className: a()(i ? O.typeMacOSWithFrame : O.typeMacOS, t ? O.focused : O.unfocused, e, { [O.withBackgroundOverride]: !l }),
                    onDoubleClick: () => g.ZP.maximize(n),
                    tabIndex: -1,
                    children: [
                        u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS
                            ? c
                            : (0, r.jsxs)('div', {
                                  className: O.macButtons,
                                  children: [
                                      (0, r.jsx)(o.Clickable, {
                                          className: O.macButtonClose,
                                          onClick: () => v(n),
                                          'aria-label': N.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(h.Z, { color: '#4c0000' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: O.macButtonMinimize,
                                          onClick: () => C(n),
                                          'aria-label': N.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(T.Z, { color: '#975500' })
                                      }),
                                      (0, r.jsx)(o.Clickable, {
                                          className: O.macButtonMaximize,
                                          onClick: (e) => L(n, e),
                                          'aria-label': N.Z.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
                                          tabIndex: -1,
                                          children: (0, r.jsx)(I.Z, { color: '#006500' })
                                      })
                                  ]
                              }),
                        i
                            ? (0, r.jsx)('div', {
                                  className: O.wordmarkMacOS,
                                  children: (0, r.jsx)(E.Z, { color: '#ffffff' })
                              })
                            : null
                    ]
                })
        });
    };
function b(e) {
    let { focused: t, type: n, windowKey: i, macOSFrame: a = !1, themeOverride: o } = e,
        u = (0, c.bp)(),
        E = (0, s.e7)([d.Z], () => d.Z.isFullscreenInContext(u)),
        f = (0, l.Z)(),
        h = (0, _.Q)('AppPanels'),
        p = h && !a ? (0, r.jsx)(R, {}) : null;
    if (E) return null;
    switch (n) {
        case S.PlatformTypes.WINDOWS:
            return (0, r.jsx)(y, {
                windowKey: i,
                themeOverride: o,
                hasOpenLayer: f,
                isRefreshEnabled: h,
                children: p
            });
        case S.PlatformTypes.OSX:
            return (0, r.jsx)(D, {
                focused: t,
                windowKey: i,
                frame: a,
                themeOverride: o,
                hasOpenLayer: f,
                children: p
            });
        default:
            return h
                ? (0, r.jsx)('div', {
                      className: O.children,
                      children: p
                  })
                : null;
    }
}
