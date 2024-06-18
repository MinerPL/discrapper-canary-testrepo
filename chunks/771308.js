"use strict";
n.d(t, {
  Av: function() {
    return u
  },
  hp: function() {
    return d
  },
  wE: function() {
    return c
  }
});
var s = n(544891),
  r = n(570140),
  i = n(959776),
  a = n(626135),
  l = n(723359),
  o = n(981631);

function u(e, t) {
  return (0, i.Z)(e, t), a.default.track(o.rMx.AGE_GATE_ACTION, {
    source: t,
    action: l.Al.AGE_GATE_SUBMITTED
  }), s.tn.patch({
    url: o.ANM.ME,
    oldFormErrors: !0,
    body: {
      date_of_birth: e.format("YYYY-MM-DD")
    }
  }).then(e => {
    let n = e.body;
    r.Z.dispatch({
      type: "CURRENT_USER_UPDATE",
      user: n
    }), a.default.track(o.rMx.AGE_GATE_ACTION, {
      source: t,
      action: l.Al.AGE_GATE_SUCCESS
    })
  })
}

function c(e) {
  r.Z.dispatch({
    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
  }), a.default.track(o.rMx.AGE_GATE_ACTION, {
    source: e,
    action: l.Al.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
  })
}

function d(e) {
  r.Z.dispatch({
    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
  }), a.default.track(o.rMx.AGE_GATE_ACTION, {
    source: e,
    action: l.Al.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
  })
}