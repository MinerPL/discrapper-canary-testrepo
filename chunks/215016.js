n.d(t, {
	PY: function () {
		return b;
	},
	iR: function () {
		return D;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(392711),
	s = n.n(a),
	o = n(944611),
	l = n(377108),
	u = n(692547),
	c = n(481060),
	d = n(68405),
	_ = n(527429),
	E = n(788911),
	f = n(40851),
	h = n(29909),
	p = n(132748),
	m = n(981631),
	I = n(689938),
	T = n(891883);
function g(e, t, n) {
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
let S = [u.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, u.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
	A = 1220,
	N = Array.from({ length: 16 }).map((e, t) => ({
		id: ''.concat(t),
		height: Math.floor(100 * Math.random()) + 120
	}));
function v(e) {
	var t;
	return null !== (t = e.id) && void 0 !== t ? t : e.src;
}
function O(e, t) {
	let n = N[t];
	return null == n ? 0 : n.height;
}
function R(e, t, n, i) {
	if (!(e > 0))
		return null == N[t]
			? null
			: (0, r.jsx)(
					'div',
					{
						className: T.placeholder,
						style: {
							animationDelay: ''.concat(75 * t, 'ms'),
							...n
						}
					},
					i
				);
}
function C(e, t) {
	var n, r;
	return e > 0 ? '' : null !== (r = null === (n = N[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : '';
}
function y(e) {
	return e === l.EO.VIDEO;
}
class D extends i.PureComponent {
	componentDidMount() {
		let {
			props: {
				format: e,
				src: t,
				coords: { width: n, height: r },
				videoPool: i
			},
			ref: a
		} = this;
		if (e !== l.EO.VIDEO || null == a) return;
		let s = i.getElement();
		(s.oncanplay = this.handleCanPlay), (s.src = t), (s.width = n), (s.height = r), a.appendChild(s), (this._video = s);
	}
	componentDidUpdate(e) {
		let { width: t, height: n } = this.props.coords;
		null != this._video && (e.coords.width !== t || e.coords.height !== n) && ((this._video.width = t), (this._video.height = n));
	}
	componentWillUnmount() {
		this._mounted = !1;
		let { _image: e, _video: t } = this,
			{ imagePool: n, videoPool: r } = this.props;
		null != e && ((this._image = null), n.poolElement(e)), null != t && ((this._video = null), r.poolElement(t));
	}
	renderGIF() {
		let {
				src: e,
				coords: { width: t, height: n }
			} = this.props,
			{ loaded: i } = this.state;
		return i
			? (0, r.jsx)('img', {
					src: e,
					width: t,
					height: n,
					className: T.gif,
					alt: ''
				})
			: null;
	}
	render() {
		let { item: e, renderExtras: t, format: n, coords: i, focused: a } = this.props,
			{ color: s, loaded: o } = this.state;
		return (0, r.jsxs)(c.Clickable, {
			tabIndex: -1,
			innerRef: (e) => {
				this.ref = e;
			},
			className: T.result,
			'data-focused': a,
			onClick: this.handleClick,
			style: {
				backgroundColor: o ? void 0 : s,
				...i
			},
			children: [y(n) ? null : this.renderGIF(), null != t ? t(e) : null]
		});
	}
	constructor(e) {
		super(e),
			g(this, 'ref', null),
			g(this, '_video', null),
			g(this, '_image', null),
			g(this, '_mounted', !0),
			g(this, 'handleCanPlay', () => {
				this._mounted && this.setState({ loaded: !0 });
			}),
			g(this, 'handleClick', () => {
				let { onClick: e, item: t, index: n } = this.props;
				null != e && e(t, n);
			});
		let { format: t, color: n, imagePool: r } = this.props;
		(this.state = {
			color: null == n ? s().sample(S) : n,
			loaded: !1
		}),
			!y(t) && ((this._image = r.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src));
	}
}
class L extends i.PureComponent {
	componentDidMount() {
		let { resultType: e, data: t } = this.props;
		e === m.wI2.FAVORITES && ((0, d.t1)(m.wI2.FAVORITES), (0, d.hM)(t, m.wI2.FAVORITES, { limit: null }));
	}
	selectItem(e, t) {
		let { onSelectGIF: n, resultType: r, data: i, resultQuery: a } = this.props;
		null != n && n(e),
			(0, d.R7)({
				type: r,
				index: t,
				offset: this.props.searchOffset,
				limit: this.props.searchLimit,
				results: i,
				totalResults: this.props.searchTotalResults,
				query: a,
				gifId: e.id
			});
	}
	getSectionHeight(e) {
		return 1 === e ? 220 : 0;
	}
	renderEmptyFavorite(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return (0, r.jsx)('div', {
			className: T.emptyHint,
			children:
				null != e
					? (0, r.jsxs)('div', {
							className: T.emptyHintCard,
							children: [
								t
									? (0, r.jsx)(c.StarIcon, {
											size: 'xs',
											color: 'currentColor',
											className: T.emptyHintFavorite
										})
									: null,
								(0, r.jsx)('div', {
									className: T.emptyHintText,
									children: e
								})
							]
						})
					: (0, r.jsx)('div', { className: T.emptyHintSpacer })
		});
	}
	renderEmptyFavorites() {
		return (0, r.jsx)(c.Scroller, {
			className: T.results,
			fade: !0,
			children: (0, r.jsxs)('div', {
				className: T.emptyHints,
				children: [this.renderEmptyFavorite(I.Z.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(I.Z.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(I.Z.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({ length: 15 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(I.Z.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({ length: 16 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(I.Z.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
			})
		});
	}
	render() {
		let { data: e, resultQuery: t, query: n, resultType: i } = this.props;
		return 0 === e.length && t === n && i !== m.wI2.TRENDING_GIFS
			? i === m.wI2.FAVORITES
				? this.renderEmptyFavorites()
				: (0, r.jsx)(E.Z, {
						message: I.Z.Messages.NO_GIF_SEARCH_RESULTS,
						className: T.noResults
					})
			: (0, r.jsx)(
					_.Z,
					{
						getItemGrid: this.getItemGrid,
						getCoordsMap: this.getCoordsMap,
						onFocus: this.handleFocus,
						onSelect: this.handleSelect,
						children: (0, r.jsx)(p.Z, {
							desiredItemWidth: 200,
							maxColumns: 8,
							children: this.renderContent
						})
					},
					t
				);
	}
	constructor(...e) {
		super(...e),
			g(this, '_masonryRef', i.createRef()),
			g(this, 'prevResultQuery', null),
			g(this, 'state', { focusedId: null }),
			g(this, 'handleFocus', (e) => {
				let { current: t } = this._masonryRef;
				if (null == t) return;
				let n = t.getCoordsMap()[e];
				null != n &&
					(t.scrollIntoViewRect({
						start: n.top - 10,
						end: n.top + n.height + 10
					}),
					this.setState({ focusedId: e }));
			}),
			g(this, 'handleSelect', (e) => {
				let t;
				let { data: n } = this.props,
					r = n.findIndex((t) => v(t) === e);
				-1 !== r && (t = n[r]), null != t && this.selectItem(t, r);
			}),
			g(this, 'handleClickItem', (e, t) => {
				this.selectItem(e, t);
			}),
			g(this, 'handleScroll', () => {
				let { resultQuery: e } = this.props,
					{ current: t } = this._masonryRef;
				if (null == t) return;
				let { scrollTop: n, scrollHeight: r } = t.getScrollerState();
				r - n <= A && (e !== this.prevResultQuery && (0, d.mO)(e), (this.prevResultQuery = e));
			}),
			g(this, 'renderItem', (e, t, n, i) => {
				if (e > 0) return null;
				let { focusedId: a } = this.state,
					s = this.props.data[t];
				return null == s
					? null
					: (0, r.jsx)(
							D,
							{
								item: s,
								index: t,
								format: s.format,
								src: s.src,
								coords: n,
								onClick: this.handleClickItem,
								renderExtras: () =>
									(0, r.jsx)(h.Z, {
										className: T.favButton,
										...s
									}),
								focused: v(s) === a,
								imagePool: this.props.imagePool,
								videoPool: this.props.videoPool
							},
							i
						);
			}),
			g(this, 'getItemHeight', (e, t, n) => {
				if (e > 0) return 0;
				let r = this.props.data[t];
				return null == r ? 0 : n * (r.height / r.width);
			}),
			g(this, 'getItemKey', (e, t) => {
				var n;
				if (e > 0) return null;
				let r = this.props.data[t];
				return null != r ? (null !== (n = r.id) && void 0 !== n ? n : r.src) : null;
			}),
			g(this, 'renderSection', (e, t, n) => {
				let { onSelectSuggestion: a, suggestions: s } = this.props;
				return 1 === e
					? (0, r.jsx)(
							'div',
							{
								className: T.endContainer,
								style: t,
								children:
									s.length > 0
										? (0, r.jsxs)(i.Fragment, {
												children: [
													(0, r.jsx)('div', {
														className: T.endText,
														children: I.Z.Messages.GIF_PICKER_RELATED_SEARCH
													}),
													(0, r.jsx)('div', {
														className: T.searchSuggestions,
														children: s.map((e) =>
															(0, r.jsx)(
																c.Button,
																{
																	look: c.Button.Looks.OUTLINED,
																	color: c.Button.Colors.PRIMARY,
																	size: c.Button.Sizes.SMALL,
																	className: T.searchSuggestion,
																	onClick: () => {
																		a(e);
																	},
																	children: e
																},
																e
															)
														)
													})
												]
											})
										: null
							},
							n
						)
					: null;
			}),
			g(this, 'renderContent', (e, t, n) => {
				let { data: i, resultQuery: a, query: s, resultType: o } = this.props;
				return 0 === i.length && (a !== s || o === m.wI2.TRENDING_GIFS)
					? (0, r.jsx)(
							c.MasonryList,
							{
								fade: !0,
								className: T.results,
								sections: [N.length],
								columns: e,
								itemGutter: 12,
								getItemKey: C,
								getItemHeight: O,
								renderItem: R,
								chunkSize: 128
							},
							a
						)
					: (0, r.jsx)(
							c.MasonryList,
							{
								ref: this._masonryRef,
								fade: !0,
								itemGutter: 12,
								className: T.results,
								columns: e,
								sections: [i.length, 0],
								getItemKey: this.getItemKey,
								getItemHeight: this.getItemHeight,
								renderItem: this.renderItem,
								getSectionHeight: this.getSectionHeight,
								renderSection: this.renderSection,
								onScroll: this.handleScroll,
								chunkSize: 128
							},
							''.concat(a, '-').concat(null != o ? o : '')
						);
			}),
			g(this, 'getItemGrid', () => {
				let { current: e } = this._masonryRef;
				return null != e ? e.getItemGrid() : [];
			}),
			g(this, 'getCoordsMap', () => {
				let { current: e } = this._masonryRef;
				return null != e ? e.getCoordsMap() : {};
			});
	}
}
function b() {
	let { renderWindow: e } = i.useContext(f.ZP),
		t = e.document,
		[n] = i.useState(
			() =>
				new o.w(
					() => t.createElement('img'),
					(e) => {
						(e.onload = null), (e.src = '');
					}
				)
		),
		[r] = i.useState(
			() =>
				new o.w(
					() => {
						let e = t.createElement('video');
						return (e.className = T.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e;
					},
					(e) => {
						(e.src = ''), (e.oncanplay = null);
						let { parentNode: t } = e;
						null != t && t.removeChild(e);
					}
				)
		);
	return {
		imagePool: n,
		videoPool: r
	};
}
t.ZP = function (e) {
	let t = b();
	return (0, r.jsx)(L, {
		...e,
		...t
	});
};
