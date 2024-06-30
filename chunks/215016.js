n.d(t, {
    PY: function () {
        return P;
    },
    iR: function () {
        return b;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(392711), l = n.n(s), u = n(944611), c = n(377108), d = n(692547), _ = n(481060), E = n(68405), f = n(527429), h = n(788911), p = n(40851), m = n(29909), I = n(132748), T = n(981631), g = n(689938), S = n(13122);
function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let N = [
        d.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css,
        d.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css,
        '#929AFA'
    ], v = 1220, O = Array.from({ length: 16 }).map((e, t) => ({
        id: ''.concat(t),
        height: Math.floor(100 * Math.random()) + 120
    }));
function R(e) {
    var t;
    return null !== (t = e.id) && void 0 !== t ? t : e.src;
}
function C(e, t) {
    let n = O[t];
    return null == n ? 0 : n.height;
}
function y(e, t, n, i) {
    if (!(e > 0))
        return null == O[t] ? null : (0, r.jsx)('div', {
            className: S.placeholder,
            style: {
                animationDelay: ''.concat(75 * t, 'ms'),
                ...n
            }
        }, i);
}
function D(e, t) {
    var n, r;
    return e > 0 ? '' : null !== (r = null === (n = O[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : '';
}
function L(e) {
    return e === c.EO.VIDEO;
}
class b extends i.PureComponent {
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: {
                    width: n,
                    height: r
                },
                videoPool: i
            },
            ref: a
        } = this;
        if (e !== c.EO.VIDEO || null == a)
            return;
        let o = i.getElement();
        o.oncanplay = this.handleCanPlay, o.src = t, o.width = n, o.height = r, a.appendChild(o), this._video = o;
    }
    componentDidUpdate(e) {
        let {
            width: t,
            height: n
        } = this.props.coords;
        null != this._video && (e.coords.width !== t || e.coords.height !== n) && (this._video.width = t, this._video.height = n);
    }
    componentWillUnmount() {
        this._mounted = !1;
        let {
                _image: e,
                _video: t
            } = this, {
                imagePool: n,
                videoPool: r
            } = this.props;
        null != e && (this._image = null, n.poolElement(e)), null != t && (this._video = null, r.poolElement(t));
    }
    renderGIF() {
        let {
                src: e,
                coords: {
                    width: t,
                    height: n
                }
            } = this.props, {loaded: i} = this.state;
        return i ? (0, r.jsx)('img', {
            src: e,
            width: t,
            height: n,
            className: S.gif,
            alt: ''
        }) : null;
    }
    render() {
        let {
                item: e,
                renderExtras: t,
                format: n,
                coords: i,
                focused: a
            } = this.props, {
                color: s,
                loaded: l
            } = this.state;
        return (0, r.jsxs)(_.Clickable, {
            tabIndex: -1,
            innerRef: e => {
                this.ref = e;
            },
            className: o()(S.result, { [S.focused]: a }),
            onClick: this.handleClick,
            style: {
                backgroundColor: l ? void 0 : s,
                ...i
            },
            children: [
                L(n) ? null : this.renderGIF(),
                null != t ? t(e) : null
            ]
        });
    }
    constructor(e) {
        super(e), A(this, 'ref', null), A(this, '_video', null), A(this, '_image', null), A(this, '_mounted', !0), A(this, 'handleCanPlay', () => {
            this._mounted && this.setState({ loaded: !0 });
        }), A(this, 'handleClick', () => {
            let {
                onClick: e,
                item: t,
                index: n
            } = this.props;
            null != e && e(t, n);
        });
        let {
            format: t,
            color: n,
            imagePool: r
        } = this.props;
        this.state = {
            color: null == n ? l().sample(N) : n,
            loaded: !1
        }, !L(t) && (this._image = r.getElement(), this._image.onload = () => this.setState({ loaded: !0 }), this._image.src = e.src);
    }
}
class M extends i.PureComponent {
    componentDidMount() {
        let {
            resultType: e,
            data: t
        } = this.props;
        e === T.wI2.FAVORITES && ((0, E.t1)(T.wI2.FAVORITES), (0, E.hM)(t, T.wI2.FAVORITES, { limit: null }));
    }
    selectItem(e, t) {
        let {
            onSelectGIF: n,
            resultType: r,
            data: i,
            resultQuery: a
        } = this.props;
        null != n && n(e), (0, E.R7)({
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
            className: S.emptyHint,
            children: null != e ? (0, r.jsxs)('div', {
                className: S.emptyHintCard,
                children: [
                    t ? (0, r.jsx)(_.StarIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: S.emptyHintFavorite
                    }) : null,
                    (0, r.jsx)('div', {
                        className: S.emptyHintText,
                        children: e
                    })
                ]
            }) : (0, r.jsx)('div', { className: S.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(_.Scroller, {
            className: S.results,
            fade: !0,
            children: (0, r.jsxs)('div', {
                className: S.emptyHints,
                children: [
                    this.renderEmptyFavorite(g.Z.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0),
                    this.renderEmptyFavorite(g.Z.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE),
                    this.renderEmptyFavorite(g.Z.Messages.NO_GIF_FAVORITES_GO_FAVORITE),
                    Array.from({ length: 15 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)),
                    this.renderEmptyFavorite(g.Z.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE),
                    Array.from({ length: 16 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)),
                    this.renderEmptyFavorite(g.Z.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)
                ]
            })
        });
    }
    render() {
        let {
            data: e,
            resultQuery: t,
            query: n,
            resultType: i
        } = this.props;
        return 0 === e.length && t === n && i !== T.wI2.TRENDING_GIFS ? i === T.wI2.FAVORITES ? this.renderEmptyFavorites() : (0, r.jsx)(h.Z, {
            message: g.Z.Messages.NO_GIF_SEARCH_RESULTS,
            className: S.noResults
        }) : (0, r.jsx)(f.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, r.jsx)(I.Z, {
                desiredItemWidth: 200,
                maxColumns: 8,
                children: this.renderContent
            })
        }, t);
    }
    constructor(...e) {
        super(...e), A(this, '_masonryRef', i.createRef()), A(this, 'prevResultQuery', null), A(this, 'state', { focusedId: null }), A(this, 'handleFocus', e => {
            let {current: t} = this._masonryRef;
            if (null == t)
                return;
            let n = t.getCoordsMap()[e];
            null != n && (t.scrollIntoViewRect({
                start: n.top - 10,
                end: n.top + n.height + 10
            }), this.setState({ focusedId: e }));
        }), A(this, 'handleSelect', e => {
            let t;
            let {data: n} = this.props, r = n.findIndex(t => R(t) === e);
            -1 !== r && (t = n[r]), null != t && this.selectItem(t, r);
        }), A(this, 'handleClickItem', (e, t) => {
            this.selectItem(e, t);
        }), A(this, 'handleScroll', () => {
            let {resultQuery: e} = this.props, {current: t} = this._masonryRef;
            if (null == t)
                return;
            let {
                scrollTop: n,
                scrollHeight: r
            } = t.getScrollerState();
            r - n <= v && (e !== this.prevResultQuery && (0, E.mO)(e), this.prevResultQuery = e);
        }), A(this, 'renderItem', (e, t, n, i) => {
            if (e > 0)
                return null;
            let {focusedId: a} = this.state, o = this.props.data[t];
            return null == o ? null : (0, r.jsx)(b, {
                item: o,
                index: t,
                format: o.format,
                src: o.src,
                coords: n,
                onClick: this.handleClickItem,
                renderExtras: () => (0, r.jsx)(m.Z, {
                    className: S.favButton,
                    ...o
                }),
                focused: R(o) === a,
                imagePool: this.props.imagePool,
                videoPool: this.props.videoPool
            }, i);
        }), A(this, 'getItemHeight', (e, t, n) => {
            if (e > 0)
                return 0;
            let r = this.props.data[t];
            return null == r ? 0 : n * (r.height / r.width);
        }), A(this, 'getItemKey', (e, t) => {
            var n;
            if (e > 0)
                return null;
            let r = this.props.data[t];
            return null != r ? null !== (n = r.id) && void 0 !== n ? n : r.src : null;
        }), A(this, 'renderSection', (e, t, n) => {
            let {
                onSelectSuggestion: a,
                suggestions: o
            } = this.props;
            return 1 === e ? (0, r.jsx)('div', {
                className: S.endContainer,
                style: t,
                children: o.length > 0 ? (0, r.jsxs)(i.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: S.endText,
                            children: g.Z.Messages.GIF_PICKER_RELATED_SEARCH
                        }),
                        (0, r.jsx)('div', {
                            className: S.searchSuggestions,
                            children: o.map(e => (0, r.jsx)(_.Button, {
                                look: _.Button.Looks.OUTLINED,
                                color: _.Button.Colors.PRIMARY,
                                size: _.Button.Sizes.SMALL,
                                className: S.searchSuggestion,
                                onClick: () => {
                                    a(e);
                                },
                                children: e
                            }, e))
                        })
                    ]
                }) : null
            }, n) : null;
        }), A(this, 'renderContent', (e, t, n) => {
            let {
                data: i,
                resultQuery: a,
                query: o,
                resultType: s
            } = this.props;
            return 0 === i.length && (a !== o || s === T.wI2.TRENDING_GIFS) ? (0, r.jsx)(_.MasonryList, {
                fade: !0,
                className: S.results,
                sections: [O.length],
                columns: e,
                itemGutter: 12,
                getItemKey: D,
                getItemHeight: C,
                renderItem: y,
                chunkSize: 128
            }, a) : (0, r.jsx)(_.MasonryList, {
                ref: this._masonryRef,
                fade: !0,
                itemGutter: 12,
                className: S.results,
                columns: e,
                sections: [
                    i.length,
                    0
                ],
                getItemKey: this.getItemKey,
                getItemHeight: this.getItemHeight,
                renderItem: this.renderItem,
                getSectionHeight: this.getSectionHeight,
                renderSection: this.renderSection,
                onScroll: this.handleScroll,
                chunkSize: 128
            }, ''.concat(a, '-').concat(null != s ? s : ''));
        }), A(this, 'getItemGrid', () => {
            let {current: e} = this._masonryRef;
            return null != e ? e.getItemGrid() : [];
        }), A(this, 'getCoordsMap', () => {
            let {current: e} = this._masonryRef;
            return null != e ? e.getCoordsMap() : {};
        });
    }
}
function P() {
    let {renderWindow: e} = i.useContext(p.ZP), t = e.document, [n] = i.useState(() => new u.w(() => t.createElement('img'), e => {
            e.onload = null, e.src = '';
        })), [r] = i.useState(() => new u.w(() => {
            let e = t.createElement('video');
            return e.className = S.gif, e.autoplay = !0, e.loop = !0, e.muted = !0, e.preload = 'auto', e.controls = !1, e;
        }, e => {
            e.src = '', e.oncanplay = null;
            let {parentNode: t} = e;
            null != t && t.removeChild(e);
        }));
    return {
        imagePool: n,
        videoPool: r
    };
}
t.ZP = function (e) {
    let t = P();
    return (0, r.jsx)(M, {
        ...e,
        ...t
    });
};
