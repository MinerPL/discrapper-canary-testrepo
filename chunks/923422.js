t.r(n), t(47120), t(757143);
var o = t(735250),
    r = t(470079),
    a = t(481060),
    i = t(239091),
    c = t(230711),
    l = t(493544),
    u = t(108843),
    s = t(100527),
    d = t(906732),
    _ = t(386506),
    S = t(366953),
    g = t(394644),
    E = t(606669),
    m = t(53432),
    I = t(74869),
    b = t(828064),
    T = t(308512),
    f = t(594791),
    M = t(393431),
    C = t(69021),
    p = t(981631),
    h = t(689938);
n.default = (0, u.Z)(
    function (e) {
        let { webBuildOverride: n, onSelect: t } = e,
            [u, s] = r.useState(!1),
            Z = (0, b.Z)(),
            R = (0, T.Z)(),
            N = (0, m.Z)(),
            x = (0, E.Z)(),
            A = (0, M.Z)(),
            B = (0, f.Z)(),
            G = (0, I.Z)(),
            v = (0, C.Z)(),
            { analyticsLocations: O } = (0, d.ZP)(),
            k = r.useMemo(() => (0, S.j)(), []);
        async function D() {
            try {
                s(!0), await (0, _.bF)(), window.location.reload(!0);
            } catch (e) {
                s(!1);
            }
        }
        let j = (e) => {
                switch (e) {
                    case p.oAB.GAMES:
                        return Z;
                    case p.oAB.STREAMER_MODE:
                        return R;
                    case p.oAB.APPEARANCE:
                        return N;
                    case p.oAB.ACCESSIBILITY:
                        return x;
                    case p.oAB.VOICE:
                        return A;
                    case p.oAB.TEXT:
                        return B;
                    case p.oAB.EXPERIMENTS:
                        return G;
                    case p.oAB.DEVELOPER_OPTIONS:
                        return v;
                    default:
                        return null;
                }
            },
            L = (0, g.VO)()
                .filter((e) => {
                    let { section: n } = e;
                    return n !== l.ID.HEADER && n !== l.ID.CUSTOM && n !== l.ID.DIVIDER && 'logout' !== n;
                })
                .filter((e) => null == e.predicate || e.predicate());
        return (0, o.jsx)(d.Gt, {
            value: O,
            children: (0, o.jsxs)(a.Menu, {
                navId: 'user-settings-cog',
                onClose: i.Zy,
                'aria-label': h.Z.Messages.USER_SETTINGS_ACTIONS_MENU_LABEL,
                onSelect: t,
                children: [
                    L.map((e) => {
                        let { section: n, label: t, onClick: r } = e,
                            i = n.replace(/\W/gi, '_');
                        return (0, o.jsx)(
                            a.MenuItem,
                            {
                                id: i,
                                label: t,
                                action: () =>
                                    null != r
                                        ? r()
                                        : (function (e, n) {
                                              let t = Object.values(p.oAB).filter((n) => n === e)[0];
                                              null != t && c.Z.open(t, void 0, { analyticsLocations: n });
                                          })(n, O),
                                children: j(n)
                            },
                            i
                        );
                    }),
                    e.user.isStaff() && k.length > 0
                        ? (0, o.jsx)(a.MenuItem, {
                              label: 'Build overrides',
                              id: 'build_overrides',
                              children: (0, o.jsx)(a.MenuGroup, {
                                  children: k.map((e) =>
                                      (0, o.jsx)(
                                          a.MenuRadioItem,
                                          {
                                              id: 'input-'.concat(e.payload),
                                              group: 'build_overrides',
                                              label: e.id,
                                              checked: (null == n ? void 0 : n.id) === e.id,
                                              action: async () => {
                                                  if ((null == n ? void 0 : n.id) !== e.id) 200 === (await (0, _.f0)(e.payload)).status && window.location.reload(!0);
                                              }
                                          },
                                          'input-'.concat(e.payload)
                                      )
                                  )
                              })
                          })
                        : null,
                    null != n
                        ? (0, o.jsx)(a.MenuGroup, {
                              children: (0, o.jsx)(a.MenuItem, {
                                  id: 'clear-build-override',
                                  disabled: u,
                                  label: h.Z.Messages.CLEAR_BUILD_OVERRIDE,
                                  action: D,
                                  color: 'danger'
                              })
                          })
                        : null
                ]
            })
        });
    },
    [s.Z.CONTEXT_MENU, s.Z.USER_SETTINGS_MENU]
);
