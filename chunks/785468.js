"use strict";
l.r(t), l.d(t, {
  default: function() {
    return P
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("913527"),
  r = l.n(s),
  i = l("442837"),
  d = l("481060"),
  u = l("933557"),
  o = l("592125"),
  c = l("430824"),
  E = l("496675"),
  _ = l("699516"),
  f = l("594174"),
  T = l("393112"),
  h = l("632184"),
  I = l("414896"),
  N = l("170039"),
  m = l("178695"),
  x = l("924301"),
  v = l("518756"),
  g = l("545165"),
  S = l("77810"),
  C = l("274311"),
  A = l("230900"),
  L = l("63712"),
  p = l("765305"),
  M = l("981631"),
  D = l("689938"),
  R = l("295429");
let j = e => e === p.GuildScheduledEventEntityTypes.EXTERNAL,
  y = (e, t) => {
    let l = o.default.getChannel(e);
    if (null == l) return null;
    let n = l.type === M.ChannelTypes.GUILD_STAGE_VOICE,
      s = (0, C.isChannelPublic)(l, t),
      r = s ? h.default : I.default,
      i = s ? N.default : m.default;
    return (0, a.jsx)(n ? i : r, {
      height: 24,
      className: R.channelOptionIcon
    })
  },
  G = e => {
    let {
      guildId: t,
      channelType: l,
      channel: n,
      onSelectChannel: s,
      disabled: r,
      entityType: i
    } = e, o = l === M.ChannelTypes.GUILD_STAGE_VOICE, c = (0, C.isChannelPublic)(n, i), E = (0, g.useGetEventChannelsByType)(t, l);
    return (0, a.jsxs)(d.FormItem, {
      title: o ? D.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : D.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
      className: R.options,
      disabled: r,
      required: !0,
      children: [(0, a.jsx)(d.SearchableSelect, {
        value: null == n ? void 0 : n.id,
        options: E.map(e => ({
          value: e.id,
          label: (0, u.computeChannelName)(e, f.default, _.default, !0)
        })),
        onChange: e => {
          let t = E.find(t => t.id === e);
          s(null != t ? t : void 0)
        },
        renderOptionPrefix: e => y(null == e ? void 0 : e.value, i),
        isDisabled: r
      }), !c && (0, a.jsx)(d.Text, {
        color: "header-secondary",
        className: R.channelPrivate,
        variant: "text-sm/normal",
        children: D.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
      })]
    })
  };

function V(e, t, l, a) {
  return t ? {
    disabled: !0,
    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
  } : l ? 0 === a && e !== p.GuildScheduledEventEntityTypes.EXTERNAL ? {
    disabled: !0,
    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
  } : {
    disabled: !1,
    tooltipText: null
  } : {
    disabled: !0,
    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
  }
}
let U = e => t => {
    e({
      entityMetadata: {
        location: t
      }
    })
  },
  O = e => t => {
    var l;
    e({
      channelId: null !== (l = null == t ? void 0 : t.id) && void 0 !== l ? l : null
    })
  },
  B = (e, t) => l => {
    let {
      value: a
    } = l, n = {
      entityType: a,
      scheduledEndTime: void 0
    };
    if (j(a)) {
      var s;
      let e = (null !== (s = r()(t.scheduledStartTime)) && void 0 !== s ? s : r()()).add(2, "hour");
      n.scheduledEndTime = e.toISOString()
    }
    e(n)
  };

function b(e) {
  let {
    guildId: t,
    guildEvent: l,
    onChange: s,
    isFocusReady: r
  } = e, {
    entityType: u,
    channelId: c
  } = l, E = (0, i.useStateFromStores)([o.default], () => o.default.getChannel(c), [c]), _ = n.useRef(null);
  n.useEffect(() => {
    if (r && j(u)) {
      var e;
      null === (e = _.current) || void 0 === e || e.focus()
    }
  }, [r, u]);
  let f = U(s),
    T = O(s),
    h = (0, A.getLocationFromEventData)(l),
    I = (0, A.getChannelTypeFromEntity)(u),
    N = (0, x.isGuildScheduledEventActive)(l);
  return null == u || u === p.GuildScheduledEventEntityTypes.NONE ? null : j(u) ? (0, a.jsx)(d.FormItem, {
    title: D.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
    className: R.options,
    required: !0,
    children: (0, a.jsx)(d.TextInput, {
      className: R.__invalid_textInput,
      onChange: f,
      placeholder: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
      maxLength: p.MAX_EVENT_LOCATION_LENGTH,
      value: null != h ? h : "",
      inputRef: _
    })
  }) : null == I ? null : (0, a.jsx)(G, {
    guildId: t,
    channelType: I,
    onSelectChannel: T,
    channel: E,
    entityType: u,
    disabled: N
  })
}

function F(e) {
  let {
    guildId: t,
    guildEvent: l,
    onChange: s
  } = e, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), u = (0, v.default)(t, void 0), o = (0, v.default)(t, M.ChannelTypes.GUILD_VOICE), E = (0, v.default)(t, M.ChannelTypes.GUILD_STAGE_VOICE), _ = (0, g.useGetEventChannelsByType)(t, M.ChannelTypes.GUILD_VOICE), f = (0, S.useChannelsUserCanStartStageIn)(r), I = null == r ? void 0 : r.hasFeature(M.GuildFeatures.COMMUNITY), m = (0, x.isGuildScheduledEventActive)(l), C = B(s, l), A = n.useMemo(() => {
    let e = [{
      name: D.default.Messages.VOICE_CHANNEL,
      value: p.GuildScheduledEventEntityTypes.VOICE,
      desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
      icon: h.default,
      ...V(p.GuildScheduledEventEntityTypes.VOICE, m, o, _.length)
    }, {
      name: D.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
      value: p.GuildScheduledEventEntityTypes.EXTERNAL,
      desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
      icon: T.default,
      ...V(p.GuildScheduledEventEntityTypes.EXTERNAL, m, u, 0)
    }];
    return I ? [{
      name: D.default.Messages.STAGE_CHANNEL,
      value: p.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
      desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
      icon: N.default,
      ...V(p.GuildScheduledEventEntityTypes.STAGE_INSTANCE, m, E, f.length)
    }, ...e] : e
  }, [u, o, E, I, _.length, f.length, m]);
  return (0, a.jsx)(d.RadioGroup, {
    value: l.entityType,
    options: A,
    onChange: C,
    className: R.options
  })
}

function P(e) {
  let {
    guildId: t,
    guildEvent: n,
    validationErrorMessage: s,
    onChange: r,
    isSlideReady: u = !1
  } = e, {
    entityType: o
  } = n, _ = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(t), [t]), f = (0, S.useChannelsUserCanStartStageIn)(_), T = (0, i.useStateFromStores)([E.default], () => E.default.can(M.Permissions.MANAGE_CHANNELS, _)), h = null == _ ? void 0 : _.hasFeature(M.GuildFeatures.COMMUNITY), I = B(r, n), N = h && !j(o) && 0 === f.length && T && null != o;
  return (0, a.jsxs)("div", {
    className: R.container,
    children: [(0, a.jsx)(d.Heading, {
      variant: "heading-xl/semibold",
      className: R.header,
      children: D.default.Messages.GUILD_EVENT_LOCATION_TITLE
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      className: R.text,
      variant: "text-sm/normal",
      children: D.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
    }), (0, a.jsx)(F, {
      guildId: t,
      guildEvent: n,
      onChange: r
    }), (0, a.jsx)(b, {
      guildId: t,
      guildEvent: n,
      isFocusReady: u,
      onChange: r
    }), N ? (0, a.jsx)(L.default, {
      onClick: () => {
        I({
          value: p.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
          name: D.default.Messages.STAGE_CHANNEL
        }), (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([l.e("49237"), l.e("99387"), l.e("90508"), l.e("7590"), l.e("45094"), l.e("63144")]).then(l.bind(l, "218613"));
          return l => (0, a.jsx)(e, {
            ...l,
            channelType: M.ChannelTypes.GUILD_STAGE_VOICE,
            guildId: t
          })
        })
      }
    }) : null]
  })
}