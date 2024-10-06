n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250);
n(470079);
var a = n(399606),
    s = n(524437),
    l = n(481060),
    r = n(494404),
    o = n(377171),
    c = n(317632),
    d = n(602478),
    u = n(2818),
    _ = n(768943),
    E = n(742989),
    I = n(818186),
    m = n(689938),
    T = n(811304);
function N(e) {
    let { tab: t, setTab: n, children: N, badgeState: h, closePopout: C } = e,
        { showReminders: p } = E.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: f, inInbox: g } = u.Z.useExperiment({ location: 'RecentsPopout' }),
        { enabled: A } = d.Z.useExperiment({ location: 'RecentsHeader' }),
        S = (0, a.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        M = (0, a.e7)([_.Z], () => _.Z.getOverdueMessageReminderCount());
    return (0, i.jsxs)(r.h4, {
        className: T.header,
        children: [
            (0, i.jsxs)('div', {
                className: T.headerTitle,
                children: [
                    (0, i.jsx)(l.InboxIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: T.inboxIcon
                    }),
                    (0, i.jsx)(l.Text, {
                        className: T.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: m.Z.Messages.INBOX
                    }),
                    (0, i.jsxs)('div', {
                        className: T.controls,
                        children: [N, (0, i.jsx)(I.Z, { closePopout: C })]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: T.headerTabs,
                children: (0, i.jsxs)(l.TabBar, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: T.tabBar,
                    children: [
                        (0, i.jsxs)(l.TabBar.Item, {
                            id: s.X.FOR_YOU,
                            'aria-label': m.Z.Messages.FOR_YOU,
                            className: T.tab,
                            children: [
                                m.Z.Messages.FOR_YOU,
                                (null == h ? void 0 : h.badgeForYou)
                                    ? (0, i.jsx)(l.CircleBadge, {
                                          color: o.Z.STATUS_DANGER,
                                          className: T.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(l.TabBar.Item, {
                            id: s.X.UNREADS,
                            className: T.tab,
                            children: m.Z.Messages.UNREADS_TAB_LABEL
                        }),
                        (0, i.jsx)(l.TabBar.Item, {
                            'aria-label': m.Z.Messages.MENTIONS,
                            id: s.X.MENTIONS,
                            className: T.tab,
                            children: m.Z.Messages.MENTIONS
                        }),
                        A
                            ? (0, i.jsxs)(l.TabBar.Item, {
                                  'aria-label': 'game_invites',
                                  id: s.X.GAME_INVITES,
                                  className: T.tab,
                                  children: [
                                      m.Z.Messages.GAME_INVITES,
                                      S > 0
                                          ? (0, i.jsx)(l.CircleBadge, {
                                                color: o.Z.STATUS_DANGER,
                                                className: T.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        f && g
                            ? (0, i.jsx)(l.TabBar.Item, {
                                  'aria-label': m.Z.Messages.FOR_LATER,
                                  id: s.X.BOOKMARKS,
                                  className: T.tab,
                                  children: 0 === M ? m.Z.Messages.FOR_LATER : m.Z.Messages.FOR_LATER_COUNT.format({ count: M })
                              })
                            : null,
                        p && !f
                            ? (0, i.jsx)(l.TabBar.Item, {
                                  'aria-label': 'todos',
                                  id: s.X.TODOS,
                                  className: T.tab,
                                  children: 0 === M ? m.Z.Messages.FOR_LATER_TAB_REMINDERS : m.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: M })
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
