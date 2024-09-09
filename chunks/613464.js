n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(481060),
    c = n(749210),
    u = n(110924),
    d = n(410030),
    h = n(58540),
    m = n(100527),
    p = n(906732),
    _ = n(527379),
    f = n(687158),
    E = n(184301),
    g = n(502762),
    C = n(271383),
    I = n(594174),
    x = n(189357),
    T = n(718617),
    v = n(327250),
    S = n(662917);
function N(e) {
    let { userId: t, guildId: n, onClose: a, className: N, infoPanelClassName: A, style: Z } = e,
        M = (0, x.ms)(n),
        b = (0, r.e7)([I.default], () => I.default.getUser(t), [t]),
        R = (0, r.e7)([C.ZP], () => C.ZP.getMember(n, t), [n, t]),
        [L, j] = s.useState(null == b || null == R),
        P = (0, u.Z)(R),
        O = s.useRef(null),
        { analyticsLocations: y } = (0, p.ZP)(m.Z.GUILD_MEMBER_MOD_VIEW),
        D = (0, f.ZP)(t, n),
        k = (0, d.ZP)();
    return (s.useEffect(() => {
        !M && a();
    }, [M, a]),
    s.useEffect(() => {
        null != P && null == R && !L && a();
    }, [L, R, a, P]),
    s.useEffect(() => {
        null != b && null != R && j(!1);
    }, [b, R]),
    s.useEffect(() => {
        let e = null == R;
        return (
            !L && e && (O.current = window.setTimeout(a, 500)),
            () => {
                null != O.current && window.clearTimeout(O.current);
            }
        );
    }, [L, R, a]),
    (0, h.$)({ [n]: [t] }),
    s.useEffect(() => {
        (async function e() {
            let e = [
                c.Z.requestMembersById(n, [t]),
                (0, _.nb)(n, [t]),
                (0, E.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0
                })
            ];
            await Promise.all(e), j(!1);
        })();
    }, [n, t]),
    M)
        ? L || null == b || null == R
            ? (0, i.jsx)('div', {
                  className: l()(S.sidebarContainer, S.loadingContainer, N),
                  style: Z,
                  children: (0, i.jsx)(o.Spinner, {
                      animated: !0,
                      type: L ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
                  })
              })
            : (0, i.jsx)(p.Gt, {
                  value: y,
                  children: (0, i.jsx)('div', {
                      className: l()(S.sidebarContainer, N),
                      style: Z,
                      children: (0, i.jsx)(g.Z, {
                          user: b,
                          displayProfile: D,
                          profileType: null,
                          themeOverride: k,
                          forceShowPremium: !0,
                          className: S.profileThemedContainer,
                          children: (0, i.jsxs)('div', {
                              className: S.innerContainer,
                              children: [
                                  (0, i.jsx)(v.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: a
                                  }),
                                  (0, i.jsx)(T.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: a,
                                      className: A
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
