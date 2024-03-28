"use strict";
n.r(t), n("610138"), n("216116"), n("78328"), n("815648"), n("47120"), n("757143");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("613828"),
  o = n("873546"),
  u = n("442837"),
  d = n("481060"),
  c = n("570140"),
  f = n("150063"),
  E = n("758059"),
  h = n("252618"),
  _ = n("5254"),
  C = n("984370"),
  m = n("518311"),
  S = n("199104"),
  I = n("108427"),
  p = n("210887"),
  T = n("974042"),
  g = n("153124"),
  A = n("988951"),
  N = n("26290"),
  v = n("792125"),
  O = n("666286"),
  R = n("596957"),
  L = n("981631"),
  P = n("723359"),
  M = n("689938"),
  y = n("272212");

function D() {
  return (0, a.jsxs)("div", {
    className: y.inviteToolbar,
    children: [(0, a.jsx)(m.default, {
      tooltip: M.default.Messages.NEW_GROUP_DM
    }), (0, a.jsx)(C.default.Divider, {})]
  })
}
t.default = function(e) {
  let {
    initialSection: t
  } = e, n = (0, r.useLocation)(), l = (0, r.useHistory)();
  s.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && c.default.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: P.AgeGateSource.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(L.Routes.ME)
    })
  }, [l, n]), s.useEffect(() => {
    f.setHomeLink(L.Routes.FRIENDS), (0, I.trackAppUIViewed)("friends")
  }, []), s.useEffect(() => {
    null != t && E.default.setInitialSection(t)
  }, [t]);
  let m = (0, u.useStateFromStores)([p.default], () => p.default.theme),
    {
      section: b,
      pendingCount: x
    } = (0, u.useStateFromStoresObject)([T.default], () => T.default.getState()),
    U = (0, u.useStateFromStoresObject)([_.default], () => _.default.getSuggestionCount()),
    j = (0, g.useUID)(),
    G = (0, g.useUID)();
  return (0, a.jsxs)("main", {
    className: y.container,
    "aria-label": M.default.Messages.FRIENDS,
    children: [(0, a.jsx)(h.AppPageTitle, {
      location: M.default.Messages.FRIENDS
    }), (0, a.jsxs)(C.default, {
      className: (0, v.getThemeClass)(m),
      toolbar: (0, a.jsx)(D, {}),
      scrollable: o.isMobile,
      role: "navigation",
      "aria-labelledby": j,
      children: [(0, a.jsx)(C.default.Icon, {
        icon: A.default,
        "aria-hidden": !0
      }), (0, a.jsx)(C.default.Title, {
        id: j,
        children: M.default.Messages.FRIENDS
      }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(d.TabBar, {
        "aria-label": M.default.Messages.FRIENDS,
        selectedItem: b,
        type: "top-pill",
        onItemSelect: e => {
          E.default.setSection(e)
        },
        className: y.tabBar,
        children: [(0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ONLINE,
          className: y.item,
          children: M.default.Messages.FRIENDS_SECTION_ONLINE
        }), (0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.ALL,
          className: y.item,
          children: M.default.Messages.FRIENDS_SECTION_ALL
        }), (0, a.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.PENDING,
          className: y.item,
          "aria-label": M.default.Messages.FRIENDS_SECTION_PENDING,
          children: [M.default.Messages.FRIENDS_SECTION_PENDING, x > 0 ? (0, a.jsx)(N.NumberBadge, {
            count: x,
            className: y.badge,
            style: {
              paddingRight: 0
            }
          }) : null]
        }), U > 0 ? (0, a.jsxs)(d.TabBar.Item, {
          id: L.FriendsSections.SUGGESTIONS,
          className: y.item,
          "aria-label": M.default.Messages.FRIENDS_SECTION_SUGGESTIONS,
          children: [M.default.Messages.FRIENDS_SECTION_SUGGESTIONS, (0, a.jsx)(N.NumberBadge, {
            count: U,
            className: y.badge,
            style: {
              paddingRight: 0
            }
          })]
        }) : null, (0, a.jsx)(d.TabBar.Item, {
          id: L.FriendsSections.BLOCKED,
          className: y.item,
          children: M.default.Messages.BLOCKED
        }), (0, a.jsx)(d.TabBar.Item, {
          "aria-label": M.default.Messages.FRIENDS_SECTION_ADD_FRIEND,
          className: i()(y.item, y.addFriend),
          id: L.FriendsSections.ADD_FRIEND,
          children: (0, a.jsx)("span", {
            children: M.default.Messages.FRIENDS_SECTION_ADD_FRIEND
          })
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: y.tabBody,
      children: [(0, a.jsx)(d.TabBar.Panel, {
        id: b,
        className: y.peopleColumn,
        "aria-labelledby": G,
        children: b === L.FriendsSections.ADD_FRIEND ? (0, a.jsx)(O.default, {}) : (0, a.jsx)(R.default, {
          titleId: G,
          sectionFilter: b
        })
      }), (0, a.jsx)("div", {
        className: y.nowPlayingColumn,
        children: (0, a.jsx)(S.default, {})
      })]
    })]
  })
}