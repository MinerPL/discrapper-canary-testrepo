E.d(_, {
	RE: function () {
		return L;
	},
	RN: function () {
		return D;
	},
	po: function () {
		return T;
	},
	qr: function () {
		return S;
	},
	xb: function () {
		return G;
	},
	zq: function () {
		return U;
	}
});
var s,
	T,
	I = E(470079),
	n = E(399606),
	t = E(906732),
	A = E(171368),
	r = E(430824),
	a = E(594174),
	N = E(91047),
	l = E(981631);
let L = (e, _) => {
	let { guildId: E, userId: s, colorRoleId: T } = e;
	(0, A.openUserProfileModal)({
		userId: s,
		guildId: E,
		sourceAnalyticsLocations: _,
		roleId: T,
		analyticsLocation: {
			section: l.jXE.MEMBER_SAFETY_PAGE,
			object: l.qAy.ACTIONED_BY_USER
		}
	});
};
function S(e, _, E) {
	let { analyticsLocations: s } = (0, t.ZP)();
	return I.useCallback(
		(T) => {
			if (null == e) return;
			let I = a.default.getUser(e.userId);
			if (null != I)
				T.stopPropagation(),
					(0, N.n8)(T, {
						user: I,
						guildId: e.guildId,
						analyticsLocations: null != _ ? [_] : s,
						onCloseContextMenu: E
					});
		},
		[e, s, E, _]
	);
}
function D(e, _, E) {
	let { analyticsLocations: s } = (0, t.ZP)();
	return I.useCallback(
		(T) => {
			if (null == e) return;
			let I = a.default.getUser(e.userId);
			if (null != I)
				T.stopPropagation(),
					(0, N._j)(T, {
						user: I,
						guildId: e.guildId,
						analyticsLocations: null != _ ? [_] : s,
						onCloseContextMenu: E,
						showTransferOwnershipItem: !0
					});
		},
		[e, E, s, _]
	);
}
function U(e) {
	return (0, n.e7)(
		[r.Z],
		() => {
			var _;
			if (null == e) return null;
			let E = r.Z.getGuild(e.guildId);
			return null == E || null == e.highestRoleId
				? null
				: null !== (_ = r.Z.getRole(E.id, e.highestRoleId)) && void 0 !== _
					? _
					: null;
		},
		[e]
	);
}
function G(e, _, E) {
	return _ ? 0 : e ? 1 : E <= 0 ? 2 : 3;
}
((s = T || (T = {}))[(s.LOADING = 0)] = 'LOADING'),
	(s[(s.SUCCESS_STILL_INDEXING = 1)] = 'SUCCESS_STILL_INDEXING'),
	(s[(s.SUCCESS_EMPTY = 2)] = 'SUCCESS_EMPTY'),
	(s[(s.SUCCESS_FULL = 3)] = 'SUCCESS_FULL');
