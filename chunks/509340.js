"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("735250");
n("470079");
var o = n("159277"),
  i = n("585183"),
  r = n("981631"),
  a = n("927923");

function l(e) {
  let {
    authToken: t,
    onContinue: n,
    onError: l,
    onClose: d
  } = e;
  return (0, s.jsx)(i.TwoWayLinkDiscordConsent, {
    platformType: r.PlatformTypes.XBOX,
    clientId: o.ConsoleOAuthApplications.XBOX_APPLICATION_ID,
    scopes: a.XBOX_CLIENT_SCOPES,
    authToken: t,
    onContinue: n,
    onError: l,
    onClose: d
  })
}