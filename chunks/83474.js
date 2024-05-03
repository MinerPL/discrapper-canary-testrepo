"use strict";
a.r(l), a.d(l, {
  GuildDialog: function() {
    return L
  },
  GuildUnavilableDialog: function() {
    return S
  },
  default: function() {
    return C
  }
}), a("47120");
var s = a("735250"),
  t = a("470079"),
  i = a("120356"),
  n = a.n(i),
  d = a("442837"),
  u = a("692547"),
  c = a("780384"),
  r = a("481060"),
  o = a("410030"),
  h = a("134432"),
  m = a("703656"),
  f = a("314897"),
  g = a("271383"),
  x = a("940627"),
  j = a("806519"),
  v = a("768581"),
  p = a("900849"),
  N = a("249842"),
  I = a("838367"),
  b = a("981631"),
  _ = a("689938"),
  P = a("129758"),
  E = a("892561"),
  T = a("494536");

function U() {
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)("div", {
      className: P.splashPlaceholder
    }), (0, s.jsxs)("div", {
      className: n()(P.body, P.hasSplash),
      children: [(0, s.jsx)("div", {
        className: P.iconPlaceholder
      }), (0, s.jsx)("div", {
        className: P.__invalid_headerText,
        children: (0, s.jsx)("div", {
          className: P.namePlaceholder
        })
      }), (0, s.jsxs)("div", {
        className: P.memberInfo,
        children: [(0, s.jsx)("div", {
          className: P.memberCount,
          children: (0, s.jsx)("div", {
            className: P.memberInfoPlaceholder
          })
        }), (0, s.jsx)("div", {
          className: P.memberCount,
          children: (0, s.jsx)("div", {
            className: P.memberInfoPlaceholder
          })
        })]
      }), (0, s.jsx)("div", {
        className: P.viewButtonPlaceholder
      })]
    })]
  })
}

function S() {
  let e = (0, o.default)();
  return (0, s.jsx)(r.Dialog, {
    "aria-label": _.default.Messages.GUILD_UNAVAILABLE_HEADER,
    className: P.guildPopout,
    children: (0, s.jsxs)("div", {
      className: P.body,
      children: [(0, s.jsx)("img", {
        src: (0, c.isThemeDark)(e) ? E : T,
        className: P.unavailableIcon,
        width: 80,
        height: 80,
        alt: ""
      }), (0, s.jsx)(r.Heading, {
        className: P.unavailableHeader,
        variant: "heading-md/semibold",
        children: _.default.Messages.GUILD_POPOUT_UNAVAILABLE_HEADER
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: _.default.Messages.GUILD_POPOUT_UNAVAILABLE_FLAVOR
      })]
    })
  })
}

function L(e) {
  var l, a;
  let {
    guild: i,
    channelId: c,
    messageId: o
  } = e, {
    name: N,
    id: I,
    discoverySplash: E,
    icon: T,
    description: U,
    presenceCount: S,
    memberCount: L,
    emojis: C
  } = i, D = (0, d.useStateFromStores)([f.default], () => f.default.getId()), G = (0, d.useStateFromStores)([g.default], () => g.default.isMember(I, D), [I, D]), [F, O] = t.useState(!1), A = e => {
    if (e.stopPropagation(), G)(0, m.transitionToGuild)(I, c, o);
    else {
      let e = {
        page: b.AnalyticsPages.GUILD_CHANNEL,
        section: b.AnalyticsSections.GUILD_POPOUT,
        object: b.AnalyticsObjects.CARD
      };
      (0, p.startLurking)(I, e)
    }
    O(!0)
  }, R = v.default.getGuildDiscoverySplashURL({
    id: I,
    splash: E,
    size: 250 * (0, h.getDevicePixelRatio)()
  }), y = null !== (l = v.default.getGuildIconURL({
    id: I,
    icon: T,
    size: 80
  })) && void 0 !== l ? l : void 0, M = C, k = null;
  return null != M && M.length > 6 && null != C && (M = null !== (a = null == C ? void 0 : C.slice(Math.max((null == C ? void 0 : C.length) - 6, 0))) && void 0 !== a ? a : [], k = C.length - 6), (0, s.jsxs)(r.Dialog, {
    "aria-label": N,
    className: P.guildPopout,
    children: [null != R ? (0, s.jsx)("img", {
      src: R,
      alt: "",
      className: P.splashImage
    }) : null, (0, s.jsxs)("div", {
      className: n()(P.body, {
        [P.hasSplash]: null != R
      }),
      children: [(0, s.jsx)("div", {
        className: n()({
          [P.iconWithSplash]: null != R
        }),
        children: (0, s.jsx)(r.Clickable, {
          onClick: A,
          children: (0, s.jsx)(j.default, {
            mask: j.default.Masks.SQUIRCLE,
            width: 88,
            height: 88,
            children: (0, s.jsx)("div", {
              className: P.iconMask,
              children: (0, s.jsx)(j.default, {
                mask: j.default.Masks.SQUIRCLE,
                width: 80,
                height: 80,
                children: (0, s.jsx)("img", {
                  src: y,
                  alt: "",
                  className: P.avatar
                })
              })
            })
          })
        })
      }), null != N ? (0, s.jsxs)("div", {
        className: P.guildNameWrapper,
        children: [(0, s.jsx)(x.default, {
          className: P.badge,
          guild: i,
          tooltipPosition: "top",
          tooltipColor: r.Tooltip.Colors.PRIMARY,
          badgeColor: u.default.unsafe_rawColors.PRIMARY_500.css
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/semibold",
          className: P.guildName,
          children: N
        })]
      }) : null, null != U ? (0, s.jsx)(r.Text, {
        color: "header-secondary",
        className: P.description,
        variant: "text-sm/normal",
        children: U
      }) : null, (0, s.jsxs)("div", {
        className: P.memberInfo,
        children: [null != S ? (0, s.jsxs)("div", {
          className: P.memberCount,
          children: [(0, s.jsx)("div", {
            className: P.dotOnline
          }), (0, s.jsx)(r.Text, {
            variant: "text-xs/normal",
            className: P.memberText,
            children: _.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
              membersOnline: S
            })
          })]
        }) : null, null != L ? (0, s.jsxs)("div", {
          className: P.memberCount,
          children: [(0, s.jsx)("div", {
            className: P.dotOffline
          }), (0, s.jsx)(r.Text, {
            variant: "text-xs/normal",
            className: P.memberText,
            children: _.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
              count: L
            })
          })]
        }) : null]
      })]
    }), (0, s.jsxs)("div", {
      className: P.footer,
      children: [null != M && M.length > 0 ? (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(r.Heading, {
          variant: "heading-deprecated-12/semibold",
          className: P.emojiHeader,
          color: "header-secondary",
          children: _.default.Messages.SERVER_EMOJI
        }), (0, s.jsxs)("div", {
          className: n()(P.emojiContainer, {
            [P.withCounter]: null != k
          }),
          children: [M.map(e => {
            let l = v.default.getEmojiURL({
              id: e.id,
              animated: !1,
              size: 24
            });
            return (0, s.jsx)(r.Tooltip, {
              text: ":".concat(e.name, ":"),
              children: e => (0, s.jsx)("img", {
                ...e,
                width: 24,
                height: 24,
                src: l,
                className: n()({
                  [P.emoji]: null == k
                }),
                alt: ""
              })
            }, e.id)
          }), null != k ? (0, s.jsx)(r.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: P.emojiCounter,
            color: "header-secondary",
            children: "+".concat(k)
          }) : null]
        })]
      }) : null, (0, s.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        color: r.Button.Colors.BRAND,
        size: r.Button.Sizes.SMALL,
        onClick: A,
        submitting: F,
        autoFocus: !0,
        children: _.default.Messages.GUILD_POPOUT_VIEW_SERVER_BUTTON
      })]
    })]
  })
}

function C(e) {
  let {
    guildId: l,
    channelId: a,
    messageId: i
  } = e, {
    loading: n,
    unavailable: u,
    guild: c
  } = (0, d.useStateFromStoresObject)([I.default], () => ({
    guild: I.default.getGuild(l),
    loading: I.default.isFetchingGuild(l),
    unavailable: I.default.hasFetchFailed(l)
  }), [l]);
  return (t.useEffect(() => {
    null == c && !n && !u && (0, N.fetchGuildForPopout)(l)
  }, [c, l, n, u]), n) ? (0, s.jsx)(r.Dialog, {
    "aria-label": _.default.Messages.LOADING,
    className: P.guildPopout,
    children: (0, s.jsx)(U, {})
  }) : null == c || u ? (0, s.jsx)(S, {}) : (0, s.jsx)(L, {
    guild: c,
    channelId: a,
    messageId: i
  })
}