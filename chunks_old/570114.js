"use strict";
A.r(t), A.d(t, {
  getInitialNewRoleParams: function() {
    return v
  },
  WarningIcon: function() {
    return I
  },
  default: function() {
    return x
  }
});
var a = A("37983");
A("884691");
var l = A("627445"),
  n = A.n(l),
  r = A("509043"),
  s = A("65597"),
  i = A("77078"),
  o = A("305961"),
  d = A("191814"),
  u = A("945330"),
  c = A("152224"),
  f = A("228220"),
  g = A("204203"),
  C = A("423487"),
  h = A("373996"),
  m = A("49111"),
  p = A("782340"),
  T = A("851894");

function v() {
  return {
    name: "",
    color: m.DEFAULT_ROLE_COLOR
  }
}

function U(e) {
  let t, {
    onRemove: A,
    role: l
  } = e;
  return t = null != l ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.HiddenVisually, {
      children: p.default.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
        color: (0, r.int2hex)(l.color)
      })
    }), (0, a.jsx)("div", {
      className: T.attachedRoleColor,
      style: {
        backgroundColor: (0, r.int2hex)(l.color)
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
        "aria-label": p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ATTACHED_ROLE_ARIA,
        onClick: A,
        className: T.attachedRoleClose,
        children: (0, a.jsx)(u.default, {
          width: 16,
          height: 16,
          className: T.attachedRoleCloseIcon
        })
      })]
    })]
  }) : (0, a.jsx)(i.Spinner, {
    type: i.Spinner.Type.PULSING_ELLIPSIS
  }), (0, a.jsx)("div", {
    className: T.attachedRoleContainer,
    children: t
  })
}

function I() {
  return (0, a.jsx)(C.default, {
    className: T.warningIcon,
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
      children: p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
        roleName: t,
        emphasisHook: e => (0, a.jsx)(i.Text, {
          tag: "span",
          variant: "text-md/semibold",
          color: "text-normal",
          children: e
        })
      })
    }), (0, a.jsxs)(i.Heading, {
      className: T.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(c.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE]
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
    }), (0, a.jsxs)(i.Heading, {
      className: T.detachWarningHeading,
      variant: "text-md/medium",
      color: "text-normal",
      children: [(0, a.jsx)(f.default, {
        height: 18,
        width: 18
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_TITLE]
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
    })]
  })
}

function x(e) {
  let {
    newRoleParams: t,
    setNewRoleParams: l,
    guildId: r,
    productId: u,
    listingRoleId: c,
    error: f
  } = e, C = (0, s.useStateFromStores)([o.default], () => null != c ? o.default.getRole(r, c) : void 0);
  return null === t ? (0, a.jsxs)(i.FormItem, {
    title: (0, a.jsxs)("div", {
      className: T.warningTitle,
      children: [(0, a.jsx)(I, {}), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 4
      }), p.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_HEADER]
    }),
    tag: "label",
    error: f,
    titleClassName: T.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: p.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsxs)("div", {
      className: T.reattachRoleRow,
      children: [(0, a.jsx)(U, {
        role: C,
        onRemove: void 0
      }), (0, a.jsx)(d.default, {
        horizontal: !0,
        size: 8
      }), (0, a.jsxs)(i.Button, {
        innerClassName: T.restoreDetachedRoleButtonInner,
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          l(void 0)
        },
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          color: "none",
          children: p.default.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
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
    title: p.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: T.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: p.default.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(U, {
      role: C,
      onRemove: () => {
        n(null != u, "productId cannot be null"), n(null != C, "no role attached"), ! function(e) {
          let {
            onConfirm: t,
            roleName: l
          } = e;
          (0, i.openModalLazy)(async () => {
            let {
              default: e
            } = await A.el("83501").then(A.bind(A, "83501"));
            return A => (0, a.jsx)(e, {
              title: p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
              body: (0, a.jsx)(E, {
                roleName: l
              }),
              cta: p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
              closeLabel: p.default.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
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
  }) : (n(null != t, "newRoleParams cannot be null at this point"), (0, a.jsxs)(i.FormItem, {
    required: !0,
    title: p.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
    tag: "label",
    error: f,
    titleClassName: T.roleHeader,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: p.default.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
    }), (0, a.jsx)(d.default, {
      size: 8
    }), (0, a.jsx)(h.default, {
      newRoleParams: t,
      setNewRoleParams: l
    })]
  }))
}