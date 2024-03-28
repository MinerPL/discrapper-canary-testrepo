"use strict";
l.r(t), l.d(t, {
  default: function() {
    return ea
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("803997"),
  i = l.n(s),
  r = l("392711"),
  d = l.n(r),
  o = l("718017"),
  u = l("866442"),
  c = l("442837"),
  h = l("692547"),
  f = l("780384"),
  m = l("481060"),
  C = l("45114"),
  N = l("131388"),
  x = l("410030"),
  g = l("1585"),
  p = l("125988"),
  S = l("44315"),
  E = l("160404"),
  I = l("240991"),
  _ = l("703656"),
  v = l("484459"),
  T = l("318661"),
  O = l("252532"),
  A = l("271383"),
  R = l("430824"),
  j = l("306680"),
  b = l("594174"),
  L = l("26290"),
  M = l("823379"),
  D = l("51144"),
  y = l("998502"),
  B = l("549817"),
  w = l("745752"),
  H = l("45966"),
  F = l("637853"),
  U = l("905204"),
  k = l("968644"),
  P = l("521941"),
  G = l("614328"),
  W = l("104265"),
  z = l("588632"),
  V = l("290511"),
  Y = l("981631"),
  Z = l("176505"),
  X = l("490897"),
  q = l("689938"),
  K = l("385316"),
  Q = l("121950"),
  J = l("931093");
let $ = m.AvatarSizes.SIZE_80,
  ee = "required";

function et(e) {
  var t;
  let {
    guild: l,
    user: s
  } = e, {
    avatarSrc: r,
    eventHandlers: o,
    isAvatarAnimating: h
  } = (0, O.useAnimatedAvatarSrc)({
    user: s,
    guildId: l.id,
    size: 120
  }), {
    avatarDecorationSrc: f
  } = (0, p.default)({
    user: s,
    size: (0, g.getDecorationSizeForAvatarSize)($),
    animateOnHover: !h
  }), C = (0, c.useStateFromStores)([A.default], () => A.default.getSelfMember(l.id)), N = (0, c.useStateFromStoresArray)([A.default], () => A.default.getMemberRoleWithPendingUpdates(l.id, s.id)), x = (0, c.useStateFromStores)([R.default], () => R.default.getRoles(l.id)), S = d()(N).filter(e => x.hasOwnProperty(e)).map(e => x[e]).orderBy("position", "desc").value(), E = (0, T.default)(s.id, l.id);
  a.useEffect(() => {
    (0, v.default)(s.id, s.getAvatarURL(l.id, (0, m.getAvatarSize)($)), {
      guildId: l.id
    })
  }, []);
  let _ = (0, I.parseBioReact)(null == E ? void 0 : E.bio),
    j = y.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar;
  return (0, n.jsxs)("div", {
    className: K.profile,
    children: [(0, n.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: q.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE
    }), (0, n.jsx)(m.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: q.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE_DESCRIPTION
    }), (0, n.jsxs)("div", {
      className: K.profileCard,
      children: [(0, n.jsx)("div", {
        ...o,
        children: (0, n.jsx)(j, {
          src: r,
          avatarDecoration: f,
          size: $,
          "aria-label": s.username
        })
      }), (0, n.jsx)(m.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        className: K.username,
        children: null !== (t = null == C ? void 0 : C.nick) && void 0 !== t ? t : D.default.getName(s)
      }), (0, n.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: i()(J.markup, K.bio),
        children: _
      }), null != S && S.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: K.separator
        }), (0, n.jsx)(m.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: K.title,
          children: q.default.Messages.ROLES
        }), (0, n.jsx)("div", {
          className: K.roles,
          children: null == S ? void 0 : S.map(e => {
            var t;
            return (0, n.jsxs)("div", {
              className: K.role,
              children: [(0, n.jsx)(m.RoleCircle, {
                color: null !== (t = e.colorString) && void 0 !== t ? t : (0, u.int2hex)(Y.DEFAULT_ROLE_COLOR),
                className: K.roleDot
              }), (0, n.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "header-primary",
                children: e.name
              })]
            }, e.id)
          })
        })]
      })]
    })]
  })
}

function el(e) {
  var t;
  let {
    prompt: l,
    guild: s
  } = e, [r, d] = a.useState(null), [u, f] = a.useState(new Set), C = null == l ? void 0 : null === (t = l.options) || void 0 === t ? void 0 : t.filter(e => u.has(e.id)), N = (0, F.getSelectedRoleIds)(C), x = (0, F.getSelectedChannelIds)(C), g = (0, c.useStateFromStoresArray)([H.default], () => H.default.getOnboardingResponsesForPrompt(s.id, l.id)), {
    helpText: p,
    helpTextAdditional: E
  } = (0, k.useCustomizeCommunityPromptHelpText)({
    guild: s,
    prompt: l,
    selectedRoleIds: N,
    selectedChannelIds: x,
    itemHook: (e, t) => (0, n.jsx)(m.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, t)
  }), {
    handleSelectOption: I
  } = (0, U.default)(s.id), _ = (0, m.useToken)(h.default.unsafe_rawColors.BRAND_500), v = (0, o.useSpring)({
    from: {
      color: l.isNew ? _.hex({
        opacity: 1
      }) : _.hex({
        opacity: 0
      })
    },
    color: _.hex({
      opacity: 0
    }),
    config: {
      duration: 300
    },
    delay: 500
  }), T = l.options.map(e => ({
    value: e.id,
    ...e
  })), O = l.options.filter(e => g.includes(e.id)).map(e => e.id);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(o.animated.div, {
      className: K.prompt,
      style: {
        borderColor: v.color
      },
      children: [l.isNew && (0, n.jsx)(L.TextBadge, {
        color: (0, S.getColor)(Y.Color.BRAND_260),
        text: q.default.Messages.NEW,
        className: K.newBadge
      }), (0, n.jsxs)(m.Heading, {
        className: K.promptTitle,
        variant: "heading-md/semibold",
        color: "header-primary",
        children: [l.title, l.required ? (0, n.jsx)("span", {
          className: i()(K.required, {
            [K.error]: (null == r ? void 0 : r.type) === ee
          }),
          children: "*"
        }) : null]
      }), (0, n.jsx)(z.default, {
        options: T,
        value: O,
        onChange: e => {
          let t = e.find(e => !g.includes(e.id)),
            n = e.map(e => e.id);
          if (null != t) I(l, t, !0), l.singleSelect && l.options.forEach(e => u.delete(e.id)), u.add(t.id);
          else {
            let e = g.filter(e => !n.includes(e)),
              t = l.options.filter(t => e.includes(t.id));
            if (g.length <= t.length && l.required) {
              d({
                type: ee
              });
              return
            }
            t.forEach(e => {
              I(l, e, !1), u.delete(e.id)
            })
          }
          f(new Set(u)), d(null)
        },
        canBeNew: !l.isNew
      }), (0, n.jsxs)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: K.helpText,
        children: [p, " ", E]
      })]
    })
  })
}

function en(e) {
  var t;
  let {
    prompt: l,
    guild: s
  } = e, [r, d] = a.useState(null), [u, f] = a.useState(new Set), C = null == l ? void 0 : null === (t = l.options) || void 0 === t ? void 0 : t.filter(e => u.has(e.id)), N = (0, F.getSelectedRoleIds)(C), x = (0, F.getSelectedChannelIds)(C), g = (0, c.useStateFromStoresArray)([H.default], () => H.default.getOnboardingResponsesForPrompt(s.id, l.id)), {
    helpText: p,
    helpTextAdditional: E
  } = (0, k.useCustomizeCommunityPromptHelpText)({
    guild: s,
    prompt: l,
    selectedRoleIds: N,
    selectedChannelIds: x,
    itemHook: (e, t) => (0, n.jsx)(m.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, t)
  }), {
    handleSelectOption: I
  } = (0, U.default)(s.id), _ = (e, t) => {
    if (!t && 1 === g.length && l.required) {
      d({
        type: ee
      });
      return
    }
    I(l, e, null != t && t), l.singleSelect && t && l.options.forEach(e => u.delete(e.id)), t ? u.add(e.id) : u.delete(e.id), f(new Set(u)), d(null)
  }, v = (0, m.useToken)(h.default.unsafe_rawColors.BRAND_500), T = (0, o.useSpring)({
    from: {
      color: l.isNew ? v.hex({
        opacity: 1
      }) : v.hex({
        opacity: 0
      })
    },
    color: v.hex({
      opacity: 0
    }),
    config: {
      duration: 300
    },
    delay: 500
  });
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(o.animated.div, {
      className: K.prompt,
      style: {
        borderColor: T.color
      },
      children: [l.isNew && (0, n.jsx)(L.TextBadge, {
        color: (0, S.getColor)(Y.Color.BRAND_260),
        text: q.default.Messages.NEW,
        className: K.newBadge
      }), (0, n.jsxs)(m.Heading, {
        className: K.promptTitle,
        variant: "heading-md/semibold",
        color: "header-primary",
        children: [l.title, l.required ? (0, n.jsx)("span", {
          className: i()(K.required, {
            [K.error]: (null == r ? void 0 : r.type) === ee
          }),
          children: "*"
        }) : null]
      }), (0, n.jsx)("div", {
        className: K.promptOptions,
        children: l.options.map(e => (0, n.jsx)(W.default, {
          hideMemberCount: !0,
          guildId: s.id,
          option: e,
          onSelect: t => _(e, t),
          selected: g.includes(e.id),
          canBeNew: !l.isNew
        }, e.id))
      }), (0, n.jsxs)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: K.helpText,
        children: [p, " ", E]
      })]
    })
  })
}

function ea(e) {
  let {
    guildId: t,
    onBrowseChannels: l
  } = e, s = (0, f.isThemeDark)((0, x.default)()), r = (0, c.useStateFromStores)([R.default], () => R.default.getGuild(t)), d = (0, c.useStateFromStores)([b.default], () => b.default.getCurrentUser()), o = (0, N.default)("(min-width: 1344px)") && null != d, u = a.useCallback(() => {
    (0, _.transitionTo)(Y.Routes.CHANNEL(t, Z.StaticChannelRoute.CHANNEL_BROWSER)), null == l || l()
  }, [t, l]), h = (0, c.useStateFromStores)([j.default], () => j.default.hasUnread(t, X.ReadStateTypes.GUILD_ONBOARDING_QUESTION)), {
    onboardingPromptsRaw: g,
    newOnboardingPrompts: p,
    onboardingPromptsWithNewAnswers: I,
    newAnswersCount: v,
    onboardingPrompts: T
  } = (0, P.default)(t);
  a.useEffect(() => {
    if ((null == r ? void 0 : r.id) != null) !E.default.isFullServerPreview(r.id) && (H.default.shouldFetchPrompts(r.id) || h) && (0, w.fetchOnboardingPrompts)(r.id)
  }, [null == r ? void 0 : r.id, h]), a.useEffect(() => {
    if ((null == r ? void 0 : r.id) != null) {
      if (!E.default.isFullServerPreview(r.id)) return () => {
        (0, C.ackGuildFeature)(r.id, X.ReadStateTypes.GUILD_ONBOARDING_QUESTION, H.default.ackIdForGuild(r.id)), B.default.updateOnboardingResponses(r.id)
      }
    }
  }, [null == r ? void 0 : r.id]);
  let O = a.useCallback(e => {
    if (null == r) return null;
    switch (e.type) {
      case V.OnboardingPromptType.MULTIPLE_CHOICE:
        return (0, n.jsx)(en, {
          prompt: e,
          guild: r
        }, e.id);
      case V.OnboardingPromptType.DROPDOWN:
        return (0, n.jsx)(el, {
          prompt: e,
          guild: r
        }, e.id);
      default:
        (0, M.assertNever)(e.type)
    }
  }, [r]);
  if (null == r) return null;
  if (0 === g.length) {
    let e = (0, S.getColor)(s ? Y.Color.PRIMARY_300 : Y.Color.PRIMARY_500),
      t = (0, S.getColor)(s ? Y.Color.PRIMARY_700 : Y.Color.PRIMARY_230);
    return (0, n.jsx)("div", {
      className: Q.chat,
      children: (0, n.jsx)("div", {
        className: i()(Q.content, K.emptyPage),
        children: (0, n.jsxs)("div", {
          className: K.emptyContainer,
          children: [(0, n.jsx)(G.default, {
            className: K.emptyIcon,
            foregroundColor: e,
            backgroundColor: t
          }), (0, n.jsx)(m.Heading, {
            className: K.emptyHeader,
            variant: "heading-md/semibold",
            children: q.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_HEADER
          }), (0, n.jsx)(m.Text, {
            variant: "text-sm/medium",
            children: q.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_SUBHEADER.format({
              onBrowseChannels: u
            })
          })]
        })
      })
    })
  }
  return (0, n.jsx)("div", {
    className: i()(Q.chat, K.scrollerContainer),
    children: (0, n.jsxs)(m.AdvancedScroller, {
      className: K.scroller,
      fade: !0,
      children: [(0, n.jsxs)("div", {
        className: K.pageBody,
        children: [(p.length > 0 || I.length > 0) && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            children: (0, n.jsx)(m.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: q.default.Messages.ONBOARDING_PROMPT_ANSWERS_NEW.format({
                count: p.length + v
              })
            })
          }), p.map(O), I.map(O), (0, n.jsx)("div", {
            className: K.sectionSeparator
          })]
        }), T.length > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: q.default.Messages.ONBOARDING_PROMPT_QUESTIONS_HEADER.format({
                count: T.length
              })
            }), (0, n.jsx)(m.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: q.default.Messages.ONBOARDING_PROMPT_MEMBER_DESCRIPTION
            })]
          }), T.map(O)]
        })]
      }), o && (0, n.jsx)(et, {
        guild: r,
        user: d
      })]
    })
  })
}