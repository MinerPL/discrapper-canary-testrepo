n.d(t, {
	Z: function () {
		return P;
	},
	f: function () {
		return M;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(913527),
	l = n.n(o),
	u = n(481060),
	c = n(100527),
	d = n(906732),
	_ = n(978003),
	E = n(39154),
	f = n(245216),
	h = n(79390),
	p = n(869765),
	I = n(403132),
	m = n(378233),
	T = n(768581),
	g = n(55935),
	S = n(823379),
	A = n(453687),
	N = n(930282),
	v = n(123145),
	O = n(223021),
	R = n(217702),
	C = n(981631),
	y = n(689938),
	D = n(438379);
function L(e) {
	let { width: t = 12, height: n = 8, color: i = 'currentColor', className: a, foreground: s } = e;
	return (0, r.jsx)('svg', {
		className: a,
		width: t,
		height: n,
		viewBox: '0 0 12 8',
		children: (0, r.jsx)('path', {
			d: 'M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z',
			className: s,
			fill: i
		})
	});
}
function b(e) {
	let { width: t = 18, height: n = 18, className: i, foreground: a } = e;
	return (0, r.jsx)('svg', {
		className: i,
		width: t,
		height: n,
		viewBox: '0 0 18 18',
		children: (0, r.jsx)('path', {
			fill: '#3ba55c',
			d: 'M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0',
			className: a
		})
	});
}
function M(e, t, n, i, a) {
	let s, o, l, c;
	let d = (0, E.Z)(e),
		{ trailingIconClass: p, leadingIconClass: I, iconSize: T } = a,
		g = null == t || '' === t || (Array.isArray(t) && 0 === t.length),
		S = (0, m.cv)(d).length > 0,
		A = null != d.interaction,
		v = d.hasFlag(C.iLy.IS_VOICE_MESSAGE),
		O = d.isPoll(),
		R = d.type === C.uaV.POLL_RESULT;
	if (
		((0, _.Z)(e) &&
			(c = (0, r.jsx)(f.Z, {
				size: 'custom',
				className: I,
				width: T,
				height: T
			})),
		n)
	)
		s = y.Z.Messages.REPLY_QUOTE_MESSAGE_BLOCKED;
	else if (d.type === C.uaV.CHANNEL_PINNED_MESSAGE) s = y.Z.Messages.MESSAGE_PINNED;
	else if (g) {
		if (O) {
			var D, L;
			o =
				null == d
					? void 0
					: null === (L = d.poll) || void 0 === L
						? void 0
						: null === (D = L.question) || void 0 === D
							? void 0
							: D.text;
		} else
			R
				? (s = (0, h.N4)(d))
				: S
					? (s = y.Z.Messages.REPLY_QUOTE_STICKER)
					: A
						? (s = y.Z.Messages.REPLY_QUOTE_COMMAND)
						: v
							? (s = y.Z.Messages.REPLY_QUOTE_VOICE_MESSAGE)
							: ((s = y.Z.Messages.REPLY_QUOTE_NO_TEXT_CONTENT),
								(l = (0, r.jsx)(u.ImageIcon, {
									size: 'custom',
									color: 'currentColor',
									className: p,
									width: T,
									height: T
								})));
	} else
		o = (0, r.jsx)(N.ZP, {
			message: d,
			content: t,
			className: i
		});
	return (
		S
			? (l = (0, r.jsx)(u.StickerSmallIcon, {
					size: 'custom',
					color: 'currentColor',
					className: p,
					width: T,
					height: T
				}))
			: A
				? (l = (0, r.jsx)(u.SlashBoxIcon, {
						size: 'custom',
						color: 'currentColor',
						className: p,
						width: T,
						height: T
					}))
				: v
					? (l = (0, r.jsx)(u.MicrophoneIcon, {
							size: 'custom',
							color: 'currentColor',
							className: p,
							width: (19 / 24) * T,
							height: T
						}))
					: (d.attachments.length > 0 || d.embeds.length > 0) &&
						!R &&
						(l = (0, r.jsx)(u.ImageIcon, {
							size: 'custom',
							color: 'currentColor',
							className: p,
							width: T,
							height: T
						})),
		{
			contentPlaceholder: s,
			renderedContent: o,
			trailingIcon: l,
			leadingIcon: c
		}
	);
}
function P(e) {
	let t;
	let { repliedAuthor: n, baseAuthor: a, baseMessage: o, referencedMessage: _, renderPopout: E } = e,
		f = i.useMemo(() => (null != E && _.state === p.Y.LOADED ? (e) => E(e, _.message) : void 0), [_, E]),
		h = (function (e, t) {
			let {
					referencedMessage: n,
					channel: i,
					compact: a,
					isReplyAuthorBlocked: o,
					repliedAuthor: l,
					showAvatarPopout: _,
					onClickAvatar: E,
					onContextMenu: f,
					onPopoutRequestClose: h
				} = e,
				{ analyticsLocations: I } = (0, d.ZP)(c.Z.AVATAR);
			if (a || n.state !== p.Y.LOADED || o)
				return (0, r.jsx)('div', {
					className: D.replyBadge,
					children: (0, r.jsx)(L, { className: D.replyIcon })
				});
			if (
				n.message.type === C.uaV.USER_JOIN ||
				n.message.type === C.uaV.ROLE_SUBSCRIPTION_PURCHASE ||
				n.message.type === C.uaV.GUILD_DEADCHAT_REVIVE_PROMPT ||
				n.message.type === C.uaV.GUILD_GAMING_STATS_PROMPT
			)
				return (0, r.jsx)(b, { className: D.userJoinSystemMessageIcon });
			if (n.message.type === C.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION)
				return (0, r.jsx)(u.TicketIcon, {
					size: 'md',
					color: 'currentColor',
					className: D.ticketIcon
				});
			if (n.message.type === C.uaV.POLL_RESULT)
				return (0, r.jsx)(u.PollsIcon, {
					className: D.repliedTextContentLeadingIcon,
					width: R.WW,
					height: R.WW,
					size: 'custom'
				});
			let m = () => {
				var e, t, a, o, u;
				return (
					(e = n.message.author),
					(t = l),
					(a = i.guild_id),
					(o = E),
					(u = f),
					(0, r.jsx)('img', {
						alt: '',
						src:
							(null == t ? void 0 : t.guildMemberAvatar) != null && null != a
								? (0, T.JM)({
										guildId: a,
										userId: e.id,
										avatar: t.guildMemberAvatar
									})
								: e.getAvatarURL(a, 16),
						onClick: o,
						onContextMenu: u,
						className: s()({
							[D.replyAvatar]: !0,
							[D.clickable]: null != o
						})
					})
				);
			};
			return null != t && null != _
				? (0, r.jsx)(d.Gt, {
						value: I,
						children: (0, r.jsx)(u.Popout, {
							renderPopout: t,
							shouldShow: _,
							position: 'right',
							onRequestClose: h,
							children: m
						})
					})
				: (0, r.jsx)(d.Gt, {
						value: I,
						children: m()
					});
		})(e, f),
		m = (function (e, t) {
			let {
					baseMessage: n,
					channel: i,
					referencedMessage: a,
					showUsernamePopout: s,
					onClickUsername: o,
					onContextMenu: l,
					onPopoutRequestClose: u
				} = e,
				c = (null == a ? void 0 : a.state) === p.Y.LOADED ? a.message : void 0;
			return null == c ||
				c.type === C.uaV.USER_JOIN ||
				c.type === C.uaV.ROLE_SUBSCRIPTION_PURCHASE ||
				c.type === C.uaV.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION ||
				c.type === C.uaV.GUILD_DEADCHAT_REVIVE_PROMPT ||
				c.type === C.uaV.GUILD_GAMING_STATS_PROMPT ||
				c.type === C.uaV.POLL_RESULT
				? null
				: (0, r.jsx)(v.Z, {
						message: c,
						channel: i,
						compact: !0,
						withMentionPrefix: (0, I.Z)(n, c),
						showPopout: s,
						renderPopout: t,
						onClick: o,
						onContextMenu: l,
						onPopoutRequestClose: u,
						isRepliedMessage: !0
					});
		})(e, f),
		N = (function (e) {
			let { content: t, referencedMessage: n, isReplyAuthorBlocked: i } = e,
				a = n.state !== p.Y.DELETED ? e.onClickReply : void 0;
			switch (n.state) {
				case p.Y.LOADED: {
					let {
						contentPlaceholder: e,
						renderedContent: o,
						trailingIcon: l,
						leadingIcon: c
					} = M(n.message, t, i, D.repliedTextContent, {
						trailingIconClass: D.repliedTextContentTrailingIcon,
						leadingIconClass: D.repliedTextContentLeadingIcon,
						iconSize: R.WW
					});
					return (0, r.jsxs)(r.Fragment, {
						children: [
							c,
							(0, r.jsx)(u.Clickable, {
								className: s()(D.repliedTextPreview, D.clickable),
								onClick: a,
								children: (0, r.jsx)(u.BlockInteractions, {
									children:
										null != o
											? o
											: (0, r.jsx)('span', {
													className: D.repliedTextPlaceholder,
													children: e
												})
								})
							}),
							l
						]
					});
				}
				case p.Y.NOT_LOADED:
					return (0, r.jsx)(u.Clickable, {
						className: s()(D.repliedTextPreview, D.clickable),
						onClick: a,
						children: (0, r.jsx)('span', {
							className: D.repliedTextPlaceholder,
							children: y.Z.Messages.REPLY_QUOTE_MESSAGE_NOT_LOADED
						})
					});
				case p.Y.DELETED:
					return (0, r.jsx)('div', {
						className: D.repliedTextPreview,
						children: (0, r.jsx)('span', {
							className: D.repliedTextPlaceholder,
							children: y.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED
						})
					});
				default:
					(0, S.vE)(n);
			}
		})(e),
		P = i.useMemo(() => (e.compact ? (0, O.Z)((0, g.vc)(l()(), 'LT')) : null), [e.compact]);
	return (
		null != n &&
			null != a &&
			(t = y.Z.Messages.CHANNEL_MESSAGE_REPLY_A11Y_LABEL.format({
				author: null == a ? void 0 : a.nick,
				repliedAuthor: null == n ? void 0 : n.nick
			})),
		(0, r.jsxs)('div', {
			id: (0, A.Gq)(o),
			className: s()(D.repliedMessage, P),
			'aria-label': t,
			children: [h, m, N]
		})
	);
}
