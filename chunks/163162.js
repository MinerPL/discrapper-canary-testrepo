r.d(t, {
	Wz: function () {
		return c;
	},
	m9: function () {
		return E;
	},
	re: function () {
		return function e(t, r = {}, o) {
			if ('function' != typeof t) return t;
			try {
				let e = t.__sentry_wrapped__;
				if (e) return e;
				if ((0, i.HK)(t)) return t;
			} catch (e) {
				return t;
			}
			let E = function () {
				let i = Array.prototype.slice.call(arguments);
				try {
					o && 'function' == typeof o && o.apply(this, arguments);
					let n = i.map((t) => e(t, r));
					return t.apply(this, n);
				} catch (e) {
					throw (
						(s++,
						setTimeout(() => {
							s--;
						}),
						(0, n.$e)((t) => {
							t.addEventProcessor(
								(e) => (
									r.mechanism && ((0, _.Db)(e, void 0, void 0), (0, _.EG)(e, r.mechanism)),
									(e.extra = {
										...e.extra,
										arguments: i
									}),
									e
								)
							),
								(0, a.Tb)(e);
						}),
						e)
					);
				}
			};
			try {
				for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (E[e] = t[e]);
			} catch (e) {}
			(0, i.$Q)(E, t), (0, i.xp)(t, '__sentry_wrapped__', E);
			try {
				Object.getOwnPropertyDescriptor(E, 'name').configurable && Object.defineProperty(E, 'name', { get: () => t.name });
			} catch (e) {}
			return E;
		};
	}
});
var n = r(263449),
	a = r(233517),
	o = r(899517),
	i = r(370336),
	_ = r(394798);
let E = o.n,
	s = 0;
function c() {
	return s > 0;
}
