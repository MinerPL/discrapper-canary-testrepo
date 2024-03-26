"use strict";
l.r(t), l.d(t, {
  default: function() {
    return V
  },
  ChannelSelectorFooter: function() {
    return R
  }
}), l("222007");
var i = l("37983"),
  a = l("884691"),
  n = l("446674"),
  s = l("77078"),
  r = l("452804"),
  o = l("206230"),
  c = l("812204"),
  d = l("685665"),
  u = l("168973"),
  v = l("42203"),
  f = l("305961"),
  h = l("957255"),
  m = l("18494"),
  I = l("944832"),
  E = l("58608"),
  x = l("550766"),
  T = l("191225"),
  C = l("986214"),
  S = l("161918"),
  p = l("248210"),
  A = l("525167"),
  g = l("698372"),
  _ = l("969380"),
  N = l("141962"),
  D = l("231457"),
  j = l("49111"),
  y = l("782340"),
  M = l("424263");

function L(e) {
  let t = (0, n.useStateFromStores)([f.default, h.default], () => {
    let t = f.default.getGuild(e);
    return null != t && h.default.can(j.Permissions.CREATE_INSTANT_INVITE, t)
  }, [e]);
  return t
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
      optionClassName: M.option,
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
    if (null == f || "" === f || null == E || null == l || "" === l) return;
    let e = await (0, C.default)({
      activityItem: E,
      currentEmbeddedApplication: p,
      locationObject: a,
      channelId: f,
      guildId: l,
      embeddedActivitiesManager: N.default,
      analyticsLocations: I
    });
    e && (o(), null != A && b && _ && await x.sendEmbeddedActivityInvite({
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