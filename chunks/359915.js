"use strict";
n(47120);
var i = n(442837),
  r = n(570140),
  s = n(147913),
  o = n(883429),
  a = n(314897),
  l = n(592125);
class u extends s.Z {
  handleChannelDelete(e) {
    let {
      channel: t
    } = e;
    if (null != t.guild_id) {
      let e = l.Z.getAllThreadsForParent(t.id);
      e.length > 0 && i.ZP.Emitter.batched(() => {
        for (let t of e) r.Z.dispatch({
          type: "THREAD_DELETE",
          channel: t
        })
      })
    }
  }
  handleMessageCreate(e) {
    var t, n, i;
    let {
      channelId: r,
      message: s
    } = e, u = l.Z.getChannel(r);
    if ((null === (t = s.author) || void 0 === t ? void 0 : t.id) !== a.default.getId() || !(null == u ? void 0 : u.isActiveThread())) return;
    let _ = new Date(null !== (i = null === (n = u.threadMetadata) || void 0 === n ? void 0 : n.archiveTimestamp) && void 0 !== i ? i : 0).getTime();
    Date.now() - _ < 5e3 && o.Z.resort(u.parent_id)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      CHANNEL_DELETE: this.handleChannelDelete,
      MESSAGE_CREATE: this.handleMessageCreate
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new u