"use strict";
s.r(t), s.d(t, {
  useScrolledToTop: function() {
    return f
  },
  default: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("77078"),
  r = s("272030"),
  o = s("454273"),
  d = s("726527"),
  u = s("555158"),
  c = s("433487"),
  E = s("36402"),
  _ = s("364222"),
  I = s("53948"),
  T = s("782340"),
  S = s("184963");

function f() {
  let [e, t] = l.useState(!0);
  return {
    scrolledToTop: e,
    handleScroll: function(e) {
      t(0 === e.currentTarget.scrollTop)
    }
  }
}

function m(e) {
  let {
    guild: t,
    role: f,
    selectedSection: m,
    setSelectedSection: N
  } = e, g = l.useCallback(e => {
    N(e)
  }, [N]), h = (0, n.useStateFromStores)([E.default], () => {
    var e;
    return null === (e = E.default.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[f.id]
  }, [f.id, t.id]), C = (0, o.isEveryoneRoleId)(t.id, f.id), R = (0, _.default)(f);
  l.useEffect(() => {
    C && N(I.GuildSettingsRoleEditSections.PERMISSIONS)
  }, [C, N]);
  let x = (0, d.useHasGuildRoleItems)(t, f);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: S.titleContainer,
      children: [(0, a.jsx)(i.Text, {
        className: S.titleText,
        color: "header-primary",
        variant: "text-md/semibold",
        children: T.default.Messages.ROLE_EDIT_TITLE_WITH_NAME.format({
          roleName: f.name
        })
      }), x ? (0, a.jsx)(i.Clickable, {
        className: S.menu,
        onClick: function(e) {
          (0, r.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await s.el("726527").then(s.bind(s, "726527"));
            return s => (0, a.jsx)(e, {
              ...s,
              guild: t,
              role: f
            })
          })
        },
        "aria-label": T.default.Messages.MORE_OPTIONS,
        children: (0, a.jsx)(c.default, {})
      }) : null]
    }), null != R ? (0, a.jsx)(u.default, {
      messageType: u.HelpMessageTypes.WARNING,
      children: R
    }) : null, (0, a.jsxs)(i.TabBar, {
      className: S.tabBar,
      "aria-label": T.default.Messages.OPTIONS,
      selectedItem: m,
      type: "top",
      look: "brand",
      onItemSelect: g,
      children: [(0, a.jsx)(i.TabBar.Item, {
        className: S.tabBarItem,
        id: I.GuildSettingsRoleEditSections.DISPLAY,
        disabled: C,
        children: T.default.Messages.ROLE_EDIT_TAB_DISPLAY
      }), (0, a.jsx)(i.TabBar.Item, {
        className: S.tabBarItem,
        id: I.GuildSettingsRoleEditSections.PERMISSIONS,
        children: T.default.Messages.ROLE_EDIT_TAB_PERMISSIONS
      }), (0, a.jsx)(i.TabBar.Item, {
        className: S.tabBarItem,
        id: I.GuildSettingsRoleEditSections.VERIFICATIONS,
        disabled: C,
        children: T.default.Messages.ROLE_EDIT_TAB_VERIFICATION
      }), (0, a.jsx)(i.TabBar.Item, {
        className: S.tabBarItem,
        id: I.GuildSettingsRoleEditSections.MEMBERS,
        disabled: C,
        children: C ? T.default.Messages.ROLE_EDIT_TAB_MANAGE_MEMBERS : T.default.Messages.ROLE_EDIT_TAB_MEMBERS_WITH_LIST.format({
          numMembers: String(h)
        })
      })]
    })]
  })
}