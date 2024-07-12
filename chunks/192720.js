n.d(t, {
  L9: function() {
return p;
  },
  sE: function() {
return m;
  },
  sd: function() {
return f;
  }
});
var r = n(544891),
  i = n(570140),
  a = n(933557),
  o = n(592125),
  s = n(430824),
  l = n(699516),
  u = n(594174),
  c = n(70956),
  d = n(686478),
  _ = n(802463),
  E = n(981631);

function f(e) {
  let t = o.Z.getChannel(e.channel_id);
  if (null == t)
return null;
  let n = s.Z.getGuild(t.guild_id),
r = '',
i = (0, a.F6)(t, u.default, l.Z, !0);
  if (t.isPrivate())
r = i;
  else if (t.isThread()) {
let e = o.Z.getChannel(t.parent_id);
if (null == e)
  return null;
let n = (0, a.F6)(e, u.default, l.Z, !0);
r = ''.concat(n, ' > ').concat(i);
  } else
r = i;
  let c = ''.concat(e.content.length > 0 ? e.content : ''.concat(e.attachments.length, ' attachments'));
  return {
authorSummary: e.author.username,
authorId: e.author.id,
channelSummary: r,
messageSummary: c.length > 200 ? ''.concat(c.slice(0, 197), '...') : c,
guildId: null == n ? void 0 : n.id
  };
}

function h(e) {
  i.Z.dispatch({
type: 'SAVED_MESSAGES_UPDATE',
messages: e
  });
}
async function p(e, t) {
  if (0 !== e.length || 0 !== t.length)
h((await r.tn.post({
  url: E.ANM.SAVED_MESSAGES,
  body: {
    added: e.map(d.cu),
    removed: t.map(d.cu)
  }
})).body.saved_messages.map(d.lY));
}
async function m() {
  if (new Date().getTime() - _.Z.getLastFetched() < 1 * c.Z.Millis.MINUTE)
return Promise.resolve();
  h((await r.tn.get({
url: E.ANM.SAVED_MESSAGES
  })).body.saved_messages.map(d.lY));
}