n.d(e, {
    Pz: function () {
        return m;
    },
    am: function () {
        return g;
    }
}),
    n(47120);
var a,
    i = n(735250),
    o = n(470079),
    r = n(120356),
    s = n.n(r),
    l = n(481060),
    c = n(768762),
    u = n(935687);
function d(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let h = {
    CENTER: u.alignCenter,
    LEFT: u.alignLeft
};
class p extends (a = o.PureComponent) {
    componentDidUpdate(t) {
        let { selectedIndex: e } = this.props;
        t.selectedIndex !== e && this.handleSelectedIndexChange(e);
    }
    render() {
        let { renderItem: t, items: e, vertical: n, paginationContainerClass: a, align: r } = this.props,
            c = n ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
        return (0, i.jsx)(l.AdvancedScrollerAuto, {
            orientation: n ? 'vertical' : 'horizontal',
            className: s()(c, a, r),
            ref: this.handleSetScrollerRef,
            children: e.map((e, n) =>
                o.cloneElement(t(e, n), {
                    onClick: () => this.handlePageClick(n),
                    key: n,
                    ref: (t) => {
                        this._paginationItemRefs[n] = t;
                    }
                })
            )
        });
    }
    constructor(...t) {
        super(...t),
            d(this, '_scrollerRef', null),
            d(this, '_paginationItemRefs', []),
            d(this, 'handleSetScrollerRef', (t) => {
                this._scrollerRef = t;
            }),
            d(this, 'handleSelectedIndexChange', (t) => {
                let e = this._scrollerRef;
                if (null == e) return;
                let n = this._paginationItemRefs[t];
                if (null != n)
                    e.scrollIntoViewNode({
                        node: n,
                        animate: !0,
                        padding: this.props.scrollToPadding
                    });
            }),
            d(this, 'handlePageClick', (t) => {
                let { onSetItem: e } = this.props;
                e(t);
            });
    }
}
d(p, 'Align', h),
    d(p, 'defaultProps', {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: h.CENTER
    });
class g extends o.PureComponent {
    render() {
        let { className: t } = this.props;
        return (0, i.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            className: s()(u.prevButtonContainer, t),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(c.Z, {
                className: u.arrow,
                direction: c.Z.Directions.LEFT
            })
        });
    }
    constructor(...t) {
        super(...t),
            d(this, 'handlePrevClick', (t) => {
                t.stopPropagation(), t.preventDefault();
                let { onClick: e } = this.props;
                null == e || e(t);
            });
    }
}
class m extends o.PureComponent {
    render() {
        let { className: t } = this.props;
        return (0, i.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            className: s()(u.nextButtonContainer, t),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(c.Z, {
                className: u.arrow,
                direction: c.Z.Directions.RIGHT
            })
        });
    }
    constructor(...t) {
        super(...t),
            d(this, 'handleNextClick', (t) => {
                t.stopPropagation(), t.preventDefault();
                let { onClick: e } = this.props;
                null == e || e(t);
            });
    }
}
e.ZP = 12633 == n.j ? p : null;
