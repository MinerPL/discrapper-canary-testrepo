n.d(t, {
    F4: function () {
        return m;
    },
    So: function () {
        return g;
    },
    mc: function () {
        return T;
    },
    vw: function () {
        return I;
    }
});
var r = n(314897),
    i = n(592125),
    a = n(430824),
    s = n(594174),
    o = n(979651),
    l = n(111361),
    u = n(386542),
    c = n(114064),
    d = n(1163),
    _ = n(474936),
    E = n(981631),
    f = n(37113);
function h() {
    let e = s.default.getCurrentUser();
    return null != e && !(0, l.I5)(e, _.p9.TIER_1);
}
function p() {
    var e;
    let t = null === (e = o.Z.getVoiceStateForUser(r.default.getId())) || void 0 === e ? void 0 : e.channelId;
    if (null == t) return !1;
    let n = i.Z.getChannel(t);
    if (null == n) return !1;
    let s = a.Z.getGuild(n.guild_id);
    return null == s || s.premiumTier >= E.Eu4.TIER_2;
}
function m() {
    let { enabled: e } = d.Z.getCurrentConfig({ location: 'shouldFetchPerksDemos' }, { autoTrackExposure: !1 });
    return e && c.Z.shouldFetch() && h() && !p();
}
function I(e) {
    let { enabled: t } = d.Z.getCurrentConfig({ location: 'shouldFetchPerksDemos' }, { autoTrackExposure: !1 });
    return t && c.Z.shouldActivate(e) && h() && !p();
}
function T(e, t) {
    return e === f.LY.RESOLUTION_720 && t !== f.ws.FPS_60;
}
function g(e) {
    let { activated: t } = (0, u.k)(e);
    return t;
}
