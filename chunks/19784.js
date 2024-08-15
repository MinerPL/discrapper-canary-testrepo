n.d(t, {
	V: function () {
		return a;
	}
});
var r = n(239189);
n(444675);
var i = function (e) {
		return (0, r.requestAnimationFrame)(e);
	},
	a = function (e) {
		void 0 === e && (e = i);
		var t = !0,
			n = !1,
			a = 0,
			o = [],
			l = 0,
			u = new Set(),
			c = new Set(),
			d = new Set(),
			_ = function (e) {
				var t = o.indexOf(e);
				t < 0 &&
					((t = o.findIndex(function (t) {
						return t.priority > e.priority;
					})),
					o.splice(~t ? t : o.length, 0, e));
			},
			E = function () {
				if (!t)
					try {
						p(), e(E);
					} catch (e) {
						console.error(e);
					}
			},
			f = function () {
				t && ((t = !1), 0 == a && ((a = r.now()), e(E)));
			},
			h = [];
		this.setTimeout = function (e, t) {
			var n = r.now() + t,
				i = function () {
					var e = h.findIndex(function (e) {
						return e.cancel == i;
					});
					e >= 0 && h.splice(e, 1);
				},
				a = s(h, function (e) {
					return e.time > n;
				}),
				o = {
					time: n,
					handler: e,
					cancel: i
				};
			return h.splice(a, 0, o), f(), o;
		};
		var p = (this.advance = function () {
			var e = r.now();
			if (
				(u.size && (u.forEach(_), u.clear()),
				h.length &&
					r.batchedUpdates(function () {
						var t = s(h, function (t) {
							return t.time > e;
						});
						h.splice(0, t).forEach(function (e) {
							return e.handler();
						});
					}),
				e > a)
			) {
				var t = Math.min(64, e - a);
				(a = e),
					r.batchedUpdates(function () {
						o.length &&
							(r.willAdvance(o),
							(o = o.filter(function (e) {
								return (l = e.priority), !e.idle && e.advance(t), !e.idle;
							})),
							(l = 0)),
							c.size &&
								(c.forEach(function (t) {
									return t(e);
								}),
								c.clear()),
							d.size &&
								((n = !0),
								d.forEach(function (t) {
									return t(e);
								}),
								d.clear(),
								(n = !1));
					});
			}
		});
		(this.start = function (e) {
			l > e.priority ? u.add(e) : (_(e), f());
		}),
			(this.onFrame = function (e) {
				c.add(e), f();
			}),
			(this.onWrite = function (e) {
				n ? e(a) : d.add(e);
			});
	};
function s(e, t) {
	var n = e.findIndex(t);
	return n < 0 ? e.length : n;
}
