n.d(t, {
	FI: function () {
		return P;
	},
	LL: function () {
		return U;
	},
	N_: function () {
		return G;
	},
	Xi: function () {
		return w;
	},
	eF: function () {
		return y;
	}
}),
	n(789020),
	n(411104);
var i = n(933557),
	l = n(710845),
	u = n(978003),
	a = n(41776),
	s = n(355298),
	o = n(957730),
	r = n(572804),
	d = n(901461);
n(734934);
var _ = n(569471),
	E = n(723170),
	c = n(695346),
	T = n(131704),
	I = n(433355),
	f = n(592125),
	g = n(430824),
	N = n(19780),
	S = n(699516),
	C = n(944486),
	A = n(914010),
	Z = n(885110),
	O = n(9156),
	h = n(594174),
	D = n(630388),
	v = n(5192),
	M = n(352736),
	p = n(51144),
	R = n(981631),
	m = n(124368),
	L = n(689938);
function U(e, t, n) {
	let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
	if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
	let l = n.getGuildId();
	return (
		!(
			(null != l && a.Z.isLurking(l)) ||
			(!i.ignoreSameUser && t.id === e.id) ||
			S.Z.isBlocked(t.id) ||
			(!i.ignoreStatus && Z.Z.getStatus() === R.Skl.DND) ||
			c.QZ.getSetting() ||
			(!i.ignoreNoMessagesSetting && O.ZP.allowNoMessages(n))
		) && !0
	);
}
function y(e, t) {
	var n;
	let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
		l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
	if (null != e.flags && (0, D.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
	let u = f.Z.getChannel(t);
	e.type === R.uaV.THREAD_STARTER_MESSAGE && (u = f.Z.getChannel(null == u ? void 0 : u.parent_id));
	let a = h.default.getCurrentUser(),
		o = h.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
	if (
		null == u ||
		null == a ||
		null == o ||
		(u.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
		!U(a, o, u, {
			ignoreStatus: l,
			ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
		}) ||
		s.Z.isMessageRequest(t)
	)
		return !1;
	if (!i) {
		let e = C.Z.getChannelId(A.Z.getGuildId());
		if (e === u.id || I.ZP.getCurrentSidebarChannelId(e) === u.id) return !1;
	}
	if (
		S.Z.isBlockedForMessage(e) ||
		(void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === a.id)
	)
		return !1;
	if (T.Ec.has(u.type)) {
		if (_.Z.isMuted(u.id)) return !1;
		let t = (0, E.J)(u);
		return (
			t !== m.iN.NO_MESSAGES &&
			(t === m.iN.ALL_MESSAGES ||
				(0, r.Hl)({
					rawMessage: e,
					userId: a.id,
					suppressEveryone: !1,
					suppressRoles: !1
				}))
		);
	}
	{
		let t = !T.tx.has(u.type) || N.Z.getChannelId() === u.id;
		if (O.ZP.allowAllMessages(u) && t) return !0;
		let n = O.ZP.isSuppressEveryoneEnabled(u.getGuildId()),
			i = O.ZP.isSuppressRolesEnabled(u.getGuildId());
		return (0, r.Hl)({
			rawMessage: e,
			userId: a.id,
			suppressEveryone: n,
			suppressRoles: i
		});
	}
}
function G(e, t) {
	var n;
	if (C.Z.getChannelId(A.Z.getGuildId()) !== t) return !1;
	let i = f.Z.getChannel(t);
	e.type === R.uaV.THREAD_STARTER_MESSAGE && (i = f.Z.getChannel(null == i ? void 0 : i.parent_id));
	let l = h.default.getCurrentUser(),
		u = h.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
	return (
		!(
			null == i ||
			null == l ||
			null == u ||
			i.isManaged() ||
			u.hasFlag(R.xW$.SPAMMER) ||
			S.Z.isBlockedForMessage(e) ||
			u.id === l.id ||
			Z.Z.getStatus() === R.Skl.DND ||
			c.QZ.getSetting() ||
			O.ZP.allowNoMessages(i)
		) && !0
	);
}
function P(e, t) {
	let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
		i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		l = h.default.getCurrentUser(),
		u = h.default.getUser(e.ownerId);
	return (
		!(
			null == t ||
			null == l ||
			null == u ||
			!U(l, u, t, {
				ignoreStatus: i,
				ignoreNoMessagesSetting: !0
			}) ||
			O.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
		) &&
		(!!n || C.Z.getChannelId(A.Z.getGuildId()) !== t.id) &&
		O.ZP.getNewForumThreadsCreated(t)
	);
}
let F = (e, t, n) =>
	''
		.concat(e, ' (')
		.concat((0, i.F6)(t, h.default, S.Z, !0))
		.concat(null != n ? ', '.concat((0, i.F6)(n, h.default, S.Z)) : '', ')');
function V(e, t, n, i) {
	switch (e.type) {
		case R.d4z.GUILD_ANNOUNCEMENT:
		case R.d4z.GUILD_TEXT:
			return t;
		case R.d4z.GROUP_DM:
			return n;
		case R.d4z.DM:
		default:
			return i;
	}
}
function w(e, t, n) {
	var a, s, r, _, E;
	let c;
	let T = v.ZP.getName(e.getGuildId(), e.id, n),
		I = T;
	switch (e.type) {
		case R.d4z.GUILD_ANNOUNCEMENT:
		case R.d4z.GUILD_TEXT:
		case R.d4z.GUILD_VOICE:
		case R.d4z.ANNOUNCEMENT_THREAD:
		case R.d4z.PUBLIC_THREAD:
		case R.d4z.PRIVATE_THREAD:
			let N = f.Z.getChannel(e.parent_id);
			t.type === R.uaV.THREAD_STARTER_MESSAGE && null != N
				? (I = F(I, N, f.Z.getChannel(N.parent_id)))
				: (0, d.Z)(t)
					? null != g.Z.getGuild(e.getGuildId()) && (I = F(I, e, N))
					: (I = F(I, e, N));
			break;
		case R.d4z.GROUP_DM:
			!(e.isManaged() && n.bot && I === (0, i.F6)(e, h.default, S.Z)) &&
				(I = ''.concat(I, ' (').concat((0, i.F6)(e, h.default, S.Z, !0), ')'));
	}
	let C = t.content;
	if ((0, d.Z)(t) && null == (C = M.Z.stringify(t, e)))
		throw (
			(new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t),
			Error('failed to stringify system message'))
		);
	let A = null !== (a = t.sticker_items) && void 0 !== a ? a : t.stickers;
	if ((0, u.s)(t)) c = L.Z.Messages.MESSAGE_FORWARDED_NOTIFICATION_BODY;
	else if (null != t.activity && null != t.application)
		c =
			t.activity.type === R.mFx.JOIN
				? V(
						e,
						L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_JOIN,
						L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_JOIN,
						L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN
					).format({
						user: T,
						game: t.application.name
					})
				: t.activity.type === R.mFx.JOIN_REQUEST
					? V(
							e,
							L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
							L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST,
							L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_JOIN_REQUEST
						).format({
							user: T,
							game: t.application.name
						})
					: '';
	else if (null != t.activity && t.activity.type === R.mFx.LISTEN)
		c = V(
			e,
			L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GUILD_ACTIVITY_LISTEN,
			L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_GROUP_DM_ACTIVITY_LISTEN,
			L.Z.Messages.NOTIFICATION_MESSAGE_CREATE_DM_ACTIVITY_LISTEN
		).format({ user: T });
	else if (null != A && A.length > 0) c = L.Z.Messages.STICKER_NOTIFICATION_BODY.format({ stickerName: A[0].name });
	else if (t.type === R.uaV.PREMIUM_REFERRAL)
		c = L.Z.Messages.SHARE_NITRO_EMBEDDED_MESSAGE_BODY_SHORT.format({ username: p.ZP.getName(n) });
	else if (null != t.poll) c = L.Z.Messages.POLL_SENT_NOTIFICATION.format({ question: t.poll.question.text });
	else if (t.type === R.uaV.POLL_RESULT) {
		let e =
				null === (_ = t.embeds) || void 0 === _
					? void 0
					: null === (r = _[0]) || void 0 === r
						? void 0
						: null === (s = r.fields) || void 0 === s
							? void 0
							: s.find((e) => 'poll_question_text' === e.name),
			n = null !== (E = null == e ? void 0 : e.value) && void 0 !== E ? E : '';
		c = L.Z.Messages.POLL_RESULTS_NOTIFICATION.format({ question: n });
	} else c = o.ZP.unparse(C, e.id, !0);
	return (
		0 === c.length &&
			(c = (function (e) {
				var t;
				if (void 0 !== e.embeds && e.embeds.length > 0) {
					let t = e.embeds[0];
					if (null != t.description)
						return null != t.title ? ''.concat(t.title, ' ').concat(t.description) : t.description;
					if (null != t.title) return t.title;
					if (null != t.fields) {
						let e = t.fields[0];
						return ''.concat(e.name, ' ').concat(e.value);
					}
				}
				if ((0, D.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, R.iLy.IS_VOICE_MESSAGE))
					return L.Z.Messages.VOICE_MESSAGES_SENT_NOTIFICATION;
				if (void 0 !== e.attachments && e.attachments.length > 0) {
					let t = e.attachments[0].filename;
					return L.Z.Messages.NOTIFICATION_BODY_ATTACHMENT.format({ filename: t });
				}
				return '';
			})(t)),
		{
			icon: n.getAvatarURL(e.guild_id, 128),
			title: I,
			body: c
		}
	);
}
