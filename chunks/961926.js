"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("536982"),
  i = s("285318"),
  r = s("456677"),
  o = s("55889"),
  d = s("300453"),
  u = s("620436"),
  c = s("273504"),
  E = s("689938"),
  _ = s("549881");

function I(e) {
  var t, s, I;
  let {
    rule: T,
    onChangeRule: S
  } = e, f = l.useCallback(e => {
    S({
      ...T,
      triggerMetadata: {
        ...T.triggerMetadata,
        allowList: e
      }
    })
  }, [S, T]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: _.cardContentsContainer,
      children: [(0, a.jsxs)(d.default, {
        step: 1,
        header: E.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_TRIGGER_DESCRIPTION,
        children: [(0, a.jsx)(i.default, {
          rule: T,
          onChangeRule: S
        }), (0, a.jsx)(n.default, {
          onChange: f,
          initialValue: null === (t = T.triggerMetadata) || void 0 === t ? void 0 : t.allowList,
          maxWordCount: c.MAX_KEYWORDS_PER_ALLOWLIST_DEFAULT_KEYWORD_RULE,
          collapsed: (null === (s = T.triggerMetadata) || void 0 === s ? void 0 : s.allowList) == null || (null === (I = T.triggerMetadata) || void 0 === I ? void 0 : I.allowList.length) === 0
        })]
      }), (0, a.jsx)(u.default, {
        type: u.default.Type.ARROW_DOWN
      }), (0, a.jsx)(d.default, {
        step: 2,
        header: E.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
        children: (0, a.jsx)(r.default, {
          rule: T,
          onChangeRule: S
        })
      }), (0, a.jsx)(u.default, {
        type: u.default.Type.CROSS
      }), (0, a.jsx)(d.default, {
        step: 3,
        header: E.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
        children: (0, a.jsx)(o.default, {
          rule: T,
          onChangeRule: S
        })
      })]
    })
  })
}