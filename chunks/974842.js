"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("308083"),
  i = n("689938"),
  r = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    tag: n
  } = e;
  return (0, a.jsxs)("div", {
    className: r.slideContent,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: r.title,
      children: i.default.Messages.CLAN_SETUP_CUSTOMIZE_TITLE
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: r.subtitle,
      children: i.default.Messages.CLAN_SETUP_CUSTOMIZE_SUBTITLE
    }), (0, a.jsx)(s.TextInput, {
      inputClassName: r.tagInput,
      value: n,
      onChange: e => t({
        tag: e
      }),
      maxLength: l.MAX_TAG_LENGTH,
      placeholder: i.default.Messages.CLAN_SETUP_TAG_PLACEHOLDER
    })]
  })
}