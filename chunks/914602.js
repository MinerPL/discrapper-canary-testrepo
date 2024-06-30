n(47120);
var i, a = n(735250), s = n(470079), l = n(120356), r = n.n(l), o = n(86357), c = n(54936), d = n(55008), u = n(592771), _ = n(305177), E = n(73346), m = n(568836), I = n(345898), T = n(981631), h = n(624179);
function N(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class f extends (i = s.PureComponent) {
    render() {
        let {
                sku: e,
                storeListing: t,
                isHorizontal: n,
                className: i,
                renderCustomTagline: s,
                renderCustomTitle: l,
                renderCustomMedia: r,
                isEmbed: o
            } = this.props, c = o ? m.$G : I.Z;
        return (0, a.jsx)(c, {
            className: i,
            renderMedia: null != r ? r : this.renderMedia,
            renderTitle: null != l ? l : () => e.name,
            renderTagline: null != s ? s : () => t.tagline,
            renderActions: this.renderActions,
            isHorizontal: n
        });
    }
    constructor(...e) {
        super(...e), N(this, 'renderActions', () => {
            let {
                    inLibrary: e,
                    sku: t,
                    renderCustomActions: n,
                    isMouseOver: i,
                    showBuyInline: s
                } = this.props, l = (s || !t.requiresPayment) && !e;
            return null != n ? n() : (0, a.jsxs)('div', {
                className: h.priceOs,
                children: [
                    (0, a.jsx)(o.Z, {
                        type: o.Z.Types.DIRECTORY_TILE,
                        sku: t,
                        inLibrary: e,
                        className: l && i ? h.tilePriceWithVisibleBuyButton : h.tilePrice
                    }),
                    (0, a.jsx)(c.n, {
                        systems: [T.TaA.WINDOWS],
                        className: h.platform
                    }),
                    l ? (0, a.jsx)('div', { children: 'deprecated!' }) : null
                ]
            });
        }), N(this, 'renderMedia', () => {
            let {
                playing: e,
                muted: t,
                showMediaPlaceholder: n,
                onToggleMute: i,
                sku: l,
                isHorizontal: o,
                storeListing: c
            } = this.props;
            return (0, a.jsxs)(s.Fragment, {
                children: [
                    (0, a.jsx)(_.Z, {
                        className: r()(h.splashContainer, { [h.splashContainerHorizontal]: o }),
                        video: null != c.previewVideo ? (0, E._W)(l.applicationId, c.previewVideo) : void 0,
                        image: null != c.thumbnail ? (0, E._W)(l.applicationId, c.thumbnail, 600) : null,
                        title: l.name,
                        playing: e,
                        muted: t,
                        placeholder: n,
                        onToggleMute: i,
                        splashClassName: h.splashVideo,
                        splashPlaceholderClassName: h.splashPlaceholder
                    }),
                    l.exclusive ? (0, a.jsx)(d.Z, { className: r()(h.exclusiveRegular, { [h.exclusivePlaying]: e }) }) : l.isTheGameAwardsWinner ? (0, a.jsx)(u.Z, { className: r()(h.exclusiveRegular, { [h.exclusivePlaying]: e }) }) : null
                ]
            });
        });
    }
}
N(f, 'defaultProps', {
    showMediaPlaceholder: !1,
    isMouseOver: !1,
    showBuyInline: !1,
    isHorizontal: !1,
    isEmbed: !1
}), t.Z = f;
