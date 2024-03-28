"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var l = s("85960"),
  n = s("489776"),
  i = s("252121"),
  r = s("564488");

function o(e) {
  let {
    guildId: t,
    rules: s,
    triggerType: o,
    initWithEdit: d
  } = e, {
    perGuildMaxCount: u
  } = l.triggerConfigs[o], c = 0 === s.length, E = u > s.length && !c;
  return (0, a.jsxs)(a.Fragment, {
    children: [c && (0, a.jsx)(i.default, {
      guildId: t,
      triggerType: o
    }), s.map(e => (0, a.jsx)(r.default, {
      rule: e,
      initWithEdit: d
    }, e.id)), E && (0, a.jsx)(n.default, {
      guildId: t,
      triggerType: o
    })]
  })
}