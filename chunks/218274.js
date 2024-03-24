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
  c = l("206230"),
  o = l("812204"),
  d = l("685665"),
  u = l("168973"),
  f = l("42203"),
  v = l("305961"),
  h = l("957255"),
  m = l("18494"),
  I = l("944832"),
  E = l("58608"),
  x = l("550766"),
  C = l("191225"),
  T = l("986214"),
  p = l("161918"),
  S = l("248210"),
  g = l("525167"),
  A = l("698372"),
  _ = l("969380"),
  N = l("141962"),
  j = l("231457"),
  D = l("49111"),
  M = l("782340"),
  y = l("424263");

function L(e) {
  let t = (0, n.useStateFromStores)([v.default, h.default], () => {
    let t = v.default.getGuild(e);
    return null != t && h.default.can(D.Permissions.CREATE_INSTANT_INVITE, t)
  }, [e]);
  return t
}
let b = ["embedded_background"];

function V(e) {
  var t, l;
  let {
    applicationId: o,
    guildId: d,
    selectedChannelId: h,
    setSelectedChannelId: C,
    enableSelectedTextChannelInvite: T
  } = e, A = (0, n.useStateFromStores)([c.default], () => c.default.useReducedMotion), N = (0, p.useActivityShelfItemData)(null != d ? d : null, null != o ? o : ""), [D, V] = a.useState(T && !u.default.disableInviteWithTextChannelActivityLaunch), R = (0, S.useSelectVoiceChannelOptions)(d);
  a.useEffect(() => {
    var e;
    x.fetchShelf({
      guildId: d
    }), C(null !== (e = (0, S.getActivityVoiceChannelSuggestion)({
      guildId: d
    })) && void 0 !== e ? e : void 0)
  }, [d, C]);
  let O = null == N ? void 0 : N.activity.activity_preview_video_asset_id,
    H = null != O ? (0, g.default)(null !== (t = null == N ? void 0 : N.application.id) && void 0 !== t ? t : "", O) : null,
    {
      url: B
    } = (0, _.default)({
      applicationId: null !== (l = null == N ? void 0 : N.application.id) && void 0 !== l ? l : "",
      size: 1024,
      names: b
    }),
    F = (0, n.useStateFromStores)([v.default], () => v.default.getGuild(d)),
    w = (0, n.useStateFromStores)([f.default, m.default], () => f.default.getChannel(m.default.getChannelId())),
    P = L(null != d ? d : void 0);
  if ((null == N ? void 0 : N.application) == null || null == F) return null;
  let Y = (null == w ? void 0 : w.name) == null || (null == w ? void 0 : w.name) === "" ? M.default.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : "#".concat(w.name);
  return (0, i.jsxs)(s.Scroller, {
    className: y.scroll,
    children: [null != H || null != B ? (0, i.jsx)(I.default, {
      aspectRatio: 16 / 9,
      className: y.imageContainer,
      children: (0, i.jsx)(E.default, {
        className: y.video,
        src: H,
        loop: !0,
        autoPlay: !A,
        poster: B,
        muted: !0
      })
    }) : null, (0, i.jsxs)("div", {
      className: y.descriptionArea,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: null == N ? void 0 : N.application.name
      }), (0, i.jsx)(s.Text, {
        className: y.descriptionAreaSubtext,
        variant: "text-md/normal",
        children: null == N ? void 0 : N.application.description
      })]
    }), (0, i.jsx)(s.Select, {
      placeholder: M.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
      optionClassName: y.option,
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
        return C(t.id)
      },
      serialize: e => {
        let {
          channel: t
        } = e;
        return t.id
      },
      renderOptionValue: () => {
        let e = R.find(e => e.value.channel.id === h);
        return null == e ? null : (0, i.jsx)(j.SelectChannelOption, {
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
        return (0, i.jsx)(j.SelectChannelOption, {
          channel: t,
          users: l
        })
      }
    }), P && T ? (0, i.jsxs)(s.Clickable, {
      className: y.checkboxContainer,
      onClick: () => {
        let e = !D;
        r.default.updatedUnsyncedSettings({
          disableInviteWithTextChannelActivityLaunch: !e
        }), V(e)
      },
      children: [(0, i.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: y.checkbox,
        value: D,
        displayOnly: !0
      }), (0, i.jsxs)(s.Text, {
        variant: "text-sm/normal",
        children: [M.default.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, " ", (0, i.jsx)("strong", {
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
    onClose: c,
    selectedChannelId: v,
    enableSelectedTextChannelInvite: h
  } = e, {
    AnalyticsLocationProvider: I,
    analyticsLocations: E
  } = (0, d.default)(o.default.ACTIVITY_CHANNEL_SELECTOR), S = (0, p.useActivityShelfItemData)(null != l ? l : null, null != t ? t : null), g = (0, A.default)(), _ = (0, n.useStateFromStores)([f.default, m.default], () => f.default.getChannel(m.default.getChannelId())), j = (0, n.useStateFromStores)([u.default], () => h && !u.default.disableInviteWithTextChannelActivityLaunch), b = (0, n.useStateFromStores)([C.default], () => null != v && "" !== v && C.default.getEmbeddedActivitiesForChannel(v).some(e => e.applicationId === t)), V = L(l), R = async () => {
    if (null == v || "" === v || null == S || null == l || "" === l) return;
    let e = await (0, T.default)({
      activityItem: S,
      currentEmbeddedApplication: g,
      locationObject: a,
      channelId: v,
      guildId: l,
      embeddedActivitiesManager: N.default,
      analyticsLocations: E
    });
    e && (c(), null != _ && V && j && await x.sendEmbeddedActivityInvite({
      activityChannelId: v,
      invitedChannelId: _.id,
      applicationId: S.application.id,
      location: D.AnalyticsLocations.ACTIVITY_SHELF
    }))
  };
  return (0, i.jsx)(I, {
    children: (0, i.jsxs)("div", {
      className: y.footerContainer,
      children: [(0, i.jsx)(s.Clickable, {
        onClick: r,
        className: y.backToBrowse,
        children: (0, i.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          children: M.default.Messages.BACK
        })
      }), null == v ? (0, i.jsx)("div", {}) : (0, i.jsx)(s.Button, {
        className: y.launchButton,
        onClick: R,
        color: b ? s.Button.Colors.GREEN : void 0,
        fullWidth: !0,
        children: b ? M.default.Messages.EMBEDDED_ACTIVITIES_JOIN : M.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH
      })]
    })
  })
}