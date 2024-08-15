n.d(t, {
	S1: function () {
		return d;
	},
	pW: function () {
		return N;
	},
	wk: function () {
		return E;
	},
	xv: function () {
		return c;
	},
	zc: function () {
		return _;
	},
	zz: function () {
		return T;
	}
}),
	n(789020);
var l = n(544891),
	i = n(570140),
	r = n(408987);
n(57132), n(777639);
var a = n(346479);
n(388610);
var u = n(592125),
	o = n(37234),
	s = n(981631);
function d(e, t, n) {
	i.Z.dispatch({
		type: 'CHANNEL_SETTINGS_INIT',
		channelId: e,
		location: t,
		subsection: n
	});
}
function c() {
	i.Z.dispatch({ type: 'CHANNEL_SETTINGS_CLOSE' });
}
function _(e) {
	i.Z.dispatch({
		type: 'CHANNEL_SETTINGS_SET_SECTION',
		section: e
	});
}
function N(e) {
	let {
		name: t,
		type: n,
		topic: l,
		bitrate: r,
		userLimit: a,
		nsfw: u,
		flags: o,
		rateLimitPerUser: s,
		defaultThreadRateLimitPerUser: d,
		defaultAutoArchiveDuration: c,
		template: _,
		defaultReactionEmoji: N,
		rtcRegion: E,
		videoQualityMode: T,
		autoArchiveDuration: S,
		locked: C,
		invitable: h,
		availableTags: f,
		defaultSortOrder: I,
		defaultForumLayout: A,
		iconEmoji: m,
		themeColor: p
	} = e;
	i.Z.dispatch({
		type: 'CHANNEL_SETTINGS_UPDATE',
		name: t,
		channelType: n,
		topic: l,
		bitrate: r,
		userLimit: a,
		nsfw: u,
		flags: o,
		rateLimitPerUser: s,
		defaultThreadRateLimitPerUser: d,
		defaultAutoArchiveDuration: c,
		template: _,
		defaultReactionEmoji: N,
		rtcRegion: E,
		videoQualityMode: T,
		autoArchiveDuration: S,
		locked: C,
		invitable: h,
		availableTags: f,
		defaultSortOrder: I,
		defaultForumLayout: A,
		iconEmoji: m,
		themeColor: p
	});
}
async function E(e, t) {
	let {
			name: n,
			type: o,
			position: d,
			topic: c,
			bitrate: _,
			userLimit: N,
			nsfw: E,
			flags: T,
			permissionOverwrites: S,
			rateLimitPerUser: C,
			defaultThreadRateLimitPerUser: h,
			defaultAutoArchiveDuration: f,
			template: I,
			defaultReactionEmoji: A,
			rtcRegion: m,
			videoQualityMode: p,
			autoArchiveDuration: L,
			locked: v,
			invitable: Z,
			availableTags: g,
			defaultSortOrder: M,
			defaultForumLayout: y,
			iconEmoji: O,
			themeColor: G
		} = t,
		H = u.Z.getChannel(e);
	return (
		i.Z.dispatch({ type: 'CHANNEL_SETTINGS_SUBMIT' }),
		await a.Z.unarchiveThreadIfNecessary(e),
		l.tn
			.patch({
				url: s.ANM.CHANNEL(e),
				body: {
					name: n,
					type: o,
					position: d,
					topic: c,
					bitrate: _,
					user_limit: N,
					nsfw: E,
					flags: T,
					permission_overwrites: S,
					rate_limit_per_user: C,
					default_thread_rate_limit_per_user: h,
					default_auto_archive_duration: f,
					template: I,
					rtc_region: m,
					video_quality_mode: p,
					auto_archive_duration: L,
					locked: v,
					invitable: Z,
					default_reaction_emoji:
						null != A
							? {
									emoji_id: null == A ? void 0 : A.emojiId,
									emoji_name: null == A ? void 0 : A.emojiName
								}
							: null === A
								? null
								: void 0,
					available_tags:
						null == g
							? void 0
							: g.map((e) => ({
									id: e.id,
									name: e.name,
									emoji_id: e.emojiId,
									emoji_name: e.emojiName,
									moderated: e.moderated
								})),
					default_sort_order: M,
					default_forum_layout: y,
					icon_emoji:
						null != O
							? {
									id: O.id,
									name: O.name
								}
							: null === O
								? null
								: void 0,
					theme_color: G
				},
				oldFormErrors: !0
			})
			.then(
				(t) => {
					i.Z.dispatch({
						type: 'CHANNEL_SETTINGS_SUBMIT_SUCCESS',
						channelId: e
					});
					let n = null == H ? void 0 : H.getGuildId();
					return null != n && !(null == H ? void 0 : H.isThread()) && r.Z.checkGuildTemplateDirty(n), t;
				},
				(e) => (
					i.Z.dispatch({
						type: 'CHANNEL_SETTINGS_SUBMIT_FAILURE',
						errors: e.body
					}),
					e
				)
			)
	);
}
function T(e) {
	let t = u.Z.getChannel(e);
	l.tn
		.del({
			url: s.ANM.CHANNEL(e),
			oldFormErrors: !0
		})
		.then(() => {
			let e = null == t ? void 0 : t.getGuildId();
			null != e && !(null == t ? void 0 : t.isThread()) && r.Z.checkGuildTemplateDirty(e), c();
		});
}
t.ZP = {
	init: d,
	open: function (e, t, n) {
		d(e, t, n), (0, o.jN)(s.S9g.CHANNEL_SETTINGS);
	},
	close: c,
	setSection: _,
	selectPermissionOverwrite: function (e) {
		i.Z.dispatch({
			type: 'CHANNEL_SETTINGS_OVERWRITE_SELECT',
			overwriteId: e
		});
	},
	updateChannel: N,
	saveChannel: E,
	deleteChannel: T,
	updateVoiceChannelStatus: function (e, t) {
		return l.tn.put({
			url: s.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
			body: { status: t }
		});
	}
};
