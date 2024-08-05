n.d(t, {
  Z: function() {
return P;
  }
}), n(47120);
var s = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(392711),
  c = n.n(i),
  l = n(442837),
  d = n(481060),
  u = n(37234),
  f = n(194359),
  p = n(700582),
  g = n(925329),
  C = n(479446),
  _ = n(522489),
  m = n(93127),
  b = n(814443),
  h = n(590783),
  x = n(699516),
  E = n(246946),
  I = n(594174),
  v = n(572004),
  L = n(669079),
  S = n(74538),
  T = n(51144),
  N = n(981631),
  O = n(474936),
  k = n(689938),
  j = n(882284);

function P(e) {
  let {
giftCode: t,
application: n,
sku: a,
subscriptionPlan: i,
selectedGiftStyle: c,
onClose: u,
hasSentMessage: f,
giftRecipient: C,
giftMessageError: m,
isSendingMessage: b
  } = e, [x, I] = r.useState(d.CopyInput.Modes.DEFAULT), P = (0, l.e7)([E.Z], () => E.Z.enabled), B = f || null != c && null != C, R = (null == a ? void 0 : a.productLine) === N.POd.COLLECTIBLES, Z = () => null != i ? i.skuId : null != a ? a.id : null, M = () => {
let e;
let t = null != c && O.V4.includes(c);
return null != m ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == i ? null : (e = i.interval === O.rV.MONTH ? B ? t ? k.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : B ? t ? k.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
  skuName: (0, S.aq)(i.id),
  intervalCount: i.intervalCount
});
  }, y = (e, t) => {
null != a && (0, L.dM)(new h.Z({
  code: t,
  maxUses: 1
}), a);
try {
  (0, v.JG)(e), I(d.CopyInput.Modes.SUCCESS);
} catch (e) {
  I(d.CopyInput.Modes.ERROR);
}
setTimeout(() => {
  I(d.CopyInput.Modes.DEFAULT);
}, 1500);
  }, w = () => {
let e;
if (null == t)
  return null;
switch (x) {
  case d.CopyInput.Modes.SUCCESS:
    e = k.Z.Messages.BILLING_GIFT_COPIED;
    break;
  case d.CopyInput.Modes.ERROR:
    e = k.Z.Messages.FAILED;
    break;
  default:
    e = k.Z.Messages.COPY;
}
return (0, s.jsxs)('div', {
  className: j.giftCodeSection,
  children: [
    (0, s.jsx)(d.FormTitle, {
      children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
    }),
    null != t && (0, s.jsx)(d.CopyInput, {
      hideMessage: P ? k.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
      value: (0, L.Nz)(t),
      mode: x,
      text: e,
      onCopy: e => y(e, t),
      supportsCopy: v.wS,
      className: j.__invalid_copyInput,
      buttonColor: d.ButtonColors.LINK,
      buttonLook: d.ButtonLooks.LINK
    }),
    (0, s.jsx)('div', {
      className: j.subtext,
      children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
    })
  ]
});
  };
  return b ? (0, s.jsxs)('div', {
className: j.confirmation,
children: [
  null != n ? (0, s.jsx)(g.Z, {
    game: n,
    className: j.__invalid_icon,
    size: g.Z.Sizes.LARGE,
    skuId: Z()
  }) : null,
  (0, s.jsx)(d.Spinner, {
    type: d.SpinnerTypes.PULSING_ELLIPSIS
  })
]
  }) : (0, s.jsxs)('div', {
className: j.confirmation,
children: [
  null != n ? (0, s.jsx)(g.Z, {
    game: n,
    className: j.__invalid_icon,
    size: g.Z.Sizes.LARGE,
    skuId: Z()
  }) : null,
  (0, s.jsx)(d.Heading, {
    variant: 'heading-lg/semibold',
    className: o()({
      [j.header]: null == c && !R,
      [j.headerCustomGifting]: null != c && !R
    }),
    children: null != C || f && null == m ? k.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != m ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : k.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
  }),
  f && null != C && null == m || B ? (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(p.Z, {
        user: C,
        className: j.giftRecipient,
        size: d.AvatarSizes.SIZE_80
      }),
      (0, s.jsx)(d.Heading, {
        className: j.giftRecipientName,
        variant: 'heading-md/semibold',
        children: T.ZP.getName(C)
      }),
      (0, s.jsxs)('div', {
        className: j.giftRecipientTag,
        children: [
          ' ',
          T.ZP.getUserTag(C)
        ]
      }),
      (0, s.jsx)('div', {
        className: j.giftSentMessage,
        children: M()
      })
    ]
  }) : (() => {
    let e = (0, L.MY)(C, R),
      {
        removeGiftRecipientUI: n
      } = _.m.getCurrentConfig({
        location: 'GiftPurchaseConfirmation'
      }, {
        autoTrackExposure: !1,
        disable: __BILLING_STANDALONE__ || e !== L.xr.CUSTOM_STYLE
      });
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)('div', {
          className: j.blurb,
          children: M()
        }),
        !n && null == m && (0, s.jsx)(A, {
          giftCode: t,
          onClose: u
        }),
        (0, s.jsx)('div', {
          className: j.divider
        }),
        w()
      ]
    });
  })()
]
  });
}
let A = e => {
  let {
giftCode: t,
onClose: n
  } = e;
  r.useEffect(() => {
f.Z.fetchRelationships(), (0, m.W)();
  }, []);
  let [a, o] = r.useState(), [i, g] = r.useState(!1), [_, h] = r.useState(!1), {
userAffinities: E,
isLoading: v
  } = (0, l.cj)([b.Z], () => ({
userAffinities: b.Z.getUserAffinitiesUserIds(),
isLoading: b.Z.getFetching()
  })), L = Array.from(E.values()), S = (0, l.e7)([x.Z], () => x.Z.getFriendIDs()), N = c().difference(S, L), O = [
...L,
...N
  ], P = (0, l.e7)([I.default], () => I.default.filter(e => O.includes(e.id) && !e.bot), [O]);
  if (null == P || 0 === P.length)
return null;
  let A = c().sortBy(P, e => O.indexOf(e.id));
  return (0, s.jsxs)('div', {
className: j.giftRecipientSection,
children: [
  (0, s.jsx)(d.FormTitle, {
    children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
  }),
  (0, s.jsxs)('div', {
    className: j.giftRecipient,
    children: [
      (0, s.jsx)(d.SearchableSelect, {
        placeholder: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: j.giftRecipientInputWrapper,
        className: i ? j.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(p.Z, {
          user: e.value,
          size: d.AvatarSizes.SIZE_20
        }),
        renderLeading: () => v ? (0, s.jsx)(d.Spinner, {
          type: d.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          o(e), g(!1);
        },
        options: A.map(e => ({
          value: e,
          label: ''.concat(T.ZP.getUserTag(e))
        }))
      }),
      (0, s.jsx)(d.Button, {
        disabled: null == a,
        submitting: _,
        className: j.sendToRecipientButton,
        onClick: () => {
          h(!0), (0, C.Y)(a, t).then(() => {
            n(), (0, u.Ou)();
          }).catch(() => {
            g(!0), h(!1);
          });
        },
        children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })
    ]
  }),
  (0, s.jsx)('div', {
    className: i ? j.subtextError : j.subtext,
    children: i ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
  })
]
  });
};