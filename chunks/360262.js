"use strict";
t.r(s), t.d(s, {
  default: function() {
    return ex
  }
}), t("794252"), t("222007"), t("808653"), t("424973");
var a = t("37983"),
  r = t("884691"),
  l = t("414456"),
  n = t.n(l),
  i = t("627445"),
  o = t.n(i),
  u = t("917351"),
  c = t.n(u),
  d = t("506838"),
  m = t("446674"),
  f = t("819855"),
  p = t("77078"),
  C = t("913144"),
  _ = t("583367"),
  E = t("79112"),
  I = t("841098"),
  h = t("206230"),
  x = t("449918"),
  N = t("788506"),
  T = t("858619"),
  L = t("865372"),
  A = t("41170"),
  j = t("506885"),
  S = t("217513"),
  g = t("289918"),
  M = t("430312"),
  R = t("305961"),
  v = t("697218"),
  U = t("625634"),
  y = t("476263"),
  P = t("754474"),
  O = t("118503"),
  b = t("216422"),
  k = t("258078"),
  F = t("599110"),
  B = t("315102"),
  D = t("701909"),
  w = t("50885"),
  V = t("296253"),
  z = t("984938"),
  G = t("279171"),
  W = t("510928"),
  H = t("646718"),
  Y = t("49111"),
  K = t("590456"),
  Z = t("782340"),
  q = t("976364"),
  J = t("297273"),
  Q = t("571721"),
  X = t("581798"),
  $ = t("859018"),
  ee = t("136000"),
  es = t("944059"),
  et = t("757561"),
  ea = t("537525"),
  er = t("298231"),
  el = t("682642"),
  en = t("289194");
let ei = w.default.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
  eo = {
    boostItemVisual: ee,
    emojiStickersVisual: es,
    screenShareItemVisual: el,
    uploadsMessagesItemVisual: et,
    uploadsMessagesItemVisualV2: ea,
    PL: er,
    TR: en
  },
  eu = {
    boostItemVisual: J,
    emojiStickersVisual: Q,
    screenShareItemVisual: el,
    uploadsMessagesItemVisual: X,
    uploadsMessagesItemVisualV2: $,
    PL: er,
    TR: en
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
  } = r.useContext(M.UserProfileContext), n = (0, x.useThemedColorValue)(Y.ThemeColor.INTERACTIVE_ACTIVE, null != l ? l : t);
  return (0, a.jsx)(b.default, {
    ...s,
    color: n.hex
  })
}

function ef(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: r
  } = e, l = (0, S.default)(s.id), n = (0, m.useStateFromStores)([h.default], () => h.default.useReducedMotion), i = t === H.PremiumTypes.TIER_1, o = (0, d.match)(null == l ? void 0 : l.premiumType).with(H.PremiumTypes.TIER_2, () => (0, a.jsxs)(M.default, {
    forceShowPremium: !0,
    user: s,
    profileType: K.UserProfileTypes.CANCEL_MODAL,
    className: q.profileCard,
    children: [(0, a.jsx)("div", {
      className: q.profileBanner,
      children: (0, a.jsx)(g.default, {
        displayProfile: l,
        user: s,
        allowEdit: !1,
        profileType: K.UserProfileTypes.CANCEL_MODAL
      })
    }), (0, a.jsx)(ei, {
      className: q.profileAvatar,
      src: s.getAvatarURL(void 0, (0, p.getAvatarSize)(p.AvatarSizes.SIZE_56), !n),
      size: p.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsx)(M.default.Inner, {
      className: q.profileInner,
      children: (0, a.jsxs)("div", {
        className: q.profileUserInfo,
        children: [(0, a.jsx)(P.default, {
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
    children: [(0, a.jsx)(ei, {
      className: q.profileAvatarTier1,
      src: s.getAvatarURL(void 0, (0, p.getAvatarSize)(p.AvatarSizes.SIZE_56), !n),
      size: p.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsxs)("div", {
      className: q.profileUserInfoTier1,
      children: [(0, a.jsx)(P.default, {
        className: q.profileNameTag,
        usernameClass: q.profileNameTagUsername,
        name: s.toString()
      }), (0, a.jsx)(b.default, {
        className: q.profilePremiumIcon
      })]
    })]
  }));
  return (0, a.jsx)(ed, {
    description: i ? Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
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
  } = e, t = (0, m.useStateFromStores)([h.default], () => h.default.useReducedMotion), r = (0, N.useFrequentlyUsedEmojis)(null), l = r.filter(e => e.type === T.EmojiTypes.GUILD && (e.animated || null != e.guildId)).slice(0, 3), n = (0, m.useStateFromStoresArray)([L.default], () => L.default.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - l.length)), i = ec().emojiStickersVisual, o = s === H.PremiumTypes.TIER_1;
  return (0, a.jsx)(ed, {
    description: o ? Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
    onLearnMore: () => {
      window.open(D.default.getArticleURL(Y.HelpdeskArticles.PREMIUM_DETAILS)), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != l && l.length > 0 || !o && null != n && n.length > 0 ? (0, a.jsxs)("div", {
      className: q.emojiStickersPersonalizedContainer,
      children: [l.map(e => null == e.id ? e.url : B.default.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map(e => null != e ? (0, a.jsx)("img", {
        className: q.personalizedEmoji,
        alt: "",
        src: e
      }) : null), o ? null : n.map(e => (0, a.jsx)(A.default, {
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

function eC(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  r.useEffect(() => C.default.wait(() => (0, _.fetchGuildBoostSlots)()), []);
  let l = (0, m.useStateFromStores)([h.default], () => h.default.useReducedMotion),
    [i, o] = (0, m.useStateFromStoresArray)([U.default, R.default], () => {
      let e = U.default.boostSlots,
        s = new Map;
      c(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != R.default.getGuild(e)) {
          var t;
          let a = null !== (t = s.get(e)) && void 0 !== t ? t : 0;
          s.set(e, a + 1)
        }
      });
      let t = null,
        a = 0;
      return s.size > 0 && ([t, a] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [R.default.getGuild(t), a]
    }),
    u = null != i && o > 0,
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
        children: [(0, a.jsx)(y.default, {
          guild: i,
          size: y.default.Sizes.MEDIUM,
          animate: !l,
          className: q.boostCardIcon
        }), (0, a.jsxs)("div", {
          className: q.boostCardInfo,
          children: [(0, a.jsx)(p.Text, {
            variant: "text-md/normal",
            className: n(q.textSingleLineEllipsis, q.boostCardTitle),
            children: i.name
          }), (0, a.jsxs)("div", {
            className: q.boostCardSubtitle,
            children: [(0, a.jsx)(O.default, {
              className: q.boostCardGem
            }), (0, a.jsx)(p.Text, {
              variant: "text-xs/normal",
              className: n(q.textSingleLineEllipsis, q.boostCardCount),
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
let e_ = () => {
  let e = ec().screenShareItemVisual;
  return (0, a.jsx)(ed, {
    description: Z.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
    onLearnMore: () => {
      window.open(D.default.getArticleURL(Y.HelpdeskArticles.STREAM_QUALITY_SETTINGS)), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
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
      window.open(D.default.getArticleURL(Y.HelpdeskArticles.PREMIUM_DETAILS)), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
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
      window.open(D.default.getArticleURL(Y.HelpdeskArticles.LOCALIZED_PRICING)), F.default.track(Y.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "grandfathered_prices"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: r
    })
  }, "grandfathered-prices-item")
};

function eh(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: l,
    isDowngrade: n = !1
  } = e, i = (0, V.default)(), u = (0, G.useShouldShowLegacyPricingNotice)(), c = r.useMemo(() => {
    let e = [];
    switch (u && (o(null != i, "Subscription billing country should not be null"), e.push((0, a.jsx)(eI, {
        country: i
      }))), t) {
      case H.PremiumTypes.TIER_0:
        e.push((0, a.jsx)(ep, {
          premiumType: t
        }), (0, a.jsx)(eE, {
          premiumType: t
        }));
        break;
      case H.PremiumTypes.TIER_1:
        n ? e.push((0, a.jsx)(ef, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(e_, {}), (0, a.jsx)(eC, {
          premiumType: t,
          onClose: l
        })) : e.push((0, a.jsx)(ef, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(ep, {
          premiumType: t
        }), (0, a.jsx)(e_, {}), (0, a.jsx)(eE, {
          premiumType: t
        }), (0, a.jsx)(eC, {
          premiumType: t,
          onClose: l
        }));
        break;
      case H.PremiumTypes.TIER_2:
        n ? e.push((0, a.jsx)(ef, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(eC, {
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(e_, {})) : e.push((0, a.jsx)(ef, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(ep, {
          premiumType: t
        }), (0, a.jsx)(eC, {
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(e_, {}), (0, a.jsx)(eE, {
          premiumType: t
        }))
    }
    return e
  }, [t, s, l, n, u, i]);
  return (0, a.jsx)("div", {
    className: q.whatYouLoseItemContainer,
    children: c
  })
}
var ex = function(e) {
  let {
    premiumType: s,
    titleText: t,
    subtitleText: l,
    footer: n,
    onClose: i,
    onDiscountClaim: u,
    onContinue: c,
    analyticsLocations: d,
    isLoading: f = !1,
    churnUserDiscountOffer: C = null,
    isDowngrade: _ = !1,
    subtitleIcon: E,
    subtitleClassName: I
  } = e, h = (0, m.useStateFromStores)([v.default], () => {
    let e = v.default.getCurrentUser();
    return o(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  r.useEffect(() => {
    (0, j.default)(h.id, h.getAvatarURL(null, 80))
  }, [h]);
  let x = null != C && !f;
  return (r.useEffect(() => {
    x && F.default.track(Y.AnalyticEvents.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: d,
      discount_id: null == C ? void 0 : C.discount_id
    })
  }, [x, d, C]), f) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(W.default, {
      premiumType: s,
      onClose: i
    }), (0, a.jsx)(p.ModalContent, {
      className: q.body,
      children: (0, a.jsx)(p.Spinner, {
        className: q.spinner
      })
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(W.default, {
      premiumType: s,
      onClose: i
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
      }), (0, a.jsx)(eh, {
        currentUser: h,
        premiumType: s,
        onClose: i,
        isDowngrade: _
      })]
    }), !x && (0, a.jsx)(p.ModalFooter, {
      children: n
    }), x && (0, a.jsx)(z.default, {
      churnUserDiscountOffer: C,
      onDiscountClaim: u,
      onContinue: c
    })]
  })
}