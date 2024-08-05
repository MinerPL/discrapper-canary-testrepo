n.d(t, {
  c: function() {
return c;
  }
});
var i = n(954955),
  a = n.n(i),
  s = n(544891),
  l = n(570140),
  r = n(486527),
  o = n(981631);
let c = a()(async e => {
  try {
l.Z.dispatch({
  type: 'EVENT_DIRECTORY_FETCH_START'
});
let t = await s.tn.get({
  url: o.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
  query: {
    type: r.C2.GUILD_SCHEDULED_EVENT
  }
});
l.Z.dispatch({
  type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
  channelId: e,
  entries: t.body
});
  } catch (e) {
l.Z.dispatch({
  type: 'EVENT_DIRECTORY_FETCH_FAILURE'
});
  }
}, 200);