"use strict";
t.r(s), t("627341"), t("47120"), t("724458"), t("653041");
var a = t("735250"),
  r = t("470079"),
  l = t("803997"),
  i = t.n(l),
  n = t("512722"),
  o = t.n(n),
  u = t("392711"),
  c = t.n(u),
  d = t("278074"),
  m = t("442837"),
  f = t("780384"),
  p = t("481060"),
  _ = t("570140"),
  C = t("179360"),
  E = t("230711"),
  I = t("410030"),
  N = t("607070"),
  x = t("44315"),
  T = t("543241"),
  A = t("906411"),
  L = t("822179"),
  h = t("419922"),
  j = t("484459"),
  S = t("318661"),
  M = t("735336"),
  g = t("747074"),
  U = t("430824"),
  v = t("594174"),
  R = t("314884"),
  P = t("346656"),
  O = t("180828"),
  y = t("709586"),
  b = t("466111"),
  k = t("154921"),
  F = t("626135"),
  D = t("768581"),
  w = t("63063"),
  V = t("998502"),
  B = t("53900"),
  G = t("789155"),
  z = t("55610"),
  W = t("798769"),
  H = t("474936"),
  Y = t("981631"),
  K = t("228168"),
  Z = t("689938"),
  q = t("763582"),
  J = t("834982"),
  Q = t("912450"),
  X = t("703548"),
  $ = t("869333"),
  ee = t("652528"),
  es = t("874692"),
  et = t("391458"),
  ea = t("70967"),
  er = t("674264"),
  el = t("360088"),
  ei = t("304880");
let en = V.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  eo = {
    boostItemVisual: ee,
    emojiStickersVisual: es,
    screenShareItemVisual: el,
    uploadsMessagesItemVisual: et,
    uploadsMessagesItemVisualV2: ea,
    PL: er,
    TR: ei
  },
  eu = {
    boostItemVisual: J,
    emojiStickersVisual: Q,
    screenShareItemVisual: el,
    uploadsMessagesItemVisual: X,
    uploadsMessagesItemVisualV2: $,
    PL: er,
    TR: ei
  };

function ec() {
  let e = (0, I.default)();
  return (0, f.isThemeDark)(e) ? eu : eo
}

function ed(e) {
  let {
    description: s,
    onLearnMore: t,
    renderVisual: r
  } = e;
  return (0, a.jsxs)("div", {
    className: q.whatYouLoseItem,
    children: [(0, a.jsxs)("div", {
      className: q.whatYouLoseItemLeftColumn,
      children: [(0, a.jsx)(p.Text, {
        variant: "text-md/normal",
        children: s
      }), (0, a.jsx)(p.Button, {
        look: p.Button.Looks.LINK,
        color: p.Button.Colors.LINK,
        size: p.Button.Sizes.NONE,
        className: q.whatYouLoseItemLearnMore,
        onClick: t,
        children: Z.default.Messages.LEARN_MORE
      })]
    }), (0, a.jsx)("div", {
      className: q.whatYouLoseItemRightColumn,
      children: r()
    })]
  })
}

function em(e) {
  let {
    ...s
  } = e, t = (0, I.default)(), {
    profileTheme: l
  } = r.useContext(g.UserProfileContext), i = (0, x.useThemedColorValue)(Y.ThemeColor.INTERACTIVE_ACTIVE, null != l ? l : t);
  return (0, a.jsx)(b.default, {
    ...s,
    color: i.hex
  })
}

function ef(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: r
  } = e, l = (0, S.default)(s.id), i = (0, m.useStateFromStores)([N.default], () => N.default.useReducedMotion), n = t === H.PremiumTypes.TIER_1, o = (0, d.match)(null == l ? void 0 : l.premiumType).with(H.PremiumTypes.TIER_2, () => (0, a.jsxs)(g.default, {
    forceShowPremium: !0,
    user: s,
    profileType: K.UserProfileTypes.CANCEL_MODAL,
    className: q.profileCard,
    children: [(0, a.jsx)("div", {
      className: q.profileBanner,
      children: (0, a.jsx)(M.default, {
        displayProfile: l,
        user: s,
        allowEdit: !1,
        profileType: K.UserProfileTypes.CANCEL_MODAL
      })
    }), (0, a.jsx)(en, {
      className: q.profileAvatar,
      src: s.getAvatarURL(void 0, (0, p.getAvatarSize)(p.AvatarSizes.SIZE_56), !i),
      size: p.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsx)(g.default.Inner, {
      className: q.profileInner,
      children: (0, a.jsxs)("div", {
        className: q.profileUserInfo,
        children: [(0, a.jsx)(O.default, {
          className: q.profileNameTag,
          usernameClass: q.profileNameTagUsername,
          name: s.toString()
        }), (0, a.jsx)(em, {
          className: q.profilePremiumIcon
        })]
      })
    })]
  })).otherwise(() => (0, a.jsxs)("div", {
    className: q.profileCardTier1,
    children: [(0, a.jsx)(en, {
      className: q.profileAvatarTier1,
      src: s.getAvatarURL(void 0, (0, p.getAvatarSize)(p.AvatarSizes.SIZE_56), !i),
      size: p.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsxs)("div", {
      className: q.profileUserInfoTier1,
      children: [(0, a.jsx)(O.default, {
        className: q.profileNameTag,
        usernameClass: q.profileNameTagUsername,
        name: s.toString()
      }), (0, a.jsx)(b.default, {
        className: q.profilePremiumIcon
      })]
    })]
  }));
  return (0, a.jsx)(ed, {
    description: n ? Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
    onLearnMore: () => {
      r(), E.default.open(Y.UserSettingsSections.PROFILE_CUSTOMIZATION), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    },
    renderVisual: () => o
  }, "profile-item")
}

function ep(e) {
  let {
    premiumType: s
  } = e, t = (0, m.useStateFromStores)([N.default], () => N.default.useReducedMotion), r = (0, T.useFrequentlyUsedEmojis)(null).filter(e => e.type === A.EmojiTypes.GUILD && (e.animated || null != e.guildId)).slice(0, 3), l = (0, m.useStateFromStoresArray)([L.default], () => L.default.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)), i = ec().emojiStickersVisual, n = s === H.PremiumTypes.TIER_1;
  return (0, a.jsx)(ed, {
    description: n ? Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
    onLearnMore: () => {
      window.open(w.default.getArticleURL(Y.HelpdeskArticles.PREMIUM_DETAILS)), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != r && r.length > 0 || !n && null != l && l.length > 0 ? (0, a.jsxs)("div", {
      className: q.emojiStickersPersonalizedContainer,
      children: [r.map(e => null == e.id ? e.url : D.default.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map(e => null != e ? (0, a.jsx)("img", {
        className: q.personalizedEmoji,
        alt: "",
        src: e
      }) : null), n ? null : l.map(e => (0, a.jsx)(h.default, {
        disableAnimation: t,
        sticker: e,
        size: 58,
        withLoadingIndicator: !1
      }, e.id))]
    }) : (0, a.jsx)("img", {
      className: q.nonPersonalizedGraphic,
      alt: "",
      src: i
    })
  }, "emoji-stickers-item")
}

function e_(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  r.useEffect(() => _.default.wait(() => (0, C.fetchGuildBoostSlots)()), []);
  let l = (0, m.useStateFromStores)([N.default], () => N.default.useReducedMotion),
    [n, o] = (0, m.useStateFromStoresArray)([R.default, U.default], () => {
      let e = R.default.boostSlots,
        s = new Map;
      c()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != U.default.getGuild(e)) {
          var t;
          let a = null !== (t = s.get(e)) && void 0 !== t ? t : 0;
          s.set(e, a + 1)
        }
      });
      let t = null,
        a = 0;
      return s.size > 0 && ([t, a] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [U.default.getGuild(t), a]
    }),
    u = null != n && o > 0,
    d = ec().boostItemVisual;
  return (0, a.jsx)(ed, {
    description: s === H.PremiumTypes.TIER_1 ? Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
    onLearnMore: () => {
      t(), E.default.open(Y.UserSettingsSections.GUILD_BOOSTING), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    },
    renderVisual: () => u ? (0, a.jsx)("div", {
      className: q.boostCardContainer,
      children: (0, a.jsxs)("div", {
        className: q.boostCard,
        children: [(0, a.jsx)(P.default, {
          guild: n,
          size: P.default.Sizes.MEDIUM,
          animate: !l,
          className: q.boostCardIcon
        }), (0, a.jsxs)("div", {
          className: q.boostCardInfo,
          children: [(0, a.jsx)(p.Text, {
            variant: "text-md/normal",
            className: i()(q.textSingleLineEllipsis, q.boostCardTitle),
            children: n.name
          }), (0, a.jsxs)("div", {
            className: q.boostCardSubtitle,
            children: [(0, a.jsx)(y.default, {
              className: q.boostCardGem
            }), (0, a.jsx)(p.Text, {
              variant: "text-xs/normal",
              className: i()(q.textSingleLineEllipsis, q.boostCardCount),
              children: Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                boostCount: o
              })
            })]
          })]
        })]
      })
    }) : (0, a.jsx)("img", {
      alt: "",
      src: d
    })
  }, "boost-item")
}
let eC = () => {
  let e = ec().screenShareItemVisual;
  return (0, a.jsx)(ed, {
    description: Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
    onLearnMore: () => {
      window.open(w.default.getArticleURL(Y.HelpdeskArticles.STREAM_QUALITY_SETTINGS)), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: e
    })
  }, "screen-share-item")
};

function eE(e) {
  let {
    premiumType: s
  } = e, t = ec().uploadsMessagesItemVisual;
  return (0, a.jsx)(ed, {
    description: s === H.PremiumTypes.TIER_2 ? Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
    onLearnMore: () => {
      window.open(w.default.getArticleURL(Y.HelpdeskArticles.PREMIUM_DETAILS)), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: t
    })
  }, "uploads-item")
}
let eI = e => {
  let {
    country: s
  } = e, t = ec(), r = "PL" === s ? t.PL : t.TR;
  return (0, a.jsx)(ed, {
    description: ("PL" === s ? Z.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : Z.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
    onLearnMore: () => {
      window.open(w.default.getArticleURL(Y.HelpdeskArticles.LOCALIZED_PRICING)), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "grandfathered_prices"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: r
    })
  }, "grandfathered-prices-item")
};

function eN(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: l,
    isDowngrade: i = !1
  } = e, n = (0, B.default)(), u = (0, z.useShouldShowLegacyPricingNotice)(), c = r.useMemo(() => {
    let e = [];
    switch (u && (o()(null != n, "Subscription billing country should not be null"), e.push((0, a.jsx)(eI, {
        country: n
      }))), t) {
      case H.PremiumTypes.TIER_0:
        e.push((0, a.jsx)(ep, {
          premiumType: t
        }), (0, a.jsx)(eE, {
          premiumType: t
        }));
        break;
      case H.PremiumTypes.TIER_1:
        i ? e.push((0, a.jsx)(ef, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(eC, {}), (0, a.jsx)(e_, {
          premiumType: t,
          onClose: l
        })) : e.push((0, a.jsx)(ef, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(ep, {
          premiumType: t
        }), (0, a.jsx)(eC, {}), (0, a.jsx)(eE, {
          premiumType: t
        }), (0, a.jsx)(e_, {
          premiumType: t,
          onClose: l
        }));
        break;
      case H.PremiumTypes.TIER_2:
        i ? e.push((0, a.jsx)(ef, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(e_, {
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(eC, {})) : e.push((0, a.jsx)(ef, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(ep, {
          premiumType: t
        }), (0, a.jsx)(e_, {
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(eC, {}), (0, a.jsx)(eE, {
          premiumType: t
        }))
    }
    return e
  }, [t, s, l, i, u, n]);
  return (0, a.jsx)("div", {
    className: q.whatYouLoseItemContainer,
    children: c
  })
}
s.default = function(e) {
  let {
    premiumType: s,
    titleText: t,
    subtitleText: l,
    footer: i,
    onClose: n,
    onDiscountClaim: u,
    onContinue: c,
    analyticsLocations: d,
    isLoading: f = !1,
    churnUserDiscountOffer: _ = null,
    isDowngrade: C = !1,
    subtitleIcon: E,
    subtitleClassName: I
  } = e, N = (0, m.useStateFromStores)([v.default], () => {
    let e = v.default.getCurrentUser();
    return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  r.useEffect(() => {
    (0, j.default)(N.id, N.getAvatarURL(null, 80))
  }, [N]);
  let x = null != _ && !f;
  return (r.useEffect(() => {
    x && F.default.track(Y.AnalyticEvents.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: d,
      discount_id: null == _ ? void 0 : _.discount_id
    })
  }, [x, d, _]), f) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(W.default, {
      premiumType: s,
      onClose: n
    }), (0, a.jsx)(p.ModalContent, {
      className: q.body,
      children: (0, a.jsx)(p.Spinner, {
        className: q.spinner
      })
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(W.default, {
      premiumType: s,
      onClose: n
    }), (0, a.jsxs)(p.ModalContent, {
      className: q.body,
      children: [(0, a.jsx)(k.default, {
        size: k.default.Sizes.SIZE_24,
        className: q.title,
        children: t
      }), (0, a.jsxs)("div", {
        className: I,
        children: [E, (0, a.jsx)(p.Text, {
          variant: "text-md/normal",
          className: q.subtitle,
          children: l
        })]
      }), (0, a.jsx)(eN, {
        currentUser: N,
        premiumType: s,
        onClose: n,
        isDowngrade: C
      })]
    }), !x && (0, a.jsx)(p.ModalFooter, {
      children: i
    }), x && (0, a.jsx)(G.default, {
      churnUserDiscountOffer: _,
      onDiscountClaim: u,
      onContinue: c
    })]
  })
}