t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var s,
    i = t(735250),
    o = t(470079),
    l = t(699581),
    r = t(442837),
    a = t(481060),
    c = t(34854),
    d = t(702557),
    u = t(246946),
    I = t(981631),
    _ = t(689938),
    f = t(682242);
function E(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class m extends (s = o.PureComponent) {
    componentDidMount() {
        if (this.props.autoFocus && !this.props.hideNote) {
            let e = l.findDOMNode(this.noteRef.current);
            null != e && null != e.selectionStart && (e.focus(), (e.selectionStart = e.selectionEnd = e.value.length));
        }
    }
    render() {
        let { className: e, loading: n, note: t, hideNote: s } = this.props;
        return s
            ? null
            : (0, i.jsx)('div', {
                  className: e,
                  children: (0, i.jsx)(a.TextAreaAutosize, {
                      ref: this.noteRef,
                      className: f.textarea,
                      disabled: n,
                      placeholder: n ? _.Z.Messages.LOADING_NOTE : _.Z.Messages.NOTE_PLACEHOLDER,
                      'aria-label': _.Z.Messages.NOTE,
                      onBlur: this.handleBlur,
                      onKeyPress: this.handleKeyPress,
                      defaultValue: null != t ? t : void 0,
                      maxLength: I.vuo
                  })
              });
    }
    constructor(...e) {
        super(...e),
            E(this, 'noteRef', o.createRef()),
            E(this, 'handleBlur', (e) => {
                let n = e.currentTarget.value,
                    { note: t, userId: s, onUpdate: i } = this.props;
                if ((null != t ? t : '') !== n) null == i || i(), c.Z.updateNote(s, n);
            }),
            E(this, 'handleKeyPress', (e) => {
                if (13 === e.which) {
                    if (e.shiftKey) {
                        var n;
                        (null !== (n = e.currentTarget.value.match(/\n/g)) && void 0 !== n ? n : []).length >= 5 && e.preventDefault();
                    } else e.preventDefault(), e.currentTarget.blur();
                } else e.which === I.yXg.SPACE && e.stopPropagation();
            });
    }
}
function p(e) {
    let n = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation),
        t = (0, d.Z)(e.userId);
    return (0, i.jsx)(m, {
        ...e,
        ...t,
        hideNote: n
    });
}
E(m, 'defaultProps', { autoFocus: !1 });
