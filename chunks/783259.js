"use strict";
var i = n(735250),
  r = n(470079),
  s = n(692547),
  o = n(481060),
  a = n(220082),
  l = n(420596),
  u = n(880563),
  _ = n(484459),
  d = n(318661),
  c = n(695346),
  E = n(981631),
  I = n(147556);
t.Z = function(e) {
  let {
    style: t,
    src: n,
    backgroundSrc: T,
    userId: h,
    pulseSpeakingIndicator: S = !1,
    speaking: f = !1,
    ...N
  } = e, A = null != T ? T : n, m = (0, a.ZP)(A, s.Z.unsafe_rawColors.PRIMARY_800.css), O = (0, l.c)(!0, "VideoBackground-web").enabled, R = (0, d.ZP)(null != h ? h : E.lds), C = null == R ? void 0 : R.getBannerURL({
    size: 1024,
    canAnimate: c.QK.getSetting()
  });
  if (r.useEffect(() => {
      null != h && O && (0, _.Z)(h, void 0, {
        dispatchWait: !0
      })
    }, [O, h]), null == n) return null;
  let p = (0, i.jsx)(o.Avatar, {
      className: I.avatarWrapper,
      src: n,
      ...N
    }),
    g = {
      ...t,
      backgroundColor: m
    };
  return null != C && f && O && (g.backgroundImage = "url(".concat(C, ")"), g.backgroundSize = "cover"), (0, i.jsx)("div", {
    style: g,
    className: I.background,
    children: S ? (0, i.jsx)(u.Z, {
      shouldAnimate: f,
      children: p
    }) : p
  })
}