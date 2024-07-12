n.d(t, {
  Z: function() {
return m;
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(512722),
  a = n.n(s),
  r = n(841784),
  l = n(503438),
  o = n(802856),
  c = n(366966),
  d = n(51144),
  u = n(761282),
  _ = n(358924),
  h = n(817915),
  E = n(981631),
  I = n(689938);

function m(e) {
  let {
party: t,
onUserContextMenu: s
  } = e, {
priorityMembers: m,
guildContext: g
  } = t, p = m[0], T = function(e) {
let {
  priorityMembers: t,
  partiedMembers: n
} = e, i = new Set(t.map(e => {
  let {
    user: t
  } = e;
  return t.id;
})), s = n.filter(e => !i.has(e.id)), a = d.ZP.getName(t[0].user), r = null != t[1] ? d.ZP.getName(t[1].user) : null != s[0] ? d.ZP.getName(s[0]) : null;
switch (n.length) {
  case 1:
    return a;
  case 2:
    return I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN_ONLY.format({
      user1: a,
      user2: r
    });
  default:
    return I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_HEADER_TWO_KNOWN.format({
      user1: a,
      user2: r,
      extras: n.length - 2
    });
}
  }(t), {
subtitle: S,
icon: C
  } = function(e) {
var t;
let {
  priorityMembers: s,
  partiedMembers: d,
  voiceChannels: m,
  currentActivities: g
} = e, p = s.length, T = d.length - p, S = g[0], C = null == S ? void 0 : S.activity, f = null == S ? void 0 : S.startedPlayingTime, N = {
  name: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : ''
};
if ((0, r.Z)(C) && null != C)
  return {
    subtitle: (0, i.jsx)(c.ZP, {
      start: f,
      location: c.ZP.Locations.ACTIVITY_FEED_NEW,
      messageProps: N
    }),
    icon: null
  };
if (p + T === 1 && null != S) {
  let {
    game: e
  } = S;
  if (null == C)
    return {
      subtitle: null,
      icon: null
    };
  let t = u.dc(C);
  if (null != t)
    return t;
  switch (C.type) {
    case E.IIU.PLAYING:
      if ((0, o.Z)(C))
        return {
          subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_XBOX,
          icon: (0, i.jsx)(_.Z.Header.Icon, {
            src: _.Z.Header.Icon.Src.XBOX
          })
        };
      return {
        subtitle: (0, i.jsx)(c.ZP, {
            start: f,
            location: c.ZP.Locations.ACTIVITY_FEED_NEW,
            messageProps: N
          }),
          icon: null != e ? (0, i.jsx)(_.Z.Header.Icon, {
            src: null != e.getIconURL(h.Z) ? e.getIconURL(h.Z) : n(211827)
          }) : null
      };
    case E.IIU.STREAMING:
      return {
        subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_STREAMING_TWITCH,
          icon: null != e && null != e.getIconURL(h.Z) ? (0, i.jsx)(_.Z.Header.Icon, {
            src: e.getIconURL(h.Z)
          }) : null
      };
    case E.IIU.LISTENING:
      let s;
      return s = (0, l.Z)(C) ? (0, i.jsx)(_.Z.Header.Icon, {
        src: _.Z.Header.Icon.Src.SPOTIFY
      }) : null != e.getIconURL(h.Z) ? (0, i.jsx)(_.Z.Header.Icon, {
        src: e.getIconURL(h.Z)
      }) : (0, i.jsx)(_.Z.Header.Icon, {
        src: n(211827)
      }), {
        subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_LISTENING.format({
          name: C.name
        }),
        icon: s
      };
    case E.IIU.WATCHING:
      return {
        subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_WATCHING,
          icon: null != e && null != e.getIconURL(h.Z) ? (0, i.jsx)(_.Z.Header.Icon, {
            src: e.getIconURL(h.Z)
          }) : null
      };
    default:
      return {
        subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL,
          icon: null
      };
  }
}
if (0 === g.length) {
  if (m.length > 0)
    return {
      subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_IN_A_VOICE_CHANNEL,
      icon: null
    };
  let e = g[0];
  if (null != e) {
    let {
      activity: t
    } = e;
    if (null != t) {
      let e = u.dc(t);
      if (null != e)
        return e;
    }
    if (null != t && t.type === E.IIU.LISTENING)
      return {
        subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_SPOTIFY,
        icon: (0, i.jsx)(_.Z.Header.Icon, {
          src: _.Z.Header.Icon.Src.SPOTIFY
        })
      };
  }
} else if (1 === g.length) {
  let e = g.find(e => null != e.activity);
  if (null == e)
    return {
      subtitle: null,
      icon: null
    };
  let {
    activity: t,
    game: n,
    startedPlayingTime: s
  } = e;
  return a()(null != t, 'Activity was null somehow'), {
    subtitle: (0, i.jsx)(c.ZP, {
      start: s,
      location: c.ZP.Locations.ACTIVITY_FEED_NEW,
      messageProps: N
    }),
    icon: null != n && null != n.getIconURL(h.Z) ? (0, i.jsx)(_.Z.Header.Icon, {
      src: n.getIconURL(h.Z)
    }) : null
  };
}
return {
  subtitle: I.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_MULTIPLE_GAMES,
  icon: (0, i.jsx)(_.Z.Header.Icon, {
    src: _.Z.Header.Icon.Src.MULTIPLE
  })
};
  }(t);
  return (0, i.jsx)(_.Z.Header, {
priorityUser: p,
guildId: null == g ? void 0 : g.id,
title: T,
subtitle: S,
icon: C,
onContextMenu: e => s(e, p.user)
  });
}