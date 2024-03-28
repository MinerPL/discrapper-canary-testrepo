"use strict";
n.r(t), n("47120");
var l, a, u, i, o = n("442837"),
  s = n("570140"),
  d = n("69004");
let r = new d.default(196606),
  c = 0,
  E = new d.default(196606),
  p = new d.default(196606);

function T(e) {
  return e.join("-")
}

function f(e, t, n) {
  var l;
  let a = T(t),
    u = null !== (l = r.get(e)) && void 0 !== l ? l : new Map;
  u.set(a, n), r.set(e, u), c++
}

function m(e) {
  let t = E.get(e);
  null != t && p.delete(t), E.delete(e), r.delete(e), c++
}
class _ extends(l = o.default.Store) {
  getInteractionComponentStates() {
    return r
  }
  getInteractionComponentStateVersion() {
    return c
  }
  getInteractionComponentState(e, t) {
    var n;
    let l = r.get(e);
    if (null == l) return null;
    let a = T(t);
    return null !== (n = l.get(a)) && void 0 !== n ? n : null
  }
}
i = "LocalInteractionComponentStateStore", (u = "displayName") in(a = _) ? Object.defineProperty(a, u, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[u] = i, t.default = new _(s.default, {
  LOGOUT: function() {
    r.clear(), E.clear(), p.clear(), c++
  },
  QUEUE_INTERACTION_COMPONENT_STATE: function(e) {
    let {
      messageId: t,
      nonce: n,
      indices: l,
      state: a
    } = e;
    E.set(t, n), p.set(n, {
      messageId: t,
      indices: l
    }), f(t, l, a)
  },
  SET_INTERACTION_COMPONENT_STATE: function(e) {
    let {
      id: t,
      indices: n,
      state: l
    } = e;
    f(t, n, l)
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t
    } = e;
    if (!r.has(t)) return !1;
    m(t)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    if (null == t.id || !r.has(t.id)) return !1;
    m(t.id)
  },
  INTERACTION_SUCCESS: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) return !1;
    let n = p.get(t);
    if (null == n) return !1;
    E.delete(n.messageId), p.delete(t), c++
  },
  INTERACTION_FAILURE: function(e) {
    let {
      nonce: t
    } = e;
    if (null == t) return !1;
    let n = p.get(t);
    if (null == n) return !1;
    ! function(e) {
      let {
        indices: t,
        messageId: n
      } = e, l = T(t), a = r.get(n);
      if (null == a || !a.has(l)) return;
      a.delete(l), 0 === a.size && r.delete(n), c++
    }(n)
  },
  CLEAR_INTERACTION_MODAL_STATE: function(e) {
    let {
      id: t
    } = e;
    r.delete(t), c++
  }
})