"use strict";
n.d(t, {
  Fu: function() {
    return h
  },
  Lu: function() {
    return l
  },
  Vd: function() {
    return I
  },
  WO: function() {
    return a
  },
  _n: function() {
    return E
  },
  ak: function() {
    return u
  },
  al: function() {
    return f
  },
  bi: function() {
    return r
  },
  hz: function() {
    return d
  },
  lr: function() {
    return T
  },
  oQ: function() {
    return c
  },
  tn: function() {
    return _
  },
  um: function() {
    return S
  }
});
var i, r, s = n(911969),
  o = n(689938);
let a = "True",
  l = "False",
  u = [{
    name: a,
    displayName: a,
    value: "true"
  }, {
    name: l,
    displayName: l,
    value: "false"
  }];
(i = r || (r = {})).BUILT_IN = "-1", i.FRECENCY = "-2";
let _ = 10,
  d = 5,
  c = "\0",
  E = 100,
  I = 3,
  T = 10,
  h = 500;
Object.freeze([]), Object.freeze([]);
let S = 200;

function f(e) {
  if (null != e.choices) return o.Z.Messages.COMMAND_VALIDATION_CHOICE_ERROR;
  switch (e.type) {
    case s.jw.BOOLEAN:
      return o.Z.Messages.COMMAND_VALIDATION_BOOLEAN_ERROR;
    case s.jw.CHANNEL:
      return o.Z.Messages.COMMAND_VALIDATION_CHANNEL_ERROR;
    case s.jw.INTEGER:
      return o.Z.Messages.COMMAND_VALIDATION_INTEGER_ERROR;
    case s.jw.NUMBER:
      return o.Z.Messages.COMMAND_VALIDATION_NUMBER_ERROR;
    case s.jw.ROLE:
      return o.Z.Messages.COMMAND_VALIDATION_ROLE_ERROR;
    case s.jw.USER:
      return o.Z.Messages.COMMAND_VALIDATION_USER_ERROR;
    case s.jw.MENTIONABLE:
      return o.Z.Messages.COMMAND_VALIDATION_MENTIONABLE_ERROR;
    default:
      return o.Z.Messages.COMMAND_VALIDATION_GENERAL_ERROR
  }
}