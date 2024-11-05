n.d(t, {
    JL: function () {
        return m;
    },
    P9: function () {
        return g;
    },
    h_: function () {
        return I;
    },
    p9: function () {
        return E;
    },
    wq: function () {
        return v;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a = n(442837),
    s = n(387343),
    o = n(258609),
    l = n(131704),
    u = n(984933),
    c = n(430824),
    d = n(496675),
    f = n(979651),
    _ = n(934415),
    h = n(981631),
    p = n(388032);
function m(e, t, n) {
    var r;
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let a = t.getGuild(e.getGuildId()),
        o = null !== (r = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== r ? r : 0;
    return (!e.isGuildStageVoice() || !(o <= 0)) && (!i || !!(0, s.Z)(e, n)) && !!n.can(h.Plq.STREAM, e) && null != a && a.afkChannelId !== e.id && !0;
}
function g(e) {
    switch (e) {
        case 0:
            return p.intl.string(p.t['1i3tSU']);
        case 1:
            return p.intl.string(p.t.elyVbm);
        case 2:
            return p.intl.string(p.t.pgUTZG);
        default:
            return p.intl.string(p.t['7Xq/nZ']);
    }
}
function E(e, t, n, r, i) {
    let a;
    if (null == e) return [!1, 2];
    let o = t.isInChannel(e.id),
        u = e instanceof l.Sf && (0, _.rY)(e, t, n),
        c = (0, s.Z)(e, r),
        d = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
    return d ? (a = 0) : c || o ? u && !o && (a = 1) : (a = 2), [!__OVERLAY__ && !d && (o || (c && !u)), a];
}
function v(e) {
    return (0, a.Wu)([f.Z, c.Z, d.Z, o.Z], () => E(e, f.Z, c.Z, d.Z, o.Z));
}
function I(e, t, n) {
    let r = [];
    for (let { channel: i } of e[u.Zb]) m(i, t, n) && r.push(i);
    return r;
}
((i = r || (r = {}))[(i.REMOTE_MODE = 0)] = 'REMOTE_MODE'), (i[(i.CHANNEL_FULL = 1)] = 'CHANNEL_FULL'), (i[(i.NO_PERMISSION = 2)] = 'NO_PERMISSION');
