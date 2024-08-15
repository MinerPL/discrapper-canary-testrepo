n.d(t, {
  Z: function() {
return x;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(442837),
  a = n(481060),
  s = n(313201),
  o = n(19780),
  c = n(979651),
  u = n(362446),
  d = n(571826),
  h = n(441894),
  p = n(160038),
  _ = n(586646),
  f = n(760373),
  g = n(689938),
  m = n(711124);

function C(e) {
  let {
lobbyId: t,
connectionTypeText: n,
closePopout: l
  } = e, a = (0, r.cj)([u.Z], () => ({
connectionState: u.Z.getConnectionState(t),
hostname: u.Z.getHostname(t),
averagePing: u.Z.getAveragePing(t),
lastPing: u.Z.getLastPing(t),
pings: u.Z.getPings(),
outboundLossRate: u.Z.getOutboundLossRate(t)
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
  } = e, l = (0, r.cj)([o.Z], () => ({
connectionState: o.Z.getState(),
hostname: o.Z.getHostname(),
averagePing: o.Z.getAveragePing(),
lastPing: o.Z.getLastPing(),
outboundLossRate: o.Z.getOutboundLossRate(),
pings: o.Z.getPings()
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
  }) ? g.Z.Messages.E2EE_END_TO_END_ENCRYPTED : g.Z.Messages.SECURE_CONNECTION;
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
  let t = (0, r.e7)([c.Z], () => c.Z.hasVideo(e.channelId)),
[n, o] = l.useState(f.tu.RTC_DEBUG_PANEL),
u = (0, s.Dt)(),
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
className: m.container,
children: [
  (0, i.jsx)(a.Heading, {
    className: m.title,
    variant: 'heading-lg/bold',
    color: 'header-primary',
    children: t ? g.Z.Messages.E2EE_VIDEO_DETAILS : g.Z.Messages.E2EE_VOICE_DETAILS
  }),
  (0, i.jsxs)(a.TabBar, {
    className: m.tabs,
    selectedItem: n,
    type: 'top',
    look: 'brand',
    onItemSelect: o,
    children: [
      (0, i.jsx)(a.TabBar.Item, {
        id: f.tu.RTC_DEBUG_PANEL,
        className: m.tabBarItem,
        children: g.Z.Messages.E2EE_CONNECTION
      }),
      (0, i.jsx)(a.TabBar.Item, {
        id: f.tu.RTC_SECURE_FRAMES,
        className: m.tabBarItem,
        children: g.Z.Messages.E2EE_PRIVACY
      })
    ]
  }),
  (0, i.jsx)(a.TabBar.Panel, {
    id: n,
    'aria-labelledby': u,
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
className: m.debugPanelStandalone,
children: (0, i.jsx)('section', {
  className: m.debugPanelSection,
  children: (0, i.jsx)(E, {
    ...e
  })
})
  });
}