t.d(n, {
  E: function() {
return C;
  }
});
var o = t(735250);
t(470079);
var i = t(421580),
  s = t(159277),
  r = t(585183),
  l = t(981631),
  c = t(927923);

function C(e) {
  let {
platformType: n,
authToken: t,
onContinue: C,
onError: a,
onClose: d
  } = e, u = n === l.ABu.PLAYSTATION_STAGING ? s.t.PLAYSTATION_STAGING_APPLICATION_ID : s.t.PLAYSTATION_APPLICATION_ID, _ = n === l.ABu.PLAYSTATION_STAGING ? i.x.PLAYSTATION_STAGING : i.x.PLAYSTATION;
  return (0, o.jsx)(r.h, {
platformType: n,
clientId: u,
scopes: c.KL,
authToken: t,
onContinue: C,
onError: a,
onClose: d,
redirectUri: _
  });
}