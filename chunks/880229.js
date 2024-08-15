n.d(t, {
  C: function() {
return W;
  },
  K: function() {
return k;
  }
}), n(47120), n(390547);
var s, a, i = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(77866),
  d = n(149765),
  u = n(866442),
  _ = n(442837),
  I = n(902704),
  E = n(477690),
  T = n(481060),
  m = n(596454),
  N = n(471445),
  S = n(605436),
  h = n(91218),
  g = n(313201),
  C = n(339085),
  x = n(518738),
  p = n(131704),
  R = n(324067),
  f = n(430824),
  L = n(259580),
  O = n(624138),
  A = n(817460),
  M = n(166803),
  D = n(629262),
  v = n(686807),
  j = n(981631),
  Z = n(689938),
  b = n(898414);
let U = (0, g.hQ)(),
  G = (0, g.hQ)(),
  P = (0, O.Mg)(E.Z.IMPORT_BENEFITS_MODAL_ROLE_ICON_SIZE);

function B(e) {
  var t;
  let {
emojiId: n,
emojiName: s,
className: a
  } = e, r = (0, _.e7)([C.ZP], () => null != n ? C.ZP.getCustomEmojiById(n) : void 0);
  return (0, i.jsx)(m.Z, {
emojiId: n,
emojiName: s,
animated: null !== (t = null == r ? void 0 : r.animated) && void 0 !== t && t,
className: a
  });
}

function y(e) {
  let {
icon: t,
children: n,
checked: s,
disabled: a = !1,
onChange: r
  } = e, l = s || a;
  return (0, i.jsxs)('label', {
className: o()(b.row, {
  [b.checked]: l,
  [b.disabled]: a
}),
children: [
  (0, i.jsx)('div', {
    className: b.rowIconWrapper,
    children: t
  }),
  (0, i.jsx)('div', {
    className: b.rowText,
    children: n
  }),
  (0, i.jsxs)('div', {
    className: b.rowCheckbox,
    children: [
      (0, i.jsx)(T.FocusRing, {
        children: (0, i.jsx)('input', {
          type: 'checkbox',
          checked: l,
          disabled: a,
          className: b.checkboxInput,
          onChange: function(e) {
            r(e.target.checked);
          }
        })
      }),
      (0, i.jsx)('div', {
        className: b.checkboxDisplay,
        children: (0, i.jsx)(T.CheckmarkLargeIcon, {
          size: 'md',
          color: 'currentColor',
          className: b.checkboxIcon,
          'aria-hidden': !0
        })
      })
    ]
  })
]
  });
}

function F(e) {
  let {
title: t,
selectAllText: n,
benefits: s,
dupeBenefits: a,
selectedBenefits: r,
onToggleBenefit: l
  } = e, o = s.every(e => r.has(e));
  return s.length > 0 ? (0, i.jsxs)(T.FormSection, {
title: t,
className: b.section,
children: [
  s.length - a.size > 1 && (0, i.jsx)('div', {
    className: b.list,
    children: (0, i.jsx)(y, {
      icon: (0, i.jsx)(T.ChannelListPlusIcon, {
        size: 'md',
        color: 'currentColor',
        className: b.rowIcon
      }),
      checked: o,
      onChange: function(e) {
        for (let t of s)
          !a.has(t) && l(t, e);
      },
      children: (0, i.jsx)(T.Text, {
        color: 'header-primary',
        variant: 'text-md/normal',
        children: n
      })
    })
  }),
  (0, i.jsx)('div', {
    className: b.list,
    children: s.map(e => (0, i.jsxs)(y, {
      icon: (0, i.jsx)(B, {
        emojiId: e.emoji_id,
        emojiName: e.emoji_name,
        className: b.rowIcon
      }),
      checked: r.has(e),
      disabled: a.has(e),
      onChange: t => l(e, t),
      children: [
        (0, i.jsx)(T.Text, {
          color: 'header-primary',
          variant: 'text-md/semibold',
          children: (0, v.Z)(e)
        }),
        (0, i.jsx)(T.Text, {
          color: 'interactive-normal',
          variant: 'text-sm/normal',
          children: e.description
        })
      ]
    }, (0, A.ab)(e)))
  })
]
  }) : null;
}

function k(e) {
  let {
transitionState: t,
fromSubscriptionListing: n,
existingChannelBenefits: s,
existingIntangibleBenefits: a,
onSubmit: l,
onClose: o
  } = e, c = n.role_benefits.benefits, [d, u] = r.useState(() => new Set(c)), _ = r.useMemo(() => c.filter(A.rC), [c]), E = (0, D.Z)(_), m = r.useMemo(() => c.filter(A.lL), [c]), N = r.useMemo(() => new Set(E.filter(e => s.some(t => t.ref_id === e.ref_id))), [
E,
s
  ]), S = r.useMemo(() => new Set(m.filter(e => a.some(t => (0, I.Z)(e, t)))), [
a,
m
  ]), h = (0, g.Dt)();

  function C(e, t) {
u(n => {
  let s = new Set(n);
  return t ? s.add(e) : s.delete(e), s;
});
  }
  return (0, i.jsx)('form', {
onSubmit: function(e) {
  e.preventDefault();
  let t = c.filter(e => d.has(e)),
    n = t.filter(A.rC).filter(e => !N.has(e));
  l(n, t.filter(A.lL).filter(e => !S.has(e))), o();
},
children: (0, i.jsxs)(T.ModalRoot, {
  transitionState: t,
  'aria-labelledby': h,
  children: [
    (0, i.jsxs)(T.ModalHeader, {
      children: [
        (0, i.jsx)(T.Heading, {
          id: h,
          variant: 'heading-md/semibold',
          children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_MODAL_HEADER.format({
            tierName: n.name
          })
        }),
        (0, i.jsx)(T.ModalCloseButton, {
          className: b.modalCloseButton,
          onClick: o
        })
      ]
    }),
    (0, i.jsxs)(T.ModalContent, {
      className: b.modalContent,
      children: [
        (0, i.jsx)(F, {
          title: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
          selectAllText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS,
          benefits: E,
          dupeBenefits: N,
          selectedBenefits: d,
          onToggleBenefit: C
        }),
        (0, i.jsx)(F, {
          title: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
          selectAllText: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_INTANGIBLE_BENEFITS,
          benefits: m,
          dupeBenefits: S,
          selectedBenefits: d,
          onToggleBenefit: C
        })
      ]
    }),
    (0, i.jsxs)(T.ModalFooter, {
      children: [
        (0, i.jsx)(T.Button, {
          type: 'submit',
          children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_CONFIRM_BUTTON
        }),
        (0, i.jsx)(T.Button, {
          look: T.Button.Looks.LINK,
          color: T.Button.Colors.PRIMARY,
          onClick: o,
          children: Z.Z.Messages.CANCEL
        })
      ]
    })
  ]
})
  });
}

function w(e) {
  var t;
  let {
guildId: n,
role: s,
channelCount: a,
onSelect: r
  } = e, l = (0, x.p9)({
guildId: n,
roleId: s.id,
size: P
  });
  return (0, i.jsxs)(T.Clickable, {
className: b.roleRow,
onClick: r,
children: [
  (0, i.jsx)('div', {
    className: b.rowIconWrapper,
    children: null != l ? (0, i.jsx)(h.Z, {
      ...l
    }) : (0, i.jsx)(T.ShieldUserIcon, {
      size: 'custom',
      width: 23,
      height: 23,
      color: null !== (t = s.colorString) && void 0 !== t ? t : (0, u.Rf)(j.p6O),
      className: b.roleRowIconDefault
    })
  }),
  (0, i.jsxs)('div', {
    className: b.rowText,
    children: [
      (0, i.jsx)(T.Text, {
        color: 'header-primary',
        variant: 'text-md/normal',
        className: b.__invalid_benefitTitle,
        children: s.name
      }),
      (0, i.jsx)(T.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: Z.Z.Messages.NUM_CHANNELS.format({
          num: a
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: b.rowCheckbox,
    children: (0, i.jsx)(L.Z, {
      direction: L.Z.Directions.RIGHT
    })
  })
]
  });
}

function H(e) {
  let {
guild: t,
onSelect: n
  } = e, s = (0, _.e7)([f.Z], () => f.Z.getRoles(t.id)), a = (0, _.e7)([R.Z], () => R.Z.getCategories(t.id)), l = r.useMemo(() => a._categories.flatMap(e => a[e.channel.id].filter(e => {
let {
  channel: t
} = e;
return p.zS.has(t.type);
  }).map(e => {
let {
  channel: t
} = e;
return t;
  })), [a]), o = r.useMemo(() => Object.values(s).flatMap(e => {
var n;
if ((0, S.pM)(t.id, e.id) || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || d.Db(e.permissions, j.TC2))
  return [];
let s = (0, M.Z)(l, e).length;
return s > 0 ? {
  role: e,
  channelCount: s
} : [];
  }), [
t,
s,
l
  ]);
  return o.length > 0 ? (0, i.jsx)('div', {
className: b.list,
children: o.map(e => (0, i.jsx)(w, {
  guildId: t.id,
  role: e.role,
  channelCount: e.channelCount,
  onSelect: () => n(e.role)
}, e.role.id))
  }) : (0, i.jsx)(T.Text, {
variant: 'text-md/normal',
children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE_EMPTY
  });
}

function V(e) {
  let {
onClose: t,
guildId: n,
onSelect: s
  } = e, a = (0, _.e7)([f.Z], () => f.Z.getGuild(n));
  return null == a ? null : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(T.ModalHeader, {
    children: [
      (0, i.jsx)(T.Heading, {
        id: U,
        variant: 'heading-md/semibold',
        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_1
      }),
      (0, i.jsx)(T.ModalCloseButton, {
        className: b.modalCloseButton,
        onClick: t
      })
    ]
  }),
  (0, i.jsx)(T.ModalContent, {
    className: b.modalContent,
    children: (0, i.jsx)(H, {
      guild: a,
      onSelect: s
    })
  })
]
  });
}

function Y(e) {
  let {
onClose: t,
guildId: n,
role: s,
onCancel: a,
onImport: l
  } = e, o = r.useRef(s);
  null != s && (o.current = s);
  let d = null != s ? s : o.current,
u = (0, c.Z)(() => {
  let e = R.Z.getCategories(n);
  return e._categories.flatMap(t => e[t.channel.id].filter(e => {
    let {
      channel: t
    } = e;
    return p.zS.has(t.type);
  }).map(e => {
    let {
      channel: t
    } = e;
    return t;
  }));
}),
_ = r.useMemo(() => (0, M.Z)(u, d), [
  u,
  d
]),
[I, E] = r.useState(() => new Set(_.map(e => e.id)));

  function m(e, t) {
E(n => {
  let s = new Set(n);
  return t ? s.add(e) : s.delete(e), s;
});
  }
  return (0, i.jsxs)('form', {
onSubmit: function(e) {
  e.preventDefault(), l(_.map(e => e.id).filter(e => I.has(e))), t();
},
className: b.slideForm,
children: [
  (0, i.jsxs)(T.ModalHeader, {
    children: [
      (0, i.jsx)(T.Heading, {
        id: G,
        variant: 'heading-md/semibold',
        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_MODAL_HEADER_2.format({
          roleName: d.name
        })
      }),
      (0, i.jsx)(T.ModalCloseButton, {
        className: b.modalCloseButton,
        onClick: t
      })
    ]
  }),
  (0, i.jsxs)(T.ModalContent, {
    className: b.modalContent,
    children: [
      _.length > 1 && (0, i.jsx)('div', {
        className: b.list,
        children: (0, i.jsx)(y, {
          icon: (0, i.jsx)(T.ChannelListPlusIcon, {
            size: 'md',
            color: 'currentColor'
          }),
          checked: I.size === _.length,
          onChange: function(e) {
            for (let t of _)
              m(t.id, e);
          },
          children: (0, i.jsx)(T.Text, {
            color: 'header-primary',
            variant: 'text-md/normal',
            children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_SELECT_ALL_CHANNEL_BENEFITS
          })
        })
      }),
      (0, i.jsx)('div', {
        className: b.list,
        children: _.map(e => {
          var t;
          let n = null !== (t = (0, N.Th)(e.type)) && void 0 !== t ? t : T.TextIcon;
          return (0, i.jsx)(y, {
            icon: (0, i.jsx)('div', {
              className: b.rowIcon,
              children: (0, i.jsx)(n, {
                size: 'custom',
                color: 'currentColor',
                width: '100%',
                height: '100%'
              })
            }),
            checked: I.has(e.id),
            onChange: t => m(e.id, t),
            children: (0, i.jsx)(T.Text, {
              color: 'header-primary',
              variant: 'text-md/normal',
              className: b.__invalid_benefitTitle,
              children: e.name
            })
          }, e.id);
        })
      })
    ]
  }),
  (0, i.jsxs)(T.ModalFooter, {
    children: [
      (0, i.jsx)(T.Button, {
        type: 'submit',
        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_IMPORT_BENEFITS_FROM_ROLE_CONFIRM_BUTTON
      }),
      (0, i.jsx)(T.Button, {
        look: T.Button.Looks.LINK,
        color: T.Button.Colors.PRIMARY,
        onClick: a,
        children: Z.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}

function W(e) {
  let {
transitionState: t,
guildId: n,
onClose: s,
onImport: a
  } = e, [l, o] = r.useState();
  return (0, i.jsx)(T.ModalRoot, {
transitionState: t,
'aria-labelledby': null == l ? U : G,
children: (0, i.jsxs)(T.Slides, {
  contentDisplay: 'flex',
  activeSlide: null == l ? 0 : 1,
  width: 440,
  children: [
    (0, i.jsx)(T.Slide, {
      id: 0,
      children: (0, i.jsx)(V, {
        onClose: s,
        guildId: n,
        onSelect: o
      })
    }),
    (0, i.jsx)(T.Slide, {
      id: 1,
      children: (0, i.jsx)(Y, {
        onClose: s,
        guildId: n,
        role: l,
        onCancel: () => o(void 0),
        onImport: a
      })
    })
  ]
})
  });
}
(a = s || (s = {}))[a.SELECT_ROLE = 0] = 'SELECT_ROLE', a[a.SELECT_CHANNELS = 1] = 'SELECT_CHANNELS';