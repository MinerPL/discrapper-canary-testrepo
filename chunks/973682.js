r.d(e, {
  $6: function() {
return f;
  },
  OV: function() {
return u;
  },
  Qe: function() {
return l;
  },
  Rw: function() {
return a;
  },
  X9: function() {
return h;
  },
  bc: function() {
return i;
  },
  gb: function() {
return c;
  },
  wI: function() {
return s;
  }
});
var n, i, o = r(146150);
(n = i || (i = {})).FORMAT_ERROR = 'FORMAT_ERROR', n.UNSUPPORTED_FORMATTER = 'UNSUPPORTED_FORMATTER', n.INVALID_CONFIG = 'INVALID_CONFIG', n.MISSING_DATA = 'MISSING_DATA', n.MISSING_TRANSLATION = 'MISSING_TRANSLATION';
var a = function(t) {
function e(r, n, i) {
  var o = this,
    a = i ? i instanceof Error ? i : Error(String(i)) : void 0;
  return (o = t.call(this, '[@formatjs/intl Error '.concat(r, '] ').concat(n, '\n').concat(a ? '\n'.concat(a.message, '\n').concat(a.stack) : '')) || this).code = r, 'function' == typeof Error.captureStackTrace && Error.captureStackTrace(o, e), o;
}
return (0, o.ZT)(e, t), e;
  }(Error),
  s = function(t) {
function e(e, r) {
  return t.call(this, i.UNSUPPORTED_FORMATTER, e, r) || this;
}
return (0, o.ZT)(e, t), e;
  }(a),
  u = function(t) {
function e(e, r) {
  return t.call(this, i.INVALID_CONFIG, e, r) || this;
}
return (0, o.ZT)(e, t), e;
  }(a),
  c = function(t) {
function e(e, r) {
  return t.call(this, i.MISSING_DATA, e, r) || this;
}
return (0, o.ZT)(e, t), e;
  }(a),
  l = function(t) {
function e(e, r, n) {
  var o = t.call(this, i.FORMAT_ERROR, ''.concat(e, '\nLocale: ').concat(r, '\n'), n) || this;
  return o.locale = r, o;
}
return (0, o.ZT)(e, t), e;
  }(a),
  h = function(t) {
function e(e, r, n, i) {
  var o = t.call(this, ''.concat(e, '\nMessageID: ').concat(null == n ? void 0 : n.id, '\nDefault Message: ').concat(null == n ? void 0 : n.defaultMessage, '\nDescription: ').concat(null == n ? void 0 : n.description, '\n'), r, i) || this;
  return o.descriptor = n, o.locale = r, o;
}
return (0, o.ZT)(e, t), e;
  }(l),
  f = function(t) {
function e(e, r) {
  var n = t.call(this, i.MISSING_TRANSLATION, 'Missing message: "'.concat(e.id, '" for locale "').concat(r, '", using ').concat(e.defaultMessage ? 'default message ('.concat('string' == typeof e.defaultMessage ? e.defaultMessage : e.defaultMessage.map(function(t) {
    var e;
    return null !== (e = t.value) && void 0 !== e ? e : JSON.stringify(t);
  }).join(), ')') : 'id', ' as fallback.')) || this;
  return n.descriptor = e, n;
}
return (0, o.ZT)(e, t), e;
  }(a);