"use strict";
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("481060"),
  o = n("729285"),
  c = n("87576"),
  d = n("308083"),
  u = n("689938"),
  f = n("418571");

function m(e) {
  return !d.ALL_TRAITS_SET.has(e) && !d.SUGGESTED_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    handleUpdate: t,
    interests: n,
    error: r
  } = e, [h, E] = i.useState(""), T = i.useMemo(() => Array.from(n), [n]), p = i.useMemo(() => T.filter(m), [T]), _ = i.useMemo(() => [...d.SUGGESTED_TRAITS_SET, ...p], [p]), C = i.useMemo(() => T.filter(e => !d.ALL_TRAITS_SET.has(e) && !d.LANGUAGES_SET.has(e)), [T]), g = e => {
    let a = new Set(n);
    a.delete(e), t({
      interests: a
    })
  }, x = i.useCallback(e => {
    if (n.size === d.MAX_NUM_INTERESTS) return;
    let a = null != e ? e : h.trim();
    if (0 === a.length) return;
    let i = new Set(n);
    i.add(a), t({
      interests: i
    }), E("")
  }, [t, h, n]), I = i.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), x()
    }
  }, [x]);
  return (0, a.jsxs)("div", {
    className: f.slideContentWithSidebar,
    children: [(0, a.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: f.title,
      children: u.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: f.subtitle,
      children: u.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE
    }), null != r && (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: f.errorText,
      children: r
    }), (0, a.jsxs)("div", {
      className: f.content,
      children: [(0, a.jsxs)("div", {
        className: f.mainPanelContainer,
        children: [(0, a.jsxs)("div", {
          className: f.inputContainer,
          children: [(0, a.jsx)(l.TextInput, {
            inputClassName: f.input,
            value: h,
            onKeyDown: I,
            onChange: E,
            placeholder: u.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: d.MAX_INTEREST_LENGTH,
            disabled: n.size === d.MAX_NUM_INTERESTS
          }), h.length > 0 && (0, a.jsx)(l.Clickable, {
            onClick: () => x(h.trim()),
            className: s()(f.plusIcon, f.clickable),
            children: (0, a.jsx)(o.default, {
              className: f.icon
            })
          }), h.length > 0 && (0, a.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: f.enterToSearchText,
            children: u.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, a.jsx)(l.Text, {
          className: f.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: u.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, a.jsx)("div", {
          className: f.interestsCategory,
          children: _.map(e => {
            let t = n.has(e);
            return (0, a.jsx)(l.Clickable, {
              className: s()(f.interestsTag, {
                [f.selected]: t
              }),
              onClick: () => t ? g(e) : x(e),
              children: (0, a.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, a.jsx)("div", {
        className: f.fixedWidthSidebar,
        children: T.length > 0 && (0, a.jsx)(c.default, {
          traits: T,
          traitsToHighlight: C
        })
      })]
    })]
  })
}