var r = n(675717),
	i = Object.create,
	a = (function () {
		function e() {}
		return function (t) {
			if (!(0, r.Z)(t)) return {};
			if (i) return i(t);
			e.prototype = t;
			var n = new e();
			return (e.prototype = void 0), n;
		};
	})();
t.Z = a;
