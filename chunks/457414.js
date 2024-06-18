"use strict";
t.d(s, {
  S: function() {
    return E
  },
  w: function() {
    return h
  }
});
var n = t(36082),
  i = t(925221),
  l = t(757698),
  a = t(723992),
  r = t(779376),
  o = t(236413),
  c = t(85960),
  d = t(273504),
  u = t(689938);
let E = e => {
    switch (e) {
      case d.fX.KEYWORD:
      case d.fX.USER_PROFILE:
        return !0;
      default:
        return !1
    }
  },
  _ = e => {
    switch (e) {
      case d.fX.KEYWORD:
      case d.fX.ML_SPAM:
      case d.fX.DEFAULT_KEYWORD_LIST:
      case d.fX.MENTION_SPAM:
      case d.fX.SERVER_POLICY:
      case d.fX.USER_PROFILE:
        return !0;
      default:
        return !1
    }
  },
  I = (e, s) => {
    var t;
    return null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : c.I6[e].getDefaultRuleName()
  },
  T = (e, s) => {
    if (!!(0, o.Vb)(s)) {
      if ((0, o.DO)(s)) return s.triggerMetadata.regexPatterns.length > 0 ? u.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_HEADER_WORD_AND_REGEX_COUNT.format({
        keywordCount: s.triggerMetadata.keywordFilter.length,
        regexPatternCount: s.triggerMetadata.regexPatterns.length
      }) : u.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_HEADER_WORD_COUNT.format({
        keywordCount: s.triggerMetadata.keywordFilter.length
      })
    }
  },
  N = e => {
    switch (e) {
      case d.fX.KEYWORD:
        return u.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_DESCRIPTION;
      case d.fX.ML_SPAM:
        return u.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_DESCRIPTION;
      case d.fX.DEFAULT_KEYWORD_LIST:
        return u.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_DESCRIPTION_TEXT;
      case d.fX.MENTION_SPAM:
        return u.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_DESCRIPTION;
      case d.fX.USER_PROFILE:
        return u.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_DESCRIPTION;
      default:
        return null
    }
  },
  m = e => {
    if (e === d.fX.KEYWORD) return u.Z.Messages.GUILD_AUTOMOD_LINK_FILTER_MATCHING_STRATEGY_DESCRIPTION.format()
  },
  S = e => {
    switch (e) {
      case d.fX.MENTION_SPAM:
        return n.Z;
      case d.fX.KEYWORD:
        return a.Z;
      case d.fX.ML_SPAM:
      case d.fX.USER_PROFILE:
        return i.Z;
      case d.fX.DEFAULT_KEYWORD_LIST:
        return r.Z
    }
  };

function h(e, s) {
  var t, n, i, a, r;
  return null != e && _(e) ? {
    headerText: null !== (t = I(e, s)) && void 0 !== t ? t : "",
    headerSubtext: null !== (n = T(e, s)) && void 0 !== n ? n : "",
    descriptionText: null !== (i = N(e)) && void 0 !== i ? i : "",
    descriptionSubtext: null !== (a = m(e)) && void 0 !== a ? a : "",
    icon: null !== (r = S(e)) && void 0 !== r ? r : l.Z
  } : null
}