"use strict";
l.r(t), l.d(t, {
  default: function() {
    return b
  }
}), l("724458"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("512722"),
  i = l.n(s),
  r = l("392711"),
  o = l.n(r),
  d = l("442837"),
  u = l("481060"),
  c = l("749210"),
  f = l("367907"),
  m = l("895924"),
  I = l("581364"),
  T = l("929507"),
  N = l("997787"),
  E = l("970731"),
  S = l("314897"),
  g = l("430824"),
  h = l("594174"),
  p = l("740727"),
  _ = l("626135"),
  O = l("5192"),
  A = l("709054"),
  C = l("360606"),
  x = l("905753"),
  R = l("399860"),
  M = l("335049"),
  v = l("617012"),
  L = l("981631"),
  j = l("689938"),
  P = l("799398");

function b(e) {
  let {
    commandId: t,
    editPermissions: l,
    guildId: s,
    noneSelectedText: r,
    overwrites: f,
    hasAccessToMutatePermissions: T
  } = e, E = (0, d.useStateFromStores)([g.default], () => g.default.getGuild(s));
  i()(null != E, "");
  let S = (0, d.useStateFromStores)([g.default], () => g.default.getRoles(s)),
    [p, _] = a.useState(new Set),
    M = a.useMemo(() => {
      var e;
      let t = (0, I.allChannelsSentinel)(s);
      let l = (e = S, o()(e).sortBy(e => e.position).reduce((e, t, l) => (e[t.id] = l, e), {}));
      return Object.values(f).filter(e => e.canRead).sort((e, n) => {
        let a = e.type - n.type;
        if (0 !== a) return a;
        switch (e.type) {
          case m.ApplicationCommandPermissionType.USER:
            return function(e, t, l) {
              let n = Number(e.canWrite) - Number(t.canWrite);
              if (0 !== n) return n;
              let a = h.default.getUser(e.id),
                s = h.default.getUser(t.id);
              if (null != a && null != s) {
                let e = O.default.getName(l, void 0, a),
                  t = O.default.getName(l, void 0, s);
                return null == e ? void 0 : e.localeCompare(t)
              }
              return A.default.compare(e.id, t.id)
            }(e, n, s);
          case m.ApplicationCommandPermissionType.ROLE:
            return function(e, t, l, n) {
              if (e.id === l) return -1;
              if (t.id === l) return 1;
              let a = n[e.id];
              return a > n[t.id] ? -1 : 1
            }(e, n, s, l);
          case m.ApplicationCommandPermissionType.CHANNEL:
            return function(e, t, l) {
              if (e.id === l) return -1;
              if (t.id === l) return 1;
              let n = Number(e.canWrite) - Number(t.canWrite);
              return 0 !== n ? n : A.default.compare(e.id, t.id)
            }(e, n, t)
        }
      })
    }, [s, f, S]),
    v = a.useCallback((e, t) => {
      l({}, [(0, R.toPermissionKey)(e, t)])
    }, [l]),
    L = a.useCallback((e, t, n) => {
      let a = (0, R.toPermissionKey)(e, t);
      null != f[a] && l({
        [a]: {
          id: e,
          permission: n,
          type: t
        }
      }, [])
    }, [l, f]);
  a.useEffect(() => {
    let e = Object.values(f).filter(e => e.type === m.ApplicationCommandPermissionType.USER && !e.canRead && !p.has(e.id)).map(e => e.id);
    0 !== e.length && (c.default.requestMembersById(s, e, !1), _(t => new Set([...t, ...e])))
  }, [s, f, p, _]);
  let j = (0, d.useStateFromStores)([x.default], () => x.default.getApplicationId()),
    b = (0, d.useStateFromStores)([C.default], () => null == j ? void 0 : C.default.integrations.find(e => {
      var t;
      return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === j
    })),
    y = (0, d.useStateFromStores)([N.default], () => void 0 !== b && N.default.canShowToggleTooltip(b.id));
  return (0, n.jsx)(a.Fragment, {
    children: M.length > 0 ? M.map(e => (0, n.jsx)(D, {
      guild: E,
      commandId: t,
      onChange: t => L(e.id, e.type, t),
      onRemove: () => v(e.id, e.type),
      overwrite: e,
      integration: b,
      canShowMigrationTooltip: y,
      hasAccessToMutatePermissions: T
    }, e.id)) : (0, n.jsx)("div", {
      className: P.noItemsSelected,
      children: (0, n.jsx)(u.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        children: r
      })
    })
  })
}

function D(e) {
  var t, l, s;
  let i, {
      guild: r,
      commandId: o,
      onChange: d,
      onRemove: c,
      overwrite: N,
      integration: g,
      canShowMigrationTooltip: h,
      hasAccessToMutatePermissions: p
    } = e,
    O = N.id === r.id || N.id === (0, I.allChannelsSentinel)(r.id),
    A = null == g ? void 0 : null === (l = g.application) || void 0 === l ? void 0 : null === (t = l.bot) || void 0 === t ? void 0 : t.username,
    C = !N.canWrite || !p,
    x = S.default.getId();
  p ? !N.canWrite && (N.type === m.ApplicationCommandPermissionType.USER ? i = N.id === x ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER : N.type === m.ApplicationCommandPermissionType.ROLE && (i = j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : i = null != o ? j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION;
  let R = h && null != g && N.id === r.id && void 0 !== A && !N.permission;
  a.useEffect(() => {
    if (R) {
      var e;
      _.default.track(L.AnalyticEvents.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
        ...(0, f.collectGuildAnalyticsMetadata)(r.id),
        application_id: null == g ? void 0 : null === (e = g.application) || void 0 === e ? void 0 : e.id,
        location: "toggle"
      })
    }
  }, [r.id, null == g ? void 0 : null === (s = g.application) || void 0 === s ? void 0 : s.id, R]);
  let b = (0, n.jsx)(u.Tooltip, {
      tooltipClassName: P.tooltip,
      text: i,
      shouldShow: C,
      position: "left",
      hideOnClick: !1,
      children: e => (0, n.jsx)("div", {
        ...e,
        children: (0, n.jsx)(v.default, {
          isDisabled: C,
          currentValue: N.permission,
          onChange: R ? e => {
            T.default.dismissToggleTooltip(r.id, g), d(e)
          } : d
        })
      })
    }),
    D = (0, n.jsx)(u.Popout, {
      renderPopout: () => (0, n.jsx)(u.Clickable, {
        onClick: e => {
          e.stopPropagation(), T.default.dismissToggleTooltip(r.id, g)
        },
        children: (0, n.jsx)(E.default, {
          className: P.tooltip,
          content: j.default.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
            botName: A,
            link: "https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/"
          }),
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: u.Popout.Animation.TRANSLATE,
      onRequestClose: () => T.default.dismissToggleTooltip(r.id, g),
      shouldShow: R,
      closeOnScroll: !0,
      children: () => b
    });
  return (0, n.jsxs)("div", {
    className: P.entryItem,
    children: [(0, n.jsx)("div", {
      className: P.entryName,
      children: (0, n.jsx)(M.default, {
        guild: r,
        id: N.id,
        type: N.type,
        isLocked: C,
        lockTooltipText: i
      })
    }), (0, n.jsxs)("div", {
      className: P.entryActions,
      children: [(0, n.jsx)(y, {
        commandId: o,
        isSentinel: O,
        isDisabled: !p,
        onRemove: c
      }), D]
    })]
  }, N.id)
}

function y(e) {
  let {
    commandId: t,
    isSentinel: l,
    isDisabled: a,
    onRemove: s
  } = e;
  return a ? null : null != t || !l ? (0, n.jsx)("div", {
    className: P.removeActions,
    children: (0, n.jsx)(u.Clickable, {
      className: P.removeContainer,
      "aria-label": j.default.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
      onClick: s,
      children: (0, n.jsx)(p.default, {
        width: 24,
        height: 24,
        className: P.removeIcon
      })
    })
  }) : null
}