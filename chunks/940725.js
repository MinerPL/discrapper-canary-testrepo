n.d(t, {
    h: function () {
        return h;
    }
}),
    n(47120);
var i = n(704215),
    a = n(442837),
    s = n(645041),
    l = n(271383),
    r = n(430824),
    o = n(594174),
    c = n(353093),
    u = n(954138),
    d = n(981631);
function h(e, t) {
    let n = (0, u.Z)(t),
        h = (0, a.e7)(
            [o.default, r.Z, l.ZP],
            () =>
                (function (e) {
                    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, r.Z, l.ZP];
                    if (null == e) return !1;
                    let a = n.getGuild(e);
                    if (null == a || !(0, c.EJ)(a) || null == a.clan) return !1;
                    let s = t.getCurrentUser();
                    if (null == s) return !1;
                    let u = i.getMember(e, s.id);
                    if (null == u || u.isPending) return !1;
                    if (null == s.clan) return !0;
                    let d = null != u.joinedAt ? new Date(u.joinedAt) : null,
                        h = null != d && Date.now() - d.getTime() > 259200000,
                        { identityGuildId: m, identityEnabled: p } = s.clan;
                    return null != m && null == p ? e === m : null == m && null == p ? h : (m !== e || !1 !== p) && null != m && !1 === p && h;
                })(e, [o.default, r.Z, l.ZP]),
            [e]
        ),
        m = (0, s.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : d.lds);
    return n && h && !m;
}
