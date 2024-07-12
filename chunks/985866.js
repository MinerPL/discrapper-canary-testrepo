n.r(t), n.d(t, {
  default: function() {
return M;
  }
}), n(47120);
var r = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  l = n(887024),
  i = n(442837),
  d = n(692547),
  c = n(780384),
  u = n(481060),
  p = n(484614),
  m = n(410030),
  C = n(607070),
  _ = n(530618),
  E = n(454585),
  S = n(246946),
  R = n(572004),
  g = n(302221),
  T = n(617136),
  f = n(272008),
  h = n(569984),
  A = n(497505),
  b = n(918701),
  D = n(566078),
  I = n(617889),
  x = n(644646),
  v = n(78826),
  O = n(46140),
  w = n(675654),
  y = n(689938),
  j = n(754301);

function N(e) {
  var t;
  let {
quest: n,
rewardCode: s,
hasTieredRewardCodes: a
  } = e, l = (0, c.wj)((0, m.ZP)()), i = {
border: '1px solid '.concat(n.config.colors.primary),
background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '.concat((0, g.aD)(n.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ').concat((0, g.aD)(n.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ').concat(l ? 'var(--black)' : 'var(--white)', '\n    ')
  }, p = (0, I.B)(n, !1), C = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s, {
header: _,
subHeader: E
  } = function(e) {
var t, n, r, s;
let {
  quest: a,
  rewardCode: o,
  hasTieredRewardCodes: l
} = e, i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != o, d = l ? '' : y.Z.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, c = l ? (0, b.o9)({
  quest: a,
  idx: null !== (r = null == o ? void 0 : o.tier) && void 0 !== r ? r : null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedTier
}) : null, u = D.r.build(a.config), p = null != c && null !== (s = c.messages.name) && void 0 !== s ? s : u.defaultReward.messages.name, m = l ? y.Z.Messages.QUESTS_CLAIM_REWARD : u.defaultReward.messages.name;
return {
  subHeader: i ? y.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : d,
  header: i ? p : m
};
  }({
quest: n,
rewardCode: s,
hasTieredRewardCodes: a
  }), {
hasError: S,
isLoading: R
  } = (0, v.d7)();
  return (0, r.jsxs)('div', {
style: i,
className: j.rewardTile,
children: [
  (0, r.jsxs)('div', {
    className: j.rewardTileWrapper,
    style: {
      '--custom-reward-tile-border-color': n.config.colors.primary
    },
    children: [
      R && !S && (0, r.jsx)(u.Spinner, {
        className: j.rewardTileAssetStatusIcon,
        type: u.SpinnerTypes.SPINNING_CIRCLE
      }),
      S && (0, r.jsx)(u.ImageWarningIcon, {
        className: j.rewardTileAssetStatusIcon
      }),
      (0, r.jsx)(x.Z, {
        className: o()(j.rewardTileAsset, {
          [j.rewardTileAssetLoading]: R || S
        }),
        quest: n,
        questContent: p.trackingCtx.content
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: j.rewardSubheading,
    children: [
      C && (0, r.jsx)(u.CheckmarkSmallIcon, {
        size: 'xs',
        color: d.Z.colors.TEXT_MUTED,
        className: j.rewardSubheadingIcon
      }),
      (0, r.jsx)(u.Text, {
        variant: 'eyebrow',
        color: 'text-muted',
        className: j.rewardSubheadingText,
        children: E
      })
    ]
  }),
  (0, r.jsx)(u.Heading, {
    variant: 'display-sm',
    color: 'header-primary',
    className: j.rewardHeading,
    children: _
  })
]
  });
}

function M(e) {
  let t = (0, i.e7)([h.Z], () => h.Z.getQuest(e.questId));
  return null != t ? (0, r.jsx)(L, {
...e,
quest: t
  }) : null;
}

function L(e) {
  var t;
  let {
transitionState: n,
onClose: a,
quest: o,
location: d,
questContentPosition: c
  } = e, m = s.useMemo(() => {
var e;
return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
  }, []), g = D.r.build(o.config).rewardPlatforms, I = g.length > 1, [x, M] = s.useState(I ? null : g[0]), L = s.useRef(new l.qA()), B = s.useRef(null), [Z, W] = s.useState(null), U = (0, i.e7)([C.Z], () => C.Z.useReducedMotion), k = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation), {
rewardCode: P,
isFetchingRewardCode: Q,
isClaimingRewardCode: F
  } = (0, i.cj)([h.Z], () => ({
rewardCode: h.Z.getRewardCode(o.id),
isFetchingRewardCode: h.Z.isFetchingRewardCode(o.id),
isClaimingRewardCode: h.Z.isClaimingRewardCode(o.id) || h.Z.isClaimingReward(o.id)
  })), q = (0, b.oo)({
quest: o
  }), [H, G] = s.useState(!1), z = I && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == P, V = s.useCallback((e, t, n) => {
G(!1), q || 2 === o.config.configVersion ? (0, f.QB)(e, t, n).catch(() => G(!0)) : (0, f.Tj)(e, t, n).catch(() => G(!0));
  }, [
q,
o.config.configVersion
  ]), $ = s.useCallback(e => {
G(!1), (0, f.pf)(e).catch(() => G(!0));
  }, []);
  s.useEffect(() => {
var e, t;
if (null == P && !H && !F && !Q && !z)
  (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != x ? V(o.id, x, d) : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && $(o.id);
  }, [
o,
P,
F,
Q,
H,
z,
x,
d,
V,
$
  ]);
  let X = null;
  m && null != P ? X = y.Z.Messages.QUESTS_REWARD_CODE_HEADER : null != P ? X = y.Z.Messages.QUESTS_REWARD_CODE_CONGRATS : z && (X = y.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let Y = null != X ? (0, r.jsx)(u.Heading, {
  variant: 'heading-xl/semibold',
  color: 'header-primary',
  className: j.heading,
  children: X
}) : null,
J = function(e) {
  var t, n, s, a;
  let {
    quest: o,
    selectedPlatform: l,
    needsToConfirmPlatform: i,
    rewardCode: d,
    hasTieredRewardCodes: c
  } = e, p = D.r.build(o.config);
  if (i)
    return (0, r.jsx)(u.Text, {
      variant: 'text-sm/normal',
      color: 'text-normal',
      className: j.bodyCopy,
      children: c ? y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
        rewardName: p.defaultReward.messages.name
      })
    });
  let m = null != l ? l : null == d ? void 0 : d.platform,
    C = c ? (0, b.o9)({
      quest: o,
      idx: null !== (s = null == d ? void 0 : d.tier) && void 0 !== s ? s : null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedTier
    }) : null,
    _ = null !== (a = null == C ? void 0 : null === (n = C.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== a ? a : p.defaultRewardRedemptionInstructionsByPlatform,
    S = null != m ? _[m] : void 0;
  return null != d && null != S ? (0, r.jsx)(u.Text, {
    variant: 'text-sm/normal',
    color: 'text-normal',
    className: j.bodyCopy,
    children: E.Z.parse(S, !1, {
      allowLinks: !0
    })
  }) : null;
}({
  quest: o,
  selectedPlatform: x,
  needsToConfirmPlatform: z,
  rewardCode: P,
  hasTieredRewardCodes: q
}),
K = s.useMemo(() => g.map(e => ({
  label: (0, b.t2)(e),
  value: e
})), [g]),
ee = null;
  z && (ee = (0, r.jsxs)(u.FormItem, {
title: y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
children: [
  (0, r.jsx)(u.Select, {
    placeholder: y.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
    options: K,
    select: e => {
      G(!1), M(e);
    },
    isSelected: e => e === x,
    serialize: e => (0, b.t2)(e),
    className: H ? j.errorInput : '',
    isDisabled: F,
    renderOptionLabel: e => {
      let t = function(e) {
        switch (e) {
          case A.y$.CROSS_PLATFORM:
            return (0, r.jsx)(u.ScienceIcon, {
              className: j.platformSelectionOptionIcon
            });
          case A.y$.PC:
            return (0, r.jsx)(u.ScreenIcon, {
              className: j.platformSelectionOptionIcon
            });
          case A.y$.PLAYSTATION:
            return (0, r.jsx)(u.PlaystationIcon, {
              className: j.platformSelectionOptionIcon
            });
          case A.y$.SWITCH:
            return (0, r.jsx)(u.NintendoSwitchNeutralIcon, {
              className: j.platformSelectionOptionIcon
            });
          case A.y$.XBOX:
            return (0, r.jsx)(u.XboxIcon, {
              className: j.platformSelectionOptionIcon
            });
        }
      }(e.value);
      return (0, r.jsxs)('div', {
        className: j.platformSelectionOptionLabelContainer,
        children: [
          t,
          e.label
        ]
      });
    }
  }),
  H ? (0, r.jsx)(u.InputError, {
    error: y.Z.Messages.QUESTS_REWARD_CODE_ERROR
  }) : null
]
  }));
  let et = null == P && (Q || F),
en = et && !z ? (0, r.jsx)(u.Spinner, {}) : null,
er = null;
  null != P ? er = (0, r.jsx)(u.FormItem, {
title: y.Z.Messages.QUESTS_REWARD_CODE_HEADER,
children: (0, r.jsx)(p.Z, {
  value: k ? y.Z.Messages.QUEST_REWARD_CODE_HIDDEN : P.code,
  delay: 1000,
  buttonColor: u.Button.Colors.BRAND,
  onCopy: () => {
    k && (0, R.JG)(P.code), (0, T._3)({
      questId: o.id,
      questContent: d,
      questContentPosition: c,
      questContentCTA: T.jZ.COPY_REWARD_CODE
    });
  }
})
  }) : H && !z && (er = (0, r.jsx)(u.FormItem, {
title: y.Z.Messages.QUESTS_REWARD_CODE_HEADER,
children: (0, r.jsx)(u.TextInput, {
  disabled: !0,
  error: y.Z.Messages.QUESTS_REWARD_CODE_ERROR,
  inputClassName: j.errorInput
})
  }));
  let es = () => {
  var e;
  z && null != x ? (V(o.id, x, d), (0, T._3)({
    questId: o.id,
    questContent: d,
    questContentCTA: T.jZ.GET_REWARD_CODE,
    questContentPosition: c
  })) : H ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? $(o.id) : null != x && (V(o.id, x, d), (0, T._3)({
    questId: o.id,
    questContent: d,
    questContentCTA: T.jZ.GET_REWARD_CODE,
    questContentPosition: c
  })) : a();
},
ea = z && F,
eo = !ea && (z && null == x || et),
el = y.Z.Messages.QUESTS_REWARD_CODE_DONE;
  z ? el = y.Z.Messages.QUESTS_REWARD_CODE_GET_CODE : !z && H && (el = y.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ei = !U && null != P && !m && !H,
ed = (0, r.jsx)(u.Button, {
  onClick: () => es(),
  submitting: ea,
  disabled: eo,
  children: el
}),
ec = null != en && q;
  return (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(l.O_, {
    ref: W,
    className: j.confettiCanvas,
    environment: L.current
  }),
  (0, r.jsx)('div', {
    ref: B,
    children: (0, r.jsxs)(u.ModalRoot, {
      transitionState: n,
      size: u.ModalSize.DYNAMIC,
      children: [
        (0, r.jsxs)('div', {
          className: j.modalBody,
          children: [
            (0, r.jsx)(u.ModalCloseButton, {
              className: j.closeButton,
              onClick: () => a()
            }),
            !ec && (0, r.jsx)(v.p, {
              source: O.dr.REWARD_CODE_MODAL,
              questId: o.id,
              children: (0, r.jsx)(N, {
                quest: o,
                rewardCode: P,
                hasTieredRewardCodes: q
              })
            }),
            (0, r.jsxs)('div', {
              className: j.modalContent,
              children: [
                Y,
                J,
                ee,
                en,
                er
              ]
            })
          ]
        }),
        (0, r.jsx)(u.ModalFooter, {
          children: ed
        })
      ]
    })
  }),
  ei && (0, r.jsx)(_.Z, {
    confettiTarget: B.current,
    confettiCanvas: Z,
    sprites: w.CA,
    colors: w.Br
  })
]
  });
}