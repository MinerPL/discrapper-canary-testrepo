"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("702976"), s("222007");
var n = s("37983"),
  a = s("884691"),
  l = s("414456"),
  i = s.n(l),
  d = s("77078"),
  r = s("828986"),
  u = s("819689"),
  o = s("679653"),
  c = s("390236"),
  f = s("377114"),
  E = s("699473"),
  g = s("27618"),
  M = s("697218"),
  _ = s("822332"),
  h = s("568734"),
  m = s("870190"),
  N = s("49111"),
  S = s("782340"),
  A = s("618537");
class I extends a.PureComponent {
  render() {
    let e, t;
    let {
      report: s
    } = this.state, {
      channel: a,
      message: l,
      showContextMenuHint: i,
      ...r
    } = this.props, u = a.type === N.ChannelTypes.GUILD_ANNOUNCEMENT && (0, h.hasFlag)(l.flags, N.MessageFlags.CROSSPOSTED);
    return i && (e = (0, n.jsx)(_.default, {
      className: A.spacingTop,
      children: S.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
    })), (0, m.canDeleteAndReportMessage)(l) && (t = (0, n.jsx)(d.FormSwitch, {
      value: s,
      onChange: this.handleToggleReport,
      hideBorder: !0,
      className: A.spacingTop,
      children: S.default.Messages.DELETE_MESSAGE_REPORT
    })), (0, n.jsx)(c.default.Provider, {
      value: a.guild_id,
      children: (0, n.jsxs)(d.ConfirmModal, {
        header: u ? S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : S.default.Messages.DELETE_MESSAGE_TITLE,
        confirmText: S.default.Messages.DELETE,
        cancelText: S.default.Messages.CANCEL,
        onConfirm: this.handleDelete,
        ...r,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          className: A.spacing,
          children: u ? S.default.Messages.DELETE_FOLLOWED_NEWS_BODY : S.default.Messages.DELETE_MESSAGE_BODY
        }), (0, n.jsx)("div", {
          className: A.message,
          children: (0, n.jsx)(E.default, {
            channel: a,
            message: l,
            disableInteraction: !0
          })
        }), t, e]
      })
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      report: !1
    }, this.handleDelete = () => {
      let {
        report: e
      } = this.state, {
        channel: t,
        message: s
      } = this.props;
      e ? (0, f.showReportModalForMessage)(s, () => u.default.deleteMessage(t.id, s.id)) : u.default.deleteMessage(t.id, s.id)
    }, this.handleToggleReport = e => {
      this.setState({
        report: e
      })
    }
  }
}
var C = {
  confirmPin: function(e, t) {
    (0, d.openModal)(s => {
      let a;
      let l = (0, o.computeChannelName)(e, M.default, g.default);
      return a = e.isPrivate() ? S.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : S.default.Messages.PIN_MESSAGE_BODY.format({
        channelName: l
      }), (0, n.jsx)(c.default.Provider, {
        value: e.guild_id,
        children: (0, n.jsxs)(d.ConfirmModal, {
          header: S.default.Messages.PIN_MESSAGE_TITLE,
          confirmText: S.default.Messages.PIN_CONFIRM,
          cancelText: S.default.Messages.CANCEL,
          confirmButtonColor: d.Button.Colors.BRAND,
          onConfirm: () => r.default.pinMessage(e, t.id),
          ...s,
          children: [(0, n.jsx)(d.Text, {
            variant: "text-md/normal",
            className: A.spacing,
            children: a
          }), (0, n.jsx)("div", {
            className: A.message,
            children: (0, n.jsx)(E.default, {
              channel: e,
              message: t,
              animateAvatar: !1,
              disableInteraction: !0
            })
          })]
        })
      })
    })
  },
  confirmUnpin: function(e, t) {
    (0, d.openModal)(s => (0, n.jsx)(c.default.Provider, {
      value: e.guild_id,
      children: (0, n.jsxs)(d.ConfirmModal, {
        header: S.default.Messages.UNPIN_MESSAGE_TITLE,
        confirmText: S.default.Messages.UNPIN_CONFIRM,
        cancelText: S.default.Messages.CANCEL,
        onConfirm: () => r.default.unpinMessage(e, t.id),
        ...s,
        children: [(0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          className: A.spacing,
          children: S.default.Messages.UNPIN_MESSAGE_BODY
        }), (0, n.jsx)("div", {
          className: i(A.message, A.spacing),
          children: (0, n.jsx)(E.default, {
            channel: e,
            message: t,
            disableInteraction: !0
          })
        }), (0, n.jsx)(_.default, {
          children: S.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
        })]
      })
    }))
  },
  confirmDelete: function(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (0, d.openModal)(a => (0, n.jsx)(I, {
      channel: e,
      message: t,
      showContextMenuHint: s,
      ...a
    }))
  },
  confirmEdit: function(e, t, s) {
    (0, d.openModal)(a => (0, n.jsx)(d.ConfirmModal, {
      header: S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
      confirmText: S.default.Messages.CONFIRM,
      cancelText: S.default.Messages.CANCEL,
      confirmButtonColor: d.Button.Colors.BRAND,
      onConfirm: () => u.default.editMessage(e, t, {
        content: s
      }),
      ...a,
      children: (0, n.jsx)(d.Text, {
        variant: "text-md/normal",
        className: A.spacing,
        children: S.default.Messages.EDIT_FOLLOWED_NEWS_BODY
      })
    }))
  }
}