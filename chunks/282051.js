"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("946314"),
  r = n("921944"),
  o = n("689938"),
  u = n("810369");

function d(e) {
  let {
    onClick: t,
    onSecondaryClick: n,
    onComponentMount: d,
    markAsDismissed: c
  } = e;
  s.useEffect(() => {
    null == d || d()
  }, [d]);
  let f = s.useCallback(e => {
      t(e), null == c || c(r.ContentDismissActionType.PRIMARY)
    }, [t, c]),
    E = s.useCallback(() => {
      null == n || n(), null == c || c(r.ContentDismissActionType.SECONDARY)
    }, [n, c]);
  return (0, a.jsxs)("div", {
    className: u.tooltipWrapper,
    children: [(0, a.jsx)(l.Heading, {
      className: u.tooltipHeader,
      variant: "heading-md/semibold",
      children: o.default.Messages.SERVER_DISCOVERY_TOOLTIP_TITLE
    }), (0, a.jsx)(l.Text, {
      className: u.tooltipText,
      variant: "text-sm/normal",
      children: o.default.Messages.SERVER_DISCOVERY_TOOLTIP_DESCRIPTION.format({
        count: i.LOWERED_MINIMUM_SIZE
      })
    }), (0, a.jsxs)("div", {
      className: u.buttonsContainer,
      children: [(0, a.jsx)(l.Button, {
        fullWidth: !0,
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.BRAND,
        onClick: f,
        children: o.default.Messages.LEARN_MORE
      }), (0, a.jsx)(l.Button, {
        fullWidth: !0,
        size: l.Button.Sizes.SMALL,
        look: l.Button.Looks.BLANK,
        onClick: E,
        children: o.default.Messages.NO_THANKS
      })]
    })]
  })
}