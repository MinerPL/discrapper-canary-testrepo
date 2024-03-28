"use strict";
t.r(s), t.d(s, {
  default: function() {
    return F
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  n = t("803997"),
  _ = t.n(n),
  u = t("392711"),
  i = t.n(u),
  I = t("442837"),
  r = t("481060"),
  d = t("37234"),
  o = t("194359"),
  E = t("265875"),
  N = t("700582"),
  T = t("479446"),
  R = t("590783"),
  c = t("699516"),
  S = t("246946"),
  f = t("800599"),
  A = t("594174"),
  P = t("581874"),
  M = t("366695"),
  L = t("572004"),
  C = t("669079"),
  O = t("74538"),
  p = t("51144"),
  m = t("981631"),
  g = t("474936"),
  U = t("689938"),
  h = t("190432");

function F(e) {
  let {
    giftCode: s,
    application: t,
    sku: n,
    subscriptionPlan: u,
    selectedGiftStyle: i,
    onClose: d,
    hasSentMessage: o,
    giftRecipient: E,
    giftMessageError: T,
    isSendingMessage: c
  } = e, [f, A] = l.useState(P.default.Modes.DEFAULT), F = (0, I.useStateFromStores)([S.default], () => S.default.enabled), D = o || null != i && null != E, x = () => null != u ? u.skuId : null != n ? n.id : null, b = () => {
    let e;
    let s = null != i && g.SeasonalGiftStyles2023.includes(i);
    return null != T ? U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == u ? null : (e = u.interval === g.SubscriptionIntervalTypes.MONTH ? D ? s ? U.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : D ? s ? U.default.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
      skuName: (0, O.getTierDisplayName)(u.id),
      intervalCount: u.intervalCount
    })
  }, B = (e, s) => {
    null != n && (0, C.trackGiftCodeCopy)(new R.default({
      code: s,
      maxUses: 1
    }), n);
    try {
      (0, L.copy)(e), A(P.default.Modes.SUCCESS)
    } catch (e) {
      A(P.default.Modes.ERROR)
    }
    setTimeout(() => {
      A(P.default.Modes.DEFAULT)
    }, 1500)
  }, H = () => {
    let e;
    if (null == s) return null;
    switch (f) {
      case P.default.Modes.SUCCESS:
        e = U.default.Messages.BILLING_GIFT_COPIED;
        break;
      case P.default.Modes.ERROR:
        e = U.default.Messages.FAILED;
        break;
      default:
        e = U.default.Messages.COPY
    }
    return (0, a.jsxs)("div", {
      className: h.giftCodeSection,
      children: [(0, a.jsx)(r.FormTitle, {
        children: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
      }), null != s && (0, a.jsx)(P.default, {
        hideMessage: F ? U.default.Messages.GIFT_INVENTORY_HIDDEN : null,
        value: (0, C.getGiftCodeURL)(s),
        mode: f,
        text: e,
        onCopy: e => B(e, s),
        supportsCopy: L.SUPPORTS_COPY,
        className: h.__invalid_copyInput,
        buttonColor: P.default.ButtonColors.LINK,
        buttonLook: P.default.ButtonLooks.LINK
      }), (0, a.jsx)("div", {
        className: h.subtext,
        children: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
      })]
    })
  };
  if (c) return (0, a.jsxs)("div", {
    className: h.confirmation,
    children: [null != t ? (0, a.jsx)(M.default, {
      game: t,
      className: h.__invalid_icon,
      size: M.default.Sizes.LARGE,
      skuId: x()
    }) : null, (0, a.jsx)(r.Spinner, {
      type: r.SpinnerTypes.PULSING_ELLIPSIS
    })]
  });
  let v = (null == n ? void 0 : n.productLine) === m.SKUProductLines.COLLECTIBLES;
  return (0, a.jsxs)("div", {
    className: h.confirmation,
    children: [null != t ? (0, a.jsx)(M.default, {
      game: t,
      className: h.__invalid_icon,
      size: M.default.Sizes.LARGE,
      skuId: x()
    }) : null, (0, a.jsx)(r.Heading, {
      variant: "heading-lg/semibold",
      className: _()({
        [h.header]: null == i && !v,
        [h.headerCustomGifting]: null != i && !v
      }),
      children: null != E || o && null == T ? U.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != T ? U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : U.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
    }), o && null != E && null == T || D ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(N.default, {
        user: E,
        className: h.giftRecipient,
        size: r.AvatarSizes.SIZE_80
      }), (0, a.jsx)(r.Heading, {
        className: h.giftRecipientName,
        variant: "heading-md/semibold",
        children: p.default.getName(E)
      }), (0, a.jsxs)("div", {
        className: h.giftRecipientTag,
        children: [" ", p.default.getUserTag(E)]
      }), (0, a.jsx)("div", {
        className: h.giftSentMessage,
        children: b()
      })]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: h.blurb,
        children: b()
      }), null == T && (0, a.jsx)(G, {
        giftCode: s,
        onClose: d
      }), (0, a.jsx)("div", {
        className: h.divider
      }), H()]
    })]
  })
}
let G = e => {
  let {
    giftCode: s,
    onClose: t
  } = e;
  l.useEffect(() => {
    o.default.fetchRelationships(), (0, E.fetchUserAffinities)()
  }, []);
  let [n, _] = l.useState(), [u, R] = l.useState(!1), [S, P] = l.useState(!1), {
    userAffinities: M,
    isLoading: L
  } = (0, I.useStateFromStoresObject)([f.default], () => ({
    userAffinities: f.default.getUserAffinitiesUserIds(),
    isLoading: f.default.getFetching()
  })), C = Array.from(M.values()), O = (0, I.useStateFromStores)([c.default], () => c.default.getFriendIDs()), m = i().difference(O, C), g = [...C, ...m], F = (0, I.useStateFromStores)([A.default], () => A.default.filter(e => g.includes(e.id) && !e.bot), [g]);
  if (null == F || 0 === F.length) return null;
  let G = i().sortBy(F, e => g.indexOf(e.id));
  return (0, a.jsxs)("div", {
    className: h.giftRecipientSection,
    children: [(0, a.jsx)(r.FormTitle, {
      children: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
    }), (0, a.jsxs)("div", {
      className: h.giftRecipient,
      children: [(0, a.jsx)(r.SearchableSelect, {
        placeholder: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
        wrapperClassName: h.giftRecipientInputWrapper,
        className: u ? h.giftRecipientInputError : void 0,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(N.default, {
          user: e.value,
          size: r.AvatarSizes.SIZE_20
        }),
        renderLeading: () => L ? (0, a.jsx)(r.Spinner, {
          type: r.SpinnerTypes.PULSING_ELLIPSIS
        }) : null,
        value: n,
        onChange: e => {
          _(e), R(!1)
        },
        options: G.map(e => ({
          value: e,
          label: "".concat(p.default.getUserTag(e))
        }))
      }), (0, a.jsx)(r.Button, {
        disabled: null == n,
        submitting: S,
        className: h.sendToRecipientButton,
        onClick: () => {
          P(!0), (0, T.sendGiftMessage)(n, s).then(() => {
            t(), (0, d.popAllLayers)()
          }).catch(() => {
            R(!0), P(!1)
          })
        },
        children: U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
      })]
    }), (0, a.jsx)("div", {
      className: u ? h.subtextError : h.subtext,
      children: u ? U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : U.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
    })]
  })
}