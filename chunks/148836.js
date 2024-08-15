n.d(t, {
	Cs: function () {
		return E;
	},
	_t: function () {
		return I;
	},
	dp: function () {
		return p;
	},
	gq: function () {
		return _;
	},
	ip: function () {
		return d;
	}
});
var r = n(699581),
	i = n(470079),
	a = n(706682),
	s = n(182823),
	o = n(612001),
	l = n(616073);
function u(e) {
	return (0, s.ad)() ? e.altKey : e.ctrlKey;
}
function c(e) {
	return (0, s.V5)() ? e.metaKey : e.ctrlKey;
}
function d(e) {
	let { keyboardDelegate: t, selectionManager: n, onTypeSelect: r } = e,
		a = (0, i.useRef)({
			search: '',
			timeout: null
		}).current;
	return {
		typeSelectProps: {
			onKeyDownCapture: t.getKeyForSearch
				? (e) => {
						let i = (function (e) {
							return 1 !== e.length && /^[A-Z]/i.test(e) ? '' : e;
						})(e.key);
						if (!i || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
						' ' === i &&
							a.search.trim().length > 0 &&
							(e.preventDefault(), !('continuePropagation' in e) && e.stopPropagation()),
							(a.search += i);
						let s = t.getKeyForSearch(a.search, n.focusedKey);
						null == s && (s = t.getKeyForSearch(a.search)),
							null != s && (n.setFocusedKey(s), r && r(s)),
							clearTimeout(a.timeout),
							(a.timeout = setTimeout(() => {
								a.search = '';
							}, 1000));
					}
				: null
		}
	};
}
function _(e) {
	let t,
		{
			selectionManager: n,
			keyboardDelegate: _,
			ref: E,
			autoFocus: f = !1,
			shouldFocusWrap: h = !1,
			disallowEmptySelection: p = !1,
			disallowSelectAll: I = !1,
			selectOnFocus: m = 'replace' === n.selectionBehavior,
			disallowTypeAhead: T = !1,
			shouldUseVirtualFocus: g,
			allowsTabNavigation: S = !1,
			isVirtualized: A,
			scrollRef: N = E,
			linkBehavior: v = 'action'
		} = e,
		{ direction: O } = (0, l.bU)(),
		R = (0, s.tv)(),
		C = (0, i.useRef)({
			top: 0,
			left: 0
		});
	(0, s.zX)(
		N,
		'scroll',
		A
			? null
			: () => {
					C.current = {
						top: N.current.scrollTop,
						left: N.current.scrollLeft
					};
				}
	);
	let y = (0, i.useRef)(f);
	(0, i.useEffect)(() => {
		if (y.current) {
			let e = null;
			'first' === f && (e = _.getFirstKey()), 'last' === f && (e = _.getLastKey());
			let t = n.selectedKeys;
			if (t.size) {
				for (let r of t)
					if (n.canSelectItem(r)) {
						e = r;
						break;
					}
			}
			n.setFocused(!0), n.setFocusedKey(e), null == e && !g && (0, a.ex)(E.current);
		}
	}, []);
	let D = (0, i.useRef)(n.focusedKey);
	(0, i.useEffect)(() => {
		let e = (0, o.Jz)();
		if (n.isFocused && null != n.focusedKey && (null == N ? void 0 : N.current)) {
			let t = N.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
			t &&
				('keyboard' === e || y.current) &&
				(!A && (0, s.zT)(N.current, t), (0, s.Gt)(t, { containingElement: E.current }));
		}
		n.isFocused && null == n.focusedKey && null != D.current && (0, a.ex)(E.current),
			(D.current = n.focusedKey),
			(y.current = !1);
	}, [A, N, n.focusedKey, n.isFocused, E]);
	let L = {
			onKeyDown: (e) => {
				var t, i, o, l, d, f, T, g;
				if ((e.altKey && 'Tab' === e.key && e.preventDefault(), !E.current.contains(e.target))) return;
				let A = (t, i) => {
					if (null != t) {
						if (n.isLink(t) && 'selection' === v && m && !u(e)) {
							(0, r.flushSync)(() => {
								n.setFocusedKey(t, i);
							});
							let a = N.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`);
							R.open(a, e);
							return;
						}
						n.setFocusedKey(t, i),
							(!n.isLink(t) || 'override' !== v) &&
								(e.shiftKey && 'multiple' === n.selectionMode
									? n.extendSelection(t)
									: m && !u(e) && n.replaceSelection(t));
					}
				};
				switch (e.key) {
					case 'ArrowDown':
						if (_.getKeyBelow) {
							e.preventDefault();
							let r =
								null != n.focusedKey
									? _.getKeyBelow(n.focusedKey)
									: null === (t = _.getFirstKey) || void 0 === t
										? void 0
										: t.call(_);
							null == r && h && (r = null === (i = _.getFirstKey) || void 0 === i ? void 0 : i.call(_, n.focusedKey)),
								A(r);
						}
						break;
					case 'ArrowUp':
						if (_.getKeyAbove) {
							e.preventDefault();
							let t =
								null != n.focusedKey
									? _.getKeyAbove(n.focusedKey)
									: null === (o = _.getLastKey) || void 0 === o
										? void 0
										: o.call(_);
							null == t && h && (t = null === (l = _.getLastKey) || void 0 === l ? void 0 : l.call(_, n.focusedKey)),
								A(t);
						}
						break;
					case 'ArrowLeft':
						if (_.getKeyLeftOf) {
							e.preventDefault();
							let t = _.getKeyLeftOf(n.focusedKey);
							null == t &&
								h &&
								(t =
									'rtl' === O
										? null === (d = _.getFirstKey) || void 0 === d
											? void 0
											: d.call(_, n.focusedKey)
										: null === (f = _.getLastKey) || void 0 === f
											? void 0
											: f.call(_, n.focusedKey)),
								A(t, 'rtl' === O ? 'first' : 'last');
						}
						break;
					case 'ArrowRight':
						if (_.getKeyRightOf) {
							e.preventDefault();
							let t = _.getKeyRightOf(n.focusedKey);
							null == t &&
								h &&
								(t =
									'rtl' === O
										? null === (T = _.getLastKey) || void 0 === T
											? void 0
											: T.call(_, n.focusedKey)
										: null === (g = _.getFirstKey) || void 0 === g
											? void 0
											: g.call(_, n.focusedKey)),
								A(t, 'rtl' === O ? 'last' : 'first');
						}
						break;
					case 'Home':
						if (_.getFirstKey) {
							e.preventDefault();
							let t = _.getFirstKey(n.focusedKey, c(e));
							n.setFocusedKey(t),
								c(e) && e.shiftKey && 'multiple' === n.selectionMode
									? n.extendSelection(t)
									: m && n.replaceSelection(t);
						}
						break;
					case 'End':
						if (_.getLastKey) {
							e.preventDefault();
							let t = _.getLastKey(n.focusedKey, c(e));
							n.setFocusedKey(t),
								c(e) && e.shiftKey && 'multiple' === n.selectionMode
									? n.extendSelection(t)
									: m && n.replaceSelection(t);
						}
						break;
					case 'PageDown':
						_.getKeyPageBelow && (e.preventDefault(), A(_.getKeyPageBelow(n.focusedKey)));
						break;
					case 'PageUp':
						_.getKeyPageAbove && (e.preventDefault(), A(_.getKeyPageAbove(n.focusedKey)));
						break;
					case 'a':
						c(e) && 'multiple' === n.selectionMode && !0 !== I && (e.preventDefault(), n.selectAll());
						break;
					case 'Escape':
						e.preventDefault(), !p && n.clearSelection();
						break;
					case 'Tab':
						if (!S) {
							if (e.shiftKey) E.current.focus();
							else {
								let e,
									t,
									n = (0, a.QL)(E.current, { tabbable: !0 });
								do (t = n.lastChild()) && (e = t);
								while (t);
								e && !e.contains(document.activeElement) && (0, s.Ao)(e);
							}
						}
				}
			},
			onFocus: (e) => {
				if (n.isFocused) {
					!e.currentTarget.contains(e.target) && n.setFocused(!1);
					return;
				}
				if (e.currentTarget.contains(e.target)) {
					if ((n.setFocused(!0), null == n.focusedKey)) {
						var t, r;
						let i = (e) => {
								null != e && (n.setFocusedKey(e), m && n.replaceSelection(e));
							},
							a = e.relatedTarget;
						a && e.currentTarget.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING
							? i(null !== (t = n.lastSelectedKey) && void 0 !== t ? t : _.getLastKey())
							: i(null !== (r = n.firstSelectedKey) && void 0 !== r ? r : _.getFirstKey());
					} else !A && ((N.current.scrollTop = C.current.top), (N.current.scrollLeft = C.current.left));
					if (!A && null != n.focusedKey) {
						let e = N.current.querySelector(`[data-key="${CSS.escape(n.focusedKey.toString())}"]`);
						e &&
							(!e.contains(document.activeElement) && (0, s.Ao)(e),
							'keyboard' === (0, o.Jz)() && (0, s.Gt)(e, { containingElement: E.current }));
					}
				}
			},
			onBlur: (e) => {
				!e.currentTarget.contains(e.relatedTarget) && n.setFocused(!1);
			},
			onMouseDown(e) {
				N.current === e.target && e.preventDefault();
			}
		},
		{ typeSelectProps: b } = d({
			keyboardDelegate: _,
			selectionManager: n
		});
	return (
		!T && (L = (0, s.dG)(b, L)),
		!g && (t = null == n.focusedKey ? 0 : -1),
		{
			collectionProps: {
				...L,
				tabIndex: t
			}
		}
	);
}
function E(e) {
	let {
			selectionManager: t,
			key: n,
			ref: r,
			shouldSelectOnPressUp: l,
			shouldUseVirtualFocus: d,
			focus: _,
			isDisabled: E,
			onAction: p,
			allowsDifferentPressOrigin: I,
			linkBehavior: m = 'action'
		} = e,
		T = (0, s.tv)(),
		g = (e) => {
			if ('keyboard' === e.pointerType && u(e)) t.toggleSelection(n);
			else {
				if ('none' === t.selectionMode) return;
				if (t.isLink(n)) {
					if ('selection' === m) {
						T.open(r.current, e), t.setSelectedKeys(t.selectedKeys);
						return;
					}
					if ('override' === m || 'none' === m) return;
				}
				'single' === t.selectionMode
					? t.isSelected(n) && !t.disallowEmptySelection
						? t.toggleSelection(n)
						: t.replaceSelection(n)
					: e && e.shiftKey
						? t.extendSelection(n)
						: 'toggle' === t.selectionBehavior ||
							  (e && (c(e) || 'touch' === e.pointerType || 'virtual' === e.pointerType))
							? t.toggleSelection(n)
							: t.replaceSelection(n);
			}
		};
	(0, i.useEffect)(() => {
		n === t.focusedKey && t.isFocused && !d && (_ ? _() : document.activeElement !== r.current && (0, a.ex)(r.current));
	}, [r, n, t.focusedKey, t.childFocusStrategy, t.isFocused, d]),
		(E = E || t.isDisabled(n));
	let S = {};
	d || E
		? E &&
			(S.onMouseDown = (e) => {
				e.preventDefault();
			})
		: (S = {
				tabIndex: n === t.focusedKey ? 0 : -1,
				onFocus(e) {
					e.target === r.current && t.setFocusedKey(n);
				}
			});
	let A = t.isLink(n) && 'override' === m,
		N = t.isLink(n) && 'selection' !== m && 'none' !== m,
		v = !E && t.canSelectItem(n) && !A,
		O = (p || N) && !E,
		R = O && ('replace' === t.selectionBehavior ? !v : !v || t.isEmpty),
		C = O && v && 'replace' === t.selectionBehavior,
		y = R || C,
		D = (0, i.useRef)(null),
		L = y && v,
		b = (0, i.useRef)(!1),
		M = (0, i.useRef)(!1),
		P = (e) => {
			p && p(), N && T.open(r.current, e);
		},
		U = {};
	l
		? ((U.onPressStart = (e) => {
				(D.current = e.pointerType), (b.current = L), 'keyboard' === e.pointerType && (!y || h()) && g(e);
			}),
			I
				? ((U.onPressUp = R
						? null
						: (e) => {
								'keyboard' !== e.pointerType && v && g(e);
							}),
					(U.onPress = R ? P : null))
				: (U.onPress = (e) => {
						R || (C && 'mouse' !== e.pointerType)
							? ('keyboard' !== e.pointerType || !!f()) && P(e)
							: 'keyboard' !== e.pointerType && v && g(e);
					}))
		: ((U.onPressStart = (e) => {
				(D.current = e.pointerType),
					(b.current = L),
					(M.current = R),
					v && (('mouse' === e.pointerType && !R) || ('keyboard' === e.pointerType && (!O || h()))) && g(e);
			}),
			(U.onPress = (e) => {
				('touch' === e.pointerType ||
					'pen' === e.pointerType ||
					'virtual' === e.pointerType ||
					('keyboard' === e.pointerType && y && f()) ||
					('mouse' === e.pointerType && M.current)) &&
					(y ? P(e) : v && g(e));
			})),
		(S['data-key'] = n),
		(U.preventFocusOnPress = d);
	let { pressProps: w, isPressed: x } = (0, o.r7)(U),
		G = C
			? (e) => {
					'mouse' === D.current && (e.stopPropagation(), e.preventDefault(), P(e));
				}
			: void 0,
		{ longPressProps: k } = (0, o.TA)({
			isDisabled: !L,
			onLongPress(e) {
				'touch' === e.pointerType && (g(e), t.setSelectionBehavior('toggle'));
			}
		}),
		B = t.isLink(n)
			? (e) => {
					!s.nG.isOpening && e.preventDefault();
				}
			: void 0;
	return {
		itemProps: (0, s.dG)(S, v || R ? w : {}, L ? k : {}, {
			onDoubleClick: G,
			onDragStartCapture: (e) => {
				'touch' === D.current && b.current && e.preventDefault();
			},
			onClick: B
		}),
		isPressed: x,
		isSelected: t.isSelected(n),
		isFocused: t.isFocused && t.focusedKey === n,
		isDisabled: E,
		allowsSelection: v,
		hasAction: y
	};
}
function f() {
	let e = window.event;
	return (null == e ? void 0 : e.key) === 'Enter';
}
function h() {
	let e = window.event;
	return (null == e ? void 0 : e.key) === ' ' || (null == e ? void 0 : e.code) === 'Space';
}
class p {
	getNextKey(e) {
		for (e = this.collection.getKeyAfter(e); null != e; ) {
			if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
			e = this.collection.getKeyAfter(e);
		}
		return null;
	}
	getPreviousKey(e) {
		for (e = this.collection.getKeyBefore(e); null != e; ) {
			if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
			e = this.collection.getKeyBefore(e);
		}
		return null;
	}
	findKey(e, t, n) {
		let r = this.getItem(e);
		if (!r) return null;
		let i = r.getBoundingClientRect();
		do (e = t(e)), (r = this.getItem(e));
		while (r && n(i, r.getBoundingClientRect()));
		return e;
	}
	isSameRow(e, t) {
		return e.top === t.top || e.left !== t.left;
	}
	isSameColumn(e, t) {
		return e.left === t.left || e.top !== t.top;
	}
	getKeyBelow(e) {
		return 'grid' === this.layout && 'vertical' === this.orientation
			? this.findKey(e, (e) => this.getNextKey(e), this.isSameRow)
			: this.getNextKey(e);
	}
	getKeyAbove(e) {
		return 'grid' === this.layout && 'vertical' === this.orientation
			? this.findKey(e, (e) => this.getPreviousKey(e), this.isSameRow)
			: this.getPreviousKey(e);
	}
	getNextColumn(e, t) {
		return t ? this.getPreviousKey(e) : this.getNextKey(e);
	}
	getKeyRightOf(e) {
		if ('grid' === this.layout)
			return 'vertical' === this.orientation
				? this.getNextColumn(e, 'rtl' === this.direction)
				: this.findKey(e, (e) => this.getNextColumn(e, 'rtl' === this.direction), this.isSameColumn);
		return 'horizontal' === this.orientation ? this.getNextColumn(e, 'rtl' === this.direction) : null;
	}
	getKeyLeftOf(e) {
		if ('grid' === this.layout)
			return 'vertical' === this.orientation
				? this.getNextColumn(e, 'ltr' === this.direction)
				: this.findKey(e, (e) => this.getNextColumn(e, 'ltr' === this.direction), this.isSameColumn);
		return 'horizontal' === this.orientation ? this.getNextColumn(e, 'ltr' === this.direction) : null;
	}
	getFirstKey() {
		let e = this.collection.getFirstKey();
		for (; null != e; ) {
			if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
			e = this.collection.getKeyAfter(e);
		}
		return null;
	}
	getLastKey() {
		let e = this.collection.getLastKey();
		for (; null != e; ) {
			if ('item' === this.collection.getItem(e).type && !this.disabledKeys.has(e)) return e;
			e = this.collection.getKeyBefore(e);
		}
		return null;
	}
	getItem(e) {
		return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`);
	}
	getKeyPageAbove(e) {
		let t = this.ref.current,
			n = this.getItem(e);
		if (!n) return null;
		if (!(0, s.a9)(t)) return this.getFirstKey();
		let r = t.getBoundingClientRect(),
			i = n.getBoundingClientRect();
		if ('horizontal' === this.orientation) {
			let a = r.x - t.scrollLeft,
				s = Math.max(0, i.x - a + i.width - r.width);
			for (; n && i.x - a > s; )
				i =
					null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
		} else {
			let a = r.y - t.scrollTop,
				s = Math.max(0, i.y - a + i.height - r.height);
			for (; n && i.y - a > s; )
				i =
					null == (n = null == (e = this.getKeyAbove(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
		}
		return null != e ? e : this.getFirstKey();
	}
	getKeyPageBelow(e) {
		let t = this.ref.current,
			n = this.getItem(e);
		if (!n) return null;
		if (!(0, s.a9)(t)) return this.getLastKey();
		let r = t.getBoundingClientRect(),
			i = n.getBoundingClientRect();
		if ('horizontal' === this.orientation) {
			let a = r.x - t.scrollLeft,
				s = Math.min(t.scrollWidth, i.x - a - i.width + r.width);
			for (; n && i.x - a < s; )
				i =
					null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
		} else {
			let a = r.y - t.scrollTop,
				s = Math.min(t.scrollHeight, i.y - a - i.height + r.height);
			for (; n && i.y - a < s; )
				i =
					null == (n = null == (e = this.getKeyBelow(e)) ? null : this.getItem(e)) ? void 0 : n.getBoundingClientRect();
		}
		return null != e ? e : this.getLastKey();
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let n = this.collection,
			r = t || this.getFirstKey();
		for (; null != r; ) {
			let t = n.getItem(r),
				i = t.textValue.slice(0, e.length);
			if (t.textValue && 0 === this.collator.compare(i, e)) return r;
			r = this.getKeyBelow(r);
		}
		return null;
	}
	constructor(...e) {
		if (1 === e.length) {
			let t = e[0];
			(this.collection = t.collection),
				(this.ref = t.ref),
				(this.collator = t.collator),
				(this.disabledKeys = t.disabledKeys || new Set()),
				(this.orientation = t.orientation),
				(this.direction = t.direction),
				(this.layout = t.layout || 'stack');
		} else
			(this.collection = e[0]),
				(this.disabledKeys = e[1]),
				(this.ref = e[2]),
				(this.collator = e[3]),
				(this.layout = 'stack'),
				(this.orientation = 'vertical');
		'stack' === this.layout &&
			'vertical' === this.orientation &&
			((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
	}
}
function I(e) {
	let { selectionManager: t, collection: n, disabledKeys: r, ref: a, keyboardDelegate: s } = e,
		o = (0, l.Xe)({
			usage: 'search',
			sensitivity: 'base'
		}),
		u = t.disabledBehavior,
		c = (0, i.useMemo)(() => s || new p(n, 'selection' === u ? new Set() : r, a, o), [s, n, r, a, o, u]),
		{ collectionProps: d } = _({
			...e,
			ref: a,
			selectionManager: t,
			keyboardDelegate: c
		});
	return { listProps: d };
}
