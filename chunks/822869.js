n.d(t, {
  Ad: function() {
return E;
  },
  Lb: function() {
return l;
  },
  ZF: function() {
return d;
  },
  gP: function() {
return c;
  },
  mh: function() {
return _;
  },
  sF: function() {
return o;
  },
  xp: function() {
return u;
  }
});
var i = n(470079),
  s = n(392711),
  a = n(626135),
  r = n(981631);

function l(e, t, n) {
  a.default.track(r.rMx.FORWARD_MESSAGE_STARTED, {
channel_id: e,
message_id: t,
source: n
  });
}

function o(e) {
  let {
channelId: t,
messageId: n,
numDestinationChanges: i,
numQueryChanges: s
  } = e;
  a.default.track(r.rMx.FORWARD_MESSAGE_CANCELLED, {
channel_id: t,
message_id: n,
num_destination_changes: i,
num_query_changes: s
  });
}

function c(e) {
  let {
channelId: t,
messageId: n,
hasError: i,
hasContextMessage: s,
numDestinations: l,
numDestinationChanges: o,
numQueryChanges: c
  } = e;
  a.default.track(r.rMx.FORWARD_MESSAGE_SENT, {
channel_id: t,
message_id: n,
has_error: i,
has_context_message: s,
num_destinations: l,
num_destination_changes: o,
num_query_changes: c
  });
}

function u(e, t) {
  a.default.track(r.rMx.FORWARD_COPY_LINK, {
channel_id: e,
message_id: t
  });
}

function d() {
  return i.useMemo(() => (0, s.once)((e, t, n) => {
a.default.track(r.rMx.FORWARD_ADD_RECIPIENT, {
  channel_id: e,
  message_id: t,
  has_query: n
});
  }), []);
}

function _() {
  return i.useMemo(() => (0, s.once)((e, t) => {
a.default.track(r.rMx.FORWARD_EDIT_SEARCH, {
  channel_id: e,
  message_id: t
});
  }), []);
}

function E() {
  return i.useMemo(() => (0, s.once)((e, t) => {
a.default.track(r.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
  channel_id: e,
  message_id: t
});
  }), []);
}