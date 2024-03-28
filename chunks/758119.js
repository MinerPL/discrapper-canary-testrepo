"use strict";
n.r(t), n.d(t, {
  closeAgeGateModal: function() {
    return o
  },
  openAgeGateModal: function() {
    return r
  },
  openFailureAgeGateModal: function() {
    return d
  },
  openSuccessAgeGateModal: function() {
    return u
  }
});
var a = n("570140");
n("893776"), n("703656");
var s = n("626135"),
  l = n("723359"),
  i = n("981631");

function r(e) {
  s.default.track(i.AnalyticEvents.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), a.default.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function o(e) {
  a.default.wait(() => a.default.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), void 0 !== e && s.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_CLOSE
  })
}

function u(e) {
  a.default.wait(() => {
    a.default.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), s.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_SUCCESS
  })
}

function d(e, t) {
  a.default.wait(() => {
    a.default.dispatch({
      type: "AGE_GATE_FAILURE_MODAL_OPEN",
      underageMessage: t
    })
  }), s.default.track(i.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: l.AgeGateAnalyticAction.AGE_GATE_FAILURE
  })
}