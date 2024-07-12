s.d(t, {
  Z: function() {
return eE;
  }
}), s(47120), s(653041), s(789020);
var n, a, i, r = s(735250),
  o = s(470079),
  l = s(120356),
  c = s.n(l),
  d = s(512722),
  _ = s.n(d),
  E = s(913527),
  u = s.n(E),
  T = s(91192),
  I = s(314877),
  S = s(442837),
  N = s(481060),
  C = s(37234),
  m = s(782568),
  A = s(812206),
  h = s(593061),
  g = s(267101),
  O = s(240864),
  p = s(942833),
  R = s(400916),
  x = s(916001),
  M = s(539290),
  D = s(336197),
  f = s(307643),
  P = s(378233),
  L = s(419922),
  Z = s(46141),
  b = s(430824),
  v = s(853872),
  j = s(509545),
  B = s(230307),
  U = s(285952),
  G = s(366695),
  F = s(499150),
  y = s(912454),
  V = s(259580),
  Y = s(572004),
  w = s(55935),
  k = s(630388),
  H = s(74538),
  W = s(937615),
  K = s(244526),
  z = s(712358),
  Q = s(362786),
  X = s(981631),
  q = s(474936),
  J = s(231338),
  $ = s(689938),
  ee = s(450770);

function et(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
let es = e => 'https://'.concat(X.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
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
  description: t,
  cost: s
} = e;
return (0, r.jsx)('li', {
  className: ee.paymentDetail,
  children: (0, r.jsxs)(U.Z, {
    justify: U.Z.Justify.BETWEEN,
    children: [
      (0, r.jsx)('div', {
        children: t
      }),
      (0, r.jsx)('div', {
        children: s
      })
    ]
  })
});
  };

function eo(e) {
  let {
value: t,
copyText: s,
copyFeedbackText: n
  } = e, [a, i] = o.useState(!1), [l, c] = o.useState(!1), d = () => {
(0, Y.JG)(t), c(!0), i(!0);
  };
  return (0, r.jsx)(N.Tooltip, {
forceOpen: l,
text: a ? n : s,
children: e => {
  let {
    onMouseEnter: s,
    onMouseLeave: n,
    ...o
  } = e;
  return (0, r.jsx)(N.Clickable, {
    ...o,
    onMouseEnter: () => {
      a && i(!1), 'function' == typeof s && s();
    },
    onMouseLeave: () => {
      c(!1), 'function' == typeof n && n();
    },
    onClick: d,
    children: (0, r.jsx)('div', {
      className: ee.copiableContainer,
      children: t
    })
  });
}
  });
}
let el = e => {
  let {
description: t,
detail: s
  } = e;
  return (0, r.jsx)('li', {
className: ee.guildProductDetail,
children: (0, r.jsxs)(U.Z, {
  justify: U.Z.Justify.BETWEEN,
  children: [
    (0, r.jsx)('div', {
      children: t
    }),
    (0, r.jsx)('div', {
      children: s
    })
  ]
})
  });
};

function ec(e) {
  let {
guildId: t,
guildProductListingId: s
  } = e, n = (0, g.hO)(t, s, {
requireCurrentGuild: !1
  }), a = (0, p.C)(n), i = (0, S.e7)([b.Z], () => b.Z.getGuild(t)), l = (null == n ? void 0 : n.role_id) != null && (null == n ? void 0 : n.attachments_count) === 0 ? $.Z.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : a, c = o.useCallback(async () => {
(null == i ? void 0 : i.hasFeature(X.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, D.Z)(X.Z5c.GUILD_PRODUCT(t, s)) : await (0, D.Z)(X.Z5c.CHANNEL(t)), (0, C.xf)();
  }, [
i,
t,
s
  ]);
  return (0, r.jsxs)(r.Fragment, {
children: [
  null != l && (0, r.jsx)(el, {
    description: $.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
    detail: l
  }),
  null != i && (0, r.jsx)(el, {
    description: $.Z.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
    detail: (0, r.jsx)(F.Z, {
      onClick: c,
      children: i.name
    })
  })
]
  });
}

function ed(e) {
  var t, s;
  let {
guildId: n,
guildProductListingId: a
  } = e, i = (0, g.hO)(n, a, {
requireCurrentGuild: !1
  }), o = (0, S.e7)([O.Z], () => O.Z.getGuildProductFetchState(a) === O.M.FETCHING), l = null == i ? void 0 : i.role_id, c = (0, S.e7)([b.Z], () => null != l ? b.Z.getRole(n, l) : void 0, [
n,
l
  ]), d = (null !== (s = null == i ? void 0 : null === (t = i.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0, _ = null != c;
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
      (0, r.jsx)(R.Z, {
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
      (0, r.jsx)(x.Z, {
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
} = this.props, t = null != e.sku ? e.sku.releaseDate : null, s = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
return u()().diff(s, 'days');
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
return e instanceof Z.qo ? y.ZP.Types.PAYPAL : e instanceof Z.dm ? y.ZP.getType(e.brand) : y.ZP.Types.UNKNOWN;
  }
  validateRefundRules() {
return this.refundRules.filter(e => {
  let {
    canRefund: t
  } = e;
  return !t();
}).map(e => {
  let {
    rule: t
  } = e;
  return t;
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
} = this.props, t = e.amount - e.amountRefunded;
return (0, r.jsx)('span', {
  className: ee.price,
  children: (0, W.T4)(t, e.currency)
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
  locale: t,
  application: s
} = this.props, {
  taxInclusive: n,
  tax: a,
  amount: i,
  amountRefunded: l,
  currency: d
} = e, _ = null == s ? void 0 : s.guildId;
return (0, r.jsxs)('div', {
  className: c()(ee.paymentText, ee.paymentBreakdown),
  children: [
    null != e.paymentSource ? (0, r.jsx)(K.Z, {
      paymentSource: e.paymentSource,
      locale: t,
      descriptionClassName: ee.paymentText,
      showLabels: !0,
      showPaymentSourceIcon: !0
    }) : e.paymentGateway === J.gg.APPLE_PARTNER ? (0, r.jsx)(K.Z, {
      paymentSource: new Z.$z({}),
      locale: t,
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
return (0, r.jsx)(h.Z, {
  payment: e
});
  }
  renderRefundDetails() {
let e;
let {
  locale: t,
  payment: s
} = this.props, n = this.validateRefundRules();
if (n.includes('PAYMENT_GATEWAY') || n.includes('PAYMENT_STATUS') || n.includes('ALREADY_REFUNDED') || n.includes('SKU_STICKER_PACK') || n.includes('SUBSCRIPTION_TYPE') || n.includes('GUILD_PRODUCT'))
  return null;
let a = 0 === n.length,
  i = es(t),
  l = this.isPremium ? 5 : 14;
return e = n.includes('SKU_TYPE') ? $.Z.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({
  supportURL: i
}) : a ? s.isPremiumSubscription || s.isPremiumGuildSubscription ? $.Z.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
  dateLimit: l,
  supportURL: i
}) : s.isGift ? $.Z.Messages.BILLING_GIFT_REFUND_TEXT.format({
  dateLimit: l,
  supportURL: i
}) : $.Z.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
  dateLimit: l,
  playtimeLimit: 2,
  supportURL: i
}) : s.isCollectible ? $.Z.Messages.BILLING_COLLECTIBLES_REFUND_TEXT_UNABLE : s.isGift ? $.Z.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({
  dateLimit: l
}) : s.isPremiumSubscription || s.isPremiumGuildSubscription ? $.Z.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({
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
  renderRefundCriteria(e, t, s, n) {
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
        (0, r.jsx)(t, {
          className: ee.refundCriteriaIcon,
          color: 'currentColor'
        }),
        null != s && (0, r.jsx)('div', {
          children: s
        })
      ]
    })
  ]
}, n);
  }
  renderRefundActions(e) {
var t;
let {
  locale: n,
  payment: a
} = this.props;
if (e.includes('SKU_TYPE'))
  return null;
let i = e.includes('PURCHASE_DATE') ? N.CloseSmallIcon : N.CheckmarkLargeIcon;
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
        href: es(n),
        children: $.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
      })
    ]
  });
let o = (null !== (t = a.premiumRefundDisqualificationReasons) && void 0 !== t ? t : [Q.d$.OTHER])[0],
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
          } = await s.e('69473').then(s.bind(s, 436022));
          return t => (0, r.jsx)(e, {
            payment: a,
            reportProblemUrl: es(n),
            ...t
          });
        }),
        children: $.Z.Messages.BILLING_REFUND_BUTTON_TEXT
      })
    }),
    (0, r.jsx)(N.Anchor, {
      href: es(n),
      children: $.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
    })
  ]
});
  }
  renderDescription() {
let e, t;
let {
  compactMode: s,
  payment: n,
  application: a,
  guild: i,
  stickerPack: l
} = this.props, {
  expanded: c
} = this.state, d = n.sku, E = n.subscription, T = null != n.paymentSource && X.Uk1.has(n.paymentSource.type);
if (null != E && 0 !== E.items.length) {
  let s = [],
    n = null;
  if (E.type === X.NYc.PREMIUM)
    E.items.forEach(e => {
      let {
        planId: t,
        quantity: a
      } = e;
      (0, H.uZ)(t) ? (s.push(H.ZP.getDisplayName(t, !1, T)), n = (0, H.Wz)(q.GP[t].skuId)) : (s.push(''.concat(a > 1 ? ''.concat(a, 'x ') : '').concat(H.ZP.getDisplayName(t, !1, T))), null == n && (n = (0, H.Wz)(q.GP[t].skuId)));
    });
  else if (E.type === X.NYc.GUILD) {
    let e = j.Z.get(E.items[0].planId);
    _()(null != e, 'Guild subscription plan should already have been loaded');
    let t = e.interval === q.rV.YEAR ? $.Z.Messages.YEARLY_GUILD_SUBSCRIPTION : $.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION;
    s.push(t.format({
      planName: e.name
    })), n = e.skuId;
  } else if (E.type === X.NYc.APPLICATION) {
    let e = j.Z.get(E.items[0].planId);
    _()(null != e, 'Application subscription plan should already have been loaded'), null != a ? s.push($.Z.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({
      tier: null == d ? void 0 : d.name
    })) : s.push($.Z.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION), n = e.skuId;
  }
  t = s.join(', '), e = (0, r.jsx)(G.Z, {
    className: ee.descriptionIcon,
    guildClassName: ee.guildDescriptionIcon,
    game: a,
    guild: i,
    size: G.Z.Sizes.XSMALL,
    skuId: n
  });
} else if (null != d) {
  var I;
  if (t = n.isGuildProductPurchase && n.isSoftDeletedProduct ? $.Z.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : d.name, null != l) {
    let t = (0, P.Zt)(l);
    e = (0, r.jsx)(L.ZP, {
      disableAnimation: !c,
      isInteracting: c,
      sticker: t,
      className: ee.descriptionIcon,
      size: 24
    });
  } else
    e = (null === (I = n.sku) || void 0 === I ? void 0 : I.productLine) === X.POd.COLLECTIBLES ? (0, r.jsx)(N.ShopIcon, {
      size: 'custom',
      width: 23,
      height: 23,
      color: 'currentColor',
      className: ee.shopIcon
    }) : (0, r.jsx)(G.Z, {
      className: ee.descriptionIcon,
      guildClassName: ee.guildDescriptionIcon,
      game: a,
      guild: i,
      size: G.Z.Sizes.XSMALL,
      skuId: d.id
    });
} else
  e = (0, r.jsx)(N.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: ee.descriptionIcon
  }), t = n.description;
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
return s ? (0, r.jsxs)('div', {
  className: ee.description,
  children: [
    e,
    (0, r.jsxs)('div', {
      children: [
        t,
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
          children: t
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
  application: t,
  locale: s
} = this.props, n = null == t ? void 0 : t.guildId;
return e.isGuildProductPurchase ? (0, r.jsxs)(r.Fragment, {
  children: [
    (0, r.jsx)('div', {
      className: ee.sectionDivider
    }),
    e.isSoftDeletedProduct ? (0, r.jsx)(M.Z, {
      className: ee.warningBlock,
      buttonPosition: M.E.RIGHT,
      notice: $.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
      ctaLabel: $.Z.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
      onClick: () => (0, m.Z)(es(s))
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
  className: t,
  compactMode: s
} = this.props, {
  expanded: n
} = this.state;
return (0, r.jsx)(T.mh, {
  id: e.id,
  children: e => (0, r.jsxs)(N.Clickable, {
    onClick: this.handleExpandInfo,
    className: c()(n ? ee.payment : ee.hoverablePayment, t, {
      [ee.compact]: s
    }),
    focusProps: {
      offset: 4
    },
    ...e,
    children: [
      (0, r.jsxs)(U.Z, {
        className: ee.summaryInfo,
        align: U.Z.Align.CENTER,
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
super(...e), et(this, 'state', {
  expanded: !1
}), et(this, 'refundRules', [{
    rule: 'PURCHASE_DATE',
    canRefund: () => {
      let {
        payment: e
      } = this.props, t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
      return this.daysSincePurchase <= t;
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
      return null == e.sku || !(0, k.yE)(e.sku.flags, X.l4R.STICKER_PACK);
    }
  },
  {
    rule: 'SUBSCRIPTION_TYPE',
    canRefund: () => {
      var e, t;
      let {
        payment: s
      } = this.props;
      return (null === (e = s.subscription) || void 0 === e ? void 0 : e.type) !== X.NYc.GUILD && (null === (t = s.subscription) || void 0 === t ? void 0 : t.type) !== X.NYc.APPLICATION;
    }
  },
  {
    rule: 'GUILD_PRODUCT',
    canRefund: () => {
      let {
        payment: e
      } = this.props;
      return null == e.sku || !(0, k.yE)(e.sku.flags, I.l.GUILD_PRODUCT);
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
]), et(this, 'handleExpandInfo', () => {
  this.setState({
    expanded: !this.state.expanded
  });
});
  }
}

function eE(e) {
  var t, s;
  let {
payment: n,
locale: a,
compactMode: i,
className: l
  } = e, c = null != n.sku && en.includes(n.sku.type), d = null != n.sku && c ? n.sku.applicationId : null, _ = null === (t = n.sku) || void 0 === t ? void 0 : t.applicationId, E = (null === (s = n.subscription) || void 0 === s ? void 0 : s.type) === X.NYc.APPLICATION, {
applicationStatistics: u,
gameApplication: T,
paymentSources: I
  } = (0, S.cj)([
v.Z,
B.Z,
A.Z
  ], () => {
var e, t;
return {
  applicationStatistics: null != d ? B.Z.getCurrentUserStatisticsForApplication(d) : null,
  gameApplication: null !== (t = A.Z.getApplication(null != d ? d : '')) && void 0 !== t ? t : null === (e = n.sku) || void 0 === e ? void 0 : e.application,
  paymentSources: v.Z.paymentSources
};
  }), N = (0, S.e7)([A.Z], () => null != _ ? A.Z.getApplication(_) : null);
  o.useEffect(() => {
E && null != _ && (0, f.UM)(_);
  }, [
_,
E
  ]);
  let C = (0, S.e7)([b.Z], () => b.Z.getGuild(null == T ? void 0 : T.guildId)),
m = c ? T : void 0;
  return (0, r.jsx)(e_, {
applicationStatistics: u,
application: E ? N : m,
guild: C,
stickerPack: null,
paymentSources: I,
locale: a,
compactMode: i,
className: l,
payment: n
  });
}
et(e_, 'defaultProps', {
  compactMode: !1
});