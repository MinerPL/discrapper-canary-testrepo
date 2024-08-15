n.d(t, {
	n: function () {
		return v;
	}
}),
	n(757143),
	n(411104),
	n(47120);
var r,
	i,
	a,
	s,
	o = n(735250),
	l = n(470079),
	u = n(120356),
	c = n.n(u),
	d = n(372817),
	_ = n(866442),
	E = n(692547),
	f = n(1561),
	h = n(993365),
	p = n(981631),
	m = n(675140);
function I(e, t, n) {
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
		side: m.side,
		top: m.top,
		'top-pill': m.topPill
	},
	g = l.forwardRef(function (e, t) {
		let { children: n, id: r, ...i } = e;
		return (0, o.jsx)('div', {
			...i,
			ref: t,
			role: 'tabpanel',
			id: S(r),
			tabIndex: -1,
			children: n
		});
	});
function S(e) {
	return ''.concat(e.replace(/\s+/g, '-').toLowerCase(), '-tab');
}
function A(e, t) {
	if (null == e) return;
	let n = {};
	return 'Selected' === t ? ((n.backgroundColor = e), (n.color = E.Z.unsafe_rawColors.WHITE_500.css), n) : ('Hover' === t && (n.backgroundColor = (0, _.wK)(e, 0.1)), (n.color = e), n);
}
((s = r || (r = {})).DEFAULT = 'Default'), (s.HOVER = 'Hover'), (s.SELECTED = 'Selected');
class N extends (i = l.Component) {
	getStyle() {
		let { color: e, id: t, selectedItem: n, itemType: r } = this.props,
			{ hover: i, active: a } = this.state;
		if (null != e) {
			if ('side' === r) return (null != t && n === t) || a ? A(e, 'Selected') : i ? A(e, 'Hover') : A(e);
			if ('top' === r)
				return n === t
					? {
							borderColor: e,
							color: e
						}
					: i
						? {
								borderColor: (0, _.wK)(e, 0.1),
								color: (0, _.wK)(e, 0.6)
							}
						: {
								borderColor: 'transparent',
								color: (0, _.wK)(e, 0.4)
							};
			if ('top-pill' === r)
				return n === t
					? {
							backgroundColor: (0, _.wK)(e, 0.2),
							color: e
						}
					: {
							backgroundColor: e,
							color: E.Z.unsafe_rawColors.WHITE_500.css
						};
		}
	}
	render() {
		let { children: e, className: t, id: n, selectedItem: r, color: i, disabled: a, onContextMenu: s, clickableRef: l, look: u, disableItemStyles: d } = this.props,
			_ = this.props['aria-label'],
			E = r === n;
		return (0, o.jsx)(f.P, {
			className: c()(t, {
				[m.item]: !d,
				[m.brand]: 'brand' === u,
				[m.selected]: null == i && E,
				[m.themed]: 'grey' === u,
				[m.disabled]: null == i && a
			}),
			style: this.getStyle(),
			role: 'tab',
			'aria-selected': E,
			'aria-controls': E ? S(''.concat(n)) : void 0,
			'aria-disabled': a,
			tabIndex: E ? 0 : -1,
			onMouseEnter: null != i ? this.handleMouseOver : void 0,
			onClick: this.handleClick,
			onMouseLeave: null != i ? this.handleMouseOut : void 0,
			onMouseUp: null != i ? this.handleMouseUp : void 0,
			onMouseDown: this.handleMouseDown,
			onContextMenu: s,
			'aria-label': _,
			ref: l,
			children: e
		});
	}
	constructor(...e) {
		super(...e),
			I(this, 'state', {
				hover: !1,
				active: !1
			}),
			I(this, 'handleClick', (e) => {
				let { disabled: t, onClick: n, id: r, onItemSelect: i } = this.props;
				if (!t) null != n ? n(e) : null != i && i(r);
			}),
			I(this, 'handleMouseDown', () => {
				let { color: e } = this.props;
				null != e && this.setState({ active: !0 });
			}),
			I(this, 'handleMouseUp', () => {
				this.setState({ active: !1 });
			}),
			I(this, 'handleMouseOver', () => {
				this.setState({ hover: !0 });
			}),
			I(this, 'handleMouseOut', () => {
				this.setState({
					hover: !1,
					active: !1
				});
			});
	}
}
I(N, 'defaultProps', {
	disabled: !1,
	look: 'grey',
	disableItemStyles: !1
});
class v extends (a = l.Component) {
	render() {
		let { className: e, children: t, type: n = 'side', style: r, 'aria-label': i, orientation: a = 'horizontal' } = this.props;
		return (0, o.jsx)('div', {
			ref: this.tabBarRef,
			className: c()(e, T[n]),
			style: r,
			role: 'tablist',
			'aria-orientation': a,
			onKeyDown: this.handleKeyDown,
			'aria-label': i,
			children: l.Children.map(t, this.renderChildren)
		});
	}
	constructor(...e) {
		super(...e),
			I(this, 'tabBarRef', l.createRef()),
			I(
				this,
				'focusManager',
				(0, d.E)({
					getFocusableElements: () => {
						let e = this.tabBarRef.current;
						return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : [];
					},
					getActiveElement: () => {
						var e;
						return null === (e = this.tabBarRef.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement;
					}
				})
			),
			I(this, 'renderChildren', (e) => {
				let { selectedItem: t, onItemSelect: n, type: r = 'side', look: i = 'grey' } = this.props;
				return l.isValidElement(e)
					? l.cloneElement(e, {
							selectedItem: t,
							onItemSelect: n,
							itemType: r,
							look: i
						})
					: null;
			}),
			I(this, 'getNodeForKeydownEvent', async (e) => {
				let { orientation: t = 'horizontal' } = this.props,
					n = 'vertical' === t ? p.yXg.ARROW_UP : p.yXg.ARROW_LEFT,
					r = 'vertical' === t ? p.yXg.ARROW_DOWN : p.yXg.ARROW_RIGHT;
				switch (e.which) {
					case n:
						return this.focusManager.getPreviousFocusableElement();
					case r:
						return this.focusManager.getNextFocusableElement();
					case p.yXg.HOME:
						return this.focusManager.getFirstFocusableElement();
					case p.yXg.END:
						return this.focusManager.getLastFocusableElement();
				}
				return null;
			}),
			I(this, 'handleKeyDown', async (e) => {
				let t = await this.getNodeForKeydownEvent(e);
				null != t && (e.preventDefault(), t.focus());
			});
	}
}
I(v, 'Header', function (e) {
	let { className: t, onClick: n, children: r, 'aria-expanded': i, 'aria-controls': a } = e;
	return (0, o.jsx)(f.P, {
		tabIndex: null == n ? -1 : 0,
		className: c()(m.header, t),
		onClick: n,
		'aria-expanded': i,
		'aria-controls': a,
		focusProps: { offset: { top: -6 } },
		children: (0, o.jsx)(h.x, {
			variant: 'eyebrow',
			color: 'none',
			className: m.headerText,
			children: r
		})
	});
}),
	I(v, 'Item', N),
	I(v, 'Separator', function (e) {
		let { style: t } = e;
		return (0, o.jsx)('div', {
			className: m.separator,
			style: t
		});
	}),
	I(v, 'Panel', g);
