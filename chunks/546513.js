"use strict";
t.d(s, {
  Z: function() {
    return o
  }
});
var n = t(735250);
t(470079);
var i = t(85960),
  l = t(489776),
  a = t(252121),
  r = t(564488);

function o(e) {
  let {
    guildId: s,
    rules: t,
    triggerType: o,
    initWithEdit: c
  } = e, {
    perGuildMaxCount: d
  } = i.I6[o], u = 0 === t.length, E = d > t.length && !u;
  return (0, n.jsxs)(n.Fragment, {
    children: [u && (0, n.jsx)(a.Z, {
      guildId: s,
      triggerType: o
    }), t.map(e => (0, n.jsx)(r.Z, {
      rule: e,
      initWithEdit: c
    }, e.id)), E && (0, n.jsx)(l.Z, {
      guildId: s,
      triggerType: o
    })]
  })
}