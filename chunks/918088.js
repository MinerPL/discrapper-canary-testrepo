"use strict";
n.r(t), n.d(t, {
  computeBasicPollChatData: function() {
    return M
  },
  default: function() {
    return R
  },
  isPollMessageDirectlyInteractive: function() {
    return g
  },
  reactionForId: function() {
    return C
  }
}), n("47120"), n("627341");
var s = n("278074"),
  a = n("263568"),
  l = n("339085"),
  i = n("633302"),
  r = n("592125"),
  o = n("375954"),
  u = n("594174"),
  d = n("768581"),
  c = n("176354"),
  f = n("358085"),
  E = n("798628"),
  _ = n("79390"),
  T = n("839963"),
  m = n("897325"),
  I = n("57101"),
  p = n("562293"),
  h = n("981631"),
  N = n("689938");
let S = {
  channelId: h.EMPTY_STRING_SNOWFLAKE_ID,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function C(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}
let A = e => (0, s.match)(e).with({
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
  return o.default.getMessage(e.channel_id, e.id) === e && !0
}

function M(e, t) {
  var n, s;
  let {
    formattedExpirationLabel: a
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: l
  } = e;
  if (null == l) return;
  let i = e.state === h.MessageStates.SENT,
    r = i ? null != a ? a : (0, p.formatExpirationLabel)(l.expiry) : "",
    u = null == r && i,
    {
      selectedAnswerIds: d,
      submitting: c,
      editing: f,
      showResults: _
    } = null !== (n = null != t ? t : (0, E.getPollState)(e.getChannelId(), e.id)) && void 0 !== n ? n : S,
    T = e.reactions,
    m = !0;
  if (!g(e)) {
    let t = o.default.getMessage(e.channel_id, e.id);
    m = null != t, T = null !== (s = null == t ? void 0 : t.reactions) && void 0 !== s ? s : T
  }
  let I = d.size > 0,
    N = T.some(e => !0 === e.me_vote),
    C = !f && N,
    A = m && (C || u || _);
  return {
    poll: l,
    canTapAnswers: i && (!N || f || A),
    canRemoveVote: C && i && !u,
    canShowVoteCounts: A,
    canSubmitVote: !c && I && !C && i,
    expirationLabel: r,
    hasSelectedAnswer: I,
    hasVoted: C,
    hasVoteRecorded: N,
    isEditingVote: f,
    isExpired: u,
    isInteractive: m,
    isSent: i,
    reactions: T,
    selectedAnswerIds: d,
    submitting: c,
    tapShouldOpenVotersModal: A,
    showResults: _
  }
}

function R(e, t) {
  var n, o;
  let {
    animateEmoji: E = !1,
    theme: p = "dark",
    formattedExpirationLabel: h
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: S
  } = e;
  if (null == S) return;
  let g = u.default.getCurrentUser();
  if (null == g) return;
  let R = null === (o = r.default.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
    O = (0, m.getAvatarUrl)(g, R),
    v = S.answers,
    L = S.layout_type,
    x = M(e, t, {
      formattedExpirationLabel: h
    });
  if (null == x) return;
  let {
    canTapAnswers: D,
    canRemoveVote: P,
    canShowVoteCounts: y,
    canSubmitVote: U,
    expirationLabel: b = N.default.Messages.POLL_EXPIRED,
    hasSelectedAnswer: j,
    hasVoted: G,
    isEditingVote: B,
    isExpired: F,
    isInteractive: k,
    reactions: w,
    selectedAnswerIds: H,
    submitting: V,
    tapShouldOpenVotersModal: Y,
    showResults: K
  } = x, W = (0, _.getTotalVotes)(w), z = N.default.Messages.POLL_VOTES_COUNT.format({
    count: String(W)
  }), Q = Math.max(...v.map(e => {
    var t, n;
    let s = C(w, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), q = v.map(e => {
    var t, n, r;
    let o = "".concat(e.answer_id),
      u = C(w, o),
      f = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      _ = H.has(o),
      T = f >= Q && 0 !== f,
      m = G && null !== (r = null == u ? void 0 : u.me_vote) && void 0 !== r && r,
      I = A({
        didSelfVote: m,
        hasVoted: G,
        isExpired: F,
        isInteractive: k,
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
          animateEmoji: E
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: _,
      isVictor: F && T,
      didSelfVote: m,
      style: I,
      shouldAnimateTransition: V,
      votesPercentage: Math.round(100 * (0 === W ? 0 : f / W)),
      votes: (0, s.match)(L).with(a.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(String(f), ")")).otherwise(() => N.default.Messages.POLL_VOTES_COUNT.format({
        count: String(f)
      }))
    }
  }), J = (0, s.match)({
    isExpired: F,
    canSubmitVote: U,
    hasVoted: G,
    isEditingVote: B,
    canRemoveVote: P,
    isInteractive: k,
    showResults: K
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: N.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: j,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: N.default.Messages.POLL_REMOVE_VOTE,
    presentation: "secondaryButton",
    enabled: !0,
    type: "remove"
  })).with({
    hasVoted: !1,
    showResults: !0
  }, () => ({
    label: N.default.Messages.POLL_HIDE_VOTES,
    presentation: "secondaryButton",
    enabled: !0,
    type: "showVotes"
  })).otherwise(() => ({
    label: N.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: U,
    type: "submit"
  })), X = (0, s.match)({
    isInteractive: k,
    isEditingVote: B
  }).with({
    isInteractive: !1
  }, () => ({
    label: N.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: N.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: z,
    secondaryLabel: b,
    presentation: "text",
    enabled: !0,
    type: "showVoterDetails"
  })), Z = !k || F || G || K ? void 0 : {
    label: N.default.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, $ = S.allow_multiselect, ee = (0, s.match)({
    isInteractive: k,
    isExpired: F,
    canSelectMultipleAnswers: $
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => N.default.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => N.default.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: S.question,
    promptLabel: ee,
    answers: q,
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
      platform: (0, f.getNativePlatform)()
    }).with({
      tapShouldOpenVotersModal: !0,
      platform: "android"
    }, () => N.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).with({
      tapShouldOpenVotersModal: !0,
      platform: "ios"
    }, () => N.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS).with({
      tapShouldOpenVotersModal: !0,
      platform: "web"
    }, () => N.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).otherwise(() => void 0),
    layoutType: L,
    resources: (0, I.default)({
      theme: p,
      layoutType: L
    }),
    containerStyle: "normal",
    primaryAction: J,
    canTapAnswers: D,
    canSelectMultipleAnswers: $,
    hasSelectedAnswer: j,
    canShowVoteCounts: y,
    hasVoted: G,
    isExpired: F,
    myAvatarUrl: O,
    secondaryAction: X,
    tertiaryAction: Z
  }
}