s.r(t);
var n = s(735250);
s(470079);
var i = s(442837),
	o = s(481060),
	a = s(600164),
	r = s(418632),
	l = s(594174),
	c = s(689938),
	d = s(284642);
function u(e) {
	let { onClose: t } = e,
		a = (0, i.e7)([l.default], () => l.default.getCurrentUser());
	function d() {
		null == t || t();
	}
	function u() {
		d(),
			(0, o.openModalLazy)(async () => {
				let { default: e } = await Promise.all([s.e('9343'), s.e('90154')]).then(s.bind(s, 642298));
				return (t) => (0, n.jsx)(e, { ...t });
			});
	}
	return (null == a ? void 0 : a.email) == null
		? (0, n.jsx)(o.Button, {
				onClick: u,
				color: o.Button.Colors.BRAND,
				look: o.Button.Looks.FILLED,
				children: c.Z.Messages.ADD_EMAIL_SHORT
			})
		: (0, n.jsxs)(n.Fragment, {
				children: [
					(0, n.jsx)(o.Button, {
						onClick: u,
						color: o.Button.Colors.PRIMARY,
						look: o.Button.Looks.LINK,
						children: c.Z.Messages.CHANGE_EMAIL_SHORT
					}),
					(0, n.jsx)(r.Z, {
						color: o.Button.Colors.BRAND,
						onClick: d
					})
				]
			});
}
t.default = function (e) {
	let { onClose: t, transitionState: s } = e;
	return (0, n.jsxs)(o.ModalRoot, {
		transitionState: s,
		children: [
			(0, n.jsx)(o.ModalHeader, {
				children: (0, n.jsx)(o.FormTitle, {
					tag: o.FormTitleTags.H4,
					children: c.Z.Messages.PREMIUM_NOT_VERIFIED
				})
			}),
			(0, n.jsxs)(o.ModalContent, {
				children: [
					(0, n.jsx)('div', { className: d.imageUnverified }),
					(0, n.jsx)(o.Text, {
						variant: 'text-md/normal',
						className: d.message,
						children: c.Z.Messages.PREMIUM_NOT_VERIFIED_BODY
					})
				]
			}),
			(0, n.jsx)(o.ModalFooter, {
				children: (0, n.jsx)(a.Z, {
					justify: a.Z.Justify.END,
					children: (0, n.jsx)(u, { onClose: t })
				})
			})
		]
	});
};
