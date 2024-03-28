"use strict";
n.r(t), n.d(t, {
  getChannelListSectionHeight: function() {
    return p
  },
  getKeyForSection: function() {
    return m
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("362658"),
  i = n("216306"),
  r = n("155409"),
  o = n("486458"),
  u = n("540126"),
  d = n("301342"),
  c = n("327530"),
  f = n("981631"),
  h = n("689938"),
  C = n("677351");

function p(e, t, n) {
  if (e === u.SECTION_INDEX_COMMUNITY) return c.HEIGHT_BUFFER;
  if (e === u.SECTION_INDEX_UNCATEGORIZED_CHANNELS) return t.hasFeature(f.GuildFeatures.HUB) ? 0 : c.HEIGHT_BUFFER;
  if (e === n.voiceChannelsSectionNumber) {
    var l;
    let t = n.getCategoryFromSection(e);
    if (null == t || t.isEmpty()) return 0;
    if (t.isCollapsed) return c.HEIGHT_SECTION + c.HEIGHT_SECTION_DIVIDER;
    let a = null === (l = n.getChannelFromSectionRow(e, 0)) || void 0 === l ? void 0 : l.channel;
    return null == a || a.record.type === f.ChannelTypes.GUILD_CATEGORY ? c.HEIGHT_SECTION_DIVIDER : 16 + c.HEIGHT_SECTION_DIVIDER
  }
  return c.HEIGHT_SECTION
}

function m(e, t) {
  switch (e) {
    case u.SECTION_INDEX_COMMUNITY:
      return "hoisted-spacer";
    case u.SECTION_INDEX_UNCATEGORIZED_CHANNELS:
      return "uncategorized-spacer";
    case u.SECTION_INDEX_FAVORITES:
      return "favorites";
    case t.recentsSectionNumber:
      return "recents-header";
    case t.voiceChannelsSectionNumber:
      return "voice-channels-header";
    default: {
      let n = t.getNamedCategoryFromSection(e);
      if (null != n) return "category-".concat(n.id);
      return "section-".concat(e)
    }
  }
}
t.default = a.memo(function(e) {
  let {
    sectionIndex: t,
    guild: n,
    guildChannels: p,
    guildChannelsVersion: m,
    selectedChannelId: g,
    disableManageChannels: E
  } = e, {
    isFavoritesPerk: S
  } = (0, s.useFavoritesServerExperiment)("ChannelListSection"), _ = a.useCallback(() => {
    let e = p.getCategoryFromSection(p.recentsSectionNumber);
    if (null == e) return;
    let t = null,
      l = e.getShownChannelAndThreadIds();
    null != g && l.includes(g) && (t = (0, i.getFirstRouteFor)(p)), (0, i.clearRecentChannels)(n.id, l, t)
  }, [n.id, g, p, m]);
  switch (t) {
    case u.SECTION_INDEX_COMMUNITY:
      return (0, l.jsx)("div", {
        style: {
          height: c.HEIGHT_BUFFER
        }
      });
    case u.SECTION_INDEX_UNCATEGORIZED_CHANNELS:
      if (n.hasFeature(f.GuildFeatures.HUB)) return null;
      return (0, l.jsx)("div", {
        style: {
          height: c.HEIGHT_BUFFER
        }
      });
    case u.SECTION_INDEX_FAVORITES:
      return (0, l.jsx)(d.NonChannelCategory, {
        name: S ? h.default.Messages.PINNED_CHANNELS : h.default.Messages.FAVORITES
      });
    case p.recentsSectionNumber:
      return (0, l.jsx)(d.NonChannelCategory, {
        name: h.default.Messages.RECENTS_CATEGORY_HEADER,
        onDismiss: _
      });
    case p.voiceChannelsSectionNumber: {
      var I;
      let e = p.getCategoryFromSection(p.voiceChannelsSectionNumber);
      if (null == e || e.isEmpty()) return null;
      let n = null === (I = p.getChannelFromSectionRow(t, 0)) || void 0 === I ? void 0 : I.channel;
      return (0, l.jsxs)(a.Fragment, {
        children: [(0, l.jsx)("div", {
          className: C.sectionDivider
        }), (0, l.jsx)(d.VoiceChannelCategory, {
          category: e,
          channel: n
        })]
      })
    }
    case u.SECTION_INDEX_FIRST_NAMED_CATEGORY: {
      let e = p.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, l.jsx)(d.default, {
        channel: e.record,
        position: e.position,
        disableManageChannels: E,
        children: (0, l.jsx)(r.default, {
          inlineSpecs: c.TUTORIAL_INLINE_SPECS,
          arrowAlignment: o.ArrowAlignments.TOP,
          tutorialId: "organize-by-topic",
          position: "right"
        })
      })
    }
    default: {
      let e = p.getNamedCategoryFromSection(t);
      if (null == e) return null;
      return (0, l.jsx)(d.default, {
        channel: e.record,
        position: e.position,
        disableManageChannels: E
      })
    }
  }
})