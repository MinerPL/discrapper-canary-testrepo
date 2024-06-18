"use strict";
n.d(t, {
  MS: function() {
    return _
  },
  TC: function() {
    return u
  },
  bA: function() {
    return s
  },
  gl: function() {
    return d
  },
  xv: function() {
    return o
  },
  z4: function() {
    return a
  },
  zc: function() {
    return l
  }
});
var i = n(570140),
  r = n(579806);

function s(e) {
  i.Z.dispatch({
    type: "RTC_DEBUG_MODAL_OPEN",
    section: e
  }), i.Z.dispatch({
    type: "RTC_DEBUG_POPOUT_WINDOW_OPEN"
  })
}

function o() {
  i.Z.dispatch({
    type: "RTC_DEBUG_MODAL_CLOSE"
  })
}

function a() {
  i.Z.dispatch({
    type: "RTC_DEBUG_MODAL_OPEN_REPLAY"
  })
}

function l(e) {
  i.Z.dispatch({
    type: "RTC_DEBUG_MODAL_SET_SECTION",
    section: e
  })
}

function u(e) {
  i.Z.dispatch({
    type: "RTC_DEBUG_SET_RECORDING_FLAG",
    value: e
  })
}

function _(e, t, n) {
  i.Z.dispatch({
    type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE",
    userId: e,
    context: t,
    quality: n
  })
}

function d() {
  r.Z.fileManager.showOpenDialog({
    filters: [{
      name: "All Files",
      extensions: ["*"]
    }]
  }).then(e => {
    let t = 0 === e.length ? "" : e[0];
    i.Z.dispatch({
      type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH",
      path: t
    })
  })
}