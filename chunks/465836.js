"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var i = a("735250");
a("470079");
var n = a("703558"),
  l = a("403182"),
  r = a("127654"),
  s = a("98278"),
  o = a("790527"),
  _ = a("474936"),
  u = a("981631"),
  E = a("689938");

function d(e) {
  var t;
  let {
    channel: d,
    onClose: f,
    content: p,
    ...A
  } = e;

  function L() {
    f(), (0, s.navigateToPremiumMarketingPage)(!0)
  }
  return (0, i.jsx)(o.default, {
    artURL: a("990158"),
    type: _.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
    title: E.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_HEADER,
    body: E.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_BODY.format({
      maxLength: u.MAX_MESSAGE_LENGTH,
      onLearnMore: L
    }),
    context: E.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_CONTEXT.format({
      maxLength: u.MAX_MESSAGE_LENGTH
    }),
    glowUp: E.default.Messages.PREMIUM_MESSAGE_LENGTH_ROADBLOCK_MODAL_GLOW_UP.format({
      onLearnMore: L
    }),
    analyticsSource: {
      page: (null == (t = d) ? void 0 : t.getGuildId()) != null ? u.AnalyticsPages.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? u.AnalyticsPages.DM_CHANNEL : null
    },
    analyticsLocation: {
      section: u.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
      object: u.AnalyticsObjects.BUTTON_CTA
    },
    onClose: f,
    secondaryCTA: E.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_UPLOAD,
    onSecondaryClick: function() {
      f();
      let e = new Blob([p], {
        type: "text/plain"
      });
      (0, r.promptToUpload)([(0, l.makeFile)(e, "message.txt")], d, n.DraftType.ChannelMessage, {
        requireConfirm: !0,
        showLargeMessageDialog: !0
      })
    },
    ...A
  })
}