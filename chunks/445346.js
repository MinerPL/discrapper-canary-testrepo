let r;
n.d(t, {
  y: function() {
return E;
  }
}), n(177593), n(47120), n(653041);
var i = n(512722),
  a = n.n(i),
  o = n(956067);
n(17089);
var s = n(673011),
  l = n(153102);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let c = [],
  d = !1,
  _ = new Promise(e => {
r = () => {
  e(), r = null;
};
  });
class E {
  static initialize() {
d = !0, c.forEach(e => e.initializeIfNeeded()), null != r && r();
  }
  static destroy() {
c.length = 0, l.Z.destroy();
  }
  static getAll() {
return c;
  }
  registerActionHandlers(e, t) {
this._dispatcher.register(this.getName(), e, e => {
  (this._changeCallbacks.hasAny() || this._reactChangeCallbacks.hasAny() || this._syncWiths.length > 0) && (l.Z.markChanged(this), l.Z.getIsPaused() && null != this._mustEmitChanges && this._mustEmitChanges(e) && l.Z.resume(!1));
}, t, this._dispatchToken);
  }
  getName() {
var e;
return null !== (e = this.constructor.displayName) && void 0 !== e ? e : this.constructor.name;
  }
  initializeIfNeeded() {
if (!this._isInitialized) {
  let e = Date.now();
  this.initialize(), this._isInitialized = !0;
  let t = Date.now() - e;
  t > 5 && o.Z.mark('\uD83E\uDDA5', this.getName() + '.initialize()', t);
}
  }
  initialize() {}
  syncWith(e, t, n) {
if (this.waitFor(...e), null != n) {
  var r, i;
  let a, o = 0,
    s = () => {
      o !== l.Z.getChangeSentinel() && (o = l.Z.getChangeSentinel(), !1 !== t() && this.emitChange());
    };
  r = null != n ? n : 0, i = s, a = null, s = 0 === r ? function() {
    clearImmediate(a), a = setImmediate(i);
  } : function() {
    null == a && (a = setTimeout(() => {
      try {
        i();
      } finally {
        a = null;
      }
    }, r));
  }, e.forEach(e => e.addChangeListener(s));
} else
  e.forEach(e => {
    e._syncWiths.push({
      func: t,
      store: this
    });
  });
  }
  waitFor() {
for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
  t[n] = arguments[n];
let r = t.map((e, t) => (a()(null != e, 'Store.waitFor(...) called with null Store at index '.concat(t, ' for store ').concat(this.getName())), null != e._dispatcher) ? (a()(e._dispatcher === this._dispatcher, 'Stores belong to two separate dispatchers.'), e.getDispatchToken()) : null);
this._dispatcher.addDependencies(this.getDispatchToken(), r.filter(e => null != e));
  }
  emitChange() {
l.Z.markChanged(this);
  }
  getDispatchToken() {
return this._dispatchToken;
  }
  mustEmitChanges() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !0;
this._mustEmitChanges = e;
  }
  constructor(e, t, n) {
u(this, '_changeCallbacks', new s.Z()), u(this, '_reactChangeCallbacks', new s.Z()), u(this, '_syncWiths', []), u(this, '_dispatchToken', void 0), u(this, '_dispatcher', void 0), u(this, '_mustEmitChanges', void 0), u(this, '_isInitialized', !1), u(this, '__getLocalVars', void 0), u(this, 'addChangeListener', this._changeCallbacks.add), u(this, 'addConditionalChangeListener', this._changeCallbacks.addConditional), u(this, 'removeChangeListener', this._changeCallbacks.remove), u(this, 'addReactChangeListener', this._reactChangeCallbacks.add), u(this, 'removeReactChangeListener', this._reactChangeCallbacks.remove), this._dispatcher = e, this._dispatchToken = this._dispatcher.createToken(), this.registerActionHandlers(null != t ? t : {}, n), c.push(this);
d && this.initializeIfNeeded();
  }
}
u(E, 'displayName', void 0), u(E, 'initialized', _);