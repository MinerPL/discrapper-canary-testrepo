"use strict";
t.d(s, {
  Z: function() {
    return m
  }
}), t(47120), t(724458);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(63063),
  c = t(256569),
  d = t(858457),
  u = t(273504),
  E = t(981631),
  _ = t(689938),
  I = t(646941);
let T = o.Z.getArticleURL(E.BhN.GUILD_AUTOMOD_REGEX);

function N(e) {
  let {
    hasErrors: s,
    text: t,
    errorText: i
  } = e;
  return s ? (0, n.jsx)("div", {
    className: a()(I.subtext),
    children: (0, n.jsx)(r.Text, {
      className: a()(I.errorSpan),
      variant: "text-xs/medium",
      color: "text-danger",
      children: null != i ? i : _.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_HELP.format({
        helpArticle: T
      })
    })
  }) : (0, n.jsx)(r.Text, {
    className: I.subtext,
    variant: "text-xs/medium",
    color: "text-muted",
    children: t
  })
}

function m(e) {
  var s, t;
  let {
    rule: l,
    onChangeText: r,
    className: o
  } = e, {
    patterns: E,
    valueError: m,
    errors: S,
    validatePatternsChanged: h,
    validateEditingValueChanged: g
  } = (0, d.Z)(l, r), [x] = i.useState(() => ({
    tags: E,
    value: "",
    selections: [],
    isSelecting: !1
  })), C = i.useMemo(() => S.reduce((e, s) => {
    let {
      pattern: t,
      message: n,
      description: i,
      erroringCharacterLength: l = t.length,
      erroringCharacterOffset: a = 0
    } = s;
    return null == E.find(e => e === t) ? e : (e[t] = {
      value: t,
      message: null != i ? i : n,
      erroringCharacterLength: l,
      erroringCharacterOffset: a
    }, e)
  }, {}), [S, E]), R = i.useCallback(e => {
    h(e, E)
  }, [h, E]), L = i.useCallback(e => {
    g(e)
  }, [g]);
  return (0, n.jsxs)("div", {
    className: a()(I.keywordsContainer, o),
    children: [(0, n.jsx)(c.Z, {
      placeholder: "^b(a|@)d$\nw(o|0)rd(s|$)",
      initialValue: x,
      onChangeTags: R,
      onChangeNewTagValue: L,
      tagErrors: C,
      maxTags: u.VW
    }), (0, n.jsx)(N, {
      text: _.Z.Messages.GUILD_AUTOMOD_REGEX_SUBTEXT.format({
        helpArticle: T
      }),
      hasErrors: S.length > 0 || null != m,
      errorText: null !== (t = null === (s = S.find(e => {
        let {
          pattern: s
        } = e;
        return s === d.r
      })) || void 0 === s ? void 0 : s.message) && void 0 !== t ? t : null == m ? void 0 : m.message
    })]
  })
}