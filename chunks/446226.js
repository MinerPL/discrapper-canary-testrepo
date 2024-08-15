t.d(n, {
	Z: function () {
		return a;
	}
});
var l = t(442837),
	i = t(314897),
	u = t(979651),
	r = t(258609);
function a() {
	let e = (0, l.e7)([i.default], () => i.default.getId()),
		n = (0, l.e7)([r.Z], () => r.Z.getRemoteSessionId());
	return (0, l.e7)([u.Z], () => {
		var t;
		return null !== (t = u.Z.getVoiceStateForSession(e, n)) && void 0 !== t ? t : void 0;
	});
}
