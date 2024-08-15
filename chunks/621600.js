n.d(t, {
	$R: function () {
		return I;
	},
	GA: function () {
		return A;
	},
	I: function () {
		return v;
	},
	Ib: function () {
		return r;
	},
	UE: function () {
		return p;
	},
	Wq: function () {
		return m;
	},
	ZB: function () {
		return i;
	},
	jz: function () {
		return S;
	},
	rU: function () {
		return N;
	},
	sK: function () {
		return g;
	},
	wK: function () {
		return O;
	}
}),
	n(789020),
	n(47120);
var r,
	i,
	a,
	s,
	o = n(367907),
	l = n(601992),
	u = n(592125),
	c = n(375954),
	d = n(9156);
n(626135);
var _ = n(630388),
	E = n(981631),
	f = n(490897),
	h = n(526761);
((a = r || (r = {})).GUILD = 'guild'),
	(a.CHANNEL = 'channel'),
	(a.ACCOUNT = 'account'),
	((s = i || (i = {})).ForumThreadsCreatedOn = 'enabled forum thread created notifs'),
	(s.ForumThreadsCreatedOff = 'disabled forum thread created notifs'),
	(s.SuppressEveryoneOn = 'enabled suppress everyone'),
	(s.SuppressEveryoneOff = 'disabled suppress everyone'),
	(s.SuppressRolesOn = 'enabled suppress roles'),
	(s.SuppressRolesOff = 'disabled suppress roles'),
	(s.HighlightsOn = 'enabled highlights'),
	(s.HighlightsOff = 'disabled highlights'),
	(s.MobilePushOn = 'enabled mobile push notifications'),
	(s.MobilePushOff = 'disabled mobile push notifications'),
	(s.UnreadsAll = 'unreads set to all messages'),
	(s.UnreadsMentions = 'unreads set to mentions'),
	(s.UnreadsDefault = 'unreads set to the default'),
	(s.NotificationsAll = 'notifications set to all messages'),
	(s.NotificationsMentions = 'notifications set to mentions'),
	(s.NotificationsNothing = 'notifications set to nothing'),
	(s.NotificationsDefault = 'notifications set to the default'),
	(s.PresetAll = 'notification preset set to all messages'),
	(s.PresetMentions = 'notification preset set to mentions'),
	(s.PresetNothing = 'notification preset set to nothing'),
	(s.PresetDefault = 'notification preset set to the default'),
	(s.OptedIn = 'opted in to entity'),
	(s.OptedOut = 'opted out from entity'),
	(s.Favorited = 'favorited'),
	(s.UnFavorited = 'unfavorited'),
	(s.Muted = 'muted'),
	(s.Unmuted = 'unmuted'),
	(s.MutedScheduledEvents = 'muted scheduled events'),
	(s.UnmutedScheduledEvents = 'unmuted scheduled events'),
	(s.OverrideCreated = 'channel override created'),
	(s.OverrideDeleted = 'channel override deleted');
let p = {
		forumThreadsCreated: (e) => (e ? 'enabled forum thread created notifs' : 'disabled forum thread created notifs'),
		suppressEveryone: (e) => (e ? 'enabled suppress everyone' : 'disabled suppress everyone'),
		suppressRoles: (e) => (e ? 'enabled suppress roles' : 'disabled suppress roles'),
		highlights: (e) => (e ? 'enabled highlights' : 'disabled highlights'),
		mobilePush: (e) => (e ? 'enabled mobile push notifications' : 'disabled mobile push notifications'),
		optedIn: (e) => (e ? 'opted in to entity' : 'opted out from entity'),
		favorited: (e) => (e ? 'favorited' : 'unfavorited'),
		muted: (e) => (e ? 'muted' : 'unmuted'),
		mutedEvents: (e) => (e ? 'muted scheduled events' : 'unmuted scheduled events'),
		unreads: (e) =>
			e === f.i.ALL_MESSAGES
				? 'unreads set to all messages'
				: e === f.i.ONLY_MENTIONS
					? 'unreads set to mentions'
					: 'unreads set to the default',
		notifications: (e) =>
			e === E.bL.ALL_MESSAGES
				? 'notifications set to all messages'
				: e === E.bL.ONLY_MENTIONS
					? 'notifications set to mentions'
					: e === E.bL.NO_MESSAGES
						? 'notifications set to nothing'
						: 'notifications set to the default'
	},
	I = Object.freeze({
		[E.bL.ALL_MESSAGES]: 'All',
		[E.bL.ONLY_MENTIONS]: 'Mentions',
		[E.bL.NO_MESSAGES]: 'Nothing',
		[E.bL.NULL]: null
	});
function m(e, t, n, r, i) {
	var a, s;
	let u = function (e) {
			var t, n, r, i, a, s, o;
			let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				u =
					null != l.mute_config && null != l.mute_config.end_time
						? new Date(l.mute_config.end_time).getTime()
						: e.guild_muted_until,
				c = null != l.message_notifications ? I[l.message_notifications] : e.guild_message_notification_settings;
			return {
				guild_muted_until: u,
				guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
				guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
				guild_message_notification_settings: c,
				guild_suppress_roles: null !== (r = l.suppress_roles) && void 0 !== r ? r : e.guild_suppress_roles,
				guild_receive_mobile_push: null !== (i = l.mobile_push) && void 0 !== i ? i : e.guild_receive_mobile_push,
				guild_notify_highlights: null !== (a = l.notify_highlights) && void 0 !== a ? a : e.guild_notify_highlights,
				guild_suppress_everyone: null !== (s = l.suppress_everyone) && void 0 !== s ? s : e.guild_suppress_everyone,
				guild_scheduled_events_muted:
					null !== (o = l.mute_scheduled_events) && void 0 !== o ? o : e.guild_scheduled_events_muted
			};
		},
		c = u(n),
		d = u(A(e), t),
		f = T(c, d, 'RETURN_PREVIOUS_WHEN_CHANGED'),
		p = null !== (a = f('guild_flags')) && void 0 !== a ? a : 0,
		m = (null !== (s = d.guild_flags) && void 0 !== s ? s : 0) ^ p,
		g = 0 === (0, _.M1)(m, h.vc.OPT_IN_CHANNELS_OFF, h.vc.OPT_IN_CHANNELS_ON);
	o.ZP.trackWithMetadata(E.rMx.NOTIFICATION_SETTINGS_UPDATED, {
		...d,
		...l.Z.getStats(e),
		location: i,
		guild_id: e,
		update_type: 'guild',
		label: r,
		guild_flags_old: f('guild_flags'),
		guild_is_muted_old: f('guild_is_muted'),
		guild_suppress_roles_old: f('guild_suppress_roles'),
		guild_notify_highlights_old: f('guild_notify_highlights'),
		guild_suppress_everyone_old: f('guild_suppress_everyone'),
		guild_receive_mobile_push_old: f('guild_receive_mobile_push'),
		guild_scheduled_events_muted_old: f('guild_scheduled_events_muted'),
		guild_message_notification_settings_old: f('guild_message_notification_settings'),
		is_opt_in_only_change: g
	});
}
function T(e, t, n) {
	return (r) => {
		if ('RETURN_PREVIOUS_WHEN_CHANGED' === n) return e[r] !== t[r] ? e[r] : void 0;
	};
}
function g(e) {
	return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function S(e, t, n, r, i, a) {
	var s, d, f, p;
	let m = function (t) {
			var n, r;
			let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				a = null !== (n = i.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
				s =
					null != i.message_notifications
						? I[i.message_notifications]
						: null == t
							? void 0
							: t.channel_message_notification_settings,
				o = null == e ? null : !0 === a || null != s;
			return {
				channel_is_muted: a,
				channel_is_overridden: o,
				channel_flags: null !== (r = i.flags) && void 0 !== r ? r : null == t ? void 0 : t.channel_flags,
				channel_message_notification_settings: s,
				channel_muted_until: g(i.mute_config)
			};
		},
		S = m(r),
		A = m(v(e, t), n),
		N = T(S, A, 'RETURN_PREVIOUS_WHEN_CHANGED'),
		O = u.Z.getChannel(t),
		R = null !== (d = N('channel_flags')) && void 0 !== d ? d : 0,
		C = (null !== (f = A.channel_flags) && void 0 !== f ? f : 0) ^ R,
		y = 0 === (0, _.M1)(C, h.ic.FAVORITED, h.ic.OPT_IN_ENABLED),
		D =
			null !== (p = null === (s = c.Z.getLastMessage(t)) || void 0 === s ? void 0 : s.type) && void 0 !== p ? p : null;
	o.ZP.trackWithMetadata(E.rMx.NOTIFICATION_SETTINGS_UPDATED, {
		...A,
		...l.Z.getStats(e),
		location: a,
		guild_id: e,
		channel_id: t,
		update_type: 'channel',
		label: i,
		parent_id: null != O ? O.parent_id : null,
		channel_flags_old: N('channel_flags'),
		channel_is_muted_old: N('channel_is_muted'),
		channel_muted_until_old: N('channel_muted_until'),
		channel_is_overridden_old: N('channel_is_overridden'),
		channel_message_notification_settings_old: N('channel_message_notification_settings'),
		is_opt_in_only_change: y,
		last_message_type: D
	});
}
function A(e) {
	let t = d.ZP.isMuted(e),
		n = d.ZP.getMuteConfig(e);
	return {
		guild_suppress_everyone: d.ZP.isSuppressEveryoneEnabled(e),
		guild_suppress_roles: d.ZP.isSuppressRolesEnabled(e),
		guild_scheduled_events_muted: d.ZP.isMuteScheduledEventsEnabled(e),
		guild_is_muted: t,
		guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
		guild_receive_mobile_push: d.ZP.isMobilePushEnabled(e),
		guild_message_notification_settings: I[d.ZP.getMessageNotifications(e)],
		guild_notify_highlights: d.ZP.getNotifyHighlights(e),
		guild_flags: d.ZP.getGuildFlags(e)
	};
}
function N(e) {
	let t = new Map();
	return e.forEach((e) => t.set(e, A(e))), t;
}
function v(e, t) {
	let n = d.ZP.isChannelMuted(e, t),
		r = d.ZP.getChannelMuteConfig(e, t);
	return {
		channel_is_muted: n,
		channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
		channel_message_notification_settings: I[d.ZP.getChannelMessageNotifications(e, t)],
		channel_flags: d.ZP.getChannelIdFlags(e, t)
	};
}
function O(e, t) {
	let n = new Map();
	return t.forEach((t) => n.set(t, v(e, t))), n;
}
