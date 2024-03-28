"use strict";
l.r(t), l.d(t, {
  hide: function() {
    return N
  },
  search: function() {
    return U
  },
  selectResult: function() {
    return b
  },
  show: function() {
    return H
  },
  switchToResult: function() {
    return K
  }
}), l("757143"), l("47120");
var n = l("570140"),
  s = l("493683"),
  u = l("475179"),
  a = l("925549"),
  o = l("287734"),
  i = l("212819"),
  c = l("336197"),
  r = l("359110"),
  d = l("920440"),
  _ = l("131704"),
  p = l("592125"),
  T = l("283595"),
  E = l("944486"),
  R = l("914010"),
  A = l("626135"),
  C = l("777754"),
  f = l("823385"),
  m = l("981631"),
  h = l("176505");
let y = () => Promise.resolve();
y = l("346329").playApplication;
let S = Object.freeze({
    [i.AutocompleterQuerySymbols.USER]: i.AutocompleterResultTypes.USER,
    [i.AutocompleterQuerySymbols.TEXT_CHANNEL]: i.AutocompleterResultTypes.TEXT_CHANNEL,
    [i.AutocompleterQuerySymbols.VOICE_CHANNEL]: i.AutocompleterResultTypes.VOICE_CHANNEL,
    [i.AutocompleterQuerySymbols.GUILD]: i.AutocompleterResultTypes.GUILD,
    [i.AutocompleterQuerySymbols.APPLICATION]: i.AutocompleterResultTypes.APPLICATION
  }),
  I = new RegExp("^".concat(i.AutocompleterQuerySymbols.USER, "|").concat(i.AutocompleterQuerySymbols.TEXT_CHANNEL, "|").concat(i.AutocompleterQuerySymbols.VOICE_CHANNEL, "|\\").concat(i.AutocompleterQuerySymbols.GUILD, "|\\").concat(i.AutocompleterQuerySymbols.APPLICATION));

function O(e) {
  var t, l;
  let n;
  let [s, u] = (n = null !== (l = S[(t = e).charAt(0)]) && void 0 !== l ? l : null, [t.replace(I, ""), n]);
  return {
    query: s,
    queryMode: u
  }
}

function L(e, t) {
  let {
    results: l,
    queryMode: n,
    query: s,
    maxQueryLength: u
  } = f.default.getProps(), a = R.default.getGuildId(), o = E.default.getChannelId(a), c = l[(0, i.findNextSelectedResult)(i.FindResultDirections.DOWN, -1, l)], r = C.default.isEmail(s), d = C.default.isPhoneNumber(s), T = C.default.isUserTagLike(s), m = null != o && (0, h.isStaticChannelRoute)(o), y = {
    current_channel_id: m ? void 0 : o,
    current_channel_static_route: m ? o : void 0,
    current_guild_id: a,
    query_mode: null != n ? n : "GENERAL",
    query_length: s.length,
    max_query_length: u,
    is_email_like: r,
    is_phone_like: d,
    is_username_like: T,
    query: r || d || T ? null : s,
    top_result_type: null != c ? c.type : null,
    top_result_score: null != c ? c.score : null,
    num_results_total: f.default.getResultTotals(),
    num_results_users: f.default.getResultTotals(i.AutocompleterResultTypes.USER),
    num_results_text_channels: f.default.getResultTotals(i.AutocompleterResultTypes.TEXT_CHANNEL),
    num_results_voice_channels: f.default.getResultTotals(i.AutocompleterResultTypes.VOICE_CHANNEL),
    num_results_guilds: f.default.getResultTotals(i.AutocompleterResultTypes.GUILD),
    num_results_group_dms: f.default.getResultTotals(i.AutocompleterResultTypes.GROUP_DM)
  };
  if (null != o) {
    let e = p.default.getChannel(o);
    y.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: n,
      record: s
    } = t;
    switch (y.selected_type = e, y.selected_score = n, y.selected_index = l.indexOf(t), e) {
      case i.AutocompleterResultTypes.GUILD:
        y.selected_guild_id = s.id;
        break;
      case i.AutocompleterResultTypes.TEXT_CHANNEL:
      case i.AutocompleterResultTypes.VOICE_CHANNEL:
        s instanceof _.ChannelRecordBase && (y.selected_guild_id = null != s.guild_id ? s.guild_id : null), y.selected_channel_id = s.id;
        break;
      case i.AutocompleterResultTypes.GROUP_DM:
        y.selected_channel_id = s.id;
        break;
      case i.AutocompleterResultTypes.USER:
        y.selected_user_id = s.id
    }
  }
  A.default.track(e, y)
}

function g() {
  n.default.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function H() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (f.default.isOpen()) return;
    let l = R.default.getGuildId(),
      n = E.default.getChannelId(l);
    if (null != n) {
      let e = p.default.getChannel(n);
      t = null != e ? e.type : null
    }
    A.default.track(m.AnalyticEvents.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: l,
      current_channel_id: n,
      current_channel_type: t
    })
  }(e), n.default.dispatch({
    type: "QUICKSWITCHER_SHOW",
    ...O(t)
  })
}

function N() {
  L(m.AnalyticEvents.QUICKSWITCHER_CLOSED), g()
}

function U(e) {
  n.default.dispatch({
    type: "QUICKSWITCHER_SEARCH",
    ...O(e)
  })
}

function b(e) {
  n.default.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function K(e) {
  let t, l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  g(), L(m.AnalyticEvents.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: _,
    record: E
  } = e, R = {
    page: m.AnalyticsPages.QUICK_SWITCHER
  };
  switch (_) {
    case i.AutocompleterResultTypes.GUILD:
      (0, d.transitionToGuild)(E.id, {
        navigationReplace: !0
      });
      break;
    case i.AutocompleterResultTypes.TEXT_CHANNEL:
      null != (t = p.default.getChannel(E.id)) && (0, r.transitionToChannel)(t.id, {
        state: {
          analyticsSource: R
        },
        navigationReplace: !0
      });
      break;
    case i.AutocompleterResultTypes.VOICE_CHANNEL:
      null != (t = p.default.getChannel(E.id)) && (l ? u.default.updateChatOpen(E.id, !0) : o.default.selectVoiceChannel(E.id), (0, r.transitionToChannel)(t.id, {
        state: {
          analyticsSource: R
        },
        navigationReplace: !0
      }));
      break;
    case i.AutocompleterResultTypes.USER:
      s.default.openPrivateChannel([E.id], !1, !1, "Quickswitcher"), a.default.channelListScrollTo(m.ME, p.default.getDMFromUserId(E.id));
      break;
    case i.AutocompleterResultTypes.GROUP_DM:
      (0, r.transitionToChannel)(E.id, {
        navigationReplace: !0
      }), a.default.channelListScrollTo(m.ME, E.id);
      break;
    case i.AutocompleterResultTypes.APPLICATION:
      let A = T.default.getActiveLibraryApplication(E.id);
      y(E.id, A, {
        analyticsParams: {
          source: m.AnalyticsLocations.QUICK_SWITCHER,
          location: m.AnalyticsLocations.QUICK_SWITCHER
        }
      });
      break;
    case i.AutocompleterResultTypes.LINK:
      (0, c.default)(E.path, {
        navigationReplace: !0
      })
  }
  n.default.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}