"use strict";
a.r(t), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("442837"),
  c = a("314897"),
  d = a("729285"),
  u = a("353093"),
  f = a("18100"),
  m = a("308083"),
  h = a("689938"),
  p = a("661926");

function E(e) {
  return !m.ALL_TRAITS_SET.has(e) && !m.SUGGESTED_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)
}
t.default = e => {
  let {
    guildId: t,
    handleUpdate: a,
    progress: s,
    error: T
  } = e, {
    interests: C
  } = s, [x, _] = r.useState(""), g = (0, o.useStateFromStores)([c.default], () => c.default.getId()), I = r.useMemo(() => (0, u.stableSortSet)(m.SUGGESTED_TRAITS_SET, g), [g]), N = r.useMemo(() => Array.from(C), [C]), v = r.useMemo(() => N.filter(E), [N]), A = r.useMemo(() => [...I, ...v], [v, I]), S = r.useMemo(() => N.filter(e => !m.ALL_TRAITS_SET.has(e) && !m.LANGUAGES_SET.has(e)), [N]), L = e => {
    let t = new Set(C);
    t.delete(e), a({
      interests: t
    })
  }, R = r.useCallback(e => {
    if (C.size === m.MAX_NUM_INTERESTS) return;
    let t = null != e ? e : x.trim();
    if (0 === t.length) return;
    let n = new Set(C);
    n.add(t), a({
      interests: n
    }), _("")
  }, [a, x, C]), y = r.useCallback(e => {
    switch (e.key) {
      case "Enter":
      case "Tab":
        e.preventDefault(), e.stopPropagation(), R()
    }
  }, [R]);
  return (0, n.jsxs)("div", {
    className: p.slideContent,
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-xxl/medium",
      className: p.title,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_TITLE
    }), (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.subtitle,
      children: h.default.Messages.CLAN_SETUP_INTERESTS_SUBTITLE.format()
    }), null != T && (0, n.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "status-danger",
      className: p.errorText,
      children: T
    }), (0, n.jsxs)("div", {
      className: p.content,
      children: [(0, n.jsxs)("div", {
        className: p.mainPanelContainer,
        children: [(0, n.jsxs)("div", {
          className: p.inputContainer,
          children: [(0, n.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            className: p.contentLabel,
            children: h.default.Messages.CLAN_SETUP_INTERESTS_LABEL
          }), (0, n.jsx)(l.TextInput, {
            autoFocus: !0,
            inputClassName: p.input,
            value: x,
            onKeyDown: y,
            onChange: _,
            placeholder: h.default.Messages.CLAN_SETUP_INTERESTS_PLACEHOLDER,
            maxLength: m.MAX_INTEREST_LENGTH,
            disabled: C.size === m.MAX_NUM_INTERESTS
          }), x.length > 0 && (0, n.jsx)(l.Clickable, {
            onClick: () => R(x.trim()),
            className: i()(p.plusIcon, p.clickable),
            children: (0, n.jsx)(d.default, {
              className: p.icon
            })
          }), x.length > 0 && (0, n.jsx)(l.Text, {
            color: "text-muted",
            variant: "text-xs/normal",
            className: p.enterToSearchText,
            children: h.default.Messages.CLAN_SETUP_INTERESTS_HELP
          })]
        }), (0, n.jsx)(l.Text, {
          className: p.interestsCategoryTitle,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: h.default.Messages.CLAN_SETUP_SUGGESTED_INTERESTS
        }), (0, n.jsx)("div", {
          className: p.interestsCategory,
          children: A.map(e => {
            let t = C.has(e);
            return (0, n.jsx)(l.Clickable, {
              className: i()(p.interestsTag, p.selectableOption, {
                [p.selectedOption]: t
              }),
              onClick: () => t ? L(e) : R(e),
              children: (0, n.jsx)(l.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: e
              })
            }, e)
          })
        })]
      }), (0, n.jsx)("div", {
        className: p.fixedWidthSidebar,
        children: N.length > 0 && (0, n.jsx)(f.default, {
          guildId: t,
          progress: s,
          traitsToHighlight: S,
          maskDescription: !0
        })
      })]
    })]
  })
}