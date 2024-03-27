"use strict";
a.r(t), a.d(t, {
  default: function() {
    return ef
  }
}), a("424973"), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("866227"),
  o = a.n(i),
  u = a("146606"),
  d = a("171210"),
  c = a("316693"),
  m = a("446674"),
  h = a("77078"),
  f = a("18054"),
  g = a("581583"),
  x = a("206230"),
  C = a("656038"),
  S = a("454273"),
  _ = a("781555"),
  T = a("305961"),
  p = a("36694"),
  E = a("945330"),
  N = a("717018"),
  M = a("673078"),
  v = a("68238"),
  A = a("904276"),
  I = a("772280"),
  j = a("423487"),
  R = a("956089"),
  O = a("659500"),
  F = a("718517"),
  b = a("299039"),
  L = a("526812"),
  P = a("404607"),
  y = a("713955"),
  D = a("339792"),
  U = a("680986"),
  w = a("867965"),
  k = a("258039"),
  H = a("729608"),
  B = a("578198"),
  G = a("953371"),
  V = a("49111"),
  z = a("782340"),
  W = a("548850");
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
    (0, w.trackForumOnboardingClicked)({
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
let q = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.GUIDELINES), f.default.open(e.id, void 0, V.ChannelSettingsSubsections.TOPIC)
      },
      isDone: t
    }
  },
  Q = e => {
    let t = null != e.availableTags && e.availableTags.length > 0;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.TAGS), f.default.open(e.id), (0, h.openModalLazy)(async () => {
          let {
            default: t
          } = await a.el("987034").then(a.bind(a, "987034"));
          return a => (0, s.jsx)(t, {
            ...a,
            channelId: e.id,
            guildId: e.guild_id
          })
        })
      },
      isDone: t
    }
  },
  J = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
      clickHandler: () => {
        X(G.ForumOnboardingCTAs.DEFAULT_REACTION), (0, h.openModalLazy)(async () => {
          let {
            default: t
          } = await a.el("456552").then(a.bind(a, "456552"));
          return a => (0, s.jsx)(t, {
            ...a,
            channel: e
          })
        })
      },
      isDone: t
    }
  },
  $ = (e, t, n) => ({
    name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
    description: t ? z.default.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
      onClick: e => {
        null != n && (e.preventDefault(), e.stopPropagation(), (0, w.trackForumUpsellModalViewed)(), (0, h.openModalLazy)(async () => {
          let {
            default: e
          } = await a.el("135430").then(a.bind(a, "135430"));
          return t => (0, s.jsx)(e, {
            ...t,
            guildId: n
          })
        }))
      }
    }),
    clickHandler: () => {
      X(G.ForumOnboardingCTAs.CREATE_POST), O.ComponentDispatch.dispatch(V.ComponentActions.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  ee = (e, t) => n.useCallback(() => (t(!1), P.default.hideAdminOnboarding(e, !0)), [e, t]),
  et = e => {
    let t = b.default.extractTimestamp(e),
      a = o().isBefore(o(t).add(o.duration(15, "days")));
    return a
  },
  ea = (e, t, a) => {
    n.useEffect(() => {
      !e && a(!t)
    }, [e, a, t])
  },
  es = (e, t, a, s) => {
    let l = n.useRef(0);
    n.useEffect(() => (a || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
      s()
    }, 60 * F.default.Millis.SECOND), () => clearTimeout(l.current)), [e, t, s, a])
  },
  en = (e, t, a) => {
    n.useEffect(() => {
      e && t && a()
    }, [])
  },
  el = e => {
    let {
      isAllDone: t,
      isVisible: a,
      canManageChannel: s,
      guildId: l,
      channel: r
    } = e, i = (0, m.useStateFromStores)([T.default], () => null != l ? T.default.getRoles(l) : void 0), o = n.useCallback(() => {
      O.ComponentDispatch.dispatch(V.ComponentActions.REMEASURE_TARGET)
    }, []);
    n.useEffect(() => {
      o()
    }, [o, t, a, s, i, r.id, r.permissionOverwrites])
  },
  er = () => {
    let [e, t] = n.useState(!0), a = (0, m.useStateFromStores)([x.default], () => x.default.useReducedMotion), s = (0, u.useTransition)(e, {
      keys: e => e ? "shown" : "hidden",
      config: eu,
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
      immediate: a
    });
    return {
      transitions: s,
      setVisible: t
    }
  },
  ei = e => {
    let t = (0, m.useStateFromStores)([x.default], () => x.default.useReducedMotion);
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
  eo = e => {
    let {
      guild: t,
      roles: a
    } = e;
    return (0, s.jsx)("div", {
      className: W.rolesList,
      "aria-label": z.default.Messages.ROLES_LIST.format({
        numRoles: a.length
      }),
      children: a.map(e => (0, s.jsx)(g.MemberRole, {
        role: e,
        canRemove: !1,
        onRemove: V.NOOP_NULL,
        guildId: t.id,
        className: W.rolePill
      }, e.id))
    })
  },
  eu = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  ed = e => {
    let {
      guild: t,
      channel: l,
      hasAnyThread: r,
      handleHide: i
    } = e, [o, u] = n.useState(!1), d = (0, k.isOnboardingDismissed)(l.id), f = (0, m.useStateFromStores)([L.default], () => L.default.hasHidden(l.id)), g = function(e, t, l, r) {
      let i = null == e ? void 0 : e.id,
        o = (0, m.useStateFromStores)([T.default], () => null != i ? T.default.getRoles(i) : void 0);
      return n.useMemo(() => {
        let n = new Z,
          i = (null == t ? void 0 : t.isMediaChannel()) === !0;
        return null != e && null != t && !i && null != o && n.addStep(function(e, t, n, l) {
          let r = (0, C.default)(n) ? c.combine(V.Permissions.VIEW_CHANNEL, V.Permissions.SEND_MESSAGES) : V.Permissions.SEND_MESSAGES,
            i = null != e ? (0, y.getAllExistingRolesWithPermission)(e, t, n, r).filter(t => n.permissionOverwrites.hasOwnProperty(t.id) || (0, S.isEveryoneRoleId)(e.id, t.id)) : [],
            o = i.length > 0,
            u = i.some(t => (0, S.isEveryoneRoleId)(e.id, t.id));
          return {
            name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
            description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
            isDone: o && u,
            shouldWarn: o && !u,
            children: o ? (0, s.jsx)(eo, {
              guild: e,
              roles: i
            }) : null,
            clickHandler: () => {
              X(G.ForumOnboardingCTAs.PERMISSIONS), (0, h.openModalLazy)(async () => {
                let {
                  default: t
                } = await a.el("840489").then(a.bind(a, "840489"));
                return l(!0), a => (0, s.jsx)(t, {
                  ...a,
                  channel: n,
                  guild: e,
                  permission: r,
                  currentSelectedRoles: i
                })
              }, {
                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                onCloseRequest: V.NOOP_NULL,
                onCloseCallback: () => l(!1)
              })
            }
          }
        }(e, o, t, r)), !i && n.addStep(q(t)), n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(l, i, null == e ? void 0 : e.id)), n
      }, [t, e, o, l, r])
    }(t, l, r, u), x = g.isAllDone(), _ = d || f || !et(l.id);
    return es(x, _, o, i), {
      onboardingSteps: g,
      isHidden: f,
      isDismissed: d,
      isAllDone: x
    }
  },
  ec = () => n.useCallback(e => {
    var t;
    null === (t = e.clickHandler) || void 0 === t || t.call(e)
  }, []),
  em = e => {
    let {
      handleHide: t
    } = e;
    return (0, s.jsx)(h.Clickable, {
      onClick: t,
      className: W.closeButton,
      "aria-label": z.default.Messages.DISMISS,
      children: (0, s.jsx)(E.default, {
        className: W.closeIcon
      })
    })
  },
  eh = e => {
    let {
      expanded: t,
      onClick: a
    } = e;
    return (0, s.jsx)(h.Clickable, {
      onClick: a,
      className: W.closeButton,
      "aria-label": t ? z.default.Messages.COLLAPSE : z.default.Messages.EXPAND,
      children: t ? (0, s.jsx)(N.default, {
        className: W.closeIcon
      }) : (0, s.jsx)(M.default, {
        className: W.closeIcon
      })
    })
  };
var ef = e => {
  let {
    hasAnyThread: t,
    channel: a
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
  } = (0, D.useForumChannelStore)(a.id), o = (0, m.useStateFromStores)([T.default], () => T.default.getGuild(a.getGuildId())), c = (0, U.useCanManageChannel)(a), {
    transitions: f,
    setVisible: g
  } = er(), x = ei(l), C = ec(), S = ee(a.id, g), {
    onboardingSteps: E,
    isDismissed: N,
    isHidden: M,
    isAllDone: O
  } = ed({
    guild: o,
    channel: a,
    hasAnyThread: t,
    handleHide: S
  }), F = !M && !N, b = (0, B.useForumPostComposerStoreApi)(), L = a.isMediaChannel(), P = e => b.getState().setOnboardingExpanded(e);
  return (en(O, F, S), el({
    isAllDone: O,
    isVisible: F,
    canManageChannel: c,
    guildId: null == o ? void 0 : o.id,
    channel: a
  }), ea(N, M, g), n.useEffect(() => {
    (!t || !F) && P(!0)
  }, []), null == o) ? null : F && c ? L ? t ? null : (0, s.jsx)(_.default, {
    channel: a
  }) : (0, s.jsx)(s.Fragment, {
    children: f((e, t) => t ? (0, s.jsx)(u.animated.div, {
      style: e,
      className: W.container,
      children: (0, s.jsxs)("div", {
        className: W.wrapper,
        children: [(0, s.jsx)("div", {
          className: W.headerRow,
          children: (0, s.jsxs)(h.HeadingLevel, {
            component: (0, s.jsx)(h.Heading, {
              variant: "heading-md/semibold",
              children: z.default.Messages.GET_STARTED
            }),
            children: [(0, s.jsx)(h.Heading, {
              variant: "heading-md/medium",
              className: W.header,
              children: z.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: E.completedSteps.toString(),
                numSteps: E.steps.length.toString()
              })
            }), (0, s.jsxs)(h.Text, {
              variant: "text-xs/normal",
              className: W.visibilityInfo,
              children: [(0, s.jsx)(v.default, {
                width: 12,
                height: 12,
                className: W.icon
              }), z.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
            }), (0, s.jsx)(eh, {
              expanded: l,
              onClick: () => P(!l)
            }), (0, s.jsx)(em, {
              handleHide: S
            })]
          })
        }), x((e, t) => t ? (0, s.jsx)(u.animated.div, {
          style: e,
          className: W.listContainer,
          children: (0, s.jsx)("ol", {
            className: W.checklist,
            children: E.getSteps().map(e => (0, s.jsxs)(h.Clickable, {
              tag: "li",
              "aria-label": e.name,
              onClick: () => C(e),
              className: r(W.stepContainer, {
                [W.completed]: e.isDone
              }),
              children: [e.shouldWarn ? (0, s.jsx)(j.default, {
                color: d.default.STATUS_DANGER,
                className: W.stepStatus
              }) : e.isDone ? (0, s.jsx)(R.IconBadge, {
                color: d.default.STATUS_POSITIVE_BACKGROUND,
                icon: p.default,
                style: Y,
                className: W.stepStatus
              }) : (0, s.jsx)(R.IconBadge, {
                disableColor: !0,
                icon: A.default,
                style: K,
                className: r(W.stepStatus, W.completed)
              }), (0, s.jsxs)("div", {
                className: W.step,
                children: [(0, s.jsx)(h.Text, {
                  variant: "text-md/medium",
                  color: e.isDone ? "header-secondary" : "header-primary",
                  className: W.stepName,
                  children: e.name
                }), (0, s.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: W.stepDescription,
                  children: e.description
                }), e.children]
              }), (0, s.jsx)(I.default, {
                width: 12,
                className: W.stepStatus
              })]
            }, "onboard-step-".concat(e.index)))
          })
        }) : null)]
      })
    }) : null)
  }) : t ? null : (0, s.jsx)(H.default, {
    channelName: a.name,
    guildId: a.guild_id,
    tagFilter: i,
    channel: a
  })
}