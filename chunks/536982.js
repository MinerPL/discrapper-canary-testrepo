"use strict";
t.d(s, {
  Z: function() {
    return u
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(86813),
  r = t(826026),
  o = t(428760),
  c = t(689938),
  d = t(448396);

function u(e) {
  let {
    onChange: s,
    initialValue: t,
    maxWordCount: u,
    collapsed: E = !1
  } = e, [_, I] = i.useState(!E);
  return (0, n.jsx)(l.Collapsible, {
    isExpanded: _,
    collapsibleContent: (0, n.jsx)(o.Z, {
      onChangeText: s,
      maxWordCount: u,
      className: d.keywordTextAreaContainer,
      textAreaClassName: d.keywordTextArea,
      subtitleText: c.Z.Messages.GUILD_AUTOMOD_ALLOW_LIST_SUBTITLE,
      initialValue: t
    }),
    className: d.collapseable,
    children: e => {
      let {
        onClick: s
      } = e;
      return (0, n.jsx)(l.Clickable, {
        onClick: e => {
          I(!_), s(e)
        },
        children: (0, n.jsxs)("div", {
          className: d.header,
          children: [(0, n.jsx)(l.Heading, {
            variant: "text-sm/medium",
            children: c.Z.Messages.GUILD_AUTOMOD_ALLOW_LIST_TITLE
          }), _ ? (0, n.jsx)(r.Z, {
            className: d.arrow
          }) : (0, n.jsx)(a.Z, {
            className: d.arrow
          })]
        })
      })
    }
  })
}