n.d(t, {
    h: function () {
        return h;
    }
}), n(47120);
var i = n(704215), a = n(442837), l = n(645041), s = n(271383), r = n(430824), o = n(594174), c = n(353093), u = n(954138), d = n(981631);
function h(e, t) {
    let n = (0, u.Z)(t), h = (0, a.e7)([
            o.default,
            r.Z,
            s.ZP
        ], () => function (e) {
            let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
                o.default,
                r.Z,
                s.ZP
            ];
            if (null == e)
                return !1;
            let a = n.getGuild(e);
            if (null == a || !(0, c.EJ)(a) || null == a.clan)
                return !1;
            let l = t.getCurrentUser();
            if (null == l)
                return !1;
            let u = i.getMember(e, l.id);
            if (null == l.clan)
                return !0;
            let d = (null == u ? void 0 : u.joinedAt) != null ? new Date(u.joinedAt) : null, h = null != d && Date.now() - d.getTime() > 259200000, {
                    identityGuildId: p,
                    identityEnabled: m
                } = l.clan;
            return null != p && null == m ? e === p : null == p && null == m ? h : (p !== e || !1 !== m) && null != p && !1 === m && h;
        }(e, [
            o.default,
            r.Z,
            s.ZP
        ]), [e]), p = (0, l.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : d.lds);
    return n && h && !p;
}
