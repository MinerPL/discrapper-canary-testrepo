var l = n(735250);
n(470079);
var a = n(442837),
  i = n(481060),
  s = n(594174),
  r = n(429239);
t.Z = function(e) {
  let {
recipients: t,
size: n,
status: c,
isTyping: o,
className: u,
...d
  } = e, _ = i.AvatarSizeSpecs[n], f = (0, a.Wu)([s.default], () => t.slice(0, 2).map(e => {
let t = s.default.getUser(e);
if (null != t)
  return t.getAvatarURL(void 0, _.size, !1);
  }), [
t,
_.size
  ]);
  return (0, l.jsx)(r.Z, {
'aria-label': d['aria-label'],
'aria-hidden': d['aria-hidden'],
backSrc: f[0],
frontSrc: f[1],
size: n,
status: c,
isTyping: null != o && o,
className: u
  });
};