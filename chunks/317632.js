n(47120);
var i,
	a,
	s,
	r,
	l = n(442837),
	o = n(570140),
	c = n(823379),
	u = n(981631);
let d = [],
	_ = {},
	E = null,
	I = 0;
function m(e) {
	let t = null;
	try {
		t = JSON.parse(e.launch_parameters);
	} catch {
		return null;
	}
	if (e.platform_type === u.ABu.XBOX) {
		let n = null == t ? void 0 : t.titleId,
			i = null == t ? void 0 : t.inviteToken;
		return null == n || null == i
			? null
			: {
					...e,
					parsed_launch_parameters: {
						titleId: n,
						inviteToken: i
					}
				};
	}
	return null;
}
class T extends (i = l.ZP.Store) {
	getInvites() {
		return d;
	}
	getInviteStatuses() {
		return _;
	}
	isInviteGameInstalled(e) {
		var t;
		return null === (t = _[e.invite_id]) || void 0 === t ? void 0 : t.installed;
	}
	isInviteJoinable(e) {
		var t;
		return null === (t = _[e.invite_id]) || void 0 === t ? void 0 : t.joinable;
	}
	getLastUnseenInvite() {
		return E;
	}
	getUnseenInviteCount() {
		return I;
	}
}
(r = 'GameInviteStore'),
	(s = 'displayName') in (a = T)
		? Object.defineProperty(a, s, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = r),
	(t.Z = new T(o.Z, {
		CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
			let { gameInvites: t } = e;
			d = t.map(m).filter(c.lm);
		},
		GAME_INVITE_CREATE: function (e) {
			let { gameInvite: t } = e,
				n = m(t);
			null != n && ((d = [n, ...d]), (E = t), (I += 1));
		},
		GAME_INVITE_DELETE: function (e) {
			let { inviteId: t } = e;
			d = d.filter((e) => e.invite_id !== t);
		},
		GAME_INVITE_DELETE_MANY: function (e) {
			let { inviteIds: t } = e;
			d = d.filter((e) => !t.includes(e.invite_id));
		},
		GAME_INVITE_UPDATE_STATUS: function (e) {
			(_ = { ..._ })[e.inviteId] = {
				installed: e.installed,
				joinable: e.joinable
			};
		},
		GAME_INVITE_CLEAR_UNSEEN: function (e) {
			(E = null), (I = 0);
		}
	}));
