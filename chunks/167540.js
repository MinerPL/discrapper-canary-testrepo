s.d(t, {
  Z: function() {
return C;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(921801),
  d = s(131951),
  _ = s(962100),
  E = s(445817),
  u = s(726985),
  T = s(65154),
  I = s(689938),
  S = s(549856);

function N() {
  return (0, n.jsx)(l.FormNotice, {
type: l.CardTypes.PRIMARY,
title: I.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
body: I.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
button: (0, n.jsx)(l.Button, {
  size: l.Button.Sizes.SMALL,
  className: S.marginTop20,
  onClick: () => (0, _.y)('Video unsupported browser'),
  children: I.Z.Messages.DOWNLOAD_APP
})
  });
}

function C() {
  let e = (0, o.e7)([d.Z], () => d.Z.supports(T.AN.VIDEO)),
[t, s] = a.useState(!1);
  return (0, n.jsxs)('div', {
children: [
  (0, n.jsxs)(l.HeadingLevel, {
    component: (0, n.jsx)(l.FormTitle, {
      tag: l.FormTitleTags.H1,
      className: S.marginBottom20,
      children: I.Z.Messages.VIDEO_SETTINGS
    }),
    children: [
      (0, n.jsx)(c.F, {
        setting: u.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
        children: (0, n.jsx)(E.Z, {
          previewEnabled: t,
          onEnablePreview: () => s(!0)
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