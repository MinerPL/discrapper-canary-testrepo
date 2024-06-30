n.d(t, {
    Z: function () {
        return N;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(481060), o = n(570140), c = n(150063), d = n(274616), u = n(827837), _ = n(410575), E = n(3570), h = n(237919), I = n(957657), m = n(665307), p = n(530151), g = n(981631), T = n(186901), S = n(916518);
function C(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class N extends s.PureComponent {
    componentDidMount() {
        c.Y(g.Z5c.APPLICATION_LIBRARY), (0, E.T)(T.jE.LIBRARY), o.Z.wait(() => (0, d.o)()), (0, u.N)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding);
    }
    renderToolbar() {
        return (0, i.jsx)(h.Z, {});
    }
    render() {
        let {includeUpdatesInScroller: e} = this.state, t = (0, i.jsx)('div', {
                children: (0, i.jsx)(_.Z, {
                    section: g.jXE.LIBRARY_INSTALL_MODULE,
                    children: (0, i.jsx)(p.Z, { onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange })
                })
            });
        return (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(I.Z, {
                    currentRoute: g.Z5c.APPLICATION_LIBRARY,
                    renderToolbar: this.renderToolbar
                }),
                e ? null : t,
                (0, i.jsxs)(l.AdvancedScrollerAuto, {
                    className: r()(S.container, S.scroller),
                    ref: this._scrollerRef,
                    children: [
                        e ? t : null,
                        (0, i.jsx)(_.Z, {
                            section: g.jXE.LIBRARY_APPLICATION_LIST,
                            children: (0, i.jsx)(m.Z, {
                                stickyHeader: !e,
                                scrollToRow: this.scrollToRow
                            })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), C(this, '_scrollerRef', s.createRef()), C(this, '_scrollToOnMount', void 0), C(this, '_scrollToPadding', 0), C(this, 'state', { includeUpdatesInScroller: !1 }), C(this, 'handleHeightTallerThanHalfViewportChange', e => {
            this.setState({ includeUpdatesInScroller: e });
        }), C(this, 'scrollToRow', (e, t) => {
            let n = this._scrollerRef.current;
            null != n ? (e.focus(), n.scrollIntoViewRect({
                start: t,
                end: t
            }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t);
        });
    }
}
