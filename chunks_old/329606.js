"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("222007"), s("834022");
var a = s("37983"),
  l = s("884691"),
  n = s("446674"),
  i = s("669491"),
  r = s("77078"),
  o = s("900938"),
  d = s("817674"),
  u = s("944441"),
  c = s("956089"),
  E = s("449008"),
  _ = s("701909"),
  I = s("523096"),
  T = s("353575"),
  S = s("296839"),
  f = s("4443"),
  m = s("151866"),
  N = s("646834"),
  g = s("124188"),
  h = s("155158"),
  C = s("143460"),
  R = s("49111"),
  x = s("782340"),
  L = s("412883");

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
  } = (0, n.useStateFromStoresObject)([o.default], () => o.default.getProps()), G = null !== (s = null !== (t = null == D ? void 0 : D.id) && void 0 !== t ? t : O) && void 0 !== s ? s : R.EMPTY_STRING_SNOWFLAKE_ID, j = null != p, [U] = (0, T.useSyncAutomodRulesEffect)(G), {
    rulesByTriggerType: P
  } = (0, T.useAutomodRulesList)(G), b = {
    [S.AutomodTriggerCategory.MEMBERS]: x.default.Messages.GUILD_SETTINGS_AUTOMOD_MEMBER_CATEGORY_TITLE,
    [S.AutomodTriggerCategory.CONTENT]: x.default.Messages.GUILD_SETTINGS_AUTOMOD_CONTENT_CATEGORY_TITLE
  }, B = l.useMemo(() => Object.values(null != P ? P : {}).flat().filter(E.isNotNullish), [P]);
  l.useEffect(() => {
    j && M(null)
  }, [G]);
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
    A(j, (0, h.createOnPreventNavigation)(F))
  }, [A, j, F]);
  let H = (0, S.useAvailableTriggerTypes)(G),
    k = e => (0, a.jsx)(a.Fragment, {
      children: e.map(e => {
        var t;
        return (0, a.jsx)(g.default, {
          guildId: G,
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
      guildId: G,
      existingRules: B
    }), j && (0, a.jsx)("div", {
      className: L.endSpacer
    })]
  })
}