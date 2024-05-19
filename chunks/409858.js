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
  c = s("533307"),
  f = s("410030"),
  p = s("607070"),
  h = s("100527"),
  m = s("906732"),
  g = s("728345"),
  S = s("812206"),
  C = s("884697"),
  I = s("583434"),
  T = s("551425"),
  v = s("832149"),
  E = s("745510"),
  x = s("703656"),
  A = s("763296"),
  R = s("82142"),
  _ = s("283595"),
  y = s("594174"),
  N = s("509545"),
  M = s("55563"),
  O = s("366695"),
  b = s("153124"),
  G = s("626135"),
  j = s("176354"),
  F = s("669079"),
  L = s("296848"),
  P = s("51144"),
  D = s("902653"),
  k = s("479446"),
  U = s("715627"),
  w = s("981632"),
  H = s("474936"),
  B = s("981631"),
  z = s("689938"),
  V = s("467850"),
  Y = s("167969"),
  W = s("557256");

function Z(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let q = e => {
    let {
      openedGift: t
    } = e, {
      createMultipleConfettiAt: s
    } = i.useContext(E.ConfettiCannonContext);
    return i.useEffect(() => {
      t && s(window.innerWidth / 2, window.innerHeight / 4)
    }, [s, t]), null
  },
  J = e => {
    let {
      step: t,
      soundId: s
    } = e;
    return i.useEffect(() => {
      var e;
      if (t !== B.GiftCodeModalStates.CONFIRM) return;
      let a = A.default.getSoundById(s);
      (0, D.playGiftSound)(s, null !== (e = null == a ? void 0 : a.volume) && void 0 !== e ? e : 1)
    }, [t, s]), null
  };
class K extends i.Component {
  componentDidMount() {
    let {
      application: e,
      sku: t,
      customGiftMessage: s,
      giftCode: a,
      emojiName: i
    } = this.props;
    null == e && null != t && g.default.fetchApplication(t.applicationId);
    let l = null != s || null != a.giftStyle,
      n = (0, C.isCollectiblesGiftCode)(a),
      r = null != i ? j.default.getURL(i) : void 0;
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
    return (0, F.getStep)(e, s, a, i, t, l, n)
  }
  get buttonText() {
    return (0, F.getButtonText)(this.step, this.props.giftCode, this.state.isCustomGift)
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
    if (e && this.step === B.GiftCodeModalStates.ERROR) return z.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
    if (e && !s) {
      if (!t) return z.default.Messages.GIFT_RECIPIENT_INFO.format({
        recipientDisplayName: P.default.getName(y.default.getCurrentUser())
      });
      {
        let e = y.default.getUser(a.userId),
          t = P.default.getName(e);
        return l === r.CollectiblesItemType.AVATAR_DECORATION ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_DECORATION.format({
          sender: t
        }) : l === r.CollectiblesItemType.PROFILE_EFFECT ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_EFFECT.format({
          sender: t
        }) : z.default.Messages.GIFT_SUBSCRIPTION_INFO.format({
          sender: t,
          timeInterval: (null == i ? void 0 : i.interval) === H.SubscriptionIntervalTypes.MONTH ? z.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : z.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
        })
      }
    }
    return null == this.props.sku ? null : (0, F.getHeaderText)(this.step, this.props.giftCode, this.props.sku)
  }
  get secondHeaderText() {
    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
    let e = y.default.getUser(this.props.giftCode.userId);
    return z.default.Messages.GIFT_SENDER_INFO.format({
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
    return !r && n ? null : (0, F.getBodyText)({
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
    return (0, F.getErrorMessage)(e, s, a, t, this.handleGoToLibrary)
  }
  get handleClick() {
    let {
      giftCode: e,
      onClose: t
    } = this.props;
    switch (this.step) {
      case B.GiftCodeModalStates.ERROR:
        return t;
      case B.GiftCodeModalStates.SUCCESS:
        if (__OVERLAY__ || null != e.subscriptionPlanId) return t;
        return this.handleGoToLibrary;
      case B.GiftCodeModalStates.OPEN:
        return this.handleOpen;
      case B.GiftCodeModalStates.CONFIRM:
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
    G.default.track(B.AnalyticEvents.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      has_custom_message: i,
      is_custom_message_edited: i && t !== z.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
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
    } = this.props, m = y.default.getUser(i.userId), {
      isCustomGift: g,
      isCollectiblesGift: S,
      accepted: C,
      opened: I,
      emojiURL: v
    } = this.state, E = y.default.getCurrentUser(), x = this.step === B.GiftCodeModalStates.ERROR, A = (null == i ? void 0 : i.userId) != null && null != E && (null == E ? void 0 : E.id) != null && i.userId === E.id;
    switch (this.step) {
      case B.GiftCodeModalStates.ERROR:
        null == d || d(i, !1);
        break;
      case B.GiftCodeModalStates.SUCCESS:
        null == d || d(i, !0)
    }
    return (0, a.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, a.jsxs)(u.ModalRoot, {
        transitionState: r,
        size: u.ModalSize.SMALL,
        className: V.modal,
        "aria-labelledby": l,
        children: [null != i.giftStyle && !g && !S && (0, a.jsx)(w.default, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: i.giftStyle,
          className: V.seasonalGiftIcon
        }), (0, a.jsx)("div", {
          className: g ? void 0 : V.backSplash
        }), (0, a.jsxs)(u.ModalContent, {
          className: n()({
            [V.content]: !g,
            [V.contentCustomGift]: g
          }),
          children: [!S && (0, a.jsx)(u.ModalCloseButton, {
            onClick: s,
            className: V.closeButton
          }), !S && (null == i.giftStyle || g && C) && (0, a.jsx)(O.default, {
            size: O.default.Sizes.LARGE,
            game: e,
            skuId: i.skuId
          }), x && (0, a.jsx)("img", {
            alt: "",
            src: h ? Y : W
          }), (0, a.jsxs)(u.Heading, {
            id: l,
            className: n()({
              [V.customGiftHeader]: g && !C,
              [V.header]: !g || C
            }),
            variant: "heading-sm/semibold",
            children: [(0, a.jsx)("div", {
              className: n()({
                [V.customGiftHeaderText]: g
              }),
              children: this.firstHeaderText
            }), (0, a.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(g && !C) && (0, a.jsx)(u.Text, {
            className: V.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), g && !S && null != i.giftStyle && !C && (0, a.jsx)(w.default, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: V.giftAnimation,
            giftStyle: i.giftStyle
          }), this.state.opened && !x && (0, a.jsx)(T.default, {
            giftCode: i
          }), x && (0, a.jsx)(u.Text, {
            className: V.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), g && this.state.opened && !this.state.accepted && !x && null != c && "" !== c && !A && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(u.FormTitle, {
              children: z.default.Messages.GIFT_SENDER_INFO.format({
                sender: P.default.getName(m)
              })
            }), (0, a.jsx)(u.Heading, {
              id: l,
              className: V.customMessage,
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
      }), null != i.giftStyle && !o && this.step !== B.GiftCodeModalStates.ERROR && (0, a.jsx)(a.Fragment, {
        children: !C && !t && I && (null == f || null == v ? (0, a.jsx)(q, {
          openedGift: I && !C && !t
        }) : (0, a.jsx)(U.default, {
          confettiTarget: this.modalRef.current,
          emojiURL: v
        }))
      }), !C && !t && I && null != p && (0, a.jsx)(J, {
        soundId: p,
        step: this.step
      })]
    })
  }
  constructor(...e) {
    super(...e), Z(this, "state", {
      error: null,
      accepted: !1,
      opened: !1,
      isCustomGift: !1,
      isCollectiblesGift: !1,
      step: void 0,
      emojiURL: void 0
    }), Z(this, "modalRef", i.createRef()), Z(this, "handleOpen", () => {
      this.setState({
        opened: !0
      })
    }), Z(this, "handleAccept", async () => {
      let {
        giftCode: e,
        channelContext: t,
        onAccept: s
      } = this.props;
      if (null == e) throw Error("GiftCode is null at acceptance.");
      try {
        await c.default.redeemGiftCode({
          code: e.code,
          options: {
            channelId: t
          }
        }), this.setState({
          accepted: !0
        }), null == s || s()
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), Z(this, "handleGoToLibrary", () => {
      let {
        onClose: e,
        libraryApplication: t
      } = this.props;
      (0, x.transitionTo)(B.Routes.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : null
        }
      }), e()
    }), Z(this, "getDefaultAnimationStatus", () => {
      if (this.step === B.GiftCodeModalStates.OPEN) return k.AnimationState.IDLE;
      return k.AnimationState.ACTION
    }), Z(this, "getIdleAnimationStatus", () => {
      if (this.step !== B.GiftCodeModalStates.OPEN) return k.AnimationState.LOOP
    })
  }
}
let Q = o.default.connectStores([_.default, M.default, S.default, R.default, N.default, p.default], e => {
  let {
    giftCode: t
  } = e, s = M.default.get(t.skuId), a = null != s ? S.default.getApplication(s.applicationId) : null, i = p.default.useReducedMotion;
  return {
    sku: s,
    libraryApplication: null != s && (null == t ? void 0 : t.entitlementBranches) != null ? (0, F.firstLibraryApplicationForGiftCode)(t.entitlementBranches, s, _.default) : null,
    application: a,
    subscriptionPlan: null != t.subscriptionPlanId ? (0, L.getOrFetchSubscriptionPlan)(t.subscriptionPlanId) : null,
    accepting: R.default.getIsAccepting(t.code),
    useReducedMotion: i
  }
})(K);
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
  } = e, p = (0, b.useUID)(), g = (0, o.useStateFromStores)([R.default], () => R.default.get(i)), S = (0, f.default)(), {
    analyticsLocations: C
  } = (0, m.default)(h.default.GIFT_CODE_MODAL), {
    product: T
  } = (0, I.useFetchCollectiblesProduct)(null == g ? void 0 : g.skuId);
  return null == g ? null : (0, a.jsx)(Q, {
    ...c,
    customGiftMessage: l,
    channelContext: s,
    giftCode: g,
    headerId: p,
    emojiName: n,
    soundId: r,
    analyticsLocations: C,
    isThemeDark: (0, d.isThemeDark)(S),
    onClose: u,
    collectiblesItemType: null == T ? void 0 : null === (t = T.items[0]) || void 0 === t ? void 0 : t.type,
    onAccept: null != T ? () => {
      u(), (0, v.default)({
        product: T,
        analyticsLocations: C
      })
    } : void 0
  })
}