t.d(n, {
	Z: function () {
		return d;
	}
});
var i = t(442837),
	r = t(846027),
	u = t(314897),
	l = t(131951),
	a = t(981631),
	o = t(65154);
function d(e) {
	let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
		t = (0, i.e7)([u.default], () => u.default.getId()),
		d = (0, i.e7)([l.Z], () => l.Z.supports(o.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled()),
		s = (0, i.e7)([l.Z], () => l.Z.isLocalVideoDisabled(t, n), [t, n]),
		c = null == e || e === t;
	return [
		c && (d || s),
		s,
		(e) => {
			let i = e ? a.ZUi.DISABLED : a.ZUi.MANUAL_ENABLED;
			r.Z.setDisableLocalVideo(t, i, n);
		}
	];
}
