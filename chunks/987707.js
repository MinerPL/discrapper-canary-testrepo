E(653041), E(47120), E(733860);
var s,
	T,
	I,
	n,
	t = E(392711),
	A = E.n(t),
	r = E(149765),
	a = E(442837),
	N = E(570140),
	l = E(387667),
	L = E(131704),
	S = E(271383),
	D = E(430824),
	U = E(981631);
let G = [U.Plq.KICK_MEMBERS, U.Plq.BAN_MEMBERS, U.Plq.ADMINISTRATOR, U.Plq.MANAGE_CHANNELS, U.Plq.MANAGE_GUILD, U.Plq.MANAGE_MESSAGES, U.Plq.MANAGE_NICKNAMES, U.Plq.MANAGE_ROLES, U.Plq.MANAGE_WEBHOOKS, U.Plq.MANAGE_GUILD_EXPRESSIONS, U.Plq.MOVE_MEMBERS, U.Plq.MUTE_MEMBERS, U.Plq.DEAFEN_MEMBERS],
	O = null,
	o = [],
	i = [],
	M = [],
	u = [],
	R = [],
	c = [],
	C = [],
	d = [],
	g = !0,
	f = !1,
	Z = !1,
	P = !0,
	H = !1,
	p = null,
	h = U.rsA.ALL,
	m = null,
	v = {},
	F = 0;
function V(e) {
	let _ = [],
		E = 0;
	return (
		e.reverse().forEach((e) => {
			var s, T, I;
			let n = [],
				t = null,
				r = null,
				a = null;
			if ((null != e.reason && n.push(new l.ms(U.zUn.REASON, null, e.reason)), null != e.changes))
				for (let _ of e.changes) {
					let e = new l.ms(_.key, _.old_value, _.new_value);
					n.push(e), e.key === U.zUn.NAME ? (t = e) : e.key === U.zUn.TYPE ? (a = e) : e.key === U.zUn.TITLE && (r = e);
				}
			if (e.action_type === U.rsA.MEMBER_PRUNE) {
				let _ = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
					E = new l.ms(U.zUn.PRUNE_DELETE_DAYS, null, _);
				n.push(E);
			}
			e.action_type === U.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null === (T = e.options) || void 0 === T ? void 0 : T.auto_moderation_rule_name) != null && n.push(new l.ms(U.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === U.rsA.VOICE_CHANNEL_STATUS_CREATE && (null === (s = e.options) || void 0 === s ? void 0 : s.status) != null && n.push(new l.ms(U.zUn.STATUS, null, e.options.status));
			let N = new l.ZP({
					id: e.id,
					action: e.action_type,
					targetId: e.target_id,
					userId: e.user_id,
					changes: n,
					options: e.options
				}),
				S = _[0];
			if (
				(function (e, _, E) {
					let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
						T = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
					return null != e && e.action === _.action && e.targetId === _.targetId && e.userId === _.userId && A().isEqual(e.options, _.options) && _.timestampStart.diff(e.timestampStart, 'minutes') < s && E < T && _.targetType !== U.KFR.INVITE && _.action !== U.rsA.MESSAGE_DELETE && _.action !== U.rsA.MESSAGE_BULK_DELETE && _.action !== U.rsA.MESSAGE_PIN && _.action !== U.rsA.MESSAGE_UNPIN && _.action !== U.rsA.MEMBER_MOVE && _.action !== U.rsA.MEMBER_DISCONNECT && _.action !== U.rsA.BOT_ADD && _.action !== U.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && _.action !== U.rsA.MEMBER_PRUNE;
				})(S, N, E)
			) {
				(_[0] = S.merge({
					changes: [...S.changes, ...N.changes],
					timestampEnd: N.timestampStart
				})),
					E++;
				return;
			}
			if (N.actionType === U.vB8.DELETE && (null != t || null != r)) {
				let e = null !== (I = null == t ? void 0 : t.oldValue) && void 0 !== I ? I : null == r ? void 0 : r.oldValue;
				(N.targetType === U.KFR.CHANNEL || N.targetType === U.KFR.CHANNEL_OVERWRITE) && null !== a && (0, L.r8)(a.oldValue) && (e = '#'.concat(e)), null == v[N.targetType] ? (v[N.targetType] = { [N.targetId]: e }) : (v[N.targetType][N.targetId] = e);
			}
			(E = 0), _.unshift(N);
		}),
		_
	);
}
function B(e) {
	let { section: _ } = e;
	if (_ !== U.pNK.AUDIT_LOG) return !1;
	let E = S.ZP.getMembers(O),
		s = D.Z.getGuild(O),
		T = null != O ? D.Z.getRoles(O) : void 0;
	M = A()(E)
		.filter((e) =>
			e.roles.some((_) => {
				if (null != s) {
					if (e.userId === s.ownerId) return !0;
					let E = null == T ? void 0 : T[_];
					return null != E && G.some((e) => r.e$(E.permissions, e));
				}
			})
		)
		.map((e) => e.userId)
		.value();
}
class b extends (s = a.ZP.Store) {
	get logs() {
		return o;
	}
	get integrations() {
		return i;
	}
	get webhooks() {
		return u;
	}
	get guildScheduledEvents() {
		return R;
	}
	get automodRules() {
		return c;
	}
	get threads() {
		return C;
	}
	get applicationCommands() {
		return d;
	}
	get isInitialLoading() {
		return g;
	}
	get isLoading() {
		return f;
	}
	get isLoadingNextPage() {
		return Z;
	}
	get hasOlderLogs() {
		return P;
	}
	get hasError() {
		return H;
	}
	get userIds() {
		return M;
	}
	get userIdFilter() {
		return p;
	}
	get targetIdFilter() {
		return m;
	}
	get actionFilter() {
		return h;
	}
	get deletedTargets() {
		return v;
	}
	get groupedFetchCount() {
		return F;
	}
}
(n = 'GuildSettingsAuditLogStore'),
	(I = 'displayName') in (T = b)
		? Object.defineProperty(T, I, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (T[I] = n),
	(_.Z = new b(N.Z, {
		AUDIT_LOG_FETCH_START: function () {
			f = !0;
		},
		AUDIT_LOG_FETCH_SUCCESS: function (e) {
			var _;
			(F = 0), (g = !1), (f = !1), (P = !0), (H = !1), (o = V(e.logs)), (i = e.integrations), (u = e.webhooks), (R = e.guildScheduledEvents), (c = null !== (_ = e.automodRules) && void 0 !== _ ? _ : []), (C = e.threads), (d = e.applicationCommands), e.logs.length < U.Rg9 && (P = !1);
		},
		AUDIT_LOG_FETCH_FAIL: function () {
			(f = !1), (H = !0), (o = []);
		},
		AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
			let { isGroupedFetch: _ } = e;
			(Z = !0), _ && F++;
		},
		AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
			let { logs: _, integrations: E, webhooks: s, guildScheduledEvents: T, automodRules: I, threads: n, applicationCommands: t } = e;
			if (((Z = !1), (i = E), (u = s), (R = T), (c = I), (C = n), (d = t), (0 === _.length || _.length < U.Rg9) && (P = !1), _.length > 0)) {
				let e = V(_);
				o = [...o, ...e];
			}
		},
		AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
			Z = !1;
		},
		AUDIT_LOG_FILTER_BY_ACTION: function (e) {
			let { action: _ } = e;
			h = _;
		},
		AUDIT_LOG_FILTER_BY_USER: function (e) {
			let { userId: _ } = e;
			p = _;
		},
		AUDIT_LOG_FILTER_BY_TARGET: function (e) {
			let { targetId: _ } = e;
			m = _;
		},
		GUILD_SETTINGS_SET_SECTION: B,
		GUILD_SETTINGS_INIT: function (e) {
			let { guildId: _, section: E } = e;
			return (O = _), (m = null), B({ section: E });
		},
		GUILD_SETTINGS_CLOSE: function () {
			(o = []), (M = []), (h = U.rsA.ALL), (p = null), (m = null), (v = {}), (F = 0), (g = !0), (i = []), (u = []), (R = []), (c = []), (C = []);
		}
	}));
