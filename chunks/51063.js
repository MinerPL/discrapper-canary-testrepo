"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("789020");
var i = n("735250");
n("470079");
var r = n("913527"),
  a = n.n(r),
  s = n("481060"),
  o = n("835473"),
  l = n("366695"),
  u = n("630388"),
  d = n("981631"),
  _ = n("689938"),
  c = n("707533");

function E(e) {
  let {
    application: t,
    messageTimestamp: n
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.default, {
      size: l.default.Sizes.LARGE,
      game: t
    }), (0, i.jsxs)("div", {
      className: c.textContainer,
      children: [(0, i.jsx)(s.Text, {
        className: c.timestamp,
        variant: "text-xs/medium",
        color: "text-muted",
        children: a()(n).format("LLLL")
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "interactive-active",
        children: _.default.Messages.MESSAGE_GAME_ICON_TOOLTIP_CONTENT.format({
          applicationName: t.name
        })
      })]
    })]
  })
}

function I(e) {
  let {
    message: t
  } = e, n = (0, o.useGetOrFetchApplication)(t.applicationId);
  return null != n && (0, u.hasFlag)(n.flags, d.ApplicationFlags.SOCIAL_LAYER_INTEGRATION) ? (0, i.jsx)(s.Tooltip, {
    hideOnClick: !0,
    position: "top",
    "aria-label": _.default.Messages.MESSAGE_GAME_ICON_TOOLTIP,
    tooltipClassName: c.gameMessageTooltip,
    tooltipContentClassName: c.gameMessageTooltipContent,
    text: (0, i.jsx)(E, {
      application: n,
      messageTimestamp: t.timestamp
    }),
    children: e => (0, i.jsx)(s.Clickable, {
      tag: "span",
      ...e,
      children: (0, i.jsx)(l.default, {
        className: c.gameIcon,
        size: l.default.Sizes.XXSMALL,
        game: n
      })
    })
  }) : null
}