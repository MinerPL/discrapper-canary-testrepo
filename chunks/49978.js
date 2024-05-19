"use strict";
l.r(t), l.d(t, {
  ChannelSelectorFooter: function() {
    return R
  },
  default: function() {
    return b
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("442837"),
  s = l("481060"),
  r = l("153867"),
  d = l("607070"),
  c = l("100527"),
  o = l("906732"),
  u = l("740492"),
  v = l("592125"),
  f = l("430824"),
  h = l("496675"),
  I = l("944486"),
  m = l("368874"),
  E = l("810090"),
  T = l("566620"),
  x = l("317381"),
  C = l("146936"),
  S = l("678173"),
  p = l("696068"),
  A = l("361213"),
  _ = l("952561"),
  g = l("778569"),
  N = l("513202"),
  j = l("412019"),
  D = l("981631"),
  y = l("689938"),
  M = l("777874");

function L(e) {
  return (0, n.useStateFromStores)([f.default, h.default], () => {
    let t = f.default.getGuild(e);
    return null != t && h.default.can(D.Permissions.CREATE_INSTANT_INVITE, t)
  }, [e])
}
let V = ["embedded_background"];

function b(e) {
  var t, l;
  let {
    applicationId: c,
    guildId: o,
    selectedChannelId: h,
    setSelectedChannelId: x,
    enableSelectedTextChannelInvite: C
  } = e, _ = (0, n.useStateFromStores)([d.default], () => d.default.useReducedMotion), N = (0, n.useStateFromStores)([v.default], () => v.default.getChannel(h)), D = (0, S.useActivityShelfItemData)(null != o ? o : null, null != c ? c : "", N), [b, R] = a.useState(C && !u.default.disableInviteWithTextChannelActivityLaunch), O = (0, p.useSelectVoiceChannelOptions)(o);
  a.useEffect(() => {
    var e;
    T.fetchShelf({
      guildId: o
    }), x(null !== (e = (0, p.getActivityVoiceChannelSuggestion)({
      guildId: o
    })) && void 0 !== e ? e : void 0)
  }, [o, x]);
  let F = null == D ? void 0 : D.activity.activity_preview_video_asset_id,
    H = null != F ? (0, A.default)(null !== (t = null == D ? void 0 : D.application.id) && void 0 !== t ? t : "", F) : null,
    {
      url: B
    } = (0, g.default)({
      applicationId: null !== (l = null == D ? void 0 : D.application.id) && void 0 !== l ? l : "",
      size: 1024,
      names: V
    }),
    Y = (0, n.useStateFromStores)([f.default], () => f.default.getGuild(o)),
    k = (0, n.useStateFromStores)([v.default, I.default], () => v.default.getChannel(I.default.getChannelId())),
    w = L(null != o ? o : void 0);
  if ((null == D ? void 0 : D.application) == null || null == Y) return null;
  let P = (null == k ? void 0 : k.name) == null || (null == k ? void 0 : k.name) === "" ? y.default.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : "#".concat(k.name);
  return (0, i.jsxs)(s.Scroller, {
    className: M.scroll,
    children: [null != H || null != B ? (0, i.jsx)(m.default, {
      aspectRatio: 16 / 9,
      className: M.imageContainer,
      children: (0, i.jsx)(E.default, {
        className: M.video,
        src: H,
        loop: !0,
        autoPlay: !_,
        poster: B,
        muted: !0
      })
    }) : null, (0, i.jsxs)("div", {
      className: M.descriptionArea,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: null == D ? void 0 : D.application.name
      }), (0, i.jsx)(s.Text, {
        className: M.descriptionAreaSubtext,
        variant: "text-md/normal",
        children: null == D ? void 0 : D.application.description
      })]
    }), (0, i.jsx)(s.Select, {
      placeholder: y.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
      optionClassName: M.__invalid_option,
      options: O,
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
        return x(t.id)
      },
      serialize: e => {
        let {
          channel: t
        } = e;
        return t.id
      },
      renderOptionValue: () => {
        let e = O.find(e => e.value.channel.id === h);
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
    }), w && C ? (0, i.jsxs)(s.Clickable, {
      className: M.checkboxContainer,
      onClick: () => {
        let e = !b;
        r.default.updatedUnsyncedSettings({
          disableInviteWithTextChannelActivityLaunch: !e
        }), R(e)
      },
      children: [(0, i.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: M.checkbox,
        value: b,
        displayOnly: !0
      }), (0, i.jsxs)(s.Text, {
        variant: "text-sm/normal",
        children: [y.default.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, " ", (0, i.jsx)("strong", {
          children: P
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
    onClose: d,
    selectedChannelId: f,
    enableSelectedTextChannelInvite: h
  } = e, {
    analyticsLocations: m
  } = (0, o.default)(c.default.ACTIVITY_CHANNEL_SELECTOR), E = (0, n.useStateFromStores)([v.default], () => v.default.getChannel(f)), p = (0, S.useActivityShelfItemData)(null != l ? l : null, null != t ? t : null, E), A = (0, _.default)(), g = (0, n.useStateFromStores)([v.default, I.default], () => v.default.getChannel(I.default.getChannelId())), j = (0, n.useStateFromStores)([u.default], () => h && !u.default.disableInviteWithTextChannelActivityLaunch), V = (0, n.useStateFromStores)([x.default], () => null != f && "" !== f && x.default.getEmbeddedActivitiesForChannel(f).some(e => e.applicationId === t)), b = L(l), R = async () => {
    var e;
    if (null != f && "" !== f && null != p && null != l && "" !== l) await (0, C.default)({
      targetApplicationId: null === (e = p.application) || void 0 === e ? void 0 : e.id,
      currentEmbeddedApplication: A,
      locationObject: a,
      channelId: f,
      guildId: l,
      embeddedActivitiesManager: N.default,
      analyticsLocations: m
    }) && (d(), null != g && b && j && await T.sendEmbeddedActivityInvite({
      activityChannelId: f,
      invitedChannelId: g.id,
      applicationId: p.application.id,
      location: D.AnalyticsLocations.ACTIVITY_SHELF
    }))
  };
  return (0, i.jsx)(o.AnalyticsLocationProvider, {
    value: m,
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
        onClick: R,
        color: V ? s.Button.Colors.GREEN : void 0,
        fullWidth: !0,
        children: V ? y.default.Messages.EMBEDDED_ACTIVITIES_JOIN : y.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH
      })]
    })
  })
}