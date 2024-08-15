a.d(t, {
	h: function () {
		return m;
	}
});
var n = a(735250),
	i = a(470079),
	r = a(557533),
	l = a.n(r),
	o = a(794010),
	s = a(653371),
	c = a(388755),
	d = a(330711),
	u = a(705669);
let h = null;
class m extends i.PureComponent {
	render() {
		let {
			token: e,
			className: t,
			onChangeLocale: a,
			mainContentId: r,
			mobileClassName: o,
			avoidRouter: m,
			authRedirectTo: p,
			openNavAriaLabel: N,
			hideNavAriaLabel: k,
			skipToContentLabel: _
		} = this.props;
		return null == h
			? null
			: (0, n.jsxs)(i.Fragment, {
					children: [
						(0, n.jsx)(s.a, {
							className: l()(u.desktopHeader, t),
							TrackClick: h,
							token: e,
							avoidRouter: m,
							authRedirectTo: p,
							NavigationMessages: d.Z.Messages.Navigation,
							onChangeLocale: a,
							mainContentId: r,
							skipToContentLabel: _
						}),
						(0, n.jsx)(c.D, {
							className: l()(u.mobileHeader, o),
							token: e,
							avoidRouter: m,
							TrackClick: h,
							NavigationMessages: d.Z.Messages.Navigation,
							onChangeLocale: a,
							openNavAriaLabel: N,
							hideNavAriaLabel: k
						})
					]
				});
	}
	constructor(e) {
		super(e),
			null != e.locale && d.Z.setLocale(e.locale),
			(h = (t) =>
				(0, n.jsx)(o.Z, {
					track: e.track,
					trackOutboundLink: e.trackOutboundLink,
					...t
				}));
	}
}
