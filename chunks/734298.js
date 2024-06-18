"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(653041), n(47120);
var i = n(46973),
  r = n(198274);

function s(e) {
  let t = !1;
  e.on(i.aB.Destroy, () => t = !0);
  let n = async () => {
    if (t) return;
    let s = [];
    e.eachConnection(e => s.push({
      connection: e,
      stats: e.emitStats()
    }));
    let o = [];
    for (let e of s) {
      let t = await e.stats;
      null != t && o.push({
        connection: e.connection,
        stats: t
      })
    }
    e.emit(i.aB.ConnectionStats, o), setTimeout(n, r.T)
  };
  setTimeout(n, r.T)
}