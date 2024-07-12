n.d(t, {
  Z: function() {
return E;
  },
  w: function() {
return T;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(481060),
  l = n(259580),
  o = n(73346),
  c = n(817460),
  d = n(723047),
  u = n(880229),
  _ = n(689938),
  I = n(741932);

function E(e) {
  let {
channelBenefits: t,
intangibleBenefits: n,
subscriptionListings: a,
onImport: l
  } = e, E = (0, d.mY)();
  return (0, s.jsx)('div', {
className: I.container,
children: a.map(e => (0, s.jsxs)('div', {
  className: I.row,
  children: [
    (0, s.jsx)('img', {
      alt: '',
      src: null == e.image_asset ? void 0 : (0, o._W)(e.application_id, e.image_asset, 512),
      className: i()(I.rowIcon, I.listingImage)
    }),
    (0, s.jsxs)('div', {
      className: I.rowBody,
      children: [
        (0, s.jsx)(r.Text, {
          variant: 'text-md/normal',
          color: 'header-primary',
          className: i()(I.rowText, I.listingName),
          children: e.name
        }),
        (0, s.jsx)(r.Text, {
          color: 'header-secondary',
          variant: 'text-sm/normal',
          children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_NUM_BENEFITS.format({
            channels: e.role_benefits.benefits.filter(c.rC).length,
            benefits: e.role_benefits.benefits.filter(c.lL).length
          })
        })
      ]
    }),
    (0, s.jsx)(r.Button, {
      look: r.Button.Looks.OUTLINED,
      color: r.Button.Colors.PRIMARY,
      onClick: () => {
        var a;
        return a = e, void(0, r.openModal)(e => (0, s.jsx)(u.K, {
          ...e,
          fromSubscriptionListing: a,
          existingChannelBenefits: t,
          existingIntangibleBenefits: n,
          onSubmit: l
        }));
      },
      disabled: E,
      children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_BUTTON
    })
  ]
}, e.id))
  });
}

function T(e) {
  let {
guildId: t,
onImport: n,
disabled: a = !1
  } = e;
  return (0, s.jsxs)(r.Clickable, {
className: i()(I.importRoleCard, {
  [I.disabled]: a
}),
onClick: a ? void 0 : function() {
  (0, r.openModal)(e => (0, s.jsx)(u.C, {
    ...e,
    guildId: t,
    onImport: n
  }));
},
'aria-disabled': a,
children: [
  (0, s.jsx)(r.ShieldUserIcon, {
    size: 'custom',
    width: 23,
    height: 23,
    color: 'currentColor',
    className: I.rowIcon
  }),
  (0, s.jsx)(r.Text, {
    variant: 'text-md/normal',
    color: 'header-primary',
    className: I.rowText,
    children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_SELECT_ROLE
  }),
  (0, s.jsx)(l.Z, {
    direction: l.Z.Directions.RIGHT,
    className: I.caret
  })
]
  });
}