"use strict";
a.r(s), a.d(s, {
  default: function() {
    return j
  }
}), a("653041");
var i = a("735250"),
  t = a("470079"),
  n = a("149765"),
  r = a("481060"),
  l = a("422559"),
  o = a("430824"),
  d = a("768581"),
  c = a("700785"),
  m = a("764260"),
  u = a("981631"),
  x = a("135899"),
  E = a("689938"),
  S = a("95889");

function N(e) {
  let {
    guild: s
  } = e, a = d.default.getGuildIconURL({
    id: s.id,
    icon: s.icon,
    size: 120
  });
  return (0, i.jsxs)(r.ModalHeader, {
    className: S.header,
    children: [(0, i.jsx)("div", {
      className: S.headerIconContainer,
      children: null != a ? (0, i.jsx)(r.Avatar, {
        src: a,
        "aria-label": s.name,
        size: r.AvatarSizes.SIZE_120,
        className: S.__invalid_guildIcon
      }) : (0, i.jsx)("div", {
        className: S.acronym,
        children: s.acronym
      })
    }), (0, i.jsxs)("div", {
      className: S.headerText,
      children: [(0, i.jsx)(r.Heading, {
        variant: "heading-lg/extrabold",
        color: "header-primary",
        children: E.default.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_TITLE
      }), (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        children: E.default.Messages.SAFETY_REMOVE_RISKY_PERMS_MODAL_SUBTITLE
      })]
    })]
  })
}
let _ = e => {
  if (e.toString() === u.Permissions.MENTION_EVERYONE.toString()) return E.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_MENTION_EVERYONE;
  return (0, l.getPermissionName)(e)
};

function I(e) {
  let {
    permissions: s
  } = e;
  return (0, i.jsxs)("div", {
    className: S.tableContainer,
    children: [(0, i.jsx)(r.Text, {
      className: S.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: E.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_ENABLED_PERMISSIONS
    }), (0, i.jsx)("div", {
      className: S.permissionsTable,
      children: s.map((e, s) => (0, i.jsxs)("div", {
        className: S.permissionRow,
        children: [(0, i.jsx)("div", {
          className: S.bulletWarning
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          children: _(e)
        })]
      }, s))
    })]
  })
}

function M(e) {
  let {
    permissions: s
  } = e;
  return (0, i.jsxs)("div", {
    className: S.tableContainer,
    children: [(0, i.jsx)(r.Text, {
      className: S.tableHeader,
      variant: "text-xs/semibold",
      color: "text-muted",
      children: E.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_DISABLED_PERMISSIONS
    }), (0, i.jsx)("div", {
      className: S.permissionsTable,
      children: s.map((e, s) => (0, i.jsxs)("div", {
        className: S.permissionRow,
        children: [(0, i.jsx)("div", {
          className: S.bullet
        }), (0, i.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: _(e)
        })]
      }, s))
    })]
  })
}

function h(e) {
  let {
    permissions: s
  } = e, {
    enabledPermissions: a,
    disabledPermissions: t
  } = s;
  return (0, i.jsx)(r.ModalContent, {
    children: (0, i.jsxs)("div", {
      className: S.table,
      children: [(0, i.jsx)(I, {
        permissions: a
      }), (0, i.jsx)(M, {
        permissions: t
      })]
    })
  })
}

function R(e) {
  let {
    onConfirm: s,
    onDismiss: a
  } = e;
  return (0, i.jsxs)(r.ModalFooter, {
    className: S.footer,
    children: [(0, i.jsx)(r.Button, {
      onClick: s,
      children: E.default.Messages.UPDATE_COMMUNICATION_NOTIFICATIONS_CONFIRMATION
    }), (0, i.jsx)(r.Button, {
      look: r.Button.Looks.LINK,
      onClick: a,
      color: r.Button.Colors.PRIMARY,
      children: (0, i.jsx)(r.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: E.default.Messages.DISABLE_UNSAFE_DEFAULT_PERMISSIONS_NOTICE_DISMISS
      })
    })]
  })
}

function j(e) {
  let {
    guild: s,
    transitionState: a,
    onClose: l
  } = e, d = t.useMemo(() => {
    let e = [],
      a = [];
    return x.MODERATOR_PERMISSIONS.map(i => {
      c.canEveryone(i, s) ? e.push(i) : a.push(i)
    }), {
      enabledPermissions: e,
      disabledPermissions: a
    }
  }, [s]);
  if (null == s) return null;
  let u = async () => {
    let e = null != s ? o.default.getRole(s.id, s.getEveryoneRoleId()) : void 0;
    if (null == e) return;
    let a = n.remove(e.permissions, x.MODERATOR_PERMISSIONS_FLAG);
    await (0, m.saveRoleSettings)(s.id, [{
      ...e,
      permissions: a
    }]), l()
  };
  return (0, i.jsxs)(r.ModalRoot, {
    transitionState: a,
    size: r.ModalSize.SMALL,
    className: S.modal,
    children: [(0, i.jsx)(N, {
      guild: s
    }), (0, i.jsx)(h, {
      permissions: d
    }), (0, i.jsx)(R, {
      onConfirm: u,
      onDismiss: () => {
        l()
      }
    })]
  })
}