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
  o = s("236471"),
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
  B = s("633076");

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
    location: u
  } = e, d = n.useMemo(() => {
    var e;
    return (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), c = r.config.rewardCodePlatforms.length > 1, [E, v] = n.useState(c ? null : r.config.rewardCodePlatforms[0]), w = n.useRef(new o.Environment), j = n.useRef(null), [k, U] = n.useState(null), W = (0, i.useStateFromStores)([g.default], () => g.default.useReducedMotion), F = (0, i.useStateFromStores)([T.default], () => T.default.hidePersonalInformation), {
    rewardCode: Z,
    isFetchingRewardCode: H,
    isClaimingRewardCode: q
  } = (0, i.useStateFromStoresObject)([M.default], () => ({
    rewardCode: M.default.getRewardCode(r.id),
    isFetchingRewardCode: M.default.isFetchingRewardCode(r.id),
    isClaimingRewardCode: M.default.isClaimingRewardCode(r.id) || M.default.isClaimingReward(r.id)
  })), V = (0, O.isTieredRewardCodeQuest)({
    quest: r
  }), [G, z] = n.useState(!1), Y = c && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == Z, X = n.useCallback((e, t, s) => {
    z(!1), V ? (0, I.claimQuestReward)(e, t, s).catch(() => z(!0)) : (0, I.claimQuestRewardCode)(e, t, s).catch(() => z(!0))
  }, [V]), J = n.useCallback(e => {
    z(!1), (0, I.fetchQuestRewardCode)(e).catch(() => z(!0))
  }, []);
  n.useEffect(() => {
    var e, t;
    null == Z && !G && !q && !H && !Y && ((null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != E ? X(r.id, E, u) : (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && J(r.id))
  }, [r, Z, q, H, G, Y, E, u, X, J]);
  let K = null;
  d && null != Z ? K = Q.default.Messages.QUESTS_REWARD_CODE_HEADER : null != Z ? K = Q.default.Messages.QUESTS_REWARD_CODE_CONGRATS : Y && (K = Q.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let $ = null != K ? (0, l.jsx)(p.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: B.heading,
      children: K
    }) : null,
    ee = function(e) {
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
      selectedPlatform: E,
      needsToConfirmPlatform: Y,
      rewardCode: Z,
      hasTieredRewardCodes: V
    }),
    et = n.useMemo(() => r.config.rewardCodePlatforms.map(e => ({
      label: (0, O.getPlatformString)(e),
      value: e
    })), [r.config.rewardCodePlatforms]),
    es = null;
  Y && (es = (0, l.jsxs)(p.FormItem, {
    title: Q.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, l.jsx)(p.Select, {
      placeholder: Q.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: et,
      select: e => {
        z(!1), v(e)
      },
      isSelected: e => e === E,
      serialize: e => (0, O.getPlatformString)(e),
      className: G ? B.errorInput : "",
      isDisabled: q,
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
    }), G ? (0, l.jsx)(p.InputError, {
      error: Q.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let el = null == Z && (H || q),
    en = el && !Y ? (0, l.jsx)(p.Spinner, {}) : null,
    ea = null;
  null != Z ? ea = (0, l.jsx)(p.FormItem, {
    title: Q.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(S.default, {
      value: F ? Q.default.Messages.QUEST_REWARD_CODE_HIDDEN : Z.code,
      delay: 1e3,
      buttonColor: p.Button.Colors.BRAND,
      onCopy: () => {
        F && (0, A.copy)(Z.code), (0, N.trackQuestContentClicked)({
          questId: r.id,
          questContent: u,
          questContentCTA: N.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : G && !Y && (ea = (0, l.jsx)(p.FormItem, {
    title: Q.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, l.jsx)(p.TextInput, {
      disabled: !0,
      error: Q.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: B.errorInput
    })
  }));
  let er = () => {
      var e;
      Y && null != E ? (X(r.id, E, u), (0, N.trackQuestContentClicked)({
        questId: r.id,
        questContent: u,
        questContentCTA: N.QuestContentCTA.GET_REWARD_CODE
      })) : G ? (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? J(r.id) : null != E && (X(r.id, E, u), (0, N.trackQuestContentClicked)({
        questId: r.id,
        questContent: u,
        questContentCTA: N.QuestContentCTA.GET_REWARD_CODE
      })) : a()
    },
    eo = Y && q,
    ei = !eo && (Y && null == E || el),
    eu = Q.default.Messages.QUESTS_REWARD_CODE_DONE;
  Y ? eu = Q.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !Y && G && (eu = Q.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let ed = !W && null != Z && !d && !G,
    ec = (0, l.jsx)(p.Button, {
      onClick: () => er(),
      submitting: eo,
      disabled: ei,
      children: eu
    }),
    ef = null != en && V;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.ConfettiCanvas, {
      ref: U,
      className: B.confettiCanvas,
      environment: w.current
    }), (0, l.jsx)("div", {
      ref: j,
      children: (0, l.jsxs)(p.ModalRoot, {
        transitionState: s,
        size: p.ModalSize.DYNAMIC,
        children: [(0, l.jsxs)("div", {
          className: B.modalBody,
          children: [(0, l.jsx)(p.ModalCloseButton, {
            className: B.closeButton,
            onClick: () => a()
          }), !ef && (0, l.jsx)(y.QuestsAssetContextProvider, {
            sentrySource: L.QuestsExperimentLocations.REWARD_CODE_MODAL,
            children: (0, l.jsx)(P, {
              quest: r,
              rewardCode: Z,
              hasTieredRewardCodes: V
            })
          }), (0, l.jsxs)("div", {
            className: B.modalContent,
            children: [$, ee, es, en, ea]
          })]
        }), (0, l.jsx)(p.ModalFooter, {
          children: ec
        })]
      })
    }), ed && (0, l.jsx)(x.default, {
      confettiTarget: j.current,
      confettiCanvas: k,
      sprites: b.COMMON_CONFETTI_SPRITES,
      colors: b.COMMON_CONFETTI_COLORS
    })]
  })
}