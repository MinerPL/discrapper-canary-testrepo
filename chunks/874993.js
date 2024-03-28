"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120"), s("536091");
var a = s("735250"),
  l = s("470079"),
  n = s("442837"),
  i = s("692547"),
  r = s("481060"),
  o = s("999382"),
  d = s("279542"),
  u = s("725808"),
  c = s("26290"),
  E = s("823379"),
  _ = s("63063"),
  I = s("426563"),
  T = s("727072"),
  S = s("85960"),
  f = s("577330"),
  m = s("65912"),
  N = s("51248"),
  g = s("546513"),
  h = s("572456"),
  C = s("273504"),
  R = s("981631"),
  x = s("689938"),
  L = s("456141");

function O(e) {
  var t, s;
  let {
    guildId: O,
    setPreventNavigation: A = () => {}
  } = e, {
    editingRule: p,
    setEditingRule: M
  } = (0, m.useAutomodEditingRuleState)(), {
    guild: D,
    subsection: v
  } = (0, n.useStateFromStoresObject)([o.default], () => o.default.getProps()), j = null !== (s = null !== (t = null == D ? void 0 : D.id) && void 0 !== t ? t : O) && void 0 !== s ? s : R.EMPTY_STRING_SNOWFLAKE_ID, G = null != p, [U] = (0, T.useSyncAutomodRulesEffect)(j), {
    rulesByTriggerType: P
  } = (0, T.useAutomodRulesList)(j), b = {
    [S.AutomodTriggerCategory.MEMBERS]: x.default.Messages.GUILD_SETTINGS_AUTOMOD_MEMBER_CATEGORY_TITLE,
    [S.AutomodTriggerCategory.CONTENT]: x.default.Messages.GUILD_SETTINGS_AUTOMOD_CONTENT_CATEGORY_TITLE
  }, B = l.useMemo(() => Object.values(null != P ? P : {}).flat().filter(E.isNotNullish), [P]);
  l.useEffect(() => {
    G && M(null)
  }, [j]);
  let y = l.useCallback((e, t) => {
      if (null != e) {
        var s, a;
        return null !== (a = null === (s = B.find(t => {
          let {
            id: s
          } = t;
          return s === e
        })) || void 0 === s ? void 0 : s.name) && void 0 !== a ? a : null
      }
      return null != t ? (0, S.triggerConfigs)[t].getDefaultRuleName() : null
    }, [B]),
    F = l.useMemo(() => {
      var e, t;
      return y(null !== (e = null == p ? void 0 : p.id) && void 0 !== e ? e : null, null !== (t = null == p ? void 0 : p.triggerType) && void 0 !== t ? t : null)
    }, [y, p]);
  l.useEffect(() => {
    A(G, (0, h.createOnPreventNavigation)(F))
  }, [A, G, F]);
  let H = (0, S.useAvailableTriggerTypes)(j),
    k = e => (0, a.jsx)(a.Fragment, {
      children: e.map(e => {
        var t;
        return (0, a.jsx)(g.default, {
          guildId: j,
          triggerType: e,
          rules: null !== (t = P[e]) && void 0 !== t ? t : [],
          initWithEdit: v === R.GuildSettingsSubsections.AUTOMOD_MENTION_SPAM && e === C.AutomodTriggerType.MENTION_SPAM
        }, e)
      })
    });
  return (0, a.jsxs)(r.FormSection, {
    title: x.default.Messages.GUILD_SETTINGS_AUTOMOD_TITLE,
    tag: "h1",
    children: [(0, a.jsxs)("div", {
      className: L.descriptionContainer,
      children: [(0, a.jsxs)(r.FormSection, {
        tag: "h3",
        className: L.description,
        titleClassName: L.descriptionHeader,
        children: [(0, a.jsx)(r.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: x.default.Messages.GUILD_SETTINGS_AUTOMOD_MESSAGE_FILTER_DESCRIPTION
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/medium",
          className: L.helpUrl,
          children: x.default.Messages.GUILD_AUTOMOD_LEARN_MORE_LINK.format({
            helpUrl: _.default.getArticleURL(R.HelpdeskArticles.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      }), (0, a.jsxs)("div", {
        className: L.descriptionAvatarContainer,
        children: [(0, a.jsx)(r.Avatar, {
          src: (0, I.getAutomodAvatarURL)(),
          size: r.AvatarSizes.SIZE_80,
          "aria-label": x.default.Messages.GUILD_AUTOMOD_USERNAME
        }), (0, a.jsx)(c.TextBadge, {
          text: (0, a.jsxs)("div", {
            className: L.automodBadgeText,
            children: [(0, a.jsx)(u.default, {
              width: 12,
              height: 12,
              className: L.checkmarkIcon
            }), (0, a.jsx)(r.Text, {
              variant: "text-xs/bold",
              className: L.automodText,
              children: x.default.Messages.GUILD_AUTOMOD_USERNAME
            })]
          }),
          color: i.default.unsafe_rawColors.BRAND_500.css,
          className: L.textBadge
        })]
      })]
    }), U ? (0, a.jsx)(f.default, {}) : Object.entries(H).map(e => {
      let [t, s] = e;
      if (0 === s.length) return (0, a.jsx)(l.Fragment, {}, t);
      let n = null != b[t] ? (0, a.jsx)(r.FormSection, {
        tag: "h3",
        className: L.categoryHeader,
        children: (0, a.jsx)(r.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          children: b[t]
        })
      }) : null;
      return (0, a.jsxs)("div", {
        className: L.categoryContainer,
        children: [n, k(s)]
      }, t)
    }), null != D && (0, a.jsx)(d.GuildExplicitContentFilter, {
      guild: D,
      withDivider: !1,
      className: L.explicitContentFilterSection
    }), (0, a.jsx)(N.default, {
      guildId: j,
      existingRules: B
    }), G && (0, a.jsx)("div", {
      className: L.endSpacer
    })]
  })
}