n.d(t, {
	F: function () {
		return f;
	},
	n: function () {
		return m;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(91192),
	l = n(924826),
	u = n(481060),
	c = n(600164),
	d = n(313201),
	_ = n(222943);
function E(e, t, n) {
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
class f extends i.PureComponent {
	render() {
		let { label: e, value: t, renderValue: n, className: i } = this.props;
		return (0, r.jsxs)(c.Z, {
			className: s()(_.quickSelect, i),
			align: c.Z.Align.CENTER,
			children: [
				(0, r.jsx)('div', {
					className: _.quickSelectLabel,
					children: e
				}),
				(0, r.jsxs)(c.Z, {
					align: c.Z.Align.CENTER,
					className: _.quickSelectClick,
					children: [
						(0, r.jsx)('div', {
							className: _.quickSelectValue,
							children: null != n ? n(t) : t.label
						}),
						(0, r.jsx)('div', { className: _.quickSelectArrow })
					]
				})
			]
		});
	}
}
class h extends i.PureComponent {
	render() {
		let { selected: e, renderOption: t, option: n } = this.props;
		return (0, r.jsx)(o.mh, {
			id: n.key,
			children: (i) =>
				(0, r.jsx)(u.Clickable, {
					focusProps: { enabled: !1 },
					className: s()(_.quickSelectPopoutOption, { selected: e }),
					onClick: this.handleClick,
					...i,
					role: 'option',
					children: t(n, e)
				})
		});
	}
	constructor(...e) {
		super(...e),
			E(this, 'handleClick', () => {
				let { option: e, onChange: t } = this.props;
				null == t || t(e);
			});
	}
}
function p(e) {
	let { options: t, value: n, scroller: i, renderOption: a, onChange: c, className: E } = e,
		f = s()(_.quickSelectPopout, E, { [_.quickSelectPopoutScroll]: i }),
		p = t.map((e) => {
			let t = null != n && e.value === n.value,
				i = t ? void 0 : c;
			return (0, r.jsx)(
				h,
				{
					className: _.quickSelectPopoutOption,
					renderOption: a,
					option: e,
					onChange: i,
					selected: t
				},
				e.key || e.value
			);
		}),
		m = (0, d.Dt)(),
		I = (0, l.ZP)({
			id: m,
			isEnabled: !0,
			wrap: !0,
			async scrollToStart() {},
			async scrollToEnd() {}
		}),
		{ ref: T, ...g } = I.containerProps;
	return (
		(0, u.useFocusLock)(T),
		(0, r.jsx)(o.bG, {
			navigator: I,
			children: (0, r.jsx)('div', {
				ref: T,
				className: f,
				...g,
				role: 'listbox',
				children: i
					? (0, r.jsx)(u.Scroller, {
							className: _.quickSelectScroller,
							children: p
						})
					: p
			})
		})
	);
}
class m extends i.PureComponent {
	render() {
		let { label: e, value: t, renderValue: n, className: i, popoutProps: a } = this.props;
		return (0, r.jsx)(u.Popout, {
			...a,
			renderPopout: this.renderPopout,
			children: (a, s) => {
				let { isShown: o } = s;
				return (0, r.jsx)(u.Clickable, {
					...a,
					className: i,
					'aria-haspopup': 'listbox',
					'aria-expanded': o,
					children: (0, r.jsx)(f, {
						label: e,
						value: t,
						renderValue: n
					})
				});
			}
		});
	}
	constructor(...e) {
		super(...e),
			E(this, 'renderPopout', (e) => {
				let { closePopout: t } = e,
					{ options: n, value: i, renderOption: a, popoutClassName: s, scroller: o } = this.props;
				return (0, r.jsx)(p, {
					scroller: !!o,
					className: s,
					options: n,
					value: i,
					renderOption: a,
					onChange: (e) => {
						this.handleChange(e), t();
					}
				});
			}),
			E(this, 'handleChange', (e) => {
				let { onChange: t } = this.props;
				null == t || t(e);
			});
	}
}
