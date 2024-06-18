"use strict";
n.d(t, {
  F: function() {
    return u
  },
  Z: function() {
    return _
  }
}), n(47120);
var i = n(442837),
  r = n(430824),
  s = n(496675),
  o = n(594174),
  a = n(700785),
  l = n(981631);

function u(e, t) {
  let [n, i, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, r.Z, s.Z], _ = i.getGuild(e), d = n.getUser(t);
  return !(null == _ || null == d || d.isNonUserBot() || _.isOwner(d) || a.BT({
    permission: l.Plq.ADMINISTRATOR,
    user: d,
    context: _
  })) && u.canManageUser(l.Plq.MODERATE_MEMBERS, d, _)
}

function _(e, t) {
  return (0, i.e7)([o.default, r.Z, s.Z], () => u(e, t, [o.default, r.Z, s.Z]), [e, t])
}