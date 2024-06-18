"use strict";
n.d(t, {
  _T: function() {
    return d
  },
  y: function() {
    return u
  }
});
var i = n(442837),
  r = n(592125),
  s = n(271383),
  o = n(699516),
  a = n(51144),
  l = n(689938);

function u(e, t, n) {
  if (null == n) return null;
  if (null != e) return s.ZP.getNick(e, n.id);
  if (null != t) {
    let e = r.Z.getChannel(t);
    if (null == e ? void 0 : e.isPrivate()) return o.Z.getNickname(n.id)
  }
  return null
}

function _(e, t, n) {
  var i;
  return null == n ? l.Z.Messages.UNKNOWN_USER_MENTION_PLACEHOLDER : null !== (i = u(e, t, n)) && void 0 !== i ? i : a.ZP.getName(n)
}

function d(e, t, n) {
  return (0, i.e7)([s.ZP, r.Z, o.Z], () => _(e, t, n))
}
t.ZP = {
  getNickname: u,
  getName: _,
  useName: d
}