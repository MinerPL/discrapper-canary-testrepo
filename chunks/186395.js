n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(412899), l = n(659101), u = n(689938), c = n(166015), d = n(546136);
function _(e) {
    let {
        user: t,
        guild: n,
        guildMember: i,
        showBorder: _
    } = e;
    return null == n || null == i ? null : (0, r.jsxs)(l.Z, {
        children: [
            (0, r.jsx)(o.Heading, {
                variant: 'eyebrow',
                className: d.title,
                children: u.Z.Messages.ROLES_LIST.format({ numRoles: i.roles.length })
            }),
            (0, r.jsx)(s.ZP, {
                roleClassName: a()(c.rolePill, { [c.rolePillBorder]: _ }),
                className: c.roles,
                guild: n,
                user: t,
                userRoles: i.roles,
                disableBorderColor: !0
            }, 'roles')
        ]
    });
}
