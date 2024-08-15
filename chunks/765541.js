n.d(t, {
	Z: function () {
		return s;
	}
});
var r = n(815393),
	o = n(646391),
	a = n(146306),
	i = n(784148);
function s() {
	if ('undefined' != typeof Reflect && r) s = o(r).call(r);
	else
		s = function (e, t, n) {
			var r = (0, i.Z)(e, t);
			if (r) {
				var o = a(r, t);
				return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value;
			}
		};
	return s.apply(this, arguments);
}
