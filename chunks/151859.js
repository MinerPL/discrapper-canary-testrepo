"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("419830"),
  u = n("267567"),
  o = n("42203"),
  d = n("305961"),
  c = n("697218"),
  E = n("718550"),
  f = n("189443"),
  h = n("841363"),
  v = n("93550"),
  m = n("617347"),
  N = n("745049"),
  _ = n("782340"),
  I = n("973976");

function T(e) {
  var t, n, T;
  let {
    guildId: x,
    guildEvent: C,
    guildEventId: g,
    error: S
  } = e, p = a.useMemo(() => (0, f.convertToFakeGuildEvent)(C, x), [C, x]), {
    channel_id: A,
    name: L,
    image: y,
    description: M
  } = p, j = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(A), [A]), R = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(x), [x]), D = (0, h.getLocationFromEvent)(p), G = (0, s.useStateFromStores)([c.default], () => null != C.creatorId ? c.default.getUser(C.creatorId) : c.default.getCurrentUser(), [C.creatorId]), V = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(x), [x]), O = (0, r.getChannelIconComponent)(j, R);
  return (0, l.jsxs)("div", {
    className: I.content,
    children: [(0, l.jsx)(m.default, {
      className: I.previewCard,
      guild: R,
      channel: j,
      location: null != D ? D : void 0,
      creator: G,
      name: L,
      description: M,
      imageSource: (n = (0, f.convertToFakeGuildEvent)(C, x, g), null == (T = y) && null == n.image ? null : null != T && /^data:/.test(T) ? T : (0, v.default)(n)),
      isActive: !1,
      isUserLurking: V,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEventId: N.FAKE_EVENT_ID,
      eventPreview: p
    }), (0, l.jsxs)("div", {
      className: I.textContainer,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: _.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, l.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: I.subheader,
        children: null != location ? _.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : _.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == j ? void 0 : j.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, l.jsxs)("div", {
              className: I.channelName,
              children: [null != O ? (0, l.jsx)(O, {
                width: 20,
                height: 20,
                className: I.icon
              }) : (0, l.jsx)(E.default, {
                height: 18,
                width: 18,
                className: I.locationIcon
              }), null !== (e = null == j ? void 0 : j.name) && void 0 !== e ? e : D]
            })
          }
        })
      }), null != S && (0, l.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: I.subheader,
        children: S.getAnyErrorMessage()
      })]
    })]
  })
}