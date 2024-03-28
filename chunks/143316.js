"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
  i = n("360629"),
  r = n("836946"),
  o = n("568570"),
  u = n("626135"),
  d = n("288552"),
  c = n("981631"),
  f = n("689938");

function E(e) {
  let {
    type: t,
    onClick: n
  } = e, [l, E] = a.useState(!1), T = (0, i.useInDesktopNotificationCenterExperiment)(), m = () => {
    n(), u.default.track(c.AnalyticEvents.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: !0,
      num_unread_channels_remaining: 0
    })
  }, I = e => {
    e.shiftKey ? m() : E(!0)
  };
  return (0, s.jsxs)(s.Fragment, {
    children: [l ? (0, s.jsx)(_, {
      confirm: m,
      cancel: () => E(!1)
    }) : null, "bottom-floating" === t ? (0, s.jsx)(d.FloatingActionButton, {
      text: f.default.Messages.MARK_ALL_AS_READ,
      icon: o.default,
      onClick: I
    }) : (0, s.jsx)(r.default, {
      tooltip: T ? f.default.Messages.MARK_ALL_AS_READ : f.default.Messages.UNREADS_MARK_READ,
      color: r.CircleIconButtonColors.SECONDARY,
      icon: (0, s.jsx)(o.default, {}),
      onClick: I
    })]
  })
}

function _(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, s.jsx)(l.DeclarativeConfirmModal, {
    dismissable: !0,
    header: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
    confirmText: f.default.Messages.MARK_AS_READ,
    cancelText: f.default.Messages.CANCEL,
    confirmButtonColor: l.Button.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, s.jsx)(l.Text, {
      color: "text-normal",
      variant: "text-sm/normal",
      children: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
    })
  })
}