"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var l = s("456677"),
  n = s("55889"),
  i = s("300453"),
  r = s("620436"),
  o = s("689938"),
  d = s("549881");

function u(e) {
  let {
    rule: t,
    onChangeRule: s
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: d.cardContentsContainer,
      children: [(0, a.jsx)(i.default, {
        step: 1,
        header: o.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_TRIGGER_HEADER
      }), (0, a.jsx)(r.default, {
        type: r.default.Type.ARROW_DOWN
      }), (0, a.jsx)(i.default, {
        step: 2,
        header: o.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, a.jsx)(l.default, {
          rule: t,
          onChangeRule: s
        })
      }), (0, a.jsx)(r.default, {
        type: r.default.Type.CROSS
      }), (0, a.jsx)(i.default, {
        step: 3,
        header: o.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, a.jsx)(n.default, {
          rule: t,
          onChangeRule: s
        })
      })]
    })
  })
}