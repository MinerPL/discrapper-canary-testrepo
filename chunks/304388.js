n(47120);
var i = n(735250),
	a = n(470079),
	s = n(481060),
	l = n(579185),
	r = n(420212),
	o = n(212374);
function c(e) {
	let { renderPopout: t, onMouseEnter: n, onMouseLeave: s, closePopout: l, isHovered: r, ...o } = e;
	return (
		a.useEffect(() => {
			!r && l();
		}, [l, r]),
		(0, i.jsx)('div', {
			onMouseEnter: n,
			onMouseLeave: s,
			children: t({
				closePopout: l,
				...o
			})
		})
	);
}
t.Z = a.forwardRef(function (e, t) {
	let { renderPopout: n, children: u } = e,
		[d, h] = a.useState(!1),
		{ isHovered: m, setIsHovered: p, onMouseEnter: _, onMouseLeave: f, cancelTimers: E } = (0, l.Z)(200, 300);
	function C(e) {
		'focus' !== e.type && !d && _();
	}
	function g() {
		!d && f();
	}
	function I(e) {
		E(), h(!d), (!m || d) && e();
	}
	a.useImperativeHandle(
		t,
		() => ({
			hidePopout() {
				p(!1), h(!1);
			}
		}),
		[p, h]
	);
	let x = m || d;
	return (0, i.jsx)(s.Popout, {
		animation: s.Popout.Animation.FADE,
		shouldShow: x,
		animationPosition: 'top',
		position: 'top',
		align: 'left',
		spacing: 16,
		onRequestClose: () => {
			p(!1), h(!1);
		},
		renderPopout: (e) =>
			(0, i.jsx)(c, {
				isHovered: x,
				onFocus: () => h(!0),
				onMouseEnter: _,
				onMouseLeave: g,
				renderPopout: n,
				...e
			}),
		children: (e) => {
			let { onClick: t, onKeyDown: n } = e;
			return (0, i.jsx)(i.Fragment, {
				children: u({
					onClick: (e) => I(() => t(e)),
					onKeyDown: (e) => {
						var t, i;
						return (t = e), (i = n), void ((t.key === r.vn.ENTER || t.key === r.vn.SPACE) && I(() => i(t)));
					},
					className: o.actionBarButton,
					onMouseEnter: C,
					onMouseLeave: g,
					isActive: x
				})
			});
		}
	});
});
