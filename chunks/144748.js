var e = o(740362),
	n = o(354848),
	c = o(339718),
	i = o(883539),
	u = o(442975),
	a = i('IE_PROTO'),
	f = Object,
	E = f.prototype;
r.exports = u
	? f.getPrototypeOf
	: function (r) {
			var t = c(r);
			if (e(t, a)) return t[a];
			var o = t.constructor;
			return n(o) && t instanceof o ? o.prototype : t instanceof f ? E : null;
		};
