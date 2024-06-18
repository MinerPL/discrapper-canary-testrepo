"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(626135),
  r = n(981631);

function s(e) {
  let {
    type: t,
    source: n,
    userId: s,
    applicationId: o,
    partyId: a,
    messageId: l,
    locationObject: u,
    analyticsLocations: _
  } = e;
  i.default.track(r.rMx.APPLICATION_OPENED, {
    type: t,
    source: n,
    application_id: o,
    party_id: null != a ? a : void 0,
    other_user_id: s,
    message_id: l,
    location: u,
    location_stack: _
  })
}