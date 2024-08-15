var r = n(687249),
	i = n(48889),
	a = n(11537),
	s = n(806867),
	o = n(542334),
	l = n(829815),
	u = n(566131),
	c = n(773151),
	d = n(893741),
	_ = n(821164),
	E = n(993106),
	f = n(53919),
	h = n(247323),
	p = n(609511),
	m = n(292548),
	I = n(290677),
	T = n(551023),
	g = n(118788),
	S = n(661233),
	A = n(357361),
	N = n(438330),
	v = '[object Arguments]',
	O = '[object Function]',
	R = '[object Object]',
	C = {};
(C[v] = C['[object Array]'] = C['[object ArrayBuffer]'] = C['[object DataView]'] = C['[object Boolean]'] = C['[object Date]'] = C['[object Float32Array]'] = C['[object Float64Array]'] = C['[object Int8Array]'] = C['[object Int16Array]'] = C['[object Int32Array]'] = C['[object Map]'] = C['[object Number]'] = C[R] = C['[object RegExp]'] = C['[object Set]'] = C['[object String]'] = C['[object Symbol]'] = C['[object Uint8Array]'] = C['[object Uint8ClampedArray]'] = C['[object Uint16Array]'] = C['[object Uint32Array]'] = !0), (C['[object Error]'] = C[O] = C['[object WeakMap]'] = !1);
e.exports = function e(t, n, y, D, L, b) {
	var M,
		P = 1 & n,
		U = 2 & n,
		w = 4 & n;
	if ((y && (M = L ? y(t, D, L, b) : y(t)), void 0 !== M)) return M;
	if (!S(t)) return t;
	var x = I(t);
	if (x) {
		if (((M = h(t)), !P)) return u(t, M);
	} else {
		var G = f(t),
			k = G == O || '[object GeneratorFunction]' == G;
		if (T(t)) return l(t, P);
		if (G == R || G == v || (k && !L)) {
			if (((M = U || k ? {} : m(t)), !P)) return U ? d(t, o(M, t)) : c(t, s(M, t));
		} else {
			if (!C[G]) return L ? t : {};
			M = p(t, G, P);
		}
	}
	b || (b = new r());
	var B = b.get(t);
	if (B) return B;
	b.set(t, M),
		A(t)
			? t.forEach(function (r) {
					M.add(e(r, n, y, r, t, b));
				})
			: g(t) &&
				t.forEach(function (r, i) {
					M.set(i, e(r, n, y, i, t, b));
				});
	var F = w ? (U ? E : _) : U ? keysIn : N,
		V = x ? void 0 : F(t);
	return (
		i(V || t, function (r, i) {
			V && (r = t[(i = r)]), a(M, i, e(r, n, y, i, t, b));
		}),
		M
	);
};
