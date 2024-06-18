"use strict";
n.d(t, {
  I3: function() {
    return u
  },
  d9: function() {
    return d
  },
  oo: function() {
    return l
  },
  yp: function() {
    return _
  }
}), n(47120), n(411104);
var i = n(735250),
  r = n(470079),
  s = n(836560),
  o = n(585483);
class a {
  subscribe(e, t) {
    o.S.subscribe(e, t), this.emitter.on(e, t)
  }
  unsubscribe(e, t) {
    o.S.unsubscribe(e, t), this.emitter.off(e, t)
  }
  bumpDispatchPriority() {
    for (let e of this.emitter.eventNames())
      for (let t of this.emitter.listeners(e)) o.S.resubscribe(e, t)
  }
  constructor() {
    var e, t, n;
    e = this, t = "emitter", n = new s.EventEmitter, t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}
let l = r.createContext(new class e {
    subscribe(e, t) {
      o.S.subscribe(e, t)
    }
    unsubscribe(e, t) {
      o.S.unsubscribe(e, t)
    }
    bumpDispatchPriority() {}
  }),
  u = r.forwardRef(function(e, t) {
    let {
      children: n
    } = e, s = r.useRef(null);

    function o() {
      return null === s.current && (s.current = new a), s.current
    }
    return r.useImperativeHandle(t, o), (0, i.jsx)(l.Provider, {
      value: o(),
      children: n
    })
  });

function _(e) {
  let {
    event: t,
    handler: n
  } = e, i = r.useContext(l), s = r.useRef(n);
  r.useEffect(() => {
    s.current = n
  }, [n]);
  let o = null == n;
  return r.useEffect(() => {
    if (o) return;
    let e = function() {
      for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
      null === (e = s.current) || void 0 === e || e.call(s, ...n)
    };
    return i.subscribe(t, e), () => {
      i.unsubscribe(t, e)
    }
  }, [i, t, o]), null
}

function d(e) {
  return _(e), null
}