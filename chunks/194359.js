n(47120);
var r,
	i,
	a = n(544891),
	s = n(780384),
	o = n(570140),
	l = n(391650),
	u = n(877215),
	c = n(895886),
	d = n(397550),
	_ = n(594174),
	E = n(657682),
	f = n(51144),
	h = n(668781),
	p = n(239091),
	I = n(981631),
	m = n(689938);
function T(e) {
	(0, p.Zy)(), h.Z.show(e);
}
function g(e, t, n) {
	let { status: r, body: i } = e,
		a = i && i.code;
	switch (r) {
		case 429:
			0 === t &&
				T({
					title: m.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_HEADER,
					body: m.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BODY,
					confirmText: m.Z.Messages.FRIEND_REQUEST_RATE_LIMITED_BUTTON
				});
			break;
		case 403:
			if (a === I.evJ.EMAIL_VERIFICATION_REQUIRED) {
				T({
					title: m.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_HEADER,
					body: m.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BODY,
					confirmText: m.Z.Messages.FRIEND_REQUEST_REQUIRES_EMAIL_VALIDATION_BUTTON,
					onConfirm: () => {
						l.j();
					}
				});
				break;
			}
		default:
			if (a === I.evJ.USER_QUARANTINED) (0, p.Zy)(), (0, c.default)();
			else if ((0, d.b)(r, a)) break;
			else if (0 === t) {
				let e = null != n ? (0, E.NF)(a || 0, n) : m.Z.Messages.POMELO_ADD_FRIEND_ERROR;
				T({
					title: m.Z.Messages.FRIEND_REQUEST_FAILED_HEADER,
					body: e,
					confirmText: m.Z.Messages.OKAY
				});
			}
	}
	throw e;
}
((i = r || (r = {}))[(i.SHOW_ALWAYS = 0)] = 'SHOW_ALWAYS'),
	(i[(i.SHOW_ONLY_IF_ACTION_NEEDED = 1)] = 'SHOW_ONLY_IF_ACTION_NEEDED');
let S = {
	sendRequest(e) {
		let { discordTag: t, context: n, captchaPayload: r, errorUxConfig: i = 0 } = e,
			[s, o] = t.split('#');
		return a.tn
			.post({
				url: I.ANM.USER_RELATIONSHIPS(),
				body: {
					username: s,
					discriminator: parseInt(o),
					...r
				},
				context: n,
				oldFormErrors: !0
			})
			.catch((e) => {
				g(e, i, t);
			});
	},
	addRelationship(e, t) {
		let { userId: n, context: r, type: i, friendToken: s, fromFriendSuggestion: o, captchaPayload: l } = e,
			u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
			c = _.default.getUser(n);
		return a.tn
			.put({
				url: I.ANM.USER_RELATIONSHIP(n),
				body: {
					type: i,
					friend_token: s,
					from_friend_suggestion: o,
					...l
				},
				context: r,
				oldFormErrors: !0
			})
			.then(() => {
				null == t || t();
			})
			.catch((e) => {
				g(e, u, f.ZP.getUserTag(c));
			});
	},
	acceptFriendRequest: (e) =>
		S.addRelationship(e, function () {
			s.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_ACCEPT_REQUEST);
		}),
	cancelFriendRequest: (e, t) =>
		S.removeRelationship(e, t, function () {
			s.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_CANCEL_REQUEST);
		}),
	removeFriend(e, t) {
		S.removeRelationship(e, t, function () {
			s.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_FRIEND_REMOVED);
		});
	},
	unblockUser(e, t) {
		S.removeRelationship(e, t, function () {
			s.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_USER_UNBLOCKED);
		});
	},
	removeRelationship: (e, t, n) =>
		a.tn
			.del({
				url: I.ANM.USER_RELATIONSHIP(e),
				context: t,
				oldFormErrors: !0
			})
			.then(() => {
				null == n || n();
			})
			.catch(() => {
				s.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL);
			}),
	updateRelationship: (e, t) =>
		a.tn.patch({
			url: I.ANM.USER_RELATIONSHIP(e),
			body: { nickname: t }
		}),
	fetchRelationships() {
		a.tn
			.get({
				url: I.ANM.USER_RELATIONSHIPS(),
				oldFormErrors: !0
			})
			.then(
				(e) =>
					o.Z.dispatch({
						type: 'LOAD_RELATIONSHIPS_SUCCESS',
						relationships: e.body
					}),
				() => o.Z.dispatch({ type: 'LOAD_RELATIONSHIPS_FAILURE' })
			);
	},
	confirmClearPendingRelationships(e) {
		(0, u.Z)(e);
	},
	clearPendingRelationships: () =>
		a.tn
			.del({
				url: I.ANM.USER_RELATIONSHIPS(),
				query: { relationship_type: I.OGo.PENDING_INCOMING }
			})
			.then(() => {
				o.Z.dispatch({ type: 'RELATIONSHIP_PENDING_INCOMING_REMOVED' });
			})
			.catch(() => {
				s.uv.announce(m.Z.Messages.A11Y_ANNOUNCEMENT_GENERIC_FAIL);
			})
};
t.Z = S;
