n.d(t, {
  Cg: function() {
return E;
  },
  XB: function() {
return u;
  },
  jc: function() {
return _;
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(108131),
  a = n.n(i),
  s = n(544891),
  r = n(570140),
  l = n(229893),
  o = n(976757),
  c = n(981631);
let d = new Worker(new URL('/assets/' + n.u('59546'), n.b));

function u() {
  return r.Z.dispatch({
type: 'FETCH_STATIC_CLAN_LIST_START'
  }), s.tn.get({
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
  let s = a().v3(JSON.stringify(e)),
o = l.Z.getStaticClans();
  let c = await (t = o, n = s, i = e, new Promise(e => {
  let a = t => {
    let {
      data: {
        id: i,
        sortedClans: s
      }
    } = t;
    n === i && e(s), null == d || d.removeEventListener('message', a);
  };
  null == d || d.addEventListener('message', a);
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
criteriaHash: s,
searchResult: u,
recommendationId: 'static:'.concat(s)
  });
}

function E(e) {
  let t = l.Z.getSearchResult(e);
  if ('loaded' === t.status)
return t;
  let n = a().v3(JSON.stringify(e));
  return s.tn.post({
url: c.ANM.DISCOVERY_RECOMMENDATIONS,
body: {
  game_application_ids: e.games,
  traits: e.traits,
  playstyle: e.playstyle
}
  }).then(e => {
var t;
let i = e.body.guilds.map(o.Gh),
  a = {
    status: 'loaded',
    loadedAt: Date.now(),
    items: i
  };
return r.Z.dispatch({
  type: 'FETCH_CLAN_DISCOVERY_SEARCH_RESULT_SUCCESS',
  criteriaHash: n,
  searchResult: a,
  recommendationId: null !== (t = e.body.recommendation_id) && void 0 !== t ? t : ''
}), a;
  }).catch(e => ({
status: 'error',
error: e
  }));
}