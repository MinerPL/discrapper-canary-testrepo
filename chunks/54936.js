n.d(t, {
    n: function () {
        return m;
    }
}),
    n(411104);
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(481060),
    l = n(910111),
    o = n(732559),
    c = n(723851),
    u = n(981631),
    d = n(689938),
    _ = n(357715);
let E = {
    [u.TaA.WINDOWS]: {
        icon: c.Z,
        getLabel: () => d.Z.Messages.WINDOWS
    },
    [u.TaA.MACOS]: {
        icon: o.Z,
        getLabel: () => d.Z.Messages.MACOS
    },
    [u.TaA.LINUX]: {
        icon: l.Z,
        getLabel: () => d.Z.Messages.LINUX
    }
};
function I(e) {
    let { operatingSystem: t, className: n } = e,
        a = E[t];
    if (null == a) throw Error('Unexpected operating system: '.concat(t));
    let s = a.icon;
    return (0, i.jsx)(r.Tooltip, {
        text: a.getLabel(),
        children: (e) =>
            (0, i.jsx)(s, {
                ...e,
                className: n
            })
    });
}
let m = (e) => {
    let { systems: t, className: n, iconClassName: a } = e;
    return (0, i.jsx)('div', {
        className: s()(_.OSSection, n),
        children: t.map((e) =>
            (0, i.jsx)(
                I,
                {
                    operatingSystem: e,
                    className: s()(_.purchaseUnitOperatingSystem, a)
                },
                e
            )
        )
    });
};
