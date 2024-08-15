n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(442837),
	r = n(493683),
	l = n(447543),
	o = n(955415),
	c = n(598077),
	u = n(314897),
	d = n(592125),
	_ = n(699516),
	E = n(51144),
	I = n(981631),
	m = n(689938),
	T = n(29062);
function h(e) {
	var t;
	let { invite: n, getAcceptInviteContext: h } = e,
		N = (0, s.e7)([u.default], () => u.default.getId()),
		f = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === N,
		C = n.state === I.r2o.ACCEPTING,
		p = (0, s.e7)([_.Z], () => {
			var e;
			return null != n.inviter && _.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
		}),
		g = a.useCallback(() => {
			null != n.inviter && null != d.Z.getDMFromUserId(n.inviter.id) && r.Z.openPrivateChannel([n.inviter.id]);
		}, [n.inviter]),
		S = a.useCallback(() => {
			let e = h('Invite Button Embed');
			l.Z.acceptInviteAndTransitionToInviteChannel({
				inviteKey: n.code,
				context: e
			});
		}, [n.code, h]);
	if (null == n.inviter) return null;
	let A = p ? g : S,
		R = m.Z.Messages.INVITE_BUTTON_ADD_FRIEND,
		x = o.Z.Button.Colors.GREEN;
	p
		? ((R = m.Z.Messages.INVITE_BUTTON_ALREADY_FRIENDS), (x = o.Z.Button.Colors.PRIMARY))
		: f && ((R = m.Z.Messages.INVITE_BUTTON_ADD_FRIEND), (x = o.Z.Button.Colors.PRIMARY));
	let O = f ? m.Z.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : m.Z.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
		M = null != n.inviter ? ''.concat(n.inviter.username) : '',
		v = null != n.inviter ? E.ZP.getUserTag(n.inviter) : '';
	return (0, i.jsxs)(o.Z, {
		children: [
			(0, i.jsx)(o.Z.Header, { text: O }),
			(0, i.jsxs)(o.Z.Body, {
				children: [
					(0, i.jsxs)('div', {
						className: T.headerLine,
						children: [
							(0, i.jsx)(o.Z.Icon, {
								user: new c.Z(n.inviter),
								onClick: p ? A : void 0
							}),
							(0, i.jsx)(o.Z.Info, {
								title: M,
								onClick: p ? A : void 0,
								children: v
							})
						]
					}),
					(0, i.jsx)(o.Z.Button, {
						onClick: A,
						submitting: C,
						isDisabled: f,
						color: x,
						children: R
					})
				]
			})
		]
	});
}
