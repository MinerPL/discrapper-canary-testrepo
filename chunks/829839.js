n.d(t, {
	AQ: function () {
		return E;
	},
	DY: function () {
		return c;
	},
	yQ: function () {
		return d;
	}
}),
	n(653041),
	n(733860);
var r,
	i,
	a,
	s,
	o = n(65154);
let l = [
	{
		name: 'H265',
		encode:
			(null === (i = window) || void 0 === i
				? void 0
				: null === (r = i.DiscordNative) || void 0 === r
					? void 0
					: r.process.platform) !== 'darwin' ||
			(null === (s = window) || void 0 === s
				? void 0
				: null === (a = s.DiscordNative) || void 0 === a
					? void 0
					: a.os.arch) === 'arm64',
		decode: !0
	},
	{
		name: 'H264',
		encode: !0,
		decode: !0
	},
	{
		name: 'VP8',
		encode: !0,
		decode: !0
	},
	{
		name: 'VP9',
		encode: !0,
		decode: !0
	}
];
function u(e, t) {
	let n = t.concat(l),
		r = [];
	return (
		n.forEach((t) => {
			let n = e.find((e) => t.name === e.codec);
			null != n &&
				r.push({
					name: n.codec,
					encode: n.encode && t.encode,
					decode: n.decode && t.decode
				});
		}),
		r
	);
}
function c(e) {
	let t = [];
	return (
		e.has(o.V8.SIGNAL_AV1_DECODE)
			? t.unshift({
					name: 'AV1',
					encode: !1,
					decode: !0
				})
			: e.has(o.V8.SIGNAL_AV1) &&
				t.unshift({
					name: 'AV1',
					encode: !0,
					decode: !0
				}),
		t
	);
}
function d(e, t) {
	return 'string' == typeof e
		? u(
				JSON.parse(e).map((e) => ({
					codec: _(e.codec),
					encode: e.encode,
					decode: e.decode
				})),
				t
			)
		: u(
				e.map((e) => ({
					codec: _(e),
					encode: !0,
					decode: !0
				})),
				t
			);
}
function _(e) {
	return 'AV1X' === e ? 'AV1' : e;
}
function E(e) {
	return 'AV1' === e ? 'AV1X' : e;
}
