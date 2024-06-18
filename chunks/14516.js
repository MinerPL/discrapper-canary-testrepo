"use strict";
n(47120);
var i = n(147913),
  r = n(19780),
  s = n(358221);
class o extends i.Z {
  handleFocusParticipant() {
    let e = r.Z.getChannelId();
    if (null != e) {
      var t, n;
      let i = s.Z.getSelectedParticipantId(e),
        o = s.Z.getVideoParticipants(e);
      null === (n = r.Z.getRTCConnection()) || void 0 === n || n.setSelectedParticipant(null === (t = o.find(e => e.id === i && !e.localVideoDisabled)) || void 0 === t ? void 0 : t.id)
    }
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "stores", i = new Map().set(s.Z, this.handleFocusParticipant), n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new o