n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(314897), a = n(565799), l = n(501655), s = n(88751), r = n(427679);
function o(e) {
    if (!e.isGuildStageVoice() || !r.Z.isLive(e.id))
        return !1;
    let t = i.default.getId();
    return !!(s.ZP.isModerator(t, e.id) && s.ZP.isSpeaker(t, e.id)) && (null == a.Z.getMutableParticipants(e.id).find(n => n.user.id !== t && s.ZP.isModerator(n.user.id, e.id)) || null == a.Z.getMutableParticipants(e.id, l.pV.SPEAKER).find(n => n.user.id !== t && s.ZP.isModerator(n.user.id, e.id)));
}
