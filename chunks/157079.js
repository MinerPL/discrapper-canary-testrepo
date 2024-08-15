r.d(t, {
	UK: function () {
		return s;
	},
	xU: function () {
		return E;
	}
});
var n = r(578346),
	a = r(370336),
	o = r(101284),
	i = r(573736),
	_ = r(395848);
let E = '__sentry_xhr_v3__';
function s(e) {
	(0, n.Hj)('xhr', e), (0, n.D2)('xhr', c);
}
function c() {
	if (!_.m.XMLHttpRequest) return;
	let e = XMLHttpRequest.prototype;
	(0, a.hl)(e, 'open', function (e) {
		return function (...t) {
			let r = 1000 * (0, o.ph)(),
				_ = (0, i.HD)(t[0]) ? t[0].toUpperCase() : void 0,
				s = (function (e) {
					if ((0, i.HD)(e)) return e;
					try {
						return e.toString();
					} catch (e) {}
				})(t[1]);
			if (!_ || !s) return e.apply(this, t);
			(this[E] = {
				method: _,
				url: s,
				request_headers: {}
			}),
				'POST' === _ && s.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
			let c = () => {
				let e = this[E];
				if (!!e) {
					if (4 === this.readyState) {
						try {
							e.status_code = this.status;
						} catch (e) {}
						let t = {
							endTimestamp: 1000 * (0, o.ph)(),
							startTimestamp: r,
							xhr: this
						};
						(0, n.rK)('xhr', t);
					}
				}
			};
			return (
				'onreadystatechange' in this && 'function' == typeof this.onreadystatechange
					? (0, a.hl)(this, 'onreadystatechange', function (e) {
							return function (...t) {
								return c(), e.apply(this, t);
							};
						})
					: this.addEventListener('readystatechange', c),
				(0, a.hl)(this, 'setRequestHeader', function (e) {
					return function (...t) {
						let [r, n] = t,
							a = this[E];
						return a && (0, i.HD)(r) && (0, i.HD)(n) && (a.request_headers[r.toLowerCase()] = n), e.apply(this, t);
					};
				}),
				e.apply(this, t)
			);
		};
	}),
		(0, a.hl)(e, 'send', function (e) {
			return function (...t) {
				let r = this[E];
				if (!r) return e.apply(this, t);
				void 0 !== t[0] && (r.body = t[0]);
				let a = {
					startTimestamp: 1000 * (0, o.ph)(),
					xhr: this
				};
				return (0, n.rK)('xhr', a), e.apply(this, t);
			};
		});
}
