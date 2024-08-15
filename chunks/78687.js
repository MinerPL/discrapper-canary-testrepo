var r = n(201694).forEach;
e.exports = function (e) {
	var t = (e = e || {}).reporter,
		n = e.batchProcessor,
		i = e.stateHandler.getState;
	e.stateHandler.hasState;
	var a = e.idHandler;
	if (!n) throw Error('Missing required dependency: batchProcessor');
	if (!t) throw Error('Missing required dependency: reporter.');
	var s = (function () {
			var e = document.createElement('div');
			e.style.cssText = u(['position: absolute', 'width: 1000px', 'height: 1000px', 'visibility: hidden', 'margin: 0', 'padding: 0']);
			var t = document.createElement('div');
			(t.style.cssText = u(['position: absolute', 'width: 500px', 'height: 500px', 'overflow: scroll', 'visibility: none', 'top: -1500px', 'left: -1500px', 'visibility: hidden', 'margin: 0', 'padding: 0'])), t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
			var n = 500 - t.clientWidth,
				r = 500 - t.clientHeight;
			return (
				document.body.removeChild(t),
				{
					width: n,
					height: r
				}
			);
		})(),
		o = 'erd_scroll_detection_container';
	function l(e) {
		(function (e, t, n) {
			if (!e.getElementById(t)) {
				var r,
					i,
					a,
					s = n + '_animation',
					o = '/* Created by the element-resize-detector library. */\n';
				(o += '.' + n + ' > div::-webkit-scrollbar { ' + u(['display: none']) + ' }\n\n' + ('.' + n + '_animation_active { ' + u(['-webkit-animation-duration: 0.1s', 'animation-duration: 0.1s', '-webkit-animation-name: ' + s, 'animation-name: ' + s]) + ' }\n') + ('@-webkit-keyframes ' + s + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n') + ('@keyframes ' + s + ' { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }')),
					(r = o),
					(i =
						i ||
						function (t) {
							e.head.appendChild(t);
						}),
					((a = e.createElement('style')).innerHTML = r),
					(a.id = t),
					i(a);
			}
		})(e, 'erd_scroll_detection_scrollbar_style', o);
	}
	function u(t) {
		var n = e.important ? ' !important; ' : '; ';
		return (t.join(n) + n).trim();
	}
	l(window.document);
	function c(e, n, r) {
		if (e.addEventListener) e.addEventListener(n, r);
		else {
			if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
			e.attachEvent('on' + n, r);
		}
	}
	function d(e, n, r) {
		if (e.removeEventListener) e.removeEventListener(n, r);
		else {
			if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
			e.detachEvent('on' + n, r);
		}
	}
	function _(e) {
		return i(e).container.childNodes[0].childNodes[0].childNodes[0];
	}
	function E(e) {
		return i(e).container.childNodes[0].childNodes[0].childNodes[1];
	}
	return {
		makeDetectable: function (e, l, d) {
			var f, h, p;
			function m() {
				if (e.debug) {
					var n = Array.prototype.slice.call(arguments);
					if ((n.unshift(a.get(l), 'Scroll: '), t.log.apply)) t.log.apply(null, n);
					else for (var r = 0; r < n.length; r++) t.log(n[r]);
				}
			}
			!d && ((d = l), (l = e), (e = null)), (e = e || {});
			function I(e) {
				var t = i(e).container.childNodes[0],
					n = window.getComputedStyle(t);
				return !n.width || -1 === n.width.indexOf('px');
			}
			function T() {
				var e = window.getComputedStyle(l),
					t = {};
				return (t.position = e.position), (t.width = l.offsetWidth), (t.height = l.offsetHeight), (t.top = e.top), (t.right = e.right), (t.bottom = e.bottom), (t.left = e.left), (t.widthCSS = e.width), (t.heightCSS = e.height), t;
			}
			function g() {
				if ((m('storeStyle invoked.'), !i(l))) {
					m('Aborting because element has been uninstalled');
					return;
				}
				var e = T();
				i(l).style = e;
			}
			function S(e, t, n) {
				(i(e).lastWidth = t), (i(e).lastHeight = n);
			}
			function A() {
				return 2 * s.width + 1;
			}
			function N() {
				return 2 * s.height + 1;
			}
			function v(e) {
				return e + 10 + A();
			}
			function O(e) {
				return e + 10 + N();
			}
			function R(e, t, n) {
				var r = _(e),
					i = E(e),
					a = t + 10 + A(),
					s = n + 10 + N(),
					o = 2 * t + A(),
					l = 2 * n + N();
				(r.scrollLeft = a), (r.scrollTop = s), (i.scrollLeft = o), (i.scrollTop = l);
			}
			function C() {
				var e = i(l).container;
				if (!e) {
					((e = document.createElement('div')).className = o), (e.style.cssText = u(['visibility: hidden', 'display: inline', 'width: 0px', 'height: 0px', 'z-index: -1', 'overflow: hidden', 'margin: 0', 'padding: 0'])), (i(l).container = e), (t = e), (t.className += ' ' + o + '_animation_active'), l.appendChild(e);
					var t,
						n = function () {
							i(l).onRendered && i(l).onRendered();
						};
					c(e, 'animationstart', n), (i(l).onAnimationStart = n);
				}
				return e;
			}
			function y() {
				if ((m('Injecting elements'), !i(l))) {
					m('Aborting because element has been uninstalled');
					return;
				}
				!(function () {
					var n = i(l).style;
					if ('static' === n.position) {
						l.style.setProperty('position', 'relative', e.important ? 'important' : '');
						var r = function (e, t, n, r) {
							var i = n[r];
							if ('auto' !== i && '0' !== i.replace(/[^-\d\.]/g, '')) e.warn('An element that is positioned static has style.' + r + '=' + i + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + r + ' will be set to 0. Element: ', t), (t.style[r] = 0);
						};
						r(t, l, n, 'top'), r(t, l, n, 'right'), r(t, l, n, 'bottom'), r(t, l, n, 'left');
					}
				})();
				var n,
					r,
					a,
					d,
					_ = i(l).container;
				!_ && (_ = C());
				var E = s.width,
					f = s.height,
					h = u(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%', 'left: 0px', 'top: 0px']);
				var p = u(['position: absolute', 'flex: none', 'overflow: hidden', 'z-index: -1', 'visibility: hidden'].concat(((n = -(1 + E)), (r = -(1 + f)), (a = -f), ['left: ' + (n = n ? n + 'px' : '0'), 'top: ' + (r = r ? r + 'px' : '0'), 'right: ' + (d = (d = -E) ? d + 'px' : '0'), 'bottom: ' + (a = a ? a + 'px' : '0')]))),
					I = u(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
					T = u(['position: absolute', 'flex: none', 'overflow: scroll', 'z-index: -1', 'visibility: hidden', 'width: 100%', 'height: 100%']),
					g = u(['position: absolute', 'left: 0', 'top: 0']),
					S = u(['position: absolute', 'width: 200%', 'height: 200%']),
					A = document.createElement('div'),
					N = document.createElement('div'),
					v = document.createElement('div'),
					O = document.createElement('div'),
					R = document.createElement('div'),
					y = document.createElement('div');
				function D() {
					var e = i(l);
					e && e.onExpand ? e.onExpand() : m('Aborting expand scroll handler: element has been uninstalled');
				}
				function L() {
					var e = i(l);
					e && e.onShrink ? e.onShrink() : m('Aborting shrink scroll handler: element has been uninstalled');
				}
				(A.dir = 'ltr'), (A.style.cssText = h), (A.className = o), (N.className = o), (N.style.cssText = p), (v.style.cssText = I), (O.style.cssText = g), (R.style.cssText = T), (y.style.cssText = S), v.appendChild(O), R.appendChild(y), N.appendChild(v), N.appendChild(R), A.appendChild(N), _.appendChild(A), c(v, 'scroll', D), c(R, 'scroll', L), (i(l).onExpandScroll = D), (i(l).onShrinkScroll = L);
			}
			function D() {
				function s(t, n, r) {
					var i = _(t).childNodes[0],
						a = n + 10 + A(),
						s = r + 10 + N();
					i.style.setProperty('width', a + 'px', e.important ? 'important' : ''), i.style.setProperty('height', s + 'px', e.important ? 'important' : '');
				}
				function o(r) {
					var o = l.offsetWidth,
						c = l.offsetHeight,
						d = o !== i(l).lastWidth || c !== i(l).lastHeight;
					m('Storing current size', o, c),
						S(l, o, c),
						n.add(0, function () {
							if (!!d) {
								if (!i(l)) {
									m('Aborting because element has been uninstalled');
									return;
								}
								if (!u()) {
									m('Aborting because element container has not been initialized');
									return;
								}
								if (e.debug) {
									var n = l.offsetWidth,
										r = l.offsetHeight;
									(n !== o || r !== c) && t.warn(a.get(l), 'Scroll: Size changed before updating detector elements.');
								}
								s(l, o, c);
							}
						}),
						n.add(1, function () {
							if (!i(l)) {
								m('Aborting because element has been uninstalled');
								return;
							}
							if (!u()) {
								m('Aborting because element container has not been initialized');
								return;
							}
							R(l, o, c);
						}),
						d &&
							r &&
							n.add(2, function () {
								if (!i(l)) {
									m('Aborting because element has been uninstalled');
									return;
								}
								if (!u()) {
									m('Aborting because element container has not been initialized');
									return;
								}
								r();
							});
				}
				function u() {
					return !!i(l).container;
				}
				function c() {
					m('notifyListenersIfNeeded invoked');
					var e = i(l);
					return void 0 === i(l).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height
						? m('Not notifying: Size is the same as the start size, and there has been no notification yet.')
						: e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight
							? m('Not notifying: Size already notified')
							: void (m('Current size not notified, notifying...'),
								(e.lastNotifiedWidth = e.lastWidth),
								(e.lastNotifiedHeight = e.lastHeight),
								r(i(l).listeners, function (e) {
									e(l);
								}));
				}
				function d() {
					if ((m('Scroll detected.'), I(l))) {
						m('Scroll event fired while unrendered. Ignoring...');
						return;
					}
					o(c);
				}
				if ((m('registerListenersAndPositionElements invoked.'), !i(l))) {
					m('Aborting because element has been uninstalled');
					return;
				}
				(i(l).onRendered = function () {
					if ((m('startanimation triggered.'), I(l))) {
						m('Ignoring since element is still unrendered...');
						return;
					}
					m('Element rendered.');
					var e = _(l),
						t = E(l);
					(0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (m('Scrollbars out of sync. Updating detector elements...'), o(c));
				}),
					(i(l).onExpand = d),
					(i(l).onShrink = d);
				var f = i(l).style;
				s(l, f.width, f.height);
			}
			function L() {
				if ((m('finalizeDomMutation invoked.'), !i(l))) {
					m('Aborting because element has been uninstalled');
					return;
				}
				var e = i(l).style;
				S(l, e.width, e.height), R(l, e.width, e.height);
			}
			function b() {
				d(l);
			}
			function M() {
				var e;
				m('Installing...'),
					(i(l).listeners = []),
					(e = T()),
					(i(l).startSize = {
						width: e.width,
						height: e.height
					}),
					m('Element start size', i(l).startSize),
					n.add(0, g),
					n.add(1, y),
					n.add(2, D),
					n.add(3, L),
					n.add(4, b);
			}
			if ((m('Making detectable...'), ((p = (h = f = l).getRootNode && h.getRootNode().contains(h)), (h === h.ownerDocument.body || h.ownerDocument.body.contains(h) || p) && null !== window.getComputedStyle(f)) ? 1 : 0)) M();
			else
				m('Element is detached'),
					C(),
					m('Waiting until element is attached...'),
					(i(l).onRendered = function () {
						m('Element is now attached'), M();
					});
		},
		addListener: function (e, t) {
			if (!i(e).listeners.push) throw Error('Cannot add listener to an element that is not detectable.');
			i(e).listeners.push(t);
		},
		uninstall: function (e) {
			var t = i(e);
			if (!!t) t.onExpandScroll && d(_(e), 'scroll', t.onExpandScroll), t.onShrinkScroll && d(E(e), 'scroll', t.onShrinkScroll), t.onAnimationStart && d(t.container, 'animationstart', t.onAnimationStart), t.container && e.removeChild(t.container);
		},
		initDocument: l
	};
};
