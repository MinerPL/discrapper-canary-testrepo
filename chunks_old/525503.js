"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("5667"),
  o = n("778588"),
  u = n("782340"),
  d = n("977772");

function c(e) {
  let {
    markAsDismissed: t,
    onClickCta: n,
    shouldShow: c,
    children: f
  } = e, [h, C] = a.useState(!1), p = (0, l.useStateFromStores)([o.default], () => o.default.hasLayers());
  return a.useEffect(() => {
    let e = setTimeout(() => {
      C(c)
    }, 0);
    return () => {
      clearTimeout(e)
    }
  }, [c]), (0, s.jsx)(i.Popout, {
    renderPopout: () => (0, s.jsx)(r.default, {
      className: d.tooltip,
      header: u.default.Messages.POLL_COACHMARK_TITLE,
      content: u.default.Messages.POLL_COACHMARK_SUBTITLE,
      buttonCTA: u.default.Messages.POLL_COACHMARK_CTA,
      secondaryButtonCTA: u.default.Messages.POLL_COACHMARK_DISMISS,
      buttonProps: {
        color: i.Button.Colors.CUSTOM,
        className: d.pollsCtaButton
      },
      secondaryButtonProps: {
        color: i.Button.Colors.CUSTOM,
        look: i.Button.Looks.FILLED,
        className: d.dismissButton
      },
      onClick: n,
      markAsDismissed: t,
      caretPosition: r.CaretPosition.BOTTOM_LEFT,
      buttonLayout: r.ButtonLayout.STACKED
    }),
    position: "top",
    align: "left",
    animation: i.Popout.Animation.TRANSLATE,
    spacing: 10,
    shouldShow: !p && h,
    children: () => f
  })
}