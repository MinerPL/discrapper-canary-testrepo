"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("465670"),
  r = n("689938"),
  o = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    interests: n
  } = e, [u, d] = s.useState(""), c = e => {
    let a = new Set(n);
    a.delete(e), t({
      interests: a
    })
  }, f = s.useCallback(() => {
    let e = u.trim();
    if (0 === e.length) return;
    let a = new Set(n);
    a.add(e), t({
      interests: a
    }), d("")
  }, [t, u, n]), E = s.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), f()
    }
  }, [f]);
  return (0, a.jsxs)("div", {
    className: o.slideContent,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      className: o.title,
      children: r.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: o.subtitle,
      children: r.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), (0, a.jsx)(l.TextInput, {
      value: u,
      onKeyDown: E,
      onChange: d,
      placeholder: r.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER
    }), (0, a.jsx)("div", {
      className: o.selectedSection,
      children: Array.from(n).map(e => (0, a.jsxs)("div", {
        className: o.selectedInterest,
        children: [(0, a.jsx)(l.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: e
        }), (0, a.jsx)(l.Clickable, {
          onClick: () => c(e),
          children: (0, a.jsx)(i.default, {
            color: "grey"
          })
        })]
      }, e))
    })]
  })
}