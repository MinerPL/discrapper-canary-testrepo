n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(377108),
    d = n(692547),
    _ = n(481060),
    E = n(68405),
    f = n(527429),
    h = n(656733),
    p = n(251625),
    I = n(985375),
    m = n(132748),
    T = n(353903),
    S = n(215016),
    g = n(981631),
    A = n(689938),
    N = n(886332);
function O(e, t, n) {
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
let R = (e, t) => (0, r.jsx)(T.G0, { columns: e }, t);
class v extends i.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, E.Tg)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, icon: n, type: a } = e;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)('div', { className: a === g.wI2.FAVORITES ? N.categoryFadeBlurple : N.categoryFade }),
                (0, r.jsxs)('div', {
                    className: N.categoryText,
                    children: [
                        null != n
                            ? (0, r.jsx)(n, {
                                  className: N.categoryIcon,
                                  color: 'currentColor'
                              })
                            : null,
                        (0, r.jsx)('span', {
                            className: N.categoryName,
                            children: t
                        })
                    ]
                })
            ]
        });
    }
    render() {
        return (0, r.jsx)(f.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, r.jsx)(m.Z, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent
            })
        });
    }
    constructor(...e) {
        super(...e),
            O(this, '_masonryRef', i.createRef()),
            O(this, 'state', {
                favoritesTile: (function (e) {
                    var t;
                    let n = l().sample(l().values(e));
                    return {
                        type: g.wI2.FAVORITES,
                        name: A.Z.Messages.CATEGORY_FAVORITE,
                        icon: _.StarIcon,
                        src: null != n ? n.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
                        format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : c.EO.IMAGE
                    };
                })(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
                focusedId: null
            }),
            O(this, 'handleFocus', (e) => {
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
            O(this, 'handleSelect', (e) => {
                let { onSelectItem: t } = this.props,
                    n = this.getData().find((t) => t.name === e);
                null != n && null != t && t(n.type, n.name);
            }),
            O(this, 'getItemKey', (e, t) => {
                if (e > 0) return null;
                let n = this.getData()[t];
                return null != n ? n.name : null;
            }),
            O(
                this,
                'memoizedData',
                (0, p.oH)(function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? [...t] : [e, ...t];
                })
            ),
            O(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let a = this.getData()[t];
                if (null == a) return;
                let { onSelectItem: s, imagePool: o, videoPool: l } = this.props,
                    { focusedId: u } = this.state;
                return (0, r.jsx)(
                    S.iR,
                    {
                        format: a.format,
                        color: d.Z.unsafe_rawColors.PRIMARY_800.css,
                        src: a.src,
                        item: a,
                        index: t,
                        coords: n,
                        onClick: () => s(a.type, a.name),
                        renderExtras: this.renderCategoryExtras,
                        focused: a.name === u,
                        imagePool: o,
                        videoPool: l
                    },
                    i
                );
            }),
            O(this, 'renderContent', (e, t, n) => {
                let { className: i, trendingCategories: a } = this.props;
                return 0 === a.length
                    ? (0, r.jsx)(T.u$, {
                          columns: e,
                          width: t,
                          renderColumn: R
                      })
                    : (0, r.jsx)(_.MasonryList, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: s()(N.container, i),
                          itemGutter: 12,
                          getItemKey: this.getItemKey,
                          columns: e,
                          getItemHeight: () => 110,
                          renderItem: this.renderItem,
                          sections: [this.getData().length],
                          chunkSize: 50
                      });
            }),
            O(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            O(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function C(e) {
    let t = (0, u.e7)([h.Z], () => h.Z.getTrendingCategories()),
        n = (0, I.gG)(),
        i = (0, S.PY)();
    return (0, r.jsx)(v, {
        ...e,
        ...i,
        trendingCategories: t,
        favorites: n
    });
}
