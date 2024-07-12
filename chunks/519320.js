i.d(n, {
  EW: function() {
return l;
  },
  Np: function() {
return s;
  },
  tb: function() {
return r;
  }
});
var t, o, a = i(626135),
  c = i(981631);

function r(e, n, i, t) {
  a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
message_id: e,
total_duration_secs: n,
start_duration_secs: Math.min(null != n ? n : i, i),
sender_user_id: t
  });
}

function l(e, n, i, t, o) {
  a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
message_id: e,
total_duration_secs: n,
end_duration_secs: Math.min(null != n ? n : i, i),
sender_user_id: t,
duration_listening_secs: o
  });
}

function s(e, n) {
  a.default.track(c.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
message_id: e,
error_message: n
  });
}
(t = o || (o = {})).SENT = 'sent', t.CANCELLED_DURATION = 'cancelled_duration', t.CANCELLED_USER_REQUESTED = 'cancelled_user_requested', t.CANCELLED_GESTURE_CONFLICT = 'cancelled_gesture_conflict', t.CANCELLED_ON_BACKGROUND = 'cancelled_on_background';