n.d(t, {
	BU: function () {
		return tR;
	},
	CX: function () {
		return tc;
	},
	F3: function () {
		return eT;
	},
	UE: function () {
		return tI;
	},
	_7: function () {
		return eM;
	},
	mH: function () {
		return tg;
	},
	vt: function () {
		return eV;
	}
});
var r = n(653603),
	i = n.n(r),
	a = n(889678),
	s = n.n(a),
	o = n(123763),
	l = n.n(o),
	u = n(470079),
	c = n(367989),
	d = n(327432),
	_ = n(690096),
	E = n(247187),
	f = n(699581);
function h(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
function p(e, t) {
	if (null == e) return {};
	var n,
		r,
		i = (function (e, t) {
			if (null == e) return {};
			var n,
				r,
				i = {},
				a = Object.keys(e);
			for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && (i[n] = e[n]);
			return i;
		})(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) {
			if (((n = a[r]), !(t.indexOf(n) >= 0))) Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
		}
	}
	return i;
}
var I = 0;
class m {
	constructor() {
		this.id = ''.concat(I++);
	}
}
var T = new WeakMap(),
	g = new WeakMap(),
	S = new WeakMap(),
	A = new WeakMap(),
	N = new WeakMap(),
	v = new WeakMap(),
	O = new WeakMap(),
	R = new WeakMap(),
	C = new WeakMap(),
	y = new WeakMap(),
	D = new WeakMap(),
	L = new WeakMap(),
	b = new WeakMap(),
	M = new WeakMap(),
	P = new WeakMap(),
	U = new WeakMap(),
	w = new WeakMap(),
	x = new WeakMap(),
	G = new WeakMap(),
	k = new WeakMap(),
	B = new WeakMap(),
	F = Symbol('placeholder'),
	V = Symbol('mark-placeholder'),
	H = globalThis.Text,
	Z = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
	Y = (e) => W(e) && 8 === e.nodeType,
	j = (e) => W(e) && 1 === e.nodeType,
	W = (e) => {
		var t = Z(e);
		return !!t && e instanceof t.Node;
	},
	K = (e) => {
		var t = e && e.anchorNode && Z(e.anchorNode);
		return !!t && e instanceof t.Selection;
	},
	z = (e) => W(e) && 3 === e.nodeType,
	q = (e) => e.clipboardData && '' !== e.clipboardData.getData('text/plain') && 1 === e.clipboardData.types.length,
	Q = (e) => {
		var [t, n] = e;
		if (j(t) && t.childNodes.length) {
			var r = n === t.childNodes.length,
				i = r ? n - 1 : n;
			for ([t, i] = $(t, i, r ? 'backward' : 'forward'), r = i < n; j(t) && t.childNodes.length; ) {
				var a = r ? t.childNodes.length - 1 : 0;
				t = J(t, a, r ? 'backward' : 'forward');
			}
			n = r && null != t.textContent ? t.textContent.length : 0;
		}
		return [t, n];
	},
	X = (e) => {
		for (var t = e && e.parentNode; t; ) {
			if ('[object ShadowRoot]' === t.toString()) return !0;
			t = t.parentNode;
		}
		return !1;
	},
	$ = (e, t, n) => {
		for (
			var { childNodes: r } = e, i = r[t], a = t, s = !1, o = !1;
			(Y(i) || (j(i) && 0 === i.childNodes.length) || (j(i) && 'false' === i.getAttribute('contenteditable'))) &&
			(!s || !o);

		) {
			if (a >= r.length) {
				(s = !0), (a = t - 1), (n = 'backward');
				continue;
			}
			if (a < 0) {
				(o = !0), (a = t + 1), (n = 'forward');
				continue;
			}
			(i = r[a]), (t = a), (a += 'forward' === n ? 1 : -1);
		}
		return [i, t];
	},
	J = (e, t, n) => {
		var [r] = $(e, t, n);
		return r;
	},
	ee = (e) => {
		var t = '';
		if (z(e) && e.nodeValue) return e.nodeValue;
		if (j(e)) {
			for (var n of Array.from(e.childNodes)) t += ee(n);
			var r = getComputedStyle(e).getPropertyValue('display');
			('block' === r || 'list' === r || 'BR' === e.tagName) && (t += '\n');
		}
		return t;
	},
	et = /data-slate-fragment="(.+?)"/m,
	en = (e) => {
		var [, t] = e.getData('text/html').match(et) || [];
		return t;
	},
	er = (e, t, n) => {
		var { target: r } = t;
		if (j(r) && r.matches('[contentEditable="false"]')) return !1;
		var { document: i } = eT.getWindow(e);
		if (i.contains(r)) return eT.hasDOMNode(e, r, { editable: !0 });
		var a = n.find((e) => {
			var { addedNodes: t, removedNodes: n } = e;
			for (var i of t) if (i === r || i.contains(r)) return !0;
			for (var a of n) if (a === r || a.contains(r)) return !0;
		});
		return !!a && a !== t && er(e, a, n);
	},
	ei = parseInt(u.version.split('.')[0], 10) >= 17,
	ea =
		'undefined' != typeof navigator &&
		'undefined' != typeof window &&
		/iPad|iPhone|iPod/.test(navigator.userAgent) &&
		!window.MSStream,
	es = 'undefined' != typeof navigator && /Mac OS X/.test(navigator.userAgent),
	eo = 'undefined' != typeof navigator && /Android/.test(navigator.userAgent),
	el = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
	eu = 'undefined' != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
	ec = 'undefined' != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
	ed = 'undefined' != typeof navigator && /Chrome/i.test(navigator.userAgent),
	e_ = 'undefined' != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
	eE = eo && 'undefined' != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
	ef =
		'undefined' != typeof navigator &&
		/^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
	eh = 'undefined' != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
	ep = 'undefined' != typeof navigator && /.*Wechat/.test(navigator.userAgent),
	eI = !!('undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
	em =
		(!e_ || !eE) &&
		!ec &&
		'undefined' != typeof globalThis &&
		globalThis.InputEvent &&
		'function' == typeof globalThis.InputEvent.prototype.getTargetRanges,
	eT = {
		isComposing: (e) => !!L.get(e),
		getWindow(e) {
			var t = S.get(e);
			if (!t) throw Error('Unable to find a host window element for this editor');
			return t;
		},
		findKey(e, t) {
			var n = R.get(t);
			return !n && ((n = new m()), R.set(t, n)), n;
		},
		findPath(e, t) {
			for (var n = [], r = t; ; ) {
				var i = g.get(r);
				if (null == i) {
					if (d.ML.isEditor(r)) return n;
					break;
				}
				var a = T.get(r);
				if (null == a) break;
				n.unshift(a), (r = i);
			}
			throw Error('Unable to find the path for Slate node: '.concat(d.o4.stringify(t)));
		},
		findDocumentOrShadowRoot(e) {
			var t = eT.toDOMNode(e, e),
				n = t.getRootNode();
			return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
		},
		isFocused: (e) => !!D.get(e),
		isReadOnly: (e) => !!y.get(e),
		blur(e) {
			var t = eT.toDOMNode(e, e),
				n = eT.findDocumentOrShadowRoot(e);
			D.set(e, !1), n.activeElement === t && t.blur();
		},
		focus(e) {
			var t = eT.toDOMNode(e, e),
				n = eT.findDocumentOrShadowRoot(e);
			D.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
		},
		deselect(e) {
			var { selection: t } = e,
				n = eT.findDocumentOrShadowRoot(e).getSelection();
			n && n.rangeCount > 0 && n.removeAllRanges(), t && d.YR.deselect(e);
		},
		hasDOMNode(e, t) {
			var n,
				r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
				{ editable: i = !1 } = r,
				a = eT.toDOMNode(e, e);
			try {
				n = j(t) ? t : t.parentElement;
			} catch (e) {
				if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
			}
			return (
				!!n &&
				n.closest('[data-slate-editor]') === a &&
				(!i ||
					!!n.isContentEditable ||
					('boolean' == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a) ||
					!!n.getAttribute('data-slate-zero-width'))
			);
		},
		insertData(e, t) {
			e.insertData(t);
		},
		insertFragmentData: (e, t) => e.insertFragmentData(t),
		insertTextData: (e, t) => e.insertTextData(t),
		setFragmentData(e, t, n) {
			e.setFragmentData(t, n);
		},
		toDOMNode(e, t) {
			var n = C.get(e),
				r = d.ML.isEditor(t) ? A.get(e) : null == n ? void 0 : n.get(eT.findKey(e, t));
			if (!r) throw Error('Cannot resolve a DOM node from Slate node: '.concat(d.o4.stringify(t)));
			return r;
		},
		toDOMPoint(e, t) {
			var [n] = d.ML.node(e, t.path),
				r = eT.toDOMNode(e, n);
			d.ML.void(e, { at: t }) &&
				(t = {
					path: t.path,
					offset: 0
				});
			for (
				var i = Array.from(r.querySelectorAll('[data-slate-string], [data-slate-zero-width]')), a = 0, s = 0;
				s < i.length;
				s++
			) {
				var o = i[s],
					l = o.childNodes[0];
				if (null != l && null != l.textContent) {
					var { length: u } = l.textContent,
						c = o.getAttribute('data-slate-length'),
						_ = a + (null == c ? u : parseInt(c, 10)),
						E = i[s + 1];
					if (t.offset === _ && null != E && E.hasAttribute('data-slate-mark-placeholder')) {
						var f,
							h,
							p = E.childNodes[0];
						f = [
							p instanceof H ? p : E,
							null !== (h = E.textContent) && void 0 !== h && h.startsWith('\uFEFF') ? 1 : 0
						];
						break;
					}
					if (t.offset <= _) {
						f = [l, Math.min(u, Math.max(0, t.offset - a))];
						break;
					}
					a = _;
				}
			}
			if (!f) throw Error('Cannot resolve a DOM point from Slate point: '.concat(d.o4.stringify(t)));
			return f;
		},
		toDOMRange(e, t) {
			var { anchor: n, focus: r } = t,
				i = d.e6.isBackward(t),
				a = eT.toDOMPoint(e, n),
				s = d.e6.isCollapsed(t) ? a : eT.toDOMPoint(e, r),
				o = eT.getWindow(e).document.createRange(),
				[l, u] = i ? s : a,
				[c, _] = i ? a : s,
				E = !!(j(l) ? l : l.parentElement).getAttribute('data-slate-zero-width'),
				f = !!(j(c) ? c : c.parentElement).getAttribute('data-slate-zero-width');
			return o.setStart(l, E ? 1 : u), o.setEnd(c, f ? 1 : _), o;
		},
		toSlateNode(e, t) {
			var n = j(t) ? t : t.parentElement;
			n && !n.hasAttribute('data-slate-node') && (n = n.closest('[data-slate-node]'));
			var r = n ? v.get(n) : null;
			if (!r) throw Error('Cannot resolve a Slate node from DOM node: '.concat(n));
			return r;
		},
		findEventRange(e, t) {
			'nativeEvent' in t && (t = t.nativeEvent);
			var n,
				{ clientX: r, clientY: i, target: a } = t;
			if (null == r || null == i) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(t));
			var s = eT.toSlateNode(e, t.target),
				o = eT.findPath(e, s);
			if (d.W_.isElement(s) && d.ML.isVoid(e, s)) {
				var l = a.getBoundingClientRect(),
					u = e.isInline(s) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
					c = d.ML.point(e, o, { edge: u ? 'start' : 'end' }),
					_ = u ? d.ML.before(e, c) : d.ML.after(e, c);
				if (_) return d.ML.range(e, _);
			}
			var { document: E } = eT.getWindow(e);
			if (E.caretRangeFromPoint) n = E.caretRangeFromPoint(r, i);
			else {
				var f = E.caretPositionFromPoint(r, i);
				f && ((n = E.createRange()).setStart(f.offsetNode, f.offset), n.setEnd(f.offsetNode, f.offset));
			}
			if (!n) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(t));
			return eT.toSlateRange(e, n, {
				exactMatch: !1,
				suppressThrow: !1
			});
		},
		toSlatePoint(e, t, n) {
			var { exactMatch: r, suppressThrow: i } = n,
				[a, s] = r ? t : Q(t),
				o = a.parentNode,
				l = null,
				u = 0;
			if (o) {
				var c,
					_,
					E = eT.toDOMNode(e, e),
					f = o.closest('[data-slate-void="true"]'),
					h = f && E.contains(f) ? f : null,
					p = o.closest('[data-slate-leaf]'),
					I = null;
				if (p) {
					if ((l = p.closest('[data-slate-node="text"]'))) {
						var m = eT.getWindow(e).document.createRange();
						m.setStart(l, 0), m.setEnd(a, s);
						var T = m.cloneContents();
						[
							...Array.prototype.slice.call(T.querySelectorAll('[data-slate-zero-width]')),
							...Array.prototype.slice.call(T.querySelectorAll('[contenteditable=false]'))
						].forEach((e) => {
							if (
								eo &&
								!r &&
								e.hasAttribute('data-slate-zero-width') &&
								e.textContent.length > 0 &&
								'\uFEFF' !== e.textContext
							) {
								e.textContent.startsWith('\uFEFF') && (e.textContent = e.textContent.slice(1));
								return;
							}
							e.parentNode.removeChild(e);
						}),
							(u = T.textContent.length),
							(I = l);
					}
				} else if (h) {
					for (var g = h.querySelectorAll('[data-slate-leaf]'), S = 0; S < g.length; S++) {
						var A = g[S];
						if (eT.hasDOMNode(e, A)) {
							p = A;
							break;
						}
					}
					p
						? ((l = p.closest('[data-slate-node="text"]')),
							(u = (I = p).textContent.length),
							I.querySelectorAll('[data-slate-zero-width]').forEach((e) => {
								u -= e.textContent.length;
							}))
						: (u = 1);
				}
				I &&
					u === I.textContent.length &&
					eo &&
					'z' === I.getAttribute('data-slate-zero-width') &&
					null !== (c = I.textContent) &&
					void 0 !== c &&
					c.startsWith('\uFEFF') &&
					(o.hasAttribute('data-slate-zero-width') ||
						(el && null !== (_ = I.textContent) && void 0 !== _ && _.endsWith('\n\n'))) &&
					u--;
			}
			if (eo && !l && !r) {
				var N = o.hasAttribute('data-slate-node') ? o : o.closest('[data-slate-node]');
				if (N && eT.hasDOMNode(e, N, { editable: !0 })) {
					var v = eT.toSlateNode(e, N),
						{ path: O, offset: R } = d.ML.start(e, eT.findPath(e, v));
					return (
						!N.querySelector('[data-slate-leaf]') && (R = s),
						{
							path: O,
							offset: R
						}
					);
				}
			}
			if (!l) {
				if (i) return null;
				throw Error('Cannot resolve a Slate point from DOM point: '.concat(t));
			}
			var C = eT.toSlateNode(e, l);
			return {
				path: eT.findPath(e, C),
				offset: u
			};
		},
		toSlateRange(e, t, n) {
			var r,
				i,
				a,
				s,
				o,
				l,
				{ exactMatch: u, suppressThrow: c } = n;
			if (
				((K(t) ? t.anchorNode : t.startContainer) &&
					(K(t)
						? ((r = t.anchorNode),
							(i = t.anchorOffset),
							(a = t.focusNode),
							(s = t.focusOffset),
							(o = ed && X(r) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed))
						: ((r = t.startContainer),
							(i = t.startOffset),
							(a = t.endContainer),
							(s = t.endOffset),
							(o = t.collapsed))),
				null == r || null == a || null == i || null == s)
			)
				throw Error('Cannot resolve a Slate range from DOM range: '.concat(t));
			'getAttribute' in a &&
				'false' === a.getAttribute('contenteditable') &&
				((a = r), (s = (null === (l = r.textContent) || void 0 === l ? void 0 : l.length) || 0));
			var _ = eT.toSlatePoint(e, [r, i], {
				exactMatch: u,
				suppressThrow: c
			});
			if (!_) return null;
			var E = o
				? _
				: eT.toSlatePoint(e, [a, s], {
						exactMatch: u,
						suppressThrow: c
					});
			if (!E) return null;
			if (el && !o && r !== a) {
				var f = d.ML.isEnd(e, _, _.path),
					h = d.ML.isStart(e, E, E.path);
				f && (_ = d.ML.after(e, _) || _), h && (E = d.ML.before(e, E) || E);
			}
			var p = {
				anchor: _,
				focus: E
			};
			return (
				d.e6.isExpanded(p) &&
					d.e6.isForward(p) &&
					j(a) &&
					d.ML.void(e, {
						at: p.focus,
						mode: 'highest'
					}) &&
					(p = d.ML.unhangRange(e, p, { voids: !0 })),
				p
			);
		},
		hasRange(e, t) {
			var { anchor: n, focus: r } = t;
			return d.ML.hasPath(e, n.path) && d.ML.hasPath(e, r.path);
		},
		hasTarget: (e, t) => W(t) && eT.hasDOMNode(e, t),
		hasEditableTarget: (e, t) => W(t) && eT.hasDOMNode(e, t, { editable: !0 }),
		hasSelectableTarget: (e, t) => eT.hasEditableTarget(e, t) || eT.isTargetInsideNonReadonlyVoid(e, t),
		isTargetInsideNonReadonlyVoid(e, t) {
			if (y.get(e)) return !1;
			var n = eT.hasTarget(e, t) && eT.toSlateNode(e, t);
			return d.W_.isElement(n) && d.ML.isVoid(e, n);
		},
		androidScheduleFlush(e) {
			var t;
			null === (t = P.get(e)) || void 0 === t || t();
		},
		androidPendingDiffs: (e) => x.get(e)
	},
	eg = ['anchor', 'focus'],
	eS = ['anchor', 'focus'],
	eA = (e, t) =>
		Object.keys(e).length === Object.keys(t).length &&
		Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]),
	eN = (e, t) => {
		var n = p(e, eg),
			r = p(t, eS);
		return e[F] === t[F] && eA(n, r);
	},
	ev = (e, t) => {
		if (e.length !== t.length) return !1;
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
				i = t[n];
			if (!d.e6.equals(r, i) || !eN(r, i)) return !1;
		}
		return !0;
	},
	eO = (e, t) => {
		if (e.length !== t.length) return !1;
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
				i = t[n];
			if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eN(r, i)) return !1;
		}
		return !0;
	},
	eR = eI ? u.useLayoutEffect : u.useEffect,
	eC = (e) => {
		var { isLast: t, leaf: n, parent: r, text: i } = e,
			a = eM(),
			s = eT.findPath(a, i),
			o = d.y$.parent(s),
			l = !0 === n[V];
		return a.isVoid(r)
			? u.createElement(eL, { length: d.NB.string(r).length })
			: '' !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || '' !== d.ML.string(a, o)
				? '' === n.text
					? u.createElement(eL, { isMarkPlaceholder: l })
					: t && '\n' === n.text.slice(-1)
						? u.createElement(ey, {
								isTrailing: !0,
								text: n.text
							})
						: u.createElement(ey, { text: n.text })
				: u.createElement(eL, {
						isLineBreak: !0,
						isMarkPlaceholder: l
					});
	},
	ey = (e) => {
		var { text: t, isTrailing: n = !1 } = e,
			r = (0, u.useRef)(null),
			i = () => ''.concat(null != t ? t : '').concat(n ? '\n' : ''),
			[a] = (0, u.useState)(i);
		return (
			eR(() => {
				var e = i();
				r.current && r.current.textContent !== e && (r.current.textContent = e);
			}),
			u.createElement(eD, { ref: r }, a)
		);
	},
	eD = (0, u.memo)(
		(0, u.forwardRef)((e, t) =>
			u.createElement(
				'span',
				{
					'data-slate-string': !0,
					ref: t
				},
				e.children
			)
		)
	),
	eL = (e) => {
		var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
			i = {
				'data-slate-zero-width': n ? 'n' : 'z',
				'data-slate-length': t
			};
		return (
			r && (i['data-slate-mark-placeholder'] = !0),
			u.createElement('span', Object.assign({}, i), eo && n ? null : '\uFEFF', n ? u.createElement('br', null) : null)
		);
	},
	eb = (0, u.createContext)(null),
	eM = () => {
		var e = (0, u.useContext)(eb);
		if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
		return e;
	},
	eP = u.memo(
		(e) => {
			var {
					leaf: t,
					isLast: n,
					text: r,
					parent: i,
					renderPlaceholder: a,
					renderLeaf: s = (e) => u.createElement(eU, Object.assign({}, e))
				} = e,
				o = (0, u.useRef)(null),
				l = (0, u.useRef)(null),
				c = eM(),
				d = (0, u.useRef)(null);
			(0, u.useEffect)(
				() => () => {
					d.current && d.current.disconnect();
				},
				[]
			),
				(0, u.useEffect)(() => {
					var e = null == l ? void 0 : l.current;
					if ((e ? N.set(c, e) : N.delete(c), d.current)) d.current.disconnect(), e && d.current.observe(e);
					else if (e) {
						var t = window.ResizeObserver || _.do;
						(d.current = new t(() => {
							var e = B.get(c);
							null == e || e();
						})),
							d.current.observe(e);
					}
					if (!e && o.current) {
						var n = B.get(c);
						null == n || n();
					}
					return (
						(o.current = l.current),
						() => {
							N.delete(c);
						}
					);
				}, [l, t]);
			var E = u.createElement(eC, {
				isLast: n,
				leaf: t,
				parent: i,
				text: r
			});
			if (t[F]) {
				var f = {
					children: t.placeholder,
					attributes: {
						'data-slate-placeholder': !0,
						style: {
							position: 'absolute',
							pointerEvents: 'none',
							width: '100%',
							maxWidth: '100%',
							display: 'block',
							opacity: '0.333',
							userSelect: 'none',
							textDecoration: 'none'
						},
						contentEditable: !1,
						ref: l
					}
				};
				E = u.createElement(u.Fragment, null, a(f), E);
			}
			return s({
				attributes: { 'data-slate-leaf': !0 },
				children: E,
				leaf: t,
				text: r
			});
		},
		(e, t) =>
			t.parent === e.parent &&
			t.isLast === e.isLast &&
			t.renderLeaf === e.renderLeaf &&
			t.renderPlaceholder === e.renderPlaceholder &&
			t.text === e.text &&
			d.xv.equals(t.leaf, e.leaf) &&
			t.leaf[F] === e.leaf[F]
	),
	eU = (e) => {
		var { attributes: t, children: n } = e;
		return u.createElement('span', Object.assign({}, t), n);
	},
	ew = u.memo(
		(e) => {
			for (
				var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: s } = e,
					o = eM(),
					l = (0, u.useRef)(null),
					c = d.xv.decorations(s, t),
					_ = eT.findKey(o, s),
					E = [],
					f = 0;
				f < c.length;
				f++
			) {
				var h = c[f];
				E.push(
					u.createElement(eP, {
						isLast: n && f === c.length - 1,
						key: ''.concat(_.id, '-').concat(f),
						renderPlaceholder: i,
						leaf: h,
						text: s,
						parent: r,
						renderLeaf: a
					})
				);
			}
			var p = (0, u.useCallback)(
				(e) => {
					var t = C.get(o);
					e
						? (null == t || t.set(_, e), O.set(s, e), v.set(e, s))
						: (null == t || t.delete(_), O.delete(s), l.current && v.delete(l.current)),
						(l.current = e);
				},
				[l, o, _, s]
			);
			return u.createElement(
				'span',
				{
					'data-slate-node': 'text',
					ref: p
				},
				E
			);
		},
		(e, t) =>
			t.parent === e.parent &&
			t.isLast === e.isLast &&
			t.renderLeaf === e.renderLeaf &&
			t.renderPlaceholder === e.renderPlaceholder &&
			t.text === e.text &&
			eO(t.decorations, e.decorations)
	),
	ex = u.memo(
		(e) => {
			var {
					decorations: t,
					element: n,
					renderElement: r = (e) => u.createElement(eG, Object.assign({}, e)),
					renderPlaceholder: a,
					renderLeaf: s,
					selection: o
				} = e,
				l = eM(),
				c = eY(),
				_ = l.isInline(n),
				E = eT.findKey(l, n),
				f = (0, u.useCallback)(
					(e) => {
						var t = C.get(l);
						e ? (null == t || t.set(E, e), O.set(n, e), v.set(e, n)) : (null == t || t.delete(E), O.delete(n));
					},
					[l, E, n]
				),
				h = eH({
					decorations: t,
					node: n,
					renderElement: r,
					renderPlaceholder: a,
					renderLeaf: s,
					selection: o
				}),
				p = {
					'data-slate-node': 'element',
					ref: f
				};
			if ((_ && (p['data-slate-inline'] = !0), !_ && d.ML.hasInlines(l, n))) {
				var I = d.NB.string(n),
					m = i()(I);
				'rtl' === m && (p.dir = m);
			}
			if (d.ML.isVoid(l, n)) {
				(p['data-slate-void'] = !0), !c && _ && (p.contentEditable = !1);
				var [[S]] = d.NB.texts(n);
				(h = u.createElement(
					_ ? 'span' : 'div',
					{
						'data-slate-spacer': !0,
						style: {
							height: '0',
							color: 'transparent',
							outline: 'none',
							position: 'absolute'
						}
					},
					u.createElement(ew, {
						renderPlaceholder: a,
						decorations: [],
						isLast: !1,
						parent: n,
						text: S
					})
				)),
					T.set(S, 0),
					g.set(S, n);
			}
			return r({
				attributes: p,
				children: h,
				element: n,
				decorations: t
			});
		},
		(e, t) =>
			e.element === t.element &&
			e.renderElement === t.renderElement &&
			e.renderLeaf === t.renderLeaf &&
			e.renderPlaceholder === t.renderPlaceholder &&
			ev(e.decorations, t.decorations) &&
			(e.selection === t.selection || (!!e.selection && !!t.selection && d.e6.equals(e.selection, t.selection)))
	),
	eG = (e) => {
		var { attributes: t, children: n, element: r } = e,
			i = eM().isInline(r) ? 'span' : 'div';
		return u.createElement(i, Object.assign({}, t, { style: { position: 'relative' } }), n);
	},
	ek = (0, u.createContext)(() => []),
	eB = () => (0, u.useContext)(ek),
	eF = (0, u.createContext)(!1),
	eV = () => (0, u.useContext)(eF),
	eH = (e) => {
		for (
			var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: s } = e,
				o = eB(),
				l = eM(),
				c = eT.findPath(l, n),
				_ = [],
				E = d.W_.isElement(n) && !l.isInline(n) && d.ML.hasInlines(l, n),
				f = 0;
			f < n.children.length;
			f++
		) {
			var h = c.concat(f),
				p = n.children[f],
				I = eT.findKey(l, p),
				m = d.ML.range(l, h),
				S = s && d.e6.intersection(m, s),
				A = o([p, h]);
			for (var N of t) {
				var v = d.e6.intersection(N, m);
				v && A.push(v);
			}
			d.W_.isElement(p)
				? _.push(
						u.createElement(
							eF.Provider,
							{
								key: 'provider-'.concat(I.id),
								value: !!S
							},
							u.createElement(ex, {
								decorations: A,
								element: p,
								key: I.id,
								renderElement: r,
								renderPlaceholder: i,
								renderLeaf: a,
								selection: S
							})
						)
					)
				: _.push(
						u.createElement(ew, {
							decorations: A,
							key: I.id,
							isLast: E && f === n.children.length - 1,
							parent: n,
							renderPlaceholder: i,
							renderLeaf: a,
							text: p
						})
					),
				T.set(p, f),
				g.set(p, n);
		}
		return _;
	},
	eZ = (0, u.createContext)(!1),
	eY = () => (0, u.useContext)(eZ),
	ej = (0, u.createContext)(null),
	eW = () => {
		var e = (0, u.useContext)(ej);
		if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
		var { editor: t } = e;
		return t;
	},
	eK = {
		bold: 'mod+b',
		compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
		moveBackward: 'left',
		moveForward: 'right',
		moveWordBackward: 'ctrl+left',
		moveWordForward: 'ctrl+right',
		deleteBackward: 'shift?+backspace',
		deleteForward: 'shift?+delete',
		extendBackward: 'shift+left',
		extendForward: 'shift+right',
		italic: 'mod+i',
		insertSoftBreak: 'shift+enter',
		splitBlock: 'enter',
		undo: 'mod+z'
	},
	ez = {
		moveLineBackward: 'opt+up',
		moveLineForward: 'opt+down',
		moveWordBackward: 'opt+left',
		moveWordForward: 'opt+right',
		deleteBackward: ['ctrl+backspace', 'ctrl+h'],
		deleteForward: ['ctrl+delete', 'ctrl+d'],
		deleteLineBackward: 'cmd+shift?+backspace',
		deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
		deleteWordBackward: 'opt+shift?+backspace',
		deleteWordForward: 'opt+shift?+delete',
		extendLineBackward: 'opt+shift+up',
		extendLineForward: 'opt+shift+down',
		redo: 'cmd+shift+z',
		transposeCharacter: 'ctrl+t'
	},
	eq = {
		deleteWordBackward: 'ctrl+shift?+backspace',
		deleteWordForward: 'ctrl+shift?+delete',
		redo: ['ctrl+y', 'ctrl+shift+z']
	},
	eQ = (e) => {
		var t = eK[e],
			n = ez[e],
			r = eq[e],
			i = t && (0, E.isKeyHotkey)(t),
			a = n && (0, E.isKeyHotkey)(n),
			s = r && (0, E.isKeyHotkey)(r);
		return (e) => !!((i && i(e)) || (es && a && a(e)) || (!es && s && s(e))) || !1;
	},
	eX = {
		isBold: eQ('bold'),
		isCompose: eQ('compose'),
		isMoveBackward: eQ('moveBackward'),
		isMoveForward: eQ('moveForward'),
		isDeleteBackward: eQ('deleteBackward'),
		isDeleteForward: eQ('deleteForward'),
		isDeleteLineBackward: eQ('deleteLineBackward'),
		isDeleteLineForward: eQ('deleteLineForward'),
		isDeleteWordBackward: eQ('deleteWordBackward'),
		isDeleteWordForward: eQ('deleteWordForward'),
		isExtendBackward: eQ('extendBackward'),
		isExtendForward: eQ('extendForward'),
		isExtendLineBackward: eQ('extendLineBackward'),
		isExtendLineForward: eQ('extendLineForward'),
		isItalic: eQ('italic'),
		isMoveLineBackward: eQ('moveLineBackward'),
		isMoveLineForward: eQ('moveLineForward'),
		isMoveWordBackward: eQ('moveWordBackward'),
		isMoveWordForward: eQ('moveWordForward'),
		isRedo: eQ('redo'),
		isSoftBreak: eQ('insertSoftBreak'),
		isSplitBlock: eQ('splitBlock'),
		isTransposeCharacter: eQ('transposeCharacter'),
		isUndo: eQ('undo')
	},
	e$ = (e, t) => {
		var n = [],
			r = () => {
				n = [];
			};
		return {
			registerMutations: (r) => {
				if (!!t.current) {
					var i = r.filter((t) => er(e, t, r));
					n.push(...i);
				}
			},
			restoreDOM: function () {
				n.length > 0 &&
					(n.reverse().forEach((e) => {
						if ('characterData' !== e.type)
							e.removedNodes.forEach((t) => {
								e.target.insertBefore(t, e.nextSibling);
							}),
								e.addedNodes.forEach((t) => {
									e.target.removeChild(t);
								});
					}),
					r());
			},
			clear: r
		};
	},
	eJ = {
		subtree: !0,
		childList: !0,
		characterData: !0,
		characterDataOldValue: !0
	};
class e0 extends u.Component {
	constructor() {
		super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
	}
	observe() {
		var e,
			{ node: t } = this.props;
		if (!t.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
		null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, eJ);
	}
	componentDidMount() {
		var { receivedUserInput: e } = this.props,
			t = this.context;
		(this.manager = e$(t, e)),
			(this.mutationObserver = new MutationObserver(this.manager.registerMutations)),
			this.observe();
	}
	getSnapshotBeforeUpdate() {
		var e,
			t,
			n,
			r,
			i = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
		return (
			null != i && i.length && (null === (r = this.manager) || void 0 === r || r.registerMutations(i)),
			null === (t = this.mutationObserver) || void 0 === t || t.disconnect(),
			null === (n = this.manager) || void 0 === n || n.restoreDOM(),
			null
		);
	}
	componentDidUpdate() {
		var e;
		null === (e = this.manager) || void 0 === e || e.clear(), this.observe();
	}
	componentWillUnmount() {
		var e;
		null === (e = this.mutationObserver) || void 0 === e || e.disconnect();
	}
	render() {
		return this.props.children;
	}
}
e0.contextType = eb;
var e1 = eo
	? e0
	: (e) => {
			var { children: t } = e;
			return u.createElement(u.Fragment, null, t);
		};
function e2(e) {
	for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
	return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function e3(e, t) {
	var { start: n, end: r, text: i } = t,
		a = e.slice(n, r),
		s = (function (e, t) {
			for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
			return n;
		})(a, i),
		o = Math.min(a.length - s, i.length - s),
		l = (function (e, t, n) {
			for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
				if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
			return r;
		})(a, i, o),
		u = {
			start: n + s,
			end: r - l,
			text: i.slice(s, i.length - l)
		};
	return u.start === u.end && 0 === u.text.length ? null : u;
}
function e4(e, t) {
	var { path: n, offset: r } = t;
	if (!d.ML.hasPath(e, n)) return null;
	var i = d.NB.get(e, n);
	if (!d.xv.isText(i)) return null;
	var a = d.ML.above(e, {
		match: (t) => d.W_.isElement(t) && d.ML.isBlock(e, t),
		at: n
	});
	if (!a) return null;
	for (; r > i.text.length; ) {
		var s = d.ML.next(e, {
			at: n,
			match: d.xv.isText
		});
		if (!s || !d.y$.isDescendant(s[1], a[1])) return null;
		(r -= i.text.length), (i = s[0]), (n = s[1]);
	}
	return {
		path: n,
		offset: r
	};
}
function e5(e, t) {
	var n = e4(e, t.anchor);
	if (!n) return null;
	if (d.e6.isCollapsed(t))
		return {
			anchor: n,
			focus: n
		};
	var r = e4(e, t.focus);
	return r
		? {
				anchor: n,
				focus: r
			}
		: null;
}
function e6(e, t, n) {
	var r = x.get(e),
		i =
			null == r
				? void 0
				: r.find((e) => {
						var { path: n } = e;
						return d.y$.equals(n, t.path);
					});
	if (!i || t.offset <= i.diff.start) return d.E9.transform(t, n, { affinity: 'backward' });
	var { diff: a } = i;
	if (t.offset <= a.start + a.text.length) {
		var s = {
				path: t.path,
				offset: a.start
			},
			o = d.E9.transform(s, n, { affinity: 'backward' });
		return o
			? {
					path: o.path,
					offset: o.offset + t.offset - a.start
				}
			: null;
	}
	var l = {
			path: t.path,
			offset: t.offset - a.text.length + a.end - a.start
		},
		u = d.E9.transform(l, n, { affinity: 'backward' });
	return u
		? 'split_node' === n.type && d.y$.equals(n.path, t.path) && l.offset < n.position && a.start < n.position
			? u
			: {
					path: u.path,
					offset: u.offset + a.text.length - a.end + a.start
				}
		: null;
}
function e7(e, t, n) {
	var r = e6(e, t.anchor, n);
	if (!r) return null;
	if (d.e6.isCollapsed(t))
		return {
			anchor: r,
			focus: r
		};
	var i = e6(e, t.focus, n);
	return i
		? {
				anchor: r,
				focus: i
			}
		: null;
}
function e8(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function e9(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = null != arguments[t] ? arguments[t] : {};
		t % 2
			? e8(Object(n), !0).forEach(function (t) {
					h(e, t, n[t]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: e8(Object(n)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
					});
	}
	return e;
}
var te = function () {},
	tt = (e) => (null == e ? void 0 : e.constructor.name) === 'DataTransfer',
	tn = ['node'];
function tr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
var ti = {
		subtree: !0,
		childList: !0,
		characterData: !0
	},
	ta = [
		'autoFocus',
		'decorate',
		'onDOMBeforeInput',
		'placeholder',
		'readOnly',
		'renderElement',
		'renderLeaf',
		'renderPlaceholder',
		'scrollSelectionIntoView',
		'style',
		'as',
		'disableDefaultStyles'
	],
	ts = ['text'];
function to(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function tl(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = null != arguments[t] ? arguments[t] : {};
		t % 2
			? to(Object(n), !0).forEach(function (t) {
					h(e, t, n[t]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: to(Object(n)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
					});
	}
	return e;
}
var tu = (e) => u.createElement(u.Fragment, null, eH(e)),
	tc = (e) => {
		var t,
			n,
			r,
			a,
			o,
			c,
			_ = (0, u.useCallback)((e) => u.createElement(td, Object.assign({}, e)), []),
			{
				autoFocus: E,
				decorate: f = t_,
				onDOMBeforeInput: I,
				placeholder: m,
				readOnly: T = !1,
				renderElement: g,
				renderLeaf: R,
				renderPlaceholder: C = _,
				scrollSelectionIntoView: M = tE,
				style: H = {},
				as: Y = 'div',
				disableDefaultStyles: z = !1
			} = e,
			Q = p(e, ta),
			X = eW(),
			[$, J] = (0, u.useState)(!1),
			ee = (0, u.useRef)(null),
			et = (0, u.useRef)([]);
		var { onUserInput: en, receivedUserInput: ei } =
				((t = eM()),
				(n = (0, u.useRef)(!1)),
				(r = (0, u.useRef)(0)),
				(a = (0, u.useCallback)(() => {
					if (!n.current) {
						n.current = !0;
						var e = eT.getWindow(t);
						e.cancelAnimationFrame(r.current),
							(r.current = e.requestAnimationFrame(() => {
								n.current = !1;
							}));
					}
				}, [])),
				(0, u.useEffect)(() => () => cancelAnimationFrame(r.current), []),
				{
					receivedUserInput: n,
					onUserInput: a
				}),
			[, es] = (0, u.useReducer)((e) => e + 1, 0);
		B.set(X, es), y.set(X, T);
		var ec = (0, u.useMemo)(
			() => ({
				isDraggingInternally: !1,
				isUpdatingSelection: !1,
				latestElement: null,
				hasMarkPlaceholder: !1
			}),
			[]
		);
		(0, u.useLayoutEffect)(
			() => () => {
				if (null != ec && null != ec.latestElement) ec.latestElement.remove(), (ec.latestElement = null);
			},
			[]
		),
			(0, u.useEffect)(() => {
				ee.current && E && ee.current.focus();
			}, [E]);
		var e_ = (0, u.useCallback)(
				l()(() => {
					if (
						(eo || !eT.isComposing(X)) &&
						(!ec.isUpdatingSelection || (null != eg && eg.isFlushing())) &&
						!ec.isDraggingInternally
					) {
						var e = eT.findDocumentOrShadowRoot(X),
							{ activeElement: t } = e,
							n = eT.toDOMNode(X, X),
							r = e.getSelection();
						if ((t === n ? ((ec.latestElement = t), D.set(X, !0)) : D.delete(X), !r)) return d.YR.deselect(X);
						var { anchorNode: i, focusNode: a } = r,
							s = eT.hasEditableTarget(X, i) || eT.isTargetInsideNonReadonlyVoid(X, i),
							o = eT.hasEditableTarget(X, a) || eT.isTargetInsideNonReadonlyVoid(X, a);
						if (s && o) {
							var l = eT.toSlateRange(X, r, {
								exactMatch: !1,
								suppressThrow: !0
							});
							l &&
								(eT.isComposing(X) || (null != eg && eg.hasPendingChanges()) || (null != eg && eg.isFlushing())
									? null == eg || eg.handleUserSelect(l)
									: d.YR.select(X, l));
						}
						T && (!s || !o) && d.YR.deselect(X);
					}
				}, 100),
				[T]
			),
			eE = (0, u.useMemo)(() => s()(e_, 0), [e_]),
			eg = (function (e) {
				var t,
					{ node: n } = e,
					r = p(e, tn);
				if (!eo) return null;
				var i = eM();
				var a =
						((t = (0, u.useRef)(!1)),
						(0, u.useEffect)(
							() => (
								(t.current = !0),
								() => {
									t.current = !1;
								}
							),
							[]
						),
						t.current),
					[s] = (0, u.useState)(() =>
						(function (e) {
							var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
								i = !1,
								a = null,
								s = null,
								o = null,
								l = 0,
								u = !1,
								c = () => {
									var e = k.get(t);
									if ((k.delete(t), e)) {
										var { selection: n } = t,
											r = e5(t, e);
										r && (!n || !d.e6.equals(r, n)) && d.YR.select(t, r);
									}
								},
								_ = () => {
									var e = G.get(t);
									if ((G.delete(t), !!e)) {
										if (e.at) {
											var n = d.E9.isPoint(e.at) ? e4(t, e.at) : e5(t, e.at);
											if (!n) return;
											var r = d.ML.range(t, n);
											(!t.selection || !d.e6.equals(t.selection, r)) && d.YR.select(t, n);
										}
										e.run();
									}
								},
								E = () => {
									if ((s && (clearTimeout(s), (s = null)), o && (clearTimeout(o), (o = null)), !m() && !I())) {
										c();
										return;
									}
									!i && ((i = !0), setTimeout(() => (i = !1))), I() && (i = 'action');
									var e = t.selection && d.ML.rangeRef(t, t.selection, { affinity: 'forward' });
									w.set(t, t.marks), te('flush', G.get(t), x.get(t));
									for (var a = m(); (l = null === (E = x.get(t)) || void 0 === E ? void 0 : E[0]); ) {
										var l,
											E,
											f,
											h = U.get(t);
										void 0 !== h && (U.delete(t), (t.marks = h)), h && !1 === u && (u = null);
										var p = (function (e) {
											var { path: t, diff: n } = e;
											return {
												anchor: {
													path: t,
													offset: n.start
												},
												focus: {
													path: t,
													offset: n.end
												}
											};
										})(l);
										(!t.selection || !d.e6.equals(t.selection, p)) && d.YR.select(t, p),
											l.diff.text ? d.ML.insertText(t, l.diff.text) : d.ML.deleteFragment(t),
											x.set(
												t,
												null === (f = x.get(t)) || void 0 === f
													? void 0
													: f.filter((e) => {
															var { id: t } = e;
															return t !== l.id;
														})
											),
											!(function (e, t) {
												var { path: n, diff: r } = t;
												if (!d.ML.hasPath(e, n)) return !1;
												var i = d.NB.get(e, n);
												if (!d.xv.isText(i)) return !1;
												if (r.start !== i.text.length || 0 === r.text.length)
													return i.text.slice(r.start, r.start + r.text.length) === r.text;
												var a = d.y$.next(n);
												if (!d.ML.hasPath(e, a)) return !1;
												var s = d.NB.get(e, a);
												return d.xv.isText(s) && s.text.startsWith(r.text);
											})(t, l) &&
												((a = !1),
												G.delete(t),
												w.delete(t),
												(i = 'action'),
												k.delete(t),
												n.cancel(),
												r.cancel(),
												null == e || e.unref());
									}
									var T = null == e ? void 0 : e.unref();
									if ((T && !k.get(t) && (!t.selection || !d.e6.equals(T, t.selection)) && d.YR.select(t, T), I())) {
										_();
										return;
									}
									a && n(), n.flush(), r.flush(), c();
									var g = w.get(t);
									w.delete(t), void 0 !== g && ((t.marks = g), t.onChange());
								},
								f = function () {
									var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
										n = N.get(t);
									if (!!n) {
										if (m() || e) {
											n.style.display = 'none';
											return;
										}
										n.style.removeProperty('display');
									}
								},
								h = (e, n) => {
									var r,
										i,
										a,
										s,
										o,
										u,
										c,
										_,
										E,
										h = null !== (E = x.get(t)) && void 0 !== E ? E : [];
									x.set(t, h);
									var p = d.NB.leaf(t, e),
										I = h.findIndex((t) => d.y$.equals(t.path, e));
									if (I < 0) {
										e3(p.text, n) &&
											h.push({
												path: e,
												diff: n,
												id: l++
											}),
											f();
										return;
									}
									var m =
										((r = p.text),
										(i = h[I].diff),
										(a = n),
										(s = Math.min(i.start, a.start)),
										(o = Math.max(0, Math.min(i.start + i.text.length, a.end) - a.start)),
										(u = e2(r, i, a)),
										(c = Math.max(
											a.start + a.text.length,
											i.start + i.text.length + (i.start + i.text.length > a.start ? a.text.length : 0) - o
										)),
										(_ = u.slice(s, c)),
										e3(r, {
											start: s,
											end: Math.max(i.end, a.end - i.text.length + (i.end - i.start)),
											text: _
										}));
									if (!m) {
										h.splice(I, 1), f();
										return;
									}
									h[I] = e9(e9({}, h[I]), {}, { diff: m });
								},
								p = function (e) {
									var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
									(u = !1),
										k.delete(t),
										n.cancel(),
										r.cancel(),
										I() && E(),
										G.set(t, {
											at: i,
											run: e
										}),
										(o = setTimeout(E));
								},
								I = () => !!G.get(t),
								m = () => {
									var e;
									return !!(null !== (e = x.get(t)) && void 0 !== e && e.length);
								},
								T = (e) => {
									k.set(t, e), s && (clearTimeout(s), (s = null));
									var { selection: n } = t;
									if (!!e) {
										var r = !n || !d.y$.equals(n.anchor.path, e.anchor.path),
											i = !n || !d.y$.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
										((r && u) || i) && (u = !1), (r || m()) && (s = setTimeout(E, 200));
									}
								},
								g = () => {
									!I() && (o = setTimeout(E));
								};
							return {
								flush: E,
								scheduleFlush: g,
								hasPendingDiffs: m,
								hasPendingAction: I,
								hasPendingChanges: () => I() || m(),
								isFlushing: () => i,
								handleUserSelect: T,
								handleCompositionEnd: (e) => {
									a && clearTimeout(a),
										(a = setTimeout(() => {
											L.set(t, !1), E();
										}, 25));
								},
								handleCompositionStart: (e) => {
									L.set(t, !0), a && (clearTimeout(a), (a = null));
								},
								handleDOMBeforeInput: (e) => {
									s && (clearTimeout(s), (s = null));
									var { inputType: n } = e,
										r = null,
										i = e.dataTransfer || e.data || void 0;
									!1 !== u && 'insertText' !== n && 'insertCompositionText' !== n && (u = !1);
									var [a] = e.getTargetRanges();
									a &&
										(r = eT.toSlateRange(t, a, {
											exactMatch: !1,
											suppressThrow: !0
										}));
									var o = eT.getWindow(t).getSelection();
									if (
										(!r &&
											o &&
											((a = o),
											(r = eT.toSlateRange(t, o, {
												exactMatch: !1,
												suppressThrow: !0
											}))),
										!!(r = null !== (L = r) && void 0 !== L ? L : t.selection))
									) {
										var l = !0;
										if (n.startsWith('delete')) {
											if (d.e6.isExpanded(r)) {
												var [c, _] = d.e6.edges(r);
												if (d.NB.leaf(t, c.path).text.length === c.offset && 0 === _.offset) {
													var E = d.ML.next(t, {
														at: c.path,
														match: d.xv.isText
													});
													E &&
														d.y$.equals(E[1], _.path) &&
														(r = {
															anchor: _,
															focus: _
														});
												}
											}
											var f = n.endsWith('Backward') ? 'backward' : 'forward',
												[I, m] = d.e6.edges(r),
												[S, A] = d.ML.leaf(t, I.path),
												N = {
													text: '',
													start: I.offset,
													end: m.offset
												},
												v = x.get(t),
												O = null == v ? void 0 : v.find((e) => d.y$.equals(e.path, A)),
												R = O ? [O.diff, N] : [N];
											if ((0 === e2(S.text, ...R).length && (l = !1), d.e6.isExpanded(r))) {
												if (l && d.y$.equals(r.anchor.path, r.focus.path)) {
													var C = {
														path: r.anchor.path,
														offset: I.offset
													};
													return (
														T(d.ML.range(t, C, C)),
														h(r.anchor.path, {
															text: '',
															end: m.offset,
															start: I.offset
														})
													);
												}
												return p(() => d.ML.deleteFragment(t, { direction: f }), { at: r });
											}
										}
										switch (n) {
											case 'deleteByComposition':
											case 'deleteByCut':
											case 'deleteByDrag':
												return p(() => d.ML.deleteFragment(t), { at: r });
											case 'deleteContent':
											case 'deleteContentForward':
												var { anchor: y } = r;
												if (l && d.e6.isCollapsed(r)) {
													var D = d.NB.leaf(t, y.path);
													if (y.offset < D.text.length)
														return h(y.path, {
															text: '',
															start: y.offset,
															end: y.offset + 1
														});
												}
												return p(() => d.ML.deleteForward(t), { at: r });
											case 'deleteContentBackward':
												var L,
													b,
													{ anchor: M } = r,
													P = K(a) ? a.isCollapsed : !!(null !== (b = a) && void 0 !== b && b.collapsed);
												if (l && P && d.e6.isCollapsed(r) && M.offset > 0)
													return h(M.path, {
														text: '',
														start: M.offset - 1,
														end: M.offset
													});
												return p(() => d.ML.deleteBackward(t), { at: r });
											case 'deleteEntireSoftLine':
												return p(
													() => {
														d.ML.deleteBackward(t, { unit: 'line' }), d.ML.deleteForward(t, { unit: 'line' });
													},
													{ at: r }
												);
											case 'deleteHardLineBackward':
												return p(() => d.ML.deleteBackward(t, { unit: 'block' }), { at: r });
											case 'deleteSoftLineBackward':
												return p(() => d.ML.deleteBackward(t, { unit: 'line' }), { at: r });
											case 'deleteHardLineForward':
												return p(() => d.ML.deleteForward(t, { unit: 'block' }), { at: r });
											case 'deleteSoftLineForward':
												return p(() => d.ML.deleteForward(t, { unit: 'line' }), { at: r });
											case 'deleteWordBackward':
												return p(() => d.ML.deleteBackward(t, { unit: 'word' }), { at: r });
											case 'deleteWordForward':
												return p(() => d.ML.deleteForward(t, { unit: 'word' }), { at: r });
											case 'insertLineBreak':
												return p(() => d.ML.insertSoftBreak(t), { at: r });
											case 'insertParagraph':
												return p(() => d.ML.insertBreak(t), { at: r });
											case 'insertCompositionText':
											case 'deleteCompositionText':
											case 'insertFromComposition':
											case 'insertFromDrop':
											case 'insertFromPaste':
											case 'insertFromYank':
											case 'insertReplacementText':
											case 'insertText':
												if (tt(i)) return p(() => eT.insertData(t, i), { at: r });
												var w = null != i ? i : '';
												if (
													(U.get(t) && (w = w.replace('\uFEFF', '')),
													'insertText' === n && /.*\n.*\n$/.test(w) && (w = w.slice(0, -1)),
													w.includes('\n'))
												)
													return p(
														() => {
															var e = w.split('\n');
															e.forEach((n, r) => {
																n && d.ML.insertText(t, n), r !== e.length - 1 && d.ML.insertSoftBreak(t);
															});
														},
														{ at: r }
													);
												if (d.y$.equals(r.anchor.path, r.focus.path)) {
													var [G, k] = d.e6.edges(r),
														B = {
															start: G.offset,
															end: k.offset,
															text: w
														};
													if (w && u && 'insertCompositionText' === n) {
														var F = u.start + u.text.search(/\S|$/);
														B.start + B.text.search(/\S|$/) === F + 1 && B.end === u.start + u.text.length
															? ((B.start -= 1), (u = null), g())
															: (u = !1);
													} else
														u =
															'insertText' === n &&
															(null === u
																? B
																: !!(u && d.e6.isCollapsed(r)) &&
																	u.end + u.text.length === G.offset &&
																	e9(e9({}, u), {}, { text: u.text + w }));
													if (l) {
														h(G.path, B);
														return;
													}
												}
												return p(() => d.ML.insertText(t, w), { at: r });
										}
									}
								},
								handleKeyDown: (e) => {
									!m() && (f(!0), setTimeout(f));
								},
								handleDomMutations: (e) => {
									if (!(m() || I())) {
										if (e.some((n) => er(t, n, e))) {
											var n;
											null === (n = B.get(t)) || void 0 === n || n();
										}
									}
								},
								handleInput: () => {
									(I() || !m()) && E();
								}
							};
						})(
							(function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = null != arguments[t] ? arguments[t] : {};
									t % 2
										? tr(Object(n), !0).forEach(function (t) {
												h(e, t, n[t]);
											})
										: Object.getOwnPropertyDescriptors
											? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
											: tr(Object(n)).forEach(function (t) {
													Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
												});
								}
								return e;
							})({ editor: i }, r)
						)
					);
				return (
					!(function (e, t, n) {
						var [r] = (0, u.useState)(() => new MutationObserver(t));
						eR(() => {
							r.takeRecords();
						}),
							(0, u.useEffect)(() => {
								if (!e.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
								return r.observe(e.current, n), () => r.disconnect();
							}, []);
					})(n, s.handleDomMutations, ti),
					P.set(i, s.scheduleFlush),
					a && s.flush(),
					s
				);
			})({
				node: ee,
				onDOMSelectionChange: e_,
				scheduleOnDOMSelectionChange: eE
			});
		eR(() => {
			ee.current && (e = Z(ee.current))
				? (S.set(X, e), A.set(X, ee.current), O.set(X, ee.current), v.set(ee.current, X))
				: O.delete(X);
			var e,
				{ selection: t } = X,
				n = eT.findDocumentOrShadowRoot(X).getSelection();
			if (!(!n || !eT.isFocused(X) || (null != eg && eg.hasPendingAction()))) {
				var r = (e) => {
						var r = 'None' !== n.type;
						if (!!t || !!r) {
							var i = A.get(X),
								a = !1;
							if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
								var s = eT.toSlateRange(X, n, {
									exactMatch: !0,
									suppressThrow: !0
								});
								if (s && d.e6.equals(s, t)) {
									if (!ec.hasMarkPlaceholder) return;
									var o,
										{ anchorNode: l } = n;
									if (
										null != l &&
										null !== (o = l.parentElement) &&
										void 0 !== o &&
										o.hasAttribute('data-slate-mark-placeholder')
									)
										return;
								}
							}
							if (t && !eT.hasRange(X, t)) {
								X.selection = eT.toSlateRange(X, n, {
									exactMatch: !1,
									suppressThrow: !0
								});
								return;
							}
							ec.isUpdatingSelection = !0;
							var u = t && eT.toDOMRange(X, t);
							return (
								u
									? (d.e6.isBackward(t)
											? n.setBaseAndExtent(u.endContainer, u.endOffset, u.startContainer, u.startOffset)
											: n.setBaseAndExtent(u.startContainer, u.startOffset, u.endContainer, u.endOffset),
										M(X, u))
									: n.removeAllRanges(),
								u
							);
						}
					},
					i = r(),
					a = (null == eg ? void 0 : eg.isFlushing()) === 'action';
				if (!eo || !a) {
					setTimeout(() => {
						i && el && eT.toDOMNode(X, X).focus(), (ec.isUpdatingSelection = !1);
					});
					return;
				}
				var s = null,
					o = requestAnimationFrame(() => {
						if (a) {
							var e = (e) => {
								try {
									eT.toDOMNode(X, X).focus(), r(e);
								} catch (e) {}
							};
							e(),
								(s = setTimeout(() => {
									e(!0), (ec.isUpdatingSelection = !1);
								}));
						}
					});
				return () => {
					cancelAnimationFrame(o), s && clearTimeout(s);
				};
			}
		});
		var eS = (0, u.useCallback)(
				(e) => {
					if ((en(), !T && eT.hasEditableTarget(X, e.target) && !th(e, I))) {
						if (eg) return eg.handleDOMBeforeInput(e);
						eE.flush(), e_.flush();
						var { selection: t } = X,
							{ inputType: n } = e,
							r = e.dataTransfer || e.data || void 0,
							i = 'insertCompositionText' === n || 'deleteCompositionText' === n;
						if (i && eT.isComposing(X)) return;
						var a = !1;
						if (
							'insertText' === n &&
							t &&
							d.e6.isCollapsed(t) &&
							e.data &&
							1 === e.data.length &&
							/[a-z ]/i.test(e.data) &&
							0 !== t.anchor.offset
						) {
							(a = !0), X.marks && (a = !1);
							var { anchor: s } = t,
								[o, l] = eT.toDOMPoint(X, s),
								u = null === (E = o.parentElement) || void 0 === E ? void 0 : E.closest('a'),
								c = eT.getWindow(X);
							if (a && u && eT.hasDOMNode(X, u)) {
								var _,
									E,
									f,
									h,
									p = null == c ? void 0 : c.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
								p === o && (null === (h = p.textContent) || void 0 === h ? void 0 : h.length) === l && (a = !1);
							}
							if (
								a &&
								o.parentElement &&
								(null == c
									? void 0
									: null === (f = c.getComputedStyle(o.parentElement)) || void 0 === f
										? void 0
										: f.whiteSpace) === 'pre'
							) {
								var m = d.ML.above(X, {
									at: s.path,
									match: (e) => d.W_.isElement(e) && d.ML.isBlock(X, e)
								});
								m && d.NB.string(m[0]).includes('\t') && (a = !1);
							}
						}
						if (!n.startsWith('delete') || n.startsWith('deleteBy')) {
							var [g] = e.getTargetRanges();
							if (g) {
								var S = eT.toSlateRange(X, g, {
									exactMatch: !1,
									suppressThrow: !1
								});
								if (!t || !d.e6.equals(t, S)) {
									a = !1;
									var A = !i && X.selection && d.ML.rangeRef(X, X.selection);
									d.YR.select(X, S), A && b.set(X, A);
								}
							}
						}
						if (!i) {
							if ((!a && e.preventDefault(), t && d.e6.isExpanded(t) && n.startsWith('delete'))) {
								var N = n.endsWith('Backward') ? 'backward' : 'forward';
								d.ML.deleteFragment(X, { direction: N });
								return;
							}
							switch (n) {
								case 'deleteByComposition':
								case 'deleteByCut':
								case 'deleteByDrag':
									d.ML.deleteFragment(X);
									break;
								case 'deleteContent':
								case 'deleteContentForward':
									d.ML.deleteForward(X);
									break;
								case 'deleteContentBackward':
									d.ML.deleteBackward(X);
									break;
								case 'deleteEntireSoftLine':
									d.ML.deleteBackward(X, { unit: 'line' }), d.ML.deleteForward(X, { unit: 'line' });
									break;
								case 'deleteHardLineBackward':
									d.ML.deleteBackward(X, { unit: 'block' });
									break;
								case 'deleteSoftLineBackward':
									d.ML.deleteBackward(X, { unit: 'line' });
									break;
								case 'deleteHardLineForward':
									d.ML.deleteForward(X, { unit: 'block' });
									break;
								case 'deleteSoftLineForward':
									d.ML.deleteForward(X, { unit: 'line' });
									break;
								case 'deleteWordBackward':
									d.ML.deleteBackward(X, { unit: 'word' });
									break;
								case 'deleteWordForward':
									d.ML.deleteForward(X, { unit: 'word' });
									break;
								case 'insertLineBreak':
									d.ML.insertSoftBreak(X);
									break;
								case 'insertParagraph':
									d.ML.insertBreak(X);
									break;
								case 'insertFromComposition':
								case 'insertFromDrop':
								case 'insertFromPaste':
								case 'insertFromYank':
								case 'insertReplacementText':
								case 'insertText':
									'insertFromComposition' === n && eT.isComposing(X) && (J(!1), L.set(X, !1)),
										(null == r ? void 0 : r.constructor.name) === 'DataTransfer'
											? eT.insertData(X, r)
											: 'string' == typeof r &&
												(a ? et.current.push(() => d.ML.insertText(X, r)) : d.ML.insertText(X, r));
							}
							var v = null === (_ = b.get(X)) || void 0 === _ ? void 0 : _.unref();
							b.delete(X), v && (!X.selection || !d.e6.equals(X.selection, v)) && d.YR.select(X, v);
						}
					}
				},
				[T, I]
			),
			eA = (0, u.useCallback)(
				(e) => {
					null == e
						? (e_.cancel(),
							eE.cancel(),
							A.delete(X),
							O.delete(X),
							ee.current && em && ee.current.removeEventListener('beforeinput', eS))
						: em && e.addEventListener('beforeinput', eS),
						(ee.current = e);
				},
				[ee, eS, e_, eE]
			);
		eR(() => {
			var e = eT.getWindow(X);
			return (
				e.document.addEventListener('selectionchange', eE),
				() => {
					e.document.removeEventListener('selectionchange', eE);
				}
			);
		}, [eE]);
		var eN = f([X, []]);
		if (m && 1 === X.children.length && 1 === Array.from(d.NB.texts(X)).length && '' === d.NB.string(X) && !$) {
			var ev = d.ML.start(X, []);
			eN.push({
				[F]: !0,
				placeholder: m,
				anchor: ev,
				focus: ev
			});
		}
		var { marks: eO } = X;
		if (((ec.hasMarkPlaceholder = !1), X.selection && d.e6.isCollapsed(X.selection) && eO)) {
			var { anchor: eC } = X.selection,
				ey = d.NB.leaf(X, eC.path),
				eD = p(ey, ts);
			if (!d.xv.equals(ey, eO, { loose: !0 })) {
				ec.hasMarkPlaceholder = !0;
				var eL = Object.fromEntries(Object.keys(eD).map((e) => [e, null]));
				eN.push(
					tl(
						tl(tl({ [V]: !0 }, eL), eO),
						{},
						{
							anchor: eC,
							focus: eC
						}
					)
				);
			}
		}
		(0, u.useEffect)(() => {
			setTimeout(() => {
				var { selection: e } = X;
				if (e) {
					var { anchor: t } = e,
						n = d.NB.leaf(X, t.path);
					if (eO && !d.xv.equals(n, eO, { loose: !0 })) {
						U.set(X, eO);
						return;
					}
				}
				U.delete(X);
			});
		});
		var eb =
			null === (o = N.get(X)) || void 0 === o
				? void 0
				: null === (c = o.getBoundingClientRect()) || void 0 === c
					? void 0
					: c.height;
		return u.createElement(
			eZ.Provider,
			{ value: T },
			u.createElement(
				ek.Provider,
				{ value: f },
				u.createElement(
					e1,
					{
						node: ee,
						receivedUserInput: ei
					},
					u.createElement(
						Y,
						Object.assign(
							{
								role: T ? void 0 : 'textbox',
								'aria-multiline': !T || void 0
							},
							Q,
							{
								spellCheck: (!!em || !eI) && Q.spellCheck,
								autoCorrect: em || !eI ? Q.autoCorrect : 'false',
								autoCapitalize: em || !eI ? Q.autoCapitalize : 'false',
								'data-slate-editor': !0,
								'data-slate-node': 'value',
								contentEditable: !T,
								zindex: -1,
								suppressContentEditableWarning: !0,
								ref: eA,
								style: tl(
									tl(
										{},
										z
											? {}
											: tl(
													{
														position: 'relative',
														outline: 'none',
														whiteSpace: 'pre-wrap',
														wordWrap: 'break-word'
													},
													eb ? { minHeight: eb } : {}
												)
									),
									H
								),
								onBeforeInput: (0, u.useCallback)(
									(e) => {
										if (
											!em &&
											!T &&
											!tf(e, Q.onBeforeInput) &&
											eT.hasSelectableTarget(X, e.target) &&
											(e.preventDefault(), !eT.isComposing(X))
										) {
											var t = e.data;
											d.ML.insertText(X, t);
										}
									},
									[T]
								),
								onInput: (0, u.useCallback)((e) => {
									if (!tf(e, Q.onInput)) {
										if (eg) {
											eg.handleInput();
											return;
										}
										for (var t of et.current) t();
										et.current = [];
									}
								}, []),
								onBlur: (0, u.useCallback)(
									(e) => {
										if (T || ec.isUpdatingSelection || !eT.hasSelectableTarget(X, e.target) || tf(e, Q.onBlur)) return;
										var t = eT.findDocumentOrShadowRoot(X);
										if (ec.latestElement === t.activeElement) return;
										var { relatedTarget: n } = e;
										if (!(n === eT.toDOMNode(X, X) || (j(n) && n.hasAttribute('data-slate-spacer')))) {
											if (null != n && W(n) && eT.hasDOMNode(X, n)) {
												var r = eT.toSlateNode(X, n);
												if (d.W_.isElement(r) && !X.isVoid(r)) return;
											}
											if (eu) {
												var i = t.getSelection();
												null == i || i.removeAllRanges();
											}
											D.delete(X);
										}
									},
									[T, Q.onBlur]
								),
								onClick: (0, u.useCallback)(
									(e) => {
										if (eT.hasTarget(X, e.target) && !tf(e, Q.onClick) && W(e.target)) {
											var t = eT.toSlateNode(X, e.target),
												n = eT.findPath(X, t);
											if (!d.ML.hasPath(X, n) || d.NB.get(X, n) !== t) return;
											if (3 === e.detail && n.length >= 1) {
												var r = n;
												if (!(d.W_.isElement(t) && d.ML.isBlock(X, t))) {
													var i,
														a = d.ML.above(X, {
															match: (e) => d.W_.isElement(e) && d.ML.isBlock(X, e),
															at: n
														});
													r = null !== (i = null == a ? void 0 : a[1]) && void 0 !== i ? i : n.slice(0, 1);
												}
												var s = d.ML.range(X, r);
												d.YR.select(X, s);
												return;
											}
											if (!T) {
												var o = d.ML.start(X, n),
													l = d.ML.end(X, n),
													u = d.ML.void(X, { at: o }),
													c = d.ML.void(X, { at: l });
												if (u && c && d.y$.equals(u[1], c[1])) {
													var _ = d.ML.range(X, o);
													d.YR.select(X, _);
												}
											}
										}
									},
									[T, Q.onClick]
								),
								onCompositionEnd: (0, u.useCallback)(
									(e) => {
										if (eT.hasSelectableTarget(X, e.target)) {
											if (
												(eT.isComposing(X) && (J(!1), L.set(X, !1)),
												null == eg || eg.handleCompositionEnd(e),
												!tf(e, Q.onCompositionEnd) && !eo)
											) {
												if (!eu && !ef && !ea && !ep && !eh && e.data) {
													var t = U.get(X);
													U.delete(X), void 0 !== t && (w.set(X, X.marks), (X.marks = t)), d.ML.insertText(X, e.data);
													var n = w.get(X);
													w.delete(X), void 0 !== n && (X.marks = n);
												}
											}
										}
									},
									[Q.onCompositionEnd]
								),
								onCompositionUpdate: (0, u.useCallback)(
									(e) => {
										eT.hasSelectableTarget(X, e.target) &&
											!tf(e, Q.onCompositionUpdate) &&
											!eT.isComposing(X) &&
											(J(!0), L.set(X, !0));
									},
									[Q.onCompositionUpdate]
								),
								onCompositionStart: (0, u.useCallback)(
									(e) => {
										if (eT.hasSelectableTarget(X, e.target)) {
											if ((null == eg || eg.handleCompositionStart(e), !tf(e, Q.onCompositionStart) && !eo)) {
												J(!0);
												var { selection: t } = X;
												if (t) {
													if (d.e6.isExpanded(t)) {
														d.ML.deleteFragment(X);
														return;
													}
													var n = d.ML.above(X, {
														match: (e) => d.W_.isElement(e) && d.ML.isInline(X, e),
														mode: 'highest'
													});
													if (n) {
														var [, r] = n;
														if (d.ML.isEnd(X, t.anchor, r)) {
															var i = d.ML.after(X, r);
															d.YR.setSelection(X, {
																anchor: i,
																focus: i
															});
														}
													}
												}
											}
										}
									},
									[Q.onCompositionStart]
								),
								onCopy: (0, u.useCallback)(
									(e) => {
										eT.hasSelectableTarget(X, e.target) &&
											!tf(e, Q.onCopy) &&
											(e.preventDefault(), eT.setFragmentData(X, e.clipboardData, 'copy'));
									},
									[Q.onCopy]
								),
								onCut: (0, u.useCallback)(
									(e) => {
										if (!T && eT.hasSelectableTarget(X, e.target) && !tf(e, Q.onCut)) {
											e.preventDefault(), eT.setFragmentData(X, e.clipboardData, 'cut');
											var { selection: t } = X;
											if (t) {
												if (d.e6.isExpanded(t)) d.ML.deleteFragment(X);
												else {
													var n = d.NB.parent(X, t.anchor.path);
													d.ML.isVoid(X, n) && d.YR.delete(X);
												}
											}
										}
									},
									[T, Q.onCut]
								),
								onDragOver: (0, u.useCallback)(
									(e) => {
										if (eT.hasTarget(X, e.target) && !tf(e, Q.onDragOver)) {
											var t = eT.toSlateNode(X, e.target);
											d.W_.isElement(t) && d.ML.isVoid(X, t) && e.preventDefault();
										}
									},
									[Q.onDragOver]
								),
								onDragStart: (0, u.useCallback)(
									(e) => {
										if (!T && eT.hasTarget(X, e.target) && !tf(e, Q.onDragStart)) {
											var t = eT.toSlateNode(X, e.target),
												n = eT.findPath(X, t);
											if (
												(d.W_.isElement(t) && d.ML.isVoid(X, t)) ||
												d.ML.void(X, {
													at: n,
													voids: !0
												})
											) {
												var r = d.ML.range(X, n);
												d.YR.select(X, r);
											}
											(ec.isDraggingInternally = !0), eT.setFragmentData(X, e.dataTransfer, 'drag');
										}
									},
									[T, Q.onDragStart]
								),
								onDrop: (0, u.useCallback)(
									(e) => {
										if (!T && eT.hasTarget(X, e.target) && !tf(e, Q.onDrop)) {
											e.preventDefault();
											var t = X.selection,
												n = eT.findEventRange(X, e),
												r = e.dataTransfer;
											d.YR.select(X, n),
												ec.isDraggingInternally &&
													t &&
													!d.e6.equals(t, n) &&
													!d.ML.void(X, {
														at: n,
														voids: !0
													}) &&
													d.YR.delete(X, { at: t }),
												eT.insertData(X, r),
												!eT.isFocused(X) && eT.focus(X);
										}
										ec.isDraggingInternally = !1;
									},
									[T, Q.onDrop]
								),
								onDragEnd: (0, u.useCallback)(
									(e) => {
										!T && ec.isDraggingInternally && Q.onDragEnd && eT.hasTarget(X, e.target) && Q.onDragEnd(e),
											(ec.isDraggingInternally = !1);
									},
									[T, Q.onDragEnd]
								),
								onFocus: (0, u.useCallback)(
									(e) => {
										if (!T && !ec.isUpdatingSelection && eT.hasEditableTarget(X, e.target) && !tf(e, Q.onFocus)) {
											var t = eT.toDOMNode(X, X),
												n = eT.findDocumentOrShadowRoot(X);
											if (((ec.latestElement = n.activeElement), el && e.target !== t)) {
												t.focus();
												return;
											}
											D.set(X, !0);
										}
									},
									[T, Q.onFocus]
								),
								onKeyDown: (0, u.useCallback)(
									(e) => {
										if (!T && eT.hasEditableTarget(X, e.target)) {
											null == eg || eg.handleKeyDown(e);
											var { nativeEvent: t } = e;
											if (
												(eT.isComposing(X) && !1 === t.isComposing && (L.set(X, !1), J(!1)),
												!(tf(e, Q.onKeyDown) || eT.isComposing(X)))
											) {
												var { selection: n } = X,
													r = X.children[null !== n ? n.focus.path[0] : 0],
													a = 'rtl' === i()(d.NB.string(r));
												if (eX.isRedo(t)) {
													e.preventDefault();
													'function' == typeof X.redo && X.redo();
													return;
												}
												if (eX.isUndo(t)) {
													e.preventDefault();
													'function' == typeof X.undo && X.undo();
													return;
												}
												if (eX.isMoveLineBackward(t)) {
													e.preventDefault(),
														d.YR.move(X, {
															unit: 'line',
															reverse: !0
														});
													return;
												}
												if (eX.isMoveLineForward(t)) {
													e.preventDefault(), d.YR.move(X, { unit: 'line' });
													return;
												}
												if (eX.isExtendLineBackward(t)) {
													e.preventDefault(),
														d.YR.move(X, {
															unit: 'line',
															edge: 'focus',
															reverse: !0
														});
													return;
												}
												if (eX.isExtendLineForward(t)) {
													e.preventDefault(),
														d.YR.move(X, {
															unit: 'line',
															edge: 'focus'
														});
													return;
												}
												if (eX.isMoveBackward(t)) {
													e.preventDefault(),
														n && d.e6.isCollapsed(n)
															? d.YR.move(X, { reverse: !a })
															: d.YR.collapse(X, { edge: 'start' });
													return;
												}
												if (eX.isMoveForward(t)) {
													e.preventDefault(),
														n && d.e6.isCollapsed(n) ? d.YR.move(X, { reverse: a }) : d.YR.collapse(X, { edge: 'end' });
													return;
												}
												if (eX.isMoveWordBackward(t)) {
													e.preventDefault(),
														n && d.e6.isExpanded(n) && d.YR.collapse(X, { edge: 'focus' }),
														d.YR.move(X, {
															unit: 'word',
															reverse: !a
														});
													return;
												}
												if (eX.isMoveWordForward(t)) {
													e.preventDefault(),
														n && d.e6.isExpanded(n) && d.YR.collapse(X, { edge: 'focus' }),
														d.YR.move(X, {
															unit: 'word',
															reverse: a
														});
													return;
												}
												if (em) {
													if (
														(ed || eu) &&
														n &&
														(eX.isDeleteBackward(t) || eX.isDeleteForward(t)) &&
														d.e6.isCollapsed(n)
													) {
														var s = d.NB.parent(X, n.anchor.path);
														if (d.W_.isElement(s) && d.ML.isVoid(X, s) && (d.ML.isInline(X, s) || d.ML.isBlock(X, s))) {
															e.preventDefault(), d.ML.deleteBackward(X, { unit: 'block' });
															return;
														}
													}
												} else {
													if (eX.isBold(t) || eX.isItalic(t) || eX.isTransposeCharacter(t)) {
														e.preventDefault();
														return;
													}
													if (eX.isSoftBreak(t)) {
														e.preventDefault(), d.ML.insertSoftBreak(X);
														return;
													}
													if (eX.isSplitBlock(t)) {
														e.preventDefault(), d.ML.insertBreak(X);
														return;
													}
													if (eX.isDeleteBackward(t)) {
														e.preventDefault(),
															n && d.e6.isExpanded(n)
																? d.ML.deleteFragment(X, { direction: 'backward' })
																: d.ML.deleteBackward(X);
														return;
													}
													if (eX.isDeleteForward(t)) {
														e.preventDefault(),
															n && d.e6.isExpanded(n)
																? d.ML.deleteFragment(X, { direction: 'forward' })
																: d.ML.deleteForward(X);
														return;
													}
													if (eX.isDeleteLineBackward(t)) {
														e.preventDefault(),
															n && d.e6.isExpanded(n)
																? d.ML.deleteFragment(X, { direction: 'backward' })
																: d.ML.deleteBackward(X, { unit: 'line' });
														return;
													}
													if (eX.isDeleteLineForward(t)) {
														e.preventDefault(),
															n && d.e6.isExpanded(n)
																? d.ML.deleteFragment(X, { direction: 'forward' })
																: d.ML.deleteForward(X, { unit: 'line' });
														return;
													}
													if (eX.isDeleteWordBackward(t)) {
														e.preventDefault(),
															n && d.e6.isExpanded(n)
																? d.ML.deleteFragment(X, { direction: 'backward' })
																: d.ML.deleteBackward(X, { unit: 'word' });
														return;
													}
													if (eX.isDeleteWordForward(t)) {
														e.preventDefault(),
															n && d.e6.isExpanded(n)
																? d.ML.deleteFragment(X, { direction: 'forward' })
																: d.ML.deleteForward(X, { unit: 'word' });
														return;
													}
												}
											}
										}
									},
									[T, Q.onKeyDown]
								),
								onPaste: (0, u.useCallback)(
									(e) => {
										!T &&
											eT.hasEditableTarget(X, e.target) &&
											!tf(e, Q.onPaste) &&
											(!em || q(e.nativeEvent) || eu) &&
											(e.preventDefault(), eT.insertData(X, e.clipboardData));
									},
									[T, Q.onPaste]
								)
							}
						),
						u.createElement(tu, {
							decorations: eN,
							node: X,
							renderElement: g,
							renderPlaceholder: C,
							renderLeaf: R,
							selection: X.selection
						})
					)
				)
			)
		);
	},
	td = (e) => {
		var { attributes: t, children: n } = e;
		return u.createElement('span', Object.assign({}, t), n, eo && u.createElement('br', null));
	},
	t_ = () => [],
	tE = (e, t) => {
		if (t.getBoundingClientRect && (!e.selection || (e.selection && d.e6.isCollapsed(e.selection)))) {
			var n = t.startContainer.parentElement;
			(n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
				(0, c.Z)(n, { scrollMode: 'if-needed' }),
				delete n.getBoundingClientRect;
		}
	},
	tf = (e, t) => {
		if (!t) return !1;
		var n = t(e);
		return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
	},
	th = (e, t) => {
		if (!t) return !1;
		var n = t(e);
		return null != n ? n : e.defaultPrevented;
	},
	tp = (0, u.createContext)(!1),
	tI = () => (0, u.useContext)(tp),
	tm = (0, u.createContext)({}),
	tT = ['editor', 'children', 'onChange', 'value'],
	tg = (e) => {
		var t,
			n,
			r,
			i,
			{ editor: a, children: s, onChange: o, value: l } = e,
			c = p(e, tT),
			_ = (0, u.useRef)(!1),
			[E, f] = u.useState(() => {
				if (!d.NB.isNodeList(l))
					throw Error('[Slate] value is invalid! Expected a list of elements but got: '.concat(d.o4.stringify(l)));
				if (!d.ML.isEditor(a)) throw Error('[Slate] editor is invalid! You passed: '.concat(d.o4.stringify(a)));
				return (
					(a.children = l),
					Object.assign(a, c),
					{
						v: 0,
						editor: a
					}
				);
			});
		var { selectorContext: h, onChange: I } =
				((t = a),
				(n = (0, u.useRef)([]).current),
				(r = (0, u.useRef)({ editor: t }).current),
				(i = (0, u.useCallback)((e) => {
					(r.editor = e), n.forEach((t) => t(e));
				}, [])),
				{
					selectorContext: (0, u.useMemo)(
						() => ({
							getSlate: () => r.editor,
							addEventListener: (e) => (
								n.push(e),
								() => {
									n.splice(n.indexOf(e), 1);
								}
							)
						}),
						[n, r]
					),
					onChange: i
				}),
			m = (0, u.useCallback)(() => {
				o && o(a.children),
					f((e) => ({
						v: e.v + 1,
						editor: a
					})),
					I(a);
			}, [o]);
		(0, u.useEffect)(
			() => (
				M.set(a, m),
				() => {
					M.set(a, () => {}), (_.current = !0);
				}
			),
			[m]
		);
		var [T, g] = (0, u.useState)(eT.isFocused(a));
		return (
			(0, u.useEffect)(() => {
				g(eT.isFocused(a));
			}),
			eR(() => {
				var e = () => g(eT.isFocused(a));
				return ei
					? (document.addEventListener('focusin', e),
						document.addEventListener('focusout', e),
						() => {
							document.removeEventListener('focusin', e), document.removeEventListener('focusout', e);
						})
					: (document.addEventListener('focus', e, !0),
						document.addEventListener('blur', e, !0),
						() => {
							document.removeEventListener('focus', e, !0), document.removeEventListener('blur', e, !0);
						});
			}, []),
			u.createElement(
				tm.Provider,
				{ value: h },
				u.createElement(
					ej.Provider,
					{ value: E },
					u.createElement(eb.Provider, { value: E.editor }, u.createElement(tp.Provider, { value: T }, s))
				)
			)
		);
	},
	tS = (e, t) => {
		var n = (t.top + t.bottom) / 2;
		return e.top <= n && e.bottom >= n;
	},
	tA = (e, t, n) => {
		var r = eT.toDOMRange(e, t).getBoundingClientRect(),
			i = eT.toDOMRange(e, n).getBoundingClientRect();
		return tS(r, i) && tS(i, r);
	},
	tN = (e, t) => {
		var n = d.ML.range(e, d.e6.end(t)),
			r = Array.from(d.ML.positions(e, { at: t })),
			i = 0,
			a = r.length,
			s = Math.floor(a / 2);
		if (tA(e, d.ML.range(e, r[i]), n)) return d.ML.range(e, r[i], n);
		if (r.length < 2) return d.ML.range(e, r[r.length - 1], n);
		for (; s !== r.length && s !== i; )
			tA(e, d.ML.range(e, r[s]), n) ? (a = s) : (i = s), (s = Math.floor((i + a) / 2));
		return d.ML.range(e, r[a], n);
	};
function tv(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t &&
			(r = r.filter(function (t) {
				return Object.getOwnPropertyDescriptor(e, t).enumerable;
			})),
			n.push.apply(n, r);
	}
	return n;
}
function tO(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = null != arguments[t] ? arguments[t] : {};
		t % 2
			? tv(Object(n), !0).forEach(function (t) {
					h(e, t, n[t]);
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: tv(Object(n)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
					});
	}
	return e;
}
var tR = function (e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x-slate-fragment',
			{ apply: n, onChange: r, deleteBackward: i, addMark: a, removeMark: s } = e;
		return (
			C.set(e, new WeakMap()),
			(e.addMark = (t, n) => {
				var r, i;
				null === (r = P.get(e)) || void 0 === r || r(),
					!U.get(e) && null !== (i = x.get(e)) && void 0 !== i && i.length && U.set(e, null),
					w.delete(e),
					a(t, n);
			}),
			(e.removeMark = (t) => {
				var n;
				!U.get(e) && null !== (n = x.get(e)) && void 0 !== n && n.length && U.set(e, null), w.delete(e), s(t);
			}),
			(e.deleteBackward = (t) => {
				if ('line' !== t) return i(t);
				if (e.selection && d.e6.isCollapsed(e.selection)) {
					var n = d.ML.above(e, {
						match: (t) => d.W_.isElement(t) && d.ML.isBlock(e, t),
						at: e.selection
					});
					if (n) {
						var [, r] = n,
							a = d.ML.range(e, r, e.selection.anchor),
							s = tN(e, a);
						!d.e6.isCollapsed(s) && d.YR.delete(e, { at: s });
					}
				}
			}),
			(e.apply = (t) => {
				var r,
					i = [],
					a = x.get(e);
				if (null != a && a.length) {
					var s = a
						.map((e) =>
							(function (e, t) {
								var { path: n, diff: r, id: i } = e;
								switch (t.type) {
									case 'insert_text':
										if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
										if (t.offset <= r.start)
											return {
												diff: {
													start: t.text.length + r.start,
													end: t.text.length + r.end,
													text: r.text
												},
												id: i,
												path: n
											};
										return {
											diff: {
												start: r.start,
												end: r.end + t.text.length,
												text: r.text
											},
											id: i,
											path: n
										};
									case 'remove_text':
										if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
										if (t.offset + t.text.length <= r.start)
											return {
												diff: {
													start: r.start - t.text.length,
													end: r.end - t.text.length,
													text: r.text
												},
												id: i,
												path: n
											};
										return {
											diff: {
												start: r.start,
												end: r.end - t.text.length,
												text: r.text
											},
											id: i,
											path: n
										};
									case 'split_node':
										if (!d.y$.equals(t.path, n) || t.position >= r.end)
											return {
												diff: r,
												id: i,
												path: d.y$.transform(n, t, { affinity: 'backward' })
											};
										if (t.position > r.start)
											return {
												diff: {
													start: r.start,
													end: Math.min(t.position, r.end),
													text: r.text
												},
												id: i,
												path: n
											};
										return {
											diff: {
												start: r.start - t.position,
												end: r.end - t.position,
												text: r.text
											},
											id: i,
											path: d.y$.transform(n, t, { affinity: 'forward' })
										};
									case 'merge_node':
										if (!d.y$.equals(t.path, n))
											return {
												diff: r,
												id: i,
												path: d.y$.transform(n, t)
											};
										return {
											diff: {
												start: r.start + t.position,
												end: r.end + t.position,
												text: r.text
											},
											id: i,
											path: d.y$.transform(n, t)
										};
								}
								var a = d.y$.transform(n, t);
								return a
									? {
											diff: r,
											path: a,
											id: i
										}
									: null;
							})(e, t)
						)
						.filter(Boolean);
					x.set(e, s);
				}
				var o = k.get(e);
				o && k.set(e, e7(e, o, t));
				var l = G.get(e);
				if (null != l && l.at) {
					var u = d.E9.isPoint(null == l ? void 0 : l.at) ? e6(e, l.at, t) : e7(e, l.at, t);
					G.set(e, u ? tO(tO({}, l), {}, { at: u }) : null);
				}
				switch (t.type) {
					case 'insert_text':
					case 'remove_text':
					case 'set_node':
					case 'split_node':
						i.push(...tC(e, t.path));
						break;
					case 'set_selection':
						null === (r = b.get(e)) || void 0 === r || r.unref(), b.delete(e);
						break;
					case 'insert_node':
					case 'remove_node':
						i.push(...tC(e, d.y$.parent(t.path)));
						break;
					case 'merge_node':
						i.push(...tC(e, d.y$.previous(t.path)));
						break;
					case 'move_node':
						i.push(...tC(e, d.y$.common(d.y$.parent(t.path), d.y$.parent(t.newPath))));
				}
				for (var [c, _] of (n(t), i)) {
					var [E] = d.ML.node(e, c);
					R.set(E, _);
				}
			}),
			(e.setFragmentData = (n) => {
				var { selection: r } = e;
				if (!r) return;
				var [i, a] = d.e6.edges(r),
					s = d.ML.void(e, { at: i.path }),
					o = d.ML.void(e, { at: a.path });
				if (!d.e6.isCollapsed(r) || !!s) {
					var l = eT.toDOMRange(e, r),
						u = l.cloneContents(),
						c = u.childNodes[0];
					if (
						(u.childNodes.forEach((e) => {
							e.textContent && '' !== e.textContent.trim() && (c = e);
						}),
						o)
					) {
						var [_] = o,
							E = l.cloneRange(),
							f = eT.toDOMNode(e, _);
						E.setEndAfter(f), (u = E.cloneContents());
					}
					if (
						(s && (c = u.querySelector('[data-slate-spacer]')),
						Array.from(u.querySelectorAll('[data-slate-zero-width]')).forEach((e) => {
							var t = 'n' === e.getAttribute('data-slate-zero-width');
							e.textContent = t ? '\n' : '';
						}),
						z(c))
					) {
						var h = c.ownerDocument.createElement('span');
						(h.style.whiteSpace = 'pre'), h.appendChild(c), u.appendChild(h), (c = h);
					}
					var p = JSON.stringify(e.getFragment()),
						I = window.btoa(encodeURIComponent(p));
					c.setAttribute('data-slate-fragment', I), n.setData('application/'.concat(t), I);
					var m = u.ownerDocument.createElement('div');
					return (
						m.appendChild(u),
						m.setAttribute('hidden', 'true'),
						u.ownerDocument.body.appendChild(m),
						n.setData('text/html', m.innerHTML),
						n.setData('text/plain', ee(m)),
						u.ownerDocument.body.removeChild(m),
						n
					);
				}
			}),
			(e.insertData = (t) => {
				!e.insertFragmentData(t) && e.insertTextData(t);
			}),
			(e.insertFragmentData = (n) => {
				var r = n.getData('application/'.concat(t)) || en(n);
				if (r) {
					var i = JSON.parse(decodeURIComponent(window.atob(r)));
					return e.insertFragment(i), !0;
				}
				return !1;
			}),
			(e.insertTextData = (t) => {
				var n = t.getData('text/plain');
				if (n) {
					var r = n.split(/\r\n|\r|\n/),
						i = !1;
					for (var a of r) i && d.YR.splitNodes(e, { always: !0 }), e.insertText(a), (i = !0);
					return !0;
				}
				return !1;
			}),
			(e.onChange = (t) => {
				f.unstable_batchedUpdates(() => {
					var n = M.get(e);
					n && n(), r(t);
				});
			}),
			e
		);
	},
	tC = (e, t) => {
		var n = [];
		for (var [r, i] of d.ML.levels(e, { at: t })) {
			var a = eT.findKey(e, r);
			n.push([i, a]);
		}
		return n;
	};
