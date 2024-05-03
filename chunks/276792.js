"use strict";
n.r(t), n.d(t, {
  adaptAnnouncementModalVariant1: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var s = n("524437"),
  l = n("740111"),
  i = n("481060"),
  r = n("963249"),
  o = n("703656"),
  u = n("976644"),
  d = n("626135"),
  c = n("63063"),
  f = n("823188"),
  E = n("474936"),
  h = n("981631"),
  _ = n("689938"),
  C = n("731396"),
  S = n("74316");

function m(e) {
  var t, n;
  let {
    content: m,
    renderModalProps: p,
    analyticsLocations: I,
    analyticsLocation: T,
    isLightTheme: g
  } = e, A = "AnnouncementModalVariant1_".concat(s.DismissibleContent[Number(m.dismissKey)]), {
    onClose: N
  } = p, v = null != m.button && "" !== m.button.copy ? m.button.copy : _.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, R = (null === (t = m.button) || void 0 === t ? void 0 : t.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", L = (null === (n = m.button) || void 0 === n ? void 0 : n.buttonAction) === l.ButtonAction.OPEN_MARKETING_PAGE ? () => {
    (0, o.transitionTo)(h.Routes.APPLICATION_STORE), N()
  } : () => (0, r.default)({
    subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: I,
    analyticsObject: {
      ...T,
      object: h.AnalyticsObjects.BUTTON_CTA,
      objectType: h.AnalyticsObjectTypes.TIER_2
    },
    onClose: e => {
      e && N()
    }
  }), O = "" !== m.helpArticleId ? () => (0, a.jsx)(i.Anchor, {
    className: C.termsApplyAnchor,
    href: c.default.getArticleURL(m.helpArticleId),
    children: (0, a.jsx)(i.Heading, {
      variant: "heading-md/normal",
      className: C.termsApplyBodyText,
      children: _.default.Messages.BOGO_TERMS_APPLY
    })
  }) : void 0, M = {
    type: "video",
    src: g ? m.heroArtVideoLinkLightTheme : m.videoLink
  };
  ("" !== m.heroArtImageLinkDarkTheme || "" !== m.heroArtImageLinkLightTheme) && (M = {
    type: "image",
    src: g ? m.heroArtImageLinkLightTheme : m.heroArtImageLinkDarkTheme
  });
  let P = g ? f.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : f.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL,
    y = "" !== m.modalTopPill ? () => (0, a.jsx)(f.PremiumPillWithSparkles, {
      text: m.modalTopPill,
      className: C.modalTopPill,
      colorOptions: P
    }) : void 0;
  return {
    renderModalProps: p,
    header: m.header,
    modalTopExtra: y,
    subHeader: m.subheader,
    subHeaderExtra: O,
    heroArt: M,
    featureCards: m.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: g ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : void 0
    })),
    changeLogId: A,
    button: () => {
      let e = Date.now();
      return (0, a.jsxs)(u.default, {
        className: C.buttonWide,
        innerClassName: C.innerButton,
        color: i.Button.Colors.GREEN,
        size: i.Button.Sizes.SMALL,
        onClick: () => {
          d.default.track(h.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: A,
            cta_type: R,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: A
          }), L()
        },
        children: [(0, a.jsx)("img", {
          alt: "",
          className: C.nitroIconSubHeader,
          src: S
        }), v]
      })
    },
    modalDismissibleContent: "" !== m.dismissKey ? Number(m.dismissKey) : void 0
  }
}