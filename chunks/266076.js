var l = n(735250),
  a = n(470079),
  i = n(481060),
  s = n(43267),
  r = n(93687),
  c = n(785232);
t.Z = a.memo(function(e) {
  let {
channel: t,
size: n,
facepileSizeOverride: a,
experimentLocation: o,
isTyping: u,
status: d,
className: _,
animated: f = !1,
...E
  } = e, {
isFacepileEnabled: h
  } = r.Z.useExperiment({
location: o
  }, {
autoTrackExposure: !0
  });
  return t.recipients.length >= 2 && h && null == t.icon ? (0, l.jsx)(c.Z, {
'aria-label': E['aria-label'],
'aria-hidden': E['aria-hidden'],
className: _,
recipients: t.recipients,
size: null != a ? a : n,
isTyping: u,
status: d
  }) : (0, l.jsx)(i.Avatar, {
'aria-hidden': E['aria-hidden'],
'aria-label': E['aria-label'],
className: _,
size: n,
src: (0, s.x)(t, 80, f)
  });
});