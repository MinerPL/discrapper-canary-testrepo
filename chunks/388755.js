a.d(t, {
	D: function () {
		return f;
	}
}),
	a(47120);
var n = a(735250),
	i = a(470079),
	r = a(557533),
	l = a.n(r),
	o = a(39383),
	s = a.n(o),
	c = a(608863),
	d = a(66037),
	u = a(643103),
	h = a(34211),
	m = a(231338),
	p = a(431138),
	N = a(582904);
function k(e, t, a) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = a),
		e
	);
}
let _ = m.j_.MAIN_NAVIGATION_MENU;
class f extends i.PureComponent {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown);
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown);
	}
	render() {
		let {
				className: e,
				NavigationMessages: t,
				TrackClick: a,
				onChangeLocale: i,
				avoidRouter: r,
				openNavAriaLabel: o,
				hideNavAriaLabel: s
			} = this.props,
			{ menuOpen: k } = this.state;
		return (0, n.jsx)('header', {
			className: l()(N.header, e),
			children: (0, n.jsxs)('nav', {
				className: N.headerInner,
				children: [
					(0, n.jsx)(a, {
						tag: 'div',
						eventName: _,
						className: N.headerLogo,
						data: { linkClicked: 'logo' },
						children: (0, n.jsx)(d.Z, {
							avoidRouter: r,
							className: N.logoWrapper,
							to: m.am.INDEX,
							from: m.j_.MAIN_NAVIGATION_MENU,
							children: (0, n.jsx)('img', {
								className: N.logo,
								src: p.r.ASSET_LOGO_DISCORD_SVG,
								alt: 'Discord',
								itemProp: 'logo'
							})
						})
					}),
					(0, n.jsx)(a, {
						tag: 'div',
						className: N.hamburgerButton,
						eventName: _,
						data: { linkClicked: 'mobile-menu' },
						children: (0, n.jsx)(c.r, {
							open: k,
							'aria-haspopup': 'true',
							'aria-label': k ? s : o,
							'aria-expanded': k,
							'aria-controls': this._mainNavId,
							onClick: this.toggleMenu
						})
					}),
					(0, n.jsxs)('ul', {
						className: k ? N.headerNavOpen : N.headerNav,
						children: [
							(0, n.jsx)(h.o, {
								avoidRouter: r,
								TrackClick: a,
								styles: N,
								isMobile: !0,
								isVisible: k,
								NavigationMessages: t
							}),
							(0, n.jsx)(u.p, { onChange: i })
						]
					})
				]
			})
		});
	}
	constructor(...e) {
		super(...e),
			k(this, '_mainNavId', s()('mainNav')),
			k(this, 'state', { menuOpen: !1 }),
			k(this, 'toggleMenu', () => {
				this.setState({ menuOpen: !this.state.menuOpen });
			}),
			k(this, 'handleKeyDown', (e) => {
				let { menuOpen: t } = this.state;
				('Escape' === e.key || 'Esc' === e.key) && (e.preventDefault(), t && this.toggleMenu());
			});
	}
}
