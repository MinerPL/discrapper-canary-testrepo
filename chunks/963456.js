"use strict";
n.d(t, {
  a: function() {
    return l
  },
  j: function() {
    return u
  }
});
var i = n(544891),
  r = n(570140),
  s = n(626135),
  o = n(70956),
  a = n(981631);
async function l(e, t, n) {
  let l, u = 0;
  switch (e.type) {
    case "channel":
      l = a.ANM.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
      break;
    case "guild":
      l = a.ANM.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
      break;
    case "user":
      l = a.ANM.APPLICATION_COMMAND_INDEX_USER;
      break;
    case "application":
      l = a.ANM.APPLICATION_COMMAND_INDEX_APPLICATION(e.applicationId)
  }
  let _ = async t => u >= 3 ? (c(!0), r.Z.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
    target: e
  })) : (await new Promise(e => setTimeout(e, t)), d()), d = () => i.tn.get({
    url: l,
    retries: 3 - u - 1,
    signal: n.signal,
    onRequestCreated: () => u++
  }).then(t => 202 === t.status ? _(5e3) : (c(!1), r.Z.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
    target: e,
    index: t.body
  })), t => {
    if (n.signal.aborted) {
      c(!0);
      return
    }
    return 429 === t.status ? _(t.body.retry_after * o.Z.Millis.SECOND) : (c(!0), r.Z.dispatch({
      type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
      target: e
    }))
  }), c = e => {
    let i = performance.now() - t;
    s.default.track(a.rMx.APPLICATION_COMMAND_PERFORMANCE, {
      duration_ms: i,
      error: e,
      aborted: n.signal.aborted,
      include_applications: !0,
      retries: Math.max(u - 1, 0),
      kind: null,
      command_type: null
    })
  };
  await d()
}

function u(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  r.Z.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
    start: performance.now(),
    target: e,
    canFetch: t
  })
}