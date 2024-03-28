"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("970731"),
  o = n("819640"),
  u = n("689938"),
  d = n("20750");

function c(e) {
  let {
    markAsDismissed: t,
    onClickCta: n,
    shouldShow: c,
    children: f
  } = e, [h, m] = l.useState(!1), p = (0, s.useStateFromStores)([o.default], () => o.default.hasLayers());
  return l.useEffect(() => {
    let e = setTimeout(() => {
      m(c)
    }, 0);
    return () => {
      clearTimeout(e)
    }
  }, [c]), (0, a.jsx)(i.Popout, {
    renderPopout: () => (0, a.jsx)(r.default, {
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