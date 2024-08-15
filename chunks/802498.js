n.d(t, {
	OU: function () {
		return l;
	},
	ZP: function () {
		return u;
	},
	fC: function () {
		return s;
	}
});
var r = n(470079),
	i = function () {
		(this.locks = []), (this.listeners = []);
	};
function a(e, t, n) {
	void 0 === n && (n = !1);
	var r,
		i =
			((r = e),
			document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
				acceptNode: function (e) {
					return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
				}
			})),
		a = t.compareDocumentPosition(e),
		s = null;
	a & Node.DOCUMENT_POSITION_PRECEDING || n
		? (s = i.firstChild())
		: a & Node.DOCUMENT_POSITION_FOLLOWING && (s = i.lastChild()),
		(null != s ? s : e).focus();
}
(i.prototype.add = function (e, t) {
	var n = {
		uid: e,
		setEnabled: t,
		enabled: !1
	};
	this.toggleLayer(this.current(), !1), this.locks.push(n), this.toggleLayer(n, !0), this.emit();
}),
	(i.prototype.remove = function (e) {
		var t = this.locks.find(function (t) {
			return t.uid === e;
		});
		this.toggleLayer(t, !1);
		var n = this.current(),
			r = null != n && n.uid === e;
		(this.locks = this.locks.filter(function (t) {
			return t.uid !== e;
		})),
			r && this.toggleLayer(this.current(), !0),
			this.emit();
	}),
	(i.prototype.current = function () {
		return this.locks[this.locks.length - 1];
	}),
	(i.prototype.isActive = function () {
		var e = this.current();
		return null != e && e.enabled;
	}),
	(i.prototype.toggleLayer = function (e, t) {
		null != e && (e.setEnabled(t), (e.enabled = t));
	}),
	(i.prototype.subscribe = function (e) {
		var t = this;
		return (
			this.listeners.push(e),
			e(this.isActive(), this.locks),
			function () {
				return (t.listeners = t.listeners.filter(function (t) {
					return t !== e;
				}));
			}
		);
	}),
	(i.prototype.emit = function () {
		var e = this,
			t = this.isActive();
		this.listeners.forEach(function (n) {
			return n(t, e.locks);
		});
	});
var s = new i(),
	o = 0,
	l = (0, r.memo)(function () {
		var e,
			t = (0, r.useState)(!1),
			n = t[0];
		return (
			(e = t[1]),
			(0, r.useEffect)(
				function () {
					return s.subscribe(e);
				},
				[e]
			),
			(0, r.createElement)('div', {
				tabIndex: n ? 0 : void 0,
				style: {
					position: 'fixed',
					opacity: 0,
					pointerEvents: 'none'
				}
			})
		);
	});
function u(e, t) {
	void 0 === t && (t = {});
	var n,
		i,
		l,
		u,
		c,
		d = t.disableReturnRef,
		_ = t.attachTo;
	void 0 === _ && (_ = document);
	var E = t.disable,
		f =
			((i = (0, r.useState)(function () {
				return 'lock-' + o++;
			})[0]),
			(l = (0, r.useRef)(!1)),
			(0, r.useLayoutEffect)(
				function () {
					return (
						s.add(i, function (e) {
							return (l.current = e);
						}),
						function () {
							return s.remove(i);
						}
					);
				},
				[i]
			),
			l);
	(0, r.useEffect)(
		function () {
			E && (f.current = !1);
		},
		[E]
	),
		(0, r.useLayoutEffect)(
			function () {
				var t = e.current;
				function n(t) {
					if (f.current) {
						var n = e.current;
						if (null != n) {
							var r = t.target || document.body;
							n.contains(r) || (t.preventDefault(), t.stopImmediatePropagation(), a(n, r));
						}
					}
				}
				function r(t) {
					if (f.current) {
						var n = e.current;
						if (null != n) {
							(null != t.relatedTarget && t.relatedTarget !== document.body) || (t.preventDefault(), n.focus());
							var r = t.target || document.body;
							n.contains(r) || a(n, r);
						}
					}
				}
				return (
					null == t ||
						null == document.activeElement ||
						t.contains(document.activeElement) ||
						null != t.querySelector('[autofocus]') ||
						a(t, document.activeElement, !0),
					_.addEventListener('focusin', n, { capture: !0 }),
					_.addEventListener('focusout', r, { capture: !0 }),
					function () {
						_.removeEventListener('focusin', n, { capture: !0 }), _.removeEventListener('focusout', r, { capture: !0 });
					}
				);
			},
			[e]
		),
		(u = d),
		(c = (0, r.useState)(function () {
			return document.activeElement;
		})[0]),
		(0, r.useLayoutEffect)(function () {
			return function () {
				(null != u && u.current) ||
					requestAnimationFrame(function () {
						null != c && c.focus();
					});
			};
		}, []);
}
