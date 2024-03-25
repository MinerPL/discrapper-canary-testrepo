"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("866227"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("679653"),
  d = n("42203"),
  c = n("305961"),
  E = n("957255"),
  f = n("27618"),
  h = n("697218"),
  v = n("718550"),
  m = n("368121"),
  N = n("944633"),
  _ = n("228427"),
  I = n("697468"),
  T = n("398604"),
  x = n("334683"),
  C = n("799547"),
  g = n("776863"),
  S = n("613767"),
  p = n("841363"),
  A = n("306939"),
  L = n("745049"),
  y = n("49111"),
  M = n("782340"),
  j = n("504067");
let R = e => e === L.GuildScheduledEventEntityTypes.EXTERNAL,
  D = (e, t) => {
    let n = d.default.getChannel(e);
    if (null == n) return null;
    let a = n.type === y.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, S.isChannelPublic)(n, t),
      i = s ? m.default : N.default,
      r = s ? _.default : I.default;
    return (0, l.jsx)(a ? r : i, {
      height: 24,
      className: j.channelOptionIcon
    })
  },
  G = e => {
    let {
      guildId: t,
      channelType: n,
      channel: a,
      onSelectChannel: s,
      disabled: i,
      entityType: r
    } = e, d = n === y.ChannelTypes.GUILD_STAGE_VOICE, c = (0, S.isChannelPublic)(a, r), E = (0, C.useGetEventChannelsByType)(t, n);
    return (0, l.jsxs)(u.FormItem, {
      title: d ? M.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : M.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: j.options,
      disabled: i,
      required: !0,
      children: [(0, l.jsx)(u.SearchableSelect, {
        value: null == a ? void 0 : a.id,
        options: E.map(e => ({
          value: e.id,
          label: (0, o.computeChannelName)(e, h.default, f.default, !0)
        })),
        onChange: e => {
          let t = E.find(t => t.id === e);
          s(null != t ? t : void 0)
        },
        renderOptionPrefix: e => D(null == e ? void 0 : e.value, r),
        isDisabled: i
      }), !c && (0, l.jsx)(u.Text, {
        color: "header-secondary",
        className: j.channelPrivate,
        variant: "text-sm/normal",
        children: M.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function V(e, t, n, l) {
  return t ? {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : n ? 0 === l && e !== L.GuildScheduledEventEntityTypes.EXTERNAL ? {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
  } : {
    disabled: !1,
    tooltipText: null
  } : {
    disabled: !0,
    tooltipText: M.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
  }
}
let O = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  U = e => t => {
    var n;
    e({
      channelId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : null
    })
  },
  B = (e, t) => n => {
    let {
      value: l
    } = n, a = {
      entityType: l,
      scheduledEndTime: void 0
    };
    if (R(l)) {
      var s;
      let e = (null !== (s = i(t.scheduledStartTime)) && void 0 !== s ? s : i()).add(2, "hour");
      a.scheduledEndTime = e.toISOString()
    }
    e(a)
  };

function b(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s,
    isFocusReady: i
  } = e, {
    entityType: o,
    channelId: c
  } = n, E = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(c), [c]), f = a.useRef(null);
  a.useEffect(() => {
    if (i && R(o)) {
      var e;
      null === (e = f.current) || void 0 === e || e.focus()
    }
  }, [i, o]);
  let h = O(s),
    v = U(s),
    m = (0, p.getLocationFromEventData)(n),
    N = (0, p.getChannelTypeFromEntity)(o),
    _ = (0, T.isGuildScheduledEventActive)(n);
  return null == o || o === L.GuildScheduledEventEntityTypes.NONE ? null : R(o) ? (0, l.jsx)(u.FormItem, {
    title: M.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: j.options,
    required: !0,
    children: (0, l.jsx)(u.TextInput, {
      className: j.textInput,
      onChange: h,
      placeholder: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: L.MAX_EVENT_LOCATION_LENGTH,
      value: null != m ? m : "",
      inputRef: f
    })
  }) : null == N ? null : (0, l.jsx)(G, {
    guildId: t,
    channelType: N,
    onSelectChannel: v,
    channel: E,
    entityType: o,
    disabled: _
  })
}

function P(e) {
  let {
    guildId: t,
    guildEvent: n,
    onChange: s
  } = e, i = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), o = (0, x.default)(t, void 0), d = (0, x.default)(t, y.ChannelTypes.GUILD_VOICE), E = (0, x.default)(t, y.ChannelTypes.GUILD_STAGE_VOICE), f = (0, C.useGetEventChannelsByType)(t, y.ChannelTypes.GUILD_VOICE), h = (0, g.useChannelsUserCanStartStageIn)(i), N = null == i ? void 0 : i.hasFeature(y.GuildFeatures.COMMUNITY), I = (0, T.isGuildScheduledEventActive)(n), S = B(s, n), p = a.useMemo(() => {
    let e = [{
      name: M.default.Messages.VOICE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.VOICE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: m.default,
      ...V(L.GuildScheduledEventEntityTypes.VOICE, I, d, f.length)
    }, {
      name: M.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: L.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: v.default,
      ...V(L.GuildScheduledEventEntityTypes.EXTERNAL, I, o, 0)
    }];
    return N ? [{
      name: M.default.Messages.STAGE_CHANNEL,
      value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: M.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: _.default,
      ...V(L.GuildScheduledEventEntityTypes.STAGE_INSTANCE, I, E, h.length)
    }, ...e] : e
  }, [o, d, E, N, f.length, h.length, I]);
  return (0, l.jsx)(u.RadioGroup, {
    value: n.entityType,
    options: p,
    onChange: S,
    className: j.options
  })
}

function F(e) {
  let {
    guildId: t,
    guildEvent: a,
    validationErrorMessage: s,
    onChange: i,
    isSlideReady: o = !1
  } = e, {
    entityType: d
  } = a, f = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), h = (0, g.useChannelsUserCanStartStageIn)(f), v = (0, r.useStateFromStores)([E.default], () => E.default.can(y.Permissions.MANAGE_CHANNELS, f)), m = null == f ? void 0 : f.hasFeature(y.GuildFeatures.COMMUNITY), N = B(i, a), _ = m && !R(d) && 0 === h.length && v && null != d;
  return (0, l.jsxs)("div", {
    className: j.container,
    children: [(0, l.jsx)(u.Heading, {
      variant: "heading-xl/semibold",
      className: j.header,
      children: M.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, l.jsx)(u.Text, {
      color: "header-secondary",
      className: j.text,
      variant: "text-sm/normal",
      children: M.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, l.jsx)(P, {
      guildId: t,
      guildEvent: a,
      onChange: i
    }), (0, l.jsx)(b, {
      guildId: t,
      guildEvent: a,
      isFocusReady: o,
      onChange: i
    }), _ ? (0, l.jsx)(A.default, {
      onClick: () => {
        N({
          value: L.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: M.default.Messages.STAGE_CHANNEL
        }), (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("581354").then(n.bind(n, "581354"));
          return n => (0, l.jsx)(e, {
            ...n,
            channelType: y.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}