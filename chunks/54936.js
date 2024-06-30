n.d(t, {
    n: function () {
        return I;
    }
}), n(411104);
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), l = n(481060), r = n(910111), o = n(732559), c = n(723851), d = n(981631), u = n(689938), _ = n(968406);
let E = {
    [d.TaA.WINDOWS]: {
        icon: c.Z,
        getLabel: () => u.Z.Messages.WINDOWS
    },
    [d.TaA.MACOS]: {
        icon: o.Z,
        getLabel: () => u.Z.Messages.MACOS
    },
    [d.TaA.LINUX]: {
        icon: r.Z,
        getLabel: () => u.Z.Messages.LINUX
    }
};
function m(e) {
    let {
            operatingSystem: t,
            className: n
        } = e, a = E[t];
    if (null == a)
        throw Error('Unexpected operating system: '.concat(t));
    let s = a.icon;
    return (0, i.jsx)(l.Tooltip, {
        text: a.getLabel(),
        children: e => (0, i.jsx)(s, {
            ...e,
            className: n
        })
    });
}
let I = e => {
    let {
        systems: t,
        className: n,
        iconClassName: a
    } = e;
    return (0, i.jsx)('div', {
        className: s()(_.OSSection, n),
        children: t.map(e => (0, i.jsx)(m, {
            operatingSystem: e,
            className: s()(_.purchaseUnitOperatingSystem, a)
        }, e))
    });
};
