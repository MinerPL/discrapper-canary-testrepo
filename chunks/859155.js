n(411104);
var l = n(991637),
  a = n.n(l),
  s = n(388123),
  i = n(904245),
  r = n(957730),
  o = n(592125);
let c = {
  async sendForward(e, t, n) {
let l = o.Z.getChannel(t),
  a = o.Z.getChannel(e.channel_id);
if (null == a)
  throw Error('Unable to find original channel for message');
if (null == l)
  throw Error('Unable to find destination channel for message');
let c = r.ZP.parse(l, ''),
  u = {
    guild_id: a.guild_id,
    channel_id: e.channel_id,
    message_id: e.id,
    type: s.U.FORWARD,
    forward_only: (null == n ? void 0 : n.onlyAttachmentIds) != null || (null == n ? void 0 : n.onlyEmbedIndices) != null ? {
      attachment_ids: n.onlyAttachmentIds,
      embed_indices: n.onlyEmbedIndices
    } : void 0
  };
await i.Z.sendMessage(l.id, c, !1, {
  messageReference: u,
  eagerDispatch: !1
}), (null == n ? void 0 : n.withMessage) != null && await i.Z.sendMessage(l.id, r.ZP.parse(l, n.withMessage), !1);
  },
  sendForwards: (e, t, n) => a()(t.map(t => c.sendForward(e, t, n)))
};
t.Z = c;