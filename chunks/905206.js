"use strict";
n.r(t), n.d(t, {
  reactionForId: function() {
    return A
  },
  isPollMessageDirectlyInteractive: function() {
    return g
  },
  computeBasicPollChatData: function() {
    return M
  },
  default: function() {
    return O
  }
}), n("222007"), n("794252");
var s = n("506838"),
  a = n("418009"),
  l = n("385976"),
  i = n("867805"),
  r = n("42203"),
  o = n("377253"),
  u = n("697218"),
  d = n("315102"),
  c = n("402671"),
  E = n("773336"),
  f = n("641126"),
  _ = n("562228"),
  T = n("214400"),
  I = n("410328"),
  m = n("868586"),
  N = n("973799"),
  p = n("49111"),
  S = n("782340");
let C = {
  channelId: p.EMPTY_STRING_SNOWFLAKE_ID,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function A(e, t) {
  for (let n of e) {
    let e = "number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id;
    if (e === t) return n
  }
}
let h = e => (0, s.match)(e).with({
  isInteractive: !1
}, () => "normalVote").with({
  isExpired: !0,
  isLeader: !0,
  didSelfVote: !0
}, () => "victorSelected").with({
  isExpired: !0,
  isLeader: !0,
  didSelfVote: !1
}, () => "victorNotSelected").with({
  isExpired: !0,
  didSelfVote: !0
}, () => "loserSelected").with({
  isExpired: !0
}, () => "notVoted").with({
  didSelfVote: !0,
  isExpired: !1
}, () => "voted").with({
  hasVoted: !0,
  isExpired: !1
}, () => "notVoted").with({
  isSelected: !0
}, () => "selected").with({
  isExpired: !1,
  showResults: !0
}, () => "notVoted").otherwise(() => "normalVote");

function g(e) {
  let t = o.default.getMessage(e.channel_id, e.id);
  return t === e && !0
}

function M(e, t) {
  var n, s;
  let {
    formattedExpirationLabel: a
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: l
  } = e;
  if (null == l) return;
  let i = e.state === p.MessageStates.SENT,
    r = i ? null != a ? a : (0, N.formatExpirationLabel)(l.expiry) : "",
    u = null == r && i,
    {
      selectedAnswerIds: d,
      submitting: c,
      editing: E,
      showResults: _
    } = null !== (n = null != t ? t : (0, f.getPollState)(e.getChannelId(), e.id)) && void 0 !== n ? n : C,
    T = e.reactions,
    I = !0;
  if (!g(e)) {
    let t = o.default.getMessage(e.channel_id, e.id);
    I = null != t, T = null !== (s = null == t ? void 0 : t.reactions) && void 0 !== s ? s : T
  }
  let m = d.size > 0,
    S = T.some(e => !0 === e.me_vote),
    A = !E && S,
    h = I && (A || u || _);
  return {
    poll: l,
    canTapAnswers: i && (!S || E || h),
    canRemoveVote: A && i && !u,
    canShowVoteCounts: h,
    canSubmitVote: !c && m && !A && i,
    expirationLabel: r,
    hasSelectedAnswer: m,
    hasVoted: A,
    hasVoteRecorded: S,
    isEditingVote: E,
    isExpired: u,
    isInteractive: I,
    isSent: i,
    reactions: T,
    selectedAnswerIds: d,
    submitting: c,
    tapShouldOpenVotersModal: h,
    showResults: _
  }
}

function O(e, t) {
  var n, o;
  let {
    animateEmoji: f = !1,
    theme: N = "dark",
    formattedExpirationLabel: p
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: C
  } = e;
  if (null == C) return;
  let g = u.default.getCurrentUser();
  if (null == g) return;
  let O = null === (o = r.default.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
    R = (0, I.getAvatarUrl)(g, O),
    L = C.answers,
    v = C.layout_type,
    P = M(e, t, {
      formattedExpirationLabel: p
    });
  if (null == P) return;
  let {
    canTapAnswers: D,
    canRemoveVote: x,
    canShowVoteCounts: y,
    canSubmitVote: U,
    expirationLabel: j = S.default.Messages.POLL_EXPIRED,
    hasSelectedAnswer: b,
    hasVoted: G,
    isEditingVote: B,
    isExpired: k,
    isInteractive: F,
    reactions: w,
    selectedAnswerIds: H,
    submitting: V,
    tapShouldOpenVotersModal: Y,
    showResults: K
  } = P, W = (0, _.getTotalVotes)(w), z = S.default.Messages.POLL_VOTES_COUNT.format({
    count: String(W)
  }), Q = Math.max(...L.map(e => {
    var t, n;
    let s = A(w, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), Z = L.map(e => {
    var t, n, r;
    let o = "".concat(e.answer_id),
      u = A(w, o),
      E = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      _ = H.has(o),
      T = E >= Q && 0 !== E,
      I = G && null !== (r = null == u ? void 0 : u.me_vote) && void 0 !== r && r,
      m = h({
        didSelfVote: I,
        hasVoted: G,
        isExpired: k,
        isInteractive: F,
        isSelected: _,
        isLeader: T,
        showResults: K
      });
    return {
      answerId: o,
      pollMedia: {
        text: e.poll_media.text,
        emoji: function(e) {
          let {
            animateEmoji: t = !1,
            size: n = 48
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null == e) return;
          let s = e.animated;
          if (null == s && null != e.id) {
            var a, r;
            s = null !== (r = null === (a = l.default.getCustomEmojiById(e.id)) || void 0 === a ? void 0 : a.animated) && void 0 !== r && r
          }
          let o = t && null != s && s;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? i.default.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? c.default.getURL(e.name) : d.default.getEmojiURL({
              id: e.id,
              animated: o,
              size: n
            }),
            animated: o
          }
        }(e.poll_media.emoji, {
          animateEmoji: f
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: _,
      isVictor: k && T,
      didSelfVote: I,
      style: m,
      shouldAnimateTransition: V,
      votesPercentage: Math.round(100 * (0 === W ? 0 : E / W)),
      votes: (0, s.match)(v).with(a.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(String(E), ")")).otherwise(() => S.default.Messages.POLL_VOTES_COUNT.format({
        count: String(E)
      }))
    }
  }), q = (0, s.match)({
    isExpired: k,
    canSubmitVote: U,
    hasVoted: G,
    isEditingVote: B,
    canRemoveVote: x,
    isInteractive: F,
    showResults: K
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: S.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: b,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: S.default.Messages.POLL_REMOVE_VOTE,
    presentation: "secondaryButton",
    enabled: !0,
    type: "remove"
  })).with({
    hasVoted: !1,
    showResults: !0
  }, () => ({
    label: S.default.Messages.POLL_HIDE_VOTES,
    presentation: "secondaryButton",
    enabled: !0,
    type: "showVotes"
  })).otherwise(() => ({
    label: S.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: U,
    type: "submit"
  })), J = (0, s.match)({
    isInteractive: F,
    isEditingVote: B
  }).with({
    isInteractive: !1
  }, () => ({
    label: S.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: S.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: z,
    secondaryLabel: j,
    presentation: "text",
    enabled: !0,
    type: "showVoterDetails"
  })), X = !F || k || G || K ? void 0 : {
    label: S.default.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, $ = C.allow_multiselect, ee = (0, s.match)({
    isInteractive: F,
    isExpired: k,
    canSelectMultipleAnswers: $
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => S.default.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => S.default.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: C.question,
    promptLabel: ee,
    answers: Z,
    answersInteraction: (0, s.match)({
      tapShouldOpenVotersModal: Y,
      canTapAnswers: D,
      canSelectMultipleAnswers: $
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => T.PollChatAnswerInteractionType.LIST).with({
      canTapAnswers: !1
    }, () => T.PollChatAnswerInteractionType.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => T.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => T.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: (0, s.match)({
      tapShouldOpenVotersModal: Y,
      platform: (0, E.getNativePlatform)()
    }).with({
      tapShouldOpenVotersModal: !0,
      platform: "android"
    }, () => S.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).with({
      tapShouldOpenVotersModal: !0,
      platform: "ios"
    }, () => S.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS).with({
      tapShouldOpenVotersModal: !0,
      platform: "web"
    }, () => S.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).otherwise(() => void 0),
    layoutType: v,
    resources: (0, m.default)({
      theme: N,
      layoutType: v
    }),
    containerStyle: "normal",
    primaryAction: q,
    canTapAnswers: D,
    canSelectMultipleAnswers: $,
    hasSelectedAnswer: b,
    canShowVoteCounts: y,
    hasVoted: G,
    isExpired: k,
    myAvatarUrl: R,
    secondaryAction: J,
    tertiaryAction: X
  }
}