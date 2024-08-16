n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(442837),
    o = n(481060),
    c = n(749210),
    u = n(110924),
    d = n(410030),
    h = n(58540),
    m = n(100527),
    p = n(906732),
    _ = n(527379),
    f = n(184301),
    E = n(318661),
    g = n(502762),
    C = n(271383),
    I = n(594174),
    x = n(189357),
    T = n(718617),
    N = n(327250),
    v = n(228168),
    S = n(662917);
function Z(e) {
    let { userId: t, guildId: n, onClose: s, className: Z, infoPanelClassName: A, style: M } = e,
        b = (0, x.ms)(n),
        R = (0, r.e7)([I.default], () => I.default.getUser(t), [t]),
        j = (0, r.e7)([C.ZP], () => C.ZP.getMember(n, t), [n, t]),
        [L, P] = a.useState(null == R || null == j),
        O = (0, u.Z)(j),
        y = a.useRef(null),
        { analyticsLocations: D } = (0, p.ZP)(m.Z.GUILD_MEMBER_MOD_VIEW),
        k = (0, E.ZP)(t, n),
        U = (0, d.ZP)();
    return (a.useEffect(() => {
        !b && s();
    }, [b, s]),
    a.useEffect(() => {
        null != O && null == j && !L && s();
    }, [L, j, s, O]),
    a.useEffect(() => {
        null != R && null != j && P(!1);
    }, [R, j]),
    a.useEffect(() => {
        let e = null == j;
        return (
            !L && e && (y.current = window.setTimeout(s, 500)),
            () => {
                null != y.current && window.clearTimeout(y.current);
            }
        );
    }, [L, j, s]),
    (0, h.$)({ [n]: [t] }),
    a.useEffect(() => {
        (async function e() {
            let e = [
                c.Z.requestMembersById(n, [t]),
                (0, _.nb)(n, [t]),
                (0, f.Z)(t, void 0, {
                    guildId: n,
                    dispatchWait: !0
                })
            ];
            await Promise.all(e), P(!1);
        })();
    }, [n, t]),
    b)
        ? L || null == R || null == j
            ? (0, i.jsx)('div', {
                  className: l()(S.sidebarContainer, S.loadingContainer, Z),
                  style: M,
                  children: (0, i.jsx)(o.Spinner, {
                      animated: !0,
                      type: L ? o.Spinner.Type.SPINNING_CIRCLE : o.Spinner.Type.CHASING_DOTS
                  })
              })
            : (0, i.jsx)(p.Gt, {
                  value: D,
                  children: (0, i.jsx)('div', {
                      className: l()(S.sidebarContainer, Z),
                      style: M,
                      children: (0, i.jsx)(g.Z, {
                          user: R,
                          displayProfile: k,
                          profileType: v.y0.MODAL,
                          themeOverride: U,
                          forceShowPremium: !0,
                          className: S.profileThemedContainer,
                          children: (0, i.jsxs)('div', {
                              className: S.innerContainer,
                              children: [
                                  (0, i.jsx)(N.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: s
                                  }),
                                  (0, i.jsx)(T.Z, {
                                      userId: t,
                                      guildId: n,
                                      onClose: s,
                                      className: A
                                  })
                              ]
                          })
                      })
                  })
              })
        : null;
}
