"use strict";
let r;

function i(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}
"undefined" != typeof window ? r = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), r = void 0) : r = self;
let a = n(606419),
  o = n(164390),
  s = n(339768),
  u = n(615252),
  c = n(517024),
  l = c.isObject,
  d = c.mixin,
  f = c.hasOwn,
  p = n(509337),
  h = n(675246);

function m() {}
e.exports = function(e, n) {
  return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
};
let g = t = e.exports;
t.Request = S, g.getXHR = () => {
  if (r.XMLHttpRequest) return new r.XMLHttpRequest;
  throw Error("Browser-only version of superagent could not find XHR")
};
let _ = "".trim ? e => e.trim() : e => e.replace(/(^\s*|\s*$)/g, "");

function b(e) {
  if (!l(e)) return e;
  let t = [];
  for (let n in e) f(e, n) && function e(t, n, r) {
    if (void 0 !== r) {
      if (null === r) {
        t.push(encodeURI(n));
        return
      }
      if (Array.isArray(r)) {
        var a, o = function(e, t) {
          var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (e) {
                  if ("string" == typeof e) return i(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                  if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }
              }(e))) {
              n && (e = n);
              var r = 0,
                a = function() {};
              return {
                s: a,
                n: function() {
                  return r >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[r++]
                  }
                },
                e: function(e) {
                  throw e
                },
                f: a
              }
            }
            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, s = !0,
            u = !1;
          return {
            s: function() {
              n = n.call(e)
            },
            n: function() {
              var e = n.next();
              return s = e.done, e
            },
            e: function(e) {
              u = !0, o = e
            },
            f: function() {
              try {
                !s && null != n.return && n.return()
              } finally {
                if (u) throw o
              }
            }
          }
        }(r);
        try {
          for (o.s(); !(a = o.n()).done;) {
            let r = a.value;
            e(t, n, r)
          }
        } catch (e) {
          o.e(e)
        } finally {
          o.f()
        }
      } else if (l(r))
        for (let i in r) f(r, i) && e(t, `${n}[${i}]`, r[i]);
      else t.push(encodeURI(n) + "=" + encodeURIComponent(r))
    }
  }(t, n, e[n]);
  return t.join("&")
}

function v(e) {
  let t, n;
  let r = {},
    i = e.split("&");
  for (let e = 0, a = i.length; e < a; ++e) - 1 === (n = (t = i[e]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
  return r
}
g.serializeObject = b, g.parseString = v, g.types = {
  html: "text/html",
  json: "application/json",
  xml: "text/xml",
  urlencoded: "application/x-www-form-urlencoded",
  form: "application/x-www-form-urlencoded",
  "form-data": "application/x-www-form-urlencoded"
}, g.serialize = {
  "application/x-www-form-urlencoded": s.stringify,
  "application/json": o
}, g.parse = {
  "application/x-www-form-urlencoded": v,
  "application/json": JSON.parse
};

function y(e) {
  return /[/+]json($|[^-\w])/i.test(e)
}

function E(e) {
  this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
  let t = this.xhr.status;
  1223 === t && (t = 204), this._setStatusProperties(t), this.headers = function(e) {
    let t, n, r, i;
    let a = e.split(/\r?\n/),
      o = {};
    for (let e = 0, s = a.length; e < s; ++e) {
      if (-1 !== (t = (n = a[e]).indexOf(":"))) r = n.slice(0, t).toLowerCase(), i = _(n.slice(t + 1)), o[r] = i
    }
    return o
  }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
}

function S(e, t) {
  let n = this;
  this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", () => {
    let e, t = null,
      r = null;
    try {
      r = new E(n)
    } catch (e) {
      return (t = Error("Parser is unable to parse the response")).parse = !0, t.original = e, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t)
    }
    n.emit("response", r);
    try {
      !n._isResponseOK(r) && (e = Error(r.statusText || r.text || "Unsuccessful HTTP response"))
    } catch (t) {
      e = t
    }
    e ? (e.original = t, e.response = r, e.status = e.status || r.status, n.callback(e, r)) : n.callback(null, r)
  })
}
d(E.prototype, p.prototype), E.prototype._parseBody = function(e) {
  let t = g.parse[this.type];
  return this.req._parser ? this.req._parser(this, e) : (!t && y(this.type) && (t = g.parse["application/json"]), t && e && (e.length > 0 || e instanceof Object) ? t(e) : null)
}, E.prototype.toError = function() {
  let e = this.req,
    t = e.method,
    n = e.url,
    r = Error(`cannot ${t} ${n} (${this.status})`);
  return r.status = this.status, r.method = t, r.url = n, r
}, g.Response = E, a(S.prototype), d(S.prototype, u.prototype), S.prototype.type = function(e) {
  return this.set("Content-Type", g.types[e] || e), this
}, S.prototype.accept = function(e) {
  return this.set("Accept", g.types[e] || e), this
}, S.prototype.auth = function(e, t, n) {
  1 == arguments.length && (t = ""), "object" == typeof t && null !== t && (n = t, t = ""), !n && (n = {
    type: "function" == typeof btoa ? "basic" : "auto"
  });
  let r = n.encoder ? n.encoder : e => {
    if ("function" == typeof btoa) return btoa(e);
    throw Error("Cannot use basic auth, btoa is not a function")
  };
  return this._auth(e, t, n, r)
}, S.prototype.query = function(e) {
  return "string" != typeof e && (e = b(e)), e && this._query.push(e), this
}, S.prototype.attach = function(e, t, n) {
  if (t) {
    if (this._data) throw Error("superagent can't mix .send() and .attach()");
    this._getFormData().append(e, t, n || t.name)
  }
  return this
}, S.prototype._getFormData = function() {
  return !this._formData && (this._formData = new r.FormData), this._formData
}, S.prototype.callback = function(e, t) {
  if (this._shouldRetry(e, t)) return this._retry();
  let n = this._callback;
  this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
}, S.prototype.crossDomainError = function() {
  let e = Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
  e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
}, S.prototype.agent = function() {
  return console.warn("This is not supported in browser version of superagent"), this
}, S.prototype.ca = S.prototype.agent, S.prototype.buffer = S.prototype.ca, S.prototype.write = () => {
  throw Error("Streaming is not supported in browser version of superagent")
}, S.prototype.pipe = S.prototype.write, S.prototype._isHost = function(e) {
  return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
}, S.prototype.end = function(e) {
  this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || m, this._finalizeQueryString(), this._end()
}, S.prototype._setUploadTimeout = function() {
  let e = this;
  this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout(() => {
    e._timeoutError("Upload timeout of ", e._uploadTimeout, "ETIMEDOUT")
  }, this._uploadTimeout))
}, S.prototype._end = function() {
  if (this._aborted) return this.callback(Error("The request has been aborted even before .end() was called"));
  let e = this;
  this.xhr = g.getXHR();
  let t = this.xhr,
    n = this._formData || this._data;
  this._setTimeouts(), t.addEventListener("readystatechange", () => {
    let n;
    let r = t.readyState;
    if (r >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === r) {
      try {
        n = t.status
      } catch (e) {
        n = 0
      }
      if (!n) {
        if (e.timedout || e._aborted) return;
        return e.crossDomainError()
      }
      e.emit("end")
    }
  });
  let r = (t, n) => {
    n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)), n.direction = t, e.emit("progress", n)
  };
  if (this.hasListeners("progress")) try {
    t.addEventListener("progress", r.bind(null, "download")), t.upload && t.upload.addEventListener("progress", r.bind(null, "upload"))
  } catch (e) {}
  t.upload && this._setUploadTimeout();
  try {
    this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
  } catch (e) {
    return this.callback(e)
  }
  if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
    let e = this._header["content-type"],
      t = this._serializer || g.serialize[e ? e.split(";")[0] : ""];
    !t && y(e) && (t = g.serialize["application/json"]), t && (n = t(n))
  }
  for (let e in this.header) null !== this.header[e] && f(this.header, e) && t.setRequestHeader(e, this.header[e]);
  this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send(void 0 === n ? null : n)
}, g.agent = () => new h;
for (var x = 0, w = ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"]; x < w.length; x++) {
  let e = w[x];
  h.prototype[e.toLowerCase()] = function(t, n) {
    let r = new g.Request(e, t);
    return this._setDefaults(r), n && r.end(n), r
  }
}

function C(e, t, n) {
  let r = g("DELETE", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}
h.prototype.del = h.prototype.delete, g.get = (e, t, n) => {
  let r = g("GET", e);
  return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
}, g.head = (e, t, n) => {
  let r = g("HEAD", e);
  return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
}, g.options = (e, t, n) => {
  let r = g("OPTIONS", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}, g.del = C, g.delete = C, g.patch = (e, t, n) => {
  let r = g("PATCH", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}, g.post = (e, t, n) => {
  let r = g("POST", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}, g.put = (e, t, n) => {
  let r = g("PUT", e);
  return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
}