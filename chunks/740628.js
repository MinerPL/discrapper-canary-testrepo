t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(442837),
    s = t(706898),
    r = t(481060),
    c = t(246946),
    a = t(785717),
    d = t(786366),
    u = t(323090),
    f = t(296391),
    m = t(384816),
    p = t(389190),
    x = t(428927),
    I = t(228168),
    h = t(388032),
    v = t(519294),
    g = t(722849);
function Z(e) {
    let { section: n, subsection: t, user: l, currentUser: o, displayProfile: s, onClose: r } = e;
    return n === I.oh.ACTIVITY
        ? (0, i.jsx)(f.Z, {
              profileGuildId: null == s ? void 0 : s.guildId,
              user: l,
              currentUser: o,
              onClose: r
          })
        : n === I.oh.MUTUAL_FRIENDS
          ? (0, i.jsx)(p.Z, {
                user: l,
                onClose: r
            })
          : n === I.oh.MUTUAL_GUILDS
            ? (0, i.jsx)(x.Z, {
                  user: l,
                  onClose: r
              })
            : n === I.oh.BOT_DATA_ACCESS
              ? (0, i.jsx)(d.Z, { user: l })
              : n === I.oh.BOT_INFO
                ? (0, i.jsx)(u.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: t,
                      onClose: r
                  })
                : (0, i.jsx)(m.Z, {
                      user: l,
                      currentUser: o,
                      displayProfile: s,
                      subsection: t,
                      onClose: r
                  });
}
function _(e) {
    var n, t, d;
    let { user: u, currentUser: f, displayProfile: m, items: p, initialSection: x = I.oh.USER_INFO, initialSubsection: _, onClose: b } = e,
        { trackUserProfileAction: j } = (0, a.KZ)(),
        E = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
        [{ section: T, subsection: N }, S] = l.useState({
            section:
                null !==
                    (d =
                        null ===
                            (n = p.find((e) => {
                                let { section: n } = e;
                                return n === x;
                            })) || void 0 === n
                            ? void 0
                            : n.section) && void 0 !== d
                    ? d
                    : null === (t = p[0]) || void 0 === t
                      ? void 0
                      : t.section,
            subsection: _
        });
    l.useEffect(() => {
        if (null == p.find((e) => e.section === T))
            S({
                section: p[0].section,
                subsection: void 0
            });
    }, [p, T]);
    let y = l.useCallback(
        (e) => {
            j({
                action: 'PRESS_SECTION',
                section: e
            }),
                S({
                    section: e,
                    subsection: void 0
                });
        },
        [j, S]
    );
    return E
        ? (0, i.jsx)('div', {
              className: g.container,
              children: (0, i.jsxs)('div', {
                  className: v.empty,
                  children: [
                      (0, i.jsx)('div', { className: v.emptyIconStreamerMode }),
                      (0, i.jsx)('div', {
                          className: v.emptyText,
                          children: h.intl.string(h.t.Br1ls7)
                      })
                  ]
              })
          })
        : (0, i.jsxs)('div', {
              className: g.container,
              children: [
                  (0, i.jsx)(s.n, {
                      className: g.tabBar,
                      type: 'top',
                      selectedItem: T,
                      onItemSelect: y,
                      children: p.map((e) => {
                          let { section: n, text: t } = e;
                          return (0, i.jsx)(
                              s.n.Item,
                              {
                                  className: g.tabBarItem,
                                  id: n,
                                  'aria-label': t,
                                  children: (0, i.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: t
                                  })
                              },
                              n
                          );
                      })
                  }),
                  (0, i.jsx)(Z, {
                      items: p,
                      section: T,
                      subsection: N,
                      user: u,
                      currentUser: f,
                      displayProfile: m,
                      onClose: b
                  })
              ]
          });
}
