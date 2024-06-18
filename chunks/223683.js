"use strict";
n.d(t, {
  $U: function() {
    return l
  },
  Tn: function() {
    return a
  },
  dt: function() {
    return d
  },
  xx: function() {
    return u
  }
});
var i = n(392711),
  r = n.n(i),
  s = n(544891),
  o = n(981631);
async function a() {
  return (await s.tn.get(o.ANM.NOTIFICATION_SNAPSHOTS)).body
}
async function l(e) {
  return (await s.tn.post({
    url: o.ANM.NOTIFICATION_SNAPSHOTS,
    body: {
      label: e
    }
  })).body
}
async function u(e) {
  return (await s.tn.post(o.ANM.RESTORE_NOTIFICATION_SNAPSHOT(e))).body
}
async function _(e) {
  return (await s.tn.del(o.ANM.NOTIFICATION_SNAPSHOT(e))).body
}
async function d(e) {
  if (e.length > 0) {
    var t;
    let n = r().sum(e.map(e => e.length)),
      i = null !== (t = r().max(e.map(e => e.length))) && void 0 !== t ? t : 0;
    if (e.length >= 5 || n + i > 1e6) {
      let t = r().sortBy(e, e => new Date(e.recorded_at).getTime());
      await _(t[0].id)
    }
  }
  return l("Backup from ".concat(new Date().toLocaleDateString()))
}