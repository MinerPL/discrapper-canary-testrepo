"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("481060"),
  r = n("871118"),
  o = n("746934"),
  u = n("689938"),
  d = n("373448");

function c(e) {
  let {
    stream: t,
    isSmall: n,
    selected: l,
    isSelfStream: c
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.default, {
      className: s()(d.absoluteFill, d.streamPreviewOpacity),
      stream: t,
      noText: !0
    }), !l && (0, a.jsxs)("div", {
      className: s()(d.content, d.streamUnavailable, {
        [d.small]: n
      }),
      children: [(0, a.jsx)(i.Text, {
        className: d.streamUnavailableText,
        color: "always-white",
        variant: n ? "text-sm/semibold" : "text-md/semibold",
        children: c ? u.default.Messages.CONSOLE_STREAMING : u.default.Messages.CONSOLE_STREAM_UNAVAILABLE
      }), (0, a.jsx)(i.TooltipContainer, {
        text: c ? u.default.Messages.CONSOLE_STREAMING_TOOLTIP : u.default.Messages.CONSOLE_STREAM_UNAVAILABLE_TOOLTIP,
        className: d.darkCircle,
        children: (0, a.jsx)("div", {
          children: (0, a.jsx)(o.default, {
            className: d.stopStreamIcon,
            foreground: d.stopStreamForeground
          })
        })
      })]
    })]
  })
}