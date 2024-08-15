n.d(t, {
	C1: function () {
		return o;
	},
	HS: function () {
		return u;
	},
	Hg: function () {
		return l;
	},
	l0: function () {
		return c;
	}
}),
	n(757143),
	n(733860);
var r = n(264344),
	i = n.n(r),
	a = n(992774),
	s = n(149396);
function o(e, t) {
	var n;
	let r = !1,
		a = t.map((t, n) => {
			let { guid: i, guid: a, name: o, name: l, index: u } = t;
			return (
				/^default/.test(o)
					? ((r = !0), (i = s.w5), (o = o.replace('default', 'Default')))
					: (i = null != i && '' !== i ? i : o),
				null != u && (n = u),
				{
					id: i,
					type: e,
					index: n,
					name: o,
					originalName: l,
					originalId: a
				}
			);
		});
	return (
		e !== s.h7.VIDEO_INPUT &&
			!r &&
			(null === i() || void 0 === i() ? void 0 : null === (n = i().os) || void 0 === n ? void 0 : n.family) != null &&
			/^win/i.test(i().os.family) &&
			a.unshift({
				id: s.w5,
				type: e,
				index: -1,
				name: 'Default'
			}),
		a
	);
}
function l() {
	return new Promise((e) => {
		(0, a.zS)().getInputDevices((t) => e(o(s.h7.AUDIO_INPUT, t)));
	});
}
function u() {
	return new Promise((e) => {
		(0, a.zS)().getOutputDevices((t) => e(o(s.h7.AUDIO_OUTPUT, t)));
	});
}
function c() {
	return new Promise((e) => {
		(0, a.zS)().getVideoInputDevices((t) => e(o(s.h7.VIDEO_INPUT, t)));
	});
}
