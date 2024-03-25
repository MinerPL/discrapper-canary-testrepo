"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("837899"),
  r = s("425190"),
  o = s("301341"),
  d = s("782340"),
  u = s("123402");

function c(e) {
  let {
    onChange: t,
    initialValue: s,
    maxWordCount: c,
    collapsed: E = !1
  } = e, [_, I] = l.useState(!E);
  return (0, a.jsx)(n.Collapsible, {
    isExpanded: _,
    collapsibleContent: (0, a.jsx)(o.default, {
      onChangeText: t,
      maxWordCount: c,
      className: u.keywordTextAreaContainer,
      textAreaClassName: u.keywordTextArea,
      subtitleText: d.default.Messages.GUILD_AUTOMOD_ALLOW_LIST_SUBTITLE,
      initialValue: s
    }),
    className: u.collapseable,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, a.jsx)(n.Clickable, {
        onClick: e => {
          I(!_), t(e)
        },
        children: (0, a.jsxs)("div", {
          className: u.header,
          children: [(0, a.jsx)(n.Heading, {
            variant: "text-sm/medium",
            children: d.default.Messages.GUILD_AUTOMOD_ALLOW_LIST_TITLE
          }), _ ? (0, a.jsx)(r.default, {
            className: u.arrow
          }) : (0, a.jsx)(i.default, {
            className: u.arrow
          })]
        })
      })
    }
  })
}