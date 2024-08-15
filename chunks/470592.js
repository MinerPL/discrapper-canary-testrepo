var e = r(581031),
	o = r(936940),
	i = r(332916),
	u = Object,
	c = e(''.split);
t.exports = o(function () {
	return !u('z').propertyIsEnumerable(0);
})
	? function (t) {
			return 'String' === i(t) ? c(t, '') : u(t);
		}
	: u;
