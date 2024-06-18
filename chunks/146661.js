"use strict";
n(47120);
var i = n(147913),
  r = n(430824),
  s = n(70956),
  o = n(709054),
  a = n(553385),
  l = n(556178),
  u = n(890477);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = 0;
class c extends i.Z {
  constructor(...e) {
    super(...e), _(this, "actions", {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      IDLE: () => this.handleIdleChange()
    }), _(this, "handleConnectionOpen", e => {
      this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment()
    }), _(this, "handleIdleChange", () => {
      Date.now() - d > s.Z.Millis.HOUR && this._attemptDeadchatPrompt()
    }), _(this, "_attemptDeadchatPrompt", () => {
      let e = r.Z.getGuilds(),
        t = o.default.keys(e).filter(e => u.Z.getCurrentConfig({
          guildId: e,
          location: "manager"
        }).triggerDeadchat);
      t.length > 0 && (d = Date.now(), (0, a.N7)(t))
    }), _(this, "_triggerGamingStatsSetupExperiment", () => {
      let e = r.Z.getGuilds();
      o.default.keys(e).forEach(e => {
        l.g.trackExposure({
          guildId: e,
          location: "manager"
        })
      })
    })
  }
}
t.Z = new c