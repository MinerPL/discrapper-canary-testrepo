"use strict";
var i = n(735250),
  r = n(470079),
  s = n(335854),
  o = n(481060),
  a = n(626135),
  l = n(943461),
  u = n(981631),
  _ = n(689938);
t.Z = e => {
  let {
    href: t,
    className: n,
    iconClassName: d,
    rel: c,
    target: E,
    mimeType: I,
    fileName: T,
    focusProps: h,
    onClick: S,
    ...f
  } = e, N = r.useMemo(() => s.X.getDefaultLinkInterceptor(t), [t]), A = r.useCallback(e => {
    a.default.track(u.rMx.MEDIA_DOWNLOAD_BUTTON_TAPPED, {
      attachment_type: null == I ? void 0 : I[0],
      attachment_subtype: null == I ? void 0 : I[1]
    }), null == S || S(), null == N || N(e)
  }, [N, I, S]);
  return null != T ? (0, i.jsx)(o.Anchor, {
    href: t,
    onClick: A,
    target: E,
    rel: c,
    className: n,
    "aria-label": _.Z.Messages.DOWNLOAD,
    focusProps: h,
    ...f,
    children: T
  }) : (0, i.jsx)(o.Anchor, {
    href: t,
    onClick: A,
    target: E,
    rel: c,
    className: n,
    "aria-label": _.Z.Messages.DOWNLOAD,
    focusProps: h,
    ...f,
    children: (0, i.jsx)(l.Z, {
      className: d
    })
  })
}