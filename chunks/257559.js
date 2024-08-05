t(789020), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(481060),
  o = t(332148),
  u = t(904245),
  d = t(933557),
  c = t(372900),
  E = t(726521),
  f = t(294218),
  g = t(699516),
  m = t(594174),
  M = t(387204),
  _ = t(630388),
  h = t(970257),
  I = t(981631),
  N = t(689938),
  Z = t(421476);

function A(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
value: t,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[n] = t, e;
}
class S extends s.PureComponent {
  render() {
let e, n;
let {
  report: t
} = this.state, {
  channel: s,
  message: l,
  showContextMenuHint: a,
  ...o
} = this.props, u = s.type === I.d4z.GUILD_ANNOUNCEMENT && (0, _.yE)(l.flags, I.iLy.CROSSPOSTED);
return a && (e = (0, i.jsx)(M.Z, {
  className: Z.spacingTop,
  children: N.Z.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
})), (0, h.vc)(l) && (n = (0, i.jsx)(r.FormSwitch, {
  value: t,
  onChange: this.handleToggleReport,
  hideBorder: !0,
  className: Z.spacingTop,
  children: N.Z.Messages.DELETE_MESSAGE_REPORT
})), (0, i.jsx)(c.Z.Provider, {
  value: s.guild_id,
  children: (0, i.jsxs)(r.ConfirmModal, {
    header: u ? N.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER : N.Z.Messages.DELETE_MESSAGE_TITLE,
    confirmText: N.Z.Messages.DELETE,
    cancelText: N.Z.Messages.CANCEL,
    onConfirm: this.handleDelete,
    ...o,
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-md/normal',
        className: Z.spacing,
        children: u ? N.Z.Messages.DELETE_FOLLOWED_NEWS_BODY : N.Z.Messages.DELETE_MESSAGE_BODY
      }),
      (0, i.jsx)('div', {
        className: Z.message,
        children: (0, i.jsx)(f.Z, {
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
  e ? (0, E.ak)(t, 'message_delete_alert', () => u.Z.deleteMessage(n.id, t.id)) : u.Z.deleteMessage(n.id, t.id);
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
  let l = (0, d.F6)(e, m.default, g.Z);
  return s = e.isPrivate() ? N.Z.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : N.Z.Messages.PIN_MESSAGE_BODY.format({
    channelName: l
  }), (0, i.jsx)(c.Z.Provider, {
    value: e.guild_id,
    children: (0, i.jsxs)(r.ConfirmModal, {
      header: N.Z.Messages.PIN_MESSAGE_TITLE,
      confirmText: N.Z.Messages.PIN_CONFIRM,
      cancelText: N.Z.Messages.CANCEL,
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
          children: (0, i.jsx)(f.Z, {
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
(0, r.openModal)(t => (0, i.jsx)(c.Z.Provider, {
  value: e.guild_id,
  children: (0, i.jsxs)(r.ConfirmModal, {
    header: N.Z.Messages.UNPIN_MESSAGE_TITLE,
    confirmText: N.Z.Messages.UNPIN_CONFIRM,
    cancelText: N.Z.Messages.CANCEL,
    onConfirm: () => o.Z.unpinMessage(e, n.id),
    ...t,
    children: [
      (0, i.jsx)(r.Text, {
        variant: 'text-md/normal',
        className: Z.spacing,
        children: N.Z.Messages.UNPIN_MESSAGE_BODY
      }),
      (0, i.jsx)('div', {
        className: a()(Z.message, Z.spacing),
        children: (0, i.jsx)(f.Z, {
          channel: e,
          message: n,
          disableInteraction: !0
        })
      }),
      (0, i.jsx)(M.Z, {
        children: N.Z.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
      })
    ]
  })
}));
  },
  confirmDelete: function(e, n) {
let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
(0, r.openModal)(s => (0, i.jsx)(S, {
  channel: e,
  message: n,
  showContextMenuHint: t,
  ...s
}));
  },
  confirmEdit: function(e, n, t) {
(0, r.openModal)(s => (0, i.jsx)(r.ConfirmModal, {
  header: N.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
  confirmText: N.Z.Messages.CONFIRM,
  cancelText: N.Z.Messages.CANCEL,
  confirmButtonColor: r.Button.Colors.BRAND,
  onConfirm: () => u.Z.editMessage(e, n, {
    content: t
  }),
  ...s,
  children: (0, i.jsx)(r.Text, {
    variant: 'text-md/normal',
    className: Z.spacing,
    children: N.Z.Messages.EDIT_FOLLOWED_NEWS_BODY
  })
}));
  }
};