"use strict";
n.r(t), n.d(t, {
  handleShowVotesForAnswer: function() {
    return y
  },
  default: function() {
    return F
  }
}), n("70102"), n("222007"), n("881410"), n("808653");
var s = n("627445"),
  a = n.n(s),
  l = n("917351"),
  i = n.n(l),
  r = n("418009"),
  o = n("446674"),
  u = n("913144"),
  d = n("404118"),
  c = n("851387"),
  E = n("819689"),
  f = n("448993"),
  _ = n("716241"),
  T = n("267567"),
  I = n("875978"),
  m = n("815297"),
  N = n("256572"),
  p = n("271938"),
  S = n("42203"),
  C = n("474643"),
  A = n("377253"),
  h = n("585722"),
  g = n("239013"),
  M = n("914271"),
  O = n("690714"),
  R = n("641126"),
  L = n("905206"),
  v = n("49111"),
  P = n("782340");

function D(e, t) {
  let n = [...t],
    s = 0,
    a = 0;
  for (let t of n) {
    var l;
    let n = null == e ? void 0 : null === (l = e.find(e => e.answer_id === parseInt(t))) || void 0 === l ? void 0 : l.poll_media;
    (null == n ? void 0 : n.text) != null && (s += 1), (null == n ? void 0 : n.emoji) != null && (a += 1)
  }
  return {
    analyticsSelectedAnswerIds: n,
    selectedTextAnswersCount: s,
    selectedEmojiAnswersCount: a
  }
}

function x(e) {
  let {
    guildId: t,
    title: n,
    body: s
  } = e;
  d.default.show({
    title: n,
    body: s,
    confirmText: P.default.Messages.LURKER_MODE_POPOUT_JOIN,
    cancelText: P.default.Messages.LURKER_MODE_POPOUT_CANCEL,
    onConfirm: () => {
      c.default.joinGuild(t, {
        source: v.JoinGuildSources.POLL_ALERT
      })
    }
  })
}

function y(e) {
  let {
    channelId: t,
    messageId: n,
    answerId: s
  } = e, a = S.default.getChannel(t);
  if (null == a) return;
  if (T.default.isLurking(null == a ? void 0 : a.guild_id)) {
    x({
      guildId: a.guild_id,
      title: P.default.Messages.POLL_LURKING_SEE_VOTES_TITLE,
      body: P.default.Messages.POLL_LURKING_VOTE_SUBTITLE
    });
    return
  }
  let l = A.default.getMessage(t, n);
  if (null == l || null == l.poll || 0 === l.poll.answers.length) return;
  let i = null != s ? s : String(l.poll.answers[0].answer_id);
  g.showVotesForAnswer({
    message: l,
    initialAnswerId: i
  })
}

function U(e) {
  let {
    channelId: t,
    messageId: n,
    isEditing: s
  } = e;
  (0, R.updatePollState)(t, n, e => {
    var n;
    return {
      channelId: t,
      selectedAnswerIds: new Set,
      submitting: !1,
      editing: s,
      showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
    }
  })
}

function j(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = A.default.getMessage(t, n);
  return null == s ? [] : s.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
}
async function b(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: s
  } = e, a = j({
    channelId: t,
    messageId: n
  }), l = i.difference(a, s), r = i.difference(s, a), d = p.default.getId(), c = [...l.map(e => ({
    type: "MESSAGE_REACTION_REMOVE",
    id: e
  })), ...r.map(e => ({
    type: "MESSAGE_REACTION_ADD",
    id: e
  }))], E = o.default.Emitter.batched(() => {
    let e;
    for (let {
        id: s,
        type: a
      }
      of c) e = u.default.dispatch({
      type: a,
      channelId: t,
      messageId: n,
      emoji: {
        id: s,
        name: s
      },
      userId: d,
      optimistic: !0,
      reactionType: I.ReactionTypes.VOTE
    });
    return e
  });
  null != E && await E
}
async function G(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = S.default.getChannel(t);
  if (null == s) return;
  if (T.default.isLurking(null == s ? void 0 : s.guild_id)) {
    x({
      guildId: s.guild_id,
      title: P.default.Messages.POLL_LURKING_VOTE_TITLE,
      body: P.default.Messages.POLL_LURKING_VOTE_SUBTITLE
    });
    return
  }
  let l = (0, R.getPollState)(t, n);
  a(null != l, "Must not be able to vote without existing state!");
  let i = j({
    channelId: t,
    messageId: n
  });
  try {
    let e = [...l.selectedAnswerIds.values()];
    (0, R.updatePollState)(t, n, e => (a(null != e, "Must not be able to vote without existing state!"), {
      ...e,
      submitting: !0,
      editing: !1
    })), await b({
      channelId: t,
      messageId: n,
      answerIds: e
    }), await O.submitPollVote({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, R.updatePollState)(t, n, () => void 0)
  } catch (e) {
    var r, o, u;
    d.default.show({
      title: P.default.Messages.GENERIC_ERROR_TITLE,
      body: null !== (u = null !== (o = null === (r = e.getAnyErrorMessage) || void 0 === r ? void 0 : r.call(e)) && void 0 !== o ? o : e.message) && void 0 !== u ? u : P.default.Messages.GENERIC_ERROR_BODY
    }), await b({
      channelId: t,
      messageId: n,
      answerIds: i
    }), (0, R.updatePollState)(t, n, e => {
      if (null != e) return {
        ...e,
        submitting: !1,
        editing: !1
      }
    })
  }
}
async function B(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = S.default.getChannel(t);
  if (null != s) {
    if (T.default.isLurking(null == s ? void 0 : s.guild_id)) {
      x({
        guildId: s.guild_id,
        title: P.default.Messages.POLL_LURKING_UNVOTE_TITLE,
        body: P.default.Messages.POLL_LURKING_UNVOTE_SUBTITLE
      });
      return
    }
    return (0, R.updatePollState)(t, n, e => {
      var n;
      return {
        channelId: t,
        selectedAnswerIds: new Set,
        submitting: !1,
        editing: !1,
        showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
      }
    }), await G({
      channelId: t,
      messageId: n
    })
  }
}
async function k(e) {
  let {
    channelId: t,
    messageId: n,
    type: s
  } = e;
  switch (s) {
    case "submit":
      await G({
        channelId: t,
        messageId: n
      });
      break;
    case "remove":
      await B({
        channelId: t,
        messageId: n
      });
      break;
    case "cancel":
      U({
        channelId: t,
        messageId: n,
        isEditing: !1
      });
      break;
    case "showVotes":
      ! function(e) {
        let {
          channelId: t,
          messageId: n
        } = e;
        (0, R.updatePollState)(t, n, e => {
          var s, a;
          let l = null == e || !e.showResults,
            i = A.default.getMessage(t, n),
            r = null != i ? i.reactions.reduce((e, t) => {
              var n, s;
              return e + (null !== (s = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== s ? s : 0)
            }, 0) : 0;
          return _.default.trackWithMetadata(v.AnalyticEvents.POLL_SHOW_RESULTS_CLICKED, {
            channel_id: t,
            message_id: n,
            show_results: l,
            votes_count: r
          }), {
            channelId: t,
            selectedAnswerIds: new Set,
            submitting: null !== (s = null == e ? void 0 : e.submitting) && void 0 !== s && s,
            editing: null !== (a = null == e ? void 0 : e.submitting) && void 0 !== a && a,
            showResults: l
          }
        })
      }({
        channelId: t,
        messageId: n
      });
      break;
    case "showVoterDetails":
      y({
        channelId: t,
        messageId: n
      });
      break;
    default:
      a(!1, "Unknown poll action type: ".concat(s))
  }
}
var F = {
  handlePollAnswerTapped: function(e) {
    var t, n;
    let {
      answerId: s,
      ...l
    } = e, {
      channelId: i,
      messageId: r,
      message: o
    } = function(e) {
      let {
        channelId: t,
        messageId: n
      } = e, s = A.default.getMessage(t, n);
      if (null != s) return {
        message: s,
        channelId: t,
        messageId: n
      };
      let l = N.default.getMessage(t, n);
      if (null != l.message) return {
        channelId: t,
        messageId: n,
        message: l.message
      };
      throw a(null != s, "Tapped on a non-existent poll message"), Error()
    }(l), {
      tapShouldOpenVotersModal: u
    } = null !== (n = (0, L.computeBasicPollChatData)(o)) && void 0 !== n ? n : {};
    if (!0 === u) {
      y({
        channelId: i,
        messageId: r,
        answerId: s
      });
      return
    }
    let d = null === (t = o.poll) || void 0 === t ? void 0 : t.allow_multiselect;
    (0, R.updatePollState)(i, r, e => {
      var t, n;
      if (null == e) {
        let e = new Set([s]),
          {
            analyticsSelectedAnswerIds: t,
            selectedTextAnswersCount: a,
            selectedEmojiAnswersCount: l
          } = D(null === (n = o.poll) || void 0 === n ? void 0 : n.answers, e);
        return _.default.trackWithMetadata(v.AnalyticEvents.POLL_VOTE_SELECTED, {
          channel_id: i,
          message_id: r,
          selected_answer_ids: t,
          selected_text_answers_count: a,
          selected_emoji_answers_count: l
        }), {
          channelId: i,
          selectedAnswerIds: e,
          submitting: !1,
          editing: !1,
          showResults: !1
        }
      }
      let a = {
          ...e
        },
        l = new Set(a.selectedAnswerIds);
      if (a.selectedAnswerIds = l, l.has(s)) l.delete(s);
      else {
        if (!d)
          for (let e of l) l.delete(e);
        l.add(s)
      }
      let {
        analyticsSelectedAnswerIds: u,
        selectedTextAnswersCount: c,
        selectedEmojiAnswersCount: E
      } = D(null === (t = o.poll) || void 0 === t ? void 0 : t.answers, l);
      return _.default.trackWithMetadata(v.AnalyticEvents.POLL_VOTE_SELECTED, {
        channel_id: i,
        message_id: r,
        selected_answer_ids: u,
        selected_text_answers_count: c,
        selected_emoji_answers_count: E
      }), a
    })
  },
  handlePollSubmitVote: G,
  handleUpdateVoteEditingState: U,
  handlePollActionTapped: k,
  createPoll: async function e(e) {
    let {
      channel: t,
      question: n,
      answers: s,
      allowMultiSelect: a,
      duration: l,
      layout: i,
      onClose: o
    } = e, u = h.default.getUploads(t.id, C.DraftType.Poll), d = s.map(e => {
      var t, n;
      let s = null == u ? void 0 : u.findIndex(t => t.id === e.localCreationAnswerId),
        a = {
          attachment_ids: -1 !== s ? ["".concat(s)] : void 0
        };
      i === r.PollLayoutTypes.DEFAULT && (a.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
      let l = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
      return null != l && (null != l.id ? a.emoji = {
        id: l.id,
        name: ""
      } : null != l.optionallyDiverseSequence && (a.emoji = {
        name: l.optionallyDiverseSequence
      })), {
        poll_media: a
      }
    }), c = {
      question: {
        text: n.trim()
      },
      answers: d,
      allow_multiselect: a,
      duration: l,
      layout_type: i
    };
    try {
      if (null != u && u.length > 0) {
        var _;
        let e = null !== (_ = p.default.getToken()) && void 0 !== _ ? _ : "";
        await M.sendPollMessageWithAttachments({
          channel: t,
          items: u,
          token: e,
          poll: c,
          nonce: (0, m.createNonce)(),
          maxSizeCallback: () => {}
        })
      } else await E.default.sendPollMessage(t.id, c);
      null == o || o()
    } catch (t) {
      let e = t instanceof f.APIError ? t : new f.APIError(t);
      if ("poll" === e.getAnyErrorMessage() && null != t.text) throw {
        ...t,
        body: JSON.parse(t.text)
      };
      throw t
    }
  },
  endPollEarly: async function e(e) {
    let {
      channelId: t,
      messageId: n
    } = e, s = await d.default.confirm({
      title: P.default.Messages.POLL_END_EARLY_CONFIRMATION_TITLE,
      body: P.default.Messages.POLL_END_EARLY_CONFIRMATION_TEXT
    });
    s && await O.endPollEarly({
      channelId: t,
      messageId: n
    })
  }
}