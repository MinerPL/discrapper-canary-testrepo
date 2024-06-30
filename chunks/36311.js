n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(442837), o = n(481060), c = n(749210), u = n(594174), d = n(499371), h = n(63063), p = n(981631), m = n(689938), _ = n(120841);
function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class E extends a.PureComponent {
    componentDidMount() {
        let {current: e} = this.scroller;
        null == e || e.scrollToBottom();
    }
    render() {
        let {nsfwDisallowed: e} = this.props, t = m.Z.Messages.NSFW_DESCRIPTION;
        t = e ? m.Z.Messages.AGE_GATE_NSFW_UNDERAGE_BODY.format({ helpURL: h.Z.getArticleURL(p.BhN.NSFW_AGE_GATING) }) : m.Z.Messages.AGE_GATE_NSFW_DESCRIPTION;
        let n = e ? (0, i.jsx)(d.Z, {
            onAgree: this.handleAgree,
            onDisagree: this.handleDisagree,
            title: m.Z.Messages.AGE_GATE_NSFW_UNDERAGE_HEADER,
            description: t,
            agreement: null,
            disagreement: m.Z.Messages.BACK,
            imageClassName: _.ageGatedImage
        }) : (0, i.jsx)(d.Z, {
            onAgree: this.handleAgree,
            onDisagree: this.handleDisagree,
            title: m.Z.Messages.NSFW_TITLE,
            description: t,
            agreement: m.Z.Messages.NSFW_ACCEPT,
            disagreement: m.Z.Messages.NSFW_DECLINE
        });
        return (0, i.jsx)(o.AdvancedScroller, {
            ref: this.scroller,
            className: _.scroller,
            children: (0, i.jsx)('div', {
                className: s()(this.props.className, _.wrapper),
                children: n
            })
        });
    }
    constructor(...e) {
        super(...e), f(this, 'scroller', a.createRef()), f(this, 'handleDisagree', () => {
            let {guild: e} = this.props;
            null != e && c.Z.nsfwReturnToSafety(e.id);
        }), f(this, 'handleAgree', () => {
            let {guild: e} = this.props;
            null != e && c.Z.nsfwAgree(e.id);
        });
    }
}
t.Z = r.ZP.connectStores([u.default], () => {
    var e;
    return { nsfwDisallowed: (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1 };
})(E);
