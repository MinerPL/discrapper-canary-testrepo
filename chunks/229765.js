n.d(t, {
  X: function() {
return u;
  },
  j: function() {
return _;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(108131),
  s = n.n(i),
  a = n(544891),
  r = n(570140),
  l = n(10473),
  o = n(976757),
  c = n(981631);
let d = new Worker(new URL(n.p + n.u('59546'), n.b));

function u() {
  return r.Z.dispatch({
type: 'FETCH_STATIC_CLAN_LIST_START'
  }), a.tn.get({
url: c.ANM.DISCOVERY_ALL_GAMES
  }).then(e => {
let t = e.body.clans.map(o.Gh);
r.Z.dispatch({
  type: 'FETCH_STATIC_CLAN_LIST_SUCCESS',
  clans: function(e) {
    let t = new Set();
    return e.filter(e => !t.has(e.id) && (t.add(e.id), !0));
  }(t)
});
  }).catch(e => {
r.Z.dispatch({
  type: 'FETCH_STATIC_CLAN_LIST_FAILURE',
  error: e
});
  });
}
async function _(e) {
  var t, n, i;
  if ('loaded' === l.Z.getSearchResult(e).status)
return;
  let a = s().v3(JSON.stringify(e)),
o = l.Z.getStaticClans();
  let c = await (t = o, n = a, i = e, new Promise(e => {
  let s = t => {
    let {
      data: {
        id: i,
        sortedClans: a
      }
    } = t;
    n === i && e(a), null == d || d.removeEventListener('message', s);
  };
  null == d || d.addEventListener('message', s);
  null == d || d.postMessage({
    id: n,
    unsortedClans: t,
    criteria: i
  });
})),
u = {
  status: 'loaded',
  loadedAt: Date.now(),
  items: c
};
  r.Z.dispatch({
type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
criteriaHash: a,
searchResult: u
  });
}