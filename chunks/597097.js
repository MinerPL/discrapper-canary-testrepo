"use strict";
s.r(t), s.d(t, {
  default: function() {
    return G
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("627445"),
  o = s.n(r),
  d = s("733724"),
  u = s("446674"),
  c = s("77078"),
  S = s("850068"),
  E = s("812204"),
  T = s("685665"),
  f = s("560350"),
  _ = s("306073"),
  m = s("430780"),
  g = s("809071"),
  h = s("690679"),
  N = s("388290"),
  I = s("357957"),
  p = s("476263"),
  C = s("555158"),
  A = s("876269"),
  O = s("191814"),
  x = s("476765"),
  R = s("837899"),
  M = s("68238"),
  D = s("956089"),
  v = s("129408"),
  L = s("167007"),
  P = s("457430"),
  j = s("49111"),
  b = s("782340"),
  U = s("440605");
let y = e => {
    let {
      label: t,
      value: s,
      showInfoIcon: n,
      infoIconTooltipText: l
    } = e;
    return (0, a.jsxs)("div", {
      className: U.infoCard,
      children: [(0, a.jsxs)("div", {
        className: U.infoCardLabelContainer,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: U.infoCardLabel,
          children: t
        }), n && (0, a.jsx)(c.Tooltip, {
          text: l,
          children: e => (0, a.jsx)(M.default, {
            ...e,
            className: U.infoCardIcon
          })
        })]
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/semibold",
        className: U.infoCardValue,
        children: s
      })]
    })
  },
  B = e => {
    let {
      subscription: t,
      disabled: s
    } = e, {
      analyticsLocations: n
    } = (0, T.default)(), [l] = (0, g.useSubscriptionInvoicePreview)({
      subscriptionId: t.id,
      renewal: !0,
      analyticsLocations: n,
      analyticsLocation: E.default.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
    }), i = (0, u.useStateFromStores)([I.default], () => I.default.hasFetchedPaymentSources);
    return i ? null == l ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormTitle, {
        children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL
      }), (0, a.jsx)(h.default, {
        subscription: t,
        currentInvoicePreview: l,
        dropdownClassName: U.paymentSourceDropdown,
        disabled: s
      })]
    }) : (0, a.jsx)(c.Spinner, {})
  },
  F = e => {
    let {
      isCancelled: t,
      onCancelSubscriptionClick: s,
      isResubscribing: n,
      onResubscribeClick: l
    } = e;
    return (0, a.jsxs)("div", {
      children: [(0, a.jsx)(c.FormTitle, {
        children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL
      }), (0, a.jsx)("div", {
        className: U.rowButtons,
        children: t ? (0, a.jsx)(c.Button, {
          onClick: l,
          submitting: n,
          children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
        }) : (0, a.jsx)(A.default, {
          label: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
          onClick: s
        })
      })]
    })
  };
var G = e => {
  let {
    subscription: t
  } = e, {
    listing: l,
    groupListing: r,
    guild: u,
    expanded: E,
    handleToggleExpanded: g,
    subscriptionInfo: h,
    application: I
  } = (0, P.default)(t), A = (0, x.useUID)(), [M, G] = n.useState(!1), {
    analyticsLocations: k
  } = (0, T.default)();
  if (null == r || null == l || null == h) return null;
  let H = () => {
      o(null != I, "Application cannot be null"), (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("187752").then(s.bind(s, "187752"));
        return s => (0, a.jsx)(e, {
          application: I,
          listing: l,
          subscription: t,
          guild: u,
          ...s
        })
      })
    },
    w = async () => {
      try {
        G(!0);
        let {
          subscription: e
        } = await S.resubscribeToSubscription(t, k);
        null != e && (0, c.openModalLazy)(async () => {
          let {
            default: t
          } = await s.el("135154").then(s.bind(s, "135154"));
          return s => (0, a.jsx)(t, {
            listing: l,
            subscription: N.default.createFromServer(e),
            ...s
          })
        })
      } finally {
        G(!1)
      }
    }, {
      isCancelled: V,
      isDeleted: Y,
      isPastDue: K,
      subscriptionPlanPrice: W,
      subscribedSinceDate: z,
      currentPeriodEndDate: Q,
      currentPeriodEndLabel: X
    } = h, q = (0, v.isApplicationUserSubscription)(l.sku_flags), Z = (0, v.isApplicationGuildSubscription)(l.sku_flags), J = l.soft_deleted || null == I || (!Z || null == u) && !q, $ = () => V || Y ? (0, a.jsx)(D.TextBadge, {
      text: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED
    }) : K ? (0, a.jsx)(c.Tooltip, {
      text: b.default.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(D.TextBadge, {
          className: U.paymentDueBadge,
          text: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
          color: d.default.YELLOW_300
        })
      })
    }) : null, ee = null;
  if (Z) {
    var et;
    ee = (0, a.jsxs)(c.Text, {
      variant: "text-sm/normal",
      className: U.tierName,
      children: [b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({
        guildName: null !== (et = null == u ? void 0 : u.name) && void 0 !== et ? et : b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE
      }), null != u && (0, a.jsx)(p.default, {
        guild: u,
        size: p.default.Sizes.MINI,
        className: U.guildIcon
      })]
    })
  } else q && (ee = (0, a.jsx)(c.Text, {
    variant: "text-sm/normal",
    className: U.tierName,
    children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
  }));
  return (0, a.jsxs)("div", {
    className: U.container,
    children: [(0, a.jsx)(_.default, {
      onClick: g,
      className: U.headerContainer,
      children: e => {
        let {
          areaRef: t,
          handleStopPropagation: s
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [null != I && (0, a.jsx)(L.default, {
            size: L.ApplicationIconSize.SMALL,
            className: U.applicationIcon,
            application: I,
            asset: null != l.image_asset ? (0, f.transformStoreAssetFromServer)(l.image_asset) : null
          }), (0, a.jsxs)("div", {
            className: U.headerTextContainer,
            children: [(0, a.jsx)(c.Text, {
              variant: "text-md/medium",
              className: U.applicationName,
              children: null != I ? I.name : b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
            }), (0, a.jsxs)("div", {
              className: U.headerSubtitleContainer,
              children: [ee, $()]
            })]
          }), (0, a.jsx)(c.Clickable, {
            onClick: s(g),
            "aria-label": b.default.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
            "aria-controls": A,
            "aria-expanded": E,
            focusProps: {
              ringTarget: t
            },
            children: (0, a.jsx)(R.default, {
              className: i(U.arrowIcon, {
                [U.arrowIconExpanded]: E
              })
            })
          })]
        })
      }
    }), E ? (0, a.jsxs)("div", {
      id: A,
      children: [(0, a.jsx)("div", {
        className: U.divider
      }), Y ? (0, a.jsx)(C.default, {
        messageType: C.HelpMessageTypes.WARNING,
        className: U.deletedHelpMessage,
        children: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
      }) : null, (0, a.jsx)(m.default, {
        groupListingId: r.id,
        subscription: t,
        className: U.changePlanNotice
      }), (0, a.jsxs)("div", {
        className: U.subscriptionInfoCards,
        children: [(0, a.jsx)(y, {
          label: X,
          value: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({
            timestamp: Q.getTime()
          })
        }), (0, a.jsx)(y, {
          label: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
          value: W
        }), (0, a.jsx)(y, {
          label: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
          value: b.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({
            timestamp: z.getTime()
          })
        })]
      }), (0, a.jsx)(O.default, {
        size: 16
      }), t.status === j.SubscriptionStatusTypes.ACTIVE && (0, a.jsx)(B, {
        subscription: t,
        disabled: Y
      }), !J && (0, a.jsx)(F, {
        isCancelled: V,
        onCancelSubscriptionClick: H,
        isResubscribing: M,
        onResubscribeClick: w
      })]
    }) : null]
  })
}