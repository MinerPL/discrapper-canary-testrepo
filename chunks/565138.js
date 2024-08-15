var r,
	i = n(735250),
	a = n(470079),
	s = n(120356),
	o = n.n(s),
	l = n(613828),
	u = n(442837),
	c = n(692547),
	d = n(481060),
	_ = n(891819),
	E = n(372769),
	f = n(451478),
	h = n(956664),
	p = n(153066),
	I = n(815112);
function m(e, t, n) {
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
let T = {
		SMOL: 'Smol',
		MINI: 'Mini',
		SMALLER: 'Smaller',
		SMALL: 'Small',
		MEDIUM: 'Medium',
		LARGE: 'Large',
		LARGER: 'Larger',
		XLARGE: 'XLarge'
	},
	g = {
		[T.SMOL]: 16,
		[T.MINI]: 20,
		[T.SMALLER]: 24,
		[T.SMALL]: 30,
		[T.MEDIUM]: 40,
		[T.LARGE]: 50,
		[T.LARGER]: 64,
		[T.XLARGE]: 100
	},
	S = {
		[T.SMOL]: [10, 10, 8, 6, 6, 4],
		[T.MINI]: [12, 12, 10, 10, 8, 6, 4],
		[T.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
		[T.SMALL]: [14, 14, 12, 12, 10, 8, 6],
		[T.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
		[T.LARGE]: [18, 18, 16, 16, 14, 12, 10],
		[T.LARGER]: [19, 19, 17, 17, 15, 13, 11],
		[T.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
	};
class A extends a.PureComponent {
	renderAcronym() {
		let { guild: e, iconSrc: t } = this.props;
		return null != e.icon || null != t
			? null
			: (0, i.jsx)('div', {
					className: I.acronym,
					children: e.acronym
				});
	}
	renderBadge() {
		let { showBadge: e, guild: t, badgeStrokeColor: n, badgeTooltipColor: r, badgeTooltipDelay: a } = this.props;
		return e && null != t.hasFeature
			? (0, i.jsx)(E.Z, {
					className: I.guildIconBadge,
					guild: t,
					badgeStrokeColor: n,
					tooltipColor: r,
					tooltipDelay: a
				})
			: null;
	}
	renderIcon() {
		var e, t;
		let {
				guild: n,
				className: r,
				showBadge: a,
				active: s,
				size: l,
				style: u = {},
				textScale: c,
				showTooltip: _,
				tooltipPosition: E,
				onClick: f,
				to: h,
				badgeStrokeColor: m,
				animate: T,
				tabIndex: g,
				iconSrc: A,
				'aria-hidden': N,
				...v
			} = this.props,
			O = S[l],
			R = null != f ? d.Clickable : 'div';
		return (0, i.jsxs)(R, {
			className: o()(I.icon, r, (0, p.l)(I, 'iconSize', l), {
				[null !== (e = (0, p.l)(I, 'iconActive', l)) && void 0 !== e ? e : '']: s,
				[I.iconInactive]: !s,
				[I.noIcon]: null == n.icon
			}),
			'aria-hidden': N,
			style:
				null == n.icon
					? {
							fontSize: (null !== (t = O[n.acronym.length]) && void 0 !== t ? t : O[O.length - 1]) * c,
							...u
						}
					: u,
			onClick: null != h || null == f ? void 0 : f,
			tabIndex: g,
			...v,
			children: [this.renderAcronym(), this.renderBadge()]
		});
	}
	renderTooltip() {
		let { guild: e, showTooltip: t, tooltipPosition: n } = this.props;
		return t
			? (0, i.jsx)(d.Tooltip, {
					text: e.name,
					position: n,
					'aria-label': !1,
					children: (e) => a.cloneElement(a.Children.only(this.renderIcon()), { ...e })
				})
			: this.renderIcon();
	}
	render() {
		let { to: e, guild: t, source: n, tabIndex: r, 'aria-hidden': a } = this.props;
		return null != e
			? (0, i.jsx)(l.rU, {
					'aria-hidden': a,
					to: {
						pathname: e,
						state: null != n ? { analyticsSource: n } : null
					},
					'aria-label': t.toString(),
					tabIndex: r,
					children: this.renderTooltip()
				})
			: this.renderTooltip();
	}
}
let N = u.ZP.connectStores([f.Z], (e) => {
	let { guild: t, animate: n, iconSrc: r, style: i, size: a } = e;
	return {
		style: {
			...i,
			backgroundImage: (0, h.rv)(null != r ? r : t.getIconURL(g[a], n && f.Z.isFocused()))
		}
	};
})((0, _.N)((e) => (0, i.jsx)(A, { ...e })));
class v extends (r = a.PureComponent) {
	render() {
		return (0, i.jsx)(N, { ...this.props });
	}
}
m(v, 'Sizes', T),
	m(v, 'defaultProps', {
		size: T.LARGE,
		textScale: 1,
		showBadge: !1,
		showTooltip: !1,
		active: !1,
		tooltipPosition: 'top',
		badgeStrokeColor: c.Z.unsafe_rawColors.WHITE_500.css,
		animate: !1
	}),
	(t.Z = v);
