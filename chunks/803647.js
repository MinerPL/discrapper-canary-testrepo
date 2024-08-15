n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(846027),
	i = n(872810),
	a = n(314897),
	s = n(569545);
function o(e) {
	let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
	if (null == e) return;
	let { streamType: n, guildId: o, channelId: l, ownerId: u } = e,
		c = (0, s.V9)({
			streamType: n,
			guildId: o,
			channelId: l,
			ownerId: u
		});
	u === a.default.getId() && r.Z.setGoLiveSource(null), i.g(c, t);
}
