n.d(t, {
  Z: function() {
return L;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(392711),
  o = n(399606),
  c = n(215569),
  d = n(481060),
  u = n(852860),
  _ = n(999382),
  I = n(644542),
  E = n(923726),
  T = n(584825),
  m = n(295141),
  N = n(723047),
  S = n(290348),
  h = n(450215),
  g = n(981631),
  C = n(689938),
  x = n(540880);
let p = 'guild-role-subscription-tier-template-selector',
  R = e => {
let [t, n] = a.useState(!0), [s, i] = a.useState();
return a.useEffect(() => {
  n(!0), (0, m.X)(e).then(e => {
    i(e), n(!1);
  });
}, [e]), {
  loading: t,
  priceTiers: s
};
  };

function f(e) {
  let {
guildId: t,
priceTiers: i,
groupListingId: m
  } = e, R = (0, T._k)(m), {
editStateIds: f,
addNewEditStateId: L,
addNewEditStateFromTemplate: O,
removeEditStateId: A
  } = S.B7(m, t, {
includeSoftDeleted: !0
  }), [M, D] = a.useState({}), v = a.useMemo(() => {
let e = f.map(e => {
  var t;
  return null !== (t = M[e]) && void 0 !== t ? t : e;
});
return (0, l.uniq)(e);
  }, [
f,
M
  ]), j = (e, t) => {
D(n => ({
  ...n,
  [e]: t
}));
  }, Z = (0, E.ss)(t), b = (0, E.Gp)(), U = a.useCallback(() => {
b && I.jJ.trackExposure({
  guildId: t,
  location: 'b2d9de_1'
}), b && Z ? (0, d.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('9558').then(n.bind(n, 34460));
  return n => (0, s.jsx)(e, {
    ...n,
    guildId: t,
    addNewEditStateFromTemplate: O,
    addNewEditStateFromScratch: L,
    priceTiers: i
  });
}, {
  modalKey: p
}) : L();
  }, [
t,
O,
L,
i,
b,
Z
  ]), G = S.Lo(v), P = a.useCallback(() => v.forEach(S.GM), [v]), B = (0, N.mY)(), y = (0, o.e7)([_.Z], () => _.Z.getProps().subsection);
  return a.useEffect(() => (y === g.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && U(), () => {
(0, d.closeModal)(p);
  }), [
y,
U
  ]), (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: x.groupListings,
    children: [
      v.map(e => (0, s.jsx)(h.Z, {
        guildId: t,
        initialEditStateId: e,
        allSubscriptionListings: R,
        priceTiers: i,
        groupListingId: m,
        onDeleteEditState: () => A(e),
        onBeforeDispatchNewListing: t => j(t.id, e),
        onAfterDispatchNewListing: () => A(e)
      }, e)),
      (0, s.jsxs)(d.Clickable, {
        onClick: B ? void 0 : U,
        className: r()(x.createTierButton, {
          [x.disabled]: B
        }),
        'aria-disabled': B,
        children: [
          (0, s.jsx)(d.CirclePlusIcon, {
            size: 'xs',
            color: 'currentColor',
            className: x.createTierIcon
          }),
          (0, s.jsx)(d.Text, {
            variant: 'text-md/normal',
            color: 'interactive-active',
            children: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIER_CARD_CREATE
          })
        ]
      })
    ]
  }),
  (0, s.jsx)(c.W, {
    component: 'div',
    className: x.contentRegion,
    children: G && (0, s.jsx)(d.SlideIn, {
      children: (0, s.jsx)(u.Z, {
        onReset: P
      })
    })
  })
]
  });
}

function L(e) {
  let {
guildId: t
  } = e, {
priceTiers: n
  } = R(t), a = (0, T.GG)(t), {
maxTiers: i
  } = (0, E.s1)(t), r = a.map(e => e.id);
  return (0, s.jsxs)(d.FormSection, {
title: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_TITLE,
className: x.container,
children: [
  (0, s.jsx)(d.FormText, {
    type: d.FormText.Types.DESCRIPTION,
    children: C.Z.Messages.GUILD_SETTINGS_ROLE_SUBSCRIPTION_TIERS_TAB_DESCRIPTION.format({
      maxTiers: i
    })
  }),
  (0, s.jsx)(d.Spacer, {
    size: 16
  }),
  (0, s.jsx)(f, {
    priceTiers: n,
    guildId: t,
    groupListingId: r[0]
  })
]
  });
}