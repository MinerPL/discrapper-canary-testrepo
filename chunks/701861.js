n(47120);
var i = n(735250),
	a = n(470079),
	s = n(392711),
	r = n.n(s),
	l = n(442837),
	o = n(481060),
	c = n(493683),
	d = n(239091),
	u = n(194359),
	_ = n(703656),
	E = n(592125),
	h = n(131951),
	m = n(51144),
	I = n(321488),
	g = n(417183),
	p = n(825682),
	T = n(170245),
	S = n(981631),
	f = n(65154),
	C = n(689938),
	N = n(656209);
function A(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
function v(e) {
	let { user: t, onSelect: n } = e,
		a = () => {
			u.Z.removeFriend(t.id, { location: 'Friends' });
		},
		s = (0, l.e7)([h.Z], () => h.Z.supports(f.AN.VIDEO));
	return (0, i.jsxs)(o.Menu, {
		navId: 'friend-row',
		'aria-label': C.Z.Messages.USER_ACTIONS_MENU_LABEL,
		onClose: d.Zy,
		onSelect: n,
		children: [
			s
				? (0, i.jsx)(o.MenuItem, {
						id: 'start-video-call',
						label: C.Z.Messages.START_VIDEO_CALL,
						action: function () {
							c.Z.openPrivateChannel(t.id, !0, !0);
						}
					})
				: null,
			(0, i.jsx)(o.MenuItem, {
				id: 'start-voice-call',
				label: C.Z.Messages.START_VOICE_CALL,
				action: () => {
					c.Z.openPrivateChannel(t.id, !0);
				}
			}),
			(0, i.jsx)(o.MenuItem, {
				id: 'remove-friend',
				label: C.Z.Messages.REMOVE_FRIEND,
				action: () => {
					(0, o.openModal)((e) =>
						(0, i.jsx)(o.ConfirmModal, {
							header: C.Z.Messages.REMOVE_FRIEND_TITLE.format({ name: m.ZP.getName(t) }),
							confirmText: C.Z.Messages.REMOVE_FRIEND,
							cancelText: C.Z.Messages.CANCEL,
							onConfirm: a,
							...e,
							children: (0, i.jsx)(o.Text, {
								variant: 'text-md/normal',
								children: C.Z.Messages.REMOVE_FRIEND_BODY.format({ name: m.ZP.getName(t) })
							})
						})
					);
				},
				color: 'danger'
			})
		]
	});
}
class Z extends a.PureComponent {
	componentWillLeave(e) {
		null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
	}
	componentWillEnter(e) {
		null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
	}
	render() {
		let { user: e, isFocused: t, activities: n, applicationStream: a, status: s, isMobile: r } = this.props,
			{ isActiveRow: l } = this.state;
		return (0, i.jsx)(g.Z, {
			ref: this.peopleListItemRef,
			isFocused: t,
			isActive: l,
			user: e,
			onOtherHover: () => (l ? null : (0, d.Zy)()),
			onClick: this.handleOpenPrivateChannel,
			children: (t) =>
				(0, i.jsxs)('div', {
					className: N.listItemContents,
					children: [
						(0, i.jsx)(T.Z, {
							user: e,
							status: s,
							isMobile: r,
							subText: (0, i.jsx)(p.Z, {
								hovered: t,
								activities: n,
								applicationStream: a,
								status: s,
								user: e
							}),
							hovered: t,
							showAccountIdentifier: !0
						}),
						(0, i.jsxs)('div', {
							className: N.actions,
							children: [
								(0, i.jsx)(I.Z, {
									icon: o.ChatIcon,
									tooltip: C.Z.Messages.SEND_DM,
									onClick: this.handleOpenPrivateChannel,
									shouldHighlight: t
								}),
								(0, i.jsx)(I.Z, {
									icon: o.MoreVerticalIcon,
									tooltip: C.Z.Messages.MORE,
									onClick: this.handleOpenActionsMenu,
									shouldHighlight: t
								})
							]
						})
					]
				})
		});
	}
	constructor(...e) {
		super(...e),
			A(this, 'peopleListItemRef', a.createRef()),
			A(this, 'state', { isActiveRow: !1 }),
			A(this, 'handleOpenPrivateChannel', (e) => {
				let { user: t } = this.props;
				e.stopPropagation();
				let n = r().find(E.Z.getMutablePrivateChannels(), (e) => e.type === S.d4z.DM && e.getRecipientId() === t.id);
				null != n ? (0, _.uL)(S.Z5c.CHANNEL(S.ME, n.id)) : c.Z.openPrivateChannel(t.id);
			}),
			A(this, 'handleOpenActionsMenu', (e) => {
				let { user: t } = this.props;
				(0, d.vq)(
					e,
					(e) =>
						(0, i.jsx)(v, {
							...e,
							user: t
						}),
					{
						onClose: () => {
							this.setState({ isActiveRow: !1 });
						}
					}
				),
					this.setState({ isActiveRow: !0 });
			});
	}
}
t.Z = Z;
