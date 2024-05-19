"use strict";
n.r(t), n.d(t, {
  loadStaticClanDiscovery: function() {
    return c
  },
  searchClanDiscovery: function() {
    return f
  }
}), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
var a = n("108131"),
  s = n.n(a),
  l = n("544891"),
  i = n("570140"),
  r = n("10473"),
  o = n("976757"),
  u = n("981631");
let d = new Worker(new URL(n.p + n.u("59546"), n.b));

function c() {
  return l.HTTP.get({
    url: u.Endpoints.DISCOVERY_ALL_GAMES
  }).then(e => {
    let t = e.body.clans.map(o.buildClanFromServer);
    i.default.dispatch({
      type: "FETCH_STATIC_CLAN_LIST_SUCCESS",
      clans: function(e) {
        let t = new Set;
        return e.filter(e => !t.has(e.id) && (t.add(e.id), !0))
      }(t)
    })
  })
}
async function f(e) {
  var t, n, a;
  let l = s().v3(JSON.stringify(e)),
    o = r.default.getStaticClans();
  let u = await (t = o, n = l, a = e, new Promise(e => {
      let s = t => {
        let {
          data: {
            id: a,
            sortedClans: l
          }
        } = t;
        n === a && e(l), null == d || d.removeEventListener("message", s)
      };
      null == d || d.addEventListener("message", s);
      null == d || d.postMessage({
        id: n,
        unsortedClans: t,
        criteria: a
      })
    })),
    c = {
      status: "loaded",
      loadedAt: Date.now(),
      items: u
    };
  i.default.dispatch({
    type: "FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS",
    criteriaHash: l,
    searchResult: c
  })
}