n(653041), n(47120);
var a = n(735250),
  s = n(470079),
  r = n(120356),
  l = n.n(r),
  i = n(913527),
  o = n.n(i),
  c = n(338545),
  d = n(831209),
  u = n(149765),
  m = n(442837),
  h = n(481060),
  _ = n(787014),
  g = n(412899),
  x = n(607070),
  C = n(447003),
  f = n(605436),
  p = n(621516),
  T = n(430824),
  I = n(186523),
  E = n(585483),
  N = n(70956),
  b = n(709054),
  v = n(961675),
  S = n(883429),
  M = n(993259),
  A = n(109434),
  j = n(456269),
  R = n(228392),
  O = n(432771),
  Z = n(538366),
  L = n(470623),
  P = n(710352),
  w = n(981631),
  y = n(689938),
  D = n(627653);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let U = {
width: 28,
height: 28
  },
  k = {
width: 20,
height: 20,
borderRadius: 10
  },
  H = e => {
(0, R.e5)({
  onboardingCTA: e
});
  };
class B {
  addStep(e) {
++this.currentIndex, this.steps.push({
  index: this.currentIndex,
  ...e
}), e.isDone && this.completedSteps++;
  }
  getSteps() {
return this.steps;
  }
  isAllDone() {
return this.steps.every(e => e.isDone);
  }
  constructor() {
F(this, 'currentIndex', 0), F(this, 'steps', []), F(this, 'completedSteps', 0);
  }
}
let G = e => {
let t = null != e.topic && e.topic.length > 0;
return {
  name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
  description: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
  clickHandler: () => {
    H(P.ZI.GUIDELINES), _.ZP.open(e.id, void 0, w.ZfP.TOPIC);
  },
  isDone: t
};
  },
  z = e => {
let t = null != e.availableTags && e.availableTags.length > 0;
return {
  name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
  description: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
  clickHandler: () => {
    H(P.ZI.TAGS), _.ZP.open(e.id), (0, h.openModalLazy)(async () => {
      let {
        default: t
      } = await n.e('21971').then(n.bind(n, 201049));
      return n => (0, a.jsx)(t, {
        ...n,
        channelId: e.id,
        guildId: e.guild_id
      });
    });
  },
  isDone: t
};
  },
  V = e => {
let t = null != e.defaultReactionEmoji;
return {
  name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
  description: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
  clickHandler: () => {
    H(P.ZI.DEFAULT_REACTION), (0, h.openModalLazy)(async () => {
      let {
        default: t
      } = await n.e('80404').then(n.bind(n, 158586));
      return n => (0, a.jsx)(t, {
        ...n,
        channel: e
      });
    });
  },
  isDone: t
};
  },
  W = (e, t, s) => ({
name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
description: t ? y.Z.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
  onClick: e => {
    null != s && (e.preventDefault(), e.stopPropagation(), (0, R.qz)(), (0, h.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('18417').then(n.bind(n, 740696));
      return t => (0, a.jsx)(e, {
        ...t,
        guildId: s
      });
    }));
  }
}),
clickHandler: () => {
  H(P.ZI.CREATE_POST), E.S.dispatch(w.CkL.FOCUS_COMPOSER_TITLE);
},
isDone: e
  }),
  q = (e, t) => s.useCallback(() => (t(!1), S.Z.hideAdminOnboarding(e, !0)), [
e,
t
  ]),
  K = e => {
let t = b.default.extractTimestamp(e);
return o()().isBefore(o()(t).add(o().duration(15, 'days')));
  },
  Y = (e, t, n) => {
s.useEffect(() => {
  !e && n(!t);
}, [
  e,
  n,
  t
]);
  },
  X = (e, t, n, a) => {
let r = s.useRef(0);
s.useEffect(() => (n || !e || t ? clearTimeout(r.current) : r.current = setTimeout(() => {
  a();
}, 60 * N.Z.Millis.SECOND), () => clearTimeout(r.current)), [
  e,
  t,
  a,
  n
]);
  },
  J = (e, t, n) => {
s.useEffect(() => {
  e && t && n();
}, []);
  },
  Q = e => {
let {
  isAllDone: t,
  isVisible: n,
  canManageChannel: a,
  guildId: r,
  channel: l
} = e, i = (0, m.e7)([T.Z], () => null != r ? T.Z.getRoles(r) : void 0), o = s.useCallback(() => {
  E.S.dispatch(w.CkL.REMEASURE_TARGET);
}, []);
s.useEffect(() => {
  o();
}, [
  o,
  t,
  n,
  a,
  i,
  l.id,
  l.permissionOverwrites
]);
  },
  $ = () => {
let [e, t] = s.useState(!0), n = (0, m.e7)([x.Z], () => x.Z.useReducedMotion);
return {
  transitions: (0, c.useTransition)(e, {
    keys: e => e ? 'shown' : 'hidden',
    config: en,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    unique: !0,
    immediate: n
  }),
  setVisible: t
};
  },
  ee = e => {
let t = (0, m.e7)([x.Z], () => x.Z.useReducedMotion);
return (0, c.useTransition)(e, {
  from: {
    maxHeight: 0
  },
  enter: {
    maxHeight: 500
  },
  leave: {
    maxHeight: 0
  },
  config: {
    duration: 200
  },
  immediate: t
});
  },
  et = e => {
let {
  guild: t,
  roles: n
} = e;
return (0, a.jsx)('div', {
  className: D.rolesList,
  'aria-label': y.Z.Messages.ROLES_LIST.format({
    numRoles: n.length
  }),
  children: n.map(e => (0, a.jsx)(g.UB, {
    role: e,
    canRemove: !1,
    onRemove: w.VqG,
    guildId: t.id,
    className: D.rolePill
  }, e.id))
});
  },
  en = {
mass: 1,
tension: 250,
friction: 18,
clamp: !0
  },
  ea = e => {
let {
  guild: t,
  channel: r,
  hasAnyThread: l,
  handleHide: i
} = e, [o, c] = s.useState(!1), d = (0, O.c)(r.id), _ = (0, m.e7)([v.Z], () => v.Z.hasHidden(r.id)), g = function(e, t, r, l) {
  let i = null == e ? void 0 : e.id,
    o = (0, m.e7)([T.Z], () => null != i ? T.Z.getRoles(i) : void 0);
  return s.useMemo(() => {
    let s = new B(),
      i = (null == t ? void 0 : t.isMediaChannel()) === !0;
    return null != e && null != t && !i && null != o && s.addStep(function(e, t, s, r) {
      let l = (0, C.Z)(s) ? u.$e(w.Plq.VIEW_CHANNEL, w.Plq.SEND_MESSAGES) : w.Plq.SEND_MESSAGES,
        i = null != e ? (0, M.E$)(e, t, s, l).filter(t => s.permissionOverwrites.hasOwnProperty(t.id) || (0, f.pM)(e.id, t.id)) : [],
        o = i.length > 0,
        c = i.some(t => (0, f.pM)(e.id, t.id));
      return {
        name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
        description: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
        isDone: o && c,
        shouldWarn: o && !c,
        children: o ? (0, a.jsx)(et, {
          guild: e,
          roles: i
        }) : null,
        clickHandler: () => {
          H(P.ZI.PERMISSIONS), (0, h.openModalLazy)(async () => {
            let {
              default: t
            } = await n.e('78704').then(n.bind(n, 560602));
            return r(!0), n => (0, a.jsx)(t, {
              ...n,
              channel: s,
              guild: e,
              permission: l,
              currentSelectedRoles: i
            });
          }, {
            modalKey: 'SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY',
            onCloseRequest: w.VqG,
            onCloseCallback: () => r(!1)
          });
        }
      };
    }(e, o, t, l)), !i && s.addStep(G(t)), s.addStep(z(t)), s.addStep(V(t)), s.addStep(W(r, i, null == e ? void 0 : e.id)), s;
  }, [
    t,
    e,
    o,
    r,
    l
  ]);
}(t, r, l, c), x = g.isAllDone();
return X(x, d || _ || !K(r.id), o, i), {
  onboardingSteps: g,
  isHidden: _,
  isDismissed: d,
  isAllDone: x
};
  },
  es = () => s.useCallback(e => {
var t;
null === (t = e.clickHandler) || void 0 === t || t.call(e);
  }, []),
  er = e => {
let {
  handleHide: t
} = e;
return (0, a.jsx)(h.Clickable, {
  onClick: t,
  className: D.closeButton,
  'aria-label': y.Z.Messages.DISMISS,
  children: (0, a.jsx)(h.CloseSmallIcon, {
    size: 'md',
    color: 'currentColor',
    className: D.closeIcon
  })
});
  },
  el = e => {
let {
  expanded: t,
  onClick: n
} = e;
return (0, a.jsx)(h.Clickable, {
  onClick: n,
  className: D.closeButton,
  'aria-label': t ? y.Z.Messages.COLLAPSE : y.Z.Messages.EXPAND,
  children: t ? (0, a.jsx)(h.MinimizeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: D.closeIcon
  }) : (0, a.jsx)(h.MaximizeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: D.closeIcon
  })
});
  };
t.Z = e => {
  let {
hasAnyThread: t,
channel: n
  } = e, {
onboardingExpanded: r
  } = (0, L.xH)(e => {
let {
  onboardingExpanded: t
} = e;
return {
  onboardingExpanded: t
};
  }), {
tagFilter: i
  } = (0, A.H)(n.id), o = (0, m.e7)([T.Z], () => T.Z.getGuild(n.getGuildId())), u = (0, j.r_)(n), {
transitions: _,
setVisible: g
  } = $(), x = ee(r), C = es(), f = q(n.id, g), {
onboardingSteps: E,
isDismissed: N,
isHidden: b,
isAllDone: v
  } = ea({
guild: o,
channel: n,
hasAnyThread: t,
handleHide: f
  }), S = !b && !N, M = (0, L.AF)(), R = n.isMediaChannel(), O = e => M.getState().setOnboardingExpanded(e);
  return (J(v, S, f), Q({
isAllDone: v,
isVisible: S,
canManageChannel: u,
guildId: null == o ? void 0 : o.id,
channel: n
  }), Y(N, b, g), s.useEffect(() => {
(!t || !S) && O(!0);
  }, []), null == o) ? null : S && u ? R ? t ? null : (0, a.jsx)(p.Z, {
channel: n
  }) : (0, a.jsx)(a.Fragment, {
children: _((e, t) => t ? (0, a.jsx)(c.animated.div, {
  style: e,
  className: D.container,
  children: (0, a.jsxs)('div', {
    className: D.wrapper,
    children: [
      (0, a.jsx)('div', {
        className: D.headerRow,
        children: (0, a.jsxs)(h.HeadingLevel, {
          component: (0, a.jsx)(h.Heading, {
            variant: 'heading-md/semibold',
            children: y.Z.Messages.GET_STARTED
          }),
          children: [
            (0, a.jsx)(h.Heading, {
              variant: 'heading-md/medium',
              className: D.header,
              children: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: E.completedSteps.toString(),
                numSteps: E.steps.length.toString()
              })
            }),
            (0, a.jsxs)(h.Text, {
              variant: 'text-xs/normal',
              className: D.visibilityInfo,
              children: [
                (0, a.jsx)(h.CircleInformationIcon, {
                  size: 'xxs',
                  color: 'currentColor',
                  className: D.icon
                }),
                y.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY
              ]
            }),
            (0, a.jsx)(el, {
              expanded: r,
              onClick: () => O(!r)
            }),
            (0, a.jsx)(er, {
              handleHide: f
            })
          ]
        })
      }),
      x((e, t) => t ? (0, a.jsx)(c.animated.div, {
        style: e,
        className: D.listContainer,
        children: (0, a.jsx)('ol', {
          className: D.checklist,
          children: E.getSteps().map(e => (0, a.jsxs)(h.Clickable, {
            tag: 'li',
            'aria-label': e.name,
            onClick: () => C(e),
            className: l()(D.stepContainer, {
              [D.completed]: e.isDone
            }),
            children: [
              e.shouldWarn ? (0, a.jsx)(h.CircleExclamationPointIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: d.Z.STATUS_DANGER,
                className: D.stepStatus
              }) : e.isDone ? (0, a.jsx)(h.IconBadge, {
                color: d.Z.STATUS_POSITIVE_BACKGROUND,
                icon: h.CheckmarkLargeIcon,
                style: k,
                className: D.stepStatus
              }) : (0, a.jsx)(h.IconBadge, {
                disableColor: !0,
                icon: (0, h.makeIconCompat)(I.Z),
                style: U,
                className: l()(D.stepStatus, D.completed)
              }),
              (0, a.jsxs)('div', {
                className: D.step,
                children: [
                  (0, a.jsx)(h.Text, {
                    variant: 'text-md/medium',
                    color: e.isDone ? 'header-secondary' : 'header-primary',
                    className: D.stepName,
                    children: e.name
                  }),
                  (0, a.jsx)(h.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: D.stepDescription,
                    children: e.description
                  }),
                  e.children
                ]
              }),
              (0, a.jsx)(h.ChevronSmallRightIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 12,
                className: D.stepStatus
              })
            ]
          }, 'onboard-step-'.concat(e.index)))
        })
      }) : null)
    ]
  })
}) : null)
  }) : t ? null : (0, a.jsx)(Z.Z, {
channelName: n.name,
guildId: n.guild_id,
tagFilter: i,
channel: n
  });
};