n.d(t, {
  N7: function() {
return _;
  },
  XP: function() {
return f;
  },
  j8: function() {
return E;
  },
  z$: function() {
return h;
  }
});
var r = n(544891),
  i = n(430742),
  a = n(904245),
  s = n(623292),
  o = n(592125),
  l = n(703558),
  u = n(375954),
  c = n(585483),
  d = n(981631);

function _(e) {
  r.tn.post({
url: d.ANM.INITIATE_CHANNEL_PROMPTS,
body: {
  guild_ids: e
}
  });
}

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.uaV.GUILD_DEADCHAT_REVIVE_PROMPT;
  r.tn.post({
url: d.ANM.FORCE_SEND_PROMPT(e),
body: {
  prompt_type: t
}
  });
}
async function f(e, t, n) {
  await r.tn.post({
url: d.ANM.SEND_GAMING_STATS(t),
body: {
  message_reference: {
    guild_id: e,
    channel_id: t,
    message_id: n
  }
}
  }), p(t);
}
async function h(e) {
  let t = await r.tn.patch({
url: d.ANM.UPDATE_GAMING_STATS(e.channel_id, e.id)
  });
  if (null != t.text && '' !== t.text) {
let n = o.Z.getChannel(e.channel_id);
null != n && ((0, s.fE)({
  channel: n,
  message: e,
  shouldMention: !1,
  showMentionToggle: !1
}), p(n.id)), i.Z.saveDraft(e.channel_id, t.text, l.d.ChannelMessage);
  }
}

function p(e) {
  u.Z.getMessages(e).hasMoreAfter ? a.Z.jumpToPresent(e, d.AQB) : c.S.dispatch(d.CkL.SCROLLTO_PRESENT);
}