n(627341), n(47120), n(724458), n(653041);
var t = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(512722),
  o = n.n(l),
  c = n(392711),
  u = n.n(c),
  _ = n(278074),
  d = n(442837),
  I = n(780384),
  m = n(481060),
  C = n(570140),
  E = n(179360),
  N = n(230711),
  T = n(410030),
  p = n(607070),
  A = n(44315),
  S = n(543241),
  L = n(906411),
  x = n(822179),
  R = n(419922),
  M = n(484459),
  f = n(318661),
  g = n(735336),
  O = n(502762),
  h = n(652853),
  P = n(430824),
  j = n(594174),
  U = n(314884),
  Z = n(346656),
  v = n(180828),
  b = n(709586),
  F = n(154921),
  G = n(626135),
  y = n(768581),
  B = n(63063),
  D = n(998502),
  H = n(53900),
  k = n(789155),
  z = n(55610),
  w = n(798769),
  Y = n(474936),
  V = n(981631),
  W = n(228168),
  K = n(689938),
  J = n(820944),
  X = n(834982),
  q = n(912450),
  Q = n(703548),
  $ = n(869333),
  ee = n(652528),
  es = n(874692),
  en = n(391458),
  et = n(70967),
  ea = n(674264),
  ei = n(360088),
  er = n(304880);
let el = D.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
  eo = {
boostItemVisual: ee,
emojiStickersVisual: es,
screenShareItemVisual: ei,
uploadsMessagesItemVisual: en,
uploadsMessagesItemVisualV2: et,
PL: ea,
TR: er
  },
  ec = {
boostItemVisual: X,
emojiStickersVisual: q,
screenShareItemVisual: ei,
uploadsMessagesItemVisual: Q,
uploadsMessagesItemVisualV2: $,
PL: ea,
TR: er
  };

function eu() {
  let e = (0, T.ZP)();
  return (0, I.wj)(e) ? ec : eo;
}

function e_(e) {
  let {
description: s,
onLearnMore: n,
renderVisual: a
  } = e;
  return (0, t.jsxs)('div', {
className: J.whatYouLoseItem,
children: [
  (0, t.jsxs)('div', {
    className: J.whatYouLoseItemLeftColumn,
    children: [
      (0, t.jsx)(m.Text, {
        variant: 'text-md/normal',
        children: s
      }),
      (0, t.jsx)(m.Button, {
        look: m.Button.Looks.LINK,
        color: m.Button.Colors.LINK,
        size: m.Button.Sizes.NONE,
        className: J.whatYouLoseItemLearnMore,
        onClick: n,
        children: K.Z.Messages.LEARN_MORE
      })
    ]
  }),
  (0, t.jsx)('div', {
    className: J.whatYouLoseItemRightColumn,
    children: a()
  })
]
  });
}

function ed(e) {
  let {
...s
  } = e, {
theme: n
  } = (0, h.z)(), a = (0, A.O0)(V.tPk.INTERACTIVE_ACTIVE, n);
  return (0, t.jsx)(m.NitroWheelIcon, {
size: 'md',
...s,
color: a.hex
  });
}

function eI(e) {
  let {
currentUser: s,
premiumType: n,
onClose: a
  } = e, i = (0, f.ZP)(s.id), r = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), l = n === Y.p9.TIER_1, o = (0, _.EQ)(null == i ? void 0 : i.premiumType).with(Y.p9.TIER_2, () => (0, t.jsxs)(O.Z, {
user: s,
displayProfile: i,
forceShowPremium: !0,
profileType: W.y0.CANCEL_MODAL,
className: J.profileCard,
children: [
  (0, t.jsx)('div', {
    className: J.profileBanner,
    children: (0, t.jsx)(g.Z, {
      displayProfile: i,
      user: s,
      allowEdit: !1,
      profileType: W.y0.CANCEL_MODAL
    })
  }),
  (0, t.jsx)(el, {
    className: J.profileAvatar,
    src: s.getAvatarURL(void 0, (0, m.getAvatarSize)(m.AvatarSizes.SIZE_56), !r),
    size: m.AvatarSizes.SIZE_56,
    'aria-label': s.username
  }),
  (0, t.jsx)(O.Z.Overlay, {
    className: J.profileInner,
    children: (0, t.jsxs)('div', {
      className: J.profileUserInfo,
      children: [
        (0, t.jsx)(v.Z, {
          className: J.profileNameTag,
          usernameClass: J.profileNameTagUsername,
          name: s.toString()
        }),
        (0, t.jsx)(ed, {
          className: J.profilePremiumIcon
        })
      ]
    })
  })
]
  })).otherwise(() => (0, t.jsxs)('div', {
className: J.profileCardTier1,
children: [
  (0, t.jsx)(el, {
    className: J.profileAvatarTier1,
    src: s.getAvatarURL(void 0, (0, m.getAvatarSize)(m.AvatarSizes.SIZE_56), !r),
    size: m.AvatarSizes.SIZE_56,
    'aria-label': s.username
  }),
  (0, t.jsxs)('div', {
    className: J.profileUserInfoTier1,
    children: [
      (0, t.jsx)(v.Z, {
        className: J.profileNameTag,
        usernameClass: J.profileNameTagUsername,
        name: s.toString()
      }),
      (0, t.jsx)(m.NitroWheelIcon, {
        size: 'md',
        color: 'currentColor',
        className: J.profilePremiumIcon
      })
    ]
  })
]
  }));
  return (0, t.jsx)(e_, {
description: l ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
onLearnMore: () => {
  a(), N.Z.open(V.oAB.PROFILE_CUSTOMIZATION), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'user_profile_customization'
  });
},
renderVisual: () => o
  }, 'profile-item');
}

function em(e) {
  let {
premiumType: s
  } = e, n = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), a = (0, S.wC)(null).filter(e => e.type === L.B.GUILD && (e.animated || null != e.guildId)).slice(0, 3), i = (0, d.Wu)([x.Z], () => x.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - a.length)), r = eu().emojiStickersVisual, l = s === Y.p9.TIER_1;
  return (0, t.jsx)(e_, {
description: l ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
onLearnMore: () => {
  window.open(B.Z.getArticleURL(V.BhN.PREMIUM_DETAILS)), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'emojis_stickers'
  });
},
renderVisual: () => null != a && a.length > 0 || !l && null != i && i.length > 0 ? (0, t.jsxs)('div', {
  className: J.emojiStickersPersonalizedContainer,
  children: [
    a.map(e => null == e.id ? e.url : y.ZP.getEmojiURL({
      id: e.id,
      animated: !n && e.animated,
      size: 58
    })).map(e => null != e ? (0, t.jsx)('img', {
      className: J.personalizedEmoji,
      alt: '',
      src: e
    }) : null),
    l ? null : i.map(e => (0, t.jsx)(R.ZP, {
      disableAnimation: n,
      sticker: e,
      size: 58,
      withLoadingIndicator: !1
    }, e.id))
  ]
}) : (0, t.jsx)('img', {
  className: J.nonPersonalizedGraphic,
  alt: '',
  src: r
})
  }, 'emoji-stickers-item');
}

function eC(e) {
  let {
premiumType: s,
onClose: n
  } = e;
  a.useEffect(() => C.Z.wait(() => (0, E.X8)()), []);
  let i = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
[l, o] = (0, d.Wu)([
  U.Z,
  P.Z
], () => {
  let e = U.Z.boostSlots,
    s = new Map();
  u()(e).map('premiumGuildSubscription').map('guildId').forEach(e => {
    if (null != P.Z.getGuild(e)) {
      var n;
      let t = null !== (n = s.get(e)) && void 0 !== n ? n : 0;
      s.set(e, t + 1);
    }
  });
  let n = null,
    t = 0;
  return s.size > 0 && ([n, t] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [
    P.Z.getGuild(n),
    t
  ];
}),
c = null != l && o > 0,
_ = eu().boostItemVisual;
  return (0, t.jsx)(e_, {
description: s === Y.p9.TIER_1 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
onLearnMore: () => {
  n(), N.Z.open(V.oAB.GUILD_BOOSTING), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'boosts'
  });
},
renderVisual: () => c ? (0, t.jsx)('div', {
  className: J.boostCardContainer,
  children: (0, t.jsxs)('div', {
    className: J.boostCard,
    children: [
      (0, t.jsx)(Z.Z, {
        guild: l,
        size: Z.Z.Sizes.MEDIUM,
        animate: !i,
        className: J.boostCardIcon
      }),
      (0, t.jsxs)('div', {
        className: J.boostCardInfo,
        children: [
          (0, t.jsx)(m.Text, {
            variant: 'text-md/normal',
            className: r()(J.textSingleLineEllipsis, J.boostCardTitle),
            children: l.name
          }),
          (0, t.jsxs)('div', {
            className: J.boostCardSubtitle,
            children: [
              (0, t.jsx)(b.Z, {
                className: J.boostCardGem
              }),
              (0, t.jsx)(m.Text, {
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
}) : (0, t.jsx)('img', {
  alt: '',
  src: _
})
  }, 'boost-item');
}
let eE = () => {
  let e = eu().screenShareItemVisual;
  return (0, t.jsx)(e_, {
description: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
onLearnMore: () => {
  window.open(B.Z.getArticleURL(V.BhN.STREAM_QUALITY_SETTINGS)), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'screen_share'
  });
},
renderVisual: () => (0, t.jsx)('img', {
  alt: '',
  src: e
})
  }, 'screen-share-item');
};

function eN(e) {
  let {
premiumType: s
  } = e, n = eu().uploadsMessagesItemVisual;
  return (0, t.jsx)(e_, {
description: s === Y.p9.TIER_2 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
onLearnMore: () => {
  window.open(B.Z.getArticleURL(V.BhN.PREMIUM_DETAILS)), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'msgs_uploads'
  });
},
renderVisual: () => (0, t.jsx)('img', {
  alt: '',
  src: n
})
  }, 'uploads-item');
}
let eT = e => {
  let {
country: s
  } = e, n = eu(), a = 'PL' === s ? n.PL : n.TR;
  return (0, t.jsx)(e_, {
description: ('PL' === s ? K.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : K.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
onLearnMore: () => {
  window.open(B.Z.getArticleURL(V.BhN.LOCALIZED_PRICING)), G.default.track(V.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
    action: 'grandfathered_prices'
  });
},
renderVisual: () => (0, t.jsx)('img', {
  alt: '',
  src: a
})
  }, 'grandfathered-prices-item');
};

function ep(e) {
  let {
currentUser: s,
premiumType: n,
onClose: i,
isDowngrade: r = !1
  } = e, l = (0, H.Z)(), c = (0, z.U)(), u = a.useMemo(() => {
let e = [];
switch (c && (o()(null != l, 'Subscription billing country should not be null'), e.push((0, t.jsx)(eT, {
    country: l
  }))), n) {
  case Y.p9.TIER_0:
    e.push((0, t.jsx)(em, {
      premiumType: n
    }), (0, t.jsx)(eN, {
      premiumType: n
    }));
    break;
  case Y.p9.TIER_1:
    r ? e.push((0, t.jsx)(eI, {
      currentUser: s,
      premiumType: n,
      onClose: i
    }), (0, t.jsx)(eE, {}), (0, t.jsx)(eC, {
      premiumType: n,
      onClose: i
    })) : e.push((0, t.jsx)(eI, {
      currentUser: s,
      premiumType: n,
      onClose: i
    }), (0, t.jsx)(em, {
      premiumType: n
    }), (0, t.jsx)(eE, {}), (0, t.jsx)(eN, {
      premiumType: n
    }), (0, t.jsx)(eC, {
      premiumType: n,
      onClose: i
    }));
    break;
  case Y.p9.TIER_2:
    r ? e.push((0, t.jsx)(eI, {
      currentUser: s,
      premiumType: n,
      onClose: i
    }), (0, t.jsx)(eC, {
      premiumType: n,
      onClose: i
    }), (0, t.jsx)(eE, {})) : e.push((0, t.jsx)(eI, {
      currentUser: s,
      premiumType: n,
      onClose: i
    }), (0, t.jsx)(em, {
      premiumType: n
    }), (0, t.jsx)(eC, {
      premiumType: n,
      onClose: i
    }), (0, t.jsx)(eE, {}), (0, t.jsx)(eN, {
      premiumType: n
    }));
}
return e;
  }, [
n,
s,
i,
r,
c,
l
  ]);
  return (0, t.jsx)('div', {
className: J.whatYouLoseItemContainer,
children: u
  });
}
s.Z = function(e) {
  let {
premiumType: s,
titleText: n,
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
  } = e, p = (0, d.e7)([j.default], () => {
let e = j.default.getCurrentUser();
return o()(null != e, 'ProfileItem: currentUser cannot be undefined'), e;
  });
  a.useEffect(() => {
(0, M.Z)(p.id, p.getAvatarURL(null, 80));
  }, [p]);
  let A = null != C && !I;
  return (a.useEffect(() => {
A && G.default.track(V.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
  location_stack: _,
  discount_id: null == C ? void 0 : C.discount_id
});
  }, [
A,
_,
C
  ]), I) ? (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(w.Z, {
    premiumType: s,
    onClose: l
  }),
  (0, t.jsx)(m.ModalContent, {
    className: J.body,
    children: (0, t.jsx)(m.Spinner, {
      className: J.spinner
    })
  })
]
  }) : (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(w.Z, {
    premiumType: s,
    onClose: l
  }),
  (0, t.jsxs)(m.ModalContent, {
    className: J.body,
    children: [
      (0, t.jsx)(F.Z, {
        size: F.Z.Sizes.SIZE_24,
        className: J.title,
        children: n
      }),
      (0, t.jsxs)('div', {
        className: T,
        children: [
          N,
          (0, t.jsx)(m.Text, {
            variant: 'text-md/normal',
            className: J.subtitle,
            children: i
          })
        ]
      }),
      (0, t.jsx)(ep, {
        currentUser: p,
        premiumType: s,
        onClose: l,
        isDowngrade: E
      })
    ]
  }),
  !A && (0, t.jsx)(m.ModalFooter, {
    children: r
  }),
  A && (0, t.jsx)(k.Z, {
    churnUserDiscountOffer: C,
    onDiscountClaim: c,
    onContinue: u
  })
]
  });
};