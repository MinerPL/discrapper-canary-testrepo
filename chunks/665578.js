"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("392711"),
  i = l.n(s),
  r = l("149765"),
  o = l("442837"),
  d = l("481060"),
  u = l("895924"),
  c = l("581364"),
  f = l("605436"),
  m = l("271383"),
  I = l("430824"),
  T = l("496675"),
  N = l("474333"),
  E = l("41542"),
  S = l("821864"),
  g = l("905753"),
  h = l("937427"),
  p = l("643886"),
  _ = l("869157"),
  O = l("454092"),
  A = l("289465"),
  C = l("981631"),
  x = l("689079"),
  R = l("689938"),
  M = l("793828");

function v(e) {
  let {
    applicationId: t,
    commandId: s,
    guildId: h,
    inModal: p,
    editedTargetPermissions: v,
    originalApplicationPermissions: P,
    originalCommandPermissions: b,
    selectedPermissionCount: D
  } = e, y = (0, o.useStateFromStores)([g.default], () => null == s ? null : g.default.getCommand(s), [s]), G = (null == y ? void 0 : y.defaultMemberPermissions) != null, B = (0, o.useStateFromStores)([I.default, m.default, T.default], () => {
    let e = I.default.getGuild(h),
      t = m.default.getSelfMember(h);
    return null != e && null != t && (0, c.hasAccess)({
      PermissionStore: T.default,
      guild: e,
      selfMember: t,
      applicationLevelPermissions: P,
      commandLevelPermissions: b,
      defaultMemberPermissions: null == y ? void 0 : y.defaultMemberPermissions
    })
  }, [h, y, P, b]), H = null != s ? s : t, [k, U] = a.useMemo(() => {
    let e = {},
      t = {};
    for (let [l, n] of Object.entries(v)) n.type === u.ApplicationCommandPermissionType.CHANNEL ? e[l] = n : t[l] = n;
    return [e, t]
  }, [v]), F = a.useCallback(e => {
    let t = I.default.getGuild(h),
      l = m.default.getSelfMember(h);
    return null != t && null != l && (null != s ? (0, c.hasAccess)({
      PermissionStore: T.default,
      guild: t,
      selfMember: l,
      applicationLevelPermissions: P,
      commandLevelPermissions: e,
      defaultMemberPermissions: null == y ? void 0 : y.defaultMemberPermissions
    }) : (0, c.hasAccess)({
      PermissionStore: T.default,
      guild: t,
      selfMember: l,
      applicationLevelPermissions: e
    }))
  }, [h, y, s, P]), w = a.useCallback((e, t) => {
    let l;
    let n = null;
    if (0 !== t.length) {
      let e = v[t[0]];
      if (e.type === u.ApplicationCommandPermissionType.USER) l = O.InvalidAction.REMOVE_SELF;
      else {
        let t = e.id;
        if (l = O.InvalidAction.REMOVE_ROLE, (0, f.isEveryoneRoleId)(h, t)) n = "@everyone";
        else {
          let e = I.default.getRole(h, t);
          n = null != e ? e.name : "role"
        }
      }
    } else {
      let t = Object.values(e)[0].id;
      if (l = O.InvalidAction.DENY_ROLE, (0, f.isEveryoneRoleId)(h, t)) n = "@everyone";
      else {
        let e = I.default.getRole(h, t);
        n = null != e ? e.name : "role"
      }
    }(0, O.showApplicationCommandPermissionLockoutModal)(l, n)
  }, [h, v]), W = a.useCallback((e, l) => {
    let n = {};
    for (let [e, t] of Object.entries(v)) n[e] = {
      id: t.id,
      permission: t.permission,
      type: t.type
    };
    if (n = Object.assign(n, e), l.length > 0 && (n = i().omit(n, l)), !F(n)) {
      w(e, l);
      return
    }
    S.editPermissions(t, H, n)
  }, [t, v, H, F, w]), V = a.useCallback(() => {
    let e = Object.keys(k);
    return (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([l.e("99387"), l.e("64908")]).then(l.bind(l, "557944"));
      return l => (0, n.jsx)(t, {
        editPermissions: W,
        guildId: h,
        headerText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_ADD_BUTTON,
        hasMemberSearch: !1,
        overwrittenKeys: e,
        search: L,
        searchPlaceholderText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_CHANNEL_SEARCH_PLACEHOLDER,
        selectedPermissionCount: D,
        ...l
      })
    })
  }, [W, k, h, D]), Y = a.useCallback(() => {
    let e = Object.keys(U);
    return (0, d.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([l.e("99387"), l.e("64908")]).then(l.bind(l, "557944"));
      return l => (0, n.jsx)(t, {
        editPermissions: W,
        guildId: h,
        hasMemberSearch: !0,
        headerText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_ADD_BUTTON,
        overwrittenKeys: e,
        search: j,
        searchPlaceholderText: R.default.Messages.INTEGRATIONS_APPLICATION_COMMAND_ROLE_MEMBER_SEARCH_PLACEHOLDER,
        selectedPermissionCount: D,
        ...l
      })
    })
  }, [W, h, U, D]), K = a.useCallback(() => (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([l.e("99387"), l.e("21897")]).then(l.bind(l, "303313")), t = y.defaultMemberPermissions;
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
        inModal: p,
        title: e.title,
        children: (0, n.jsx)("div", {
          className: p ? void 0 : M.listContainer,
          children: (0, n.jsx)(_.default, {
            guildId: h,
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
  let t = (0, h.useIntegrationPermissionChannelSearch)(e);
  return {
    ...t,
    results: t.results.map(e => ({
      ...e,
      type: u.ApplicationCommandPermissionType.CHANNEL
    }))
  }
}

function j(e) {
  let t = (0, p.useIntegrationPermissionMemberSearch)(e);
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