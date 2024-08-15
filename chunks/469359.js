let n, a, o;
r.d(t, {
	O: function () {
		return c;
	}
});
var i = r(578346),
	_ = r(370336),
	E = r(394798),
	s = r(395848);
function c(e) {
	(0, i.Hj)('dom', e), (0, i.D2)('dom', I);
}
function I() {
	if (!s.m.document) return;
	let e = i.rK.bind(null, 'dom'),
		t = u(e, !0);
	s.m.document.addEventListener('click', t, !1),
		s.m.document.addEventListener('keypress', t, !1),
		['EventTarget', 'Node'].forEach((t) => {
			let r = s.m[t] && s.m[t].prototype;
			if (!!r && !!r.hasOwnProperty && !!r.hasOwnProperty('addEventListener'))
				(0, _.hl)(r, 'addEventListener', function (t) {
					return function (r, n, a) {
						if ('click' === r || 'keypress' == r)
							try {
								let n = (this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}),
									o = (n[r] = n[r] || { refCount: 0 });
								if (!o.handler) {
									let n = u(e);
									(o.handler = n), t.call(this, r, n, a);
								}
								o.refCount++;
							} catch (e) {}
						return t.call(this, r, n, a);
					};
				}),
					(0, _.hl)(r, 'removeEventListener', function (e) {
						return function (t, r, n) {
							if ('click' === t || 'keypress' == t)
								try {
									let r = this.__sentry_instrumentation_handlers__ || {},
										a = r[t];
									a &&
										(a.refCount--,
										a.refCount <= 0 && (e.call(this, t, a.handler, n), (a.handler = void 0), delete r[t]),
										0 === Object.keys(r).length && delete this.__sentry_instrumentation_handlers__);
								} catch (e) {}
							return e.call(this, t, r, n);
						};
					});
		});
}
function u(e, t = !1) {
	return (r) => {
		var i, c;
		if (!r || r._sentryCaptured) return;
		let I = (function (e) {
			try {
				return e.target;
			} catch (e) {
				return null;
			}
		})(r);
		if (
			((i = r.type),
			(c = I),
			'keypress' === i &&
				(!c || !c.tagName || ('INPUT' !== c.tagName && 'TEXTAREA' !== c.tagName && !c.isContentEditable)))
		)
			return;
		(0, _.xp)(r, '_sentryCaptured', !0), I && !I._sentryId && (0, _.xp)(I, '_sentryId', (0, E.DM)());
		let u = 'keypress' === r.type ? 'input' : r.type;
		!(function (e) {
			if (e.type !== a) return !1;
			try {
				if (!e.target || e.target._sentryId !== o) return !1;
			} catch (e) {}
			return !0;
		})(r) &&
			(e({
				event: r,
				name: u,
				global: t
			}),
			(a = r.type),
			(o = I ? I._sentryId : void 0)),
			clearTimeout(n),
			(n = s.m.setTimeout(() => {
				(o = void 0), (a = void 0);
			}, 1000));
	};
}
