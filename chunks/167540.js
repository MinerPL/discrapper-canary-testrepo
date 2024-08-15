t.d(s, {
  Z: function() {
return C;
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(921801),
  d = t(131951),
  _ = t(962100),
  E = t(445817),
  u = t(726985),
  I = t(65154),
  T = t(689938),
  S = t(224499);

function N() {
  return (0, n.jsx)(l.FormNotice, {
type: l.CardTypes.PRIMARY,
title: T.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
body: T.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
button: (0, n.jsx)(l.Button, {
  size: l.Button.Sizes.SMALL,
  className: S.marginTop20,
  onClick: () => (0, _.y)('Video unsupported browser'),
  children: T.Z.Messages.DOWNLOAD_APP
})
  });
}

function C() {
  let e = (0, o.e7)([d.Z], () => d.Z.supports(I.AN.VIDEO)),
[s, t] = a.useState(!1);
  return (0, n.jsxs)('div', {
children: [
  (0, n.jsxs)(l.HeadingLevel, {
    component: (0, n.jsx)(l.FormTitle, {
      tag: l.FormTitleTags.H1,
      className: S.marginBottom20,
      children: T.Z.Messages.VIDEO_SETTINGS
    }),
    children: [
      (0, n.jsx)(c.F, {
        setting: u.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
        children: (0, n.jsx)(E.Z, {
          previewEnabled: s,
          onEnablePreview: () => t(!0)
        })
      }),
      !e && (0, n.jsx)(N, {})
    ]
  }),
  (0, n.jsx)(l.FormDivider, {
    className: r()(S.marginBottom40, S.marginTop40)
  })
]
  });
}