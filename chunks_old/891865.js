"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  a = s("414456"),
  l = s.n(a),
  i = s("917351"),
  o = s.n(i),
  u = s("446674"),
  d = s("77078"),
  c = s("54239"),
  p = s("736964"),
  S = s("777273"),
  h = s("87657"),
  f = s("210721"),
  E = s("671484"),
  _ = s("27618"),
  A = s("102985"),
  P = s("843823"),
  I = s("697218"),
  C = s("920700"),
  T = s("953109"),
  m = s("306160"),
  R = s("659632"),
  N = s("719923"),
  g = s("158998"),
  y = s("49111"),
  O = s("646718"),
  L = s("782340"),
  M = s("164852");

function D(e) {
  let {
    giftCode: t,
    application: s,
    sku: a,
    subscriptionPlan: i,
    selectedGiftStyle: o,
    onClose: c,
    hasSentMessage: p,
    giftRecipient: S,
    giftMessageError: f,
    isSendingMessage: _
  } = e, [P, I] = r.useState(C.default.Modes.DEFAULT), D = (0, u.useStateFromStores)([A.default], () => A.default.enabled), x = p || null != o && null != S, U = () => null != i ? i.skuId : null != a ? a.id : null, F = () => {
    let e;
    let t = null != o && O.SeasonalGiftStyles2023.includes(o);
    return null != f ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == i ? null : (e = i.interval === O.SubscriptionIntervalTypes.MONTH ? x ? t ? L.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : x ? t ? L.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, N.getTierDisplayName)(i.id),
      intervalCount: i.intervalCount
    })
  }, b = (e, t) => {
    null != a && (0, R.trackGiftCodeCopy)(new E.default({
      code: t,
      maxUses: 1
    }), a);
    try {
      (0, m.copy)(e), I(C.default.Modes.SUCCESS)
    } catch (e) {
      I(C.default.Modes.ERROR)
    }
    setTimeout(() => {
      I(C.default.Modes.DEFAULT)
    }, 1500)
  }, v = () => {
    let e;
    if (null == t) return null;
    switch (P) {
      case C.default.Modes.SUCCESS:
        e = L.default.Messages.BILLING_GIFT_COPIED;
        break;
      case C.default.Modes.ERROR:
        e = L.default.Messages.FAILED;
        break;
      default:
        e = L.default.Messages.COPY
    }
    return (0, n.jsxs)("div", {
      className: M.giftCodeSection,
      children: [(0, n.jsx)(d.FormTitle, {
        children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != t && (0, n.jsx)(C.default, {
        hideMessage: D ? L.default.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, R.getGiftCodeURL)(t),
        mode: P,
        text: e,
        onCopy: e => b(e, t),
        supportsCopy: m.SUPPORTS_COPY,
        className: M.copyInput,
        buttonColor: C.default.ButtonColors.LINK,
        buttonLook: C.default.ButtonLooks.LINK
      }), (0, n.jsx)("div", {
        className: M.subtext,
        children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (_) return (0, n.jsxs)("div", {
    className: M.confirmation,
    children: [null != s ? (0, n.jsx)(T.default, {
      game: s,
      className: M.icon,
      size: T.default.Sizes.LARGE,
      skuId: U()
    }) : null, (0, n.jsx)(d.Spinner, {
      type: d.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let G = (null == a ? void 0 : a.productLine) === y.SKUProductLines.COLLECTIBLES;
  return (0, n.jsxs)("div", {
    className: M.confirmation,
    children: [null != s ? (0, n.jsx)(T.default, {
      game: s,
      className: M.icon,
      size: T.default.Sizes.LARGE,
      skuId: U()
    }) : null, (0, n.jsx)(d.Heading, {
      variant: "heading-lg/semibold",
      className: l({
        [M.header]: null == o && !G,
        [M.headerCustomGifting]: null != o && !G
      }),
      children: null != S || p && null == f ? L.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != f ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : L.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), p && null != S && null == f || x ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(h.default, {
        user: S,
        className: M.giftRecipient,
        size: d.AvatarSizes.SIZE_80
      }), (0, n.jsx)(d.Heading, {
        className: M.giftRecipientName,
        variant: "heading-md/semibold",
        children: g.default.getName(S)
      }), (0, n.jsxs)("div", {
        className: M.giftRecipientTag,
        children: [" ", g.default.getUserTag(S)]
      }), (0, n.jsx)("div", {
        className: M.giftSentMessage,
        children: F()
      })]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: M.blurb,
        children: F()
      }), null == f && (0, n.jsx)(B, {
        giftCode: t,
        onClose: c
      }), (0, n.jsx)("div", {
        className: M.divider
      }), v()]
    })]
  })
}
let B = e => {
  let {
    giftCode: t,
    onClose: s
  } = e;
  r.useEffect(() => {
    p.default.fetchRelationships(), (0, S.fetchUserAffinities)()
  }, []);
  let [a, l] = r.useState(), [i, E] = r.useState(!1), [A, C] = r.useState(!1), {
    userAffinities: T,
    isLoading: m
  } = (0, u.useStateFromStoresObject)([P.default], () => ({
    userAffinities: P.default.getUserAffinitiesUserIds(),
    isLoading: P.default.getFetching()
  })), R = Array.from(T.values()), N = (0, u.useStateFromStores)([_.default], () => _.default.getFriendIDs()), y = o.difference(N, R), O = [...R, ...y], D = (0, u.useStateFromStores)([I.default], () => I.default.filter(e => O.includes(e.id) && !e.bot), [O]), B = null == D || 0 === D.length;
  if (B) return null;
  let x = o.sortBy(D, e => O.indexOf(e.id));
  return (0, n.jsxs)("div", {
    className: M.giftRecipientSection,
    children: [(0, n.jsx)(d.FormTitle, {
      children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, n.jsxs)("div", {
      className: M.giftRecipient,
      children: [(0, n.jsx)(d.SearchableSelect, {
        placeholder: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: M.giftRecipientInputWrapper,
        className: i ? M.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(h.default, {
          user: e.value,
          size: d.AvatarSizes.SIZE_20
        }),
        renderLeading: () => m ? (0, n.jsx)(d.Spinner, {
          type: d.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: a,
        onChange: e => {
          l(e), E(!1)
        },
        options: x.map(e => ({
          value: e,
          label: "".concat(g.default.getUserTag(e))
        }))
      }), (0, n.jsx)(d.Button, {
        disabled: null == a,
        submitting: A,
        className: M.sendToRecipientButton,
        onClick: () => {
          C(!0), (0, f.sendGiftMessage)(a, t).then(() => {
            s(), (0, c.popAllLayers)()
          }).catch(() => {
            E(!0), C(!1)
          })
        },
        children: L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, n.jsx)("div", {
      className: i ? M.subtextError : M.subtext,
      children: i ? L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : L.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}