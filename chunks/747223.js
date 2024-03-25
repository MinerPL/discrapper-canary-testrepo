"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("781738");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("90915"),
  o = n("394846"),
  u = n("446674"),
  d = n("77078"),
  c = n("913144"),
  f = n("939488"),
  E = n("630086"),
  h = n("69927"),
  _ = n("449004"),
  C = n("539938"),
  S = n("718091"),
  I = n("698343"),
  m = n("970366"),
  p = n("161778"),
  T = n("545429"),
  g = n("476765"),
  A = n("564875"),
  N = n("956089"),
  R = n("439932"),
  O = n("161011"),
  v = n("756183"),
  L = n("49111"),
  M = n("586391"),
  P = n("782340"),
  y = n("859120");

function D() {
  return (0, a.jsxs)("div", {
    className: y.inviteToolbar,
    children: [(0, a.jsx)(S.default, {
      tooltip: P.default.Messages.NEW_GROUP_DM
    }), (0, a.jsx)(C.default.Divider, {})]
  })
}
var x = function(e) {
  let {
    initialSection: t
  } = e, n = (0, r.useLocation)(), l = (0, r.useHistory)();
  s.useEffect(() => {
    let e = "true" === new URLSearchParams(n.search).get("confirm-age");
    e && c.default.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: M.AgeGateSource.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(L.Routes.ME)
    })
  }, [l, n]), s.useEffect(() => {
    f.setHomeLink(L.Routes.FRIENDS), (0, m.trackAppUIViewed)("friends")
  }, []), s.useEffect(() => {
    null != t && E.default.setInitialSection(t)
  }, [t]);
  let S = (0, u.useStateFromStores)([p.default], () => p.default.theme),
    {
      section: x,
      pendingCount: b
    } = (0, u.useStateFromStoresObject)([T.default], () => T.default.getState()),
    U = (0, u.useStateFromStoresObject)([_.default], () => _.default.getSuggestionCount()),
    G = (0, g.useUID)(),
    j = (0, g.useUID)();
  return (0, a.jsxs)("main", {
    className: y.container,
    "aria-label": P.default.Messages.FRIENDS,
    children: [(0, a.jsx)(h.AppPageTitle, {
      location: P.default.Messages.FRIENDS
    }), (0, a.jsxs)(C.default, {
      className: (0, R.getThemeClass)(S),
      toolbar: (0, a.jsx)(D, {}),
      scrollable: o.isMobile,
      role: "navigation",
      "aria-labelledby": G,
      children: [(0, a.jsx)(C.default.Icon, {
        icon: A.default,
        "aria-hidden": !0
      }), (0, a.jsx)(C.default.Title, {
        id: G,
        children: P.default.Messages.FRIENDS
      }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(d.TabBar, {
        "aria-label": P.default.Messages.FRIENDS,
        selectedItem: x,
        type: "top-pill",
        onItemSelect: e => {
          E.default.setSection(e)
        },
        className: y.tabBar,
        children: [(0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ONLINE,
          className: y.item,
          children: P.default.Messages.FRIENDS_SECTION_ONLINE
        }), (0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ALL,
          className: y.item,
          children: P.default.Messages.FRIENDS_SECTION_ALL
        }), (0, a.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.PENDING,
          className: y.item,
          "aria-label": P.default.Messages.FRIENDS_SECTION_PENDING,
          children: [P.default.Messages.FRIENDS_SECTION_PENDING, b > 0 ? (0, a.jsx)(N.NumberBadge, {
            count: b,
            className: y.badge,
            style: {
              paddingRight: 0
            }
          }) : null]
        }), U > 0 ? (0, a.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.SUGGESTIONS,
          className: y.item,
          "aria-label": P.default.Messages.FRIENDS_SECTION_SUGGESTIONS,
          children: [P.default.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, a.jsx)(N.NumberBadge, {
            count: U,
            className: y.badge,
            style: {
              paddingRight: 0
            }
          })]
        }) : null, (0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.BLOCKED,
          className: y.item,
          children: P.default.Messages.BLOCKED
        }), (0, a.jsx)(d.TabBar.Item, {
          "aria-label": P.default.Messages.FRIENDS_SECTION_ADD_FRIEND,
          className: i(y.item, y.addFriend),
          id: L.FriendsSections.ADD_FRIEND,
          children: (0, a.jsx)("span", {
            children: P.default.Messages.FRIENDS_SECTION_ADD_FRIEND
          })
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: y.tabBody,
      children: [(0, a.jsx)(d.TabBar.Panel, {
        id: x,
        className: y.peopleColumn,
        "aria-labelledby": j,
        children: x === L.FriendsSections.ADD_FRIEND ? (0, a.jsx)(O.default, {}) : (0, a.jsx)(v.default, {
          titleId: j,
          sectionFilter: x
        })
      }), (0, a.jsx)("div", {
        className: y.nowPlayingColumn,
        children: (0, a.jsx)(I.default, {})
      })]
    })]
  })
}