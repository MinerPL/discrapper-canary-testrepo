"use strict";
n.r(t), n.d(t, {
  show: function() {
    return b
  },
  hide: function() {
    return G
  },
  search: function() {
    return M
  },
  selectResult: function() {
    return m
  },
  switchToResult: function() {
    return P
  }
}), n("781738"), n("222007");
var i = n("913144"),
  o = n("450911"),
  l = n("255397"),
  u = n("406189"),
  a = n("987317"),
  s = n("123225"),
  d = n("537325"),
  r = n("144491"),
  E = n("239380"),
  c = n("233069"),
  _ = n("42203"),
  A = n("686470"),
  C = n("18494"),
  T = n("162771"),
  I = n("599110"),
  S = n("340454"),
  f = n("116460"),
  N = n("49111"),
  O = n("724210");
let R = () => Promise.resolve();
{
  let e = n("780009");
  R = e.playApplication
}
let L = Object.freeze({
    [s.AutocompleterQuerySymbols.USER]: s.AutocompleterResultTypes.USER,
    [s.AutocompleterQuerySymbols.TEXT_CHANNEL]: s.AutocompleterResultTypes.TEXT_CHANNEL,
    [s.AutocompleterQuerySymbols.VOICE_CHANNEL]: s.AutocompleterResultTypes.VOICE_CHANNEL,
    [s.AutocompleterQuerySymbols.GUILD]: s.AutocompleterResultTypes.GUILD,
    [s.AutocompleterQuerySymbols.APPLICATION]: s.AutocompleterResultTypes.APPLICATION
  }),
  p = new RegExp("^".concat(s.AutocompleterQuerySymbols.USER, "|").concat(s.AutocompleterQuerySymbols.TEXT_CHANNEL, "|").concat(s.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\").concat(s.AutocompleterQuerySymbols.GUILD, "|\\").concat(s.AutocompleterQuerySymbols.APPLICATION));

function D(e) {
  let [t, n] = function(e) {
    var t;
    let n = e.charAt(0),
      i = null !== (t = L[n]) && void 0 !== t ? t : null;
    return [e.replace(p, ""), i]
  }(e);
  return {
    query: t,
    queryMode: n
  }
}

function h(e, t) {
  let {
    results: n,
    queryMode: i,
    query: o,
    maxQueryLength: l
  } = f.default.getProps(), u = T.default.getGuildId(), a = C.default.getChannelId(u), d = n[(0, s.findNextSelectedResult)(s.FindResultDirections.DOWN, -1, n)], r = S.default.isEmail(o), E = S.default.isPhoneNumber(o), A = S.default.isUserTagLike(o), N = null != a && (0, O.isStaticChannelRoute)(a), R = {
    current_channel_id: N ? void 0 : a,
    current_channel_static_route: N ? a : void 0,
    current_guild_id: u,
    query_mode: null != i ? i : "GENERAL",
    query_length: o.length,
    max_query_length: l,
    is_email_like: r,
    is_phone_like: E,
    is_username_like: A,
    query: r || E || A ? null : o,
    top_result_type: null != d ? d.type : null,
    top_result_score: null != d ? d.score : null,
    num_results_total: f.default.getResultTotals(),
    num_results_users: f.default.getResultTotals(s.AutocompleterResultTypes.USER),
    num_results_text_channels: f.default.getResultTotals(s.AutocompleterResultTypes.TEXT_CHANNEL),
    num_results_voice_channels: f.default.getResultTotals(s.AutocompleterResultTypes.VOICE_CHANNEL),
    num_results_guilds: f.default.getResultTotals(s.AutocompleterResultTypes.GUILD),
    num_results_group_dms: f.default.getResultTotals(s.AutocompleterResultTypes.GROUP_DM)
  };
  if (null != a) {
    let e = _.default.getChannel(a);
    R.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: i,
      record: o
    } = t;
    switch (R.selected_type = e, R.selected_score = i, R.selected_index = n.indexOf(t), e) {
      case s.AutocompleterResultTypes.GUILD:
        R.selected_guild_id = o.id;
        break;
      case s.AutocompleterResultTypes.TEXT_CHANNEL:
      case s.AutocompleterResultTypes.VOICE_CHANNEL:
        o instanceof c.ChannelRecordBase && (R.selected_guild_id = null != o.guild_id ? o.guild_id : null), R.selected_channel_id = o.id;
        break;
      case s.AutocompleterResultTypes.GROUP_DM:
        R.selected_channel_id = o.id;
        break;
      case s.AutocompleterResultTypes.USER:
        R.selected_user_id = o.id
    }
  }
  I.default.track(e, R)
}

function g() {
  i.default.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function b() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (f.default.isOpen()) return;
    let n = T.default.getGuildId(),
      i = C.default.getChannelId(n);
    if (null != i) {
      let e = _.default.getChannel(i);
      t = null != e ? e.type : null
    }
    I.default.track(N.AnalyticEvents.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: n,
      current_channel_id: i,
      current_channel_type: t
    })
  }(e), i.default.dispatch({
    type: "QUICKSWITCHER_SHOW",
    ...D(t)
  })
}

function G() {
  h(N.AnalyticEvents.QUICKSWITCHER_CLOSED), g()
}

function M(e) {
  i.default.dispatch({
    type: "QUICKSWITCHER_SEARCH",
    ...D(e)
  })
}

function m(e) {
  i.default.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function P(e) {
  let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  g(), h(N.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: c,
    record: C
  } = e, T = {
    page: N.AnalyticsPages.QUICK_SWITCHER
  };
  switch (c) {
    case s.AutocompleterResultTypes.GUILD:
      (0, E.transitionToGuild)(C.id, {
        navigationReplace: !0
      });
      break;
    case s.AutocompleterResultTypes.TEXT_CHANNEL:
      null != (t = _.default.getChannel(C.id)) && (0, r.transitionToChannel)(t.id, {
        state: {
          analyticsSource: T
        },
        navigationReplace: !0
      });
      break;
    case s.AutocompleterResultTypes.VOICE_CHANNEL:
      null != (t = _.default.getChannel(C.id)) && (n ? l.default.updateChatOpen(C.id, !0) : a.default.selectVoiceChannel(C.id), (0, r.transitionToChannel)(t.id, {
        state: {
          analyticsSource: T
        },
        navigationReplace: !0
      }));
      break;
    case s.AutocompleterResultTypes.USER:
      o.default.openPrivateChannel([C.id], !1, !1, "Quickswitcher"), u.default.channelListScrollTo(N.ME, _.default.getDMFromUserId(C.id));
      break;
    case s.AutocompleterResultTypes.GROUP_DM:
      (0, r.transitionToChannel)(C.id, {
        navigationReplace: !0
      }), u.default.channelListScrollTo(N.ME, C.id);
      break;
    case s.AutocompleterResultTypes.APPLICATION:
      let I = A.default.getActiveLibraryApplication(C.id);
      R(C.id, I, {
        analyticsParams: {
          source: N.AnalyticsLocations.QUICK_SWITCHER,
          location: N.AnalyticsLocations.QUICK_SWITCHER
        }
      });
      break;
    case s.AutocompleterResultTypes.LINK:
      (0, d.default)(C.path, {
        navigationReplace: !0
      })
  }
  i.default.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}