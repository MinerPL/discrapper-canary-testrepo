"use strict";
s.r(e), s("47120"), s("411104");
var l = s("735250"),
  a = s("470079"),
  i = s("803997"),
  n = s.n(i),
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
  E = s("832149"),
  v = s("745510"),
  x = s("703656"),
  A = s("763296"),
  R = s("82142"),
  _ = s("283595"),
  y = s("594174"),
  b = s("509545"),
  N = s("55563"),
  O = s("366695"),
  M = s("153124"),
  F = s("626135"),
  G = s("176354"),
  j = s("669079"),
  L = s("296848"),
  P = s("51144"),
  D = s("902653"),
  k = s("479446"),
  U = s("715627"),
  w = s("981632"),
  H = s("474936"),
  B = s("981631"),
  z = s("689938"),
  V = s("770421"),
  Y = s("167969"),
  K = s("557256");

function W(t, e, s) {
  return e in t ? Object.defineProperty(t, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = s, t
}
let Z = t => {
    let {
      openedGift: e
    } = t, {
      createMultipleConfettiAt: s
    } = a.useContext(v.ConfettiCannonContext);
    return a.useEffect(() => {
      e && s(window.innerWidth / 2, window.innerHeight / 4)
    }, [s, e]), null
  },
  q = t => {
    let {
      step: e,
      soundId: s
    } = t;
    return a.useEffect(() => {
      var t;
      if (e !== B.GiftCodeModalStates.CONFIRM) return;
      let l = A.default.getSoundById(s);
      (0, D.playGiftSound)(s, null !== (t = null == l ? void 0 : l.volume) && void 0 !== t ? t : 1)
    }, [e, s]), null
  };
class J extends a.Component {
  componentDidMount() {
    let {
      application: t,
      sku: e,
      customGiftMessage: s,
      giftCode: l,
      emojiName: a
    } = this.props;
    null == t && null != e && g.default.fetchApplication(e.applicationId);
    let i = null != s || null != l.giftStyle,
      n = (0, C.isCollectiblesGiftCode)(l),
      r = null != a ? G.default.getURL(a) : void 0;
    this.setState({
      isCustomGift: i,
      isCollectiblesGift: n,
      emojiURL: r,
      opened: n
    }), this.trackStepAnalytics()
  }
  get step() {
    let {
      libraryApplication: t,
      accepting: e,
      giftCode: s
    } = this.props, {
      error: l,
      accepted: a,
      opened: i,
      isCustomGift: n
    } = this.state;
    return (0, j.getStep)(t, s, l, a, e, i, n)
  }
  get buttonText() {
    return (0, j.getButtonText)(this.step, this.props.giftCode, this.state.isCustomGift)
  }
  get firstHeaderText() {
    let {
      isCustomGift: t,
      opened: e,
      accepted: s
    } = this.state, {
      giftCode: l,
      subscriptionPlan: a,
      collectiblesItemType: i
    } = this.props;
    if (t && this.step === B.GiftCodeModalStates.ERROR) return z.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
    if (t && !s) {
      if (!e) return z.default.Messages.GIFT_RECIPIENT_INFO.format({
        recipientDisplayName: P.default.getName(y.default.getCurrentUser())
      });
      {
        let t = y.default.getUser(l.userId),
          e = P.default.getName(t);
        return i === r.CollectiblesItemType.AVATAR_DECORATION ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_DECORATION.format({
          sender: e
        }) : i === r.CollectiblesItemType.PROFILE_EFFECT ? z.default.Messages.COLLECTIBLES_SENDER_GIFTED_YOU_EFFECT.format({
          sender: e
        }) : z.default.Messages.GIFT_SUBSCRIPTION_INFO.format({
          sender: e,
          timeInterval: (null == a ? void 0 : a.interval) === H.SubscriptionIntervalTypes.MONTH ? z.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH : z.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
        })
      }
    }
    return null == this.props.sku ? null : (0, j.getHeaderText)(this.step, this.props.giftCode, this.props.sku)
  }
  get secondHeaderText() {
    if (!this.state.isCustomGift || this.state.opened || this.state.accepted) return null;
    let t = y.default.getUser(this.props.giftCode.userId);
    return z.default.Messages.GIFT_SENDER_INFO.format({
      sender: P.default.getName(t)
    })
  }
  get bodyText() {
    let {
      sku: t,
      accepting: e,
      libraryApplication: s,
      subscriptionPlan: l
    } = this.props;
    if (null == t) return null;
    let {
      error: a,
      accepted: i,
      isCustomGift: n,
      opened: r
    } = this.state;
    return !r && n ? null : (0, j.getBodyText)({
      step: this.step,
      sku: t,
      libraryApplication: s,
      error: a,
      accepted: i,
      accepting: e,
      onGoToLibrary: this.handleGoToLibrary,
      subscriptionPlan: l
    })
  }
  get errorMessage() {
    let {
      libraryApplication: t,
      accepting: e
    } = this.props, {
      error: s,
      accepted: l
    } = this.state;
    return (0, j.getErrorMessage)(t, s, l, e, this.handleGoToLibrary)
  }
  get handleClick() {
    let {
      giftCode: t,
      onClose: e
    } = this.props;
    switch (this.step) {
      case B.GiftCodeModalStates.ERROR:
        return e;
      case B.GiftCodeModalStates.SUCCESS:
        if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
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
      giftCode: t,
      customGiftMessage: e,
      emojiName: s,
      soundId: l
    } = this.props, {
      isCustomGift: a
    } = this.state;
    F.default.track(B.AnalyticEvents.GIFT_ACCEPT_STEP, {
      to_step: this.step,
      has_custom_message: a,
      is_custom_message_edited: a && e !== z.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE,
      gift_style: t.giftStyle,
      gift_code: t.code,
      emoji_name: s,
      sound_id: l
    })
  }
  render() {
    let {
      application: t,
      accepting: e,
      onClose: s,
      giftCode: a,
      headerId: i,
      transitionState: r,
      useReducedMotion: o,
      onComplete: d,
      customGiftMessage: c,
      emojiName: f,
      soundId: p,
      isThemeDark: h
    } = this.props, m = y.default.getUser(a.userId), {
      isCustomGift: g,
      isCollectiblesGift: S,
      accepted: C,
      opened: I,
      emojiURL: E
    } = this.state, v = y.default.getCurrentUser(), x = this.step === B.GiftCodeModalStates.ERROR, A = (null == a ? void 0 : a.userId) != null && null != v && (null == v ? void 0 : v.id) != null && a.userId === v.id;
    switch (this.step) {
      case B.GiftCodeModalStates.ERROR:
        null == d || d(a, !1);
        break;
      case B.GiftCodeModalStates.SUCCESS:
        null == d || d(a, !0)
    }
    return (0, l.jsxs)("div", {
      ref: this.modalRef,
      children: [(0, l.jsxs)(u.ModalRoot, {
        transitionState: r,
        size: u.ModalSize.SMALL,
        className: V.modal,
        "aria-labelledby": i,
        children: [null != a.giftStyle && !g && !S && (0, l.jsx)(w.default, {
          defaultAnimationState: this.getDefaultAnimationStatus(),
          idleAnimationState: this.getIdleAnimationStatus(),
          giftStyle: a.giftStyle,
          className: V.seasonalGiftIcon
        }), (0, l.jsx)("div", {
          className: g ? void 0 : V.backSplash
        }), (0, l.jsxs)(u.ModalContent, {
          className: n()({
            [V.content]: !g,
            [V.contentCustomGift]: g
          }),
          children: [!S && (0, l.jsx)(u.ModalCloseButton, {
            onClick: s,
            className: V.closeButton
          }), !S && (null == a.giftStyle || g && C) && (0, l.jsx)(O.default, {
            size: O.default.Sizes.LARGE,
            game: t,
            skuId: a.skuId
          }), x && (0, l.jsx)("img", {
            alt: "",
            src: h ? Y : K
          }), (0, l.jsxs)(u.Heading, {
            id: i,
            className: n()({
              [V.customGiftHeader]: g && !C,
              [V.header]: !g || C
            }),
            variant: "heading-sm/semibold",
            children: [(0, l.jsx)("div", {
              className: n()({
                [V.customGiftHeaderText]: g
              }),
              children: this.firstHeaderText
            }), (0, l.jsx)("div", {
              children: this.secondHeaderText
            })]
          }), !(g && !C) && (0, l.jsx)(u.Text, {
            className: V.body,
            variant: "text-sm/normal",
            children: this.bodyText
          }), g && !S && null != a.giftStyle && !C && (0, l.jsx)(w.default, {
            defaultAnimationState: this.getDefaultAnimationStatus(),
            idleAnimationState: this.getIdleAnimationStatus(),
            className: V.giftAnimation,
            giftStyle: a.giftStyle
          }), this.state.opened && !x && (0, l.jsx)(T.default, {
            giftCode: a
          }), x && (0, l.jsx)(u.Text, {
            className: V.body,
            variant: "text-md/normal",
            children: this.errorMessage
          }), g && this.state.opened && !this.state.accepted && !x && null != c && "" !== c && !A && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(u.FormTitle, {
              children: z.default.Messages.GIFT_SENDER_INFO.format({
                sender: P.default.getName(m)
              })
            }), (0, l.jsx)(u.Heading, {
              id: i,
              className: V.customMessage,
              variant: "heading-sm/bold",
              children: c
            })]
          }), (0, l.jsx)(u.Button, {
            submitting: e,
            onClick: () => {
              this.trackStepAnalytics(), this.handleClick()
            },
            children: this.buttonText
          })]
        })]
      }), null != a.giftStyle && !o && this.step !== B.GiftCodeModalStates.ERROR && (0, l.jsx)(l.Fragment, {
        children: !C && !e && I && (null == f || null == E ? (0, l.jsx)(Z, {
          openedGift: I && !C && !e
        }) : (0, l.jsx)(U.default, {
          confettiTarget: this.modalRef.current,
          emojiURL: E
        }))
      }), !C && !e && I && null != p && (0, l.jsx)(q, {
        soundId: p,
        step: this.step
      })]
    })
  }
  constructor(...t) {
    super(...t), W(this, "state", {
      error: null,
      accepted: !1,
      opened: !1,
      isCustomGift: !1,
      isCollectiblesGift: !1,
      step: void 0,
      emojiURL: void 0
    }), W(this, "modalRef", a.createRef()), W(this, "handleOpen", () => {
      this.setState({
        opened: !0
      })
    }), W(this, "handleAccept", async () => {
      let {
        giftCode: t,
        channelContext: e,
        onAccept: s
      } = this.props;
      if (null == t) throw Error("GiftCode is null at acceptance.");
      try {
        await c.default.redeemGiftCode({
          code: t.code,
          options: {
            channelId: e
          }
        }), this.setState({
          accepted: !0
        }), null == s || s()
      } catch (t) {
        this.setState({
          error: t
        })
      }
    }), W(this, "handleGoToLibrary", () => {
      let {
        onClose: t,
        libraryApplication: e
      } = this.props;
      (0, x.transitionTo)(B.Routes.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != e ? e.id : null
        }
      }), t()
    }), W(this, "getDefaultAnimationStatus", () => {
      if (this.step === B.GiftCodeModalStates.OPEN) return k.AnimationState.IDLE;
      return k.AnimationState.ACTION
    }), W(this, "getIdleAnimationStatus", () => {
      if (this.step !== B.GiftCodeModalStates.OPEN) return k.AnimationState.LOOP
    })
  }
}
let Q = o.default.connectStores([_.default, N.default, S.default, R.default, b.default, p.default], t => {
  let {
    giftCode: e
  } = t, s = N.default.get(e.skuId), l = null != s ? S.default.getApplication(s.applicationId) : null, a = p.default.useReducedMotion;
  return {
    sku: s,
    libraryApplication: null != s && (null == e ? void 0 : e.entitlementBranches) != null ? (0, j.firstLibraryApplicationForGiftCode)(e.entitlementBranches, s, _.default) : null,
    application: l,
    subscriptionPlan: null != e.subscriptionPlanId ? (0, L.getOrFetchSubscriptionPlan)(e.subscriptionPlanId) : null,
    accepting: R.default.getIsAccepting(e.code),
    useReducedMotion: a
  }
})(J);
e.default = t => {
  var e;
  let {
    channelContext: s,
    code: a,
    customGiftMessage: i,
    emojiName: n,
    soundId: r,
    onClose: u,
    ...c
  } = t, p = (0, M.useUID)(), g = (0, o.useStateFromStores)([R.default], () => R.default.get(a)), S = (0, f.default)(), {
    analyticsLocations: C
  } = (0, m.default)(h.default.GIFT_CODE_MODAL), {
    product: T
  } = (0, I.useFetchCollectiblesProduct)(null == g ? void 0 : g.skuId);
  return null == g ? null : (0, l.jsx)(Q, {
    ...c,
    customGiftMessage: i,
    channelContext: s,
    giftCode: g,
    headerId: p,
    emojiName: n,
    soundId: r,
    analyticsLocations: C,
    isThemeDark: (0, d.isThemeDark)(S),
    onClose: u,
    collectiblesItemType: null == T ? void 0 : null === (e = T.items[0]) || void 0 === e ? void 0 : e.type,
    onAccept: null != T ? () => {
      u(), (0, E.default)({
        product: T,
        analyticsLocations: C
      })
    } : void 0
  })
}