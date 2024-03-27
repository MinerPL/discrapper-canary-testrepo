"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  l = n("605250"),
  i = n("42203"),
  r = n("660478"),
  o = n("299039"),
  u = n("802493");
let d = new l.default("ReadStates");
var c = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await u.default.readStates(e).getMany(),
      a = performance.now();
    return d.log("asynchronously loaded in ".concat(a - t, "ms (readStates: ").concat(n.length, ")")), n
  }
  resetInMemoryState() {
    this.readStateVersion = null
  }
  handleConnectionOpen(e) {
    this.readStateVersion = e.readState.version
  }
  handleReadStateAction(e) {
    null != this.readStateVersion && (null != e.version ? this.readStateVersion = e.version : d.log("Received null read states version", e))
  }
  handleWriteCaches(e, t) {
    let n = r.default.getAllReadStates(!1);
    if (t) {
      var a;
      if (null == this.readStateVersion) return;
      let t = "0",
        l = "0",
        r = Object.keys(i.default.getMutablePrivateChannels()),
        d = new Set(r);
      for (let e of (l = null !== (a = s(r).sort(o.default.compare).reverse().value()[0]) && void 0 !== a ? a : "0", n)) null != e._lastMessageId && (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), d.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, l) && (l = e._lastMessageId));
      u.default.nonGuildVersionsTransaction(e).putAll([{
        id: "highest_last_message_id",
        versionString: t
      }, {
        id: "private_channels_version",
        versionString: l
      }, {
        id: "read_state_version",
        version: this.readStateVersion
      }])
    }
    let l = u.default.readStatesTransaction(e);
    l.delete(), n.forEach(e => l.put("".concat(e.type, "-").concat(e.channelId), e))
  }
  constructor() {
    this.readStateVersion = null, this.actions = {
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      CHANNEL_PINS_ACK: e => this.handleReadStateAction(e),
      MESSAGE_ACK: e => this.handleReadStateAction(e),
      BACKGROUND_SYNC_FINISHED: (e, t) => {
        !e.messagesOnly && this.handleWriteCaches(t, !1)
      },
      WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0)
    }
  }
}