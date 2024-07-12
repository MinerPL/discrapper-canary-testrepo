l.r(n), l.d(n, {
  default: function() {
return k;
  }
}), l(47120);
var s, a, t = l(735250),
  i = l(470079),
  r = l(392711),
  o = l(442837),
  d = l(481060),
  c = l(447543),
  u = l(607070),
  E = l(745510),
  _ = l(433775),
  I = l(984933),
  x = l(430824),
  N = l(47309),
  m = l(153124),
  T = l(971130),
  h = l(981888),
  g = l(924301),
  v = l(482241),
  S = l(951539),
  C = l(545165),
  L = l(236373),
  A = l(230900),
  Z = l(854698),
  f = l(334877),
  j = l(785468),
  M = l(202005),
  D = l(311166),
  p = l(744782),
  R = l(129526),
  V = l(765305),
  G = l(981631),
  O = l(689938),
  U = l(392856);
let {
  INVITE_OPTIONS_7_DAYS: y,
  INVITE_OPTIONS_UNLIMITED: b
} = T.ZP;

function B(e) {
  let {
modal: n
  } = e, {
createMultipleConfetti: l
  } = i.useContext(E.h);
  return i.useEffect(() => {
let e = null == n ? void 0 : n.getScrollerNode();
if (null == e)
  return;
let s = e.getBoundingClientRect();
l({
  position: {
    type: 'static-random',
    minValue: {
      x: s.left - 100,
      y: s.top - 100
    },
    maxValue: {
      x: s.left + 100,
      y: s.top + 100
    }
  },
  velocity: {
    type: 'static-random',
    minValue: {
      x: -20,
      y: -20
    },
    maxValue: {
      x: -60,
      y: -60
    }
  }
}, 80), l({
  position: {
    type: 'static-random',
    minValue: {
      x: s.right - 100,
      y: s.top - 100
    },
    maxValue: {
      x: s.right + 100,
      y: s.top + 100
    }
  },
  velocity: {
    type: 'static-random',
    minValue: {
      x: 20,
      y: -20
    },
    maxValue: {
      x: 60,
      y: -60
    }
  }
}, 80);
  }, [
l,
n
  ]), null;
}

function P(e) {
  let {
guildId: n,
guildEvent: l,
guildEventId: a,
editBroadcastInfoData: c,
isEdit: E,
formErrors: _,
transitionState: I,
loading: x,
error: T,
onChange: h,
onSave: v,
onClose: S,
createdEvent: C
  } = e, L = (0, m.Dt)(), A = i.useRef(l), Z = !(0, r.isEqual)(A.current, l), R = i.useMemo(() => [{
  slideId: 0,
  label: O.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
  valid: null == _.entity,
  userErrorMessage: _.entity
},
{
  slideId: 1,
  label: O.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
  valid: null == _.schedule && null == _.topic && (!E || Z),
  userErrorMessage: _.schedule
},
{
  slideId: 2,
  label: O.Z.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
  valid: !0
}
  ], [
_,
E,
Z
  ]), V = Object.keys(s).length, G = (0, g.xt)(l), y = e => Math.max(0, Math.min(e, V - 1)), [b, P] = i.useState(G ? 1 : 0), [k, z] = i.useState(!1), H = i.useMemo(() => R.slice(0, b + 1).map(e => e.valid).every(Boolean), [
R,
b
  ]), F = b >= R.length ? 3 : R[y(b)].slideId, w = 3 === F;
  (0, f.l)(e => e.onUpdateCanCloseModal)(w);
  let W = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
X = i.useRef(null),
Y = e => {
  z(!1), P(y(e));
};
  i.useEffect(() => {
null != C && Y(3);
  }, [
null == C ? void 0 : C.id,
Y
  ]);
  let q = () => {
  if (!!H)
    2 === F ? v() : w ? S() : Y(b + 1);
},
K = () => {
  Y(b - 1);
},
Q = O.Z.Messages.NEXT;
  return 2 === F && (Q = E ? O.Z.Messages.SAVE_EVENT : O.Z.Messages.SCHEDULE_EVENT), (0, t.jsx)(t.Fragment, {
children: (0, t.jsxs)(d.ModalRoot, {
  transitionState: I,
  'aria-labelledby': L,
  size: d.ModalSize.DYNAMIC,
  children: [
    !W && w ? (0, t.jsx)(B, {
      modal: X.current
    }) : null,
    (0, t.jsxs)(d.ModalContent, {
      className: U.content,
      scrollerRef: X,
      children: [
        !w && (0, t.jsx)(N.Z, {
          steps: R.map(e => e.label),
          stepIndex: b,
          onClick: e => {
            e < b ? K() : e > b && q();
          }
        }),
        (0, t.jsxs)(d.Slides, {
          activeSlide: F,
          width: 440,
          onSlideReady: e => {
            z(e === F);
          },
          children: [
            (0, t.jsx)(d.Slide, {
              id: 0,
              children: (0, t.jsx)(j.Z, {
                guildId: n,
                guildEvent: l,
                validationErrorMessage: _.entity,
                isSlideReady: k,
                onChange: h
              })
            }),
            (0, t.jsx)(d.Slide, {
              id: 1,
              children: (0, t.jsx)(D.Z, {
                guildEvent: l,
                guildEventId: a,
                guildId: n,
                editBroadcastInfoData: c,
                onChange: h,
                error: T,
                validationErrorMessage: _.schedule,
                isSlideReady: k
              })
            }),
            (0, t.jsx)(d.Slide, {
              id: 2,
              children: (0, t.jsx)(M.Z, {
                guildId: n,
                guildEvent: l,
                guildEventId: a,
                error: T
              })
            }),
            (0, t.jsx)(d.Slide, {
              id: 3,
              children: (0, t.jsx)(p.Z, {
                onClose: S,
                event: C
              })
            })
          ]
        })
      ]
    }),
    !w && (0, t.jsxs)(d.ModalFooter, {
      className: U.footer,
      children: [
        (0, t.jsxs)('div', {
          className: U.inline,
          children: [
            (0, t.jsx)(d.Button, {
              color: d.Button.Colors.PRIMARY,
              onClick: S,
              children: O.Z.Messages.CANCEL
            }),
            (0, t.jsx)(d.Button, {
              onClick: q,
              disabled: !H,
              className: U.button,
              submitting: x,
              children: Q
            })
          ]
        }),
        0 !== F && (0, t.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          size: d.Button.Sizes.MIN,
          onClick: K,
          color: d.Button.Colors.LINK,
          children: O.Z.Messages.BACK
        })
      ]
    })
  ]
})
  });
}

function k(e) {
  let {
guildId: n,
guildScheduledEventId: s,
transitionState: a,
onClose: r
  } = e, u = (0, o.e7)([x.Z], () => x.Z.getGuild(n)), E = (0, o.e7)([g.ZP], () => g.ZP.getGuildScheduledEvent(s), [s]), N = (0, o.e7)([I.ZP], () => I.ZP.getDefaultChannel(n), [n]), m = (0, L.j$)(E, N), [T, f] = i.useState(m), [j] = i.useState((0, L.Ql)(E)), [M, D] = i.useState(null), p = e => {
var n;
let l = (0, S.so)(e),
  s = null !== (n = e.channel_id) && void 0 !== n ? n : null == N ? void 0 : N.id;
null != s && c.Z.createInvite(s, {
  max_age: y.value,
  max_uses: b.value
}, G.t4x.GUILD_EVENTS), l ? D(e) : r();
  }, U = (0, _.Z)(u, null == E ? void 0 : E.id, T), [B, {
loading: k,
error: z
  }] = (0, h.Z)(async () => {
if (null != M)
  return;
let e = {
  broadcastToDirectoryChannels: U.broadcastToDirectoryChannels
};
if (j && null != s)
  return await v.Z.saveEvent(s, T, n, e), r();
let l = await v.Z.createGuildEvent(T, n, e);
return p(l.body), l;
  }), H = i.useMemo(() => (0, R.Z)(T, j), [
T,
j
  ]);
  return (0, t.jsx)(P, {
guildId: n,
guildEvent: T,
guildEventId: s,
editBroadcastInfoData: U,
isEdit: j,
formErrors: H,
transitionState: a,
loading: k,
error: z,
onChange: e => {
  if (null != e.entityType) {
    var l;
    let s = (0, A.xC)(e.entityType),
      [a] = (0, C.SU)(n, s);
    e.channelId = null !== (l = null == a ? void 0 : a.id) && void 0 !== l ? l : null, e.entityType !== V.WX.EXTERNAL && T.entityType === V.WX.EXTERNAL && (e.entityMetadata = null);
  }
  f(n => ({
    ...n,
    ...e
  }));
},
onSave: () => {
  null != T.recurrenceRule && j && (0, Z.BP)(E, T) ? (0, d.openModalLazy)(async () => {
    let {
      ConfirmModal: e
    } = await Promise.resolve().then(l.bind(l, 481060));
    return n => (0, t.jsxs)(e, {
      ...n,
      header: O.Z.Messages.EDIT_ALL_EVENTS,
      confirmText: O.Z.Messages.SAVE_EVENT,
      cancelText: O.Z.Messages.NEVERMIND,
      onConfirm: B,
      children: [
        (0, t.jsx)(d.Text, {
          variant: 'text-md/normal',
          children: O.Z.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
        }),
        (0, t.jsx)('br', {}),
        (0, t.jsx)(d.Text, {
          variant: 'text-md/normal',
          children: O.Z.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
        })
      ]
    });
  }) : B();
},
onClose: r,
createdEvent: M
  });
}
(a = s || (s = {}))[a.ENTITY = 0] = 'ENTITY', a[a.SETTINGS = 1] = 'SETTINGS', a[a.PREVIEW = 2] = 'PREVIEW', a[a.SUCCESS = 3] = 'SUCCESS';