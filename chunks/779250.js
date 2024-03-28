"use strict";
l.r(t), l.d(t, {
  default: function() {
    return k
  }
}), l("47120");
var a, n, s = l("735250"),
  r = l("470079"),
  i = l("392711"),
  d = l("442837"),
  u = l("481060"),
  o = l("447543"),
  c = l("607070"),
  E = l("745510"),
  _ = l("433775"),
  f = l("984933"),
  T = l("430824"),
  h = l("47309"),
  I = l("153124"),
  N = l("971130"),
  m = l("981888"),
  x = l("924301"),
  v = l("482241"),
  g = l("951539"),
  S = l("545165"),
  C = l("236373"),
  A = l("230900"),
  L = l("854698"),
  p = l("334877"),
  M = l("785468"),
  D = l("377329"),
  R = l("311166"),
  j = l("744782"),
  y = l("129526"),
  G = l("765305"),
  V = l("981631"),
  U = l("689938"),
  O = l("806335");
let {
  INVITE_OPTIONS_7_DAYS: B,
  INVITE_OPTIONS_UNLIMITED: b
} = N.default;

function F(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: l
  } = r.useContext(E.ConfettiCannonContext);
  return r.useEffect(() => {
    let e = null == t ? void 0 : t.getScrollerNode();
    if (null == e) return;
    let a = e.getBoundingClientRect();
    l({
      position: {
        type: "static-random",
        minValue: {
          x: a.left - 100,
          y: a.top - 100
        },
        maxValue: {
          x: a.left + 100,
          y: a.top + 100
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
    }, 80), l({
      position: {
        type: "static-random",
        minValue: {
          x: a.right - 100,
          y: a.top - 100
        },
        maxValue: {
          x: a.right + 100,
          y: a.top + 100
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
  }, [l, t]), null
}

function P(e) {
  let {
    guildId: t,
    guildEvent: l,
    guildEventId: n,
    editBroadcastInfoData: o,
    isEdit: E,
    formErrors: _,
    transitionState: f,
    loading: T,
    error: N,
    onChange: m,
    onSave: v,
    onClose: g,
    createdEvent: S
  } = e, C = (0, I.useUID)(), A = r.useRef(l), L = !(0, i.isEqual)(A.current, l), y = r.useMemo(() => [{
    slideId: 0,
    label: U.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == _.entity,
    userErrorMessage: _.entity
  }, {
    slideId: 1,
    label: U.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == _.schedule && null == _.topic && (!E || L),
    userErrorMessage: _.schedule
  }, {
    slideId: 2,
    label: U.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [_, E, L]), G = Object.keys(a).length, V = (0, x.isGuildScheduledEventActive)(l), B = e => Math.max(0, Math.min(e, G - 1)), [b, P] = r.useState(V ? 1 : 0), [k, H] = r.useState(!1), w = r.useMemo(() => y.slice(0, b + 1).map(e => e.valid).every(Boolean), [y, b]), z = b >= y.length ? 3 : y[B(b)].slideId, Y = 3 === z;
  (0, p.useGuildEventModalStore)(e => e.onUpdateCanCloseModal)(Y);
  let X = (0, d.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    W = r.useRef(null),
    K = e => {
      H(!1), P(B(e))
    };
  r.useEffect(() => {
    null != S && K(3)
  }, [null == S ? void 0 : S.id, K]);
  let q = () => {
      if (!!w) 2 === z ? v() : Y ? g() : K(b + 1)
    },
    Z = () => {
      K(b - 1)
    },
    Q = U.default.Messages.NEXT;
  return 2 === z && (Q = E ? U.default.Messages.SAVE_EVENT : U.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(u.ModalRoot, {
      transitionState: f,
      "aria-labelledby": C,
      size: u.ModalSize.DYNAMIC,
      children: [!X && Y ? (0, s.jsx)(F, {
        modal: W.current
      }) : null, (0, s.jsxs)(u.ModalContent, {
        className: O.content,
        scrollerRef: W,
        children: [!Y && (0, s.jsx)(h.default, {
          steps: y.map(e => e.label),
          stepIndex: b,
          onClick: e => {
            e < b ? Z() : e > b && q()
          }
        }), (0, s.jsxs)(u.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            H(e === z)
          },
          children: [(0, s.jsx)(u.Slide, {
            id: 0,
            children: (0, s.jsx)(M.default, {
              guildId: t,
              guildEvent: l,
              validationErrorMessage: _.entity,
              isSlideReady: k,
              onChange: m
            })
          }), (0, s.jsx)(u.Slide, {
            id: 1,
            children: (0, s.jsx)(R.default, {
              guildEvent: l,
              guildEventId: n,
              guildId: t,
              editBroadcastInfoData: o,
              onChange: m,
              error: N,
              validationErrorMessage: _.schedule,
              isSlideReady: k
            })
          }), (0, s.jsx)(u.Slide, {
            id: 2,
            children: (0, s.jsx)(D.default, {
              guildId: t,
              guildEvent: l,
              guildEventId: n,
              error: N
            })
          }), (0, s.jsx)(u.Slide, {
            id: 3,
            children: (0, s.jsx)(j.default, {
              onClose: g,
              event: S
            })
          })]
        })]
      }), !Y && (0, s.jsxs)(u.ModalFooter, {
        className: O.footer,
        children: [(0, s.jsxs)("div", {
          className: O.inline,
          children: [(0, s.jsx)(u.Button, {
            color: u.Button.Colors.PRIMARY,
            onClick: g,
            children: U.default.Messages.CANCEL
          }), (0, s.jsx)(u.Button, {
            onClick: q,
            disabled: !w,
            className: O.button,
            submitting: T,
            children: Q
          })]
        }), 0 !== z && (0, s.jsx)(u.Button, {
          look: u.Button.Looks.LINK,
          size: u.Button.Sizes.MIN,
          onClick: Z,
          color: u.Button.Colors.LINK,
          children: U.default.Messages.BACK
        })]
      })]
    })
  })
}

function k(e) {
  let {
    guildId: t,
    guildScheduledEventId: a,
    transitionState: n,
    onClose: i
  } = e, c = (0, d.useStateFromStores)([T.default], () => T.default.getGuild(t)), E = (0, d.useStateFromStores)([x.default], () => x.default.getGuildScheduledEvent(a), [a]), h = (0, d.useStateFromStores)([f.default], () => f.default.getDefaultChannel(t), [t]), I = (0, C.getInitialGuildEventData)(E, h), [N, p] = r.useState(I), [M] = r.useState((0, C.isEditingEvent)(E)), [D, R] = r.useState(null), j = e => {
    var t;
    let l = (0, g.isGuildEventInvitable)(e),
      a = null !== (t = e.channel_id) && void 0 !== t ? t : null == h ? void 0 : h.id;
    null != a && o.default.createInvite(a, {
      max_age: B.value,
      max_uses: b.value
    }, V.InstantInviteSources.GUILD_EVENTS), l ? R(e) : i()
  }, O = (0, _.default)(c, null == E ? void 0 : E.id, N), [F, {
    loading: k,
    error: H
  }] = (0, m.default)(async () => {
    if (null != D) return;
    let e = {
      broadcastToDirectoryChannels: O.broadcastToDirectoryChannels
    };
    if (M && null != a) return await v.default.saveEvent(a, N, t, e), i();
    let l = await v.default.createGuildEvent(N, t, e);
    return j(l.body), l
  }), w = r.useMemo(() => (0, y.default)(N, M), [N, M]);
  return (0, s.jsx)(P, {
    guildId: t,
    guildEvent: N,
    guildEventId: a,
    editBroadcastInfoData: O,
    isEdit: M,
    formErrors: w,
    transitionState: n,
    loading: k,
    error: H,
    onChange: e => {
      if (null != e.entityType) {
        var l;
        let a = (0, A.getChannelTypeFromEntity)(e.entityType),
          [n] = (0, S.getEventChannelsByType)(t, a);
        e.channelId = null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : null, e.entityType !== G.GuildScheduledEventEntityTypes.EXTERNAL && N.entityType === G.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      p(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      null != N.recurrenceRule && M && (0, L.hasScheduleChanges)(E, N) ? (0, u.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(l.bind(l, "481060"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: U.default.Messages.EDIT_ALL_EVENTS,
          confirmText: U.default.Messages.SAVE_EVENT,
          cancelText: U.default.Messages.NEVERMIND,
          onConfirm: F,
          children: [(0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: U.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: U.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : F()
    },
    onClose: i,
    createdEvent: D
  })
}(n = a || (a = {}))[n.ENTITY = 0] = "ENTITY", n[n.SETTINGS = 1] = "SETTINGS", n[n.PREVIEW = 2] = "PREVIEW", n[n.SUCCESS = 3] = "SUCCESS"