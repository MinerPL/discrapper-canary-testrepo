"use strict";
n.r(t), n.d(t, {
  extractAnnouncementModalContent: function() {
    return _
  },
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("849266"),
  l = n("258864"),
  i = n("755854"),
  r = n("997289"),
  o = n("841098"),
  u = n("812204"),
  d = n("685665"),
  c = n("10641"),
  f = n("286235"),
  E = n("516129"),
  h = n("702542");

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