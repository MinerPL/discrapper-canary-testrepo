n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(13245),
  o = n(593481),
  r = n(312839),
  l = n(981631),
  c = n(987650),
  d = n(689938),
  u = n(482765);

function h() {
  return (0, i.jsx)('div', {
className: u.footer,
children: (0, i.jsx)(s.Button, {
  color: s.Button.Colors.GREEN,
  size: s.Button.Sizes.SMALL,
  className: u.ctaButton,
  children: d.Z.Messages.OVERLAY_NEWS_GO_LIVE_CTA
})
  });
}

function p(e) {
  switch (e.type) {
case c.nc.GO_LIVE_VOICE: {
  let {
    game: t,
    voiceGuild: u
  } = e, {
    trackView: p,
    trackClick: f
  } = (0, r.R)(c.n0.GoLiveNudge, {
    notif_type: c.n0.GoLiveNudge
  });
  return {
    colorScheme: o.IC.PRIMARY,
    icon: n(847881),
    title: null,
    body: d.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY.format({
      game: t.name,
      server: u.toString()
    }),
    hint: () => (0, i.jsx)(h, {}),
    renderFooter: () => (0, i.jsx)(h, {}),
    onNotificationShow: () => {
      p();
    },
    onNotificationClick: (e, t) => {
      f('unlock'), a.Z.updateNotificationStatus(t), a.Z.setInstanceLocked(!1), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('79477'),
          n.e('25248')
        ]).then(n.bind(n, 60594));
        return t => (0, i.jsx)(e, {
          ...t,
          selectSource: !1,
          guildId: u.id,
          analyticsLocation: l.Sbl.OVERLAY_NUDGE
        });
      });
    },
    onDismissClick: () => {
      f('dismiss');
    }
  };
}
case c.nc.GO_LIVE_NON_VOICE: {
  let {
    game: t
  } = e, {
    trackView: u,
    trackClick: p
  } = (0, r.R)(c.n0.GoLiveNonVoiceNudge, {
    notif_type: c.n0.GoLiveNonVoiceNudge
  });
  return {
    colorScheme: o.IC.PRIMARY,
    icon: n(847881),
    title: null,
    body: d.Z.Messages.OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL.format({
      game: t.name
    }),
    hint: () => (0, i.jsx)(h, {}),
    renderFooter: () => (0, i.jsx)(h, {}),
    onNotificationShow: () => {
      u();
    },
    onNotificationClick: (e, t) => {
      p('unlock'), a.Z.updateNotificationStatus(t), a.Z.setInstanceLocked(!1), (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([
          n.e('79477'),
          n.e('25248')
        ]).then(n.bind(n, 60594));
        return t => (0, i.jsx)(e, {
          ...t,
          selectSource: !1,
          selectGuild: !0,
          analyticsLocation: l.Sbl.OVERLAY_NUDGE
        });
      });
    },
    onDismissClick: () => {
      p('dismiss');
    }
  };
}
  }
}