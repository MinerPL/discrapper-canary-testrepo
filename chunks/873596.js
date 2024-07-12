n.d(t, {
  Z: function() {
return x;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(442837),
  a = n(481060),
  s = n(19780),
  o = n(979651),
  c = n(362446),
  u = n(153124),
  d = n(571826),
  h = n(441894),
  p = n(160038),
  _ = n(586646),
  f = n(760373),
  m = n(689938),
  g = n(321679);

function C(e) {
  let {
lobbyId: t,
connectionTypeText: n,
closePopout: l
  } = e, a = (0, r.cj)([c.Z], () => ({
connectionState: c.Z.getConnectionState(t),
hostname: c.Z.getHostname(t),
averagePing: c.Z.getAveragePing(t),
lastPing: c.Z.getLastPing(t),
pings: c.Z.getPings(),
outboundLossRate: c.Z.getOutboundLossRate(t)
  }));
  return (0, i.jsx)(p.Z, {
...a,
closePopout: l,
connectionTypeText: n
  });
}

function I(e) {
  let {
closePopout: t,
connectionTypeText: n
  } = e, l = (0, r.cj)([s.Z], () => ({
connectionState: s.Z.getState(),
hostname: s.Z.getHostname(),
averagePing: s.Z.getAveragePing(),
lastPing: s.Z.getLastPing(),
outboundLossRate: s.Z.getOutboundLossRate(),
pings: s.Z.getPings()
  }));
  return (0, i.jsx)(p.Z, {
...l,
closePopout: t,
connectionTypeText: n
  });
}

function E(e) {
  let {
channelId: t,
isOverlay: n,
lobbyId: l,
closePopout: r
  } = e, a = (0, h.J)({
channelId: t,
location: 'RTCConnectionDebugPanelContainer'
  }) ? m.Z.Messages.E2EE_END_TO_END_ENCRYPTED : m.Z.Messages.SECURE_CONNECTION;
  return n ? (0, i.jsx)(C, {
lobbyId: l,
closePopout: r,
connectionTypeText: a
  }) : (0, i.jsx)(I, {
closePopout: r,
connectionTypeText: a
  });
}

function N(e) {
  let t = (0, r.e7)([o.Z], () => o.Z.hasVideo(e.channelId)),
[n, s] = l.useState(f.tu.RTC_DEBUG_PANEL),
c = (0, u.Dt)(),
h = l.useMemo(() => {
  switch (n) {
    case f.tu.RTC_DEBUG_PANEL:
      return (0, i.jsx)(E, {
        ...e
      });
    case f.tu.RTC_SECURE_FRAMES:
      return (0, i.jsx)(_.Z, {
        channelId: e.channelId
      });
  }
}, [
  e,
  n
]);
  return l.useEffect(() => {
(0, d.sN)({
  channelId: e.channelId,
  selectedTab: n
});
  }, [
e.channelId,
n
  ]), (0, i.jsxs)('div', {
className: g.container,
children: [
  (0, i.jsx)(a.Heading, {
    className: g.title,
    variant: 'heading-lg/bold',
    color: 'header-primary',
    children: t ? m.Z.Messages.E2EE_VIDEO_DETAILS : m.Z.Messages.E2EE_VOICE_DETAILS
  }),
  (0, i.jsxs)(a.TabBar, {
    className: g.tabs,
    selectedItem: n,
    type: 'top',
    look: 'brand',
    onItemSelect: s,
    children: [
      (0, i.jsx)(a.TabBar.Item, {
        id: f.tu.RTC_DEBUG_PANEL,
        className: g.tabBarItem,
        children: m.Z.Messages.E2EE_CONNECTION
      }),
      (0, i.jsx)(a.TabBar.Item, {
        id: f.tu.RTC_SECURE_FRAMES,
        className: g.tabBarItem,
        children: m.Z.Messages.E2EE_PRIVACY
      })
    ]
  }),
  (0, i.jsx)(a.TabBar.Panel, {
    id: n,
    'aria-labelledby': c,
    children: h
  })
]
  });
}

function x(e) {
  return (0, h.J)({
channelId: e.channelId,
location: 'RTCConnectionPopout'
  }) ? (0, i.jsx)(N, {
...e
  }) : (0, i.jsx)('div', {
className: g.debugPanelStandalone,
children: (0, i.jsx)('section', {
  className: g.debugPanelSection,
  children: (0, i.jsx)(E, {
    ...e
  })
})
  });
}