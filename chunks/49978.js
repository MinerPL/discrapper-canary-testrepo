n.d(t, {
  Z: function() {
return L;
  },
  q: function() {
return O;
  }
}), n(47120);
var a = n(735250),
  i = n(470079),
  l = n(442837),
  s = n(481060),
  r = n(153867),
  o = n(607070),
  c = n(100527),
  d = n(906732),
  u = n(740492),
  g = n(592125),
  v = n(430824),
  m = n(496675),
  p = n(944486),
  x = n(368874),
  I = n(810090),
  f = n(566620),
  _ = n(317381),
  h = n(146936),
  C = n(678173),
  T = n(696068),
  E = n(361213),
  S = n(952561),
  j = n(778569),
  N = n(513202),
  b = n(412019),
  M = n(981631),
  A = n(689938),
  Z = n(99877);

function y(e) {
  return (0, l.e7)([
v.Z,
m.Z
  ], () => {
let t = v.Z.getGuild(e);
return null != t && m.Z.can(M.Plq.CREATE_INSTANT_INVITE, t);
  }, [e]);
}
let D = ['embedded_background'];

function L(e) {
  var t, n;
  let {
applicationId: c,
guildId: d,
selectedChannelId: m,
setSelectedChannelId: _,
enableSelectedTextChannelInvite: h
  } = e, S = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), N = (0, C.T)(null != d ? d : null, null != c ? c : null), [M, L] = i.useState(h && !u.ZP.disableInviteWithTextChannelActivityLaunch), O = (0, T.F)(d);
  i.useEffect(() => {
var e;
f.w1({
  guildId: d
}), _(null !== (e = (0, T.d)({
  guildId: d
})) && void 0 !== e ? e : void 0);
  }, [
d,
_
  ]);
  let B = null == N ? void 0 : N.activity.activity_preview_video_asset_id,
V = null != B ? (0, E.Z)(null !== (t = null == N ? void 0 : N.application.id) && void 0 !== t ? t : '', B) : null,
{
  url: R
} = (0, j.Z)({
  applicationId: null !== (n = null == N ? void 0 : N.application.id) && void 0 !== n ? n : '',
  size: 1024,
  names: D
}),
k = (0, l.e7)([v.Z], () => v.Z.getGuild(d)),
H = (0, l.e7)([
  g.Z,
  p.Z
], () => g.Z.getChannel(p.Z.getChannelId())),
P = y(null != d ? d : void 0);
  if ((null == N ? void 0 : N.application) == null || null == k)
return null;
  let F = (null == H ? void 0 : H.name) == null || (null == H ? void 0 : H.name) === '' ? A.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(H.name);
  return (0, a.jsxs)(s.Scroller, {
className: Z.scroll,
children: [
  null != V || null != R ? (0, a.jsx)(x.Z, {
    aspectRatio: 16 / 9,
    className: Z.imageContainer,
    children: (0, a.jsx)(I.Z, {
      className: Z.video,
      src: V,
      loop: !0,
      autoPlay: !S,
      poster: R,
      muted: !0
    })
  }) : null,
  (0, a.jsxs)('div', {
    className: Z.descriptionArea,
    children: [
      (0, a.jsx)(s.Heading, {
        variant: 'heading-xl/semibold',
        children: null == N ? void 0 : N.application.name
      }),
      (0, a.jsx)(s.Text, {
        className: Z.descriptionAreaSubtext,
        variant: 'text-md/normal',
        children: null == N ? void 0 : N.application.description
      })
    ]
  }),
  (0, a.jsx)(s.Select, {
    placeholder: A.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
    optionClassName: Z.__invalid_option,
    options: O,
    isSelected: e => {
      let {
        channel: t
      } = e;
      return t.id === m;
    },
    select: e => {
      let {
        channel: t
      } = e;
      return _(t.id);
    },
    serialize: e => {
      let {
        channel: t
      } = e;
      return t.id;
    },
    renderOptionValue: () => {
      let e = O.find(e => e.value.channel.id === m);
      return null == e ? null : (0, a.jsx)(b.O, {
        channel: e.value.channel,
        users: e.value.users
      });
    },
    renderOptionLabel: e => {
      let {
        value: {
          channel: t,
          users: n
        }
      } = e;
      return (0, a.jsx)(b.O, {
        channel: t,
        users: n
      });
    }
  }),
  P && h ? (0, a.jsxs)(s.Clickable, {
    className: Z.checkboxContainer,
    onClick: () => {
      let e = !M;
      r.ZP.updatedUnsyncedSettings({
        disableInviteWithTextChannelActivityLaunch: !e
      }), L(e);
    },
    children: [
      (0, a.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: Z.checkbox,
        value: M,
        displayOnly: !0
      }),
      (0, a.jsxs)(s.Text, {
        variant: 'text-sm/normal',
        children: [
          A.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
          ' ',
          (0, a.jsx)('strong', {
            children: F
          })
        ]
      })
    ]
  }) : null
]
  });
}

function O(e) {
  let {
applicationId: t,
guildId: n,
locationObject: i,
onBack: r,
onClose: o,
selectedChannelId: v,
enableSelectedTextChannelInvite: m
  } = e, {
analyticsLocations: x
  } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR), I = (0, C.T)(null != n ? n : null, null != t ? t : null), T = (0, S.Z)(), E = (0, l.e7)([
g.Z,
p.Z
  ], () => g.Z.getChannel(p.Z.getChannelId())), j = (0, l.e7)([u.ZP], () => m && !u.ZP.disableInviteWithTextChannelActivityLaunch), b = (0, l.e7)([_.ZP], () => null != v && '' !== v && _.ZP.getEmbeddedActivitiesForChannel(v).some(e => e.applicationId === t)), D = y(n), L = async () => {
var e;
if (null != v && '' !== v && null != I && null != n && '' !== n)
  await (0, h.Z)({
    targetApplicationId: null === (e = I.application) || void 0 === e ? void 0 : e.id,
    currentEmbeddedApplication: T,
    locationObject: i,
    channelId: v,
    guildId: n,
    embeddedActivitiesManager: N.Z,
    analyticsLocations: x
  }) && (o(), null != E && D && j && await f.sN({
    activityChannelId: v,
    invitedChannelId: E.id,
    applicationId: I.application.id,
    location: M.Sbl.ACTIVITY_SHELF
  }));
  };
  return (0, a.jsx)(d.Gt, {
value: x,
children: (0, a.jsxs)('div', {
  className: Z.footerContainer,
  children: [
    (0, a.jsx)(s.Clickable, {
      onClick: r,
      className: Z.backToBrowse,
      children: (0, a.jsx)(s.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        children: A.Z.Messages.BACK
      })
    }),
    null == v ? (0, a.jsx)('div', {}) : (0, a.jsx)(s.Button, {
      className: Z.launchButton,
      onClick: L,
      color: b ? s.Button.Colors.GREEN : void 0,
      fullWidth: !0,
      children: b ? A.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : A.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
    })
  ]
})
  });
}