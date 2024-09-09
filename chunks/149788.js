n.d(t, {
    X: function () {
        return T;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(749210),
    o = n(225784),
    c = n(374939),
    d = n(469988),
    u = n(526383),
    _ = n(210887),
    E = n(900849),
    h = n(481685),
    m = n(731455),
    I = n(689938),
    g = n(252065),
    p = n(242782);
function T(e) {
    let { loadId: t, onScroll: n } = e,
        T = (0, u.Z)(),
        S = (0, s.e7)([_.Z], () => _.Z.theme);
    return (
        a.useEffect(() => {
            E.Zt({
                loadId: t,
                gamesYouPlayGuilds: [],
                allGuilds: [],
                categoryId: m.U
            });
        }, [t]),
        (0, i.jsxs)(c.Z, {
            title: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE,
            description: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION,
            onScroll: n,
            bannerBackground: (0, i.jsx)(h.Z, {}),
            children: [
                T.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(r.Heading, {
                                  className: g.sectionTitle,
                                  variant: 'heading-lg/semibold',
                                  color: 'header-primary',
                                  children: I.Z.Messages.YOUR_HUB
                              }),
                              (0, i.jsxs)('div', {
                                  className: g.content,
                                  children: [
                                      T.map((e) =>
                                          (0, i.jsx)(
                                              o.Z,
                                              {
                                                  onView: () => l.Z.transitionToGuildSync(e.id),
                                                  guild: {
                                                      ...e,
                                                      presenceCount: void 0,
                                                      memberCount: void 0,
                                                      premiumSubscriptionCount: void 0,
                                                      emojis: void 0
                                                  },
                                                  theme: S
                                              },
                                              e.id
                                          )
                                      ),
                                      (0, i.jsx)(d.Z, { hasHub: !0 })
                                  ]
                              })
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: g.content,
                          children: (0, i.jsx)(d.Z, { hasHub: !1 })
                      }),
                (0, i.jsx)('div', { className: p.divider }),
                (0, i.jsxs)('div', {
                    className: p.disclaimer,
                    children: [
                        (0, i.jsxs)(r.Text, {
                            className: p.text,
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: [I.Z.Messages.MOBILE_HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION_2, ' ']
                        }),
                        (0, i.jsx)(r.Text, {
                            className: p.text,
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: I.Z.Messages.MOBILE_HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION_4
                        })
                    ]
                })
            ]
        })
    );
}
