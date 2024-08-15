var r = n(735250),
  i = n(470079),
  a = n(692547),
  s = n(481060),
  o = n(220082),
  l = n(420596),
  u = n(880563),
  c = n(484459),
  d = n(318661),
  _ = n(695346),
  E = n(981631),
  f = n(826881);
t.Z = function(e) {
  let {
style: t,
src: n,
backgroundSrc: h,
userId: p,
pulseSpeakingIndicator: m = !1,
speaking: I = !1,
...T
  } = e, g = null != h ? h : n, S = (0, o.ZP)(g, a.Z.unsafe_rawColors.PRIMARY_800.css), A = (0, l.c)(!0, 'VideoBackground-web').enabled, N = (0, d.ZP)(null != p ? p : E.lds), v = null == N ? void 0 : N.getBannerURL({
size: 1024,
canAnimate: _.QK.getSetting()
  });
  if (i.useEffect(() => {
  null != p && A && (0, c.Z)(p, void 0, {
    dispatchWait: !0
  });
}, [
  A,
  p
]), null == n)
return null;
  let O = (0, r.jsx)(s.Avatar, {
  className: f.avatarWrapper,
  src: n,
  ...T
}),
R = {
  ...t,
  backgroundColor: S
};
  return null != v && I && A && (R.backgroundImage = 'url('.concat(v, ')'), R.backgroundSize = 'cover'), (0, r.jsx)('div', {
style: R,
className: f.background,
children: m ? (0, r.jsx)(u.Z, {
  shouldAnimate: I,
  children: O
}) : O
  });
};