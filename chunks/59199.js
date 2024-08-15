var r =
		Object.assign ||
		function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
			}
			return e;
		},
	i = (function () {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1),
					(r.configurable = !0),
					'value' in r && (r.writable = !0),
					Object.defineProperty(e, r.key, r);
			}
		}
		return function (t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	})(),
	a = n(161796),
	s = n(512722),
	o = function (e) {
		return e;
	},
	l = (function () {
		function e() {
			!(function (e, t) {
				if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
			})(this, e);
		}
		return (
			i(e, null, [
				{
					key: 'create',
					value: function (e) {
						if (e.outputRange && 'string' == typeof e.outputRange[0])
							return (function (e) {
								var t = e.outputRange;
								s(t.length >= 2, 'Bad output range'),
									(function (e) {
										for (var t = e[0].replace(c, ''), n = 1; n < e.length; ++n)
											s(t === e[n].replace(c, ''), 'invalid pattern ' + e[0] + ' and ' + e[n]);
									})((t = t.map(u)));
								var n = t[0].match(c).map(function () {
									return [];
								});
								t.forEach(function (e) {
									e.match(c).forEach(function (e, t) {
										n[t].push(+e);
									});
								});
								var i = t[0].match(c).map(function (t, i) {
										return l.create(r({}, e, { outputRange: n[i] }));
									}),
									a = /^rgb/.test(t[0]);
								return function (e) {
									var n = 0;
									return t[0].replace(c, function () {
										var t = i[n++](e);
										return String(a && n < 4 ? Math.round(t) : t);
									});
								};
							})(e);
						var t = e.outputRange;
						d('outputRange', t);
						var n = e.inputRange;
						d('inputRange', n),
							(function (e) {
								s(e.length >= 2, 'inputRange must have at least 2 elements');
								for (var t = 1; t < e.length; ++t)
									s(e[t] >= e[t - 1], 'inputRange must be monotonically increasing ' + e);
							})(n),
							s(
								n.length === t.length,
								'inputRange (' + n.length + ') and outputRange (' + t.length + ') must have the same length'
							);
						var i = e.easing || o,
							a = 'extend';
						void 0 !== e.extrapolateLeft ? (a = e.extrapolateLeft) : void 0 !== e.extrapolate && (a = e.extrapolate);
						var _ = 'extend';
						return (
							void 0 !== e.extrapolateRight
								? (_ = e.extrapolateRight)
								: void 0 !== e.extrapolate && (_ = e.extrapolate),
							function (e) {
								s('number' == typeof e, 'Cannot interpolation an input which is not a number');
								var r = (function (e, t) {
									for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
									return n - 1;
								})(e, n);
								return (function (e, t, n, r, i, a, s, o) {
									var l = e;
									if (l < t) {
										if ('identity' === s) return l;
										'clamp' === s ? (l = t) : s;
									}
									if (l > n) {
										if ('identity' === o) return l;
										'clamp' === o ? (l = n) : o;
									}
									if (r === i) return r;
									if (t === n) return e <= t ? r : i;
									return (
										t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t)),
										(l = a(l)),
										r === -1 / 0 ? (l = -l) : i === 1 / 0 ? (l += r) : (l = l * (i - r) + r),
										l
									);
								})(e, n[r], n[r + 1], t[r], t[r + 1], i, a, _);
							}
						);
					}
				}
			]),
			e
		);
	})();
function u(e) {
	var t = a(e);
	return null === t
		? e
		: 'rgba(' +
				((4278190080 & (t = t || 0)) >>> 24) +
				', ' +
				((16711680 & t) >>> 16) +
				', ' +
				((65280 & t) >>> 8) +
				', ' +
				(255 & t) / 255 +
				')';
}
var c = /[0-9\.-]+/g;
function d(e, t) {
	s(t.length >= 2, e + ' must have at least 2 elements'),
		s(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + 'cannot be ]-infinity;+infinity[ ' + t);
}
e.exports = l;
