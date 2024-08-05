n.d(t, {
  $U: function() {
return l;
  },
  KP: function() {
return d;
  },
  Tn: function() {
return o;
  },
  dt: function() {
return _;
  },
  xx: function() {
return u;
  }
});
var r = n(392711),
  i = n.n(r),
  a = n(544891),
  s = n(981631);
async function o() {
  return (await a.tn.get(s.ANM.NOTIFICATION_SNAPSHOTS)).body;
}
async function l(e) {
  return (await a.tn.post({
url: s.ANM.NOTIFICATION_SNAPSHOTS,
body: {
  label: e
}
  })).body;
}
async function u(e) {
  return (await a.tn.post(s.ANM.RESTORE_NOTIFICATION_SNAPSHOT(e))).body;
}
async function c(e) {
  return (await a.tn.del(s.ANM.NOTIFICATION_SNAPSHOT(e))).body;
}
async function d() {
  let e = await o(),
t = i().sortBy(e, e => new Date(e.recorded_at).getTime());
  0 !== t.length && await u(t[t.length - 1].id);
}
async function _(e) {
  if (e.length > 0) {
var t;
let n = i().sum(e.map(e => e.length)),
  r = null !== (t = i().max(e.map(e => e.length))) && void 0 !== t ? t : 0;
if (e.length >= 5 || n + r > 1000000) {
  let t = i().sortBy(e, e => new Date(e.recorded_at).getTime());
  await c(t[0].id);
}
  }
  return l('Backup from '.concat(new Date().toLocaleDateString()));
}