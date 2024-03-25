"use strict";
n.r(t), n.d(t, {
  sendRandomStickerOrEmoji: function() {
    return m
  }
}), n("834022");
var s = n("819689"),
  a = n("385976"),
  l = n("884351"),
  i = n("866353"),
  r = n("467094"),
  o = n("364685"),
  u = n("161585"),
  d = n("305961"),
  c = n("697218"),
  E = n("402671"),
  f = n("299039"),
  _ = n("49111"),
  T = n("958706");

function I(e) {
  let t = d.default.getGuild(e);
  return null != t && (t.nsfwLevel === _.GuildNSFWContentLevel.DEFAULT || t.nsfwLevel === _.GuildNSFWContentLevel.SAFE)
}
async function m(e, t) {
  var n, _, m;
  let N = t.getGuildId();
  if (null == N) return;
  let p = d.default.getGuild(N);
  if (null == p) return;
  let S = c.default.getCurrentUser();
  if (null == S) return;
  await (0, r.fetchStickerPacks)();
  let A = Array.from(o.default.getAllStickersIterator()),
    C = A.filter(e => e.type === u.MetaStickerType.GUILD),
    h = C.filter(e => I(e.guild_id) && (0, i.isSendableSticker)(e, S, t)).sort((e, t) => -f.default.compare(e.id, t.id));
  if (h.length > 5) {
    let a = [h[Math.floor(Math.pow(Math.random(), 2) * h.length)].id];
    s.default.sendStickers(t.id, a, "", {
      messageReference: {
        guild_id: null !== (n = t.getGuildId()) && void 0 !== n ? n : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let g = d.default.getGuildIds().filter(I).map(e => a.default.getUsableGuildEmoji(e)).flat().filter(e => null == E.default.getEmojiUnavailableReason({
    emoji: e,
    channel: t,
    guildId: N,
    intention: T.EmojiIntention.CHAT
  })).sort((e, t) => -f.default.compare(e.id, t.id));
  if (g.length > 10) {
    let n = g[Math.floor(Math.pow(Math.random(), 2) * g.length)];
    s.default.sendMessage(t.id, l.default.parse(t, n.allNamesString), !1, {
      messageReference: {
        guild_id: null !== (_ = t.getGuildId()) && void 0 !== _ ? _ : void 0,
        channel_id: t.id,
        message_id: e
      }
    });
    return
  }
  let M = A.filter(e => e.type === u.MetaStickerType.STANDARD),
    O = [M[Math.floor(Math.random() * M.length)].id];
  s.default.sendStickers(t.id, O, "", {
    messageReference: {
      guild_id: null !== (m = t.getGuildId()) && void 0 !== m ? m : void 0,
      channel_id: t.id,
      message_id: e
    }
  })
}