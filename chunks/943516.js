t.d(A, {
  YP: function() {
return g;
  },
  ZP: function() {
return m;
  },
  aN: function() {
return p;
  }
});
var n = t(735250);
t(470079);
var a = t(512722),
  r = t.n(a),
  s = t(866442),
  o = t(399606),
  l = t(481060),
  i = t(430824),
  d = t(470209),
  c = t(981631),
  u = t(689938),
  C = t(869383);

function g() {
  return {
name: '',
color: c.p6O
  };
}

function T(e) {
  let A, {
onRemove: t,
role: a
  } = e;
  return A = null != a ? (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(l.HiddenVisually, {
    children: u.Z.Messages.GUILD_PRODUCT_SETTINGS_ROLE_COLOR_ARIA.format({
      color: (0, s.Rf)(a.color)
    })
  }),
  (0, n.jsx)('div', {
    className: C.attachedRoleColor,
    style: {
      backgroundColor: (0, s.Rf)(a.color)
    }
  }),
  (0, n.jsx)(l.Spacer, {
    size: 8,
    horizontal: !0
  }),
  (0, n.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'text-normal',
    children: a.name
  }),
  null != t && (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)(l.Spacer, {
        size: 12,
        horizontal: !0
      }),
      (0, n.jsx)(l.Clickable, {
        'aria-label': u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ATTACHED_ROLE_ARIA,
        onClick: t,
        className: C.attachedRoleClose,
        children: (0, n.jsx)(l.CloseSmallIcon, {
          size: 'xs',
          color: 'currentColor',
          className: C.attachedRoleCloseIcon
        })
      })
    ]
  })
]
  }) : (0, n.jsx)(l.Spinner, {
type: l.Spinner.Type.PULSING_ELLIPSIS
  }), (0, n.jsx)('div', {
className: C.attachedRoleContainer,
children: A
  });
}

function p() {
  return (0, n.jsx)(l.CircleExclamationPointIcon, {
size: 'xs',
color: 'currentColor',
className: C.warningIcon
  });
}

function h(e) {
  let {
roleName: A
  } = e;
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'text-muted',
    children: u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_BODY.format({
      roleName: A,
      emphasisHook: e => (0, n.jsx)(l.Text, {
        tag: 'span',
        variant: 'text-md/semibold',
        color: 'text-normal',
        children: e
      })
    })
  }),
  (0, n.jsxs)(l.Heading, {
    className: C.detachWarningHeading,
    variant: 'text-md/medium',
    color: 'text-normal',
    children: [
      (0, n.jsx)(l.UserMinusIcon, {
        size: 'sm',
        color: 'currentColor'
      }),
      (0, n.jsx)(l.Spacer, {
        horizontal: !0,
        size: 8
      }),
      u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_TITLE
    ]
  }),
  (0, n.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'text-muted',
    children: u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_1_DETAIL
  }),
  (0, n.jsxs)(l.Heading, {
    className: C.detachWarningHeading,
    variant: 'text-md/medium',
    color: 'text-normal',
    children: [
      (0, n.jsx)(l.TrashIcon, {
        size: 'sm',
        color: 'currentColor'
      }),
      (0, n.jsx)(l.Spacer, {
        horizontal: !0,
        size: 8
      }),
      u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_TITLE
    ]
  }),
  (0, n.jsx)(l.Text, {
    variant: 'text-md/normal',
    color: 'text-muted',
    children: u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_SECTION_2_DETAIL
  })
]
  });
}

function m(e) {
  let {
newRoleParams: A,
setNewRoleParams: a,
guildId: s,
productId: c,
listingRoleId: g,
error: m
  } = e, I = (0, o.e7)([i.Z], () => null != g ? i.Z.getRole(s, g) : void 0);
  return null === A ? (0, n.jsxs)(l.FormItem, {
title: (0, n.jsxs)('div', {
  className: C.warningTitle,
  children: [
    (0, n.jsx)(p, {}),
    (0, n.jsx)(l.Spacer, {
      horizontal: !0,
      size: 4
    }),
    u.Z.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_HEADER
  ]
}),
tag: 'label',
error: m,
titleClassName: C.roleHeader,
children: [
  (0, n.jsx)(l.Text, {
    variant: 'text-xs/normal',
    color: 'text-muted',
    children: u.Z.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_DESCRIPTION
  }),
  (0, n.jsx)(l.Spacer, {
    size: 8
  }),
  (0, n.jsxs)('div', {
    className: C.reattachRoleRow,
    children: [
      (0, n.jsx)(T, {
        role: I,
        onRemove: void 0
      }),
      (0, n.jsx)(l.Spacer, {
        horizontal: !0,
        size: 8
      }),
      (0, n.jsxs)(l.Button, {
        innerClassName: C.restoreDetachedRoleButtonInner,
        color: l.Button.Colors.PRIMARY,
        onClick: () => {
          a(void 0);
        },
        children: [
          (0, n.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'none',
            children: u.Z.Messages.GUILD_PRODUCT_SETTINGS_DETACHED_ROLE_UNDO_CTA
          }),
          (0, n.jsx)(l.Spacer, {
            horizontal: !0,
            size: 8
          }),
          (0, n.jsx)(l.UndoIcon, {
            size: 'xs',
            color: 'currentColor'
          })
        ]
      })
    ]
  })
]
  }) : null != g ? (0, n.jsxs)(l.FormItem, {
title: u.Z.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_HEADER,
tag: 'label',
error: m,
titleClassName: C.roleHeader,
children: [
  (0, n.jsx)(l.Text, {
    variant: 'text-xs/normal',
    color: 'text-muted',
    children: u.Z.Messages.GUILD_PRODUCT_SETTINGS_ATTACHED_ROLE_DESCRIPTION
  }),
  (0, n.jsx)(l.Spacer, {
    size: 8
  }),
  (0, n.jsx)(T, {
    role: I,
    onRemove: () => {
      r()(null != c, 'productId cannot be null'), r()(null != I, 'no role attached'), ! function(e) {
        let {
          onConfirm: A,
          roleName: a
        } = e;
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(t.bind(t, 776045));
          return t => (0, n.jsx)(e, {
            title: u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_TITLE,
            body: (0, n.jsx)(h, {
              roleName: a
            }),
            cta: u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CTA,
            closeLabel: u.Z.Messages.GUILD_PRODUCT_SETTINGS_REMOVE_ROLE_MODAL_REMOVE_CLOSE_LABEL,
            onConfirm: A,
            ...t
          });
        });
      }({
        roleName: I.name,
        onConfirm: () => a(null)
      });
    }
  })
]
  }) : (r()(null != A, 'newRoleParams cannot be null at this point'), (0, n.jsxs)(l.FormItem, {
required: !0,
title: u.Z.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_HEADER,
tag: 'label',
error: m,
titleClassName: C.roleHeader,
children: [
  (0, n.jsx)(l.Text, {
    variant: 'text-xs/normal',
    color: 'text-muted',
    children: u.Z.Messages.GUILD_PRODUCT_SETTINGS_ADD_ROLE_DESCRIPTION
  }),
  (0, n.jsx)(l.Spacer, {
    size: 8
  }),
  (0, n.jsx)(d.Z, {
    newRoleParams: A,
    setNewRoleParams: a
  })
]
  }));
}