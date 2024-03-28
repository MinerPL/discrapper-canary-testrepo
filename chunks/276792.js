"use strict";
n.r(t), n.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var s = n("740111"),
  l = n("481060"),
  i = n("963249"),
  r = n("703656"),
  o = n("976644"),
  u = n("626135"),
  d = n("63063"),
  c = n("474936"),
  f = n("981631"),
  E = n("689938"),
  h = n("464765"),
  _ = n("74316");

function C(e) {
  var t, n;
  let {
    content: C,
    renderModalProps: m,
    analyticsLocations: S,
    analyticsLocation: I,
    isLightTheme: p
  } = e, T = "AnnouncementModalVariant1", {
    onClose: g
  } = m, A = null != C.button && "" !== C.button.copy ? C.button.copy : E.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, N = (null === (t = C.button) || void 0 === t ? void 0 : t.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", v = (null === (n = C.button) || void 0 === n ? void 0 : n.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, r.transitionTo)(f.Routes.APPLICATION_STORE), g()
  } : () => (0, i.default)({
    subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: S,
    analyticsObject: {
      ...I,
      object: f.AnalyticsObjects.BUTTON_CTA,
      objectType: f.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && g()
    }
  }), O = "" !== C.helpArticleId ? () => (0, a.jsx)(l.Anchor, {
    className: h.termsApplyAnchor,
    href: d.default.getArticleURL(C.helpArticleId),
    children: (0, a.jsx)(l.Heading, {
      variant: "heading-md/normal",
      className: h.termsApplyBodyText,
      children: E.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, R = {
    type: "video",
    src: p ? C.heroArtVideoLinkLightTheme : C.videoLink
  };
  return ("" !== C.heroArtImageLinkDarkTheme || "" !== C.heroArtImageLinkLightTheme) && (R = {
    type: "image",
    src: p ? C.heroArtImageLinkLightTheme : C.heroArtImageLinkDarkTheme
  }), {
    renderModalProps: m,
    header: C.header,
    subHeader: C.subheader,
    subHeaderExtra: O,
    heroArt: R,
    featureCards: C.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: p ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: T,
    button: () => {
      let e = Date.now();
      return (0, a.jsxs)(o.default, {
        className: h.buttonWide,
        innerClassName: h.innerButton,
        color: l.Button.Colors.GREEN,
        size: l.Button.Sizes.SMALL,
        onClick: () => {
          u.default.track(f.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: T,
            cta_type: N,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: T
          }), v()
        },
        children: [(0, a.jsx)("img", {
          alt: "",
          className: h.nitroIconSubHeader,
          src: _
        }), A]
      })
    },
    modalDismissibleContent: "" !== C.dismissKey ? Number(C.dismissKey) : void 0
  }
}