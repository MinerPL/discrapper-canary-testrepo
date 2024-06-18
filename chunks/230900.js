"use strict";
n.d(t, {
  cS: function() {
    return a
  },
  nE: function() {
    return s
  },
  xC: function() {
    return u
  },
  xV: function() {
    return l
  }
});
var i = n(592125),
  r = n(765305);

function s(e) {
  let t;
  let {
    entity_type: n,
    channel_id: s
  } = e;
  if (n in r.nz && null != s) {
    var o;
    t = null !== (o = i.Z.getChannel(e.channel_id)) && void 0 !== o ? o : void 0
  }
  return t
}

function o(e, t) {
  let n = null;
  return e === r.WX.EXTERNAL && null != t && "location" in t && (n = t.location), n
}

function a(e) {
  let {
    entity_type: t,
    entity_metadata: n
  } = e;
  return o(t, n)
}

function l(e) {
  let {
    entityType: t,
    entityMetadata: n
  } = e;
  return o(t, n)
}

function u(e) {
  return e === r.WX.VOICE || e === r.WX.STAGE_INSTANCE ? r.nz[e] : void 0
}