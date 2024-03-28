"use strict";
l.r(t), l.d(t, {
  ChannelSelectorFooter: function() {
    return R
  },
  default: function() {
    return V
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("442837"),
  s = l("481060"),
  r = l("153867"),
  o = l("607070"),
  c = l("100527"),
  d = l("906732"),
  u = l("740492"),
  v = l("592125"),
  f = l("430824"),
  h = l("496675"),
  m = l("944486"),
  I = l("368874"),
  E = l("810090"),
  x = l("566620"),
  T = l("317381"),
  C = l("266820"),
  S = l("678173"),
  p = l("696068"),
  A = l("361213"),
  g = l("952561"),
  _ = l("778569"),
  N = l("513202"),
  D = l("412019"),
  j = l("981631"),
  y = l("689938"),
  M = l("116478");

function L(e) {
  return (0, n.useStateFromStores)([f.default, h.default], () => {
    let t = f.default.getGuild(e);
    return null != t && h.default.can(j.Permissions.CREATE_INSTANT_INVITE, t)
  }, [e])
}
let b = ["embedded_background"];

function V(e) {
  var t, l;
  let {
    applicationId: c,
    guildId: d,
    selectedChannelId: h,
    setSelectedChannelId: T,
    enableSelectedTextChannelInvite: C
  } = e, g = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion), N = (0, S.useActivityShelfItemData)(null != d ? d : null, null != c ? c : ""), [j, V] = a.useState(C && !u.default.disableInviteWithTextChannelActivityLaunch), R = (0, p.useSelectVoiceChannelOptions)(d);
  a.useEffect(() => {
    var e;
    x.fetchShelf({
      guildId: d
    }), T(null !== (e = (0, p.getActivityVoiceChannelSuggestion)({
      guildId: d
    })) && void 0 !== e ? e : void 0)
  }, [d, T]);
  let O = null == N ? void 0 : N.activity.activity_preview_video_asset_id,
    H = null != O ? (0, A.default)(null !== (t = null == N ? void 0 : N.application.id) && void 0 !== t ? t : "", O) : null,
    {
      url: B
    } = (0, _.default)({
      applicationId: null !== (l = null == N ? void 0 : N.application.id) && void 0 !== l ? l : "",
      size: 1024,
      names: b
    }),
    F = (0, n.useStateFromStores)([f.default], () => f.default.getGuild(d)),
    P = (0, n.useStateFromStores)([v.default, m.default], () => v.default.getChannel(m.default.getChannelId())),
    w = L(null != d ? d : void 0);
  if ((null == N ? void 0 : N.application) == null || null == F) return null;
  let Y = (null == P ? void 0 : P.name) == null || (null == P ? void 0 : P.name) === "" ? y.default.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : "#".concat(P.name);
  return (0, i.jsxs)(s.Scroller, {
    className: M.scroll,
    children: [null != H || null != B ? (0, i.jsx)(I.default, {
      aspectRatio: 16 / 9,
      className: M.imageContainer,
      children: (0, i.jsx)(E.default, {
        className: M.video,
        src: H,
        loop: !0,
        autoPlay: !g,
        poster: B,
        muted: !0
      })
    }) : null, (0, i.jsxs)("div", {
      className: M.descriptionArea,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: null == N ? void 0 : N.application.name
      }), (0, i.jsx)(s.Text, {
        className: M.descriptionAreaSubtext,
        variant: "text-md/normal",
        children: null == N ? void 0 : N.application.description
      })]
    }), (0, i.jsx)(s.Select, {
      placeholder: y.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
      optionClassName: M.__invalid_option,
      options: R,
      isSelected: e => {
        let {
          channel: t
        } = e;
        return t.id === h
      },
      select: e => {
        let {
          channel: t
        } = e;
        return T(t.id)
      },
      serialize: e => {
        let {
          channel: t
        } = e;
        return t.id
      },
      renderOptionValue: () => {
        let e = R.find(e => e.value.channel.id === h);
        return null == e ? null : (0, i.jsx)(D.SelectChannelOption, {
          channel: e.value.channel,
          users: e.value.users
        })
      },
      renderOptionLabel: e => {
        let {
          value: {
            channel: t,
            users: l
          }
        } = e;
        return (0, i.jsx)(D.SelectChannelOption, {
          channel: t,
          users: l
        })
      }
    }), w && C ? (0, i.jsxs)(s.Clickable, {
      className: M.checkboxContainer,
      onClick: () => {
        let e = !j;
        r.default.updatedUnsyncedSettings({
          disableInviteWithTextChannelActivityLaunch: !e
        }), V(e)
      },
      children: [(0, i.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: M.checkbox,
        value: j,
        displayOnly: !0
      }), (0, i.jsxs)(s.Text, {
        variant: "text-sm/normal",
        children: [y.default.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, " ", (0, i.jsx)("strong", {
          children: Y
        })]
      })]
    }) : null]
  })
}

function R(e) {
  let {
    applicationId: t,
    guildId: l,
    locationObject: a,
    onBack: r,
    onClose: o,
    selectedChannelId: f,
    enableSelectedTextChannelInvite: h
  } = e, {
    analyticsLocations: I
  } = (0, d.default)(c.default.ACTIVITY_CHANNEL_SELECTOR), E = (0, S.useActivityShelfItemData)(null != l ? l : null, null != t ? t : null), p = (0, g.default)(), A = (0, n.useStateFromStores)([v.default, m.default], () => v.default.getChannel(m.default.getChannelId())), _ = (0, n.useStateFromStores)([u.default], () => h && !u.default.disableInviteWithTextChannelActivityLaunch), D = (0, n.useStateFromStores)([T.default], () => null != f && "" !== f && T.default.getEmbeddedActivitiesForChannel(f).some(e => e.applicationId === t)), b = L(l), V = async () => {
    if (null != f && "" !== f && null != E && null != l && "" !== l) await (0, C.default)({
      activityItem: E,
      currentEmbeddedApplication: p,
      locationObject: a,
      channelId: f,
      guildId: l,
      embeddedActivitiesManager: N.default,
      analyticsLocations: I
    }) && (o(), null != A && b && _ && await x.sendEmbeddedActivityInvite({
      activityChannelId: f,
      invitedChannelId: A.id,
      applicationId: E.application.id,
      location: j.AnalyticsLocations.ACTIVITY_SHELF
    }))
  };
  return (0, i.jsx)(d.AnalyticsLocationProvider, {
    value: I,
    children: (0, i.jsxs)("div", {
      className: M.footerContainer,
      children: [(0, i.jsx)(s.Clickable, {
        onClick: r,
        className: M.backToBrowse,
        children: (0, i.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          children: y.default.Messages.BACK
        })
      }), null == f ? (0, i.jsx)("div", {}) : (0, i.jsx)(s.Button, {
        className: M.launchButton,
        onClick: V,
        color: D ? s.Button.Colors.GREEN : void 0,
        fullWidth: !0,
        children: D ? y.default.Messages.EMBEDDED_ACTIVITIES_JOIN : y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH
      })]
    })
  })
}