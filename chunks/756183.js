"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("630086"),
  d = n("736964"),
  c = n("901582"),
  f = n("206230"),
  E = n("812204"),
  h = n("685665"),
  _ = n("347272"),
  C = n("27618"),
  S = n("545429"),
  I = n("471671"),
  m = n("810567"),
  p = n("791878"),
  T = n("637824"),
  g = n("146378"),
  A = n("709410"),
  N = n("411676"),
  R = n("86959"),
  O = n("748753"),
  v = n("144521"),
  L = n("59678"),
  M = n("49111"),
  P = n("782340"),
  y = n("512807"),
  D = function(e) {
    let {
      sectionFilter: t,
      titleId: n
    } = e, {
      analyticsLocations: l
    } = (0, h.default)(E.default.FRIENDS_LIST), {
      rows: D,
      section: x
    } = (0, r.useStateFromStoresObject)([S.default], () => S.default.getState()), b = (0, r.useStateFromStores)([I.default], () => I.default.isFocused()), U = (0, r.useStateFromStores)([C.default], () => C.default.getRelationshipCount()), G = (0, p.useIsClearIncomingFriendRequestsEnabled)(), [j, w] = s.useState(() => {
      let e = {};
      for (let t of Object.values(M.FriendsSections)) e[t] = "";
      return e
    }), k = s.useCallback(e => {
      w({
        ...j,
        [t]: e
      })
    }, [j, t]), F = s.useCallback(() => {
      w({
        ...j,
        [t]: ""
      })
    }, [j, t]), B = D.filter(t, j[t]);
    if (0 === B.length && "" === j[t]) return (0, a.jsxs)("div", {
      className: y.emptyStateContainer,
      children: [t === M.FriendsSections.ONLINE && (0, a.jsx)(_.default, {}), (0, a.jsx)(A.default, {
        type: t,
        onClick: () => {
          u.default.setSection(M.FriendsSections.ADD_FRIEND)
        }
      }, x)]
    });
    let H = 0 === B.length && "" !== j[t],
      V = B.filter(e => e.type === M.RelationshipTypes.PENDING_INCOMING).length,
      Y = t === M.FriendsSections.PENDING && V > 0,
      W = Y && G && V >= L.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
    return (0, a.jsx)(h.AnalyticsLocationProvider, {
      value: l,
      children: (0, a.jsxs)(c.default, {
        section: M.AnalyticsSections.FRIENDS_LIST,
        children: [(0, a.jsx)(m.default, {
          className: i(y.searchBar, H ? y.searchEmptyState : null),
          query: j[t],
          onChange: k,
          onClear: F,
          size: m.default.Sizes.MEDIUM
        }), t === M.FriendsSections.ONLINE && "" === j[t] && (0, a.jsx)(_.default, {}), (0, a.jsxs)("div", {
          className: y.sectionTitle,
          children: [(0, a.jsx)(O.default, {
            id: n,
            title: function(e, t) {
              switch (e) {
                case M.FriendsSections.ONLINE:
                  return P.default.Messages.FRIENDS_ONLINE_HEADER.format({
                    online: t.toString()
                  });
                case M.FriendsSections.PENDING:
                  return P.default.Messages.FRIENDS_PENDING_HEADER.format({
                    count: t.toString()
                  });
                case M.FriendsSections.SUGGESTIONS:
                  return P.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                    count: t.toString()
                  });
                case M.FriendsSections.BLOCKED:
                  return P.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                    count: t.toString()
                  });
                default:
                  return P.default.Messages.FRIENDS_ALL_HEADER.format({
                    count: t.toString()
                  })
              }
            }(t, B.length)
          }), W && (0, a.jsx)(o.Button, {
            look: o.ButtonLooks.LINK,
            color: o.ButtonColors.LINK,
            className: y.clearButton,
            size: o.Button.Sizes.TINY,
            onClick: e => {
              e.stopPropagation(), d.default.confirmClearPendingRelationships(V)
            },
            "aria-label": P.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
            children: P.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
          })]
        }), H ? (0, a.jsx)("div", {
          className: y.emptyStateContainer,
          children: (0, a.jsx)(A.default, {
            type: A.FriendsSearchStatus.SECTION_NO_RESULTS
          }, x)
        }) : (0, a.jsx)(R.default, {
          relationshipCount: U,
          statusSections: [B],
          renderRow: function(e) {
            switch (t) {
              case M.FriendsSections.BLOCKED:
                return (0, a.jsx)(T.default, {
                  ...e,
                  isFocused: b
                });
              case M.FriendsSections.PENDING:
                return (0, a.jsx)(N.default, {
                  ...e,
                  isFocused: b
                });
              case M.FriendsSections.SUGGESTIONS:
                return (0, a.jsx)(v.default, {
                  ...e,
                  isFocused: b
                });
              case M.FriendsSections.ONLINE:
              case M.FriendsSections.ALL:
              default:
                return (0, a.jsx)(g.default, {
                  ...e,
                  isFocused: b
                })
            }
          },
          sectionFilter: t,
          searchQuery: j[t],
          useReducedMotion: f.default.useReducedMotion
        })]
      })
    })
  }