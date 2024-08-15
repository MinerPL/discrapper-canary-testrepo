t.d(s, {
  Z: function() {
return j;
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  r = t.n(i),
  l = t(392711),
  o = t.n(l),
  c = t(442837),
  u = t(481060),
  _ = t(37234),
  d = t(194359),
  I = t(700582),
  m = t(925329),
  C = t(479446),
  E = t(522489),
  N = t(93127),
  T = t(814443),
  A = t(590783),
  p = t(699516),
  S = t(246946),
  L = t(594174),
  x = t(572004),
  R = t(669079),
  M = t(74538),
  f = t(51144),
  g = t(981631),
  O = t(474936),
  h = t(689938),
  P = t(851212);

function j(e) {
  let {
giftCode: s,
application: t,
sku: i,
subscriptionPlan: l,
selectedGiftStyle: o,
onClose: _,
hasSentMessage: d,
giftRecipient: C,
giftMessageError: N,
isSendingMessage: T
  } = e, [p, L] = n.useState(u.CopyInput.Modes.DEFAULT), j = (0, c.e7)([S.Z], () => S.Z.enabled), Z = d || null != o && null != C, v = (null == i ? void 0 : i.productLine) === g.POd.COLLECTIBLES, b = () => null != l ? l.skuId : null != i ? i.id : null, F = () => {
let e;
let s = null != o && O.V4.includes(o);
return null != N ? h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == l ? null : (e = l.interval === O.rV.MONTH ? Z ? s ? h.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : Z ? s ? h.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
  skuName: (0, M.aq)(l.id),
  intervalCount: l.intervalCount
});
  }, G = (e, s) => {
null != i && (0, R.dM)(new A.Z({
  code: s,
  maxUses: 1
}), i);
try {
  (0, x.JG)(e), L(u.CopyInput.Modes.SUCCESS);
} catch (e) {
  L(u.CopyInput.Modes.ERROR);
}
setTimeout(() => {
  L(u.CopyInput.Modes.DEFAULT);
}, 1500);
  }, y = () => {
let e;
if (null == s)
  return null;
switch (p) {
  case u.CopyInput.Modes.SUCCESS:
    e = h.Z.Messages.BILLING_GIFT_COPIED;
    break;
  case u.CopyInput.Modes.ERROR:
    e = h.Z.Messages.FAILED;
    break;
  default:
    e = h.Z.Messages.COPY;
}
return (0, a.jsxs)('div', {
  className: P.giftCodeSection,
  children: [
    (0, a.jsx)(u.FormTitle, {
      children: h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
    }),
    null != s && (0, a.jsx)(u.CopyInput, {
      hideMessage: j ? h.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
      value: (0, R.Nz)(s),
      mode: p,
      text: e,
      onCopy: e => G(e, s),
      supportsCopy: x.wS,
      className: P.__invalid_copyInput,
      buttonColor: u.ButtonColors.LINK,
      buttonLook: u.ButtonLooks.LINK
    }),
    (0, a.jsx)('div', {
      className: P.subtext,
      children: h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
    })
  ]
});
  };
  return T ? (0, a.jsxs)('div', {
className: P.confirmation,
children: [
  null != t ? (0, a.jsx)(m.Z, {
    game: t,
    className: P.__invalid_icon,
    size: m.Z.Sizes.LARGE,
    skuId: b()
  }) : null,
  (0, a.jsx)(u.Spinner, {
    type: u.SpinnerTypes.PULSING_ELLIPSIS
  })
]
  }) : (0, a.jsxs)('div', {
className: P.confirmation,
children: [
  null != t ? (0, a.jsx)(m.Z, {
    game: t,
    className: P.__invalid_icon,
    size: m.Z.Sizes.LARGE,
    skuId: b()
  }) : null,
  (0, a.jsx)(u.Heading, {
    variant: 'heading-lg/semibold',
    className: r()({
      [P.header]: null == o && !v,
      [P.headerCustomGifting]: null != o && !v
    }),
    children: null != C || d && null == N ? h.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != N ? h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : h.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
  }),
  d && null != C && null == N || Z ? (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsx)(I.Z, {
        user: C,
        className: P.giftRecipient,
        size: u.AvatarSizes.SIZE_80
      }),
      (0, a.jsx)(u.Heading, {
        className: P.giftRecipientName,
        variant: 'heading-md/semibold',
        children: f.ZP.getName(C)
      }),
      (0, a.jsxs)('div', {
        className: P.giftRecipientTag,
        children: [
          ' ',
          f.ZP.getUserTag(C)
        ]
      }),
      (0, a.jsx)('div', {
        className: P.giftSentMessage,
        children: F()
      })
    ]
  }) : (() => {
    let e = (0, R.MY)(C, v),
      {
        removeGiftRecipientUI: t
      } = E.m.getCurrentConfig({
        location: 'GiftPurchaseConfirmation'
      }, {
        autoTrackExposure: !1,
        disable: __BILLING_STANDALONE__ || e !== R.xr.CUSTOM_STYLE
      });
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)('div', {
          className: P.blurb,
          children: F()
        }),
        !t && null == N && (0, a.jsx)(U, {
          giftCode: s,
          onClose: _
        }),
        (0, a.jsx)('div', {
          className: P.divider
        }),
        y()
      ]
    });
  })()
]
  });
}
let U = e => {
  let {
giftCode: s,
onClose: t
  } = e;
  n.useEffect(() => {
d.Z.fetchRelationships(), (0, N.W)();
  }, []);
  let [i, r] = n.useState(), [l, m] = n.useState(!1), [E, A] = n.useState(!1), {
userAffinities: S,
isLoading: x
  } = (0, c.cj)([T.Z], () => ({
userAffinities: T.Z.getUserAffinitiesUserIds(),
isLoading: T.Z.getFetching()
  })), R = Array.from(S.values()), M = (0, c.e7)([p.Z], () => p.Z.getFriendIDs()), g = o().difference(M, R), O = [
...R,
...g
  ], j = (0, c.e7)([L.default], () => L.default.filter(e => O.includes(e.id) && !e.bot), [O]);
  if (null == j || 0 === j.length)
return null;
  let U = o().sortBy(j, e => O.indexOf(e.id));
  return (0, a.jsxs)('div', {
className: P.giftRecipientSection,
children: [
  (0, a.jsx)(u.FormTitle, {
    children: h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
  }),
  (0, a.jsxs)('div', {
    className: P.giftRecipient,
    children: [
      (0, a.jsx)(u.SearchableSelect, {
        placeholder: h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: P.giftRecipientInputWrapper,
        className: l ? P.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(I.Z, {
          user: e.value,
          size: u.AvatarSizes.SIZE_20
        }),
        renderLeading: () => x ? (0, a.jsx)(u.Spinner, {
          type: u.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: i,
        onChange: e => {
          r(e), m(!1);
        },
        options: U.map(e => ({
          value: e,
          label: ''.concat(f.ZP.getUserTag(e))
        }))
      }),
      (0, a.jsx)(u.Button, {
        disabled: null == i,
        submitting: E,
        className: P.sendToRecipientButton,
        onClick: () => {
          A(!0), (0, C.Y)(i, s).then(() => {
            t(), (0, _.Ou)();
          }).catch(() => {
            m(!0), A(!1);
          });
        },
        children: h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })
    ]
  }),
  (0, a.jsx)('div', {
    className: l ? P.subtextError : P.subtext,
    children: l ? h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : h.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
  })
]
  });
};