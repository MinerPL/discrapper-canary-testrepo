"use strict";
A.r(t), A.d(t, {
  WarningIcon: function() {
    return I
  },
  default: function() {
    return x
  },
  getInitialNewRoleParams: function() {
    return U
  }
});
var a = A("735250");
A("470079");
var l = A("512722"),
  s = A.n(l),
  n = A("866442"),
  r = A("399606"),
  i = A("481060"),
  o = A("430824"),
  d = A("682864"),
  u = A("465670"),
  c = A("877410"),
  f = A("740727"),
  g = A("610064"),
  C = A("759231"),
  h = A("470209"),
  m = A("981631"),
  T = A("689938"),
  p = A("342354");

function U() {
  return {
    name: "",
    color: m.DEFAULT_ROLE_COLOR
  }
}

function v(e) {
  let t, {
    onRemove: A,
    role: l
  } = e;
  return t = null != l ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.HiddenVisually, {
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
        color: (0, n.int2hex)(l.color)
      })
    }), (0, a.jsx)("div", {
      className: p.attachedRoleColor,
      style: {
        backgroundColor: (0, n.int2hex)(l.color)
      }
    }), (0, a.jsx)(d.default, {
      size: 8,
      horizontal: !0
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      children: l.name
    }), null != A && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.default, {
        size: 12,
        horizontal: !0
      }), (0, a.jsx)(i.Clickable, {
        "aria-label": T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ATTACHED_ROLE_ARIA,
        onClick: A,
        className: p.attachedRoleClose,
        children: (0, a.jsx)(u.default, {
          width: 16,
          height: 16,
          className: p.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, a.jsx)(i.Spinner, {
    type: i.Spinner.Type.PULSING_ELLIPSIS
  }), (0, a.jsx)("div", {
    className: p.attachedRoleContainer,
    children: t
  })
}

function I() {
  return (0, a.jsx)(C.default, {
    className: p.warningIcon,
    width: 16,
    height: 16
  })
}

function E(e) {
  let {
    roleName: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
        roleName: t,
        emphasisHook: e => (0, a.jsx)(i.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-normal",
          children: e
        })
      })
    }), (0, a.jsxs)(i.Heading, {
      className: p.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE]
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
    }), (0, a.jsxs)(i.Heading, {
      className: p.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(f.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_TITLE]
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
    })]
  })
}

function x(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: l,
    guildId: n,
    productId: u,
    listingRoleId: c,
    error: f
  } = e, C = (0, r.useStateFromStores)([o.default], () => null != c ? o.default.getRole(n, c) : void 0);
  return null === t ? (0, a.jsxs)(i.FormItem, {
    title: (0, a.jsxs)("div", {
      className: p.warningTitle,
      children: [(0, a.jsx)(I, {}), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 4
      }), T.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_HEADER]
    }),
    tag: "label",
    error: f,
    titleClassName: p.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsxs)("div", {
      className: p.reattachRoleRow,
      children: [(0, a.jsx)(v, {
        role: C,
        onRemove: void 0
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), (0, a.jsxs)(i.Button, {
        innerClassName: p.restoreDetachedRoleButtonInner,
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          l(void 0)
        },
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "none",
          children: T.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
        }), (0, a.jsx)(d.default, {
          horizontal: !0,
          size: 8
        }), (0, a.jsx)(g.default, {
          width: 16,
          height: 16
        })]
      })]
    })]
  }) : null != c ? (0, a.jsxs)(i.FormItem, {
    title: T.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: p.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(v, {
      role: C,
      onRemove: () => {
        s()(null != u, "productId cannot be null"), s()(null != C, "no role attached"), ! function(e) {
          let {
            onConfirm: t,
            roleName: l
          } = e;
          (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(A.bind(A, "776045"));
            return A => (0, a.jsx)(e, {
              title: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
              body: (0, a.jsx)(E, {
                roleName: l
              }),
              cta: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
              closeLabel: T.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
              onConfirm: t,
              ...A
            })
          })
        }({
          roleName: C.name,
          onConfirm: () => l(null)
        })
      }
    })]
  }) : (s()(null != t, "newRoleParams cannot be null at this point"), (0, a.jsxs)(i.FormItem, {
    required: !0,
    title: T.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: p.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: T.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(h.default, {
      newRoleParams: t,
      setNewRoleParams: l
    })]
  }))
}