"use strict";
n.d(t, {
  $j: function() {
    return u
  },
  Ty: function() {
    return d
  },
  lW: function() {
    return E
  },
  sr: function() {
    return c
  },
  zP: function() {
    return _
  }
});
var i = n(536285),
  r = n(996106),
  s = n(812967),
  o = n(511405),
  a = n(981631),
  l = n(186901);

function u() {
  i.default.connect()
}

function _() {
  i.default.disconnect()
}

function d(e, t) {
  if (!__OVERLAY__) throw new r.Z({
    errorCode: a.lTL.UNKNOWN_ERROR
  }, "called from wrong app context");
  i.default.subscribe(a.zMe.OVERLAY, {
    token: t
  }, t => e((0, o.H)(t)))
}

function c(e, t) {
  if (__OVERLAY__) throw new r.Z({
    errorCode: a.lTL.UNKNOWN_ERROR
  }, "called from wrong app context");
  s.Z.setCommandHandler(a.Etm.OVERLAY, {
    scope: l.cE,
    handler(n) {
      let {
        args: i
      } = n;
      if (!t(i.token)) throw new r.Z({
        errorCode: a.lTL.INVALID_TOKEN
      }, "Invalid RPC auth token provided");
      e((0, o.H)(i))
    }
  }), s.Z.setEventHandler(a.zMe.OVERLAY, {
    scope: l.cE,
    handler(e) {
      let {
        args: n
      } = e;
      if (!t(n.token)) throw new r.Z({
        errorCode: a.lTL.INVALID_TOKEN
      }, "Invalid RPC auth token provided")
    }
  })
}

function E(e) {
  __OVERLAY__ ? i.default.request(a.Etm.OVERLAY, (0, o.G)(e)) : s.Z.dispatchToSubscriptions(a.zMe.OVERLAY, {}, (0, o.G)(e))
}