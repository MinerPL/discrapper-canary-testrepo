n.d(t, {
	C3: function () {
		return m;
	},
	Fg: function () {
		return I;
	},
	Oh: function () {
		return g;
	},
	cP: function () {
		return p;
	},
	gp: function () {
		return T;
	}
}),
	n(47120),
	n(724458);
var r = n(544891),
	i = n(570140),
	a = n(904245),
	s = n(593472),
	o = n(160404),
	l = n(359110),
	u = n(592125),
	c = n(626135),
	d = n(709054),
	_ = n(563534),
	E = n(734893),
	f = n(846121),
	h = n(981631);
let p = async (e) => {
		i.Z.dispatch({
			type: 'GUILD_HOME_SETTINGS_FETCH_START',
			guildId: e
		});
		try {
			let t = await r.tn.get({
					url: h.ANM.GUILD_HOME_SETTINGS(e),
					oldFormErrors: !0
				}),
				n = (0, E.tB)(t.body);
			return (
				i.Z.dispatch({
					type: 'GUILD_HOME_SETTINGS_FETCH_SUCCESS',
					guildId: e,
					homeSettings: n
				}),
				n
			);
		} catch (t) {
			i.Z.dispatch({
				type: 'GUILD_HOME_SETTINGS_FETCH_FAIL',
				guildId: e
			});
		}
	},
	I = async (e) => {
		if (!o.Z.isFullServerPreview(e)) {
			i.Z.dispatch({
				type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_START',
				guildId: e
			});
			try {
				let t = await r.tn.get({
						url: h.ANM.GUILD_MEMBER_ACTIONS(e),
						oldFormErrors: !0
					}),
					n = (0, E.rk)(t.body);
				return (
					i.Z.dispatch({
						type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS',
						guildId: e,
						memberActions: n
					}),
					n
				);
			} catch (t) {
				i.Z.dispatch({
					type: 'GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL',
					guildId: e
				});
			}
		}
	},
	m = function (e, t) {
		let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
		if (
			(i.Z.dispatch({
				type: 'SELECT_HOME_RESOURCE_CHANNEL',
				guildId: e,
				channelId: t
			}),
			null == t)
		)
			return;
		let r = u.Z.getChannel(t),
			E = _.Z.getResourceForChannel(e, t);
		null != e &&
			!o.Z.isFullServerPreview(e) &&
			null != r &&
			null != E &&
			c.default.track(h.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
				guild_id: e,
				channel_id: r.id,
				server_guide_channel_type: 'resource',
				channel_action_type: -1
			}),
			n && (0, l.Kh)(t);
		a.Z.jumpToMessage({
			channelId: t,
			messageId: d.default.castChannelIdAsMessageId(t),
			flash: !1,
			jumpType: s.SR.INSTANT
		});
	},
	T = (e, t) => {
		i.Z.dispatch({
			type: 'SELECT_NEW_MEMBER_ACTION_CHANNEL',
			guildId: e,
			channelId: t
		});
		let n = u.Z.getChannel(t),
			r = _.Z.getActionForChannel(e, t);
		null != e &&
			!o.Z.isFullServerPreview(e) &&
			null != n &&
			null != r &&
			c.default.track(h.rMx.SERVER_GUIDE_CHANNEL_SELECTED, {
				guild_id: e,
				channel_id: n.id,
				server_guide_channel_type: 'member action',
				channel_action_type: r.actionType
			}),
			(0, l.Kh)(t);
	},
	g = (e, t) => {
		if (
			(i.Z.dispatch({
				type: 'COMPLETE_NEW_MEMBER_ACTION',
				guildId: e,
				channelId: t
			}),
			o.Z.isFullServerPreview(e))
		)
			return;
		let n = u.Z.getChannel(t),
			a = _.Z.getActionForChannel(e, t);
		if (null != n && null != a) {
			var s, l;
			let t = d.default.keys(null !== (s = f.Z.getCompletedActions(e)) && void 0 !== s ? s : {}),
				r = null !== (l = _.Z.getNewMemberActions(e)) && void 0 !== l ? l : [];
			c.default.track(h.rMx.SERVER_GUIDE_ACTION_COMPLETED, {
				guild_id: n.guild_id,
				channel_id: n.id,
				channel_action_type: a.actionType,
				has_completed_all: r.reduce((e, n) => e && t.includes(n.channelId), !0)
			});
		}
		r.tn.post({ url: h.ANM.GUILD_MEMBER_ACTION_UPDATE(e, t) });
	};
