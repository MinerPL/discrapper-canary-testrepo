var n = a(990547),
	s = a(544891),
	i = a(570140),
	r = a(881052),
	o = a(626135),
	l = a(573261),
	u = a(545851),
	d = a(109488),
	c = a(794099),
	E = a(981631),
	_ = a(689938);
a(135200);
t.Z = {
	resetSuggestions: () => i.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' }),
	async fetchSuggestionsRegistration(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
		if (!!(0, c.vc)()) {
			i.Z.dispatch({ type: 'POMELO_SUGGESTIONS_RESET' });
			try {
				var a;
				let n = await s.tn.get({
					url: E.ANM.POMELO_SUGGESTIONS_UNAUTHED,
					query: null == e ? void 0 : { global_name: e },
					timeout: t
				});
				if (n.ok && (null === (a = n.body) || void 0 === a ? void 0 : a.username) != null)
					return i.Z.dispatch({
						type: 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS',
						suggestion: n.body,
						source: e
					});
			} catch (e) {
				return;
			}
		}
	},
	async fetchSuggestions(e) {
		if (!!(0, d.P)())
			try {
				var t;
				i.Z.dispatch({
					type: 'POMELO_SUGGESTIONS_FETCH',
					usernameSuggestionLoading: !0
				});
				let a = await s.tn.get({
					url: E.ANM.POMELO_SUGGESTIONS,
					timeout: e
				});
				if (a.ok && (null === (t = a.body) || void 0 === t ? void 0 : t.username) != null)
					return i.Z.dispatch({
						type: 'POMELO_SUGGESTIONS_SUCCESS',
						suggestion: a.body
					});
			} catch (e) {
				return;
			}
	},
	async attemptPomelo(e) {
		var t, a;
		let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'modal',
			d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
		let m =
			((t = e),
			!1 === /^[A-Za-z0-9_.]*$/.test(t)
				? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
				: t.includes('..')
					? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT
					: t.length < 2 || t.length > 32
						? _.Z.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
								maxNum: 32,
								minNum: 2
							})
						: void 0);
		if (null != m)
			return (
				o.default.track(E.rMx.POMELO_ERRORS, {
					reason: m,
					username_error: !0,
					location: s,
					one_click_flow: c
				}),
				i.Z.dispatch({
					type: 'POMELO_ATTEMPT_FAILURE',
					username: e,
					error: m
				})
			);
		if (!!(0, u.E)())
			try {
				let t = await l.Z.post({
					url: d ? E.ANM.POMELO_ATTEMPT_UNAUTHED : E.ANM.POMELO_ATTEMPT,
					body: { username: e },
					trackedActionData: {
						event: n.NetworkActionNames.POMELO_ATTEMPT,
						properties: { requested_username: e }
					}
				});
				t.body.taken &&
					o.default.track(E.rMx.POMELO_ERRORS, {
						reason: 'already_taken',
						username_error: !0,
						location: s,
						one_click_flow: c
					}),
					i.Z.dispatch({
						type: 'POMELO_ATTEMPT_SUCCESS',
						username: e,
						taken: t.body.taken
					});
			} catch (l) {
				let t = new r.Hx(l),
					n = null !== (a = t.getAnyErrorMessage()) && void 0 !== a ? a : void 0;
				o.default.track(E.rMx.POMELO_ERRORS, {
					reason: n,
					username_error: !0,
					location: s,
					one_click_flow: c
				}),
					i.Z.dispatch({
						username: e,
						type: 'POMELO_ATTEMPT_FAILURE',
						error: null != t.status && t.status < 500 && 401 !== t.status ? n : void 0,
						statusCode: t.status,
						retryAfter: t.retryAfter
					});
			}
	},
	async createPomelo(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			a = await l.Z.post({
				body: e,
				url: E.ANM.POMELO_CREATE,
				trackedActionData: {
					event: n.NetworkActionNames.POMELO_CREATE,
					properties: { one_click_flow: t }
				}
			});
		return (
			i.Z.dispatch({
				type: 'CURRENT_USER_UPDATE',
				user: a.body
			}),
			a.body
		);
	}
};
