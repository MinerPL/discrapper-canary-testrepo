t.d(n, {
    Z: function () {
        return A;
    }
}), t(47120), t(724458), t(653041);
var r = t(735250), i = t(470079), o = t(658722), l = t.n(o), u = t(392711), s = t.n(u), a = t(149765), c = t(442837), d = t(481060), _ = t(271383), f = t(430824), E = t(594174), I = t(700785), g = t(709054), p = t(962086), C = t(160404), T = t(225675), S = t(981631), m = t(689938), h = t(209740);
function N(e) {
    var n;
    return (0, r.jsx)('span', {
        style: { color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor' },
        children: e.name
    });
}
function A(e) {
    let {guildId: n} = e, t = (0, c.e7)([E.default], () => E.default.getCurrentUser()), o = (0, c.e7)([f.Z], () => f.Z.getGuild(n)), u = (0, c.e7)([f.Z], () => f.Z.getRoles(n)), {
            impersonateType: A,
            viewingRoles: v
        } = (0, c.cj)([C.Z], () => ({
            impersonateType: C.Z.getImpersonateType(n),
            viewingRoles: C.Z.getViewingRoles(n)
        })), R = A === T.z.SERVER_SHOP, L = (0, c.e7)([_.ZP], () => null != t ? _.ZP.getTrueMember(n, t.id) : null), [b, M] = (0, d.useMultiSelect)(null == v ? [] : g.default.keys(v)), O = i.useRef(o);
    i.useEffect(() => {
        let e = {}, n = O.current;
        if (null != n && null != A) {
            for (let n of b) {
                let t = u[n];
                null != t && (e[n] = t);
            }
            (0, p.Zm)(n.id, {
                type: A,
                roles: e
            });
        }
    }, [
        b,
        A,
        u
    ]);
    let Z = null != o && null != t && null != L ? s()(u).filter(e => -1 !== L.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0, D = i.useMemo(() => null != o && null != t ? Object.values(u).filter(e => e.id !== o.id).filter(e => {
            var n;
            return !R || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
        }).filter(e => (null == Z ? void 0 : Z.id) === e.id || I.r6(o, t.id, Z, e)) : [], [
            o,
            t,
            R,
            Z,
            u
        ]);
    if (null == t || null == o || null == L)
        return null;
    let P = {};
    return (L.roles.forEach(e => {
        let n = u[e];
        null != n && (P[n.id] = n);
    }), a.e$(I.I0({
        forceRoles: P,
        context: o
    }), a.$e(S.Plq.MANAGE_GUILD, S.Plq.MANAGE_ROLES)) || o.isOwner(t.id)) ? (0, r.jsx)('div', {
        className: h.container,
        children: (0, r.jsx)(d.Combobox, {
            placeholder: m.Z.Messages.SEARCH_ROLES,
            value: b,
            onChange: M,
            autoFocus: !0,
            children: e => {
                let n = D.reduce((n, t) => (l()(e.toLowerCase(), t.name.toLowerCase()) && n.push((0, r.jsxs)(d.ComboboxItem, {
                        value: t.id,
                        children: [
                            (0, r.jsx)(d.ComboboxItem.Label, { children: N(t) }),
                            (0, r.jsx)(d.ComboboxItem.Checkbox, {})
                        ]
                    }, t.id)), n), []), t = u[o.getEveryoneRoleId()];
                return null != t && n.push((0, r.jsxs)(d.ComboboxItem, {
                    value: t.id,
                    disabled: !0,
                    children: [
                        (0, r.jsx)(d.ComboboxItem.Label, { children: N(t) }),
                        (0, r.jsx)(d.ComboboxItem.Checkbox, { checked: !0 })
                    ]
                }, t.id)), n;
            }
        })
    }) : (0, r.jsx)(d.Text, {
        variant: 'text-md/medium',
        children: m.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
    });
}
