var l = n(735250),
  a = n(470079),
  i = n(481060),
  s = n(43267),
  r = n(93687),
  o = n(785232);
t.Z = a.memo(function(e) {
  let {
channel: t,
size: n,
facepileSizeOverride: a,
experimentLocation: u,
isTyping: c,
status: d,
className: _,
animated: h = !1,
...f
  } = e, {
isFacepileEnabled: E
  } = r.Z.useExperiment({
location: u
  }, {
autoTrackExposure: !0
  });
  return t.recipients.length >= 2 && E && null == t.icon ? (0, l.jsx)(o.Z, {
'aria-label': f['aria-label'],
'aria-hidden': f['aria-hidden'],
className: _,
recipients: t.recipients,
size: null != a ? a : n,
isTyping: c,
status: d
  }) : (0, l.jsx)(i.Avatar, {
'aria-hidden': f['aria-hidden'],
'aria-label': f['aria-label'],
className: _,
size: n,
src: (0, s.x)(t, 80, h)
  });
});