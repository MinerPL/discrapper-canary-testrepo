"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120"), s("724458");
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("63063"),
  d = s("256569"),
  u = s("858457"),
  c = s("273504"),
  E = s("981631"),
  _ = s("689938"),
  I = s("531095");
let T = o.default.getArticleURL(E.HelpdeskArticles.GUILD_AUTOMOD_REGEX);

function S(e) {
  let {
    hasErrors: t,
    text: s,
    errorText: l
  } = e;
  return t ? (0, a.jsx)("div", {
    className: i()(I.subtext),
    children: (0, a.jsx)(r.Text, {
      className: i()(I.errorSpan),
      variant: "text-xs/medium",
      color: "text-danger",
      children: null != l ? l : _.default.Messages.GUILD_AUTOMOD_REGEX_ERROR_HELP.format({
        helpArticle: T
      })
    })
  }) : (0, a.jsx)(r.Text, {
    className: I.subtext,
    variant: "text-xs/medium",
    color: "text-muted",
    children: s
  })
}

function f(e) {
  var t, s;
  let {
    rule: n,
    onChangeText: r,
    className: o
  } = e, {
    patterns: E,
    valueError: f,
    errors: m,
    validatePatternsChanged: N,
    validateEditingValueChanged: g
  } = (0, u.default)(n, r), [h] = l.useState(() => ({
    tags: E,
    value: "",
    selections: [],
    isSelecting: !1
  })), C = l.useMemo(() => m.reduce((e, t) => {
    let {
      pattern: s,
      message: a,
      description: l,
      erroringCharacterLength: n = s.length,
      erroringCharacterOffset: i = 0
    } = t;
    return null == E.find(e => e === s) ? e : (e[s] = {
      value: s,
      message: null != l ? l : a,
      erroringCharacterLength: n,
      erroringCharacterOffset: i
    }, e)
  }, {}), [m, E]), R = l.useCallback(e => {
    N(e, E)
  }, [N, E]), x = l.useCallback(e => {
    g(e)
  }, [g]);
  return (0, a.jsxs)("div", {
    className: i()(I.keywordsContainer, o),
    children: [(0, a.jsx)(d.default, {
      placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
      initialValue: h,
      onChangeTags: R,
      onChangeNewTagValue: x,
      tagErrors: C,
      maxTags: c.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER
    }), (0, a.jsx)(S, {
      text: _.default.Messages.GUILD_AUTOMOD_REGEX_SUBTEXT.format({
        helpArticle: T
      }),
      hasErrors: m.length > 0 || null != f,
      errorText: null !== (s = null === (t = m.find(e => {
        let {
          pattern: t
        } = e;
        return t === u.SCHEMA_ERROR_KEY
      })) || void 0 === t ? void 0 : t.message) && void 0 !== s ? s : null == f ? void 0 : f.message
    })]
  })
}