"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var a = n("970731"),
  s = n("689938"),
  i = n("51473"),
  r = n("56512");

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, l.jsx)(a.default, {
    header: s.default.Messages.BROADCASTING_BROADCASTER_TOOLTIP_HEADER,
    content: s.default.Messages.BROADCASTING_BROADCASTER_TOOLTIP_BODY,
    buttonCTA: s.default.Messages.GOT_IT,
    onClick: () => {},
    markAsDismissed: t,
    caretPosition: a.default.CaretPosition.BOTTOM_CENTER,
    asset: (0, l.jsx)("img", {
      src: r,
      alt: "",
      className: i.image
    }),
    className: i.content
  })
}