n.d(t, {
	Z: function () {
		return l;
	}
});
var r = n(924826),
	i = n(442837),
	a = n(607070);
function s() {
	return Promise.resolve();
}
function o(e) {
	let t = document.querySelector(e);
	null != t && t.focus();
}
function l(e, t) {
	let n = (0, i.e7)([a.Z], () => a.Z.keyboardModeEnabled);
	return (0, r.ZP)({
		id: e,
		isEnabled: n,
		orientation: t,
		setFocus: o,
		scrollToStart: s,
		scrollToEnd: s
	});
}
