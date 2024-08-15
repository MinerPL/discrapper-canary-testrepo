s(653041), s(47120), s(724458);
var n,
	l = s(735250),
	a = s(470079),
	i = s(120356),
	r = s.n(i),
	o = s(442837),
	d = s(481060),
	c = s(607070),
	u = s(251625),
	h = s(226951),
	m = s(981631),
	g = s(689938),
	E = s(449730);
function T(e, t, s) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = s),
		e
	);
}
class p extends (n = a.Component) {
	getSelectedSection(e) {
		let { selectedSection: t } = this.state;
		if (null != t) return t;
		for (let t = 0; t < e.length; t++) if (e[t].length > 0) return t;
		return 0;
	}
	componentDidMount() {
		this.focus();
	}
	render() {
		let { position: e } = this.props,
			t = this.getRows(),
			s = [];
		if (this.isEmpty()) s.push(1);
		else for (let e of t) s.push(e.length);
		return (0, l.jsxs)(d.Dialog, {
			className: r()(
				E.container,
				(function (e) {
					if ('bottom' === e) return E.positionBottom;
					return E.positionTop;
				})(e)
			),
			'aria-label': this.props['aria-label'],
			children: [
				(0, l.jsx)('div', { className: E.autocompleteShadow }),
				(0, l.jsx)('div', {
					className: E.autocompleteArrowWrapper,
					children: (0, l.jsx)('div', { className: E.autocompleteArrow })
				}),
				(0, l.jsxs)('header', {
					className: E.header,
					children: [
						(0, l.jsx)('div', { className: E.autocompleteHeaderBackground }),
						(0, l.jsx)('div', {
							className: E.headerText,
							children: this.props.label
						}),
						(0, l.jsx)('input', {
							type: 'text',
							className: E.input,
							placeholder: this.props.placeholder,
							ref: this.inputRef,
							onChange: this.handleChange,
							onKeyDown: this.handleKeyDown
						})
					]
				}),
				(0, l.jsx)('section', {
					className: E.sectionTag,
					children: (0, l.jsx)(d.List, {
						className: E.autocompleteScroller,
						fade: !0,
						sections: s,
						sectionHeight: this.getSectionHeight,
						rowHeight: 40,
						renderRow: this.renderRow,
						renderSection: this.renderSection
					})
				})
			]
		});
	}
	focus() {
		null != this.inputRef.current && this.inputRef.current.focus();
	}
	constructor(...e) {
		super(...e),
			T(this, 'inputRef', a.createRef()),
			T(this, 'state', {
				query: null,
				selectedSection: null,
				selectedRow: 0
			}),
			T(
				this,
				'memoizedGetRows',
				(0, u.oH)((e, t, s) => {
					let n = RegExp('^'.concat(h.Z.escape(null != e ? e.trim() : '')), 'i'),
						l = (e) => n.test(e);
					return s.map((e, s) => t(l, s));
				})
			),
			T(this, 'getRows', () => {
				let { onFilterResults: e, sections: t } = this.props,
					{ query: s } = this.state;
				return this.memoizedGetRows(s, e, t);
			}),
			T(this, 'handleChange', (e) => {
				var t, s;
				let n = e.target.value;
				null === (t = (s = this.props).onQueryChange) || void 0 === t || t.call(s, n),
					this.setState({
						query: n,
						selectedSection: null,
						selectedRow: 0
					});
			}),
			T(this, 'handleMouseEnter', (e, t) => {
				this.setState({
					selectedSection: e,
					selectedRow: t
				});
			}),
			T(this, 'handleClick', (e, t) => {
				let s = this.getRows();
				this.props.onSelect(s[e][t], e), this.props.onClose();
			}),
			T(this, 'handleKeyDown', (e) => {
				let { keyboardModeEnabled: t } = this.props,
					{ selectedRow: s } = this.state,
					n = this.getRows(),
					l = this.getSelectedSection(n);
				switch (e.keyCode) {
					case m.yXg.TAB:
						if (t) break;
					case m.yXg.ARROW_DOWN:
						e.preventDefault(),
							this.props.sections.length > l &&
								++s >= n[l].length &&
								(++l >= this.props.sections.length && (l = 0), (s = 0)),
							this.setState({
								selectedSection: l,
								selectedRow: s
							});
						break;
					case m.yXg.ARROW_UP:
						e.preventDefault(),
							--s < 0 && (--l < 0 && (l = this.props.sections.length - 1), (s = n[l].length - 1)),
							this.setState({
								selectedSection: l,
								selectedRow: s
							});
						break;
					case m.yXg.ENTER:
						e.preventDefault(),
							this.props.sections.length > l &&
								n[l].length > s &&
								(this.props.onSelect(n[l][s], l), this.props.onClose());
						break;
					case m.yXg.ESCAPE:
						e.preventDefault(), this.props.onSelect(null, null), this.props.onClose();
				}
			}),
			T(this, 'isEmpty', () => 0 === this.getRows().reduce((e, t) => e + t.length, 0)),
			T(this, 'getSectionHeight', (e) => {
				let t = this.props.sections[e];
				return this.isEmpty() || null == t ? 0 : 44;
			}),
			T(this, 'renderSection', (e) => {
				let { section: t } = e,
					s = this.props.sections[t];
				return this.isEmpty() || null == s
					? null
					: (0, l.jsx)(
							'div',
							{
								className: E.section,
								children: s
							},
							t
						);
			}),
			T(this, 'renderRow', (e) => {
				var t;
				let { section: s, row: n } = e,
					{ selectedRow: a } = this.state;
				if (this.isEmpty())
					return (0, l.jsxs)(
						'div',
						{
							className: E.empty,
							children: [
								(0, l.jsx)('p', {
									className: E.noResultsHeader,
									children: g.Z.Messages.AUTOCOMPLETE_NO_RESULTS_HEADER
								}),
								(0, l.jsx)('p', { children: g.Z.Messages.AUTOCOMPLETE_NO_RESULTS_BODY })
							]
						},
						'empty'
					);
				let i = this.getRows(),
					o = this.getSelectedSection(i),
					c = null === (t = i[s]) || void 0 === t ? void 0 : t[n];
				return (0, l.jsx)(
					d.Clickable,
					{
						onClick: this.handleClick.bind(this, s, n),
						onMouseEnter: this.handleMouseEnter.bind(this, s, n),
						className: r()(E.row, { [E.selected]: o === s && a === n }),
						children: (0, l.jsx)('div', {
							className: E.rowInner,
							children: this.props.onRenderResult(c, s)
						})
					},
					''.concat(s, '-').concat(n)
				);
			});
	}
}
T(p, 'defaultProps', { sections: [null] }),
	(t.Z = o.ZP.connectStores([c.Z], () => ({ keyboardModeEnabled: c.Z.keyboardModeEnabled }))(p));
