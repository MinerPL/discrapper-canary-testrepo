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
    c = n(469988),
    d = n(526383),
    u = n(210887),
    _ = n(900849),
    E = n(374939),
    h = n(901040),
    m = n(731455),
    I = n(689938),
    g = n(239181),
    p = n(849116);
function T(e) {
    let { loadId: t, onScroll: n } = e,
        T = (0, d.Z)(),
        S = (0, s.e7)([u.Z], () => u.Z.theme);
    return (
        a.useEffect(() => {
            _.Zt({
                loadId: t,
                gamesYouPlayGuilds: [],
                allGuilds: [],
                categoryId: m.U
            });
        }, [t]),
        (0, i.jsxs)(E.Z, {
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
                                      (0, i.jsx)(c.Z, { hasHub: !0 })
                                  ]
                              })
                          ]
                      })
                    : (0, i.jsx)('div', {
                          className: g.content,
                          children: (0, i.jsx)(c.Z, { hasHub: !1 })
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
