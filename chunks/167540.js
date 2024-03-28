"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("131951"),
  u = s("962100"),
  c = s("445817"),
  S = s("65154"),
  E = s("689938"),
  T = s("794711");

function _() {
  return (0, a.jsx)(o.FormNotice, {
    type: o.CardTypes.PRIMARY,
    title: E.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
    body: E.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
    button: (0, a.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      className: T.marginTop20,
      onClick: () => (0, u.openDownloadAppsModal)("Video unsupported browser"),
      children: E.default.Messages.DOWNLOAD_APP
    })
  })
}

function f() {
  let e = (0, r.useStateFromStores)([d.default], () => d.default.supports(S.Features.VIDEO)),
    [t, s] = n.useState(!1);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(o.HeadingLevel, {
      component: (0, a.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H1,
        className: T.marginBottom20,
        children: E.default.Messages.VIDEO_SETTINGS
      }),
      children: e ? (0, a.jsx)(c.default, {
        previewEnabled: t,
        onEnablePreview: () => s(!0)
      }) : (0, a.jsx)(_, {})
    }), (0, a.jsx)(o.FormDivider, {
      className: i()(T.marginBottom40, T.marginTop40)
    })]
  })
}