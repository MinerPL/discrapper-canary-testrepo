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
  u = s(925329),
  T = s(981632),
  I = s(314897),
  S = s(82142),
  N = s(246946),
  C = s(509545),
  m = s(55563),
  A = s(285952),
  g = s(259580),
  h = s(572004),
  O = s(669079),
  p = s(296848),
  R = s(474936),
  x = s(689938),
  M = s(105953);

function f(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = s, e;
}
class D extends a.PureComponent {
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
return (0, n.jsxs)(A.Z, {
  direction: A.Z.Direction.VERTICAL,
  className: M.giftCodeRow,
  children: [
    (0, n.jsx)(c.CopyInput, {
      className: M.codeText,
      value: (0, O.Nz)(t.code),
      text: this.copyButtonText,
      mode: s,
      supportsCopy: h.wS,
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
super(...e), f(this, '_copyModeTimeout', new l.V7()), f(this, 'state', {
  copyMode: c.CopyInputModes.DEFAULT
}), f(this, 'handleCopy', e => {
  let {
    giftCode: t,
    sku: s
  } = this.props;
  (0, O.dM)(t, s);
  try {
    (0, h.JG)(e), this.setState({
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
return (0, n.jsxs)(A.Z, {
  justify: A.Z.Justify.BETWEEN,
  align: A.Z.Align.CENTER,
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
            (0, n.jsxs)(A.Z, {
              align: A.Z.Align.CENTER,
              children: [
                null != d ? (0, n.jsx)(T.Z, {
                  giftStyle: d,
                  className: M.seasonalGiftBox,
                  shouldAnimate: this.state.isHovered
                }) : (0, n.jsx)(u.Z, {
                  game: t,
                  size: u.Z.Sizes.MEDIUM,
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
            (0, n.jsx)(g.Z, {
              direction: E ? g.Z.Directions.UP : g.Z.Directions.DOWN,
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
          s.map(e => (0, n.jsx)(D, {
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
super(...e), f(this, '_loadedAt', null), f(this, 'state', {
  isOpen: !1,
  isCreating: !1,
  isHovered: !1
}), f(this, 'handleGenerateGiftCode', async e => {
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
}), f(this, 'handleToggleOpen', () => {
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
  m.Z,
  N.Z,
  S.Z,
  E.Z,
  C.Z,
  I.default
], e => {
  let {
skuId: t,
subscriptionPlanId: s,
giftStyle: n
  } = e, a = m.Z.get(t);
  if (null == a)
throw Error('SKU was unavailable while rendering gift.');
  let i = S.Z.getForGifterSKUAndPlan(I.default.getId(), t, s).filter(e => !e.isClaimed).filter(e => e.giftStyle === n);
  return {
sku: a,
hideCodes: N.Z.enabled,
isFetching: S.Z.getUserGiftCodesFetchingForSKUAndPlan(t, s),
loadedAt: S.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, s),
application: E.Z.getApplication(a.applicationId),
subscriptionPlan: null != s ? (0, p.oE)(s) : null,
giftCodes: i
  };
})(P);