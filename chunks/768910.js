"use strict";
n.r(t), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("710845"),
  i = n("592125"),
  r = n("306680"),
  o = n("709054"),
  u = n("287328");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = new l.default("ReadStates");
t.default = new class e {
  async getAll(e) {
    let t = performance.now(),
      n = await u.default.readStates(e).getMany(),
      a = performance.now();
    return c.log("asynchronously loaded in ".concat(a - t, "ms (readStates: ").concat(n.length, ")")), n
  }
  resetInMemoryState() {
    this.readStateVersion = null
  }
  handleConnectionOpen(e) {
    this.readStateVersion = e.readState.version
  }
  handleReadStateAction(e) {
    null != this.readStateVersion && (null != e.version ? this.readStateVersion = e.version : c.log("Received null read states version", e))
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
      for (let e of (l = null !== (a = s()(r).sort(o.default.compare).reverse().value()[0]) && void 0 !== a ? a : "0", n)) null != e._lastMessageId && (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId), d.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, l) && (l = e._lastMessageId));
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
    d(this, "readStateVersion", null), d(this, "actions", {
      CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      CHANNEL_PINS_ACK: e => this.handleReadStateAction(e),
      MESSAGE_ACK: e => this.handleReadStateAction(e),
      BACKGROUND_SYNC_FINISHED: (e, t) => {
        !e.messagesOnly && this.handleWriteCaches(t, !1)
      },
      WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0)
    })
  }
}