t.d(n, {
	Z: function () {
		return l;
	}
});
var r = t(718922),
	i = t(55935),
	o = t(745735);
function l(e) {
	let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
		t = arguments.length > 2 ? arguments[2] : void 0,
		l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		u = (0, i.TD)(Date.now(), e),
		a = (0, r.Z)();
	return (
		(0, o.Z)(
			() => {
				if ((0 !== u.days || 0 !== u.hours || 0 !== u.minutes || 0 !== u.seconds) && !l) a(), null == t || t();
			},
			l ? null : n
		),
		u
	);
}
