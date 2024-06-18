"use strict";
n.d(e, {
  Gd: function() {
    return _
  },
  Xb: function() {
    return c
  },
  cu: function() {
    return d
  },
  pj: function() {
    return h
  },
  vi: function() {
    return f
  }
});
var r = n(862315),
  i = n(868145),
  s = n(529866),
  a = n(24716),
  o = n(28434),
  u = n(703498),
  l = n(741900);
class c {
  constructor(t, e = new u.s, n = 4) {
    this._version = n, this._stack = [{
      scope: e
    }], t && this.bindClient(t)
  }
  isOlderThan(t) {
    return this._version < t
  }
  bindClient(t) {
    this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
  }
  pushScope() {
    let t = u.s.clone(this.getScope());
    return this.getStack().push({
      client: this.getClient(),
      scope: t
    }), t
  }
  popScope() {
    return !(this.getStack().length <= 1) && !!this.getStack().pop()
  }
  withScope(t) {
    let e = this.pushScope();
    try {
      t(e)
    } finally {
      this.popScope()
    }
  }
  getClient() {
    return this.getStackTop().client
  }
  getScope() {
    return this.getStackTop().scope
  }
  getStack() {
    return this._stack
  }
  getStackTop() {
    return this._stack[this._stack.length - 1]
  }
  captureException(t, e) {
    let n = this._lastEventId = e && e.event_id ? e.event_id : (0, r.DM)(),
      i = Error("Sentry syntheticException");
    return this._withClient((r, s) => {
      r.captureException(t, {
        originalException: t,
        syntheticException: i,
        ...e,
        event_id: n
      }, s)
    }), n
  }
  captureMessage(t, e, n) {
    let i = this._lastEventId = n && n.event_id ? n.event_id : (0, r.DM)(),
      s = Error(t);
    return this._withClient((r, a) => {
      r.captureMessage(t, e, {
        originalException: t,
        syntheticException: s,
        ...n,
        event_id: i
      }, a)
    }), i
  }
  captureEvent(t, e) {
    let n = e && e.event_id ? e.event_id : (0, r.DM)();
    return !t.type && (this._lastEventId = n), this._withClient((r, i) => {
      r.captureEvent(t, {
        ...e,
        event_id: n
      }, i)
    }), n
  }
  lastEventId() {
    return this._lastEventId
  }
  addBreadcrumb(t, e) {
    let {
      scope: n,
      client: r
    } = this.getStackTop();
    if (!r) return;
    let {
      beforeBreadcrumb: a = null,
      maxBreadcrumbs: o = 100
    } = r.getOptions && r.getOptions() || {};
    if (o <= 0) return;
    let u = {
        timestamp: (0, i.yW)(),
        ...t
      },
      l = a ? (0, s.Cf)(() => a(u, e)) : u;
    null !== l && (r.emit && r.emit("beforeAddBreadcrumb", l, e), n.addBreadcrumb(l, o))
  }
  setUser(t) {
    this.getScope().setUser(t)
  }
  setTags(t) {
    this.getScope().setTags(t)
  }
  setExtras(t) {
    this.getScope().setExtras(t)
  }
  setTag(t, e) {
    this.getScope().setTag(t, e)
  }
  setExtra(t, e) {
    this.getScope().setExtra(t, e)
  }
  setContext(t, e) {
    this.getScope().setContext(t, e)
  }
  configureScope(t) {
    let {
      scope: e,
      client: n
    } = this.getStackTop();
    n && t(e)
  }
  run(t) {
    let e = h(this);
    try {
      t(this)
    } finally {
      h(e)
    }
  }
  getIntegration(t) {
    let e = this.getClient();
    if (!e) return null;
    try {
      return e.getIntegration(t)
    } catch (e) {
      return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
    }
  }
  startTransaction(t, e) {
    let n = this._callExtensionMethod("startTransaction", t, e);
    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !n && console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), n
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders")
  }
  captureSession(t = !1) {
    if (t) return this.endSession();
    this._sendSessionUpdate()
  }
  endSession() {
    let t = this.getStackTop().scope,
      e = t.getSession();
    e && (0, l.RJ)(e), this._sendSessionUpdate(), t.setSession()
  }
  startSession(t) {
    let {
      scope: e,
      client: n
    } = this.getStackTop(), {
      release: r,
      environment: i = o.J
    } = n && n.getOptions() || {}, {
      userAgent: s
    } = a.n2.navigator || {}, u = (0, l.Hv)({
      release: r,
      environment: i,
      user: e.getUser(),
      ...s && {
        userAgent: s
      },
      ...t
    }), c = e.getSession && e.getSession();
    return c && "ok" === c.status && (0, l.CT)(c, {
      status: "exited"
    }), this.endSession(), e.setSession(u), u
  }
  shouldSendDefaultPii() {
    let t = this.getClient(),
      e = t && t.getOptions();
    return !!(e && e.sendDefaultPii)
  }
  _sendSessionUpdate() {
    let {
      scope: t,
      client: e
    } = this.getStackTop(), n = t.getSession();
    n && e && e.captureSession && e.captureSession(n)
  }
  _withClient(t) {
    let {
      scope: e,
      client: n
    } = this.getStackTop();
    n && t(n, e)
  }
  _callExtensionMethod(t, ...e) {
    let n = d().__SENTRY__;
    if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.kg.warn(`Extension method ${t} couldn't be found, doing nothing.`)
  }
}

function d() {
  return a.n2.__SENTRY__ = a.n2.__SENTRY__ || {
    extensions: {},
    hub: void 0
  }, a.n2
}

function h(t) {
  let e = d(),
    n = f(e);
  return p(e, t), n
}

function _() {
  let t = d();
  if (t.__SENTRY__ && t.__SENTRY__.acs) {
    let e = t.__SENTRY__.acs.getCurrentHub();
    if (e) return e
  }
  return function(t = d()) {
    return (! function(t) {
      return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
    }(t) || f(t).isOlderThan(4)) && p(t, new c), f(t)
  }(t)
}

function f(t) {
  return (0, a.YO)("hub", () => new c, t)
}

function p(t, e) {
  return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
}