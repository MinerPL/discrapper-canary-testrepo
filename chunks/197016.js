"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(685072),
  s = n(287734),
  o = n(67212),
  a = n(158631),
  l = n(871499),
  u = n(689938);

function _(e) {
  let {
    centerButton: t = !1,
    channel: n,
    onClick: _,
    onMouseEnter: d,
    onMouseLeave: c,
    ...E
  } = e, I = t ? l.d : l.Z, T = n.isBroadcastChannel(), h = (0, a.zW)(n.id), {
    Component: S,
    events: f
  } = (0, r.K)();
  return (0, i.jsx)(I, {
    ...E,
    onClick: () => {
      h && (0, o.b_)(), s.default.disconnect(), null == _ || _()
    },
    iconComponent: S,
    onMouseEnter: e => {
      null == d || d(e), f.onMouseEnter()
    },
    onMouseLeave: e => {
      null == c || c(e), f.onMouseLeave()
    },
    label: h ? u.Z.Messages.STOP_BROADCASTING : T ? u.Z.Messages.LEAVE_BROADCAST : u.Z.Messages.DISCONNECT_SELF
  })
}