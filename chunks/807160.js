t.d(s, {
    Z: function () {
        return ed;
    }
}),
    t(47120),
    t(653041),
    t(789020);
var n,
    a,
    i,
    r = t(735250),
    o = t(470079),
    l = t(120356),
    c = t.n(l),
    d = t(913527),
    _ = t.n(d),
    u = t(91192),
    E = t(314877),
    T = t(442837),
    S = t(481060),
    I = t(37234),
    N = t(782568),
    m = t(812206),
    C = t(593061),
    A = t(600164),
    g = t(925329),
    h = t(267101),
    O = t(240864),
    p = t(942833),
    R = t(400916),
    x = t(916001),
    f = t(539290),
    M = t(336197),
    D = t(690221),
    P = t(219929),
    L = t(307643),
    b = t(378233),
    Z = t(419922),
    v = t(46141),
    j = t(430824),
    B = t(853872),
    U = t(509545),
    G = t(230307),
    F = t(259580),
    y = t(572004),
    V = t(55935),
    Y = t(630388),
    w = t(74538),
    k = t(937615),
    H = t(244526),
    W = t(712358),
    K = t(362786),
    z = t(981631),
    Q = t(474936),
    X = t(231338),
    q = t(689938),
    J = t(495018);
function $(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
let ee = (e) => 'https://'.concat(z.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000118612'),
    es = [z.epS.DURABLE_PRIMARY, z.epS.DURABLE, z.epS.CONSUMABLE];
((i = n || (n = {})).PURCHASE_DATE = 'PURCHASE_DATE'), (i.SKU_TYPE = 'SKU_TYPE'), (i.ALREADY_REFUNDED = 'ALREADY_REFUNDED'), (i.PAYMENT_STATUS = 'PAYMENT_STATUS'), (i.PAYMENT_GATEWAY = 'PAYMENT_GATEWAY'), (i.SKU_STICKER_PACK = 'SKU_STICKER_PACK'), (i.SUBSCRIPTION_TYPE = 'SUBSCRIPTION_TYPE'), (i.GUILD_PRODUCT = 'GUILD_PRODUCT'), (i.COLLECTIBLE = 'COLLECTIBLE');
let et = [z.PyE.FAILED, z.PyE.REVERSED, z.PyE.CANCELED],
    en = [X.gg.APPLE],
    ea = (e) => {
        let { description: s, cost: t } = e;
        return (0, r.jsx)('li', {
            className: J.paymentDetail,
            children: (0, r.jsxs)(A.Z, {
                justify: A.Z.Justify.BETWEEN,
                children: [(0, r.jsx)('div', { children: s }), (0, r.jsx)('div', { children: t })]
            })
        });
    };
function ei(e) {
    let { value: s, copyText: t, copyFeedbackText: n } = e,
        [a, i] = o.useState(!1),
        [l, c] = o.useState(!1),
        d = () => {
            (0, y.JG)(s), c(!0), i(!0);
        };
    return (0, r.jsx)(S.Tooltip, {
        forceOpen: l,
        text: a ? n : t,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: n, ...o } = e;
            return (0, r.jsx)(S.Clickable, {
                ...o,
                onMouseEnter: () => {
                    a && i(!1), 'function' == typeof t && t();
                },
                onMouseLeave: () => {
                    c(!1), 'function' == typeof n && n();
                },
                onClick: d,
                children: (0, r.jsx)('div', {
                    className: J.copiableContainer,
                    children: s
                })
            });
        }
    });
}
let er = (e) => {
    let { description: s, detail: t } = e;
    return (0, r.jsx)('li', {
        className: J.guildProductDetail,
        children: (0, r.jsxs)(A.Z, {
            justify: A.Z.Justify.BETWEEN,
            children: [(0, r.jsx)('div', { children: s }), (0, r.jsx)('div', { children: t })]
        })
    });
};
function eo(e) {
    let { guildId: s, guildProductListingId: t } = e,
        n = (0, h.hO)(s, t, { requireCurrentGuild: !1 }),
        a = (0, p.C)(n),
        i = (0, T.e7)([j.Z], () => j.Z.getGuild(s)),
        l = (null == n ? void 0 : n.role_id) != null && (null == n ? void 0 : n.attachments_count) === 0 ? q.Z.Messages.GUILD_PRODUCT_BILLING_TYPE_PREMIUM_ROLE : a,
        c = o.useCallback(async () => {
            (null == i ? void 0 : i.hasFeature(z.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0 ? await (0, M.Z)(z.Z5c.GUILD_PRODUCT(s, t)) : await (0, M.Z)(z.Z5c.CHANNEL(s)), (0, I.xf)();
        }, [i, s, t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != l &&
                (0, r.jsx)(er, {
                    description: q.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_TYPE,
                    detail: l
                }),
            null != i &&
                (0, r.jsx)(er, {
                    description: q.Z.Messages.GUILD_PRODUCT_BILLING_SERVER_NAME,
                    detail: (0, r.jsx)(D.Z, {
                        onClick: c,
                        children: i.name
                    })
                })
        ]
    });
}
function el(e) {
    var s, t;
    let { guildId: n, guildProductListingId: a } = e,
        i = (0, h.hO)(n, a, { requireCurrentGuild: !1 }),
        o = (0, T.e7)([O.Z], () => O.Z.getGuildProductFetchState(a) === O.M.FETCHING),
        l = null == i ? void 0 : i.role_id,
        c = (0, T.e7)([j.Z], () => (null != l ? j.Z.getRole(n, l) : void 0), [n, l]),
        d = (null !== (t = null == i ? void 0 : null === (s = i.attachments) || void 0 === s ? void 0 : s.length) && void 0 !== t ? t : 0) > 0,
        _ = null != c;
    return o
        ? (0, r.jsx)('div', {
              className: J.guildProductBenefits,
              children: (0, r.jsx)(S.Spinner, {})
          })
        : null != i && (d || _)
          ? (0, r.jsxs)('div', {
                className: J.guildProductBenefits,
                children: [
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(S.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: J.guildProductBenefitLabel,
                                    children: q.Z.Messages.GUILD_PRODUCT_BILLING_ACCESS_DOWNLOADABLES
                                }),
                                (0, r.jsx)(R.Z, {
                                    guildId: n,
                                    productId: i.id
                                })
                            ]
                        }),
                    _ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                d && (0, r.jsx)('div', { className: J.divider }),
                                (0, r.jsx)(S.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'header-secondary',
                                    className: J.guildProductBenefitLabel,
                                    children: q.Z.Messages.GUILD_PRODUCT_CONFIRMATION_MODAL_ROLE_UNLOCKED
                                }),
                                (0, r.jsx)(x.Z, { role: c })
                            ]
                        })
                ]
            })
          : null;
}
class ec extends (a = o.PureComponent) {
    get daysSincePurchase() {
        let { payment: e } = this.props,
            s = null != e.sku ? e.sku.releaseDate : null,
            t = null != s && s.isAfter(e.createdAt) ? s : e.createdAt;
        return _()().diff(t, 'days');
    }
    get isPremium() {
        let { payment: e } = this.props;
        return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
    }
    get typeString() {
        let {
            payment: { paymentSource: e }
        } = this.props;
        return e instanceof v.qo ? P.ZP.Types.PAYPAL : e instanceof v.dm ? P.ZP.getType(e.brand) : P.ZP.Types.UNKNOWN;
    }
    validateRefundRules() {
        return this.refundRules
            .filter((e) => {
                let { canRefund: s } = e;
                return !s();
            })
            .map((e) => {
                let { rule: s } = e;
                return s;
            });
    }
    renderStatus() {
        let { payment: e } = this.props;
        switch (e.status) {
            case z.PyE.PENDING:
                return (0, r.jsx)('span', {
                    className: J.statusTagGrey,
                    children: q.Z.Messages.BILLING_TAG_PENDING
                });
            case z.PyE.FAILED:
                return (0, r.jsx)('span', {
                    className: J.statusTagRed,
                    children: q.Z.Messages.BILLING_TAG_FAILED
                });
            case z.PyE.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, r.jsx)('span', {
                        className: J.statusTagGreen,
                        children: q.Z.Messages.BILLING_TAG_PARTIALLY_REFUNDED
                    });
                return (0, r.jsx)('span', {
                    className: J.statusTagGreen,
                    children: q.Z.Messages.BILLING_TAG_REFUNDED
                });
            case z.PyE.REVERSED:
                return (0, r.jsx)('span', {
                    className: J.statusTagRed,
                    children: q.Z.Messages.BILLING_TAG_REVERSED
                });
            case z.PyE.CANCELED:
                return (0, r.jsx)('span', {
                    className: J.statusTagRed,
                    children: q.Z.Messages.BILLING_TAG_CANCELED
                });
            default:
                return null;
        }
    }
    renderPrice() {
        let { payment: e } = this.props,
            s = e.amount - e.amountRefunded;
        return (0, r.jsx)('span', {
            className: J.price,
            children: (0, k.T4)(s, e.currency)
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, r.jsx)('li', {
            className: J.paymentDetail,
            children: (0, r.jsxs)('div', {
                className: J.paymentInfo,
                children: [
                    (0, r.jsx)('div', { children: q.Z.Messages.BILLING_PAYMENT_ID }),
                    (0, r.jsx)(ei, {
                        value: e.id,
                        copyText: q.Z.Messages.BILLING_PAYMENT_ID_COPY,
                        copyFeedbackText: q.Z.Messages.BILLING_PAYMENT_ID_COPIED
                    })
                ]
            })
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: s, application: t } = this.props,
            { taxInclusive: n, tax: a, amount: i, amountRefunded: l, currency: d } = e,
            _ = null == t ? void 0 : t.guildId;
        return (0, r.jsxs)('div', {
            className: c()(J.paymentText, J.paymentBreakdown),
            children: [
                null != e.paymentSource
                    ? (0, r.jsx)(H.Z, {
                          paymentSource: e.paymentSource,
                          locale: s,
                          descriptionClassName: J.paymentText,
                          showLabels: !0,
                          showPaymentSourceIcon: !0
                      })
                    : e.paymentGateway === X.gg.APPLE_PARTNER
                      ? (0, r.jsx)(H.Z, {
                            paymentSource: new v.$z({}),
                            locale: s,
                            descriptionClassName: J.paymentText,
                            showLabels: !0,
                            showPaymentSourceIcon: !0
                        })
                      : null,
                (0, r.jsxs)('ul', {
                    children: [
                        this.renderPaymentIdField(),
                        !n && a > 0
                            ? (0, r.jsxs)(o.Fragment, {
                                  children: [
                                      (0, r.jsx)(ea, {
                                          description: e.description,
                                          cost: (0, k.T4)(i - a, d)
                                      }),
                                      (0, r.jsx)(ea, {
                                          description: q.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TAXES,
                                          cost: (0, k.T4)(a, d)
                                      })
                                  ]
                              })
                            : null,
                        (0, r.jsx)(ea, {
                            description: q.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                            cost: (0, k.T4)(i, d)
                        }),
                        e.isGuildProductPurchase &&
                            null != _ &&
                            null != e.sku &&
                            (0, r.jsx)(eo, {
                                guildId: _,
                                guildProductListingId: e.sku.id
                            }),
                        l > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(ea, {
                                        description: q.Z.Messages.BILLING_PAYMENT_BREAKDOWN_REFUNDED,
                                        cost: (0, k.T4)(l, d)
                                    }),
                                    (0, r.jsx)(ea, {
                                        description: q.Z.Messages.BILLING_PAYMENT_BREAKDOWN_NET,
                                        cost: (0, k.T4)(i - l, d)
                                    })
                                ]
                            })
                    ]
                })
            ]
        });
    }
    renderInvoiceDownload() {
        let { payment: e } = this.props;
        return (0, r.jsx)(C.Z, { payment: e });
    }
    renderRefundDetails() {
        let e;
        let { locale: s, payment: t } = this.props,
            n = this.validateRefundRules();
        if (n.includes('PAYMENT_GATEWAY') || n.includes('PAYMENT_STATUS') || n.includes('ALREADY_REFUNDED') || n.includes('SKU_STICKER_PACK') || n.includes('SUBSCRIPTION_TYPE') || n.includes('GUILD_PRODUCT')) return null;
        let a = 0 === n.length,
            i = ee(s),
            l = this.isPremium ? 5 : 14;
        return (
            (e = n.includes('SKU_TYPE')
                ? q.Z.Messages.BILLING_APPLICATION_CONSUMABLE_REFUND_TEXT_UNABLE.format({ supportURL: i })
                : a
                  ? t.isPremiumSubscription || t.isPremiumGuildSubscription
                      ? q.Z.Messages.BILLING_PREMIUM_REFUND_TEXT.format({
                            dateLimit: l,
                            supportURL: i
                        })
                      : t.isGift
                        ? q.Z.Messages.BILLING_GIFT_REFUND_TEXT.format({
                              dateLimit: l,
                              supportURL: i
                          })
                        : q.Z.Messages.BILLING_APPLICATION_REFUND_TEXT.format({
                              dateLimit: l,
                              playtimeLimit: 2,
                              supportURL: i
                          })
                  : t.isCollectible
                    ? q.Z.Messages.BILLING_COLLECTIBLES_REFUND_TEXT_UNABLE
                    : t.isGift
                      ? q.Z.Messages.BILLING_GIFT_REFUND_TEXT_UNABLE.format({ dateLimit: l })
                      : t.isPremiumSubscription || t.isPremiumGuildSubscription
                        ? q.Z.Messages.BILLING_PREMIUM_REFUND_TEXT_UNABLE.format({ dateLimit: l })
                        : q.Z.Messages.BILLING_APPLICATION_REFUND_TEXT_UNABLE.format({
                              dateLimit: l,
                              playtimeLimit: 2
                          })),
            this.isPremium && (0, W.U)() && (e = null),
            (0, r.jsxs)(o.Fragment, {
                children: [
                    (0, r.jsx)(S.H, {
                        className: J.paymentHeader,
                        children: q.Z.Messages.BILLING_REFUND_HEADER
                    }),
                    (0, r.jsxs)('div', {
                        className: J.paymentText,
                        children: [(0, r.jsx)('div', { children: e }), this.renderRefundActions(n)]
                    })
                ]
            })
        );
    }
    renderRefundCriteria(e, s, t, n) {
        return (0, r.jsxs)(
            'div',
            {
                className: J.refundCriteria,
                children: [
                    (0, r.jsx)(S.H, {
                        className: J.refundSubHeader,
                        children: e
                    }),
                    (0, r.jsxs)('div', {
                        className: J.refundIconContainer,
                        children: [
                            (0, r.jsx)(s, {
                                className: J.refundCriteriaIcon,
                                color: 'currentColor'
                            }),
                            null != t && (0, r.jsx)('div', { children: t })
                        ]
                    })
                ]
            },
            n
        );
    }
    renderRefundActions(e) {
        var s;
        let { locale: n, payment: a } = this.props;
        if (e.includes('SKU_TYPE')) return null;
        let i = e.includes('PURCHASE_DATE') ? S.XSmallIcon : S.CheckmarkLargeIcon;
        if (!this.isPremium || !(0, W.U)())
            return (0, r.jsxs)('div', {
                className: J.refundActions,
                children: [
                    (0, r.jsx)('div', {
                        className: J.refundRules,
                        children: !a.isCollectible && this.renderRefundCriteria(q.Z.Messages.BILLING_REFUND_PURCHASE_DATE_SUBHEADER, i, q.Z.Messages.BILLING_REFUND_PURCHASE_DATE.format({ daysSincePurchase: this.daysSincePurchase }))
                    }),
                    (0, r.jsx)(S.Anchor, {
                        href: ee(n),
                        children: q.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
                    })
                ]
            });
        let o = (null !== (s = a.premiumRefundDisqualificationReasons) && void 0 !== s ? s : [K.d$.OTHER])[0],
            l = null != o || 0 !== e.length || a.isPurchasedExternally;
        return (0, r.jsxs)('div', {
            className: J.refundActions,
            children: [
                (0, r.jsx)(S.Tooltip, {
                    shouldShow: l,
                    text: (function (e) {
                        switch (e) {
                            case K.d$.ALREADY_REFUNDED_PREMIUM:
                                return q.Z.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_REASON;
                            case K.d$.ALREADY_REFUNDED_PREMIUM_GUILD:
                                return q.Z.Messages.BILLING_REFUND_ALREADY_REFUNDED_PREMIUM_GUILD_REASON;
                            case K.d$.ENTITLEMENT_ALREADY_CONSUMED:
                                return q.Z.Messages.BILLING_REFUND_ALREADY_CONSUMED_REASON;
                            default:
                                return q.Z.Messages.BILLING_REFUND_GENERIC_REASON;
                        }
                    })(o),
                    children: (e) =>
                        (0, r.jsx)(S.Button, {
                            ...e,
                            color: S.Button.Colors.PRIMARY,
                            disabled: l,
                            onClick: () =>
                                (0, S.openModalLazy)(async () => {
                                    let { default: e } = await t.e('69473').then(t.bind(t, 436022));
                                    return (s) =>
                                        (0, r.jsx)(e, {
                                            payment: a,
                                            reportProblemUrl: ee(n),
                                            ...s
                                        });
                                }),
                            children: q.Z.Messages.BILLING_REFUND_BUTTON_TEXT
                        })
                }),
                (0, r.jsx)(S.Anchor, {
                    href: ee(n),
                    children: q.Z.Messages.BILLING_REFUND_REPORT_A_PROBLEM
                })
            ]
        });
    }
    renderDescription() {
        let e, s;
        let { compactMode: t, payment: n, application: a, guild: i, stickerPack: l, plan: c } = this.props,
            { expanded: d } = this.state,
            u = n.sku,
            E = n.subscription,
            T = null != n.paymentSource && z.Uk1.has(n.paymentSource.type);
        if (null != E && 0 !== E.items.length) {
            let t = [],
                o = null;
            if (E.type === z.NYc.PREMIUM)
                E.items.forEach((e) => {
                    let { planId: s, quantity: n } = e;
                    (0, w.uZ)(s) ? (t.push(w.ZP.getDisplayName(s, !1, T)), (o = (0, w.Wz)(Q.GP[s].skuId))) : (t.push(''.concat(n > 1 ? ''.concat(n, 'x ') : '').concat(w.ZP.getDisplayName(s, !1, T))), null == o && (o = (0, w.Wz)(Q.GP[s].skuId)));
                });
            else if (E.type === z.NYc.GUILD) {
                if (null != c) {
                    let e = c.interval === Q.rV.YEAR ? q.Z.Messages.YEARLY_GUILD_SUBSCRIPTION : q.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION;
                    t.push(e.format({ planName: c.name })), (o = c.skuId);
                }
            } else E.type === z.NYc.APPLICATION && (null != c && (o = c.skuId), null != a ? t.push(q.Z.Messages.MONTHLY_APPLICATION_SUBSCRIPTION_V2.format({ tier: null == u ? void 0 : u.name })) : t.push(q.Z.Messages.APPLICATION_SUBSCRIPTION_FROM_DELETED_APPLICATION));
            (s = 0 !== t.length ? t.join(', ') : n.description),
                (e = (0, r.jsx)(g.Z, {
                    className: J.descriptionIcon,
                    guildClassName: J.guildDescriptionIcon,
                    game: a,
                    guild: i,
                    size: g.Z.Sizes.XSMALL,
                    skuId: null != o ? o : null == u ? void 0 : u.id
                }));
        } else if (null != u) {
            var I;
            if (((s = n.isGuildProductPurchase && n.isSoftDeletedProduct ? q.Z.Messages.GUILD_PRODUCT_BILLING_DELISTED_PRODUCT : u.name), null != l)) {
                let s = (0, b.Zt)(l);
                e = (0, r.jsx)(Z.ZP, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: s,
                    className: J.descriptionIcon,
                    size: 24
                });
            } else
                e =
                    (null === (I = n.sku) || void 0 === I ? void 0 : I.productLine) === z.POd.COLLECTIBLES
                        ? (0, r.jsx)(S.ShopIcon, {
                              size: 'custom',
                              width: 23,
                              height: 23,
                              color: 'currentColor',
                              className: J.shopIcon
                          })
                        : (0, r.jsx)(g.Z, {
                              className: J.descriptionIcon,
                              guildClassName: J.guildDescriptionIcon,
                              game: a,
                              guild: i,
                              size: g.Z.Sizes.XSMALL,
                              skuId: u.id
                          });
        } else
            (e = (0, r.jsx)(S.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: J.descriptionIcon
            })),
                (s = n.description);
        let N = (0, r.jsx)('div', {
                className: J.date,
                children: (0, V.vc)(_()(n.createdAt), 'MM/DD/YYYY')
            }),
            m = n.isGift
                ? (0, r.jsx)(S.Tooltip, {
                      text: q.Z.Messages.BILLING_GIFT_PURCHASE_TOOLTIP,
                      children: (e) =>
                          (0, r.jsx)(S.GiftIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: J.giftIcon,
                              ...e
                          })
                  })
                : null;
        return t
            ? (0, r.jsxs)('div', {
                  className: J.description,
                  children: [
                      e,
                      (0, r.jsxs)('div', {
                          children: [s, N]
                      }),
                      m
                  ]
              })
            : (0, r.jsxs)(o.Fragment, {
                  children: [
                      N,
                      (0, r.jsxs)('div', {
                          className: J.description,
                          children: [e, (0, r.jsx)('div', { children: s }), m]
                      })
                  ]
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: s, locale: t } = this.props,
            n = null == s ? void 0 : s.guildId;
        return e.isGuildProductPurchase
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', { className: J.sectionDivider }),
                      e.isSoftDeletedProduct
                          ? (0, r.jsx)(f.Z, {
                                className: J.warningBlock,
                                buttonPosition: f.E.RIGHT,
                                notice: q.Z.Messages.GUILD_PRODUCT_BILLING_PRODUCT_UNAVAILABLE,
                                ctaLabel: q.Z.Messages.GUILD_PRODUCT_BILLING_CONTACT_SUPPORT,
                                onClick: () => (0, N.Z)(ee(t))
                            })
                          : null != n &&
                            null != e.sku &&
                            (0, r.jsx)(el, {
                                guildId: n,
                                guildProductListingId: e.sku.id
                            })
                  ]
              })
            : null;
    }
    renderExpandedSection() {
        return (0, r.jsx)(S.Clickable, {
            onClick: (e) => e.stopPropagation(),
            children: (0, r.jsxs)('div', {
                className: J.expandedInfo,
                children: [
                    (0, r.jsx)(S.H, {
                        className: J.paymentHeader,
                        children: q.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER
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
        let { payment: e, className: s, compactMode: t } = this.props,
            { expanded: n } = this.state;
        return (0, r.jsx)(u.mh, {
            id: e.id,
            children: (e) =>
                (0, r.jsxs)(S.Clickable, {
                    onClick: this.handleExpandInfo,
                    className: c()(n ? J.payment : J.hoverablePayment, s, { [J.compact]: t }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, r.jsxs)(A.Z, {
                            className: J.summaryInfo,
                            align: A.Z.Align.CENTER,
                            children: [
                                this.renderDescription(),
                                (0, r.jsxs)('div', {
                                    className: J.amount,
                                    children: [this.renderStatus(), this.renderPrice()]
                                }),
                                (0, r.jsx)(F.Z, {
                                    className: J.expand,
                                    direction: n ? F.Z.Directions.UP : F.Z.Directions.DOWN
                                })
                            ]
                        }),
                        n ? this.renderExpandedSection() : null
                    ]
                })
        });
    }
    constructor(...e) {
        super(...e),
            $(this, 'state', { expanded: !1 }),
            $(this, 'refundRules', [
                {
                    rule: 'PURCHASE_DATE',
                    canRefund: () => {
                        let { payment: e } = this.props,
                            s = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
                        return this.daysSincePurchase <= s;
                    }
                },
                {
                    rule: 'SKU_TYPE',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== z.epS.CONSUMABLE;
                    }
                },
                {
                    rule: 'ALREADY_REFUNDED',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return e.amountRefunded < e.amount;
                    }
                },
                {
                    rule: 'PAYMENT_STATUS',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return !et.includes(e.status);
                    }
                },
                {
                    rule: 'PAYMENT_GATEWAY',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !en.includes(e.paymentGateway);
                    }
                },
                {
                    rule: 'SKU_STICKER_PACK',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, Y.yE)(e.sku.flags, z.l4R.STICKER_PACK);
                    }
                },
                {
                    rule: 'SUBSCRIPTION_TYPE',
                    canRefund: () => {
                        var e, s;
                        let { payment: t } = this.props;
                        return (null === (e = t.subscription) || void 0 === e ? void 0 : e.type) !== z.NYc.GUILD && (null === (s = t.subscription) || void 0 === s ? void 0 : s.type) !== z.NYc.APPLICATION;
                    }
                },
                {
                    rule: 'GUILD_PRODUCT',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, Y.yE)(e.sku.flags, E.l.GUILD_PRODUCT);
                    }
                },
                {
                    rule: 'COLLECTIBLE',
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return !e.isCollectible;
                    }
                }
            ]),
            $(this, 'handleExpandInfo', () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function ed(e) {
    var s, t;
    let { payment: n, locale: a, compactMode: i, className: l } = e,
        c = null != n.sku && es.includes(n.sku.type),
        d = null != n.sku && c ? n.sku.applicationId : null,
        _ = null === (s = n.sku) || void 0 === s ? void 0 : s.applicationId,
        u = (null === (t = n.subscription) || void 0 === t ? void 0 : t.type) === z.NYc.APPLICATION,
        {
            applicationStatistics: E,
            gameApplication: S,
            paymentSources: I
        } = (0, T.cj)([B.Z, G.Z, m.Z], () => {
            var e, s;
            return {
                applicationStatistics: null != d ? G.Z.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication: null !== (s = m.Z.getApplication(null != d ? d : '')) && void 0 !== s ? s : null === (e = n.sku) || void 0 === e ? void 0 : e.application,
                paymentSources: B.Z.paymentSources
            };
        }),
        N = (0, T.e7)([m.Z], () => (null != _ ? m.Z.getApplication(_) : null));
    o.useEffect(() => {
        u && null != _ && (0, L.UM)(_);
    }, [_, u]);
    let C = (0, T.e7)([j.Z], () => j.Z.getGuild(null == S ? void 0 : S.guildId)),
        A = c ? S : void 0,
        g = n.subscription,
        h = (0, T.e7)([U.Z], () => (null != g && g.type !== z.NYc.PREMIUM ? U.Z.get(g.items[0].planId) : null));
    return (0, r.jsx)(ec, {
        applicationStatistics: E,
        application: u ? N : A,
        guild: C,
        stickerPack: null,
        paymentSources: I,
        locale: a,
        compactMode: i,
        className: l,
        payment: n,
        plan: h
    });
}
$(ec, 'defaultProps', { compactMode: !1 });
