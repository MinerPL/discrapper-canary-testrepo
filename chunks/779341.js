"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var o = n("735250");
n("470079");
var s = n("585183"),
  i = n("728151"),
  r = n("981631");

function a(e) {
  let {
    authToken: t,
    onContinue: n,
    onError: a,
    onClose: l
  } = e;
  return (0, o.jsx)(s.TwoWayLinkDiscordConsent, {
    platformType: r.PlatformTypes.CRUNCHYROLL,
    clientId: i.CRUNCHYROLL_CLIENT_ID,
    scopes: i.CRUNCHYROLL_CLIENT_SCOPES,
    authToken: t,
    onContinue: n,
    onError: a,
    onClose: l
  })
}