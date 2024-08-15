n.r(t), n.d(t, {
  ACTIVITY_ENCOURAGES_HW_ACCELERATION: function() {
return h;
  },
  default: function() {
return m;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(153867),
  l = n(835473),
  o = n(600164),
  c = n(626135),
  d = n(998502),
  u = n(981631),
  _ = n(689938),
  E = n(434052);
let h = 'Activity Encourages Hardware Acceleration';

function m(e) {
  var t;
  let {
applicationId: n,
...m
  } = e, [I, g] = a.useState(!1), [p] = (0, l.Z)([n]), T = null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : 'This Activity';
  a.useEffect(() => {
c.default.track(u.rMx.OPEN_MODAL, {
  type: h
});
  }, []);
  let S = () => {
let e = 'temporary';
I && (e = 'permanent', r.ZP.updatedUnsyncedSettings({
  disableActivityHardwareAccelerationPrompt: !0
})), c.default.track(u.rMx.MODAL_DISMISSED, {
  type: h,
  dismiss_type: e
}), m.onClose();
  };
  return (0, i.jsxs)(s.ModalRoot, {
className: E.root,
'aria-label': _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE,
...m,
children: [
  (0, i.jsxs)(s.ModalHeader, {
    separator: !1,
    children: [
      (0, i.jsx)(s.Text, {
        className: E.__invalid_header,
        variant: 'text-lg/normal',
        children: _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_TITLE
      }),
      (0, i.jsx)(s.ModalCloseButton, {
        onClick: S,
        className: E.closeButton
      })
    ]
  }),
  (0, i.jsx)(s.ModalContent, {
    className: E.content,
    children: (0, i.jsx)(s.Text, {
      variant: 'text-md/normal',
      className: E.__invalid_ratingBody,
      children: _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_BETTER_BODY.format({
        applicationName: T
      })
    })
  }),
  (0, i.jsxs)(s.ModalFooter, {
    className: E.footer,
    direction: o.Z.Direction.HORIZONTAL,
    children: [
      (0, i.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        size: 18,
        value: I,
        onChange: () => g(!I),
        children: (0, i.jsx)(s.Text, {
          variant: 'text-sm/normal',
          children: _.Z.Messages.DONT_SHOW_AGAIN
        })
      }),
      (0, i.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        onClick: S,
        children: _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_NO_THANKS
      }),
      (0, i.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: () => {
          c.default.track(u.rMx.ACTIVITY_ENABLE_HARDWARE_ACCELERATION, {
            application_id: n
          }), d.ZP.setEnableHardwareAcceleration(!0);
        },
        children: _.Z.Messages.ACTIVITY_HARDWARE_ACCELERATION_TURN_IT_ON
      })
    ]
  })
]
  });
}