n.d(t, {
  a: function() {
return l;
  },
  j: function() {
return u;
  }
});
var r = n(544891),
  i = n(570140),
  a = n(626135),
  s = n(70956),
  o = n(981631);
async function l(e, t, n) {
  let l, u = 0;
  switch (e.type) {
case 'channel':
  l = o.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
  break;
case 'guild':
  l = o.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
  break;
case 'user':
  l = o.ANM.APPLICATION_COMMAND_INDEX_USER;
  break;
case 'application':
  l = o.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId);
  }
  let c = async t => u >= 3 ? (_(!0), i.Z.dispatch({
type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
target: e
  })) : (await new Promise(e => setTimeout(e, t)), d()), d = () => r.tn.get({
url: l,
retries: 3 - u - 1,
signal: n.signal,
onRequestCreated: () => u++
  }).then(t => 202 === t.status ? c(5000) : (_(!1), i.Z.dispatch({
type: 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS',
target: e,
index: t.body
  })), t => {
if (n.signal.aborted) {
  _(!0);
  return;
}
return 429 === t.status ? c(t.body.retry_after * s.Z.Millis.SECOND) : (_(!0), i.Z.dispatch({
  type: 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE',
  target: e
}));
  }), _ = e => {
let r = performance.now() - t;
a.default.track(o.rMx.APPLICATION_COMMAND_PERFORMANCE, {
  duration_ms: r,
  error: e,
  aborted: n.signal.aborted,
  include_applications: !0,
  retries: Math.max(u - 1, 0),
  kind: null,
  command_type: null
});
  };
  await d();
}

function u(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  i.Z.dispatch({
type: 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST',
start: performance.now(),
target: e,
canFetch: t
  });
}