n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(442837), i = n(780384), a = n(410030), o = n(358221), s = n(944486), l = n(981631);
function u(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getVoiceChannelId()), u = (0, r.e7)([o.Z], () => null != n ? o.Z.getMode(n) : null), c = (0, a.ZP)();
    return null != e ? e : u === l.WtW.VOICE && (0, i.ap)(c) ? t ? 'activeLight' : 'primaryLight' : t ? 'white' : 'primaryDark';
}
