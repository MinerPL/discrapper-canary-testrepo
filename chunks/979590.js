!(function (t) {
	var n,
		r,
		i,
		a = /^\s+/,
		s = /\s+$/,
		o = 0,
		l = t.round,
		u = t.min,
		c = t.max,
		d = t.random;
	function _(e, n) {
		if (((n = n || {}), (e = e || '') instanceof _)) return e;
		if (!(this instanceof _)) return new _(e, n);
		var r = (function (e) {
			var n = {
					r: 0,
					g: 0,
					b: 0
				},
				r = 1,
				i = null,
				o = null,
				l = null,
				d = !1,
				_ = !1;
			return (
				'string' == typeof e &&
					(e = (function (e) {
						e = e.replace(a, '').replace(s, '').toLowerCase();
						var t,
							n = !1;
						if (L[e]) (e = L[e]), (n = !0);
						else if ('transparent' == e)
							return {
								r: 0,
								g: 0,
								b: 0,
								a: 0,
								format: 'name'
							};
						if ((t = F.rgb.exec(e)))
							return {
								r: t[1],
								g: t[2],
								b: t[3]
							};
						if ((t = F.rgba.exec(e)))
							return {
								r: t[1],
								g: t[2],
								b: t[3],
								a: t[4]
							};
						if ((t = F.hsl.exec(e)))
							return {
								h: t[1],
								s: t[2],
								l: t[3]
							};
						if ((t = F.hsla.exec(e)))
							return {
								h: t[1],
								s: t[2],
								l: t[3],
								a: t[4]
							};
						if ((t = F.hsv.exec(e)))
							return {
								h: t[1],
								s: t[2],
								v: t[3]
							};
						if ((t = F.hsva.exec(e)))
							return {
								h: t[1],
								s: t[2],
								v: t[3],
								a: t[4]
							};
						if ((t = F.hex8.exec(e)))
							return {
								r: w(t[1]),
								g: w(t[2]),
								b: w(t[3]),
								a: w(t[4]) / 255,
								format: n ? 'name' : 'hex8'
							};
						if ((t = F.hex6.exec(e)))
							return {
								r: w(t[1]),
								g: w(t[2]),
								b: w(t[3]),
								format: n ? 'name' : 'hex'
							};
						if ((t = F.hex4.exec(e)))
							return {
								r: w(t[1] + '' + t[1]),
								g: w(t[2] + '' + t[2]),
								b: w(t[3] + '' + t[3]),
								a: w(t[4] + '' + t[4]) / 255,
								format: n ? 'name' : 'hex8'
							};
						return (
							!!(t = F.hex3.exec(e)) && {
								r: w(t[1] + '' + t[1]),
								g: w(t[2] + '' + t[2]),
								b: w(t[3] + '' + t[3]),
								format: n ? 'name' : 'hex'
							}
						);
					})(e)),
				'object' == typeof e &&
					(V(e.r) && V(e.g) && V(e.b)
						? ((n = (function (e, t, n) {
								return {
									r: 255 * P(e, 255),
									g: 255 * P(t, 255),
									b: 255 * P(n, 255)
								};
							})(e.r, e.g, e.b)),
							(d = !0),
							(_ = '%' === String(e.r).substr(-1) ? 'prgb' : 'rgb'))
						: V(e.h) && V(e.s) && V(e.v)
							? ((i = G(e.s)),
								(o = G(e.v)),
								(n = (function (e, n, r) {
									(e = 6 * P(e, 360)), (n = P(n, 100)), (r = P(r, 100));
									var i = t.floor(e),
										a = e - i,
										s = r * (1 - n),
										o = r * (1 - a * n),
										l = r * (1 - (1 - a) * n),
										u = i % 6;
									return {
										r: 255 * [r, o, s, s, l, r][u],
										g: 255 * [l, r, r, o, s, s][u],
										b: 255 * [s, s, l, r, r, o][u]
									};
								})(e.h, i, o)),
								(d = !0),
								(_ = 'hsv'))
							: V(e.h) &&
								V(e.s) &&
								V(e.l) &&
								((i = G(e.s)),
								(l = G(e.l)),
								(n = (function (e, t, n) {
									var r, i, a;
									function s(e, t, n) {
										return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
											? e + (t - e) * 6 * n
											: n < 0.5
												? t
												: n < 2 / 3
													? e + (t - e) * (2 / 3 - n) * 6
													: e;
									}
									if (((e = P(e, 360)), (t = P(t, 100)), (n = P(n, 100)), 0 === t)) r = i = a = n;
									else {
										var o = n < 0.5 ? n * (1 + t) : n + t - n * t,
											l = 2 * n - o;
										(r = s(l, o, e + 1 / 3)), (i = s(l, o, e)), (a = s(l, o, e - 1 / 3));
									}
									return {
										r: 255 * r,
										g: 255 * i,
										b: 255 * a
									};
								})(e.h, i, l)),
								(d = !0),
								(_ = 'hsl')),
					e.hasOwnProperty('a') && (r = e.a)),
				(r = M(r)),
				{
					ok: d,
					format: e.format || _,
					r: u(255, c(n.r, 0)),
					g: u(255, c(n.g, 0)),
					b: u(255, c(n.b, 0)),
					a: r
				}
			);
		})(e);
		(this._originalInput = e),
			(this._r = r.r),
			(this._g = r.g),
			(this._b = r.b),
			(this._a = r.a),
			(this._roundA = l(100 * this._a) / 100),
			(this._format = n.format || r.format),
			(this._gradientType = n.gradientType),
			this._r < 1 && (this._r = l(this._r)),
			this._g < 1 && (this._g = l(this._g)),
			this._b < 1 && (this._b = l(this._b)),
			(this._ok = r.ok),
			(this._tc_id = o++);
	}
	(_.prototype = {
		isDark: function () {
			return 128 > this.getBrightness();
		},
		isLight: function () {
			return !this.isDark();
		},
		isValid: function () {
			return this._ok;
		},
		getOriginalInput: function () {
			return this._originalInput;
		},
		getFormat: function () {
			return this._format;
		},
		getAlpha: function () {
			return this._a;
		},
		getBrightness: function () {
			var e = this.toRgb();
			return (299 * e.r + 587 * e.g + 114 * e.b) / 1000;
		},
		getLuminance: function () {
			var e,
				n,
				r,
				i,
				a,
				s,
				o = this.toRgb();
			return (
				(e = o.r / 255),
				(n = o.g / 255),
				(r = o.b / 255),
				(i = e <= 0.03928 ? e / 12.92 : t.pow((e + 0.055) / 1.055, 2.4)),
				(a = n <= 0.03928 ? n / 12.92 : t.pow((n + 0.055) / 1.055, 2.4)),
				0.2126 * i + 0.7152 * a + 0.0722 * (s = r <= 0.03928 ? r / 12.92 : t.pow((r + 0.055) / 1.055, 2.4))
			);
		},
		setAlpha: function (e) {
			return (this._a = M(e)), (this._roundA = l(100 * this._a) / 100), this;
		},
		toHsv: function () {
			var e = f(this._r, this._g, this._b);
			return {
				h: 360 * e.h,
				s: e.s,
				v: e.v,
				a: this._a
			};
		},
		toHsvString: function () {
			var e = f(this._r, this._g, this._b),
				t = l(360 * e.h),
				n = l(100 * e.s),
				r = l(100 * e.v);
			return 1 == this._a
				? 'hsv(' + t + ', ' + n + '%, ' + r + '%)'
				: 'hsva(' + t + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')';
		},
		toHsl: function () {
			var e = E(this._r, this._g, this._b);
			return {
				h: 360 * e.h,
				s: e.s,
				l: e.l,
				a: this._a
			};
		},
		toHslString: function () {
			var e = E(this._r, this._g, this._b),
				t = l(360 * e.h),
				n = l(100 * e.s),
				r = l(100 * e.l);
			return 1 == this._a
				? 'hsl(' + t + ', ' + n + '%, ' + r + '%)'
				: 'hsla(' + t + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')';
		},
		toHex: function (e) {
			return h(this._r, this._g, this._b, e);
		},
		toHexString: function (e) {
			return '#' + this.toHex(e);
		},
		toHex8: function (e) {
			return (function (e, t, n, r, i) {
				var a = [x(l(e).toString(16)), x(l(t).toString(16)), x(l(n).toString(16)), x(k(r))];
				return i &&
					a[0].charAt(0) == a[0].charAt(1) &&
					a[1].charAt(0) == a[1].charAt(1) &&
					a[2].charAt(0) == a[2].charAt(1) &&
					a[3].charAt(0) == a[3].charAt(1)
					? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0)
					: a.join('');
			})(this._r, this._g, this._b, this._a, e);
		},
		toHex8String: function (e) {
			return '#' + this.toHex8(e);
		},
		toRgb: function () {
			return {
				r: l(this._r),
				g: l(this._g),
				b: l(this._b),
				a: this._a
			};
		},
		toRgbString: function () {
			return 1 == this._a
				? 'rgb(' + l(this._r) + ', ' + l(this._g) + ', ' + l(this._b) + ')'
				: 'rgba(' + l(this._r) + ', ' + l(this._g) + ', ' + l(this._b) + ', ' + this._roundA + ')';
		},
		toPercentageRgb: function () {
			return {
				r: l(100 * P(this._r, 255)) + '%',
				g: l(100 * P(this._g, 255)) + '%',
				b: l(100 * P(this._b, 255)) + '%',
				a: this._a
			};
		},
		toPercentageRgbString: function () {
			return 1 == this._a
				? 'rgb(' + l(100 * P(this._r, 255)) + '%, ' + l(100 * P(this._g, 255)) + '%, ' + l(100 * P(this._b, 255)) + '%)'
				: 'rgba(' +
						l(100 * P(this._r, 255)) +
						'%, ' +
						l(100 * P(this._g, 255)) +
						'%, ' +
						l(100 * P(this._b, 255)) +
						'%, ' +
						this._roundA +
						')';
		},
		toName: function () {
			return 0 === this._a ? 'transparent' : !(this._a < 1) && (b[h(this._r, this._g, this._b, !0)] || !1);
		},
		toFilter: function (e) {
			var t = '#' + p(this._r, this._g, this._b, this._a),
				n = t,
				r = this._gradientType ? 'GradientType = 1, ' : '';
			if (e) {
				var i = _(e);
				n = '#' + p(i._r, i._g, i._b, i._a);
			}
			return 'progid:DXImageTransform.Microsoft.gradient(' + r + 'startColorstr=' + t + ',endColorstr=' + n + ')';
		},
		toString: function (e) {
			var t = !!e;
			e = e || this._format;
			var n = !1,
				r = this._a < 1 && this._a >= 0;
			if (!t && r && ('hex' === e || 'hex6' === e || 'hex3' === e || 'hex4' === e || 'hex8' === e || 'name' === e))
				return 'name' === e && 0 === this._a ? this.toName() : this.toRgbString();
			return (
				'rgb' === e && (n = this.toRgbString()),
				'prgb' === e && (n = this.toPercentageRgbString()),
				('hex' === e || 'hex6' === e) && (n = this.toHexString()),
				'hex3' === e && (n = this.toHexString(!0)),
				'hex4' === e && (n = this.toHex8String(!0)),
				'hex8' === e && (n = this.toHex8String()),
				'name' === e && (n = this.toName()),
				'hsl' === e && (n = this.toHslString()),
				'hsv' === e && (n = this.toHsvString()),
				n || this.toHexString()
			);
		},
		clone: function () {
			return _(this.toString());
		},
		_applyModification: function (e, t) {
			var n = e.apply(null, [this].concat([].slice.call(t)));
			return (this._r = n._r), (this._g = n._g), (this._b = n._b), this.setAlpha(n._a), this;
		},
		lighten: function () {
			return this._applyModification(g, arguments);
		},
		brighten: function () {
			return this._applyModification(S, arguments);
		},
		darken: function () {
			return this._applyModification(A, arguments);
		},
		desaturate: function () {
			return this._applyModification(I, arguments);
		},
		saturate: function () {
			return this._applyModification(m, arguments);
		},
		greyscale: function () {
			return this._applyModification(T, arguments);
		},
		spin: function () {
			return this._applyModification(N, arguments);
		},
		_applyCombination: function (e, t) {
			return e.apply(null, [this].concat([].slice.call(t)));
		},
		analogous: function () {
			return this._applyCombination(y, arguments);
		},
		complement: function () {
			return this._applyCombination(v, arguments);
		},
		monochromatic: function () {
			return this._applyCombination(D, arguments);
		},
		splitcomplement: function () {
			return this._applyCombination(C, arguments);
		},
		triad: function () {
			return this._applyCombination(O, arguments);
		},
		tetrad: function () {
			return this._applyCombination(R, arguments);
		}
	}),
		(_.fromRatio = function (e, t) {
			if ('object' == typeof e) {
				var n = {};
				for (var r in e) e.hasOwnProperty(r) && ('a' === r ? (n[r] = e[r]) : (n[r] = G(e[r])));
				e = n;
			}
			return _(e, t);
		});
	function E(e, t, n) {
		(e = P(e, 255)), (t = P(t, 255));
		var r = c(e, t, (n = P(n, 255))),
			i = u(e, t, n),
			a,
			s,
			o = (r + i) / 2;
		if (r == i) a = s = 0;
		else {
			var l = r - i;
			switch (((s = o > 0.5 ? l / (2 - r - i) : l / (r + i)), r)) {
				case e:
					a = (t - n) / l + (t < n ? 6 : 0);
					break;
				case t:
					a = (n - e) / l + 2;
					break;
				case n:
					a = (e - t) / l + 4;
			}
			a /= 6;
		}
		return {
			h: a,
			s: s,
			l: o
		};
	}
	function f(e, t, n) {
		(e = P(e, 255)), (t = P(t, 255));
		var r,
			i,
			a = c(e, t, (n = P(n, 255))),
			s = u(e, t, n);
		var o = a - s;
		if (((i = 0 === a ? 0 : o / a), a == s)) r = 0;
		else {
			switch (a) {
				case e:
					r = (t - n) / o + (t < n ? 6 : 0);
					break;
				case t:
					r = (n - e) / o + 2;
					break;
				case n:
					r = (e - t) / o + 4;
			}
			r /= 6;
		}
		return {
			h: r,
			s: i,
			v: a
		};
	}
	function h(e, t, n, r) {
		var i = [x(l(e).toString(16)), x(l(t).toString(16)), x(l(n).toString(16))];
		return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1)
			? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
			: i.join('');
	}
	function p(e, t, n, r) {
		return [x(k(r)), x(l(e).toString(16)), x(l(t).toString(16)), x(l(n).toString(16))].join('');
	}
	function I(e, t) {
		t = 0 === t ? 0 : t || 10;
		var n = _(e).toHsl();
		return (n.s -= t / 100), (n.s = U(n.s)), _(n);
	}
	function m(e, t) {
		t = 0 === t ? 0 : t || 10;
		var n = _(e).toHsl();
		return (n.s += t / 100), (n.s = U(n.s)), _(n);
	}
	function T(e) {
		return _(e).desaturate(100);
	}
	function g(e, t) {
		t = 0 === t ? 0 : t || 10;
		var n = _(e).toHsl();
		return (n.l += t / 100), (n.l = U(n.l)), _(n);
	}
	function S(e, t) {
		t = 0 === t ? 0 : t || 10;
		var n = _(e).toRgb();
		return (
			(n.r = c(0, u(255, n.r - l(-((t / 100) * 255))))),
			(n.g = c(0, u(255, n.g - l(-((t / 100) * 255))))),
			(n.b = c(0, u(255, n.b - l(-((t / 100) * 255))))),
			_(n)
		);
	}
	function A(e, t) {
		t = 0 === t ? 0 : t || 10;
		var n = _(e).toHsl();
		return (n.l -= t / 100), (n.l = U(n.l)), _(n);
	}
	function N(e, t) {
		var n = _(e).toHsl(),
			r = (n.h + t) % 360;
		return (n.h = r < 0 ? 360 + r : r), _(n);
	}
	function v(e) {
		var t = _(e).toHsl();
		return (t.h = (t.h + 180) % 360), _(t);
	}
	function O(e) {
		var t = _(e).toHsl(),
			n = t.h;
		return [
			_(e),
			_({
				h: (n + 120) % 360,
				s: t.s,
				l: t.l
			}),
			_({
				h: (n + 240) % 360,
				s: t.s,
				l: t.l
			})
		];
	}
	function R(e) {
		var t = _(e).toHsl(),
			n = t.h;
		return [
			_(e),
			_({
				h: (n + 90) % 360,
				s: t.s,
				l: t.l
			}),
			_({
				h: (n + 180) % 360,
				s: t.s,
				l: t.l
			}),
			_({
				h: (n + 270) % 360,
				s: t.s,
				l: t.l
			})
		];
	}
	function C(e) {
		var t = _(e).toHsl(),
			n = t.h;
		return [
			_(e),
			_({
				h: (n + 72) % 360,
				s: t.s,
				l: t.l
			}),
			_({
				h: (n + 216) % 360,
				s: t.s,
				l: t.l
			})
		];
	}
	function y(e, t, n) {
		(t = t || 6), (n = n || 30);
		var r = _(e).toHsl(),
			i = 360 / n,
			a = [_(e)];
		for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; ) (r.h = (r.h + i) % 360), a.push(_(r));
		return a;
	}
	function D(e, t) {
		t = t || 6;
		for (var n = _(e).toHsv(), r = n.h, i = n.s, a = n.v, s = [], o = 1 / t; t--; )
			s.push(
				_({
					h: r,
					s: i,
					v: a
				})
			),
				(a = (a + o) % 1);
		return s;
	}
	(_.equals = function (e, t) {
		return !!e && !!t && _(e).toRgbString() == _(t).toRgbString();
	}),
		(_.random = function () {
			return _.fromRatio({
				r: d(),
				g: d(),
				b: d()
			});
		}),
		(_.mix = function (e, t, n) {
			n = 0 === n ? 0 : n || 50;
			var r = _(e).toRgb(),
				i = _(t).toRgb(),
				a = n / 100;
			return _({
				r: (i.r - r.r) * a + r.r,
				g: (i.g - r.g) * a + r.g,
				b: (i.b - r.b) * a + r.b,
				a: (i.a - r.a) * a + r.a
			});
		}),
		(_.readability = function (e, n) {
			var r = _(e),
				i = _(n);
			return (t.max(r.getLuminance(), i.getLuminance()) + 0.05) / (t.min(r.getLuminance(), i.getLuminance()) + 0.05);
		}),
		(_.isReadable = function (e, t, n) {
			var r,
				i,
				a = _.readability(e, t);
			switch (
				((i = !1),
				(r = (function (e) {
					var t, n;
					return (
						(t = (
							(e = e || {
								level: 'AA',
								size: 'small'
							}).level || 'AA'
						).toUpperCase()),
						(n = (e.size || 'small').toLowerCase()),
						'AA' !== t && 'AAA' !== t && (t = 'AA'),
						'small' !== n && 'large' !== n && (n = 'small'),
						{
							level: t,
							size: n
						}
					);
				})(n)).level + r.size)
			) {
				case 'AAsmall':
				case 'AAAlarge':
					i = a >= 4.5;
					break;
				case 'AAlarge':
					i = a >= 3;
					break;
				case 'AAAsmall':
					i = a >= 7;
			}
			return i;
		}),
		(_.mostReadable = function (e, t, n) {
			var r,
				i,
				a,
				s,
				o = null,
				l = 0;
			(i = (n = n || {}).includeFallbackColors), (a = n.level), (s = n.size);
			for (var u = 0; u < t.length; u++) (r = _.readability(e, t[u])) > l && ((l = r), (o = _(t[u])));
			return _.isReadable(e, o, {
				level: a,
				size: s
			}) || !i
				? o
				: ((n.includeFallbackColors = !1), _.mostReadable(e, ['#fff', '#000'], n));
		});
	var L = (_.names = {
			aliceblue: 'f0f8ff',
			antiquewhite: 'faebd7',
			aqua: '0ff',
			aquamarine: '7fffd4',
			azure: 'f0ffff',
			beige: 'f5f5dc',
			bisque: 'ffe4c4',
			black: '000',
			blanchedalmond: 'ffebcd',
			blue: '00f',
			blueviolet: '8a2be2',
			brown: 'a52a2a',
			burlywood: 'deb887',
			burntsienna: 'ea7e5d',
			cadetblue: '5f9ea0',
			chartreuse: '7fff00',
			chocolate: 'd2691e',
			coral: 'ff7f50',
			cornflowerblue: '6495ed',
			cornsilk: 'fff8dc',
			crimson: 'dc143c',
			cyan: '0ff',
			darkblue: '00008b',
			darkcyan: '008b8b',
			darkgoldenrod: 'b8860b',
			darkgray: 'a9a9a9',
			darkgreen: '006400',
			darkgrey: 'a9a9a9',
			darkkhaki: 'bdb76b',
			darkmagenta: '8b008b',
			darkolivegreen: '556b2f',
			darkorange: 'ff8c00',
			darkorchid: '9932cc',
			darkred: '8b0000',
			darksalmon: 'e9967a',
			darkseagreen: '8fbc8f',
			darkslateblue: '483d8b',
			darkslategray: '2f4f4f',
			darkslategrey: '2f4f4f',
			darkturquoise: '00ced1',
			darkviolet: '9400d3',
			deeppink: 'ff1493',
			deepskyblue: '00bfff',
			dimgray: '696969',
			dimgrey: '696969',
			dodgerblue: '1e90ff',
			firebrick: 'b22222',
			floralwhite: 'fffaf0',
			forestgreen: '228b22',
			fuchsia: 'f0f',
			gainsboro: 'dcdcdc',
			ghostwhite: 'f8f8ff',
			gold: 'ffd700',
			goldenrod: 'daa520',
			gray: '808080',
			green: '008000',
			greenyellow: 'adff2f',
			grey: '808080',
			honeydew: 'f0fff0',
			hotpink: 'ff69b4',
			indianred: 'cd5c5c',
			indigo: '4b0082',
			ivory: 'fffff0',
			khaki: 'f0e68c',
			lavender: 'e6e6fa',
			lavenderblush: 'fff0f5',
			lawngreen: '7cfc00',
			lemonchiffon: 'fffacd',
			lightblue: 'add8e6',
			lightcoral: 'f08080',
			lightcyan: 'e0ffff',
			lightgoldenrodyellow: 'fafad2',
			lightgray: 'd3d3d3',
			lightgreen: '90ee90',
			lightgrey: 'd3d3d3',
			lightpink: 'ffb6c1',
			lightsalmon: 'ffa07a',
			lightseagreen: '20b2aa',
			lightskyblue: '87cefa',
			lightslategray: '789',
			lightslategrey: '789',
			lightsteelblue: 'b0c4de',
			lightyellow: 'ffffe0',
			lime: '0f0',
			limegreen: '32cd32',
			linen: 'faf0e6',
			magenta: 'f0f',
			maroon: '800000',
			mediumaquamarine: '66cdaa',
			mediumblue: '0000cd',
			mediumorchid: 'ba55d3',
			mediumpurple: '9370db',
			mediumseagreen: '3cb371',
			mediumslateblue: '7b68ee',
			mediumspringgreen: '00fa9a',
			mediumturquoise: '48d1cc',
			mediumvioletred: 'c71585',
			midnightblue: '191970',
			mintcream: 'f5fffa',
			mistyrose: 'ffe4e1',
			moccasin: 'ffe4b5',
			navajowhite: 'ffdead',
			navy: '000080',
			oldlace: 'fdf5e6',
			olive: '808000',
			olivedrab: '6b8e23',
			orange: 'ffa500',
			orangered: 'ff4500',
			orchid: 'da70d6',
			palegoldenrod: 'eee8aa',
			palegreen: '98fb98',
			paleturquoise: 'afeeee',
			palevioletred: 'db7093',
			papayawhip: 'ffefd5',
			peachpuff: 'ffdab9',
			peru: 'cd853f',
			pink: 'ffc0cb',
			plum: 'dda0dd',
			powderblue: 'b0e0e6',
			purple: '800080',
			rebeccapurple: '663399',
			red: 'f00',
			rosybrown: 'bc8f8f',
			royalblue: '4169e1',
			saddlebrown: '8b4513',
			salmon: 'fa8072',
			sandybrown: 'f4a460',
			seagreen: '2e8b57',
			seashell: 'fff5ee',
			sienna: 'a0522d',
			silver: 'c0c0c0',
			skyblue: '87ceeb',
			slateblue: '6a5acd',
			slategray: '708090',
			slategrey: '708090',
			snow: 'fffafa',
			springgreen: '00ff7f',
			steelblue: '4682b4',
			tan: 'd2b48c',
			teal: '008080',
			thistle: 'd8bfd8',
			tomato: 'ff6347',
			turquoise: '40e0d0',
			violet: 'ee82ee',
			wheat: 'f5deb3',
			white: 'fff',
			whitesmoke: 'f5f5f5',
			yellow: 'ff0',
			yellowgreen: '9acd32'
		}),
		b = (_.hexNames = (function (e) {
			var t = {};
			for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
			return t;
		})(L));
	function M(e) {
		return (isNaN((e = parseFloat(e))) || e < 0 || e > 1) && (e = 1), e;
	}
	function P(e, n) {
		(function (e) {
			return 'string' == typeof e && -1 != e.indexOf('.') && 1 === parseFloat(e);
		})(e) && (e = '100%');
		var r = (function (e) {
			return 'string' == typeof e && -1 != e.indexOf('%');
		})(e);
		return ((e = u(n, c(0, parseFloat(e)))), r && (e = parseInt(e * n, 10) / 100), 0.000001 > t.abs(e - n))
			? 1
			: (e % n) / parseFloat(n);
	}
	function U(e) {
		return u(1, c(0, e));
	}
	function w(e) {
		return parseInt(e, 16);
	}
	function x(e) {
		return 1 == e.length ? '0' + e : '' + e;
	}
	function G(e) {
		return e <= 1 && (e = 100 * e + '%'), e;
	}
	function k(e) {
		return t.round(255 * parseFloat(e)).toString(16);
	}
	function B(e) {
		return w(e) / 255;
	}
	var F =
		((r =
			'[\\s|\\(]+(' +
			(n = '(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)') +
			')[,|\\s]+(' +
			n +
			')[,|\\s]+(' +
			n +
			')\\s*\\)?'),
		(i = '[\\s|\\(]+(' + n + ')[,|\\s]+(' + n + ')[,|\\s]+(' + n + ')[,|\\s]+(' + n + ')\\s*\\)?'),
		{
			CSS_UNIT: new RegExp(n),
			rgb: RegExp('rgb' + r),
			rgba: RegExp('rgba' + i),
			hsl: RegExp('hsl' + r),
			hsla: RegExp('hsla' + i),
			hsv: RegExp('hsv' + r),
			hsva: RegExp('hsva' + i),
			hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
			hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
		});
	function V(e) {
		return !!F.CSS_UNIT.exec(e);
	}
	e.exports
		? (e.exports = _)
		: 'function' == typeof define && define.amd
			? define(function () {
					return _;
				})
			: (window.tinycolor = _);
})(Math);
