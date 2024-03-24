"use strict";
s.r(t), s.d(t, {
  default: function() {
    return w
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  r = s("669491"),
  o = s("276825"),
  i = s("24763"),
  d = s("199179"),
  c = s("91297"),
  u = s("265614"),
  f = s("267013"),
  h = s("819855"),
  m = s("77078"),
  C = s("913801"),
  R = s("841098"),
  E = s("367376"),
  p = s("697218"),
  g = s("284679"),
  x = s("448881"),
  S = s("2973"),
  v = s("588025"),
  _ = s("227231"),
  N = s("260952"),
  M = s("782340"),
  A = s("435251");

function T(e) {
  var t;
  let {
    quest: s,
    rewardCode: l
  } = e, n = (0, h.isThemeDark)((0, R.default)()), i = {
    border: "1px solid ".concat(s.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, g.hexOpacityToRgba)(s.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, g.hexOpacityToRgba)(s.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(n ? "var(--black)" : "var(--white)", "\n    ")
  }, d = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != l;
  return (0, a.jsxs)("div", {
    style: i,
    className: A.rewardTile,
    children: [(0, a.jsx)("img", {
      src: (0, _.getRewardAssetUrl)(s.id),
      alt: s.config.messages.rewardName,
      style: {
        border: "1px solid ".concat(s.config.colors.primary)
      },
      className: A.reward
    }), (0, a.jsxs)("div", {
      className: A.rewardSubheading,
      children: [d && (0, a.jsx)(o.CheckmarkSmallIcon, {
        width: 16,
        height: 16,
        color: r.default.colors.TEXT_MUTED,
        className: A.rewardSubheadingIcon
      }), (0, a.jsx)(m.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: A.rewardSubheadingText,
        children: d ? M.default.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : M.default.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER
      })]
    }), (0, a.jsx)(m.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: A.rewardHeading,
      children: s.config.messages.rewardName
    })]
  })
}

function w(e) {
  let t = (0, n.useStateFromStores)([p.default], () => {
    var e;
    return null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  });
  return t ? (0, a.jsx)(I, {
    ...e
  }) : (0, a.jsx)(N.QuestsRewardCodeModalUnverified, {
    ...e
  })
}

function I(e) {
  var t;
  let {
    transitionState: s,
    onClose: r,
    quest: o,
    location: h
  } = e, R = l.useMemo(() => {
    var e;
    return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), p = o.config.rewardCodePlatforms.length > 1, [g, N] = l.useState(p ? null : o.config.rewardCodePlatforms[0]), {
    rewardCode: w,
    isFetchingRewardCode: I,
    isClaimingRewardCode: j
  } = (0, n.useStateFromStoresObject)([S.default], () => ({
    rewardCode: S.default.getRewardCode(o.id),
    isFetchingRewardCode: S.default.isFetchingRewardCode(o.id),
    isClaimingRewardCode: S.default.isClaimingRewardCode(o.id)
  })), [D, O] = l.useState(!1), L = p && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == w, b = l.useCallback((e, t, s) => {
    O(!1), (0, x.claimQuestRewardCode)(e, t, s).catch(() => O(!0))
  }, []), B = l.useCallback(e => {
    O(!1), (0, x.fetchQuestRewardCode)(e).catch(() => O(!0))
  }, []);
  l.useEffect(() => {
    var e, t;
    null == w && !D && !j && !I && !L && ((null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != g ? b(o.id, g, h) : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && B(o.id))
  }, [o, w, j, I, D, L, g, h, b, B]);
  let y = null;
  R && null != w ? y = M.default.Messages.QUESTS_REWARD_CODE_HEADER : null != w ? y = M.default.Messages.QUESTS_REWARD_CODE_CONGRATS : L && (y = M.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let U = null != y ? (0, a.jsx)(m.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: A.heading,
      children: y
    }) : null,
    k = null;
  L && (k = M.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: o.config.messages.rewardName
  }));
  let F = null != g ? o.config.messages.rewardRedemptionInstructionsByPlatform[g] : void 0;
  null != w && null != F && (k = E.default.parse(F, !1, {
    allowLinks: !0
  }));
  let P = null != k ? (0, a.jsx)(m.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: A.bodyCopy,
      children: k
    }) : null,
    Q = l.useMemo(() => o.config.rewardCodePlatforms.map(e => ({
      label: (0, _.getPlatformString)(e),
      value: e
    })), [o.config.rewardCodePlatforms]),
    W = null;
  L && (W = (0, a.jsxs)(m.FormItem, {
    title: M.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, a.jsx)(m.Select, {
      placeholder: M.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: Q,
      select: e => {
        O(!1), N(e)
      },
      isSelected: e => e === g,
      serialize: e => (0, _.getPlatformString)(e),
      className: D ? A.errorInput : "",
      isDisabled: j,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case v.QuestRewardCodePlatforms.CROSS_PLATFORM:
              return (0, a.jsx)(c.ScienceIcon, {
                className: A.platformSelectionOptionIcon
              });
            case v.QuestRewardCodePlatforms.PC:
              return (0, a.jsx)(u.ScreenIcon, {
                className: A.platformSelectionOptionIcon
              });
            case v.QuestRewardCodePlatforms.PLAYSTATION:
              return (0, a.jsx)(d.PlaystationIcon, {
                className: A.platformSelectionOptionIcon
              });
            case v.QuestRewardCodePlatforms.SWITCH:
              return (0, a.jsx)(i.NintendoSwitchNeutralIcon, {
                className: A.platformSelectionOptionIcon
              });
            case v.QuestRewardCodePlatforms.XBOX:
              return (0, a.jsx)(f.XboxIcon, {
                className: A.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, a.jsxs)("div", {
          className: A.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), D ? (0, a.jsx)(m.InputError, {
      error: M.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let H = null == w && (I || j),
    Z = H && !L ? (0, a.jsx)(m.Spinner, {
      className: A.spinner
    }) : null,
    V = null;
  null != w ? V = (0, a.jsx)(m.FormItem, {
    title: M.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(C.default, {
      value: w.code,
      delay: 1e3,
      buttonColor: m.Button.Colors.BRAND
    })
  }) : D && !L && (V = (0, a.jsx)(m.FormItem, {
    title: M.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(m.TextInput, {
      disabled: !0,
      error: M.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: A.errorInput
    })
  }));
  let z = () => {
      var e;
      L && null != g ? b(o.id, g, h) : D ? (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? B(o.id) : null != g && b(o.id, g, h) : r()
    },
    G = L && j,
    Y = !G && (L && null == g || H),
    X = M.default.Messages.QUESTS_REWARD_CODE_DONE;
  L ? X = M.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !L && D && (X = M.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let q = (0, a.jsx)(m.Button, {
    onClick: () => z(),
    submitting: G,
    disabled: Y,
    children: X
  });
  return (0, a.jsxs)(m.ModalRoot, {
    transitionState: s,
    size: m.ModalSize.DYNAMIC,
    children: [(0, a.jsxs)("div", {
      className: A.modalBody,
      children: [(0, a.jsx)(m.ModalCloseButton, {
        className: A.closeButton,
        onClick: () => r()
      }), (0, a.jsx)(T, {
        quest: o,
        rewardCode: w
      }), (0, a.jsxs)("div", {
        className: A.modalContent,
        children: [U, P, W, Z, V]
      })]
    }), (0, a.jsx)(m.ModalFooter, {
      children: q
    })]
  })
}