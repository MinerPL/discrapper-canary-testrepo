n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(617136),
    o = n(113434),
    c = n(497505),
    d = n(602667),
    u = n(439826),
    _ = n(43779),
    E = n(981631),
    h = n(882442);
function m(e) {
    let { quest: t, className: n, questContent: s, contentPosition: m, rowIndex: I } = e,
        [g, p] = a.useState(!1),
        [T, S] = a.useState([]),
        f = (0, o.qb)(t),
        C = a.useCallback(() => {
            p(!0),
                (0, l.dA)({
                    questId: t.id,
                    event: E.rMx.QUEST_HOVER,
                    properties: (0, l.mH)(s)
                });
        }, [p, s, t.id]),
        N = a.useCallback(() => {
            p(!1);
        }, [p]);
    return (0, i.jsx)(d.A, {
        questOrQuests: t,
        questContent: s,
        questContentPosition: m,
        questContentRowIndex: I,
        trackGuildAndChannelMetadata: s === c.jn.QUESTS_EMBED,
        children: (e) =>
            (0, i.jsxs)('div', {
                id: 'quest-tile-'.concat(t.id),
                ref: (t) => {
                    e.current = t;
                },
                className: r()(h.container, n),
                onMouseEnter: C,
                onMouseLeave: N,
                children: [
                    (0, i.jsx)(u.Z, {
                        quest: t,
                        isHovering: g,
                        errorHints: T,
                        warningHints: f
                    }),
                    (0, i.jsx)(_.Z, {
                        quest: t,
                        questContent: s,
                        isHovering: g,
                        contentPosition: m,
                        rowIndex: I,
                        onReceiveErrorHints: S
                    })
                ]
            })
    });
}
