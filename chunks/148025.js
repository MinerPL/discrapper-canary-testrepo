var r,
	i,
	a,
	s,
	o = n(192853),
	l = n(703825)();
if (l) {
	(r = o('Object.prototype.hasOwnProperty')), (i = o('RegExp.prototype.exec')), (a = {});
	var u = function () {
		throw a;
	};
	(s = {
		toString: u,
		valueOf: u
	}),
		'symbol' == typeof Symbol.toPrimitive && (s[Symbol.toPrimitive] = u);
}
var c = o('Object.prototype.toString'),
	d = Object.getOwnPropertyDescriptor;
e.exports = l
	? function (e) {
			if (!e || 'object' != typeof e) return !1;
			var t = d(e, 'lastIndex');
			if (!(t && r(t, 'value'))) return !1;
			try {
				i(e, s);
			} catch (e) {
				return e === a;
			}
		}
	: function (e) {
			return !!e && ('object' == typeof e || 'function' == typeof e) && '[object RegExp]' === c(e);
		};
