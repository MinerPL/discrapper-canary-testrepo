"use strict";
var s, a, l, r;
n.r(t), n.d(t, {
  FeedbackRating: function() {
    return s
  },
  FEEDBACK_FREEFORM_LENGTH: function() {
    return u
  },
  FeedbackType: function() {
    return a
  },
  FeedbackTypePrecedence: function() {
    return o
  }
}), n("808653"), (l = s || (s = {})).BAD = "bad", l.NEUTRAL = "neutral", l.GOOD = "good";
let u = 1024;
(r = a || (a = {}))[r.VOICE = 0] = "VOICE", r[r.STREAM = 1] = "STREAM", r[r.VIDEO_BACKGROUND = 2] = "VIDEO_BACKGROUND", r[r.ACTIVITY = 3] = "ACTIVITY", r[r.IN_APP_REPORTS = 4] = "IN_APP_REPORTS";
let o = [2, 1, 3, 0, 4].reduce((e, t, n) => ({
  ...e,
  [t]: n
}), {})