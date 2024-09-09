n.d(t, {
    ZP: function () {
        return x;
    },
    cy: function () {
        return s;
    },
    iu: function () {
        return i;
    }
}),
    n(47120);
var i,
    s,
    a,
    l,
    r,
    o = n(735250),
    c = n(470079),
    u = n(120356),
    d = n.n(u),
    h = n(780384),
    m = n(481060),
    p = n(626135),
    _ = n(600164),
    f = n(981631),
    E = n(689938),
    g = n(834095);
function C(e, t, n) {
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
((l = i || (i = {})).CENTER = 'center'), (l.LEFT = 'left'), ((r = s || (s = {})).TOP = 'top'), (r.MIDDLE = 'middle');
class I extends c.PureComponent {
    componentDidMount() {
        let { uniqueId: e } = this.props;
        p.default.track(f.rMx.SHOW_TUTORIAL, { tutorial: e });
    }
    componentWillUnmount() {
        p.default.track(f.rMx.CLOSE_TUTORIAL, {
            tutorial: this.props.uniqueId,
            acknowledged: this.state.confirmed
        });
    }
    render() {
        let { renderMedia: e, textAlign: t, isLongText: n, title: i, body: s, className: a, forceTheme: l, onClickSkipAll: r } = this.props,
            c = 'left' === t || n,
            u = 'center' === t || !c;
        return (0, o.jsxs)(m.Dialog, {
            className: d()(g.popoutRoot, a),
            children: [
                null != e &&
                    (0, o.jsx)(_.Z, {
                        className: g.mediaContainer,
                        justify: c ? _.Z.Justify.START : _.Z.Justify.CENTER,
                        children: e()
                    }),
                (0, o.jsx)(m.H, {
                    className: d()({
                        [g.titleCenter]: u,
                        [g.titleLeft]: c
                    }),
                    children: i
                }),
                (0, o.jsx)('string' == typeof s ? 'p' : 'div', {
                    className: d()({
                        [g.bodyCenter]: u,
                        [g.bodyLeft]: c
                    }),
                    children: s
                }),
                (0, o.jsxs)(_.Z, {
                    className: g.buttonContainer,
                    justify: c ? _.Z.Justify.BETWEEN : _.Z.Justify.CENTER,
                    children: [
                        (0, o.jsx)(m.Button, {
                            size: m.ButtonSizes.SMALL,
                            onClick: this.handleDismiss,
                            children: E.Z.Messages.TUTORIAL_CLOSE
                        }),
                        (0, o.jsx)(m.Button, {
                            size: m.ButtonSizes.SMALL,
                            look: m.Button.Looks.BLANK,
                            onClick: r,
                            color: (0, h.ap)(l) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
                            className: c ? g.buttonSkipLeftAlign : g.buttonSkipCenterAlign,
                            children: E.Z.Messages.SKIP_ALL_TIPS
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'state', { confirmed: !1 }),
            C(this, 'handleDismiss', () => {
                let { onClickComplete: e } = this.props;
                this.setState({ confirmed: !0 }, () => (null == e ? void 0 : e()));
            });
    }
}
class x extends (a = c.PureComponent) {
    render() {
        let { renderMedia: e, textAlign: t, onComplete: n, onSkipAll: i, isLongText: s, title: a, body: l, children: r, spacing: c, forceTheme: u, ...d } = this.props,
            h = 'top' === d.position || 'bottom' === d.position ? 'center' : 'top';
        return (0, o.jsx)(m.Popout, {
            ...d,
            align: h,
            spacing: null != c ? c : 0,
            renderPopout: this.renderPopoutContent,
            nudgeAlignIntoViewport: !0,
            children: r
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'onClickComplete', (e) => {
                e(), this.props.onComplete();
            }),
            C(this, 'onClickSkipAll', (e) => {
                let { onSkipAll: t, uniqueId: n } = this.props;
                e(), t(), p.default.track(f.rMx.DISMISS_ALL_TUTORIALS, { tutorial: n });
            }),
            C(this, 'renderPopoutContent', (e) => {
                let { closePopout: t, position: n } = e,
                    { forceTheme: i, isLongText: s, arrowAlignment: a, renderMedia: l } = this.props,
                    r = null != l;
                return (0, o.jsx)(m.ThemeProvider, {
                    theme: i,
                    children: (e) =>
                        (0, o.jsx)(I, {
                            ...this.props,
                            className: d()(
                                {
                                    [g.bottom]: 'bottom' === n,
                                    [g.contentNarrowNoMedia]: !s && !r,
                                    [g.contentNarrowWithMedia]: !s && r,
                                    [g.contentWideNoMedia]: s && !r,
                                    [g.contentWideWithMedia]: s && r,
                                    [g.right]: 'right' === n,
                                    [g.top]: 'top' === n,
                                    [g.left]: 'left' === n,
                                    [g.arrowAlignmentTop]: 'top' === a,
                                    [g.arrowAlignmentMiddle]: 'middle' === a,
                                    'force-theme': null != i
                                },
                                e
                            ),
                            onClickComplete: () => this.onClickComplete(t),
                            onClickSkipAll: () => this.onClickSkipAll(t)
                        })
                });
            });
    }
}
C(x, 'TextAlignments', i), C(x, 'defaultProps', { textAlign: 'left' });
