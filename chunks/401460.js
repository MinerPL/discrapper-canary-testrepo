n.d(t, {
    Z: function () {
        return g;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(392711), l = n.n(s), u = n(481060), c = n(583901), d = n(997945), _ = n(630117), E = n(441319), f = n(981631), h = n(689938), p = n(128108);
let m = () => [
        h.Z.Messages.APP_ICON_PIRATE,
        h.Z.Messages.APP_ICON_PIRATE_1,
        h.Z.Messages.APP_ICON_PIRATE_2,
        h.Z.Messages.APP_ICON_PIRATE_3,
        h.Z.Messages.APP_ICON_PIRATE_4
    ], I = () => {
        var e;
        return null !== (e = l().sample(m())) && void 0 !== e ? e : h.Z.Messages.APP_ICON_PIRATE;
    };
function T(e) {
    let {
            id: t,
            className: n,
            onSelect: a,
            isSelected: s = !1,
            tabIndex: l,
            children: _,
            isNew: h = !1
        } = e, [m, T] = i.useState(E.QA[t].name), g = t === d.Ru.PIRATE, S = (0, u.useRadioItem)({
            label: m,
            isSelected: s
        });
    return (0, r.jsx)(u.Tooltip, {
        text: m,
        onTooltipShow: () => g && T(I()),
        children: e => (0, r.jsxs)('div', {
            className: p.appIconSelectionContainer,
            children: [
                !s && h && (0, r.jsx)('div', { className: p.newBadgeCircle }),
                (0, r.jsx)(u.Clickable, {
                    ...e,
                    ...S,
                    tabIndex: null != l ? l : S.tabIndex,
                    className: o()(p.appIconSelection, { [p.selected]: s }, n),
                    onClick: s ? f.dG4 : () => null == a ? void 0 : a(t),
                    children: _
                }),
                s && (0, r.jsx)(c.oK, {})
            ]
        })
    });
}
function g(e) {
    let {
        icon: t,
        isSelected: n,
        disabled: i,
        tabIndex: a,
        onSelect: o,
        isNew: s
    } = e;
    return (0, r.jsx)(T, {
        onSelect: i ? void 0 : o,
        isSelected: n,
        id: t.id,
        className: i ? p.disabled : void 0,
        tabIndex: a,
        isNew: s,
        children: (0, r.jsx)(_.Z, {
            id: t.id,
            width: E.M9
        })
    });
}
