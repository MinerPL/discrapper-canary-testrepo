function t(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function n() {
	this._defaults = [];
}
for (
	var r = 0,
		i = [
			'use',
			'on',
			'once',
			'set',
			'query',
			'type',
			'accept',
			'auth',
			'withCredentials',
			'sortQuery',
			'retry',
			'ok',
			'redirects',
			'timeout',
			'buffer',
			'serialize',
			'parse',
			'ca',
			'key',
			'pfx',
			'cert',
			'disableTLSCerts'
		];
	r < i.length;
	r++
) {
	let e = i[r];
	n.prototype[e] = function () {
		for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
		return (
			this._defaults.push({
				fn: e,
				args: n
			}),
			this
		);
	};
}
(n.prototype._setDefaults = function (e) {
	var n,
		r = (function (e, n) {
			var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
			if (!r) {
				if (
					Array.isArray(e) ||
					(r = (function (e, n) {
						if (e) {
							if ('string' == typeof e) return t(e, n);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r))
								return Array.from(e);
							if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return t(e, n);
						}
					})(e))
				) {
					r && (e = r);
					var i = 0,
						a = function () {};
					return {
						s: a,
						n: function () {
							return i >= e.length
								? { done: !0 }
								: {
										done: !1,
										value: e[i++]
									};
						},
						e: function (e) {
							throw e;
						},
						f: a
					};
				}
				throw TypeError(
					'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			}
			var s,
				o = !0,
				l = !1;
			return {
				s: function () {
					r = r.call(e);
				},
				n: function () {
					var e = r.next();
					return (o = e.done), e;
				},
				e: function (e) {
					(l = !0), (s = e);
				},
				f: function () {
					try {
						!o && null != r.return && r.return();
					} finally {
						if (l) throw s;
					}
				}
			};
		})(this._defaults);
	try {
		for (r.s(); !(n = r.n()).done; ) {
			let t = n.value;
			e[t.fn](...t.args);
		}
	} catch (e) {
		r.e(e);
	} finally {
		r.f();
	}
}),
	(e.exports = n);
