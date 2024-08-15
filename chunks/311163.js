n.d(t, {
	Z: function () {
		return l;
	}
});
var i = n(272423),
	r = n(378788);
function l(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
		n = (0, i.kf)(e);
	if (null != n) return [n.params.guildId, n.params.channelId];
	if ((0, r.z)() && !t) return [void 0, void 0];
	let l = (0, i.B3)(e);
	if (null != l) {
		var a, u;
		return [
			null === (a = l.params) || void 0 === a ? void 0 : a.guildId,
			null === (u = l.params) || void 0 === u ? void 0 : u.channelId
		];
	}
	return [void 0, void 0];
}
