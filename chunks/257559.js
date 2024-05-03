"use strict";
s.r(t), s("789020"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  d = s("481060"),
  r = s("332148"),
  u = s("904245"),
  o = s("933557"),
  c = s("372900"),
  f = s("726521"),
  E = s("294218"),
  g = s("699516"),
  M = s("594174"),
  _ = s("387204"),
  m = s("630388"),
  h = s("970257"),
  N = s("981631"),
  S = s("689938"),
  A = s("214705");

function I(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class C extends n.PureComponent {
  render() {
    let e, t;
    let {
      report: s
    } = this.state, {
      channel: n,
      message: l,
      showContextMenuHint: i,
      ...r
    } = this.props, u = n.type === N.ChannelTypes.GUILD_ANNOUNCEMENT && (0, m.hasFlag)(l.flags, N.MessageFlags.CROSSPOSTED);
    return i && (e = (0, a.jsx)(_.default, {
      className: A.spacingTop,
      children: S.default.Messages.DELETE_MESSAGE_CONTEXT_MENU_HINT.format()
    })), (0, h.canDeleteAndReportMessage)(l) && (t = (0, a.jsx)(d.FormSwitch, {
      value: s,
      onChange: this.handleToggleReport,
      hideBorder: !0,
      className: A.spacingTop,
      children: S.default.Messages.DELETE_MESSAGE_REPORT
    })), (0, a.jsx)(c.default.Provider, {
      value: n.guild_id,
      children: (0, a.jsxs)(d.ConfirmModal, {
        header: u ? S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER : S.default.Messages.DELETE_MESSAGE_TITLE,
        confirmText: S.default.Messages.DELETE,
        cancelText: S.default.Messages.CANCEL,
        onConfirm: this.handleDelete,
        ...r,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/normal",
          className: A.spacing,
          children: u ? S.default.Messages.DELETE_FOLLOWED_NEWS_BODY : S.default.Messages.DELETE_MESSAGE_BODY
        }), (0, a.jsx)("div", {
          className: A.message,
          children: (0, a.jsx)(E.default, {
            channel: n,
            message: l,
            disableInteraction: !0
          })
        }), t, e]
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      report: !1
    }), I(this, "handleDelete", () => {
      let {
        report: e
      } = this.state, {
        channel: t,
        message: s
      } = this.props;
      e ? (0, f.showReportModalForMessage)(s, "message_delete_alert", () => u.default.deleteMessage(t.id, s.id)) : u.default.deleteMessage(t.id, s.id)
    }), I(this, "handleToggleReport", e => {
      this.setState({
        report: e
      })
    })
  }
}
t.default = {
  confirmPin: function(e, t) {
    (0, d.openModal)(s => {
      let n;
      let l = (0, o.computeChannelName)(e, M.default, g.default);
      return n = e.isPrivate() ? S.default.Messages.PIN_MESSAGE_BODY_PRIVATE_CHANNEL : S.default.Messages.PIN_MESSAGE_BODY.format({
        channelName: l
      }), (0, a.jsx)(c.default.Provider, {
        value: e.guild_id,
        children: (0, a.jsxs)(d.ConfirmModal, {
          header: S.default.Messages.PIN_MESSAGE_TITLE,
          confirmText: S.default.Messages.PIN_CONFIRM,
          cancelText: S.default.Messages.CANCEL,
          confirmButtonColor: d.Button.Colors.BRAND,
          onConfirm: () => r.default.pinMessage(e, t.id),
          ...s,
          children: [(0, a.jsx)(d.Text, {
            variant: "text-md/normal",
            className: A.spacing,
            children: n
          }), (0, a.jsx)("div", {
            className: A.message,
            children: (0, a.jsx)(E.default, {
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
    (0, d.openModal)(s => (0, a.jsx)(c.default.Provider, {
      value: e.guild_id,
      children: (0, a.jsxs)(d.ConfirmModal, {
        header: S.default.Messages.UNPIN_MESSAGE_TITLE,
        confirmText: S.default.Messages.UNPIN_CONFIRM,
        cancelText: S.default.Messages.CANCEL,
        onConfirm: () => r.default.unpinMessage(e, t.id),
        ...s,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/normal",
          className: A.spacing,
          children: S.default.Messages.UNPIN_MESSAGE_BODY
        }), (0, a.jsx)("div", {
          className: i()(A.message, A.spacing),
          children: (0, a.jsx)(E.default, {
            channel: e,
            message: t,
            disableInteraction: !0
          })
        }), (0, a.jsx)(_.default, {
          children: S.default.Messages.UNPIN_MESSAGE_CONTEXT_MENU_HINT.format()
        })]
      })
    }))
  },
  confirmDelete: function(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (0, d.openModal)(n => (0, a.jsx)(C, {
      channel: e,
      message: t,
      showContextMenuHint: s,
      ...n
    }))
  },
  confirmEdit: function(e, t, s) {
    (0, d.openModal)(n => (0, a.jsx)(d.ConfirmModal, {
      header: S.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
      confirmText: S.default.Messages.CONFIRM,
      cancelText: S.default.Messages.CANCEL,
      confirmButtonColor: d.Button.Colors.BRAND,
      onConfirm: () => u.default.editMessage(e, t, {
        content: s
      }),
      ...n,
      children: (0, a.jsx)(d.Text, {
        variant: "text-md/normal",
        className: A.spacing,
        children: S.default.Messages.EDIT_FOLLOWED_NEWS_BODY
      })
    }))
  }
}