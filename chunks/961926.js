"use strict";
t.d(s, {
  Z: function() {
    return I
  }
});
var n = t(735250),
  i = t(470079),
  l = t(536982),
  a = t(285318),
  r = t(456677),
  o = t(55889),
  c = t(300453),
  d = t(620436),
  u = t(273504),
  E = t(689938),
  _ = t(585175);

function I(e) {
  var s, t, I;
  let {
    rule: T,
    onChangeRule: N
  } = e, m = i.useCallback(e => {
    N({
      ...T,
      triggerMetadata: {
        ...T.triggerMetadata,
        allowList: e
      }
    })
  }, [N, T]);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: _.cardContentsContainer,
      children: [(0, n.jsxs)(c.Z, {
        step: 1,
        header: E.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_TRIGGER_DESCRIPTION,
        children: [(0, n.jsx)(a.Z, {
          rule: T,
          onChangeRule: N
        }), (0, n.jsx)(l.Z, {
          onChange: m,
          initialValue: null === (s = T.triggerMetadata) || void 0 === s ? void 0 : s.allowList,
          maxWordCount: u.I3,
          collapsed: (null === (t = T.triggerMetadata) || void 0 === t ? void 0 : t.allowList) == null || (null === (I = T.triggerMetadata) || void 0 === I ? void 0 : I.allowList.length) === 0
        })]
      }), (0, n.jsx)(d.Z, {
        type: d.Z.Type.ARROW_DOWN
      }), (0, n.jsx)(c.Z, {
        step: 2,
        header: E.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, n.jsx)(r.Z, {
          rule: T,
          onChangeRule: N
        })
      }), (0, n.jsx)(d.Z, {
        type: d.Z.Type.CROSS
      }), (0, n.jsx)(c.Z, {
        step: 3,
        header: E.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, n.jsx)(o.Z, {
          rule: T,
          onChangeRule: N
        })
      })]
    })
  })
}