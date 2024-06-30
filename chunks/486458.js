n.d(t, {
    ZP: function () {
        return T;
    },
    cy: function () {
        return a;
    },
    iu: function () {
        return i;
    }
}), n(47120);
var i, a, l, s, r, o = n(735250), c = n(470079), u = n(120356), d = n.n(u), h = n(780384), p = n(481060), m = n(626135), _ = n(792125), f = n(285952), E = n(981631), C = n(689938), g = n(634642);
function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
(s = i || (i = {})).CENTER = 'center', s.LEFT = 'left', (r = a || (a = {})).TOP = 'top', r.MIDDLE = 'middle';
class x extends c.PureComponent {
    componentDidMount() {
        let {uniqueId: e} = this.props;
        m.default.track(E.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        m.default.track(E.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed
        });
    }
    render() {
        let {
                renderMedia: e,
                textAlign: t,
                isLongText: n,
                title: i,
                body: a,
                className: l,
                forceTheme: s,
                onClickSkipAll: r
            } = this.props, c = 'left' === t || n, u = 'center' === t || !c;
        return (0, o.jsxs)(p.Dialog, {
            className: d()(g.popoutRoot, l),
            children: [
                null != e && (0, o.jsx)(f.Z, {
                    className: g.mediaContainer,
                    justify: c ? f.Z.Justify.START : f.Z.Justify.CENTER,
                    children: e()
                }),
                (0, o.jsx)(p.H, {
                    className: d()({
                        [g.titleCenter]: u,
                        [g.titleLeft]: c
                    }),
                    children: i
                }),
                (0, o.jsx)('string' == typeof a ? 'p' : 'div', {
                    className: d()({
                        [g.bodyCenter]: u,
                        [g.bodyLeft]: c
                    }),
                    children: a
                }),
                (0, o.jsxs)(f.Z, {
                    className: g.buttonContainer,
                    justify: c ? f.Z.Justify.BETWEEN : f.Z.Justify.CENTER,
                    children: [
                        (0, o.jsx)(p.Button, {
                            size: p.ButtonSizes.SMALL,
                            onClick: this.handleDismiss,
                            children: C.Z.Messages.TUTORIAL_CLOSE
                        }),
                        (0, o.jsx)(p.Button, {
                            size: p.ButtonSizes.SMALL,
                            look: p.Button.Looks.BLANK,
                            onClick: r,
                            color: (0, h.ap)(s) ? p.Button.Colors.PRIMARY : p.Button.Colors.WHITE,
                            className: c ? g.buttonSkipLeftAlign : g.buttonSkipCenterAlign,
                            children: C.Z.Messages.SKIP_ALL_TIPS
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e), I(this, 'state', { confirmed: !1 }), I(this, 'handleDismiss', () => {
            let {onClickComplete: e} = this.props;
            this.setState({ confirmed: !0 }, () => null == e ? void 0 : e());
        });
    }
}
class T extends (l = c.PureComponent) {
    render() {
        let {
                renderMedia: e,
                textAlign: t,
                onComplete: n,
                onSkipAll: i,
                isLongText: a,
                title: l,
                body: s,
                children: r,
                spacing: c,
                forceTheme: u,
                ...d
            } = this.props, h = 'top' === d.position || 'bottom' === d.position ? 'center' : 'top';
        return (0, o.jsx)(p.Popout, {
            ...d,
            align: h,
            spacing: null != c ? c : 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: r
        });
    }
    constructor(...e) {
        super(...e), I(this, 'onClickComplete', e => {
            e(), this.props.onComplete();
        }), I(this, 'onClickSkipAll', e => {
            let {
                onSkipAll: t,
                uniqueId: n
            } = this.props;
            e(), t(), m.default.track(E.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
        }), I(this, 'renderPopoutContent', e => {
            let {
                    closePopout: t,
                    position: n
                } = e, {
                    forceTheme: i,
                    isLongText: a,
                    arrowAlignment: l,
                    renderMedia: s
                } = this.props, r = null != s;
            return (0, o.jsx)(x, {
                ...this.props,
                className: d()({
                    [g.bottom]: 'bottom' === n,
                    [g.contentNarrowNoMedia]: !a && !r,
                    [g.contentNarrowWithMedia]: !a && r,
                    [g.contentWideNoMedia]: a && !r,
                    [g.contentWideWithMedia]: a && r,
                    [g.right]: 'right' === n,
                    [g.top]: 'top' === n,
                    [g.left]: 'left' === n,
                    [g.arrowAlignmentTop]: 'top' === l,
                    [g.arrowAlignmentMiddle]: 'middle' === l,
                    'force-theme': null != i
                }, (0, _.Q)(i)),
                onClickComplete: () => this.onClickComplete(t),
                onClickSkipAll: () => this.onClickSkipAll(t)
            });
        });
    }
}
I(T, 'TextAlignments', i), I(T, 'defaultProps', { textAlign: 'left' });
