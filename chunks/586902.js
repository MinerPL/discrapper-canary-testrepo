n.d(t, {
    O: function () {
        return c;
    },
    Z: function () {
        return u;
    }
});
var r = n(442837), i = n(763296), a = n(944486), o = n(606304), s = n(979651);
function l(e, t, n) {
    return e || t || n;
}
function u(e) {
    var t, n, l;
    let {
            userId: u,
            checkSoundSharing: c = !1,
            checkSoundboardSounds: d = !0,
            checkIsMuted: _ = !1,
            context: E
        } = e, f = (0, r.e7)([
            s.Z,
            a.Z
        ], () => {
            let e = a.Z.getVoiceChannelId();
            return null != e ? s.Z.getVoiceStateForChannel(e, u) : null;
        }), h = _ && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)), p = (0, r.e7)([o.Z], () => o.Z.isSpeaking(u, E) && !h), m = (0, r.e7)([o.Z], () => o.Z.isSoundSharing(u) && c), I = (0, r.e7)([i.Z], () => i.Z.isUserPlayingSounds(u) && d);
    return t = p, n = I, l = m, t || n || l;
}
function c(e) {
    var t, n, r;
    let {
            userId: l,
            checkSoundSharing: u = !1,
            checkSoundboardSounds: c = !0,
            checkIsMuted: d = !1,
            context: _
        } = e, E = a.Z.getVoiceChannelId(), f = null != E ? s.Z.getVoiceStateForChannel(E, l) : null, h = d && ((null == f ? void 0 : f.mute) || (null == f ? void 0 : f.selfMute)), p = o.Z.isSpeaking(l, _) && !h, m = o.Z.isSoundSharing(l) && u, I = i.Z.isUserPlayingSounds(l) && c;
    return t = p, n = I, r = m, t || n || r;
}
