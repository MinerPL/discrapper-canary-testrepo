n.d(t, {
	Z: function () {
		return l;
	}
});
var i = n(442837),
	a = n(314897),
	s = n(944486),
	r = n(88751);
function l(e) {
	return (0, i.e7)(
		[a.default, s.Z, r.ZP],
		() => {
			let t = a.default.getId();
			return s.Z.getVoiceChannelId() === e ? r.ZP.getPermissionsForUser(t, e) : null;
		},
		[e]
	);
}
