var r = n(927066)('%Reflect.construct%', !0),
	i = n(751564);
try {
	i({}, '', {
		'[[Get]]': function () {}
	});
} catch (e) {
	i = null;
}
if (i && r) {
	var a = {},
		s = {};
	i(s, 'length', {
		'[[Get]]': function () {
			throw a;
		},
		'[[Enumerable]]': !0
	}),
		(e.exports = function (e) {
			try {
				r(e, s);
			} catch (e) {
				return e === a;
			}
		});
} else
	e.exports = function (e) {
		return 'function' == typeof e && !!e.prototype;
	};
