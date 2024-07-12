n.d(t, {
  Z: function() {
return h;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(925975),
  s = n(957730),
  r = n(981631),
  o = n(689938),
  c = n(586146);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function u(e) {
  e.stopPropagation();
}
class h extends a.PureComponent {
  render() {
let {
  className: e,
  textValue: t,
  richValue: n,
  message: a,
  channel: l,
  onCancel: s,
  children: r
} = this.props;
return (0, i.jsxs)('div', {
  className: e,
  ref: this.node,
  onContextMenu: u,
  children: [
    r({
      textValue: t,
      richValue: n,
      message: a,
      channel: l,
      onChange: this.onChange,
      onSubmit: this.onSubmit,
      onKeyDown: this.onKeyDown
    }),
    (0, i.jsx)('div', {
      className: c.operations,
      children: o.Z.Messages.EDIT_TEXTAREA_HELP.format({
        onCancel: () => s(l.id),
        onSave: this.onClickSave
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), d(this, 'node', a.createRef()), d(this, 'onClickSave', () => {
  let {
    textValue: e
  } = this.props;
  this.onSubmit(e);
}), d(this, 'onSubmit', e => {
  let {
    message: t,
    channel: n,
    onConfirmDelete: i,
    onCancel: a,
    saveMessage: r,
    validateEdit: o
  } = this.props;
  return 0 === e.length ? (i(n, t), a(n.id), Promise.resolve({
    shouldClear: !1,
    shouldRefocus: !1
  })) : o({
    value: e,
    channel: n
  }).then(t => {
    let {
      valid: i
    } = t;
    if (!i)
      return Promise.resolve({
        shouldClear: !1,
        shouldRefocus: !1
      });
    let o = (0, l.g)(e, {
      channel: n,
      isEdit: !0
    });
    (null == o ? void 0 : o.content) != null && (e = o.content);
    let c = s.ZP.parse(this.props.channel, e);
    return c.content !== this.props.message.content && r(this.props.channel.id, this.props.message.id, c), a(n.id), Promise.resolve({
      shouldClear: !0,
      shouldRefocus: !0
    });
  });
}), d(this, 'onChange', (e, t, n) => {
  let {
    channel: i,
    onChange: a
  } = this.props;
  a(i.id, t, n);
}), d(this, 'onKeyDown', e => {
  if (e.keyCode === r.yXg.ESCAPE && !e.shiftKey) {
    let {
      channel: t,
      onCancel: n
    } = this.props;
    e.preventDefault(), e.stopPropagation(), n(t.id);
  }
});
  }
}