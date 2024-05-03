"use strict";
s.r(t), s("47120"), s("411104");
var a = s("735250"),
  i = s("470079"),
  l = s("120356"),
  n = s.n(l),
  r = s("979554"),
  o = s("442837"),
  d = s("780384"),
  u = s("481060"),
  c = s("570140"),
  f = s("533307"),
  p = s("410030"),
  h = s("607070"),
  m = s("100527"),
  I = s("906732"),
  E = s("728345"),
  S = s("812206"),
  g = s("884697"),
  C = s("583434"),
  T = s("551425"),
  _ = s("832149"),
  v = s("745510"),
  A = s("703656"),
  M = s("763296"),
  R = s("82142"),
  x = s("283595"),
  N = s("594174"),
  O = s("509545"),
  y = s("55563"),
  j = s("366695"),
  b = s("153124"),
  L = s("626135"),
  D = s("176354"),
  G = s("669079"),
  F = s("296848"),
  P = s("51144"),
  U = s("902653"),
  k = s("479446"),
  w = s("546650"),
  B = s("715627"),
  H = s("981632"),
  z = s("474936"),
  V = s("981631"),
  Y = s("689938"),
  K = s("1182"),
  W = s("167969"),
  Z = s("557256");

function q(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let J = e => {
    let {
      openedGift: t
    } = e, {
      createMultipleConfettiAt: s
    } = i.useContext(v.ConfettiCannonContext);
    return i.useEffect(() => {
      t && s(window.innerWidth / 2, window.innerHeight / 4)
    }, [s, t]), null
  },
  Q = e => {
    let {
      step: t,
      soundId: s
    } = e;
    return i.useEffect(() => {
      var e;
      if (t !== V.GiftCodeModalStates.CONFIRM) return;
      let a = M.default.getSoundById(s);
      (0, U.playGiftSound)(s, null !== (e = null == a ? void 0 : a.volume) && void 0 !== e ? e : 1)
    }, [t, s]), null
  };
class X extends i.Component {
  componentDidMount() {
    let {
      application: e,
      sku: t,
      customGiftMessage: s,
      giftCode: a,
      emojiName: i
    } = this.props;
    null == e && null != t && E.default.fetchApplication(t.applicationId);
    let l = null != s || null != a.giftStyle,
      n = (0, g.isCollectiblesGiftCode)(a),
      r = null != i ? D.default.getURL(i) : void 0;
    this.setState({
      isCustomGift: l,
      isCollectiblesGift: n,
      emojiURL: r,
      opened: n
    }), this.trackStepAnalytics()
  }
  get step() {
    let {
      libraryApplication: e,
      accepting: t,
      giftCode: s
    } = this.props, {
      error: a,
      accepted: i,
      opened: l,
      isCustomGift: n
    } = this.state;
    return (0, G.getStep)(e, s, a, i, t, l, n)
  }
  get buttonText() {
    return (0, G.getButtonText)(this.step, this.props.giftCode, this.state.isCustomGift)
  }
  get firstHeaderText() {
    let {
      isCustomGift: e,
      opened: t,
      accepted: s
    } = this.state, {
      giftCode: a,
      subscriptionPlan: i,
      collectiblesItemType: l
    } = this.props;
    if (e && this.step === V.GiftCodeModalStates.ERROR) return Y.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
    if (e && !s) {
      if (!t) return Y.default.Messages.GIFT_RECIPIENT_INFO.format({
        recipientDisplayName: P.default.getName(N.default.getCurrentUser())
      });
      {
        let e = N.default.getUser(a.userId),
          t = P.default.getName(e);
        return l === r.CollectiblesItemType.AVATAR_DECORATION ? Y.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_DECORATION.format({
          sender: t
        }) : l === r.CollectiblesItemType.PROFILE_EFFECT ? Y.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_EFFECT.format({
          sender: t
        }) : Y.default.Messages.GIFT_SUBSCRIPTION_INFO.format({
          sender: t,
          timeInterval: (null == i ? void 0 : i.interval) === z.SubscriptionIntervalTypes.MONTH ? Y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : Y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
        })
      }
    }
    return null == this.props.sku ? null : (0, G.getHeaderText)(this.step, this.props.giftCode, this.props.sku)
  }
  get secondHeaderText() {
    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
    let e = N.default.getUser(this.props.giftCode.userId);
    return Y.default.Messages.GIFT_SENDER_INFO.format({
      sender: P.default.getName(e)
    })
  }
  get bodyText() {
    let {
      sku: e,
      accepting: t,
      libraryApplication: s,
      subscriptionPlan: a
    } = this.props;
    if (null == e) return null;
    let {
      error: i,
      accepted: l,
      isCustomGift: n,
      opened: r
    } = this.state;
    return !r && n ? null : (0, G.getBodyText)({
      step: this.step,
      sku: e,
      libraryApplication: s,
      error: i,
      accepted: l,
      accepting: t,
      onGoToLibrary: this.handleGoToLibrary,
      subscriptionPlan: a
    })
  }
  get errorMessage() {
    let {
      libraryApplication: e,
      accepting: t
    } = this.props, {
      error: s,
      accepted: a
    } = this.state;
    return (0, G.getErrorMessage)(e, s, a, t, this.handleGoToLibrary)
  }
  get handleClick() {
    let {
      giftCode: e,
      onClose: t
    } = this.props;
    switch (this.step) {
      case V.GiftCodeModalStates.ERROR:
        return t;
      case V.GiftCodeModalStates.SUCCESS:
        if (__OVERLAY__ || null != e.subscriptionPlanId) return t;
        return this.handleGoToLibrary;
      case V.GiftCodeModalStates.OPEN:
        return this.handleOpen;
      case V.GiftCodeModalStates.CONFIRM:
      default:
        return this.handleAccept
    }
  }
  trackStepAnalytics() {
    let {
      giftCode: e,
      customGiftMessage: t,
      emojiName: s,
      soundId: a
    } = this.props, {
      isCustomGift: i
    } = this.state;
    L.default.track(V.AnalyticEvents.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      has_custom_message: i,
      is_custom_message_edited: i && t !== Y.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
      gift_style: e.giftStyle,
      gift_code: e.code,
      emoji_name: s,
      sound_id: a
    })
  }
  render() {
    let {
      application: e,
      accepting: t,
      onClose: s,
      giftCode: i,
      headerId: l,
      transitionState: r,
      useReducedMotion: o,
      onComplete: d,
      customGiftMessage: c,
      emojiName: f,
      soundId: p,
      isThemeDark: h
    } = this.props, m = N.default.getUser(i.userId), {
      isCustomGift: I,
      isCollectiblesGift: E,
      accepted: S,
      opened: g,
      emojiURL: C
    } = this.state, _ = N.default.getCurrentUser(), v = this.step === V.GiftCodeModalStates.ERROR, A = (null == i ? void 0 : i.userId) != null && null != _ && (null == _ ? void 0 : _.id) != null && i.userId === _.id;
    switch (this.step) {
      case V.GiftCodeModalStates.ERROR:
        null == d || d(i, !1);
        break;
      case V.GiftCodeModalStates.SUCCESS:
        null == d || d(i, !0)
    }
    return (0, a.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, a.jsxs)(u.ModalRoot, {
        transitionState: r,
        size: u.ModalSize.SMALL,
        className: K.modal,
        "aria-labelledby": l,
        children: [null != i.giftStyle && !I && !E && (0, a.jsx)(H.default, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: i.giftStyle,
          className: K.seasonalGiftIcon
        }), (0, a.jsx)("div", {
          className: I ? void 0 : K.backSplash
        }), (0, a.jsxs)(u.ModalContent, {
          className: n()({
            [K.content]: !I,
            [K.contentCustomGift]: I
          }),
          children: [!E && (0, a.jsx)(u.ModalCloseButton, {
            onClick: s,
            className: K.closeButton
          }), !E && (null == i.giftStyle || I && S) && (0, a.jsx)(j.default, {
            size: j.default.Sizes.LARGE,
            game: e,
            skuId: i.skuId
          }), v && (0, a.jsx)("img", {
            alt: "",
            src: h ? W : Z
          }), (0, a.jsxs)(u.Heading, {
            id: l,
            className: n()({
              [K.customGiftHeader]: I && !S,
              [K.header]: !I || S
            }),
            variant: "heading-sm/semibold",
            children: [(0, a.jsx)("div", {
              className: n()({
                [K.customGiftHeaderText]: I
              }),
              children: this.firstHeaderText
            }), (0, a.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(I && !S) && (0, a.jsx)(u.Text, {
            className: K.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), I && !E && null != i.giftStyle && !S && (0, a.jsx)(H.default, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: K.giftAnimation,
            giftStyle: i.giftStyle
          }), this.state.opened && !v && (0, a.jsx)(T.default, {
            giftCode: i
          }), v && (0, a.jsx)(u.Text, {
            className: K.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), I && this.state.opened && !this.state.accepted && !v && null != c && "" !== c && !A && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(u.FormTitle, {
              children: Y.default.Messages.GIFT_SENDER_INFO.format({
                sender: P.default.getName(m)
              })
            }), (0, a.jsx)(u.Heading, {
              id: l,
              className: K.customMessage,
              variant: "heading-sm/bold",
              children: c
            })]
          }), (0, a.jsx)(u.Button, {
            submitting: t,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            },
            children: this.buttonText
          })]
        })]
      }), null != i.giftStyle && !o && this.step !== V.GiftCodeModalStates.ERROR && (0, a.jsx)(a.Fragment, {
        children: !S && !t && g && (null == f || null == C ? (0, a.jsx)(J, {
          openedGift: g && !S && !t
        }) : (0, a.jsx)(B.default, {
          confettiTarget: this.modalRef.current,
          emojiURL: C
        }))
      }), !S && !t && g && null != p && (0, a.jsx)(Q, {
        soundId: p,
        step: this.step
      })]
    })
  }
  constructor(...e) {
    super(...e), q(this, "state", {
      error: null,
      accepted: !1,
      opened: !1,
      isCustomGift: !1,
      isCollectiblesGift: !1,
      step: void 0,
      emojiURL: void 0
    }), q(this, "modalRef", i.createRef()), q(this, "handleOpen", () => {
      this.setState({
        opened: !0
      })
    }), q(this, "handleAccept", async () => {
      let {
        giftCode: e,
        channelContext: t,
        onAccept: i,
        onClose: l
      } = this.props;
      if (null == e) throw Error("GiftCode is null at acceptance.");
      try {
        await f.default.redeemGiftCode({
          code: e.code,
          options: {
            channelId: t
          }
        }), w.default.isAprilMarketingDecoEntitlementCreated ? (c.default.dispatch({
          type: "PREMIUM_APRIL_MARKETING_DECO_ENTITLEMENT_RESET"
        }), null == i || i(), l(), !(0, u.hasAnyModalOpen)() && (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(s.bind(s, "731433"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })) : (this.setState({
          accepted: !0
        }), null == i || i())
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), q(this, "handleGoToLibrary", () => {
      let {
        onClose: e,
        libraryApplication: t
      } = this.props;
      (0, A.transitionTo)(V.Routes.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : null
        }
      }), e()
    }), q(this, "getDefaultAnimationStatus", () => {
      if (this.step === V.GiftCodeModalStates.OPEN) return k.AnimationState.IDLE;
      return k.AnimationState.ACTION
    }), q(this, "getIdleAnimationStatus", () => {
      if (this.step !== V.GiftCodeModalStates.OPEN) return k.AnimationState.LOOP
    })
  }
}
let $ = o.default.connectStores([x.default, y.default, S.default, R.default, O.default, h.default], e => {
  let {
    giftCode: t
  } = e, s = y.default.get(t.skuId), a = null != s ? S.default.getApplication(s.applicationId) : null, i = h.default.useReducedMotion;
  return {
    sku: s,
    libraryApplication: null != s && (null == t ? void 0 : t.entitlementBranches) != null ? (0, G.firstLibraryApplicationForGiftCode)(t.entitlementBranches, s, x.default) : null,
    application: a,
    subscriptionPlan: null != t.subscriptionPlanId ? (0, F.getOrFetchSubscriptionPlan)(t.subscriptionPlanId) : null,
    accepting: R.default.getIsAccepting(t.code),
    useReducedMotion: i
  }
})(X);
t.default = e => {
  var t;
  let {
    channelContext: s,
    code: i,
    customGiftMessage: l,
    emojiName: n,
    soundId: r,
    onClose: u,
    ...c
  } = e, f = (0, b.useUID)(), h = (0, o.useStateFromStores)([R.default], () => R.default.get(i)), E = (0, p.default)(), {
    analyticsLocations: S
  } = (0, I.default)(m.default.GIFT_CODE_MODAL), {
    product: g
  } = (0, C.useFetchCollectiblesProduct)(null == h ? void 0 : h.skuId);
  return null == h ? null : (0, a.jsx)($, {
    ...c,
    customGiftMessage: l,
    channelContext: s,
    giftCode: h,
    headerId: f,
    emojiName: n,
    soundId: r,
    analyticsLocations: S,
    isThemeDark: (0, d.isThemeDark)(E),
    onClose: u,
    collectiblesItemType: null == g ? void 0 : null === (t = g.items[0]) || void 0 === t ? void 0 : t.type,
    onAccept: null != g ? () => {
      u(), (0, _.default)({
        product: g,
        analyticsLocations: S
      })
    } : void 0
  })
}