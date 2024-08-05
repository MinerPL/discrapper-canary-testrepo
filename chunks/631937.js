n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(470079),
  a = n(442837),
  s = n(661111),
  l = n(706454),
  r = n(306680),
  o = n(626135),
  c = n(802098),
  u = n(193701),
  d = n(702321),
  h = n(981631);

function p(e) {
  let t = (0, u.Z)(e),
n = (0, a.e7)([l.default], () => l.default.locale),
p = (0, a.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : '', n), [
  t,
  n
]),
m = (0, d.Z)(e),
_ = i.useRef(m ? Date.now() : null),
f = (0, a.e7)([r.ZP], () => r.ZP.getUnreadCount(e), [e]);
  i.useEffect(() => {
_.current = Date.now();
  }, [m]), i.useEffect(() => {
m && null != t && s.Z.fetchChangelog(t, n, !0);
  }, [
t,
n,
m
  ]), i.useEffect(() => {
m && null != p && o.default.track(h.rMx.CHANGE_LOG_OPENED, {
  change_log_id: ''.concat(p.date, ':').concat(p.revision),
  unread_count: f
});
  }, [
m,
p
  ]), i.useEffect(() => {
let e = _.current;
return () => {
  m && null != p && null != e && (o.default.track(h.rMx.CHANGE_LOG_CLOSED, {
    seconds_open: Math.round((Date.now() - e) / 1000),
    change_log_id: ''.concat(p.date, ':').concat(p.revision),
    unread_count: f
  }), _.current = 0);
};
  }, [
m,
p
  ]);
}