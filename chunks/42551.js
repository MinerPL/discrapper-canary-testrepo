l.d(t, {
    Z: function () {
        return p;
    }
}), l(47120), l(724458), l(653041);
var n = l(735250), a = l(470079), o = l(120356), s = l.n(o), i = l(658722), r = l.n(i), C = l(954955), c = l.n(C), d = l(498607), u = l.n(d), m = l(399606), _ = l(481060), E = l(563115), h = l(910693), M = l(893966), x = l(527379), b = l(285173), T = l(689938), L = l(262155), g = l(405811);
let I = new Set();
function p(e) {
    let {
            guildId: t,
            onClose: l
        } = e, o = (0, h.BG)(t), i = (0, m.e7)([M.Z], () => M.Z.getSearchStateByGuildId(t), [t], u()), [C, d] = a.useState(i.selectedRoleIds), p = (0, E.h)(t, I, !0), H = (e, l) => {
            let {record: a} = e;
            return (0, n.jsx)(_.ComboboxItem, {
                value: a.id,
                children: (0, n.jsxs)('div', {
                    className: s()(L.roleNameContainer),
                    children: [
                        (0, n.jsxs)('div', {
                            className: s()(L.roleLabel),
                            children: [
                                (0, n.jsx)('div', { className: s()(L.labelBackground, l && L.selected) }),
                                (0, n.jsx)(_.ComboboxItem.Label, {
                                    children: (0, n.jsx)(b.Z, {
                                        className: s()(g.roleTooltipItem),
                                        role: a,
                                        guildId: t
                                    }, a.id)
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: L.checkboxContainer,
                            children: (0, n.jsx)(_.ComboboxItem.Checkbox, { checked: l })
                        })
                    ]
                })
            }, a.id);
        }, f = (e, t) => p.reduce((l, n) => {
            let {record: a} = n, o = e.has(a.id);
            return r()(t.toLowerCase(), a.name.toLowerCase()) ? l.push(H(n, o)) : o && l.push(H(n, o)), l;
        }, []), A = a.useCallback(e => {
            (0, x.Dr)(t, { selectedRoleIds: e }), o(e);
        }, [
            t,
            o
        ]), N = a.useCallback(c()(A, 300), [A]), R = a.useCallback(e => {
            let t;
            d(t = C.has(e) ? new Set([...C].filter(t => t !== e)) : new Set([
                ...C,
                e
            ])), N(t);
        }, [
            C,
            N
        ]);
    return (0, n.jsx)(_.ComboboxPopout, {
        className: s()(L.rolePopout),
        placeholder: T.Z.Messages.MEMBERS_TABLE_ROLE_SELECTION_PLACEHOLDER,
        value: C,
        onChange: R,
        onClose: () => {
            l();
        },
        multiSelect: !0,
        showScrollbar: !0,
        autoFocus: !0,
        children: e => f(C, e)
    });
}
