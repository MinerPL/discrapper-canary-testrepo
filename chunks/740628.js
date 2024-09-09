s.d(n, {
    Z: function () {
        return S;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(442837),
    l = s(706898),
    r = s(481060),
    a = s(246946),
    c = s(785717),
    d = s(786366),
    u = s(323090),
    I = s(296391),
    _ = s(384816),
    E = s(389190),
    f = s(428927),
    x = s(228168),
    m = s(689938),
    Z = s(542926),
    p = s(523438);
function h(e) {
    let { section: n, subsection: s, user: i, currentUser: o, displayProfile: l, onClose: r } = e;
    return n === x.oh.ACTIVITY
        ? (0, t.jsx)(I.Z, {
              user: i,
              currentUser: o,
              onClose: r
          })
        : n === x.oh.MUTUAL_FRIENDS
          ? (0, t.jsx)(E.Z, {
                user: i,
                onClose: r
            })
          : n === x.oh.MUTUAL_GUILDS
            ? (0, t.jsx)(f.Z, {
                  user: i,
                  onClose: r
              })
            : n === x.oh.BOT_DATA_ACCESS
              ? (0, t.jsx)(d.Z, { user: i })
              : n === x.oh.BOT_INFO
                ? (0, t.jsx)(u.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: l,
                      subsection: s,
                      onClose: r
                  })
                : (0, t.jsx)(_.Z, {
                      user: i,
                      currentUser: o,
                      displayProfile: l,
                      subsection: s,
                      onClose: r
                  });
}
function S(e) {
    var n, s, d;
    let { user: u, currentUser: I, displayProfile: _, items: E, initialSection: f = x.oh.USER_INFO, initialSubsection: S, onClose: v } = e,
        { trackUserProfileAction: T } = (0, c.KZ)(),
        g = (0, o.e7)([a.Z], () => a.Z.hidePersonalInformation),
        [{ section: A, subsection: N }, j] = i.useState({
            section:
                null !==
                    (d =
                        null ===
                            (n = E.find((e) => {
                                let { section: n } = e;
                                return n === f;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== d
                    ? d
                    : null === (s = E[0]) || void 0 === s
                      ? void 0
                      : s.section,
            subsection: S
        });
    i.useEffect(() => {
        if (null == E.find((e) => e.section === A))
            j({
                section: E[0].section,
                subsection: void 0
            });
    }, [E, A]);
    let R = i.useCallback(
        (e) => {
            T({
                action: 'PRESS_SECTION',
                section: e
            }),
                j({
                    section: e,
                    subsection: void 0
                });
        },
        [T, j]
    );
    return g
        ? (0, t.jsx)('div', {
              className: p.container,
              children: (0, t.jsxs)('div', {
                  className: Z.empty,
                  children: [
                      (0, t.jsx)('div', { className: Z.emptyIconStreamerMode }),
                      (0, t.jsx)('div', {
                          className: Z.emptyText,
                          children: m.Z.Messages.STREAMER_MODE_ENABLED
                      })
                  ]
              })
          })
        : (0, t.jsxs)('div', {
              className: p.container,
              children: [
                  (0, t.jsx)(l.n, {
                      className: p.tabBar,
                      type: 'top',
                      selectedItem: A,
                      onItemSelect: R,
                      children: E.map((e) => {
                          let { section: n, text: s } = e;
                          return (0, t.jsx)(
                              l.n.Item,
                              {
                                  className: p.tabBarItem,
                                  id: n,
                                  'aria-label': s,
                                  children: (0, t.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: s
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, t.jsx)(h, {
                      items: E,
                      section: A,
                      subsection: N,
                      user: u,
                      currentUser: I,
                      displayProfile: _,
                      onClose: v
                  })
              ]
          });
}
