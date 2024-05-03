"use strict";
s.r(t), s.d(t, {
  DuplicateSubscriptionsBanner: function() {
    return V
  },
  SubscriptionDetailsEmpty: function() {
    return Y
  },
  VIEWABLE_SUBSCRIPTION_STATUSES: function() {
    return W
  },
  default: function() {
    return K
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("512722"),
  u = s.n(r),
  o = s("913527"),
  d = s.n(o),
  c = s("442837"),
  p = s("692547"),
  m = s("481060"),
  f = s("230711"),
  E = s("100527"),
  _ = s("906732"),
  I = s("17894"),
  S = s("963249"),
  N = s("301766"),
  P = s("594174"),
  C = s("285952"),
  h = s("366695"),
  T = s("759231"),
  A = s("626135"),
  R = s("63063"),
  y = s("74538"),
  M = s("212895"),
  L = s("374649"),
  g = s("160913"),
  x = s("987997"),
  D = s("393411"),
  b = s("908951"),
  U = s("592889"),
  v = s("981631"),
  B = s("689938"),
  O = s("256226");

function j(e) {
  let t, {
      subscription: s,
      renewalInvoicePreview: n,
      fromStandaloneBillingPage: i = !0,
      className: r
    } = e,
    o = (0, c.useStateFromStores)([P.default], () => {
      let e = P.default.getCurrentUser();
      return u()(null != e, "GuildBoostingHeader: currentUser cannot be undefined"), e
    });
  if (0 === (0, y.getNumPremiumGuildSubscriptions)(s.additionalPlans)) return null;
  let {
    status: d
  } = s, p = (0, y.isPremiumGuildSubscriptionCanceled)(s);
  if (p) t = O.guildBoostingSubscriptionRowCanceled;
  else switch (d) {
    case v.SubscriptionStatusTypes.PAST_DUE:
    case v.SubscriptionStatusTypes.ACCOUNT_HOLD:
    case v.SubscriptionStatusTypes.BILLING_RETRY:
      t = O.guildBoostingSubscriptionRowFailedPayment;
      break;
    case v.SubscriptionStatusTypes.PAUSE_PENDING:
    case v.SubscriptionStatusTypes.PAUSED:
      t = O.guildBoostingSubscriptionRowPaused;
      break;
    default:
      t = O.guildBoostingSubscriptionRowActive
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: l()(t, r),
      children: [(0, a.jsx)("div", {
        className: O.guildBoostingSubscriptionRowBackground
      }), (0, a.jsx)("div", {
        className: O.guildBoostingImage
      }), (0, a.jsxs)("div", {
        className: O.guildBoostingSubscriptionRowBody,
        children: [(0, a.jsx)("div", {
          className: l()(O.guildBoostingWordmark, {
            [O.canceled]: p
          })
        }), (0, a.jsx)("div", {
          children: (0, y.getPremiumGuildHeaderDescription)({
            subscription: s,
            renewalInvoicePreview: n,
            user: o
          })
        })]
      }), i && (0, a.jsx)(x.default, {
        color: m.Button.Colors.BRAND,
        onClick: () => f.default.open(v.UserSettingsSections.GUILD_BOOSTING),
        children: B.default.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
      })]
    }), !i && (0, a.jsx)(m.Text, {
      className: O.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: B.default.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
        openAppHook: () => (0, I.default)("app")
      })
    })]
  })
}

function G() {
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_missing_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: O.paymentBanner,
    children: [(0, a.jsx)(T.default, {
      className: O.paymentBannerIcon,
      color: p.default.unsafe_rawColors.YELLOW_260.css
    }), (0, a.jsx)(m.Text, {
      className: O.paymentBannerText,
      variant: "text-sm/normal",
      children: B.default.Messages.MISSING_PAYMENT_METHOD_BANNER
    })]
  })
}

function k() {
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: O.paymentBanner,
    children: [(0, a.jsx)(T.default, {
      className: O.paymentBannerIcon,
      color: p.default.unsafe_rawColors.RED_360.css
    }), (0, a.jsx)(m.Text, {
      className: O.paymentBannerText,
      variant: "text-sm/normal",
      children: B.default.Messages.INVALID_PAYMENT_METHOD_BANNER
    })]
  })
}

function w(e) {
  let {
    daysPastDue: t,
    subscription: s,
    openInvoiceId: i
  } = e, {
    analyticsLocations: l
  } = (0, _.default)(E.default.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: O.paymentBanner,
    children: [(0, a.jsx)(T.default, {
      className: O.paymentBannerIcon,
      color: p.default.unsafe_rawColors.YELLOW_260.css
    }), (0, a.jsx)(m.Text, {
      className: O.paymentBannerText,
      variant: "text-sm/normal",
      children: B.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
        daysPastDue: t,
        paymentModalRedirect: () => {
          (0, S.default)({
            initialPlanId: s.planIdFromItems,
            openInvoiceId: i,
            analyticsLocations: l
          })
        }
      })
    })]
  })
}

function F(e) {
  let {
    subscription: t,
    renewalInvoicePreview: s,
    className: n
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(O.billingInformation, n),
    children: [(0, a.jsx)(m.FormTitle, {
      tag: "h3",
      className: O.detailBlockHeader,
      children: B.default.Messages.PREMIUM_SETTINGS_BILLING_INFO
    }), (0, a.jsx)("div", {
      children: y.default.getBillingInformationString(t, s)
    })]
  })
}

function Y(e) {
  let {
    className: t
  } = e;
  return (0, a.jsxs)("div", {
    className: t,
    children: [(0, a.jsx)(m.FormTitle, {
      className: O.sectionTitle,
      tag: "h1",
      children: B.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
    }), (0, a.jsx)("p", {
      className: O.sectionDescription,
      children: B.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
    }), (0, a.jsx)(m.Card, {
      className: O.noItemsCard,
      type: m.Card.Types.CUSTOM,
      children: (0, a.jsxs)(C.default, {
        align: C.default.Align.CENTER,
        children: [(0, a.jsx)(h.default, {
          game: null,
          size: h.default.Sizes.SMALL,
          className: O.noItemsIcon
        }), (0, a.jsx)("span", {
          className: O.cardText,
          children: B.default.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
        })]
      })
    })]
  })
}

function H(e) {
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
    analyticsLocations: p
  } = (0, _.default)(E.default.SUBSCRIPTION_DETAILS), f = null != d ? {} : {
    subscriptionId: t.id,
    renewal: !0,
    analyticsLocations: p,
    analyticsLocation: s
  }, [I] = (0, L.useSubscriptionInvoicePreview)(f);
  I = null != d ? d : I;
  let S = null != c ? {} : {
      subscriptionId: t.id,
      renewal: !0,
      applyEntitlements: !0,
      analyticsLocations: p,
      analyticsLocation: s
    },
    [N] = (0, L.useSubscriptionInvoicePreview)(S);
  return (N = null != c ? c : N, null == I || null == N) ? (0, a.jsx)(m.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: O.subscriptionRows,
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
        className: O.guildSubscriptionRow
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(m.HeadingLevel, {
        component: (0, a.jsx)(m.FormTitle, {
          tag: "h5",
          children: B.default.Messages.BILLING_STEP_PAYMENT
        }),
        children: (0, a.jsxs)("div", {
          className: O.details,
          children: [(0, a.jsx)(F, {
            subscription: t,
            renewalInvoicePreview: N,
            className: O.detailsBlock
          }), t.isPurchasedExternally || (null == n ? void 0 : n.id) === t.paymentSourceId ? (0, a.jsxs)("div", {
            className: l()(O.detailsBlock, {
              [O.redBorder]: u
            }),
            children: [(0, a.jsx)(m.FormTitle, {
              tag: "h3",
              className: O.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? B.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                paymentGatewayName: v.PaymentGatewayToFriendlyName[t.paymentGateway]
              }) : B.default.Messages.BILLING_PAY_FOR_IT_WITH
            }), (0, a.jsx)(b.default, {
              subscription: t,
              onPaymentSourceAdded: M.fetchSubscriptionPlansOnNewPaymentSource,
              highlightAddPaymentMethodButton: o || u,
              analyticsLocation: s,
              currentInvoicePreview: I,
              dropdownClassName: O.paymentDropdown
            })]
          }) : null]
        })
      })
    })]
  })
}
let W = new Set([v.SubscriptionStatusTypes.ACTIVE, v.SubscriptionStatusTypes.PAST_DUE, v.SubscriptionStatusTypes.CANCELED, v.SubscriptionStatusTypes.PAUSE_PENDING, v.SubscriptionStatusTypes.PAUSED]);

function V() {
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, a.jsxs)("div", {
    className: O.duplicateSubscriptionsBanner,
    children: [(0, a.jsx)(T.default, {
      color: p.default.unsafe_rawColors.RED_360.css
    }), (0, a.jsx)(m.Text, {
      className: O.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: B.default.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
        helpCenterLink: R.default.getArticleURL(v.HelpdeskArticles.NITRO)
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
    analyticsLocation: p
  } = e;
  null != i && null != i[0] && (n = i[0]);
  let {
    analyticsLocations: f
  } = (0, _.default)(E.default.SUBSCRIPTION_DETAILS), I = null != i ? i.slice(1) : [], [S] = (0, L.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    renewal: !0,
    analyticsLocations: f,
    analyticsLocation: p
  }), [C] = (0, L.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    renewal: !0,
    applyEntitlements: !0,
    analyticsLocations: f,
    analyticsLocation: p
  }), h = (0, c.useStateFromStores)([P.default], () => {
    var e;
    return null === (e = P.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
  }), T = d()(n.currentPeriodEnd), A = null != n.paymentSourceId, R = null !== (t = null == C ? void 0 : C.total) && void 0 !== t ? t : 0, y = null == l ? void 0 : l.invalid, M = !A && R > 0 && (7 >= T.diff(d()(), "days") || n.status === v.SubscriptionStatusTypes.PAST_DUE) && !h && !n.isPurchasedExternally, x = y && n.status === v.SubscriptionStatusTypes.PAST_DUE && !h && !n.isPurchasedExternally, D = (0, g.useIsPrepaidPaymentPastDue)(), b = !h && D, j = (null == n ? void 0 : n.status) === v.SubscriptionStatusTypes.PAST_DUE ? d()().diff(d()(n.currentPeriodStart), "days") : 0, [F] = (0, L.useGetSubscriptionInvoice)({
    subscriptionId: n.id,
    preventFetch: !b
  });
  return null == S || null == C ? (0, a.jsx)(m.Spinner, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, N.isNoneSubscription)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (s = (0, a.jsx)(U.default, {
    subscription: n,
    renewalMutations: n.renewalMutations,
    className: O.renewalMutationNotice,
    analyticsLocation: p
  })), (0, a.jsx)("div", {
    className: u,
    children: (0, a.jsxs)(m.HeadingLevel, {
      component: (0, a.jsx)(m.FormTitle, {
        className: O.sectionTitle,
        tag: "h1",
        children: B.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
      }),
      children: [M ? (0, a.jsx)(G, {}) : null, x ? (0, a.jsx)(k, {}) : null, b && null != F ? (0, a.jsx)(w, {
        daysPastDue: j,
        subscription: n,
        openInvoiceId: F.id
      }) : null, s, (0, a.jsx)("div", {
        children: (0, a.jsx)("p", {
          className: O.sectionDescription,
          children: B.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
        })
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: I.length > 0 ? O.dupSubscriptionRow : O.__invalid_singleSubscription,
          children: (0, a.jsx)(H, {
            subscription: n,
            analyticsLocation: p,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: M,
            showInvalidPaymentMethod: x,
            fetchedCurrentInvoicePreview: S,
            fetchedRenewalInvoicePreview: C
          })
        }), I.map((e, t) => (0, a.jsxs)("div", {
          className: O.dupSubscriptionRow,
          children: [(0, a.jsx)(m.FormTitle, {
            tag: "h2",
            className: O.duplicateHeader,
            children: "Duplicate Subscriptions"
          }), (0, a.jsx)(H, {
            subscription: e,
            analyticsLocation: p,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: M,
            showInvalidPaymentMethod: x,
            fetchedCurrentInvoicePreview: null,
            fetchedRenewalInvoicePreview: null
          })]
        }, t))]
      })]
    })
  }))
}