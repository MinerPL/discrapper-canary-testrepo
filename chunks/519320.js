n.d(t, {
  EW: function() {
return o;
  },
  Np: function() {
return c;
  },
  tb: function() {
return l;
  }
});
var i, s, a = n(626135),
  r = n(981631);

function l(e, t, n, i) {
  a.default.track(r.rMx.VOICE_MESSAGE_PLAYBACK_STARTED, {
message_id: e,
total_duration_secs: t,
start_duration_secs: Math.min(null != t ? t : n, n),
sender_user_id: i
  });
}

function o(e, t, n, i, s) {
  a.default.track(r.rMx.VOICE_MESSAGE_PLAYBACK_ENDED, {
message_id: e,
total_duration_secs: t,
end_duration_secs: Math.min(null != t ? t : n, n),
sender_user_id: i,
duration_listening_secs: s
  });
}

function c(e, t) {
  a.default.track(r.rMx.VOICE_MESSAGE_PLAYBACK_FAILED, {
message_id: e,
error_message: t
  });
}
(i = s || (s = {})).SENT = 'sent', i.CANCELLED_DURATION = 'cancelled_duration', i.CANCELLED_USER_REQUESTED = 'cancelled_user_requested', i.CANCELLED_GESTURE_CONFLICT = 'cancelled_gesture_conflict', i.CANCELLED_ON_BACKGROUND = 'cancelled_on_background';