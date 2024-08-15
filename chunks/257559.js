t(789020), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(332148),
  u = t(904245),
  d = t(933557),
  c = t(951844),
  E = t(372900),
  f = t(726521),
  g = t(294218),
  m = t(699516),
  M = t(594174),
  _ = t(630388),
  h = t(970257),
  N = t(981631),
  I = t(689938),
  Z = t(608362);

function A(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
class p extends s.PureComponent {
  render() {
let e, n;
let {
  report: t
} = this.state, {
  channel: s,
  message: l,
  showContextMenuHint: a,
  ...o
} = this.props, u = s.type === N.d4z.GUILD_ANNOUNCEMENT && (0, _.yE)(l.flags, N.iLy.CROSSPOSTED);
return a && (e = (0, i.jsx)(c.Z, {
  className: Z.spacingTop,
  children: I.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
})), (0, h.vc)(l) && (n = (0, i.jsx)(r.FormSwitch, {
  value: t,
  onChange: this.handleToggleReport,
  hideBorder: !0,
  className: Z.spacingTop,
  children: I.Z.Messages.DELETE_MESSAGE_REPORT
})), (0, i.jsx)(E.Z.Provider, {
  value: s.guild_id,
  children: (0, i.jsxs)(r.ConfirmModal, {
    header: u ? I.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER : I.Z.Messages.DELETE_MESSAGE_TITLE,
    confirmText: I.Z.Messages.DELETE,
    cancelText: I.Z.Messages.CANCEL,
    onConfirm: this.handleDelete,
    ...o,
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-md/normal',
        className: Z.spacing,
        children: u ? I.Z.Messages.DELETE_FOLLOWED_NEWS_BODY : I.Z.Messages.DELETE_MESSAGE_BODY
      }),
      (0, i.jsx)('div', {
        className: Z.message,
        children: (0, i.jsx)(g.Z, {
          channel: s,
          message: l,
          disableInteraction: !0
        })
      }),
      n,
      e
    ]
  })
});
  }
  constructor(...e) {
super(...e), A(this, 'state', {
  report: !1
}), A(this, 'handleDelete', () => {
  let {
    report: e
  } = this.state, {
    channel: n,
    message: t
  } = this.props;
  e ? (0, f.ak)(t, 'message_delete_alert', () => u.Z.deleteMessage(n.id, t.id)) : u.Z.deleteMessage(n.id, t.id);
}), A(this, 'handleToggleReport', e => {
  this.setState({
    report: e
  });
});
  }
}
n.Z = {
  confirmPin: function(e, n) {
(0, r.openModal)(t => {
  let s;
  let l = (0, d.F6)(e, M.default, m.Z);
  return s = e.isPrivate() ? I.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : I.Z.Messages.PIN_MESSAGE_BODY.format({
    channelName: l
  }), (0, i.jsx)(E.Z.Provider, {
    value: e.guild_id,
    children: (0, i.jsxs)(r.ConfirmModal, {
      header: I.Z.Messages.PIN_MESSAGE_TITLE,
      confirmText: I.Z.Messages.PIN_CONFIRM,
      cancelText: I.Z.Messages.CANCEL,
      confirmButtonColor: r.Button.Colors.BRAND,
      onConfirm: () => o.Z.pinMessage(e, n.id),
      ...t,
      children: [
        (0, i.jsx)(r.Text, {
          variant: 'text-md/normal',
          className: Z.spacing,
          children: s
        }),
        (0, i.jsx)('div', {
          className: Z.message,
          children: (0, i.jsx)(g.Z, {
            channel: e,
            message: n,
            animateAvatar: !1,
            disableInteraction: !0
          })
        })
      ]
    })
  });
});
  },
  confirmUnpin: function(e, n) {
(0, r.openModal)(t => (0, i.jsx)(E.Z.Provider, {
  value: e.guild_id,
  children: (0, i.jsxs)(r.ConfirmModal, {
    header: I.Z.Messages.UNPIN_MESSAGE_TITLE,
    confirmText: I.Z.Messages.UNPIN_CONFIRM,
    cancelText: I.Z.Messages.CANCEL,
    onConfirm: () => o.Z.unpinMessage(e, n.id),
    ...t,
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-md/normal',
        className: Z.spacing,
        children: I.Z.Messages.UNPIN_MESSAGE_BODY
      }),
      (0, i.jsx)('div', {
        className: a()(Z.message, Z.spacing),
        children: (0, i.jsx)(g.Z, {
          channel: e,
          message: n,
          disableInteraction: !0
        })
      }),
      (0, i.jsx)(c.Z, {
        children: I.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
      })
    ]
  })
}));
  },
  confirmDelete: function(e, n) {
let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
(0, r.openModal)(s => (0, i.jsx)(p, {
  channel: e,
  message: n,
  showContextMenuHint: t,
  ...s
}));
  },
  confirmEdit: function(e, n, t) {
(0, r.openModal)(s => (0, i.jsx)(r.ConfirmModal, {
  header: I.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
  confirmText: I.Z.Messages.CONFIRM,
  cancelText: I.Z.Messages.CANCEL,
  confirmButtonColor: r.Button.Colors.BRAND,
  onConfirm: () => u.Z.editMessage(e, n, {
    content: t
  }),
  ...s,
  children: (0, i.jsx)(r.Text, {
    variant: 'text-md/normal',
    className: Z.spacing,
    children: I.Z.Messages.EDIT_FOLLOWED_NEWS_BODY
  })
}));
  }
};