n.d(t, {
  B0: function() {
return o;
  },
  OG: function() {
return u;
  },
  kz: function() {
return s;
  },
  yr: function() {
return l;
  }
});
var r = n(544891),
  i = n(570140),
  a = n(981631);

function o(e, t, n, r) {
  i.Z.dispatch({
type: 'QUEUE_INTERACTION_COMPONENT_STATE',
messageId: e,
nonce: t,
state: n,
componentId: r
  });
}

function s(e, t) {
  let {
data: n,
messageId: r,
onCreate: a,
onSuccess: o,
onFailure: s
  } = t;
  i.Z.dispatch({
type: 'INTERACTION_QUEUE',
data: n,
nonce: e,
messageId: r,
onCreate: a,
onSuccess: o,
onFailure: s
  });
}

function l(e, t, n) {
  i.Z.dispatch({
type: 'INTERACTION_FAILURE',
nonce: e,
errorMessage: n,
errorCode: t
  });
}
async function u(e, t) {
  let n = await r.tn.get({
url: a.ANM.MESSAGE_INTERACTION_DATA(e, t),
oldFormErrors: !0
  });
  if (n.ok) {
let r = n.body;
i.Z.dispatch({
  type: 'LOAD_MESSAGE_INTERACTION_DATA_SUCCESS',
  channelId: e,
  messageId: t,
  interactionData: r
});
  }
}