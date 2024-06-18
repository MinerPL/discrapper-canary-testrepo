"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(13245),
  a = n(454902),
  o = n(312839),
  r = n(981631),
  d = n(987650),
  c = n(689938),
  u = n(174325);

function h() {
  return (0, i.jsx)("div", {
    className: u.footer,
    children: (0, i.jsx)(s.Button, {
      color: s.Button.Colors.GREEN,
      size: s.Button.Sizes.SMALL,
      className: u.ctaButton,
      children: c.Z.Messages.OVERLAY_NEWS_GO_LIVE_CTA
    })
  })
}

function p(e) {
  switch (e.type) {
    case d.nc.GO_LIVE_VOICE: {
      let {
        game: t,
        voiceGuild: u
      } = e, {
        trackView: p,
        trackClick: f
      } = (0, o.R)(d.n0.GoLiveNudge, {
        notif_type: d.n0.GoLiveNudge
      });
      return {
        colorScheme: a.IC.PRIMARY,
        icon: n(847881),
        title: null,
        body: c.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
          game: t.name,
          server: u.toString()
        }),
        hint: () => (0, i.jsx)(h, {}),
        renderFooter: () => (0, i.jsx)(h, {}),
        onNotificationShow: () => {
          p()
        },
        onNotificationClick: (e, t) => {
          f("unlock"), l.Z.updateNotificationStatus(t), l.Z.setInstanceLocked(!1), (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("33641")]).then(n.bind(n, 60594));
            return t => (0, i.jsx)(e, {
              ...t,
              selectSource: !1,
              guildId: u.id,
              analyticsLocation: r.Sbl.OVERLAY_NUDGE
            })
          })
        },
        onDismissClick: () => {
          f("dismiss")
        }
      }
    }
    case d.nc.GO_LIVE_NON_VOICE: {
      let {
        game: t
      } = e, {
        trackView: u,
        trackClick: p
      } = (0, o.R)(d.n0.GoLiveNonVoiceNudge, {
        notif_type: d.n0.GoLiveNonVoiceNudge
      });
      return {
        colorScheme: a.IC.PRIMARY,
        icon: n(847881),
        title: null,
        body: c.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format({
          game: t.name
        }),
        hint: () => (0, i.jsx)(h, {}),
        renderFooter: () => (0, i.jsx)(h, {}),
        onNotificationShow: () => {
          u()
        },
        onNotificationClick: (e, t) => {
          p("unlock"), l.Z.updateNotificationStatus(t), l.Z.setInstanceLocked(!1), (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("33641")]).then(n.bind(n, 60594));
            return t => (0, i.jsx)(e, {
              ...t,
              selectSource: !1,
              selectGuild: !0,
              analyticsLocation: r.Sbl.OVERLAY_NUDGE
            })
          })
        },
        onDismissClick: () => {
          p("dismiss")
        }
      }
    }
  }
}