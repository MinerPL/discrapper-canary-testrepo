n.d(t, {
  Z: function() {
return h;
  }
}), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(704215),
  r = n(890977),
  o = n(605236),
  c = n(243778),
  u = n(375954),
  d = n(921944);

function h(e) {
  let {
children: t,
enabled: n,
animationContainerClassName: h,
glowClassName: m,
trinketsClassName: p
  } = e, _ = (0, s.e7)([u.Z], () => u.Z.hasCurrentUserSentMessageSinceAppStart()), f = a.useMemo(() => {
let e = [];
return _ && n && e.push(l.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e;
  }, [
_,
n
  ]), E = () => {
setTimeout(() => (0, o.EW)(l.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
  dismissAction: d.L.AUTO_DISMISS
}), 10000);
  };
  return (0, i.jsx)(c.ZP, {
contentTypes: f,
children: e => {
  let {
    visibleContent: n
  } = e;
  if (n === l.z.ACTIVITIES_CHAT_BUTTON_NUX_V2)
    return (0, i.jsx)(r.b, {
      animationContainerClassName: h,
      glowClassName: m,
      trinketsClassName: p,
      onMount: E,
      children: t
    });
  return t;
}
  });
}