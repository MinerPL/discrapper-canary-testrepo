var s = n(735250);
n(470079);
var r = n(481060),
	i = n(388905),
	a = n(703656),
	l = n(63063),
	o = n(981631),
	c = n(689938),
	u = n(683039);
let d = () => (0, a.uL)(o.Z5c.LOGIN);
t.Z = (e) => {
	let { authBoxClassName: t, underageMessage: a } = e;
	return (0, s.jsxs)(i.ZP, {
		className: t,
		children: [
			(0, s.jsx)('img', {
				alt: '',
				src: n(231443),
				className: u.img
			}),
			(0, s.jsx)(i.Dx, {
				className: u.title,
				children: c.Z.Messages.AGE_GATE_UNDERAGE_HEADER
			}),
			(0, s.jsx)(i.DK, {
				className: u.subtitle,
				children: c.Z.Messages.AGE_GATE_UNDERAGE_BODY.format({
					underageMessage: null != a ? a : c.Z.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
					helpURL: l.Z.getArticleURL(o.BhN.AGE_GATE)
				})
			}),
			(0, s.jsx)(r.Button, {
				fullWidth: !0,
				onClick: d,
				children: c.Z.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
			})
		]
	});
};
