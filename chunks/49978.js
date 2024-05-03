"use strict";
l.r(t), l.d(t, {
  ChannelSelectorFooter: function() {
    return O
  },
  default: function() {
    return R
  }
}), l("47120");
var i = l("735250"),
  a = l("470079"),
  n = l("442837"),
  s = l("481060"),
  r = l("153867"),
  d = l("607070"),
  o = l("100527"),
  c = l("906732"),
  u = l("740492"),
  v = l("592125"),
  f = l("430824"),
  h = l("496675"),
  I = l("944486"),
  m = l("368874"),
  E = l("810090"),
  C = l("566620"),
  T = l("317381"),
  x = l("266820"),
  S = l("678173"),
  p = l("696068"),
  A = l("361213"),
  _ = l("952561"),
  g = l("778569"),
  N = l("513202"),
  j = l("412019"),
  y = l("981631"),
  D = l("689938"),
  M = l("25695");

function L(e) {
  return (0, n.useStateFromStores)([f.default, h.default], () => {
    let t = f.default.getGuild(e);
    return null != t && h.default.can(y.Permissions.CREATE_INSTANT_INVITE, t)
  }, [e])
}
let V = ["embedded_background"];

function R(e) {
  var t, l;
  let {
    applicationId: o,
    guildId: c,
    selectedChannelId: h,
    setSelectedChannelId: T,
    enableSelectedTextChannelInvite: x
  } = e, _ = (0, n.useStateFromStores)([d.default], () => d.default.useReducedMotion), N = (0, n.useStateFromStores)([v.default], () => v.default.getChannel(h)), y = (0, S.useActivityShelfItemData)(null != c ? c : null, null != o ? o : "", N), [R, O] = a.useState(x && !u.default.disableInviteWithTextChannelActivityLaunch), b = (0, p.useSelectVoiceChannelOptions)(c);
  a.useEffect(() => {
    var e;
    C.fetchShelf({
      guildId: c
    }), T(null !== (e = (0, p.getActivityVoiceChannelSuggestion)({
      guildId: c
    })) && void 0 !== e ? e : void 0)
  }, [c, T]);
  let H = null == y ? void 0 : y.activity.activity_preview_video_asset_id,
    F = null != H ? (0, A.default)(null !== (t = null == y ? void 0 : y.application.id) && void 0 !== t ? t : "", H) : null,
    {
      url: B
    } = (0, g.default)({
      applicationId: null !== (l = null == y ? void 0 : y.application.id) && void 0 !== l ? l : "",
      size: 1024,
      names: V
    }),
    Y = (0, n.useStateFromStores)([f.default], () => f.default.getGuild(c)),
    w = (0, n.useStateFromStores)([v.default, I.default], () => v.default.getChannel(I.default.getChannelId())),
    k = L(null != c ? c : void 0);
  if ((null == y ? void 0 : y.application) == null || null == Y) return null;
  let P = (null == w ? void 0 : w.name) == null || (null == w ? void 0 : w.name) === "" ? D.default.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : "#".concat(w.name);
  return (0, i.jsxs)(s.Scroller, {
    className: M.scroll,
    children: [null != F || null != B ? (0, i.jsx)(m.default, {
      aspectRatio: 16 / 9,
      className: M.imageContainer,
      children: (0, i.jsx)(E.default, {
        className: M.video,
        src: F,
        loop: !0,
        autoPlay: !_,
        poster: B,
        muted: !0
      })
    }) : null, (0, i.jsxs)("div", {
      className: M.descriptionArea,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        children: null == y ? void 0 : y.application.name
      }), (0, i.jsx)(s.Text, {
        className: M.descriptionAreaSubtext,
        variant: "text-md/normal",
        children: null == y ? void 0 : y.application.description
      })]
    }), (0, i.jsx)(s.Select, {
      placeholder: D.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
      optionClassName: M.__invalid_option,
      options: b,
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
        let e = b.find(e => e.value.channel.id === h);
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
    }), k && x ? (0, i.jsxs)(s.Clickable, {
      className: M.checkboxContainer,
      onClick: () => {
        let e = !R;
        r.default.updatedUnsyncedSettings({
          disableInviteWithTextChannelActivityLaunch: !e
        }), O(e)
      },
      children: [(0, i.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: M.checkbox,
        value: R,
        displayOnly: !0
      }), (0, i.jsxs)(s.Text, {
        variant: "text-sm/normal",
        children: [D.default.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE, " ", (0, i.jsx)("strong", {
          children: P
        })]
      })]
    }) : null]
  })
}

function O(e) {
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
  } = (0, c.default)(o.default.ACTIVITY_CHANNEL_SELECTOR), E = (0, n.useStateFromStores)([v.default], () => v.default.getChannel(f)), p = (0, S.useActivityShelfItemData)(null != l ? l : null, null != t ? t : null, E), A = (0, _.default)(), g = (0, n.useStateFromStores)([v.default, I.default], () => v.default.getChannel(I.default.getChannelId())), j = (0, n.useStateFromStores)([u.default], () => h && !u.default.disableInviteWithTextChannelActivityLaunch), V = (0, n.useStateFromStores)([T.default], () => null != f && "" !== f && T.default.getEmbeddedActivitiesForChannel(f).some(e => e.applicationId === t)), R = L(l), O = async () => {
    var e;
    if (null != f && "" !== f && null != p && null != l && "" !== l) await (0, x.default)({
      targetApplicationId: null === (e = p.application) || void 0 === e ? void 0 : e.id,
      currentEmbeddedApplication: A,
      locationObject: a,
      channelId: f,
      guildId: l,
      embeddedActivitiesManager: N.default,
      analyticsLocations: m
    }) && (d(), null != g && R && j && await C.sendEmbeddedActivityInvite({
      activityChannelId: f,
      invitedChannelId: g.id,
      applicationId: p.application.id,
      location: y.AnalyticsLocations.ACTIVITY_SHELF
    }))
  };
  return (0, i.jsx)(c.AnalyticsLocationProvider, {
    value: m,
    children: (0, i.jsxs)("div", {
      className: M.footerContainer,
      children: [(0, i.jsx)(s.Clickable, {
        onClick: r,
        className: M.backToBrowse,
        children: (0, i.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          children: D.default.Messages.BACK
        })
      }), null == f ? (0, i.jsx)("div", {}) : (0, i.jsx)(s.Button, {
        className: M.launchButton,
        onClick: O,
        color: V ? s.Button.Colors.GREEN : void 0,
        fullWidth: !0,
        children: V ? D.default.Messages.EMBEDDED_ACTIVITIES_JOIN : D.default.Messages.EMBEDDED_ACTIVITIES_LAUNCH
      })]
    })
  })
}