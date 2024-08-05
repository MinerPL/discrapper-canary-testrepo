n.d(t, {
  h: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(671533),
  r = n(981631),
  l = n(952681);

function o(e) {
  let {
buttonText: t,
onGoBack: n,
onDismiss: o,
showCloseButton: c
  } = e;
  return (0, i.jsxs)(s.Notice, {
className: l.backNotice,
children: [
  c && (0, i.jsx)(s.NoticeCloseButton, {
    onClick: o,
    noticeType: r.kVF.BACK_TO_PREVIOUS_SCREEN
  }),
  (0, i.jsxs)(s.Button, {
    className: l.backButton,
    innerClassName: l.backButtonInner,
    look: s.Button.Looks.OUTLINED,
    color: s.Button.Colors.WHITE,
    size: s.Button.Sizes.NONE,
    onClick: n,
    children: [
      (0, i.jsx)(a.Z, {
        width: 16,
        height: 16,
        direction: a.Z.Directions.LEFT,
        className: l.__invalid_backArrow
      }),
      t
    ]
  })
]
  });
}