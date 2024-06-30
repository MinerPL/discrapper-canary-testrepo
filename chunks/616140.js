i.d(n, {
    Z: function () {
        return x;
    }
}), i(47120);
var t = i(735250), o = i(470079), s = i(442837), l = i(706898), a = i(481060), r = i(246946), c = i(543595), d = i(785717), u = i(100849), I = i(487922), E = i(944546), _ = i(470900), f = i(988246), Z = i(834534), m = i(228168), S = i(784204);
function v(e) {
    let {
        section: n,
        subsection: i,
        user: o,
        currentUser: s,
        displayProfile: l,
        onClose: a
    } = e;
    return n === m.oh.ACTIVITY ? (0, t.jsx)(u.Z, {
        showActions: (null == s ? void 0 : s.id) !== o.id,
        user: o,
        type: c.Y.SIMPLIFIED_PROFILE,
        onClose: a
    }) : n === m.oh.MUTUAL_FRIENDS ? (0, t.jsx)(E.Z, {
        user: o,
        onClose: a
    }) : n === m.oh.MUTUAL_GUILDS ? (0, t.jsx)(_.Z, {
        user: o,
        onClose: a
    }) : n === m.oh.BOT_DATA_ACCESS ? (0, t.jsx)(I.Z, { user: o }) : (0, t.jsx)(Z.Z, {
        user: o,
        currentUser: s,
        displayProfile: l,
        subsection: i,
        onClose: a
    });
}
function x(e) {
    var n, i;
    let {
            user: c,
            currentUser: u,
            displayProfile: I,
            items: E,
            initialSection: _ = m.oh.USER_INFO,
            initialSubsection: Z,
            onClose: x
        } = e, {trackUserProfileAction: h} = (0, d.KZ)(), N = (0, s.e7)([r.Z], () => r.Z.hidePersonalInformation), [{
                section: g,
                subsection: C
            }, p] = o.useState({
            section: null !== (i = null === (n = E.find(e => {
                let {section: n} = e;
                return n === _;
            })) || void 0 === n ? void 0 : n.section) && void 0 !== i ? i : m.oh.USER_INFO,
            subsection: Z
        }), R = o.useCallback(e => {
            h({
                action: 'PRESS_SECTION',
                section: e
            }), p({
                section: e,
                subsection: void 0
            });
        }, [
            h,
            p
        ]);
    return N ? (0, t.jsx)('div', {
        className: S.container,
        children: (0, t.jsx)(f.Z, {})
    }) : (0, t.jsxs)('div', {
        className: S.container,
        children: [
            (0, t.jsx)(l.n, {
                className: S.tabBar,
                type: 'top',
                selectedItem: g,
                onItemSelect: R,
                children: E.map(e => {
                    let {
                        section: n,
                        text: i
                    } = e;
                    return (0, t.jsx)(l.n.Item, {
                        className: S.tabBarItem,
                        id: n,
                        'aria-label': i,
                        children: (0, t.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            children: i
                        })
                    }, n);
                })
            }),
            (0, t.jsx)(v, {
                items: E,
                section: g,
                subsection: C,
                user: c,
                currentUser: u,
                displayProfile: I,
                onClose: x
            })
        ]
    });
}
