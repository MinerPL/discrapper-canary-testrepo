"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("37983"),
  s = l("884691"),
  n = l("414456"),
  o = l.n(n),
  i = l("77078"),
  r = l("230559"),
  d = l("553275"),
  u = l("948512"),
  C = l("782340"),
  c = l("458818");

function m(e) {
  let {
    searchState: t
  } = e, l = s.useMemo(() => ({
    [d.SearchState.LOADING]: null,
    [d.SearchState.SUCCESS_STILL_INDEXING]: {
      icon: (0, a.jsx)(r.default, {}),
      message: C.default.Messages.SEARCH_GUILD_STILL_INDEXING
    },
    [d.SearchState.SUCCESS_EMPTY]: {
      icon: (0, a.jsx)(u.default, {}),
      message: C.default.Messages.MEMBER_SAFETY_TABLE_NO_RESULTS
    },
    [d.SearchState.SUCCESS_FULL]: null
  }), []), n = l[t];
  return null == n ? null : (0, a.jsxs)("div", {
    className: o(c.noResultsContainer),
    children: [(0, a.jsx)("div", {
      className: o(c.noResultsIconContainer),
      children: n.icon
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: n.message
    })]
  })
}