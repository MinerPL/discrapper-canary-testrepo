"use strict";
s.r(t), s.d(t, {
  default: function() {
    return k
  }
}), s("47120");
var l = s("735250"),
  n = s("470079"),
  a = s("120356"),
  r = s.n(a),
  o = s("887024"),
  i = s("442837"),
  u = s("692547"),
  d = s("979184"),
  c = s("984986"),
  f = s("299847"),
  C = s("533627"),
  m = s("381837"),
  h = s("718671"),
  R = s("432594"),
  E = s("780384"),
  p = s("481060"),
  S = s("484614"),
  v = s("410030"),
  g = s("607070"),
  x = s("530618"),
  _ = s("454585"),
  T = s("246946"),
  A = s("572004"),
  w = s("302221"),
  N = s("617136"),
  I = s("272008"),
  M = s("569984"),
  D = s("497505"),
  O = s("918701"),
  j = s("644646"),
  y = s("78826"),
  L = s("46140"),
  b = s("675654"),
  Q = s("689938"),
  B = s("620324");

function P(e) {
  var t;
  let {
    quest: s,
    rewardCode: n,
    hasTieredRewardCodes: a
  } = e, o = (0, E.isThemeDark)((0, v.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, w.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, w.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(o ? "var(--black)" : "var(--white)", "\n    ")
  }, f = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != n, {
    header: C,
    subHeader: m
  } = function(e) {
    var t, s, l, n;
    let {
      quest: a,
      rewardCode: r,
      hasTieredRewardCodes: o
    } = e, i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != r, u = o ? "" : Q.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, d = o ? (0, O.getRewardCodeQuestReward)({
      quest: a,
      idx: null !== (l = null == r ? void 0 : r.tier) && void 0 !== l ? l : null === (s = a.userStatus) || void 0 === s ? void 0 : s.claimedTier
    }) : null, c = null != d && null !== (n = d.messages.name) && void 0 !== n ? n : a.config.messages.rewardName, f = o ? Q.default.Messages.QUESTS_CLAIM_REWARD : a.config.messages.rewardName;
    return {
      subHeader: i ? Q.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : u,
      header: i ? c : f
    }
  }({
    quest: s,
    rewardCode: n,
    hasTieredRewardCodes: a
  }), {
    hasError: h,
    isLoading: R
  } = (0, y.useQuestsAssetsLoadState)();
  return (0, l.jsxs)("div", {
    style: i,
    className: B.rewardTile,
    children: [(0, l.jsxs)("div", {
      className: B.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": s.config.colors.primary
      },
      children: [R && !h && (0, l.jsx)(p.Spinner, {
        className: B.rewardTileAssetStatusIcon,
        type: p.SpinnerTypes.SPINNING_CIRCLE
      }), h && (0, l.jsx)(c.ImageWarningIcon, {
        className: B.rewardTileAssetStatusIcon
      }), (0, l.jsx)(j.default, {
        className: r()(B.rewardTileAsset, {
          [B.rewardTileAssetLoading]: R || h
        }),
        quest: s,
        questContent: D.QuestContent.QUEST_BAR
      })]
    }), (0, l.jsxs)("div", {
      className: B.rewardSubheading,
      children: [f && (0, l.jsx)(d.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: u.default.colors.TEXT_MUTED,
        className: B.rewardSubheadingIcon
      }), (0, l.jsx)(p.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: B.rewardSubheadingText,
        children: m
      })]
    }), (0, l.jsx)(p.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: B.rewardHeading,
      children: C
    })]
  })
}

function k(e) {
  let t = (0, i.useStateFromStores)([M.default], () => M.default.getQuest(e.questId));
  return null != t ? (0, l.jsx)(U, {
    ...e,
    quest: t
  }) : null
}

function U(e) {
  var t;
  let {
    transitionState: s,
    onClose: a,
    quest: r,
    location: u,
    questContentPosition: d
  } = e, c = n.useMemo(() => {
    var e;
    return (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), E = r.config.rewardCodePlatforms.length > 1, [v, w] = n.useState(E ? null : r.config.rewardCodePlatforms[0]), j = n.useRef(new o.Environment), k = n.useRef(null), [U, W] = n.useState(null), F = (0, i.useStateFromStores)([g.default], () => g.default.useReducedMotion), Z = (0, i.useStateFromStores)([T.default], () => T.default.hidePersonalInformation), {
    rewardCode: H,
    isFetchingRewardCode: q,
    isClaimingRewardCode: V
  } = (0, i.useStateFromStoresObject)([M.default], () => ({
    rewardCode: M.default.getRewardCode(r.id),
    isFetchingRewardCode: M.default.isFetchingRewardCode(r.id),
    isClaimingRewardCode: M.default.isClaimingRewardCode(r.id) || M.default.isClaimingReward(r.id)
  })), G = (0, O.isTieredRewardCodeQuest)({
    quest: r
  }), [z, Y] = n.useState(!1), X = E && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == H, J = n.useCallback((e, t, s) => {
    Y(!1), G ? (0, I.claimQuestReward)(e, t, s).catch(() => Y(!0)) : (0, I.claimQuestRewardCode)(e, t, s).catch(() => Y(!0))
  }, [G]), K = n.useCallback(e => {
    Y(!1), (0, I.fetchQuestRewardCode)(e).catch(() => Y(!0))
  }, []);
  n.useEffect(() => {
    var e, t;
    null == H && !z && !V && !q && !X && ((null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != v ? J(r.id, v, u) : (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && K(r.id))
  }, [r, H, V, q, z, X, v, u, J, K]);
  let $ = null;
  c && null != H ? $ = Q.default.Messages.QUESTS_REWARD_CODE_HEADER : null != H ? $ = Q.default.Messages.QUESTS_REWARD_CODE_CONGRATS : X && ($ = Q.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let ee = null != $ ? (0, l.jsx)(p.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: B.heading,
      children: $
    }) : null,
    et = function(e) {
      var t, s, n, a;
      let {
        quest: r,
        selectedPlatform: o,
        needsToConfirmPlatform: i,
        rewardCode: u,
        hasTieredRewardCodes: d
      } = e;
      if (i) return (0, l.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: B.bodyCopy,
        children: d ? Q.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : Q.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
          rewardName: r.config.messages.rewardName
        })
      });
      let c = null != o ? o : null == u ? void 0 : u.platform,
        f = d ? (0, O.getRewardCodeQuestReward)({
          quest: r,
          idx: null !== (n = null == u ? void 0 : u.tier) && void 0 !== n ? n : null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedTier
        }) : null,
        C = null !== (a = null == f ? void 0 : null === (s = f.messages) || void 0 === s ? void 0 : s.redemptionInstructionsByPlatform) && void 0 !== a ? a : r.config.messages.rewardRedemptionInstructionsByPlatform,
        m = null != c ? C[c] : void 0;
      return null != u && null != m ? (0, l.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: B.bodyCopy,
        children: _.default.parse(m, !1, {
          allowLinks: !0
        })
      }) : null
    }({
      quest: r,
      selectedPlatform: v,
      needsToConfirmPlatform: X,
      rewardCode: H,
      hasTieredRewardCodes: G
    }),
    es = n.useMemo(() => r.config.rewardCodePlatforms.map(e => ({
      label: (0, O.getPlatformString)(e),
      value: e
    })), [r.config.rewardCodePlatforms]),
    el = null;
  X && (el = (0, l.jsxs)(p.FormItem, {
    title: Q.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(p.Select, {
      placeholder: Q.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: es,
      select: e => {
        Y(!1), w(e)
      },
      isSelected: e => e === v,
      serialize: e => (0, O.getPlatformString)(e),
      className: z ? B.errorInput : "",
      isDisabled: V,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case D.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, l.jsx)(m.ScienceIcon, {
                className: B.platformSelectionOptionIcon
              });
            case D.QuestRewardCodePlatforms.PC:
              return (0, l.jsx)(h.ScreenIcon, {
                className: B.platformSelectionOptionIcon
              });
            case D.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, l.jsx)(C.PlaystationIcon, {
                className: B.platformSelectionOptionIcon
              });
            case D.QuestRewardCodePlatforms.SWITCH:
              return (0, l.jsx)(f.NintendoSwitchNeutralIcon, {
                className: B.platformSelectionOptionIcon
              });
            case D.QuestRewardCodePlatforms.XBOX:
              return (0, l.jsx)(R.XboxIcon, {
                className: B.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, l.jsxs)("div", {
          className: B.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), z ? (0, l.jsx)(p.InputError, {
      error: Q.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let en = null == H && (q || V),
    ea = en && !X ? (0, l.jsx)(p.Spinner, {}) : null,
    er = null;
  null != H ? er = (0, l.jsx)(p.FormItem, {
    title: Q.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(S.default, {
      value: Z ? Q.default.Messages.QUEST_REWARD_CODE_HIDDEN : H.code,
      delay: 1e3,
      buttonColor: p.Button.Colors.BRAND,
      onCopy: () => {
        Z && (0, A.copy)(H.code), (0, N.trackQuestContentClicked)({
          questId: r.id,
          questContent: u,
          questContentPosition: d,
          questContentCTA: N.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : z && !X && (er = (0, l.jsx)(p.FormItem, {
    title: Q.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(p.TextInput, {
      disabled: !0,
      error: Q.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: B.errorInput
    })
  }));
  let eo = () => {
      var e;
      X && null != v ? (J(r.id, v, u), (0, N.trackQuestContentClicked)({
        questId: r.id,
        questContent: u,
        questContentCTA: N.QuestContentCTA.GET_REWARD_CODE,
        questContentPosition: d
      })) : z ? (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? K(r.id) : null != v && (J(r.id, v, u), (0, N.trackQuestContentClicked)({
        questId: r.id,
        questContent: u,
        questContentCTA: N.QuestContentCTA.GET_REWARD_CODE,
        questContentPosition: d
      })) : a()
    },
    ei = X && V,
    eu = !ei && (X && null == v || en),
    ed = Q.default.Messages.QUESTS_REWARD_CODE_DONE;
  X ? ed = Q.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !X && z && (ed = Q.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ec = !F && null != H && !c && !z,
    ef = (0, l.jsx)(p.Button, {
      onClick: () => eo(),
      submitting: ei,
      disabled: eu,
      children: ed
    }),
    eC = null != ea && G;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.ConfettiCanvas, {
      ref: W,
      className: B.confettiCanvas,
      environment: j.current
    }), (0, l.jsx)("div", {
      ref: k,
      children: (0, l.jsxs)(p.ModalRoot, {
        transitionState: s,
        size: p.ModalSize.DYNAMIC,
        children: [(0, l.jsxs)("div", {
          className: B.modalBody,
          children: [(0, l.jsx)(p.ModalCloseButton, {
            className: B.closeButton,
            onClick: () => a()
          }), !eC && (0, l.jsx)(y.QuestsAssetContextProvider, {
            sentrySource: L.QuestsExperimentLocations.REWARD_CODE_MODAL,
            children: (0, l.jsx)(P, {
              quest: r,
              rewardCode: H,
              hasTieredRewardCodes: G
            })
          }), (0, l.jsxs)("div", {
            className: B.modalContent,
            children: [ee, et, el, ea, er]
          })]
        }), (0, l.jsx)(p.ModalFooter, {
          children: ef
        })]
      })
    }), ec && (0, l.jsx)(x.default, {
      confettiTarget: k.current,
      confettiCanvas: U,
      sprites: b.COMMON_CONFETTI_SPRITES,
      colors: b.COMMON_CONFETTI_COLORS
    })]
  })
}