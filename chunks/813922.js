"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("536982"),
  i = s("456677"),
  r = s("951665"),
  o = s("428760"),
  d = s("55889"),
  u = s("300453"),
  c = s("620436"),
  E = s("273504"),
  _ = s("689938"),
  I = s("549881");

function T(e) {
  var t, s, T, S, f, m;
  let {
    rule: N,
    onChangeRule: g
  } = e, h = l.useCallback(e => {
    g({
      ...N,
      triggerMetadata: {
        ...N.triggerMetadata,
        keywordFilter: e
      }
    })
  }, [g, N]), C = l.useCallback(e => {
    g({
      ...N,
      triggerMetadata: {
        ...N.triggerMetadata,
        allowList: e
      }
    })
  }, [g, N]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: I.cardContentsContainer,
      children: [(0, a.jsxs)(u.default, {
        step: 1,
        header: _.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_TRIGGER_HEADER,
        children: [(0, a.jsx)(o.default, {
          onChangeText: h,
          maxWordCount: E.MAX_KEYWORDS_PER_KEYWORD_FILTER,
          initialValue: null === (t = N.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
        }), (0, a.jsx)(r.default, {
          rule: N,
          onChangeRule: g,
          collapsed: (null == N ? void 0 : null === (s = N.triggerMetadata) || void 0 === s ? void 0 : s.regexPatterns) == null || (null == N ? void 0 : null === (T = N.triggerMetadata) || void 0 === T ? void 0 : T.regexPatterns.length) === 0
        }), (0, a.jsx)(n.default, {
          onChange: C,
          initialValue: null === (S = N.triggerMetadata) || void 0 === S ? void 0 : S.allowList,
          maxWordCount: E.MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE,
          collapsed: (null === (f = N.triggerMetadata) || void 0 === f ? void 0 : f.allowList) == null || (null === (m = N.triggerMetadata) || void 0 === m ? void 0 : m.allowList.length) === 0
        })]
      }), (0, a.jsx)(c.default, {
        type: c.default.Type.ARROW_DOWN
      }), (0, a.jsx)(u.default, {
        step: 2,
        header: _.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, a.jsx)(i.default, {
          rule: N,
          onChangeRule: g
        })
      }), (0, a.jsx)(c.default, {
        type: c.default.Type.CROSS
      }), (0, a.jsx)(u.default, {
        step: 3,
        header: _.default.Messages.GUILD_AUTOMOD_ROLES_EXEMPTION_HEADER,
        children: (0, a.jsx)(d.default, {
          rule: N,
          onChangeRule: g,
          onlyRoles: !0
        })
      })]
    })
  })
}