"use strict";
s.r(t), s.d(t, {
  SubscriptionDetailsEmpty: function() {
    return H
  },
  VIEWABLE_SUBSCRIPTION_STATUSES: function() {
    return W
  },
  DuplicateSubscriptionsBanner: function() {
    return V
  },
  default: function() {
    return K
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  l = s.n(i),
  r = s("627445"),
  u = s.n(r),
  o = s("866227"),
  d = s.n(o),
  c = s("446674"),
  E = s("669491"),
  f = s("77078"),
  _ = s("79112"),
  p = s("812204"),
  m = s("685665"),
  I = s("724038"),
  N = s("649844"),
  S = s("797647"),
  T = s("697218"),
  P = s("145131"),
  C = s("953109"),
  A = s("423487"),
  R = s("599110"),
  M = s("701909"),
  h = s("719923"),
  L = s("713518"),
  g = s("809071"),
  y = s("921149"),
  x = s("892843"),
  D = s("541554"),
  U = s("690679"),
  O = s("95637"),
  b = s("49111"),
  v = s("782340"),
  B = s("809432");

function j(e) {
  let t, {
      subscription: s,
      renewalInvoicePreview: n,
      fromStandaloneBillingPage: i = !0,
      className: r
    } = e,
    o = (0, c.useStateFromStores)([T.default], () => {
      let e = T.default.getCurrentUser();
      return u(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, h.getNumPremiumGuildSubscriptions)(s.additionalPlans)) return null;
  let {
    status: d
  } = s, E = (0, h.isPremiumGuildSubscriptionCanceled)(s);
  return t = E ? B.guildBoostingSubscriptionRowCanceled : (0, h.isSubscriptionStatusFailedPayment)(d) ? B.guildBoostingSubscriptionRowFailedPayment : B.guildBoostingSubscriptionRowActive, (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: l(t, r),
      children: [(0, a.jsx)("div", {
        className: B.guildBoostingSubscriptionRowBackground
      }), (0, a.jsx)("div", {
        className: B.guildBoostingImage
      }), (0, a.jsxs)("div", {
        className: B.guildBoostingSubscriptionRowBody,
        children: [(0, a.jsx)("div", {
          className: l(B.guildBoostingWordmark, {
            [B.canceled]: E
          })
        }), (0, a.jsx)("div", {
          children: (0, h.getPremiumGuildHeaderDescription)({
            subscription: s,
            renewalInvoicePreview: n,
            user: o
          })
        })]
      }), i && (0, a.jsx)(x.default, {
        color: f.Button.Colors.BRAND,
        onClick: () => _.default.open(b.UserSettingsSections.GUILD_BOOSTING),
        children: v.default.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
      })]
    }), !i && (0, a.jsx)(f.Text, {
      className: B.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: v.default.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
        openAppHook: () => (0, I.default)("app")
      })
    })]
  })
}

function G() {
  return n.useEffect(() => {
    R.default.track(b.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.paymentBanner,
    children: [(0, a.jsx)(A.default, {
      className: B.paymentBannerIcon,
      color: E.default.unsafe_rawColors.YELLOW_260.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: v.default.Messages.MISSING_PAYMENT_METHOD_BANNER
    })]
  })
}

function F() {
  return n.useEffect(() => {
    R.default.track(b.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.paymentBanner,
    children: [(0, a.jsx)(A.default, {
      className: B.paymentBannerIcon,
      color: E.default.unsafe_rawColors.RED_360.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: v.default.Messages.INVALID_PAYMENT_METHOD_BANNER
    })]
  })
}

function k(e) {
  let {
    daysPastDue: t,
    subscription: s,
    openInvoiceId: i
  } = e, {
    analyticsLocations: l
  } = (0, m.default)(p.default.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return n.useEffect(() => {
    R.default.track(b.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.paymentBanner,
    children: [(0, a.jsx)(A.default, {
      className: B.paymentBannerIcon,
      color: E.default.unsafe_rawColors.YELLOW_260.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: v.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, N.default)({
            initialPlanId: s.planIdFromItems,
            openInvoiceId: i,
            analyticsLocations: l
          })
        }
      })
    })]
  })
}

function w(e) {
  let {
    subscription: t,
    renewalInvoicePreview: s,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: l(B.billingInformation, n),
    children: [(0, a.jsx)(f.FormTitle, {
      tag: "h3",
      className: B.detailBlockHeader,
      children: v.default.Messages.PREMIUM_SETTINGS_BILLING_INFO
    }), (0, a.jsx)("div", {
      children: h.default.getBillingInformationString(t, s)
    })]
  })
}

function H(e) {
  let {
    className: t
  } = e;
  return (0, a.jsxs)("div", {
    className: t,
    children: [(0, a.jsx)(f.FormTitle, {
      className: B.sectionTitle,
      tag: "h1",
      children: v.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
    }), (0, a.jsx)("p", {
      className: B.sectionDescription,
      children: v.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
    }), (0, a.jsx)(f.Card, {
      className: B.noItemsCard,
      type: f.Card.Types.CUSTOM,
      children: (0, a.jsxs)(P.default, {
        align: P.default.Align.CENTER,
        children: [(0, a.jsx)(C.default, {
          game: null,
          size: C.default.Sizes.SMALL,
          className: B.noItemsIcon
        }), (0, a.jsx)("span", {
          className: B.cardText,
          children: v.default.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
        })]
      })
    })]
  })
}

function Y(e) {
  let {
    subscription: t,
    analyticsLocation: s,
    paymentSource: n,
    busy: i,
    fromStandaloneBillingPage: r,
    showInvalidPaymentMethod: u,
    showNoPaymentMethod: o,
    fetchedCurrentInvoicePreview: d,
    fetchedRenewalInvoicePreview: c
  } = e, {
    analyticsLocations: E
  } = (0, m.default)(p.default.SUBSCRIPTION_DETAILS), _ = null != d ? {} : {
    subscriptionId: t.id,
    renewal: !0,
    analyticsLocations: E,
    analyticsLocation: s
  }, [I] = (0, g.useSubscriptionInvoicePreview)(_);
  I = null != d ? d : I;
  let N = null != c ? {} : {
      subscriptionId: t.id,
      renewal: !0,
      applyEntitlements: !0,
      analyticsLocations: E,
      analyticsLocation: s
    },
    [S] = (0, g.useSubscriptionInvoicePreview)(N);
  return (S = null != c ? c : S, null == I || null == S) ? (0, a.jsx)(f.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: B.subscriptionRows,
      children: [(0, a.jsx)(D.default, {
        subscription: t,
        renewalInvoicePreview: I,
        paymentSource: n,
        busy: i,
        analyticsLocation: s
      }), (0, a.jsx)(j, {
        subscription: t,
        renewalInvoicePreview: I,
        fromStandaloneBillingPage: r,
        className: B.guildSubscriptionRow
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(f.HeadingLevel, {
        component: (0, a.jsx)(f.FormTitle, {
          tag: "h5",
          children: v.default.Messages.BILLING_STEP_PAYMENT
        }),
        children: (0, a.jsxs)("div", {
          className: B.details,
          children: [(0, a.jsx)(w, {
            subscription: t,
            renewalInvoicePreview: S,
            className: B.detailsBlock
          }), t.isPurchasedExternally || (null == n ? void 0 : n.id) === t.paymentSourceId ? (0, a.jsxs)("div", {
            className: l(B.detailsBlock, {
              [B.redBorder]: u
            }),
            children: [(0, a.jsx)(f.FormTitle, {
              tag: "h3",
              className: B.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? v.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                paymentGatewayName: b.PaymentGatewayToFriendlyName[t.paymentGateway]
              }) : v.default.Messages.BILLING_PAY_FOR_IT_WITH
            }), (0, a.jsx)(U.default, {
              subscription: t,
              onPaymentSourceAdded: L.fetchSubscriptionPlansOnNewPaymentSource,
              highlightAddPaymentMethodButton: o || u,
              analyticsLocation: s,
              currentInvoicePreview: I,
              dropdownClassName: B.paymentDropdown
            })]
          }) : null]
        })
      })
    })]
  })
}
let W = new Set([b.SubscriptionStatusTypes.ACTIVE, b.SubscriptionStatusTypes.PAST_DUE, b.SubscriptionStatusTypes.CANCELED, b.SubscriptionStatusTypes.PAUSE_PENDING, b.SubscriptionStatusTypes.PAUSED]);

function V() {
  return n.useEffect(() => {
    R.default.track(b.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.duplicateSubscriptionsBanner,
    children: [(0, a.jsx)(A.default, {
      color: E.default.unsafe_rawColors.RED_360.css
    }), (0, a.jsx)(f.Text, {
      className: B.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: v.default.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
        helpCenterLink: M.default.getArticleURL(b.HelpdeskArticles.NITRO)
      })
    })]
  })
}

function K(e) {
  var t;
  let s, {
    subscription: n,
    subscriptions: i,
    paymentSource: l,
    busy: r,
    className: u,
    fromStandaloneBillingPage: o = !0,
    analyticsLocation: E
  } = e;
  null != i && null != i[0] && (n = i[0]);
  let {
    analyticsLocations: _
  } = (0, m.default)(p.default.SUBSCRIPTION_DETAILS), I = null != i ? i.slice(1) : [], [N] = (0, g.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    renewal: !0,
    analyticsLocations: _,
    analyticsLocation: E
  }), [P] = (0, g.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    renewal: !0,
    applyEntitlements: !0,
    analyticsLocations: _,
    analyticsLocation: E
  }), C = (0, c.useStateFromStores)([T.default], () => {
    var e;
    return null === (e = T.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
  }), A = d(n.currentPeriodEnd), R = null != n.paymentSourceId, M = null !== (t = null == P ? void 0 : P.total) && void 0 !== t ? t : 0, h = null == l ? void 0 : l.invalid, L = !R && M > 0 && (7 >= A.diff(d(), "days") || n.status === b.SubscriptionStatusTypes.PAST_DUE) && !C && !n.isPurchasedExternally, x = h && n.status === b.SubscriptionStatusTypes.PAST_DUE && !C && !n.isPurchasedExternally, D = (0, y.useIsPrepaidPaymentPastDue)(), U = !C && D, j = (null == n ? void 0 : n.status) === b.SubscriptionStatusTypes.PAST_DUE ? d().diff(d(n.currentPeriodStart), "days") : 0, [w] = (0, g.useGetSubscriptionInvoice)({
    subscriptionId: n.id,
    preventFetch: !U
  });
  return null == N || null == P ? (0, a.jsx)(f.Spinner, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, S.isNoneSubscription)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (s = (0, a.jsx)(O.default, {
    subscription: n,
    renewalMutations: n.renewalMutations,
    className: B.renewalMutationNotice,
    analyticsLocation: E
  })), (0, a.jsx)("div", {
    className: u,
    children: (0, a.jsxs)(f.HeadingLevel, {
      component: (0, a.jsx)(f.FormTitle, {
        className: B.sectionTitle,
        tag: "h1",
        children: v.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
      }),
      children: [L ? (0, a.jsx)(G, {}) : null, x ? (0, a.jsx)(F, {}) : null, U && null != w ? (0, a.jsx)(k, {
        daysPastDue: j,
        subscription: n,
        openInvoiceId: w.id
      }) : null, s, (0, a.jsx)("div", {
        children: (0, a.jsx)("p", {
          className: B.sectionDescription,
          children: v.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
        })
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: I.length > 0 ? B.dupSubscriptionRow : B.singleSubscription,
          children: (0, a.jsx)(Y, {
            subscription: n,
            analyticsLocation: E,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: L,
            showInvalidPaymentMethod: x,
            fetchedCurrentInvoicePreview: N,
            fetchedRenewalInvoicePreview: P
          })
        }), I.map((e, t) => (0, a.jsxs)("div", {
          className: B.dupSubscriptionRow,
          children: [(0, a.jsx)(f.FormTitle, {
            tag: "h2",
            className: B.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, a.jsx)(Y, {
            subscription: e,
            analyticsLocation: E,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: L,
            showInvalidPaymentMethod: x,
            fetchedCurrentInvoicePreview: null,
            fetchedRenewalInvoicePreview: null
          })]
        }, t))]
      })]
    })
  }))
}