"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(846519),
  o = n(710845),
  a = n(70956),
  l = n(709054);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = 1 * a.Z.Millis.MINUTE;
class d {
  reset() {
    this._subscriptions = {}, this._unsubscriptions = {}, this._unsubscribe.cancel()
  }
  get(e) {
    var t;
    let n = null !== (t = this._subscriptions[e]) && void 0 !== t ? t : {};
    return l.default.keys(n)
  }
  clear(e) {
    delete this._subscriptions[e], delete this._unsubscriptions[e]
  }
  subscribe(e, t) {
    var n, i;
    let r = null !== (n = this._subscriptions[e]) && void 0 !== n ? n : {};
    r[t] = (null !== (i = r[t]) && void 0 !== i ? i : 0) + 1, this._subscriptions[e] = r, 1 === r[t] && this._onChange(e, this.get(e)), this.checkForLeaks(e, t)
  }
  isSubscribed(e, t) {
    return null != this._subscriptions[e] && null != this._subscriptions[e][t]
  }
  isSubscribedToAnyMember(e) {
    return this.get(e).length > 0
  }
  unsubscribe(e, t) {
    var n, i;
    if (!this.isSubscribed(e, t)) return;
    let r = null !== (n = this._unsubscriptions[e]) && void 0 !== n ? n : {};
    r[t] = (null !== (i = r[t]) && void 0 !== i ? i : 0) + 1, this._unsubscriptions[e] = r, 1 === r[t] && this._unsubscribe.delay(!1)
  }
  checkForLeaks(e, t) {
    var n, i, r, s;
    let a = null !== (r = null === (n = this._subscriptions[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== r ? r : 0,
      l = a - (null !== (s = null === (i = this._unsubscriptions[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== s ? s : 0);
    l > 5 && new o.Z("GuildMemberSubscriptions").warn("GuildMemberSubscriptions.subscribe(...): Potential reference leak! (".concat(l, " subscriptions)"))
  }
  flushUnsubscriptions() {
    if (!r().isEmpty(this._unsubscriptions)) r().forEach(this._unsubscriptions, (e, t) => {
      let n = this._subscriptions[t];
      r().forEach(e, (e, t) => {
        var i;
        n[t] = (null !== (i = n[t]) && void 0 !== i ? i : 0) - e, n[t] <= 0 && delete n[t]
      }), r().isEmpty(n) && delete this._subscriptions[t], this._onChange(t, this.get(t))
    }), this._unsubscriptions = {}
  }
  constructor(e) {
    u(this, "_subscriptions", {}), u(this, "_unsubscriptions", {}), u(this, "_onChange", void 0), u(this, "_unsubscribe", new s.sW(_, () => this.flushUnsubscriptions())), this._onChange = e
  }
}