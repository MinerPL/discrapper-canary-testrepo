var i = n(735250),
	s = n(470079),
	a = n(120356),
	o = n.n(a),
	r = n(442837),
	l = n(215569),
	c = n(261435),
	d = n(237997),
	u = n(438015),
	h = n(981631),
	p = n(459742);
class f extends s.Component {
	render() {
		let { keybind: e, notifications: t, position: n, locked: s } = this.props;
		if (n === h._vf.DISABLED) return null;
		let a = -1;
		return (0, i.jsx)(l.W, {
			component: 'div',
			className: o()(p.container, p[n]),
			children: t.map((t) =>
				s && t.status === h._1z.TIMED_OUT
					? null
					: ((a += 1),
						(0, i.jsx)(
							u.Z,
							{
								index: a,
								zIndex: 100 - a,
								position: n,
								notification: t,
								keybind: e,
								locked: s
							},
							t.id
						))
			)
		});
	}
}
t.Z = r.ZP.connectStores([c.Z, d.Z], () => ({
	notifications: c.Z.getNotifications(),
	position: d.Z.getNotificationPositionMode()
}))(f);
