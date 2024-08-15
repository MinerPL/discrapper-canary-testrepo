n.d(t, {
	BU: function () {
		return s;
	},
	IC: function () {
		return o;
	},
	XD: function () {
		return i;
	}
});
var r = n(689938);
let i = 1024,
	a = {
		useKibibytes: !1,
		showDecimalForGB: !0,
		useSpace: !0
	};
function s(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
		n = t.useKibibytes ? 1024 : 1000,
		i = t.useKibibytes ? 1024 : 1000,
		s = Math.ceil(e / n);
	if (s < i) return t.useSpace ? r.Z.Messages.FILE_SIZE_MB.format({ size: s }) : r.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: s });
	let o = s / i;
	return (o = t.showDecimalForGB ? Math.round(10 * o) / 10 : Math.round(o)), t.useSpace ? r.Z.Messages.FILE_SIZE_GB.format({ size: o }) : r.Z.Messages.FILE_SIZE_GB_NO_SPACE.format({ size: o });
}
function o(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
		n = t.useKibibytes ? i : 1000,
		o = t.useKibibytes ? 1024 : 1000,
		l = e / n;
	return l / o >= 1 ? s(l, t) : t.useSpace ? r.Z.Messages.FILE_SIZE_KB.format({ size: Math.ceil(l) }) : r.Z.Messages.FILE_SIZE_KB_NO_SPACE.format({ size: Math.ceil(l) });
}
