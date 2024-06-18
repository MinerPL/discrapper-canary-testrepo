"use strict";
n.d(t, {
  N7: function() {
    return c
  },
  XP: function() {
    return I
  },
  j8: function() {
    return E
  },
  z$: function() {
    return T
  }
});
var i = n(544891),
  r = n(430742),
  s = n(904245),
  o = n(623292),
  a = n(592125),
  l = n(703558),
  u = n(375954),
  _ = n(585483),
  d = n(981631);

function c(e) {
  i.tn.post({
    url: d.ANM.INITIATE_CHANNEL_PROMPTS,
    body: {
      guild_ids: e
    }
  })
}

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.uaV.GUILD_DEADCHAT_REVIVE_PROMPT;
  i.tn.post({
    url: d.ANM.FORCE_SEND_PROMPT(e),
    body: {
      prompt_type: t
    }
  })
}
async function I(e, t, n) {
  await i.tn.post({
    url: d.ANM.SEND_GAMING_STATS(t),
    body: {
      message_reference: {
        guild_id: e,
        channel_id: t,
        message_id: n
      }
    }
  }), h(t)
}
async function T(e) {
  let t = await i.tn.patch({
    url: d.ANM.UPDATE_GAMING_STATS(e.channel_id, e.id)
  });
  if (null != t.text && "" !== t.text) {
    let n = a.Z.getChannel(e.channel_id);
    null != n && ((0, o.fE)({
      channel: n,
      message: e,
      shouldMention: !1,
      showMentionToggle: !1
    }), h(n.id)), r.Z.saveDraft(e.channel_id, t.text, l.d.ChannelMessage)
  }
}

function h(e) {
  u.Z.getMessages(e).hasMoreAfter ? s.Z.jumpToPresent(e, d.AQB) : _.S.dispatch(d.CkL.SCROLLTO_PRESENT)
}