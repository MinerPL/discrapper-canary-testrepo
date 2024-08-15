var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(653603),
	o = n.n(r),
	c = n(442837),
	u = n(481060),
	d = n(904245),
	h = n(232961),
	m = n(223606),
	p = n(63063),
	_ = n(530472),
	f = n(453687),
	E = n(930282),
	C = n(318713),
	g = n(981631),
	I = n(689938),
	x = n(307529),
	T = n(438379),
	N = n(910212);
let v = a.memo(function (e) {
	let { message: t, notice: n, compact: a = !1, onDismiss: s } = e;
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsxs)('div', {
				className: l()(x.blockedNoticeContainer, { [x.compact]: a }),
				children: [
					(0, i.jsx)('div', {
						className: x.blockedNoticeIcon,
						children: (0, i.jsx)(u.ShieldIcon, {
							size: 'xs',
							color: 'currentColor',
							className: x.shieldIcon
						})
					}),
					(0, i.jsx)('div', {
						className: x.blockedNotice,
						children: (0, i.jsx)(u.Text, {
							variant: 'text-sm/normal',
							color: 'interactive-normal',
							children: n
						})
					})
				]
			}),
			(0, i.jsx)('div', {
				className: l()(x.ephemeralAccessories, { [x.compact]: a }),
				children: (0, i.jsx)(_.Z, {
					message: t,
					onDeleteMessage: s,
					children: (0, i.jsx)(u.Text, {
						variant: 'text-xs/normal',
						color: 'interactive-normal',
						tag: 'span',
						className: x.learnMore,
						children: I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_LEARN_MORE.format({ helpUrl: p.Z.getArticleURL(g.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
					})
				})
			})
		]
	});
});
t.Z = a.memo(function (e) {
	var t, n;
	let { className: s, compact: r, message: u, children: p, content: _, onUpdate: g } = e,
		S = null === (t = u.editedTimestamp) || void 0 === t ? void 0 : t.toString(),
		Z = a.useRef(!1),
		A = (0, c.e7)([m.Z], () => m.Z.getMessage(u.id), [u.id]),
		M = a.useCallback(() => {
			(null == A ? void 0 : A.isBlockedEdit) ? (0, h.I)(u.id) : d.Z.deleteMessage(u.channel_id, u.id, !0);
		}, [u, A]);
	return (
		a.useLayoutEffect(() => {
			Z.current ? null != g && g() : (Z.current = !0);
		}, [g, u.content, _, S, p]),
		(0, i.jsxs)('div', {
			id: (0, f.ut)(u),
			className: l()(s, N.markup, {
				[T.messageContent]: !0,
				[T.markupRtl]: 'rtl' === o()(u.content),
				[x.blockedEdit]: null == A ? void 0 : A.isBlockedEdit,
				[x.blockedSend]: !(null == A ? void 0 : A.isBlockedEdit)
			}),
			children: [
				null != p ? p : (0, E.L5)(u, _),
				(null == A ? void 0 : A.isBlockedEdit) &&
					null != u.timestamp &&
					(0, i.jsxs)(i.Fragment, {
						children: [
							' ',
							(0, i.jsx)(C.Z, {
								timestamp: u.timestamp,
								isEdited: !0,
								isInline: !1,
								children: (0, i.jsxs)('span', {
									className: T.edited,
									children: ['(', I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_POSTFIX, ')']
								})
							})
						]
					}),
				(0, i.jsx)(v, {
					notice: null !== (n = null == A ? void 0 : A.errorMessage) && void 0 !== n ? n : I.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE,
					message: u,
					compact: r,
					onDismiss: M
				})
			]
		})
	);
}, E.HR);
