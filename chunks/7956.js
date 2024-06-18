"use strict";
n.d(t, {
  i: function() {
    return s
  }
});
var i = n(804739),
  r = n(981631);

function s(e, t, n) {
  let s = t.getState(e.id, e.branchId),
    o = n.getQueuePosition(e.id, e.branchId),
    a = n.paused;
  if (null != s) {
    if (null == o || -1 === o) switch (s.type) {
      case r.vxO.INSTALLING:
        return r.apO.INSTALL;
      case r.vxO.UPDATING:
      case r.vxO.UPDATE_REQUIRED:
        return r.apO.UPDATE
    }
    switch (s.type) {
      case r.vxO.INSTALLING:
      case r.vxO.UPDATING:
      case r.vxO.UPDATE_REQUIRED:
      case r.vxO.REPAIRING:
        if (o > 0) return r.apO.MOVE_UP;
        if (a) return r.apO.RESUME;
        return r.apO.PAUSE;
      case r.vxO.UP_TO_DATE:
        return r.apO.PLAY;
      case r.vxO.UNINSTALLING:
        return null
    }
  }
  return null != o && o > 0 ? r.apO.MOVE_UP : (0, i.Q)() ? r.apO.INSTALL : null
}