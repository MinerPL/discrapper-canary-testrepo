"use strict";
n.r(t), n.d(t, {
  GuildUnavilableDialog: function() {
    return R
  },
  GuildDialog: function() {
    return j
  },
  default: function() {
    return b
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  u = n("446674"),
  d = n("669491"),
  r = n("819855"),
  o = n("77078"),
  c = n("841098"),
  h = n("407063"),
  f = n("393414"),
  g = n("271938"),
  m = n("26989"),
  T = n("580357"),
  _ = n("587974"),
  E = n("315102"),
  S = n("794818"),
  p = n("503021"),
  I = n("757414"),
  N = n("49111"),
  v = n("782340"),
  P = n("574569"),
  x = n("653711"),
  A = n("570459");

function O() {
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: P.splashPlaceholder
    }), (0, l.jsxs)("div", {
      className: i(P.body, P.hasSplash),
      children: [(0, l.jsx)("div", {
        className: P.iconPlaceholder
      }), (0, l.jsx)("div", {
        className: P.headerText,
        children: (0, l.jsx)("div", {
          className: P.namePlaceholder
        })
      }), (0, l.jsxs)("div", {
        className: P.memberInfo,
        children: [(0, l.jsx)("div", {
          className: P.memberCount,
          children: (0, l.jsx)("div", {
            className: P.memberInfoPlaceholder
          })
        }), (0, l.jsx)("div", {
          className: P.memberCount,
          children: (0, l.jsx)("div", {
            className: P.memberInfoPlaceholder
          })
        })]
      }), (0, l.jsx)("div", {
        className: P.viewButtonPlaceholder
      })]
    })]
  })
}

function R() {
  let e = (0, c.default)();
  return (0, l.jsx)(o.Dialog, {
    "aria-label": v.default.Messages.GUILD_UNAVAILABLE_HEADER,
    className: P.guildPopout,
    children: (0, l.jsxs)("div", {
      className: P.body,
      children: [(0, l.jsx)("img", {
        src: (0, r.isThemeDark)(e) ? x : A,
        className: P.unavailableIcon,
        width: 80,
        height: 80,
        alt: ""
      }), (0, l.jsx)(o.Heading, {
        className: P.unavailableHeader,
        variant: "heading-md/semibold",
        children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: v.default.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
      })]
    })
  })
}

function j(e) {
  var t, n;
  let {
    guild: s,
    channelId: r,
    messageId: c
  } = e, {
    name: p,
    id: I,
    discoverySplash: x,
    icon: A,
    description: O,
    presenceCount: R,
    memberCount: j,
    emojis: b
  } = s, C = (0, u.useStateFromStores)([g.default], () => g.default.getId()), U = (0, u.useStateFromStores)([m.default], () => m.default.isMember(I, C), [I, C]), [D, y] = a.useState(!1), M = e => {
    if (e.stopPropagation(), U)(0, f.transitionToGuild)(I, r, c);
    else {
      let e = {
        page: N.AnalyticsPages.GUILD_CHANNEL,
        section: N.AnalyticsSections.GUILD_POPOUT,
        object: N.AnalyticsObjects.CARD
      };
      (0, S.startLurking)(I, e)
    }
    y(!0)
  }, L = E.default.getGuildDiscoverySplashURL({
    id: I,
    splash: x,
    size: 250 * (0, h.getDevicePixelRatio)()
  }), G = null !== (t = E.default.getGuildIconURL({
    id: I,
    icon: A,
    size: 80
  })) && void 0 !== t ? t : void 0, w = b, F = null;
  return null != w && w.length > 6 && null != b && (w = null !== (n = null == b ? void 0 : b.slice(Math.max((null == b ? void 0 : b.length) - 6, 0))) && void 0 !== n ? n : [], F = b.length - 6), (0, l.jsxs)(o.Dialog, {
    "aria-label": p,
    className: P.guildPopout,
    children: [null != L ? (0, l.jsx)("img", {
      src: L,
      alt: "",
      className: P.splashImage
    }) : null, (0, l.jsxs)("div", {
      className: i(P.body, {
        [P.hasSplash]: null != L
      }),
      children: [(0, l.jsx)("div", {
        className: i({
          [P.iconWithSplash]: null != L
        }),
        children: (0, l.jsx)(o.Clickable, {
          onClick: M,
          children: (0, l.jsx)(_.default, {
            mask: _.default.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, l.jsx)("div", {
              className: P.iconMask,
              children: (0, l.jsx)(_.default, {
                mask: _.default.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, l.jsx)("img", {
                  src: G,
                  alt: "",
                  className: P.avatar
                })
              })
            })
          })
        })
      }), null != p ? (0, l.jsxs)("div", {
        className: P.guildNameWrapper,
        children: [(0, l.jsx)(T.default, {
          className: P.badge,
          guild: s,
          tooltipPosition: "top",
          tooltipColor: o.Tooltip.Colors.PRIMARY,
          badgeColor: d.default.unsafe_rawColors.PRIMARY_500.css
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: P.guildName,
          children: p
        })]
      }) : null, null != O ? (0, l.jsx)(o.Text, {
        color: "header-secondary",
        className: P.description,
        variant: "text-sm/normal",
        children: O
      }) : null, (0, l.jsxs)("div", {
        className: P.memberInfo,
        children: [null != R ? (0, l.jsxs)("div", {
          className: P.memberCount,
          children: [(0, l.jsx)("div", {
            className: P.dotOnline
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: P.memberText,
            children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: R
            })
          })]
        }) : null, null != j ? (0, l.jsxs)("div", {
          className: P.memberCount,
          children: [(0, l.jsx)("div", {
            className: P.dotOffline
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            className: P.memberText,
            children: v.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: j
            })
          })]
        }) : null]
      })]
    }), (0, l.jsxs)("div", {
      className: P.footer,
      children: [null != w && w.length > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: P.emojiHeader,
          color: "header-secondary",
          children: v.default.Messages.SERVER_EMOJI
        }), (0, l.jsxs)("div", {
          className: i(P.emojiContainer, {
            [P.withCounter]: null != F
          }),
          children: [w.map(e => {
            let t = E.default.getEmojiURL({
              id: e.id,
              animated: !1,
              size: 24
            });
            return (0, l.jsx)(o.Tooltip, {
              text: ":".concat(e.name, ":"),
              children: e => (0, l.jsx)("img", {
                ...e,
                width: 24,
                height: 24,
                src: t,
                className: i({
                  [P.emoji]: null == F
                }),
                alt: ""
              })
            }, e.id)
          }), null != F ? (0, l.jsx)(o.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: P.emojiCounter,
            color: "header-secondary",
            children: "+".concat(F)
          }) : null]
        })]
      }) : null, (0, l.jsx)(o.Button, {
        look: o.Button.Looks.FILLED,
        color: o.Button.Colors.BRAND,
        size: o.Button.Sizes.SMALL,
        onClick: M,
        submitting: D,
        autoFocus: !0,
        children: v.default.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
      })]
    })]
  })
}

function b(e) {
  let {
    guildId: t,
    channelId: n,
    messageId: s
  } = e, {
    loading: i,
    unavailable: d,
    guild: r
  } = (0, u.useStateFromStoresObject)([I.default], () => ({
    guild: I.default.getGuild(t),
    loading: I.default.isFetchingGuild(t),
    unavailable: I.default.hasFetchFailed(t)
  }), [t]);
  return (a.useEffect(() => {
    null == r && !i && !d && (0, p.fetchGuildForPopout)(t)
  }, [r, t, i, d]), i) ? (0, l.jsx)(o.Dialog, {
    "aria-label": v.default.Messages.LOADING,
    className: P.guildPopout,
    children: (0, l.jsx)(O, {})
  }) : null == r || d ? (0, l.jsx)(R, {}) : (0, l.jsx)(j, {
    guild: r,
    channelId: n,
    messageId: s
  })
}