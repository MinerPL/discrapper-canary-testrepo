E.d(_, {
	BG: function () {
		return D;
	},
	aY: function () {
		return I;
	},
	dW: function () {
		return U;
	},
	gm: function () {
		return S;
	},
	h1: function () {
		return O;
	},
	jQ: function () {
		return n;
	},
	sE: function () {
		return G;
	}
});
var s,
	T,
	I,
	n,
	t = E(470079),
	A = E(100527),
	r = E(367907),
	a = E(314897),
	N = E(626135),
	l = E(981631);
function L(e, _, E) {
	var s;
	let T = {
		..._,
		...(0, r.hH)(null !== (s = _.guild_id) && void 0 !== s ? s : E)
	};
	N.default.track(e, T);
}
function S(e) {
	return t.useCallback(
		(_) => {
			!(function (e) {
				let _ = {
					guild_id: e,
					location: A.Z.MEMBER_SAFETY_PAGE
				};
				L(l.rMx.MOD_DASH_SEARCH_MEMBERS, _);
			})(e);
		},
		[e]
	);
}
function D(e) {
	return t.useCallback(
		(_) => {
			!(function (e, _) {
				let E = {
					selected_role_count: _.size,
					guild_id: e,
					location: A.Z.MEMBER_SAFETY_PAGE
				};
				L(l.rMx.MOD_DASH_FILTER_ROLES, E);
			})(e, _);
		},
		[e]
	);
}
((s = I || (I = {})).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'),
	(s.COMMUNICATION_DISABLED = 'communication_disabled'),
	(s.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'),
	(s.USERNAME_QUARANTINED = 'username_quarantined');
function U(e) {
	return t.useCallback(
		(_) => {
			!(function (e, _) {
				let E = {
					flag_type: _,
					guild_id: e,
					location: A.Z.MEMBER_SAFETY_PAGE
				};
				L(l.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, E);
			})(e, _);
		},
		[e]
	);
}
function G(e, _) {
	let { location: E, targetUserId: s, targets: T, locations: I } = _;
	return t.useCallback(
		(_) => {
			let n = {
				action_type: _,
				mod_user_id: a.default.getId(),
				guild_id: e,
				location: E,
				locations: I,
				target_user_id: null != s ? s : void 0,
				targets: null != T ? T : void 0
			};
			L(l.rMx.MODERATION_ACTION, n);
		},
		[e, E, s, T, I]
	);
}
function O(e, _) {
	L(l.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
		guild_id: e,
		location: _
	});
}
((T = n || (n = {})).BAN = 'ban'),
	(T.KICK = 'kick'),
	(T.MUTE = 'mute'),
	(T.TIMEOUT = 'timeout'),
	(T.ADD_ROLE = 'add_role'),
	(T.REMOVE_ROLE = 'remove_role'),
	(T.COPY_ID = 'copy_id'),
	(T.CHANGE_NICKNAME = 'change_nickname');
