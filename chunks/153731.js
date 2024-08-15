n.d(t, {
  Z: function() {
return j;
  }
}), n(653041), n(47120), n(390547), n(733860);
var r = n(735250),
  a = n(470079),
  i = n(392711),
  o = n.n(i),
  s = n(442837),
  l = n(481060),
  c = n(304680),
  d = n(503089),
  u = n(493544),
  m = n(600164),
  p = n(210887),
  h = n(592125),
  g = n(271383),
  f = n(19780),
  C = n(226961),
  y = n(594174),
  S = n(51144),
  R = n(189648),
  D = n(775194),
  v = n(499848),
  b = n(724392),
  E = n(442580),
  Z = n(770800),
  F = n(981631),
  P = n(65154),
  T = n(689938),
  x = n(876975);
let _ = (e, t, n) => (0, r.jsx)(m.Z, {
align: m.Z.Align.CENTER,
children: (0, r.jsx)(m.Z.Child, {
  children: (0, r.jsxs)(m.Z, {
    align: m.Z.Align.CENTER,
    children: [
      (0, r.jsx)(l.Avatar, {
        size: l.AvatarSizes.SIZE_24,
        src: e.getAvatarURL(n, 24),
        'aria-label': e.username,
        className: x.avatar
      }),
      (0, r.jsx)('span', {
        className: x.username,
        children: null != t ? t : S.ZP.getName(e)
      })
    ]
  })
})
  }),
  N = e => (0, r.jsx)(m.Z, {
align: m.Z.Align.CENTER,
children: (0, r.jsx)(m.Z.Child, {
  children: (0, r.jsx)(m.Z, {
    align: m.Z.Align.CENTER,
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
  if (i.push({
  section: u.ID.HEADER,
  label: T.Z.Messages.RTC_DEBUG_CONTEXT.format({
    context: e
  })
}), null != s && i.push({
  section: (0, C.J$)(e, F._s_.TRANSPORT, n),
  label: T.Z.Messages.RTC_DEBUG_TRANSPORT,
  element: Z.Z,
  elementProps: {
    context: e,
    index: n
  }
}), null != d && i.push({
  section: (0, C.J$)(e, F._s_.OUTBOUND, n),
  label: T.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
  element: b.Z,
  elementProps: {
    context: e,
    index: n
  }
}), null != m && i.push({
  section: (0, C.J$)(e, F._s_.CAMERA, n),
  label: T.Z.Messages.RTC_DEBUG_CAMERA,
  element: R.Z,
  elementProps: {
    context: e,
    index: n,
    camera: m
  }
}), null != l && !o().isEmpty(l)) {
let t = [];
Object.keys(l).forEach(i => {
  let o = y.default.getUser(i),
    s = g.ZP.getNick(a, i),
    d = (0, C.J$)(e, i, n);
  null != l[i] && l[i].length > 0 && t.push({
    section: d,
    label: null != o ? _(o, s, a) : N(null != s ? s : i),
    ariaLabel: null != o ? o.tag : i,
    onClick: () => {
      c.zc(d);
    },
    element: v.Z,
    elementProps: {
      context: e,
      index: n,
      videoStreams: r
    }
  });
}), t.length > 0 && (i.push({
  section: u.ID.HEADER,
  label: T.Z.Messages.RTC_DEBUG_RTP_INBOUND
}), i.push(...t));
  }
  return i;
}

function j() {
  var e, t;
  let {
defaultStats: n,
streamStats: i
  } = (0, s.e7)([C.ZP], () => ({
defaultStats: C.ZP.getAllStats(P.Yn.DEFAULT),
streamStats: C.ZP.getAllStats(P.Yn.STREAM)
  }), [], s.pF), o = (0, s.e7)([
f.Z,
h.Z
  ], () => h.Z.getChannel(f.Z.getChannelId())), m = null === (e = n.concat(i).find(e => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare, g = null === (t = i.find(e => null != e.clips)) || void 0 === t ? void 0 : t.clips, y = (0, s.e7)([p.Z], () => p.Z.theme), S = (0, s.e7)([p.Z], () => p.Z.darkSidebar ? F.BRd.DARK : void 0), R = (0, s.e7)([C.ZP], () => C.ZP.getSection()), v = (0, s.e7)([C.ZP], () => C.ZP.getVideoStreams()), b = function(e) {
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
screenshare: m,
clips: g,
channel: o,
connectionState: (0, s.e7)([f.Z], () => f.Z.getState())
  });
  return a.useEffect(() => () => {
c.xv();
  }, []), (0, r.jsx)(d.ZP, {
theme: y,
sidebarTheme: S,
section: R,
onSetSection: c.zc,
sections: b
  });
}