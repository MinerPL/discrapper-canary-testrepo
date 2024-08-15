n(47120);
var i,
	s = n(735250),
	a = n(470079),
	o = n(120356),
	r = n.n(o),
	l = n(442837),
	c = n(552062),
	d = n(416568),
	u = n(914010),
	h = n(518084),
	p = n(178528),
	f = n(669083),
	_ = n(483962),
	g = n(711553),
	m = n(689938),
	E = n(843156);
function Z(e, t, n) {
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
function I(e) {
	let { closePopout: t } = e;
	return (0, s.jsx)(f.Z, { onClose: t });
}
class S extends (i = a.PureComponent) {
	render() {
		let { selectedGuildId: e, locked: t, contained: n } = this.props,
			i =
				null != e
					? (0, s.jsx)(
							p.Z,
							{
								guildId: e,
								onDragStart: this.onDragStart
							},
							e
						)
					: (0, s.jsx)(g.Z, {
							title: m.Z.Messages.DIRECT_MESSAGES,
							renderSettings: I,
							onDragStart: this.onDragStart,
							children: (0, s.jsx)(_.Z, {})
						}),
			a = n ? 'div' : h.ZP;
		return (0, s.jsxs)(a, {
			className: r()(E.base, { [E.widget]: !n }),
			children: [
				(0, s.jsx)(d.Z, {
					isOverlay: !0,
					disableAppDownload: !0,
					isVisible: !t
				}),
				i
			]
		});
	}
	constructor(...e) {
		super(...e),
			Z(this, 'onDragStart', (e) => {
				let { dragStart: t } = this.props;
				t(c.B.MOVE, e.clientX, e.clientY);
			});
	}
}
Z(S, 'defaultProps', { contained: !1 }),
	(t.Z = l.ZP.connectStores([u.Z], () => ({ selectedGuildId: u.Z.getGuildId() }))(S));
