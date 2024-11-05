n.d(t, {
    PI: function () {
        return d;
    },
    RT: function () {
        return f;
    },
    ls: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(692547),
    s = n(481060),
    a = n(765250),
    u = n(388032),
    c = n(614043);
function d(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: c.titleWrapper,
        children: (0, i.jsx)(s.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: t
        })
    });
}
function h(e) {
    let { onClick: t } = e,
        n = u.intl.string(u.t['3D5yo6']);
    return (0, i.jsx)(s.Tooltip, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                className: c.button,
                onClick: t,
                children: (0, i.jsx)(s.SettingsIcon, {
                    size: 'xxs',
                    color: l.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function f(e) {
    let { id: t, pinned: n } = e,
        o = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
    return (0, i.jsx)(s.Tooltip, {
        text: o,
        'aria-label': o,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                className: r()(c.button, n && c.active),
                onClick: () => (0, a.xh)(t),
                children: (0, i.jsx)(s.PinUprightIcon, {
                    size: 'xxs',
                    color: n ? l.Z.colors.BG_BRAND : l.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
