"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("689938"),
  i = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    description: n
  } = e;
  return (0, a.jsxs)("div", {
    className: i.slideContent,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: i.title,
      children: l.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: i.subtitle,
      children: l.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (0, a.jsx)(s.TextArea, {
      maxLength: 120,
      onChange: e => t({
        description: e
      }),
      value: n,
      rows: 2
    })]
  })
}