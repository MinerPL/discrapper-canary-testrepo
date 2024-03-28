"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  },
  extractAnnouncementModalContent: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var s = n("578012"),
  l = n("8853"),
  i = n("663002"),
  r = n("2052"),
  o = n("410030"),
  u = n("100527"),
  d = n("906732"),
  c = n("605236"),
  f = n("960048"),
  E = n("276792"),
  h = n("290347");

function _(e) {
  let {
    content: t,
    isPreview: n
  } = e, a = l.PremiumMarketingComponentProperties.fromBinary((0, s.base64decode)(t));
  return "announcementModalVariant1" !== a.properties.oneofKind ? null : 0 === a.properties.announcementModalVariant1.dismissKey.trim().length || !n && (0, c.isDismissibleContentDismissed)(Number(a.properties.announcementModalVariant1.dismissKey)) ? null : (n && (a.properties.announcementModalVariant1.dismissKey = ""), a)
}

function C(e) {
  let {
    renderModalProps: t,
    properties: n
  } = e, {
    location: s
  } = (0, r.useAnalyticsContext)(), {
    analyticsLocations: l
  } = (0, d.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), c = (0, o.default)(), _ = (0, i.isThemeLight)(c);
  if ("announcementModalVariant1" === n.properties.oneofKind) {
    let e = (0, E.adaptAnnouncementModalVariant1)({
      content: n.properties.announcementModalVariant1,
      renderModalProps: t,
      analyticsLocations: l,
      analyticsLocation: s,
      isLightTheme: _
    });
    return (0, a.jsx)(h.default, {
      ...e
    })
  }
  return f.default.captureMessage("Property type ".concat(n.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal")), null
}