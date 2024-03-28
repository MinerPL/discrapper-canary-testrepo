"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("758059"),
  d = n("194359"),
  c = n("410575"),
  f = n("607070"),
  E = n("100527"),
  h = n("906732"),
  _ = n("205976"),
  C = n("699516"),
  m = n("974042"),
  S = n("451478"),
  I = n("6048"),
  p = n("390697"),
  T = n("434184"),
  g = n("701861"),
  A = n("437314"),
  N = n("696577"),
  v = n("163417"),
  O = n("492347"),
  R = n("42575"),
  L = n("617015"),
  P = n("981631"),
  M = n("689938"),
  y = n("488324");
t.default = function(e) {
  let {
    sectionFilter: t,
    titleId: n
  } = e, {
    analyticsLocations: l
  } = (0, h.default)(E.default.FRIENDS_LIST), {
    rows: D,
    section: b
  } = (0, r.useStateFromStoresObject)([m.default], () => m.default.getState()), x = (0, r.useStateFromStores)([S.default], () => S.default.isFocused()), U = (0, r.useStateFromStores)([C.default], () => C.default.getRelationshipCount()), j = (0, p.useIsClearIncomingFriendRequestsEnabled)(), [G, w] = s.useState(() => {
    let e = {};
    for (let t of Object.values(P.FriendsSections)) e[t] = "";
    return e
  }), k = s.useCallback(e => {
    w({
      ...G,
      [t]: e
    })
  }, [G, t]), F = s.useCallback(() => {
    w({
      ...G,
      [t]: ""
    })
  }, [G, t]), B = D.filter(t, G[t]);
  if (0 === B.length && "" === G[t]) return (0, a.jsxs)("div", {
    className: y.emptyStateContainer,
    children: [t === P.FriendsSections.ONLINE && (0, a.jsx)(_.default, {}), (0, a.jsx)(A.default, {
      type: t,
      onClick: () => {
        u.default.setSection(P.FriendsSections.ADD_FRIEND)
      }
    }, b)]
  });
  let H = 0 === B.length && "" !== G[t],
    V = B.filter(e => e.type === P.RelationshipTypes.PENDING_INCOMING).length,
    Y = t === P.FriendsSections.PENDING && V > 0 && j && V >= L.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
  return (0, a.jsx)(h.AnalyticsLocationProvider, {
    value: l,
    children: (0, a.jsxs)(c.default, {
      section: P.AnalyticsSections.FRIENDS_LIST,
      children: [(0, a.jsx)(I.default, {
        className: i()(y.searchBar, H ? y.searchEmptyState : null),
        query: G[t],
        onChange: k,
        onClear: F,
        size: I.default.Sizes.MEDIUM
      }), t === P.FriendsSections.ONLINE && "" === G[t] && (0, a.jsx)(_.default, {}), (0, a.jsxs)("div", {
        className: y.sectionTitle,
        children: [(0, a.jsx)(O.default, {
          id: n,
          title: function(e, t) {
            switch (e) {
              case P.FriendsSections.ONLINE:
                return M.default.Messages.FRIENDS_ONLINE_HEADER.format({
                  online: t.toString()
                });
              case P.FriendsSections.PENDING:
                return M.default.Messages.FRIENDS_PENDING_HEADER.format({
                  count: t.toString()
                });
              case P.FriendsSections.SUGGESTIONS:
                return M.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                  count: t.toString()
                });
              case P.FriendsSections.BLOCKED:
                return M.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                  count: t.toString()
                });
              default:
                return M.default.Messages.FRIENDS_ALL_HEADER.format({
                  count: t.toString()
                })
            }
          }(t, B.length)
        }), Y && (0, a.jsx)(o.Button, {
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          className: y.clearButton,
          size: o.Button.Sizes.TINY,
          onClick: e => {
            e.stopPropagation(), d.default.confirmClearPendingRelationships(V)
          },
          "aria-label": M.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
          children: M.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
        })]
      }), H ? (0, a.jsx)("div", {
        className: y.emptyStateContainer,
        children: (0, a.jsx)(A.default, {
          type: A.FriendsSearchStatus.SECTION_NO_RESULTS
        }, b)
      }) : (0, a.jsx)(v.default, {
        relationshipCount: U,
        statusSections: [B],
        renderRow: function(e) {
          switch (t) {
            case P.FriendsSections.BLOCKED:
              return (0, a.jsx)(T.default, {
                ...e,
                isFocused: x
              });
            case P.FriendsSections.PENDING:
              return (0, a.jsx)(N.default, {
                ...e,
                isFocused: x
              });
            case P.FriendsSections.SUGGESTIONS:
              return (0, a.jsx)(R.default, {
                ...e,
                isFocused: x
              });
            case P.FriendsSections.ONLINE:
            case P.FriendsSections.ALL:
            default:
              return (0, a.jsx)(g.default, {
                ...e,
                isFocused: x
              })
          }
        },
        sectionFilter: t,
        searchQuery: G[t],
        useReducedMotion: f.default.useReducedMotion
      })]
    })
  })
}