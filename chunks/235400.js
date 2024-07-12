n.r(t), n.d(t, {
  default: function() {
return y;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(979554),
  o = n(442837),
  s = n(481060),
  l = n(100527),
  u = n(906732),
  c = n(335131),
  d = n(884697),
  _ = n(449217),
  E = n(223143),
  f = n(311395),
  h = n(197115),
  p = n(166625),
  m = n(594174),
  I = n(626135),
  T = n(74538),
  g = n(864106),
  S = n(240781),
  A = n(818611),
  N = n(981631),
  v = n(474936),
  O = n(689938),
  R = n(426143);

function C(e) {
  let {
user: t,
categories: n,
purchases: a,
analyticsLocations: o,
onClose: u,
initialSelectedDecoration: E,
initialSelectedDecorationId: m,
isTryItOutFlow: I,
guild: N
  } = e, {
pendingAvatarDecoration: C,
setPendingAvatarDecoration: y,
savedAvatarDecoration: D
  } = (0, p.Z)({
analyticsLocations: o,
isTryItOut: I,
guildId: null == N ? void 0 : N.id
  }), [L, b] = i.useState(() => {
var e, t;
if (null != E)
  return E;
let r = (0, d.iC)(a, n);
return null != m ? null !== (e = r.find(e => e.id === m)) && void 0 !== e ? e : null : void 0 !== C ? C : null == D ? null : null !== (t = r.find(e => (0, g.sr)(e, D))) && void 0 !== t ? t : null;
  }), {
product: M,
purchase: P
  } = (0, _.Z)(null == L ? void 0 : L.skuId), U = T.ZP.canUseCollectibles(t), w = i.useRef(null), x = (0, f.Z)(o), G = (0, g.sr)(L, void 0 === C ? D : C), k = () => {
y(L), u();
  }, B = i.useCallback(e => {
u(), (0, c.mK)({
  analyticsLocations: o,
  analyticsSource: l.Z.EDIT_AVATAR_DECORATION_MODAL,
  initialProductSkuId: e
});
  }, [
o,
u
  ]);
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsxs)(s.ModalHeader, {
    separator: !1,
    className: R.modalHeader,
    children: [
      (0, r.jsx)(s.Heading, {
        variant: 'heading-lg/semibold',
        children: O.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }),
      (0, r.jsx)(s.ModalCloseButton, {
        className: R.modalCloseButton,
        onClick: u
      })
    ]
  }),
  (0, r.jsxs)(s.ModalContent, {
    className: R.modalContent,
    scrollbarType: 'none',
    children: [
      (0, r.jsx)(A.Z, {
        user: t,
        guild: N,
        pendingAvatarDecoration: L,
        selectedAvatarDecorationRef: w,
        onSelect: e => {
          b(e), null != e && x(e);
        },
        onOpenShop: B
      }),
      (0, r.jsx)(S.Z, {
        className: R.modalPreview,
        user: t,
        guildId: null == N ? void 0 : N.id,
        avatarDecorationOverride: L
      })
    ]
  }),
  (0, r.jsxs)(s.ModalFooter, {
    className: R.modalFooter,
    children: [
      null != P && (!(0, d.qS)(P) || U) || null === L ? (0, r.jsx)(s.Button, {
        onClick: k,
        disabled: G,
        children: O.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : null == P && (U || !(0, d.G1)(M)) ? (0, r.jsx)(s.Button, {
        className: R.modalFooterShopButton,
        onClick: () => B(null == M ? void 0 : M.skuId),
        children: O.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, r.jsx)(h.Z, {
        subscriptionTier: v.Si.TIER_2,
        buttonText: T.ZP.isPremium(t) ? O.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : O.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      }),
      (0, r.jsx)(s.Button, {
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.PRIMARY,
        onClick: u,
        children: O.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}

function y(e) {
  let {
transitionState: t,
analyticsLocations: n,
onClose: d,
onCloseModal: _,
initialSelectedDecoration: f,
initialSelectedDecorationId: h,
isTryItOutFlow: p,
guild: T
  } = e, g = (0, o.e7)([m.default], () => m.default.getCurrentUser()), {
analyticsLocations: S
  } = (0, u.ZP)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL), {
categories: A,
purchases: v,
isFetchingCategories: O,
isFetchingPurchases: y
  } = (0, E.Z)(), D = O || y && 0 === v.size;
  return i.useEffect(() => {
I.default.track(N.rMx.OPEN_MODAL, {
  type: 'Edit Avatar Decoration Modal',
  location_stack: S
});
  }, [S]), i.useEffect(() => () => {
(0, c.K$)({
  categories: [...A.values()],
  itemTypes: [a.Z.AVATAR_DECORATION]
});
  }, [A]), null == g ? null : (0, r.jsx)(u.Gt, {
value: S,
children: (0, r.jsx)(s.ModalRoot, {
  transitionState: t,
  className: R.modal,
  size: D ? s.ModalSize.DYNAMIC : s.ModalSize.MEDIUM,
  children: D ? (0, r.jsx)(s.Spinner, {
    className: R.spinner,
    type: s.Spinner.Type.SPINNING_CIRCLE
  }) : (0, r.jsx)(C, {
    user: g,
    guild: T,
    categories: A,
    purchases: v,
    analyticsLocations: S,
    initialSelectedDecoration: f,
    initialSelectedDecorationId: h,
    onClose: () => {
      _(), null == d || d();
    },
    isTryItOutFlow: p
  })
})
  });
}