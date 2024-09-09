l.d(n, {
    Z: function () {
        return x;
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
    N = l(344991),
    T = l(981631),
    _ = l(296555);
function x(e) {
    var n;
    let l = (0, v.CJ)(),
        x = null == l ? void 0 : null === (n = l.message) || void 0 === n ? void 0 : n.getChannelId(),
        I = m.Z.getChannel(x),
        S = f.Z.getGuild(null == I ? void 0 : I.getGuildId()),
        g = (0, d.Z)(null == S ? void 0 : S.id, h.HI),
        O = r.useMemo(() => (0, h.tx)(e.defaultValues, null == S ? void 0 : S.id), [e.defaultValues, S]);
    return (0, t.jsx)(N.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, h._H)(e.type, n, x),
        renderIcon: (e, n) => {
            let l = n === N.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === C.tM.USER) {
                let r = E.default.getUser(e.value);
                if (null == r) return;
                return (0, t.jsx)(a.Avatar, {
                    size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: r.getAvatarURL(null == S ? void 0 : S.id, n),
                    status: l ? null : p.Z.getStatus(r.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === C.tM.ROLE) {
                var r;
                let l = null != S ? f.Z.getRole(S.id, e.value) : void 0;
                if (null == l || null == S) return;
                let u = (0, o._b)(S, l) ? (0, c.Kz)(l, n) : null;
                return null != u
                    ? (0, t.jsx)(s.Z, { ...u })
                    : (0, t.jsx)(a.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (r = l.colorString) && void 0 !== r ? r : (0, i.Rf)(T.p6O),
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
                        className: _.tag,
                        usernameClass: _.username,
                        discriminatorClass: _.discriminator,
                        botClass: _.bot,
                        user: l,
                        forceUsername: !0
                    }));
            } else if (e.type === C.tM.ROLE) {
                let l = null != S ? f.Z.getRole(S.id, e.value) : void 0,
                    r = null == l ? null : null == g ? void 0 : g[l.id];
                null != r &&
                    (n = (0, t.jsxs)('div', {
                        className: _.roleCountContainer,
                        children: [
                            (0, t.jsx)(a.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: _.roleCountIcon
                            }),
                            (0, t.jsx)('span', {
                                className: _.roleCountText,
                                children: r
                            })
                        ]
                    }));
            }
            return (0, t.jsxs)('span', {
                className: _.label,
                children: [
                    (0, t.jsx)('span', {
                        className: _.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: O
    });
}
