"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var s = n("913527"),
  l = n.n(s),
  i = n("481060"),
  r = n("696202"),
  d = n("151785"),
  u = n("854698"),
  o = n("401876"),
  c = n("689938"),
  E = n("623632");

function f(e) {
  let {
    className: t,
    onScheduleChange: n,
    onRecurrenceChange: s,
    onTimeChange: f,
    timeSelected: h = !0,
    schedule: _,
    recurrenceRule: S,
    showEndDate: T = !1,
    requireEndDate: N = !1,
    disableStartDateTime: g = !1
  } = e;
  if (null == _) return null;
  let v = null,
    x = _.startDate,
    I = l()(),
    C = l()().add(u.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
    m = l()().add(u.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  null != S && (C.add(u.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), m.add(u.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
  let A = e => {
    n({
      ..._,
      endDate: e
    })
  };
  return T && (v = null != _.endDate || N ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: E.doubleInput,
      children: [(0, a.jsx)(i.FormItem, {
        title: c.default.Messages.CREATE_EVENT_END_DATE_LABEL,
        required: N,
        children: (0, a.jsx)(i.DateInput, {
          value: _.endDate,
          onSelect: A,
          minDate: _.startDate,
          maxDate: m
        })
      }), (0, a.jsx)(i.FormItem, {
        title: c.default.Messages.CREATE_EVENT_END_TIME_LABEL,
        required: N,
        children: (0, a.jsx)(i.TimeInput, {
          value: _.endDate,
          onChange: A
        })
      })]
    }), N ? null : (0, a.jsx)(i.Button, {
      onClick: () => {
        A(void 0)
      },
      look: i.Button.Looks.BLANK,
      size: i.Button.Sizes.MIN,
      children: (0, a.jsxs)("div", {
        className: E.link,
        children: [(0, a.jsx)(r.default, {
          width: 17,
          height: 17,
          className: E.removeIcon
        }), (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: c.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
        })]
      })
    })]
  }) : (0, a.jsx)(i.Button, {
    look: i.Button.Looks.BLANK,
    size: i.Button.Sizes.MIN,
    onClick: () => {
      A(l()(_.startDate).add(1, "hour"))
    },
    children: (0, a.jsxs)("div", {
      className: E.link,
      children: [(0, a.jsx)(d.default, {
        width: 20,
        height: 20,
        className: E.addIcon
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: c.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
      })]
    })
  })), (0, a.jsxs)("div", {
    className: t,
    children: [(0, a.jsxs)("div", {
      className: E.doubleInput,
      children: [(0, a.jsx)(i.FormItem, {
        title: c.default.Messages.CREATE_EVENT_START_DATE_LABEL,
        required: !0,
        children: (0, a.jsx)(i.DateInput, {
          value: _.startDate,
          onSelect: e => {
            n({
              ..._,
              startDate: e
            })
          },
          minDate: I,
          maxDate: C,
          disabled: g
        })
      }), (0, a.jsx)(i.FormItem, {
        title: c.default.Messages.CREATE_EVENT_START_TIME_LABEL,
        required: !0,
        children: (0, a.jsx)(i.TimeInput, {
          value: _.startDate,
          onChange: e => {
            e.isValid() && (null == f || f(!0), n({
              ..._,
              startDate: e
            }))
          },
          hideValue: !h,
          disabled: g
        })
      })]
    }), v, null != x && null != s && (0, a.jsx)(o.default, {
      onRecurrenceChange: s,
      startDate: x,
      recurrenceRule: S
    })]
  })
}