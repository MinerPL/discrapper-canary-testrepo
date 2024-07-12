n(47120);
var r = n(147913),
  i = n(710845),
  a = n(880027);
let o = new i.Z('LeagueOfLegendsLifecycleManager');
class s extends r.Z {
  handleRunningGameChange(e) {
let {
  added: t,
  removed: n
} = e;
if (!!(0, a.J)('LeagueOfLegendsLifecycleManager'))
  r(t) && o.info('League of Legends Match Started', {
    added: t
  }), r(n) && o.info('League of Legends Match Ended', {
    removed: n
  });

function r(e) {
  return e.some(e => 'League of Legends' === e.name);
}
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  RUNNING_GAMES_CHANGE: this.handleRunningGameChange
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new s();