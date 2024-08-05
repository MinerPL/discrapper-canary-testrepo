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
  x = n(447003),
  C = n(605436),
  f = n(621516),
  p = n(430824),
  T = n(186523),
  I = n(585483),
  E = n(70956),
  N = n(709054),
  b = n(961675),
  v = n(883429),
  S = n(993259),
  M = n(109434),
  A = n(456269),
  j = n(228392),
  R = n(432771),
  O = n(538366),
  Z = n(470623),
  L = n(710352),
  P = n(981631),
  w = n(689938),
  y = n(627653);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let F = {
width: 28,
height: 28
  },
  U = {
width: 20,
height: 20,
borderRadius: 10
  },
  k = e => {
(0, j.e5)({
  onboardingCTA: e
});
  };
class H {
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
D(this, 'currentIndex', 0), D(this, 'steps', []), D(this, 'completedSteps', 0);
  }
}
let B = e => {
let t = null != e.topic && e.topic.length > 0;
return {
  name: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
  description: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
  clickHandler: () => {
    k(L.ZI.GUIDELINES), _.ZP.open(e.id, void 0, P.ZfP.TOPIC);
  },
  isDone: t
};
  },
  G = e => {
let t = null != e.availableTags && e.availableTags.length > 0;
return {
  name: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
  description: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
  clickHandler: () => {
    k(L.ZI.TAGS), _.ZP.open(e.id), (0, h.openModalLazy)(async () => {
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
  z = e => {
let t = null != e.defaultReactionEmoji;
return {
  name: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
  description: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
  clickHandler: () => {
    k(L.ZI.DEFAULT_REACTION), (0, h.openModalLazy)(async () => {
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
  V = (e, t, s) => ({
name: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
description: t ? w.Z.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
  onClick: e => {
    null != s && (e.preventDefault(), e.stopPropagation(), (0, j.qz)(), (0, h.openModalLazy)(async () => {
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
  k(L.ZI.CREATE_POST), I.S.dispatch(P.CkL.FOCUS_COMPOSER_TITLE);
},
isDone: e
  }),
  W = (e, t) => s.useCallback(() => (t(!1), v.Z.hideAdminOnboarding(e, !0)), [
e,
t
  ]),
  q = e => {
let t = N.default.extractTimestamp(e);
return o()().isBefore(o()(t).add(o().duration(15, 'days')));
  },
  K = (e, t, n) => {
s.useEffect(() => {
  !e && n(!t);
}, [
  e,
  n,
  t
]);
  },
  Y = (e, t, n, a) => {
let r = s.useRef(0);
s.useEffect(() => (n || !e || t ? clearTimeout(r.current) : r.current = setTimeout(() => {
  a();
}, 60 * E.Z.Millis.SECOND), () => clearTimeout(r.current)), [
  e,
  t,
  a,
  n
]);
  },
  X = (e, t, n) => {
s.useEffect(() => {
  e && t && n();
}, []);
  },
  J = e => {
let {
  isAllDone: t,
  isVisible: n,
  canManageChannel: a,
  guildId: r,
  channel: l
} = e, i = (0, m.e7)([p.Z], () => null != r ? p.Z.getRoles(r) : void 0), o = s.useCallback(() => {
  I.S.dispatch(P.CkL.REMEASURE_TARGET);
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
  Q = () => {
let [e, t] = s.useState(!0);
return {
  transitions: (0, h.useTransition)(e, {
    keys: e => e ? 'shown' : 'hidden',
    config: et,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    unique: !0
  }),
  setVisible: t
};
  },
  $ = e => (0, h.useTransition)(e, {
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
}
  }),
  ee = e => {
let {
  guild: t,
  roles: n
} = e;
return (0, a.jsx)('div', {
  className: y.rolesList,
  'aria-label': w.Z.Messages.ROLES_LIST.format({
    numRoles: n.length
  }),
  children: n.map(e => (0, a.jsx)(g.UB, {
    role: e,
    canRemove: !1,
    onRemove: P.VqG,
    guildId: t.id,
    className: y.rolePill
  }, e.id))
});
  },
  et = {
mass: 1,
tension: 250,
friction: 18,
clamp: !0
  },
  en = e => {
let {
  guild: t,
  channel: r,
  hasAnyThread: l,
  handleHide: i
} = e, [o, c] = s.useState(!1), d = (0, R.c)(r.id), _ = (0, m.e7)([b.Z], () => b.Z.hasHidden(r.id)), g = function(e, t, r, l) {
  let i = null == e ? void 0 : e.id,
    o = (0, m.e7)([p.Z], () => null != i ? p.Z.getRoles(i) : void 0);
  return s.useMemo(() => {
    let s = new H(),
      i = (null == t ? void 0 : t.isMediaChannel()) === !0;
    return null != e && null != t && !i && null != o && s.addStep(function(e, t, s, r) {
      let l = (0, x.Z)(s) ? u.$e(P.Plq.VIEW_CHANNEL, P.Plq.SEND_MESSAGES) : P.Plq.SEND_MESSAGES,
        i = null != e ? (0, S.E$)(e, t, s, l).filter(t => s.permissionOverwrites.hasOwnProperty(t.id) || (0, C.pM)(e.id, t.id)) : [],
        o = i.length > 0,
        c = i.some(t => (0, C.pM)(e.id, t.id));
      return {
        name: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
        description: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
        isDone: o && c,
        shouldWarn: o && !c,
        children: o ? (0, a.jsx)(ee, {
          guild: e,
          roles: i
        }) : null,
        clickHandler: () => {
          k(L.ZI.PERMISSIONS), (0, h.openModalLazy)(async () => {
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
            onCloseRequest: P.VqG,
            onCloseCallback: () => r(!1)
          });
        }
      };
    }(e, o, t, l)), !i && s.addStep(B(t)), s.addStep(G(t)), s.addStep(z(t)), s.addStep(V(r, i, null == e ? void 0 : e.id)), s;
  }, [
    t,
    e,
    o,
    r,
    l
  ]);
}(t, r, l, c), f = g.isAllDone();
return Y(f, d || _ || !q(r.id), o, i), {
  onboardingSteps: g,
  isHidden: _,
  isDismissed: d,
  isAllDone: f
};
  },
  ea = () => s.useCallback(e => {
var t;
null === (t = e.clickHandler) || void 0 === t || t.call(e);
  }, []),
  es = e => {
let {
  handleHide: t
} = e;
return (0, a.jsx)(h.Clickable, {
  onClick: t,
  className: y.closeButton,
  'aria-label': w.Z.Messages.DISMISS,
  children: (0, a.jsx)(h.CloseSmallIcon, {
    size: 'md',
    color: 'currentColor',
    className: y.closeIcon
  })
});
  },
  er = e => {
let {
  expanded: t,
  onClick: n
} = e;
return (0, a.jsx)(h.Clickable, {
  onClick: n,
  className: y.closeButton,
  'aria-label': t ? w.Z.Messages.COLLAPSE : w.Z.Messages.EXPAND,
  children: t ? (0, a.jsx)(h.MinimizeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: y.closeIcon
  }) : (0, a.jsx)(h.MaximizeIcon, {
    size: 'xs',
    color: 'currentColor',
    className: y.closeIcon
  })
});
  };
t.Z = e => {
  let {
hasAnyThread: t,
channel: n
  } = e, {
onboardingExpanded: r
  } = (0, Z.xH)(e => {
let {
  onboardingExpanded: t
} = e;
return {
  onboardingExpanded: t
};
  }), {
tagFilter: i
  } = (0, M.H)(n.id), o = (0, m.e7)([p.Z], () => p.Z.getGuild(n.getGuildId())), u = (0, A.r_)(n), {
transitions: _,
setVisible: g
  } = Q(), x = $(r), C = ea(), I = W(n.id, g), {
onboardingSteps: E,
isDismissed: N,
isHidden: b,
isAllDone: v
  } = en({
guild: o,
channel: n,
hasAnyThread: t,
handleHide: I
  }), S = !b && !N, j = (0, Z.AF)(), R = n.isMediaChannel(), L = e => j.getState().setOnboardingExpanded(e);
  return (X(v, S, I), J({
isAllDone: v,
isVisible: S,
canManageChannel: u,
guildId: null == o ? void 0 : o.id,
channel: n
  }), K(N, b, g), s.useEffect(() => {
(!t || !S) && L(!0);
  }, []), null == o) ? null : S && u ? R ? t ? null : (0, a.jsx)(f.Z, {
channel: n
  }) : (0, a.jsx)(a.Fragment, {
children: _((e, t) => t ? (0, a.jsx)(c.animated.div, {
  style: e,
  className: y.container,
  children: (0, a.jsxs)('div', {
    className: y.wrapper,
    children: [
      (0, a.jsx)('div', {
        className: y.headerRow,
        children: (0, a.jsxs)(h.HeadingLevel, {
          component: (0, a.jsx)(h.Heading, {
            variant: 'heading-md/semibold',
            children: w.Z.Messages.GET_STARTED
          }),
          children: [
            (0, a.jsx)(h.Heading, {
              variant: 'heading-md/medium',
              className: y.header,
              children: w.Z.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: E.completedSteps.toString(),
                numSteps: E.steps.length.toString()
              })
            }),
            (0, a.jsxs)(h.Text, {
              variant: 'text-xs/normal',
              className: y.visibilityInfo,
              children: [
                (0, a.jsx)(h.CircleInformationIcon, {
                  size: 'xxs',
                  color: 'currentColor',
                  className: y.icon
                }),
                w.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY
              ]
            }),
            (0, a.jsx)(er, {
              expanded: r,
              onClick: () => L(!r)
            }),
            (0, a.jsx)(es, {
              handleHide: I
            })
          ]
        })
      }),
      x((e, t) => t ? (0, a.jsx)(c.animated.div, {
        style: e,
        className: y.listContainer,
        children: (0, a.jsx)('ol', {
          className: y.checklist,
          children: E.getSteps().map(e => (0, a.jsxs)(h.Clickable, {
            tag: 'li',
            'aria-label': e.name,
            onClick: () => C(e),
            className: l()(y.stepContainer, {
              [y.completed]: e.isDone
            }),
            children: [
              e.shouldWarn ? (0, a.jsx)(h.CircleExclamationPointIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                color: d.Z.STATUS_DANGER,
                className: y.stepStatus
              }) : e.isDone ? (0, a.jsx)(h.IconBadge, {
                color: d.Z.STATUS_POSITIVE_BACKGROUND,
                icon: h.CheckmarkLargeIcon,
                style: U,
                className: y.stepStatus
              }) : (0, a.jsx)(h.IconBadge, {
                disableColor: !0,
                icon: (0, h.makeIconCompat)(T.Z),
                style: F,
                className: l()(y.stepStatus, y.completed)
              }),
              (0, a.jsxs)('div', {
                className: y.step,
                children: [
                  (0, a.jsx)(h.Text, {
                    variant: 'text-md/medium',
                    color: e.isDone ? 'header-secondary' : 'header-primary',
                    className: y.stepName,
                    children: e.name
                  }),
                  (0, a.jsx)(h.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    className: y.stepDescription,
                    children: e.description
                  }),
                  e.children
                ]
              }),
              (0, a.jsx)(h.ChevronSmallRightIcon, {
                size: 'custom',
                color: 'currentColor',
                width: 12,
                className: y.stepStatus
              })
            ]
          }, 'onboard-step-'.concat(e.index)))
        })
      }) : null)
    ]
  })
}) : null)
  }) : t ? null : (0, a.jsx)(O.Z, {
channelName: n.name,
guildId: n.guild_id,
tagFilter: i,
channel: n
  });
};