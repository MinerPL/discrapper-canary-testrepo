"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var s = a("735250");
a("470079");
var i = a("803997"),
  n = a.n(i),
  l = a("481060"),
  o = a("988951"),
  r = a("63063"),
  d = a("773446"),
  u = a("572264"),
  c = a("981631"),
  E = a("689938"),
  m = a("659338"),
  S = a("849399");

function f(e) {
  let {
    user: t
  } = e;
  return (0, s.jsxs)("div", {
    className: m.infoContainer,
    children: [(0, s.jsx)("img", {
      className: m.infoPicture,
      alt: "",
      src: S
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
        helpdeskArticle: r.default.getArticleURL(c.HelpdeskArticles.POMELO_FAQ)
      })
    }), (0, s.jsxs)("div", {
      className: n()([m.infoItem, m.infoItemSpacing]),
      children: [(0, s.jsx)("div", {
        className: m.infoIcon,
        children: (0, s.jsx)(o.default, {
          width: 20,
          height: 20
        })
      }), (0, s.jsx)(l.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format()
      })]
    }), (0, s.jsxs)("div", {
      className: n()([m.infoItem, m.infoItemSpacing]),
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