"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eI
  }
}), s("47120"), s("653041"), s("789020");
var a, n, i, l = s("735250"),
  r = s("470079"),
  u = s("120356"),
  o = s.n(u),
  d = s("512722"),
  c = s.n(d),
  p = s("913527"),
  m = s.n(p),
  f = s("924826"),
  E = s("314877"),
  _ = s("442837"),
  I = s("481060"),
  S = s("37234"),
  N = s("782568"),
  P = s("812206"),
  C = s("593061"),
  h = s("267101"),
  T = s("240864"),
  A = s("942833"),
  R = s("400916"),
  y = s("916001"),
  M = s("539290"),
  L = s("336197"),
  g = s("307643"),
  x = s("378233"),
  D = s("419922"),
  b = s("46141"),
  U = s("430824"),
  v = s("853872"),
  B = s("509545"),
  O = s("230307"),
  j = s("285952"),
  G = s("366695"),
  k = s("499150"),
  w = s("912454"),
  F = s("259580"),
  Y = s("263704"),
  H = s("465670"),
  W = s("126900"),
  V = s("559629"),
  K = s("466111"),
  z = s("572004"),
  q = s("55935"),
  Z = s("630388"),
  X = s("74538"),
  J = s("937615"),
  Q = s("244526"),
  $ = s("712358"),
  ee = s("362786"),
  et = s("981631"),
  es = s("474936"),
  ea = s("231338"),
  en = s("689938"),
  ei = s("59045");

function el(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let er = e => "https://".concat(et.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  eu = [et.SKUTypes.DURABLE_PRIMARY, et.SKUTypes.DURABLE, et.SKUTypes.CONSUMABLE];
(i = a || (a = {})).PURCHASE_DATE = "PURCHASE_DATE", i.SKU_TYPE = "SKU_TYPE", i.ALREADY_REFUNDED = "ALREADY_REFUNDED", i.PAYMENT_STATUS = "PAYMENT_STATUS", i.PAYMENT_GATEWAY = "PAYMENT_GATEWAY", i.SKU_STICKER_PACK = "SKU_STICKER_PACK", i.SUBSCRIPTION_TYPE = "SUBSCRIPTION_TYPE", i.GUILD_PRODUCT = "GUILD_PRODUCT";
let eo = [et.PaymentStatusTypes.FAILED, et.PaymentStatusTypes.REVERSED, et.PaymentStatusTypes.CANCELED],
  ed = [ea.PaymentGateways.APPLE],
  ec = e => {
    let {
      description: t,
      cost: s
    } = e;
    return (0, l.jsx)("li", {
      className: ei.paymentDetail,
      children: (0, l.jsxs)(j.default, {
        justify: j.default.Justify.BETWEEN,
        children: [(0, l.jsx)("div", {
          children: t
        }), (0, l.jsx)("div", {
          children: s
        })]
      })
    })
  };

function ep(e) {
  let {
    value: t,
    copyText: s,
    copyFeedbackText: a
  } = e, [n, i] = r.useState(!1), [u, o] = r.useState(!1), d = () => {
    (0, z.copy)(t), o(!0), i(!0)
  };
  return (0, l.jsx)(I.Tooltip, {
    forceOpen: u,
    text: n ? a : s,
    children: e => {
      let {
        onMouseEnter: s,
        onMouseLeave: a,
        ...r
      } = e;
      return (0, l.jsx)(I.Clickable, {
        ...r,
        onMouseEnter: () => {
          n && i(!1), "function" == typeof s && s()
        },
        onMouseLeave: () => {
          o(!1), "function" == typeof a && a()
        },
        onClick: d,
        children: (0, l.jsx)("div", {
          className: ei.copiableContainer,
          children: t
        })
      })
    }
  })
}
let em = e => {
  let {
    description: t,
    detail: s
  } = e;
  return (0, l.jsx)("li", {
    className: ei.guildProductDetail,
    children: (0, l.jsxs)(j.default, {
      justify: j.default.Justify.BETWEEN,
      children: [(0, l.jsx)("div", {
        children: t
      }), (0, l.jsx)("div", {
        children: s
      })]
    })
  })
};

function ef(e) {
  let {
    guildId: t,
    guildProductListingId: s
  } = e, a = (0, h.useFetchGuildProductListing)(t, s, {
    requireCurrentGuild: !1
  }), n = (0, A.useProductType)(a), i = (0, _.useStateFromStores)([U.default], () => U.default.getGuild(t)), u = (null == a ? void 0 : a.role_id) != null && (null == a ? void 0 : a.attachments_count) === 0 ? en.default.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : n, o = r.useCallback(async () => {
    (null == i ? void 0 : i.hasFeature(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, L.default)(et.Routes.GUILD_PRODUCT(t, s)) : await (0, L.default)(et.Routes.CHANNEL(t)), (0, S.popLayer)()
  }, [i, t, s]);
  return (0, l.jsxs)(l.Fragment, {
    children: [null != u && (0, l.jsx)(em, {
      description: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
      detail: u
    }), null != i && (0, l.jsx)(em, {
      description: en.default.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
      detail: (0, l.jsx)(k.default, {
        onClick: o,
        children: i.name
      })
    })]
  })
}

function eE(e) {
  var t, s;
  let {
    guildId: a,
    guildProductListingId: n
  } = e, i = (0, h.useFetchGuildProductListing)(a, n, {
    requireCurrentGuild: !1
  }), r = (0, _.useStateFromStores)([T.default], () => T.default.getGuildProductFetchState(n) === T.FetchState.FETCHING), u = null == i ? void 0 : i.role_id, o = (0, _.useStateFromStores)([U.default], () => null != u ? U.default.getRole(a, u) : void 0, [a, u]), d = (null !== (s = null == i ? void 0 : null === (t = i.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0, c = null != o;
  return r ? (0, l.jsx)("div", {
    className: ei.guildProductBenefits,
    children: (0, l.jsx)(I.Spinner, {})
  }) : null != i && (d || c) ? (0, l.jsxs)("div", {
    className: ei.guildProductBenefits,
    children: [d && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(I.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ei.guildProductBenefitLabel,
        children: en.default.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
      }), (0, l.jsx)(R.default, {
        guildId: a,
        productId: i.id
      })]
    }), c && (0, l.jsxs)(l.Fragment, {
      children: [d && (0, l.jsx)("div", {
        className: ei.divider
      }), (0, l.jsx)(I.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: ei.guildProductBenefitLabel,
        children: en.default.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
      }), (0, l.jsx)(y.default, {
        role: o
      })]
    })]
  }) : null
}
class e_ extends(n = r.PureComponent) {
  get daysSincePurchase() {
    let {
      payment: e
    } = this.props, t = null != e.sku ? e.sku.releaseDate : null, s = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
    return m()().diff(s, "days")
  }
  get isPremium() {
    let {
      payment: e
    } = this.props;
    return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift
  }
  get typeString() {
    let {
      payment: {
        paymentSource: e
      }
    } = this.props;
    return e instanceof b.PaypalSourceRecord ? w.default.Types.PAYPAL : e instanceof b.CreditCardSourceRecord ? w.default.getType(e.brand) : w.default.Types.UNKNOWN
  }
  validateRefundRules() {
    return this.refundRules.filter(e => {
      let {
        canRefund: t
      } = e;
      return !t()
    }).map(e => {
      let {
        rule: t
      } = e;
      return t
    })
  }
  renderStatus() {
    let {
      payment: e
    } = this.props;
    switch (e.status) {
      case et.PaymentStatusTypes.PENDING:
        return (0, l.jsx)("span", {
          className: ei.statusTagGrey,
          children: en.default.Messages.BILLING_TAG_PENDING
        });
      case et.PaymentStatusTypes.FAILED:
        return (0, l.jsx)("span", {
          className: ei.statusTagRed,
          children: en.default.Messages.BILLING_TAG_FAILED
        });
      case et.PaymentStatusTypes.REFUNDED:
        if (e.amountRefunded !== e.amount) return (0, l.jsx)("span", {
          className: ei.statusTagGreen,
          children: en.default.Messages.BILLING_TAG_PARTIALLY_REFUNDED
        });
        return (0, l.jsx)("span", {
          className: ei.statusTagGreen,
          children: en.default.Messages.BILLING_TAG_REFUNDED
        });
      case et.PaymentStatusTypes.REVERSED:
        return (0, l.jsx)("span", {
          className: ei.statusTagRed,
          children: en.default.Messages.BILLING_TAG_REVERSED
        });
      case et.PaymentStatusTypes.CANCELED:
        return (0, l.jsx)("span", {
          className: ei.statusTagRed,
          children: en.default.Messages.BILLING_TAG_CANCELED
        });
      default:
        return null
    }
  }
  renderPrice() {
    let {
      payment: e
    } = this.props, t = e.amount - e.amountRefunded;
    return (0, l.jsx)("span", {
      className: ei.price,
      children: (0, J.formatPrice)(t, e.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, l.jsx)("li", {
      className: ei.paymentDetail,
      children: (0, l.jsxs)("div", {
        className: ei.paymentInfo,
        children: [(0, l.jsx)("div", {
          children: en.default.Messages.BILLING_PAYMENT_ID
        }), (0, l.jsx)(ep, {
          value: e.id,
          copyText: en.default.Messages.BILLING_PAYMENT_ID_COPY,
          copyFeedbackText: en.default.Messages.BILLING_PAYMENT_ID_COPIED
        })]
      })
    })
  }
  renderPaymentBreakdown() {
    let {
      payment: e,
      locale: t,
      application: s
    } = this.props, {
      taxInclusive: a,
      tax: n,
      amount: i,
      amountRefunded: u,
      currency: d
    } = e, c = null == s ? void 0 : s.guildId;
    return (0, l.jsxs)("div", {
      className: o()(ei.paymentText, ei.paymentBreakdown),
      children: [null != e.paymentSource ? (0, l.jsx)(Q.default, {
        paymentSource: e.paymentSource,
        locale: t,
        descriptionClassName: ei.paymentText,
        showDefaultLabel: !0,
        showPaymentSourceIcon: !0
      }) : e.paymentGateway === ea.PaymentGateways.APPLE_PARTNER ? (0, l.jsx)(Q.default, {
        paymentSource: new b.AppleSourceRecord({}),
        locale: t,
        descriptionClassName: ei.paymentText,
        showDefaultLabel: !0,
        showPaymentSourceIcon: !0
      }) : null, (0, l.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !a && n > 0 ? (0, l.jsxs)(r.Fragment, {
          children: [(0, l.jsx)(ec, {
            description: e.description,
            cost: (0, J.formatPrice)(i - n, d)
          }), (0, l.jsx)(ec, {
            description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
            cost: (0, J.formatPrice)(n, d)
          })]
        }) : null, (0, l.jsx)(ec, {
          description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          cost: (0, J.formatPrice)(i, d)
        }), e.isGuildProductPurchase && null != c && null != e.sku && (0, l.jsx)(ef, {
          guildId: c,
          guildProductListingId: e.sku.id
        }), u > 0 && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(ec, {
            description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
            cost: (0, J.formatPrice)(u, d)
          }), (0, l.jsx)(ec, {
            description: en.default.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
            cost: (0, J.formatPrice)(i - u, d)
          })]
        })]
      })]
    })
  }
  renderInvoiceDownload() {
    let {
      payment: e
    } = this.props;
    return (0, l.jsx)(C.default, {
      payment: e
    })
  }
  renderRefundDetails() {
    let e;
    let {
      locale: t,
      payment: s
    } = this.props, a = this.validateRefundRules();
    if (a.includes("PAYMENT_GATEWAY") || a.includes("PAYMENT_STATUS") || a.includes("ALREADY_REFUNDED") || a.includes("SKU_STICKER_PACK") || a.includes("SUBSCRIPTION_TYPE") || a.includes("GUILD_PRODUCT")) return null;
    let n = 0 === a.length,
      i = er(t),
      u = this.isPremium ? 5 : 14;
    return e = a.includes("SKU_TYPE") ? en.default.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
      supportURL: i
    }) : n ? s.isPremiumSubscription || s.isPremiumGuildSubscription ? en.default.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
      dateLimit: u,
      supportURL: i
    }) : s.isGift ? en.default.Messages.BILLING_GIFT_REFUND_TEXT.format({
      dateLimit: u,
      supportURL: i
    }) : en.default.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
      dateLimit: u,
      playtimeLimit: 2,
      supportURL: i
    }) : s.isGift ? en.default.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
      dateLimit: u
    }) : s.isPremiumSubscription || s.isPremiumGuildSubscription ? en.default.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
      dateLimit: u
    }) : s.isCollectible ? en.default.Messages.BILLING_COLLECTIBLES_REFUND_TEXT_UNABLE : en.default.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
      dateLimit: u,
      playtimeLimit: 2
    }), this.isPremium && (0, $.userInRefundExperiment)() && (e = null), (0, l.jsxs)(r.Fragment, {
      children: [(0, l.jsx)(I.H, {
        className: ei.paymentHeader,
        children: en.default.Messages.BILLING_REFUND_HEADER
      }), (0, l.jsxs)("div", {
        className: ei.paymentText,
        children: [(0, l.jsx)("div", {
          children: e
        }), this.renderRefundActions(a)]
      })]
    })
  }
  renderRefundCriteria(e, t, s, a) {
    return (0, l.jsxs)("div", {
      className: ei.refundCriteria,
      children: [(0, l.jsx)(I.H, {
        className: ei.refundSubHeader,
        children: e
      }), (0, l.jsxs)("div", {
        className: ei.refundIconContainer,
        children: [(0, l.jsx)(t, {
          className: ei.refundCriteriaIcon
        }), null != s && (0, l.jsx)("div", {
          children: s
        })]
      })]
    }, a)
  }
  renderRefundActions(e) {
    var t;
    let {
      locale: a,
      payment: n
    } = this.props;
    if (e.includes("SKU_TYPE")) return null;
    let i = e.includes("PURCHASE_DATE") ? H.default : Y.default;
    if (!this.isPremium || !(0, $.userInRefundExperiment)()) return (0, l.jsxs)("div", {
      className: ei.refundActions,
      children: [(0, l.jsx)("div", {
        className: ei.refundRules,
        children: !n.isCollectible && this.renderRefundCriteria(en.default.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, i, en.default.Messages.BILLING_REFUND_PURCHASE_DATE.format({
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, l.jsx)(I.Anchor, {
        href: er(a),
        children: en.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    });
    let r = (null !== (t = n.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [ee.PremiumRefundDisqualificationReason.OTHER])[0],
      u = null != r || 0 !== e.length || n.isPurchasedExternally;
    return (0, l.jsxs)("div", {
      className: ei.refundActions,
      children: [(0, l.jsx)(I.Tooltip, {
        shouldShow: u,
        text: function(e) {
          switch (e) {
            case ee.PremiumRefundDisqualificationReason.ALREADY_REFUNDED_PREMIUM:
              return en.default.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
            case ee.PremiumRefundDisqualificationReason.ALREADY_REFUNDED_PREMIUM_GUILD:
              return en.default.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
            case ee.PremiumRefundDisqualificationReason.ENTITLEMENT_ALREADY_CONSUMED:
              return en.default.Messages.BILLING_REFUND_ALREADY_CONSUMED_REASON;
            default:
              return en.default.Messages.BILLING_REFUND_GENERIC_REASON
          }
        }(r),
        children: e => (0, l.jsx)(I.Button, {
          ...e,
          color: I.Button.Colors.PRIMARY,
          disabled: u,
          onClick: () => (0, I.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("69473")]).then(s.bind(s, "436022"));
            return t => (0, l.jsx)(e, {
              payment: n,
              reportProblemUrl: er(a),
              ...t
            })
          }),
          children: en.default.Messages.BILLING_REFUND_BUTTON_TEXT
        })
      }), (0, l.jsx)(I.Anchor, {
        href: er(a),
        children: en.default.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })]
    })
  }
  renderDescription() {
    let e, t;
    let {
      compactMode: s,
      payment: a,
      application: n,
      guild: i,
      stickerPack: u
    } = this.props, {
      expanded: o
    } = this.state, d = a.sku, p = a.subscription, f = null != a.paymentSource && et.PREPAID_PAYMENT_SOURCES.has(a.paymentSource.type);
    if (null != p && 0 !== p.items.length) {
      let s = [],
        a = null;
      if (p.type === et.SubscriptionTypes.PREMIUM) p.items.forEach(e => {
        let {
          planId: t,
          quantity: n
        } = e;
        (0, X.isPremiumBaseSubscriptionPlan)(t) ? (s.push(X.default.getDisplayName(t, !1, f)), a = (0, X.castPremiumSubscriptionAsSkuId)(es.SubscriptionPlanInfo[t].skuId)) : (s.push("".concat(n > 1 ? "".concat(n, "x ") : "").concat(X.default.getDisplayName(t, !1, f))), null == a && (a = (0, X.castPremiumSubscriptionAsSkuId)(es.SubscriptionPlanInfo[t].skuId)))
      });
      else if (p.type === et.SubscriptionTypes.GUILD) {
        let e = B.default.get(p.items[0].planId);
        c()(null != e, "Guild subscription plan should already have been loaded");
        let t = e.interval === es.SubscriptionIntervalTypes.YEAR ? en.default.Messages.YEARLY_GUILD_SUBSCRIPTION : en.default.Messages.MONTHLY_GUILD_SUBSCRIPTION;
        s.push(t.format({
          planName: e.name
        })), a = e.skuId
      } else if (p.type === et.SubscriptionTypes.APPLICATION) {
        let e = B.default.get(p.items[0].planId);
        c()(null != e, "Application subscription plan should already have been loaded"), null != n ? s.push(en.default.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({
          tier: null == d ? void 0 : d.name
        })) : s.push(en.default.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION), a = e.skuId
      }
      t = s.join(", "), e = (0, l.jsx)(G.default, {
        className: ei.descriptionIcon,
        guildClassName: ei.guildDescriptionIcon,
        game: n,
        guild: i,
        size: G.default.Sizes.XSMALL,
        skuId: a
      })
    } else if (null != d) {
      var E;
      if (t = a.isGuildProductPurchase && a.isSoftDeletedProduct ? en.default.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : d.name, null != u) {
        let t = (0, x.getStickerPackPreviewSticker)(u);
        e = (0, l.jsx)(D.default, {
          disableAnimation: !o,
          isInteracting: o,
          sticker: t,
          className: ei.descriptionIcon,
          size: 24
        })
      } else e = (null === (E = a.sku) || void 0 === E ? void 0 : E.productLine) === et.SKUProductLines.COLLECTIBLES ? (0, l.jsx)(W.default, {
        className: ei.shopIcon
      }) : (0, l.jsx)(G.default, {
        className: ei.descriptionIcon,
        guildClassName: ei.guildDescriptionIcon,
        game: n,
        guild: i,
        size: G.default.Sizes.XSMALL,
        skuId: d.id
      })
    } else e = (0, l.jsx)(K.default, {
      className: ei.descriptionIcon
    }), t = a.description;
    let _ = (0, l.jsx)("div", {
        className: ei.date,
        children: (0, q.dateFormat)(m()(a.createdAt), "MM/DD/YYYY")
      }),
      S = a.isGift ? (0, l.jsx)(I.Tooltip, {
        text: en.default.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
        children: e => (0, l.jsx)(V.default, {
          className: ei.giftIcon,
          ...e
        })
      }) : null;
    return s ? (0, l.jsxs)("div", {
      className: ei.description,
      children: [e, (0, l.jsxs)("div", {
        children: [t, _]
      }), S]
    }) : (0, l.jsxs)(r.Fragment, {
      children: [_, (0, l.jsxs)("div", {
        className: ei.description,
        children: [e, (0, l.jsx)("div", {
          children: t
        }), S]
      })]
    })
  }
  renderGuildProductBenefits() {
    let {
      payment: e,
      application: t,
      locale: s
    } = this.props, a = null == t ? void 0 : t.guildId;
    return e.isGuildProductPurchase ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: ei.sectionDivider
      }), e.isSoftDeletedProduct ? (0, l.jsx)(M.default, {
        className: ei.warningBlock,
        buttonPosition: M.WarningBlockButtonPosition.RIGHT,
        notice: en.default.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
        ctaLabel: en.default.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
        onClick: () => (0, N.default)(er(s))
      }) : null != a && null != e.sku && (0, l.jsx)(eE, {
        guildId: a,
        guildProductListingId: e.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, l.jsx)(I.Clickable, {
      onClick: e => e.stopPropagation(),
      children: (0, l.jsxs)("div", {
        className: ei.expandedInfo,
        children: [(0, l.jsx)(I.H, {
          className: ei.paymentHeader,
          children: en.default.Messages.BILLING_PURCHASE_DETAILS_HEADER
        }), this.renderPaymentBreakdown(), this.renderGuildProductBenefits(), this.renderInvoiceDownload(), this.renderRefundDetails()]
      })
    })
  }
  render() {
    let {
      payment: e,
      className: t,
      compactMode: s
    } = this.props, {
      expanded: a
    } = this.state;
    return (0, l.jsx)(f.ListNavigatorItem, {
      id: e.id,
      children: e => (0, l.jsxs)(I.Clickable, {
        onClick: this.handleExpandInfo,
        className: o()(a ? ei.payment : ei.hoverablePayment, t, {
          [ei.compact]: s
        }),
        focusProps: {
          offset: 4
        },
        ...e,
        children: [(0, l.jsxs)(j.default, {
          className: ei.summaryInfo,
          align: j.default.Align.CENTER,
          children: [this.renderDescription(), (0, l.jsxs)("div", {
            className: ei.amount,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, l.jsx)(F.default, {
            className: ei.expand,
            direction: a ? F.default.Directions.UP : F.default.Directions.DOWN
          })]
        }), a ? this.renderExpandedSection() : null]
      })
    })
  }
  constructor(...e) {
    super(...e), el(this, "state", {
      expanded: !1
    }), el(this, "refundRules", [{
      rule: "PURCHASE_DATE",
      canRefund: () => {
        let {
          payment: e
        } = this.props, t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
        return this.daysSincePurchase <= t
      }
    }, {
      rule: "SKU_TYPE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || e.sku.type !== et.SKUTypes.CONSUMABLE
      }
    }, {
      rule: "ALREADY_REFUNDED",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return e.amountRefunded < e.amount
      }
    }, {
      rule: "PAYMENT_STATUS",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return !eo.includes(e.status)
      }
    }, {
      rule: "PAYMENT_GATEWAY",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.paymentGateway || !ed.includes(e.paymentGateway)
      }
    }, {
      rule: "SKU_STICKER_PACK",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, Z.hasFlag)(e.sku.flags, et.SKUFlags.STICKER_PACK)
      }
    }, {
      rule: "SUBSCRIPTION_TYPE",
      canRefund: () => {
        var e, t;
        let {
          payment: s
        } = this.props;
        return (null === (e = s.subscription) || void 0 === e ? void 0 : e.type) !== et.SubscriptionTypes.GUILD && (null === (t = s.subscription) || void 0 === t ? void 0 : t.type) !== et.SubscriptionTypes.APPLICATION
      }
    }, {
      rule: "GUILD_PRODUCT",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, Z.hasFlag)(e.sku.flags, E.SKUFlags.GUILD_PRODUCT)
      }
    }]), el(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function eI(e) {
  var t, s;
  let {
    payment: a,
    locale: n,
    compactMode: i,
    className: u
  } = e, o = null != a.sku && eu.includes(a.sku.type), d = null != a.sku && o ? a.sku.applicationId : null, c = null === (t = a.sku) || void 0 === t ? void 0 : t.applicationId, p = (null === (s = a.subscription) || void 0 === s ? void 0 : s.type) === et.SubscriptionTypes.APPLICATION, {
    applicationStatistics: m,
    gameApplication: f,
    paymentSources: E
  } = (0, _.useStateFromStoresObject)([v.default, O.default, P.default], () => {
    var e, t;
    return {
      applicationStatistics: null != d ? O.default.getCurrentUserStatisticsForApplication(d) : null,
      gameApplication: null !== (t = P.default.getApplication(null != d ? d : "")) && void 0 !== t ? t : null === (e = a.sku) || void 0 === e ? void 0 : e.application,
      paymentSources: v.default.paymentSources
    }
  }), I = (0, _.useStateFromStores)([P.default], () => null != c ? P.default.getApplication(c) : null);
  r.useEffect(() => {
    p && null != c && (0, g.fetchApplication)(c)
  }, [c, p]);
  let S = (0, _.useStateFromStores)([U.default], () => U.default.getGuild(null == f ? void 0 : f.guildId));
  return (0, l.jsx)(e_, {
    applicationStatistics: m,
    application: p ? I : o ? f : void 0,
    guild: S,
    stickerPack: null,
    paymentSources: E,
    locale: n,
    compactMode: i,
    className: u,
    payment: a
  })
}
el(e_, "defaultProps", {
  compactMode: !1
})