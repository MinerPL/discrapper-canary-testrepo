n.d(t, {
  W: function() {
return a;
  }
});
var i = n(544891),
  l = n(570140),
  r = n(981631);
async function a() {
  try {
l.Z.dispatch({
  type: 'CAMPAIGN_CONTEXT_FETCH'
});
let {
  body: e
} = await i.tn.get({
  url: r.ANM.CAMPAIGN_CONTEXT,
  query: {
    campaigns: [r.$Dd.CASH_APP_PAY_AWARENESS]
  }
});
l.Z.dispatch({
  type: 'CAMPAIGN_CONTEXT_FETCH_SUCCESS',
  campaignContexts: e
});
  } catch (e) {
l.Z.dispatch({
  type: 'CAMPAIGN_CONTEXT_FETCH_FAILURE'
});
  }
}