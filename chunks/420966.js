"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  },
  useScrolledToTop: function() {
    return f
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("481060"),
  r = s("239091"),
  o = s("605436"),
  d = s("741247"),
  u = s("474333"),
  c = s("808268"),
  E = s("243730"),
  _ = s("852898"),
  I = s("203377"),
  T = s("689938"),
  S = s("829186");

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
            } = await Promise.resolve().then(s.bind(s, "741247"));
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