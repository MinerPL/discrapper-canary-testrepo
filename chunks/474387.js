"use strict";
n(47120);
var i = n(147913),
  r = n(344185),
  s = n(314897),
  o = n(592125),
  a = n(709054),
  l = n(882252);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class _ extends i.Z {
  handleThreadCreate(e) {
    let {
      channel: t
    } = e;
    if (t.isForumPost()) {
      let e = t.ownerId === s.default.getId();
      this.readStateSnapshots[t.id] = {
        isNew: !e,
        hasUnreads: !e
      }
    }
  }
  constructor(...e) {
    super(...e), u(this, "readStateSnapshots", {}), u(this, "actions", {
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      THREAD_CREATE: e => this.handleThreadCreate(e)
    }), u(this, "handleChannelSelect", e => {
      let {
        channelId: t
      } = e;
      if (null == t) return;
      let n = o.Z.getChannel(t);
      null != n && n.isForumLikeChannel() && (this.readStateSnapshots = {}, this.processForumChannel(n.guild_id, t))
    }), u(this, "processForumChannel", (e, t) => {
      let n = r.Z.getThreadsForParent(e, t);
      a.default.keys(n).forEach(e => {
        let t = (0, l.nC)(e);
        null != t && (this.readStateSnapshots[e] = t)
      })
    }), u(this, "getReadStateSnapshotAnalytics", e => this.readStateSnapshots[e])
  }
}
t.Z = new _