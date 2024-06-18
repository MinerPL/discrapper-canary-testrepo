"use strict";
n.d(t, {
  Ez: function() {
    return c
  },
  Ps: function() {
    return a
  },
  Xo: function() {
    return _
  },
  dT: function() {
    return u
  },
  dw: function() {
    return l
  },
  k$: function() {
    return d
  }
}), n(47120);
var i = n(652874),
  r = n(990547);
let s = Object.freeze({
    debugTrackedData: null,
    impressions: []
  }),
  o = (0, i.Z)(e => s),
  a = e => {
    o.setState(t => ({
      impressions: [...t.impressions, e]
    }))
  },
  l = e => {
    o.setState(t => ({
      impressions: t.impressions.filter(t => t.sequenceId !== e.sequenceId)
    }))
  },
  u = (e, t) => {
    o.setState(() => ({
      debugTrackedData: {
        name: e,
        ...t
      }
    }))
  },
  _ = o;

function d() {
  let e = {};
  return o.getState().impressions.forEach(t => {
    t.type === r.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name
  }), e
}

function c() {
  return o.getState().impressions
}