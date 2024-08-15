t.d(a, {
	Dz: function () {
		return E;
	},
	Nj: function () {
		return _;
	},
	RS: function () {
		return p;
	},
	by: function () {
		return N;
	},
	eI: function () {
		return u;
	},
	f6: function () {
		return A;
	},
	gy: function () {
		return h;
	},
	i0: function () {
		return T;
	},
	ib: function () {
		return d;
	},
	og: function () {
		return C;
	}
}),
	t(411104),
	t(47120);
var s = t(544891),
	n = t(570140),
	l = t(618541),
	r = t(751767),
	o = t(358085),
	i = t(355467),
	c = t(981631);
function u() {
	(0, r.S)().then((e) => {
		e.client
			.create({ authorization: c.Ai1.BRAINTREE.KEY })
			.then((e) => {
				n.Z.dispatch({
					type: 'BRAINTREE_CREATE_CLIENT_SUCCESS',
					client: e
				}),
					E(),
					d();
			})
			.catch(() => n.Z.dispatch({ type: 'BRAINTREE_CREATE_CLIENT_FAIL' }));
	});
}
function d() {
	let e = l.Z.getClient();
	if (null == e) throw Error('Braintree client must be initialized before creating Venmo client.');
	(0, r.S)().then((a) => {
		a.venmo
			.create({
				client: e,
				allowDesktop: !0,
				paymentMethodUsage: 'multi_use'
			})
			.then((e) => {
				n.Z.dispatch({
					type: 'BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS',
					venmoClient: e
				});
			})
			.catch(() => {
				n.Z.dispatch({ type: 'BRAINTREE_CREATE_VENMO_CLIENT_FAIL' });
			});
	});
}
function E() {
	let e = l.Z.getClient();
	if (null == e) throw Error('braintree client must be initialized before calling this');
	(0, r.S)().then((a) => {
		a.paypal
			.create({ client: e })
			.then((e) => {
				if (null == e._navigateFrameToAuth)
					throw Error('braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?');
				(e._navigateFrameToAuth = function (e) {
					let a = this._formatPaymentResourceData(e);
					return s.tn
						.post({
							url: c.ANM.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
							oldFormErrors: !0,
							body: {
								return_url: a.returnUrl,
								cancel_url: a.cancelUrl
							}
						})
						.then((e) => {
							let {
								body: { token: a }
							} = e;
							this._frameService.redirect(
								(function (e) {
									let a = c.Ai1.BRAINTREE.KEY.startsWith('production_')
										? 'https://www.paypal.com'
										: 'https://sandbox.paypal.com';
									return ''.concat(a, '/agreements/approve?nolegacy=1&ba_token=').concat(e);
								})(a)
							);
						})
						.catch(
							(e) => (
								this._frameService.close(),
								(this._authorizationInProgress = !1),
								Promise.reject(Error(e.body && e.body.message))
							)
						);
				}),
					n.Z.dispatch({
						type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS',
						paypalClient: e
					});
			})
			.catch(() => n.Z.dispatch({ type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL' }));
	});
}
function A() {
	let e = l.Z.getPayPalClient();
	if (null == e) throw Error('braintree paypal client must be initialized before calling this');
	n.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' });
	let a = Promise.resolve('');
	(0, o.isDesktop)() && (a = (0, i.EH)(c.HeQ.PAYPAL)),
		a
			.then(() => e.tokenize({ flow: 'vault' }))
			.then((e) => {
				let { email: a, firstName: t, lastName: s, billingAddress: l } = e.details;
				n.Z.dispatch({
					type: 'BRAINTREE_TOKENIZE_PAYPAL_SUCCESS',
					nonce: e.nonce,
					email: a,
					billingAddress: {
						name: ''.concat(t, ' ').concat(s),
						line1: l.line1,
						line2: l.line2,
						city: l.city,
						state: l.state,
						country: l.countryCode,
						postalCode: l.postalCode
					}
				});
			})
			.catch((e) => {
				let { message: a, code: t } = e;
				t === c.U66.PAYPAL_POPUP_CLOSED || null == t
					? n.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED' })
					: n.Z.dispatch({
							type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL',
							message: a,
							code: t
						});
			});
}
function N() {
	let e = l.Z.getVenmoClient();
	if (null == e) throw Error('Braintree Venmo client must be initialized before calling tokenize.');
	n.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_START' }),
		e
			.tokenize()
			.then((e) => {
				let { username: a } = e.details;
				n.Z.dispatch({
					type: 'BRAINTREE_TOKENIZE_VENMO_SUCCESS',
					nonce: e.nonce,
					username: a
				});
			})
			.catch((e) => {
				let { message: a, code: t } = e;
				t === c.U66.VENMO_APP_CANCELED || t === c.U66.VENMO_CANCELED
					? n.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED' })
					: n.Z.dispatch({
							type: 'BRAINTREE_TOKENIZE_VENMO_FAIL',
							message: a,
							code: t
						});
			});
}
function m(e, a) {
	if (null == e) return Promise.resolve();
	n.Z.dispatch(a);
	try {
		return Promise.resolve(e.teardown());
	} catch (e) {
		return Promise.resolve();
	}
}
function _() {
	return m(l.Z.getPayPalClient(), { type: 'BRAINTREE_TEARDOWN_PAYPAL_CLIENT' });
}
function p() {
	return m(l.Z.getVenmoClient(), { type: 'BRAINTREE_TEARDOWN_VENMO_CLIENT' });
}
function h() {
	return Promise.all([_(), p()]);
}
function T() {
	let e = l.Z.getLastURL();
	null == e ? A() : (n.Z.dispatch({ type: 'BRAINTREE_TOKENIZE_PAYPAL_START' }), window.open(e));
}
function C() {
	N();
}
