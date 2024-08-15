n.d(t, {
  Z: function() {
return y;
  },
  q: function() {
return D;
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
  u = n(264165),
  g = n(70097),
  v = n(740492),
  m = n(592125),
  p = n(430824),
  f = n(496675),
  I = n(944486),
  x = n(566620),
  _ = n(317381),
  h = n(122613),
  C = n(678173),
  T = n(696068),
  E = n(361213),
  S = n(778569),
  b = n(412019),
  N = n(981631),
  j = n(689938),
  M = n(617010);

function A(e) {
  return (0, l.e7)([
p.Z,
f.Z
  ], () => {
let t = p.Z.getGuild(e);
return null != t && f.Z.can(N.Plq.CREATE_INSTANT_INVITE, t);
  }, [e]);
}
let Z = ['embedded_background'];

function y(e) {
  var t, n;
  let {
applicationId: c,
guildId: d,
selectedChannelId: f,
setSelectedChannelId: _,
enableSelectedTextChannelInvite: h
  } = e, N = (0, l.e7)([o.Z], () => o.Z.useReducedMotion), y = (0, C.T)(null != d ? d : null, null != c ? c : null), [D, L] = i.useState(h && !v.ZP.disableInviteWithTextChannelActivityLaunch), O = (0, T.F)(d);
  i.useEffect(() => {
var e;
x.w1({
  guildId: d
}), _(null !== (e = (0, T.d)({
  guildId: d
})) && void 0 !== e ? e : void 0);
  }, [
d,
_
  ]);
  let B = null == y ? void 0 : y.activity.activity_preview_video_asset_id,
V = null != B ? (0, E.Z)(null !== (t = null == y ? void 0 : y.application.id) && void 0 !== t ? t : '', B) : null,
{
  url: R
} = (0, S.Z)({
  applicationId: null !== (n = null == y ? void 0 : y.application.id) && void 0 !== n ? n : '',
  size: 1024,
  names: Z
}),
k = (0, l.e7)([p.Z], () => p.Z.getGuild(d)),
P = (0, l.e7)([
  m.Z,
  I.Z
], () => m.Z.getChannel(I.Z.getChannelId())),
H = A(null != d ? d : void 0);
  if ((null == y ? void 0 : y.application) == null || null == k)
return null;
  let F = (null == P ? void 0 : P.name) == null || (null == P ? void 0 : P.name) === '' ? j.Z.Messages.EMBEDDED_ACTIVITIES_FALLBACK_CHANNEL_NAME : '#'.concat(P.name);
  return (0, a.jsxs)(s.Scroller, {
className: M.scroll,
children: [
  null != V || null != R ? (0, a.jsx)(u.Z, {
    aspectRatio: 16 / 9,
    className: M.imageContainer,
    children: (0, a.jsx)(g.Z, {
      className: M.video,
      src: V,
      loop: !0,
      autoPlay: !N,
      poster: R,
      muted: !0
    })
  }) : null,
  (0, a.jsxs)('div', {
    className: M.descriptionArea,
    children: [
      (0, a.jsx)(s.Heading, {
        variant: 'heading-xl/semibold',
        children: null == y ? void 0 : y.application.name
      }),
      (0, a.jsx)(s.Text, {
        className: M.descriptionAreaSubtext,
        variant: 'text-md/normal',
        children: null == y ? void 0 : y.application.description
      })
    ]
  }),
  (0, a.jsx)(s.Select, {
    placeholder: j.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
    optionClassName: M.__invalid_option,
    options: O,
    isSelected: e => {
      let {
        channel: t
      } = e;
      return t.id === f;
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
      let e = O.find(e => e.value.channel.id === f);
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
  H && h ? (0, a.jsxs)(s.Clickable, {
    className: M.checkboxContainer,
    onClick: () => {
      let e = !D;
      r.ZP.updatedUnsyncedSettings({
        disableInviteWithTextChannelActivityLaunch: !e
      }), L(e);
    },
    children: [
      (0, a.jsx)(s.Checkbox, {
        type: s.Checkbox.Types.INVERTED,
        className: M.checkbox,
        value: D,
        displayOnly: !0
      }),
      (0, a.jsxs)(s.Text, {
        variant: 'text-sm/normal',
        children: [
          j.Z.Messages.EMBEDDED_ACTIVITIES_SEND_ACTIVITY_INVITE,
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

function D(e) {
  let {
applicationId: t,
guildId: n,
locationObject: i,
onBack: r,
onClose: o,
selectedChannelId: u,
enableSelectedTextChannelInvite: g
  } = e, {
analyticsLocations: p
  } = (0, d.ZP)(c.Z.ACTIVITY_CHANNEL_SELECTOR), f = (0, C.T)(null != n ? n : null, null != t ? t : null), T = (0, l.e7)([
m.Z,
I.Z
  ], () => m.Z.getChannel(I.Z.getChannelId())), E = (0, l.e7)([v.ZP], () => g && !v.ZP.disableInviteWithTextChannelActivityLaunch), S = (0, l.e7)([_.ZP], () => null != u && '' !== u && _.ZP.getEmbeddedActivitiesForChannel(u).some(e => e.applicationId === t)), b = A(n), Z = async () => {
var e;
if (null != u && '' !== u && null != f && null != n && '' !== n)
  await (0, h.Z)({
    targetApplicationId: null === (e = f.application) || void 0 === e ? void 0 : e.id,
    locationObject: i,
    channelId: u,
    analyticsLocations: p
  }) && (o(), null != T && b && E && await x.sN({
    activityChannelId: u,
    invitedChannelId: T.id,
    applicationId: f.application.id,
    location: N.Sbl.ACTIVITY_SHELF
  }));
  };
  return (0, a.jsx)(d.Gt, {
value: p,
children: (0, a.jsxs)('div', {
  className: M.footerContainer,
  children: [
    (0, a.jsx)(s.Clickable, {
      onClick: r,
      className: M.backToBrowse,
      children: (0, a.jsx)(s.Text, {
        color: 'header-secondary',
        variant: 'text-md/normal',
        children: j.Z.Messages.BACK
      })
    }),
    null == u ? (0, a.jsx)('div', {}) : (0, a.jsx)(s.Button, {
      className: M.launchButton,
      onClick: Z,
      color: S ? s.Button.Colors.GREEN : void 0,
      fullWidth: !0,
      children: S ? j.Z.Messages.EMBEDDED_ACTIVITIES_JOIN : j.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH
    })
  ]
})
  });
}