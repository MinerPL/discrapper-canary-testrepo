"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("77078"),
  r = l("686904"),
  d = l("27679"),
  u = l("397680"),
  i = l("822516"),
  c = l("953143"),
  o = l("782340"),
  E = l("558421");

function _(e) {
  let {
    guildEvent: t,
    recurrenceId: l,
    transitionState: _,
    onClose: h
  } = e, x = (0, u.default)(l, t.id), A = (0, i.getBaseScheduleForRecurrence)(l, t), f = (0, i.getScheduleForRecurrenceWithException)(A, x), [m, D] = a.useState(f), [g, {
    loading: N,
    error: T
  }] = (0, r.default)(() => {
    let e = (0, d.default)(t, l, m, x);
    return null == T && h(), e
  });
  return (0, n.jsxs)(s.ModalRoot, {
    transitionState: _,
    children: [(0, n.jsx)(s.ModalHeader, {
      children: (0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: o.default.Messages.EDIT_THIS_EVENT
      })
    }), (0, n.jsxs)(s.ModalContent, {
      className: E.content,
      children: [(0, n.jsx)(c.default, {
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: l
          } = e;
          null != t && null != l && l.isBefore(t) && (l = t.clone().add(1, "hour")), D({
            startDate: t,
            endDate: l
          })
        },
        schedule: m,
        showEndDate: null != m.endDate,
        requireEndDate: null != m.endDate,
        guildId: t.guild_id,
        recurrenceRule: t.recurrence_rule
      }), null != T ? (0, n.jsx)(s.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: E.warning,
        children: T.getAnyErrorMessage()
      }) : null]
    }), (0, n.jsxs)(s.ModalFooter, {
      className: E.footer,
      children: [(0, n.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: g,
        className: E.button,
        submitting: N,
        disabled: (0, i.areSchedulesIdentical)(m, f),
        children: o.default.Messages.SAVE_EVENT
      }), (0, n.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        onClick: h,
        children: o.default.Messages.CANCEL
      })]
    })]
  })
}