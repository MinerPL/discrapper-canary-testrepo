s(47120), s(411104);
var n = s(735250),
  a = s(470079),
  i = s(913527),
  r = s.n(i),
  o = s(442837),
  l = s(846519),
  c = s(481060),
  d = s(533307),
  _ = s(189907),
  E = s(812206),
  u = s(981632),
  T = s(314897),
  I = s(82142),
  S = s(246946),
  N = s(509545),
  C = s(55563),
  m = s(285952),
  A = s(366695),
  h = s(259580),
  g = s(572004),
  O = s(669079),
  p = s(296848),
  R = s(474936),
  x = s(689938),
  M = s(105953);

function D(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
class f extends a.PureComponent {
  componentWillUnmount() {
this._copyModeTimeout.stop();
  }
  get copyButtonText() {
switch (this.state.copyMode) {
  case c.CopyInputModes.SUCCESS:
    return x.Z.Messages.BILLING_GIFT_COPIED;
  case c.CopyInputModes.ERROR:
    return x.Z.Messages.FAILED;
  default:
    return x.Z.Messages.COPY;
}
  }
  handleRevoke(e) {
d.Z.revokeGiftCode(e);
  }
  render() {
let {
  hideCode: e,
  giftCode: t
} = this.props, {
  copyMode: s
} = this.state;
return (0, n.jsxs)(m.Z, {
  direction: m.Z.Direction.VERTICAL,
  className: M.giftCodeRow,
  children: [
    (0, n.jsx)(c.CopyInput, {
      className: M.codeText,
      value: (0, O.Nz)(t.code),
      text: this.copyButtonText,
      mode: s,
      supportsCopy: g.wS,
      hideMessage: e ? x.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
      onCopy: this.handleCopy,
      buttonColor: c.ButtonColors.BRAND,
      buttonLook: c.ButtonLooks.FILLED
    }),
    (0, n.jsxs)('div', {
      className: M.subTextRow,
      children: [
        null != t.expiresAt ? (0, n.jsxs)(a.Fragment, {
          children: [
            x.Z.Messages.GIFT_INVENTORY_EXPIRES_IN.format({
              hours: t.expiresAt.diff(r()(), 'h')
            }),
            ' ',
            '\u2014\xA0'
          ]
        }) : null,
        (0, n.jsx)(c.Clickable, {
          tag: 'a',
          onClick: () => this.handleRevoke(t.code),
          children: x.Z.Messages.REVOKE
        })
      ]
    })
  ]
});
  }
  constructor(...e) {
super(...e), D(this, '_copyModeTimeout', new l.V7()), D(this, 'state', {
  copyMode: c.CopyInputModes.DEFAULT
}), D(this, 'handleCopy', e => {
  let {
    giftCode: t,
    sku: s
  } = this.props;
  (0, O.dM)(t, s);
  try {
    (0, g.JG)(e), this.setState({
      copyMode: c.CopyInputModes.SUCCESS
    });
  } catch (e) {
    this.setState({
      copyMode: c.CopyInputModes.ERROR
    });
  }
  this._copyModeTimeout.start(1000, () => {
    this.setState({
      copyMode: c.CopyInputModes.DEFAULT
    });
  });
});
  }
}
class P extends a.PureComponent {
  componentDidMount() {
this._loadedAt = Date.now();
  }
  renderTitle() {
let e;
let {
  sku: t,
  subscriptionPlan: s,
  giftCodeBatchId: a
} = this.props;
return e = a === R.m8 ? x.Z.Messages.BLACK_FRIDAY_PROMOTION_GIFT_INVENTORY_TITLE : a === R.rX && null != s ? (s.interval === R.rV.MONTH ? x.Z.Messages.STICKERS_GIFT_INVENTORY_TITLE_MONTH : x.Z.Messages.STICKERS_GIFT_INVENTORY_TITLE_YEAR).format({
  skuName: t.name,
  intervalCount: s.intervalCount
}) : null == s ? t.name : (s.interval === R.rV.MONTH ? x.Z.Messages.GIFT_INVENTORY_SUBSCRIPTION_MONTHS : x.Z.Messages.GIFT_INVENTORY_SUBSCRIPTION_YEARS).format({
  skuName: t.name,
  intervalCount: s.intervalCount
}), (0, n.jsx)('div', {
  className: M.gameName,
  children: e
});
  }
  renderGenerateGiftCodeRow() {
return (0, n.jsxs)(m.Z, {
  justify: m.Z.Justify.BETWEEN,
  align: m.Z.Align.CENTER,
  className: M.generateCodeRow,
  children: [
    (0, n.jsx)('div', {
      className: M.codeText,
      children: x.Z.Messages.GIFT_INVENTORY_GENERATE_HELP
    }),
    (0, n.jsx)(c.Button, {
      submitting: this.state.isCreating,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.BRAND,
      onClick: this.handleGenerateGiftCode,
      children: x.Z.Messages.GIFT_INVENTORY_GENERATE_LINK
    })
  ]
});
  }
  setIsHovered(e) {
this.setState({
  isHovered: e
});
  }
  render() {
let {
  entitlements: e,
  application: t,
  giftCodes: s,
  className: i,
  sku: r,
  isFetching: o,
  hideCodes: l,
  giftStyle: d
} = this.props, {
  isOpen: E
} = this.state;
return (0, n.jsxs)(_.Z, {
  className: i,
  children: [
    (0, n.jsx)(c.Clickable, {
      onClick: this.handleToggleOpen,
      className: M.card,
      onMouseEnter: () => this.setIsHovered(!0),
      onMouseLeave: () => this.setIsHovered(!1),
      children: (0, n.jsx)(_.Z.Header, {
        splashArtURL: t.getSplashURL(512),
        children: (0, n.jsxs)('div', {
          className: M.cardHeader,
          children: [
            (0, n.jsxs)(m.Z, {
              align: m.Z.Align.CENTER,
              children: [
                null != d ? (0, n.jsx)(u.Z, {
                  giftStyle: d,
                  className: M.seasonalGiftBox,
                  shouldAnimate: this.state.isHovered
                }) : (0, n.jsx)(A.Z, {
                  game: t,
                  size: A.Z.Sizes.MEDIUM,
                  skuId: r.id
                }),
                (0, n.jsxs)('div', {
                  className: M.headerText,
                  children: [
                    this.renderTitle(),
                    (0, n.jsx)('div', {
                      className: M.subTextHeader,
                      children: x.Z.Messages.GIFT_INVENTORY_COPIES.format({
                        copies: e.length
                      })
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)(h.Z, {
              direction: E ? h.Z.Directions.UP : h.Z.Directions.DOWN,
              className: M.expandIcon
            })
          ]
        })
      })
    }),
    E ? (0, n.jsx)(_.Z.Body, {
      children: o ? (0, n.jsx)(c.Spinner, {
        className: M.spinner
      }) : (0, n.jsxs)(a.Fragment, {
        children: [
          s.length < e.length ? this.renderGenerateGiftCodeRow() : null,
          s.map(e => (0, n.jsx)(f, {
            giftCode: e,
            sku: r,
            hideCode: l
          }, e.code))
        ]
      })
    }) : null
  ]
});
  }
  constructor(...e) {
super(...e), D(this, '_loadedAt', null), D(this, 'state', {
  isOpen: !1,
  isCreating: !1,
  isHovered: !1
}), D(this, 'handleGenerateGiftCode', async e => {
  e.stopPropagation();
  let {
    skuId: t,
    subscriptionPlanId: s,
    giftStyle: n
  } = this.props;
  this.setState({
    isCreating: !0
  }), await d.Z.createGiftCode(t, s, n), this.setState({
    isCreating: !1,
    isOpen: !0
  });
}), D(this, 'handleToggleOpen', () => {
  let {
    skuId: e,
    subscriptionPlanId: t,
    loadedAt: s
  } = this.props, n = !this.state.isOpen;
  (null == s || null == this._loadedAt || s < this._loadedAt) && n && d.Z.fetchUserGiftCodesForSKU(e, t), this.setState({
    isOpen: !this.state.isOpen
  });
});
  }
}
t.Z = o.ZP.connectStores([
  C.Z,
  S.Z,
  I.Z,
  E.Z,
  N.Z,
  T.default
], e => {
  let {
skuId: t,
subscriptionPlanId: s,
giftStyle: n
  } = e, a = C.Z.get(t);
  if (null == a)
throw Error('SKU was unavailable while rendering gift.');
  let i = I.Z.getForGifterSKUAndPlan(T.default.getId(), t, s).filter(e => !e.isClaimed).filter(e => e.giftStyle === n);
  return {
sku: a,
hideCodes: S.Z.enabled,
isFetching: I.Z.getUserGiftCodesFetchingForSKUAndPlan(t, s),
loadedAt: I.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, s),
application: E.Z.getApplication(a.applicationId),
subscriptionPlan: null != s ? (0, p.oE)(s) : null,
giftCodes: i
  };
})(P);