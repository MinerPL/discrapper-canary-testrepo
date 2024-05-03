"use strict";
a.r(t), a("653041"), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  r = a.n(l),
  i = a("913527"),
  o = a.n(i),
  u = a("718017"),
  d = a("831209"),
  c = a("149765"),
  m = a("442837"),
  h = a("481060"),
  f = a("787014"),
  g = a("412899"),
  x = a("607070"),
  C = a("447003"),
  _ = a("605436"),
  p = a("621516"),
  T = a("430824"),
  S = a("263704"),
  E = a("465670"),
  N = a("110456"),
  M = a("928457"),
  A = a("41542"),
  v = a("186523"),
  I = a("692437"),
  j = a("759231"),
  O = a("26290"),
  R = a("585483"),
  b = a("70956"),
  L = a("709054"),
  F = a("961675"),
  P = a("883429"),
  y = a("993259"),
  D = a("109434"),
  w = a("456269"),
  U = a("228392"),
  k = a("432771"),
  H = a("538366"),
  B = a("470623"),
  G = a("710352"),
  V = a("981631"),
  z = a("689938"),
  W = a("2968");

function K(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let Y = {
    width: 28,
    height: 28
  },
  X = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  q = e => {
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
    K(this, "currentIndex", 0), K(this, "steps", []), K(this, "completedSteps", 0)
  }
}
let Q = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
      clickHandler: () => {
        q(G.ForumOnboardingCTAs.GUIDELINES), f.default.open(e.id, void 0, V.ChannelSettingsSubsections.TOPIC)
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
        q(G.ForumOnboardingCTAs.TAGS), f.default.open(e.id), (0, h.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([a.e("99387"), a.e("21971")]).then(a.bind(a, "201049"));
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
  $ = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
      description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
      clickHandler: () => {
        q(G.ForumOnboardingCTAs.DEFAULT_REACTION), (0, h.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([a.e("99387"), a.e("80404")]).then(a.bind(a, "158586"));
          return a => (0, s.jsx)(t, {
            ...a,
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
        null != n && (e.preventDefault(), e.stopPropagation(), (0, U.trackForumUpsellModalViewed)(), (0, h.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("18417")]).then(a.bind(a, "740696"));
          return t => (0, s.jsx)(e, {
            ...t,
            guildId: n
          })
        }))
      }
    }),
    clickHandler: () => {
      q(G.ForumOnboardingCTAs.CREATE_POST), R.ComponentDispatch.dispatch(V.ComponentActions.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  et = (e, t) => n.useCallback(() => (t(!1), P.default.hideAdminOnboarding(e, !0)), [e, t]),
  ea = e => {
    let t = L.default.extractTimestamp(e);
    return o()().isBefore(o()(t).add(o().duration(15, "days")))
  },
  es = (e, t, a) => {
    n.useEffect(() => {
      !e && a(!t)
    }, [e, a, t])
  },
  en = (e, t, a, s) => {
    let l = n.useRef(0);
    n.useEffect(() => (a || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
      s()
    }, 60 * b.default.Millis.SECOND), () => clearTimeout(l.current)), [e, t, s, a])
  },
  el = (e, t, a) => {
    n.useEffect(() => {
      e && t && a()
    }, [])
  },
  er = e => {
    let {
      isAllDone: t,
      isVisible: a,
      canManageChannel: s,
      guildId: l,
      channel: r
    } = e, i = (0, m.useStateFromStores)([T.default], () => null != l ? T.default.getRoles(l) : void 0), o = n.useCallback(() => {
      R.ComponentDispatch.dispatch(V.ComponentActions.REMEASURE_TARGET)
    }, []);
    n.useEffect(() => {
      o()
    }, [o, t, a, s, i, r.id, r.permissionOverwrites])
  },
  ei = () => {
    let [e, t] = n.useState(!0), a = (0, m.useStateFromStores)([x.default], () => x.default.useReducedMotion);
    return {
      transitions: (0, u.useTransition)(e, {
        keys: e => e ? "shown" : "hidden",
        config: ed,
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
      }),
      setVisible: t
    }
  },
  eo = e => {
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
  eu = e => {
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
  ed = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  ec = e => {
    let {
      guild: t,
      channel: l,
      hasAnyThread: r,
      handleHide: i
    } = e, [o, u] = n.useState(!1), d = (0, k.isOnboardingDismissed)(l.id), f = (0, m.useStateFromStores)([F.default], () => F.default.hasHidden(l.id)), g = function(e, t, l, r) {
      let i = null == e ? void 0 : e.id,
        o = (0, m.useStateFromStores)([T.default], () => null != i ? T.default.getRoles(i) : void 0);
      return n.useMemo(() => {
        let n = new Z,
          i = (null == t ? void 0 : t.isMediaChannel()) === !0;
        return null != e && null != t && !i && null != o && n.addStep(function(e, t, n, l) {
          let r = (0, C.default)(n) ? c.combine(V.Permissions.VIEW_CHANNEL, V.Permissions.SEND_MESSAGES) : V.Permissions.SEND_MESSAGES,
            i = null != e ? (0, y.getAllExistingRolesWithPermission)(e, t, n, r).filter(t => n.permissionOverwrites.hasOwnProperty(t.id) || (0, _.isEveryoneRoleId)(e.id, t.id)) : [],
            o = i.length > 0,
            u = i.some(t => (0, _.isEveryoneRoleId)(e.id, t.id));
          return {
            name: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
            description: z.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
            isDone: o && u,
            shouldWarn: o && !u,
            children: o ? (0, s.jsx)(eu, {
              guild: e,
              roles: i
            }) : null,
            clickHandler: () => {
              q(G.ForumOnboardingCTAs.PERMISSIONS), (0, h.openModalLazy)(async () => {
                let {
                  default: t
                } = await Promise.all([a.e("99387"), a.e("78704")]).then(a.bind(a, "560602"));
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
        }(e, o, t, r)), !i && n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(t)), n.addStep(ee(l, i, null == e ? void 0 : e.id)), n
      }, [t, e, o, l, r])
    }(t, l, r, u), x = g.isAllDone();
    return en(x, d || f || !ea(l.id), o, i), {
      onboardingSteps: g,
      isHidden: f,
      isDismissed: d,
      isAllDone: x
    }
  },
  em = () => n.useCallback(e => {
    var t;
    null === (t = e.clickHandler) || void 0 === t || t.call(e)
  }, []),
  eh = e => {
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
  ef = e => {
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
t.default = e => {
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
  } = (0, D.useForumChannelStore)(a.id), o = (0, m.useStateFromStores)([T.default], () => T.default.getGuild(a.getGuildId())), c = (0, w.useCanManageChannel)(a), {
    transitions: f,
    setVisible: g
  } = ei(), x = eo(l), C = em(), _ = et(a.id, g), {
    onboardingSteps: E,
    isDismissed: N,
    isHidden: M,
    isAllDone: R
  } = ec({
    guild: o,
    channel: a,
    hasAnyThread: t,
    handleHide: _
  }), b = !M && !N, L = (0, B.useForumPostComposerStoreApi)(), F = a.isMediaChannel(), P = e => L.getState().setOnboardingExpanded(e);
  return (el(R, b, _), er({
    isAllDone: R,
    isVisible: b,
    canManageChannel: c,
    guildId: null == o ? void 0 : o.id,
    channel: a
  }), es(N, M, g), n.useEffect(() => {
    (!t || !b) && P(!0)
  }, []), null == o) ? null : b && c ? F ? t ? null : (0, s.jsx)(p.default, {
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
              children: [(0, s.jsx)(A.default, {
                width: 12,
                height: 12,
                className: W.icon
              }), z.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
            }), (0, s.jsx)(ef, {
              expanded: l,
              onClick: () => P(!l)
            }), (0, s.jsx)(eh, {
              handleHide: _
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
              className: r()(W.stepContainer, {
                [W.completed]: e.isDone
              }),
              children: [e.shouldWarn ? (0, s.jsx)(j.default, {
                color: d.default.STATUS_DANGER,
                className: W.stepStatus
              }) : e.isDone ? (0, s.jsx)(O.IconBadge, {
                color: d.default.STATUS_POSITIVE_BACKGROUND,
                icon: S.default,
                style: X,
                className: W.stepStatus
              }) : (0, s.jsx)(O.IconBadge, {
                disableColor: !0,
                icon: v.default,
                style: Y,
                className: r()(W.stepStatus, W.completed)
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