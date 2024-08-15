n(47120);
var i,
	a = n(735250),
	s = n(470079),
	r = n(120356),
	l = n.n(r),
	o = n(873546),
	c = n(481060),
	d = n(599857),
	u = n(600164),
	_ = n(63063),
	E = n(1964),
	h = n(981631),
	m = n(689938),
	I = n(801585),
	g = n(224499);
function p(e, t, n) {
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
let T = _.Z.getArticleURL(h.BhN.VERIFICATION_FAQ);
class S extends (i = s.PureComponent) {
	renderFields() {
		let { types: e, captchaKey: t, theme: n, onCaptchaVerify: i } = this.props;
		return (0, a.jsx)(a.Fragment, {
			children: e.map((e) =>
				e === h.PUi.CAPTCHA
					? (0, a.jsx)(
							d.Z,
							{
								onVerify: i,
								theme: n
							},
							t
						)
					: (0, a.jsx)(
							c.Button,
							{
								className: l()(g.marginBottom20),
								onClick: () => this.handleClick(e),
								children: E.Z.getButtonTitle(e)
							},
							e
						)
			)
		});
	}
	render() {
		return (0, a.jsxs)(u.Z, {
			className: I.verification,
			align: u.Z.Align.CENTER,
			direction: u.Z.Direction.VERTICAL,
			children: [
				(0, a.jsxs)(u.Z, {
					className: l()(I.container, { [I.isMobile]: o.tq }),
					direction: u.Z.Direction.VERTICAL,
					align: u.Z.Align.CENTER,
					justify: u.Z.Justify.CENTER,
					children: [
						(0, a.jsx)('div', { className: I.image }),
						(0, a.jsx)('div', {
							className: l()(I.title, g.marginTop20),
							children: m.Z.Messages.VERIFICATION_TITLE
						}),
						(0, a.jsx)('div', {
							className: l()(I.body, g.marginTop4, g.marginBottom20),
							children: m.Z.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({ helpCenterURL: T })
						}),
						(0, a.jsx)(u.Z, {
							grow: 0,
							direction: u.Z.Direction.VERTICAL,
							justify: u.Z.Justify.CENTER,
							children: this.renderFields()
						})
					]
				}),
				(0, a.jsx)('div', {
					className: l()(I.footer, g.marginTop20),
					children: m.Z.Messages.VERIFICATION_FOOTER
				}),
				(0, a.jsxs)(u.Z, {
					className: l()(g.marginTop4, g.marginBottom20),
					grow: 0,
					children: [
						(0, a.jsx)('div', {
							className: l()(I.footer, I.footerAction),
							children: m.Z.Messages.VERIFICATION_FOOTER_SUPPORT.format({ supportURL: _.Z.getSubmitRequestURL() })
						}),
						(0, a.jsx)('div', {
							className: l()(I.footer, I.footerBullet),
							children: '\u2022'
						}),
						(0, a.jsx)('div', {
							className: l()(I.footer, I.footerAction),
							children: m.Z.Messages.VERIFICATION_FOOTER_LOGOUT.format({ logoutOnClick: this.props.onLogout })
						})
					]
				})
			]
		});
	}
	constructor(...e) {
		super(...e),
			p(this, 'handleClick', (e) => {
				let { onClick: t } = this.props;
				null == t || t(e);
			});
	}
}
p(S, 'defaultProps', {
	types: [h.PUi.CAPTCHA],
	onCaptchaVerify: h.dG4,
	onLogout: h.dG4
}),
	(t.Z = S);
