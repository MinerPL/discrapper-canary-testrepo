"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("803997"),
  i = s.n(n),
  r = s("481060"),
  o = s("730671"),
  d = s("689938"),
  u = s("732374");

function c(e) {
  let {
    onChangeText: t,
    maxWordCount: s,
    className: n,
    textAreaClassName: c,
    subtitleText: E,
    initialValue: _
  } = e, I = l.useMemo(() => null != _ ? _ : [], [_]), {
    value: T,
    onChange: S,
    errorMessage: f
  } = (0, o.default)(t, _, s);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(u.keywordsContainer, n),
      children: [(0, a.jsx)(r.TextAreaAutosize, {
        className: i()(u.keywordsTextArea, c),
        value: T,
        onChange: S,
        placeholder: d.default.Messages.GUILD_AUTOMOD_KEYWORDS_PLACEHOLDER
      }), (0, a.jsx)(r.Text, {
        className: u.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(I.length, " / ").concat(s)
      })]
    }), null != f ? (0, a.jsx)(r.Text, {
      className: i()(u.paddingTop, u.errorText),
      variant: "text-xs/medium",
      color: "text-danger",
      children: f
    }) : (0, a.jsx)(r.Text, {
      className: u.paddingTop,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: null != E ? E : d.default.Messages.GUILD_AUTOMOD_KEYWORD_ENTRY_HINT
    })]
  })
}