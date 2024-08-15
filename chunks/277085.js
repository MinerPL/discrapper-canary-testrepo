n.d(t, {
	Z: function () {
		return p;
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
	u = n(906732),
	c = n(951394),
	d = n(695346),
	_ = n(785717),
	E = n(689938),
	f = n(308801);
let h = (e) =>
	(0, o.openModalLazy)(async () => {
		let { default: t } = await n.e('51714').then(n.bind(n, 211065));
		return (n) =>
			(0, r.jsx)(t, {
				...n,
				sourceAnalyticsLocations: e
			});
	});
function p(e) {
	let { isVisible: t, isExpandable: n, onClose: i } = e,
		{ analyticsLocations: p } = (0, u.ZP)(),
		{ trackUserProfileAction: I } = (0, _.KZ)(),
		[m, T] = (0, s.Wu)([l.Z], () => [l.Z.useReducedMotion, l.Z.keyboardModeEnabled]),
		g = !n || m || T ? 0 : 300;
	return (0, r.jsxs)(c.ZP, {
		className: a()(f.popover, {
			[f.visible]: t,
			[f.expandable]: n
		}),
		children: [
			(0, r.jsx)(o.TooltipContainer, {
				text: E.Z.Messages.EDIT,
				shouldShow: t,
				delay: g,
				'aria-label': !1,
				children: (0, r.jsx)(c.zx, {
					className: a()(f.button, f.left),
					'aria-label': E.Z.Messages.CUSTOM_STATUS_EDIT_CUSTOM_STATUS_A11Y_LABEL,
					onClick: () => {
						I({ action: 'PRESS_EDIT_CUSTOM_STATUS' }), h(p), null == i || i();
					},
					children: (0, r.jsx)(o.PencilIcon, {
						size: 'xs',
						colorClass: f.icon
					})
				})
			}),
			(0, r.jsx)(o.TooltipContainer, {
				text: E.Z.Messages.CLEAR,
				shouldShow: t,
				delay: g,
				'aria-label': !1,
				children: (0, r.jsx)(c.zx, {
					className: a()(f.button, f.right),
					'aria-label': E.Z.Messages.CUSTOM_STATUS_CLEAR_CUSTOM_STATUS_A11Y_LABEL,
					onClick: () => {
						I({ action: 'PRESS_CLEAR_CUSTOM_STATUS' }), d.Ok.updateSetting(void 0);
					},
					children: (0, r.jsx)(o.TrashIcon, {
						size: 'xs',
						colorClass: f.icon
					})
				})
			})
		]
	});
}
