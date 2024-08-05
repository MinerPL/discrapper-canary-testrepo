n.d(t, {
  n: function() {
return b;
  }
}), n(411104), n(47120), n(390547), n(724458);
var i = n(512722),
  s = n.n(i),
  a = n(392711),
  r = n.n(a),
  l = n(263568),
  o = n(442837),
  c = n(570140),
  u = n(668781),
  d = n(749210),
  _ = n(904245),
  E = n(881052),
  I = n(367907),
  m = n(41776),
  T = n(566006),
  h = n(48854),
  N = n(869765),
  C = n(314897),
  f = n(592125),
  p = n(703558),
  g = n(607744),
  S = n(375954),
  A = n(117530),
  R = n(553803),
  O = n(316758),
  x = n(467531),
  M = n(798628),
  v = n(918088),
  L = n(981631),
  Z = n(689938);

function P(e, t) {
  let n = [...t],
i = 0,
s = 0;
  for (let t of n) {
var a;
let n = null == e ? void 0 : null === (a = e.find(e => e.answer_id === parseInt(t))) || void 0 === a ? void 0 : a.poll_media;
(null == n ? void 0 : n.text) != null && (i += 1), (null == n ? void 0 : n.emoji) != null && (s += 1);
  }
  return {
analyticsSelectedAnswerIds: n,
selectedTextAnswersCount: i,
selectedEmojiAnswersCount: s
  };
}

function D(e) {
  let {
guildId: t,
title: n,
body: i
  } = e;
  u.Z.show({
title: n,
body: i,
confirmText: Z.Z.Messages.LURKER_MODE_POPOUT_JOIN,
cancelText: Z.Z.Messages.LURKER_MODE_POPOUT_CANCEL,
onConfirm: () => {
  d.Z.joinGuild(t, {
    source: L.vtS.POLL_ALERT
  });
}
  });
}

function b(e) {
  let {
channelId: t,
messageId: n,
answerId: i
  } = e, s = f.Z.getChannel(t);
  if (null == s)
return;
  if (m.Z.isLurking(s.guild_id)) {
D({
  guildId: s.guild_id,
  title: Z.Z.Messages.POLL_LURKING_SEE_VOTES_TITLE,
  body: Z.Z.Messages.POLL_LURKING_VOTE_SUBTITLE
});
return;
  }
  let a = S.Z.getMessage(t, n);
  if (null == a || null == a.poll || 0 === a.poll.answers.length)
return;
  let r = null != i ? i : String(a.poll.answers[0].answer_id);
  R.A({
message: a,
initialAnswerId: r
  });
}

function j(e) {
  let {
channelId: t,
messageId: n,
isEditing: i
  } = e;
  (0, M.eu)(t, n, e => {
var n;
return {
  channelId: t,
  selectedAnswerIds: new Set(),
  submitting: !1,
  editing: i,
  showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
};
  });
}

function U(e) {
  let {
channelId: t,
messageId: n
  } = e, i = S.Z.getMessage(t, n);
  return null == i ? [] : i.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : []);
}
async function y(e) {
  let {
channelId: t,
messageId: n,
answerIds: i
  } = e, s = U({
channelId: t,
messageId: n
  }), a = r().difference(s, i), l = r().difference(i, s), u = C.default.getId(), d = [
...a.map(e => ({
  type: 'MESSAGE_REACTION_REMOVE',
  id: e
})),
...l.map(e => ({
  type: 'MESSAGE_REACTION_ADD',
  id: e
}))
  ], _ = o.ZP.Emitter.batched(() => {
let e;
for (let {
    id: i,
    type: s
  }
  of d)
  e = c.Z.dispatch({
    type: s,
    channelId: t,
    messageId: n,
    emoji: {
      id: i,
      name: i
    },
    userId: u,
    optimistic: !0,
    reactionType: T.O.VOTE
  });
return e;
  });
  null != _ && await _;
}
async function B(e) {
  let {
channelId: t,
messageId: n
  } = e, i = f.Z.getChannel(t);
  if (null == i)
return;
  if (m.Z.isLurking(i.guild_id)) {
D({
  guildId: i.guild_id,
  title: Z.Z.Messages.POLL_LURKING_VOTE_TITLE,
  body: Z.Z.Messages.POLL_LURKING_VOTE_SUBTITLE
});
return;
  }
  if (!g.Z.canChatInGuild(i.guild_id)) {
u.Z.show({
  title: Z.Z.Messages.POLL_GUILD_MEMBER_UNVERIFIED_TITLE,
  body: Z.Z.Messages.POLL_GUILD_MEMBER_UNVERIFIED_SUBTITLE
});
return;
  }
  let a = (0, M.fU)(t, n);
  s()(null != a, 'Must not be able to vote without existing state!');
  let r = U({
channelId: t,
messageId: n
  });
  try {
let e = [...a.selectedAnswerIds.values()];
(0, M.eu)(t, n, e => (s()(null != e, 'Must not be able to vote without existing state!'), {
  ...e,
  submitting: !0,
  editing: !1
})), await y({
  channelId: t,
  messageId: n,
  answerIds: e
}), await x.B({
  channelId: t,
  messageId: n,
  answerIds: e
}), (0, M.eu)(t, n, () => void 0);
  } catch (e) {
var l, o, c;
u.Z.show({
  title: Z.Z.Messages.GENERIC_ERROR_TITLE,
  body: null !== (c = null !== (o = null === (l = e.getAnyErrorMessage) || void 0 === l ? void 0 : l.call(e)) && void 0 !== o ? o : e.message) && void 0 !== c ? c : Z.Z.Messages.GENERIC_ERROR_BODY
}), await y({
  channelId: t,
  messageId: n,
  answerIds: r
}), (0, M.eu)(t, n, e => {
  if (null != e)
    return {
      ...e,
      submitting: !1,
      editing: !1
    };
});
  }
}
async function k(e) {
  let {
channelId: t,
messageId: n
  } = e, i = f.Z.getChannel(t);
  if (null != i) {
if (m.Z.isLurking(i.guild_id)) {
  D({
    guildId: i.guild_id,
    title: Z.Z.Messages.POLL_LURKING_UNVOTE_TITLE,
    body: Z.Z.Messages.POLL_LURKING_UNVOTE_SUBTITLE
  });
  return;
}
return (0, M.eu)(t, n, e => {
  var n;
  return {
    channelId: t,
    selectedAnswerIds: new Set(),
    submitting: !1,
    editing: !1,
    showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
  };
}), await B({
  channelId: t,
  messageId: n
});
  }
}
async function G(e) {
  let {
channelId: t,
messageId: n,
type: i
  } = e;
  switch (i) {
case 'submit':
  await B({
    channelId: t,
    messageId: n
  });
  break;
case 'remove':
  await k({
    channelId: t,
    messageId: n
  });
  break;
case 'cancel':
  j({
    channelId: t,
    messageId: n,
    isEditing: !1
  });
  break;
case 'showVotes':
  ! function(e) {
    let {
      channelId: t,
      messageId: n
    } = e;
    (0, M.eu)(t, n, e => {
      var i, s;
      let a = null == e || !e.showResults,
        r = S.Z.getMessage(t, n),
        l = null != r ? r.reactions.reduce((e, t) => {
          var n, i;
          return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0);
        }, 0) : 0;
      return I.ZP.trackWithMetadata(L.rMx.POLL_SHOW_RESULTS_CLICKED, {
        channel_id: t,
        message_id: n,
        show_results: a,
        votes_count: l
      }), {
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: null !== (i = null == e ? void 0 : e.submitting) && void 0 !== i && i,
        editing: null !== (s = null == e ? void 0 : e.submitting) && void 0 !== s && s,
        showResults: a
      };
    });
  }({
    channelId: t,
    messageId: n
  });
  break;
case 'showVoterDetails':
  b({
    channelId: t,
    messageId: n
  });
  break;
default:
  s()(!1, 'Unknown poll action type: '.concat(i));
  }
}
async function F(e) {
  let {
channel: t,
question: n,
answers: i,
allowMultiSelect: s,
duration: a,
layout: r,
onClose: o
  } = e, c = A.Z.getUploads(t.id, p.d.Poll), u = i.map(e => {
var t, n;
let i = null == c ? void 0 : c.findIndex(t => t.id === e.localCreationAnswerId),
  s = {
    attachment_ids: -1 !== i ? [''.concat(i)] : void 0
  };
r === l.C.DEFAULT && (s.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
let a = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
return null != a && (null != a.id ? s.emoji = {
  id: a.id,
  name: ''
} : null != a.optionallyDiverseSequence && (s.emoji = {
  name: a.optionallyDiverseSequence
})), {
  poll_media: s
};
  }), d = {
question: {
  text: n.trim()
},
answers: u,
allow_multiselect: s,
duration: a,
layout_type: r
  };
  try {
if (null != c && c.length > 0) {
  var I;
  let e = null !== (I = C.default.getToken()) && void 0 !== I ? I : '';
  await O.sk({
    channel: t,
    items: c,
    token: e,
    poll: d,
    nonce: (0, h.r)(),
    maxSizeCallback: () => {}
  });
} else
  await _.Z.sendPollMessage(t.id, d);
null == o || o();
  } catch (e) {
if ('poll' === (e instanceof E.Hx ? e : new E.Hx(e)).getAnyErrorMessage() && null != e.text)
  throw {
    ...e,
    body: JSON.parse(e.text)
  };
throw e;
  }
}
async function w(e) {
  let {
channelId: t,
messageId: n
  } = e;
  await u.Z.confirm({
title: Z.Z.Messages.POLL_END_EARLY_CONFIRMATION_TITLE,
body: Z.Z.Messages.POLL_END_EARLY_CONFIRMATION_TEXT
  }) && await x.W({
channelId: t,
messageId: n
  });
}
t.Z = {
  handlePollAnswerTapped: function(e) {
var t, n;
let {
  answerId: i,
  ...a
} = e, {
  channelId: r,
  messageId: l,
  message: o
} = function(e) {
  let {
    channelId: t,
    messageId: n
  } = e, i = S.Z.getMessage(t, n);
  if (null != i)
    return {
      message: i,
      channelId: t,
      messageId: n
    };
  let a = N.Z.getMessage(t, n);
  if (null != a.message)
    return {
      channelId: t,
      messageId: n,
      message: a.message
    };
  throw s()(null != i, 'Tapped on a non-existent poll message'), Error();
}(a), {
  tapShouldOpenVotersModal: c
} = null !== (n = (0, v.Tk)(o)) && void 0 !== n ? n : {};
if (!0 === c) {
  b({
    channelId: r,
    messageId: l,
    answerId: i
  });
  return;
}
let u = null === (t = o.poll) || void 0 === t ? void 0 : t.allow_multiselect;
(0, M.eu)(r, l, e => {
  var t, n;
  if (null == e) {
    let e = new Set([i]),
      {
        analyticsSelectedAnswerIds: t,
        selectedTextAnswersCount: s,
        selectedEmojiAnswersCount: a
      } = P(null === (n = o.poll) || void 0 === n ? void 0 : n.answers, e);
    return I.ZP.trackWithMetadata(L.rMx.POLL_VOTE_SELECTED, {
      channel_id: r,
      message_id: l,
      selected_answer_ids: t,
      selected_text_answers_count: s,
      selected_emoji_answers_count: a
    }), {
      channelId: r,
      selectedAnswerIds: e,
      submitting: !1,
      editing: !1,
      showResults: !1
    };
  }
  let s = {
      ...e
    },
    a = new Set(s.selectedAnswerIds);
  if (s.selectedAnswerIds = a, a.has(i))
    a.delete(i);
  else {
    if (!u)
      for (let e of a)
        a.delete(e);
    a.add(i);
  }
  let {
    analyticsSelectedAnswerIds: c,
    selectedTextAnswersCount: d,
    selectedEmojiAnswersCount: _
  } = P(null === (t = o.poll) || void 0 === t ? void 0 : t.answers, a);
  return I.ZP.trackWithMetadata(L.rMx.POLL_VOTE_SELECTED, {
    channel_id: r,
    message_id: l,
    selected_answer_ids: c,
    selected_text_answers_count: d,
    selected_emoji_answers_count: _
  }), s;
});
  },
  handlePollSubmitVote: B,
  handleUpdateVoteEditingState: j,
  handlePollActionTapped: G,
  createPoll: F,
  endPollEarly: w
};