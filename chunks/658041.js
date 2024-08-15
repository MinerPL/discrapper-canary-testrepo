t.d(n, {
  M: function() {
return a;
  }
});
var l = t(913527),
  i = t.n(l),
  u = t(709054),
  r = t(765305);

function a(e, n, t, l) {
  let a = i()(),
o = new Date(e.scheduled_start_time).getTime(),
s = {
  start: o - r.VF,
  end: o
};
  if (a.isBetween(s.start, s.end)) {
if (null != n) {
  let e = i()(n),
    t = e.isBetween(s.start, s.end),
    u = e.isBetween(i()(o).subtract(r.zV, 'days'), o);
  return t || u && !l ? void 0 : r.X_.EVENT_STARTING_SOON;
}
return r.X_.EVENT_STARTING_SOON;
  }
  let d = u.default.extractTimestamp(e.id),
c = Math.min((null != t ? t : d) + r.Fc, o);
  if (a.isBetween(d, c) && null == n && !l)
return r.X_.NEW_EVENT;
}