"use strict";
s.r(t), s.d(t, {
  DuplicateSubscriptionsBanner: function() {
    return V
  },
  SubscriptionDetailsEmpty: function() {
    return H
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
  i = s("803997"),
  l = s.n(i),
  r = s("512722"),
  u = s.n(r),
  o = s("913527"),
  d = s.n(o),
  c = s("442837"),
  E = s("692547"),
  f = s("481060"),
  _ = s("230711"),
  p = s("100527"),
  m = s("906732"),
  I = s("17894"),
  N = s("963249"),
  S = s("301766"),
  P = s("594174"),
  T = s("285952"),
  C = s("366695"),
  R = s("759231"),
  A = s("626135"),
  M = s("63063"),
  h = s("74538"),
  L = s("212895"),
  g = s("374649"),
  y = s("160913"),
  x = s("987997"),
  D = s("393411"),
  U = s("908951"),
  O = s("592889"),
  v = s("981631"),
  b = s("689938"),
  B = s("854554");

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
  if (0 === (0, h.getNumPremiumGuildSubscriptions)(s.additionalPlans)) return null;
  let {
    status: d
  } = s, E = (0, h.isPremiumGuildSubscriptionCanceled)(s);
  return t = E ? B.guildBoostingSubscriptionRowCanceled : (0, h.isSubscriptionStatusFailedPayment)(d) ? B.guildBoostingSubscriptionRowFailedPayment : B.guildBoostingSubscriptionRowActive, (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: l()(t, r),
      children: [(0, a.jsx)("div", {
        className: B.guildBoostingSubscriptionRowBackground
      }), (0, a.jsx)("div", {
        className: B.guildBoostingImage
      }), (0, a.jsxs)("div", {
        className: B.guildBoostingSubscriptionRowBody,
        children: [(0, a.jsx)("div", {
          className: l()(B.guildBoostingWordmark, {
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
        onClick: () => _.default.open(v.UserSettingsSections.GUILD_BOOSTING),
        children: b.default.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
      })]
    }), !i && (0, a.jsx)(f.Text, {
      className: B.boostingDesktopAppBlurb,
      variant: "text-sm/normal",
      children: b.default.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({
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
    className: B.paymentBanner,
    children: [(0, a.jsx)(R.default, {
      className: B.paymentBannerIcon,
      color: E.default.unsafe_rawColors.YELLOW_260.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: b.default.Messages.MISSING_PAYMENT_METHOD_BANNER
    })]
  })
}

function F() {
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.paymentBanner,
    children: [(0, a.jsx)(R.default, {
      className: B.paymentBannerIcon,
      color: E.default.unsafe_rawColors.RED_360.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: b.default.Messages.INVALID_PAYMENT_METHOD_BANNER
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
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_invalid_payment_method"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.paymentBanner,
    children: [(0, a.jsx)(R.default, {
      className: B.paymentBannerIcon,
      color: E.default.unsafe_rawColors.YELLOW_260.css
    }), (0, a.jsx)(f.Text, {
      className: B.paymentBannerText,
      variant: "text-sm/normal",
      children: b.default.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
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
    className: l()(B.billingInformation, n),
    children: [(0, a.jsx)(f.FormTitle, {
      tag: "h3",
      className: B.detailBlockHeader,
      children: b.default.Messages.PREMIUM_SETTINGS_BILLING_INFO
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
      children: b.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
    }), (0, a.jsx)("p", {
      className: B.sectionDescription,
      children: b.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
    }), (0, a.jsx)(f.Card, {
      className: B.noItemsCard,
      type: f.Card.Types.CUSTOM,
      children: (0, a.jsxs)(T.default, {
        align: T.default.Align.CENTER,
        children: [(0, a.jsx)(C.default, {
          game: null,
          size: C.default.Sizes.SMALL,
          className: B.noItemsIcon
        }), (0, a.jsx)("span", {
          className: B.cardText,
          children: b.default.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
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
          children: b.default.Messages.BILLING_STEP_PAYMENT
        }),
        children: (0, a.jsxs)("div", {
          className: B.details,
          children: [(0, a.jsx)(w, {
            subscription: t,
            renewalInvoicePreview: S,
            className: B.detailsBlock
          }), t.isPurchasedExternally || (null == n ? void 0 : n.id) === t.paymentSourceId ? (0, a.jsxs)("div", {
            className: l()(B.detailsBlock, {
              [B.redBorder]: u
            }),
            children: [(0, a.jsx)(f.FormTitle, {
              tag: "h3",
              className: B.detailBlockHeader,
              children: t.isPurchasedExternally && null != t.paymentGateway ? b.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
                paymentGatewayName: v.PaymentGatewayToFriendlyName[t.paymentGateway]
              }) : b.default.Messages.BILLING_PAY_FOR_IT_WITH
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
let W = new Set([v.SubscriptionStatusTypes.ACTIVE, v.SubscriptionStatusTypes.PAST_DUE, v.SubscriptionStatusTypes.CANCELED, v.SubscriptionStatusTypes.PAUSE_PENDING, v.SubscriptionStatusTypes.PAUSED]);

function V() {
  return n.useEffect(() => {
    A.default.track(v.AnalyticEvents.TOOLTIP_VIEWED, {
      type: "subscription_settings_duplicate_subscriptions"
    })
  }, []), (0, a.jsxs)("div", {
    className: B.duplicateSubscriptionsBanner,
    children: [(0, a.jsx)(R.default, {
      color: E.default.unsafe_rawColors.RED_360.css
    }), (0, a.jsx)(f.Text, {
      className: B.duplicateSubscriptionsBannerText,
      variant: "text-sm/normal",
      children: b.default.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({
        helpCenterLink: M.default.getArticleURL(v.HelpdeskArticles.NITRO)
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
  }), [T] = (0, g.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    renewal: !0,
    applyEntitlements: !0,
    analyticsLocations: _,
    analyticsLocation: E
  }), C = (0, c.useStateFromStores)([P.default], () => {
    var e;
    return null === (e = P.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium()
  }), R = d()(n.currentPeriodEnd), A = null != n.paymentSourceId, M = null !== (t = null == T ? void 0 : T.total) && void 0 !== t ? t : 0, h = null == l ? void 0 : l.invalid, L = !A && M > 0 && (7 >= R.diff(d()(), "days") || n.status === v.SubscriptionStatusTypes.PAST_DUE) && !C && !n.isPurchasedExternally, x = h && n.status === v.SubscriptionStatusTypes.PAST_DUE && !C && !n.isPurchasedExternally, D = (0, y.useIsPrepaidPaymentPastDue)(), U = !C && D, j = (null == n ? void 0 : n.status) === v.SubscriptionStatusTypes.PAST_DUE ? d()().diff(d()(n.currentPeriodStart), "days") : 0, [w] = (0, g.useGetSubscriptionInvoice)({
    subscriptionId: n.id,
    preventFetch: !U
  });
  return null == N || null == T ? (0, a.jsx)(f.Spinner, {}) : (null != n.renewalMutations && (n.renewalMutations.planId !== n.planId && !(0, S.isNoneSubscription)(n.renewalMutations.planId) || n.hasExternalPlanChange) && (s = (0, a.jsx)(O.default, {
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
        children: b.default.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
      }),
      children: [L ? (0, a.jsx)(G, {}) : null, x ? (0, a.jsx)(F, {}) : null, U && null != w ? (0, a.jsx)(k, {
        daysPastDue: j,
        subscription: n,
        openInvoiceId: w.id
      }) : null, s, (0, a.jsx)("div", {
        children: (0, a.jsx)("p", {
          className: B.sectionDescription,
          children: b.default.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
        })
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          className: I.length > 0 ? B.dupSubscriptionRow : B.__invalid_singleSubscription,
          children: (0, a.jsx)(Y, {
            subscription: n,
            analyticsLocation: E,
            paymentSource: l,
            busy: r,
            fromStandaloneBillingPage: o,
            showNoPaymentMethod: L,
            showInvalidPaymentMethod: x,
            fetchedCurrentInvoicePreview: N,
            fetchedRenewalInvoicePreview: T
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