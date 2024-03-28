"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  i = n("512722"),
  u = n.n(i),
  s = n("442837"),
  d = n("481060"),
  r = n("10718"),
  o = n("667204"),
  c = n("826298"),
  f = n("17165"),
  E = n("276022"),
  S = n("430824"),
  _ = n("594174"),
  T = n("689079"),
  p = n("689938"),
  A = n("649524");
t.default = e => {
  let t, {
      commandType: n,
      commandTargetId: i,
      channel: I,
      guildId: g,
      onHeightUpdate: m,
      context: M
    } = e,
    v = (0, s.useStateFromStores)([S.default], () => S.default.getGuild(null != g ? g : I.guild_id)),
    O = (0, s.useStateFromStores)([_.default], () => _.default.getUser(i)),
    N = (0, E.default)({
      user: O,
      guildId: null == v ? void 0 : v.id,
      channel: I,
      context: M
    }),
    {
      commands: h,
      sectionDescriptors: R,
      loading: C
    } = r.useDiscovery(I, {
      commandType: n
    }, {
      limit: T.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
    }),
    {
      sections: P
    } = l.useMemo(() => {
      let e = {};
      return R.forEach(t => {
        e[t.id] = t
      }), {
        sections: e
      }
    }, [R]),
    D = l.useRef(C.current);
  l.useEffect(() => {
    C.current !== D.current && (D.current = C.current, null == m || m())
  }, [C, m]);
  let y = l.useCallback(e => {
    u()(null != I, "menu item should not show if channel is null");
    let t = P[e.applicationId],
      n = null != t ? (0, c.getIconComponent)(t) : void 0;
    return (0, a.jsx)(d.MenuItem, {
      id: e.id,
      label: e.displayName,
      showIconFirst: !0,
      icon: () => null != n ? (0, a.jsx)(n, {
        channel: I,
        section: t,
        width: 18,
        height: 18,
        selectable: !1
      }) : null,
      action: () => {
        (0, o.default)({
          command: e,
          optionValues: {},
          context: {
            channel: I,
            guild: v
          },
          commandTargetId: i
        })
      }
    }, e.id)
  }, [I, v, i, P]);
  return C.current ? t = (0, a.jsx)(d.MenuItem, {
    id: "menu-commands-placeholder",
    render: () => (0, a.jsx)(f.default, {}),
    disabled: !0
  }, "menu-commands-placeholder") : (t = 0 === h.length ? (0, a.jsx)(d.MenuItem, {
    id: "menu-commands-empty",
    label: p.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
    disabled: !0
  }, "menu-commands-empty") : h.map(y), null != N && (t = (0, a.jsxs)(a.Fragment, {
    children: [t, (0, a.jsx)(d.MenuSeparator, {}, "separator"), N]
  }))), (0, a.jsx)(d.MenuItem, {
    id: "apps",
    label: p.default.Messages.APPS,
    listClassName: A.list,
    children: t
  })
}