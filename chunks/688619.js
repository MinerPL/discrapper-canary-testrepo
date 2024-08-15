var t, r;
(t = 0),
	(r = function () {
		for (
			var e = function (e, t, r) {
					return void 0 === t && (t = 0), void 0 === r && (r = 1), e < t ? t : e > r ? r : e;
				},
				t = {},
				r = 0,
				n = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null'];
			r < n.length;
			r += 1
		) {
			var a = n[r];
			t['[object ' + a + ']'] = a.toLowerCase();
		}
		var o = function (e) {
				return t[Object.prototype.toString.call(e)] || 'object';
			},
			i = Math.PI,
			_ = {
				clip_rgb: function (t) {
					(t._clipped = !1), (t._unclipped = t.slice(0));
					for (var r = 0; r <= 3; r++)
						r < 3
							? ((t[r] < 0 || t[r] > 255) && (t._clipped = !0), (t[r] = e(t[r], 0, 255)))
							: 3 === r && (t[r] = e(t[r], 0, 1));
					return t;
				},
				limit: e,
				type: o,
				unpack: function (e, t) {
					return (void 0 === t && (t = null), e.length >= 3)
						? Array.prototype.slice.call(e)
						: 'object' == o(e[0]) && t
							? t
									.split('')
									.filter(function (t) {
										return void 0 !== e[0][t];
									})
									.map(function (t) {
										return e[0][t];
									})
							: e[0];
				},
				last: function (e) {
					if (e.length < 2) return null;
					var t = e.length - 1;
					return 'string' == o(e[t]) ? e[t].toLowerCase() : null;
				},
				TWOPI: 2 * i,
				PITHIRD: i / 3,
				DEG2RAD: i / 180,
				RAD2DEG: 180 / i
			},
			E = {
				format: {},
				autodetect: []
			},
			s = _.last,
			c = _.clip_rgb,
			I = _.type,
			u = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				if ('object' === I(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
				var r = s(e),
					n = !1;
				if (!r) {
					(n = !0),
						!E.sorted &&
							((E.autodetect = E.autodetect.sort(function (e, t) {
								return t.p - e.p;
							})),
							(E.sorted = !0));
					for (var a = 0, o = E.autodetect; a < o.length; a += 1) {
						var i = o[a];
						if ((r = i.test.apply(i, e))) break;
					}
				}
				if (E.format[r]) {
					var _ = E.format[r].apply(null, n ? e : e.slice(0, -1));
					this._rgb = c(_);
				} else throw Error('unknown format: ' + e);
				3 === this._rgb.length && this._rgb.push(1);
			};
		u.prototype.toString = function () {
			return 'function' == I(this.hex) ? this.hex() : '[' + this._rgb.join(',') + ']';
		};
		var l = function () {
			for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
			return new (Function.prototype.bind.apply(l.Color, [null].concat(e)))();
		};
		(l.Color = u), (l.version = '2.4.2');
		var R = _.unpack,
			A = Math.max,
			T = _.unpack,
			d = _.unpack,
			N = _.type,
			p = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = R(e, 'rgb'),
					n = r[0],
					a = r[1],
					o = r[2],
					i = 1 - A((n /= 255), A((a /= 255), (o /= 255))),
					_ = i < 1 ? 1 / (1 - i) : 0;
				return [(1 - n - i) * _, (1 - a - i) * _, (1 - o - i) * _, i];
			};
		(u.prototype.cmyk = function () {
			return p(this._rgb);
		}),
			(l.cmyk = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['cmyk'])))();
			}),
			(E.format.cmyk = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = (e = T(e, 'cmyk'))[0],
					n = e[1],
					a = e[2],
					o = e[3],
					i = e.length > 4 ? e[4] : 1;
				return 1 === o
					? [0, 0, 0, i]
					: [
							r >= 1 ? 0 : 255 * (1 - r) * (1 - o),
							n >= 1 ? 0 : 255 * (1 - n) * (1 - o),
							a >= 1 ? 0 : 255 * (1 - a) * (1 - o),
							i
						];
			}),
			E.autodetect.push({
				p: 2,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if ('array' === N((e = d(e, 'cmyk'))) && 4 === e.length) return 'cmyk';
				}
			});
		var O = _.unpack,
			f = _.last,
			S = function (e) {
				return Math.round(100 * e) / 100;
			},
			D = _.unpack,
			L = function () {
				for (var e, t, r = [], n = arguments.length; n--; ) r[n] = arguments[n];
				var a = (r = D(r, 'rgba'))[0],
					o = r[1],
					i = r[2],
					_ = Math.min((a /= 255), (o /= 255), (i /= 255)),
					E = Math.max(a, o, i),
					s = (E + _) / 2;
				return (E === _ ? ((e = 0), (t = Number.NaN)) : (e = s < 0.5 ? (E - _) / (E + _) : (E - _) / (2 - E - _)),
				a == E ? (t = (o - i) / (E - _)) : o == E ? (t = 2 + (i - a) / (E - _)) : i == E && (t = 4 + (a - o) / (E - _)),
				(t *= 60) < 0 && (t += 360),
				r.length > 3 && void 0 !== r[3])
					? [t, e, s, r[3]]
					: [t, e, s];
			},
			h = _.unpack,
			C = _.last,
			g = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = O(e, 'hsla'),
					n = f(e) || 'lsa';
				return (
					(r[0] = S(r[0] || 0)),
					(r[1] = S(100 * r[1]) + '%'),
					(r[2] = S(100 * r[2]) + '%'),
					'hsla' === n || (r.length > 3 && r[3] < 1)
						? ((r[3] = r.length > 3 ? r[3] : 1), (n = 'hsla'))
						: (r.length = 3),
					n + '(' + r.join(',') + ')'
				);
			},
			M = Math.round,
			P = _.unpack,
			m = Math.round,
			U = function () {
				for (var e, t, r, n, a = [], o = arguments.length; o--; ) a[o] = arguments[o];
				var i = (a = P(a, 'hsl'))[0],
					_ = a[1],
					E = a[2];
				if (0 === _) t = r = n = 255 * E;
				else {
					var s = [0, 0, 0],
						c = [0, 0, 0],
						I = E < 0.5 ? E * (1 + _) : E + _ - E * _,
						u = 2 * E - I,
						l = i / 360;
					(s[0] = l + 1 / 3), (s[1] = l), (s[2] = l - 1 / 3);
					for (var R = 0; R < 3; R++)
						s[R] < 0 && (s[R] += 1),
							s[R] > 1 && (s[R] -= 1),
							6 * s[R] < 1
								? (c[R] = u + (I - u) * 6 * s[R])
								: 2 * s[R] < 1
									? (c[R] = I)
									: 3 * s[R] < 2
										? (c[R] = u + (I - u) * (2 / 3 - s[R]) * 6)
										: (c[R] = u);
					(t = (e = [m(255 * c[0]), m(255 * c[1]), m(255 * c[2])])[0]), (r = e[1]), (n = e[2]);
				}
				return a.length > 3 ? [t, r, n, a[3]] : [t, r, n, 1];
			},
			G = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
			y = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
			v = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
			b = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
			B = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
			w = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
			H = Math.round,
			Y = function (e) {
				if (((e = e.toLowerCase().trim()), E.format.named))
					try {
						return E.format.named(e);
					} catch (e) {}
				if ((t = e.match(G))) {
					for (var t, r = t.slice(1, 4), n = 0; n < 3; n++) r[n] = +r[n];
					return (r[3] = 1), r;
				}
				if ((t = e.match(y))) {
					for (var a = t.slice(1, 5), o = 0; o < 4; o++) a[o] = +a[o];
					return a;
				}
				if ((t = e.match(v))) {
					for (var i = t.slice(1, 4), _ = 0; _ < 3; _++) i[_] = H(2.55 * i[_]);
					return (i[3] = 1), i;
				}
				if ((t = e.match(b))) {
					for (var s = t.slice(1, 5), c = 0; c < 3; c++) s[c] = H(2.55 * s[c]);
					return (s[3] = +s[3]), s;
				}
				if ((t = e.match(B))) {
					var I = t.slice(1, 4);
					(I[1] *= 0.01), (I[2] *= 0.01);
					var u = U(I);
					return (u[3] = 1), u;
				}
				if ((t = e.match(w))) {
					var l = t.slice(1, 4);
					(l[1] *= 0.01), (l[2] *= 0.01);
					var R = U(l);
					return (R[3] = +t[4]), R;
				}
			};
		Y.test = function (e) {
			return G.test(e) || y.test(e) || v.test(e) || b.test(e) || B.test(e) || w.test(e);
		};
		var K = _.type,
			k = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = h(e, 'rgba'),
					n = C(e) || 'rgb';
				return 'hsl' == n.substr(0, 3)
					? g(L(r), n)
					: ((r[0] = M(r[0])),
						(r[1] = M(r[1])),
						(r[2] = M(r[2])),
						('rgba' === n || (r.length > 3 && r[3] < 1)) && ((r[3] = r.length > 3 ? r[3] : 1), (n = 'rgba')),
						n + '(' + r.slice(0, 'rgb' === n ? 3 : 4).join(',') + ')');
			};
		(u.prototype.css = function (e) {
			return k(this._rgb, e);
		}),
			(l.css = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['css'])))();
			}),
			(E.format.css = Y),
			E.autodetect.push({
				p: 5,
				test: function (e) {
					for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
					if (!t.length && 'string' === K(e) && Y.test(e)) return 'css';
				}
			});
		var V = _.unpack;
		(E.format.gl = function () {
			for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
			var r = V(e, 'rgba');
			return (r[0] *= 255), (r[1] *= 255), (r[2] *= 255), r;
		}),
			(l.gl = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['gl'])))();
			}),
			(u.prototype.gl = function () {
				var e = this._rgb;
				return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
			});
		var x = _.unpack,
			F = _.unpack,
			W = Math.floor,
			X = _.unpack,
			j = _.type,
			$ = function () {
				for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
				var n = x(t, 'rgb'),
					a = n[0],
					o = n[1],
					i = n[2],
					_ = Math.min(a, o, i),
					E = Math.max(a, o, i),
					s = E - _;
				return (
					0 === s
						? (e = Number.NaN)
						: (a === E && (e = (o - i) / s),
							o === E && (e = 2 + (i - a) / s),
							i === E && (e = 4 + (a - o) / s),
							(e *= 60) < 0 && (e += 360)),
					[e, (100 * s) / 255, (_ / (255 - s)) * 100]
				);
			};
		(u.prototype.hcg = function () {
			return $(this._rgb);
		}),
			(l.hcg = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['hcg'])))();
			}),
			(E.format.hcg = function () {
				for (var e, t, r, n, a, o, i, _, E, s = [], c = arguments.length; c--; ) s[c] = arguments[c];
				var I = (s = F(s, 'hcg'))[0],
					u = s[1],
					l = s[2];
				l *= 255;
				var R = 255 * u;
				if (0 === u) i = _ = E = l;
				else {
					360 === I && (I = 0), I > 360 && (I -= 360), I < 0 && (I += 360);
					var A = W((I /= 60)),
						T = I - A,
						d = l * (1 - u),
						N = d + R * (1 - T),
						p = d + R * T,
						O = d + R;
					switch (A) {
						case 0:
							(i = (e = [O, p, d])[0]), (_ = e[1]), (E = e[2]);
							break;
						case 1:
							(i = (t = [N, O, d])[0]), (_ = t[1]), (E = t[2]);
							break;
						case 2:
							(i = (r = [d, O, p])[0]), (_ = r[1]), (E = r[2]);
							break;
						case 3:
							(i = (n = [d, N, O])[0]), (_ = n[1]), (E = n[2]);
							break;
						case 4:
							(i = (a = [p, d, O])[0]), (_ = a[1]), (E = a[2]);
							break;
						case 5:
							(i = (o = [O, d, N])[0]), (_ = o[1]), (E = o[2]);
					}
				}
				return [i, _, E, s.length > 3 ? s[3] : 1];
			}),
			E.autodetect.push({
				p: 1,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if ('array' === j((e = X(e, 'hcg'))) && 3 === e.length) return 'hcg';
				}
			});
		var q = _.unpack,
			z = _.last,
			J = Math.round,
			Q = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = q(e, 'rgba'),
					n = r[0],
					a = r[1],
					o = r[2],
					i = r[3],
					_ = z(e) || 'auto';
				void 0 === i && (i = 1), 'auto' === _ && (_ = i < 1 ? 'rgba' : 'rgb'), (n = J(n)), (a = J(a));
				var E = '000000' + ((n << 16) | (a << 8) | (o = J(o))).toString(16);
				E = E.substr(E.length - 6);
				var s = '0' + J(255 * i).toString(16);
				switch (((s = s.substr(s.length - 2)), _.toLowerCase())) {
					case 'rgba':
						return '#' + E + s;
					case 'argb':
						return '#' + s + E;
					default:
						return '#' + E;
				}
			},
			Z = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
			ee = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
			et = function (e) {
				if (e.match(Z)) {
					(4 === e.length || 7 === e.length) && (e = e.substr(1)),
						3 === e.length && (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
					var t = parseInt(e, 16);
					return [t >> 16, (t >> 8) & 255, 255 & t, 1];
				}
				if (e.match(ee)) {
					(5 === e.length || 9 === e.length) && (e = e.substr(1)),
						4 === e.length && (e = (e = e.split(''))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
					var r = parseInt(e, 16),
						n = Math.round(((255 & r) / 255) * 100) / 100;
					return [(r >> 24) & 255, (r >> 16) & 255, (r >> 8) & 255, n];
				}
				throw Error('unknown hex color: ' + e);
			},
			er = _.type;
		(u.prototype.hex = function (e) {
			return Q(this._rgb, e);
		}),
			(l.hex = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['hex'])))();
			}),
			(E.format.hex = et),
			E.autodetect.push({
				p: 4,
				test: function (e) {
					for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
					if (!t.length && 'string' === er(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return 'hex';
				}
			});
		var en = _.unpack,
			ea = _.TWOPI,
			eo = Math.min,
			ei = Math.sqrt,
			e_ = Math.acos,
			eE = _.unpack,
			es = _.limit,
			ec = _.TWOPI,
			eI = _.PITHIRD,
			eu = Math.cos,
			el = _.unpack,
			eR = _.type,
			eA = function () {
				for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
				var n = en(t, 'rgb'),
					a = n[0],
					o = n[1],
					i = n[2],
					_ = eo((a /= 255), (o /= 255), (i /= 255)),
					E = (a + o + i) / 3,
					s = E > 0 ? 1 - _ / E : 0;
				return (
					0 === s
						? (e = NaN)
						: ((e = e_((e = (a - o + (a - i)) / 2 / ei((a - o) * (a - o) + (a - i) * (o - i))))),
							i > o && (e = ea - e),
							(e /= ea)),
					[360 * e, s, E]
				);
			};
		(u.prototype.hsi = function () {
			return eA(this._rgb);
		}),
			(l.hsi = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['hsi'])))();
			}),
			(E.format.hsi = function () {
				for (var e, t, r, n = [], a = arguments.length; a--; ) n[a] = arguments[a];
				var o = (n = eE(n, 'hsi'))[0],
					i = n[1],
					_ = n[2];
				return (
					isNaN(o) && (o = 0),
					isNaN(i) && (i = 0),
					o > 360 && (o -= 360),
					o < 0 && (o += 360),
					(o /= 360) < 1 / 3
						? (t = 1 - ((r = (1 - i) / 3) + (e = (1 + (i * eu(ec * o)) / eu(eI - ec * o)) / 3)))
						: o < 2 / 3
							? ((o -= 1 / 3), (r = 1 - ((e = (1 - i) / 3) + (t = (1 + (i * eu(ec * o)) / eu(eI - ec * o)) / 3))))
							: ((o -= 2 / 3), (e = 1 - ((t = (1 - i) / 3) + (r = (1 + (i * eu(ec * o)) / eu(eI - ec * o)) / 3)))),
					(e = es(_ * e * 3)),
					(t = es(_ * t * 3)),
					[255 * e, 255 * t, 255 * (r = es(_ * r * 3)), n.length > 3 ? n[3] : 1]
				);
			}),
			E.autodetect.push({
				p: 2,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if ('array' === eR((e = el(e, 'hsi'))) && 3 === e.length) return 'hsi';
				}
			});
		var eT = _.unpack,
			ed = _.type;
		(u.prototype.hsl = function () {
			return L(this._rgb);
		}),
			(l.hsl = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['hsl'])))();
			}),
			(E.format.hsl = U),
			E.autodetect.push({
				p: 2,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if ('array' === ed((e = eT(e, 'hsl'))) && 3 === e.length) return 'hsl';
				}
			});
		var eN = _.unpack,
			ep = Math.min,
			eO = Math.max,
			ef = _.unpack,
			eS = Math.floor,
			eD = _.unpack,
			eL = _.type,
			eh = function () {
				for (var e, t, r, n = [], a = arguments.length; a--; ) n[a] = arguments[a];
				var o = (n = eN(n, 'rgb'))[0],
					i = n[1],
					_ = n[2],
					E = ep(o, i, _),
					s = eO(o, i, _),
					c = s - E;
				return (
					(r = s / 255),
					0 === s
						? ((e = Number.NaN), (t = 0))
						: ((t = c / s),
							o === s && (e = (i - _) / c),
							i === s && (e = 2 + (_ - o) / c),
							_ === s && (e = 4 + (o - i) / c),
							(e *= 60) < 0 && (e += 360)),
					[e, t, r]
				);
			};
		(u.prototype.hsv = function () {
			return eh(this._rgb);
		}),
			(l.hsv = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['hsv'])))();
			}),
			(E.format.hsv = function () {
				for (var e, t, r, n, a, o, i, _, E, s = [], c = arguments.length; c--; ) s[c] = arguments[c];
				var I = (s = ef(s, 'hsv'))[0],
					u = s[1],
					l = s[2];
				if (((l *= 255), 0 === u)) i = _ = E = l;
				else {
					360 === I && (I = 0), I > 360 && (I -= 360), I < 0 && (I += 360);
					var R = eS((I /= 60)),
						A = I - R,
						T = l * (1 - u),
						d = l * (1 - u * A),
						N = l * (1 - u * (1 - A));
					switch (R) {
						case 0:
							(i = (e = [l, N, T])[0]), (_ = e[1]), (E = e[2]);
							break;
						case 1:
							(i = (t = [d, l, T])[0]), (_ = t[1]), (E = t[2]);
							break;
						case 2:
							(i = (r = [T, l, N])[0]), (_ = r[1]), (E = r[2]);
							break;
						case 3:
							(i = (n = [T, d, l])[0]), (_ = n[1]), (E = n[2]);
							break;
						case 4:
							(i = (a = [N, T, l])[0]), (_ = a[1]), (E = a[2]);
							break;
						case 5:
							(i = (o = [l, T, d])[0]), (_ = o[1]), (E = o[2]);
					}
				}
				return [i, _, E, s.length > 3 ? s[3] : 1];
			}),
			E.autodetect.push({
				p: 2,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if ('array' === eL((e = eD(e, 'hsv'))) && 3 === e.length) return 'hsv';
				}
			});
		var eC = {
				Kn: 18,
				Xn: 0.95047,
				Yn: 1,
				Zn: 1.08883,
				t0: 0.137931034,
				t1: 0.206896552,
				t2: 0.12841855,
				t3: 0.008856452
			},
			eg = _.unpack,
			eM = Math.pow,
			eP = function (e) {
				return (e /= 255) <= 0.04045 ? e / 12.92 : eM((e + 0.055) / 1.055, 2.4);
			},
			em = function (e) {
				return e > eC.t3 ? eM(e, 1 / 3) : e / eC.t2 + eC.t0;
			},
			eU = function (e, t, r) {
				return (
					(e = eP(e)),
					(t = eP(t)),
					[
						em((0.4124564 * e + 0.3575761 * t + 0.1804375 * (r = eP(r))) / eC.Xn),
						em((0.2126729 * e + 0.7151522 * t + 0.072175 * r) / eC.Yn),
						em((0.0193339 * e + 0.119192 * t + 0.9503041 * r) / eC.Zn)
					]
				);
			},
			eG = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = eg(e, 'rgb'),
					n = eU(r[0], r[1], r[2]),
					a = n[0],
					o = n[1],
					i = n[2],
					_ = 116 * o - 16;
				return [_ < 0 ? 0 : _, 500 * (a - o), 200 * (o - i)];
			},
			ey = _.unpack,
			ev = Math.pow,
			eb = function (e) {
				return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * ev(e, 1 / 2.4) - 0.055);
			},
			eB = function (e) {
				return e > eC.t1 ? e * e * e : eC.t2 * (e - eC.t0);
			},
			ew = function () {
				for (var e, t, r, n, a, o = [], i = arguments.length; i--; ) o[i] = arguments[i];
				var _ = (o = ey(o, 'lab'))[0],
					E = o[1],
					s = o[2];
				return (
					(t = (_ + 16) / 116),
					(e = isNaN(E) ? t : t + E / 500),
					(r = isNaN(s) ? t : t - s / 200),
					(t = eC.Yn * eB(t)),
					(e = eC.Xn * eB(e)),
					(n = eb(3.2404542 * e - 1.5371385 * t - 0.4985314 * (r = eC.Zn * eB(r)))),
					(a = eb(-0.969266 * e + 1.8760108 * t + 0.041556 * r)),
					[n, a, eb(0.0556434 * e - 0.2040259 * t + 1.0572252 * r), o.length > 3 ? o[3] : 1]
				);
			},
			eH = _.unpack,
			eY = _.type;
		(u.prototype.lab = function () {
			return eG(this._rgb);
		}),
			(l.lab = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['lab'])))();
			}),
			(E.format.lab = ew),
			E.autodetect.push({
				p: 2,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if ('array' === eY((e = eH(e, 'lab'))) && 3 === e.length) return 'lab';
				}
			});
		var eK = _.unpack,
			ek = _.RAD2DEG,
			eV = Math.sqrt,
			ex = Math.atan2,
			eF = Math.round,
			eW = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = eK(e, 'lab'),
					n = r[0],
					a = r[1],
					o = r[2],
					i = eV(a * a + o * o),
					_ = (ex(o, a) * ek + 360) % 360;
				return 0 === eF(10000 * i) && (_ = Number.NaN), [n, i, _];
			},
			eX = _.unpack,
			ej = _.unpack,
			e$ = _.DEG2RAD,
			eq = Math.sin,
			ez = Math.cos,
			eJ = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = ej(e, 'lch'),
					n = r[0],
					a = r[1],
					o = r[2];
				return isNaN(o) && (o = 0), [n, ez((o *= e$)) * a, eq(o) * a];
			},
			eQ = _.unpack,
			eZ = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = eJ((e = eQ(e, 'lch'))[0], e[1], e[2]),
					n = ew(r[0], r[1], r[2]);
				return [n[0], n[1], n[2], e.length > 3 ? e[3] : 1];
			},
			e0 = _.unpack,
			e1 = _.unpack,
			e3 = _.type,
			e2 = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = eX(e, 'rgb'),
					n = eG(r[0], r[1], r[2]);
				return eW(n[0], n[1], n[2]);
			};
		(u.prototype.lch = function () {
			return e2(this._rgb);
		}),
			(u.prototype.hcl = function () {
				return e2(this._rgb).reverse();
			}),
			(l.lch = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['lch'])))();
			}),
			(l.hcl = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['hcl'])))();
			}),
			(E.format.lch = eZ),
			(E.format.hcl = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = e0(e, 'hcl').reverse();
				return eZ.apply(void 0, r);
			}),
			['lch', 'hcl'].forEach(function (e) {
				return E.autodetect.push({
					p: 2,
					test: function () {
						for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
						if ('array' === e3((t = e1(t, e))) && 3 === t.length) return e;
					}
				});
			});
		var e6 = {
				aliceblue: '#f0f8ff',
				antiquewhite: '#faebd7',
				aqua: '#00ffff',
				aquamarine: '#7fffd4',
				azure: '#f0ffff',
				beige: '#f5f5dc',
				bisque: '#ffe4c4',
				black: '#000000',
				blanchedalmond: '#ffebcd',
				blue: '#0000ff',
				blueviolet: '#8a2be2',
				brown: '#a52a2a',
				burlywood: '#deb887',
				cadetblue: '#5f9ea0',
				chartreuse: '#7fff00',
				chocolate: '#d2691e',
				coral: '#ff7f50',
				cornflower: '#6495ed',
				cornflowerblue: '#6495ed',
				cornsilk: '#fff8dc',
				crimson: '#dc143c',
				cyan: '#00ffff',
				darkblue: '#00008b',
				darkcyan: '#008b8b',
				darkgoldenrod: '#b8860b',
				darkgray: '#a9a9a9',
				darkgreen: '#006400',
				darkgrey: '#a9a9a9',
				darkkhaki: '#bdb76b',
				darkmagenta: '#8b008b',
				darkolivegreen: '#556b2f',
				darkorange: '#ff8c00',
				darkorchid: '#9932cc',
				darkred: '#8b0000',
				darksalmon: '#e9967a',
				darkseagreen: '#8fbc8f',
				darkslateblue: '#483d8b',
				darkslategray: '#2f4f4f',
				darkslategrey: '#2f4f4f',
				darkturquoise: '#00ced1',
				darkviolet: '#9400d3',
				deeppink: '#ff1493',
				deepskyblue: '#00bfff',
				dimgray: '#696969',
				dimgrey: '#696969',
				dodgerblue: '#1e90ff',
				firebrick: '#b22222',
				floralwhite: '#fffaf0',
				forestgreen: '#228b22',
				fuchsia: '#ff00ff',
				gainsboro: '#dcdcdc',
				ghostwhite: '#f8f8ff',
				gold: '#ffd700',
				goldenrod: '#daa520',
				gray: '#808080',
				green: '#008000',
				greenyellow: '#adff2f',
				grey: '#808080',
				honeydew: '#f0fff0',
				hotpink: '#ff69b4',
				indianred: '#cd5c5c',
				indigo: '#4b0082',
				ivory: '#fffff0',
				khaki: '#f0e68c',
				laserlemon: '#ffff54',
				lavender: '#e6e6fa',
				lavenderblush: '#fff0f5',
				lawngreen: '#7cfc00',
				lemonchiffon: '#fffacd',
				lightblue: '#add8e6',
				lightcoral: '#f08080',
				lightcyan: '#e0ffff',
				lightgoldenrod: '#fafad2',
				lightgoldenrodyellow: '#fafad2',
				lightgray: '#d3d3d3',
				lightgreen: '#90ee90',
				lightgrey: '#d3d3d3',
				lightpink: '#ffb6c1',
				lightsalmon: '#ffa07a',
				lightseagreen: '#20b2aa',
				lightskyblue: '#87cefa',
				lightslategray: '#778899',
				lightslategrey: '#778899',
				lightsteelblue: '#b0c4de',
				lightyellow: '#ffffe0',
				lime: '#00ff00',
				limegreen: '#32cd32',
				linen: '#faf0e6',
				magenta: '#ff00ff',
				maroon: '#800000',
				maroon2: '#7f0000',
				maroon3: '#b03060',
				mediumaquamarine: '#66cdaa',
				mediumblue: '#0000cd',
				mediumorchid: '#ba55d3',
				mediumpurple: '#9370db',
				mediumseagreen: '#3cb371',
				mediumslateblue: '#7b68ee',
				mediumspringgreen: '#00fa9a',
				mediumturquoise: '#48d1cc',
				mediumvioletred: '#c71585',
				midnightblue: '#191970',
				mintcream: '#f5fffa',
				mistyrose: '#ffe4e1',
				moccasin: '#ffe4b5',
				navajowhite: '#ffdead',
				navy: '#000080',
				oldlace: '#fdf5e6',
				olive: '#808000',
				olivedrab: '#6b8e23',
				orange: '#ffa500',
				orangered: '#ff4500',
				orchid: '#da70d6',
				palegoldenrod: '#eee8aa',
				palegreen: '#98fb98',
				paleturquoise: '#afeeee',
				palevioletred: '#db7093',
				papayawhip: '#ffefd5',
				peachpuff: '#ffdab9',
				peru: '#cd853f',
				pink: '#ffc0cb',
				plum: '#dda0dd',
				powderblue: '#b0e0e6',
				purple: '#800080',
				purple2: '#7f007f',
				purple3: '#a020f0',
				rebeccapurple: '#663399',
				red: '#ff0000',
				rosybrown: '#bc8f8f',
				royalblue: '#4169e1',
				saddlebrown: '#8b4513',
				salmon: '#fa8072',
				sandybrown: '#f4a460',
				seagreen: '#2e8b57',
				seashell: '#fff5ee',
				sienna: '#a0522d',
				silver: '#c0c0c0',
				skyblue: '#87ceeb',
				slateblue: '#6a5acd',
				slategray: '#708090',
				slategrey: '#708090',
				snow: '#fffafa',
				springgreen: '#00ff7f',
				steelblue: '#4682b4',
				tan: '#d2b48c',
				teal: '#008080',
				thistle: '#d8bfd8',
				tomato: '#ff6347',
				turquoise: '#40e0d0',
				violet: '#ee82ee',
				wheat: '#f5deb3',
				white: '#ffffff',
				whitesmoke: '#f5f5f5',
				yellow: '#ffff00',
				yellowgreen: '#9acd32'
			},
			e5 = _.type;
		(u.prototype.name = function () {
			for (var e = Q(this._rgb, 'rgb'), t = 0, r = Object.keys(e6); t < r.length; t += 1) {
				var n = r[t];
				if (e6[n] === e) return n.toLowerCase();
			}
			return e;
		}),
			(E.format.named = function (e) {
				if (e6[(e = e.toLowerCase())]) return et(e6[e]);
				throw Error('unknown color name: ' + e);
			}),
			E.autodetect.push({
				p: 5,
				test: function (e) {
					for (var t = [], r = arguments.length - 1; r-- > 0; ) t[r] = arguments[r + 1];
					if (!t.length && 'string' === e5(e) && e6[e.toLowerCase()]) return 'named';
				}
			});
		var e4 = _.unpack,
			e8 = _.type,
			e7 = _.type,
			e9 = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = e4(e, 'rgb');
				return (r[0] << 16) + (r[1] << 8) + r[2];
			};
		(u.prototype.num = function () {
			return e9(this._rgb);
		}),
			(l.num = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['num'])))();
			}),
			(E.format.num = function (e) {
				if ('number' == e8(e) && e >= 0 && e <= 16777215) return [e >> 16, (e >> 8) & 255, 255 & e, 1];
				throw Error('unknown num color: ' + e);
			}),
			E.autodetect.push({
				p: 5,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if (1 === e.length && 'number' === e7(e[0]) && e[0] >= 0 && e[0] <= 16777215) return 'num';
				}
			});
		var te = _.unpack,
			tt = _.type,
			tr = Math.round;
		(u.prototype.rgb = function (e) {
			return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(tr);
		}),
			(u.prototype.rgba = function (e) {
				return (
					void 0 === e && (e = !0),
					this._rgb.slice(0, 4).map(function (t, r) {
						return r < 3 ? (!1 === e ? t : tr(t)) : t;
					})
				);
			}),
			(l.rgb = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['rgb'])))();
			}),
			(E.format.rgb = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = te(e, 'rgba');
				return void 0 === r[3] && (r[3] = 1), r;
			}),
			E.autodetect.push({
				p: 3,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if (
						'array' === tt((e = te(e, 'rgba'))) &&
						(3 === e.length || (4 === e.length && 'number' == tt(e[3]) && e[3] >= 0 && e[3] <= 1))
					)
						return 'rgb';
				}
			});
		var tn = Math.log,
			ta = function (e) {
				var t,
					r,
					n,
					a = e / 100;
				return (
					a < 66
						? ((t = 255),
							(r = a < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (r = a - 2) + 104.49216199393888 * tn(r)),
							(n = a < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (n = a - 10) + 115.67994401066147 * tn(n)))
						: ((t = 351.97690566805693 + 0.114206453784165 * (t = a - 55) - 40.25366309332127 * tn(t)),
							(r = 325.4494125711974 + 0.07943456536662342 * (r = a - 50) - 28.0852963507957 * tn(r)),
							(n = 255)),
					[t, r, n, 1]
				);
			},
			to = _.unpack,
			ti = Math.round,
			t_ = function () {
				for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
				for (var n = to(t, 'rgb'), a = n[0], o = n[2], i = 1000, _ = 40000; _ - i > 0.4; ) {
					var E = ta((e = (_ + i) * 0.5));
					E[2] / E[0] >= o / a ? (_ = e) : (i = e);
				}
				return ti(e);
			};
		(u.prototype.temp =
			u.prototype.kelvin =
			u.prototype.temperature =
				function () {
					return t_(this._rgb);
				}),
			(l.temp =
				l.kelvin =
				l.temperature =
					function () {
						for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
						return new (Function.prototype.bind.apply(u, [null].concat(e, ['temp'])))();
					}),
			(E.format.temp = E.format.kelvin = E.format.temperature = ta);
		var tE = _.unpack,
			ts = Math.cbrt,
			tc = Math.pow,
			tI = Math.sign,
			tu = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = tE(e, 'rgb'),
					n = r[0],
					a = r[1],
					o = r[2],
					i = [tl(n / 255), tl(a / 255), tl(o / 255)],
					_ = i[0],
					E = i[1],
					s = i[2],
					c = ts(0.4122214708 * _ + 0.5363325363 * E + 0.0514459929 * s),
					I = ts(0.2119034982 * _ + 0.6806995451 * E + 0.1073969566 * s),
					u = ts(0.0883024619 * _ + 0.2817188376 * E + 0.6299787005 * s);
				return [
					0.2104542553 * c + 0.793617785 * I - 0.0040720468 * u,
					1.9779984951 * c - 2.428592205 * I + 0.4505937099 * u,
					0.0259040371 * c + 0.7827717662 * I - 0.808675766 * u
				];
			};
		function tl(e) {
			var t = Math.abs(e);
			return t < 0.04045 ? e / 12.92 : (tI(e) || 1) * tc((t + 0.055) / 1.055, 2.4);
		}
		var tR = _.unpack,
			tA = Math.pow,
			tT = Math.sign,
			td = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = (e = tR(e, 'lab'))[0],
					n = e[1],
					a = e[2],
					o = tA(r + 0.3963377774 * n + 0.2158037573 * a, 3),
					i = tA(r - 0.1055613458 * n - 0.0638541728 * a, 3),
					_ = tA(r - 0.0894841775 * n - 1.291485548 * a, 3);
				return [
					255 * tN(4.0767416621 * o - 3.3077115913 * i + 0.2309699292 * _),
					255 * tN(-1.2684380046 * o + 2.6097574011 * i - 0.3413193965 * _),
					255 * tN(-0.0041960863 * o - 0.7034186147 * i + 1.707614701 * _),
					e.length > 3 ? e[3] : 1
				];
			};
		function tN(e) {
			var t = Math.abs(e);
			return t > 0.0031308 ? (tT(e) || 1) * (1.055 * tA(t, 1 / 2.4) - 0.055) : 12.92 * e;
		}
		var tp = _.unpack,
			tO = _.type;
		(u.prototype.oklab = function () {
			return tu(this._rgb);
		}),
			(l.oklab = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['oklab'])))();
			}),
			(E.format.oklab = td),
			E.autodetect.push({
				p: 3,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if ('array' === tO((e = tp(e, 'oklab'))) && 3 === e.length) return 'oklab';
				}
			});
		var tf = _.unpack,
			tS = _.unpack,
			tD = _.unpack,
			tL = _.type,
			th = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = tf(e, 'rgb'),
					n = tu(r[0], r[1], r[2]);
				return eW(n[0], n[1], n[2]);
			};
		(u.prototype.oklch = function () {
			return th(this._rgb);
		}),
			(l.oklch = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				return new (Function.prototype.bind.apply(u, [null].concat(e, ['oklch'])))();
			}),
			(E.format.oklch = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				var r = eJ((e = tS(e, 'lch'))[0], e[1], e[2]),
					n = td(r[0], r[1], r[2]);
				return [n[0], n[1], n[2], e.length > 3 ? e[3] : 1];
			}),
			E.autodetect.push({
				p: 3,
				test: function () {
					for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
					if ('array' === tL((e = tD(e, 'oklch'))) && 3 === e.length) return 'oklch';
				}
			});
		var tC = _.type;
		u.prototype.alpha = function (e, t) {
			if ((void 0 === t && (t = !1), void 0 !== e && 'number' === tC(e)))
				return t ? ((this._rgb[3] = e), this) : new u([this._rgb[0], this._rgb[1], this._rgb[2], e], 'rgb');
			return this._rgb[3];
		};
		u.prototype.clipped = function () {
			return this._rgb._clipped || !1;
		};
		(u.prototype.darken = function (e) {
			void 0 === e && (e = 1);
			var t = this.lab();
			return (t[0] -= eC.Kn * e), new u(t, 'lab').alpha(this.alpha(), !0);
		}),
			(u.prototype.brighten = function (e) {
				return void 0 === e && (e = 1), this.darken(-e);
			}),
			(u.prototype.darker = u.prototype.darken),
			(u.prototype.brighter = u.prototype.brighten);
		u.prototype.get = function (e) {
			var t = e.split('.'),
				r = t[0],
				n = t[1],
				a = this[r]();
			if (!n) return a;
			var o = r.indexOf(n) - ('ok' === r.substr(0, 2) ? 2 : 0);
			if (o > -1) return a[o];
			throw Error('unknown channel ' + n + ' in mode ' + r);
		};
		var tg = _.type,
			tM = Math.pow;
		u.prototype.luminance = function (e) {
			if (void 0 !== e && 'number' === tg(e)) {
				if (0 === e) return new u([0, 0, 0, this._rgb[3]], 'rgb');
				if (1 === e) return new u([255, 255, 255, this._rgb[3]], 'rgb');
				var t = this.luminance(),
					r = 20,
					n = function (t, a) {
						var o = t.interpolate(a, 0.5, 'rgb'),
							i = o.luminance();
						return !(1e-7 > Math.abs(e - i)) && r-- ? (i > e ? n(t, o) : n(o, a)) : o;
					},
					a = (t > e ? n(new u([0, 0, 0]), this) : n(this, new u([255, 255, 255]))).rgb();
				return new u(a.concat([this._rgb[3]]));
			}
			return tP.apply(void 0, this._rgb.slice(0, 3));
		};
		var tP = function (e, t, r) {
				return (e = tm(e)), (t = tm(t)), 0.2126 * e + 0.7152 * t + 0.0722 * (r = tm(r));
			},
			tm = function (e) {
				return (e /= 255) <= 0.03928 ? e / 12.92 : tM((e + 0.055) / 1.055, 2.4);
			},
			tU = {},
			tG = _.type,
			ty = function (e, t, r) {
				void 0 === r && (r = 0.5);
				for (var n = [], a = arguments.length - 3; a-- > 0; ) n[a] = arguments[a + 3];
				var o = n[0] || 'lrgb';
				if ((!tU[o] && !n.length && (o = Object.keys(tU)[0]), !tU[o]))
					throw Error('interpolation mode ' + o + ' is not defined');
				return (
					'object' !== tG(e) && (e = new u(e)),
					'object' !== tG(t) && (t = new u(t)),
					tU[o](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()))
				);
			};
		u.prototype.mix = u.prototype.interpolate = function (e, t) {
			void 0 === t && (t = 0.5);
			for (var r = [], n = arguments.length - 2; n-- > 0; ) r[n] = arguments[n + 2];
			return ty.apply(void 0, [this, e, t].concat(r));
		};
		u.prototype.premultiply = function (e) {
			void 0 === e && (e = !1);
			var t = this._rgb,
				r = t[3];
			return e
				? ((this._rgb = [t[0] * r, t[1] * r, t[2] * r, r]), this)
				: new u([t[0] * r, t[1] * r, t[2] * r, r], 'rgb');
		};
		(u.prototype.saturate = function (e) {
			void 0 === e && (e = 1);
			var t = this.lch();
			return (t[1] += eC.Kn * e), t[1] < 0 && (t[1] = 0), new u(t, 'lch').alpha(this.alpha(), !0);
		}),
			(u.prototype.desaturate = function (e) {
				return void 0 === e && (e = 1), this.saturate(-e);
			});
		var tv = _.type;
		u.prototype.set = function (e, t, r) {
			void 0 === r && (r = !1);
			var n = e.split('.'),
				a = n[0],
				o = n[1],
				i = this[a]();
			if (!o) return i;
			var _ = a.indexOf(o) - ('ok' === a.substr(0, 2) ? 2 : 0);
			if (_ > -1) {
				if ('string' == tv(t))
					switch (t.charAt(0)) {
						case '+':
						case '-':
							i[_] += +t;
							break;
						case '*':
							i[_] *= +t.substr(1);
							break;
						case '/':
							i[_] /= +t.substr(1);
							break;
						default:
							i[_] = +t;
					}
				else if ('number' === tv(t)) i[_] = t;
				else throw Error('unsupported value for Color.set');
				var E = new u(i, a);
				return r ? ((this._rgb = E._rgb), this) : E;
			}
			throw Error('unknown channel ' + o + ' in mode ' + a);
		};
		tU.rgb = function (e, t, r) {
			var n = e._rgb,
				a = t._rgb;
			return new u(n[0] + r * (a[0] - n[0]), n[1] + r * (a[1] - n[1]), n[2] + r * (a[2] - n[2]), 'rgb');
		};
		var tb = Math.sqrt,
			tB = Math.pow;
		tU.lrgb = function (e, t, r) {
			var n = e._rgb,
				a = n[0],
				o = n[1],
				i = n[2],
				_ = t._rgb,
				E = _[0],
				s = _[1],
				c = _[2];
			return new u(
				tb(tB(a, 2) * (1 - r) + tB(E, 2) * r),
				tb(tB(o, 2) * (1 - r) + tB(s, 2) * r),
				tb(tB(i, 2) * (1 - r) + tB(c, 2) * r),
				'rgb'
			);
		};
		tU.lab = function (e, t, r) {
			var n = e.lab(),
				a = t.lab();
			return new u(n[0] + r * (a[0] - n[0]), n[1] + r * (a[1] - n[1]), n[2] + r * (a[2] - n[2]), 'lab');
		};
		var tw = function (e, t, r, n) {
				var a, o, i, _, E, s, c, I, l, R, A, T, d, N;
				return (
					'hsl' === n
						? ((i = e.hsl()), (_ = t.hsl()))
						: 'hsv' === n
							? ((i = e.hsv()), (_ = t.hsv()))
							: 'hcg' === n
								? ((i = e.hcg()), (_ = t.hcg()))
								: 'hsi' === n
									? ((i = e.hsi()), (_ = t.hsi()))
									: 'lch' === n || 'hcl' === n
										? ((n = 'hcl'), (i = e.hcl()), (_ = t.hcl()))
										: 'oklch' === n && ((i = e.oklch().reverse()), (_ = t.oklch().reverse())),
					('h' === n.substr(0, 1) || 'oklch' === n) &&
						((E = (a = i)[0]), (c = a[1]), (l = a[2]), (s = (o = _)[0]), (I = o[1]), (R = o[2])),
					isNaN(E) || isNaN(s)
						? isNaN(E)
							? isNaN(s)
								? (T = Number.NaN)
								: ((T = s), (1 == l || 0 == l) && 'hsv' != n && (A = I))
							: ((T = E), (1 == R || 0 == R) && 'hsv' != n && (A = c))
						: ((N = s > E && s - E > 180 ? s - (E + 360) : s < E && E - s > 180 ? s + 360 - E : s - E),
							(T = E + r * N)),
					void 0 === A && (A = c + r * (I - c)),
					(d = l + r * (R - l)),
					'oklch' === n ? new u([d, A, T], n) : new u([T, A, d], n)
				);
			},
			tH = function (e, t, r) {
				return tw(e, t, r, 'lch');
			};
		(tU.lch = tH), (tU.hcl = tH);
		tU.num = function (e, t, r) {
			var n = e.num();
			return new u(n + r * (t.num() - n), 'num');
		};
		tU.hcg = function (e, t, r) {
			return tw(e, t, r, 'hcg');
		};
		tU.hsi = function (e, t, r) {
			return tw(e, t, r, 'hsi');
		};
		tU.hsl = function (e, t, r) {
			return tw(e, t, r, 'hsl');
		};
		tU.hsv = function (e, t, r) {
			return tw(e, t, r, 'hsv');
		};
		tU.oklab = function (e, t, r) {
			var n = e.oklab(),
				a = t.oklab();
			return new u(n[0] + r * (a[0] - n[0]), n[1] + r * (a[1] - n[1]), n[2] + r * (a[2] - n[2]), 'oklab');
		};
		tU.oklch = function (e, t, r) {
			return tw(e, t, r, 'oklch');
		};
		var tY = _.clip_rgb,
			tK = Math.pow,
			tk = Math.sqrt,
			tV = Math.PI,
			tx = Math.cos,
			tF = Math.sin,
			tW = Math.atan2,
			tX = function (e, t) {
				for (var r = e.length, n = [0, 0, 0, 0], a = 0; a < e.length; a++) {
					var o = e[a],
						i = t[a] / r,
						_ = o._rgb;
					(n[0] += tK(_[0], 2) * i), (n[1] += tK(_[1], 2) * i), (n[2] += tK(_[2], 2) * i), (n[3] += _[3] * i);
				}
				return (n[0] = tk(n[0])), (n[1] = tk(n[1])), (n[2] = tk(n[2])), n[3] > 0.9999999 && (n[3] = 1), new u(tY(n));
			},
			tj = _.type,
			t$ = Math.pow,
			tq = function (e) {
				var t = 'rgb',
					r = l('#ccc'),
					n = 0,
					a = [0, 1],
					o = [],
					i = [0, 0],
					_ = !1,
					E = [],
					s = !1,
					c = 0,
					I = 1,
					u = !1,
					R = {},
					A = !0,
					T = 1,
					d = function (e) {
						if (
							((e = e || ['#fff', '#000']),
							'string' === tj(e) && l.brewer && l.brewer[e.toLowerCase()] && (e = l.brewer[e.toLowerCase()]),
							'array' === tj(e))
						) {
							1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
							for (var t = 0; t < e.length; t++) e[t] = l(e[t]);
							o.length = 0;
							for (var r = 0; r < e.length; r++) o.push(r / (e.length - 1));
						}
						return S(), (E = e);
					},
					N = function (e) {
						if (null != _) {
							for (var t = _.length - 1, r = 0; r < t && e >= _[r]; ) r++;
							return r - 1;
						}
						return 0;
					},
					p = function (e) {
						return e;
					},
					O = function (e) {
						return e;
					},
					f = function (e, n) {
						if ((null == n && (n = !1), isNaN(e) || null === e)) return r;
						if (n) s = e;
						else if (_ && _.length > 2) {
							var a, s;
							s = N(e) / (_.length - 2);
						} else s = I !== c ? (e - c) / (I - c) : 1;
						(s = O(s)), !n && (s = p(s)), 1 !== T && (s = t$(s, T));
						var u = Math.floor(10000 * (s = Math.min(1, Math.max(0, (s = i[0] + s * (1 - i[0] - i[1]))))));
						if (A && R[u]) a = R[u];
						else {
							if ('array' === tj(E))
								for (var d = 0; d < o.length; d++) {
									var f = o[d];
									if (s <= f || (s >= f && d === o.length - 1)) {
										a = E[d];
										break;
									}
									if (s > f && s < o[d + 1]) {
										(s = (s - f) / (o[d + 1] - f)), (a = l.interpolate(E[d], E[d + 1], s, t));
										break;
									}
								}
							else 'function' === tj(E) && (a = E(s));
							A && (R[u] = a);
						}
						return a;
					},
					S = function () {
						return (R = {});
					};
				d(e);
				var D = function (e) {
					var t = l(f(e));
					return s && t[s] ? t[s]() : t;
				};
				return (
					(D.classes = function (e) {
						if (null != e) {
							if ('array' === tj(e)) (_ = e), (a = [e[0], e[e.length - 1]]);
							else {
								var t = l.analyze(a);
								_ = 0 === e ? [t.min, t.max] : l.limits(t, 'e', e);
							}
							return D;
						}
						return _;
					}),
					(D.domain = function (e) {
						if (!arguments.length) return a;
						(c = e[0]), (I = e[e.length - 1]), (o = []);
						var t = E.length;
						if (e.length === t && c !== I)
							for (var r = 0, n = Array.from(e); r < n.length; r += 1) {
								var i = n[r];
								o.push((i - c) / (I - c));
							}
						else {
							for (var _ = 0; _ < t; _++) o.push(_ / (t - 1));
							if (e.length > 2) {
								var s = e.map(function (t, r) {
										return r / (e.length - 1);
									}),
									u = e.map(function (e) {
										return (e - c) / (I - c);
									});
								!u.every(function (e, t) {
									return s[t] === e;
								}) &&
									(O = function (e) {
										if (e <= 0 || e >= 1) return e;
										for (var t = 0; e >= u[t + 1]; ) t++;
										var r = (e - u[t]) / (u[t + 1] - u[t]);
										return s[t] + r * (s[t + 1] - s[t]);
									});
							}
						}
						return (a = [c, I]), D;
					}),
					(D.mode = function (e) {
						return arguments.length ? ((t = e), S(), D) : t;
					}),
					(D.range = function (e, t) {
						return d(e), D;
					}),
					(D.out = function (e) {
						return (s = e), D;
					}),
					(D.spread = function (e) {
						return arguments.length ? ((n = e), D) : n;
					}),
					(D.correctLightness = function (e) {
						return (
							null == e && (e = !0),
							(u = e),
							S(),
							(p = u
								? function (e) {
										for (
											var t = f(0, !0).lab()[0],
												r = f(1, !0).lab()[0],
												n = t > r,
												a = f(e, !0).lab()[0],
												o = t + (r - t) * e,
												i = a - o,
												_ = 0,
												E = 1,
												s = 20;
											Math.abs(i) > 0.01 && s-- > 0;

										)
											n && (i *= -1),
												i < 0 ? ((_ = e), (e += (E - e) * 0.5)) : ((E = e), (e += (_ - e) * 0.5)),
												(i = (a = f(e, !0).lab()[0]) - o);
										return e;
									}
								: function (e) {
										return e;
									}),
							D
						);
					}),
					(D.padding = function (e) {
						return null != e ? ('number' === tj(e) && (e = [e, e]), (i = e), D) : i;
					}),
					(D.colors = function (t, r) {
						arguments.length < 2 && (r = 'hex');
						var n = [];
						if (0 == arguments.length) n = E.slice(0);
						else if (1 === t) n = [D(0.5)];
						else if (t > 1) {
							var o = a[0],
								i = a[1] - o;
							n = (function (e, t, r) {
								for (var n = [], a = e < t, o = r ? (a ? t + 1 : t - 1) : t, i = e; a ? i < o : i > o; a ? i++ : i--)
									n.push(i);
								return n;
							})(0, t, !1).map(function (e) {
								return D(o + (e / (t - 1)) * i);
							});
						} else {
							e = [];
							var s = [];
							if (_ && _.length > 2)
								for (var c = 1, I = _.length, u = 1 <= I; u ? c < I : c > I; u ? c++ : c--)
									s.push((_[c - 1] + _[c]) * 0.5);
							else s = a;
							n = s.map(function (e) {
								return D(e);
							});
						}
						return (
							l[r] &&
								(n = n.map(function (e) {
									return e[r]();
								})),
							n
						);
					}),
					(D.cache = function (e) {
						return null != e ? ((A = e), D) : A;
					}),
					(D.gamma = function (e) {
						return null != e ? ((T = e), D) : T;
					}),
					(D.nodata = function (e) {
						return null != e ? ((r = l(e)), D) : r;
					}),
					D
				);
			},
			tz = function (e) {
				for (var t = [1, 1], r = 1; r < e; r++) {
					for (var n = [1], a = 1; a <= t.length; a++) n[a] = (t[a] || 0) + t[a - 1];
					t = n;
				}
				return t;
			},
			tJ = function (e) {
				var t, r, n, a, o, i, _, E, s, c, I;
				if (
					2 ===
					(e = e.map(function (e) {
						return new u(e);
					})).length
				)
					(o = (t = e.map(function (e) {
						return e.lab();
					}))[0]),
						(i = t[1]),
						(a = function (e) {
							return new u(
								[0, 1, 2].map(function (t) {
									return o[t] + e * (i[t] - o[t]);
								}),
								'lab'
							);
						});
				else if (3 === e.length)
					(o = (r = e.map(function (e) {
						return e.lab();
					}))[0]),
						(i = r[1]),
						(_ = r[2]),
						(a = function (e) {
							return new u(
								[0, 1, 2].map(function (t) {
									return (1 - e) * (1 - e) * o[t] + 2 * (1 - e) * e * i[t] + e * e * _[t];
								}),
								'lab'
							);
						});
				else if (4 === e.length)
					(o = (n = e.map(function (e) {
						return e.lab();
					}))[0]),
						(i = n[1]),
						(_ = n[2]),
						(E = n[3]),
						(a = function (e) {
							return new u(
								[0, 1, 2].map(function (t) {
									return (
										(1 - e) * (1 - e) * (1 - e) * o[t] +
										3 * (1 - e) * (1 - e) * e * i[t] +
										3 * (1 - e) * e * e * _[t] +
										e * e * e * E[t]
									);
								}),
								'lab'
							);
						});
				else if (e.length >= 5)
					(s = e.map(function (e) {
						return e.lab();
					})),
						(c = tz((I = e.length - 1))),
						(a = function (e) {
							var t = 1 - e;
							return new u(
								[0, 1, 2].map(function (r) {
									return s.reduce(function (n, a, o) {
										return n + c[o] * Math.pow(t, I - o) * Math.pow(e, o) * a[r];
									}, 0);
								}),
								'lab'
							);
						});
				else throw RangeError('No point in running bezier with only one color.');
				return a;
			},
			tQ = function (e, t, r) {
				if (!tQ[r]) throw Error('unknown blend mode ' + r);
				return tQ[r](e, t);
			},
			tZ = function (e) {
				return function (t, r) {
					var n = l(r).rgb(),
						a = l(t).rgb();
					return l.rgb(e(n, a));
				};
			},
			t0 = function (e) {
				return function (t, r) {
					var n = [];
					return (n[0] = e(t[0], r[0])), (n[1] = e(t[1], r[1])), (n[2] = e(t[2], r[2])), n;
				};
			};
		(tQ.normal = tZ(
			t0(function (e) {
				return e;
			})
		)),
			(tQ.multiply = tZ(
				t0(function (e, t) {
					return (e * t) / 255;
				})
			)),
			(tQ.screen = tZ(
				t0(function (e, t) {
					return 255 * (1 - (1 - e / 255) * (1 - t / 255));
				})
			)),
			(tQ.overlay = tZ(
				t0(function (e, t) {
					return t < 128 ? (2 * e * t) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
				})
			)),
			(tQ.darken = tZ(
				t0(function (e, t) {
					return e > t ? t : e;
				})
			)),
			(tQ.lighten = tZ(
				t0(function (e, t) {
					return e > t ? e : t;
				})
			)),
			(tQ.dodge = tZ(
				t0(function (e, t) {
					return 255 === e ? 255 : (e = ((t / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
				})
			)),
			(tQ.burn = tZ(
				t0(function (e, t) {
					return 255 * (1 - (1 - t / 255) / (e / 255));
				})
			));
		for (
			var t1 = _.type,
				t3 = _.clip_rgb,
				t2 = _.TWOPI,
				t6 = Math.pow,
				t5 = Math.sin,
				t4 = Math.cos,
				t8 = Math.floor,
				t7 = Math.random,
				t9 = Math.log,
				re = Math.pow,
				rt = Math.floor,
				rr = Math.abs,
				rn = function (e, t) {
					void 0 === t && (t = null);
					var r = {
						min: Number.MAX_VALUE,
						max: -1 * Number.MAX_VALUE,
						sum: 0,
						values: [],
						count: 0
					};
					return (
						'object' === o(e) && (e = Object.values(e)),
						e.forEach(function (e) {
							t && 'object' === o(e) && (e = e[t]),
								null != e &&
									!isNaN(e) &&
									(r.values.push(e), (r.sum += e), e < r.min && (r.min = e), e > r.max && (r.max = e), (r.count += 1));
						}),
						(r.domain = [r.min, r.max]),
						(r.limits = function (e, t) {
							return ra(r, e, t);
						}),
						r
					);
				},
				ra = function (e, t, r) {
					void 0 === t && (t = 'equal'), void 0 === r && (r = 7), 'array' == o(e) && (e = rn(e));
					var n = e.min,
						a = e.max,
						i = e.values.sort(function (e, t) {
							return e - t;
						});
					if (1 === r) return [n, a];
					var _ = [];
					if (('c' === t.substr(0, 1) && (_.push(n), _.push(a)), 'e' === t.substr(0, 1))) {
						_.push(n);
						for (var E = 1; E < r; E++) _.push(n + (E / r) * (a - n));
						_.push(a);
					} else if ('l' === t.substr(0, 1)) {
						if (n <= 0) throw Error('Logarithmic scales are only possible for values > 0');
						var s = Math.LOG10E * t9(n),
							c = Math.LOG10E * t9(a);
						_.push(n);
						for (var I = 1; I < r; I++) _.push(re(10, s + (I / r) * (c - s)));
						_.push(a);
					} else if ('q' === t.substr(0, 1)) {
						_.push(n);
						for (var u = 1; u < r; u++) {
							var l = ((i.length - 1) * u) / r,
								R = rt(l);
							if (R === l) _.push(i[R]);
							else {
								var A = l - R;
								_.push(i[R] * (1 - A) + i[R + 1] * A);
							}
						}
						_.push(a);
					} else if ('k' === t.substr(0, 1)) {
						var T,
							d = i.length,
							N = Array(d),
							p = Array(r),
							O = !0,
							f = 0,
							S = null;
						(S = []).push(n);
						for (var D = 1; D < r; D++) S.push(n + (D / r) * (a - n));
						for (S.push(a); O; ) {
							for (var L = 0; L < r; L++) p[L] = 0;
							for (var h = 0; h < d; h++) {
								for (var C = i[h], g = Number.MAX_VALUE, M = void 0, P = 0; P < r; P++) {
									var m = rr(S[P] - C);
									m < g && ((g = m), (M = P)), p[M]++, (N[h] = M);
								}
							}
							for (var U = Array(r), G = 0; G < r; G++) U[G] = null;
							for (var y = 0; y < d; y++) null === U[(T = N[y])] ? (U[T] = i[y]) : (U[T] += i[y]);
							for (var v = 0; v < r; v++) U[v] *= 1 / p[v];
							O = !1;
							for (var b = 0; b < r; b++)
								if (U[b] !== S[b]) {
									O = !0;
									break;
								}
							(S = U), ++f > 200 && (O = !1);
						}
						for (var B = {}, w = 0; w < r; w++) B[w] = [];
						for (var H = 0; H < d; H++) B[(T = N[H])].push(i[H]);
						for (var Y = [], K = 0; K < r; K++) Y.push(B[K][0]), Y.push(B[K][B[K].length - 1]);
						(Y = Y.sort(function (e, t) {
							return e - t;
						})),
							_.push(Y[0]);
						for (var k = 1; k < Y.length; k += 2) {
							var V = Y[k];
							!isNaN(V) && -1 === _.indexOf(V) && _.push(V);
						}
					}
					return _;
				},
				ro = rn,
				ri = ra,
				r_ = Math.sqrt,
				rE = Math.pow,
				rs = Math.min,
				rc = Math.max,
				rI = Math.atan2,
				ru = Math.abs,
				rl = Math.cos,
				rR = Math.sin,
				rA = Math.exp,
				rT = Math.PI,
				rd = {
					OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
					PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
					BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
					Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
					BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
					YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
					YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
					Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
					RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
					Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
					YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
					Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
					GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
					Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
					YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
					PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
					Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
					PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
					Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
					Spectral: [
						'#9e0142',
						'#d53e4f',
						'#f46d43',
						'#fdae61',
						'#fee08b',
						'#ffffbf',
						'#e6f598',
						'#abdda4',
						'#66c2a5',
						'#3288bd',
						'#5e4fa2'
					],
					RdYlGn: [
						'#a50026',
						'#d73027',
						'#f46d43',
						'#fdae61',
						'#fee08b',
						'#ffffbf',
						'#d9ef8b',
						'#a6d96a',
						'#66bd63',
						'#1a9850',
						'#006837'
					],
					RdBu: [
						'#67001f',
						'#b2182b',
						'#d6604d',
						'#f4a582',
						'#fddbc7',
						'#f7f7f7',
						'#d1e5f0',
						'#92c5de',
						'#4393c3',
						'#2166ac',
						'#053061'
					],
					PiYG: [
						'#8e0152',
						'#c51b7d',
						'#de77ae',
						'#f1b6da',
						'#fde0ef',
						'#f7f7f7',
						'#e6f5d0',
						'#b8e186',
						'#7fbc41',
						'#4d9221',
						'#276419'
					],
					PRGn: [
						'#40004b',
						'#762a83',
						'#9970ab',
						'#c2a5cf',
						'#e7d4e8',
						'#f7f7f7',
						'#d9f0d3',
						'#a6dba0',
						'#5aae61',
						'#1b7837',
						'#00441b'
					],
					RdYlBu: [
						'#a50026',
						'#d73027',
						'#f46d43',
						'#fdae61',
						'#fee090',
						'#ffffbf',
						'#e0f3f8',
						'#abd9e9',
						'#74add1',
						'#4575b4',
						'#313695'
					],
					BrBG: [
						'#543005',
						'#8c510a',
						'#bf812d',
						'#dfc27d',
						'#f6e8c3',
						'#f5f5f5',
						'#c7eae5',
						'#80cdc1',
						'#35978f',
						'#01665e',
						'#003c30'
					],
					RdGy: [
						'#67001f',
						'#b2182b',
						'#d6604d',
						'#f4a582',
						'#fddbc7',
						'#ffffff',
						'#e0e0e0',
						'#bababa',
						'#878787',
						'#4d4d4d',
						'#1a1a1a'
					],
					PuOr: [
						'#7f3b08',
						'#b35806',
						'#e08214',
						'#fdb863',
						'#fee0b6',
						'#f7f7f7',
						'#d8daeb',
						'#b2abd2',
						'#8073ac',
						'#542788',
						'#2d004b'
					],
					Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
					Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
					Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
					Set3: [
						'#8dd3c7',
						'#ffffb3',
						'#bebada',
						'#fb8072',
						'#80b1d3',
						'#fdb462',
						'#b3de69',
						'#fccde5',
						'#d9d9d9',
						'#bc80bd',
						'#ccebc5',
						'#ffed6f'
					],
					Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
					Paired: [
						'#a6cee3',
						'#1f78b4',
						'#b2df8a',
						'#33a02c',
						'#fb9a99',
						'#e31a1c',
						'#fdbf6f',
						'#ff7f00',
						'#cab2d6',
						'#6a3d9a',
						'#ffff99',
						'#b15928'
					],
					Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
					Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
				},
				rN = 0,
				rp = Object.keys(rd);
			rN < rp.length;
			rN += 1
		) {
			var rO = rp[rN];
			rd[rO.toLowerCase()] = rd[rO];
		}
		return (
			(l.average = function (e, t, r) {
				void 0 === t && (t = 'lrgb'), void 0 === r && (r = null);
				var n = e.length;
				!r &&
					(r = Array.from(Array(n)).map(function () {
						return 1;
					}));
				var a =
					n /
					r.reduce(function (e, t) {
						return e + t;
					});
				if (
					(r.forEach(function (e, t) {
						r[t] *= a;
					}),
					(e = e.map(function (e) {
						return new u(e);
					})),
					'lrgb' === t)
				)
					return tX(e, r);
				for (var o = e.shift(), i = o.get(t), _ = [], E = 0, s = 0, c = 0; c < i.length; c++)
					if (((i[c] = (i[c] || 0) * r[0]), _.push(isNaN(i[c]) ? 0 : r[0]), 'h' === t.charAt(c) && !isNaN(i[c]))) {
						var I = (i[c] / 180) * tV;
						(E += tx(I) * r[0]), (s += tF(I) * r[0]);
					}
				var l = o.alpha() * r[0];
				e.forEach(function (e, n) {
					var a = e.get(t);
					l += e.alpha() * r[n + 1];
					for (var o = 0; o < i.length; o++)
						if (!isNaN(a[o])) {
							if (((_[o] += r[n + 1]), 'h' === t.charAt(o))) {
								var c = (a[o] / 180) * tV;
								(E += tx(c) * r[n + 1]), (s += tF(c) * r[n + 1]);
							} else i[o] += a[o] * r[n + 1];
						}
				});
				for (var R = 0; R < i.length; R++)
					if ('h' === t.charAt(R)) {
						for (var A = (tW(s / _[R], E / _[R]) / tV) * 180; A < 0; ) A += 360;
						for (; A >= 360; ) A -= 360;
						i[R] = A;
					} else i[R] = i[R] / _[R];
				return (l /= n), new u(i, t).alpha(l > 0.99999 ? 1 : l, !0);
			}),
			(l.bezier = function (e) {
				var t = tJ(e);
				return (
					(t.scale = function () {
						return tq(t);
					}),
					t
				);
			}),
			(l.blend = tQ),
			(l.cubehelix = function (e, t, r, n, a) {
				void 0 === e && (e = 300),
					void 0 === t && (t = -1.5),
					void 0 === r && (r = 1),
					void 0 === n && (n = 1),
					void 0 === a && (a = [0, 1]);
				var o,
					i = 0;
				'array' === t1(a) ? (o = a[1] - a[0]) : ((o = 0), (a = [a, a]));
				var _ = function (_) {
					var E = t2 * ((e + 120) / 360 + t * _),
						s = t6(a[0] + o * _, n),
						c = ((0 !== i ? r[0] + _ * i : r) * s * (1 - s)) / 2,
						I = t4(E),
						u = t5(E);
					return l(
						t3([
							255 * (s + c * (-0.14861 * I + 1.78277 * u)),
							255 * (s + c * (-0.29227 * I - 0.90649 * u)),
							255 * (s + 1.97294 * I * c),
							1
						])
					);
				};
				return (
					(_.start = function (t) {
						return null == t ? e : ((e = t), _);
					}),
					(_.rotations = function (e) {
						return null == e ? t : ((t = e), _);
					}),
					(_.gamma = function (e) {
						return null == e ? n : ((n = e), _);
					}),
					(_.hue = function (e) {
						return null == e ? r : ('array' === t1((r = e)) ? 0 == (i = r[1] - r[0]) && (r = r[1]) : (i = 0), _);
					}),
					(_.lightness = function (e) {
						return null == e ? a : ('array' === t1(e) ? ((a = e), (o = e[1] - e[0])) : ((a = [e, e]), (o = 0)), _);
					}),
					(_.scale = function () {
						return l.scale(_);
					}),
					_.hue(r),
					_
				);
			}),
			(l.mix = l.interpolate = ty),
			(l.random = function () {
				for (var e = '#', t = 0; t < 6; t++) e += '0123456789abcdef'.charAt(t8(16 * t7()));
				return new u(e, 'hex');
			}),
			(l.scale = tq),
			(l.analyze = ro),
			(l.contrast = function (e, t) {
				(e = new u(e)), (t = new u(t));
				var r = e.luminance(),
					n = t.luminance();
				return r > n ? (r + 0.05) / (n + 0.05) : (n + 0.05) / (r + 0.05);
			}),
			(l.deltaE = function (e, t, r, n, a) {
				void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === a && (a = 1);
				var o = function (e) {
						return (360 * e) / (2 * rT);
					},
					i = function (e) {
						return (2 * rT * e) / 360;
					};
				(e = new u(e)), (t = new u(t));
				var _ = Array.from(e.lab()),
					E = _[0],
					s = _[1],
					c = _[2],
					I = Array.from(t.lab()),
					l = I[0],
					R = I[1],
					A = I[2],
					T = (E + l) / 2,
					d = (r_(rE(s, 2) + rE(c, 2)) + r_(rE(R, 2) + rE(A, 2))) / 2,
					N = 0.5 * (1 - r_(rE(d, 7) / (rE(d, 7) + rE(25, 7)))),
					p = s * (1 + N),
					O = R * (1 + N),
					f = r_(rE(p, 2) + rE(c, 2)),
					S = r_(rE(O, 2) + rE(A, 2)),
					D = (f + S) / 2,
					L = o(rI(c, p)),
					h = o(rI(A, O)),
					C = L >= 0 ? L : L + 360,
					g = h >= 0 ? h : h + 360,
					M = ru(C - g) > 180 ? (C + g + 360) / 2 : (C + g) / 2,
					P = 1 - 0.17 * rl(i(M - 30)) + 0.24 * rl(i(2 * M)) + 0.32 * rl(i(3 * M + 6)) - 0.2 * rl(i(4 * M - 63)),
					m = g - C;
				(m = 180 >= ru(m) ? m : g <= C ? m + 360 : m - 360), (m = 2 * r_(f * S) * rR(i(m) / 2));
				var U = S - f,
					G = 1 + (0.015 * rE(T - 50, 2)) / r_(20 + rE(T - 50, 2)),
					y = 1 + 0.045 * D,
					v = 1 + 0.015 * D * P,
					b = 30 * rA(-rE((M - 275) / 25, 2)),
					B = -(2 * r_(rE(D, 7) / (rE(D, 7) + rE(25, 7)))) * rR(2 * i(b));
				return rc(
					0,
					rs(
						100,
						r_(rE((l - E) / (r * G), 2) + rE(U / (n * y), 2) + rE(m / (a * v), 2) + (U / (n * y)) * B * (m / (a * v)))
					)
				);
			}),
			(l.distance = function (e, t, r) {
				void 0 === r && (r = 'lab'), (e = new u(e)), (t = new u(t));
				var n = e.get(r),
					a = t.get(r),
					o = 0;
				for (var i in n) {
					var _ = (n[i] || 0) - (a[i] || 0);
					o += _ * _;
				}
				return Math.sqrt(o);
			}),
			(l.limits = ri),
			(l.valid = function () {
				for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
				try {
					return new (Function.prototype.bind.apply(u, [null].concat(e)))(), !0;
				} catch (e) {
					return !1;
				}
			}),
			(l.scales = {
				cool: function () {
					return tq([l.hsl(180, 1, 0.9), l.hsl(250, 0.7, 0.4)]);
				},
				hot: function () {
					return tq(['#000', '#f00', '#ff0', '#fff']).mode('rgb');
				}
			}),
			(l.colors = e6),
			(l.brewer = rd),
			l
		);
	}),
	(e.exports = r());
