n.d(t, {
  Z: function() {
return a;
  }
});
var r = n(470079),
  i = n(566620);

function a(e) {
  let {
channel: t,
userActivity: n,
inActivity: a,
embeddedActivitiesManager: s
  } = e;
  r.useEffect(() => {
!a && (0, i.oy)(t.id);
  }, [
null == n ? void 0 : n.applicationId,
t.id,
a,
s
  ]);
}