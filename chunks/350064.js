"use strict";
n.d(t, {
  $: function() {
    return l
  }
});
var i = n(470079),
  r = n(566620),
  s = n(246106),
  o = n(797398),
  a = n(513202);
let l = e => {
  let {
    userActivity: t,
    inActivity: n
  } = (0, s.Z)(e.id), l = a.Z;
  return (0, o.Z)({
    channel: e,
    userActivity: t,
    inActivity: n,
    embeddedActivitiesManager: l
  }), i.useEffect(() => () => {
    (null == t ? void 0 : t.applicationId) != null && (0, r.rp)(e.id, null == t ? void 0 : t.applicationId)
  }, [e.id, null == t ? void 0 : t.applicationId]), {
    isLoading: !n
  }
}