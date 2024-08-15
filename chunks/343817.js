var r, i;
function a(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
n.d(t, {
	Hx: function () {
		return u;
	},
	f$: function () {
		return s;
	},
	hP: function () {
		return r;
	}
}),
	n(47120);
let s = 50035,
	o = '__root_errors';
function l(e) {
	return e.map((e) => ({
		code: 'UNKNOWN',
		message: e
	}));
}
((i = r || (r = {})).HCAPTCHA = 'hcaptcha'), (i.RECAPTCHA = 'recaptcha');
class u {
	hasFieldErrors() {
		return null != this.errors && Object.keys(this.errors).length > 0;
	}
	getFieldErrors(e) {
		'string' == typeof e && (e = [e]);
		let t = this.errors;
		for (; e.length > 0 && null != t; ) (t = t[e[0]]), (e = e.splice(1));
		return null == t ? void 0 : t._errors;
	}
	getAllFieldErrors() {
		return this.getAllFieldErrorsUnder(this.errors);
	}
	getAllFieldErrorsUnder(e) {
		let t = {},
			n = null == e ? void 0 : e._errors;
		return (
			null != n && n.length > 0 && (t[o] = n),
			void 0 !== e &&
				Object.entries(e).forEach((e) => {
					let [n, r] = e;
					if ('_errors' !== n)
						Object.entries(this.getAllFieldErrorsUnder(r)).forEach((e) => {
							let [r, i] = e;
							r === o ? (t[n] = i) : (t[''.concat(n, '.').concat(r)] = i);
						});
				}),
			t
		);
	}
	getFirstFieldErrorMessage(e) {
		let t = this.getFieldErrors(e);
		return null == t || t.length < 1 ? null : t[0].message;
	}
	getAnyErrorMessage() {
		var e, t;
		return null !== (t = null === (e = this.getAnyErrorMessageAndField()) || void 0 === e ? void 0 : e.error) && void 0 !== t ? t : this.message;
	}
	getAnyErrorMessageAndField() {
		let e = this.errors,
			t = null;
		for (; null != e; ) {
			if (null != e._errors)
				return {
					fieldName: t,
					error: e._errors[0].message
				};
			(t = Object.keys(e)[0]), (e = e[t]);
		}
		return null;
	}
	constructor(e, t, n = 'An unexpected error occurred.') {
		a(this, 'message', void 0), a(this, 'code', void 0), a(this, 'retryAfter', void 0), a(this, 'errors', void 0), a(this, 'status', void 0), a(this, 'captchaFields', void 0);
		let {
			message: r,
			code: i,
			retryAfter: o,
			errors: u,
			status: c,
			captchaFields: d
		} = (function (e, t) {
			if ('string' == typeof e)
				return {
					message: e,
					code: t
				};
			if (null == e.body) return { status: e.status };
			let n = e.body;
			return null == e.body.message || Array.isArray(e.body.message) || (null != e.body.code && Array.isArray(e.body.code))
				? null != n && 'captcha_key' in n
					? {
							code: -1,
							captchaFields: n,
							status: e.status,
							message: n.captcha_key.length > 0 ? n.captcha_key[0] : void 0
						}
					: {
							status: e.status,
							code: s,
							errors: (function (e) {
								let t = {};
								for (let [n, r] of Object.entries(e)) {
									if ('_misc' === n) {
										t._errors = l(r);
										continue;
									}
									let e = {};
									(e._errors = l(r)), (t[n] = e);
								}
								return t;
							})(n)
						}
				: {
						message: n.message,
						code: n.code,
						retryAfter: n.retry_after,
						errors: n.errors,
						status: e.status
					};
		})(e, t);
		(this.message = null != r ? r : n), (this.code = null != i ? i : -1), (this.retryAfter = o), (this.errors = u), (this.status = c), (this.captchaFields = null != d ? d : {});
	}
}
