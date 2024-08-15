t.d(n, {
	K: function () {
		return o;
	},
	z: function () {
		return u;
	}
});
var l = t(481060),
	i = t(475179),
	a = t(925549),
	r = t(905423),
	s = t(981631);
function o(e, n) {
	let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
		o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
	if (!(0, l.hasAnyModalOpen)()) t && a.Z.channelListScrollTo(e, n), o && null != n && i.Z.updateChatOpen(n, !0), r.Z.getState().updatePath(s.Z5c.CHANNEL(e, n));
}
function u(e) {
	if (!(0, l.hasAnyModalOpen)()) r.Z.getState().updatePath(e);
}
