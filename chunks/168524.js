n.d(t, {
  Z: function() {
return a;
  }
});
var r = n(492423),
  i = n(774073);

function a(e) {
  let {
applicationId: t
  } = e, n = (0, i.ZP)(e);
  return n.shouldOpenGameProfile && null != t ? () => {
r.Z.openGameProfileModal({
  ...e,
  applicationId: t,
  gameProfileModalChecks: n
});
  } : void 0;
}