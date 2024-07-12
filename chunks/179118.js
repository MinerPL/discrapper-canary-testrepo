n.d(t, {
  Z: function() {
return k;
  }
}), n(47120);
var r = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  i = n(392711),
  l = n.n(i),
  c = n(442837),
  d = n(481060),
  u = n(37234),
  p = n(194359),
  g = n(700582),
  f = n(479446),
  C = n(522489),
  m = n(93127),
  h = n(814443),
  _ = n(590783),
  b = n(699516),
  x = n(246946),
  I = n(594174),
  E = n(366695),
  L = n(572004),
  S = n(669079),
  v = n(74538),
  T = n(51144),
  N = n(981631),
  O = n(474936),
  j = n(689938),
  Z = n(882284);

function k(e) {
  let {
giftCode: t,
application: n,
sku: a,
subscriptionPlan: i,
selectedGiftStyle: l,
onClose: u,
hasSentMessage: p,
giftRecipient: f,
giftMessageError: m,
isSendingMessage: h
  } = e, [b, I] = s.useState(d.CopyInput.Modes.DEFAULT), k = (0, c.e7)([x.Z], () => x.Z.enabled), A = p || null != l && null != f, P = (null == a ? void 0 : a.productLine) === N.POd.COLLECTIBLES, B = () => null != i ? i.skuId : null != a ? a.id : null, M = () => {
let e;
let t = null != l && O.V4.includes(l);
return null != m ? j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == i ? null : (e = i.interval === O.rV.MONTH ? A ? t ? j.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : A ? t ? j.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
  skuName: (0, v.aq)(i.id),
  intervalCount: i.intervalCount
});
  }, y = (e, t) => {
null != a && (0, S.dM)(new _.Z({
  code: t,
  maxUses: 1
}), a);
try {
  (0, L.JG)(e), I(d.CopyInput.Modes.SUCCESS);
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
switch (b) {
  case d.CopyInput.Modes.SUCCESS:
    e = j.Z.Messages.BILLING_GIFT_COPIED;
    break;
  case d.CopyInput.Modes.ERROR:
    e = j.Z.Messages.FAILED;
    break;
  default:
    e = j.Z.Messages.COPY;
}
return (0, r.jsxs)('div', {
  className: Z.giftCodeSection,
  children: [
    (0, r.jsx)(d.FormTitle, {
      children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
    }),
    null != t && (0, r.jsx)(d.CopyInput, {
      hideMessage: k ? j.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
      value: (0, S.Nz)(t),
      mode: b,
      text: e,
      onCopy: e => y(e, t),
      supportsCopy: L.wS,
      className: Z.__invalid_copyInput,
      buttonColor: d.ButtonColors.LINK,
      buttonLook: d.ButtonLooks.LINK
    }),
    (0, r.jsx)('div', {
      className: Z.subtext,
      children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
    })
  ]
});
  };
  return h ? (0, r.jsxs)('div', {
className: Z.confirmation,
children: [
  null != n ? (0, r.jsx)(E.Z, {
    game: n,
    className: Z.__invalid_icon,
    size: E.Z.Sizes.LARGE,
    skuId: B()
  }) : null,
  (0, r.jsx)(d.Spinner, {
    type: d.SpinnerTypes.PULSING_ELLIPSIS
  })
]
  }) : (0, r.jsxs)('div', {
className: Z.confirmation,
children: [
  null != n ? (0, r.jsx)(E.Z, {
    game: n,
    className: Z.__invalid_icon,
    size: E.Z.Sizes.LARGE,
    skuId: B()
  }) : null,
  (0, r.jsx)(d.Heading, {
    variant: 'heading-lg/semibold',
    className: o()({
      [Z.header]: null == l && !P,
      [Z.headerCustomGifting]: null != l && !P
    }),
    children: null != f || p && null == m ? j.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != m ? j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : j.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
  }),
  p && null != f && null == m || A ? (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(g.Z, {
        user: f,
        className: Z.giftRecipient,
        size: d.AvatarSizes.SIZE_80
      }),
      (0, r.jsx)(d.Heading, {
        className: Z.giftRecipientName,
        variant: 'heading-md/semibold',
        children: T.ZP.getName(f)
      }),
      (0, r.jsxs)('div', {
        className: Z.giftRecipientTag,
        children: [
          ' ',
          T.ZP.getUserTag(f)
        ]
      }),
      (0, r.jsx)('div', {
        className: Z.giftSentMessage,
        children: M()
      })
    ]
  }) : (() => {
    let e = (0, S.MY)(f, P),
      {
        removeGiftRecipientUI: n
      } = C.m.getCurrentConfig({
        location: 'GiftPurchaseConfirmation'
      }, {
        autoTrackExposure: !1,
        disable: __BILLING_STANDALONE__ || e !== S.xr.CUSTOM_STYLE
      });
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)('div', {
          className: Z.blurb,
          children: M()
        }),
        !n && null == m && (0, r.jsx)(R, {
          giftCode: t,
          onClose: u
        }),
        (0, r.jsx)('div', {
          className: Z.divider
        }),
        w()
      ]
    });
  })()
]
  });
}
let R = e => {
  let {
giftCode: t,
onClose: n
  } = e;
  s.useEffect(() => {
p.Z.fetchRelationships(), (0, m.W)();
  }, []);
  let [a, o] = s.useState(), [i, C] = s.useState(!1), [_, x] = s.useState(!1), {
userAffinities: E,
isLoading: L
  } = (0, c.cj)([h.Z], () => ({
userAffinities: h.Z.getUserAffinitiesUserIds(),
isLoading: h.Z.getFetching()
  })), S = Array.from(E.values()), v = (0, c.e7)([b.Z], () => b.Z.getFriendIDs()), N = l().difference(v, S), O = [
...S,
...N
  ], k = (0, c.e7)([I.default], () => I.default.filter(e => O.includes(e.id) && !e.bot), [O]);
  if (null == k || 0 === k.length)
return null;
  let R = l().sortBy(k, e => O.indexOf(e.id));
  return (0, r.jsxs)('div', {
className: Z.giftRecipientSection,
children: [
  (0, r.jsx)(d.FormTitle, {
    children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
  }),
  (0, r.jsxs)('div', {
    className: Z.giftRecipient,
    children: [
      (0, r.jsx)(d.SearchableSelect, {
        placeholder: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: Z.giftRecipientInputWrapper,
        className: i ? Z.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, r.jsx)(g.Z, {
          user: e.value,
          size: d.AvatarSizes.SIZE_20
        }),
        renderLeading: () => L ? (0, r.jsx)(d.Spinner, {
          type: d.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          o(e), C(!1);
        },
        options: R.map(e => ({
          value: e,
          label: ''.concat(T.ZP.getUserTag(e))
        }))
      }),
      (0, r.jsx)(d.Button, {
        disabled: null == a,
        submitting: _,
        className: Z.sendToRecipientButton,
        onClick: () => {
          x(!0), (0, f.Y)(a, t).then(() => {
            n(), (0, u.Ou)();
          }).catch(() => {
            C(!0), x(!1);
          });
        },
        children: j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })
    ]
  }),
  (0, r.jsx)('div', {
    className: i ? Z.subtextError : Z.subtext,
    children: i ? j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : j.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
  })
]
  });
};