l.d(n, {
    Z: function () {
        return T;
    }
});
var t = l(735250),
    r = l(470079),
    i = l(866442),
    a = l(481060),
    u = l(129861),
    s = l(91218),
    o = l(829883),
    c = l(518738),
    d = l(14263),
    m = l(592125),
    f = l(430824),
    p = l(158776),
    E = l(594174),
    v = l(970184),
    C = l(280501),
    h = l(811654),
    x = l(344991),
    _ = l(981631),
    N = l(296555);
function T(e) {
    var n;
    let l = (0, v.CJ)(),
        T = null == l ? void 0 : null === (n = l.message) || void 0 === n ? void 0 : n.getChannelId(),
        I = m.Z.getChannel(T),
        g = f.Z.getGuild(null == I ? void 0 : I.getGuildId()),
        S = (0, d.Z)(null == g ? void 0 : g.id, h.HI),
        O = r.useMemo(() => (0, h.tx)(e.defaultValues, null == g ? void 0 : g.id), [e.defaultValues, g]);
    return (0, t.jsx)(x.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, h._H)(e.type, n, T),
        renderIcon: (e, n) => {
            let l = n === x.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === C.tM.USER) {
                let r = E.default.getUser(e.value);
                if (null == r) return;
                return (0, t.jsx)(a.Avatar, {
                    size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: r.getAvatarURL(null == g ? void 0 : g.id, n),
                    status: l ? null : p.Z.getStatus(r.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === C.tM.ROLE) {
                var r;
                let l = null != g ? f.Z.getRole(g.id, e.value) : void 0;
                if (null == l || null == g) return;
                let u = (0, o._b)(g, l) ? (0, c.Kz)(l, n) : null;
                return null != u
                    ? (0, t.jsx)(s.Z, { ...u })
                    : (0, t.jsx)(a.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (r = l.colorString) && void 0 !== r ? r : (0, i.Rf)(_.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === C.tM.USER) {
                let l = E.default.getUser(e.value);
                null != l &&
                    (n = (0, t.jsx)(u.Z, {
                        className: N.tag,
                        usernameClass: N.username,
                        discriminatorClass: N.discriminator,
                        botClass: N.bot,
                        user: l,
                        forceUsername: !0
                    }));
            } else if (e.type === C.tM.ROLE) {
                let l = null != g ? f.Z.getRole(g.id, e.value) : void 0,
                    r = null == l ? null : null == S ? void 0 : S[l.id];
                null != r &&
                    (n = (0, t.jsxs)('div', {
                        className: N.roleCountContainer,
                        children: [
                            (0, t.jsx)(a.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: N.roleCountIcon
                            }),
                            (0, t.jsx)('span', {
                                className: N.roleCountText,
                                children: r
                            })
                        ]
                    }));
            }
            return (0, t.jsxs)('span', {
                className: N.label,
                children: [
                    (0, t.jsx)('span', {
                        className: N.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: O
    });
}
