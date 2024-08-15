n.d(t, {
	R$: function () {
		return p;
	},
	ZP: function () {
		return g;
	}
});
var s = n(913527),
	r = n.n(s),
	i = n(990547),
	a = n(570140),
	l = n(479531),
	o = n(771308),
	c = n(314897),
	u = n(626135),
	d = n(573261),
	_ = n(959776),
	h = n(981631),
	E = n(723359);
function g(e) {
	let { invite: t = null, giftCodeSKUId: n = null, ...s } = e;
	return p({
		...s,
		invite: t,
		giftCodeSKUId: n
	});
}
function p(e) {
	let { email: t, phoneToken: n, username: s, globalName: g, consent: p, password: I, guildTemplateCode: m, birthday: f, invite: N = null, giftCodeSKUId: T = null, multiStep: x = !1, promoEmailConsent: A = null, usedUsernameSuggestion: C = null } = e;
	return (
		a.Z.dispatch({
			type: 'REGISTER',
			birthday: x ? f : null
		}),
		null != f &&
			((0, _.Z)(f, h.jXE.REGISTER),
			u.default.track(h.rMx.AGE_GATE_ACTION, {
				source: E.L0.REGISTER,
				action: E.Al.AGE_GATE_SUBMITTED
			}),
			!(function (e) {
				let t;
				let n = r()().diff(e, 'years');
				!(n < 13) && ((t = n >= 13 && n <= 17 ? '13-17' : n >= 18 && n <= 22 ? '18-22' : '23+'), u.default.track(h.rMx.USER_AGE_SUBMITTED, { age_bucket: t }));
			})(f)),
		d.Z.post({
			url: h.ANM.REGISTER,
			body: {
				fingerprint: c.default.getFingerprint(),
				email: t,
				username: s,
				global_name: g,
				password: I,
				invite: N,
				consent: p,
				phone_token: n,
				date_of_birth: null == f ? void 0 : f.format('YYYY-MM-DD'),
				gift_code_sku_id: T,
				guild_template_code: m,
				promotional_email_opt_in: null == A ? void 0 : A.checked
			},
			trackedActionData: {
				event: i.NetworkActionNames.USER_REGISTER,
				properties: {
					invite_code: N,
					used_username_suggestion: C,
					promotional_email_opt_in: null == A ? void 0 : A.checked,
					promotional_email_pre_checked: null == A ? void 0 : A.preChecked,
					was_unique_username: !0
				}
			}
		}).then(
			(e) => {
				a.Z.dispatch({
					type: 'REGISTER_SUCCESS',
					token: e.body.token
				}),
					u.default.track(h.rMx.AGE_GATE_ACTION, {
						source: E.L0.REGISTER,
						action: E.Al.AGE_GATE_SUCCESS
					});
			},
			(e) => {
				let t = new l.Z(e);
				throw (
					(a.Z.dispatch({
						type: 'REGISTER_FAILURE',
						error: t
					}),
					null != t.getFieldErrors('date_of_birth') && o.wE(E.L0.REGISTER),
					u.default.track(h.rMx.REGISTER_SUBMIT_ERRORED, {
						is_unique_username_registration: !0,
						email_error_reason: t.getFirstFieldErrorMessage('email'),
						phone_error_reason: t.getFirstFieldErrorMessage('phone'),
						password_error_reason: t.getFirstFieldErrorMessage('password'),
						username_error_reason: t.getFirstFieldErrorMessage('username'),
						global_name_error_reason: t.getFirstFieldErrorMessage('global_name'),
						date_of_birth_error_reason: t.getFirstFieldErrorMessage('date_of_birth')
					}),
					e)
				);
			}
		)
	);
}
