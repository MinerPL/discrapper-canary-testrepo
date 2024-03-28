"use strict";
t.r(n), t.d(n, {
  PlayStationLinkDiscordConsent: function() {
    return d
  }
});
var i = t("735250");
t("470079");
var o = t("421580"),
  s = t("159277"),
  a = t("585183"),
  r = t("981631"),
  l = t("927923");

function d(e) {
  let {
    platformType: n,
    authToken: t,
    onContinue: d,
    onError: u,
    onClose: C
  } = e, c = n === r.PlatformTypes.PLAYSTATION_STAGING ? s.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID : s.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, T = n === r.PlatformTypes.PLAYSTATION_STAGING ? o.ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING : o.ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  return (0, i.jsx)(a.TwoWayLinkDiscordConsent, {
    platformType: n,
    clientId: c,
    scopes: l.PLAYSTATION_CLIENT_SCOPES,
    authToken: t,
    onContinue: d,
    onError: u,
    onClose: C,
    redirectUri: T
  })
}