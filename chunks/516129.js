"use strict";
n.r(t), n.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("105110"),
  l = n("77078"),
  i = n("649844"),
  r = n("393414"),
  o = n("181114"),
  u = n("599110"),
  d = n("701909"),
  c = n("646718"),
  f = n("49111"),
  E = n("782340"),
  h = n("196003"),
  _ = n("121432");

function C(e) {
  var t, n;
  let {
    content: C,
    renderModalProps: S,
    analyticsLocations: I,
    analyticsLocation: m,
    isLightTheme: p
  } = e, T = "AnnouncementModalVariant1", {
    onClose: g
  } = S, A = null != C.button && "" !== C.button.copy ? C.button.copy : E.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, N = (null === (t = C.button) || void 0 === t ? void 0 : t.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", R = (null === (n = C.button) || void 0 === n ? void 0 : n.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, r.transitionTo)(f.Routes.APPLICATION_STORE), g()
  } : () => (0, i.default)({
    subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: I,
    analyticsObject: {
      ...m,
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
  }) : void 0, v = {
    type: "video",
    src: p ? C.heroArtVideoLinkLightTheme : C.videoLink
  };
  return ("" !== C.heroArtImageLinkDarkTheme || "" !== C.heroArtImageLinkLightTheme) && (v = {
    type: "image",
    src: p ? C.heroArtImageLinkLightTheme : C.heroArtImageLinkDarkTheme
  }), {
    renderModalProps: S,
    header: C.header,
    subHeader: C.subheader,
    subHeaderExtra: O,
    heroArt: v,
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
          }), R()
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