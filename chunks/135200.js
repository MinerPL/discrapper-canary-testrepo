var n,
	s,
	i,
	r,
	o = a(31775),
	l = a.n(o),
	u = a(442837),
	d = a(570140),
	c = a(70956);
let E = {
		taken: null,
		error: void 0,
		rateLimited: !0
	},
	_ = {
		validations: new (l())({
			max: 100,
			maxAge: 60000
		}),
		currentUsernameInvalid: !1,
		retryAfterTime: null,
		suggestions: {
			migration: {
				suggestion: { username: void 0 },
				fetched: !1,
				usernameSuggestionLoading: !1
			},
			registration: {
				suggestion: { username: void 0 },
				source: void 0,
				fetched: !1
			}
		}
	};
class m extends (r = u.ZP.Store) {
	isRateLimited() {
		return null != _.retryAfterTime && Date.now() < _.retryAfterTime;
	}
	validate(e) {
		let t = _.validations.get(e);
		if (this.isRateLimited() && (null == t || t.rateLimited)) return E;
		if (!!this.isRateLimited() || null == t || !t.rateLimited) return t;
	}
	registrationUsernameSuggestion() {
		return _.suggestions.registration.suggestion.username;
	}
	usernameSuggestion() {
		return _.suggestions.migration.suggestion.username;
	}
	usernameSuggestionLoading() {
		return _.suggestions.migration.usernameSuggestionLoading;
	}
	isCurrentUsernameInvalid() {
		return _.currentUsernameInvalid;
	}
	wasRegistrationSuggestionFetched(e) {
		return _.suggestions.registration.source === e && _.suggestions.registration.fetched;
	}
	wasSuggestionsFetched() {
		return _.suggestions.migration.fetched;
	}
}
(i = 'PomeloStore'),
	(s = 'displayName') in (n = m)
		? Object.defineProperty(n, s, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (n[s] = i),
	(t.Z = new m(d.Z, {
		POMELO_ATTEMPT_SUCCESS: function (e) {
			let { username: t, taken: a } = e;
			_.validations.set(t, { taken: a });
		},
		POMELO_ATTEMPT_FAILURE: function (e) {
			let { username: t, error: a, statusCode: n, retryAfter: s } = e;
			429 === n
				? _.validations.set(
						t,
						{
							taken: null,
							error: a,
							rateLimited: !0
						},
						(null != s ? s : 7) * c.Z.Millis.SECOND
					)
				: _.validations.set(t, {
						taken: null,
						error: a
					}),
				null != s && (_.retryAfterTime = Date.now() + s * c.Z.Millis.SECOND);
		},
		POMELO_SUGGESTIONS_RESET: function () {
			(_.suggestions.migration = {
				suggestion: { username: void 0 },
				fetched: !1,
				usernameSuggestionLoading: !1
			}),
				(_.suggestions.registration = {
					suggestion: { username: void 0 },
					source: void 0,
					fetched: !1
				});
		},
		POMELO_SUGGESTIONS_SUCCESS: function (e) {
			let { suggestion: t } = e;
			(_.suggestions.migration = {
				suggestion: t,
				fetched: !0,
				usernameSuggestionLoading: !1
			}),
				(null == t ? void 0 : t.invalid_current_username) === !0 && (_.currentUsernameInvalid = !0);
		},
		POMELO_SUGGESTIONS_FETCH: function (e) {
			let { usernameSuggestionLoading: t } = e;
			_.suggestions.migration.usernameSuggestionLoading = t;
		},
		POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function (e) {
			let { suggestion: t, source: a } = e;
			(_.suggestions.registration = {
				suggestion: t,
				source: a,
				fetched: !0
			}),
				(null == t ? void 0 : t.username) != null && _.validations.set(t.username, { taken: !1 });
		}
	}));
