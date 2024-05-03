"use strict";
n.r(t), n.d(t, {
  computeBasicPollChatData: function() {
    return x
  },
  default: function() {
    return L
  },
  isPollMessageDirectlyInteractive: function() {
    return O
  },
  reactionForId: function() {
    return R
  }
}), n("47120"), n("627341");
var s = n("278074"),
  a = n("263568"),
  l = n("607070"),
  i = n("339085"),
  r = n("633302"),
  o = n("715903"),
  u = n("69882"),
  d = n("592125"),
  c = n("271383"),
  f = n("375954"),
  E = n("594174"),
  _ = n("768581"),
  m = n("176354"),
  T = n("358085"),
  I = n("798628"),
  p = n("79390"),
  h = n("839963"),
  N = n("897325"),
  S = n("57101"),
  C = n("562293"),
  A = n("981631"),
  g = n("689938");
let M = {
  channelId: A.EMPTY_STRING_SNOWFLAKE_ID,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function R(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}
let v = e => (0, s.match)(e).with({
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

function O(e) {
  return f.default.getMessage(e.channel_id, e.id) === e && !0
}

function x(e, t) {
  var n, s, a, l;
  let {
    formattedExpirationLabel: i
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: r
  } = e;
  if (null == r) return;
  let E = e.state === A.MessageStates.SENT,
    _ = E ? null != i ? i : (0, C.formatExpirationLabel)(r.expiry) : "",
    m = null == _ && E,
    {
      selectedAnswerIds: T,
      submitting: p,
      editing: h,
      showResults: N
    } = null !== (a = null != t ? t : (0, I.getPollState)(e.getChannelId(), e.id)) && void 0 !== a ? a : M,
    S = e.reactions,
    g = !0;
  if (!O(e)) {
    let t = f.default.getMessage(e.channel_id, e.id);
    g = !e.isSearchHit && null != t, S = null !== (l = null == t ? void 0 : t.reactions) && void 0 !== l ? l : S
  }
  let R = T.size > 0,
    v = S.some(e => !0 === e.me_vote),
    x = !h && v,
    L = x || m || N,
    D = E && g && (!v || h || L),
    P = null === (s = d.default.getChannel(e.getChannelId())) || void 0 === s ? void 0 : null === (n = s.getGuildId) || void 0 === n ? void 0 : n.call(s),
    y = null != P ? c.default.getSelfMember(P) : null,
    U = (0, o.hasAutomodQuarantinedProfile)(y),
    j = (0, u.isMemberCommunicationDisabled)(y);
  return {
    poll: r,
    canTapAnswers: D,
    canRemoveVote: x && E && !m,
    canShowVoteCounts: L,
    canSubmitVote: !p && R && !x && E && !U && !j,
    expirationLabel: _,
    hasSelectedAnswer: R,
    hasVoted: x,
    hasVoteRecorded: v,
    isEditingVote: h,
    isExpired: m,
    isInteractive: g,
    isSent: E,
    reactions: S,
    selectedAnswerIds: T,
    submitting: p,
    tapShouldOpenVotersModal: L,
    showResults: N
  }
}

function L(e, t) {
  var n, o;
  let {
    animateEmoji: u = !1,
    theme: c = "dark",
    formattedExpirationLabel: f
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: I
  } = e;
  if (null == I) return;
  let C = E.default.getCurrentUser();
  if (null == C) return;
  let A = l.default.useReducedMotion,
    M = null === (o = d.default.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
    O = (0, N.getAvatarUrl)(C, M),
    L = I.answers,
    D = I.layout_type,
    P = x(e, t, {
      formattedExpirationLabel: f
    });
  if (null == P) return;
  let {
    canTapAnswers: y,
    canRemoveVote: U,
    canShowVoteCounts: j,
    canSubmitVote: b,
    expirationLabel: B = g.default.Messages.POLL_EXPIRED,
    hasSelectedAnswer: G,
    hasVoted: F,
    isEditingVote: k,
    isExpired: w,
    isInteractive: H,
    reactions: V,
    selectedAnswerIds: Y,
    submitting: K,
    tapShouldOpenVotersModal: W,
    showResults: z
  } = P, Q = (0, p.getTotalVotes)(V), q = g.default.Messages.POLL_VOTES_COUNT.format({
    count: Q.toLocaleString()
  }), X = Math.max(...L.map(e => {
    var t, n;
    let s = R(V, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), Z = L.map(e => {
    var t, n, l;
    let o = "".concat(e.answer_id),
      d = R(V, o),
      c = null !== (n = null == d ? void 0 : null === (t = d.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      f = Y.has(o),
      E = c >= X && 0 !== c,
      T = F && null !== (l = null == d ? void 0 : d.me_vote) && void 0 !== l && l,
      I = v({
        didSelfVote: T,
        hasVoted: F,
        isExpired: w,
        isSelected: f,
        isLeader: E,
        showResults: z
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
            var a, l;
            s = null !== (l = null === (a = i.default.getCustomEmojiById(e.id)) || void 0 === a ? void 0 : a.animated) && void 0 !== l && l
          }
          let o = t && null != s && s;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? r.default.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? m.default.getURL(e.name) : _.default.getEmojiURL({
              id: e.id,
              animated: o,
              size: n
            }),
            animated: o
          }
        }(e.poll_media.emoji, {
          animateEmoji: u
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: f,
      isVictor: w && E,
      didSelfVote: T,
      style: I,
      shouldAnimateTransition: K && !A,
      votesPercentage: Math.round(100 * (0 === Q ? 0 : c / Q)),
      votes: (0, s.match)(D).with(a.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")")).otherwise(() => g.default.Messages.POLL_VOTES_COUNT.format({
        count: c.toLocaleString()
      }))
    }
  }), J = (0, s.match)({
    isExpired: w,
    canSubmitVote: b,
    hasVoted: F,
    isEditingVote: k,
    canRemoveVote: U,
    isInteractive: H,
    showResults: z
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: g.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: G,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: g.default.Messages.POLL_REMOVE_VOTE,
    presentation: "secondaryButton",
    enabled: !0,
    type: "remove"
  })).with({
    hasVoted: !1,
    showResults: !0
  }, () => ({
    label: g.default.Messages.POLL_HIDE_VOTES,
    presentation: "secondaryButton",
    enabled: !0,
    type: "showVotes"
  })).otherwise(() => ({
    label: g.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: b,
    type: "submit"
  })), $ = (0, T.isIOS)() ? g.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS : g.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID, ee = (0, s.match)({
    isExpired: w,
    isInteractive: H,
    isEditingVote: k
  }).with({
    isInteractive: !1,
    isExpired: !1
  }, () => ({
    label: g.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: g.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: q,
    secondaryLabel: B,
    accessibilityHint: $,
    presentation: "text",
    enabled: !0,
    type: "showVoterDetails"
  })), et = !H || w || F || z ? void 0 : {
    label: g.default.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, en = I.allow_multiselect, es = (0, s.match)({
    isInteractive: H,
    isExpired: w,
    canSelectMultipleAnswers: en
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => g.default.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => g.default.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: I.question,
    promptLabel: es,
    answers: Z,
    answersInteraction: (0, s.match)({
      tapShouldOpenVotersModal: W,
      canTapAnswers: y,
      canSelectMultipleAnswers: en
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => h.PollChatAnswerInteractionType.LIST).with({
      canTapAnswers: !1
    }, () => h.PollChatAnswerInteractionType.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => h.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => h.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: W ? $ : void 0,
    layoutType: D,
    resources: (0, S.default)({
      theme: c,
      layoutType: D
    }),
    containerStyle: "normal",
    primaryAction: J,
    isInteractive: H,
    canTapAnswers: y,
    canSelectMultipleAnswers: en,
    hasSelectedAnswer: G,
    canShowVoteCounts: j,
    hasVoted: F,
    isExpired: w,
    myAvatarUrl: O,
    secondaryAction: ee,
    tertiaryAction: et
  }
}