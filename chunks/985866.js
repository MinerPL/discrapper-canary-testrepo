"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  r = s("692547"),
  o = s("979184"),
  i = s("299847"),
  d = s("533627"),
  c = s("381837"),
  u = s("718671"),
  f = s("432594"),
  C = s("780384"),
  h = s("481060"),
  m = s("484614"),
  E = s("410030"),
  R = s("454585"),
  p = s("594174"),
  g = s("302221"),
  x = s("617136"),
  S = s("272008"),
  v = s("569984"),
  _ = s("497505"),
  A = s("918701"),
  T = s("406657"),
  N = s("689938"),
  M = s("430515");

function w(e) {
  var t;
  let {
    quest: s,
    rewardCode: l
  } = e, n = (0, C.isThemeDark)((0, E.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, g.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, g.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(n ? "var(--black)" : "var(--white)", "\n    ")
  }, d = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != l;
  return (0, a.jsxs)("div", {
    style: i,
    className: M.rewardTile,
    children: [(0, a.jsx)("img", {
      src: (0, A.getRewardAssetUrl)(s),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: M.reward
    }), (0, a.jsxs)("div", {
      className: M.rewardSubheading,
      children: [d && (0, a.jsx)(o.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: r.default.colors.TEXT_MUTED,
        className: M.rewardSubheadingIcon
      }), (0, a.jsx)(h.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: M.rewardSubheadingText,
        children: d ? N.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : N.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, a.jsx)(h.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: M.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function I(e) {
  return (0, n.useStateFromStores)([p.default], () => {
    var e;
    return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  }) ? (0, a.jsx)(j, {
    ...e
  }) : (0, a.jsx)(T.QuestsRewardCodeModalUnverified, {
    ...e
  })
}

function j(e) {
  var t;
  let {
    transitionState: s,
    onClose: r,
    quest: o,
    location: C
  } = e, E = l.useMemo(() => {
    var e;
    return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), p = o.config.rewardCodePlatforms.length > 1, [g, T] = l.useState(p ? null : o.config.rewardCodePlatforms[0]), {
    rewardCode: I,
    isFetchingRewardCode: j,
    isClaimingRewardCode: D
  } = (0, n.useStateFromStoresObject)([v.default], () => ({
    rewardCode: v.default.getRewardCode(o.id),
    isFetchingRewardCode: v.default.isFetchingRewardCode(o.id),
    isClaimingRewardCode: v.default.isClaimingRewardCode(o.id)
  })), [O, b] = l.useState(!1), y = p && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == I, L = l.useCallback((e, t, s) => {
    b(!1), (0, S.claimQuestRewardCode)(e, t, s).catch(() => b(!0))
  }, []), B = l.useCallback(e => {
    b(!1), (0, S.fetchQuestRewardCode)(e).catch(() => b(!0))
  }, []);
  l.useEffect(() => {
    var e, t;
    null == I && !O && !D && !j && !y && ((null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != g ? L(o.id, g, C) : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && B(o.id))
  }, [o, I, D, j, O, y, g, C, L, B]);
  let k = null;
  E && null != I ? k = N.default.Messages.QUESTS_REWARD_CODE_HEADER : null != I ? k = N.default.Messages.QUESTS_REWARD_CODE_CONGRATS : y && (k = N.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let U = null != k ? (0, a.jsx)(h.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: M.heading,
      children: k
    }) : null,
    Q = null;
  y && (Q = N.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: o.config.messages.rewardName
  }));
  let P = null != g ? o.config.messages.rewardRedemptionInstructionsByPlatform[g] : void 0;
  null != I && null != P && (Q = R.default.parse(P, !1, {
    allowLinks: !0
  }));
  let F = null != Q ? (0, a.jsx)(h.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: M.bodyCopy,
      children: Q
    }) : null,
    W = l.useMemo(() => o.config.rewardCodePlatforms.map(e => ({
      label: (0, A.getPlatformString)(e),
      value: e
    })), [o.config.rewardCodePlatforms]),
    H = null;
  y && (H = (0, a.jsxs)(h.FormItem, {
    title: N.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, a.jsx)(h.Select, {
      placeholder: N.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: W,
      select: e => {
        b(!1), T(e)
      },
      isSelected: e => e === g,
      serialize: e => (0, A.getPlatformString)(e),
      className: O ? M.errorInput : "",
      isDisabled: D,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case _.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, a.jsx)(c.ScienceIcon, {
                className: M.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.PC:
              return (0, a.jsx)(u.ScreenIcon, {
                className: M.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, a.jsx)(d.PlaystationIcon, {
                className: M.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.SWITCH:
              return (0, a.jsx)(i.NintendoSwitchNeutralIcon, {
                className: M.platformSelectionOptionIcon
              });
            case _.QuestRewardCodePlatforms.XBOX:
              return (0, a.jsx)(f.XboxIcon, {
                className: M.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, a.jsxs)("div", {
          className: M.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), O ? (0, a.jsx)(h.InputError, {
      error: N.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let Z = null == I && (j || D),
    V = Z && !y ? (0, a.jsx)(h.Spinner, {
      className: M.__invalid_spinner
    }) : null,
    q = null;
  null != I ? q = (0, a.jsx)(h.FormItem, {
    title: N.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(m.default, {
      value: I.code,
      delay: 1e3,
      buttonColor: h.Button.Colors.BRAND,
      onCopy: () => {
        (0, x.trackQuestContentClicked)({
          questId: o.id,
          questContent: C,
          questContentCTA: x.QuestContentCTA.COPY_REWARD_CODE
        })
      }
    })
  }) : O && !y && (q = (0, a.jsx)(h.FormItem, {
    title: N.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(h.TextInput, {
      disabled: !0,
      error: N.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: M.errorInput
    })
  }));
  let z = () => {
      var e;
      y && null != g ? (L(o.id, g, C), (0, x.trackQuestContentClicked)({
        questId: o.id,
        questContent: C,
        questContentCTA: x.QuestContentCTA.GET_REWARD_CODE
      })) : O ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? B(o.id) : null != g && (L(o.id, g, C), (0, x.trackQuestContentClicked)({
        questId: o.id,
        questContent: C,
        questContentCTA: x.QuestContentCTA.GET_REWARD_CODE
      })) : r()
    },
    G = y && D,
    Y = !G && (y && null == g || Z),
    X = N.default.Messages.QUESTS_REWARD_CODE_DONE;
  y ? X = N.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !y && O && (X = N.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let K = (0, a.jsx)(h.Button, {
    onClick: () => z(),
    submitting: G,
    disabled: Y,
    children: X
  });
  return (0, a.jsxs)(h.ModalRoot, {
    transitionState: s,
    size: h.ModalSize.DYNAMIC,
    children: [(0, a.jsxs)("div", {
      className: M.modalBody,
      children: [(0, a.jsx)(h.ModalCloseButton, {
        className: M.closeButton,
        onClick: () => r()
      }), (0, a.jsx)(w, {
        quest: o,
        rewardCode: I
      }), (0, a.jsxs)("div", {
        className: M.modalContent,
        children: [U, F, H, V, q]
      })]
    }), (0, a.jsx)(h.ModalFooter, {
      children: K
    })]
  })
}