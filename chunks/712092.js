"use strict";
a.r(e), a.d(e, {
  markSectionAcknowledged: function() {
    return C
  },
  markSectionOpened: function() {
    return s
  }
});
var t = a("570140");

function C(L) {
  t.default.dispatch({
    type: "ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION",
    section: L
  })
}

function s(L) {
  t.default.dispatch({
    type: "ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION",
    section: L
  })
}