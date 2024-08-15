E.d(_, {
	OY: function () {
		return a;
	},
	ZX: function () {
		return N;
	},
	bY: function () {
		return r;
	},
	gV: function () {
		return L;
	},
	uo: function () {
		return l;
	}
});
var s = E(544891),
	T = E(570140),
	I = E(987707),
	n = E(981631);
function t() {
	return I.Z.isLoading || I.Z.isLoadingNextPage;
}
function A(e, _) {
	let E = (function (e) {
		let { before: _, userId: E, targetId: s, action: T } = e,
			t = null == E ? I.Z.userIdFilter : E,
			A = null == T ? I.Z.actionFilter : T,
			r = null == s ? I.Z.targetIdFilter : s,
			a = { limit: n.Rg9 };
		return null != _ && (a.before = _), null != t && (a.user_id = t), null != A && (a.action_type = A), null != r && (a.target_id = r), a;
	})(_);
	return s.tn.get({
		url: n.ANM.GUILD_AUDIT_LOG(e),
		query: E,
		oldFormErrors: !0
	});
}
function r(e, _, E, s) {
	if (!t() && null != e)
		return (
			T.Z.dispatch({ type: 'AUDIT_LOG_FETCH_START' }),
			A(e, {
				userId: _,
				action: s,
				targetId: E
			}).then(
				(e) => {
					let { audit_log_entries: _, integrations: E, users: s, webhooks: I, guild_scheduled_events: n, auto_moderation_rules: t, threads: A, application_commands: r } = e.body;
					T.Z.dispatch({
						type: 'AUDIT_LOG_FETCH_SUCCESS',
						logs: _,
						integrations: E,
						users: s,
						webhooks: I,
						guildScheduledEvents: n,
						automodRules: t,
						threads: A,
						applicationCommands: r
					});
				},
				() => T.Z.dispatch({ type: 'AUDIT_LOG_FETCH_FAIL' })
			)
		);
}
function a(e) {
	let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	if (!I.Z.hasOlderLogs || t() || null == e) return;
	let E = I.Z.logs,
		s = E[E.length - 1],
		n = null;
	return (
		null != s && (n = s.id),
		T.Z.dispatch({
			type: 'AUDIT_LOG_FETCH_NEXT_PAGE_START',
			before: n,
			isGroupedFetch: _
		}),
		A(e, { before: n }).then(
			(e) => {
				let { audit_log_entries: _, integrations: E, users: s, webhooks: I, guild_scheduled_events: n, auto_moderation_rules: t, threads: A, application_commands: r } = e.body;
				T.Z.dispatch({
					type: 'AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS',
					logs: _,
					integrations: E,
					users: s,
					webhooks: I,
					guildScheduledEvents: n,
					automodRules: t,
					threads: A,
					applicationCommands: r
				});
			},
			() => T.Z.dispatch({ type: 'AUDIT_LOG_FETCH_NEXT_PAGE_FAIL' })
		)
	);
}
function N(e, _) {
	if (!t() && null != _)
		return (
			T.Z.dispatch({
				type: 'AUDIT_LOG_FILTER_BY_ACTION',
				action: e
			}),
			r(_, null, null, e)
		);
}
function l(e, _) {
	if (!t() && null != _)
		return (
			T.Z.dispatch({
				type: 'AUDIT_LOG_FILTER_BY_USER',
				userId: e
			}),
			r(_, e)
		);
}
function L(e, _) {
	if (!t() && null != _)
		return (
			T.Z.dispatch({
				type: 'AUDIT_LOG_FILTER_BY_TARGET',
				targetId: e
			}),
			r(_, null, e)
		);
}
