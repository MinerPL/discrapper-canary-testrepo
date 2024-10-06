n.d(t, {
    F6: function () {
        return d;
    },
    ZP: function () {
        return f;
    },
    le: function () {
        return _;
    },
    mA: function () {
        return E;
    }
}),
    n(47120),
    n(757143);
var r = n(442837),
    i = n(353926),
    a = n(699516),
    s = n(594174),
    o = n(823379),
    l = n(51144),
    u = n(981631),
    c = n(689938);
function d(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    switch (e.type) {
        case u.d4z.DM:
            var a;
            let [s] = e.recipients.map(t.getUser).filter(o.lm);
            if (null == s) return '???';
            let d = n.getNickname(s.id),
                E = null !== (a = null != d ? d : l.ZP.getName(s)) && void 0 !== a ? a : '???';
            return r ? '@'.concat(E) : E;
        case u.d4z.GROUP_DM:
            if ('' !== e.name) return e.name;
            let f = e.recipients
                .map(t.getUser)
                .filter(o.lm)
                .map((e) => {
                    var t;
                    return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : l.ZP.getName(e);
                });
            if (f.length > 0) return f.join(', ');
            return c.Z.Messages.GROUP_DM_ALONE.format({ name: l.ZP.getName(t.getCurrentUser()) });
        case u.d4z.GUILD_ANNOUNCEMENT:
        case u.d4z.GUILD_TEXT:
        case u.d4z.GUILD_FORUM:
        case u.d4z.GUILD_MEDIA:
            if (r) return '#'.concat(e.name);
            return e.name;
        case u.d4z.PUBLIC_THREAD:
        case u.d4z.PRIVATE_THREAD:
        case u.d4z.ANNOUNCEMENT_THREAD:
        case u.d4z.GUILD_VOICE:
        case u.d4z.GUILD_STAGE_VOICE:
        case u.d4z.GUILD_CATEGORY:
            if (i) return '#"'.concat(_(e.name), '"');
            if (r && e.isThread()) return '"'.concat(e.name, '"');
            return e.name;
        default:
            return e.name;
    }
}
function _(e) {
    return e.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function E(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, r.e7)([s.default, i.Z, a.Z], () => (null == e ? null : d(e, s.default, a.Z, t)));
}
