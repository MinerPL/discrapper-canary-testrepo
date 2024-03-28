"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
});
var a = l("735250");
l("470079");
var n = l("442837"),
  s = l("481060"),
  r = l("264229"),
  i = l("751499"),
  d = l("366980"),
  u = l("603236"),
  o = l("939863"),
  c = l("984933"),
  E = l("430824"),
  _ = l("341165"),
  f = l("305878"),
  T = l("465670"),
  h = l("626135"),
  I = l("572004"),
  N = l("971130"),
  m = l("230900"),
  x = l("981631"),
  v = l("689938"),
  g = l("382997");
let {
  INVITE_OPTIONS_7_DAYS: S,
  INVITE_OPTIONS_UNLIMITED: C
} = N.default;

function A(e) {
  var t, l, A;
  let {
    onClose: L,
    event: p
  } = e, M = null == p ? void 0 : p.guild_id, D = (0, n.useStateFromStores)([c.default], () => {
    var e;
    return null != M ? null === (e = c.default.getDefaultChannel(M)) || void 0 === e ? void 0 : e.id : null
  }, [M]), R = (0, n.useStateFromStores)([E.default], () => E.default.getGuild(M), [M]), j = (null == R ? void 0 : R.vanityURLCode) != null && (null == R ? void 0 : R.vanityURLCode.length) > 0, {
    enabled: y
  } = i.default.useExperiment({
    guildId: null != M ? M : x.EMPTY_STRING_SNOWFLAKE_ID,
    location: "bd50e8_1"
  }, {
    autoTrackExposure: j
  }), {
    channel_id: G,
    id: V
  } = null != p ? p : {}, U = (0, n.useStateFromStores)([_.default], () => {
    let e = null != G ? G : D;
    return null == e ? null : _.default.getInvite(e)
  }, [G, D]);
  if (null == p) return L(), null;
  let O = y && null !== (t = null == R ? void 0 : R.vanityURLCode) && void 0 !== t ? t : null == U ? void 0 : U.code,
    B = null != O ? (0, r.generateInviteKeyFromExtraData)({
      baseCode: O,
      guildScheduledEventId: V
    }) : null,
    b = null == B || null == U,
    F = (0, d.default)(null != B ? B : ""),
    P = null !== (l = null == U ? void 0 : U.maxAge) && void 0 !== l ? l : S.value,
    k = null !== (A = null == U ? void 0 : U.maxUses) && void 0 !== A ? A : C.value;
  return (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsx)(s.Clickable, {
      onClick: L,
      className: g.close,
      "aria-label": v.default.Messages.CLOSE,
      children: (0, a.jsx)(T.default, {})
    }), (0, a.jsx)(o.default, {
      children: (0, a.jsx)("div", {
        className: g.iconContainer,
        children: (0, a.jsx)(f.default, {
          height: 30,
          width: 30,
          className: g.icon
        })
      })
    }), (0, a.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: g.header,
      children: v.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.body,
      children: v.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, a.jsxs)("div", {
      className: g.invite,
      children: [(0, a.jsx)(u.RawInviteCopyInputConnected, {
        value: F,
        autoFocus: !1,
        onCopy: e => {
          if (b) return;
          (0, I.copy)(e);
          let t = (0, m.getChannelTypeFromEntity)(p.entity_type);
          h.default.track(x.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: p.guild_id,
            channel: G,
            channel_type: t,
            location: x.InstantInviteSources.GUILD_EVENTS,
            code: U.code,
            guild_scheduled_event_id: null == p ? void 0 : p.id
          })
        }
      }), (null == R ? void 0 : R.vanityURLCode) == null && (0, a.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: g.inviteDetail,
        children: (0, N.maxAgeString)(P, k)
      })]
    })]
  })
}