var i = n(735250);
n(470079);
var a = n(338545),
  s = n(442837),
  l = n(481060),
  r = n(607070),
  o = n(689938),
  c = n(348910),
  u = n(810819);
let d = () => (0, i.jsxs)('div', {
  className: u.toast,
  children: [
(0, i.jsx)(l.Spinner, {
  type: l.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
  className: c.loadingSpinner
}),
(0, i.jsx)(l.Text, {
  color: 'header-primary',
  variant: 'text-md/normal',
  children: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENDING
})
  ]
});
t.Z = e => {
  let {
shown: t,
sent: n,
className: c
  } = e, u = (0, s.e7)([r.Z], () => r.Z.useReducedMotion), h = (0, l.useTransition)(t, {
from: {
  transform: u ? 'translateY(0)' : 'translateY(16px)',
  opacity: 0
},
enter: {
  transform: 'translateY(0)',
  opacity: 1
},
leave: {
  transform: u ? 'translateY(0)' : 'translateY(16px)',
  opacity: 0
},
config: {
  mass: 1,
  tension: 500,
  friction: 18,
  clamp: !0
},
delay: 200
  }, 'animate-always');
  return (0, i.jsx)(i.Fragment, {
children: h((e, t) => t && (0, i.jsx)(a.animated.div, {
  className: c,
  style: e,
  children: n ? (0, i.jsx)(l.Toast, {
    message: o.Z.Messages.CONTENT_INVENTORY_MESSAGE_SENT,
    type: l.ToastType.SUCCESS,
    id: 'success_message_toast'
  }) : (0, i.jsx)(l.Toast, {
    message: '',
    type: l.ToastType.CUSTOM,
    id: 'custom_loading_message_toast',
    options: {
      component: (0, i.jsx)(d, {})
    }
  })
}))
  });
};