let r;
function i(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
'undefined' != typeof window
	? (r = window)
	: 'undefined' == typeof self
		? (console.warn('Using browser-only version of superagent in non-browser environment'), (r = void 0))
		: (r = self);
let a = n(606419),
	s = n(164390),
	o = n(339768),
	l = n(615252),
	u = n(517024),
	c = u.isObject,
	d = u.mixin,
	_ = u.hasOwn,
	E = n(509337),
	f = n(675246);
function h() {}
e.exports = function (e, n) {
	return 'function' == typeof n
		? new t.Request('GET', e).end(n)
		: 1 == arguments.length
			? new t.Request('GET', e)
			: new t.Request(e, n);
};
let p = (t = e.exports);
(t.Request = A),
	(p.getXHR = () => {
		if (r.XMLHttpRequest) return new r.XMLHttpRequest();
		throw Error('Browser-only version of superagent could not find XHR');
	});
let I = ''.trim ? (e) => e.trim() : (e) => e.replace(/(^\s*|\s*$)/g, '');
function m(e) {
	if (!c(e)) return e;
	let t = [];
	for (let n in e)
		_(e, n) &&
			(function e(t, n, r) {
				if (void 0 !== r) {
					if (null === r) {
						t.push(encodeURI(n));
						return;
					}
					if (Array.isArray(r)) {
						var a,
							s = (function (e, t) {
								var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
								if (!n) {
									if (
										Array.isArray(e) ||
										(n = (function (e, t) {
											if (e) {
												if ('string' == typeof e) return i(e, t);
												var n = Object.prototype.toString.call(e).slice(8, -1);
												if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n))
													return Array.from(e);
												if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
											}
										})(e))
									) {
										n && (e = n);
										var r = 0,
											a = function () {};
										return {
											s: a,
											n: function () {
												return r >= e.length
													? { done: !0 }
													: {
															done: !1,
															value: e[r++]
														};
											},
											e: function (e) {
												throw e;
											},
											f: a
										};
									}
									throw TypeError(
										'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
									);
								}
								var s,
									o = !0,
									l = !1;
								return {
									s: function () {
										n = n.call(e);
									},
									n: function () {
										var e = n.next();
										return (o = e.done), e;
									},
									e: function (e) {
										(l = !0), (s = e);
									},
									f: function () {
										try {
											!o && null != n.return && n.return();
										} finally {
											if (l) throw s;
										}
									}
								};
							})(r);
						try {
							for (s.s(); !(a = s.n()).done; ) {
								let r = a.value;
								e(t, n, r);
							}
						} catch (e) {
							s.e(e);
						} finally {
							s.f();
						}
					} else if (c(r)) for (let i in r) _(r, i) && e(t, `${n}[${i}]`, r[i]);
					else t.push(encodeURI(n) + '=' + encodeURIComponent(r));
				}
			})(t, n, e[n]);
	return t.join('&');
}
function T(e) {
	let t, n;
	let r = {},
		i = e.split('&');
	for (let e = 0, a = i.length; e < a; ++e)
		-1 === (n = (t = i[e]).indexOf('='))
			? (r[decodeURIComponent(t)] = '')
			: (r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1)));
	return r;
}
(p.serializeObject = m),
	(p.parseString = T),
	(p.types = {
		html: 'text/html',
		json: 'application/json',
		xml: 'text/xml',
		urlencoded: 'application/x-www-form-urlencoded',
		form: 'application/x-www-form-urlencoded',
		'form-data': 'application/x-www-form-urlencoded'
	}),
	(p.serialize = {
		'application/x-www-form-urlencoded': o.stringify,
		'application/json': s
	}),
	(p.parse = {
		'application/x-www-form-urlencoded': T,
		'application/json': JSON.parse
	});
function g(e) {
	return /[/+]json($|[^-\w])/i.test(e);
}
function S(e) {
	(this.req = e),
		(this.xhr = this.req.xhr),
		(this.text =
			('HEAD' !== this.req.method && ('' === this.xhr.responseType || 'text' === this.xhr.responseType)) ||
			void 0 === this.xhr.responseType
				? this.xhr.responseText
				: null),
		(this.statusText = this.req.xhr.statusText);
	let t = this.xhr.status;
	1223 === t && (t = 204),
		this._setStatusProperties(t),
		(this.headers = (function (e) {
			let t, n, r, i;
			let a = e.split(/\r?\n/),
				s = {};
			for (let e = 0, o = a.length; e < o; ++e) {
				if (-1 !== (t = (n = a[e]).indexOf(':')))
					(r = n.slice(0, t).toLowerCase()), (i = I(n.slice(t + 1))), (s[r] = i);
			}
			return s;
		})(this.xhr.getAllResponseHeaders())),
		(this.header = this.headers),
		(this.header['content-type'] = this.xhr.getResponseHeader('content-type')),
		this._setHeaderProperties(this.header),
		null === this.text && e._responseType
			? (this.body = this.xhr.response)
			: (this.body = 'HEAD' === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response));
}
function A(e, t) {
	let n = this;
	(this._query = this._query || []),
		(this.method = e),
		(this.url = t),
		(this.header = {}),
		(this._header = {}),
		this.on('end', () => {
			let e,
				t = null,
				r = null;
			try {
				r = new S(n);
			} catch (e) {
				return (
					((t = Error('Parser is unable to parse the response')).parse = !0),
					(t.original = e),
					n.xhr
						? ((t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response),
							(t.status = n.xhr.status ? n.xhr.status : null),
							(t.statusCode = t.status))
						: ((t.rawResponse = null), (t.status = null)),
					n.callback(t)
				);
			}
			n.emit('response', r);
			try {
				!n._isResponseOK(r) && (e = Error(r.statusText || r.text || 'Unsuccessful HTTP response'));
			} catch (t) {
				e = t;
			}
			e
				? ((e.original = t), (e.response = r), (e.status = e.status || r.status), n.callback(e, r))
				: n.callback(null, r);
		});
}
d(S.prototype, E.prototype),
	(S.prototype._parseBody = function (e) {
		let t = p.parse[this.type];
		return this.req._parser
			? this.req._parser(this, e)
			: (!t && g(this.type) && (t = p.parse['application/json']),
				t && e && (e.length > 0 || e instanceof Object) ? t(e) : null);
	}),
	(S.prototype.toError = function () {
		let e = this.req,
			t = e.method,
			n = e.url,
			r = Error(`cannot ${t} ${n} (${this.status})`);
		return (r.status = this.status), (r.method = t), (r.url = n), r;
	}),
	(p.Response = S),
	a(A.prototype),
	d(A.prototype, l.prototype),
	(A.prototype.type = function (e) {
		return this.set('Content-Type', p.types[e] || e), this;
	}),
	(A.prototype.accept = function (e) {
		return this.set('Accept', p.types[e] || e), this;
	}),
	(A.prototype.auth = function (e, t, n) {
		1 == arguments.length && (t = ''),
			'object' == typeof t && null !== t && ((n = t), (t = '')),
			!n && (n = { type: 'function' == typeof btoa ? 'basic' : 'auto' });
		let r = n.encoder
			? n.encoder
			: (e) => {
					if ('function' == typeof btoa) return btoa(e);
					throw Error('Cannot use basic auth, btoa is not a function');
				};
		return this._auth(e, t, n, r);
	}),
	(A.prototype.query = function (e) {
		return 'string' != typeof e && (e = m(e)), e && this._query.push(e), this;
	}),
	(A.prototype.attach = function (e, t, n) {
		if (t) {
			if (this._data) throw Error("superagent can't mix .send() and .attach()");
			this._getFormData().append(e, t, n || t.name);
		}
		return this;
	}),
	(A.prototype._getFormData = function () {
		return !this._formData && (this._formData = new r.FormData()), this._formData;
	}),
	(A.prototype.callback = function (e, t) {
		if (this._shouldRetry(e, t)) return this._retry();
		let n = this._callback;
		this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit('error', e)), n(e, t);
	}),
	(A.prototype.crossDomainError = function () {
		let e = Error(
			'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.'
		);
		(e.crossDomain = !0), (e.status = this.status), (e.method = this.method), (e.url = this.url), this.callback(e);
	}),
	(A.prototype.agent = function () {
		return console.warn('This is not supported in browser version of superagent'), this;
	}),
	(A.prototype.ca = A.prototype.agent),
	(A.prototype.buffer = A.prototype.ca),
	(A.prototype.write = () => {
		throw Error('Streaming is not supported in browser version of superagent');
	}),
	(A.prototype.pipe = A.prototype.write),
	(A.prototype._isHost = function (e) {
		return e && 'object' == typeof e && !Array.isArray(e) && '[object Object]' !== Object.prototype.toString.call(e);
	}),
	(A.prototype.end = function (e) {
		this._endCalled && console.warn('Warning: .end() was called twice. This is not supported in superagent'),
			(this._endCalled = !0),
			(this._callback = e || h),
			this._finalizeQueryString(),
			this._end();
	}),
	(A.prototype._setUploadTimeout = function () {
		let e = this;
		this._uploadTimeout &&
			!this._uploadTimeoutTimer &&
			(this._uploadTimeoutTimer = setTimeout(() => {
				e._timeoutError('Upload timeout of ', e._uploadTimeout, 'ETIMEDOUT');
			}, this._uploadTimeout));
	}),
	(A.prototype._end = function () {
		if (this._aborted) return this.callback(Error('The request has been aborted even before .end() was called'));
		let e = this;
		this.xhr = p.getXHR();
		let t = this.xhr,
			n = this._formData || this._data;
		this._setTimeouts(),
			t.addEventListener('readystatechange', () => {
				let n;
				let r = t.readyState;
				if ((r >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === r)) {
					try {
						n = t.status;
					} catch (e) {
						n = 0;
					}
					if (!n) {
						if (e.timedout || e._aborted) return;
						return e.crossDomainError();
					}
					e.emit('end');
				}
			});
		let r = (t, n) => {
			n.total > 0 &&
				((n.percent = (n.loaded / n.total) * 100), 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)),
				(n.direction = t),
				e.emit('progress', n);
		};
		if (this.hasListeners('progress'))
			try {
				t.addEventListener('progress', r.bind(null, 'download')),
					t.upload && t.upload.addEventListener('progress', r.bind(null, 'upload'));
			} catch (e) {}
		t.upload && this._setUploadTimeout();
		try {
			this.username && this.password
				? t.open(this.method, this.url, !0, this.username, this.password)
				: t.open(this.method, this.url, !0);
		} catch (e) {
			return this.callback(e);
		}
		if (
			(this._withCredentials && (t.withCredentials = !0),
			!this._formData && 'GET' !== this.method && 'HEAD' !== this.method && 'string' != typeof n && !this._isHost(n))
		) {
			let e = this._header['content-type'],
				t = this._serializer || p.serialize[e ? e.split(';')[0] : ''];
			!t && g(e) && (t = p.serialize['application/json']), t && (n = t(n));
		}
		for (let e in this.header) null !== this.header[e] && _(this.header, e) && t.setRequestHeader(e, this.header[e]);
		this._responseType && (t.responseType = this._responseType),
			this.emit('request', this),
			t.send(void 0 === n ? null : n);
	}),
	(p.agent = () => new f());
for (var N = 0, v = ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE']; N < v.length; N++) {
	let e = v[N];
	f.prototype[e.toLowerCase()] = function (t, n) {
		let r = new p.Request(e, t);
		return this._setDefaults(r), n && r.end(n), r;
	};
}
function O(e, t, n) {
	let r = p('DELETE', e);
	return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
}
(f.prototype.del = f.prototype.delete),
	(p.get = (e, t, n) => {
		let r = p('GET', e);
		return 'function' == typeof t && ((n = t), (t = null)), t && r.query(t), n && r.end(n), r;
	}),
	(p.head = (e, t, n) => {
		let r = p('HEAD', e);
		return 'function' == typeof t && ((n = t), (t = null)), t && r.query(t), n && r.end(n), r;
	}),
	(p.options = (e, t, n) => {
		let r = p('OPTIONS', e);
		return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
	}),
	(p.del = O),
	(p.delete = O),
	(p.patch = (e, t, n) => {
		let r = p('PATCH', e);
		return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
	}),
	(p.post = (e, t, n) => {
		let r = p('POST', e);
		return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
	}),
	(p.put = (e, t, n) => {
		let r = p('PUT', e);
		return 'function' == typeof t && ((n = t), (t = null)), t && r.send(t), n && r.end(n), r;
	});
