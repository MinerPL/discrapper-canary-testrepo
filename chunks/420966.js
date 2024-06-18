"use strict";
t.d(s, {
  V: function() {
    return m
  },
  Z: function() {
    return S
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(442837),
  a = t(481060),
  r = t(239091),
  o = t(605436),
  c = t(741247),
  d = t(474333),
  u = t(808268),
  E = t(243730),
  _ = t(852898),
  I = t(203377),
  T = t(689938),
  N = t(313535);

function m() {
  let [e, s] = i.useState(!0);
  return {
    scrolledToTop: e,
    handleScroll: function(e) {
      s(0 === e.currentTarget.scrollTop)
    }
  }
}

function S(e) {
  let {
    guild: s,
    role: m,
    selectedSection: S,
    setSelectedSection: h
  } = e, g = i.useCallback(e => {
    h(e)
  }, [h]), x = (0, l.e7)([E.Z], () => {
    var e;
    return null === (e = E.Z.getRoleMemberCount(s.id)) || void 0 === e ? void 0 : e[m.id]
  }, [m.id, s.id]), C = (0, o.pM)(s.id, m.id), R = (0, _.Z)(m);
  i.useEffect(() => {
    C && h(I.ZI.PERMISSIONS)
  }, [C, h]);
  let L = (0, c.useHasGuildRoleItems)(s, m);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: N.titleContainer,
      children: [(0, n.jsx)(a.Text, {
        className: N.titleText,
        color: "header-primary",
        variant: "text-md/semibold",
        children: T.Z.Messages.ROLE_EDIT_TITLE_WITH_NAME.format({
          roleName: m.name
        })
      }), L ? (0, n.jsx)(a.Clickable, {
        className: N.menu,
        onClick: function(e) {
          (0, r.jW)(e, async () => {
            let {
              default: e
            } = await Promise.resolve().then(t.bind(t, 741247));
            return t => (0, n.jsx)(e, {
              ...t,
              guild: s,
              role: m
            })
          })
        },
        "aria-label": T.Z.Messages.MORE_OPTIONS,
        children: (0, n.jsx)(u.Z, {})
      }) : null]
    }), null != R ? (0, n.jsx)(d.Z, {
      messageType: d.Q.WARNING,
      children: R
    }) : null, (0, n.jsxs)(a.TabBar, {
      className: N.tabBar,
      "aria-label": T.Z.Messages.OPTIONS,
      selectedItem: S,
      type: "top",
      look: "brand",
      onItemSelect: g,
      children: [(0, n.jsx)(a.TabBar.Item, {
        className: N.tabBarItem,
        id: I.ZI.DISPLAY,
        disabled: C,
        children: T.Z.Messages.ROLE_EDIT_TAB_DISPLAY
      }), (0, n.jsx)(a.TabBar.Item, {
        className: N.tabBarItem,
        id: I.ZI.PERMISSIONS,
        children: T.Z.Messages.ROLE_EDIT_TAB_PERMISSIONS
      }), (0, n.jsx)(a.TabBar.Item, {
        className: N.tabBarItem,
        id: I.ZI.VERIFICATIONS,
        disabled: C,
        children: T.Z.Messages.ROLE_EDIT_TAB_VERIFICATION
      }), (0, n.jsx)(a.TabBar.Item, {
        className: N.tabBarItem,
        id: I.ZI.MEMBERS,
        disabled: C,
        children: C ? T.Z.Messages.ROLE_EDIT_TAB_MANAGE_MEMBERS : T.Z.Messages.ROLE_EDIT_TAB_MEMBERS_WITH_LIST.format({
          numMembers: String(x)
        })
      })]
    })]
  })
}