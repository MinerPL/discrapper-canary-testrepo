n.d(t, {
  Q: function() {
return u;
  }
}), n(47120);
var r = n(544891),
  i = n(570140),
  a = n(430824),
  o = n(356264),
  s = n(981631);
let l = new Set();
async function u(e) {
  if (null == a.Z.getGuild(e) && null == o.Z.getGuildOrStatus(e)) {
if (!l.has(e)) {
  i.Z.dispatch({
    type: 'BASIC_GUILD_FETCH',
    guildId: e
  }), l.add(e);
  try {
    let t = (await r.tn.get({
      url: s.ANM.GUILD_BASIC(e)
    })).body;
    i.Z.dispatch({
      type: 'BASIC_GUILD_FETCH_SUCCESS',
      guildId: e,
      guildInfo: t
    });
  } catch (t) {
    i.Z.dispatch({
      type: 'BASIC_GUILD_FETCH_FAILURE',
      guildId: e
    });
  } finally {
    l.delete(e);
  }
}
  }
}