let r, i;
n.d(t, {
  FW: function() {
return l;
  },
  Gr: function() {
return o;
  },
  Ht: function() {
return f;
  },
  Js: function() {
return c;
  },
  QF: function() {
return _;
  },
  Te: function() {
return h;
  },
  Tq: function() {
return s;
  },
  VS: function() {
return m;
  },
  W2: function() {
return I;
  },
  qU: function() {
return u;
  },
  tB: function() {
return E;
  },
  vR: function() {
return p;
  }
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(490029);
var a = n(358085);
n(981631);
let s = 2,
  o = {
width: 3840,
height: 2160
  },
  l = {
width: 768,
height: 432
  },
  u = 'overlay_default',
  c = -2,
  d = !1;

function _() {
  var e;
  if (void 0 !== r)
return r;
  let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get('pid')) && void 0 !== e ? e : '', 10);
  return isNaN(t) && (t = -1), r = t;
}

function E(e) {
  I() && (r = e);
}

function f() {
  return new URLSearchParams(window.location.search).get('rpc_auth_token');
}

function h(e) {
  return !a.isPlatformEmbedded || e.width >= l.width && e.height >= l.height;
}

function p(e) {
  d = e;
}

function m() {
  return d;
}

function I() {
  var e;
  return void 0 !== i ? i : i = (null !== (e = new URLSearchParams(window.location.search).get('oop')) && void 0 !== e ? e : '') === 'true';
}