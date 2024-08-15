n.d(t, {
	E: function () {
		return j;
	},
	Fc: function () {
		return ei;
	},
	Jz: function () {
		return W;
	},
	KK: function () {
		return b;
	},
	Kf: function () {
		return z;
	},
	L_: function () {
		return X;
	},
	TA: function () {
		return ec;
	},
	XI: function () {
		return er;
	},
	_w: function () {
		return K;
	},
	mG: function () {
		return Q;
	},
	mk: function () {
		return y;
	},
	r7: function () {
		return m;
	},
	r_: function () {
		return el;
	},
	v5: function () {
		return eo;
	},
	y0: function () {
		return eu;
	}
});
var r = n(182823),
	i = n(470079),
	a = n(651512),
	s = n(410914),
	o = n(846135),
	l = n(230012);
let u = 'default',
	c = '',
	d = new WeakMap();
function _(e) {
	if ((0, r.gn)()) {
		if ('default' === u) {
			let t = (0, r.r3)(e);
			(c = t.documentElement.style.webkitUserSelect), (t.documentElement.style.webkitUserSelect = 'none');
		}
		u = 'disabled';
	} else
		(e instanceof HTMLElement || e instanceof SVGElement) &&
			(d.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function E(e) {
	if ((0, r.gn)())
		'disabled' === u &&
			((u = 'restoring'),
			setTimeout(() => {
				(0, r.QB)(() => {
					if ('restoring' === u) {
						let t = (0, r.r3)(e);
						'none' === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = c || ''),
							(c = ''),
							(u = 'default');
					}
				});
			}, 300));
	else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && d.has(e)) {
		let t = d.get(e);
		'none' === e.style.userSelect && (e.style.userSelect = t),
			'' === e.getAttribute('style') && e.removeAttribute('style'),
			d.delete(e);
	}
}
let f = i.createContext({
	register: () => {}
});
f.displayName = 'PressResponderContext';
var h = new WeakMap();
class p {
	continuePropagation() {
		(0, o._)(this, h, !1);
	}
	get shouldStopPropagation() {
		return (0, a._)(this, h);
	}
	constructor(e, t, n) {
		(0, s._)(this, h, {
			writable: !0,
			value: void 0
		}),
			(0, o._)(this, h, !0),
			(this.type = e),
			(this.pointerType = t),
			(this.target = n.currentTarget),
			(this.shiftKey = n.shiftKey),
			(this.metaKey = n.metaKey),
			(this.ctrlKey = n.ctrlKey),
			(this.altKey = n.altKey);
	}
}
let I = Symbol('linkClicked');
function m(e) {
	let {
			onPress: t,
			onPressChange: n,
			onPressStart: a,
			onPressEnd: s,
			onPressUp: o,
			isDisabled: l,
			isPressed: u,
			preventFocusOnPress: c,
			shouldCancelOnPointerExit: d,
			allowTextSelectionOnPress: h,
			ref: m,
			...R
		} = (function (e) {
			let t = (0, i.useContext)(f);
			if (t) {
				let { register: n, ...i } = t;
				(e = (0, r.dG)(i, e)), n();
			}
			return (0, r.lE)(t, e.ref), e;
		})(e),
		[C, y] = (0, i.useState)(!1),
		D = (0, i.useRef)({
			isPressed: !1,
			ignoreEmulatedMouseEvents: !1,
			ignoreClickAfterPress: !1,
			didFirePressStart: !1,
			isTriggeringEvent: !1,
			activePointerId: null,
			target: null,
			isOverTarget: !1,
			pointerType: null
		}),
		{ addGlobalListener: L, removeAllGlobalListeners: b } = (0, r.xi)(),
		M = (0, r.iW)((e, t) => {
			let r = D.current;
			if (l || r.didFirePressStart) return !1;
			let i = !0;
			if (((r.isTriggeringEvent = !0), a)) {
				let n = new p('pressstart', t, e);
				a(n), (i = n.shouldStopPropagation);
			}
			return n && n(!0), (r.isTriggeringEvent = !1), (r.didFirePressStart = !0), y(!0), i;
		}),
		P = (0, r.iW)((e, r, i = !0) => {
			let a = D.current;
			if (!a.didFirePressStart) return !1;
			(a.ignoreClickAfterPress = !0), (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
			let o = !0;
			if (s) {
				let t = new p('pressend', r, e);
				s(t), (o = t.shouldStopPropagation);
			}
			if ((n && n(!1), y(!1), t && i && !l)) {
				let n = new p('press', r, e);
				t(n), o && (o = n.shouldStopPropagation);
			}
			return (a.isTriggeringEvent = !1), o;
		}),
		U = (0, r.iW)((e, t) => {
			let n = D.current;
			if (l) return !1;
			if (o) {
				n.isTriggeringEvent = !0;
				let r = new p('pressup', t, e);
				return o(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
			}
			return !0;
		}),
		w = (0, r.iW)((e) => {
			let t = D.current;
			t.isPressed &&
				t.target &&
				(t.isOverTarget && null != t.pointerType && P(A(t.target, e), t.pointerType, !1),
				(t.isPressed = !1),
				(t.isOverTarget = !1),
				(t.activePointerId = null),
				(t.pointerType = null),
				b(),
				!h && E(t.target));
		}),
		x = (0, r.iW)((e) => {
			d && w(e);
		}),
		G = (0, i.useMemo)(() => {
			let e = D.current,
				t = {
					onKeyDown(t) {
						if (g(t.nativeEvent, t.currentTarget) && t.currentTarget.contains(t.target)) {
							var i;
							O(t.target, t.key) && t.preventDefault();
							let a = !0;
							!e.isPressed &&
								!t.repeat &&
								((e.target = t.currentTarget),
								(e.isPressed = !0),
								(a = M(t, 'keyboard')),
								L((0, r.r3)(t.currentTarget), 'keyup', n, !1)),
								a && t.stopPropagation(),
								t.metaKey &&
									(0, r.V5)() &&
									(null === (i = e.metaKeyEvents) || void 0 === i || i.set(t.key, t.nativeEvent));
						} else 'Meta' === t.key && (e.metaKeyEvents = new Map());
					},
					onKeyUp(t) {
						g(t.nativeEvent, t.currentTarget) &&
							!t.repeat &&
							t.currentTarget.contains(t.target) &&
							e.target &&
							U(A(e.target, t), 'keyboard');
					},
					onClick(t) {
						if (
							(!t || t.currentTarget.contains(t.target)) &&
							t &&
							0 === t.button &&
							!e.isTriggeringEvent &&
							!r.nG.isOpening
						) {
							let n = !0;
							if (
								(l && t.preventDefault(),
								!e.ignoreClickAfterPress &&
									!e.ignoreEmulatedMouseEvents &&
									!e.isPressed &&
									('virtual' === e.pointerType || (0, r.Zj)(t.nativeEvent)))
							) {
								!l && !c && (0, r.Ao)(t.currentTarget);
								let e = M(t, 'virtual'),
									i = U(t, 'virtual'),
									a = P(t, 'virtual');
								n = e && i && a;
							}
							(e.ignoreEmulatedMouseEvents = !1), (e.ignoreClickAfterPress = !1), n && t.stopPropagation();
						}
					}
				},
				n = (t) => {
					var n, i, a;
					if (e.isPressed && e.target && g(t, e.target)) {
						O(t.target, t.key) && t.preventDefault();
						let n = t.target,
							a = P(A(e.target, t), 'keyboard', e.target.contains(n));
						b(),
							a && t.stopPropagation(),
							'Enter' !== t.key &&
								T(e.target) &&
								e.target.contains(n) &&
								!t[I] &&
								((t[I] = !0), (0, r.nG)(e.target, t, !1)),
							(e.isPressed = !1),
							null === (i = e.metaKeyEvents) || void 0 === i || i.delete(t.key);
					} else if ('Meta' === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
						let t = e.metaKeyEvents;
						for (let n of ((e.metaKeyEvents = void 0), t.values()))
							null === (a = e.target) || void 0 === a || a.dispatchEvent(new KeyboardEvent('keyup', n));
					}
				};
			if ('undefined' != typeof PointerEvent) {
				(t.onPointerDown = (t) => {
					if (0 !== t.button || !t.currentTarget.contains(t.target)) return;
					if ((0, r.cr)(t.nativeEvent)) {
						e.pointerType = 'virtual';
						return;
					}
					v(t.currentTarget) && t.preventDefault(), (e.pointerType = t.pointerType);
					let s = !0;
					!e.isPressed &&
						((e.isPressed = !0),
						(e.isOverTarget = !0),
						(e.activePointerId = t.pointerId),
						(e.target = t.currentTarget),
						!l && !c && (0, r.Ao)(t.currentTarget),
						!h && _(e.target),
						(s = M(t, e.pointerType)),
						L((0, r.r3)(t.currentTarget), 'pointermove', n, !1),
						L((0, r.r3)(t.currentTarget), 'pointerup', i, !1),
						L((0, r.r3)(t.currentTarget), 'pointercancel', a, !1)),
						s && t.stopPropagation();
				}),
					(t.onMouseDown = (e) => {
						e.currentTarget.contains(e.target) &&
							0 === e.button &&
							(v(e.currentTarget) && e.preventDefault(), e.stopPropagation());
					}),
					(t.onPointerUp = (t) => {
						t.currentTarget.contains(t.target) &&
							'virtual' !== e.pointerType &&
							0 === t.button &&
							N(t, t.currentTarget) &&
							U(t, e.pointerType || t.pointerType);
					});
				let n = (t) => {
						t.pointerId === e.activePointerId &&
							(e.target && N(t, e.target)
								? !e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !0), M(A(e.target, t), e.pointerType))
								: e.target &&
									e.isOverTarget &&
									null != e.pointerType &&
									((e.isOverTarget = !1), P(A(e.target, t), e.pointerType, !1), x(t)));
					},
					i = (t) => {
						t.pointerId === e.activePointerId &&
							e.isPressed &&
							0 === t.button &&
							e.target &&
							(N(t, e.target) && null != e.pointerType
								? P(A(e.target, t), e.pointerType)
								: e.isOverTarget && null != e.pointerType && P(A(e.target, t), e.pointerType, !1),
							(e.isPressed = !1),
							(e.isOverTarget = !1),
							(e.activePointerId = null),
							(e.pointerType = null),
							b(),
							!h && E(e.target));
					},
					a = (e) => {
						w(e);
					};
				t.onDragStart = (e) => {
					e.currentTarget.contains(e.target) && w(e);
				};
			} else {
				(t.onMouseDown = (t) => {
					if (0 === t.button && !!t.currentTarget.contains(t.target)) {
						if ((v(t.currentTarget) && t.preventDefault(), e.ignoreEmulatedMouseEvents)) {
							t.stopPropagation();
							return;
						}
						(e.isPressed = !0),
							(e.isOverTarget = !0),
							(e.target = t.currentTarget),
							(e.pointerType = (0, r.Zj)(t.nativeEvent) ? 'virtual' : 'mouse'),
							!l && !c && (0, r.Ao)(t.currentTarget),
							M(t, e.pointerType) && t.stopPropagation(),
							L((0, r.r3)(t.currentTarget), 'mouseup', n, !1);
					}
				}),
					(t.onMouseEnter = (t) => {
						if (!t.currentTarget.contains(t.target)) return;
						let n = !0;
						e.isPressed &&
							!e.ignoreEmulatedMouseEvents &&
							null != e.pointerType &&
							((e.isOverTarget = !0), (n = M(t, e.pointerType))),
							n && t.stopPropagation();
					}),
					(t.onMouseLeave = (t) => {
						if (!t.currentTarget.contains(t.target)) return;
						let n = !0;
						e.isPressed &&
							!e.ignoreEmulatedMouseEvents &&
							null != e.pointerType &&
							((e.isOverTarget = !1), (n = P(t, e.pointerType, !1)), x(t)),
							n && t.stopPropagation();
					}),
					(t.onMouseUp = (t) => {
						t.currentTarget.contains(t.target) &&
							!e.ignoreEmulatedMouseEvents &&
							0 === t.button &&
							U(t, e.pointerType || 'mouse');
					});
				let n = (t) => {
					if (0 === t.button) {
						if (((e.isPressed = !1), b(), e.ignoreEmulatedMouseEvents)) {
							e.ignoreEmulatedMouseEvents = !1;
							return;
						}
						e.target && N(t, e.target) && null != e.pointerType
							? P(A(e.target, t), e.pointerType)
							: e.target && e.isOverTarget && null != e.pointerType && P(A(e.target, t), e.pointerType, !1),
							(e.isOverTarget = !1);
					}
				};
				(t.onTouchStart = (t) => {
					if (!t.currentTarget.contains(t.target)) return;
					let n = (function (e) {
						let { targetTouches: t } = e;
						return t.length > 0 ? t[0] : null;
					})(t.nativeEvent);
					if (!!n)
						(e.activePointerId = n.identifier),
							(e.ignoreEmulatedMouseEvents = !0),
							(e.isOverTarget = !0),
							(e.isPressed = !0),
							(e.target = t.currentTarget),
							(e.pointerType = 'touch'),
							!l && !c && (0, r.Ao)(t.currentTarget),
							!h && _(e.target),
							M(t, e.pointerType) && t.stopPropagation(),
							L((0, r.kR)(t.currentTarget), 'scroll', i, !0);
				}),
					(t.onTouchMove = (t) => {
						if (!t.currentTarget.contains(t.target)) return;
						if (!e.isPressed) {
							t.stopPropagation();
							return;
						}
						let n = S(t.nativeEvent, e.activePointerId),
							r = !0;
						n && N(n, t.currentTarget)
							? !e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !0), (r = M(t, e.pointerType)))
							: e.isOverTarget && null != e.pointerType && ((e.isOverTarget = !1), (r = P(t, e.pointerType, !1)), x(t)),
							r && t.stopPropagation();
					}),
					(t.onTouchEnd = (t) => {
						if (!t.currentTarget.contains(t.target)) return;
						if (!e.isPressed) {
							t.stopPropagation();
							return;
						}
						let n = S(t.nativeEvent, e.activePointerId),
							r = !0;
						n && N(n, t.currentTarget) && null != e.pointerType
							? (U(t, e.pointerType), (r = P(t, e.pointerType)))
							: e.isOverTarget && null != e.pointerType && (r = P(t, e.pointerType, !1)),
							r && t.stopPropagation(),
							(e.isPressed = !1),
							(e.activePointerId = null),
							(e.isOverTarget = !1),
							(e.ignoreEmulatedMouseEvents = !0),
							e.target && !h && E(e.target),
							b();
					}),
					(t.onTouchCancel = (t) => {
						t.currentTarget.contains(t.target) && (t.stopPropagation(), e.isPressed && w(t));
					});
				let i = (t) => {
					e.isPressed &&
						t.target.contains(e.target) &&
						w({
							currentTarget: e.target,
							shiftKey: !1,
							ctrlKey: !1,
							metaKey: !1,
							altKey: !1
						});
				};
				t.onDragStart = (e) => {
					e.currentTarget.contains(e.target) && w(e);
				};
			}
			return t;
		}, [L, l, c, b, h, w, x, P, M, U]);
	return (
		(0, i.useEffect)(
			() => () => {
				var e;
				!h && E(null !== (e = D.current.target) && void 0 !== e ? e : void 0);
			},
			[h]
		),
		{
			isPressed: u || C,
			pressProps: (0, r.dG)(R, G)
		}
	);
}
function T(e) {
	return 'A' === e.tagName && e.hasAttribute('href');
}
function g(e, t) {
	let { key: n, code: i } = e,
		a = t.getAttribute('role');
	return (
		('Enter' === n || ' ' === n || 'Spacebar' === n || 'Space' === i) &&
		!(
			(t instanceof (0, r.kR)(t).HTMLInputElement && !C(t, n)) ||
			t instanceof (0, r.kR)(t).HTMLTextAreaElement ||
			t.isContentEditable
		) &&
		!(('link' === a || (!a && T(t))) && 'Enter' !== n)
	);
}
function S(e, t) {
	let n = e.changedTouches;
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		if (r.identifier === t) return r;
	}
	return null;
}
function A(e, t) {
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey
	};
}
function N(e, t) {
	var n, r, i;
	let a,
		s,
		o = t.getBoundingClientRect();
	let l =
		((a = 0),
		(s = 0),
		void 0 !== (n = e).width ? (a = n.width / 2) : void 0 !== n.radiusX && (a = n.radiusX),
		void 0 !== n.height ? (s = n.height / 2) : void 0 !== n.radiusY && (s = n.radiusY),
		{
			top: n.clientY - s,
			right: n.clientX + a,
			bottom: n.clientY + s,
			left: n.clientX - a
		});
	return (
		(r = o), (i = l), !(r.left > i.right) && !(i.left > r.right) && !(r.top > i.bottom) && !(i.top > r.bottom) && !0
	);
}
function v(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function O(e, t) {
	return e instanceof HTMLInputElement
		? !C(e, t)
		: e instanceof HTMLButtonElement
			? 'submit' !== e.type && 'reset' !== e.type
			: !T(e) && !0;
}
let R = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);
function C(e, t) {
	return 'checkbox' === e.type || 'radio' === e.type ? ' ' === t : R.has(e.type);
}
function y({ children: e }) {
	let t = (0, i.useMemo)(
		() => ({
			register: () => {}
		}),
		[]
	);
	return i.createElement(f.Provider, { value: t }, e);
}
class D {
	isDefaultPrevented() {
		return this.nativeEvent.defaultPrevented;
	}
	preventDefault() {
		(this.defaultPrevented = !0), this.nativeEvent.preventDefault();
	}
	stopPropagation() {
		this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
	}
	isPropagationStopped() {
		return !1;
	}
	persist() {}
	constructor(e, t) {
		(this.nativeEvent = t),
			(this.target = t.target),
			(this.currentTarget = t.currentTarget),
			(this.relatedTarget = t.relatedTarget),
			(this.bubbles = t.bubbles),
			(this.cancelable = t.cancelable),
			(this.defaultPrevented = t.defaultPrevented),
			(this.eventPhase = t.eventPhase),
			(this.isTrusted = t.isTrusted),
			(this.timeStamp = t.timeStamp),
			(this.type = e);
	}
}
function L(e) {
	let t = (0, i.useRef)({
		isFocused: !1,
		observer: null
	});
	(0, r.bt)(() => {
		let e = t.current;
		return () => {
			e.observer && (e.observer.disconnect(), (e.observer = null));
		};
	}, []);
	let n = (0, r.iW)((t) => {
		null == e || e(t);
	});
	return (0, i.useCallback)(
		(e) => {
			if (
				e.target instanceof HTMLButtonElement ||
				e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement ||
				e.target instanceof HTMLSelectElement
			) {
				t.current.isFocused = !0;
				let r = e.target;
				r.addEventListener(
					'focusout',
					(e) => {
						(t.current.isFocused = !1),
							r.disabled && n(new D('blur', e)),
							t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
					},
					{ once: !0 }
				),
					(t.current.observer = new MutationObserver(() => {
						if (t.current.isFocused && r.disabled) {
							var e;
							null === (e = t.current.observer) || void 0 === e || e.disconnect();
							let n = r === document.activeElement ? null : document.activeElement;
							r.dispatchEvent(new FocusEvent('blur', { relatedTarget: n })),
								r.dispatchEvent(
									new FocusEvent('focusout', {
										bubbles: !0,
										relatedTarget: n
									})
								);
						}
					})),
					t.current.observer.observe(r, {
						attributes: !0,
						attributeFilter: ['disabled']
					});
			}
		},
		[n]
	);
}
function b(e) {
	let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e,
		s = (0, i.useCallback)(
			(e) => {
				if (e.target === e.currentTarget) return r && r(e), a && a(!1), !0;
			},
			[r, a]
		),
		o = L(s),
		l = (0, i.useCallback)(
			(e) => {
				e.target === e.currentTarget && document.activeElement === e.target && (n && n(e), a && a(!0), o(e));
			},
			[a, n, o]
		);
	return {
		focusProps: {
			onFocus: !t && (n || a || r) ? l : void 0,
			onBlur: !t && (r || a) ? s : void 0
		}
	};
}
let M = null,
	P = new Set(),
	U = !1,
	w = !1,
	x = !1,
	G = {
		Tab: !0,
		Escape: !0
	};
function k(e, t) {
	for (let n of P) n(e, t);
}
function B(e) {
	var t;
	if (
		((w = !0),
		!(
			(t = e).metaKey ||
			(!(0, r.V5)() && t.altKey) ||
			t.ctrlKey ||
			'Control' === t.key ||
			'Shift' === t.key ||
			'Meta' === t.key
		))
	)
		(M = 'keyboard'), k('keyboard', e);
}
function F(e) {
	(M = 'pointer'), ('mousedown' === e.type || 'pointerdown' === e.type) && ((w = !0), k('pointer', e));
}
function V(e) {
	(0, r.Zj)(e) && ((w = !0), (M = 'virtual'));
}
function H(e) {
	e.target !== window && e.target !== document && (!w && !x && ((M = 'virtual'), k('virtual', e)), (w = !1), (x = !1));
}
function Z() {
	(w = !1), (x = !0);
}
function Y() {
	if ('undefined' == typeof window || U) return;
	let e = HTMLElement.prototype.focus;
	(HTMLElement.prototype.focus = function () {
		(w = !0), e.apply(this, arguments);
	}),
		document.addEventListener('keydown', B, !0),
		document.addEventListener('keyup', B, !0),
		document.addEventListener('click', V, !0),
		window.addEventListener('focus', H, !0),
		window.addEventListener('blur', Z, !1),
		'undefined' != typeof PointerEvent
			? (document.addEventListener('pointerdown', F, !0),
				document.addEventListener('pointermove', F, !0),
				document.addEventListener('pointerup', F, !0))
			: (document.addEventListener('mousedown', F, !0),
				document.addEventListener('mousemove', F, !0),
				document.addEventListener('mouseup', F, !0)),
		(U = !0);
}
function j() {
	return 'pointer' !== M;
}
function W() {
	return M;
}
function K(e) {
	(M = e), k(e, null);
}
function z() {
	Y();
	let [e, t] = (0, i.useState)(M);
	return (
		(0, i.useEffect)(() => {
			let e = () => {
				t(M);
			};
			return (
				P.add(e),
				() => {
					P.delete(e);
				}
			);
		}, []),
		(0, l.Av)() ? null : e
	);
}
'undefined' != typeof document &&
	('loading' !== document.readyState ? Y() : document.addEventListener('DOMContentLoaded', Y));
let q = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']);
function Q(e, t, n) {
	Y(),
		(0, i.useEffect)(() => {
			let t = (t, r) => {
				var i, a, s, o;
				if (
					((i = !!(null == n ? void 0 : n.isTextInput)),
					(a = t),
					(s = r),
					!(
						(i =
							i ||
							((null == s ? void 0 : s.target) instanceof HTMLInputElement &&
								!q.has(null == s ? void 0 : null === (o = s.target) || void 0 === o ? void 0 : o.type)) ||
							(null == s ? void 0 : s.target) instanceof HTMLTextAreaElement ||
							((null == s ? void 0 : s.target) instanceof HTMLElement &&
								(null == s ? void 0 : s.target.isContentEditable))) &&
						'keyboard' === a &&
						s instanceof KeyboardEvent
					) || G[s.key])
				)
					e(j());
			};
			return (
				P.add(t),
				() => {
					P.delete(t);
				}
			);
		}, t);
}
function X(e) {
	let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e,
		s = (0, i.useRef)({ isFocusWithin: !1 }),
		o = (0, i.useCallback)(
			(e) => {
				s.current.isFocusWithin &&
					!e.currentTarget.contains(e.relatedTarget) &&
					((s.current.isFocusWithin = !1), n && n(e), a && a(!1));
			},
			[n, a, s]
		),
		l = L(o),
		u = (0, i.useCallback)(
			(e) => {
				!s.current.isFocusWithin &&
					document.activeElement === e.target &&
					(r && r(e), a && a(!0), (s.current.isFocusWithin = !0), l(e));
			},
			[r, a, l]
		);
	return t
		? {
				focusWithinProps: {
					onFocus: void 0,
					onBlur: void 0
				}
			}
		: {
				focusWithinProps: {
					onFocus: u,
					onBlur: o
				}
			};
}
let $ = !1,
	J = 0;
function ee() {
	($ = !0),
		setTimeout(() => {
			$ = !1;
		}, 50);
}
function et(e) {
	'touch' === e.pointerType && ee();
}
function en() {
	if ('undefined' != typeof document)
		return (
			'undefined' != typeof PointerEvent
				? document.addEventListener('pointerup', et)
				: document.addEventListener('touchend', ee),
			J++,
			() => {
				!(--J > 0) &&
					('undefined' != typeof PointerEvent
						? document.removeEventListener('pointerup', et)
						: document.removeEventListener('touchend', ee));
			}
		);
}
function er(e) {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e,
		[s, o] = (0, i.useState)(!1),
		l = (0, i.useRef)({
			isHovered: !1,
			ignoreEmulatedMouseEvents: !1,
			pointerType: '',
			target: null
		}).current;
	(0, i.useEffect)(en, []);
	let { hoverProps: u, triggerHoverEnd: c } = (0, i.useMemo)(() => {
		let e = (e, r) => {
				if (((l.pointerType = r), a || 'touch' === r || l.isHovered || !e.currentTarget.contains(e.target))) return;
				l.isHovered = !0;
				let i = e.currentTarget;
				(l.target = i),
					t &&
						t({
							type: 'hoverstart',
							target: i,
							pointerType: r
						}),
					n && n(!0),
					o(!0);
			},
			i = (e, t) => {
				if (((l.pointerType = ''), (l.target = null), 'touch' === t || !l.isHovered)) return;
				l.isHovered = !1;
				let i = e.currentTarget;
				r &&
					r({
						type: 'hoverend',
						target: i,
						pointerType: t
					}),
					n && n(!1),
					o(!1);
			},
			s = {};
		return (
			'undefined' != typeof PointerEvent
				? ((s.onPointerEnter = (t) => {
						(!$ || 'mouse' !== t.pointerType) && e(t, t.pointerType);
					}),
					(s.onPointerLeave = (e) => {
						!a && e.currentTarget.contains(e.target) && i(e, e.pointerType);
					}))
				: ((s.onTouchStart = () => {
						l.ignoreEmulatedMouseEvents = !0;
					}),
					(s.onMouseEnter = (t) => {
						!l.ignoreEmulatedMouseEvents && !$ && e(t, 'mouse'), (l.ignoreEmulatedMouseEvents = !1);
					}),
					(s.onMouseLeave = (e) => {
						!a && e.currentTarget.contains(e.target) && i(e, 'mouse');
					})),
			{
				hoverProps: s,
				triggerHoverEnd: i
			}
		);
	}, [t, n, r, a, l]);
	return (
		(0, i.useEffect)(() => {
			a && c({ currentTarget: l.target }, l.pointerType);
		}, [a]),
		{
			hoverProps: u,
			isHovered: s
		}
	);
}
function ei(e) {
	let { ref: t, onInteractOutside: n, isDisabled: a, onInteractOutsideStart: s } = e,
		o = (0, i.useRef)({
			isPointerDown: !1,
			ignoreEmulatedMouseEvents: !1
		}),
		l = (0, r.iW)((e) => {
			n && ea(e, t) && (s && s(e), (o.current.isPointerDown = !0));
		}),
		u = (0, r.iW)((e) => {
			n && n(e);
		});
	(0, i.useEffect)(() => {
		let e = o.current;
		if (a) return;
		let n = t.current,
			i = (0, r.r3)(n);
		if ('undefined' != typeof PointerEvent) {
			let n = (n) => {
				e.isPointerDown && ea(n, t) && u(n), (e.isPointerDown = !1);
			};
			return (
				i.addEventListener('pointerdown', l, !0),
				i.addEventListener('pointerup', n, !0),
				() => {
					i.removeEventListener('pointerdown', l, !0), i.removeEventListener('pointerup', n, !0);
				}
			);
		}
		{
			let n = (n) => {
					e.ignoreEmulatedMouseEvents ? (e.ignoreEmulatedMouseEvents = !1) : e.isPointerDown && ea(n, t) && u(n),
						(e.isPointerDown = !1);
				},
				r = (n) => {
					(e.ignoreEmulatedMouseEvents = !0), e.isPointerDown && ea(n, t) && u(n), (e.isPointerDown = !1);
				};
			return (
				i.addEventListener('mousedown', l, !0),
				i.addEventListener('mouseup', n, !0),
				i.addEventListener('touchstart', l, !0),
				i.addEventListener('touchend', r, !0),
				() => {
					i.removeEventListener('mousedown', l, !0),
						i.removeEventListener('mouseup', n, !0),
						i.removeEventListener('touchstart', l, !0),
						i.removeEventListener('touchend', r, !0);
				}
			);
		}
	}, [t, a, l, u]);
}
function ea(e, t) {
	if (e.button > 0) return !1;
	if (e.target) {
		let t = e.target.ownerDocument;
		if (!t || !t.documentElement.contains(e.target) || e.target.closest('[data-react-aria-top-layer]')) return !1;
	}
	return t.current && !t.current.contains(e.target);
}
function es(e) {
	if (!e) return;
	let t = !0;
	return (n) => {
		e({
			...n,
			preventDefault() {
				n.preventDefault();
			},
			isDefaultPrevented: () => n.isDefaultPrevented(),
			stopPropagation() {
				console.error(
					'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.'
				);
			},
			continuePropagation() {
				t = !1;
			}
		}),
			t && n.stopPropagation();
	};
}
function eo(e) {
	return {
		keyboardProps: e.isDisabled
			? {}
			: {
					onKeyDown: es(e.onKeyDown),
					onKeyUp: es(e.onKeyUp)
				}
	};
}
function el(e) {
	let { onMoveStart: t, onMove: n, onMoveEnd: a } = e,
		s = (0, i.useRef)({
			didMove: !1,
			lastPosition: null,
			id: null
		}),
		{ addGlobalListener: o, removeGlobalListener: l } = (0, r.xi)(),
		u = (0, r.iW)((e, r, i, a) => {
			(0 !== i || 0 !== a) &&
				(!s.current.didMove &&
					((s.current.didMove = !0),
					null == t ||
						t({
							type: 'movestart',
							pointerType: r,
							shiftKey: e.shiftKey,
							metaKey: e.metaKey,
							ctrlKey: e.ctrlKey,
							altKey: e.altKey
						})),
				null == n ||
					n({
						type: 'move',
						pointerType: r,
						deltaX: i,
						deltaY: a,
						shiftKey: e.shiftKey,
						metaKey: e.metaKey,
						ctrlKey: e.ctrlKey,
						altKey: e.altKey
					}));
		}),
		c = (0, r.iW)((e, t) => {
			E(),
				s.current.didMove &&
					(null == a ||
						a({
							type: 'moveend',
							pointerType: t,
							shiftKey: e.shiftKey,
							metaKey: e.metaKey,
							ctrlKey: e.ctrlKey,
							altKey: e.altKey
						}));
		});
	return {
		moveProps: (0, i.useMemo)(() => {
			let e = {},
				t = () => {
					_(), (s.current.didMove = !1);
				};
			if ('undefined' == typeof PointerEvent) {
				let n = (e) => {
						if (0 === e.button) {
							var t, n, r, i;
							u(
								e,
								'mouse',
								e.pageX -
									(null !== (r = null === (t = s.current.lastPosition) || void 0 === t ? void 0 : t.pageX) &&
									void 0 !== r
										? r
										: 0),
								e.pageY -
									(null !== (i = null === (n = s.current.lastPosition) || void 0 === n ? void 0 : n.pageY) &&
									void 0 !== i
										? i
										: 0)
							),
								(s.current.lastPosition = {
									pageX: e.pageX,
									pageY: e.pageY
								});
						}
					},
					r = (e) => {
						0 === e.button && (c(e, 'mouse'), l(window, 'mousemove', n, !1), l(window, 'mouseup', r, !1));
					};
				e.onMouseDown = (e) => {
					0 === e.button &&
						(t(),
						e.stopPropagation(),
						e.preventDefault(),
						(s.current.lastPosition = {
							pageX: e.pageX,
							pageY: e.pageY
						}),
						o(window, 'mousemove', n, !1),
						o(window, 'mouseup', r, !1));
				};
				let i = (e) => {
						let t = [...e.changedTouches].findIndex(({ identifier: e }) => e === s.current.id);
						if (t >= 0) {
							var n, r, i, a;
							let { pageX: o, pageY: l } = e.changedTouches[t];
							u(
								e,
								'touch',
								o -
									(null !== (i = null === (n = s.current.lastPosition) || void 0 === n ? void 0 : n.pageX) &&
									void 0 !== i
										? i
										: 0),
								l -
									(null !== (a = null === (r = s.current.lastPosition) || void 0 === r ? void 0 : r.pageY) &&
									void 0 !== a
										? a
										: 0)
							),
								(s.current.lastPosition = {
									pageX: o,
									pageY: l
								});
						}
					},
					a = (e) => {
						[...e.changedTouches].findIndex(({ identifier: e }) => e === s.current.id) >= 0 &&
							(c(e, 'touch'),
							(s.current.id = null),
							l(window, 'touchmove', i),
							l(window, 'touchend', a),
							l(window, 'touchcancel', a));
					};
				e.onTouchStart = (e) => {
					if (0 === e.changedTouches.length || null != s.current.id) return;
					let { pageX: n, pageY: r, identifier: l } = e.changedTouches[0];
					t(),
						e.stopPropagation(),
						e.preventDefault(),
						(s.current.lastPosition = {
							pageX: n,
							pageY: r
						}),
						(s.current.id = l),
						o(window, 'touchmove', i, !1),
						o(window, 'touchend', a, !1),
						o(window, 'touchcancel', a, !1);
				};
			} else {
				let n = (e) => {
						if (e.pointerId === s.current.id) {
							var t, n, r, i;
							let a = e.pointerType || 'mouse';
							u(
								e,
								a,
								e.pageX -
									(null !== (r = null === (t = s.current.lastPosition) || void 0 === t ? void 0 : t.pageX) &&
									void 0 !== r
										? r
										: 0),
								e.pageY -
									(null !== (i = null === (n = s.current.lastPosition) || void 0 === n ? void 0 : n.pageY) &&
									void 0 !== i
										? i
										: 0)
							),
								(s.current.lastPosition = {
									pageX: e.pageX,
									pageY: e.pageY
								});
						}
					},
					r = (e) => {
						if (e.pointerId === s.current.id) {
							let t = e.pointerType || 'mouse';
							c(e, t),
								(s.current.id = null),
								l(window, 'pointermove', n, !1),
								l(window, 'pointerup', r, !1),
								l(window, 'pointercancel', r, !1);
						}
					};
				e.onPointerDown = (e) => {
					0 === e.button &&
						null == s.current.id &&
						(t(),
						e.stopPropagation(),
						e.preventDefault(),
						(s.current.lastPosition = {
							pageX: e.pageX,
							pageY: e.pageY
						}),
						(s.current.id = e.pointerId),
						o(window, 'pointermove', n, !1),
						o(window, 'pointerup', r, !1),
						o(window, 'pointercancel', r, !1));
				};
			}
			let n = (e, n, r) => {
				t(), u(e, 'keyboard', n, r), c(e, 'keyboard');
			};
			return (
				(e.onKeyDown = (e) => {
					switch (e.key) {
						case 'Left':
						case 'ArrowLeft':
							e.preventDefault(), e.stopPropagation(), n(e, -1, 0);
							break;
						case 'Right':
						case 'ArrowRight':
							e.preventDefault(), e.stopPropagation(), n(e, 1, 0);
							break;
						case 'Up':
						case 'ArrowUp':
							e.preventDefault(), e.stopPropagation(), n(e, 0, -1);
							break;
						case 'Down':
						case 'ArrowDown':
							e.preventDefault(), e.stopPropagation(), n(e, 0, 1);
					}
				}),
				e
			);
		}, [s, o, l, u, c])
	};
}
function eu(e, t) {
	let { onScroll: n, isDisabled: a } = e,
		s = (0, i.useCallback)(
			(e) => {
				!e.ctrlKey &&
					(e.preventDefault(),
					e.stopPropagation(),
					n &&
						n({
							deltaX: e.deltaX,
							deltaY: e.deltaY
						}));
			},
			[n]
		);
	(0, r.zX)(t, 'wheel', a ? void 0 : s);
}
function ec(e) {
	let {
			isDisabled: t,
			onLongPressStart: n,
			onLongPressEnd: a,
			onLongPress: s,
			threshold: o = 500,
			accessibilityDescription: l
		} = e,
		u = (0, i.useRef)(),
		{ addGlobalListener: c, removeGlobalListener: d } = (0, r.xi)(),
		{ pressProps: _ } = m({
			isDisabled: t,
			onPressStart(e) {
				if (
					(e.continuePropagation(),
					('mouse' === e.pointerType || 'touch' === e.pointerType) &&
						(n &&
							n({
								...e,
								type: 'longpressstart'
							}),
						(u.current = setTimeout(() => {
							e.target.dispatchEvent(new PointerEvent('pointercancel', { bubbles: !0 })),
								s &&
									s({
										...e,
										type: 'longpress'
									}),
								(u.current = void 0);
						}, o)),
						'touch' === e.pointerType))
				) {
					let t = (e) => {
						e.preventDefault();
					};
					c(e.target, 'contextmenu', t, { once: !0 }),
						c(
							window,
							'pointerup',
							() => {
								setTimeout(() => {
									d(e.target, 'contextmenu', t);
								}, 30);
							},
							{ once: !0 }
						);
				}
			},
			onPressEnd(e) {
				u.current && clearTimeout(u.current),
					a &&
						('mouse' === e.pointerType || 'touch' === e.pointerType) &&
						a({
							...e,
							type: 'longpressend'
						});
			}
		}),
		E = (0, r.PK)(s && !t ? l : void 0);
	return { longPressProps: (0, r.dG)(_, E) };
}
