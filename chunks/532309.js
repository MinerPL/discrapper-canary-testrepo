t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(990547),
  l = t(442837),
  a = t(213609),
  r = t(541099),
  s = t(312871);

function o(e) {
  let {
applicationId: n,
commandId: t,
searchResultsPosition: o,
query: c
  } = e, u = (0, l.e7)([r.Z], () => r.Z.entrypoint());
  return {
trackSearchResultsItemImpressionRef: (0, s.Z)({
  onVisible: () => {
    (0, a.h)({
      type: i.ImpressionTypes.VIEW,
      name: i.ImpressionNames.APP_LAUNCHER_SEARCH_RESULTS_ITEM,
      properties: {
        application_id: n,
        command_id: t,
        search_results_position: o,
        query: c,
        source: u
      }
    });
  },
  threshold: 1
})
  };
}