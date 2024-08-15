n.d(t, {
	Ph: function () {
		return h;
	},
	Tt: function () {
		return f;
	},
	ZP: function () {
		return m;
	},
	iL: function () {
		return E;
	},
	nY: function () {
		return p;
	},
	zx: function () {
		return I;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(613828),
	l = n(680732),
	u = n(84735),
	c = n(922770),
	d = n(689938),
	_ = n(768478);
let E = {
		FILLED: _.lookFilled,
		OUTLINED: _.lookOutlined,
		LINK: _.lookLink,
		BLANK: _.lookBlank
	},
	f = {
		BRAND: _.colorBrand,
		BRAND_INVERTED: _.colorBrandInverted,
		RED: _.colorRed,
		GREEN: _.colorGreen,
		PRIMARY: _.colorPrimary,
		LINK: _.colorLink,
		WHITE: _.colorWhite,
		TRANSPARENT: _.colorTransparent,
		CUSTOM: ''
	},
	h = {
		NONE: '',
		TINY: _.sizeTiny,
		SMALL: _.sizeSmall,
		MEDIUM: _.sizeMedium,
		LARGE: _.sizeLarge,
		MIN: _.sizeMin,
		MAX: _.sizeMax,
		ICON: _.sizeIcon
	};
function p() {
	let {
		look: e = E.FILLED,
		color: t = f.BRAND,
		size: n = h.MEDIUM,
		fullWidth: r = !1,
		grow: i = !0,
		submitting: a = !1,
		disabled: o = !1
	} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	return s()(_.button, e, t, n, {
		[_.fullWidth]: r,
		[_.grow]: i,
		[_.submitting]: a && !o
	});
}
function I(e) {
	let {
			look: t = E.FILLED,
			color: n = f.BRAND,
			size: a = h.MEDIUM,
			fullWidth: o = !1,
			grow: I = !0,
			disabled: m = !1,
			submitting: T = !1,
			type: g = 'button',
			style: S,
			wrapperClassName: A,
			className: N,
			innerClassName: v,
			onClick: O,
			onDoubleClick: R,
			onMouseDown: C,
			onMouseUp: y,
			onMouseEnter: D,
			onMouseLeave: L,
			onKeyDown: b,
			children: M,
			rel: P,
			buttonRef: U,
			focusProps: w,
			'aria-label': x,
			submittingStartedLabel: G,
			submittingFinishedLabel: k,
			...B
		} = e,
		F = m || T,
		V = F && (null != D || null != L),
		H = (function (e, t) {
			var n, r, i, a;
			let s = null == e ? void 0 : e.offset;
			if (t === E.LINK || t === E.BLANK) return s;
			if (null == s) return -2;
			if ('number' == typeof s) return s + 2;
			return {
				top: (null !== (n = s.top) && void 0 !== n ? n : 0) - 2,
				right: (null !== (r = s.right) && void 0 !== r ? r : 0) - 2,
				bottom: (null !== (i = s.bottom) && void 0 !== i ? i : 0) - 2,
				left: (null !== (a = s.left) && void 0 !== a ? a : 0) - 2
			};
		})(w, t),
		Z = i.useRef(!1);
	i.useEffect(() => {
		!0 === T && ((Z.current = !0), l.u.announce(null != G ? G : d.Z.Messages.A11Y_LOADING_STARTED)),
			!1 === T && !0 === Z.current && l.u.announce(null != k ? k : d.Z.Messages.A11Y_LOADING_FINISHED);
	}, [T, G, k]);
	let Y = (0, r.jsx)(u.t, {
		...w,
		offset: H,
		children: (0, r.jsxs)('button', {
			...(F ? null : B),
			'aria-label': x,
			'aria-busy': !!T || void 0,
			ref: U,
			onClick: F ? (e) => e.preventDefault() : O,
			onDoubleClick: F ? (e) => e.preventDefault() : R,
			onMouseUp: m ? void 0 : y,
			onMouseDown: m ? void 0 : C,
			onMouseEnter: D,
			onMouseLeave: L,
			onKeyDown: m ? void 0 : b,
			type: g,
			disabled: m,
			style: S,
			rel: P,
			className: s()(
				N,
				p({
					look: t,
					color: n,
					size: a,
					fullWidth: o,
					grow: I,
					submitting: T,
					disabled: m
				}),
				V ? null : A
			),
			children: [
				T && !m
					? (0, r.jsx)(c.$, {
							type: c.$.Type.PULSING_ELLIPSIS,
							className: _.spinner,
							itemClassName: _.spinnerItem
						})
					: null,
				(0, r.jsx)('div', {
					className: s()(_.contents, v),
					children: M
				})
			]
		})
	});
	return V
		? (0, r.jsxs)('span', {
				className: s()(_.disabledButtonWrapper, A, a, {
					[_.grow]: I,
					[_.fullWidth]: o
				}),
				children: [
					Y,
					(0, r.jsx)('span', {
						onMouseEnter: D,
						onMouseLeave: L,
						className: _.disabledButtonOverlay
					})
				]
			})
		: Y;
}
function m(e) {
	let {
		look: t = E.FILLED,
		color: n = f.BRAND,
		size: i = h.MEDIUM,
		fullWidth: a = !1,
		grow: l = !0,
		style: u,
		className: c,
		innerClassName: d,
		to: p,
		onClick: I,
		onMouseDown: m,
		onMouseUp: T,
		children: g,
		rel: S,
		...A
	} = e;
	return (0, r.jsx)(o.rU, {
		...A,
		to: p,
		onClick: I,
		onMouseUp: T,
		onMouseDown: m,
		style: u,
		rel: S,
		className: s()(c, _.button, t, n, i, {
			[_.fullWidth]: a,
			[_.grow]: l
		}),
		children: (0, r.jsx)('span', {
			className: s()(_.contents, d),
			children: g
		})
	});
}
(I.Looks = E), (I.Colors = f), (I.Sizes = h), (I.Link = m);
