l.d(n, {
  Z: function() {
return u;
  }
});
var s = l(735250);
l(470079);
var a = l(913527),
  t = l.n(a),
  i = l(481060),
  r = l(854698),
  o = l(401876),
  d = l(689938),
  c = l(201750);

function u(e) {
  let {
className: n,
onScheduleChange: l,
onRecurrenceChange: a,
onTimeChange: u,
timeSelected: E = !0,
schedule: _,
recurrenceRule: I,
showEndDate: x = !1,
requireEndDate: m = !1,
disableStartDateTime: N = !1
  } = e;
  if (null == _)
return null;
  let T = null,
h = _.startDate,
g = t()(),
v = t()().add(r.G3, 'days'),
S = t()().add(r.Ib, 'days');
  null != I && (v.add(r.hn, 'years'), S.add(r.hn, 'years'));
  let C = e => {
l({
  ..._,
  endDate: e
});
  };
  return x && (T = null != _.endDate || m ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: c.doubleInput,
    children: [
      (0, s.jsx)(i.FormItem, {
        title: d.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
        required: m,
        children: (0, s.jsx)(i.DateInput, {
          value: _.endDate,
          onSelect: C,
          minDate: _.startDate,
          maxDate: S
        })
      }),
      (0, s.jsx)(i.FormItem, {
        title: d.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
        required: m,
        children: (0, s.jsx)(i.TimeInput, {
          value: _.endDate,
          onChange: C
        })
      })
    ]
  }),
  m ? null : (0, s.jsx)(i.Button, {
    onClick: () => {
      C(void 0);
    },
    look: i.Button.Looks.BLANK,
    size: i.Button.Sizes.MIN,
    children: (0, s.jsxs)('div', {
      className: c.link,
      children: [
        (0, s.jsx)(i.CircleXIcon, {
          size: 'custom',
          color: 'currentColor',
          width: 17,
          height: 17,
          className: c.removeIcon
        }),
        (0, s.jsx)(i.Text, {
          variant: 'text-sm/normal',
          children: d.Z.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
        })
      ]
    })
  })
]
  }) : (0, s.jsx)(i.Button, {
look: i.Button.Looks.BLANK,
size: i.Button.Sizes.MIN,
onClick: () => {
  C(t()(_.startDate).add(1, 'hour'));
},
children: (0, s.jsxs)('div', {
  className: c.link,
  children: [
    (0, s.jsx)(i.CirclePlusIcon, {
      size: 'custom',
      color: 'currentColor',
      width: 20,
      height: 20,
      className: c.addIcon
    }),
    (0, s.jsx)(i.Text, {
      variant: 'text-sm/normal',
      children: d.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
    })
  ]
})
  })), (0, s.jsxs)('div', {
className: n,
children: [
  (0, s.jsxs)('div', {
    className: c.doubleInput,
    children: [
      (0, s.jsx)(i.FormItem, {
        title: d.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
        required: !0,
        children: (0, s.jsx)(i.DateInput, {
          value: _.startDate,
          onSelect: e => {
            l({
              ..._,
              startDate: e
            });
          },
          minDate: g,
          maxDate: v,
          disabled: N
        })
      }),
      (0, s.jsx)(i.FormItem, {
        title: d.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
        required: !0,
        children: (0, s.jsx)(i.TimeInput, {
          value: _.startDate,
          onChange: e => {
            if (!!e.isValid())
              null == u || u(!0), l({
                ..._,
                startDate: e
              });
          },
          hideValue: !E,
          disabled: N
        })
      })
    ]
  }),
  T,
  null != h && null != a && (0, s.jsx)(o.Z, {
    onRecurrenceChange: a,
    startDate: h,
    recurrenceRule: I
  })
]
  });
}