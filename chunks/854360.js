"use strict";
s.r(a), s.d(a, {
  default: function() {
    return f
  }
}), s("47120");
var t = s("735250"),
  r = s("470079"),
  n = s("481060"),
  c = s("749210"),
  i = s("910693"),
  d = s("51144"),
  u = s("981631"),
  l = s("689938"),
  o = s("345041");

function f(e) {
  let {
    guildId: a,
    user: s,
    location: f,
    ...m
  } = e, [C, _] = r.useState(""), g = (0, i.useTrackModerationAction)(a, {
    location: f,
    targetUserId: s.id
  }), h = r.useCallback(() => {
    c.default.kickUser(a, s.id, C), g(i.ModerationActionType.KICK)
  }, [a, s.id, C, g]), M = r.useCallback(e => {
    _(e)
  }, []);
  return (0, t.jsxs)(n.ConfirmModal, {
    header: l.default.Messages.KICK_USER_FROM_SERVER.format({
      user: s.username
    }),
    confirmText: l.default.Messages.KICK,
    cancelText: l.default.Messages.CANCEL,
    onConfirm: h,
    ...m,
    children: [(0, t.jsx)(n.Text, {
      variant: "text-md/normal",
      className: o.spacing,
      children: l.default.Messages.KICK_USER_BODY.format({
        user: "@".concat(d.default.getName(s))
      })
    }), (0, t.jsx)(n.FormItem, {
      title: l.default.Messages.FORM_LABEL_REASON_KICK,
      className: o.spacing,
      children: (0, t.jsx)(n.TextArea, {
        maxLength: u.MAX_REASON_LENGTH,
        onChange: M,
        value: C,
        rows: 2
      })
    })]
  })
}