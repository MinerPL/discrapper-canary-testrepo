"use strict";
t.r(a);
var s = t("735250"),
  i = t("470079"),
  n = t("481060"),
  l = t("230711"),
  o = t("197115"),
  r = t("626135"),
  c = t("981631"),
  d = t("474936"),
  E = t("689938"),
  M = t("827025");
a.default = e => {
  let {
    transitionState: a,
    onClose: t
  } = e;
  return i.useEffect(() => {
    r.default.track(c.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: d.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_MODAL
    })
  }, []), (0, s.jsxs)(n.ModalRoot, {
    transitionState: a,
    size: n.ModalSize.SMALL,
    "aria-label": "",
    children: [(0, s.jsxs)(n.ModalContent, {
      className: M.content,
      children: [(0, s.jsx)("div", {
        role: "image",
        className: M.image
      }), (0, s.jsx)(n.Heading, {
        variant: "heading-xl/semibold",
        className: M.header,
        children: E.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_HEADER
      }), (0, s.jsx)(n.Text, {
        variant: "text-md/normal",
        children: E.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL_MODAL_BLURB.format({
          onLearnMore: () => {
            t(), l.default.open(c.UserSettingsSections.PREMIUM)
          }
        })
      })]
    }), (0, s.jsx)(n.ModalFooter, {
      children: (0, s.jsx)(o.default, {
        onClick: t,
        buttonText: "Get Nitro",
        subscriptionTier: d.PremiumSubscriptionSKUs.TIER_2,
        premiumModalAnalyticsLocation: {
          page: c.AnalyticsPages.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL
        }
      })
    }), (0, s.jsx)(n.ModalCloseButton, {
      className: M.closeButton,
      onClick: t
    })]
  })
}