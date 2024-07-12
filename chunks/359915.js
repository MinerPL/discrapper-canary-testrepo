n(47120);
var r = n(442837),
  i = n(570140),
  a = n(147913),
  o = n(883429),
  s = n(314897),
  l = n(592125);
class u extends a.Z {
  handleChannelDelete(e) {
let {
  channel: t
} = e;
if (null != t.guild_id) {
  let e = l.Z.getAllThreadsForParent(t.id);
  e.length > 0 && r.ZP.Emitter.batched(() => {
    for (let t of e)
      i.Z.dispatch({
        type: 'THREAD_DELETE',
        channel: t
      });
  });
}
  }
  handleMessageCreate(e) {
var t, n, r;
let {
  channelId: i,
  message: a
} = e, u = l.Z.getChannel(i);
if ((null === (t = a.author) || void 0 === t ? void 0 : t.id) !== s.default.getId() || !(null == u ? void 0 : u.isActiveThread()))
  return;
let c = new Date(null !== (r = null === (n = u.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== r ? r : 0).getTime();
Date.now() - c < 5000 && o.Z.resort(u.parent_id);
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  CHANNEL_DELETE: this.handleChannelDelete,
  MESSAGE_CREATE: this.handleMessageCreate
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new u();