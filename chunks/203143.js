n.d(t, {
  n: function() {
return D;
  }
}), n(411104), n(47120), n(390547), n(724458);
var i = n(512722),
  a = n.n(i),
  s = n(392711),
  r = n.n(s),
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
  f = n(314897),
  C = n(592125),
  p = n(703558),
  g = n(607744),
  S = n(375954),
  A = n(117530),
  R = n(553803),
  x = n(316758),
  O = n(467531),
  M = n(798628),
  v = n(918088),
  L = n(981631),
  Z = n(689938);

function P(e, t) {
  let n = [...t],
i = 0,
a = 0;
  for (let t of n) {
var s;
let n = null == e ? void 0 : null === (s = e.find(e => e.answer_id === parseInt(t))) || void 0 === s ? void 0 : s.poll_media;
(null == n ? void 0 : n.text) != null && (i += 1), (null == n ? void 0 : n.emoji) != null && (a += 1);
  }
  return {
analyticsSelectedAnswerIds: n,
selectedTextAnswersCount: i,
selectedEmojiAnswersCount: a
  };
}

function b(e) {
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

function D(e) {
  let {
channelId: t,
messageId: n,
answerId: i
  } = e, a = C.Z.getChannel(t);
  if (null == a)
return;
  if (m.Z.isLurking(a.guild_id)) {
b({
  guildId: a.guild_id,
  title: Z.Z.Messages.POLL_LURKING_SEE_VOTES_TITLE,
  body: Z.Z.Messages.POLL_LURKING_VOTE_SUBTITLE
});
return;
  }
  let s = S.Z.getMessage(t, n);
  if (null == s || null == s.poll || 0 === s.poll.answers.length)
return;
  let r = null != i ? i : String(s.poll.answers[0].answer_id);
  R.A({
message: s,
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
  } = e, a = U({
channelId: t,
messageId: n
  }), s = r().difference(a, i), l = r().difference(i, a), u = f.default.getId(), d = [
...s.map(e => ({
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
    type: a
  }
  of d)
  e = c.Z.dispatch({
    type: a,
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
  } = e, i = C.Z.getChannel(t);
  if (null == i)
return;
  if (m.Z.isLurking(i.guild_id)) {
b({
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
  let s = (0, M.fU)(t, n);
  a()(null != s, 'Must not be able to vote without existing state!');
  let r = U({
channelId: t,
messageId: n
  });
  try {
let e = [...s.selectedAnswerIds.values()];
(0, M.eu)(t, n, e => (a()(null != e, 'Must not be able to vote without existing state!'), {
  ...e,
  submitting: !0,
  editing: !1
})), await y({
  channelId: t,
  messageId: n,
  answerIds: e
}), await O.B({
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
  } = e, i = C.Z.getChannel(t);
  if (null != i) {
if (m.Z.isLurking(i.guild_id)) {
  b({
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
      var i, a;
      let s = null == e || !e.showResults,
        r = S.Z.getMessage(t, n),
        l = null != r ? r.reactions.reduce((e, t) => {
          var n, i;
          return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0);
        }, 0) : 0;
      return I.ZP.trackWithMetadata(L.rMx.POLL_SHOW_RESULTS_CLICKED, {
        channel_id: t,
        message_id: n,
        show_results: s,
        votes_count: l
      }), {
        channelId: t,
        selectedAnswerIds: new Set(),
        submitting: null !== (i = null == e ? void 0 : e.submitting) && void 0 !== i && i,
        editing: null !== (a = null == e ? void 0 : e.submitting) && void 0 !== a && a,
        showResults: s
      };
    });
  }({
    channelId: t,
    messageId: n
  });
  break;
case 'showVoterDetails':
  D({
    channelId: t,
    messageId: n
  });
  break;
default:
  a()(!1, 'Unknown poll action type: '.concat(i));
  }
}
async function F(e) {
  let {
channel: t,
question: n,
answers: i,
allowMultiSelect: a,
duration: s,
layout: r,
onClose: o
  } = e, c = A.Z.getUploads(t.id, p.d.Poll), u = i.map(e => {
var t, n;
let i = null == c ? void 0 : c.findIndex(t => t.id === e.localCreationAnswerId),
  a = {
    attachment_ids: -1 !== i ? [''.concat(i)] : void 0
  };
r === l.C.DEFAULT && (a.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
let s = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
return null != s && (null != s.id ? a.emoji = {
  id: s.id,
  name: ''
} : null != s.optionallyDiverseSequence && (a.emoji = {
  name: s.optionallyDiverseSequence
})), {
  poll_media: a
};
  }), d = {
question: {
  text: n.trim()
},
answers: u,
allow_multiselect: a,
duration: s,
layout_type: r
  };
  try {
if (null != c && c.length > 0) {
  var I;
  let e = null !== (I = f.default.getToken()) && void 0 !== I ? I : '';
  await x.sk({
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
  }) && await O.W({
channelId: t,
messageId: n
  });
}
t.Z = {
  handlePollAnswerTapped: function(e) {
var t, n;
let {
  answerId: i,
  ...s
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
  let s = N.Z.getMessage(t, n);
  if (null != s.message)
    return {
      channelId: t,
      messageId: n,
      message: s.message
    };
  throw a()(null != i, 'Tapped on a non-existent poll message'), Error();
}(s), {
  tapShouldOpenVotersModal: c
} = null !== (n = (0, v.Tk)(o)) && void 0 !== n ? n : {};
if (!0 === c) {
  D({
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
        selectedTextAnswersCount: a,
        selectedEmojiAnswersCount: s
      } = P(null === (n = o.poll) || void 0 === n ? void 0 : n.answers, e);
    return I.ZP.trackWithMetadata(L.rMx.POLL_VOTE_SELECTED, {
      channel_id: r,
      message_id: l,
      selected_answer_ids: t,
      selected_text_answers_count: a,
      selected_emoji_answers_count: s
    }), {
      channelId: r,
      selectedAnswerIds: e,
      submitting: !1,
      editing: !1,
      showResults: !1
    };
  }
  let a = {
      ...e
    },
    s = new Set(a.selectedAnswerIds);
  if (a.selectedAnswerIds = s, s.has(i))
    s.delete(i);
  else {
    if (!u)
      for (let e of s)
        s.delete(e);
    s.add(i);
  }
  let {
    analyticsSelectedAnswerIds: c,
    selectedTextAnswersCount: d,
    selectedEmojiAnswersCount: _
  } = P(null === (t = o.poll) || void 0 === t ? void 0 : t.answers, s);
  return I.ZP.trackWithMetadata(L.rMx.POLL_VOTE_SELECTED, {
    channel_id: r,
    message_id: l,
    selected_answer_ids: c,
    selected_text_answers_count: d,
    selected_emoji_answers_count: _
  }), a;
});
  },
  handlePollSubmitVote: B,
  handleUpdateVoteEditingState: j,
  handlePollActionTapped: G,
  createPoll: F,
  endPollEarly: w
};