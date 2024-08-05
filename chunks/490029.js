n.d(t, {
  $j: function() {
return u;
  },
  Ty: function() {
return d;
  },
  lW: function() {
return E;
  },
  sr: function() {
return _;
  },
  zP: function() {
return c;
  }
});
var r = n(536285),
  i = n(996106),
  a = n(812967),
  s = n(511405),
  o = n(981631),
  l = n(186901);

function u() {
  r.default.connect();
}

function c() {
  r.default.disconnect();
}

function d(e, t) {
  if (!__OVERLAY__)
throw new i.Z({
  errorCode: o.lTL.UNKNOWN_ERROR
}, 'called from wrong app context');
  r.default.subscribe(o.zMe.OVERLAY, {
token: t
  }, t => e((0, s.H)(t)));
}

function _(e, t) {
  if (__OVERLAY__)
throw new i.Z({
  errorCode: o.lTL.UNKNOWN_ERROR
}, 'called from wrong app context');
  a.Z.setCommandHandler(o.Etm.OVERLAY, {
scope: l.cE,
handler(n) {
  let {
    args: r
  } = n;
  if (!t(r.token))
    throw new i.Z({
      errorCode: o.lTL.INVALID_TOKEN
    }, 'Invalid RPC auth token provided');
  e((0, s.H)(r));
}
  }), a.Z.setEventHandler(o.zMe.OVERLAY, {
scope: l.cE,
handler(e) {
  let {
    args: n
  } = e;
  if (!t(n.token))
    throw new i.Z({
      errorCode: o.lTL.INVALID_TOKEN
    }, 'Invalid RPC auth token provided');
}
  });
}

function E(e) {
  __OVERLAY__ ? r.default.request(o.Etm.OVERLAY, (0, s.G)(e)) : a.Z.dispatchToSubscriptions(o.zMe.OVERLAY, {}, (0, s.G)(e));
}