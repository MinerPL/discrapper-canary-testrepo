n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(948789), o = n(481060), c = n(100527), d = n(252618), u = n(984370), _ = n(792125), E = n(113434), h = n(709158), I = n(563442), m = n(710914), p = n(77608), g = n(981631), T = n(689938), S = n(154549);
t.Z = function (e) {
    let {} = e, t = (0, h.Z)(c.Z.QUEST_HOME_PAGE), [n, a] = s.useState(E.W6.UNCLAIMED), {quests: C} = (0, E.bA)(n);
    s.useEffect(() => {
        !t && (0, l.uL)(g.Z5c.FRIENDS);
    }, [t]), s.useEffect(() => {
    }, []), (0, d.Tt)({ location: T.Z.Messages.QUESTS });
    let N = (0, _.Q)('dark');
    return t ? (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsxs)(u.Z, {
                toolbar: !0,
                transparent: !0,
                className: r()(N, S.headerBar),
                children: [
                    (0, i.jsx)(u.Z.Icon, {
                        icon: o.QuestsIcon,
                        'aria-hidden': !0,
                        color: 'white',
                        className: S.questIcon
                    }),
                    (0, i.jsx)(p.Z, {
                        setSelectedFilter: a,
                        selectedFilter: n
                    })
                ]
            }),
            (0, i.jsx)(o.ScrollerNone, {
                className: S.scroller,
                fade: !0,
                children: (0, i.jsx)(I.Z, { children: (0, i.jsx)(m.Z, { quests: C }) })
            })
        ]
    }) : null;
};
