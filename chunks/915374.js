var n =
		(this && this.__values) ||
		function (t) {
			var e = 'function' == typeof Symbol && Symbol.iterator,
				r = e && t[e],
				n = 0;
			if (r) return r.call(t);
			if (t && 'number' == typeof t.length)
				return {
					next: function () {
						return (
							t && n >= t.length && (t = void 0),
							{
								value: t && t[n++],
								done: !t
							}
						);
					}
				};
			throw TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
		},
	i =
		(this && this.__read) ||
		function (t, e) {
			var r = 'function' == typeof Symbol && t[Symbol.iterator];
			if (!r) return t;
			var n,
				i,
				o = r.call(t),
				a = [];
			try {
				for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; ) a.push(n.value);
			} catch (t) {
				i = { error: t };
			} finally {
				try {
					n && !n.done && (r = o.return) && r.call(o);
				} finally {
					if (i) throw i.error;
				}
			}
			return a;
		},
	o =
		(this && this.__spreadArray) ||
		function (t, e, r) {
			if (r || 2 == arguments.length) for (var n, i = 0, o = e.length; i < o; i++) (n || !(i in e)) && (!n && (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
			return t.concat(n || Array.prototype.slice.call(e));
		};
Object.defineProperty(e, '__esModule', { value: !0 }), (e.InternalIntlMessage = void 0);
var a = r(859159),
	s = r(766989),
	u = (function () {
		function t(t, e) {
			(this.locale = e), 'string' == typeof t ? ((this.message = t), (this.ast = (0, a.parse)(t))) : (this.ast = t), (this.plainAst = void 0);
		}
		return (
			(t.prototype.formatToParts = function (t, e, r) {
				return (0, s.formatToParts)(this.ast, this.locale, t, e, r);
			}),
			(t.prototype.formatToPlainString = function (t, e, r) {
				if (null == this.plainAst) {
					this.plainAst = [];
					try {
						for (var a, u, c, l, h, f = n(this.ast), p = f.next(); !p.done; p = f.next()) {
							var d = p.value;
							(c = this.plainAst).push.apply(c, o([], i(this._removeRichTags(d)), !1));
						}
					} catch (t) {
						a = { error: t };
					} finally {
						try {
							p && !p.done && (u = f.return) && u.call(f);
						} finally {
							if (a) throw a.error;
						}
					}
				}
				var m = (0, s.formatToParts)(this.plainAst, this.locale, t, e, r),
					v = '';
				try {
					for (var g = n(m), y = g.next(); !y.done; y = g.next()) {
						var d = y.value;
						v += String(d.value);
					}
				} catch (t) {
					l = { error: t };
				} finally {
					try {
						y && !y.done && (h = g.return) && h.call(g);
					} finally {
						if (l) throw l.error;
					}
				}
				return v;
			}),
			(t.prototype._removeRichTags = function (t) {
				if (t.type !== a.TYPE.tag) return [t];
				var e,
					r,
					s = [];
				try {
					for (var u = n(t.children), c = u.next(); !c.done; c = u.next()) {
						var l = c.value;
						s.push.apply(s, o([], i(this._removeRichTags(l)), !1));
					}
				} catch (t) {
					e = { error: t };
				} finally {
					try {
						c && !c.done && (r = u.return) && r.call(u);
					} finally {
						if (e) throw e.error;
					}
				}
				return s;
			}),
			t
		);
	})();
e.InternalIntlMessage = u;
