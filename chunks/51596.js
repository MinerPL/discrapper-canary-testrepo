n.d(t, {
  $Z: function() {
return y;
  },
  Cp: function() {
return x;
  },
  F_: function() {
return b;
  },
  Se: function() {
return M;
  },
  tF: function() {
return v;
  },
  yC: function() {
return R;
  }
}), n(757143), n(47120);
var l = n(570140),
  a = n(493683),
  i = n(475179),
  s = n(925549),
  r = n(287734),
  o = n(212819),
  u = n(336197),
  c = n(359110),
  d = n(769654),
  _ = n(131704),
  h = n(592125),
  f = n(283595),
  E = n(944486),
  g = n(914010),
  S = n(626135),
  A = n(777754),
  I = n(823385),
  p = n(981631),
  m = n(176505);
let C = () => Promise.resolve();
C = n(346329).playApplication;
let N = Object.freeze({
[o.xQ.USER]: o.h8.USER,
[o.xQ.TEXT_CHANNEL]: o.h8.TEXT_CHANNEL,
[o.xQ.VOICE_CHANNEL]: o.h8.VOICE_CHANNEL,
[o.xQ.GUILD]: o.h8.GUILD,
[o.xQ.APPLICATION]: o.h8.APPLICATION
  }),
  L = new RegExp('^'.concat(o.xQ.USER, '|').concat(o.xQ.TEXT_CHANNEL, '|').concat(o.xQ.VOICE_CHANNEL, '|\\').concat(o.xQ.GUILD, '|\\').concat(o.xQ.APPLICATION));

function b(e) {
  var t, n;
  let l;
  let [a, i] = (l = null !== (n = N[(t = e).charAt(0)]) && void 0 !== n ? n : null, [
t.replace(L, ''),
l
  ]);
  return {
query: a,
queryMode: i
  };
}

function T(e, t) {
  let {
results: n,
queryMode: l,
query: a,
maxQueryLength: i
  } = I.Z.getProps(), s = g.Z.getGuildId(), r = E.Z.getChannelId(s), u = n[(0, o.gJ)(o.a8.DOWN, -1, n)], c = A.Z.isEmail(a), d = A.Z.isPhoneNumber(a), f = A.Z.isUserTagLike(a), p = null != r && (0, m.AB)(r), C = e => null == e ? null : e.type === o.h8.IN_APP_NAVIGATION ? e.type + '_' + e.record.type : e.type, N = {
current_channel_id: p ? void 0 : r,
current_channel_static_route: p ? r : void 0,
current_guild_id: s,
query_mode: null != l ? l : 'GENERAL',
query_length: a.length,
max_query_length: i,
is_email_like: c,
is_phone_like: d,
is_username_like: f,
query: c || d || f ? null : a,
top_result_type: C(u),
top_result_score: null != u ? u.score : null,
num_results_total: I.Z.getResultTotals(),
num_results_users: I.Z.getResultTotals(o.h8.USER),
num_results_text_channels: I.Z.getResultTotals(o.h8.TEXT_CHANNEL),
num_results_voice_channels: I.Z.getResultTotals(o.h8.VOICE_CHANNEL),
num_results_guilds: I.Z.getResultTotals(o.h8.GUILD),
num_results_group_dms: I.Z.getResultTotals(o.h8.GROUP_DM)
  };
  if (null != r) {
let e = h.Z.getChannel(r);
N.current_channel_type = null != e ? e.type : null;
  }
  if (null != t) {
let {
  type: e,
  score: l,
  record: a
} = t;
switch (N.selected_type = C(t), N.selected_score = l, N.selected_index = n.indexOf(t), e) {
  case o.h8.GUILD:
    N.selected_guild_id = a.id;
    break;
  case o.h8.TEXT_CHANNEL:
  case o.h8.VOICE_CHANNEL:
    a instanceof _.Sf && (N.selected_guild_id = null != a.guild_id ? a.guild_id : null), N.selected_channel_id = a.id;
    break;
  case o.h8.GROUP_DM:
    N.selected_channel_id = a.id;
    break;
  case o.h8.USER:
    N.selected_user_id = a.id;
}
  }
  S.default.track(e, N);
}

function Z() {
  l.Z.dispatch({
type: 'QUICKSWITCHER_HIDE'
  });
}

function y() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'KEYBIND',
t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
  ! function(e) {
let t;
if (I.Z.isOpen())
  return;
let n = g.Z.getGuildId(),
  l = E.Z.getChannelId(n);
if (null != l) {
  let e = h.Z.getChannel(l);
  t = null != e ? e.type : null;
}
S.default.track(p.rMx.QUICKSWITCHER_OPENED, {
  source: e,
  current_guild_id: n,
  current_channel_id: l,
  current_channel_type: t
});
  }(e), l.Z.dispatch({
type: 'QUICKSWITCHER_SHOW',
...b(t)
  });
}

function x() {
  T(p.rMx.QUICKSWITCHER_CLOSED), Z();
}

function R(e) {
  l.Z.dispatch({
type: 'QUICKSWITCHER_SEARCH',
...b(e)
  });
}

function v(e) {
  l.Z.dispatch({
type: 'QUICKSWITCHER_SELECT',
selectedIndex: e
  });
}

function M(e) {
  let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  Z(), T(p.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
type: _,
record: E
  } = e, g = {
page: p.ZY5.QUICK_SWITCHER
  };
  switch (_) {
case o.h8.GUILD:
  (0, d.X)(E.id, {
    navigationReplace: !0
  });
  break;
case o.h8.TEXT_CHANNEL:
  null != (t = h.Z.getChannel(E.id)) && (0, c.Kh)(t.id, {
    state: {
      analyticsSource: g
    },
    navigationReplace: !0
  });
  break;
case o.h8.VOICE_CHANNEL:
  null != (t = h.Z.getChannel(E.id)) && (n ? i.Z.updateChatOpen(E.id, !0) : r.default.selectVoiceChannel(E.id), (0, c.Kh)(t.id, {
    state: {
      analyticsSource: g
    },
    navigationReplace: !0
  }));
  break;
case o.h8.USER:
  a.Z.openPrivateChannel([E.id], !1, !1, 'Quickswitcher'), s.Z.channelListScrollTo(p.ME, h.Z.getDMFromUserId(E.id));
  break;
case o.h8.GROUP_DM:
  (0, c.Kh)(E.id, {
    navigationReplace: !0
  }), s.Z.channelListScrollTo(p.ME, E.id);
  break;
case o.h8.APPLICATION:
  let S = f.Z.getActiveLibraryApplication(E.id);
  C(E.id, S, {
    analyticsParams: {
      source: p.Sbl.QUICK_SWITCHER,
      location: p.Sbl.QUICK_SWITCHER
    }
  });
  break;
case o.h8.LINK:
  (0, u.Z)(E.path, {
    navigationReplace: !0
  });
  break;
case o.h8.IN_APP_NAVIGATION:
  (0, u.Z)(E.path, {
    navigationReplace: !0
  });
  }
  l.Z.dispatch({
type: 'QUICKSWITCHER_SWITCH_TO',
result: e
  });
}