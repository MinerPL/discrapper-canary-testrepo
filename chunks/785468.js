l.d(n, {
  Z: function() {
return O;
  }
}), l(47120);
var s = l(735250),
  a = l(470079),
  t = l(913527),
  i = l.n(t),
  r = l(442837),
  o = l(481060),
  d = l(933557),
  c = l(592125),
  u = l(430824),
  E = l(496675),
  _ = l(699516),
  I = l(594174),
  x = l(924301),
  N = l(518756),
  m = l(545165),
  T = l(77810),
  h = l(274311),
  g = l(230900),
  v = l(63712),
  S = l(765305),
  C = l(981631),
  L = l(689938),
  A = l(319840);
let Z = e => e === S.WX.EXTERNAL,
  f = (e, n) => {
let l = c.Z.getChannel(e);
if (null == l)
  return null;
let a = l.type === C.d4z.GUILD_STAGE_VOICE,
  t = (0, h.Q)(l, n),
  i = t ? o.VoiceNormalIcon : o.VoiceLockIcon,
  r = t ? o.StageIcon : o.StageLockIcon;
return (0, s.jsx)(a ? r : i, {
  color: 'currentColor',
  size: 'md',
  className: A.channelOptionIcon
});
  },
  j = e => {
let {
  guildId: n,
  channelType: l,
  channel: a,
  onSelectChannel: t,
  disabled: i,
  entityType: r
} = e, c = l === C.d4z.GUILD_STAGE_VOICE, u = (0, h.Q)(a, r), E = (0, m.sR)(n, l);
return (0, s.jsxs)(o.FormItem, {
  title: c ? L.Z.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : L.Z.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
  className: A.options,
  disabled: i,
  required: !0,
  children: [
    (0, s.jsx)(o.SearchableSelect, {
      value: null == a ? void 0 : a.id,
      options: E.map(e => ({
        value: e.id,
        label: (0, d.F6)(e, I.default, _.Z, !0)
      })),
      onChange: e => {
        let n = E.find(n => n.id === e);
        t(null != n ? n : void 0);
      },
      renderOptionPrefix: e => f(null == e ? void 0 : e.value, r),
      isDisabled: i
    }),
    !u && (0, s.jsx)(o.Text, {
      color: 'header-secondary',
      className: A.channelPrivate,
      variant: 'text-sm/normal',
      children: L.Z.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
    })
  ]
});
  };

function M(e, n, l, s) {
  return n ? {
disabled: !0,
tooltipText: L.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : l ? 0 === s && e !== S.WX.EXTERNAL ? {
disabled: !0,
tooltipText: L.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
  } : {
disabled: !1,
tooltipText: null
  } : {
disabled: !0,
tooltipText: L.Z.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
  };
}
let D = e => n => {
e({
  entityMetadata: {
    location: n
  }
});
  },
  p = e => n => {
var l;
e({
  channelId: null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : null
});
  },
  R = (e, n) => l => {
let {
  value: s
} = l, a = {
  entityType: s,
  scheduledEndTime: void 0
};
if (Z(s)) {
  var t;
  let e = (null !== (t = i()(n.scheduledStartTime)) && void 0 !== t ? t : i()()).add(2, 'hour');
  a.scheduledEndTime = e.toISOString();
}
e(a);
  };

function V(e) {
  let {
guildId: n,
guildEvent: l,
onChange: t,
isFocusReady: i
  } = e, {
entityType: d,
channelId: u
  } = l, E = (0, r.e7)([c.Z], () => c.Z.getChannel(u), [u]), _ = a.useRef(null);
  a.useEffect(() => {
if (i && Z(d)) {
  var e;
  null === (e = _.current) || void 0 === e || e.focus();
}
  }, [
i,
d
  ]);
  let I = D(t),
N = p(t),
m = (0, g.xV)(l),
T = (0, g.xC)(d),
h = (0, x.xt)(l);
  return null == d || d === S.WX.NONE ? null : Z(d) ? (0, s.jsx)(o.FormItem, {
title: L.Z.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
className: A.options,
required: !0,
children: (0, s.jsx)(o.TextInput, {
  className: A.__invalid_textInput,
  onChange: I,
  placeholder: L.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
  maxLength: S.gG,
  value: null != m ? m : '',
  inputRef: _
})
  }) : null == T ? null : (0, s.jsx)(j, {
guildId: n,
channelType: T,
onSelectChannel: N,
channel: E,
entityType: d,
disabled: h
  });
}

function G(e) {
  let {
guildId: n,
guildEvent: l,
onChange: t
  } = e, i = (0, r.e7)([u.Z], () => u.Z.getGuild(n), [n]), d = (0, N.Z)(n, void 0), c = (0, N.Z)(n, C.d4z.GUILD_VOICE), E = (0, N.Z)(n, C.d4z.GUILD_STAGE_VOICE), _ = (0, m.sR)(n, C.d4z.GUILD_VOICE), I = (0, T.q)(i), h = null == i ? void 0 : i.hasFeature(C.oNc.COMMUNITY), g = (0, x.xt)(l), v = R(t, l), Z = a.useMemo(() => {
let e = [{
    name: L.Z.Messages.VOICE_CHANNEL,
    value: S.WX.VOICE,
    desc: L.Z.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
    icon: o.VoiceNormalIcon,
    ...M(S.WX.VOICE, g, c, _.length)
  },
  {
    name: L.Z.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
    value: S.WX.EXTERNAL,
    desc: L.Z.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
    icon: o.LocationIcon,
    ...M(S.WX.EXTERNAL, g, d, 0)
  }
];
return h ? [{
    name: L.Z.Messages.STAGE_CHANNEL,
    value: S.WX.STAGE_INSTANCE,
    desc: L.Z.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
    icon: o.StageIcon,
    ...M(S.WX.STAGE_INSTANCE, g, E, I.length)
  },
  ...e
] : e;
  }, [
d,
c,
E,
h,
_.length,
I.length,
g
  ]);
  return (0, s.jsx)(o.RadioGroup, {
value: l.entityType,
options: Z,
onChange: v,
className: A.options
  });
}

function O(e) {
  let {
guildId: n,
guildEvent: a,
validationErrorMessage: t,
onChange: i,
isSlideReady: d = !1
  } = e, {
entityType: c
  } = a, _ = (0, r.e7)([u.Z], () => u.Z.getGuild(n), [n]), I = (0, T.q)(_), x = (0, r.e7)([E.Z], () => E.Z.can(C.Plq.MANAGE_CHANNELS, _)), N = null == _ ? void 0 : _.hasFeature(C.oNc.COMMUNITY), m = R(i, a), h = N && !Z(c) && 0 === I.length && x && null != c;
  return (0, s.jsxs)('div', {
className: A.container,
children: [
  (0, s.jsx)(o.Heading, {
    variant: 'heading-xl/semibold',
    className: A.header,
    children: L.Z.Messages.GUILD_EVENT_LOCATION_TITLE
  }),
  (0, s.jsx)(o.Text, {
    color: 'header-secondary',
    className: A.text,
    variant: 'text-sm/normal',
    children: L.Z.Messages.GUILD_EVENT_LOCATION_SUBTITLE
  }),
  (0, s.jsx)(G, {
    guildId: n,
    guildEvent: a,
    onChange: i
  }),
  (0, s.jsx)(V, {
    guildId: n,
    guildEvent: a,
    isFocusReady: d,
    onChange: i
  }),
  h ? (0, s.jsx)(v.Z, {
    onClick: () => {
      m({
        value: S.WX.STAGE_INSTANCE,
        name: L.Z.Messages.STAGE_CHANNEL
      }), (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([
          l.e('90508'),
          l.e('7590'),
          l.e('45094'),
          l.e('83079')
        ]).then(l.bind(l, 218613));
        return l => (0, s.jsx)(e, {
          ...l,
          channelType: C.d4z.GUILD_STAGE_VOICE,
          guildId: n
        });
      });
    }
  }) : null
]
  });
}