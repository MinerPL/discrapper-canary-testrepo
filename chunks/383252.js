n(535213)();
var r = n(245252),
	i = n(665855),
	a = n(247498),
	s = n(350506),
	o = n(665679),
	l = n(705806),
	u = l(o('%Promise.all%')),
	c = l(o('%Promise.reject%'));
e.exports = function (e) {
	var t = this;
	if ('Object' !== i(t)) throw TypeError('`this` value must be an object');
	return u(
		t,
		s(a(e), function (e) {
			var n = r(t, e);
			try {
				return n.then(
					function (e) {
						return {
							status: 'fulfilled',
							value: e
						};
					},
					function (e) {
						return {
							status: 'rejected',
							reason: e
						};
					}
				);
			} catch (e) {
				return c(t, e);
			}
		})
	);
};
