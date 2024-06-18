"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(928801),
  r = n(549895),
  s = n(885110);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class a extends i.Z {
  getInitialState() {
    return s.Z.getLocalPresence()
  }
  getNextState() {
    return s.Z.getLocalPresence()
  }
  shouldCommit() {
    return this.socket.isSessionEstablished()
  }
  emitPresenceUpdate(e) {
    let {
      status: t,
      since: n,
      activities: i,
      afk: r,
      broadcast: s
    } = e;
    this.socket.presenceUpdate(t, n, i, r, s)
  }
  handleConnectionOpen() {
    let e = !this.switchingAccounts;
    this.update({}, e), this.switchingAccounts = !1
  }
  handleAccountSwitch() {
    this.switchingAccounts = !0, this.reset(), this.emitPresenceUpdate(this.getState())
  }
  constructor(e) {
    super(!1), o(this, "socket", void 0), o(this, "switchingAccounts", void 0), o(this, "didCommit", void 0), this.socket = e, this.switchingAccounts = !1, this.didCommit = (0, r.Z)(5, 2e4, this.emitPresenceUpdate.bind(this))
  }
}