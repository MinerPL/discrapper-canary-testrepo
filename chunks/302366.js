var r = n(117417);
e.exports = function (e) {
	var t = (e = e || {}).reporter,
		n = e.batchProcessor,
		i = e.stateHandler.getState;
	if (!t) throw Error('Missing required dependency: reporter.');
	function a(e) {
		return i(e).object;
	}
	return {
		makeDetectable: function (a, s, o) {
			!o && ((o = s), (s = a), (a = null)), (a = a || {}).debug;
			r.isIE(8)
				? o(s)
				: !(function (s, o) {
						var l,
							u,
							c =
								((l = [
									'display: block',
									'position: absolute',
									'top: 0',
									'left: 0',
									'width: 100%',
									'height: 100%',
									'border: none',
									'padding: 0',
									'margin: 0',
									'opacity: 0',
									'z-index: -1000',
									'pointer-events: none'
								]),
								(u = e.important ? ' !important; ' : '; '),
								(l.join(u) + u).trim()),
							d = !1,
							_ = window.getComputedStyle(s),
							E = s.offsetWidth,
							f = s.offsetHeight;
						function h() {
							function e() {
								if ('static' === _.position) {
									s.style.setProperty('position', 'relative', a.important ? 'important' : '');
									var e = function (e, t, n, r) {
										var i = n[r];
										if ('auto' !== i && '0' !== i.replace(/[^-\d\.]/g, ''))
											e.warn(
												'An element that is positioned static has style.' +
													r +
													'=' +
													i +
													' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' +
													r +
													' will be set to 0. Element: ',
												t
											),
												t.style.setProperty(r, '0', a.important ? 'important' : '');
									};
									e(t, s, _, 'top'), e(t, s, _, 'right'), e(t, s, _, 'bottom'), e(t, s, _, 'left');
								}
							}
							'' !== _.position && (e(_), (d = !0));
							var n = document.createElement('object');
							if (
								((n.style.cssText = c),
								(n.tabIndex = -1),
								(n.type = 'text/html'),
								n.setAttribute('aria-hidden', 'true'),
								(n.onload = function () {
									!d && e();
									!(function e(t, n) {
										if (!t.contentDocument) {
											var r = i(t);
											r.checkForObjectDocumentTimeoutId && window.clearTimeout(r.checkForObjectDocumentTimeoutId),
												(r.checkForObjectDocumentTimeoutId = setTimeout(function () {
													(r.checkForObjectDocumentTimeoutId = 0), e(t, n);
												}, 100));
											return;
										}
										n(t.contentDocument);
									})(this, function (e) {
										o(s);
									});
								}),
								!r.isIE() && (n.data = 'about:blank'),
								!!i(s))
							)
								s.appendChild(n), (i(s).object = n), r.isIE() && (n.data = 'about:blank');
						}
						(i(s).startSize = {
							width: E,
							height: f
						}),
							n ? n.add(h) : h();
					})(s, o);
		},
		addListener: function (e, t) {
			function n() {
				t(e);
			}
			if (r.isIE(8)) (i(e).object = { proxy: n }), e.attachEvent('onresize', n);
			else {
				var a = (function (e) {
					return i(e).object;
				})(e);
				if (!a) throw Error('Element is not detectable by this strategy.');
				a.contentDocument.defaultView.addEventListener('resize', n);
			}
		},
		uninstall: function (e) {
			if (!i(e)) return;
			var t = i(e).object;
			if (!!t)
				r.isIE(8) ? e.detachEvent('onresize', t.proxy) : e.removeChild(t),
					i(e).checkForObjectDocumentTimeoutId && window.clearTimeout(i(e).checkForObjectDocumentTimeoutId),
					delete i(e).object;
		}
	};
};
