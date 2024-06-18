"use strict";
let i;
n.d(t, {
  RI: function() {
    return N
  },
  jy: function() {
    return A
  }
});
var r = n(570140),
  s = n(519938),
  o = n(317770),
  a = n(928518),
  l = n(592125),
  u = n(819640),
  _ = n(366050),
  d = n(19780),
  c = n(944486),
  E = n(914010),
  I = n(979651),
  T = n(317381),
  h = n(719296),
  S = n(958185),
  f = n(981631);

function N(e) {
  let t = null != e ? e : i;
  null != t && _.Z.isOpen(t) && r.Z.wait(() => s.Cp(t))
}

function A(e) {
  let t = null != e ? e : i;
  null != t && _.Z.isOpen(t) && r.Z.wait(() => s.$Z(t))
}

function m() {
  let e = T.ZP.getConnectedActivityChannelId(),
    t = T.ZP.getSelfEmbeddedActivityForChannel(null != e ? e : f.lds),
    n = l.Z.getChannel(e);
  return null == e || null == n || null == t ? function() {
    let e = i;
    null != e && _.Z.isOpen(e) && (r.Z.wait(() => s.xv(e)), i = null)
  }() : function(e, t) {
    if (_.Z.isOpen(t)) return !1;
    r.Z.wait(() => s.bA(t, f.NYg.EMBED_IFRAME, {
      channel: e
    })), i = t
  }(n, (0, h.Z)(e, t.applicationId))
}

function O() {
  return (0, S.Z)({
    LayerStore: u.Z,
    PopoutWindowStore: a.Z
  }) ? N() : A()
}
class R extends o.Z {
  _initialize() {
    c.Z.addChangeListener(m), E.Z.addChangeListener(m), d.Z.addChangeListener(m), I.Z.addChangeListener(m), a.Z.addChangeListener(m), T.ZP.addChangeListener(m), u.Z.addChangeListener(O)
  }
  _terminate() {
    c.Z.removeChangeListener(m), E.Z.removeChangeListener(m), d.Z.removeChangeListener(m), I.Z.removeChangeListener(m), a.Z.removeChangeListener(m), T.ZP.removeChangeListener(m), u.Z.removeChangeListener(O)
  }
}
t.ZP = new R