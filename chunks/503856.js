n.d(t, {
    p: function () {
        return l;
    },
    r: function () {
        return u;
    }
});
var r = n(442837),
    i = n(592125),
    a = n(430824),
    s = n(944486),
    o = n(981631);
let l = () => {
        let e = s.Z.getVoiceChannelId();
        if (null == e) return !1;
        let t = i.Z.getChannel(e);
        if (null == t) return !1;
        let n = a.Z.getGuild(t.getGuildId());
        return null != n && n.hasFeature(o.oNc.HUB);
    },
    u = (e) =>
        (0, r.e7)([s.Z, i.Z, a.Z], () => {
            let t = s.Z.getVoiceChannelId();
            if (null == t) return !1;
            let n = i.Z.getChannel(t);
            if (null == n) return !1;
            let r = a.Z.getGuild(n.getGuildId());
            return null != r && r.id === e;
        });
