"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var l = s("296839"),
  n = s("88063"),
  i = s("320493"),
  r = s("842357");

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