"use strict";
t.r(n), t.d(n, {
  default: function() {
    return p
  }
});
var l = t("735250"),
  a = t("470079"),
  r = t("120356"),
  u = t.n(r),
  s = t("454585"),
  o = t("937889"),
  i = t("970184"),
  d = t("870456"),
  c = t("787076"),
  m = t("990291");

function p(e) {
  let {
    content: n,
    className: t
  } = e, r = function(e) {
    let n = (0, i.useComponentStateContext)();
    return (0, a.useMemo)(() => {
      let t;
      return null === n ? null : (t = null != n.message ? (0, o.getInitialParserStateFromMessage)(n.message, d.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS) : (0, o.getInitialParserState)({
        channelId: n.channelId,
        renderOptions: d.TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS
      }), s.default.parse(e, !0, t))
    }, [e, n])
  }(n);
  return (0, l.jsx)("div", {
    className: u()([t, m.markup, c.markdownContainer]),
    children: r
  })
}