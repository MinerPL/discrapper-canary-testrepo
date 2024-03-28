"use strict";
l.r(t), l.d(t, {
  default: function() {
    return x
  }
});
var a = l("735250"),
  n = l("470079"),
  s = l("442837"),
  r = l("481060"),
  i = l("471445"),
  d = l("41776"),
  u = l("592125"),
  o = l("430824"),
  c = l("594174"),
  E = l("393112"),
  _ = l("236373"),
  f = l("230900"),
  T = l("405613"),
  h = l("460838"),
  I = l("765305"),
  N = l("689938"),
  m = l("18566");

function x(e) {
  var t, l, x;
  let {
    guildId: v,
    guildEvent: g,
    guildEventId: S,
    error: C
  } = e, A = n.useMemo(() => (0, _.convertToFakeGuildEvent)(g, v), [g, v]), {
    channel_id: L,
    name: p,
    image: M,
    description: D
  } = A, R = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(L), [L]), j = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(v), [v]), y = (0, f.getLocationFromEvent)(A), G = (0, s.useStateFromStores)([c.default], () => null != g.creatorId ? c.default.getUser(g.creatorId) : c.default.getCurrentUser(), [g.creatorId]), V = (0, s.useStateFromStores)([d.default], () => d.default.isLurking(v), [v]), U = (0, i.getChannelIconComponent)(R, j);
  return (0, a.jsxs)("div", {
    className: m.content,
    children: [(0, a.jsx)(h.default, {
      className: m.previewCard,
      guild: j,
      channel: R,
      location: null != y ? y : void 0,
      creator: G,
      name: p,
      description: D,
      imageSource: (l = (0, _.convertToFakeGuildEvent)(g, v, S), null == (x = M) && null == l.image ? null : null != x && /^data:/.test(x) ? x : (0, T.default)(l)),
      isActive: !1,
      isUserLurking: V,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEventId: I.FAKE_EVENT_ID,
      eventPreview: A
    }), (0, a.jsxs)("div", {
      className: m.textContainer,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: N.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, a.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: m.subheader,
        children: null != location ? N.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : N.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == R ? void 0 : R.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, a.jsxs)("div", {
              className: m.channelName,
              children: [null != U ? (0, a.jsx)(U, {
                width: 20,
                height: 20,
                className: m.icon
              }) : (0, a.jsx)(E.default, {
                height: 18,
                width: 18,
                className: m.locationIcon
              }), null !== (e = null == R ? void 0 : R.name) && void 0 !== e ? e : y]
            })
          }
        })
      }), null != C && (0, a.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: m.subheader,
        children: C.getAnyErrorMessage()
      })]
    })]
  })
}