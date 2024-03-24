"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("70102"), n("222007");
var a, s, i = n("37983"),
  l = n("884691"),
  u = n("917351"),
  r = n.n(u),
  o = n("446674"),
  d = n("77078"),
  c = n("850068"),
  m = n("583367"),
  I = n("812204"),
  S = n("685665"),
  f = n("809071"),
  C = n("818711"),
  P = n("279171"),
  E = n("883662"),
  _ = n("177998"),
  N = n("146163"),
  p = n("625634"),
  M = n("10514"),
  T = n("521012"),
  R = n("145131"),
  U = n("427459"),
  L = n("719923"),
  x = n("153160"),
  h = n("951573"),
  A = n("646718"),
  j = n("843455"),
  O = n("782340"),
  g = n("397111");

function y(e) {
  let {
    premiumSubscription: t,
    isInventory: n,
    onNext: a,
    onClose: s
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: n ? O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
      }), (0, i.jsx)(d.ModalCloseButton, {
        onClick: s
      })]
    }), (0, i.jsxs)(d.ModalContent, {
      className: g.body,
      children: [(0, i.jsx)("div", {
        className: g.cancelImage
      }), (0, i.jsx)("div", {
        children: t.isPurchasedExternally && null != t.paymentGateway ? O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
          paymentGatewayName: j.PaymentGatewayToFriendlyName[t.paymentGateway],
          subscriptionManagementLink: (0, L.getExternalSubscriptionMethodUrl)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
        }) : n ? O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
          endDate: t.currentPeriodEnd
        }) : O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
          endDate: t.currentPeriodEnd
        })
      }), (0, i.jsx)(P.default, {
        fromBoostCancelModal: !0
      })]
    }), t.isPurchasedExternally ? null : (0, i.jsxs)(d.ModalFooter, {
      justify: R.default.Justify.START,
      children: [(0, i.jsx)(d.Button, {
        onClick: a,
        children: O.default.Messages.NEXT
      }), (0, i.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        onClick: s,
        children: O.default.Messages.CANCEL
      })]
    })]
  })
}(s = a || (a = {}))[s.START = 1] = "START", s[s.PREVIEW = 2] = "PREVIEW", s[s.CONFIRM = 3] = "CONFIRM";
async function b(e, t, n, a) {
  let s = null != a ? a : function() {
    let e = Object.values(p.default.boostSlots),
      t = r.sortBy(e.filter(e => !(0, U.isGuildBoostSlotCanceled)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
    return null != t ? t.id : null
  }();
  if (null == s) throw Error("No slot to cancel");
  await (0, m.cancelGuildBoostSlot)(s), await (0, c.updateSubscription)(e, {
    items: (0, L.getItemsFromNewAdditionalPlans)(e, t)
  }, n)
}

function v(e) {
  var t, n, a;
  let {
    premiumSubscription: s,
    guildBoostSlotId: u,
    onBack: r,
    onNext: c,
    onClose: m
  } = e, [P, p] = l.useState(!1), [T, U] = l.useMemo(() => {
    try {
      return [(0, C.calculateAdditionalPlansWithPremiumGuildAdjustment)(s, -1), !1]
    } catch {
      return [
        [], !0
      ]
    }
  }, [s]);
  l.useEffect(() => {
    U && m()
  }, [U]);
  let {
    premiumSubscriptionPlan: j,
    premiumGuildPlan: y
  } = (0, o.useStateFromStoresObject)([M.default], () => {
    let e = M.default.get(s.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? M.default.getForSkuAndInterval((0, L.castPremiumSubscriptionAsSkuId)(A.PremiumSubscriptionSKUs.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: v
  } = (0, S.default)(), [B] = (0, f.useSubscriptionInvoicePreview)({
    subscriptionId: s.id,
    renewal: !0,
    currency: s.currency,
    paymentSourceId: s.paymentSourceId,
    analyticsLocations: v,
    analyticsLocation: I.default.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), G = null != y ? (0, L.getItemsWithUpsertedPremiumGuildPlan)(s, null !== (a = null === (t = T[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== a ? a : 0, y.id) : null, [D] = (0, f.useSubscriptionInvoicePreview)({
    subscriptionId: s.id,
    items: G,
    renewal: !0,
    analyticsLocations: v,
    analyticsLocation: I.default.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == D || null == j || null == y || null == B) return (0, i.jsx)(d.Spinner, {});
  let w = s.items.some(e => {
      let {
        planId: t
      } = e;
      return !A.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
    }),
    k = w && null == s.renewalMutations || (null === (n = s.renewalMutations) || void 0 === n ? void 0 : n.items.find(e => {
      let {
        planId: t
      } = e;
      return !A.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
    })) != null,
    F = T.some(e => {
      let {
        planId: t
      } = e;
      return A.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
    }),
    W = k || F ? D.total - B.total : -B.total,
    {
      interval: V,
      intervalCount: Y
    } = j;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.default, {
      onClose: m
    }), (0, i.jsxs)(d.ModalContent, {
      className: g.body,
      children: [(0, i.jsx)("div", {
        children: O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
          endDate: D.subscriptionPeriodStart
        })
      }), (0, i.jsxs)(E.PremiumInvoiceTable, {
        className: g.invoiceTable,
        children: [(0, i.jsx)(E.PremiumInvoiceTableHeader, {
          children: O.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
        }), (0, i.jsx)(E.PremiumInvoiceTableRow, {
          label: O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
            subscriptionCount: 1
          }),
          value: (0, x.formatRate)((0, x.formatPrice)(W, s.currency), V, Y),
          className: g.invoiceCancelRow
        }), null != G && G.length > 0 ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)(E.PremiumInvoiceTableDivider, {}), (0, i.jsx)(N.SubscriptionInvoiceFooter, {
            premiumSubscription: s,
            renewalInvoice: D,
            isUpdate: !0
          })]
        }) : null]
      })]
    }), (0, i.jsxs)(d.ModalFooter, {
      align: R.default.Align.CENTER,
      justify: R.default.Justify.BETWEEN,
      children: [(0, i.jsx)(d.Button, {
        color: d.Button.Colors.RED,
        disabled: P,
        onClick: async () => {
          try {
            p(!0), await b(s, T, v, u), c()
          } catch {
            p(!1)
          }
        },
        children: O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
      }), (0, i.jsx)(_.default, {
        onClick: r
      })]
    })]
  })
}

function B(e) {
  let {
    premiumSubscription: t,
    onClose: n
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
      }), (0, i.jsx)(d.ModalCloseButton, {
        onClick: n
      })]
    }), (0, i.jsxs)(d.ModalContent, {
      className: g.body,
      children: [(0, i.jsx)("div", {
        className: g.cancelImage
      }), (0, i.jsx)("div", {
        children: O.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
          endDate: t.currentPeriodEnd
        })
      })]
    }), (0, i.jsx)(d.ModalFooter, {
      children: (0, i.jsx)(d.Button, {
        onClick: n,
        children: O.default.Messages.OKAY
      })
    })]
  })
}

function G(e) {
  let t, {
    guildBoostSlot: n,
    transitionState: a,
    onClose: s
  } = e;
  l.useEffect(() => {
    !T.default.hasFetchedSubscriptions() && (0, c.fetchSubscriptions)()
  }, []);
  let u = (0, o.useStateFromStores)([T.default], () => T.default.getPremiumTypeSubscription()),
    [r, m] = l.useState(1),
    {
      AnalyticsLocationProvider: f
    } = (0, S.default)(I.default.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == u) t = (0, i.jsx)(d.ModalContent, {
    children: (0, i.jsx)(d.Spinner, {})
  });
  else switch (r) {
    case 1:
      t = (0, i.jsx)(y, {
        premiumSubscription: u,
        isInventory: null == n.premiumGuildSubscription,
        onNext: () => m(2),
        onClose: s
      });
      break;
    case 2:
      t = (0, i.jsx)(v, {
        premiumSubscription: u,
        guildBoostSlotId: n.id,
        onBack: () => m(1),
        onNext: () => m(3),
        onClose: s
      });
      break;
    case 3:
      t = (0, i.jsx)(B, {
        premiumSubscription: u,
        onClose: s
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(r))
  }
  return (0, i.jsx)(f, {
    children: (0, i.jsx)(d.ModalRoot, {
      transitionState: a,
      children: t
    })
  })
}