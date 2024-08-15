n.d(t, {
  Z: function() {
return R;
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(512722),
  o = n.n(l),
  c = n(442837),
  d = n(481060),
  u = n(44315),
  _ = n(937615),
  I = n(817460),
  E = n(584825),
  T = n(289393),
  m = n(723047),
  N = n(727843),
  S = n(290348),
  h = n(857081),
  g = n(869269),
  C = n(981631),
  x = n(689938),
  p = n(325850);

function R(e) {
  var t, n;
  let {
guildId: i,
initialEditStateId: l,
allSubscriptionListings: R,
priceTiers: f,
onDeleteEditState: L,
groupListingId: O,
onBeforeDispatchNewListing: A,
onAfterDispatchNewListing: M
  } = e, [D, v] = a.useState(l), j = (0, c.e7)([T.Z], () => T.Z.getSubscriptionListing(D)), Z = null == j, [b, U] = a.useState(Z), G = null == j ? void 0 : j.subscription_plans[0], P = null !== (t = null == j ? void 0 : j.published) && void 0 !== t && t, B = null !== (n = null == j ? void 0 : j.archived) && void 0 !== n && n, y = !B && !P && void 0 !== j, F = void 0 === j, k = (0, m.mY)(), [w] = S._T(D), [H] = S.mR(D), [V] = S.PK(D), [Y] = S.d9(D, 1024), W = '' !== w ? w : x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INITIAL_TIER_NAME, z = '' !== w && null != Y && '' !== V && null != H && !k, K = S.rU(D), {
loading: q,
error: X,
handleCreateOrUpdateFromEditState: Q
  } = S.Xo(), {
submitting: J,
error: $,
publishSubscriptionListing: ee
  } = (0, E.HQ)(), et = q || J;
  return (0, s.jsxs)('div', {
className: p.container,
children: [
  (0, s.jsxs)('div', {
    className: r()(p.header, {
      [p.headerExpanded]: b
    }),
    children: [
      (0, s.jsx)('div', {
        className: p.headerImageContainer,
        children: null == Y ? (0, s.jsx)(h.Z, {
          className: p.starIcon,
          'aria-hidden': !0
        }) : (0, s.jsx)('img', {
          className: p.headerImage,
          src: Y,
          alt: W
        })
      }),
      (0, s.jsxs)('div', {
        className: p.headerListingInfo,
        children: [
          (0, s.jsx)(d.Text, {
            variant: 'text-md/medium',
            color: 'interactive-active',
            children: W
          }),
          (0, s.jsx)(d.Spacer, {
            size: 2
          }),
          (0, s.jsxs)('div', {
            className: p.headerDescriptionContainer,
            children: [
              y && (0, s.jsx)(d.TextBadge, {
                color: (0, u.Lq)(C.Ilk.YELLOW_300),
                text: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_DRAFT_LABEL,
                className: p.draftBadge
              }),
              B && (0, s.jsx)(d.TextBadge, {
                color: (0, u.Lq)(C.Ilk.PRIMARY_500),
                text: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_ARCHIVED_LABEL,
                className: p.archivedBadge
              }),
              F && (0, s.jsx)(d.TextBadge, {
                color: (0, u.Lq)(C.Ilk.PRIMARY_500),
                text: x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_MANAGEMENT_UNSAVED_LABEL,
                className: p.unsavedBadge
              }),
              null != G && (0, s.jsxs)(d.Text, {
                color: 'interactive-normal',
                variant: 'text-sm/normal',
                children: [
                  (0, _.T4)(G.price, G.currency),
                  '/',
                  (0, I.JE)(G)
                ]
              })
            ]
          })
        ]
      }),
      b ? (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(d.Button, {
            look: d.Button.Looks.BLANK,
            className: p.cancel,
            onClick: () => {
              S.GM(D), Z ? null == L || L() : U(!1);
            },
            children: x.Z.Messages.CANCEL
          }),
          (0, s.jsx)(d.Button, {
            onClick: () => Q({
              guildId: i,
              editStateId: D,
              groupListingId: O,
              onBeforeDispatchNewListing: A,
              onAfterDispatchNewListing: e => {
                v(e.id), null == M || M(e);
              }
            }),
            disabled: !z || !K,
            className: p.autoWidth,
            submitting: et,
            children: x.Z.Messages.SAVE
          })
        ]
      }) : (0, s.jsx)(d.Clickable, {
        onClick: () => U(!0),
        'aria-label': x.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_EDIT_LABEL,
        children: (0, s.jsx)(d.PencilIcon, {
          size: 'xs',
          color: 'currentColor',
          className: p.pencilIcon
        })
      })
    ]
  }),
  b && (0, s.jsx)(N.I, {
    editStateId: D,
    guildId: i,
    groupListingId: O,
    children: (0, s.jsx)(g.Z, {
      allSubscriptionListings: R,
      priceTiers: f,
      loading: et,
      error: null != X ? X : $,
      handlePublishTier: () => {
        o()(null != O, 'group listing doesnt exist'), o()(null != j, 'subscription listing doesnt exist'), ee({
          guildId: i,
          groupListingId: O,
          listingId: j.id
        });
      },
      onDeleteEditState: L
    })
  })
]
  });
}