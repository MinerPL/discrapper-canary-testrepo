var n =
		(this && this.__assign) ||
		function () {
			return (n =
				Object.assign ||
				function (t) {
					for (var e, r = 1, n = arguments.length; r < n; r++)
						for (var i in ((e = arguments[r]), e)) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
					return t;
				}).apply(this, arguments);
		},
	i =
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
		};
Object.defineProperty(e, '__esModule', { value: !0 }),
	(e.IntlManager = e.DEFAULT_LOCALE = void 0),
	(e.createLoader = function (t, e) {
		return new s.MessageLoader(t, e);
	});
var o = r(65243),
	a = r(766989),
	s = r(793173);
e.DEFAULT_LOCALE = 'en-US';
var u = (function () {
	function t(t, r) {
		void 0 === t && (t = e.DEFAULT_LOCALE);
		var n = this;
		(this.onLocaleChange = function (t) {
			return (
				n._localeSubscriptions.add(t),
				function () {
					return n._localeSubscriptions.delete(t);
				}
			);
		}),
			(this.defaultLocale = t),
			(this.currentLocale = t),
			(this.intl = (0, o.createIntl)({
				formats: a.IntlMessageFormat.formats,
				defaultLocale: t,
				locale: t
			})),
			(this.defaultRichTextElements = r),
			(this._localeSubscriptions = new Set());
	}
	return (
		(t.prototype.setLocale = function (t) {
			(this.currentLocale = t),
				(this.intl = (0, o.createIntl)({
					defaultLocale: this.defaultLocale,
					locale: t
				})),
				this.emitLocaleChange(t);
		}),
		(t.prototype.emitLocaleChange = function (t) {
			var e, r;
			try {
				for (var n = i(this._localeSubscriptions), o = n.next(); !o.done; o = n.next()) (0, o.value)(t);
			} catch (t) {
				e = { error: t };
			} finally {
				try {
					o && !o.done && (r = n.return) && r.call(n);
				} finally {
					if (e) throw e.error;
				}
			}
		}),
		(t.prototype.formatToParts = function (t, e) {
			if ('string' == typeof t) return [t];
			var r,
				o,
				s = 'function' == typeof t ? t(this.currentLocale) : t;
			if ('string' == typeof s) return [s];
			var u = null != e ? n(n({}, this.defaultRichTextElements), e) : this.defaultRichTextElements,
				c = s.formatToParts(this.intl.formatters, this.intl.formats, u),
				l = [],
				h = !1;
			try {
				for (var f = i(c), p = f.next(); !p.done; p = f.next()) {
					var m = p.value;
					if (h && (h = m.type === a.PART_TYPE.literal)) {
						l[l.length - 1] += m.value;
						continue;
					}
					(h = m.type === a.PART_TYPE.literal), l.push(m.value);
				}
			} catch (t) {
				r = { error: t };
			} finally {
				try {
					p && !p.done && (o = f.return) && o.call(f);
				} finally {
					if (r) throw r.error;
				}
			}
			return l;
		}),
		(t.prototype.formatToPlainString = function (t, e) {
			if ('string' == typeof t) return t;
			var r = t(this.currentLocale);
			return 'string' == typeof r ? r : r.formatToPlainString(this.intl.formatters, this.intl.formats, e);
		}),
		t
	);
})();
e.IntlManager = u;
