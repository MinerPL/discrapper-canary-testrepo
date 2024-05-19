"use strict";
a.r(t), a("47120");
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("481060"),
  l = a("18100"),
  o = a("308083"),
  c = a("689938"),
  d = a("661926");
t.default = e => {
  let {
    guildId: t,
    handleUpdate: a,
    progress: r,
    errors: u
  } = e, {
    wildcardDescriptors: f,
    description: m
  } = r, h = (e, t) => {
    let n = [...f];
    n[t] = e, a({
      wildcardDescriptors: n
    })
  };
  return (0, n.jsxs)("div", {
    className: d.slideContent,
    children: [(0, n.jsx)(i.Heading, {
      variant: "heading-xxl/medium",
      className: d.title,
      children: c.default.Messages.CLAN_SETUP_DESCRIPTION_TITLE
    }), (0, n.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: c.default.Messages.CLAN_SETUP_DESCRIPTION_SUBTITLE
    }), (null == u ? void 0 : u.description) != null && (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: d.errorText,
      children: u.description
    }), (0, n.jsxs)("div", {
      className: d.content,
      children: [(0, n.jsxs)("div", {
        className: d.mainPanelContainer,
        children: [(0, n.jsx)("div", {
          className: d.maxWidthContainer,
          children: (0, n.jsx)(i.TextArea, {
            className: d.input,
            maxLength: o.MAX_DESCRIPTION_LENGTH,
            onChange: e => a({
              description: e
            }),
            value: m,
            rows: 5,
            autoFocus: !0,
            autosize: !0,
            placeholder: c.default.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER
          })
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          className: d.optionalTag,
          children: c.default.Messages.CLAN_SETUP_OPTIONAL
        }), (0, n.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: d.title,
          children: c.default.Messages.CLAN_SETUP_WILDCARDS_SUBTITLE
        }), (null == u ? void 0 : u.wildcardDescriptors) != null && (0, n.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "status-danger",
          className: d.errorText,
          children: u.wildcardDescriptors
        }), (0, n.jsxs)("div", {
          className: d.wildcardRow,
          children: [(0, n.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: f[0],
            onChange: e => h(e, 0),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["0"]
          }), (0, n.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: f[1],
            onChange: e => h(e, 1),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["1"]
          }), (0, n.jsx)(i.TextInput, {
            inputClassName: s()(d.input, d.wildcardInput),
            value: f[2],
            onChange: e => h(e, 2),
            maxLength: o.MAX_WILDCARD_LENGTH,
            placeholder: o.CLAN_WILDCARD_PLACEHOLDERS["2"]
          })]
        })]
      }), (0, n.jsx)("div", {
        className: d.fixedWidthSidebar,
        children: (0, n.jsx)(l.default, {
          guildId: t,
          progress: r,
          maskTraits: !0
        })
      })]
    })]
  })
}