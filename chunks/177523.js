"use strict";
n.d(t, {
  KV: function() {
    return o.KV
  },
  ZP: function() {
    return c
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(846519),
  o = n(509848),
  a = n(483019),
  l = n(945689),
  u = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function d(e) {
  return null != e && "null" !== e && e !== u.ME && "undefined" !== e && e !== u.I_8
}
class c {
  _enqueue(e, t) {
    this._pending[e] = {
      ...this._pending[e],
      ...t
    }, this._flush.delay()
  }
  reset() {
    this._subscribed.clear(), this._pending = {}, this._members.reset(), this._memberUpdates.clear(), this._channels.reset(), this._threadMemberLists.reset(), this._typing.clear(), this._threads.clear(), this._activities.clear()
  }
  get(e) {
    return {
      typing: this._typing.has(e),
      threads: this._threads.has(e),
      activities: this._activities.has(e),
      members: this._members.get(e),
      member_updates: this._memberUpdates.has(e),
      channels: this._channels.get(e),
      thread_member_lists: this._threadMemberLists.get(e)
    }
  }
  getSubscribedThreadIds() {
    return this._threadMemberLists.getSubscribedThreadIds()
  }
  isSubscribedToThreads(e) {
    return this._threads.has(e)
  }
  isSubscribedToAnyMember(e) {
    var t;
    return null !== (t = this._members.isSubscribedToAnyMember(e)) && void 0 !== t && t
  }
  isSubscribedToMemberUpdates(e) {
    var t;
    return null !== (t = this.get(e).member_updates) && void 0 !== t && t
  }
  forEach(e) {
    this._subscribed.forEach(e)
  }
  clearWithoutFlushing(e, t) {
    (t || !this._threads.has(e)) && this._subscribed.delete(e), delete this._pending[e], this._members.clear(e), this._channels.clear(e), this._threadMemberLists.clear(e), this._typing.delete(e), this._memberUpdates.delete(e), t && this._threads.delete(e), this._activities.delete(e)
  }
  flush() {
    r().forEach(this._pending, (e, t) => {
      this._subscribed.add(t)
    }), this._onChange(this._pending), this._pending = {}
  }
  subscribeUser(e, t) {
    d(e) && this._members.subscribe(e, t)
  }
  unsubscribeUser(e, t) {
    d(e) && this._members.unsubscribe(e, t)
  }
  subscribeChannel(e, t, n) {
    return !!d(e) && this._channels.subscribe(e, t, n)
  }
  subscribeToMemberUpdates(e) {
    if (!d(e)) return !1;
    this._enqueue(e, {
      member_updates: !0
    }), this._memberUpdates.add(e)
  }
  unsubscribeFromMemberUpdates(e) {
    if (!d(e)) return !1;
    this._enqueue(e, {
      member_updates: !1
    })
  }
  subscribeThreadMemberList(e, t, n) {
    return !!d(e) && this._threadMemberLists.subscribe(e, t, n)
  }
  unsubscribeThreadMemberList(e, t) {
    return !!d(e) && this._threadMemberLists.unsubscribe(e, t)
  }
  subscribeToGuild(e) {
    this._subscribeToFeature(e, this._typing, {
      typing: !0
    }), this._subscribeToFeature(e, this._activities, {
      activities: !0
    }), this._subscribeToFeature(e, this._threads, {
      threads: !0
    })
  }
  _subscribeToFeature(e, t, n) {
    if (d(e)) {
      if (!t.has(e)) t.add(e), this._enqueue(e, n)
    }
  }
  constructor(e) {
    _(this, "_members", new a.Z((e, t) => this._enqueue(e, {
      members: t
    }))), _(this, "_channels", new o.ZP((e, t) => this._enqueue(e, {
      channels: t
    }))), _(this, "_threadMemberLists", new l.Z((e, t) => this._enqueue(e, {
      thread_member_lists: t
    }))), _(this, "_typing", new Set), _(this, "_threads", new Set), _(this, "_activities", new Set), _(this, "_memberUpdates", new Set), _(this, "_subscribed", new Set), _(this, "_pending", {}), _(this, "_flush", new s.sW(0, () => this.flush())), _(this, "_onChange", void 0), this._onChange = e
  }
}