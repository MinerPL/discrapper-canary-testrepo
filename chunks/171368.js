n.r(t),
	n.d(t, {
		closeUserProfileModal: function () {
			return m;
		},
		openUserProfileModal: function () {
			return p;
		}
	});
var r = n(259443),
	i = n(481060),
	a = n(570140),
	s = n(232567),
	o = n(911284),
	l = n(314897),
	u = n(594174),
	c = n(27144),
	d = n(484459),
	_ = n(981631);
let E = (0, i.getAvatarSize)(i.AvatarSizes.SIZE_120),
	f = new r.Y('UserProfileModalActionCreators'),
	h = async (e) => {
		let { pastActivityEnabled: t, selfPastActivityEnabled: n } = (0, c.L)({
			location: 'UserProfileModalActionCreators',
			autoTrackExposure: !1
		});
		if (!!(t || (n && l.default.getId() === e)))
			try {
				await (0, o.Z)(e);
			} catch (t) {
				f.log('Failed to fetch content inventory outbox for '.concat(e, ':'), t);
			}
	};
async function p(e) {
	let { userId: t, guildId: n = _.ME, channelId: r, messageId: i, roleId: o, sessionId: l, section: c, subsection: f, friendToken: p, showGuildProfile: m, analyticsLocation: I, sourceAnalyticsLocations: T } = e,
		g = null != n && n !== _.ME ? n : void 0,
		S = u.default.getUser(t);
	h(t),
		null == S
			? await (0, s.In)(t, {
					guildId: m ? g : void 0,
					withMutualGuilds: !0,
					withMutualFriends: !0,
					friendToken: p
				})
			: (0, d.Z)(S.id, S.getAvatarURL(void 0, E), {
					guildId: m ? g : void 0,
					withMutualGuilds: !0,
					withMutualFriends: !0,
					friendToken: p
				}),
		a.Z.dispatch({
			type: 'USER_PROFILE_MODAL_OPEN',
			userId: t,
			guildId: null != n ? n : void 0,
			channelId: null != r ? r : void 0,
			messageId: null != i ? i : void 0,
			roleId: null != o ? o : void 0,
			sessionId: null != l ? l : void 0,
			section: c,
			subsection: f,
			friendToken: p,
			showGuildProfile: m,
			analyticsLocation: I,
			sourceAnalyticsLocations: T
		});
}
function m() {
	a.Z.dispatch({ type: 'USER_PROFILE_MODAL_CLOSE' });
}
