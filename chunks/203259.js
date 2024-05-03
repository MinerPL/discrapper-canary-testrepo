"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("39604"),
  i = n("176127"),
  r = n("689938"),
  o = n("849823");

function u(e) {
  let {
    onOpenClipsGallery: t,
    clipIconRef: n,
    lastClipsSession: u
  } = e;
  return (0, s.jsxs)(a.TooltipLayer, {
    tooltipClassName: o.reminderTooltip,
    tooltipContentClassName: o.tooltipContent,
    targetElementRef: {
      current: n
    },
    position: "bottom",
    color: a.TooltipColors.PRIMARY,
    children: [(0, s.jsx)(i.default, {}), (0, s.jsx)(a.Heading, {
      variant: "heading-md/extrabold",
      children: r.default.Messages.CLIPS_YOU_HAVE_NEW_CLIPS.format({
        count: u.newClipIds.length
      })
    }), (0, s.jsxs)("div", {
      className: o.buttonContainer,
      children: [(0, s.jsx)(a.Button, {
        color: a.Button.Colors.TRANSPARENT,
        onClick: l.clearClipsSession,
        children: r.default.Messages.DISMISS
      }), (0, s.jsx)(a.Button, {
        color: a.Button.Colors.BRAND,
        onClick: t,
        children: r.default.Messages.CLIPS_REVIEW_NOW
      })]
    })]
  })
}