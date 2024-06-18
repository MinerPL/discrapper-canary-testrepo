"use strict";
n.d(t, {
  Y$: function() {
    return r
  },
  a8: function() {
    return a
  },
  jS: function() {
    return s
  },
  tZ: function() {
    return o
  }
});
var i = n(570140);

function r() {
  i.Z.dispatch({
    type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE"
  })
}

function s(e) {
  i.Z.dispatch({
    type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
    activityUrlOverride: e
  })
}

function o(e) {
  i.Z.dispatch({
    type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
    applicationId: e,
    timestamp: new Date().getTime()
  })
}

function a(e) {
  i.Z.dispatch({
    type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
    filter: e
  })
}