n.d(l, {
    Z: function () {
        return x;
    }
});
var t = n(735250), i = n(470079), r = n(866442), a = n(481060), s = n(129861), u = n(829883), o = n(518738), d = n(14263), c = n(592125), m = n(430824), p = n(158776), f = n(594174), v = n(176278), E = n(970184), N = n(280501), h = n(811654), C = n(344991), I = n(981631), g = n(474992);
function x(e) {
    var l;
    let n = (0, E.CJ)(), x = null == n ? void 0 : null === (l = n.message) || void 0 === l ? void 0 : l.getChannelId(), S = c.Z.getChannel(x), j = m.Z.getGuild(null == S ? void 0 : S.getGuildId()), T = (0, d.Z)(null == j ? void 0 : j.id, h.HI), _ = i.useMemo(() => (0, h.tx)(e.defaultValues, null == j ? void 0 : j.id), [
            e.defaultValues,
            j
        ]);
    return (0, t.jsx)(C.ZP, {
        selectActionComponent: e,
        queryOptions: l => (0, h._H)(e.type, l, x),
        renderIcon: (e, l) => {
            let n = l === C.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === N.tM.USER) {
                let i = f.default.getUser(e.value);
                if (null == i)
                    return;
                return (0, t.jsx)(a.Avatar, {
                    size: n ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: i.getAvatarURL(null == j ? void 0 : j.id, l),
                    status: n ? null : p.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === N.tM.ROLE) {
                var i;
                let n = null != j ? m.Z.getRole(j.id, e.value) : void 0;
                if (null == n || null == j)
                    return;
                let s = (0, u._b)(j, n) ? (0, o.Kz)(n, l) : null;
                return null != s ? (0, t.jsx)(v.Z, { ...s }) : (0, t.jsx)(a.ShieldUserIcon, {
                    size: 'custom',
                    color: null !== (i = n.colorString) && void 0 !== i ? i : (0, r.Rf)(I.p6O),
                    height: l,
                    width: l
                });
            }
        },
        renderOptionLabel: e => {
            let l = null;
            if (e.type === N.tM.USER) {
                let n = f.default.getUser(e.value);
                null != n && (l = (0, t.jsx)(s.Z, {
                    className: g.tag,
                    usernameClass: g.username,
                    discriminatorClass: g.discriminator,
                    botClass: g.bot,
                    user: n,
                    forceUsername: !0
                }));
            } else if (e.type === N.tM.ROLE) {
                let n = null != j ? m.Z.getRole(j.id, e.value) : void 0, i = null == n ? null : null == T ? void 0 : T[n.id];
                null != i && (l = (0, t.jsxs)('div', {
                    className: g.roleCountContainer,
                    children: [
                        (0, t.jsx)(a.UserIcon, {
                            size: 'sm',
                            color: 'currentColor',
                            className: g.roleCountIcon
                        }),
                        (0, t.jsx)('span', {
                            className: g.roleCountText,
                            children: i
                        })
                    ]
                }));
            }
            return (0, t.jsxs)('span', {
                className: g.label,
                children: [
                    (0, t.jsx)('span', {
                        className: g.labelText,
                        children: e.label
                    }),
                    l
                ]
            });
        },
        defaultValues: _
    });
}
