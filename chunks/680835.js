e.d(n, {
  s: function() {
return c;
  }
});
var r = e(109393),
  i = e(313226),
  o = e(11979),
  s = e(873171),
  c = function() {
function t() {
  this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._context = {};
}
return t.prototype.addScopeListener = function(t) {
  this._scopeListeners.push(t);
}, t.prototype.addEventProcessor = function(t) {
  return this._eventProcessors.push(t), this;
}, t.prototype._notifyScopeListeners = function() {
  var t = this;
  !this._notifyingListeners && (this._notifyingListeners = !0, setTimeout(function() {
    t._scopeListeners.forEach(function(n) {
      n(t);
    }), t._notifyingListeners = !1;
  }));
}, t.prototype._notifyEventProcessors = function(t, n, e, s) {
  var c = this;
  return void 0 === s && (s = 0), new i.c(function(i, u) {
    var a = t[s];
    if (null === n || 'function' != typeof a)
      i(n);
    else {
      var p = a(r.pi({}, n), e);
      (0, o.J8)(p) ? p.then(function(n) {
        return c._notifyEventProcessors(t, n, e, s + 1).then(i);
      }).then(null, u): c._notifyEventProcessors(t, p, e, s + 1).then(i).then(null, u);
    }
  });
}, t.prototype.setUser = function(t) {
  return this._user = t || {}, this._notifyScopeListeners(), this;
}, t.prototype.setTags = function(t) {
  return this._tags = r.pi({}, this._tags, t), this._notifyScopeListeners(), this;
}, t.prototype.setTag = function(t, n) {
  var e;
  return this._tags = r.pi({}, this._tags, ((e = {})[t] = n, e)), this._notifyScopeListeners(), this;
}, t.prototype.setExtras = function(t) {
  return this._extra = r.pi({}, this._extra, t), this._notifyScopeListeners(), this;
}, t.prototype.setExtra = function(t, n) {
  var e;
  return this._extra = r.pi({}, this._extra, ((e = {})[t] = n, e)), this._notifyScopeListeners(), this;
}, t.prototype.setFingerprint = function(t) {
  return this._fingerprint = t, this._notifyScopeListeners(), this;
}, t.prototype.setLevel = function(t) {
  return this._level = t, this._notifyScopeListeners(), this;
}, t.prototype.setTransaction = function(t) {
  return this._transaction = t, this._span && (this._span.transaction = t), this._notifyScopeListeners(), this;
}, t.prototype.setContext = function(t, n) {
  var e;
  return this._context = r.pi({}, this._context, ((e = {})[t] = n, e)), this._notifyScopeListeners(), this;
}, t.prototype.setSpan = function(t) {
  return this._span = t, this._notifyScopeListeners(), this;
}, t.prototype.getSpan = function() {
  return this._span;
}, t.clone = function(n) {
  var e = new t();
  return n && (e._breadcrumbs = r.fl(n._breadcrumbs), e._tags = r.pi({}, n._tags), e._extra = r.pi({}, n._extra), e._context = r.pi({}, n._context), e._user = n._user, e._level = n._level, e._span = n._span, e._transaction = n._transaction, e._fingerprint = n._fingerprint, e._eventProcessors = r.fl(n._eventProcessors)), e;
}, t.prototype.clear = function() {
  return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._context = {}, this._level = void 0, this._transaction = void 0, this._fingerprint = void 0, this._span = void 0, this._notifyScopeListeners(), this;
}, t.prototype.addBreadcrumb = function(t, n) {
  var e = r.pi({
    timestamp: (0, s._I)()
  }, t);
  return this._breadcrumbs = void 0 !== n && n >= 0 ? r.fl(this._breadcrumbs, [e]).slice(-n) : r.fl(this._breadcrumbs, [e]), this._notifyScopeListeners(), this;
}, t.prototype.clearBreadcrumbs = function() {
  return this._breadcrumbs = [], this._notifyScopeListeners(), this;
}, t.prototype._applyFingerprint = function(t) {
  t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
}, t.prototype.applyToEvent = function(t, n) {
  return this._extra && Object.keys(this._extra).length && (t.extra = r.pi({}, this._extra, t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = r.pi({}, this._tags, t.tags)), this._user && Object.keys(this._user).length && (t.user = r.pi({}, this._user, t.user)), this._context && Object.keys(this._context).length && (t.contexts = r.pi({}, this._context, t.contexts)), this._level && (t.level = this._level), this._transaction && (t.transaction = this._transaction), this._applyFingerprint(t), t.breadcrumbs = r.fl(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(r.fl(function() {
    var t = (0, s.Rf)();
    return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors;
  }(), this._eventProcessors), t, n);
}, t;
  }();