"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("77498"),
  o = n("465670"),
  u = n("689938"),
  d = n("597338");
t.default = e => {
  let {
    handleUpdate: t,
    selectedGames: n,
    gameDetails: c
  } = e, f = (0, l.useStateFromStores)([r.default], () => r.default.games), E = s.useMemo(() => f.map(e => ({
    value: e.id,
    label: e.name
  })), [f]), h = e => {
    let a = new Set(n);
    a.delete(e), t({
      selectedGames: a
    })
  };
  return (0, a.jsxs)("div", {
    className: d.slideContent,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: d.title,
      children: u.default.Messages.CLAN_SETUP_GAMES_TITLE
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: d.subtitle,
      children: u.default.Messages.CLAN_SETUP_GAMES_SUBTITLE
    }), (0, a.jsx)("div", {
      className: d.inputContainer,
      children: (0, a.jsx)(i.SearchableSelect, {
        options: E,
        value: "",
        placeholder: u.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: e => {
          let a = new Set(n);
          a.add(e), t({
            selectedGames: a
          })
        }
      })
    }), (0, a.jsxs)("div", {
      className: d.contentWithMinHeight,
      children: [n.size > 0 && (0, a.jsx)(i.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: d.contentLabel,
        children: u.default.Messages.CLAN_SETUP_SELECTED_GAMES
      }), (0, a.jsx)("div", {
        className: d.selectedSection,
        children: Array.from(n).map(e => {
          var t;
          return (0, a.jsxs)("div", {
            children: [(0, a.jsx)("div", {
              className: d.gameImagePlaceholder,
              children: (0, a.jsx)(i.Clickable, {
                className: d.removeGame,
                onClick: () => h(e),
                children: (0, a.jsx)(o.default, {
                  color: "grey"
                })
              })
            }), (0, a.jsx)(i.Text, {
              variant: "text-xs/medium",
              color: "header-primary",
              children: null === (t = c[e]) || void 0 === t ? void 0 : t.name
            })]
          }, e)
        })
      })]
    })]
  })
}