"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var s = a("37983");
a("884691");
var n = a("414456"),
  i = a.n(n),
  l = a("77078"),
  r = a("564875"),
  o = a("701909"),
  d = a("386244"),
  u = a("253989"),
  c = a("49111"),
  E = a("782340"),
  m = a("250727"),
  f = a("259707");

function S(e) {
  let {
    user: t
  } = e;
  return (0, s.jsxs)("div", {
    className: m.infoContainer,
    children: [(0, s.jsx)("img", {
      className: m.infoPicture,
      alt: "",
      src: f
    }), (0, s.jsx)(l.Heading, {
      className: m.title,
      color: "header-primary",
      variant: "heading-xl/bold",
      children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
        n: t.tag
      })
    }), (0, s.jsx)(l.Text, {
      className: m.subtitleInfo,
      color: "header-secondary",
      variant: "text-md/medium",
      children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format()
    }), (0, s.jsx)(l.Text, {
      className: m.prompt,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
        helpdeskArticle: o.default.getArticleURL(c.HelpdeskArticles.POMELO_FAQ)
      })
    }), (0, s.jsxs)("div", {
      className: i([m.infoItem, m.infoItemSpacing]),
      children: [(0, s.jsx)("div", {
        className: m.infoIcon,
        children: (0, s.jsx)(r.default, {
          width: 20,
          height: 20
        })
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format()
      })]
    }), (0, s.jsxs)("div", {
      className: i([m.infoItem, m.infoItemSpacing]),
      children: [(0, s.jsx)("div", {
        className: m.infoIcon,
        children: (0, s.jsx)(d.default, {
          width: 20,
          height: 20
        })
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format()
      })]
    }), (0, s.jsxs)("div", {
      className: m.infoItem,
      children: [(0, s.jsx)("div", {
        className: m.infoIcon,
        children: (0, s.jsx)(u.default, {
          width: 20,
          height: 20
        })
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: E.default.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format({
          username: t.tag
        })
      })]
    })]
  })
}