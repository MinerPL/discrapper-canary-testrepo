"use strict";
n.r(t);
var s = n("570140");
t.default = {
  toggleMembersSection() {
    s.default.dispatch({
      type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
    })
  },
  toggleProfilePanelSection() {
    s.default.dispatch({
      type: "PROFILE_PANEL_TOGGLE_SECTION"
    })
  },
  toggleSummariesSection() {
    s.default.dispatch({
      type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
    })
  }
}