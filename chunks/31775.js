e.exports = c;
var r,
	i = n(54673),
	a = n(435210),
	s = n(465170),
	o = {};
function l(e, t, n) {
	var i;
	return (o[t] ? (i = o[t]) : ((i = r(t)), (o[t] = i)), 2 == arguments.length) ? e[i] : ((e[i] = n), n);
}
function u() {
	return 1;
}
function c(e) {
	if (!(this instanceof c)) return new c(e);
	'number' == typeof e && (e = { max: e }), !e && (e = {});
	var t = l(this, 'max', e.max);
	(!t || 'number' != typeof t || t <= 0) && l(this, 'max', 1 / 0);
	var n = e.length || u;
	'function' != typeof n && (n = u),
		l(this, 'lengthCalculator', n),
		l(this, 'allowStale', e.stale || !1),
		l(this, 'maxAge', e.maxAge || 0),
		l(this, 'dispose', e.dispose),
		this.reset();
}
function d(e, t, n, r) {
	var i = n.value;
	E(e, i) && (h(e, n), !l(e, 'allowStale') && (i = void 0)), i && t.call(r, i.value, i.key, e);
}
function _(e, t, n) {
	var r = l(e, 'cache').get(t);
	if (r) {
		var i = r.value;
		E(e, i) ? (h(e, r), !l(e, 'allowStale') && (i = void 0)) : n && l(e, 'lruList').unshiftNode(r), i && (i = i.value);
	}
	return i;
}
function E(e, t) {
	if (!t || (!t.maxAge && !l(e, 'maxAge'))) return !1;
	var n = !1,
		r = Date.now() - t.now;
	return (n = t.maxAge ? r > t.maxAge : l(e, 'maxAge') && r > l(e, 'maxAge'));
}
function f(e) {
	if (l(e, 'length') > l(e, 'max'))
		for (var t = l(e, 'lruList').tail; l(e, 'length') > l(e, 'max') && null !== t; ) {
			var n = t.prev;
			h(e, t), (t = n);
		}
}
function h(e, t) {
	if (t) {
		var n = t.value;
		l(e, 'dispose') && l(e, 'dispose').call(this, n.key, n.value),
			l(e, 'length', l(e, 'length') - n.length),
			l(e, 'cache').delete(n.key),
			l(e, 'lruList').removeNode(t);
	}
}
function p(e, t, n, r, i) {
	(this.key = e), (this.value = t), (this.length = n), (this.now = r), (this.maxAge = i || 0);
}
(r =
	'function' == typeof Symbol
		? function (e) {
				return Symbol.for(e);
			}
		: function (e) {
				return '_' + e;
			}),
	Object.defineProperty(c.prototype, 'max', {
		set: function (e) {
			(!e || 'number' != typeof e || e <= 0) && (e = 1 / 0), l(this, 'max', e), f(this);
		},
		get: function () {
			return l(this, 'max');
		},
		enumerable: !0
	}),
	Object.defineProperty(c.prototype, 'allowStale', {
		set: function (e) {
			l(this, 'allowStale', !!e);
		},
		get: function () {
			return l(this, 'allowStale');
		},
		enumerable: !0
	}),
	Object.defineProperty(c.prototype, 'maxAge', {
		set: function (e) {
			(!e || 'number' != typeof e || e < 0) && (e = 0), l(this, 'maxAge', e), f(this);
		},
		get: function () {
			return l(this, 'maxAge');
		},
		enumerable: !0
	}),
	Object.defineProperty(c.prototype, 'lengthCalculator', {
		set: function (e) {
			'function' != typeof e && (e = u),
				e !== l(this, 'lengthCalculator') &&
					(l(this, 'lengthCalculator', e),
					l(this, 'length', 0),
					l(this, 'lruList').forEach(function (e) {
						(e.length = l(this, 'lengthCalculator').call(this, e.value, e.key)),
							l(this, 'length', l(this, 'length') + e.length);
					}, this)),
				f(this);
		},
		get: function () {
			return l(this, 'lengthCalculator');
		},
		enumerable: !0
	}),
	Object.defineProperty(c.prototype, 'length', {
		get: function () {
			return l(this, 'length');
		},
		enumerable: !0
	}),
	Object.defineProperty(c.prototype, 'itemCount', {
		get: function () {
			return l(this, 'lruList').length;
		},
		enumerable: !0
	}),
	(c.prototype.rforEach = function (e, t) {
		t = t || this;
		for (var n = l(this, 'lruList').tail; null !== n; ) {
			var r = n.prev;
			d(this, e, n, t), (n = r);
		}
	}),
	(c.prototype.forEach = function (e, t) {
		t = t || this;
		for (var n = l(this, 'lruList').head; null !== n; ) {
			var r = n.next;
			d(this, e, n, t), (n = r);
		}
	}),
	(c.prototype.keys = function () {
		return l(this, 'lruList')
			.toArray()
			.map(function (e) {
				return e.key;
			}, this);
	}),
	(c.prototype.values = function () {
		return l(this, 'lruList')
			.toArray()
			.map(function (e) {
				return e.value;
			}, this);
	}),
	(c.prototype.reset = function () {
		l(this, 'dispose') &&
			l(this, 'lruList') &&
			l(this, 'lruList').length &&
			l(this, 'lruList').forEach(function (e) {
				l(this, 'dispose').call(this, e.key, e.value);
			}, this),
			l(this, 'cache', new i()),
			l(this, 'lruList', new s()),
			l(this, 'length', 0);
	}),
	(c.prototype.dump = function () {
		return l(this, 'lruList')
			.map(function (e) {
				if (!E(this, e))
					return {
						k: e.key,
						v: e.value,
						e: e.now + (e.maxAge || 0)
					};
			}, this)
			.toArray()
			.filter(function (e) {
				return e;
			});
	}),
	(c.prototype.dumpLru = function () {
		return l(this, 'lruList');
	}),
	(c.prototype.inspect = function (e, t) {
		var n = 'LRUCache {',
			r = !1;
		l(this, 'allowStale') && ((n += '\n  allowStale: true'), (r = !0));
		var i = l(this, 'max');
		i && i !== 1 / 0 && (r && (n += ','), (n += '\n  max: ' + a.inspect(i, t)), (r = !0));
		var s = l(this, 'maxAge');
		s && (r && (n += ','), (n += '\n  maxAge: ' + a.inspect(s, t)), (r = !0));
		var o = l(this, 'lengthCalculator');
		o && o !== u && (r && (n += ','), (n += '\n  length: ' + a.inspect(l(this, 'length'), t)), (r = !0));
		var c = !1;
		return (
			l(this, 'lruList').forEach(function (e) {
				c ? (n += ',\n  ') : (r && (n += ',\n'), (c = !0), (n += '\n  '));
				var i = a.inspect(e.key).split('\n').join('\n  '),
					l = { value: e.value };
				e.maxAge !== s && (l.maxAge = e.maxAge),
					o !== u && (l.length = e.length),
					E(this, e) && (l.stale = !0),
					(l = a.inspect(l, t).split('\n').join('\n  ')),
					(n += i + ' => ' + l);
			}),
			(c || r) && (n += '\n'),
			(n += '}')
		);
	}),
	(c.prototype.set = function (e, t, n) {
		var r = (n = n || l(this, 'maxAge')) ? Date.now() : 0,
			i = l(this, 'lengthCalculator').call(this, t, e);
		if (l(this, 'cache').has(e)) {
			if (i > l(this, 'max')) return h(this, l(this, 'cache').get(e)), !1;
			var a = l(this, 'cache').get(e).value;
			return (
				l(this, 'dispose') && l(this, 'dispose').call(this, e, a.value),
				(a.now = r),
				(a.maxAge = n),
				(a.value = t),
				l(this, 'length', l(this, 'length') + (i - a.length)),
				(a.length = i),
				this.get(e),
				f(this),
				!0
			);
		}
		var s = new p(e, t, i, r, n);
		return s.length > l(this, 'max')
			? (l(this, 'dispose') && l(this, 'dispose').call(this, e, t), !1)
			: (l(this, 'length', l(this, 'length') + s.length),
				l(this, 'lruList').unshift(s),
				l(this, 'cache').set(e, l(this, 'lruList').head),
				f(this),
				!0);
	}),
	(c.prototype.has = function (e) {
		return !(!l(this, 'cache').has(e) || E(this, l(this, 'cache').get(e).value)) && !0;
	}),
	(c.prototype.get = function (e) {
		return _(this, e, !0);
	}),
	(c.prototype.peek = function (e) {
		return _(this, e, !1);
	}),
	(c.prototype.pop = function () {
		var e = l(this, 'lruList').tail;
		return e ? (h(this, e), e.value) : null;
	}),
	(c.prototype.del = function (e) {
		h(this, l(this, 'cache').get(e));
	}),
	(c.prototype.load = function (e) {
		this.reset();
		for (var t = Date.now(), n = e.length - 1; n >= 0; n--) {
			var r = e[n],
				i = r.e || 0;
			if (0 === i) this.set(r.k, r.v);
			else {
				var a = i - t;
				a > 0 && this.set(r.k, r.v, a);
			}
		}
	}),
	(c.prototype.prune = function () {
		var e = this;
		l(this, 'cache').forEach(function (t, n) {
			_(e, n, !1);
		});
	});
