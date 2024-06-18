"use strict";
n.d(t, {
  B0: function() {
    return o
  },
  OG: function() {
    return u
  },
  kz: function() {
    return a
  },
  yr: function() {
    return l
  }
});
var i = n(544891),
  r = n(570140),
  s = n(981631);

function o(e, t, n, i) {
  r.Z.dispatch({
    type: "QUEUE_INTERACTION_COMPONENT_STATE",
    messageId: e,
    nonce: t,
    state: n,
    componentId: i
  })
}

function a(e, t) {
  let {
    data: n,
    messageId: i,
    onCreate: s,
    onSuccess: o,
    onFailure: a
  } = t;
  r.Z.dispatch({
    type: "INTERACTION_QUEUE",
    data: n,
    nonce: e,
    messageId: i,
    onCreate: s,
    onSuccess: o,
    onFailure: a
  })
}

function l(e, t, n) {
  r.Z.dispatch({
    type: "INTERACTION_FAILURE",
    nonce: e,
    errorMessage: n,
    errorCode: t
  })
}
async function u(e, t) {
  let n = await i.tn.get({
    url: s.ANM.MESSAGE_INTERACTION_DATA(e, t),
    oldFormErrors: !0
  });
  if (n.ok) {
    let i = n.body;
    r.Z.dispatch({
      type: "LOAD_MESSAGE_INTERACTION_DATA_SUCCESS",
      channelId: e,
      messageId: t,
      interactionData: i
    })
  }
}