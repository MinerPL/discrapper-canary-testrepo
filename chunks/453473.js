n.d(t, {
	P: function () {
		return D;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(512722),
	o = n.n(l),
	c = n(91192),
	u = n(442837),
	d = n(524437),
	_ = n(481060),
	E = n(239091),
	I = n(724757),
	m = n(294218),
	T = n(373662),
	h = n(240126),
	N = n(703656),
	f = n(695346),
	C = n(675478),
	p = n(581883),
	g = n(592125),
	S = n(70956),
	A = n(324701),
	R = n(768943),
	x = n(767893),
	O = n(74551),
	M = n(981631),
	v = n(689938),
	L = n(80706);
let Z = {
		offset: {
			left: 4,
			right: -12
		}
	},
	P = (e) => {
		C.hW.updateAsync(
			'forLater',
			(t) => {
				if (t.currentTab === e) return !1;
				t.currentTab = e;
			},
			C.fy.FREQUENT_USER_ACTION
		);
	};
function b(e) {
	let { closePopout: t } = e,
		n = (0, u.e7)([p.Z], () => {
			var e, t;
			return null !== (t = null === (e = p.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t
				? t
				: d.Pr.ALL;
		}),
		[s] = (0, u.Wu)([R.Z, p.Z], () => {
			var e, t;
			let n =
				null !== (t = null === (e = p.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t
					? t
					: d.Pr.ALL;
			return [
				n === d.Pr.ALL
					? R.Z.getSavedMessages()
					: n === d.Pr.BOOKMARKS
						? R.Z.getMessageBookmarks()
						: R.Z.getMessageReminders(),
				R.Z.getVersion()
			];
		}),
		r = (0, u.e7)([R.Z], () => R.Z.getOverdueMessageReminderCount()),
		[l, o] = a.useState(new Date());
	return (
		a.useEffect(() => {
			let e = setInterval(() => o(new Date()), S.Z.Millis.MINUTE);
			return () => {
				clearInterval(e);
			};
		}, []),
		(0, i.jsx)(_.Dialog, {
			'aria-label': v.Z.Messages.FOR_LATER,
			children: (0, i.jsxs)('div', {
				className: L.popoutContainer,
				children: [
					(0, i.jsxs)('div', {
						children: [
							(0, i.jsxs)('div', {
								className: L.headerTitle,
								children: [
									(0, i.jsx)(_.BookmarkIcon, {
										size: 'md',
										color: 'currentColor',
										className: L.headerTitleIcon
									}),
									(0, i.jsx)(_.Heading, {
										variant: 'heading-lg/semibold',
										children: v.Z.Messages.FOR_LATER
									})
								]
							}),
							(0, i.jsx)('div', {
								children: (0, i.jsxs)(_.TabBar, {
									type: 'top',
									look: 'brand',
									selectedItem: n,
									onItemSelect: P,
									className: L.tabBar,
									children: [
										(0, i.jsx)(_.TabBar.Item, {
											id: d.Pr.ALL,
											className: L.tabBarItem,
											children: v.Z.Messages.FOR_LATER_TAB_ALL
										}),
										(0, i.jsx)(_.TabBar.Item, {
											id: d.Pr.BOOKMARKS,
											className: L.tabBarItem,
											children: v.Z.Messages.FOR_LATER_TAB_SAVED
										}),
										(0, i.jsx)(_.TabBar.Item, {
											id: d.Pr.REMINDERS,
											className: L.tabBarItem,
											children:
												0 === r
													? v.Z.Messages.FOR_LATER_TAB_REMINDERS
													: v.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: r })
										})
									]
								})
							})
						]
					}),
					(0, i.jsx)(j, {
						savedMessages: s,
						closePopout: t,
						throttledNow: l
					})
				]
			})
		})
	);
}
function D(e) {
	let { onOpen: t, onClose: n, children: s, popoutPosition: r, popoutAlign: l } = e,
		[o, c] = a.useState(!1),
		u = a.useCallback(() => {
			c(!1), o && (null == n || n());
		}, [n, o]),
		d = a.useCallback(() => {
			c(!o), o ? null == n || n() : null == t || t();
		}, [n, t, o]);
	return (0, i.jsx)(_.Popout, {
		animation: _.Popout.Animation.NONE,
		position: r,
		align: l,
		autoInvert: !1,
		shouldShow: o,
		onRequestClose: u,
		renderPopout: function () {
			return (0, i.jsx)(b, { closePopout: u });
		},
		ignoreModalClicks: !0,
		children: (e, t) => {
			let { isShown: n } = t;
			return s(d, n, e);
		}
	});
}
function j(e) {
	let { savedMessages: t, closePopout: n, throttledNow: s } = e,
		r = a.useRef(null),
		l = (0, I.Z)('for-later', r);
	return 0 === t.length
		? (0, i.jsx)(B, {})
		: (0, i.jsx)(c.bG, {
				navigator: l,
				children: (0, i.jsx)(c.SJ, {
					children: (e) => {
						let { ref: a, ...l } = e;
						return (0, i.jsx)(_.AdvancedScrollerThin, {
							ref: (e) => {
								var t;
								(r.current = e),
									(a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
							},
							className: L.messagesScroller,
							...l,
							children: t.map((e) =>
								(0, i.jsx)(
									U,
									{
										savedMessage: e,
										closePopout: n,
										throttledNow: s
									},
									''.concat(e.saveData.messageId)
								)
							)
						});
					}
				})
			});
}
function U(e) {
	let { savedMessage: t, closePopout: n, throttledNow: s } = e,
		l = (0, u.e7)([g.Z], () => g.Z.getChannel(t.saveData.channelId)),
		o = a.useCallback(
			(e) => {
				!e.shiftKey && n(),
					(0, N.uL)(M.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.saveData.channelId, t.saveData.messageId));
			},
			[n, t, l]
		);
	return null == l || null == t.message
		? (0, i.jsxs)('div', {
				className: r()(L.messageContainer, L.deletedMessage),
				children: [
					(0, i.jsx)('div', {
						className: L.deleteIcon,
						children: (0, i.jsx)(_.CircleWarningIcon, {
							size: 'xxs',
							color: _.tokens.colors.INTERACTIVE_ACTIVE
						})
					}),
					(0, i.jsx)(_.Heading, {
						variant: 'text-md/semibold',
						color: 'header-secondary',
						children: v.Z.Messages.FOR_LATER_MESSAGE_DELETED
					}),
					(0, i.jsx)(T.ZP, {
						className: L.hoverBar,
						children: (0, i.jsx)(
							T.sF,
							{
								label: v.Z.Messages.FOR_LATER_REMOVE,
								icon: _.TrashIcon,
								dangerous: !0,
								onClick: () => (0, A.x)(t.saveData)
							},
							'delete'
						)
					})
				]
			})
		: (0, i.jsxs)('div', {
				className: L.messageContainer,
				children: [
					null != t.saveData.dueAt
						? (0, i.jsx)(O.Z, {
								reminder: t,
								throttledNow: s
							})
						: null,
					(0, i.jsx)(x.Z, {
						channel: l,
						jumpToMessage: o
					}),
					(0, i.jsx)(
						m.Z,
						{
							message: t.message,
							channel: l,
							className: L.message,
							compact: f.jU.getSetting(),
							animateAvatar: !1,
							focusProps: Z,
							trackAnnouncementViews: !0
						},
						t.message.id
					),
					(0, i.jsx)(T.ZP, {
						className: L.hoverBar,
						children: (0, i.jsx)(y, {
							savedMessage: t,
							jumpToMessage: o
						})
					})
				]
			});
}
function y(e) {
	let { savedMessage: t, jumpToMessage: a } = e;
	return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
		? (0, i.jsxs)(i.Fragment, {
				children: [
					(0, i.jsx)(
						T.sF,
						{
							label: v.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
							icon: _.CheckmarkLargeIcon,
							onClick: () => (0, A.x)(t.saveData)
						},
						'mark-complete'
					),
					(0, i.jsx)(
						T.sF,
						{
							label: v.Z.Messages.MESSAGE_REMINDERS_EDIT,
							icon: _.PencilIcon,
							onClick: (e) =>
								(0, E.jW)(e, async () => {
									let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
									return (n) =>
										(0, i.jsx)(e, {
											...n,
											label: v.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
											message: t.message
										});
								})
						},
						'edit-reminder'
					),
					(0, i.jsx)(T.fO, {}),
					(0, i.jsx)(
						T.sF,
						{
							label: v.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
							icon: _.BookmarkOutlineIcon,
							onClick: () =>
								(0, A.z)({
									channelId: t.saveData.channelId,
									messageId: t.saveData.messageId,
									dueAt: void 0
								})
						},
						'create-bookmark'
					),
					(0, i.jsx)(
						T.sF,
						{
							label: v.Z.Messages.JUMP_TO_MESSAGE,
							icon: _.ArrowLargeRightIcon,
							onClick: (e) => a(e)
						},
						'jump-to-message'
					)
				]
			})
		: (0, i.jsxs)(i.Fragment, {
				children: [
					(0, i.jsx)(
						T.sF,
						{
							label: v.Z.Messages.MESSAGE_REMINDERS_CREATE,
							icon: _.ClockIcon,
							onClick: (e) =>
								(0, E.jW)(e, async () => {
									let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
									return (n) =>
										(0, i.jsx)(e, {
											...n,
											label: v.Z.Messages.MESSAGE_REMINDERS_CREATE,
											message: t.message
										});
								})
						},
						'create-reminder'
					),
					(0, i.jsx)(
						T.sF,
						{
							label: v.Z.Messages.MESSAGE_BOOKMARKS_REMOVE,
							icon: _.BookmarkIcon,
							onClick: () => (0, A.x)(t.saveData)
						},
						'remove-bookmark'
					),
					(0, i.jsx)(
						T.sF,
						{
							label: v.Z.Messages.JUMP_TO_MESSAGE,
							icon: _.ArrowLargeRightIcon,
							onClick: (e) => a(e)
						},
						'jump-to-message'
					)
				]
			});
}
function B() {
	return (0, i.jsx)(h.Z, {
		Icon: _.DoubleCheckmarkIcon,
		header: v.Z.Messages.FOR_LATER_EMPTY,
		tip: v.Z.Messages.MESSAGE_BOOKMARKS_EMPTY_TIP
	});
}
