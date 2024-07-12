n.d(t, {
  Z: function() {
return b;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(717881),
  d = n(58540),
  u = n(850827),
  h = n(258609),
  p = n(199902),
  m = n(314897),
  _ = n(430824),
  f = n(496675),
  E = n(158776),
  C = n(979651),
  g = n(387204),
  I = n(626135),
  x = n(382182),
  T = n(687516),
  v = n(718805),
  N = n(871118),
  S = n(981631),
  Z = n(689938),
  A = n(482831);
class M extends a.PureComponent {
  componentDidMount() {
let {
  user: e,
  streamApplication: t
} = this.props;
I.default.track(S.rMx.OPEN_POPOUT, {
  type: 'Stream Preview',
  other_user_id: e.id,
  application_id: null != t ? t.id : null,
  application_name: null != t ? t.name : null,
  game_id: null != t ? t.id : null,
  is_streaming: !0
});
  }
  renderPreview(e) {
let {
  onWatch: t,
  activeStream: n,
  currentUserId: a,
  canWatch: l,
  unavailableReason: s
} = this.props;
return (0, i.jsxs)(o.Clickable, {
  onClick: t,
  className: A.previewContainer,
  children: [
    (0, i.jsx)(N.Z, {
      className: A.previewImage,
      stream: e
    }),
    l ? (0, i.jsx)('div', {
      className: A.previewHover,
      children: (0, i.jsx)(o.Text, {
        variant: 'text-sm/normal',
        color: 'none',
        className: A.white,
        children: (0, v.Z)(e, n, a, s)
      })
    }) : null
  ]
});
  }
  render() {
let {
  activity: e,
  user: t,
  stream: n,
  previewIsOpen: a
} = this.props;
return null == n ? null : (0, i.jsx)('div', {
  className: s()(A.streamPreviewWrapper, {
    [A.mounted]: a
  }),
  children: (0, i.jsxs)('div', {
    className: A.streamPreview,
    children: [
      this.renderPreview(n),
      (0, i.jsxs)('div', {
        className: A.body,
        children: [
          null != e ? (0, i.jsx)(c.Z, {
            hideHeader: !0,
            type: c.P.STREAM_PREVIEW,
            activity: e,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            analyticsParams: {
              location: {
                page: S.ZY5.GO_LIVE_MODAL,
                section: S.jXE.STREAM_VIEWER_POPOUT
              }
            }
          }) : (0, i.jsx)(u.Z, {
            type: c.P.STREAM_PREVIEW,
            applicationStream: n,
            user: t,
            guildId: n.guildId,
            channelId: n.channelId,
            className: A.activityActions,
            color: A.watchButton
          }),
          (0, i.jsx)(g.Z, {
            type: g.Z.Types.INLINE,
            className: A.protip,
            children: __OVERLAY__ ? Z.Z.Messages.WATCH_STREAM_IN_APP : Z.Z.Messages.WATCH_STREAM_TIP
          })
        ]
      })
    ]
  })
});
  }
}

function b(e) {
  let {
user: t,
channel: n,
...l
  } = e, [s, o] = (0, r.Wu)([
C.Z,
_.Z,
f.Z,
h.Z
  ], () => (0, x.p9)(n, C.Z, _.Z, f.Z, h.Z)), c = (0, r.e7)([p.Z], () => p.Z.getStreamForUser(t.id, n.getGuildId())), u = (0, r.e7)([p.Z], () => p.Z.getActiveStreamForApplicationStream(c)), g = (0, r.e7)([m.default], () => m.default.getId()), I = (0, T.Cf)(c), v = (0, r.e7)([E.Z], () => (0, T.Um)(c, E.Z)), N = a.useMemo(() => ({
[n.guild_id]: [t.id]
  }), [
n.guild_id,
t.id
  ]);
  return (0, d.$)(N), (0, i.jsx)(M, {
...l,
canWatch: s,
unavailableReason: o,
user: t,
streamApplication: I,
stream: c,
activeStream: u,
currentUserId: g,
activity: v
  });
}