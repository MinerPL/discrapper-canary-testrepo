n.d(t, {
    R: function () {
        return E;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(239091),
    o = n(82295),
    c = n(485267),
    u = n(71585),
    d = n(703180),
    h = n(809017),
    m = n(981631),
    p = n(689938),
    _ = n(927744),
    f = n(460356);
function E(e) {
    return (null == e ? void 0 : e.id) === h.G;
}
t.Z = a.memo(function (e) {
    let t,
        { title: h, onToggleExpand: E, expanded: g, expandedCount: C } = e,
        I = (0, s.e7)([u.Z], () => u.Z.hidden),
        x = a.useCallback((e) => {
            (0, r.jW)(e, async () => {
                let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(n.bind(n, 703180));
                return () => (0, i.jsx)(e, { closePopout: r.Zy });
            });
        }, []);
    return (0, i.jsxs)(o.Z, {
        className: f.membersGroup,
        children: [
            (0, i.jsx)(l.HiddenVisually, {
                children: p.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                    title: h,
                    count: C
                })
            }),
            (0, i.jsxs)(l.Clickable, {
                onClick: (e) => {
                    if (e.currentTarget === e.target || e.currentTarget.contains(e.target)) return I ? (0, c.lY)() : C > 3 ? E() : (0, m.dG4)();
                },
                onContextMenu: x,
                tag: 'span',
                'aria-hidden': !0,
                className: _.headerContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.header,
                        children: [
                            (0, i.jsxs)('span', {
                                children: [h, ' \u2014 ', C]
                            }),
                            (0, i.jsx)(d.default, {})
                        ]
                    }),
                    C <= 3 && !I
                        ? null
                        : ((t = I ? (0, i.jsx)(l.ChevronSmallUpIcon, { className: _.toggleExpandIcon }) : g ? (0, i.jsx)(l.ChevronSmallDownIcon, { className: _.toggleExpandIcon }) : (0, i.jsx)(l.ChevronSmallRightIcon, { className: _.toggleExpandIcon })),
                          (0, i.jsx)(l.FocusRing, {
                              children: (0, i.jsx)('div', {
                                  tabIndex: 0,
                                  className: _.toggleExpandIcon,
                                  children: t
                              })
                          }))
                ]
            })
        ]
    });
});
