a.r(t), a(47120);
var n = a(735250),
	i = a(470079),
	r = a(548668),
	l = a(231262),
	o = a(501522),
	s = a(442837),
	c = a(153867),
	d = a(706454),
	u = a(626135),
	h = a(981631),
	m = a(689938),
	p = a(125944);
class N extends i.Component {
	shouldScrollToTop(e) {
		let { location: t } = e;
		return t.pathname.startsWith(h.Z5c.APPLICATION_STORE_LISTING_SKU('')) || t.pathname.startsWith(h.Z5c.APPLICATION_STORE_LISTING_APPLICATION(''));
	}
	render() {
		let { location: e, className: t, render: a, locale: s } = this.props;
		return (0, n.jsx)(o.Z, {
			className: t,
			shouldScrollToTop: this.shouldScrollToTop,
			render: (t, o) =>
				(0, n.jsxs)(i.Fragment, {
					children: [
						(0, n.jsx)(l.h, {
							avoidRouter: !0,
							locale: s,
							authRedirectTo: e.pathname,
							track: u.default.track,
							className: p.marketingHeader,
							onChangeLocale: this.handleHeaderLocaleChange,
							mobileClassName: p.marketingHeader,
							openNavAriaLabel: m.Z.Messages.OPEN_NAVIGATION,
							hideNavAriaLabel: m.Z.Messages.HIDE_NAVIGATION,
							skipToContentLabel: m.Z.Messages.SKIP_TO_CONTENT
						}),
						a(t, o),
						(0, n.jsx)(r.$, {
							locale: s,
							authRedirectTo: e.pathname,
							avoidRouter: !0,
							track: u.default.track,
							className: p.marketingFooter
						})
					]
				})
		});
	}
	constructor(...e) {
		var t, a, n;
		super(...e),
			(t = this),
			(a = 'handleHeaderLocaleChange'),
			(n = (e) => {
				e !== this.props.locale && c.ZP.overrideLocale(e);
			}),
			a in t
				? Object.defineProperty(t, a, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[a] = n);
	}
}
t.default = s.ZP.connectStores([d.default], () => ({ locale: d.default.locale }))(N);
