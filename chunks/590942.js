"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("917351"),
  u = n("446674"),
  o = n("77078"),
  d = n("970728"),
  c = n("206230"),
  E = n("526887"),
  f = n("960757"),
  h = n("923959"),
  v = n("305961"),
  m = n("683911"),
  N = n("476765"),
  _ = n("354023"),
  I = n("686904"),
  T = n("398604"),
  x = n("322224"),
  C = n("152475"),
  g = n("799547"),
  S = n("189443"),
  p = n("841363"),
  A = n("822516"),
  L = n("558286"),
  y = n("560309"),
  M = n("151859"),
  j = n("299342"),
  R = n("499950"),
  D = n("27754"),
  G = n("745049"),
  V = n("49111"),
  O = n("782340"),
  U = n("872994");
let {
  INVITE_OPTIONS_7_DAYS: B,
  INVITE_OPTIONS_UNLIMITED: b
} = _.default;

function P(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = i.useContext(E.ConfettiCannonContext);
  return i.useEffect(() => {
    let e = null == t ? void 0 : t.getScrollerNode();
    if (null == e) return;
    let l = e.getBoundingClientRect();
    n({
      position: {
        type: "static-random",
        minValue: {
          x: l.left - 100,
          y: l.top - 100
        },
        maxValue: {
          x: l.left + 100,
          y: l.top + 100
        }
      },
      velocity: {
        type: "static-random",
        minValue: {
          x: -20,
          y: -20
        },
        maxValue: {
          x: -60,
          y: -60
        }
      }
    }, 80), n({
      position: {
        type: "static-random",
        minValue: {
          x: l.right - 100,
          y: l.top - 100
        },
        maxValue: {
          x: l.right + 100,
          y: l.top + 100
        }
      },
      velocity: {
        type: "static-random",
        minValue: {
          x: 20,
          y: -20
        },
        maxValue: {
          x: 60,
          y: -60
        }
      }
    }, 80)
  }, [n, t]), null
}

function F(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: a,
    editBroadcastInfoData: d,
    isEdit: E,
    formErrors: f,
    transitionState: h,
    loading: v,
    error: _,
    onChange: I,
    onSave: x,
    onClose: C,
    createdEvent: g
  } = e, S = (0, N.useUID)(), p = i.useRef(n), A = !(0, r.isEqual)(p.current, n), D = i.useMemo(() => [{
    slideId: 0,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == f.entity,
    userErrorMessage: f.entity
  }, {
    slideId: 1,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == f.schedule && null == f.topic && (!E || A),
    userErrorMessage: f.schedule
  }, {
    slideId: 2,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [f, E, A]), G = Object.keys(l).length, V = (0, T.isGuildScheduledEventActive)(n), B = e => Math.max(0, Math.min(e, G - 1)), [b, F] = i.useState(V ? 1 : 0), [w, k] = i.useState(!1), H = i.useMemo(() => D.slice(0, b + 1).map(e => e.valid).every(Boolean), [D, b]), z = b >= D.length ? 3 : D[B(b)].slideId, Z = 3 === z, Y = (0, L.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Y(Z);
  let W = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    X = i.useRef(null),
    q = e => {
      k(!1), F(B(e))
    };
  i.useEffect(() => {
    null != g && q(3)
  }, [null == g ? void 0 : g.id, q]);
  let K = () => {
      if (!H) return;
      let e = 2 === z;
      e ? x() : Z ? C() : q(b + 1)
    },
    J = () => {
      q(b - 1)
    },
    Q = O.default.Messages.NEXT;
  return 2 === z && (Q = E ? O.default.Messages.SAVE_EVENT : O.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(o.ModalRoot, {
      transitionState: h,
      "aria-labelledby": S,
      size: o.ModalSize.DYNAMIC,
      children: [!W && Z ? (0, s.jsx)(P, {
        modal: X.current
      }) : null, (0, s.jsxs)(o.ModalContent, {
        className: U.content,
        scrollerRef: X,
        children: [!Z && (0, s.jsx)(m.default, {
          steps: D.map(e => e.label),
          stepIndex: b,
          onClick: e => {
            e < b ? J() : e > b && K()
          }
        }), (0, s.jsxs)(o.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            k(e === z)
          },
          children: [(0, s.jsx)(o.Slide, {
            id: 0,
            children: (0, s.jsx)(y.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: f.entity,
              isSlideReady: w,
              onChange: I
            })
          }), (0, s.jsx)(o.Slide, {
            id: 1,
            children: (0, s.jsx)(j.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: d,
              onChange: I,
              error: _,
              validationErrorMessage: f.schedule,
              isSlideReady: w
            })
          }), (0, s.jsx)(o.Slide, {
            id: 2,
            children: (0, s.jsx)(M.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: _
            })
          }), (0, s.jsx)(o.Slide, {
            id: 3,
            children: (0, s.jsx)(R.default, {
              onClose: C,
              event: g
            })
          })]
        })]
      }), !Z && (0, s.jsxs)(o.ModalFooter, {
        className: U.footer,
        children: [(0, s.jsxs)("div", {
          className: U.inline,
          children: [(0, s.jsx)(o.Button, {
            color: o.Button.Colors.PRIMARY,
            onClick: C,
            children: O.default.Messages.CANCEL
          }), (0, s.jsx)(o.Button, {
            onClick: K,
            disabled: !H,
            className: U.button,
            submitting: v,
            children: Q
          })]
        }), 0 !== z && (0, s.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          size: o.Button.Sizes.MIN,
          onClick: J,
          color: o.Button.Colors.LINK,
          children: O.default.Messages.BACK
        })]
      })]
    })
  })
}

function w(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: r
  } = e, c = (0, u.useStateFromStores)([v.default], () => v.default.getGuild(t)), E = (0, u.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(l), [l]), m = (0, u.useStateFromStores)([h.default], () => h.default.getDefaultChannel(t), [t]), N = (0, S.getInitialGuildEventData)(E, m), [_, L] = i.useState(N), [y] = i.useState((0, S.isEditingEvent)(E)), [M, j] = i.useState(null), R = e => {
    var t;
    let n = (0, C.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == m ? void 0 : m.id;
    null != l && d.default.createInvite(l, {
      max_age: B.value,
      max_uses: b.value
    }, V.InstantInviteSources.GUILD_EVENTS), n ? j(e) : r()
  }, U = (0, f.default)(c, null == E ? void 0 : E.id, _), [P, {
    loading: w,
    error: k
  }] = (0, I.default)(async () => {
    if (null != M) return;
    let e = {
      broadcastToDirectoryChannels: U.broadcastToDirectoryChannels
    };
    if (y && null != l) return await x.default.saveEvent(l, _, t, e), r();
    let n = await x.default.createGuildEvent(_, t, e);
    return R(n.body), n
  }), H = i.useMemo(() => (0, D.default)(_, y), [_, y]);
  return (0, s.jsx)(F, {
    guildId: t,
    guildEvent: _,
    guildEventId: l,
    editBroadcastInfoData: U,
    isEdit: y,
    formErrors: H,
    transitionState: a,
    loading: w,
    error: k,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, p.getChannelTypeFromEntity)(e.entityType),
          [a] = (0, g.getEventChannelsByType)(t, l);
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== G.GuildScheduledEventEntityTypes.EXTERNAL && _.entityType === G.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      L(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      null != _.recurrenceRule && y && (0, A.hasScheduleChanges)(E, _) ? (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: O.default.Messages.EDIT_ALL_EVENTS,
          confirmText: O.default.Messages.SAVE_EVENT,
          cancelText: O.default.Messages.NEVERMIND,
          onConfirm: P,
          children: [(0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: O.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: O.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : P()
    },
    onClose: r,
    createdEvent: M
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"