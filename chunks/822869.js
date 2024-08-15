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
  a = n(392711),
  s = n(626135),
  r = n(981631);

function l(e, t, n) {
  s.default.track(r.rMx.FORWARD_MESSAGE_STARTED, {
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
numQueryChanges: a
  } = e;
  s.default.track(r.rMx.FORWARD_MESSAGE_CANCELLED, {
channel_id: t,
message_id: n,
num_destination_changes: i,
num_query_changes: a
  });
}

function c(e) {
  let {
channelId: t,
messageId: n,
hasError: i,
hasContextMessage: a,
numDestinations: l,
numDestinationChanges: o,
numQueryChanges: c,
anyDestinationHasSlowmode: u
  } = e;
  s.default.track(r.rMx.FORWARD_MESSAGE_SENT, {
channel_id: t,
message_id: n,
has_error: i,
has_context_message: a,
num_destinations: l,
num_destination_changes: o,
num_query_changes: c,
any_destination_has_slowmode: u
  });
}

function u(e, t) {
  s.default.track(r.rMx.FORWARD_COPY_LINK, {
channel_id: e,
message_id: t
  });
}

function d() {
  return i.useMemo(() => (0, a.once)((e, t, n) => {
s.default.track(r.rMx.FORWARD_ADD_RECIPIENT, {
  channel_id: e,
  message_id: t,
  has_query: n
});
  }), []);
}

function _() {
  return i.useMemo(() => (0, a.once)((e, t) => {
s.default.track(r.rMx.FORWARD_EDIT_SEARCH, {
  channel_id: e,
  message_id: t
});
  }), []);
}

function E() {
  return i.useMemo(() => (0, a.once)((e, t) => {
s.default.track(r.rMx.FORWARD_EDIT_CONTEXT_MESSAGE, {
  channel_id: e,
  message_id: t
});
  }), []);
}