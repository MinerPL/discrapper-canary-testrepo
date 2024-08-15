var r = n(890308);
function i() {
	(this.protocol = null), (this.slashes = null), (this.auth = null), (this.host = null), (this.port = null), (this.hostname = null), (this.hash = null), (this.search = null), (this.query = null), (this.pathname = null), (this.path = null), (this.href = null);
}
var a = /^([a-z0-9.+-]+:)/i,
	s = /:[0-9]*$/,
	o = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
	l = ["'"].concat(['{', '}', '|', '\\', '^', '`'].concat(['<', '>', '"', '`', ' ', '\r', '\n', '\t'])),
	u = ['%', '/', '?', ';', '#'].concat(l),
	c = ['/', '?', '#'],
	d = /^[+a-z0-9A-Z_-]{0,63}$/,
	_ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	E = {
		javascript: !0,
		'javascript:': !0
	},
	f = {
		javascript: !0,
		'javascript:': !0
	},
	h = {
		http: !0,
		https: !0,
		ftp: !0,
		gopher: !0,
		file: !0,
		'http:': !0,
		'https:': !0,
		'ftp:': !0,
		'gopher:': !0,
		'file:': !0
	},
	p = n(684083);
function m(e, t, n) {
	if (e && 'object' == typeof e && e instanceof i) return e;
	var r = new i();
	return r.parse(e, t, n), r;
}
i.prototype.parse = function (e, t, n) {
	if ('string' != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
	var i = e.indexOf('?'),
		s = -1 !== i && i < e.indexOf('#') ? '?' : '#',
		m = e.split(s);
	m[0] = m[0].replace(/\\/g, '/');
	var I = (e = m.join(s));
	if (((I = I.trim()), !n && 1 === e.split('#').length)) {
		var T = o.exec(I);
		if (T) return (this.path = I), (this.href = I), (this.pathname = T[1]), T[2] ? ((this.search = T[2]), t ? (this.query = p.parse(this.search.substr(1))) : (this.query = this.search.substr(1))) : t && ((this.search = ''), (this.query = {})), this;
	}
	var g = a.exec(I);
	if (g) {
		var S = (g = g[0]).toLowerCase();
		(this.protocol = S), (I = I.substr(g.length));
	}
	if (n || g || I.match(/^\/\/[^@/]+@[^@/]+/)) {
		var A = '//' === I.substr(0, 2);
		A && !(g && f[g]) && ((I = I.substr(2)), (this.slashes = !0));
	}
	if (!f[g] && (A || (g && !h[g]))) {
		for (var N, v, O = -1, R = 0; R < c.length; R++) {
			var C = I.indexOf(c[R]);
			-1 !== C && (-1 === O || C < O) && (O = C);
		}
		-1 !== (v = -1 === O ? I.lastIndexOf('@') : I.lastIndexOf('@', O)) && ((N = I.slice(0, v)), (I = I.slice(v + 1)), (this.auth = decodeURIComponent(N))), (O = -1);
		for (var R = 0; R < u.length; R++) {
			var C = I.indexOf(u[R]);
			-1 !== C && (-1 === O || C < O) && (O = C);
		}
		-1 === O && (O = I.length), (this.host = I.slice(0, O)), (I = I.slice(O)), this.parseHost(), (this.hostname = this.hostname || '');
		var y = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
		if (!y) {
			for (var D = this.hostname.split(/\./), R = 0, L = D.length; R < L; R++) {
				var b = D[R];
				if (!!b) {
					if (!b.match(d)) {
						for (var M = '', P = 0, U = b.length; P < U; P++) b.charCodeAt(P) > 127 ? (M += 'x') : (M += b[P]);
						if (!M.match(d)) {
							var w = D.slice(0, R),
								x = D.slice(R + 1),
								G = b.match(_);
							G && (w.push(G[1]), x.unshift(G[2])), x.length && (I = '/' + x.join('.') + I), (this.hostname = w.join('.'));
							break;
						}
					}
				}
			}
		}
		this.hostname.length > 255 ? (this.hostname = '') : (this.hostname = this.hostname.toLowerCase()), !y && (this.hostname = r.toASCII(this.hostname));
		var k = this.port ? ':' + this.port : '',
			B = this.hostname || '';
		(this.host = B + k), (this.href += this.host), y && ((this.hostname = this.hostname.substr(1, this.hostname.length - 2)), '/' !== I[0] && (I = '/' + I));
	}
	if (!E[S])
		for (var R = 0, L = l.length; R < L; R++) {
			var F = l[R];
			if (-1 !== I.indexOf(F)) {
				var V = encodeURIComponent(F);
				V === F && (V = escape(F)), (I = I.split(F).join(V));
			}
		}
	var H = I.indexOf('#');
	-1 !== H && ((this.hash = I.substr(H)), (I = I.slice(0, H)));
	var Z = I.indexOf('?');
	if ((-1 !== Z ? ((this.search = I.substr(Z)), (this.query = I.substr(Z + 1)), t && (this.query = p.parse(this.query)), (I = I.slice(0, Z))) : t && ((this.search = ''), (this.query = {})), I && (this.pathname = I), h[S] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search)) {
		var k = this.pathname || '',
			Y = this.search || '';
		this.path = k + Y;
	}
	return (this.href = this.format()), this;
};
i.prototype.format = function () {
	var e = this.auth || '';
	e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ':') + '@');
	var t = this.protocol || '',
		n = this.pathname || '',
		r = this.hash || '',
		i = !1,
		a = '';
	this.host ? (i = e + this.host) : this.hostname && ((i = e + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']')), this.port && (i += ':' + this.port)),
		this.query &&
			'object' == typeof this.query &&
			Object.keys(this.query).length &&
			(a = p.stringify(this.query, {
				arrayFormat: 'repeat',
				addQueryPrefix: !1
			}));
	var s = this.search || (a && '?' + a) || '';
	return (
		t && ':' !== t.substr(-1) && (t += ':'),
		this.slashes || ((!t || h[t]) && !1 !== i) ? ((i = '//' + (i || '')), n && '/' !== n.charAt(0) && (n = '/' + n)) : !i && (i = ''),
		r && '#' !== r.charAt(0) && (r = '#' + r),
		s && '?' !== s.charAt(0) && (s = '?' + s),
		(n = n.replace(/[?#]/g, function (e) {
			return encodeURIComponent(e);
		})),
		t + i + n + (s = s.replace('#', '%23')) + r
	);
};
i.prototype.resolve = function (e) {
	return this.resolveObject(m(e, !1, !0)).format();
};
(i.prototype.resolveObject = function (e) {
	if ('string' == typeof e) {
		var t = new i();
		t.parse(e, !1, !0), (e = t);
	}
	for (var n = new i(), r = Object.keys(this), a = 0; a < r.length; a++) {
		var s = r[a];
		n[s] = this[s];
	}
	if (((n.hash = e.hash), '' === e.href)) return (n.href = n.format()), n;
	if (e.slashes && !e.protocol) {
		for (var o = Object.keys(e), l = 0; l < o.length; l++) {
			var u = o[l];
			'protocol' !== u && (n[u] = e[u]);
		}
		return h[n.protocol] && n.hostname && !n.pathname && ((n.pathname = '/'), (n.path = n.pathname)), (n.href = n.format()), n;
	}
	if (e.protocol && e.protocol !== n.protocol) {
		if (!h[e.protocol]) {
			for (var c = Object.keys(e), d = 0; d < c.length; d++) {
				var _ = c[d];
				n[_] = e[_];
			}
			return (n.href = n.format()), n;
		}
		if (((n.protocol = e.protocol), e.host || f[e.protocol])) n.pathname = e.pathname;
		else {
			for (var E = (e.pathname || '').split('/'); E.length && !(e.host = E.shift()); );
			!e.host && (e.host = ''), !e.hostname && (e.hostname = ''), '' !== E[0] && E.unshift(''), E.length < 2 && E.unshift(''), (n.pathname = E.join('/'));
		}
		if (((n.search = e.search), (n.query = e.query), (n.host = e.host || ''), (n.auth = e.auth), (n.hostname = e.hostname || e.host), (n.port = e.port), n.pathname || n.search)) {
			var p = n.pathname || '',
				m = n.search || '';
			n.path = p + m;
		}
		return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
	}
	var I = n.pathname && '/' === n.pathname.charAt(0),
		T = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
		g = T || I || (n.host && e.pathname),
		S = g,
		A = (n.pathname && n.pathname.split('/')) || [],
		E = (e.pathname && e.pathname.split('/')) || [],
		N = n.protocol && !h[n.protocol];
	if ((N && ((n.hostname = ''), (n.port = null), n.host && ('' === A[0] ? (A[0] = n.host) : A.unshift(n.host)), (n.host = ''), e.protocol && ((e.hostname = null), (e.port = null), e.host && ('' === E[0] ? (E[0] = e.host) : E.unshift(e.host)), (e.host = null)), (g = g && ('' === E[0] || '' === A[0]))), T)) (n.host = e.host || '' === e.host ? e.host : n.host), (n.hostname = e.hostname || '' === e.hostname ? e.hostname : n.hostname), (n.search = e.search), (n.query = e.query), (A = E);
	else if (E.length) !A && (A = []), A.pop(), (A = A.concat(E)), (n.search = e.search), (n.query = e.query);
	else if (null != e.search) {
		if (N) {
			(n.host = A.shift()), (n.hostname = n.host);
			var v = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
			v && ((n.auth = v.shift()), (n.hostname = v.shift()), (n.host = n.hostname));
		}
		return (n.search = e.search), (n.query = e.query), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.href = n.format()), n;
	}
	if (!A.length) return (n.pathname = null), n.search ? (n.path = '/' + n.search) : (n.path = null), (n.href = n.format()), n;
	for (var O = A.slice(-1)[0], R = ((n.host || e.host || A.length > 1) && ('.' === O || '..' === O)) || '' === O, C = 0, y = A.length; y >= 0; y--) '.' === (O = A[y]) ? A.splice(y, 1) : '..' === O ? (A.splice(y, 1), C++) : C && (A.splice(y, 1), C--);
	if (!g && !S) for (; C--; C) A.unshift('..');
	g && '' !== A[0] && (!A[0] || '/' !== A[0].charAt(0)) && A.unshift(''), R && '/' !== A.join('/').substr(-1) && A.push('');
	var D = '' === A[0] || (A[0] && '/' === A[0].charAt(0));
	if (N) {
		(n.hostname = D ? '' : A.length ? A.shift() : ''), (n.host = n.hostname);
		var v = !!(n.host && n.host.indexOf('@') > 0) && n.host.split('@');
		v && ((n.auth = v.shift()), (n.hostname = v.shift()), (n.host = n.hostname));
	}
	return (g = g || (n.host && A.length)) && !D && A.unshift(''), A.length > 0 ? (n.pathname = A.join('/')) : ((n.pathname = null), (n.path = null)), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : '') + (n.search ? n.search : '')), (n.auth = e.auth || n.auth), (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
}),
	(i.prototype.parseHost = function () {
		var e = this.host,
			t = s.exec(e);
		t && (':' !== (t = t[0]) && (this.port = t.substr(1)), (e = e.substr(0, e.length - t.length))), e && (this.hostname = e);
	}),
	(t.parse = m),
	(t.resolve = function (e, t) {
		return m(e, !1, !0).resolve(t);
	}),
	(t.resolveObject = function (e, t) {
		return e ? m(e, !1, !0).resolveObject(t) : t;
	}),
	(t.format = function (e) {
		return ('string' == typeof e && (e = m(e)), e instanceof i) ? e.format() : i.prototype.format.call(e);
	}),
	(t.Url = i);
