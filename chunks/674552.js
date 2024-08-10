n.d(t, {
  Ne: function() {
return p;
  },
  Ny: function() {
return _;
  },
  Or: function() {
return f;
  },
  jt: function() {
return g;
  }
}), n(47120);
var i = n(735250);
n(470079);
var l = n(120356),
  r = n.n(l),
  a = n(481060),
  s = n(44315),
  o = n(246364),
  c = n(460562),
  u = n(510601),
  d = n(981631),
  h = n(28604);

function p(e, t) {
  return (0, i.jsx)(a.NumberBadge, {
count: e,
color: t
  });
}

function _() {
  return (0, i.jsx)(a.IconBadge, {
icon: (0, a.makeIconCompat)(c.Z),
disableColor: !0,
className: h.unavailableBadge
  });
}

function f(e) {
  let t, {
  audio: n,
  video: i,
  screenshare: l,
  isCurrentUserConnected: r,
  liveStage: s,
  activeEvent: o,
  activity: c,
  gaming: d
} = e,
h = (0, u.vg)('Guild Icon', !1);
  if (!o && !s && !c && !l && !i && d && u.ZP.trackExposure({
  location: 'Guild Icon'
}), o)
t = a.CalendarIcon;
  else if (s)
t = a.StageIcon;
  else if (c)
t = a.ActivitiesIcon;
  else if (l)
t = a.ScreenIcon;
  else if (i)
t = a.VideoIcon;
  else if (d && h)
t = a.GameControllerIcon;
  else {
if (!n)
  return null;
t = a.VoiceNormalIcon;
  }
  return m({
icon: t,
isCurrentUserConnected: r
  });
}

function g(e) {
  let {
guildJoinRequestStatus: t
  } = e, [n, i] = function(e) {
switch (e) {
  case o.wB.SUBMITTED:
    return [
      void 0,
      a.ClockIcon
    ];
  case o.wB.REJECTED:
    return [
      d.Ilk.RED_400,
      a.XSmallIcon
    ];
  case o.wB.APPROVED:
    return [
      d.Ilk.GREEN_360,
      a.CheckmarkLargeIcon
    ];
  default:
    return [
      void 0,
      a.PencilIcon
    ];
}
  }(t);
  return m({
icon: i,
color: n
  });
}

function m(e) {
  let {
icon: t,
color: n,
isCurrentUserConnected: l
  } = e, o = null == n ? {
disableColor: !0
  } : {
color: (0, s.Lq)(n)
  };
  return (0, i.jsx)(a.IconBadge, {
icon: t,
className: r()(h.iconBadge, {
  [h.isCurrentUserConnected]: l
}),
...o
  });
}