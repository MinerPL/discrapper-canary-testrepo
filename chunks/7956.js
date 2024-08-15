n.d(t, {
  i: function() {
return a;
  }
});
var r = n(804739),
  i = n(981631);

function a(e, t, n) {
  let a = t.getState(e.id, e.branchId),
s = n.getQueuePosition(e.id, e.branchId),
o = n.paused;
  if (null != a) {
if (null == s || -1 === s)
  switch (a.type) {
    case i.vxO.INSTALLING:
      return i.apO.INSTALL;
    case i.vxO.UPDATING:
    case i.vxO.UPDATE_REQUIRED:
      return i.apO.UPDATE;
  }
switch (a.type) {
  case i.vxO.INSTALLING:
  case i.vxO.UPDATING:
  case i.vxO.UPDATE_REQUIRED:
  case i.vxO.REPAIRING:
    if (s > 0)
      return i.apO.MOVE_UP;
    if (o)
      return i.apO.RESUME;
    return i.apO.PAUSE;
  case i.vxO.UP_TO_DATE:
    return i.apO.PLAY;
  case i.vxO.UNINSTALLING:
    return null;
}
  }
  return null != s && s > 0 ? i.apO.MOVE_UP : (0, r.Q)() ? i.apO.INSTALL : null;
}