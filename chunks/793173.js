var n = this && this.__awaiter || function(t, e, r, n) {
return new(r || (r = Promise))(function(i, o) {
  function a(t) {
    try {
      u(n.next(t));
    } catch (t) {
      o(t);
    }
  }

  function s(t) {
    try {
      u(n.throw(t));
    } catch (t) {
      o(t);
    }
  }

  function u(t) {
    var e;
    t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
      t(e);
    })).then(a, s);
  }
  u((n = n.apply(t, e || [])).next());
});
  },
  i = this && this.__generator || function(t, e) {
var r, n, i, o, a = {
  label: 0,
  sent: function() {
    if (1 & i[0])
      throw i[1];
    return i[1];
  },
  trys: [],
  ops: []
};
return o = {
  next: s(0),
  throw: s(1),
  return: s(2)
}, 'function' == typeof Symbol && (o[Symbol.iterator] = function() {
  return this;
}), o;

function s(s) {
  return function(u) {
    return function(s) {
      if (r)
        throw TypeError('Generator is already executing.');
      for (; o && (o = 0, s[0] && (a = 0)), a;)
        try {
          if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done)
            return i;
          switch (n = 0, i && (s = [
              2 & s[0],
              i.value
            ]), s[0]) {
            case 0:
            case 1:
              i = s;
              break;
            case 4:
              return a.label++, {
                value: s[1],
                done: !1
              };
            case 5:
              a.label++, n = s[1], s = [0];
              continue;
            case 7:
              s = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                a = 0;
                continue;
              }
              if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                a.label = s[1];
                break;
              }
              if (6 === s[0] && a.label < i[1]) {
                a.label = i[1], i = s;
                break;
              }
              if (i && a.label < i[2]) {
                a.label = i[2], a.ops.push(s);
                break;
              }
              i[2] && a.ops.pop(), a.trys.pop();
              continue;
          }
          s = e.call(t, a);
        } catch (t) {
          s = [
            6,
            t
          ], n = 0;
        } finally {
          r = i = 0;
        }
      if (5 & s[0])
        throw s[1];
      return {
        value: s[0] ? s[1] : void 0,
        done: !0
      };
    }([
      s,
      u
    ]);
  };
}
  },
  o = this && this.__values || function(t) {
var e = 'function' == typeof Symbol && Symbol.iterator,
  r = e && t[e],
  n = 0;
if (r)
  return r.call(t);
if (t && 'number' == typeof t.length)
  return {
    next: function() {
      return t && n >= t.length && (t = void 0), {
        value: t && t[n++],
        done: !t
      };
    }
  };
throw TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
  };
Object.defineProperty(e, '__esModule', {
  value: !0
}), e.MessageLoader = void 0;
var a = r(207152),
  s = function() {
function t(t, e) {
  this.messageKeys = t, this.messages = {}, this.localeImportMap = e, this.supportedLocales = Object.keys(e), this._localeLoadingPromises = {}, this._parseCache = new Map(), this._subscribers = new Set(), this.fallbackMessage = new a.InternalIntlMessage('THIS MESSAGE FAILED TO LOAD', 'en-US');
}
return t.prototype.get = function(t, e) {
  var r = t + '@' + e,
    n = this._parseCache.get(r);
  if (null != n)
    return n;
  if (null == this.messages[e])
    return this.supportedLocales.includes(e) && this._loadLocale(e), this.fallbackMessage;
  if (t in this.messages[e]) {
    var i = this.messages[e][t],
      o = new a.InternalIntlMessage(i, e);
    return this._parseCache.set(r, o), o;
  }
  throw Error('Requested message '.concat(t, ' does not have a value in the requested locale nor the default locale'));
}, t.prototype.getBinds = function() {
  var t = this,
    e = this.onChange.bind(this);
  return this.messageKeys.reduce(function(r, n) {
    var i = t.get.bind(t, n);
    return i.onChange = e, r[n] = i, r;
  }, {});
}, t.prototype._loadLocale = function(t) {
  return n(this, void 0, void 0, function() {
    var e, r, n, o, a;
    return i(this, function(e) {
      switch (e.label) {
        case 0:
          if (null != this._localeLoadingPromises[t])
            return [2];
          if (null == this.localeImportMap[t])
            throw Error('Requested to load locale '.concat(t, ', which should be supported, but no source for translation data was provided.'));
          if (null != this.messages[t])
            return [2];
          return performance.now(), r = this.localeImportMap[t](), this._localeLoadingPromises[t] = r, n = this.messages, o = t, [
            4,
            r
          ];
        case 1:
          return n[o] = e.sent().default, delete this._localeLoadingPromises[t], performance.now(), this.emitChange(), [2];
      }
    });
  });
}, t.prototype.emitChange = function() {
  var t, e;
  try {
    for (var r = o(this._subscribers.values()), n = r.next(); !n.done; n = r.next())
      (0, n.value)();
  } catch (e) {
    t = {
      error: e
    };
  } finally {
    try {
      n && !n.done && (e = r.return) && e.call(r);
    } finally {
      if (t)
        throw t.error;
    }
  }
}, t.prototype.onChange = function(t) {
  var e = this;
  return this._subscribers.add(t),
    function() {
      return e._subscribers.delete(t);
    };
}, t;
  }();
e.MessageLoader = s;