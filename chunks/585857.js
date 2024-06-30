n.d(t, {
    Q: function () {
        return T;
    }
});
var s = n(735250);
n(470079);
var o = n(120356), r = n.n(o), a = n(533627), i = n(432594), l = n(481060), c = n(230711), d = n(231757), u = n(617136), p = n(497505), x = n(796111), m = n(46140), g = n(981631), C = n(689938), f = n(600852);
function h(e) {
    let {
        quest: t,
        isConnected: n,
        consoleType: o
    } = e;
    return (0, s.jsx)(l.Clickable, {
        className: f.connectConsoleButtonWrapper,
        onClick: () => {
            (0, u._3)({
                questId: t.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.CONNECT_CONSOLE
            }), (0, d.Z)({ platformType: o });
        },
        children: o === g.ABu.PLAYSTATION ? (0, s.jsx)(a.K, {
            colorClass: r()(f.connectConsoleButton, n ? f.playstationButtonConnected : f.connectConsoleButtonUnconnected),
            size: 'sm'
        }) : (0, s.jsx)(i.a, {
            colorClass: r()(f.connectConsoleButton, n ? f.xboxButtonConnected : f.connectConsoleButtonUnconnected),
            size: 'sm'
        })
    });
}
function _(e) {
    let {
        text: t,
        quest: n
    } = e;
    return (0, s.jsx)(l.Clickable, {
        className: f.showConnectionsButton,
        onClick: () => {
            (0, u._3)({
                questId: n.id,
                questContent: p.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
            }), c.Z.open(g.oAB.CONNECTIONS);
        },
        children: (0, s.jsx)(l.Text, {
            'aria-label': t,
            color: 'none',
            variant: 'text-xxs/normal',
            children: t
        })
    });
}
function E(e) {
    let {
            quest: t,
            xboxAccounts: n,
            playstationAccounts: o,
            xboxAndPlaystationAccounts: a
        } = e, i = a.slice(0, 2), c = a.length > 0, d = n.length > 0, u = o.length > 0;
    return (0, s.jsxs)('div', {
        className: f.inlineConsoleConnectionDetails,
        children: [
            (0, s.jsxs)('div', {
                className: f.inlineConsoleConnectionDetailsUpper,
                children: [
                    (0, s.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-xxs/normal',
                        children: c ? C.Z.Messages.QUESTS_CONNECTED : C.Z.Messages.QUESTS_SELECT_TO_START
                    }),
                    (0, s.jsxs)('div', {
                        className: f.inlineConsoleConnectionDetailsIcons,
                        children: [
                            (0, s.jsx)(h, {
                                consoleType: g.ABu.PLAYSTATION,
                                isConnected: u,
                                quest: t
                            }),
                            (0, s.jsx)('div', { className: f.consoleIconDivider }),
                            (0, s.jsx)(h, {
                                consoleType: g.ABu.XBOX,
                                isConnected: d,
                                quest: t
                            })
                        ]
                    })
                ]
            }),
            c && (0, s.jsxs)('div', {
                className: f.inlineConsoleConnectionDetailsLower,
                children: [
                    i.map((e, t) => (0, s.jsxs)('div', {
                        className: r()(f.inlineConsoleConnectionDetailsLowerItem, t > 0 ? f.marginTop4px : void 0),
                        children: [
                            (0, s.jsx)(l.Text, {
                                color: 'header-secondary',
                                variant: 'text-xxs/normal',
                                children: e.type === g.ABu.XBOX ? C.Z.Messages.QUESTS_XBOX_ID : C.Z.Messages.QUESTS_PSN_ONLINE_ID_V2
                            }),
                            (0, s.jsx)(l.Text, {
                                color: 'header-secondary',
                                variant: 'text-xxs/normal',
                                children: e.name
                            })
                        ]
                    }, t)),
                    a.length > 2 && (0, s.jsx)(_, {
                        text: C.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
                        quest: t
                    })
                ]
            })
        ]
    });
}
function S(e) {
    let {
        xboxAndPlaystationAccounts: t,
        quest: n
    } = e;
    return t.length > 0 ? (0, s.jsx)(_, {
        text: C.Z.Messages.QUESTS_SHOW_CONNECTIONS,
        quest: n
    }) : null;
}
function T(e) {
    let t = (0, x.P)({ location: m.dr.QUESTS_BAR });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.Text, {
                color: 'text-muted',
                variant: 'text-xs/medium',
                children: C.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT
            }),
            t ? (0, s.jsx)(E, { ...e }) : (0, s.jsx)(S, { ...e })
        ]
    });
}
