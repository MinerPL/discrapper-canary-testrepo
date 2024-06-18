"use strict";
t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var i = t(456677),
  l = t(55889),
  a = t(300453),
  r = t(620436),
  o = t(689938),
  c = t(585175);

function d(e) {
  let {
    rule: s,
    onChangeRule: t
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: c.cardContentsContainer,
      children: [(0, n.jsx)(a.Z, {
        step: 1,
        header: o.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_TRIGGER_HEADER
      }), (0, n.jsx)(r.Z, {
        type: r.Z.Type.ARROW_DOWN
      }), (0, n.jsx)(a.Z, {
        step: 2,
        header: o.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, n.jsx)(i.Z, {
          rule: s,
          onChangeRule: t
        })
      }), (0, n.jsx)(r.Z, {
        type: r.Z.Type.CROSS
      }), (0, n.jsx)(a.Z, {
        step: 3,
        header: o.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, n.jsx)(l.Z, {
          rule: s,
          onChangeRule: t
        })
      })]
    })
  })
}