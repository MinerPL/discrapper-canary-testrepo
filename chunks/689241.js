s.d(t, {
  q: function() {
return r;
  }
});
var a = s(544891),
  n = s(570140),
  l = s(173747),
  i = s(981631);
async function r(e, t, s, r) {
  if (!!l.Z.needsToFetchBuildSize(s)) {
n.Z.dispatch({
  type: 'APPLICATION_BUILD_SIZE_FETCH_START',
  buildId: s
});
try {
  let l = await a.tn.post({
    url: i.ANM.APPLICATION_BUILD_SIZE(e, t, s),
    body: {
      manifest_ids: r
    },
    oldFormErrors: !0
  });
  n.Z.dispatch({
    type: 'APPLICATION_BUILD_SIZE_FETCH_SUCCESS',
    buildId: s,
    sizeKB: l.body.size_kb
  });
} catch (e) {
  n.Z.dispatch({
    type: 'APPLICATION_BUILD_SIZE_FETCH_FAIL',
    buildId: s
  });
}
  }
}