s(47120), s(724458);
var n = s(735250), a = s(470079), i = s(481060), r = s(63063), o = s(686777), l = s(113434), c = s(497505), d = s(918701), _ = s(37303), E = s(46140), u = s(981631), T = s(689938), I = s(179795);
function S(e) {
    if (null == e)
        return !1;
    let {userStatus: t} = e, s = (null == t ? void 0 : t.completedAt) != null && (null == t ? void 0 : t.claimedAt) == null, n = (null == t ? void 0 : t.enrolledAt) != null && (null == t ? void 0 : t.completedAt) == null;
    return s || n || (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU);
}
t.Z = () => {
    (0, l.jU)();
    let {
            quests: e,
            isFetchingCurrentQuests: t
        } = (0, l.J2)({ fetchPolicy: 'cache-and-network' }), s = (0, l.EH)(), N = (0, o.q)({ location: E.dr.USER_SETTINGS_GIFT_INVENTORY }), [C, m] = a.useState(!0), [A, h] = a.useState([]), [g, O] = a.useState([]), p = a.useMemo(() => C ? t ? 'unsorted' : 'pending_sort' : 'sorted', [
            C,
            t
        ]);
    a.useEffect(() => {
        m(!0);
    }, [
        t,
        s
    ]), a.useEffect(() => {
        if ('pending_sort' === p) {
            let {
                sortedQuestIds: t,
                sections: n
            } = function (e) {
                let t = new Map(e.map(e => [
                        e.id,
                        e
                    ])), s = e.sort((e, t) => {
                        var s, n, a, i, r, o;
                        let l = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.completedAt) != null, _ = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, E = (null === (a = t.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, u = (null === (i = t.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null;
                        if (l && !_ && E && !u)
                            return 0;
                        if (l && !_)
                            return -1;
                        if (E && !u)
                            return 1;
                        let T = (null === (r = e.userStatus) || void 0 === r ? void 0 : r.enrolledAt) != null, I = (null === (o = t.userStatus) || void 0 === o ? void 0 : o.enrolledAt) != null;
                        if (T && !l && I && !E) {
                            let {percentComplete: s} = (0, d.il)(e), {percentComplete: n} = (0, d.il)(t);
                            return n - s;
                        }
                        if (T && !l)
                            return -1;
                        if (I && !E)
                            return 1;
                        let S = (0, d.Mi)(e, c.jn.QUEST_BAR), N = (0, d.Mi)(t, c.jn.QUEST_BAR);
                        if (S && N)
                            return 0;
                        if (S)
                            return -1;
                        if (N)
                            return 1;
                        let C = (0, d.Mi)(e, c.jn.GIFT_INVENTORY_FOR_YOU), m = (0, d.Mi)(t, c.jn.GIFT_INVENTORY_FOR_YOU);
                        if (C && !T && !l && m && !I && !E)
                            return 0;
                        if (C && !T && !l)
                            return -1;
                        if (m && !I && !E)
                            return 1;
                        let A = l && _, h = E && u;
                        return A && !h ? 1 : !A && h ? -1 : 0;
                    }).map(e => e.id), n = [
                        {
                            location: c.jn.GIFT_INVENTORY_FOR_YOU,
                            title: T.Z.Messages.QUESTS_FOR_YOU,
                            questIds: s.filter(e => S(t.get(e)))
                        },
                        {
                            location: c.jn.GIFT_INVENTORY_OTHER,
                            title: T.Z.Messages.QUESTS_OTHER,
                            questIds: s.filter(e => !S(t.get(e)))
                        }
                    ];
                return {
                    sortedQuestIds: s,
                    sections: n
                };
            }(e.filter(e => {
                var t, n;
                let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null;
                return !(null !== (n = s.get(e.id)) && void 0 !== n && n) || a;
            }));
            h(t), O(n), m(!1);
        }
    }, [
        e,
        s,
        p
    ]);
    let R = g.every(e => {
        let {questIds: t} = e;
        return t.length > 0;
    });
    return t || 'sorted' !== p ? (0, n.jsx)(i.Spinner, { className: I.spinner }) : 0 === A.length ? null : (0, n.jsx)(i.FormSection, {
        className: I.questsContainer,
        children: (0, n.jsxs)(i.HeadingLevel, {
            component: (0, n.jsxs)('div', {
                className: I.questsHeading,
                children: [
                    N && (0, n.jsx)(i.QuestsIcon, { className: I.questsIcon }),
                    (0, n.jsx)(i.Heading, {
                        variant: 'heading-md/semibold',
                        className: I.questsHeading,
                        children: T.Z.Messages.QUESTS
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: 'text-xs/normal',
                        className: I.questsHeadingLearnMore,
                        children: T.Z.Messages.QUESTS_LEARN_MORE_LINK.format({ questsLearnMoreLink: r.Z.getArticleURL(u.BhN.QUESTS_LEARN_MORE) })
                    })
                ]
            }),
            children: [
                (0, n.jsx)(i.FormDivider, { className: I.divider }),
                N ? g.map((e, t, s) => {
                    let {
                        location: a,
                        questIds: r,
                        title: o
                    } = e;
                    if (0 === r.length)
                        return null;
                    let l = 0 === t ? 0 : s.slice(0, t).reduce((e, t) => {
                        let {questIds: s} = t;
                        return e + s.length;
                    }, 0);
                    return (0, n.jsxs)('section', {
                        className: I.questsListContainer,
                        children: [
                            R && (0, n.jsx)(i.Text, {
                                variant: 'text-xs/semibold',
                                color: 'header-secondary',
                                className: I.sectionHeader,
                                children: o
                            }),
                            r.map((e, t) => (0, n.jsx)(_.D, {
                                questId: e,
                                location: a,
                                contentPosition: t + l,
                                initiallyExpanded: !R
                            }, e))
                        ]
                    }, a);
                }) : A.map((e, t) => (0, n.jsx)(_.D, {
                    questId: e,
                    location: c.jn.GIFT_INVENTORY_FOR_YOU,
                    contentPosition: t
                }, e))
            ]
        })
    });
};
