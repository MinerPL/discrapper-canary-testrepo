function n(e) {
	return (n =
		'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
			? function (e) {
					return typeof e;
				}
			: function (e) {
					return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
						? 'symbol'
						: typeof e;
				})(e);
}
var r,
	i = 'https://js.stripe.com/v3',
	a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
	s =
		'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used',
	o = function () {
		for (var e = document.querySelectorAll('script[src^="'.concat(i, '"]')), t = 0; t < e.length; t++) {
			var n = e[t];
			if (!!a.test(n.src)) return n;
		}
		return null;
	},
	l = function (e) {
		var t = e && !e.advancedFraudSignals ? '?advancedFraudSignals=false' : '',
			n = document.createElement('script');
		n.src = ''.concat(i).concat(t);
		var r = document.head || document.body;
		if (!r) throw Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
		return r.appendChild(n), n;
	},
	u = function (e, t) {
		if (!!e && !!e._registerWrapper)
			e._registerWrapper({
				name: 'stripe-js',
				version: '3.3.0',
				startTime: t
			});
	},
	c = null,
	d = null,
	_ = null,
	E = function (e, t, n) {
		if (null === e) return null;
		var r = e.apply(void 0, t);
		return u(r, n), r;
	},
	f = function (e) {
		var t =
			'invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    '.concat(
				JSON.stringify(e),
				'\n'
			);
		if (null === e || 'object' !== n(e)) throw Error(t);
		if (1 === Object.keys(e).length && 'boolean' == typeof e.advancedFraudSignals) return e;
		throw Error(t);
	},
	h = !1,
	p = function () {
		for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
		h = !0;
		var a = Date.now();
		return ((e = r),
		null !== c
			? c
			: (c = new Promise(function (t, n) {
					if ('undefined' == typeof window || 'undefined' == typeof document) {
						t(null);
						return;
					}
					if ((window.Stripe && e && console.warn(s), window.Stripe)) {
						t(window.Stripe);
						return;
					}
					try {
						var r,
							i,
							a,
							u,
							c = o();
						c && e
							? console.warn(s)
							: c
								? c &&
									null !== _ &&
									null !== d &&
									(c.removeEventListener('load', _),
									c.removeEventListener('error', d),
									null === (u = c.parentNode) || void 0 === u || u.removeChild(c),
									(c = l(e)))
								: (c = l(e)),
							(r = t),
							(i = n),
							(_ = function () {
								window.Stripe ? r(window.Stripe) : i(Error('Stripe.js not available'));
							}),
							(a = n),
							(d = function () {
								a(Error('Failed to load Stripe.js'));
							}),
							c.addEventListener('load', _),
							c.addEventListener('error', d);
					} catch (e) {
						n(e);
						return;
					}
				})).catch(function (e) {
					return (c = null), Promise.reject(e);
				})).then(function (e) {
			return E(e, n, a);
		});
	};
(p.setLoadParameters = function (e) {
	if (
		!(
			h &&
			r &&
			Object.keys(f(e)).reduce(function (t, n) {
				var i;
				return t && e[n] === (null === (i = r) || void 0 === i ? void 0 : i[n]);
			}, !0)
		)
	) {
		if (h) throw Error('You cannot change load parameters after calling loadStripe');
		r = f(e);
	}
}),
	(t.loadStripe = p);
