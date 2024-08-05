var l = n(735250);
n(470079);
var a = n(442837),
  i = n(481060),
  s = n(289823),
  r = n(594174);
t.Z = function(e) {
  let {
recipients: t,
size: n,
status: o,
isTyping: u,
className: c,
...d
  } = e, _ = i.AvatarSizeSpecs[n], h = (0, a.Wu)([r.default], () => t.slice(0, 2).map(e => {
let t = r.default.getUser(e);
if (null != t)
  return t.getAvatarURL(void 0, _.size, !1);
  }), [
t,
_.size
  ]);
  return (0, l.jsx)(s.Z, {
'aria-label': d['aria-label'],
'aria-hidden': d['aria-hidden'],
backSrc: h[0],
frontSrc: h[1],
size: n,
status: o,
isTyping: null != u && u,
className: c
  });
};