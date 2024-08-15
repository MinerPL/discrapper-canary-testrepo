n.d(t, {
	Z: function () {
		return L;
	}
});
var i = n(735250);
n(470079);
var l = n(442837),
	r = n(692547),
	a = n(481060),
	s = n(619915),
	o = n(456269),
	c = n(921711),
	u = n(71275),
	d = n(601070),
	h = n(430824),
	p = n(496675),
	_ = n(306680),
	f = n(979651),
	g = n(968358),
	m = n(790901),
	C = n(714794),
	I = n(355363),
	E = n(687352),
	N = n(135724),
	x = n(25601),
	S = n(981631),
	v = n(490897),
	Z = n(689938),
	T = n(704842);
function L(e) {
	var t;
	let {
			channel: n,
			isChannelSelected: L,
			isChannelCollapsed: A,
			voiceStates: b,
			enableConnectedUserLimit: M,
			enableActivities: R,
			isSubscriptionGated: O,
			needSubscriptionToAccess: P,
			isNewChannel: y,
			muted: j,
			resolvedUnreadSetting: D
		} = e,
		w = (0, l.e7)([_.ZP], () => _.ZP.getMentionCount(n.id)),
		U = (0, s.ZP)(n),
		G = (0, l.e7)([p.Z], () => !p.Z.can(S.Plq.CONNECT, n)),
		k = (0, l.e7)([f.Z], () => f.Z.hasVideo(n.id)),
		B = (0, u.PK)(n.id) && n.isGuildStageVoice(),
		H = (0, I.ZP)({
			channel: n,
			locked: G,
			video: k || B,
			selected: L
		}),
		V = (0, l.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)),
		F = (0, o.n2)(n.guild_id, n.id),
		W = (0, l.e7)([h.Z], () => {
			var e, t;
			return (
				null !==
					(t = null === (e = h.Z.getGuild(n.guild_id)) || void 0 === e ? void 0 : e.hasFeature(S.oNc.COMMUNITY)) &&
				void 0 !== t &&
				t
			);
		});
	if ((0, C.Z)(w)) return (0, i.jsx)(x.Z, { mentionsCount: w });
	if ((0, c.O)(O)) return (0, i.jsx)(c.Z, { locked: P });
	if (y)
		return (0, i.jsx)(a.TextBadge, {
			text: Z.Z.Messages.NEW,
			color: r.Z.unsafe_rawColors.BRAND_260.css,
			className: T.newChannel
		});
	if (!j && D === v.i.ALL_MESSAGES && n.isForumLikeChannel() && null != V && V > 0)
		return (0, i.jsx)(a.Text, {
			variant: 'text-xs/semibold',
			color: 'text-brand',
			children: Z.Z.Messages.CHANNEL_NEW_POSTS_LABEL.format({ count: (0, a.getBadgeCountString)(V) })
		});
	if (!j && n.isForumLikeChannel() && null != F && F > 0)
		return (0, i.jsx)(a.Text, {
			variant: 'text-xs/semibold',
			color: 'text-muted',
			children: (0, a.getBadgeCountString)(F)
		});
	let z = null !== (t = null == b ? void 0 : b.length) && void 0 !== t ? t : 0;
	return null != M && M && H
		? (0, i.jsx)(N.Z, {
				userCount: z,
				video: k || B,
				channel: n
			})
		: A && (0, g.a)(b) && W
			? (0, i.jsx)(a.TextBadge, {
					text: Z.Z.Messages.LIVE,
					color: r.Z.unsafe_rawColors.RED_400.css
				})
			: null != R && R && (0, m.u)(U)
				? (0, i.jsx)(E.Z, {
						embeddedApps: U,
						muted: j
					})
				: null;
}
