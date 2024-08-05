n.d(t, {
  BT: function() {
return c;
  },
  IS: function() {
return s;
  },
  Rd: function() {
return i;
  },
  SG: function() {
return a;
  },
  fu: function() {
return r;
  },
  j1: function() {
return o;
  },
  jn: function() {
return l;
  },
  wZ: function() {
return u;
  }
});
var r = 'dnd-core/ADD_SOURCE',
  i = 'dnd-core/ADD_TARGET',
  a = 'dnd-core/REMOVE_SOURCE',
  s = 'dnd-core/REMOVE_TARGET';

function o(e) {
  return {
type: r,
payload: {
  sourceId: e
}
  };
}

function l(e) {
  return {
type: i,
payload: {
  targetId: e
}
  };
}

function u(e) {
  return {
type: a,
payload: {
  sourceId: e
}
  };
}

function c(e) {
  return {
type: s,
payload: {
  targetId: e
}
  };
}