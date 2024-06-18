"use strict";
t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250),
  i = t(470079),
  l = t(536982),
  a = t(456677),
  r = t(951665),
  o = t(428760),
  c = t(55889),
  d = t(300453),
  u = t(620436),
  E = t(273504),
  _ = t(689938),
  I = t(585175);

function T(e) {
  var s, t, T, N, m, S;
  let {
    rule: h,
    onChangeRule: g
  } = e, x = i.useCallback(e => {
    g({
      ...h,
      triggerMetadata: {
        ...h.triggerMetadata,
        keywordFilter: e
      }
    })
  }, [g, h]), C = i.useCallback(e => {
    g({
      ...h,
      triggerMetadata: {
        ...h.triggerMetadata,
        allowList: e
      }
    })
  }, [g, h]);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)("div", {
      className: I.cardContentsContainer,
      children: [(0, n.jsxs)(d.Z, {
        step: 1,
        header: _.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_TRIGGER_HEADER,
        children: [(0, n.jsx)(o.Z, {
          onChangeText: x,
          maxWordCount: E.RH,
          initialValue: null === (s = h.triggerMetadata) || void 0 === s ? void 0 : s.keywordFilter
        }), (0, n.jsx)(r.Z, {
          rule: h,
          onChangeRule: g,
          collapsed: (null == h ? void 0 : null === (t = h.triggerMetadata) || void 0 === t ? void 0 : t.regexPatterns) == null || (null == h ? void 0 : null === (T = h.triggerMetadata) || void 0 === T ? void 0 : T.regexPatterns.length) === 0
        }), (0, n.jsx)(l.Z, {
          onChange: C,
          initialValue: null === (N = h.triggerMetadata) || void 0 === N ? void 0 : N.allowList,
          maxWordCount: E.n4,
          collapsed: (null === (m = h.triggerMetadata) || void 0 === m ? void 0 : m.allowList) == null || (null === (S = h.triggerMetadata) || void 0 === S ? void 0 : S.allowList.length) === 0
        })]
      }), (0, n.jsx)(u.Z, {
        type: u.Z.Type.ARROW_DOWN
      }), (0, n.jsx)(d.Z, {
        step: 2,
        header: _.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, n.jsx)(a.Z, {
          rule: h,
          onChangeRule: g
        })
      }), (0, n.jsx)(u.Z, {
        type: u.Z.Type.CROSS
      }), (0, n.jsx)(d.Z, {
        step: 3,
        header: _.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, n.jsx)(c.Z, {
          rule: h,
          onChangeRule: g
        })
      })]
    })
  })
}