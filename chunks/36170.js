"use strict";
s.r(l), s.d(l, {
  default: function() {
    return R
  }
}), s("222007");
var a = s("37983"),
  t = s("884691"),
  d = s("446674"),
  r = s("77078"),
  n = s("913801"),
  i = s("448881"),
  u = s("2973"),
  o = s("227231"),
  E = s("782340"),
  c = s("429383");

function R(e) {
  var l;
  let {
    transitionState: s,
    onClose: R,
    quest: m
  } = e, _ = t.useMemo(() => {
    var e;
    return (null === (e = m.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }, []), S = m.config.rewardCodePlatforms.length > 1, [C, f] = t.useState(S ? null : m.config.rewardCodePlatforms[0]), {
    rewardCode: g,
    isFetchingRewardCode: D,
    isClaimingRewardCode: A
  } = (0, d.useStateFromStoresObject)([u.default], () => ({
    rewardCode: u.default.getRewardCode(m.id),
    isFetchingRewardCode: u.default.isFetchingRewardCode(m.id),
    isClaimingRewardCode: u.default.isClaimingRewardCode(m.id)
  })), [T, h] = t.useState(!1), O = S && (null === (l = m.userStatus) || void 0 === l ? void 0 : l.claimedAt) == null && null == g, M = t.useCallback((e, l) => {
    h(!1), (0, i.claimQuestRewardCode)(e, l).catch(() => h(!0))
  }, []), x = t.useCallback(e => {
    h(!1), (0, i.fetchQuestRewardCode)(e).catch(() => h(!0))
  }, []);
  t.useEffect(() => {
    var e, l;
    null == g && !T && !A && !D && !O && ((null === (e = m.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != C ? M(m.id, C) : (null === (l = m.userStatus) || void 0 === l ? void 0 : l.claimedAt) != null && x(m.id))
  }, [m, g, A, D, T, O, C, M, x]);
  let v = null;
  _ && null != g ? v = E.default.Messages.QUESTS_REWARD_CODE_HEADER : null != g ? v = E.default.Messages.QUESTS_REWARD_CODE_CONGRATS : O && (v = E.default.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
  let w = null != v ? (0, a.jsx)(r.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: c.heading,
      children: v
    }) : null,
    N = null;
  O ? N = E.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({
    rewardName: m.config.messages.rewardName
  }) : null != g && (N = m.config.messages.rewardRedemptionInstructions);
  let p = null != N ? (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: c.bodyCopy,
      children: N
    }) : null,
    j = t.useMemo(() => m.config.rewardCodePlatforms.map(e => ({
      label: (0, o.getPlatformString)(e),
      value: e
    })), [m.config.rewardCodePlatforms]),
    Q = null;
  O && (Q = (0, a.jsxs)(r.FormItem, {
    title: E.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
    children: [(0, a.jsx)(r.Select, {
      placeholder: E.default.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
      options: j,
      select: e => {
        h(!1), f(e)
      },
      isSelected: e => e === C,
      serialize: e => (0, o.getPlatformString)(e),
      className: T ? c.errorInput : "",
      isDisabled: A
    }), T ? (0, a.jsx)(r.InputError, {
      error: E.default.Messages.QUESTS_REWARD_CODE_ERROR
    }) : null]
  }));
  let U = null == g && (D || A),
    b = U && !O ? (0, a.jsx)(r.Spinner, {
      className: c.spinner
    }) : null,
    I = null;
  null != g ? I = (0, a.jsx)(r.FormItem, {
    title: E.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(n.default, {
      value: g.code,
      delay: 1e3,
      buttonColor: r.Button.Colors.BRAND
    })
  }) : T && !O && (I = (0, a.jsx)(r.FormItem, {
    title: E.default.Messages.QUESTS_REWARD_CODE_HEADER,
    children: (0, a.jsx)(r.TextInput, {
      disabled: !0,
      error: E.default.Messages.QUESTS_REWARD_CODE_ERROR,
      inputClassName: c.errorInput
    })
  }));
  let W = () => {
      var e;
      O && null != C ? M(m.id, C) : T ? (null === (e = m.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? x(m.id) : null != C && M(m.id, C) : R()
    },
    L = O && A,
    F = !L && (O && null == C || U),
    P = E.default.Messages.QUESTS_REWARD_CODE_DONE;
  O ? P = E.default.Messages.QUESTS_REWARD_CODE_GET_CODE : !O && T && (P = E.default.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
  let k = (0, a.jsx)(r.Button, {
    onClick: () => W(),
    submitting: L,
    disabled: F,
    children: P
  });
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: s,
    size: r.ModalSize.DYNAMIC,
    children: [(0, a.jsxs)("div", {
      className: c.modalBody,
      children: [(0, a.jsx)(r.ModalCloseButton, {
        className: c.closeButton,
        onClick: () => R()
      }), (0, a.jsx)("div", {
        className: c.rewardTile,
        children: (0, a.jsx)("img", {
          src: (0, o.getRewardAssetUrl)(m.id),
          alt: m.config.messages.rewardName,
          className: c.reward
        })
      }), (0, a.jsxs)("div", {
        className: c.modalContent,
        children: [w, p, Q, b, I]
      })]
    }), (0, a.jsx)(r.ModalFooter, {
      children: k
    })]
  })
}