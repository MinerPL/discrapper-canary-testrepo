"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("47120"), n("653041");
var s, a, i = n("735250"),
  o = n("470079"),
  l = n("149765"),
  r = n("442837"),
  c = n("524437"),
  d = n("692547"),
  u = n("481060"),
  _ = n("434404"),
  E = n("764260"),
  I = n("422559"),
  S = n("430824"),
  N = n("819570"),
  T = n("441674"),
  O = n("41542"),
  f = n("768581"),
  p = n("700785"),
  m = n("645041"),
  A = n("981631"),
  R = n("921944"),
  M = n("135899"),
  C = n("689938"),
  L = n("675041");

function D(e) {
  let {
    guild: t,
    headerText: s,
    headerSubtext: a,
    step: o
  } = e, l = f.default.getGuildIconURL({
    id: t.id,
    icon: t.icon,
    size: 120
  });
  return (0, i.jsxs)(u.ModalHeader, {
    className: L.header,
    children: [(0, i.jsxs)("div", {
      className: L.headerIconContainer,
      children: [null != l ? (0, i.jsx)(u.Avatar, {
        src: l,
        "aria-label": t.name,
        size: u.AvatarSizes.SIZE_120,
        className: L.__invalid_guildIcon
      }) : (0, i.jsx)("div", {
        className: L.acronym,
        children: t.acronym
      }), 2 === o ? (0, i.jsx)(T.default, {
        className: L.greenPing,
        color: d.default.unsafe_rawColors.GREEN_360.css,
        backgroundColor: d.default.unsafe_rawColors.WHITE_100.css
      }) : (0, i.jsx)(N.Image, {
        src: n("173326"),
        className: L.redPing
      })]
    }), (0, i.jsxs)("div", {
      className: L.headerText,
      children: [(0, i.jsx)(u.Heading, {
        variant: "heading-lg/extrabold",
        color: "header-primary",
        children: s
      }), (0, i.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        children: a
      })]
    })]
  })
}

function U(e) {
  let {
    guild: t
  } = e, n = (0, r.useStateFromStores)([S.default], () => S.default.getRole(t.id, t.getEveryoneRoleId()));
  if (null == n) return null;
  let {
    name: s,
    color: a
  } = n;
  return (0, i.jsxs)("span", {
    className: L.roleRow,
    children: [(0, i.jsx)(u.RoleDot, {
      className: L.roleDot,
      color: a.toString(),
      background: !1,
      tooltip: !1
    }), (0, i.jsx)(u.Text, {
      className: L.roleName,
      variant: "text-sm/medium",
      color: "interactive-active",
      children: s
    })]
  })
}(a = s || (s = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.SUBMITTING = 1] = "SUBMITTING", a[a.SUBMITTED = 2] = "SUBMITTED";
let h = e => {
  if (e.toString() === A.Permissions.MENTION_EVERYONE.toString()) return C.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
  return (0, I.getPermissionName)(e)
};

function x(e) {
  let {
    permissions: t,
    step: n
  } = e;
  return 2 === n ? null : (0, i.jsxs)("div", {
    className: L.tableContainer,
    children: [(0, i.jsx)(u.Text, {
      className: L.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: 0 === n ? C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS : C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLING_PERMISSIONS
    }), (0, i.jsx)("div", {
      className: L.permissionsTable,
      children: t.map((e, t) => (0, i.jsxs)("div", {
        className: L.permissionRow,
        children: [(0, i.jsx)("div", {
          className: 0 === n ? L.bulletPositive : L.bulletWarning
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: h(e)
        })]
      }, t))
    })]
  })
}

function g(e) {
  let {
    permissions: t,
    step: n
  } = e;
  return 0 === t.length && 2 !== n ? null : (2 === n && (t = M.MODERATOR_PERMISSIONS), (0, i.jsxs)("div", {
    className: L.tableContainer,
    children: [(0, i.jsx)(u.Text, {
      className: L.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: 2 === n ? C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED : C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS
    }), (0, i.jsx)("div", {
      className: L.permissionsTable,
      children: t.map((e, t) => (0, i.jsxs)("div", {
        className: L.permissionRow,
        children: [(0, i.jsx)("div", {
          className: L.bullet
        }), (0, i.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: h(e)
        })]
      }, t))
    })]
  }))
}

function v(e) {
  let {
    permissions: t,
    step: n
  } = e, {
    enabledPermissions: s,
    disabledPermissions: a
  } = t;
  return 0 === s.length && 2 !== n ? null : (0, i.jsxs)("div", {
    className: L.table,
    children: [2 !== n ? (0, i.jsx)(x, {
      permissions: s,
      step: n
    }) : null, (0, i.jsx)(g, {
      permissions: a,
      step: n
    })]
  })
}

function F(e) {
  let {
    guild: t,
    permissions: n,
    step: s,
    canEveryoneModerate: a,
    isDefaultNotificationsAllMessages: o
  } = e;
  return (0, i.jsx)(u.ModalContent, {
    children: (0, i.jsxs)("div", {
      className: L.updatedForm,
      children: [o ? (0, i.jsxs)("div", {
        className: L.checklistRow,
        children: [(0, i.jsx)(T.default, {
          className: L.checklistIcon,
          color: d.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: d.default.unsafe_rawColors.WHITE_100.css
        }), (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({
            infoHook: () => (0, i.jsx)(u.Tooltip, {
              text: C.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              "aria-label": C.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,
              children: e => (0, i.jsx)(O.default, {
                className: L.icon,
                ...e
              })
            })
          })
        })]
      }) : null, a ? (0, i.jsxs)("div", {
        className: L.checklistRow,
        children: [(0, i.jsx)(T.default, {
          className: L.checklistIcon,
          color: d.default.unsafe_rawColors.GREEN_360.css,
          backgroundColor: d.default.unsafe_rawColors.WHITE_100.css
        }), (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL_UPDATED
        }), (0, i.jsx)(U, {
          guild: t
        })]
      }) : null, (0, i.jsx)(v, {
        permissions: n,
        step: s
      })]
    })
  })
}

function P(e) {
  let {
    onConfirm: t,
    onDismiss: n,
    canEveryoneModerate: s,
    step: a
  } = e;
  return (0, i.jsxs)(u.ModalFooter, {
    className: L.footer,
    children: [(0, i.jsx)(u.Button, {
      onClick: t,
      submitting: 1 === a,
      children: 0 === a ? s ? C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION : C.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION : C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_CONFIRMATION_DONE
    }), 0 === a ? (0, i.jsx)(u.Button, {
      look: u.Button.Looks.LINK,
      onClick: n,
      color: u.Button.Colors.PRIMARY,
      children: (0, i.jsx)(u.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS
      })
    }) : null]
  })
}

function j(e) {
  let {
    guild: t,
    canEveryoneModerate: n,
    isDefaultNotificationsAllMessages: s,
    transitionState: a,
    onClose: r
  } = e, [d, I] = o.useState(0), N = o.useMemo(() => {
    let e = [],
      n = [];
    return M.MODERATOR_PERMISSIONS.map(s => {
      p.canEveryone(s, t) ? e.push(s) : n.push(s)
    }), {
      enabledPermissions: e,
      disabledPermissions: n
    }
  }, [t]);
  if (null == t) return null;
  let T = () => {
      let e = S.default.getRole(t.id, t.getEveryoneRoleId());
      if (null == e) return;
      let n = l.remove(e.permissions, M.MODERATOR_PERMISSIONS_FLAG);
      (0, E.saveRoleSettings)(t.id, [{
        ...e,
        permissions: n
      }])
    },
    O = () => {
      _.default.updateGuild({
        defaultMessageNotifications: A.UserNotificationSettings.ONLY_MENTIONS
      }), _.default.saveGuild(t.id, {
        defaultMessageNotifications: A.UserNotificationSettings.ONLY_MENTIONS
      })
    },
    f = () => {
      n && T(), s && O()
    };
  return (0, i.jsxs)(u.ModalRoot, {
    transitionState: a,
    size: u.ModalSize.SMALL,
    className: L.modal,
    children: [(0, i.jsx)(D, {
      guild: t,
      headerText: n ? C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_HEADER : C.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_HEADER,
      headerSubtext: n ? C.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_SUBHEADER : C.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_SUBHEADER,
      step: d
    }), (0, i.jsx)(F, {
      guild: t,
      permissions: N,
      step: d,
      canEveryoneModerate: n,
      isDefaultNotificationsAllMessages: s
    }), (0, i.jsx)(P, {
      onConfirm: () => {
        var e, s;
        !n && (f(), r(), (0, m.markContentAsDismissed)(c.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : "", !0, R.ContentDismissActionType.PRIMARY)), 0 === d ? (I(1), setTimeout(() => I(2), 3e3)) : 2 === d && (f(), r(), (0, m.markContentAsDismissed)(c.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : "", !0, R.ContentDismissActionType.PRIMARY))
      },
      onDismiss: () => {
        r(), (0, m.markContentAsDismissed)(c.DismissibleGuildContent.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, t.id, !0, R.ContentDismissActionType.DISMISS)
      },
      step: d,
      canEveryoneModerate: n
    })]
  })
}