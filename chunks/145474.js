r.d(n, {
  P: function() {
return c;
  }
});
var i = r(735250),
  s = r(470079),
  a = r(442837),
  t = r(481060),
  l = r(352954),
  d = r(441894),
  o = r(314897),
  u = r(689938);

function c(e) {
  let {
userId: n,
channelId: r,
location: c
  } = e, Z = (0, d.J)({
channelId: r,
location: c
  }), m = (0, a.e7)([o.default], () => o.default.getId() === n), f = s.useCallback(() => {
l.Z.openSecureFramesUserVerificationModal(n, r);
  }, [
r,
n
  ]);
  return !Z || m ? null : (0, i.jsx)(t.MenuItem, {
id: 'secure-frames-user-verification',
label: u.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
action: f
  });
}