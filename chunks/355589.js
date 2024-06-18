"use strict";
n(653041), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(913527),
  o = n.n(r),
  c = n(920906),
  d = n(831209),
  u = n(149765),
  h = n(442837),
  m = n(481060),
  g = n(787014),
  x = n(412899),
  _ = n(607070),
  f = n(447003),
  E = n(605436),
  N = n(621516),
  T = n(430824),
  C = n(263704),
  p = n(465670),
  v = n(110456),
  M = n(928457),
  S = n(41542),
  I = n(186523),
  j = n(692437),
  A = n(759231),
  R = n(585483),
  Z = n(70956),
  O = n(709054),
  b = n(961675),
  L = n(883429),
  P = n(993259),
  D = n(109434),
  y = n(456269),
  H = n(228392),
  w = n(432771),
  F = n(538366),
  U = n(470623),
  k = n(710352),
  B = n(981631),
  G = n(689938),
  V = n(114317);

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let W = {
    width: 28,
    height: 28
  },
  q = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  K = e => {
    (0, H.e5)({
      onboardingCTA: e
    })
  };
class Y {
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
    z(this, "currentIndex", 0), z(this, "steps", []), z(this, "completedSteps", 0)
  }
}
let X = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
      description: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
      clickHandler: () => {
        K(k.ZI.GUIDELINES), g.ZP.open(e.id, void 0, B.ZfP.TOPIC)
      },
      isDone: t
    }
  },
  J = e => {
    let t = null != e.availableTags && e.availableTags.length > 0;
    return {
      name: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
      description: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
      clickHandler: () => {
        K(k.ZI.TAGS), g.ZP.open(e.id), (0, m.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("21971")]).then(n.bind(n, 201049));
          return n => (0, s.jsx)(t, {
            ...n,
            channelId: e.id,
            guildId: e.guild_id
          })
        })
      },
      isDone: t
    }
  },
  Q = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
      description: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
      clickHandler: () => {
        K(k.ZI.DEFAULT_REACTION), (0, m.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("80404")]).then(n.bind(n, 158586));
          return n => (0, s.jsx)(t, {
            ...n,
            channel: e
          })
        })
      },
      isDone: t
    }
  },
  $ = (e, t, l) => ({
    name: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
    description: t ? G.Z.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
      onClick: e => {
        null != l && (e.preventDefault(), e.stopPropagation(), (0, H.qz)(), (0, m.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("18417")]).then(n.bind(n, 740696));
          return t => (0, s.jsx)(e, {
            ...t,
            guildId: l
          })
        }))
      }
    }),
    clickHandler: () => {
      K(k.ZI.CREATE_POST), R.S.dispatch(B.CkL.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  ee = (e, t) => l.useCallback(() => (t(!1), L.Z.hideAdminOnboarding(e, !0)), [e, t]),
  et = e => {
    let t = O.default.extractTimestamp(e);
    return o()().isBefore(o()(t).add(o().duration(15, "days")))
  },
  en = (e, t, n) => {
    l.useEffect(() => {
      !e && n(!t)
    }, [e, n, t])
  },
  es = (e, t, n, s) => {
    let a = l.useRef(0);
    l.useEffect(() => (n || !e || t ? clearTimeout(a.current) : a.current = setTimeout(() => {
      s()
    }, 60 * Z.Z.Millis.SECOND), () => clearTimeout(a.current)), [e, t, s, n])
  },
  el = (e, t, n) => {
    l.useEffect(() => {
      e && t && n()
    }, [])
  },
  ea = e => {
    let {
      isAllDone: t,
      isVisible: n,
      canManageChannel: s,
      guildId: a,
      channel: i
    } = e, r = (0, h.e7)([T.Z], () => null != a ? T.Z.getRoles(a) : void 0), o = l.useCallback(() => {
      R.S.dispatch(B.CkL.REMEASURE_TARGET)
    }, []);
    l.useEffect(() => {
      o()
    }, [o, t, n, s, r, i.id, i.permissionOverwrites])
  },
  ei = () => {
    let [e, t] = l.useState(!0), n = (0, h.e7)([_.Z], () => _.Z.useReducedMotion);
    return {
      transitions: (0, c.useTransition)(e, {
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
        immediate: n
      }),
      setVisible: t
    }
  },
  er = e => {
    let t = (0, h.e7)([_.Z], () => _.Z.useReducedMotion);
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
    })
  },
  eo = e => {
    let {
      guild: t,
      roles: n
    } = e;
    return (0, s.jsx)("div", {
      className: V.rolesList,
      "aria-label": G.Z.Messages.ROLES_LIST.format({
        numRoles: n.length
      }),
      children: n.map(e => (0, s.jsx)(x.UB, {
        role: e,
        canRemove: !1,
        onRemove: B.VqG,
        guildId: t.id,
        className: V.rolePill
      }, e.id))
    })
  },
  ec = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  ed = e => {
    let {
      guild: t,
      channel: a,
      hasAnyThread: i,
      handleHide: r
    } = e, [o, c] = l.useState(!1), d = (0, w.c)(a.id), g = (0, h.e7)([b.Z], () => b.Z.hasHidden(a.id)), x = function(e, t, a, i) {
      let r = null == e ? void 0 : e.id,
        o = (0, h.e7)([T.Z], () => null != r ? T.Z.getRoles(r) : void 0);
      return l.useMemo(() => {
        let l = new Y,
          r = (null == t ? void 0 : t.isMediaChannel()) === !0;
        return null != e && null != t && !r && null != o && l.addStep(function(e, t, l, a) {
          let i = (0, f.Z)(l) ? u.$e(B.Plq.VIEW_CHANNEL, B.Plq.SEND_MESSAGES) : B.Plq.SEND_MESSAGES,
            r = null != e ? (0, P.E$)(e, t, l, i).filter(t => l.permissionOverwrites.hasOwnProperty(t.id) || (0, E.pM)(e.id, t.id)) : [],
            o = r.length > 0,
            c = r.some(t => (0, E.pM)(e.id, t.id));
          return {
            name: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
            description: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
            isDone: o && c,
            shouldWarn: o && !c,
            children: o ? (0, s.jsx)(eo, {
              guild: e,
              roles: r
            }) : null,
            clickHandler: () => {
              K(k.ZI.PERMISSIONS), (0, m.openModalLazy)(async () => {
                let {
                  default: t
                } = await Promise.all([n.e("99387"), n.e("78704")]).then(n.bind(n, 560602));
                return a(!0), n => (0, s.jsx)(t, {
                  ...n,
                  channel: l,
                  guild: e,
                  permission: i,
                  currentSelectedRoles: r
                })
              }, {
                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                onCloseRequest: B.VqG,
                onCloseCallback: () => a(!1)
              })
            }
          }
        }(e, o, t, i)), !r && l.addStep(X(t)), l.addStep(J(t)), l.addStep(Q(t)), l.addStep($(a, r, null == e ? void 0 : e.id)), l
      }, [t, e, o, a, i])
    }(t, a, i, c), _ = x.isAllDone();
    return es(_, d || g || !et(a.id), o, r), {
      onboardingSteps: x,
      isHidden: g,
      isDismissed: d,
      isAllDone: _
    }
  },
  eu = () => l.useCallback(e => {
    var t;
    null === (t = e.clickHandler) || void 0 === t || t.call(e)
  }, []),
  eh = e => {
    let {
      handleHide: t
    } = e;
    return (0, s.jsx)(m.Clickable, {
      onClick: t,
      className: V.closeButton,
      "aria-label": G.Z.Messages.DISMISS,
      children: (0, s.jsx)(p.Z, {
        className: V.closeIcon
      })
    })
  },
  em = e => {
    let {
      expanded: t,
      onClick: n
    } = e;
    return (0, s.jsx)(m.Clickable, {
      onClick: n,
      className: V.closeButton,
      "aria-label": t ? G.Z.Messages.COLLAPSE : G.Z.Messages.EXPAND,
      children: t ? (0, s.jsx)(v.Z, {
        className: V.closeIcon
      }) : (0, s.jsx)(M.Z, {
        className: V.closeIcon
      })
    })
  };
t.Z = e => {
  let {
    hasAnyThread: t,
    channel: n
  } = e, {
    onboardingExpanded: a
  } = (0, U.xH)(e => {
    let {
      onboardingExpanded: t
    } = e;
    return {
      onboardingExpanded: t
    }
  }), {
    tagFilter: r
  } = (0, D.H)(n.id), o = (0, h.e7)([T.Z], () => T.Z.getGuild(n.getGuildId())), u = (0, y.r_)(n), {
    transitions: g,
    setVisible: x
  } = ei(), _ = er(a), f = eu(), E = ee(n.id, x), {
    onboardingSteps: p,
    isDismissed: v,
    isHidden: M,
    isAllDone: R
  } = ed({
    guild: o,
    channel: n,
    hasAnyThread: t,
    handleHide: E
  }), Z = !M && !v, O = (0, U.AF)(), b = n.isMediaChannel(), L = e => O.getState().setOnboardingExpanded(e);
  return (el(R, Z, E), ea({
    isAllDone: R,
    isVisible: Z,
    canManageChannel: u,
    guildId: null == o ? void 0 : o.id,
    channel: n
  }), en(v, M, x), l.useEffect(() => {
    (!t || !Z) && L(!0)
  }, []), null == o) ? null : Z && u ? b ? t ? null : (0, s.jsx)(N.Z, {
    channel: n
  }) : (0, s.jsx)(s.Fragment, {
    children: g((e, t) => t ? (0, s.jsx)(c.animated.div, {
      style: e,
      className: V.container,
      children: (0, s.jsxs)("div", {
        className: V.wrapper,
        children: [(0, s.jsx)("div", {
          className: V.headerRow,
          children: (0, s.jsxs)(m.HeadingLevel, {
            component: (0, s.jsx)(m.Heading, {
              variant: "heading-md/semibold",
              children: G.Z.Messages.GET_STARTED
            }),
            children: [(0, s.jsx)(m.Heading, {
              variant: "heading-md/medium",
              className: V.header,
              children: G.Z.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: p.completedSteps.toString(),
                numSteps: p.steps.length.toString()
              })
            }), (0, s.jsxs)(m.Text, {
              variant: "text-xs/normal",
              className: V.visibilityInfo,
              children: [(0, s.jsx)(S.Z, {
                width: 12,
                height: 12,
                className: V.icon
              }), G.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
            }), (0, s.jsx)(em, {
              expanded: a,
              onClick: () => L(!a)
            }), (0, s.jsx)(eh, {
              handleHide: E
            })]
          })
        }), _((e, t) => t ? (0, s.jsx)(c.animated.div, {
          style: e,
          className: V.listContainer,
          children: (0, s.jsx)("ol", {
            className: V.checklist,
            children: p.getSteps().map(e => (0, s.jsxs)(m.Clickable, {
              tag: "li",
              "aria-label": e.name,
              onClick: () => f(e),
              className: i()(V.stepContainer, {
                [V.completed]: e.isDone
              }),
              children: [e.shouldWarn ? (0, s.jsx)(A.Z, {
                color: d.Z.STATUS_DANGER,
                className: V.stepStatus
              }) : e.isDone ? (0, s.jsx)(m.IconBadge, {
                color: d.Z.STATUS_POSITIVE_BACKGROUND,
                icon: C.Z,
                style: q,
                className: V.stepStatus
              }) : (0, s.jsx)(m.IconBadge, {
                disableColor: !0,
                icon: I.Z,
                style: W,
                className: i()(V.stepStatus, V.completed)
              }), (0, s.jsxs)("div", {
                className: V.step,
                children: [(0, s.jsx)(m.Text, {
                  variant: "text-md/medium",
                  color: e.isDone ? "header-secondary" : "header-primary",
                  className: V.stepName,
                  children: e.name
                }), (0, s.jsx)(m.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: V.stepDescription,
                  children: e.description
                }), e.children]
              }), (0, s.jsx)(j.Z, {
                width: 12,
                className: V.stepStatus
              })]
            }, "onboard-step-".concat(e.index)))
          })
        }) : null)]
      })
    }) : null)
  }) : t ? null : (0, s.jsx)(F.Z, {
    channelName: n.name,
    guildId: n.guild_id,
    tagFilter: r,
    channel: n
  })
}