"use strict";
n.d(t, {
  $: function() {
    return _
  }
});
var i = n(544891),
  r = n(570140),
  s = n(706454),
  o = n(70956),
  a = n(844439),
  l = n(981631);
let u = 10 * o.Z.Millis.MINUTE;
async function _(e) {
  let {
    channelId: t,
    location: n
  } = e, o = Date.now(), _ = a.Z.getFetchState({
    location: n,
    channelId: t
  }), d = a.Z.getLastFetchTimeMs({
    location: n,
    channelId: t
  });
  if (_ !== a.M.FETCHING && (null == d || !(d + u > o))) {
    r.Z.dispatch({
      type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS",
      location: n,
      channelId: t
    });
    try {
      let e = await i.tn.get({
        url: l.ANM.APP_RECOMMENDATIONS,
        query: {
          locale: s.default.locale,
          channel_id: t,
          location: n
        }
      });
      r.Z.dispatch({
        type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS",
        location: n,
        channelId: t,
        recommendations: e.body
      })
    } catch (e) {
      r.Z.dispatch({
        type: "APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE",
        location: n,
        channelId: t
      })
    }
  }
}