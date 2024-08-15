var e = r(962557),
	o = Function.prototype,
	i = o.call,
	u = e && o.bind.bind(i, i);
t.exports = e
	? u
	: function (t) {
			return function () {
				return i.apply(t, arguments);
			};
		};
