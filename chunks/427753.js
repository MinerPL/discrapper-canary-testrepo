var t = 'undefined' != typeof Element,
	n = 'function' == typeof Map,
	r = 'function' == typeof Set,
	i = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
e.exports = function (e, a) {
	try {
		return (function e(a, s) {
			if (a === s) return !0;
			if (a && s && 'object' == typeof a && 'object' == typeof s) {
				var o, l, u, c;
				if (a.constructor !== s.constructor) return !1;
				if (Array.isArray(a)) {
					if ((o = a.length) != s.length) return !1;
					for (l = o; 0 != l--; ) if (!e(a[l], s[l])) return !1;
					return !0;
				}
				if (n && a instanceof Map && s instanceof Map) {
					if (a.size !== s.size) return !1;
					for (c = a.entries(); !(l = c.next()).done; ) if (!s.has(l.value[0])) return !1;
					for (c = a.entries(); !(l = c.next()).done; ) if (!e(l.value[1], s.get(l.value[0]))) return !1;
					return !0;
				}
				if (r && a instanceof Set && s instanceof Set) {
					if (a.size !== s.size) return !1;
					for (c = a.entries(); !(l = c.next()).done; ) if (!s.has(l.value[0])) return !1;
					return !0;
				}
				if (i && ArrayBuffer.isView(a) && ArrayBuffer.isView(s)) {
					if ((o = a.length) != s.length) return !1;
					for (l = o; 0 != l--; ) if (a[l] !== s[l]) return !1;
					return !0;
				}
				if (a.constructor === RegExp) return a.source === s.source && a.flags === s.flags;
				if (a.valueOf !== Object.prototype.valueOf && 'function' == typeof a.valueOf && 'function' == typeof s.valueOf) return a.valueOf() === s.valueOf();
				if (a.toString !== Object.prototype.toString && 'function' == typeof a.toString && 'function' == typeof s.toString) return a.toString() === s.toString();
				if ((o = (u = Object.keys(a)).length) !== Object.keys(s).length) return !1;
				for (l = o; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(s, u[l])) return !1;
				if (t && a instanceof Element) return !1;
				for (l = o; 0 != l--; ) {
					if (('_owner' !== u[l] && '__v' !== u[l] && '__o' !== u[l]) || !a.$$typeof) {
						if (!e(a[u[l]], s[u[l]])) return !1;
					}
				}
				return !0;
			}
			return a != a && s != s;
		})(e, a);
	} catch (e) {
		if ((e.message || '').match(/stack|recursion/i)) return console.warn('react-fast-compare cannot handle circular refs'), !1;
		throw e;
	}
};
