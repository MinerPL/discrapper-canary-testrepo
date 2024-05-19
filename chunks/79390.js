"use strict";
n.r(t), n.d(t, {
  createPollServerDataFromCreateRequest: function() {
    return M
  },
  filterOutUUID: function() {
    return p
  },
  generateEmptyPollAnswer: function() {
    return N
  },
  getPollAnswerVotesTooltipText: function() {
    return U
  },
  getPollResultsReplyPreview: function() {
    return y
  },
  getTotalVotes: function() {
    return P
  },
  hasNonVoteReactions: function() {
    return O
  },
  isAnswerFilled: function() {
    return v
  },
  isIncompleteAnswer: function() {
    return D
  },
  isPollCreationEmpty: function() {
    return L
  },
  useCanPostImagePolls: function() {
    return g
  },
  useCanPostPollsInChannel: function() {
    return C
  },
  useCanShowPollsChatInputCoachmarkInGuild: function() {
    return R
  }
}), n("757143"), n("47120"), n("724458");
var i = n("392711"),
  r = n.n(i),
  a = n("153832"),
  s = n("263568"),
  o = n("468194"),
  l = n("442837"),
  u = n("566006"),
  d = n("592125"),
  _ = n("542578"),
  c = n("375954"),
  E = n("496675"),
  I = n("699516"),
  T = n("70956"),
  f = n("5192"),
  S = n("192616"),
  h = n("489887"),
  A = n("981631"),
  m = n("689938");

function N() {
  return {
    text: void 0,
    image: void 0,
    localCreationAnswerId: function() {
      return (0, a.v4)()
    }()
  }
}

function p(e) {
  return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
}

function O(e) {
  for (let t of e.reactions)
    if (null == t.me_vote) return !0;
  return !1
}

function C(e) {
  let t = A.ChannelTypesSets.POLLS.has(null == e ? void 0 : e.type),
    n = (0, l.useStateFromStores)([E.default], () => E.default.can(A.Permissions.SEND_MESSAGES, e) && E.default.can(A.Permissions.SEND_POLLS, e)),
    {
      enabled: i
    } = S.CreateGuildPollsExperiment.useExperiment({
      guildId: null == e ? void 0 : e.guild_id,
      location: "useCanPostPollsInChannel"
    }, {
      autoTrackExposure: !0,
      disable: !t || (null == e ? void 0 : e.isPrivate()) || !n
    }),
    {
      enabled: r
    } = S.CreatePollsUserExperiment.useExperiment({
      location: "useCanPostPollsInChannel"
    }, {
      autoTrackExposure: !0,
      disable: !t || !(null == e ? void 0 : e.isPrivate()) && !n
    });
  return i || r
}

function R(e) {
  let {
    enabled: t
  } = S.CreatePollsGuildCoachmarkExperiment.useExperiment({
    guildId: e,
    location: "useCanShowPollsChatInputCoachmarkInGuild"
  });
  return t
}

function g() {
  return !1
}

function L(e, t, n) {
  return 0 === e.length && null == t.find(e => v(e, n))
}

function v(e, t) {
  if (t === s.PollLayoutTypes.IMAGE_ONLY_ANSWERS) return null != e.image;
  {
    var n;
    let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
    return null != t && t.length > 0
  }
}

function D(e, t) {
  var n;
  let i = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
  return t === s.PollLayoutTypes.DEFAULT && null != e.image && (null == i || 0 === i.length)
}

function M(e) {
  var t, n;
  if (null == e) return;
  let i = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
    var n, i;
    let r = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
      a = {
        ...e.poll_media,
        emoji: null != r ? {
          id: r.id,
          name: null !== (i = r.name) && void 0 !== i ? i : ""
        } : void 0
      };
    return {
      ...e,
      answer_id: t + 1,
      poll_media: a
    }
  });
  let r = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * T.default.Millis.HOUR).toISOString()) : "0";
  return {
    ...e,
    expiry: r,
    answers: i
  }
}

function y(e) {
  let t = function(e, t) {
    var n, i, r, a;
    let s = null !== (a = null === (r = e.embeds[0]) || void 0 === r ? void 0 : null === (i = r.fields) || void 0 === i ? void 0 : null === (n = i.find(e => "poll_question_text" === e.rawName)) || void 0 === n ? void 0 : n.rawValue) && void 0 !== a ? a : "";
    return null != t ? (0, o.truncateText)(s, t) : s
  }(e, h.POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS);
  return m.default.Messages.POLL_RESULT_REPLY_TEXT.format({
    title: t
  })
}

function P(e) {
  return e.reduce((e, t) => {
    var n, i;
    return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0)
  }, 0)
}

function U(e, t, n) {
  var i, a;
  let s = c.default.getMessage(t, e);
  if (null == s) return "";
  let o = s.getReaction({
      id: n,
      name: "",
      animated: !1
    }),
    l = null !== (a = null == o ? void 0 : null === (i = o.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== a ? a : 0,
    E = function(e, t) {
      let n = e.getChannelId(),
        i = _.default.getReactions(n, e.id, {
          id: t,
          name: "",
          animated: !1
        }, h.VOTES_TOOLTIP_MAX_USERS, u.ReactionTypes.VOTE),
        a = d.default.getChannel(n),
        s = null == a || a.isPrivate() ? null : a.getGuildId();
      return r()(i).reject(e => I.default.isBlocked(e.id)).take(h.VOTES_TOOLTIP_MAX_USERS).map(e => f.default.getName(s, null == a ? void 0 : a.id, e)).value()
    }(s, n);
  return 0 === E.length ? "" : function(e, t) {
    let n = Math.max(0, t - e.length);
    if (1 === e.length) return n > 0 ? m.default.Messages.POLL_VOTES_TOOLTIP_1_N.format({
      a: e[0],
      n: n.toLocaleString()
    }) : e[0];
    if (2 === e.length) return n > 0 ? m.default.Messages.POLL_VOTES_TOOLTIP_2_N.format({
      a: e[0],
      b: e[1],
      n: n.toLocaleString()
    }) : m.default.Messages.POLL_VOTES_TOOLTIP_2.format({
      a: e[0],
      b: e[1]
    });
    if (3 !== e.length) return m.default.Messages.POLL_VOTES_TOOLTIP_N.format({
      n: n.toLocaleString()
    });
    else return n > 0 ? m.default.Messages.POLL_VOTES_TOOLTIP_3_N.format({
      a: e[0],
      b: e[1],
      c: e[2],
      n: n.toLocaleString()
    }) : m.default.Messages.POLL_VOTES_TOOLTIP_3.format({
      a: e[0],
      b: e[1],
      c: e[2]
    })
  }(E, l)
}