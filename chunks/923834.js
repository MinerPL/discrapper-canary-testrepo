t(411104);
var i,
	l,
	o,
	r,
	E = t(442837),
	a = t(570140);
let u = null;
class s extends (i = E.ZP.Store) {
	getCurrentPath() {
		return null != u ? u.pathname : null;
	}
	getCurrentRoute() {
		return (function (e) {
			let n = null != e && null != e.search ? e.search : '';
			return null != e ? ''.concat(e.pathname).concat(n) : null;
		})(u);
	}
	reset() {
		throw Error('Should not reset the store this way outside of a test environment');
	}
}
(r = 'ApplicationStoreLocationStore'),
	(o = 'displayName') in (l = s)
		? Object.defineProperty(l, o, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[o] = r),
	(n.Z = new s(a.Z, {
		APPLICATION_STORE_LOCATION_CHANGE: function (e) {
			let { location: n } = e;
			u = { ...n };
		},
		APPLICATION_STORE_RESET_NAVIGATION: function () {
			u = null;
		}
	}));
