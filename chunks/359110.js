n.d(t, {
  Kh: function() {
return c;
  },
  ad: function() {
return d;
  }
});
var r = n(512722),
  i = n.n(r),
  a = n(493683),
  o = n(727429),
  s = n(592125),
  l = n(703656),
  u = n(981631);

function c(e, t) {
  let n = s.Z.getChannel(e);
  if (null == n)
return;
  let r = (0, o.e)(n);
  a.Z.preload(n.guild_id, n.id), (0, l.uL)(u.Z5c.CHANNEL(r, n.id), t);
}

function d(e, t) {
  i()(null != e.parent_id, 'Thread must have a parent ID.');
  let n = (0, o.e)(e);
  (0, l.uL)(u.Z5c.CHANNEL(n, e.id), t);
}