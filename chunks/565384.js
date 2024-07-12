n.d(t, {
  Ez: function() {
return _;
  },
  Ps: function() {
return s;
  },
  Xo: function() {
return c;
  },
  dT: function() {
return u;
  },
  dw: function() {
return l;
  },
  k$: function() {
return d;
  }
}), n(47120);
var r = n(652874),
  i = n(990547);
let a = Object.freeze({
debugTrackedData: null,
impressions: []
  }),
  o = (0, r.Z)(e => a),
  s = e => {
o.setState(t => ({
  impressions: [
    ...t.impressions,
    e
  ]
}));
  },
  l = e => {
o.setState(t => ({
  impressions: t.impressions.filter(t => t.sequenceId !== e.sequenceId)
}));
  },
  u = (e, t) => {
o.setState(() => ({
  debugTrackedData: {
    name: e,
    ...t
  }
}));
  },
  c = o;

function d() {
  let e = {};
  return o.getState().impressions.forEach(t => {
t.type === i.ImpressionTypes.PAGE ? e.page = t.name : e.section = t.name;
  }), e;
}

function _() {
  return o.getState().impressions;
}