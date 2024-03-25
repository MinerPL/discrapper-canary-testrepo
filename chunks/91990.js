"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var a = n("913144"),
  s = n("316272"),
  l = n("189293");
class i extends s.default {
  _initialize() {
    a.default.subscribe("CONNECTION_OPEN", this.handleConnectionOpen)
  }
  _terminate() {
    a.default.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen)
  }
  constructor(...e) {
    super(...e), this.handleConnectionOpen = () => {
      (0, l.fetchUserProfileEffects)()
    }
  }
}
var r = new i