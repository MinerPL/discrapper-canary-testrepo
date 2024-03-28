"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("408814"),
  i = n("671533"),
  r = n("400251"),
  o = n("689938"),
  u = n("647695"),
  d = n("38478"),
  c = n("176480");
t.default = e => {
  let t, {
    searchQuery: n,
    setSearchQuery: f,
    mostRecentQuery: h,
    handleClearSearch: m,
    handleSearchKeyPress: p,
    handleCreateOrAddGuild: E,
    searchResults: C,
    searchFetching: g
  } = e;
  if (g) t = (0, a.jsx)("div", {
    className: u.pageContainer,
    children: (0, a.jsx)(l.Spinner, {
      className: u.spinner
    })
  });
  else if (0 === C.length) {
    let e = null != E ? o.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_SUBTITLE.format({
      addServerHook: function(e, t) {
        return (0, a.jsx)(l.Anchor, {
          onClick: E,
          children: e
        }, t)
      }
    }) : o.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_NO_ADD;
    t = (0, a.jsxs)("div", {
      className: d.emptySearchWrapper,
      children: [(0, a.jsx)("img", {
        className: d.emptySearchImage,
        alt: "",
        src: c
      }), (0, a.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: d.emptySearchTitle,
        children: o.default.Messages.DIRECTORY_SEARCH_NO_RESULTS_TITLE
      }), (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: d.emptySearchSubtitle,
        children: e
      })]
    })
  } else t = (0, a.jsx)("div", {
    className: u.cardsContainer,
    children: C.map(e => (0, a.jsx)(r.default, {
      entry: e
    }, e.guildId))
  });
  return (0, a.jsx)("div", {
    className: u.pageContainer,
    children: (0, a.jsxs)(l.ScrollerAuto, {
      className: u.scroller,
      children: [(0, a.jsxs)("div", {
        className: d.searchHeader,
        children: [(0, a.jsxs)("div", {
          className: d.headerTitleWrapper,
          children: [(0, a.jsx)(l.Clickable, {
            onClick: m,
            className: d.arrow,
            children: (0, a.jsx)(i.default, {
              direction: i.default.Directions.LEFT
            })
          }), (0, a.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            className: d.searchPageTitle,
            children: o.default.Messages.DIRECTORY_SEARCH_RESULTS_HEADER.format({
              numResults: C.length,
              query: h
            })
          })]
        }), (0, a.jsx)(s.default, {
          searchTerm: n,
          className: d.searchPageBox,
          inputClassName: d.searchPageInput,
          label: o.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: o.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          onChange: f,
          onClear: m,
          onKeyPress: p,
          cta: null != n && n.length > 0 ? o.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
        })]
      }), t]
    })
  })
}