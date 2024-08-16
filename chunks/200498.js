n.d(t, {
    B: function () {
        return p;
    },
    Os: function () {
        return f;
    },
    _L: function () {
        return E;
    },
    jU: function () {
        return m;
    },
    nG: function () {
        return h;
    }
});
var r = n(149765),
    i = n(442837),
    a = n(41776);
n(314897);
var s = n(592125),
    o = n(430824),
    l = n(496675),
    u = n(700785),
    c = n(146085),
    d = n(427679),
    _ = n(981631);
function E(e, t, n) {
    var i, a;
    let s = null == n ? void 0 : n.permissionOverwrites[e];
    return {
        id: e,
        type: t,
        deny: null !== (i = null == s ? void 0 : s.deny) && void 0 !== i ? i : u.Hn,
        allow: r.Od(null !== (a = null == s ? void 0 : s.allow) && void 0 !== a ? a : u.Hn, c.yP)
    };
}
function f(e) {
    let { allow: t, deny: n } = e;
    return r.fS(t, u.Hn) && r.fS(n, u.Hn);
}
function h(e) {
    return (0, i.e7)(
        [l.Z, o.Z, s.Z],
        () => {
            let t = s.Z.getChannel(e),
                n = o.Z.getGuild(null == t ? void 0 : t.getGuildId());
            return !!(l.Z.can(_.Plq.ADMINISTRATOR, n) || l.Z.can(_.Plq.MANAGE_ROLES, t, void 0, void 0, !0) || l.Z.can(c.N, t)) || !1;
        },
        [e]
    );
}
function p(e) {
    return (0, i.e7)([s.Z, l.Z], () => null != e && l.Z.can(_.Plq.MUTE_MEMBERS, s.Z.getChannel(e)), [e]);
}
function m(e) {
    return !!(null != e && e.isGuildStageVoice() && a.Z.isLurking(e.guild_id) && d.Z.isPublic(e.id)) && l.Z.can(c.gl, e);
}
