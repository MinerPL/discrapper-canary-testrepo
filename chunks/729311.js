"use strict";
t.d(s, {
  Z: function() {
    return G
  },
  j: function() {
    return P
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(481060),
  c = t(852860),
  d = t(977258),
  u = t(45966),
  E = t(473403),
  _ = t(454585),
  I = t(323502),
  T = t(958832),
  N = t(324067),
  m = t(984933),
  S = t(514342),
  h = t(259580),
  g = t(263704),
  x = t(630641),
  C = t(999382),
  R = t(743475),
  L = t(889369),
  O = t(570961),
  A = t(208665),
  p = t(868814),
  M = t(974513),
  f = t(2348),
  v = t(353890),
  D = t(716130),
  Z = t(689938),
  j = t(59009);

function U(e) {
  let {
    guild: s
  } = e, l = (0, r.e7)([u.Z], () => u.Z.getEnabled(s.id)), a = (0, r.e7)([T.Z], () => T.Z.hasFetched(s.id)), c = (0, p.Z)(s), N = (0, r.e7)([L.Z], () => L.Z.editedDefaultChannelIds), m = c.filter(e => !N.has(e.id)), [h, C] = i.useState(!1);
  i.useEffect(() => {
    !a && !l && (0, I.S)(s.id)
  }, [s.id, a, l]);
  let O = e => {
    (0, o.openModalLazy)(async () => {
      let {
        default: i
      } = await Promise.all([t.e("99387"), t.e("35641")]).then(t.bind(t, 89216));
      return t => (0, n.jsx)(i, {
        ...t,
        guildId: s.id,
        startingChannelId: e
      })
    })
  };
  return h || 0 === m.length ? null : (0, n.jsxs)("div", {
    className: j.recommendations,
    children: [(0, n.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: Z.Z.Messages.CHANNEL_RECOMMENDED
    }), (0, n.jsxs)("div", {
      className: j.recsSubheader,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: Z.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DESCRIPTION
      }), (0, n.jsxs)(o.Clickable, {
        className: j.dismissAll,
        onClick: () => C(!0),
        children: [(0, n.jsx)(g.Z, {
          width: 12,
          height: 12,
          className: j.checkmark
        }), (0, n.jsx)(o.Text, {
          className: j.dismissAllText,
          variant: "text-xs/medium",
          color: "text-brand",
          children: Z.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DISMISS_ALL
        })]
      })]
    }), (0, n.jsx)("div", {
      className: j.recommendedChannels,
      children: m.map((e, t) => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)("div", {
          className: j.channelRow,
          children: [(0, n.jsxs)("div", {
            className: j.channelInfo,
            children: [(0, n.jsxs)("div", {
              className: j.channelName,
              children: [(0, n.jsx)(E._, {
                channel: e,
                guild: s
              }), (0, n.jsx)(S.Z, {
                className: j.__invalid_name,
                children: (0, n.jsx)(o.Text, {
                  className: j.__invalid_channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: "text-normal",
                  children: e.name
                })
              })]
            }), null != e.topic && e.topic.length > 0 ? (0, n.jsx)(S.Z, {
              children: (0, n.jsx)(o.Text, {
                className: j.topic,
                variant: "text-xs/normal",
                children: _.Z.parseTopic(e.topic, !0, {
                  channelId: e.id
                })
              })
            }, "topic") : null]
          }), (0, d.s)(s.id, e.id) ? (0, n.jsx)(o.Button, {
            color: o.Button.Colors.BRAND,
            size: o.Button.Sizes.SMALL,
            className: j.addChannelCTA,
            onClick: () => (0, R.pt)(e.id),
            children: Z.Z.Messages.ADD
          }) : (0, n.jsxs)(o.Button, {
            look: o.Button.Looks.OUTLINED,
            color: o.Button.Colors.PRIMARY,
            className: j.lockedPill,
            innerClassName: j.lockedPillInner,
            onClick: () => O(e.id),
            children: [(0, n.jsx)(x.Z, {
              width: 16,
              height: 16
            }), (0, n.jsx)(o.Text, {
              variant: "text-sm/medium",
              children: Z.Z.Messages.UNLOCK
            })]
          })]
        }), t < m.length - 1 ? (0, n.jsx)("div", {
          className: j.separator
        }) : null]
      }))
    }), (0, n.jsx)("div", {
      className: j.largeSeparator
    })]
  })
}

function G(e) {
  let {
    saveOnClose: s = !1
  } = e, t = (0, r.e7)([C.Z], () => C.Z.getGuild()), l = (0, r.e7)([u.Z], () => u.Z.isLoading()), c = (0, r.e7)([m.ZP], () => m.ZP.getChannels(null == t ? void 0 : t.id)), d = (0, r.e7)([N.Z], () => N.Z.getCategories(null == t ? void 0 : t.id)), E = (0, r.e7)([A.Z], () => A.Z.advancedMode), _ = i.useRef(null), [I, T] = i.useState(!1);
  return (i.useEffect(() => {
    if (s) return () => {
      null != t && (0, R.DO)(t).then(() => {
        E && (0, O.rS)(t, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    }
  }, [s, E]), null == t) ? null : l ? (0, n.jsx)(o.Spinner, {}) : (0, n.jsxs)("div", {
    className: j.columns,
    children: [(0, n.jsxs)("div", {
      className: j.channelBrowser,
      children: [(0, n.jsx)(o.Clickable, {
        className: j.collapseButton,
        onClick: () => T(e => !e),
        children: (0, n.jsx)(h.Z, {
          direction: I ? h.Z.Directions.DOWN : h.Z.Directions.UP,
          height: 16,
          width: 16
        })
      }), (0, n.jsx)(o.Heading, {
        className: j.header,
        variant: "heading-lg/extrabold",
        children: Z.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Z.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_SUBHEADER
      }), (0, n.jsx)(M.Wu, {
        className: j.advancedModeToggle,
        guildId: t.id
      }), I ? null : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(U, {
          guild: t
        }), (0, n.jsx)(f.Z, {
          className: a()(j.channelBrowserOuter),
          guild: t,
          categories: d,
          channels: c,
          hasSidebar: !1
        })]
      }), E && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: j.largeSeparator
        }), (0, n.jsx)(o.Heading, {
          className: j.prejoinHeader,
          variant: "heading-lg/extrabold",
          children: Z.Z.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_HEADER
        }), (0, n.jsx)(o.Text, {
          className: j.prejoinSubHeader,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: Z.Z.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_SUBHEADER
        }), (0, n.jsx)("div", {
          ref: _,
          className: j.advancedModeQuestions,
          children: (0, n.jsx)(D.Z, {
            guildId: t.id,
            prejoinOnly: !0,
            includeCount: !0,
            singleColumn: !0
          })
        })]
      })]
    }), (0, n.jsx)(v.Z, {
      guild: t,
      scrollToQuestions: () => {
        null != _.current && _.current.scrollIntoView({
          behavior: "smooth"
        })
      }
    })]
  })
}

function P() {
  let e = (0, r.e7)([C.Z], () => C.Z.getProps().guild),
    s = (0, r.e7)([L.Z], () => L.Z.submitting),
    t = (0, r.e7)([A.Z], () => A.Z.advancedMode);
  return null == e ? null : (0, n.jsx)(c.Z, {
    onSave: () => {
      (0, R.DO)(e).then(() => {
        t && (0, O.rS)(e, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }).catch(() => {})
    },
    onReset: R.BG,
    submitting: s,
    onSaveText: Z.Z.Messages.SAVE
  })
}