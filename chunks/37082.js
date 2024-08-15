let r;
n.d(t, {
	R: function () {
		return i;
	},
	y: function () {
		return a;
	}
});
try {
	r = window.localStorage;
} catch (e) {}
try {
	delete window.localStorage;
} catch (e) {}
class i {
	get(e, t) {
		return this.storage.hasOwnProperty(e) ? this.storage[e] : t;
	}
	set(e, t) {
		this.storage[e] = t;
	}
	remove(e) {
		delete this.storage[e];
	}
	clear() {
		this.storage = {};
	}
	stringify() {
		return JSON.stringify(this.storage);
	}
	asyncGetRaw(e, t) {
		return Promise.resolve(r.getItem(e));
	}
	setRaw(e, t) {
		r.setItem(e, t);
	}
	getAfterRefresh(e) {
		return Promise.resolve(this.get(e));
	}
	constructor() {
		var e, t, n;
		(e = this),
			(n = void 0),
			(t = 'storage') in e
				? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (e[t] = n),
			(this.storage = {});
	}
}
let a = !(function () {
	let e = 'test';
	try {
		return r.setItem(e, e), r.removeItem(e), !0;
	} catch (e) {
		return !1;
	}
})()
	? new i()
	: new (class e {
			get(e, t) {
				let n = r.getItem(e);
				if (null != n)
					try {
						n = JSON.parse(n);
					} catch (e) {
						n = t;
					}
				else n = t;
				return n;
			}
			set(e, t) {
				r.setItem(e, JSON.stringify(t));
			}
			remove(e) {
				r.removeItem(e);
			}
			clear() {
				r.clear();
			}
			stringify() {
				return JSON.stringify(r || {});
			}
			asyncGetRaw(e, t) {
				return Promise.resolve(r.getItem(e));
			}
			setRaw(e, t) {
				r.setItem(e, t);
			}
			getAfterRefresh(e) {
				return Promise.resolve(this.get(e));
			}
		})();
