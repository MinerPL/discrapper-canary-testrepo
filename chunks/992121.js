"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("42887"),
  u = s("597870"),
  c = s("831490"),
  S = s("353927"),
  E = s("782340"),
  T = s("890957");

function f() {
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

function _() {
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
      }) : (0, a.jsx)(f, {})
    }), (0, a.jsx)(o.FormDivider, {
      className: i(T.marginBottom40, T.marginTop40)
    })]
  })
}