"use strict";
n(47120);
var i = n(147913),
  r = n(710845),
  s = n(880027);
let o = new r.Z("LeagueOfLegendsLifecycleManager");
class a extends i.Z {
  handleRunningGameChange(e) {
    let {
      added: t,
      removed: n
    } = e;
    if (!!(0, s.J)("LeagueOfLegendsLifecycleManager")) i(t) && o.info("League of Legends Match Started", {
      added: t
    }), i(n) && o.info("League of Legends Match Ended", {
      removed: n
    });

    function i(e) {
      return e.some(e => "League of Legends" === e.name)
    }
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      RUNNING_GAMES_CHANGE: this.handleRunningGameChange
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new a