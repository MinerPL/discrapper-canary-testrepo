"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(381499),
  r = n(601992),
  s = n(675478),
  o = n(885110),
  a = n(626135),
  l = n(981631);
async function u(e, t, n, u) {
  null == t && (t = o.Z.getStatus()), await s.hW.updateAsync("status", t => {
    t.status = i.Gm.create({
      value: e
    }), t.statusExpiresAtMs = null != u ? "".concat(Date.now() + u) : "0"
  }, s.fy.INFREQUENT_USER_ACTION);
  let _ = {
    next_status: e,
    prev_status: t,
    ...r.Z.getGlobalStats()
  };
  null != n && (_ = {
    ..._,
    ...n,
    expire_duration_minutes: null != u ? u / 1e3 : null
  }), a.default.track(l.rMx.USER_STATUS_UPDATED, _)
}