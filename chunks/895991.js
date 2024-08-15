n.d(t, {
	Z: function () {
		return C;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(481060),
	o = n(570140),
	c = n(150063),
	d = n(274616),
	u = n(827837),
	_ = n(410575),
	E = n(3570),
	h = n(237919),
	m = n(957657),
	I = n(665307),
	g = n(530151),
	p = n(981631),
	T = n(186901),
	S = n(233255);
function f(e, t, n) {
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
class C extends a.PureComponent {
	componentDidMount() {
		c.Y(p.Z5c.APPLICATION_LIBRARY),
			(0, E.T)(T.jE.LIBRARY),
			o.Z.wait(() => (0, d.o)()),
			(0, u.N)(),
			null != this._scrollToOnMount &&
				null != this._scrollerRef.current &&
				this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
	}
	renderToolbar() {
		return (0, i.jsx)(h.Z, {});
	}
	render() {
		let { includeUpdatesInScroller: e } = this.state,
			t = (0, i.jsx)('div', {
				children: (0, i.jsx)(_.Z, {
					section: p.jXE.LIBRARY_INSTALL_MODULE,
					children: (0, i.jsx)(g.Z, {
						onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
					})
				})
			});
		return (0, i.jsxs)(a.Fragment, {
			children: [
				(0, i.jsx)(m.Z, {
					currentRoute: p.Z5c.APPLICATION_LIBRARY,
					renderToolbar: this.renderToolbar
				}),
				e ? null : t,
				(0, i.jsxs)(l.AdvancedScrollerAuto, {
					className: r()(S.container, S.scroller),
					ref: this._scrollerRef,
					children: [
						e ? t : null,
						(0, i.jsx)(_.Z, {
							section: p.jXE.LIBRARY_APPLICATION_LIST,
							children: (0, i.jsx)(I.Z, {
								stickyHeader: !e,
								scrollToRow: this.scrollToRow
							})
						})
					]
				})
			]
		});
	}
	constructor(...e) {
		super(...e),
			f(this, '_scrollerRef', a.createRef()),
			f(this, '_scrollToOnMount', void 0),
			f(this, '_scrollToPadding', 0),
			f(this, 'state', { includeUpdatesInScroller: !1 }),
			f(this, 'handleHeightTallerThanHalfViewportChange', (e) => {
				this.setState({ includeUpdatesInScroller: e });
			}),
			f(this, 'scrollToRow', (e, t) => {
				let n = this._scrollerRef.current;
				null != n
					? (e.focus(),
						n.scrollIntoViewRect({
							start: t,
							end: t
						}),
						(this._scrollToOnMount = null))
					: ((this._scrollToOnMount = e), (this._scrollToPadding = t));
			});
	}
}
