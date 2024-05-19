"use strict";
n.r(t);
var i = n("735250"),
  a = n("470079"),
  l = n("120356"),
  s = n.n(l),
  o = n("442837"),
  r = n("215569"),
  d = n("261435"),
  u = n("237997"),
  c = n("438015"),
  f = n("981631"),
  h = n("69872");
class p extends a.Component {
  render() {
    let {
      keybind: e,
      notifications: t,
      position: n,
      locked: a
    } = this.props;
    if (n === f.OverlayNotificationPositions.DISABLED) return null;
    let l = -1;
    return (0, i.jsx)(r.TransitionGroup, {
      component: "div",
      className: s()(h.container, h[n]),
      children: t.map(t => a && t.status === f.OverlayNotificationStatus.TIMED_OUT ? null : (l += 1, (0, i.jsx)(c.default, {
        index: l,
        zIndex: 100 - l,
        position: n,
        notification: t,
        keybind: e,
        locked: a
      }, t.id)))
    })
  }
}
t.default = o.default.connectStores([d.default, u.default], () => ({
  notifications: d.default.getNotifications(),
  position: u.default.getNotificationPositionMode()
}))(p)