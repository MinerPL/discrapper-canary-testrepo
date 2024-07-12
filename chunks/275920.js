n.d(t, {
  Z: function() {
return a;
  }
});
var r = n(626135),
  i = n(981631);

function a(e) {
  let {
type: t,
source: n,
userId: a,
applicationId: o,
partyId: s,
messageId: l,
locationObject: u,
analyticsLocations: c
  } = e;
  r.default.track(i.rMx.APPLICATION_OPENED, {
type: t,
source: n,
application_id: o,
party_id: null != s ? s : void 0,
other_user_id: a,
message_id: l,
location: u,
location_stack: c
  });
}