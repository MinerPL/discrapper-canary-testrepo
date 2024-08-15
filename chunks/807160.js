t.d(s, {
  Z: function() {
return eE;
  }
}), t(47120), t(653041), t(789020);
var n, a, i, r = t(735250),
  o = t(470079),
  l = t(120356),
  c = t.n(l),
  d = t(512722),
  _ = t.n(d),
  E = t(913527),
  u = t.n(E),
  I = t(91192),
  T = t(314877),
  S = t(442837),
  N = t(481060),
  C = t(37234),
  m = t(782568),
  A = t(812206),
  g = t(593061),
  O = t(600164),
  h = t(925329),
  p = t(267101),
  R = t(240864),
  x = t(942833),
  M = t(400916),
  f = t(916001),
  D = t(539290),
  P = t(336197),
  L = t(690221),
  b = t(219929),
  Z = t(307643),
  v = t(378233),
  j = t(419922),
  B = t(46141),
  U = t(430824),
  G = t(853872),
  F = t(509545),
  y = t(230307),
  V = t(259580),
  Y = t(572004),
  w = t(55935),
  H = t(630388),
  k = t(74538),
  W = t(937615),
  K = t(244526),
  z = t(712358),
  Q = t(362786),
  X = t(981631),
  q = t(474936),
  J = t(231338),
  $ = t(689938),
  ee = t(495018);

function es(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[s] = t, e;
}
let et = e => 'https://'.concat(X.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
  en = [
X.epS.DURABLE_PRIMARY,
X.epS.DURABLE,
X.epS.CONSUMABLE
  ];
(i = n || (n = {})).PURCHASE_DATE = 'PURCHASE_DATE', i.SKU_TYPE = 'SKU_TYPE', i.ALREADY_REFUNDED = 'ALREADY_REFUNDED', i.PAYMENT_STATUS = 'PAYMENT_STATUS', i.PAYMENT_GATEWAY = 'PAYMENT_GATEWAY', i.SKU_STICKER_PACK = 'SKU_STICKER_PACK', i.SUBSCRIPTION_TYPE = 'SUBSCRIPTION_TYPE', i.GUILD_PRODUCT = 'GUILD_PRODUCT', i.COLLECTIBLE = 'COLLECTIBLE';
let ea = [
X.PyE.FAILED,
X.PyE.REVERSED,
X.PyE.CANCELED
  ],
  ei = [J.gg.APPLE],
  er = e => {
let {
  description: s,
  cost: t
} = e;
return (0, r.jsx)('li', {
  className: ee.paymentDetail,
  children: (0, r.jsxs)(O.Z, {
    justify: O.Z.Justify.BETWEEN,
    children: [
      (0, r.jsx)('div', {
        children: s
      }),
      (0, r.jsx)('div', {
        children: t
      })
    ]
  })
});
  };

function eo(e) {
  let {
value: s,
copyText: t,
copyFeedbackText: n
  } = e, [a, i] = o.useState(!1), [l, c] = o.useState(!1), d = () => {
(0, Y.JG)(s), c(!0), i(!0);
  };
  return (0, r.jsx)(N.Tooltip, {
forceOpen: l,
text: a ? n : t,
children: e => {
  let {
    onMouseEnter: t,
    onMouseLeave: n,
    ...o
  } = e;
  return (0, r.jsx)(N.Clickable, {
    ...o,
    onMouseEnter: () => {
      a && i(!1), 'function' == typeof t && t();
    },
    onMouseLeave: () => {
      c(!1), 'function' == typeof n && n();
    },
    onClick: d,
    children: (0, r.jsx)('div', {
      className: ee.copiableContainer,
      children: s
    })
  });
}
  });
}
let el = e => {
  let {
description: s,
detail: t
  } = e;
  return (0, r.jsx)('li', {
className: ee.guildProductDetail,
children: (0, r.jsxs)(O.Z, {
  justify: O.Z.Justify.BETWEEN,
  children: [
    (0, r.jsx)('div', {
      children: s
    }),
    (0, r.jsx)('div', {
      children: t
    })
  ]
})
  });
};

function ec(e) {
  let {
guildId: s,
guildProductListingId: t
  } = e, n = (0, p.hO)(s, t, {
requireCurrentGuild: !1
  }), a = (0, x.C)(n), i = (0, S.e7)([U.Z], () => U.Z.getGuild(s)), l = (null == n ? void 0 : n.role_id) != null && (null == n ? void 0 : n.attachments_count) === 0 ? $.Z.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : a, c = o.useCallback(async () => {
(null == i ? void 0 : i.hasFeature(X.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, P.Z)(X.Z5c.GUILD_PRODUCT(s, t)) : await (0, P.Z)(X.Z5c.CHANNEL(s)), (0, C.xf)();
  }, [
i,
s,
t
  ]);
  return (0, r.jsxs)(r.Fragment, {
children: [
  null != l && (0, r.jsx)(el, {
    description: $.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
    detail: l
  }),
  null != i && (0, r.jsx)(el, {
    description: $.Z.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
    detail: (0, r.jsx)(L.Z, {
      onClick: c,
      children: i.name
    })
  })
]
  });
}

function ed(e) {
  var s, t;
  let {
guildId: n,
guildProductListingId: a
  } = e, i = (0, p.hO)(n, a, {
requireCurrentGuild: !1
  }), o = (0, S.e7)([R.Z], () => R.Z.getGuildProductFetchState(a) === R.M.FETCHING), l = null == i ? void 0 : i.role_id, c = (0, S.e7)([U.Z], () => null != l ? U.Z.getRole(n, l) : void 0, [
n,
l
  ]), d = (null !== (t = null == i ? void 0 : null === (s = i.attachments) || void 0 === s ? void 0 : s.length) && void 0 !== t ? t : 0) > 0, _ = null != c;
  return o ? (0, r.jsx)('div', {
className: ee.guildProductBenefits,
children: (0, r.jsx)(N.Spinner, {})
  }) : null != i && (d || _) ? (0, r.jsxs)('div', {
className: ee.guildProductBenefits,
children: [
  d && (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)(N.Text, {
        variant: 'text-xs/semibold',
        color: 'header-secondary',
        className: ee.guildProductBenefitLabel,
        children: $.Z.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
      }),
      (0, r.jsx)(M.Z, {
        guildId: n,
        productId: i.id
      })
    ]
  }),
  _ && (0, r.jsxs)(r.Fragment, {
    children: [
      d && (0, r.jsx)('div', {
        className: ee.divider
      }),
      (0, r.jsx)(N.Text, {
        variant: 'text-xs/semibold',
        color: 'header-secondary',
        className: ee.guildProductBenefitLabel,
        children: $.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
      }),
      (0, r.jsx)(f.Z, {
        role: c
      })
    ]
  })
]
  }) : null;
}
class e_ extends(a = o.PureComponent) {
  get daysSincePurchase() {
let {
  payment: e
} = this.props, s = null != e.sku ? e.sku.releaseDate : null, t = null != s && s.isAfter(e.createdAt) ? s : e.createdAt;
return u()().diff(t, 'days');
  }
  get isPremium() {
let {
  payment: e
} = this.props;
return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
  }
  get typeString() {
let {
  payment: {
    paymentSource: e
  }
} = this.props;
return e instanceof B.qo ? b.ZP.Types.PAYPAL : e instanceof B.dm ? b.ZP.getType(e.brand) : b.ZP.Types.UNKNOWN;
  }
  validateRefundRules() {
return this.refundRules.filter(e => {
  let {
    canRefund: s
  } = e;
  return !s();
}).map(e => {
  let {
    rule: s
  } = e;
  return s;
});
  }
  renderStatus() {
let {
  payment: e
} = this.props;
switch (e.status) {
  case X.PyE.PENDING:
    return (0, r.jsx)('span', {
      className: ee.statusTagGrey,
      children: $.Z.Messages.BILLING_TAG_PENDING
    });
  case X.PyE.FAILED:
    return (0, r.jsx)('span', {
      className: ee.statusTagRed,
      children: $.Z.Messages.BILLING_TAG_FAILED
    });
  case X.PyE.REFUNDED:
    if (e.amountRefunded !== e.amount)
      return (0, r.jsx)('span', {
        className: ee.statusTagGreen,
        children: $.Z.Messages.BILLING_TAG_PARTIALLY_REFUNDED
      });
    return (0, r.jsx)('span', {
      className: ee.statusTagGreen,
      children: $.Z.Messages.BILLING_TAG_REFUNDED
    });
  case X.PyE.REVERSED:
    return (0, r.jsx)('span', {
      className: ee.statusTagRed,
      children: $.Z.Messages.BILLING_TAG_REVERSED
    });
  case X.PyE.CANCELED:
    return (0, r.jsx)('span', {
      className: ee.statusTagRed,
      children: $.Z.Messages.BILLING_TAG_CANCELED
    });
  default:
    return null;
}
  }
  renderPrice() {
let {
  payment: e
} = this.props, s = e.amount - e.amountRefunded;
return (0, r.jsx)('span', {
  className: ee.price,
  children: (0, W.T4)(s, e.currency)
});
  }
  renderPaymentIdField() {
let {
  payment: e
} = this.props;
return (0, r.jsx)('li', {
  className: ee.paymentDetail,
  children: (0, r.jsxs)('div', {
    className: ee.paymentInfo,
    children: [
      (0, r.jsx)('div', {
        children: $.Z.Messages.BILLING_PAYMENT_ID
      }),
      (0, r.jsx)(eo, {
        value: e.id,
        copyText: $.Z.Messages.BILLING_PAYMENT_ID_COPY,
        copyFeedbackText: $.Z.Messages.BILLING_PAYMENT_ID_COPIED
      })
    ]
  })
});
  }
  renderPaymentBreakdown() {
let {
  payment: e,
  locale: s,
  application: t
} = this.props, {
  taxInclusive: n,
  tax: a,
  amount: i,
  amountRefunded: l,
  currency: d
} = e, _ = null == t ? void 0 : t.guildId;
return (0, r.jsxs)('div', {
  className: c()(ee.paymentText, ee.paymentBreakdown),
  children: [
    null != e.paymentSource ? (0, r.jsx)(K.Z, {
      paymentSource: e.paymentSource,
      locale: s,
      descriptionClassName: ee.paymentText,
      showLabels: !0,
      showPaymentSourceIcon: !0
    }) : e.paymentGateway === J.gg.APPLE_PARTNER ? (0, r.jsx)(K.Z, {
      paymentSource: new B.$z({}),
      locale: s,
      descriptionClassName: ee.paymentText,
      showLabels: !0,
      showPaymentSourceIcon: !0
    }) : null,
    (0, r.jsxs)('ul', {
      children: [
        this.renderPaymentIdField(),
        !n && a > 0 ? (0, r.jsxs)(o.Fragment, {
          children: [
            (0, r.jsx)(er, {
              description: e.description,
              cost: (0, W.T4)(i - a, d)
            }),
            (0, r.jsx)(er, {
              description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
              cost: (0, W.T4)(a, d)
            })
          ]
        }) : null,
        (0, r.jsx)(er, {
          description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
          cost: (0, W.T4)(i, d)
        }),
        e.isGuildProductPurchase && null != _ && null != e.sku && (0, r.jsx)(ec, {
          guildId: _,
          guildProductListingId: e.sku.id
        }),
        l > 0 && (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(er, {
              description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
              cost: (0, W.T4)(l, d)
            }),
            (0, r.jsx)(er, {
              description: $.Z.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
              cost: (0, W.T4)(i - l, d)
            })
          ]
        })
      ]
    })
  ]
});
  }
  renderInvoiceDownload() {
let {
  payment: e
} = this.props;
return (0, r.jsx)(g.Z, {
  payment: e
});
  }
  renderRefundDetails() {
let e;
let {
  locale: s,
  payment: t
} = this.props, n = this.validateRefundRules();
if (n.includes('PAYMENT_GATEWAY') || n.includes('PAYMENT_STATUS') || n.includes('ALREADY_REFUNDED') || n.includes('SKU_STICKER_PACK') || n.includes('SUBSCRIPTION_TYPE') || n.includes('GUILD_PRODUCT'))
  return null;
let a = 0 === n.length,
  i = et(s),
  l = this.isPremium ? 5 : 14;
return e = n.includes('SKU_TYPE') ? $.Z.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
  supportURL: i
}) : a ? t.isPremiumSubscription || t.isPremiumGuildSubscription ? $.Z.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
  dateLimit: l,
  supportURL: i
}) : t.isGift ? $.Z.Messages.BILLING_GIFT_REFUND_TEXT.format({
  dateLimit: l,
  supportURL: i
}) : $.Z.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
  dateLimit: l,
  playtimeLimit: 2,
  supportURL: i
}) : t.isCollectible ? $.Z.Messages.BILLING_COLLECTIBLES_REFUND_TEXT_UNABLE : t.isGift ? $.Z.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
  dateLimit: l
}) : t.isPremiumSubscription || t.isPremiumGuildSubscription ? $.Z.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
  dateLimit: l
}) : $.Z.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
  dateLimit: l,
  playtimeLimit: 2
}), this.isPremium && (0, z.U)() && (e = null), (0, r.jsxs)(o.Fragment, {
  children: [
    (0, r.jsx)(N.H, {
      className: ee.paymentHeader,
      children: $.Z.Messages.BILLING_REFUND_HEADER
    }),
    (0, r.jsxs)('div', {
      className: ee.paymentText,
      children: [
        (0, r.jsx)('div', {
          children: e
        }),
        this.renderRefundActions(n)
      ]
    })
  ]
});
  }
  renderRefundCriteria(e, s, t, n) {
return (0, r.jsxs)('div', {
  className: ee.refundCriteria,
  children: [
    (0, r.jsx)(N.H, {
      className: ee.refundSubHeader,
      children: e
    }),
    (0, r.jsxs)('div', {
      className: ee.refundIconContainer,
      children: [
        (0, r.jsx)(s, {
          className: ee.refundCriteriaIcon,
          color: 'currentColor'
        }),
        null != t && (0, r.jsx)('div', {
          children: t
        })
      ]
    })
  ]
}, n);
  }
  renderRefundActions(e) {
var s;
let {
  locale: n,
  payment: a
} = this.props;
if (e.includes('SKU_TYPE'))
  return null;
let i = e.includes('PURCHASE_DATE') ? N.XSmallIcon : N.CheckmarkLargeIcon;
if (!this.isPremium || !(0, z.U)())
  return (0, r.jsxs)('div', {
    className: ee.refundActions,
    children: [
      (0, r.jsx)('div', {
        className: ee.refundRules,
        children: !a.isCollectible && this.renderRefundCriteria($.Z.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, i, $.Z.Messages.BILLING_REFUND_PURCHASE_DATE.format({
          daysSincePurchase: this.daysSincePurchase
        }))
      }),
      (0, r.jsx)(N.Anchor, {
        href: et(n),
        children: $.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })
    ]
  });
let o = (null !== (s = a.premiumRefundDisqualificationReasons) && void 0 !== s ? s : [Q.d$.OTHER])[0],
  l = null != o || 0 !== e.length || a.isPurchasedExternally;
return (0, r.jsxs)('div', {
  className: ee.refundActions,
  children: [
    (0, r.jsx)(N.Tooltip, {
      shouldShow: l,
      text: function(e) {
        switch (e) {
          case Q.d$.ALREADY_REFUNDED_PREMIUM:
            return $.Z.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
          case Q.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
            return $.Z.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
          case Q.d$.ENTITLEMENT_ALREADY_CONSUMED:
            return $.Z.Messages.BILLING_REFUND_ALREADY_CONSUMED_REASON;
          default:
            return $.Z.Messages.BILLING_REFUND_GENERIC_REASON;
        }
      }(o),
      children: e => (0, r.jsx)(N.Button, {
        ...e,
        color: N.Button.Colors.PRIMARY,
        disabled: l,
        onClick: () => (0, N.openModalLazy)(async () => {
          let {
            default: e
          } = await t.e('69473').then(t.bind(t, 436022));
          return s => (0, r.jsx)(e, {
            payment: a,
            reportProblemUrl: et(n),
            ...s
          });
        }),
        children: $.Z.Messages.BILLING_REFUND_BUTTON_TEXT
      })
    }),
    (0, r.jsx)(N.Anchor, {
      href: et(n),
      children: $.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
    })
  ]
});
  }
  renderDescription() {
let e, s;
let {
  compactMode: t,
  payment: n,
  application: a,
  guild: i,
  stickerPack: l
} = this.props, {
  expanded: c
} = this.state, d = n.sku, E = n.subscription, I = null != n.paymentSource && X.Uk1.has(n.paymentSource.type);
if (null != E && 0 !== E.items.length) {
  let t = [],
    n = null;
  if (E.type === X.NYc.PREMIUM)
    E.items.forEach(e => {
      let {
        planId: s,
        quantity: a
      } = e;
      (0, k.uZ)(s) ? (t.push(k.ZP.getDisplayName(s, !1, I)), n = (0, k.Wz)(q.GP[s].skuId)) : (t.push(''.concat(a > 1 ? ''.concat(a, 'x ') : '').concat(k.ZP.getDisplayName(s, !1, I))), null == n && (n = (0, k.Wz)(q.GP[s].skuId)));
    });
  else if (E.type === X.NYc.GUILD) {
    let e = F.Z.get(E.items[0].planId);
    _()(null != e, 'Guild subscription plan should already have been loaded');
    let s = e.interval === q.rV.YEAR ? $.Z.Messages.YEARLY_GUILD_SUBSCRIPTION : $.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION;
    t.push(s.format({
      planName: e.name
    })), n = e.skuId;
  } else if (E.type === X.NYc.APPLICATION) {
    let e = F.Z.get(E.items[0].planId);
    _()(null != e, 'Application subscription plan should already have been loaded'), null != a ? t.push($.Z.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({
      tier: null == d ? void 0 : d.name
    })) : t.push($.Z.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION), n = e.skuId;
  }
  s = t.join(', '), e = (0, r.jsx)(h.Z, {
    className: ee.descriptionIcon,
    guildClassName: ee.guildDescriptionIcon,
    game: a,
    guild: i,
    size: h.Z.Sizes.XSMALL,
    skuId: n
  });
} else if (null != d) {
  var T;
  if (s = n.isGuildProductPurchase && n.isSoftDeletedProduct ? $.Z.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : d.name, null != l) {
    let s = (0, v.Zt)(l);
    e = (0, r.jsx)(j.ZP, {
      disableAnimation: !c,
      isInteracting: c,
      sticker: s,
      className: ee.descriptionIcon,
      size: 24
    });
  } else
    e = (null === (T = n.sku) || void 0 === T ? void 0 : T.productLine) === X.POd.COLLECTIBLES ? (0, r.jsx)(N.ShopIcon, {
      size: 'custom',
      width: 23,
      height: 23,
      color: 'currentColor',
      className: ee.shopIcon
    }) : (0, r.jsx)(h.Z, {
      className: ee.descriptionIcon,
      guildClassName: ee.guildDescriptionIcon,
      game: a,
      guild: i,
      size: h.Z.Sizes.XSMALL,
      skuId: d.id
    });
} else
  e = (0, r.jsx)(N.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: ee.descriptionIcon
  }), s = n.description;
let S = (0, r.jsx)('div', {
    className: ee.date,
    children: (0, w.vc)(u()(n.createdAt), 'MM/DD/YYYY')
  }),
  C = n.isGift ? (0, r.jsx)(N.Tooltip, {
    text: $.Z.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
    children: e => (0, r.jsx)(N.GiftIcon, {
      size: 'md',
      color: 'currentColor',
      className: ee.giftIcon,
      ...e
    })
  }) : null;
return t ? (0, r.jsxs)('div', {
  className: ee.description,
  children: [
    e,
    (0, r.jsxs)('div', {
      children: [
        s,
        S
      ]
    }),
    C
  ]
}) : (0, r.jsxs)(o.Fragment, {
  children: [
    S,
    (0, r.jsxs)('div', {
      className: ee.description,
      children: [
        e,
        (0, r.jsx)('div', {
          children: s
        }),
        C
      ]
    })
  ]
});
  }
  renderGuildProductBenefits() {
let {
  payment: e,
  application: s,
  locale: t
} = this.props, n = null == s ? void 0 : s.guildId;
return e.isGuildProductPurchase ? (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: ee.sectionDivider
    }),
    e.isSoftDeletedProduct ? (0, r.jsx)(D.Z, {
      className: ee.warningBlock,
      buttonPosition: D.E.RIGHT,
      notice: $.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
      ctaLabel: $.Z.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
      onClick: () => (0, m.Z)(et(t))
    }) : null != n && null != e.sku && (0, r.jsx)(ed, {
      guildId: n,
      guildProductListingId: e.sku.id
    })
  ]
}) : null;
  }
  renderExpandedSection() {
return (0, r.jsx)(N.Clickable, {
  onClick: e => e.stopPropagation(),
  children: (0, r.jsxs)('div', {
    className: ee.expandedInfo,
    children: [
      (0, r.jsx)(N.H, {
        className: ee.paymentHeader,
        children: $.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER
      }),
      this.renderPaymentBreakdown(),
      this.renderGuildProductBenefits(),
      this.renderInvoiceDownload(),
      this.renderRefundDetails()
    ]
  })
});
  }
  render() {
let {
  payment: e,
  className: s,
  compactMode: t
} = this.props, {
  expanded: n
} = this.state;
return (0, r.jsx)(I.mh, {
  id: e.id,
  children: e => (0, r.jsxs)(N.Clickable, {
    onClick: this.handleExpandInfo,
    className: c()(n ? ee.payment : ee.hoverablePayment, s, {
      [ee.compact]: t
    }),
    focusProps: {
      offset: 4
    },
    ...e,
    children: [
      (0, r.jsxs)(O.Z, {
        className: ee.summaryInfo,
        align: O.Z.Align.CENTER,
        children: [
          this.renderDescription(),
          (0, r.jsxs)('div', {
            className: ee.amount,
            children: [
              this.renderStatus(),
              this.renderPrice()
            ]
          }),
          (0, r.jsx)(V.Z, {
            className: ee.expand,
            direction: n ? V.Z.Directions.UP : V.Z.Directions.DOWN
          })
        ]
      }),
      n ? this.renderExpandedSection() : null
    ]
  })
});
  }
  constructor(...e) {
super(...e), es(this, 'state', {
  expanded: !1
}), es(this, 'refundRules', [{
    rule: 'PURCHASE_DATE',
    canRefund: () => {
      let {
        payment: e
      } = this.props, s = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
      return this.daysSincePurchase <= s;
    }
  },
  {
    rule: 'SKU_TYPE',
    canRefund: () => {
      let {
        payment: e
      } = this.props;
      return null == e.sku || e.sku.type !== X.epS.CONSUMABLE;
    }
  },
  {
    rule: 'ALREADY_REFUNDED',
    canRefund: () => {
      let {
        payment: e
      } = this.props;
      return e.amountRefunded < e.amount;
    }
  },
  {
    rule: 'PAYMENT_STATUS',
    canRefund: () => {
      let {
        payment: e
      } = this.props;
      return !ea.includes(e.status);
    }
  },
  {
    rule: 'PAYMENT_GATEWAY',
    canRefund: () => {
      let {
        payment: e
      } = this.props;
      return null == e.paymentGateway || !ei.includes(e.paymentGateway);
    }
  },
  {
    rule: 'SKU_STICKER_PACK',
    canRefund: () => {
      let {
        payment: e
      } = this.props;
      return null == e.sku || !(0, H.yE)(e.sku.flags, X.l4R.STICKER_PACK);
    }
  },
  {
    rule: 'SUBSCRIPTION_TYPE',
    canRefund: () => {
      var e, s;
      let {
        payment: t
      } = this.props;
      return (null === (e = t.subscription) || void 0 === e ? void 0 : e.type) !== X.NYc.GUILD && (null === (s = t.subscription) || void 0 === s ? void 0 : s.type) !== X.NYc.APPLICATION;
    }
  },
  {
    rule: 'GUILD_PRODUCT',
    canRefund: () => {
      let {
        payment: e
      } = this.props;
      return null == e.sku || !(0, H.yE)(e.sku.flags, T.l.GUILD_PRODUCT);
    }
  },
  {
    rule: 'COLLECTIBLE',
    canRefund: () => {
      let {
        payment: e
      } = this.props;
      return !e.isCollectible;
    }
  }
]), es(this, 'handleExpandInfo', () => {
  this.setState({
    expanded: !this.state.expanded
  });
});
  }
}

function eE(e) {
  var s, t;
  let {
payment: n,
locale: a,
compactMode: i,
className: l
  } = e, c = null != n.sku && en.includes(n.sku.type), d = null != n.sku && c ? n.sku.applicationId : null, _ = null === (s = n.sku) || void 0 === s ? void 0 : s.applicationId, E = (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) === X.NYc.APPLICATION, {
applicationStatistics: u,
gameApplication: I,
paymentSources: T
  } = (0, S.cj)([
G.Z,
y.Z,
A.Z
  ], () => {
var e, s;
return {
  applicationStatistics: null != d ? y.Z.getCurrentUserStatisticsForApplication(d) : null,
  gameApplication: null !== (s = A.Z.getApplication(null != d ? d : '')) && void 0 !== s ? s : null === (e = n.sku) || void 0 === e ? void 0 : e.application,
  paymentSources: G.Z.paymentSources
};
  }), N = (0, S.e7)([A.Z], () => null != _ ? A.Z.getApplication(_) : null);
  o.useEffect(() => {
E && null != _ && (0, Z.UM)(_);
  }, [
_,
E
  ]);
  let C = (0, S.e7)([U.Z], () => U.Z.getGuild(null == I ? void 0 : I.guildId)),
m = c ? I : void 0;
  return (0, r.jsx)(e_, {
applicationStatistics: u,
application: E ? N : m,
guild: C,
stickerPack: null,
paymentSources: T,
locale: a,
compactMode: i,
className: l,
payment: n
  });
}
es(e_, 'defaultProps', {
  compactMode: !1
});