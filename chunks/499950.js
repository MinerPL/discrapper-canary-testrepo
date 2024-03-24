"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("9294"),
  r = n("512027"),
  u = n("52393"),
  o = n("652453"),
  d = n("119184"),
  c = n("923959"),
  E = n("305961"),
  f = n("330154"),
  h = n("943232"),
  v = n("945330"),
  m = n("599110"),
  N = n("306160"),
  _ = n("354023"),
  I = n("841363"),
  T = n("49111"),
  x = n("782340"),
  C = n("154585");
let {
  INVITE_OPTIONS_7_DAYS: g,
  INVITE_OPTIONS_UNLIMITED: S
} = _.default;

function p(e) {
  var t, n, p;
  let {
    onClose: A,
    event: L
  } = e, y = null == L ? void 0 : L.guild_id, M = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != y ? null === (e = c.default.getDefaultChannel(y)) || void 0 === e ? void 0 : e.id : null
  }, [y]), j = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(y), [y]), R = (null == j ? void 0 : j.vanityURLCode) != null && (null == j ? void 0 : j.vanityURLCode.length) > 0, {
    enabled: D
  } = r.default.useExperiment({
    guildId: null != y ? y : T.EMPTY_STRING_SNOWFLAKE_ID,
    location: "bd50e8_1"
  }, {
    autoTrackExposure: R
  }), {
    channel_id: G,
    id: V
  } = null != L ? L : {}, O = (0, a.useStateFromStores)([f.default], () => {
    let e = null != G ? G : M;
    return null == e ? null : f.default.getInvite(e)
  }, [G, M]);
  if (null == L) return A(), null;
  let U = D && null !== (t = null == j ? void 0 : j.vanityURLCode) && void 0 !== t ? t : null == O ? void 0 : O.code,
    B = null != U ? (0, i.generateInviteKeyFromExtraData)({
      baseCode: U,
      guildScheduledEventId: V
    }) : null,
    b = null == B || null == O,
    P = (0, u.default)(null != B ? B : ""),
    F = null !== (n = null == O ? void 0 : O.maxAge) && void 0 !== n ? n : g.value,
    w = null !== (p = null == O ? void 0 : O.maxUses) && void 0 !== p ? p : S.value;
  return (0, l.jsxs)("div", {
    className: C.container,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: A,
      className: C.close,
      "aria-label": x.default.Messages.CLOSE,
      children: (0, l.jsx)(v.default, {})
    }), (0, l.jsx)(d.default, {
      children: (0, l.jsx)("div", {
        className: C.iconContainer,
        children: (0, l.jsx)(h.default, {
          height: 30,
          width: 30,
          className: C.icon
        })
      })
    }), (0, l.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: C.header,
      children: x.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: C.body,
      children: x.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: C.invite,
      children: [(0, l.jsx)(o.RawInviteCopyInputConnected, {
        value: P,
        autoFocus: !1,
        onCopy: e => {
          if (b) return;
          (0, N.copy)(e);
          let t = (0, I.getChannelTypeFromEntity)(L.entity_type);
          m.default.track(T.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: L.guild_id,
            channel: G,
            channel_type: t,
            location: T.InstantInviteSources.GUILD_EVENTS,
            code: O.code,
            guild_scheduled_event_id: null == L ? void 0 : L.id
          })
        }
      }), (null == j ? void 0 : j.vanityURLCode) == null && (0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: C.inviteDetail,
        children: (0, _.maxAgeString)(F, w)
      })]
    })]
  })
}