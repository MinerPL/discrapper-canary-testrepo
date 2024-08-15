a.r(t), a.d(t, {
  default: function() {
return m;
  }
}), a(47120);
var s = a(735250),
  n = a(470079),
  l = a(442837),
  o = a(481060),
  i = a(91176),
  r = a(906732),
  c = a(346486),
  u = a(313201),
  d = a(594174),
  _ = a(626135),
  h = a(71619),
  N = a(590433),
  C = a(981631),
  I = a(689938),
  M = a(737282);

function m(e) {
  var t, a;
  let {
guildId: m,
userId: E,
anaylticsLocations: f,
transitionState: p,
onClose: T
  } = e, O = (0, u.Dt)(), {
analyticsLocations: U
  } = (0, r.ZP)(), S = null !== (a = null !== (t = null == f ? void 0 : f[0]) && void 0 !== t ? t : null == U ? void 0 : U[0]) && void 0 !== a ? a : null, v = (0, l.e7)([d.default], () => d.default.getUser(E), [E]), [D, x] = (0, h.ZP)(E, m), [A, g] = n.useState(!1), b = n.useCallback(async () => {
if (null != v) {
  g(!0);
  try {
    await i.Z.setCommunicationDisabledDuration(m, E, null, null, S), (0, o.showToast)((0, o.createToast)(I.Z.Messages.GUILD_ENABLE_COMMUNICATION_SUCCESS, o.ToastType.SUCCESS)), T();
  } catch (e) {
    (0, o.showToast)((0, o.createToast)(I.Z.Messages.APPLICATION_STORE_LISTING_PURCHASE_GENERIC_ERROR, o.ToastType.FAILURE));
  } finally {
    g(!1);
  }
}
  }, [
m,
v,
E,
T,
S
  ]), Z = n.useCallback(() => {
!x && T();
  }, [
x,
T
  ]);
  return (n.useEffect(() => {
if (null != v)
  _.default.track(C.rMx.OPEN_MODAL, {
    type: N.av,
    guild_id: m,
    other_user_id: v.id
  });
  }, []), n.useEffect(() => {
(null == v || null == m) && T();
  }), null == v || null == m) ? null : (0, s.jsxs)(o.ModalRoot, {
transitionState: p,
'aria-labelledby': O,
children: [
  (0, s.jsxs)(o.ModalHeader, {
    className: M.header,
    separator: !1,
    children: [
      (0, s.jsx)(o.Heading, {
        variant: 'heading-lg/semibold',
        children: I.Z.Messages.GUILD_ENABLE_COMMUNICATION_HEADER
      }),
      (0, s.jsx)(o.Clickable, {
        onClick: T,
        className: M.closeButton,
        'aria-label': I.Z.Messages.CLOSE,
        children: (0, s.jsx)(o.XSmallIcon, {
          size: 'xs',
          color: 'currentColor',
          className: M.closeIcon
        })
      })
    ]
  }),
  (0, s.jsxs)(o.ModalContent, {
    children: [
      (0, s.jsx)(o.Text, {
        variant: 'text-md/normal',
        color: 'interactive-normal',
        children: I.Z.Messages.GUILD_ENABLE_COMMUNICATION_TIME_REMAINING.format({
          username: v.username,
          countdown: e => null == D ? null : (0, s.jsx)(c.Z, {
            className: M.countdown,
            deadline: new Date(D),
            onInterval: Z,
            showUnits: !0,
            stopAtOneSec: !0
          })
        })
      }),
      (0, s.jsx)(o.Text, {
        className: M.cta,
        variant: 'text-md/normal',
        color: 'interactive-normal',
        children: I.Z.Messages.GUILD_ENABLE_COMMUNICATION_CTA.format({
          link: N.cu
        })
      })
    ]
  }),
  (0, s.jsxs)(o.ModalFooter, {
    children: [
      (0, s.jsx)(o.Button, {
        color: o.Button.Colors.RED,
        onClick: b,
        submitting: A,
        children: I.Z.Messages.REMOVE_TIME_OUT
      }),
      (0, s.jsx)(o.Button, {
        type: 'button',
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: T,
        children: I.Z.Messages.CANCEL
      })
    ]
  })
]
  });
}