"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  o = l.n(n),
  i = l("481060"),
  r = l("693580"),
  d = l("472596"),
  u = l("918192"),
  C = l("689938"),
  c = l("993748");

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
  }), [])[t];
  return null == l ? null : (0, a.jsxs)("div", {
    className: o()(c.noResultsContainer),
    children: [(0, a.jsx)("div", {
      className: o()(c.__invalid_noResultsIconContainer),
      children: l.icon
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: l.message
    })]
  })
}