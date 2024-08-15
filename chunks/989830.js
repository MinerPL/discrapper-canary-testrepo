n.d(t, {
	Z: function () {
		return r;
	}
});
var i = n(442837),
	s = n(314897),
	o = n(351780),
	a = n(843693);
function l(e, t) {
	return (
		e === t ||
		((null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) &&
			(null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) &&
			(null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier) &&
			!0)
	);
}
function r(e) {
	let t = (0, i.e7)([o.Z], () => !!o.Z.isEnabled() && o.Z.combosEnabled);
	return (0, i.e7)([a.ZP, s.default], () => (t ? a.ZP.getUserCombo(s.default.getId(), e) : void 0), [e, t], l);
}
