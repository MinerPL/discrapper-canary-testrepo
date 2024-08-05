n.d(t, {
  Z: function() {
return h;
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(704215),
  r = n(605236),
  o = n(243778),
  c = n(375954),
  u = n(890977),
  d = n(921944);

function h(e) {
  let {
children: t,
animationContainerClassName: n,
glowClassName: h,
trinketsClassName: p
  } = e, m = (0, s.e7)([c.Z], () => c.Z.hasCurrentUserSentMessageSinceAppStart()), _ = a.useMemo(() => {
let e = [];
return m && e.push(l.z.DESKTOP_APP_LAUNCHER_ONBOARDING), e;
  }, [m]), f = () => {
setTimeout(() => (0, r.EW)(l.z.DESKTOP_APP_LAUNCHER_ONBOARDING, {
  dismissAction: d.L.AUTO_DISMISS
}), 10000);
  };
  return (0, i.jsx)(o.Z, {
contentTypes: _,
children: e => {
  let {
    visibleContent: a
  } = e;
  if (a === l.z.DESKTOP_APP_LAUNCHER_ONBOARDING)
    return (0, i.jsx)(u.b, {
      animationContainerClassName: n,
      glowClassName: h,
      trinketsClassName: p,
      onMount: f,
      children: t
    });
  return t;
}
  });
}