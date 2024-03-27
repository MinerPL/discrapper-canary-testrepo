"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("169456"),
  i = s("185709"),
  r = s("432107"),
  o = s("301341"),
  d = s("260928"),
  u = s("67310"),
  c = s("296416"),
  E = s("143460"),
  _ = s("782340"),
  I = s("334568");

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