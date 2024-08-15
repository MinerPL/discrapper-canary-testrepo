n.d(t, {
	I3: function () {
		return u;
	},
	d9: function () {
		return d;
	},
	oo: function () {
		return l;
	},
	yp: function () {
		return c;
	}
}),
	n(47120),
	n(411104);
var r = n(735250),
	i = n(470079),
	a = n(836560),
	s = n(585483);
class o {
	subscribe(e, t) {
		s.S.subscribe(e, t), this.emitter.on(e, t);
	}
	unsubscribe(e, t) {
		s.S.unsubscribe(e, t), this.emitter.off(e, t);
	}
	bumpDispatchPriority() {
		for (let e of this.emitter.eventNames()) for (let t of this.emitter.listeners(e)) s.S.resubscribe(e, t);
	}
	constructor() {
		var e, t, n;
		(e = this),
			(t = 'emitter'),
			(n = new a.EventEmitter()),
			t in e
				? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (e[t] = n);
	}
}
let l = i.createContext(
		new (class e {
			subscribe(e, t) {
				s.S.subscribe(e, t);
			}
			unsubscribe(e, t) {
				s.S.unsubscribe(e, t);
			}
			bumpDispatchPriority() {}
		})()
	),
	u = i.forwardRef(function (e, t) {
		let { children: n } = e,
			a = i.useRef(null);
		function s() {
			return null === a.current && (a.current = new o()), a.current;
		}
		return (
			i.useImperativeHandle(t, s),
			(0, r.jsx)(l.Provider, {
				value: s(),
				children: n
			})
		);
	});
function c(e) {
	let { event: t, handler: n } = e,
		r = i.useContext(l),
		a = i.useRef(n);
	i.useEffect(() => {
		a.current = n;
	}, [n]);
	let s = null == n;
	return (
		i.useEffect(() => {
			if (s) return;
			let e = function () {
				for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				null === (e = a.current) || void 0 === e || e.call(a, ...n);
			};
			return (
				r.subscribe(t, e),
				() => {
					r.unsubscribe(t, e);
				}
			);
		}, [r, t, s]),
		null
	);
}
function d(e) {
	return c(e), null;
}
