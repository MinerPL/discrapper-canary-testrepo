n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(925975),
    l = n(957730),
    r = n(981631),
    o = n(689938),
    c = n(685242);
function u(e, t, n) {
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
function d(e) {
    e.stopPropagation();
}
class h extends a.PureComponent {
    render() {
        let { className: e, textValue: t, richValue: n, message: a, channel: s, onCancel: l, children: r } = this.props;
        return (0, i.jsxs)('div', {
            className: e,
            ref: this.node,
            onContextMenu: d,
            children: [
                r({
                    textValue: t,
                    richValue: n,
                    message: a,
                    channel: s,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown
                }),
                (0, i.jsx)('div', {
                    className: c.operations,
                    children: o.Z.Messages.EDIT_TEXTAREA_HELP.format({
                        onCancel: () => l(s.id),
                        onSave: this.onClickSave
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'node', a.createRef()),
            u(this, 'onClickSave', () => {
                let { textValue: e } = this.props;
                this.onSubmit(e);
            }),
            u(this, 'onSubmit', (e) => {
                let { message: t, channel: n, onConfirmDelete: i, onCancel: a, saveMessage: r, validateEdit: o } = this.props;
                return 0 === e.length
                    ? (i(n, t),
                      a(n.id),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !1
                      }))
                    : o({
                          value: e,
                          channel: n
                      }).then((t) => {
                          let { valid: i } = t;
                          if (!i)
                              return Promise.resolve({
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              });
                          let o = (0, s.g)(e, {
                              channel: n,
                              isEdit: !0
                          });
                          (null == o ? void 0 : o.content) != null && (e = o.content);
                          let c = l.ZP.parse(this.props.channel, e);
                          return (
                              c.content !== this.props.message.content && r(this.props.channel.id, this.props.message.id, c),
                              a(n.id),
                              Promise.resolve({
                                  shouldClear: !0,
                                  shouldRefocus: !0
                              })
                          );
                      });
            }),
            u(this, 'onChange', (e, t, n) => {
                let { channel: i, onChange: a } = this.props;
                a(i.id, t, n);
            }),
            u(this, 'onKeyDown', (e) => {
                if (e.keyCode === r.yXg.ESCAPE && !e.shiftKey) {
                    let { channel: t, onCancel: n } = this.props;
                    e.preventDefault(), e.stopPropagation(), n(t.id);
                }
            });
    }
}
