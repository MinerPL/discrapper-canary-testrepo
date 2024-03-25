"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  },
  GuildSettingsDefaultChannelsNotice: function() {
    return b
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("45299"),
  u = s("648747"),
  c = s("863636"),
  E = s("41594"),
  _ = s("367376"),
  I = s("988724"),
  T = s("161188"),
  S = s("245997"),
  f = s("923959"),
  m = s("98292"),
  N = s("461380"),
  g = s("36694"),
  h = s("45029"),
  C = s("900938"),
  R = s("851490"),
  x = s("653274"),
  L = s("330724"),
  O = s("136278"),
  A = s("223729"),
  p = s("682327"),
  M = s("925649"),
  D = s("795126"),
  v = s("457461"),
  G = s("782340"),
  j = s("207960");

function U(e) {
  let {
    guild: t
  } = e, n = (0, r.useStateFromStores)([c.default], () => c.default.getEnabled(t.id)), i = (0, r.useStateFromStores)([T.default], () => T.default.hasFetched(t.id)), d = (0, A.default)(t), S = (0, r.useStateFromStores)([x.default], () => x.default.editedDefaultChannelIds), f = d.filter(e => !S.has(e.id)), [N, C] = l.useState(!1);
  l.useEffect(() => {
    !i && !n && (0, I.fetchTopReadChannels)(t.id)
  }, [t.id, i, n]);
  let L = e => {
    (0, o.openModalLazy)(async () => {
      let {
        default: l
      } = await s.el("10035").then(s.bind(s, "10035"));
      return s => (0, a.jsx)(l, {
        ...s,
        guildId: t.id,
        startingChannelId: e
      })
    })
  };
  return N || 0 === f.length ? null : (0, a.jsxs)("div", {
    className: j.recommendations,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: G.default.Messages.CHANNEL_RECOMMENDED
    }), (0, a.jsxs)("div", {
      className: j.recsSubheader,
      children: [(0, a.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: G.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DESCRIPTION
      }), (0, a.jsxs)(o.Clickable, {
        className: j.dismissAll,
        onClick: () => C(!0),
        children: [(0, a.jsx)(g.default, {
          width: 12,
          height: 12,
          className: j.checkmark
        }), (0, a.jsx)(o.Text, {
          className: j.dismissAllText,
          variant: "text-xs/medium",
          color: "text-brand",
          children: G.default.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DISMISS_ALL
        })]
      })]
    }), (0, a.jsx)("div", {
      className: j.recommendedChannels,
      children: f.map((e, s) => (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
          className: j.channelRow,
          children: [(0, a.jsxs)("div", {
            className: j.channelInfo,
            children: [(0, a.jsxs)("div", {
              className: j.channelName,
              children: [(0, a.jsx)(E.ChannelItemIcon, {
                channel: e,
                guild: t
              }), (0, a.jsx)(m.default, {
                className: j.name,
                children: (0, a.jsx)(o.Text, {
                  className: j.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: "text-normal",
                  children: e.name
                })
              })]
            }), null != e.topic && e.topic.length > 0 ? (0, a.jsx)(m.default, {
              children: (0, a.jsx)(o.Text, {
                className: j.topic,
                variant: "text-xs/normal",
                children: _.default.parseTopic(e.topic, !0, {
                  channelId: e.id
                })
              })
            }, "topic") : null]
          }), (0, u.canChannelBeDefault)(t.id, e.id) ? (0, a.jsx)(o.Button, {
            color: o.Button.Colors.BRAND,
            size: o.Button.Sizes.SMALL,
            className: j.addChannelCTA,
            onClick: () => (0, R.toggleDefaultChannel)(e.id),
            children: G.default.Messages.ADD
          }) : (0, a.jsxs)(o.Button, {
            look: o.Button.Looks.OUTLINED,
            color: o.Button.Colors.PRIMARY,
            className: j.lockedPill,
            innerClassName: j.lockedPillInner,
            onClick: () => L(e.id),
            children: [(0, a.jsx)(h.default, {
              width: 16,
              height: 16
            }), (0, a.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: G.default.Messages.UNLOCK
            })]
          })]
        }), s < f.length - 1 ? (0, a.jsx)("div", {
          className: j.separator
        }) : null]
      }))
    }), (0, a.jsx)("div", {
      className: j.largeSeparator
    })]
  })
}

function P(e) {
  let {
    saveOnClose: t = !1
  } = e, s = (0, r.useStateFromStores)([C.default], () => C.default.getGuild()), n = (0, r.useStateFromStores)([c.default], () => c.default.isLoading()), d = (0, r.useStateFromStores)([f.default], () => f.default.getChannels(null == s ? void 0 : s.id)), u = (0, r.useStateFromStores)([S.default], () => S.default.getCategories(null == s ? void 0 : s.id)), E = (0, r.useStateFromStores)([O.default], () => O.default.advancedMode), _ = l.useRef(null), [I, T] = l.useState(!1);
  return (l.useEffect(() => {
    if (t) return () => {
      null != s && (0, R.saveDefaultChannels)(s).then(() => {
        E && (0, L.saveGuildOnboardingPrompts)(s, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    }
  }, [t, E]), null == s) ? null : n ? (0, a.jsx)(o.Spinner, {}) : (0, a.jsxs)("div", {
    className: j.columns,
    children: [(0, a.jsxs)("div", {
      className: j.channelBrowser,
      children: [(0, a.jsx)(o.Clickable, {
        className: j.collapseButton,
        onClick: () => T(e => !e),
        children: (0, a.jsx)(N.default, {
          direction: I ? N.default.Directions.DOWN : N.default.Directions.UP,
          height: 16,
          width: 16
        })
      }), (0, a.jsx)(o.Heading, {
        className: j.header,
        variant: "heading-lg/extrabold",
        children: G.default.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: G.default.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_SUBHEADER
      }), (0, a.jsx)(p.AdvancedModeToggle, {
        className: j.advancedModeToggle,
        guildId: s.id
      }), I ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(U, {
          guild: s
        }), (0, a.jsx)(M.default, {
          className: i(j.channelBrowserOuter),
          guild: s,
          categories: u,
          channels: d,
          hasSidebar: !1
        })]
      }), E && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: j.largeSeparator
        }), (0, a.jsx)(o.Heading, {
          className: j.prejoinHeader,
          variant: "heading-lg/extrabold",
          children: G.default.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_HEADER
        }), (0, a.jsx)(o.Text, {
          className: j.prejoinSubHeader,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: G.default.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_SUBHEADER
        }), (0, a.jsx)("div", {
          ref: _,
          className: j.advancedModeQuestions,
          children: (0, a.jsx)(v.default, {
            guildId: s.id,
            prejoinOnly: !0,
            includeCount: !0,
            singleColumn: !0
          })
        })]
      })]
    }), (0, a.jsx)(D.default, {
      guild: s,
      scrollToQuestions: () => {
        null != _.current && _.current.scrollIntoView({
          behavior: "smooth"
        })
      }
    })]
  })
}

function b() {
  let e = (0, r.useStateFromStores)([C.default], () => C.default.getProps().guild),
    t = (0, r.useStateFromStores)([x.default], () => x.default.submitting),
    s = (0, r.useStateFromStores)([O.default], () => O.default.advancedMode);
  return null == e ? null : (0, a.jsx)(d.default, {
    onSave: () => {
      (0, R.saveDefaultChannels)(e).then(() => {
        s && (0, L.saveGuildOnboardingPrompts)(e, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    },
    onReset: R.resetDefaultChannels,
    submitting: t,
    onSaveText: G.default.Messages.SAVE
  })
}