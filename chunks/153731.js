n.d(t, {
  Z: function() {
return j;
  }
}), n(653041), n(390547), n(733860), n(47120);
var r = n(735250),
  a = n(470079),
  i = n(392711),
  o = n.n(i),
  s = n(442837),
  l = n(481060),
  c = n(304680),
  d = n(503089),
  u = n(493544),
  m = n(210887),
  p = n(592125),
  h = n(271383),
  g = n(19780),
  f = n(226961),
  C = n(594174),
  y = n(285952),
  R = n(51144),
  S = n(189648),
  D = n(775194),
  v = n(499848),
  b = n(724392),
  E = n(442580),
  Z = n(770800),
  F = n(981631),
  P = n(65154),
  T = n(689938),
  x = n(634040);
let _ = (e, t, n) => (0, r.jsx)(y.Z, {
align: y.Z.Align.CENTER,
children: (0, r.jsx)(y.Z.Child, {
  children: (0, r.jsxs)(y.Z, {
    align: y.Z.Align.CENTER,
    children: [
      (0, r.jsx)(l.Avatar, {
        size: l.AvatarSizes.SIZE_24,
        src: e.getAvatarURL(n, 24),
        'aria-label': e.username,
        className: x.avatar
      }),
      (0, r.jsx)('span', {
        className: x.username,
        children: null != t ? t : R.ZP.getName(e)
      })
    ]
  })
})
  }),
  N = e => (0, r.jsx)(y.Z, {
align: y.Z.Align.CENTER,
children: (0, r.jsx)(y.Z.Child, {
  children: (0, r.jsx)(y.Z, {
    align: y.Z.Align.CENTER,
    children: (0, r.jsx)('span', {
      className: x.username,
      children: e
    })
  })
})
  });

function I(e, t, n, r, a) {
  let i = [];
  if (null == t)
return i;
  let {
transport: s,
rtp: {
  inbound: l,
  outbound: d
},
camera: m
  } = t;
  return i.push({
section: u.ID.HEADER,
label: T.Z.Messages.RTC_DEBUG_CONTEXT.format({
  context: e
})
  }), null != s && i.push({
section: (0, f.J$)(e, F._s_.TRANSPORT, n),
label: T.Z.Messages.RTC_DEBUG_TRANSPORT,
element: Z.Z,
elementProps: {
  context: e,
  index: n
}
  }), null != d && i.push({
section: (0, f.J$)(e, F._s_.OUTBOUND, n),
label: T.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
element: b.Z,
elementProps: {
  context: e,
  index: n
}
  }), null != m && i.push({
section: (0, f.J$)(e, F._s_.CAMERA, n),
label: T.Z.Messages.RTC_DEBUG_CAMERA,
element: S.Z,
elementProps: {
  context: e,
  index: n,
  camera: m
}
  }), null != l && !o().isEmpty(l) && (i.push({
section: u.ID.HEADER,
label: T.Z.Messages.RTC_DEBUG_RTP_INBOUND
  }), Object.keys(l).forEach(t => {
let o = C.default.getUser(t),
  s = h.ZP.getNick(a, t),
  l = (0, f.J$)(e, t, n);
i.push({
  section: l,
  label: null != o ? _(o, s, a) : N(null != s ? s : t),
  ariaLabel: null != o ? o.tag : t,
  onClick: () => {
    c.zc(l);
  },
  element: v.Z,
  elementProps: {
    context: e,
    index: n,
    videoStreams: r
  }
});
  })), i;
}

function j() {
  var e, t;
  let {
defaultStats: n,
streamStats: i
  } = (0, s.e7)([f.ZP], () => ({
defaultStats: f.ZP.getAllStats(P.Yn.DEFAULT),
streamStats: f.ZP.getAllStats(P.Yn.STREAM)
  }), [], s.pF), o = (0, s.e7)([
g.Z,
p.Z
  ], () => p.Z.getChannel(g.Z.getChannelId())), h = null === (e = n.concat(i).find(e => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare, C = null === (t = i.find(e => null != e.clips)) || void 0 === t ? void 0 : t.clips, y = (0, s.e7)([m.Z], () => m.Z.theme), R = (0, s.e7)([m.Z], () => m.Z.darkSidebar ? F.BRd.DARK : void 0), S = (0, s.e7)([f.ZP], () => f.ZP.getSection()), v = (0, s.e7)([f.ZP], () => f.ZP.getVideoStreams()), b = function(e) {
let {
  defaultStats: t,
  streamStats: n,
  videoStreams: a,
  screenshare: i,
  clips: o,
  channel: s,
  connectionState: c
} = e, d = t.flatMap((e, t) => I(P.Yn.DEFAULT, e, t, a, null == s ? void 0 : s.getGuildId())), m = n.flatMap((e, t) => I(P.Yn.STREAM, e, t, a, null == s ? void 0 : s.getGuildId())), p = [], h = [], g = {
  section: u.ID.DIVIDER
};
null != i && (p.push(g), p.push({
  section: F._s_.SCREENSHARE,
  label: T.Z.Messages.RTC_DEBUG_SCREENSHARE,
  element: E.Z,
  elementProps: {
    screenshare: i
  }
})), null != o && (h.push(g), h.push({
  section: F._s_.CLIPS,
  label: T.Z.Messages.RTC_DEBUG_CLIPS,
  element: D.Z,
  elementProps: {
    clips: o
  }
})), m.length > 0 && m.unshift(g);
let f = null != s ? [{
  section: u.ID.CUSTOM,
  label: 'Channel Name',
  element: () => (0, r.jsx)(l.Heading, {
    className: x.channelName,
    variant: 'heading-lg/semibold',
    children: s.name
  })
}] : [];
return [
  ...f,
  {
    section: u.ID.CUSTOM,
    label: 'Connection State',
    element: () => (0, r.jsx)(l.Heading, {
      className: x.channelName,
      variant: 'heading-md/normal',
      children: c === F.hes.RTC_CONNECTED ? 'Connected' : 'Disconnected'
    })
  },
  ...d,
  ...m,
  ...p,
  ...h
];
  }({
defaultStats: n,
streamStats: i,
videoStreams: v,
screenshare: h,
clips: C,
channel: o,
connectionState: (0, s.e7)([g.Z], () => g.Z.getState())
  });
  return a.useEffect(() => () => {
c.xv();
  }, []), (0, r.jsx)(d.ZP, {
theme: y,
sidebarTheme: R,
section: S,
onSetSection: c.zc,
sections: b
  });
}