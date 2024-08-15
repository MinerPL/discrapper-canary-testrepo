n.d(t, {
	Z: function () {
		return N;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(442837),
	r = n(481060),
	l = n(317632),
	o = n(602478),
	c = n(665149),
	u = n(306680),
	d = n(594174),
	_ = n(280763),
	E = n(178088),
	I = n(222940),
	m = n(490897),
	T = n(689938),
	h = n(166535);
function N(e) {
	let { onOpen: t, onClose: n, className: N } = e,
		f = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
		C = a.useRef(null),
		p = (0, s.e7)([u.ZP], () => (null == f ? void 0 : f.id) != null && u.ZP.getMentionCount(f.id, m.W.NOTIFICATION_CENTER) > 0),
		{ enabled: g } = o.Z.useExperiment({ location: 'RecentsButton' }, { autoTrackExposure: !1 }),
		S = (0, s.e7)([l.Z], () => g && l.Z.getUnseenInviteCount() > 0);
	return (0, i.jsx)(E.k, {
		onOpen: t,
		onClose: n,
		badgeState: { badgeForYou: p },
		popoutPosition: 'bottom',
		popoutAlign: 'right',
		children: (e, t, n) =>
			(0, i.jsxs)('div', {
				ref: C,
				className: h.recentsIcon,
				children: [
					g &&
						(0, i.jsx)(I.Z, {
							inboxIconRef: C,
							recentsPopoutShown: t
						}),
					(0, i.jsx)(c.JO, {
						...n,
						className: N,
						onClick: e,
						icon: r.InboxIcon,
						'aria-label': T.Z.Messages.INBOX,
						tooltip: t ? null : T.Z.Messages.INBOX,
						selected: t,
						showBadge: p || S,
						children: (0, i.jsx)(_.Z, { className: h.todoBadge })
					})
				]
			})
	});
}
