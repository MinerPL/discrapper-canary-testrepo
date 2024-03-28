"use strict";
var a, l, s, i;
n.r(t), n.d(t, {
  BATCH_REJECT_LIMIT: function() {
    return d
  },
  LIST_ROW_HEIGHT: function() {
    return o
  },
  LIST_SECTION_HEIGHT: function() {
    return u
  },
  MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL: function() {
    return r
  },
  MessageRequestAnalyticsAction: function() {
    return a
  },
  MessageRequestSections: function() {
    return l
  }
});
let r = "Message Request Accept Confirmation";
(s = a || (a = {}))[s.ACCEPT = 0] = "ACCEPT", s[s.REJECT = 1] = "REJECT", s[s.ACCEPT_CONFIRMATION_PROMPT = 2] = "ACCEPT_CONFIRMATION_PROMPT", s[s.DISMISS_CONFIRMATION_PROMPT = 3] = "DISMISS_CONFIRMATION_PROMPT", s[s.ACCEPT_HAM_CONFIRMATION_PROMPT = 4] = "ACCEPT_HAM_CONFIRMATION_PROMPT", s[s.DISMISS_HAM_CONFIRMATION_PROMPT = 5] = "DISMISS_HAM_CONFIRMATION_PROMPT";
let o = 73,
  u = 26,
  d = 100;
(i = l || (l = {})).REQUESTS = "REQUESTS", i.SPAM = "SPAM"