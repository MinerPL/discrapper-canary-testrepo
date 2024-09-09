n.d(t, {
    $: function () {
        return T;
    },
    Z: function () {
        return m;
    }
});
var s = n(735250);
n(470079);
var a = n(392711),
    i = n(442837),
    r = n(481060),
    l = n(241559),
    o = n(527379),
    c = n(313364),
    d = n(434404),
    u = n(999382),
    _ = n(981631),
    I = n(689938),
    E = n(232802);
function T() {
    var e;
    let t = (0, i.e7)([u.Z], () => u.Z.getProps().guild, []),
        n = null !== (e = null == t ? void 0 : t.isCommunity()) && void 0 !== e && e;
    return (0, s.jsxs)(r.Clickable, {
        onClick: (e) => {
            if (null != t) n ? (e.preventDefault(), d.Z.close(), (0, o._X)(t.id)) : d.Z.open(t.id, _.pNK.MEMBERS);
        },
        className: E.rowContainer,
        children: [
            (0, s.jsx)('div', { children: I.Z.Messages.MEMBERS }),
            n &&
                (0, s.jsx)(r.WindowLaunchIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: E.linkIcon,
                    width: 16,
                    height: 16
                })
        ]
    });
}
function m() {
    var e;
    let { guild: t } = (0, i.e7)([u.Z], () => u.Z.getProps(), [], a.isEqual),
        n = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : _.lds;
    return (0, l.n2)(n) ? (0, s.jsx)(c.Z, { guildId: n }) : null;
}
