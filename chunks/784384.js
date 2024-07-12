n.d(t, {
  H: function() {
return o;
  }
}), n(47120), n(390547);
var l = n(926491),
  a = n(378233),
  i = n(131704),
  s = n(496675),
  r = n(981631),
  c = n(689938);

function o(e, t, n) {
  let o = n instanceof i.Sf;
  if (t.isNSFW() && !(o && n.isNSFW()))
return {
  label: c.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED
};
  if (o && (0, i.Km)(n.type)) {
if ((e.attachments.length > 0 || e.messageSnapshots.some(e => e.message.attachments.length > 0)) && !s.Z.can(r.Plq.ATTACH_FILES, n))
  return {
    label: c.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED
  };
if ((e.embeds.length > 0 || e.messageSnapshots.some(e => e.message.embeds.length > 0)) && !s.Z.can(r.Plq.EMBED_LINKS, n))
  return {
    label: c.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED
  };
let t = [
  ...(0, a.cv)(e),
  ...e.messageSnapshots.flatMap(e => {
    let {
      message: t
    } = e;
    return (0, a.cv)(t);
  })
];
if (t.length > 0 && !s.Z.can(r.Plq.USE_EXTERNAL_STICKERS, n) && t.some(e => function(e, t) {
    let n = l.Z.getStickerById(e.id);
    return !!(null != n && (0, a.J8)(n)) && (n.guild_id !== t.guild_id || void 0);
  }(e, n)))
  return {
    label: c.Z.Messages.MESSAGE_CHANNEL_EXTERNAL_STICKERS_DISABLED
  };
  }
}