"use strict";
t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(730671),
  c = t(689938),
  d = t(594757);

function u(e) {
  let {
    onChangeText: s,
    maxWordCount: t,
    className: l,
    textAreaClassName: u,
    subtitleText: E,
    initialValue: _
  } = e, I = i.useMemo(() => null != _ ? _ : [], [_]), {
    value: T,
    onChange: N,
    errorMessage: m
  } = (0, o.Z)(s, _, t);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: a()(d.keywordsContainer, l),
      children: [(0, n.jsx)(r.TextAreaAutosize, {
        className: a()(d.keywordsTextArea, u),
        value: T,
        onChange: N,
        placeholder: c.Z.Messages.GUILD_AUTOMOD_KEYWORDS_PLACEHOLDER
      }), (0, n.jsx)(r.Text, {
        className: d.keywordsCounter,
        variant: "text-xs/normal",
        color: "text-muted",
        children: "".concat(I.length, " / ").concat(t)
      })]
    }), null != m ? (0, n.jsx)(r.Text, {
      className: a()(d.paddingTop, d.errorText),
      variant: "text-xs/medium",
      color: "text-danger",
      children: m
    }) : (0, n.jsx)(r.Text, {
      className: d.paddingTop,
      variant: "text-xs/normal",
      color: "header-secondary",
      children: null != E ? E : c.Z.Messages.GUILD_AUTOMOD_KEYWORD_ENTRY_HINT
    })]
  })
}