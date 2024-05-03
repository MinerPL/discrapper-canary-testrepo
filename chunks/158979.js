"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var a = n("481060"),
  l = n("13245"),
  s = n("454902"),
  o = n("312839"),
  r = n("981631"),
  d = n("987650"),
  u = n("689938"),
  c = n("553198");

function f() {
  return (0, i.jsx)("div", {
    className: c.footer,
    children: (0, i.jsx)(a.Button, {
      color: a.Button.Colors.GREEN,
      size: a.Button.Sizes.SMALL,
      className: c.ctaButton,
      children: u.default.Messages.OVERLAY_NEWS_GO_LIVE_CTA
    })
  })
}

function h(e) {
  switch (e.type) {
    case d.OverlayNudgeTypes.GO_LIVE_VOICE: {
      let {
        game: t,
        voiceGuild: c
      } = e, {
        trackView: h,
        trackClick: p
      } = (0, o.makeAnalyticsTrackers)(d.OverlayNotificationType.GoLiveNudge, {
        notif_type: d.OverlayNotificationType.GoLiveNudge
      });
      return {
        colorScheme: s.ColorSchemes.PRIMARY,
        icon: n("847881"),
        title: null,
        body: u.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
          game: t.name,
          server: c.toString()
        }),
        hint: () => (0, i.jsx)(f, {}),
        renderFooter: () => (0, i.jsx)(f, {}),
        onNotificationShow: () => {
          h()
        },
        onNotificationClick: (e, t) => {
          p("unlock"), l.default.updateNotificationStatus(t), l.default.setInstanceLocked(!1), (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("33641")]).then(n.bind(n, "60594"));
            return t => (0, i.jsx)(e, {
              ...t,
              selectSource: !1,
              guildId: c.id,
              analyticsLocation: r.AnalyticsLocations.OVERLAY_NUDGE
            })
          })
        },
        onDismissClick: () => {
          p("dismiss")
        }
      }
    }
    case d.OverlayNudgeTypes.GO_LIVE_NON_VOICE: {
      let {
        game: t
      } = e, {
        trackView: c,
        trackClick: h
      } = (0, o.makeAnalyticsTrackers)(d.OverlayNotificationType.GoLiveNonVoiceNudge, {
        notif_type: d.OverlayNotificationType.GoLiveNonVoiceNudge
      });
      return {
        colorScheme: s.ColorSchemes.PRIMARY,
        icon: n("847881"),
        title: null,
        body: u.default.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format({
          game: t.name
        }),
        hint: () => (0, i.jsx)(f, {}),
        renderFooter: () => (0, i.jsx)(f, {}),
        onNotificationShow: () => {
          c()
        },
        onNotificationClick: (e, t) => {
          h("unlock"), l.default.updateNotificationStatus(t), l.default.setInstanceLocked(!1), (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("33641")]).then(n.bind(n, "60594"));
            return t => (0, i.jsx)(e, {
              ...t,
              selectSource: !1,
              selectGuild: !0,
              analyticsLocation: r.AnalyticsLocations.OVERLAY_NUDGE
            })
          })
        },
        onDismissClick: () => {
          h("dismiss")
        }
      }
    }
  }
}