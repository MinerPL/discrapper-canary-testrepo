t(627341), t(47120), t(724458), t(653041);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  r = t.n(i),
  l = t(512722),
  o = t.n(l),
  c = t(392711),
  u = t.n(c),
  _ = t(278074),
  d = t(442837),
  I = t(780384),
  m = t(481060),
  C = t(570140),
  E = t(179360),
  N = t(230711),
  T = t(410030),
  A = t(607070),
  p = t(44315),
  S = t(543241),
  L = t(906411),
  x = t(565138),
  R = t(822179),
  M = t(419922),
  f = t(484459),
  g = t(318661),
  O = t(813549),
  h = t(735336),
  P = t(502762),
  j = t(652853),
  U = t(430824),
  Z = t(594174),
  v = t(314884),
  b = t(709586),
  F = t(154921),
  G = t(626135),
  y = t(768581),
  B = t(63063),
  D = t(998502),
  H = t(53900),
  k = t(789155),
  z = t(55610),
  w = t(798769),
  Y = t(474936),
  V = t(981631),
  W = t(228168),
  K = t(689938),
  J = t(820944),
  X = t(834982),
  q = t(912450),
  Q = t(703548),
  $ = t(869333),
  ee = t(652528),
  es = t(874692),
  et = t(391458),
  ea = t(70967),
  en = t(674264),
  ei = t(360088),
  er = t(304880);
let el = D.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  eo = {
boostItemVisual: ee,
emojiStickersVisual: es,
screenShareItemVisual: ei,
uploadsMessagesItemVisual: et,
uploadsMessagesItemVisualV2: ea,
PL: en,
TR: er
  },
  ec = {
boostItemVisual: X,
emojiStickersVisual: q,
screenShareItemVisual: ei,
uploadsMessagesItemVisual: Q,
uploadsMessagesItemVisualV2: $,
PL: en,
TR: er
  };

function eu() {
  let e = (0, T.ZP)();
  return (0, I.wj)(e) ? ec : eo;
}

function e_(e) {
  let {
description: s,
onLearnMore: t,
renderVisual: n
  } = e;
  return (0, a.jsxs)('div', {
className: J.whatYouLoseItem,
children: [
  (0, a.jsxs)('div', {
    className: J.whatYouLoseItemLeftColumn,
    children: [
      (0, a.jsx)(m.Text, {
        variant: 'text-md/normal',
        children: s
      }),
      (0, a.jsx)(m.Button, {
        look: m.Button.Looks.LINK,
        color: m.Button.Colors.LINK,
        size: m.Button.Sizes.NONE,
        className: J.whatYouLoseItemLearnMore,
        onClick: t,
        children: K.Z.Messages.LEARN_MORE
      })
    ]
  }),
  (0, a.jsx)('div', {
    className: J.whatYouLoseItemRightColumn,
    children: n()
  })
]
  });
}

function ed(e) {
  let {
...s
  } = e, {
theme: t
  } = (0, j.z)(), n = (0, p.O0)(V.tPk.INTERACTIVE_ACTIVE, t);
  return (0, a.jsx)(m.NitroWheelIcon, {
size: 'md',
...s,
color: n.hex
  });
}

function eI(e) {
  let {
currentUser: s,
premiumType: t,
onClose: n
  } = e, i = (0, g.ZP)(s.id), r = (0, d.e7)([A.Z], () => A.Z.useReducedMotion), l = t === Y.p9.TIER_1, o = (0, _.EQ)(null == i ? void 0 : i.premiumType).with(Y.p9.TIER_2, () => (0, a.jsxs)(P.Z, {
user: s,
displayProfile: i,
forceShowPremium: !0,
profileType: W.y0.CANCEL_MODAL,
className: J.profileCard,
children: [
  (0, a.jsx)('div', {
    className: J.profileBanner,
    children: (0, a.jsx)(h.Z, {
      displayProfile: i,
      user: s,
      allowEdit: !1,
      profileType: W.y0.CANCEL_MODAL
    })
  }),
  (0, a.jsx)(el, {
    className: J.profileAvatar,
    src: s.getAvatarURL(void 0, (0, m.getAvatarSize)(m.AvatarSizes.SIZE_56), !r),
    size: m.AvatarSizes.SIZE_56,
    'aria-label': s.username
  }),
  (0, a.jsx)(P.Z.Overlay, {
    className: J.profileInner,
    children: (0, a.jsxs)('div', {
      className: J.profileUserInfo,
      children: [
        (0, a.jsx)(O.Z, {
          className: J.profileNameTag,
          usernameClass: J.profileNameTagUsername,
          name: s.toString()
        }),
        (0, a.jsx)(ed, {
          className: J.profilePremiumIcon
        })
      ]
    })
  })
]
  })).otherwise(() => (0, a.jsxs)('div', {
className: J.profileCardTier1,
children: [
  (0, a.jsx)(el, {
    className: J.profileAvatarTier1,
    src: s.getAvatarURL(void 0, (0, m.getAvatarSize)(m.AvatarSizes.SIZE_56), !r),
    size: m.AvatarSizes.SIZE_56,
    'aria-label': s.username
  }),
  (0, a.jsxs)('div', {
    className: J.profileUserInfoTier1,
    children: [
      (0, a.jsx)(O.Z, {
        className: J.profileNameTag,
        usernameClass: J.profileNameTagUsername,
        name: s.toString()
      }),
      (0, a.jsx)(m.NitroWheelIcon, {
        size: 'md',
        color: 'currentColor',
        className: J.profilePremiumIcon
      })
    ]
  })
]
  }));
  return (0, a.jsx)(e_, {
description: l ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
onLearnMore: () => {
  n(), N.Z.open(V.oAB.PROFILE_CUSTOMIZATION), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'user_profile_customization'
  });
},
renderVisual: () => o
  }, 'profile-item');
}

function em(e) {
  let {
premiumType: s
  } = e, t = (0, d.e7)([A.Z], () => A.Z.useReducedMotion), n = (0, S.wC)(null).filter(e => e.type === L.B.GUILD && (e.animated || null != e.guildId)).slice(0, 3), i = (0, d.Wu)([R.Z], () => R.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - n.length)), r = eu().emojiStickersVisual, l = s === Y.p9.TIER_1;
  return (0, a.jsx)(e_, {
description: l ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
onLearnMore: () => {
  window.open(B.Z.getArticleURL(V.BhN.PREMIUM_DETAILS)), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'emojis_stickers'
  });
},
renderVisual: () => null != n && n.length > 0 || !l && null != i && i.length > 0 ? (0, a.jsxs)('div', {
  className: J.emojiStickersPersonalizedContainer,
  children: [
    n.map(e => null == e.id ? e.url : y.ZP.getEmojiURL({
      id: e.id,
      animated: !t && e.animated,
      size: 58
    })).map(e => null != e ? (0, a.jsx)('img', {
      className: J.personalizedEmoji,
      alt: '',
      src: e
    }) : null),
    l ? null : i.map(e => (0, a.jsx)(M.ZP, {
      disableAnimation: t,
      sticker: e,
      size: 58,
      withLoadingIndicator: !1
    }, e.id))
  ]
}) : (0, a.jsx)('img', {
  className: J.nonPersonalizedGraphic,
  alt: '',
  src: r
})
  }, 'emoji-stickers-item');
}

function eC(e) {
  let {
premiumType: s,
onClose: t
  } = e;
  n.useEffect(() => C.Z.wait(() => (0, E.X8)()), []);
  let i = (0, d.e7)([A.Z], () => A.Z.useReducedMotion),
[l, o] = (0, d.Wu)([
  v.Z,
  U.Z
], () => {
  let e = v.Z.boostSlots,
    s = new Map();
  u()(e).map('premiumGuildSubscription').map('guildId').forEach(e => {
    if (null != U.Z.getGuild(e)) {
      var t;
      let a = null !== (t = s.get(e)) && void 0 !== t ? t : 0;
      s.set(e, a + 1);
    }
  });
  let t = null,
    a = 0;
  return s.size > 0 && ([t, a] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [
    U.Z.getGuild(t),
    a
  ];
}),
c = null != l && o > 0,
_ = eu().boostItemVisual;
  return (0, a.jsx)(e_, {
description: s === Y.p9.TIER_1 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
onLearnMore: () => {
  t(), N.Z.open(V.oAB.GUILD_BOOSTING), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'boosts'
  });
},
renderVisual: () => c ? (0, a.jsx)('div', {
  className: J.boostCardContainer,
  children: (0, a.jsxs)('div', {
    className: J.boostCard,
    children: [
      (0, a.jsx)(x.Z, {
        guild: l,
        size: x.Z.Sizes.MEDIUM,
        animate: !i,
        className: J.boostCardIcon
      }),
      (0, a.jsxs)('div', {
        className: J.boostCardInfo,
        children: [
          (0, a.jsx)(m.Text, {
            variant: 'text-md/normal',
            className: r()(J.textSingleLineEllipsis, J.boostCardTitle),
            children: l.name
          }),
          (0, a.jsxs)('div', {
            className: J.boostCardSubtitle,
            children: [
              (0, a.jsx)(b.Z, {
                className: J.boostCardGem
              }),
              (0, a.jsx)(m.Text, {
                variant: 'text-xs/normal',
                className: r()(J.textSingleLineEllipsis, J.boostCardCount),
                children: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                  boostCount: o
                })
              })
            ]
          })
        ]
      })
    ]
  })
}) : (0, a.jsx)('img', {
  alt: '',
  src: _
})
  }, 'boost-item');
}
let eE = () => {
  let e = eu().screenShareItemVisual;
  return (0, a.jsx)(e_, {
description: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
onLearnMore: () => {
  window.open(B.Z.getArticleURL(V.BhN.STREAM_QUALITY_SETTINGS)), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'screen_share'
  });
},
renderVisual: () => (0, a.jsx)('img', {
  alt: '',
  src: e
})
  }, 'screen-share-item');
};

function eN(e) {
  let {
premiumType: s
  } = e, t = eu().uploadsMessagesItemVisual;
  return (0, a.jsx)(e_, {
description: s === Y.p9.TIER_2 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
onLearnMore: () => {
  window.open(B.Z.getArticleURL(V.BhN.PREMIUM_DETAILS)), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'msgs_uploads'
  });
},
renderVisual: () => (0, a.jsx)('img', {
  alt: '',
  src: t
})
  }, 'uploads-item');
}
let eT = e => {
  let {
country: s
  } = e, t = eu(), n = 'PL' === s ? t.PL : t.TR;
  return (0, a.jsx)(e_, {
description: ('PL' === s ? K.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : K.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
onLearnMore: () => {
  window.open(B.Z.getArticleURL(V.BhN.LOCALIZED_PRICING)), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'grandfathered_prices'
  });
},
renderVisual: () => (0, a.jsx)('img', {
  alt: '',
  src: n
})
  }, 'grandfathered-prices-item');
};

function eA(e) {
  let {
currentUser: s,
premiumType: t,
onClose: i,
isDowngrade: r = !1
  } = e, l = (0, H.Z)(), c = (0, z.U)(), u = n.useMemo(() => {
let e = [];
switch (c && (o()(null != l, 'Subscription billing country should not be null'), e.push((0, a.jsx)(eT, {
    country: l
  }))), t) {
  case Y.p9.TIER_0:
    e.push((0, a.jsx)(em, {
      premiumType: t
    }), (0, a.jsx)(eN, {
      premiumType: t
    }));
    break;
  case Y.p9.TIER_1:
    r ? e.push((0, a.jsx)(eI, {
      currentUser: s,
      premiumType: t,
      onClose: i
    }), (0, a.jsx)(eE, {}), (0, a.jsx)(eC, {
      premiumType: t,
      onClose: i
    })) : e.push((0, a.jsx)(eI, {
      currentUser: s,
      premiumType: t,
      onClose: i
    }), (0, a.jsx)(em, {
      premiumType: t
    }), (0, a.jsx)(eE, {}), (0, a.jsx)(eN, {
      premiumType: t
    }), (0, a.jsx)(eC, {
      premiumType: t,
      onClose: i
    }));
    break;
  case Y.p9.TIER_2:
    r ? e.push((0, a.jsx)(eI, {
      currentUser: s,
      premiumType: t,
      onClose: i
    }), (0, a.jsx)(eC, {
      premiumType: t,
      onClose: i
    }), (0, a.jsx)(eE, {})) : e.push((0, a.jsx)(eI, {
      currentUser: s,
      premiumType: t,
      onClose: i
    }), (0, a.jsx)(em, {
      premiumType: t
    }), (0, a.jsx)(eC, {
      premiumType: t,
      onClose: i
    }), (0, a.jsx)(eE, {}), (0, a.jsx)(eN, {
      premiumType: t
    }));
}
return e;
  }, [
t,
s,
i,
r,
c,
l
  ]);
  return (0, a.jsx)('div', {
className: J.whatYouLoseItemContainer,
children: u
  });
}
s.Z = function(e) {
  let {
premiumType: s,
titleText: t,
subtitleText: i,
footer: r,
onClose: l,
onDiscountClaim: c,
onContinue: u,
analyticsLocations: _,
isLoading: I = !1,
churnUserDiscountOffer: C = null,
isDowngrade: E = !1,
subtitleIcon: N,
subtitleClassName: T
  } = e, A = (0, d.e7)([Z.default], () => {
let e = Z.default.getCurrentUser();
return o()(null != e, 'ProfileItem: currentUser cannot be undefined'), e;
  });
  n.useEffect(() => {
(0, f.Z)(A.id, A.getAvatarURL(null, 80));
  }, [A]);
  let p = null != C && !I;
  return (n.useEffect(() => {
p && G.default.track(V.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
  location_stack: _,
  discount_id: null == C ? void 0 : C.discount_id
});
  }, [
p,
_,
C
  ]), I) ? (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(w.Z, {
    premiumType: s,
    onClose: l
  }),
  (0, a.jsx)(m.ModalContent, {
    className: J.body,
    children: (0, a.jsx)(m.Spinner, {
      className: J.spinner
    })
  })
]
  }) : (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(w.Z, {
    premiumType: s,
    onClose: l
  }),
  (0, a.jsxs)(m.ModalContent, {
    className: J.body,
    children: [
      (0, a.jsx)(F.Z, {
        size: F.Z.Sizes.SIZE_24,
        className: J.title,
        children: t
      }),
      (0, a.jsxs)('div', {
        className: T,
        children: [
          N,
          (0, a.jsx)(m.Text, {
            variant: 'text-md/normal',
            className: J.subtitle,
            children: i
          })
        ]
      }),
      (0, a.jsx)(eA, {
        currentUser: A,
        premiumType: s,
        onClose: l,
        isDowngrade: E
      })
    ]
  }),
  !p && (0, a.jsx)(m.ModalFooter, {
    children: r
  }),
  p && (0, a.jsx)(k.Z, {
    churnUserDiscountOffer: C,
    onDiscountClaim: c,
    onContinue: u
  })
]
  });
};