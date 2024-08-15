var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(338545),
  o = n(442837),
  l = n(481060),
  u = n(607070),
  c = n(689938),
  d = n(720867),
  _ = n(810819);
let E = () => (0, r.jsxs)('div', {
  className: _.toast,
  children: [
(0, r.jsx)(l.Spinner, {
  type: l.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
  className: d.loadingSpinner
}),
(0, r.jsx)(l.Text, {
  color: 'header-primary',
  variant: 'text-md/normal',
  children: c.Z.Messages.USER_PROFILE_SENDING
})
  ]
});
t.Z = e => {
  let {
shown: t,
sent: n,
isReply: i,
className: _
  } = e, f = i ? c.Z.Messages.USER_PROFILE_REPLY_SENT : c.Z.Messages.USER_PROFILE_REACTION_SENT, h = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), p = (0, l.useTransition)(t, {
from: {
  transform: h ? 'translateY(0)' : 'translateY(16px)',
  opacity: 0
},
enter: {
  transform: 'translateY(0)',
  opacity: 1
},
leave: {
  transform: h ? 'translateY(0)' : 'translateY(16px)',
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
  return (0, r.jsx)(r.Fragment, {
children: p((e, t) => t && (0, r.jsx)(s.animated.div, {
  className: a()(d.toastContainer, _),
  style: e,
  children: n ? (0, r.jsx)(l.Toast, {
    message: f,
    type: l.ToastType.SUCCESS,
    id: 'react_reply_success_toast'
  }) : (0, r.jsx)(l.Toast, {
    message: '',
    type: l.ToastType.CUSTOM,
    id: 'react_reply_loading_toast',
    options: {
      component: (0, r.jsx)(E, {})
    }
  })
}))
  });
};