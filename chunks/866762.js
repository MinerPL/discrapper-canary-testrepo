    "use strict";
    r.r(t), r("312677");
    var n = r("945124");
    self.addEventListener("message", e => {
      var t, r;
      let {
        data: {
          unsortedClans: i,
          id: o,
          criteria: u
        }
      } = e;
      let f = (t = i, r = u, t.map(e => ({
        ...e,
        affinity: (0, n.getClanDiscoveryAffinity)(e, r)
      })).sort((e, t) => {
        var i, o;
        let u = null !== (i = t.affinity) && void 0 !== i ? i : (0, n.getClanDiscoveryAffinity)(t, r);
        return u - (null !== (o = e.affinity) && void 0 !== o ? o : (0, n.getClanDiscoveryAffinity)(e, r))
      }));
      self.postMessage({
        sortedClans: f,
        id: o
      })
    })