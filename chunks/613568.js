n.d(t, {
  U: function() {
return h;
  }
}), n(47120), n(653041), n(411104);
var r = n(121014),
  i = n(512722),
  a = n.n(i),
  o = n(956067);
n(17089);
var s = n(259443),
  l = n(986529),
  u = n(153102),
  c = n(625306),
  d = n(420970);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let E = new Set([
'APP_STATE_UPDATE',
'CLEAR_CACHES',
'CONNECTION_CLOSED',
'CONNECTION_OPEN',
'CONNECTION_RESUMED',
'LOGIN_SUCCESS',
'LOGIN',
'LOGOUT',
'MESSAGE_SEND_FAILED',
'PUSH_NOTIFICATION_CLICK',
'RESET_SOCKET',
'SESSION_START',
'UPLOAD_FAIL',
'WRITE_CACHES'
  ]),
  f = new s.Y('Flux');
class h {
  isDispatching() {
return null != this._currentDispatchActionType;
  }
  dispatch(e) {
return new Promise((t, n) => {
  this._waitQueue.push(() => {
    try {
      null == this.functionCache[e.type] && (this.functionCache[e.type] = e => this._dispatchWithDevtools(e), m(this.functionCache[e.type], 'dispatch_' + e.type)), this.functionCache[e.type](e), t();
    } catch (e) {
      n(e);
    }
  }), this.flushWaitQueue();
});
  }
  flushWaitQueue() {
if (!this._processingWaitQueue)
  try {
    this._processingWaitQueue = !0, u.Z.isDispatching = !0;
    let t = 0;
    for (; this._waitQueue.length > 0;) {
      if (++t > 100) {
        var e;
        let t = c.qC();
        throw f.error('LastFewActions', t), null === (e = this._sentryUtils) || void 0 === e || e.addBreadcrumb({
          message: 'Dispatcher: Dispatch loop detected',
          data: {
            lastFewActions: t
          }
        }), Error('Dispatch loop detected, aborting');
      }
      for (; this._waitQueue.length > 0;)
        this._waitQueue.shift()();
      u.Z.emit();
    }
  } finally {
    this._processingWaitQueue = !1, u.Z.isDispatching = !1;
  }
  }
  _dispatchWithDevtools(e) {
this._dispatchWithLogging(e);
  }
  _dispatchWithLogging(e) {
a()(null == this._currentDispatchActionType, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: '.concat(e.type, ' Already dispatching: ').concat(this._currentDispatchActionType)), a()(e.type, 'Dispatch.dispatch(...) called without an action type'), E.has(e.type) && f.log('Dispatching '.concat(e.type)), (0, l.B1)(e.type), c.IH(e.type);
let t = this.actionLogger.log(e, t => {
  try {
    this._currentDispatchActionType = e.type, this._dispatch(e, t);
  } finally {
    this._currentDispatchActionType = null;
  }
});
t.totalTime > 100 && f.verbose('Slow dispatch on '.concat(e.type, ': ').concat(t.totalTime, 'ms'));
try {
  (0, l.L8)('DISPATCH['.concat(e.type, ']'), e.type);
} catch (e) {}
  }
  _dispatch(e, t) {
for (let t of this._interceptors)
  if (t(e))
    return !1;
let n = this._actionHandlers.getOrderedActionHandlers(e);
for (let r = 0, i = n.length; r < i; r++) {
  let {
    name: i,
    actionHandler: a,
    storeDidChange: o
  } = n[r];
  !1 !== t(i, () => a(e)) && o(e);
}
let r = this._subscriptions[e.type];
null != r && t('__subscriptions', () => {
  r.forEach(t => t(e));
});
  }
  addInterceptor(e) {
this._interceptors.push(e);
  }
  wait(e) {
this._waitQueue.push(e), this.flushWaitQueue();
  }
  subscribe(e, t) {
let n = this._subscriptions[e];
null == n && (this._subscriptions[e] = n = new Set()), n.add(t);
  }
  unsubscribe(e, t) {
let n = this._subscriptions[e];
null != n && (n.delete(t), 0 === n.size && delete this._subscriptions[e]);
  }
  register(e, t, n, r, i) {
return this._actionHandlers.register(e, t, n, null != r ? r : this._defaultBand, i);
  }
  createToken() {
return this._actionHandlers.createToken();
  }
  addDependencies(e, t) {
this._actionHandlers.addDependencies(e, t);
  }
  constructor(e = 0, t, n) {
if (_(this, '_defaultBand', void 0), _(this, '_interceptors', []), _(this, '_subscriptions', {}), _(this, '_waitQueue', []), _(this, '_processingWaitQueue', !1), _(this, '_currentDispatchActionType', null), _(this, '_actionHandlers', new p()), _(this, '_sentryUtils', void 0), _(this, 'actionLogger', void 0), _(this, 'functionCache', {}), this._defaultBand = e, this._sentryUtils = n, null != t)
  this.actionLogger = t;
else
  this.actionLogger = new d.Z();
this.actionLogger.on('trace', (e, t, n) => {
  o.Z.isTracing && n >= 10 && o.Z.mark('\uD83E\uDDA5', t, n);
});
  }
}
class p {
  getOrderedActionHandlers(e) {
var t;
return null !== (t = this._orderedActionHandlers[e.type]) && void 0 !== t ? t : this._computeOrderedActionHandlers(e.type);
  }
  register(e, t, n, r) {
let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.createToken();
a()(r >= 0 && Number.isInteger(r), 'band must be a non-negative integer.');
let o = {};
for (let n in t) {
  let r = t[n],
    i = e => r(e);
  m(i, ''.concat(e, '_').concat(n)), o[n] = i;
}
return this._dependencyGraph.addNode(i, {
  name: e,
  band: r,
  actionHandler: o,
  storeDidChange: n
}), this._addToBand(i, r), this._invalidateCaches(), i;
  }
  createToken() {
return 'ID_'.concat(this._lastID++);
  }
  addDependencies(e, t) {
for (let n of (this._validateDependencies(e, t), t))
  this._dependencyGraph.addDependency(e, n);
this._invalidateCaches();
  }
  _validateDependencies(e, t) {}
  _invalidateCaches() {
this._orderedCallbackTokens = null, this._orderedActionHandlers = {};
  }
  _bandToken(e) {
let t = 'band.'.concat(e);
return !this._dependencyGraph.hasNode(t) && (this._dependencyGraph.addNode(t, {
  name: t,
  band: e,
  actionHandler: {},
  storeDidChange: () => {}
}), e > 0 && this._dependencyGraph.addDependency(t, this._bandToken(e - 1))), t;
  }
  _addToBand(e, t) {
this._dependencyGraph.addDependency(this._bandToken(t), e), t > 0 && this._dependencyGraph.addDependency(e, this._bandToken(t - 1));
  }
  _computeOrderedActionHandlers(e) {
var t;
let n = null !== (t = this._orderedCallbackTokens) && void 0 !== t ? t : this._computeOrderedCallbackTokens(),
  r = [];
for (let t = 0, i = n.length; t < i; t++) {
  let {
    name: i,
    actionHandler: a,
    storeDidChange: o
  } = this._dependencyGraph.getNodeData(n[t]), s = a[e];
  null != s && r.push({
    name: i,
    actionHandler: s,
    storeDidChange: o
  });
}
return this._orderedActionHandlers[e] = r, r;
  }
  _computeOrderedCallbackTokens() {
try {
  let e = this._dependencyGraph.overallOrder();
  return this._orderedCallbackTokens = e, e;
} catch (e) {
  if (null != e.cyclePath) {
    let t = e.cyclePath.map(e => ''.concat(this._dependencyGraph.getNodeData(e).name, '(').concat(e, ')'));
    throw Error('Dependency Cycle Found: '.concat(t.join(' -> ')));
  }
  throw e;
}
  }
  constructor() {
_(this, '_orderedActionHandlers', {}), _(this, '_orderedCallbackTokens', null), _(this, '_lastID', 1), _(this, '_dependencyGraph', new r.DepGraph());
  }
}

function m(e, t) {
  Object.defineProperty(e, 'name', {
value: t
  });
}