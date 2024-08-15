var e = n(147018),
	o = n(161581),
	i = n(926515),
	u = n(325008),
	f = n(22092),
	a = n(192291),
	c = n(476579),
	s = n(603528),
	y = n(879),
	p = n(251069),
	h = n(907533),
	v = n(552028),
	d = n(646328),
	g = n(18316),
	l = n(712560),
	A = n(966606),
	w = n(740362),
	x = n(974971),
	b = n(622281),
	T = n(323979),
	E = n(803938),
	I = n(838957),
	R = n(276321),
	m = n(537443).f,
	O = n(12367),
	M = n(335225).forEach,
	F = n(930990),
	U = n(4340),
	_ = n(97131),
	L = n(347722),
	B = n(644659),
	C = n(95948),
	S = B.get,
	P = B.set,
	V = B.enforce,
	N = _.f,
	W = L.f,
	j = o.RangeError,
	Y = c.ArrayBuffer,
	k = Y.prototype,
	D = c.DataView,
	G = a.NATIVE_ARRAY_BUFFER_VIEWS,
	z = a.TYPED_ARRAY_TAG,
	K = a.TypedArray,
	q = a.TypedArrayPrototype,
	H = a.aTypedArrayConstructor,
	J = a.isTypedArray,
	Q = 'BYTES_PER_ELEMENT',
	X = 'Wrong length',
	Z = function (t, r) {
		H(t);
		for (var n = 0, e = r.length, o = new t(e); e > n; ) o[n] = r[n++];
		return o;
	},
	$ = function (t, r) {
		U(t, r, {
			configurable: !0,
			get: function () {
				return S(this)[r];
			}
		});
	},
	tt = function (t) {
		var r;
		return I(k, t) || 'ArrayBuffer' === (r = x(t)) || 'SharedArrayBuffer' === r;
	},
	tr = function (t, r) {
		return J(t) && !T(r) && r in t && h(+r) && r >= 0;
	},
	tn = function (t, r) {
		return tr(t, (r = A(r))) ? y(2, t[r]) : W(t, r);
	},
	te = function (t, r, n) {
		return tr(t, (r = A(r))) && b(n) && w(n, 'value') && !w(n, 'get') && !w(n, 'set') && !n.configurable && (!w(n, 'writable') || n.writable) && (!w(n, 'enumerable') || n.enumerable) ? ((t[r] = n.value), t) : N(t, r, n);
	};
u
	? (!G && ((L.f = tn), (_.f = te), $(q, 'buffer'), $(q, 'byteOffset'), $(q, 'byteLength'), $(q, 'length')),
		e(
			{
				target: 'Object',
				stat: !0,
				forced: !G
			},
			{
				getOwnPropertyDescriptor: tn,
				defineProperty: te
			}
		),
		(t.exports = function (t, r, n) {
			var u = t.match(/\d+/)[0] / 8,
				a = t + (n ? 'Clamped' : '') + 'Array',
				c = 'get' + t,
				y = 'set' + t,
				h = o[a],
				A = h,
				w = A && A.prototype,
				x = {},
				T = function (t, r) {
					var n = S(t);
					return n.view[c](r * u + n.byteOffset, !0);
				},
				I = function (t, r, e) {
					var o = S(t);
					o.view[y](r * u + o.byteOffset, n ? l(e) : e, !0);
				},
				U = function (t, r) {
					N(t, r, {
						get: function () {
							return T(this, r);
						},
						set: function (t) {
							return I(this, r, t);
						},
						enumerable: !0
					});
				};
			G
				? f &&
					((A = r(function (t, r, n, e) {
						return s(t, w), C(b(r) ? (tt(r) ? (void 0 !== e ? new h(r, g(n, u), e) : void 0 !== n ? new h(r, g(n, u)) : new h(r)) : J(r) ? Z(A, r) : i(O, A, r)) : new h(d(r)), t, A);
					})),
					R && R(A, K),
					M(m(h), function (t) {
						!(t in A) && p(A, t, h[t]);
					}),
					(A.prototype = w))
				: ((A = r(function (t, r, n, e) {
						s(t, w);
						var o,
							f,
							a,
							c = 0,
							y = 0;
						if (b(r)) {
							if (tt(r)) {
								(o = r), (y = g(n, u));
								var p = r.byteLength;
								if (void 0 === e) {
									if (p % u || (f = p - y) < 0) throw j(X);
								} else if ((f = v(e) * u) + y > p) throw j(X);
								a = f / u;
							} else if (J(r)) return Z(A, r);
							else return i(O, A, r);
						} else o = new Y((f = (a = d(r)) * u));
						for (
							P(t, {
								buffer: o,
								byteOffset: y,
								byteLength: f,
								length: a,
								view: new D(o)
							});
							c < a;

						)
							U(t, c++);
					})),
					R && R(A, K),
					(w = A.prototype = E(q))),
				w.constructor !== A && p(w, 'constructor', A),
				(V(w).TypedArrayConstructor = A),
				z && p(w, z, a);
			var _ = A !== h;
			(x[a] = A),
				e(
					{
						global: !0,
						constructor: !0,
						forced: _,
						sham: !G
					},
					x
				),
				!(Q in A) && p(A, Q, u),
				!(Q in w) && p(w, Q, u),
				F(a);
		}))
	: (t.exports = function () {});
