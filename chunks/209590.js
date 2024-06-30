let r, i;
n(724458);
var a, o, s, l, u = n(442837), c = n(433517), d = n(570140), _ = n(592125), E = n(430824);
let f = 'hideSuppressWarning', h = !1, p = !0, m = !1;
class I extends (a = u.ZP.Store) {
    initialize() {
        m = c.K.get(f) || m;
    }
    isAFKChannel() {
        let e = _.Z.getChannel(i);
        if (null == e)
            return !1;
        let t = E.Z.getGuild(e.getGuildId());
        return null != t && e.id === t.afkChannelId;
    }
    shouldShowWarning() {
        var e;
        return !(null === (e = _.Z.getChannel(i)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !p;
    }
}
l = 'PermissionSpeakStore', (s = 'displayName') in (o = I) ? Object.defineProperty(o, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[s] = l, t.Z = new I(d.Z, {
    CONNECTION_OPEN: function (e) {
        r = e.sessionId, h = !1;
    },
    CONNECTION_CLOSED: function () {
        r = null, i = null, p = !0;
    },
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: t} = e;
        return t.reduce((e, t) => r !== t.sessionId ? e : (h !== t.suppress && (p = !(h = t.suppress)), i !== t.channelId && (i = t.channelId, p = !h), (m || null == t.channelId) && (p = !0), !0), !1);
    },
    PERMISSION_CLEAR_SUPPRESS_WARNING: function (e) {
        let {forever: t} = e;
        p = !0, t && (m = !0, c.K.set(f, m));
    }
});
