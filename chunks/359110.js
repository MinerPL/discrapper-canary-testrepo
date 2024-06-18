"use strict";
n.d(t, {
  Kh: function() {
    return _
  },
  ad: function() {
    return d
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(493683),
  o = n(727429),
  a = n(592125),
  l = n(703656),
  u = n(981631);

function _(e, t, n) {
  let i = a.Z.getChannel(e);
  if (null == i) return;
  let r = (0, o.e)(i);
  s.Z.preload(i.guild_id, i.id), (0, l.uL)(u.Z5c.CHANNEL(r, i.id), t, n)
}

function d(e, t, n) {
  r()(null != e.parent_id, "Thread must have a parent ID.");
  let i = (0, o.e)(e);
  (0, l.uL)(u.Z5c.CHANNEL(i, e.id), n, t)
}