"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("367907"),
  u = n("908773"),
  d = n("626135"),
  c = n("152376"),
  f = n("981631"),
  h = n("689938"),
  m = n("871220");

function p(e) {
  let {
    channel: t,
    narrow: n
  } = e;
  return l.useEffect(() => {
    d.default.track(f.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
      ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
      ...(0, o.collectChannelAnalyticsMetadata)(t),
      banner_type: "channel_opt_in"
    })
  }, [t]), (0, a.jsxs)("div", {
    className: i()(m.chatHeaderBar, {
      [m.narrow]: n
    }),
    children: [(0, a.jsx)(r.Text, {
      className: m.chatHeaderBarText,
      variant: "text-sm/normal",
      color: "text-normal",
      children: h.default.Messages.OPT_IN_CHANNEL_NOTICE
    }), (0, a.jsxs)(r.Button, {
      size: r.Button.Sizes.TINY,
      className: m.chatHeaderBarButton,
      innerClassName: m.chatHeaderBarButtonInner,
      color: r.Button.Colors.BRAND,
      onClick: () => {
        d.default.track(f.AnalyticEvents.CHANNEL_BANNER_CTA_CLICKED, {
          ...(0, o.collectGuildAnalyticsMetadata)(t.getGuildId()),
          ...(0, o.collectChannelAnalyticsMetadata)(t),
          banner_type: "channel_opt_in",
          cta_type: "add channel"
        }), (0, c.setOptInChannel)(t.guild_id, t.id, !0, {
          section: f.AnalyticsSections.CHANNEL
        })
      },
      children: [(0, a.jsx)(u.default, {
        width: 14,
        height: 14
      }), h.default.Messages.OPT_IN_CHANNEL_NOTICE_CTA]
    })]
  })
}