i.d(n, {
  Lb: function() {
return a;
  },
  gP: function() {
return r;
  },
  sF: function() {
return c;
  }
});
var t = i(626135),
  o = i(981631);

function a(e, n, i) {
  t.default.track(o.rMx.FORWARD_MESSAGE_STARTED, {
channel_id: e,
message_id: n,
source: i
  });
}

function c(e, n) {
  t.default.track(o.rMx.FORWARD_MESSAGE_CANCELLED, {
channel_id: e,
message_id: n
  });
}

function r(e, n, i, a) {
  t.default.track(o.rMx.FORWARD_MESSAGE_SENT, {
channel_id: e,
message_id: n,
has_error: i,
num_destinations: a
  });
}