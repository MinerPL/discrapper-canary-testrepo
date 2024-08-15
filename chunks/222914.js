t.d(s, {
	Z: function () {
		return m;
	}
});
var a = t(735250),
	n = t(470079),
	o = t(120356),
	i = t.n(o),
	d = t(399606),
	c = t(481060),
	r = t(446183),
	l = t(677281),
	_ = t(378298),
	N = t(359119),
	E = t(473092),
	R = t(689938),
	u = t(603967),
	T = t(810819);
function A() {
	return (0, a.jsxs)('div', {
		className: i()(T.toast, u.toast),
		children: [
			(0, a.jsx)(c.ShieldIcon, { color: c.tokens.colors.TEXT_BRAND }),
			(0, a.jsx)(c.Text, {
				className: T.__invalid_content,
				color: 'header-primary',
				variant: 'text-md/normal',
				children: R.Z.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM
			})
		]
	});
}
function m(e) {
	let { channelId: s, warningId: t, senderId: o } = e,
		T = (0, d.e7)([N.ZP], () => N.ZP.getChannelSafetyWarning(s, t)),
		m = n.useMemo(() => (null == T ? void 0 : T.feedback_type) === N.ny.UPVOTE, [T]),
		x = n.useMemo(() => (null == T ? void 0 : T.feedback_type) === N.ny.DOWNVOTE, [T]),
		M = n.useCallback(
			(e, n) => {
				(null == T ? void 0 : T.feedback_type) !== e &&
					((0, _.Ms)(s, t, e),
					(0, c.showToast)((0, c.createToast)(R.Z.Messages.STRANGER_DANGER_FEEDBACK_CONFIRM, c.ToastType.CUSTOM, { component: (0, a.jsx)(A, {}) })),
					(0, E.qc)({
						channelId: s,
						warningId: t,
						senderId: o,
						warningType: N.pj.STRANGER_DANGER,
						cta: n
					}));
			},
			[T, s, t, o]
		);
	return (0, a.jsxs)('div', {
		className: u.feedback,
		children: [
			(0, a.jsx)(c.Text, {
				variant: 'text-sm/medium',
				color: 'text-normal',
				children: R.Z.Messages.STRANGER_DANGER_WAS_THIS_HELPFUL
			}),
			(0, a.jsxs)('div', {
				className: u.buttonsContainer,
				children: [
					(0, a.jsx)(c.Clickable, {
						className: i()([u.buttonsBackground, m ? u.buttonsBackgroundActive : u.buttonsBackgroundInactive, { [u.disabled]: m }]),
						onClick: () => M(N.ny.UPVOTE, E.NM.FEEDBACK_UPVOTE),
						'aria-label': R.Z.Messages.STRANGER_DANGER_THUMBS_UP_A11Y,
						children: (0, a.jsx)(l.Z, {
							className: u.__invalid_buttonIcon,
							color: 'interactive-normal'
						})
					}),
					(0, a.jsx)(c.Clickable, {
						className: i()([u.buttonsBackground, x ? u.buttonsBackgroundActive : u.buttonsBackgroundInactive, { [u.disabled]: x }]),
						onClick: () => M(N.ny.DOWNVOTE, E.NM.FEEDBACK_DOWNVOTE),
						'aria-label': R.Z.Messages.STRANGER_DANGER_THUMBS_DOWN_A11Y,
						children: (0, a.jsx)(r.Z, {
							className: u.__invalid_buttonIcon,
							color: 'interactive-normal'
						})
					})
				]
			})
		]
	});
}
