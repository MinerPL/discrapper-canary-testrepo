t.d(n, {
  Z: function() {
return L;
  },
  q: function() {
return O;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  l = t(442837),
  s = t(481060),
  r = t(153867),
  o = t(607070),
  c = t(100527),
  d = t(906732),
  u = t(740492),
  g = t(592125),
  p = t(430824),
  v = t(496675),
  m = t(944486),
  x = t(368874),
  I = t(810090),
  f = t(566620),
  _ = t(317381),
  h = t(146936),
  C = t(678173),
  T = t(696068),
  E = t(361213),
  S = t(952561),
  j = t(778569),
  N = t(513202),
  b = t(412019),
  M = t(981631),
  A = t(689938),
  Z = t(99877);

function y(e) {
  return (0, l.e7)([
p.Z,
v.Z
  ], () => {
let n = p.Z.getGuild(e);
return null != n && v.Z.can(M.Plq.CREATE_INSTANT_INVITE, n);
  }, [e]);
}
let D = ['embedded_background'];

function L(e) {
  var n, t;
  let {
applicationId: c,
guildId: d,
selectedChannelId: v,
setSelectedChannelId: _,
enableSelectedTextChannelInvite: h
  } = e, S = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), N = (0, l.e7)([g.Z], () => g.Z.getChannel(v)), M = (0, C.T)(null != d ? d : null, null != c ? c : '', N), [L, O] = a.useState(h && !u.ZP.disableInviteWithTextChannelActivityLaunch), B = (0, T.F)(d);
  a.useEffect(() => {
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
  let V = null == M ? void 0 : M.activity.activity_preview_video_asset_id,
R = null != V ? (0, E.Z)(null !== (n = null == M ? void 0 : M.application.id) && void 0 !== n ? n : '', V) : null,
{
  url: k
} = (0, j.Z)({
  applicationId: null !== (t = null == M ? void 0 : M.application.id) && void 0 !== t ? t : '',
  size: 1024,
  names: D
}),
H = (0, l.e7)([p.Z], () => p.Z.getGuild(d)),
P = (0, l.e7)([
  g.Z,
  m.Z
], () => g.Z.getChannel(m.Z.getChannelId())),
F = y(null != d ? d : void 0);
  if ((null == M ? void 0 : M.application) == null || null == H)
return null;
  let Y = (null == P ? void 0 : P.name) == null || (null == P ? void 0 : P.name) === '' ? A.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(P.name);
  return (0, i.jsxs)(s.Scroller, {
className: Z.scroll,
children: [
  null != R || null != k ? (0, i.jsx)(x.Z, {
    aspectRatio: 16 / 9,
    className: Z.imageContainer,
    children: (0, i.jsx)(I.Z, {
      className: Z.video,
      src: R,
      loop: !0,
      autoPlay: !S,
      poster: k,
      muted: !0
    })
  }) : null,
  (0, i.jsxs)('div', {
    className: Z.descriptionArea,
    children: [
      (0, i.jsx)(s.Heading, {
        variant: 'heading-xl/semibold',
        children: null == M ? void 0 : M.application.name
      }),
      (0, i.jsx)(s.Text, {
        className: Z.descriptionAreaSubtext,
        variant: 'text-md/normal',
        children: null == M ? void 0 : M.application.description
      })
    ]
  }),
  (0, i.jsx)(s.Select, {
    placeholder: A.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
    optionClassName: Z.__invalid_option,
    options: B,
    isSelected: e => {
      let {
        channel: n
      } = e;
      return n.id === v;
    },
    select: e => {
      let {
        channel: n
      } = e;
      return _(n.id);
    },
    serialize: e => {
      let {
        channel: n
      } = e;
      return n.id;
    },
    renderOptionValue: () => {
      let e = B.find(e => e.value.channel.id === v);
      return null == e ? null : (0, i.jsx)(b.O, {
        channel: e.value.channel,
        users: e.value.users
      });
    },
    renderOptionLabel: e => {
      let {
        value: {
          channel: n,
          users: t
        }
      } = e;
      return (0, i.jsx)(b.O, {
        channel: n,
        users: t
      });
    }
  }),
  F && h ? (0, i.jsxs)(s.Clickable, {
    className: Z.checkboxContainer,
    onClick: () => {
      let e = !L;
      r.ZP.updatedUnsyncedSettings({
        disableInviteWithTextChannelActivityLaunch: !e
      }), O(e);
    },
    children: [
      (0, i.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: Z.checkbox,
        value: L,
        displayOnly: !0
      }),
      (0, i.jsxs)(s.Text, {
        variant: 'text-sm/normal',
        children: [
          A.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
          ' ',
          (0, i.jsx)('strong', {
            children: Y
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
applicationId: n,
guildId: t,
locationObject: a,
onBack: r,
onClose: o,
selectedChannelId: p,
enableSelectedTextChannelInvite: v
  } = e, {
analyticsLocations: x
  } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR), I = (0, l.e7)([g.Z], () => g.Z.getChannel(p)), T = (0, C.T)(null != t ? t : null, null != n ? n : null, I), E = (0, S.Z)(), j = (0, l.e7)([
g.Z,
m.Z
  ], () => g.Z.getChannel(m.Z.getChannelId())), b = (0, l.e7)([u.ZP], () => v && !u.ZP.disableInviteWithTextChannelActivityLaunch), D = (0, l.e7)([_.ZP], () => null != p && '' !== p && _.ZP.getEmbeddedActivitiesForChannel(p).some(e => e.applicationId === n)), L = y(t), O = async () => {
var e;
if (null != p && '' !== p && null != T && null != t && '' !== t)
  await (0, h.Z)({
    targetApplicationId: null === (e = T.application) || void 0 === e ? void 0 : e.id,
    currentEmbeddedApplication: E,
    locationObject: a,
    channelId: p,
    guildId: t,
    embeddedActivitiesManager: N.Z,
    analyticsLocations: x
  }) && (o(), null != j && L && b && await f.sN({
    activityChannelId: p,
    invitedChannelId: j.id,
    applicationId: T.application.id,
    location: M.Sbl.ACTIVITY_SHELF
  }));
  };
  return (0, i.jsx)(d.Gt, {
value: x,
children: (0, i.jsxs)('div', {
  className: Z.footerContainer,
  children: [
    (0, i.jsx)(s.Clickable, {
      onClick: r,
      className: Z.backToBrowse,
      children: (0, i.jsx)(s.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        children: A.Z.Messages.BACK
      })
    }),
    null == p ? (0, i.jsx)('div', {}) : (0, i.jsx)(s.Button, {
      className: Z.launchButton,
      onClick: O,
      color: D ? s.Button.Colors.GREEN : void 0,
      fullWidth: !0,
      children: D ? A.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : A.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
    })
  ]
})
  });
}