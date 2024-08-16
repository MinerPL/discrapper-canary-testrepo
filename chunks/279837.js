s.r(t), s(47120), s(773603);
var n,
    i = s(735250),
    o = s(470079),
    l = s(481060),
    a = s(689938),
    r = s(207691);
function h(e, t, s) {
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
class d extends (n = o.PureComponent) {
    render() {
        let { title: e, actionText: t, children: s, transitionState: n } = this.props,
            { error: h, isLoading: d, value: u } = this.state,
            c =
                o.Children.count(s) > 0
                    ? (0, i.jsx)(l.Card, {
                          type: l.Card.Types.WARNING,
                          className: r.card,
                          children: (0, i.jsx)(l.Text, {
                              className: r.warning,
                              variant: 'text-md/normal',
                              children: s
                          })
                      })
                    : null;
        return (0, i.jsx)(l.ModalRoot, {
            transitionState: n,
            children: (0, i.jsxs)('form', {
                onSubmit: this.handleSubmit,
                children: [
                    (0, i.jsx)(l.ModalHeader, {
                        separator: !1,
                        children: (0, i.jsx)(l.Heading, {
                            variant: 'heading-lg/semibold',
                            children: e
                        })
                    }),
                    (0, i.jsxs)(l.ModalContent, {
                        children: [
                            c,
                            (0, i.jsxs)(l.FormItem, {
                                title: a.Z.Messages.FORM_LABEL_PASSWORD,
                                className: r.spacing,
                                children: [
                                    (0, i.jsx)(l.TextInput, {
                                        type: 'password',
                                        autoComplete: 'off',
                                        autoFocus: !0,
                                        value: u,
                                        onChange: this.handlePasswordChange
                                    }),
                                    null != h && '' !== h
                                        ? (0, i.jsxs)(l.Text, {
                                              variant: 'text-xs/normal',
                                              color: 'text-danger',
                                              className: r.error,
                                              children: [' ', h, ' ']
                                          })
                                        : null
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(l.ModalFooter, {
                        children: [
                            (0, i.jsx)(l.Button, {
                                type: 'submit',
                                disabled: d || 0 === u.length,
                                children: null != t ? t : a.Z.Messages.CONFIRM
                            }),
                            (0, i.jsx)(l.Button, {
                                onClick: this.handleCancel,
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                children: a.Z.Messages.CANCEL
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'state', {
                value: '',
                error: null,
                isLoading: !1
            }),
            h(this, 'handleSubmit', (e) => {
                e.preventDefault();
                let { value: t } = this.state,
                    { handleSubmit: s, onClose: n, onError: i } = this.props;
                this.setState({ isLoading: !0 }),
                    s(t)
                        .then(
                            (e) => n(null != e ? e : void 0),
                            (e) => {
                                if (null == e.body) return;
                                if ((null == i || i(e.body), !this.shouldSkipErrorMsgRender(e.body)))
                                    e.body.password
                                        ? this.setState({
                                              error: e.body.password,
                                              isLoading: !1
                                          })
                                        : e.body.message &&
                                          this.setState({
                                              error: e.body.message,
                                              isLoading: !1
                                          });
                            }
                        )
                        .finally(() => this.setState({ isLoading: !1 }));
            }),
            h(this, 'shouldSkipErrorMsgRender', (e) => {
                let { skipErrorMsgAbortCode: t } = this.props;
                return null != t && (null == e ? void 0 : e.code) === t;
            }),
            h(this, 'handleCancel', () => {
                let { onClose: e } = this.props;
                e();
            }),
            h(this, 'handlePasswordChange', (e) => {
                let { onPasswordChange: t } = this.props;
                null == t || t(e), this.setState({ value: e });
            });
    }
}
h(d, 'key', () => 'password-confirm-modal'), (t.default = d);
