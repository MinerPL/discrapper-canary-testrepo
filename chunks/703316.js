"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("925975"),
  i = n("957730"),
  r = n("981631"),
  o = n("689938"),
  u = n("108627");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function c(e) {
  e.stopPropagation()
}
class f extends l.PureComponent {
  render() {
    let {
      className: e,
      textValue: t,
      richValue: n,
      message: l,
      channel: s,
      onCancel: i,
      children: r
    } = this.props;
    return (0, a.jsxs)("div", {
      className: e,
      ref: this.node,
      onContextMenu: c,
      children: [r({
        textValue: t,
        richValue: n,
        message: l,
        channel: s,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        onKeyDown: this.onKeyDown
      }), (0, a.jsx)("div", {
        className: u.operations,
        children: o.default.Messages.EDIT_TEXTAREA_HELP.format({
          onCancel: () => i(s.id),
          onSave: this.onClickSave
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), d(this, "node", l.createRef()), d(this, "onClickSave", () => {
      let {
        textValue: e
      } = this.props;
      this.onSubmit(e)
    }), d(this, "onSubmit", e => {
      let {
        message: t,
        channel: n,
        onConfirmDelete: a,
        onCancel: l,
        saveMessage: r,
        validateEdit: o
      } = this.props;
      return 0 === e.length ? (a(n, t), l(n.id), Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !1
      })) : o({
        value: e,
        channel: n
      }).then(t => {
        let {
          valid: a
        } = t;
        if (!a) return Promise.resolve({
          shouldClear: !1,
          shouldRefocus: !1
        });
        let o = (0, s.handleLegacyCommands)(e, {
          channel: n,
          isEdit: !0
        });
        (null == o ? void 0 : o.content) != null && (e = o.content);
        let u = i.default.parse(this.props.channel, e);
        return u.content !== this.props.message.content && r(this.props.channel.id, this.props.message.id, u), l(n.id), Promise.resolve({
          shouldClear: !0,
          shouldRefocus: !0
        })
      })
    }), d(this, "onChange", (e, t, n) => {
      let {
        channel: a,
        onChange: l
      } = this.props;
      l(a.id, t, n)
    }), d(this, "onKeyDown", e => {
      if (e.keyCode === r.KeyboardKeys.ESCAPE && !e.shiftKey) {
        let {
          channel: t,
          onCancel: n
        } = this.props;
        e.preventDefault(), e.stopPropagation(), n(t.id)
      }
    })
  }
}