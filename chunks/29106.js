"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("917351"),
  i = l.n(s),
  r = l("316693"),
  o = l("446674"),
  d = l("77078"),
  u = l("524768"),
  c = l("389153"),
  f = l("454273"),
  m = l("26989"),
  I = l("305961"),
  T = l("957255"),
  N = l("555158"),
  E = l("68238"),
  h = l("482391"),
  g = l("683830"),
  p = l("464782"),
  S = l("636024"),
  O = l("829319"),
  _ = l("409645"),
  A = l("157453"),
  C = l("49111"),
  x = l("317041"),
  R = l("782340"),
  M = l("258934");

function v(e) {
  let {
    applicationId: t,
    commandId: s,
    guildId: p,
    inModal: S,
    editedTargetPermissions: v,
    originalApplicationPermissions: b,
    originalCommandPermissions: P,
    selectedPermissionCount: D
  } = e, y = (0, o.useStateFromStores)([g.default], () => null == s ? null : g.default.getCommand(s), [s]), G = (null == y ? void 0 : y.defaultMemberPermissions) != null, B = (0, o.useStateFromStores)([I.default, m.default, T.default], () => {
    let e = I.default.getGuild(p),
      t = m.default.getSelfMember(p);
    return null != e && null != t && (0, c.hasAccess)({
      PermissionStore: T.default,
      guild: e,
      selfMember: t,
      applicationLevelPermissions: b,
      commandLevelPermissions: P,
      defaultMemberPermissions: null == y ? void 0 : y.defaultMemberPermissions
    })
  }, [p, y, b, P]), H = null != s ? s : t, [k, U] = a.useMemo(() => {
    let e = {},
      t = {};
    for (let [l, n] of Object.entries(v)) n.type === u.ApplicationCommandPermissionType.CHANNEL ? e[l] = n : t[l] = n;
    return [e, t]
  }, [v]), F = a.useCallback(e => {
    let t = I.default.getGuild(p),
      l = m.default.getSelfMember(p);
    return null != t && null != l && (null != s ? (0, c.hasAccess)({
      PermissionStore: T.default,
      guild: t,
      selfMember: l,
      applicationLevelPermissions: b,
      commandLevelPermissions: e,
      defaultMemberPermissions: null == y ? void 0 : y.defaultMemberPermissions
    }) : (0, c.hasAccess)({
      PermissionStore: T.default,
      guild: t,
      selfMember: l,
      applicationLevelPermissions: e
    }))
  }, [p, y, s, b]), w = a.useCallback((e, t) => {
    let l;
    let n = null;
    if (0 !== t.length) {
      let e = t[0],
        a = v[e];
      if (a.type === u.ApplicationCommandPermissionType.USER) l = _.InvalidAction.REMOVE_SELF;
      else {
        let e = a.id;
        if (l = _.InvalidAction.REMOVE_ROLE, (0, f.isEveryoneRoleId)(p, e)) n = "@everyone";
        else {
          let t = I.default.getRole(p, e);
          n = null != t ? t.name : "role"
        }
      }
    } else {
      let t = Object.values(e)[0],
        a = t.id;
      if (l = _.InvalidAction.DENY_ROLE, (0, f.isEveryoneRoleId)(p, a)) n = "@everyone";
      else {
        let e = I.default.getRole(p, a);
        n = null != e ? e.name : "role"
      }
    }(0, _.showApplicationCommandPermissionLockoutModal)(l, n)
  }, [p, v]), W = a.useCallback((e, l) => {
    let n = {};
    for (let [e, t] of Object.entries(v)) n[e] = {
      id: t.id,
      permission: t.permission,
      type: t.type
    };
    n = Object.assign(n, e), l.length > 0 && (n = i.omit(n, l));
    let a = F(n);
    if (!a) {
      w(e, l);
      return
    }
    h.editPermissions(t, H, n)
  }, [t, v, H, F, w]), V = a.useCallback(() => {
    let e = Object.keys(k);
    return (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await l.el("609789").then(l.bind(l, "609789"));
      return l => (0, n.jsx)(t, {
        editPermissions: W,
        guildId: p,
        headerText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
        hasMemberSearch: !1,
        overwrittenKeys: e,
        search: L,
        searchPlaceholderText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
        selectedPermissionCount: D,
        ...l
      })
    })
  }, [W, k, p, D]), Y = a.useCallback(() => {
    let e = Object.keys(U);
    return (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await l.el("609789").then(l.bind(l, "609789"));
      return l => (0, n.jsx)(t, {
        editPermissions: W,
        guildId: p,
        hasMemberSearch: !0,
        headerText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
        overwrittenKeys: e,
        search: j,
        searchPlaceholderText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
        selectedPermissionCount: D,
        ...l
      })
    })
  }, [W, p, U, D]), K = a.useCallback(() => (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await l.el("317671").then(l.bind(l, "317671")), t = y.defaultMemberPermissions;
    return r.equals(t, c.DISABLED_BY_DEFAULT_PERMISSION_FLAG) && (t = C.Permissions.ADMINISTRATOR), l => (0, n.jsx)(e, {
      ...l,
      defaultMemberPermissions: t
    })
  }), [y]), z = D - x.APPLICATION_COMMAND_PERMISSIONS_LIMIT, Z = z >= 0, q = [{
    buttonClick: Y,
    buttonText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
    noneSelectedText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_NO_ENTRIES,
    overwrites: U,
    title: null == s ? R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD : R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_ROLE_MEMBER_HEADER
  }, {
    buttonClick: V,
    buttonText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
    noneSelectedText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_NO_ENTRIES,
    overwrites: k,
    title: null == s ? R.default.Messages.CHANNELS : R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_OVERRIDE_SECTION_CHANNEL_HEADER
  }];
  return (0, n.jsxs)(a.Fragment, {
    children: [z > 0 ? (0, n.jsx)(N.default, {
      messageType: N.HelpMessageTypes.WARNING,
      children: R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_NOTICE_TEXT.format({
        removeCount: z
      })
    }) : null, G ? (0, n.jsxs)("div", {
      className: M.requiredPermissionsBanner,
      children: [(0, n.jsx)(E.default, {
        className: M.icon,
        height: 18,
        width: 18
      }), (0, n.jsx)("span", {
        className: M.message,
        children: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_DEFAULT_MEMBER_PERMISSIONS_SECTION_DESCRIPTION.format()
      }), (0, n.jsx)(d.Button, {
        color: d.Button.Colors.PRIMARY,
        onClick: K,
        size: d.Button.Sizes.SMALL,
        className: M.addButton,
        children: R.default.Messages.VIEW
      })]
    }) : null, q.map((e, t) => {
      let l = t => (0, n.jsx)(d.Button, {
          ...t,
          color: d.Button.Colors.PRIMARY,
          disabled: Z || !B,
          onClick: e.buttonClick,
          size: d.Button.Sizes.TINY,
          className: M.addButton,
          children: e.buttonText
        }),
        a = null;
      return B ? Z && (a = R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_MAX) : a = null != s ? R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : R.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION, (0, n.jsx)(A.default, {
        bar: (0, n.jsx)(d.Tooltip, {
          tooltipClassName: M.tooltip,
          text: a,
          shouldShow: null != a,
          children: e => l(e)
        }),
        inModal: S,
        title: e.title,
        children: (0, n.jsx)("div", {
          className: S ? void 0 : M.listContainer,
          children: (0, n.jsx)(O.default, {
            guildId: p,
            commandId: s,
            noneSelectedText: e.noneSelectedText,
            overwrites: e.overwrites,
            editPermissions: W,
            hasAccessToMutatePermissions: B
          })
        })
      }, t)
    })]
  })
}

function L(e) {
  let t = (0, p.useIntegrationPermissionChannelSearch)(e);
  return {
    ...t,
    results: t.results.map(e => ({
      ...e,
      type: u.ApplicationCommandPermissionType.CHANNEL
    }))
  }
}

function j(e) {
  let t = (0, S.useIntegrationPermissionMemberSearch)(e);
  return {
    ...t,
    results: t.results.roles.map(e => ({
      ...e,
      type: u.ApplicationCommandPermissionType.ROLE
    })).concat(t.results.members.map(e => ({
      ...e,
      type: u.ApplicationCommandPermissionType.USER
    })))
  }
}