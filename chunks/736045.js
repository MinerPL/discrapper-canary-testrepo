n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(314897),
    i = n(592125),
    a = n(979651);
function s() {
    let e = a.Z.getVoiceStateForSession(r.default.getId(), r.default.getSessionId()),
        t = null == e ? void 0 : e.channelId;
    return i.Z.getChannel(t);
}
