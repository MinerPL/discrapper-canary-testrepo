"use strict";
n.d(t, {
  p: function() {
    return o
  },
  y: function() {
    return s
  }
});
var i = n(482833),
  r = n(981631);

function s(e, t) {
  let {
    enabled: n
  } = i.c.useExperiment({
    guildId: null != e ? e : r.lds,
    location: t
  });
  return n
}

function o(e, t) {
  let {
    enabled: n
  } = i.c.getCurrentConfig({
    guildId: null != e ? e : r.lds,
    location: t
  });
  return n
}