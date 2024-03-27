"use strict";
n.r(t), n.d(t, {
  PreviewData: function() {
    return r
  }
}), n("222007");
var a = n("692038"),
  s = n("719926"),
  l = n("660478"),
  i = n("299039");
class r {
  isLatest(e, t) {
    return this.messageGeneration(e, t) === t
  }
  messageGeneration(e, t) {
    let n = this.messages.get(e);
    return null == n ? -1 / 0 : n.generation !== t && null != n.message && n.message.id === l.default.lastMessageId(e) ? (this.messages.set(e, {
      ...n,
      generation: t
    }), t) : n.generation
  }
  messageId(e) {
    var t, n;
    let a = this.messages.get(e);
    return null !== (n = null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null
  }
  messageRecord(e) {
    var t;
    let n = this.messages.get(e);
    return null != n && null != n.message && !(n.message instanceof s.default) && (n.message = (0, a.createMessageRecord)(n.message)), null !== (t = null == n ? void 0 : n.message) && void 0 !== t ? t : null
  }
  has(e) {
    return this.messages.has(e)
  }
  put(e, t, n) {
    this.messages.set(e, {
      message: t,
      generation: n
    })
  }
  putNew(e, t, n) {
    var a;
    let s = this.messages.get(e);
    null != t && function(e, t) {
      return null == t || i.default.compare(e, t) > 0
    }(t.id, null == s ? void 0 : null === (a = s.message) || void 0 === a ? void 0 : a.id) && this.put(e, t, n)
  }
  putMany(e, t) {
    for (let n of e) this.put(n.channel_id, n, t)
  }
  update(e) {
    var t;
    if (null == e.id || null == e.channel_id) return;
    let n = e.channel_id,
      l = this.messages.get(n);
    if ((null == l ? void 0 : null === (t = l.message) || void 0 === t ? void 0 : t.id) !== e.id) return;
    let i = l.message instanceof s.default ? (0, a.updateMessageRecord)(l.message, e) : (0, a.updateServerMessage)(l.message, e);
    this.messages.set(n, {
      ...l,
      message: i
    })
  }
  delete(e) {
    this.messages.delete(e)
  }
  constructor() {
    this.localNeeded = !0, this.messages = new Map
  }
}