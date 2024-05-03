"use strict";
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("442837"),
  s = n("481060"),
  l = n("32966"),
  o = n("314897"),
  c = n("77498"),
  d = n("364083"),
  u = n("92373"),
  f = n("308083"),
  m = n("689938"),
  h = n("418571");
t.default = e => {
  let {
    title: t,
    description: n,
    handleUpdate: E,
    gameApplicationIds: T,
    error: p,
    requiredGameId: _
  } = e, C = (0, r.useStateFromStores)([o.default], () => o.default.getId()), {
    recentGames: g
  } = (0, l.useUserRecentGames)(C), {
    options: x,
    matchSorterOptions: I
  } = (0, d.useClanSetupGameSelectableSearch)();
  i.useEffect(() => {
    null != _ && !T.has(_) && x.length > 0 && N(_)
  }, [x.length, _]);
  let v = e => {
      if (!T.has(e) || e === _) return;
      let t = new Set(T);
      t.delete(e), E(t)
    },
    N = e => {
      if (T.size === f.MAX_NUM_SELECTED_GAMES || T.has(e) || null == c.default.getGameById(e)) return;
      let t = new Set(T);
      t.add(e), E(t)
    };
  return (0, a.jsxs)("div", {
    className: h.slideContent,
    children: [(0, a.jsx)(s.Heading, {
      variant: "heading-xxl/medium",
      className: h.title,
      children: t
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: h.subtitle,
      children: n
    }), (0, a.jsx)("div", {
      className: h.inputContainer,
      children: (0, a.jsx)(s.SearchableSelect, {
        wrapperClassName: h.input,
        options: x,
        value: "",
        placeholder: m.default.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
        onChange: N,
        isDisabled: T.size === f.MAX_NUM_SELECTED_GAMES,
        matchSorterOptions: I
      })
    }), (0, a.jsxs)("div", {
      className: h.contentWithMinHeight,
      children: [null != p && (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "status-danger",
        className: h.errorText,
        children: p
      }), T.size > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: m.default.Messages.CLAN_SETUP_SELECTED_GAMES
        }), (0, a.jsx)("div", {
          className: h.selectedSection,
          children: Array.from(T).map(e => (0, a.jsx)(u.default, {
            applicationId: e,
            onClick: e !== _ ? v : void 0,
            imageContainerClassName: e !== _ ? h.clickableGame : h.defaultGame,
            selected: !0
          }, e))
        }), (0, a.jsx)("div", {
          className: h.divider
        })]
      }), null != g && g.length > 0 && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: h.contentLabel,
          children: m.default.Messages.RECENT_GAMES
        }), (0, a.jsx)("div", {
          className: h.selectedSection,
          children: g.map(e => (0, a.jsx)(u.default, {
            applicationId: e.applicationId,
            onClick: N,
            imageContainerClassName: h.clickableGame
          }, e.applicationId))
        })]
      })]
    })]
  })
}