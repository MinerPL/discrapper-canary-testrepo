l.d(n, {
  Z: function() {
return T;
  }
});
var s = l(735250),
  a = l(470079),
  t = l(442837),
  i = l(481060),
  r = l(471445),
  o = l(41776),
  d = l(592125),
  c = l(430824),
  u = l(594174),
  E = l(236373),
  _ = l(230900),
  I = l(405613),
  x = l(460838),
  m = l(689938),
  N = l(98758);

function T(e) {
  var n, l, T;
  let {
guildId: h,
guildEvent: g,
guildEventId: v,
error: S
  } = e, C = a.useMemo(() => (0, E.Gb)(g, h), [
g,
h
  ]), {
channel_id: L,
name: A,
image: Z,
description: f
  } = C, j = (0, t.e7)([d.Z], () => d.Z.getChannel(L), [L]), M = (0, t.e7)([c.Z], () => c.Z.getGuild(h), [h]), D = (0, _.cS)(C), R = (0, t.e7)([u.default], () => null != g.creatorId ? u.default.getUser(g.creatorId) : u.default.getCurrentUser(), [g.creatorId]), p = (0, t.e7)([o.Z], () => o.Z.isLurking(h), [h]), V = (0, r.KS)(j, M);
  return (0, s.jsxs)('div', {
className: N.content,
children: [
  (0, s.jsx)(x.Z, {
    className: N.previewCard,
    guild: M,
    channel: j,
    location: null != D ? D : void 0,
    creator: R,
    name: A,
    description: f,
    imageSource: (l = (0, E.Gb)(g, h, v), null == (T = Z) && null == l.image ? null : null != T && /^data:/.test(T) ? T : (0, I.Z)(l)),
    isActive: !1,
    isUserLurking: p,
    speakers: [],
    speakerCount: 0,
    rsvped: !0,
    guildEvent: C,
    eventPreview: C
  }),
  (0, s.jsxs)('div', {
    className: N.textContainer,
    children: [
      (0, s.jsx)(i.Heading, {
        variant: 'heading-xl/semibold',
        children: m.Z.Messages.GUILD_EVENT_PREVIEW_TITLE
      }),
      (0, s.jsx)(i.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        className: N.subheader,
        children: null != location ? m.Z.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : m.Z.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (n = null == j ? void 0 : j.name) && void 0 !== n ? n : '',
          channelHook: () => {
            var e;
            return (0, s.jsxs)('div', {
              className: N.channelName,
              children: [
                null != V ? (0, s.jsx)(V, {
                  size: 'custom',
                  color: 'currentColor',
                  width: 20,
                  height: 20,
                  className: N.icon
                }) : (0, s.jsx)(i.LocationIcon, {
                  size: 'custom',
                  color: 'currentColor',
                  height: 18,
                  width: 18,
                  className: N.locationIcon
                }),
                null !== (e = null == j ? void 0 : j.name) && void 0 !== e ? e : D
              ]
            });
          }
        })
      }),
      null != S && (0, s.jsx)(i.Text, {
        color: 'text-danger',
        variant: 'text-xs/normal',
        className: N.subheader,
        children: S.getAnyErrorMessage()
      })
    ]
  })
]
  });
}