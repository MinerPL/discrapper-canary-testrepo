var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(261435),
    c = n(237997),
    d = n(438015),
    u = n(981631),
    h = n(455178);
class p extends r.Component {
    render() {
        let { keybind: e, notifications: t, position: n, locked: r } = this.props;
        if (n === u._vf.DISABLED) return null;
        let s = -1;
        return (0, i.jsx)('div', {
            className: a()(h.container, h[n]),
            children: t.map((t) =>
                r && t.status === u._1z.TIMED_OUT
                    ? null
                    : ((s += 1),
                      (0, i.jsx)(
                          d.Z,
                          {
                              index: s,
                              zIndex: 100 - s,
                              position: n,
                              notification: t,
                              keybind: e,
                              locked: r
                          },
                          t.id
                      ))
            )
        });
    }
}
t.Z = l.ZP.connectStores([o.Z, c.Z], () => ({
    notifications: o.Z.getNotifications(),
    position: c.Z.getNotificationPositionMode()
}))(p);
