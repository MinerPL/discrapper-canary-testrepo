t.d(n, {
	ER: function () {
		return o;
	},
	kk: function () {
		return h;
	},
	s$: function () {
		return _;
	}
}),
	t(724458),
	t(47120),
	t(392711);
var l = t(19780),
	s = t(5192),
	i = t(700785),
	a = t(427679),
	r = t(157925),
	d = t(981631),
	u = t(71080),
	c = t(689938);
function o(e, n, t, l) {
	let i = n[0],
		a = s.ZP.getName(e, t, i),
		r = null != l ? l : n.length;
	return 1 === r && null != i
		? a
		: null == i
			? c.Z.Messages.SPEAKING_COUNT.format({ count: r })
			: c.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
					name: a,
					count: r - 1
				});
}
function h(e, n) {
	switch (e) {
		case u.aC.OWNER:
			return c.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
		case u.aC.ADMINISTRATOR:
			return c.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
		case u.aC.MEMBER:
		case u.aC.ROLE:
			return n ? c.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : c.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
		case u.aC.EMPTY_STATE:
	}
	return null;
}
function _(e) {
	let n = a.Z.getStageInstanceByChannel(e.id);
	return {
		channel_id: e.id,
		guild_id: e.guild_id,
		topic: null == n ? void 0 : n.topic,
		media_session_id: l.Z.getMediaSessionId(),
		request_to_speak_state: i.Uu(d.Plq.REQUEST_TO_SPEAK, e) ? r.BM.EVERYONE : r.BM.NO_ONE,
		stage_instance_id: null == n ? void 0 : n.id
	};
}
