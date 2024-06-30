n.d(t, {
    JE: function () {
        return E;
    },
    Lw: function () {
        return c;
    },
    dS: function () {
        return _;
    },
    rq: function () {
        return d;
    }
}), n(47120);
var r = n(314897), i = n(592125), a = n(430824), o = n(88751), s = n(157925), l = n(981631);
let u = 'stage:';
function c(e, t) {
    let n = 0, i = r.default.getId();
    o.ZP.isSpeaker(i, e.id) && (n |= 1);
    let s = a.Z.getGuild(e.getGuildId());
    null != s && (s.hasFeature(l.oNc.PARTNERED) && (n |= 2), s.hasFeature(l.oNc.VERIFIED) && (n |= 4));
    let c = n.toString(16);
    return ''.concat(u).concat(e.guild_id, ':').concat(e.id, ':').concat(c, ':').concat(t.id);
}
function d(e) {
    if (null == e || null == e.party)
        return;
    let {
        id: t,
        size: n
    } = e.party;
    try {
        if (null == t || !t.startsWith(u))
            return;
        let [, e, r, i, a] = t.split(':'), o = parseInt(i, 16);
        return {
            guildId: e,
            channelId: r,
            size: n,
            userIsSpeaker: (1 & o) != 0,
            guildIsPartnered: (2 & o) != 0,
            guildIsVerified: (4 & o) != 0,
            stageInstanceId: a
        };
    } catch (e) {
        return null;
    }
}
function _(e) {
    return (null == e ? void 0 : e.application_id) === s.gD;
}
function E(e) {
    let t = d(e);
    if (null == t)
        return !1;
    let {channelId: n} = t;
    return null != i.Z.getChannel(n);
}
