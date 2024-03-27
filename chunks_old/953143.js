"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var a = n("866227"),
  r = n.n(a),
  s = n("77078"),
  i = n("381546"),
  u = n("351825"),
  o = n("822516"),
  c = n("844808"),
  d = n("782340"),
  f = n("785548");

function E(e) {
  let {
    className: t,
    onScheduleChange: n,
    onRecurrenceChange: a,
    onTimeChange: E,
    timeSelected: h = !0,
    schedule: g,
    recurrenceRule: _,
    showEndDate: S = !1,
    requireEndDate: v = !1,
    disableStartDateTime: m = !1
  } = e;
  if (null == g) return null;
  let R = null,
    C = g.startDate,
    T = r(),
    N = r().add(o.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
    p = r().add(o.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  null != _ && (N.add(o.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), p.add(o.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
  let x = e => {
    n({
      ...g,
      endDate: e
    })
  };
  return S && (R = null != g.endDate || v ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: f.doubleInput,
      children: [(0, l.jsx)(s.FormItem, {
        title: d.default.Messages.CREATE_EVENT_END_DATE_LABEL,
        required: v,
        children: (0, l.jsx)(s.DateInput, {
          value: g.endDate,
          onSelect: x,
          minDate: g.startDate,
          maxDate: p
        })
      }), (0, l.jsx)(s.FormItem, {
        title: d.default.Messages.CREATE_EVENT_END_TIME_LABEL,
        required: v,
        children: (0, l.jsx)(s.TimeInput, {
          value: g.endDate,
          onChange: x
        })
      })]
    }), v ? null : (0, l.jsx)(s.Button, {
      onClick: () => {
        x(void 0)
      },
      look: s.Button.Looks.BLANK,
      size: s.Button.Sizes.MIN,
      children: (0, l.jsxs)("div", {
        className: f.link,
        children: [(0, l.jsx)(i.default, {
          width: 17,
          height: 17,
          className: f.removeIcon
        }), (0, l.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: d.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
        })]
      })
    })]
  }) : (0, l.jsx)(s.Button, {
    look: s.Button.Looks.BLANK,
    size: s.Button.Sizes.MIN,
    onClick: () => {
      x(r(g.startDate).add(1, "hour"))
    },
    children: (0, l.jsxs)("div", {
      className: f.link,
      children: [(0, l.jsx)(u.default, {
        width: 20,
        height: 20,
        className: f.addIcon
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: d.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
      })]
    })
  })), (0, l.jsxs)("div", {
    className: t,
    children: [(0, l.jsxs)("div", {
      className: f.doubleInput,
      children: [(0, l.jsx)(s.FormItem, {
        title: d.default.Messages.CREATE_EVENT_START_DATE_LABEL,
        required: !0,
        children: (0, l.jsx)(s.DateInput, {
          value: g.startDate,
          onSelect: e => {
            n({
              ...g,
              startDate: e
            })
          },
          minDate: T,
          maxDate: N,
          disabled: m
        })
      }), (0, l.jsx)(s.FormItem, {
        title: d.default.Messages.CREATE_EVENT_START_TIME_LABEL,
        required: !0,
        children: (0, l.jsx)(s.TimeInput, {
          value: g.startDate,
          onChange: e => {
            e.isValid() && (null == E || E(!0), n({
              ...g,
              startDate: e
            }))
          },
          hideValue: !h,
          disabled: m
        })
      })]
    }), R, null != C && null != a && (0, l.jsx)(c.default, {
      onRecurrenceChange: a,
      startDate: C,
      recurrenceRule: _
    })]
  })
}