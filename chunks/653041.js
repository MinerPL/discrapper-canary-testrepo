var e = n(147018),
	i = n(339718),
	o = n(49693),
	u = n(610148),
	c = n(886960),
	a = n(936940)(function () {
		return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
	});
e(
	{
		target: 'Array',
		proto: !0,
		arity: 1,
		forced:
			a ||
			!(function () {
				try {
					Object.defineProperty([], 'length', { writable: !1 }).push();
				} catch (t) {
					return t instanceof TypeError;
				}
			})()
	},
	{
		push: function (t) {
			var r = i(this),
				n = o(r),
				e = arguments.length;
			c(n + e);
			for (var a = 0; a < e; a++) (r[n] = arguments[a]), n++;
			return u(r, n), n;
		}
	}
);
