"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("722770"),
  o = s("442837"),
  d = s("481060"),
  u = s("355467"),
  c = s("37234"),
  S = s("254854"),
  E = s("230711"),
  T = s("100527"),
  _ = s("906732"),
  f = s("377171"),
  m = s("674180"),
  g = s("374649"),
  h = s("908951"),
  N = s("703656"),
  I = s("853872"),
  p = s("346656"),
  C = s("755596"),
  A = s("682864"),
  O = s("153124"),
  x = s("86813"),
  R = s("41542"),
  M = s("26290"),
  v = s("245950"),
  D = s("404203"),
  L = s("330181"),
  P = s("954821"),
  j = s("980864"),
  b = s("981631"),
  U = s("176505"),
  y = s("526761"),
  B = s("689938"),
  F = s("379181");
let G = e => {
    let {
      label: t,
      value: s,
      showInfoIcon: n,
      infoIconTooltipText: l
    } = e;
    return (0, a.jsxs)("div", {
      className: F.infoCard,
      children: [(0, a.jsxs)("div", {
        className: F.infoCardLabelContainer,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: F.infoCardLabel,
          children: t
        }), n && (0, a.jsx)(d.Tooltip, {
          clickableOnMobile: !0,
          text: l,
          children: e => (0, a.jsx)(R.default, {
            ...e,
            className: F.infoCardIcon
          })
        })]
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        className: F.infoCardValue,
        children: s
      })]
    })
  },
  k = e => {
    let {
      subscription: t
    } = e, {
      analyticsLocations: s
    } = (0, _.default)(), [n] = (0, g.useSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      renewal: !0,
      analyticsLocations: s,
      analyticsLocation: T.default.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), l = (0, o.useStateFromStores)([I.default], () => I.default.hasFetchedPaymentSources);
    return null != n && l ? (0, a.jsx)(h.default, {
      subscription: t,
      currentInvoicePreview: n,
      dropdownClassName: F.paymentSourceDropdown
    }) : (0, a.jsx)(d.Spinner, {})
  },
  H = e => {
    let {
      isTrial: t,
      isCancelled: s,
      isResubscribing: n,
      shouldHideRoleSubscriptionEntryPoints: l,
      onCancelSubscriptionClick: i,
      onResubscribeClick: r,
      onChangePlanClick: o
    } = e;
    return s && (t || l) ? null : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(d.FormTitle, {
        children: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, a.jsx)("div", {
        className: F.__invalid_rowButtons,
        children: s ? (0, a.jsx)(d.Button, {
          onClick: r,
          submitting: n,
          children: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART_SUBSCRIPTION
        }) : (0, a.jsxs)(a.Fragment, {
          children: [!t && !l && (0, a.jsx)(C.default, {
            label: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CHANGE_TIER,
            onClick: o
          }), (0, a.jsx)(C.default, {
            label: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
            onClick: i
          })]
        })
      })]
    })
  };
t.default = e => {
  let {
    subscription: t
  } = e, {
    listing: s,
    groupListing: l,
    guild: o,
    expanded: T,
    handleToggleExpanded: g,
    subscriptionInfo: h
  } = (0, v.default)(t), [I, C] = n.useState(!1), R = (0, O.useUID)(), {
    analyticsLocations: w
  } = (0, _.default)(), {
    shouldHideGuildPurchaseEntryPoints: V
  } = (0, m.useShouldHideGuildPurchaseEntryPoints)(null == o ? void 0 : o.id), Y = (null == t ? void 0 : t.paymentGateway) === b.PaymentGateways.APPLE_PARTNER;
  if (null == l || null == s || null == h) return null;
  let K = () => {
      null != o && ((0, N.transitionTo)(b.Routes.CHANNEL(o.id, U.StaticChannelRoute.ROLE_SUBSCRIPTIONS)), (0, c.popLayer)(), S.default.show(b.NoticeTypes.BACK_TO_PREVIOUS_SCREEN, void 0, B.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_BACK_TO_SUBSCRIPTION_USER_SETTING_CTA, () => E.default.open(b.UserSettingsSections.SUBSCRIPTIONS, y.ROLE_SUBSCRIPTION_SUBSECTION)))
    },
    W = () => {
      null != o && (0, P.openModal)({
        guildId: o.id,
        groupListing: l,
        listing: s,
        subscription: t
      })
    },
    z = async () => {
      try {
        C(!0), await u.resubscribeToSubscription(t, w), (0, j.openModal)()
      } finally {
        C(!1)
      }
    }, {
      isCancelled: Q,
      isPastDue: X,
      subscriptionPrice: q,
      memberSince: Z,
      nextRenewalDate: J,
      nextRenewalLabel: $,
      isTrial: ee
    } = h, et = s.soft_deleted || null == o || Y, es = () => {
      if (Q) return (0, a.jsx)(M.TextBadge, {
        text: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_CANCELLED
      });
      if (ee) return (0, a.jsx)(M.TextBadge, {
        text: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FREE_TRIAL_TITLE,
        color: r.default.BRAND_500
      });
      if (X) return (0, a.jsx)(d.Tooltip, {
        text: B.default.Messages.GUILD_ROLE_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
        children: e => (0, a.jsx)("div", {
          ...e,
          children: (0, a.jsx)(M.TextBadge, {
            className: F.paymentDueBadge,
            text: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAST_DUE,
            color: r.default.YELLOW_300
          })
        })
      });
      else return null
    }, ea = () => Y ? (0, a.jsx)(d.Tooltip, {
      text: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM_TOOLTIP,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(M.TextBadge, {
          text: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_IOS_PLATFORM,
          color: f.default.INTERACTIVE_MUTED
        })
      })
    }) : null;
  return (0, a.jsxs)("div", {
    className: F.container,
    children: [(0, a.jsx)(D.default, {
      onClick: g,
      className: F.headerContainer,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: n
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [null != o && (0, a.jsx)(p.default, {
            guild: o,
            active: !0,
            size: p.default.Sizes.MEDIUM
          }), (0, a.jsxs)("div", {
            className: F.headerTextContainer,
            children: [(0, a.jsx)(d.Text, {
              variant: "text-md/medium",
              className: F.guildName,
              children: null != o ? o.name : B.default.Messages.GUILD_ROLE_SUBSCRIPTION_SERVER_NAME_UNAVAILABLE
            }), (0, a.jsxs)("div", {
              className: F.headerSubtitleContainer,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-sm/normal",
                className: F.tierName,
                children: s.name
              }), es(), ea()]
            })]
          }), (0, a.jsx)(d.Clickable, {
            onClick: n(g),
            "aria-label": B.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
            "aria-controls": R,
            "aria-expanded": T,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(x.default, {
              className: i()(F.arrowIcon, {
                [F.arrowIconExpanded]: T
              })
            })
          })]
        })
      }
    }), T ? (0, a.jsxs)("div", {
      id: R,
      children: [(0, a.jsx)("div", {
        className: F.divider
      }), (0, a.jsx)(L.default, {
        groupListingId: l.id,
        subscription: t,
        className: F.changePlanNotice
      }), (0, a.jsxs)("div", {
        className: F.subscriptionInfoCards,
        children: [(0, a.jsx)(G, {
          label: $,
          value: J
        }), (0, a.jsx)(G, {
          label: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: q,
          showInfoIcon: ee,
          infoIconTooltipText: ee ? B.default.Messages.GUILD_ROLE_SUBSCRIPTION_MANAGE_SUBSCRIPTION_PAGE_TRIAL_PRICE_INFO : void 0
        }), (0, a.jsx)(G, {
          label: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_INFO_MEMBER_SINCE,
          value: Z
        })]
      }), (0, a.jsx)(A.default, {
        size: 16
      }), !Q && !Y && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.FormTitle, {
          children: B.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
        }), (0, a.jsx)(k, {
          subscription: t
        })]
      }), !et && (0, a.jsx)(H, {
        isTrial: ee,
        isCancelled: Q,
        isResubscribing: I,
        shouldHideRoleSubscriptionEntryPoints: V,
        onCancelSubscriptionClick: W,
        onChangePlanClick: K,
        onResubscribeClick: z
      })]
    }) : null]
  })
}