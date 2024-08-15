n.d(t, {
	Z: function () {
		return O;
	},
	_: function () {
		return N;
	}
}),
	n(47120);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(442837),
	o = n(481060),
	l = n(607070),
	u = n(951394),
	c = n(907040),
	d = n(314897),
	_ = n(699516),
	E = n(823379),
	f = n(51144),
	h = n(785717),
	p = n(505737),
	I = n(790286),
	m = n(485216),
	T = n(228168),
	g = n(185923),
	S = n(689938),
	A = n(951768);
let N = 600,
	v = (e) => {
		let { emoji: t, username: n, sourceType: r, sourceDetails: i } = e,
			a = ':'.concat(t.name, ':');
		switch (r) {
			case T.n_.ACTIVITY:
				let s = S.Z.Messages.USER_PROFILE_REACTED_TO_ACTIVITY.format({ username: n });
				return '> -# *'.concat(s, '*\n').concat(a);
			case T.n_.AVATAR:
				let o = S.Z.Messages.USER_PROFILE_REACTED_TO_AVATAR.format({ username: n });
				return '> -# *'.concat(o, '*\n').concat(a);
			case T.n_.STATUS:
				let l = S.Z.Messages.USER_PROFILE_REACTED_TO_STATUS.format({ username: n });
				return null != i
					? '> -# *'.concat(l, '*').concat('\n > '.concat(i), '\n').concat(a)
					: '> -# *'.concat(l, '*\n').concat(a);
			default:
				(0, E.vE)(r);
		}
	};
function O(e) {
	let {
			user: t,
			channel: n,
			sourceType: i,
			sourceDetails: E,
			isVisible: O,
			isExpandable: R,
			onInteraction: C,
			setInteractionToastShown: y,
			setInteractionSent: D,
			setIsReplyInteraction: L
		} = e,
		{ trackUserProfileAction: b } = (0, h.KZ)(),
		{ sendReact: M, pressReact: P, pressReply: U } = (0, I.Q)(i),
		w = (0, s.e7)([d.default], () => d.default.getId() === t.id),
		x = (0, p.Z)(t.id),
		[G, k] = (0, s.Wu)([l.Z], () => [l.Z.useReducedMotion, l.Z.keyboardModeEnabled]);
	if (t.bot || w || !x) return null;
	let B = !R || G || k ? 0 : 300,
		F = async (e) => {
			var n;
			if (null == e) return;
			b({ action: M });
			let r = v({
				emoji: e,
				username: null !== (n = _.Z.getNickname(t.id)) && void 0 !== n ? n : f.ZP.getName(t),
				sourceType: i,
				sourceDetails: E
			});
			L(!1),
				D(!1),
				y(!0),
				await (0, m.Z)({
					userId: t.id,
					content: r,
					location: 'UserProfileReactReplyBar',
					openChannel: !1,
					whenReady: !1
				}),
				D(!0),
				setTimeout(() => {
					y(!1);
				}, N);
		};
	return (0, r.jsxs)(u.ZP, {
		className: a()(A.popover, {
			[A.visible]: O,
			[A.expandable]: R,
			[A.statusPopover]: i === T.n_.STATUS,
			[A.avatarPopover]: i === T.n_.AVATAR
		}),
		children: [
			(0, r.jsx)(o.TooltipContainer, {
				text: S.Z.Messages.USER_PROFILE_SEND_REACTION,
				shouldShow: O,
				delay: B,
				'aria-label': !1,
				children: (0, r.jsx)(o.Popout, {
					onRequestClose: () => {
						null == C ||
							C({
								interactionType: null,
								interactionSourceType: null,
								interactionSourceDetails: null
							});
					},
					onRequestOpen: () => {
						null == C ||
							C({
								interactionType: T.P.REACT,
								interactionSourceType: i,
								interactionSourceDetails: E
							});
					},
					renderPopout: (e) => {
						let { closePopout: t } = e;
						return (0, r.jsx)(c.Z, {
							guildId: null == n ? void 0 : n.guild_id,
							closePopout: t,
							onSelectEmoji: (e, n) => {
								F(e), n && t();
							},
							pickerIntention: g.Hz.PROFILE,
							channel: n
						});
					},
					position: 'left',
					animation: o.Popout.Animation.NONE,
					align: 'top',
					children: (e) =>
						(0, r.jsx)(u.zx, {
							...e,
							onClick: (t) => {
								b({ action: P }), e.onClick(t);
							},
							className: a()(A.button, A.left),
							'aria-label': S.Z.Messages.USER_PROFILE_SEND_REACTION,
							children: (0, r.jsx)(o.ReactionIcon, {
								size: 'xs',
								className: A.icon
							})
						})
				})
			}),
			(0, r.jsx)(o.TooltipContainer, {
				text: S.Z.Messages.USER_PROFILE_REPLY,
				shouldShow: O,
				delay: B,
				'aria-label': !1,
				children: (0, r.jsx)(u.zx, {
					onClick: () => {
						b({ action: U }),
							null == C ||
								C({
									interactionType: T.P.REPLY,
									interactionSourceType: i,
									interactionSourceDetails: E
								});
					},
					className: a()(A.button, A.right),
					'aria-label': S.Z.Messages.USER_PROFILE_REPLY,
					children: (0, r.jsx)(o.ArrowAngleLeftUpIcon, {
						size: 'xs',
						className: A.icon
					})
				})
			})
		]
	});
}
