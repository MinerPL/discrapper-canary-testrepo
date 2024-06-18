"use strict";
n.d(t, {
  Iw: function() {
    return T
  },
  On: function() {
    return I
  },
  Yk: function() {
    return E
  },
  cQ: function() {
    return _
  },
  ev: function() {
    return u
  },
  m1: function() {
    return c
  },
  n8: function() {
    return d
  }
});
var i = n(367907),
  r = n(626135),
  s = n(373228),
  o = n(981631),
  a = n(957825),
  l = n(474936);
let u = e => {
    let {
      containerWidth: t,
      favoriteStickers: n,
      frequentlyUsedStickers: r,
      guildStickers: l,
      stickersTotal: u
    } = e;
    i.ZP.trackWithMetadata(o.rMx.EXPRESSION_PICKER_OPENED, {
      width: t,
      tab: a.X1.STICKER,
      badged: !1,
      num_expressions_favorites: n.length,
      num_animated_expressions_favorites: n.filter(e => (0, s.aQ)(e.format_type)).length,
      num_custom_expressions_favorites: n.filter(e => (0, s.z)(e.type)).length,
      num_standard_expressions_favorites: n.filter(e => !(0, s.z)(e.type)).length,
      num_expressions_frecent: r.length,
      num_custom_expressions_frecent: r.filter(e => (0, s.z)(e.type)).length,
      num_animated_expressions_frecent: r.filter(e => (0, s.aQ)(e.format_type)).length,
      num_standard_expressions_frecent: r.filter(e => !(0, s.z)(e.type)).length,
      num_current_guild_expressions: l.length,
      num_custom_expressions_total: u
    })
  },
  _ = e => {
    let t, {
      sticker: n,
      location: r
    } = e;
    n.type === s.n0.GUILD && (t = n.guild_id), i.ZP.trackWithMetadata(o.rMx.EXPRESSION_FAVORITED, {
      location: r,
      expression_type: a.X1.STICKER,
      expression_id: n.id,
      expression_name: n.name,
      expression_guild_id: t,
      is_animated: (0, s.aQ)(n.format_type),
      is_custom: (0, s.z)(n.type)
    })
  },
  d = () => {
    r.default.track(o.rMx.SEARCH_STARTED, {
      search_type: o.aib.STICKER
    })
  },
  c = (e, t, n) => {
    i.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_VIEWED, {
      search_type: o.aib.STICKER,
      total_results: t,
      query: e,
      is_suggestion: n
    })
  },
  E = (e, t, n) => {
    let r;
    let {
      sticker: a
    } = e;
    a.type === s.n0.GUILD && (r = a.guild_id), i.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_SELECTED, {
      load_id: a.id,
      search_type: o.aib.STICKER,
      source_object: "Sticker Picker",
      total_results: n,
      expression_guild_id: r,
      sticker_id: a.id,
      query: t
    })
  },
  I = e => {
    let t;
    let {
      sticker: n,
      category: r
    } = e;
    n.type === s.n0.GUILD && (t = n.guild_id), i.ZP.trackWithMetadata(o.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: l.cd.EMOJI_PICKER_STICKER_CLICKED,
      expression_id: n.id,
      expression_name: n.name,
      expression_picker_section: r,
      expression_guild_id: t,
      is_animated: (0, s.aQ)(n.format_type),
      is_custom: (0, s.z)(n.type)
    })
  },
  T = e => {
    if (null != e && "" !== e) i.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_EMPTY, {
      query: e,
      search_type: o.aib.STICKER,
      source_object: "Sticker Picker"
    })
  }