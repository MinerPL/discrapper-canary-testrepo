"use strict";
a.r(t), a.d(t, {
  getDescriptionFromReason: function() {
    return E
  },
  useGuildFeedFeedback: function() {
    return _
  },
  useShowFeedback: function() {
    return g
  }
}), a("47120");
var l = a("470079"),
  n = a("442837"),
  s = a("433517"),
  i = a("607070"),
  d = a("642101"),
  r = a("828695"),
  u = a("626135"),
  o = a("859802"),
  c = a("601410"),
  f = a("300138"),
  m = a("981631"),
  h = a("689938");

function g() {
  let e = l.useMemo(() => r.default.getExperimentBucket(o.GuildHomeFeedbackExperiment.definition.id), []),
    [t, a] = l.useState(!1),
    n = l.useMemo(() => s.Storage.get(f.GUILD_FEED_FEEDBACK_LAST_SEEN), [t]);
  return {
    showFeedback: l.useMemo(() => 100 * Math.random() < e && (null == n || Date.now() - n > f.GUILD_FEED_FEEDBACK_TIME_OUT), [e, n]),
    setOnDismissedFeedback: a
  }
}

function E(e) {
  switch (e) {
    case f.GuildFeedFeedbackReason.ALREADY_SAW:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_ALREADY_SAW;
    case f.GuildFeedFeedbackReason.IRRELEVANT:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_IRRELEVANT;
    case f.GuildFeedFeedbackReason.TOO_OLD:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_TOO_OLD;
    case f.GuildFeedFeedbackReason.CONFUSING_OR_RANDOM:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_CONFUSING;
    case f.GuildFeedFeedbackReason.INAPPROPRIATE:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_INAPPROPRIATE;
    case f.GuildFeedFeedbackReason.UNINTERESTING:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_UNINTERESTING;
    case f.GuildFeedFeedbackReason.ENTERTAINING:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_ENTERTAINING;
    case f.GuildFeedFeedbackReason.INFORMATIVE:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_INFORMATIVE;
    case f.GuildFeedFeedbackReason.USEFUL:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_USEFUL;
    case f.GuildFeedFeedbackReason.OTHER:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OTHER_REASON;
    case f.GuildFeedFeedbackReason.FUNNY:
      return h.default.Messages.GUILD_FEED_FEEDBACK_OPTION_FUNNY;
    default:
      return null
  }
}

function _(e) {
  let {
    guildId: t,
    guildFeedItem: a,
    setOnDismissFeedback: r
  } = e, [o, h] = l.useState(), [g, _] = l.useState(new Set), [I, x] = l.useState(), [S, v] = l.useState(!1), [C, N] = l.useState(!1), [p, T] = l.useState(!1), A = l.useCallback(e => {
    h(e), T(!0), v(!1), setTimeout(() => {
      T(!1)
    }, f.GUILD_FEED_FEEDBACK_ANIMATION_DURATION + 150)
  }, [h, v, T]), j = l.useCallback(e => {
    e === f.GuildFeedFeedbackReason.OTHER && g.has(f.GuildFeedFeedbackReason.OTHER) && x(null);
    let t = new Set(g);
    t.has(e) ? t.delete(e) : t.add(e), _(t)
  }, [g, x, _]), M = l.useCallback(() => {
    v(!0), _(new Set)
  }, [v, _]), D = l.useCallback(e => {
    (function(e) {
      let {
        guildId: t,
        guildFeedItem: a,
        dismissed: l,
        selectedRating: n = null,
        selectedReasons: s = null,
        userFeedback: i = null
      } = e, r = Array.from(null != s ? s : []);
      u.default.track(m.AnalyticEvents.HOME_FEEDBACK_SUBMITTED, {
        guild_id: t,
        home_session_id: c.default.getHomeSessionId(t),
        feed_item_id: a.id,
        feed_item_position: 0,
        dismissed: l,
        report_name: "feed_item_feedback",
        load_id: d.default.getLoadId(t),
        rating: n,
        reason_codes: r,
        reason_descriptions: r.map(e => {
          var t;
          return null !== (t = E(e)) && void 0 !== t ? t : ""
        }),
        user_feedback: i
      })
    })({
      guildId: t,
      guildFeedItem: a,
      dismissed: e,
      selectedRating: o,
      selectedReasons: g,
      userFeedback: I
    })
  }, [t, a, o, g, I]), F = l.useCallback(() => {
    s.Storage.set(f.GUILD_FEED_FEEDBACK_LAST_SEEN, Date.now()), null == r || r(!0), !C && D(!0)
  }, [D, r, C]), L = l.useCallback(() => {
    D(!1), N(!0), s.Storage.set(f.GUILD_FEED_FEEDBACK_LAST_SEEN, Date.now())
  }, [D]), R = l.useMemo(() => g.size > 0 && (!g.has(f.GuildFeedFeedbackReason.OTHER) || null != I && "" !== I), [g, I]), b = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion), G = l.useRef(!1);
  return l.useEffect(() => () => {
    G.current = !0
  }, []), l.useEffect(() => () => {
    G.current && null != o && F()
  }, [o, F]), {
    selectedRating: o,
    setSelectedRating: A,
    selectedReasons: g,
    setSelectedReasons: j,
    setUserFeedback: x,
    backPressed: S,
    onBackPressed: M,
    onSubmitPressed: L,
    onClosePressed: F,
    showSubmitted: C,
    isAnimating: p,
    canSubmit: R,
    useReducedMotion: b
  }
}