s.r(t), s(47120);
var n = s(735250),
    o = s(470079),
    r = s(481060),
    i = s(689938),
    l = s(830446);
function a(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
class c extends o.PureComponent {
    render() {
        let { transitionState: e, header: t, body: o, confirmText: a } = this.props;
        return (0, n.jsxs)(r.ModalRoot, {
            transitionState: e,
            'aria-label': t,
            children: [
                (0, n.jsxs)(r.ModalContent, {
                    className: l.content,
                    children: [
                        (0, n.jsx)('img', {
                            src: s(568533),
                            alt: t
                        }),
                        (0, n.jsx)(r.Heading, {
                            variant: 'heading-xl/semibold',
                            className: l.header,
                            children: t
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            children: o
                        })
                    ]
                }),
                (0, n.jsxs)(r.ModalFooter, {
                    className: l.footer,
                    children: [
                        (0, n.jsx)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            onClick: this.handleConfirm,
                            children: a
                        }),
                        (0, n.jsx)(r.Button, {
                            size: r.Button.Sizes.SMALL,
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: this.handleDismiss,
                            children: i.Z.Messages.CLOSE
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            a(this, 'handleConfirm', () => {
                let { onConfirm: e, onClose: t } = this.props;
                null == t || t(), null == e || e();
            }),
            a(this, 'handleDismiss', () => {
                let { onDismiss: e, onClose: t } = this.props;
                null == t || t(), null == e || e();
            });
    }
}
t.default = c;
