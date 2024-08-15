let r;
n.d(t, {
	c: function () {
		return i;
	}
}),
	n(411104),
	n(177593),
	n(773603);
var i,
	a,
	s = n(990547),
	o = n(213919),
	l = n(544891),
	u = n(433517),
	c = n(570140),
	d = n(881052),
	_ = n(882037),
	E = n(710845),
	f = n(57132),
	h = n(703656),
	p = n(365007),
	m = n(314897),
	I = n(480294),
	T = n(573261),
	g = n(572691),
	S = n(981631),
	A = n(792101);
let N = new E.Z('AuthenticationActionCreators'),
	v = null;
function O(e) {
	let t = {
		type: 'LOGOUT',
		...e
	};
	c.Z.dispatch(t).catch((e) => {
		var t;
		throw (N.error('Error while dispatching LOGOUT', e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e);
	});
}
function R() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT;
	if ((O(), null == e)) return;
	let t = (0, f.PP)();
	if (null == t) {
		(0, h.uL)(e);
		return;
	}
	g.Z.popAll(),
		t.reset({
			index: 0,
			routes: [{ name: 'auth' }]
		});
}
((a = i || (i = {})).MFA = 'MFA'),
	(a.SUCCESS = 'SUCCESS'),
	(t.Z = {
		startSession(e) {
			c.Z.wait(() => {
				c.Z.dispatch({
					type: 'START_SESSION',
					token: e
				});
			});
		},
		setLoginCredentials(e, t) {
			c.Z.dispatch({
				type: 'SET_LOGIN_CREDENTIALS',
				login: e,
				password: t
			});
		},
		login(e) {
			var t;
			let { login: n, password: r, loginCode: i, undelete: a, source: o, giftCodeSKUId: l, invite: u, isMultiAccount: _ } = e;
			c.Z.dispatch({
				type: 'LOGIN',
				login: n,
				loginMethod: null != i && '' !== i ? S.nnr.LOGIN_CODE : S.nnr.PASSWORD
			}),
				this.setLoginCredentials(n, null !== (t = null != r ? r : i) && void 0 !== t ? t : void 0),
				T.Z.post({
					url: S.ANM.LOGIN,
					body: {
						login: n,
						password: r,
						undelete: a,
						login_code: i,
						login_source: o,
						gift_code_sku_id: l
					},
					retries: 2,
					oldFormErrors: !0,
					trackedActionData: {
						event: s.NetworkActionNames.USER_LOGIN,
						properties: {
							invite_code: null == u ? void 0 : u.code,
							is_multi_account: _
						}
					},
					...(_ ? { headers: { authorization: '' } } : {})
				}).then(
					(e) => {
						let {
							body: { mfa: t, sms: n, webauthn: r, ticket: i, token: a, backup: s, user_id: o, required_actions: l, totp: u }
						} = e;
						c.Z.dispatch({
							type: 'LOGIN_ATTEMPTED',
							user_id: o,
							required_actions: l
						}),
							t
								? c.Z.dispatch({
										type: 'LOGIN_MFA_STEP',
										ticket: i,
										sms: n,
										webauthn: r,
										totp: u,
										backup: s
									})
								: _
									? this.switchAccountToken(a)
									: c.Z.dispatch({
											type: 'LOGIN_SUCCESS',
											token: a
										});
					},
					(e) => {
						var t, i, a;
						if (null != e.body && (null === (t = e.body) || void 0 === t ? void 0 : t.suspended_user_token) != null) {
							c.Z.dispatch({
								type: 'LOGIN_SUSPENDED_USER',
								suspendedUserToken: null === (a = e.body) || void 0 === a ? void 0 : a.suspended_user_token
							});
							return;
						}
						let s = null === (i = e.body) || void 0 === i ? void 0 : i.code;
						s === S.evJ.ACCOUNT_SCHEDULED_FOR_DELETION && null != r && '' !== r
							? c.Z.dispatch({
									type: 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION',
									credentials: {
										login: n,
										password: r
									}
								})
							: s === S.evJ.ACCOUNT_DISABLED && null != r && '' !== r
								? c.Z.dispatch({
										type: 'LOGIN_ACCOUNT_DISABLED',
										credentials: {
											login: n,
											password: r
										}
									})
								: s === S.evJ.PHONE_VERIFICATION_REQUIRED
									? c.Z.dispatch({ type: 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED' })
									: c.Z.dispatch({
											type: 'LOGIN_FAILURE',
											error: new d.yZ(e)
										});
					}
				);
		},
		loginMFAv2(e) {
			let { code: t, ticket: n, source: r, giftCodeSKUId: i, isMultiAccount: a, mfaType: o } = e;
			return T.Z.post({
				url: S.ANM.LOGIN_MFA(o),
				body: {
					code: t,
					ticket: n,
					login_source: r,
					gift_code_sku_id: i
				},
				retries: 2,
				oldFormErrors: !0,
				trackedActionData: { event: s.NetworkActionNames.USER_LOGIN_MFA }
			})
				.then((e) => {
					a
						? this.switchAccountToken(e.body.token)
						: c.Z.dispatch({
								type: 'LOGIN_SUCCESS',
								token: e.body.token
							});
				})
				.catch((e) => {
					var t;
					if (null != e.body && null != e.body.suspended_user_token) {
						c.Z.dispatch({
							type: 'LOGIN_SUSPENDED_USER',
							suspendedUserToken: e.body.suspended_user_token
						});
						return;
					}
					if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === S.evJ.MFA_INVALID_CODE) throw Error(e.body.message);
					throw e;
				});
		},
		authenticatePasswordless(e) {
			let { authenticateFunc: t, conditionalMediationAbortController: n, source: r, giftCodeSKUId: i } = e;
			return (
				null == n || n.abort('Starting non-conditional mediation'),
				c.Z.dispatch({ type: 'PASSWORDLESS_START' }),
				(0, p.d$)()
					.then((e) => {
						let { challenge: n, ticket: a } = e;
						return t(n).then((e) =>
							this.loginWebAuthn({
								ticket: a,
								credential: e,
								source: r,
								giftCodeSKUId: i
							})
						);
					})
					.catch((e) => {
						throw (
							(c.Z.dispatch({
								type: 'PASSWORDLESS_FAILURE',
								error: e
							}),
							e)
						);
					})
			);
		},
		loginWebAuthn(e) {
			let { ticket: t, credential: n, source: r, giftCodeSKUId: i } = e;
			return T.Z.post({
				url: S.ANM.WEBAUTHN_CONDITIONAL_UI_LOGIN,
				body: {
					credential: n,
					ticket: t,
					source: r,
					giftCodeSKUId: i
				},
				retries: 1,
				trackedActionData: { event: s.NetworkActionNames.USER_LOGIN_PASSWORDLESS }
			})
				.then((e) => {
					let {
						body: { token: t, user_id: n, required_actions: r }
					} = e;
					c.Z.dispatch({
						type: 'LOGIN_ATTEMPTED',
						user_id: n,
						required_actions: r
					}),
						c.Z.dispatch({
							type: 'LOGIN_SUCCESS',
							token: t
						});
				})
				.catch((e) => {
					if (null != e.body && null != e.body.suspended_user_token) {
						c.Z.dispatch({
							type: 'LOGIN_SUSPENDED_USER',
							suspendedUserToken: e.body.suspended_user_token
						});
						return;
					}
					throw (
						(c.Z.dispatch({
							type: 'PASSWORDLESS_FAILURE',
							error: e
						}),
						e)
					);
				});
		},
		loginToken(e) {
			let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
			return (
				c.Z.dispatch({ type: 'LOGIN' }),
				new Promise((n) => {
					setImmediate(() => {
						c.Z.dispatch({
							type: 'LOGIN_SUCCESS',
							token: e
						}),
							t && this.startSession(e),
							n();
					});
				})
			);
		},
		loginReset(e) {
			c.Z.dispatch({
				type: 'LOGIN_RESET',
				isMultiAccount: e
			});
		},
		loginStatusReset() {
			c.Z.dispatch({ type: 'LOGIN_STATUS_RESET' });
		},
		logoutInternal(e) {
			O(e);
		},
		logout() {
			var e;
			let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT,
				n = arguments.length > 1 ? arguments[1] : void 0;
			return T.Z.post({
				url: S.ANM.LOGOUT,
				body: {
					provider: (0, A.xJ)(),
					token: u.K.get(S.JkL),
					voip_provider: A.mv,
					voip_token: u.K.get(S.scU)
				},
				oldFormErrors: !0,
				trackedActionData: { event: s.NetworkActionNames.USER_LOGOUT },
				...(null != n && { headers: { authorization: null !== (e = o.getToken(n)) && void 0 !== e ? e : '' } })
			}).finally(() => {
				(null == n || n === m.default.getId()) && R(t);
			});
		},
		switchAccountToken(e) {
			let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
				n = m.default.getToken();
			N.log('Switching accounts', {
				wasLoggedIn: null != n,
				tokenHasChanged: e !== n
			}),
				O({ isSwitchingAccount: !0 });
			let r = this.loginToken(e, !0).then(() => {
				let t = m.default.getToken();
				N.log('Switched accounts finished', { isCorrectToken: e === t });
			});
			return t && (0, h.uL)(S.Z5c.ME), r;
		},
		verifySSOToken() {
			let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT;
			return l.tn
				.get({
					url: S.ANM.ME,
					oldFormErrors: !0
				})
				.catch(() => R(e));
		},
		verify(e) {
			null != e
				? T.Z.post({
						url: S.ANM.VERIFY,
						body: { token: e },
						oldFormErrors: !0,
						trackedActionData: { event: s.NetworkActionNames.USER_VERIFY }
					}).then(
						(e) => {
							c.Z.dispatch({
								type: 'LOGIN_SUCCESS',
								token: e.body.token
							}),
								c.Z.dispatch({
									type: 'VERIFY_SUCCESS',
									verifyingUserId: e.body.user_id
								});
						},
						(e) =>
							c.Z.dispatch({
								type: 'VERIFY_FAILURE',
								errors: e.body
							})
					)
				: c.Z.dispatch({
						type: 'VERIFY_FAILURE',
						errors: {}
					});
		},
		async authorizePayment(e) {
			try {
				await T.Z.post({
					url: S.ANM.AUTHORIZE_PAYMENT,
					body: { token: e },
					oldFormErrors: !0,
					trackedActionData: { event: s.NetworkActionNames.AUTHORIZE_PAYMENT }
				}),
					c.Z.dispatch({ type: 'VERIFY_SUCCESS' });
			} catch (e) {
				c.Z.dispatch({
					type: 'VERIFY_FAILURE',
					errors: {}
				});
			}
		},
		async authorizeIPAddress(e) {
			if (null == e) {
				c.Z.dispatch({
					type: 'VERIFY_FAILURE',
					errors: {}
				});
				return;
			}
			try {
				await T.Z.post({
					url: S.ANM.AUTHORIZE_IP,
					body: { token: e },
					oldFormErrors: !0,
					trackedActionData: { event: s.NetworkActionNames.AUTHORIZE_IP }
				}),
					c.Z.dispatch({ type: 'VERIFY_SUCCESS' });
			} catch (e) {
				c.Z.dispatch({
					type: 'VERIFY_FAILURE',
					errors: {}
				});
			}
		},
		verifyResend: () =>
			T.Z.post({
				url: S.ANM.VERIFY_RESEND,
				oldFormErrors: !0,
				trackedActionData: { event: s.NetworkActionNames.USER_VERIFY_RESEND }
			}),
		async resetPassword(e, t, n) {
			c.Z.dispatch({ type: 'LOGIN' });
			let r = {
					token: e,
					password: t,
					source: n
				},
				i = u.K.get(S.JkL),
				a = (0, A.xJ)();
			null != a && null != i && ((r.push_provider = a), (r.push_token = i));
			let o = u.K.get(S.scU);
			null != A.mv && null != o && ((r.push_voip_provider = A.mv), (r.push_voip_token = o));
			try {
				let {
					body: { mfa: e, sms: t, webauthn: n, ticket: i, token: a, backup: o, totp: l }
				} = await T.Z.post({
					url: S.ANM.RESET_PASSWORD,
					body: r,
					oldFormErrors: !0,
					trackedActionData: { event: s.NetworkActionNames.USER_RESET_PASSWORD }
				});
				return {
					result: e ? 'MFA' : 'SUCCESS',
					sms: t,
					webauthn: n,
					ticket: i,
					token: a,
					backup: o,
					totp: l
				};
			} catch (e) {
				throw (
					(c.Z.dispatch({
						type: 'LOGIN_FAILURE',
						error: new d.yZ(e)
					}),
					e)
				);
			}
		},
		async resetPasswordMFAv2(e) {
			let { method: t, code: n, ticket: r, password: i, token: a, source: o } = e;
			return (
				c.Z.dispatch({ type: 'LOGIN_MFA' }),
				(
					await T.Z.post({
						url: S.ANM.RESET_PASSWORD,
						body: {
							code: n,
							ticket: r,
							password: i,
							token: a,
							source: o,
							method: t
						},
						oldFormErrors: !0,
						trackedActionData: {
							event: s.NetworkActionNames.USER_RESET_PASSWORD,
							properties: { mfa: !0 }
						}
					})
				).body.token
			);
		},
		async forgotPassword(e) {
			this.setLoginCredentials(e), c.Z.dispatch({ type: 'FORGOT_PASSWORD_REQUEST' });
			try {
				await T.Z.post({
					url: S.ANM.FORGOT_PASSWORD,
					body: { login: e },
					oldFormErrors: !0,
					trackedActionData: { event: s.NetworkActionNames.FORGOT_PASSWORD }
				}),
					c.Z.dispatch({ type: 'FORGOT_PASSWORD_SENT' });
			} catch (t) {
				let e = new d.yZ(t);
				throw (
					(e.code === S.evJ.PHONE_VERIFICATION_REQUIRED
						? c.Z.dispatch({ type: 'LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION' })
						: c.Z.dispatch({
								type: 'LOGIN_FAILURE',
								error: e
							}),
					t)
				);
			}
		},
		setFingerprint(e) {
			c.Z.dispatch({
				type: 'FINGERPRINT',
				fingerprint: e
			});
		},
		getExperiments(e) {
			c.Z.dispatch({
				type: 'EXPERIMENTS_FETCH',
				withGuildExperiments: e
			});
		},
		getLocationMetadata: () =>
			null != v
				? v
				: (clearTimeout(r),
					(r = setTimeout(() => {
						c.Z.dispatch({
							type: 'SET_CONSENT_REQUIRED',
							consentRequired: !0
						});
					}, 5000)),
					(v = l.tn
						.get({
							url: S.ANM.AUTH_LOCATION_METADATA,
							retries: 2,
							oldFormErrors: !0
						})
						.then(
							(e) => {
								var t, n, i, a, s;
								if ((clearTimeout(r), null == I.Z.getAuthenticationConsentRequired())) {
									let t = null === (a = null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : i.consent_required) || void 0 === a || a;
									c.Z.dispatch({
										type: 'SET_CONSENT_REQUIRED',
										consentRequired: t
									});
								}
								if (
									(c.Z.dispatch({
										type: 'SET_LOCATION_METADATA',
										countryCode: null !== (s = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== s ? s : void 0
									}),
									(v = null),
									(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null)
								) {
									let t = e.body.promotional_email_opt_in;
									(0, _.K4)({
										required: t.required,
										checked: t.pre_checked,
										preChecked: t.pre_checked
									});
								}
							},
							() => {
								clearTimeout(r),
									c.Z.dispatch({
										type: 'SET_CONSENT_REQUIRED',
										consentRequired: !0
									}),
									(v = null);
							}
						))),
		closeSuspendedUser() {
			c.Z.dispatch({ type: 'CLOSE_SUSPENDED_USER' });
		}
	});
