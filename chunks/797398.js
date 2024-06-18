"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(470079),
  r = n(566620);

function s(e) {
  let {
    channel: t,
    userActivity: n,
    inActivity: s,
    embeddedActivitiesManager: o
  } = e;
  i.useEffect(() => {
    !s && (0, r.oy)(t.id)
  }, [null == n ? void 0 : n.applicationId, t.id, s, o])
}