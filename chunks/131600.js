"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ex
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("866227"),
  o = s.n(i),
  u = s("907002"),
  d = s("171210"),
  c = s("316693"),
  m = s("249654"),
  h = s("446674"),
  f = s("77078"),
  g = s("18054"),
  x = s("581583"),
  C = s("206230"),
  T = s("656038"),
  _ = s("454273"),
  S = s("781555"),
  p = s("305961"),
  E = s("36694"),
  N = s("945330"),
  M = s("717018"),
  A = s("673078"),
  v = s("68238"),
  I = s("904276"),
  j = s("772280"),
  R = s("423487"),
  O = s("956089"),
  F = s("659500"),
  L = s("718517"),
  b = s("526812"),
  P = s("404607"),
  y = s("713955"),
  D = s("339792"),
  w = s("680986"),
  U = s("867965"),
  k = s("258039"),
  H = s("729608"),
  B = s("578198"),
  G = s("953371"),
  V = s("49111"),
  z = s("782340"),
  W = s("358040");
let K = {
    width: 28,
    height: 28
  },
  Y = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  X = e => {
    (0, U.trackForumOnboardingClicked)({
      onboardingCTA: e
    })
  };
class Z {
  addStep(e) {
    ++this.currentIndex, this.steps.push({
      index: this.currentIndex,
      ...e
    }), e.isDone && this.completedSteps++
  }
  getSteps() {
    return this.steps
  }
  isAllDone() {
    return this.steps.every(e => e.isDone)
  }
  constructor() {
    this.currentIndex = 0, this.steps = [], this.completedSteps = 0
  }
}
let q = (e, t, n) => {
    let l = (0, T.default)(t) ? c.default.combine(V.Permissions.VIEW_CHANNEL, V.Permissions.SEND_MESSAGES) : V.Permissions.SEND_MESSAGES,
      r = null != e ? (0, y.getAllExistingRolesWithPermission)(e, t, l).filter(s => t.permissionOverwrites.hasOwnProperty(s.id) || (0, _.isEveryoneRoleId)(e.id, s.id)) : [],
      i = r.length > 0,
      o = r.some(t => (0, _.isEveryoneRoleId)(e.id, t.id));
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
      isDone: i && o,
      shouldWarn: i && !o,
      children: i ? (0, a.jsx)(ed, {
        guild: e,
        roles: r
      }) : null,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.PERMISSIONS), (0, f.openModalLazy)(async () => {
          let {
            default: i
          } = await s.el("840489").then(s.bind(s, "840489"));
          return n(!0), s => (0, a.jsx)(i, {
            ...s,
            channel: t,
            guild: e,
            permission: l,
            currentSelectedRoles: r
          })
        }, {
          modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
          onCloseRequest: V.NOOP_NULL,
          onCloseCallback: () => n(!1)
        })
      }
    }
  },
  Q = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.GUIDELINES), g.default.open(e.id, void 0, V.ChannelSettingsSubsections.TOPIC)
      },
      isDone: t
    }
  },
  J = e => {
    let t = null != e.availableTags && e.availableTags.length > 0;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.TAGS), g.default.open(e.id), (0, f.openModalLazy)(async () => {
          let {
            default: t
          } = await s.el("987034").then(s.bind(s, "987034"));
          return s => (0, a.jsx)(t, {
            ...s,
            channelId: e.id,
            guildId: e.guild_id
          })
        })
      },
      isDone: t
    }
  },
  $ = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.DEFAULT_REACTION), (0, f.openModalLazy)(async () => {
          let {
            default: t
          } = await s.el("456552").then(s.bind(s, "456552"));
          return s => (0, a.jsx)(t, {
            ...s,
            channel: e
          })
        })
      },
      isDone: t
    }
  },
  ee = (e, t, n) => ({
    name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
    description: t ? z.default.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
      onClick: e => {
        null != n && (e.preventDefault(), e.stopPropagation(), (0, U.trackForumUpsellModalViewed)(), (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await s.el("135430").then(s.bind(s, "135430"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: n
          })
        }))
      }
    }),
    clickHandler: () => {
      X(G.ForumOnboardingCTAs.CREATE_POST), F.ComponentDispatch.dispatch(V.ComponentActions.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  et = (e, t, s, a) => n.useMemo(() => {
    let n = new Z,
      l = (null == t ? void 0 : t.isMediaChannel()) === !0;
    return null != e && null != t && !l && n.addStep(q(e, t, a)), !l && n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(t)), n.addStep(ee(s, l, null == e ? void 0 : e.id)), n
  }, [t, e, s, a]),
  es = (e, t) => n.useCallback(() => (t(!1), P.default.hideAdminOnboarding(e, !0)), [e, t]),
  ea = e => {
    let t = m.default.extractTimestamp(e),
      s = o().isBefore(o(t).add(o.duration(15, "days")));
    return s
  },
  en = (e, t, s) => {
    n.useEffect(() => {
      !e && s(!t)
    }, [e, s, t])
  },
  el = (e, t, s, a) => {
    let l = n.useRef(0);
    n.useEffect(() => (s || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
      a()
    }, 60 * L.default.Millis.SECOND), () => clearTimeout(l.current)), [e, t, a, s])
  },
  er = (e, t, s) => {
    n.useEffect(() => {
      e && t && s()
    }, [])
  },
  ei = e => {
    let {
      isAllDone: t,
      isVisible: s,
      canManageChannel: a,
      guild: l,
      channel: r
    } = e, i = n.useCallback(() => {
      F.ComponentDispatch.dispatch(V.ComponentActions.REMEASURE_TARGET)
    }, []);
    n.useEffect(() => {
      i()
    }, [i, t, s, a, null == l ? void 0 : l.roles, r.id, r.permissionOverwrites])
  },
  eo = () => {
    let [e, t] = n.useState(!0), s = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion), a = (0, u.useTransition)(e, {
      keys: e => e ? "shown" : "hidden",
      config: ec,
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
      immediate: s
    });
    return {
      transitions: a,
      setVisible: t
    }
  },
  eu = e => {
    let t = (0, h.useStateFromStores)([C.default], () => C.default.useReducedMotion);
    return (0, u.useTransition)(e, {
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
    })
  },
  ed = e => {
    let {
      guild: t,
      roles: s
    } = e;
    return (0, a.jsx)("div", {
      className: W.rolesList,
      "aria-label": z.default.Messages.ROLES_LIST.format({
        numRoles: s.length
      }),
      children: s.map(e => (0, a.jsx)(x.MemberRole, {
        role: e,
        canRemove: !1,
        onRemove: V.NOOP_NULL,
        guildId: t.id,
        className: W.rolePill
      }, e.id))
    })
  },
  ec = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  em = e => {
    let {
      guild: t,
      channel: s,
      hasAnyThread: a,
      handleHide: l
    } = e, [r, i] = n.useState(!1), o = (0, k.isOnboardingDismissed)(s.id), u = (0, h.useStateFromStores)([b.default], () => b.default.hasHidden(s.id)), d = et(t, s, a, i), c = d.isAllDone(), m = o || u || !ea(s.id);
    return el(c, m, r, l), {
      onboardingSteps: d,
      isHidden: u,
      isDismissed: o,
      isAllDone: c
    }
  },
  eh = () => n.useCallback(e => {
    var t;
    null === (t = e.clickHandler) || void 0 === t || t.call(e)
  }, []),
  ef = e => {
    let {
      handleHide: t
    } = e;
    return (0, a.jsx)(f.Clickable, {
      onClick: t,
      className: W.closeButton,
      "aria-label": z.default.Messages.DISMISS,
      children: (0, a.jsx)(N.default, {
        className: W.closeIcon
      })
    })
  },
  eg = e => {
    let {
      expanded: t,
      onClick: s
    } = e;
    return (0, a.jsx)(f.Clickable, {
      onClick: s,
      className: W.closeButton,
      "aria-label": t ? z.default.Messages.COLLAPSE : z.default.Messages.EXPAND,
      children: t ? (0, a.jsx)(M.default, {
        className: W.closeIcon
      }) : (0, a.jsx)(A.default, {
        className: W.closeIcon
      })
    })
  };
var ex = e => {
  let {
    hasAnyThread: t,
    channel: s
  } = e, {
    onboardingExpanded: l
  } = (0, B.useForumPostComposerStore)(e => {
    let {
      onboardingExpanded: t
    } = e;
    return {
      onboardingExpanded: t
    }
  }), {
    tagFilter: i
  } = (0, D.useForumChannelStore)(s.id), o = (0, h.useStateFromStores)([p.default], () => p.default.getGuild(s.getGuildId())), c = (0, w.useCanManageChannel)(s), {
    transitions: m,
    setVisible: g
  } = eo(), x = eu(l), C = eh(), T = es(s.id, g), {
    onboardingSteps: _,
    isDismissed: N,
    isHidden: M,
    isAllDone: A
  } = em({
    guild: o,
    channel: s,
    hasAnyThread: t,
    handleHide: T
  }), F = !M && !N, L = (0, B.useForumPostComposerStoreApi)(), b = s.isMediaChannel(), P = e => L.getState().setOnboardingExpanded(e);
  return (er(A, F, T), ei({
    isAllDone: A,
    isVisible: F,
    canManageChannel: c,
    guild: o,
    channel: s
  }), en(N, M, g), n.useEffect(() => {
    (!t || !F) && P(!0)
  }, []), null == o) ? null : F && c ? b ? t ? null : (0, a.jsx)(S.default, {
    channel: s
  }) : (0, a.jsx)(a.Fragment, {
    children: m((e, t) => t ? (0, a.jsx)(u.animated.div, {
      style: e,
      className: W.container,
      children: (0, a.jsxs)("div", {
        className: W.wrapper,
        children: [(0, a.jsx)("div", {
          className: W.headerRow,
          children: (0, a.jsxs)(f.HeadingLevel, {
            component: (0, a.jsx)(f.Heading, {
              variant: "heading-md/semibold",
              children: z.default.Messages.GET_STARTED
            }),
            children: [(0, a.jsx)(f.Heading, {
              variant: "heading-md/medium",
              className: W.header,
              children: z.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: _.completedSteps.toString(),
                numSteps: _.steps.length.toString()
              })
            }), (0, a.jsxs)(f.Text, {
              variant: "text-xs/normal",
              className: W.visibilityInfo,
              children: [(0, a.jsx)(v.default, {
                width: 12,
                height: 12,
                className: W.icon
              }), z.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
            }), (0, a.jsx)(eg, {
              expanded: l,
              onClick: () => P(!l)
            }), (0, a.jsx)(ef, {
              handleHide: T
            })]
          })
        }), x((e, t) => t ? (0, a.jsx)(u.animated.div, {
          style: e,
          className: W.listContainer,
          children: (0, a.jsx)("ol", {
            className: W.checklist,
            children: _.getSteps().map(e => (0, a.jsxs)(f.Clickable, {
              tag: "li",
              "aria-label": e.name,
              onClick: () => C(e),
              className: r(W.stepContainer, {
                [W.completed]: e.isDone
              }),
              children: [e.shouldWarn ? (0, a.jsx)(R.default, {
                color: d.default.STATUS_DANGER,
                className: W.stepStatus
              }) : e.isDone ? (0, a.jsx)(O.IconBadge, {
                color: d.default.STATUS_POSITIVE_BACKGROUND,
                icon: E.default,
                style: Y,
                className: W.stepStatus
              }) : (0, a.jsx)(O.IconBadge, {
                disableColor: !0,
                icon: I.default,
                style: K,
                className: r(W.stepStatus, W.completed)
              }), (0, a.jsxs)("div", {
                className: W.step,
                children: [(0, a.jsx)(f.Text, {
                  variant: "text-md/medium",
                  color: e.isDone ? "header-secondary" : "header-primary",
                  className: W.stepName,
                  children: e.name
                }), (0, a.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: W.stepDescription,
                  children: e.description
                }), e.children]
              }), (0, a.jsx)(j.default, {
                width: 12,
                className: W.stepStatus
              })]
            }, "onboard-step-".concat(e.index)))
          })
        }) : null)]
      })
    }) : null)
  }) : t ? null : (0, a.jsx)(H.default, {
    channelName: s.name,
    guildId: s.guild_id,
    tagFilter: i,
    channel: s
  })
}