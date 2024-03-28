"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("367907"),
  i = n("970731"),
  r = n("810090"),
  o = n("626135"),
  u = n("63063"),
  d = n("981631"),
  c = n("689938"),
  f = n("724581");

function E(e) {
  let {
    guildId: t,
    markAsDismissed: E
  } = e, h = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.Text, {
      color: "always-white",
      variant: "text-sm/normal",
      className: f.upsellBody,
      children: c.default.Messages.MEDIA_CHANNEL_UPSELL_BODY
    }), (0, a.jsx)(s.Text, {
      color: "always-white",
      variant: "text-sm/normal",
      children: c.default.Messages.MEDIA_CHANNEL_LEARN_MORE.format({
        hcArticleUrl: u.default.getCreatorSupportArticleURL(d.HelpdeskArticles.MEDIA_CHANNEL)
      })
    })]
  });
  return (0, a.jsx)(i.default, {
    header: c.default.Messages.MEDIA_CHANNEL_UPSELL_TITLE,
    content: h,
    asset: (0, a.jsx)(r.default, {
      className: f.video,
      src: "https://cdn.discordapp.com/assets/media_channel/media_channel_upsell_demo.mp4",
      autoPlay: !0,
      loop: !0
    }),
    buttonCTA: c.default.Messages.MEDIA_CHANNEL_UPSELL_CREATE_NOW_CTA,
    onClick: () => {
      o.default.track(d.AnalyticEvents.MEDIA_CHANNEL_UPSELL_CLICKED, {
        ...(0, l.collectGuildAnalyticsMetadata)(t)
      }), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("45094"), n.e("36494")]).then(n.bind(n, "218613"));
        return n => (0, a.jsx)(e, {
          ...n,
          channelType: d.ChannelTypes.GUILD_MEDIA,
          guildId: t
        })
      })
    },
    secondaryButtonCTA: c.default.Messages.DISMISS,
    markAsDismissed: E
  })
}