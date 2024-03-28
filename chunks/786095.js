"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120"), n("724458");
var a = n("735250"),
  i = n("470079"),
  l = n("481060"),
  s = n("239091"),
  u = n("727072"),
  r = n("85960"),
  o = n("676317"),
  d = n("65912"),
  c = n("556012"),
  f = n("572456"),
  E = n("434404"),
  M = n("981631"),
  m = n("273504"),
  g = n("689938"),
  S = n("454775");
let v = m.AutomodTriggerType.KEYWORD;

function p(e, t) {
  let {
    perGuildMaxCount: n
  } = r.triggerConfigs[v], {
    isLoading: m,
    saveRule: p
  } = (0, d.useAutomodEditingRuleActions)(), {
    createNewEditingRule: I
  } = (0, d.useAutomodEditingRuleState)(), [h, A] = i.useState(!1), [_, T] = (0, u.useSyncAutomodRules)(t), {
    rulesByTriggerType: C,
    updateRule: R
  } = (0, u.useAutomodRulesList)(t), y = i.useMemo(() => {
    var e;
    return null !== (e = C[v]) && void 0 !== e ? e : []
  }, [C]), O = 0 === y.length, x = n > y.length && !O;
  if (!i.useMemo(() => (0, o.canCurrentUserManageMessageFilters)(t), [t]) || null == e || 0 === e.length || null == t) return null;
  let N = e.split(" ").length,
    j = () => {
      null != t && ((0, s.closeContextMenu)(), E.default.open(t, M.GuildSettingsSections.GUILD_AUTOMOD), setTimeout(() => {
        I(t, v, {
          triggerMetadata: {
            keywordFilter: [e],
            regexPatterns: [],
            allowList: []
          }
        })
      }, 400))
    },
    b = async t => {
      var n, a;
      if ((0, s.closeContextMenu)(), !await (0, f.confirmAddKeyword)(t.name, e)) return;
      let i = {
        ...t,
        triggerMetadata: {
          ...t.triggerMetadata,
          keywordFilter: [...null !== (a = null === (n = t.triggerMetadata) || void 0 === n ? void 0 : n.keywordFilter) && void 0 !== a ? a : [], e]
        }
      };
      await p(i, y), R(i)
    }, P = (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.MenuItem, {
        id: "automod-rules-loading",
        label: g.default.Messages.LOADING
      })
    });
  return !_ && (P = (0, a.jsxs)(a.Fragment, {
    children: [O && (0, a.jsx)(l.MenuItem, {
      id: "add-first-rule",
      label: g.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
      action: j,
      disabled: m
    }), y.map(e => {
      let t = (0, r.getAvailableActionTypes)(v).reduce((t, n) => {
        let a = e.actions.find(e => {
          let {
            type: t
          } = e;
          return n === t
        });
        if (null == a) return t;
        let i = (0, c.getActionInfo)(n, a);
        return t += ", ".concat(null == i ? void 0 : i.headerText)
      }, "");
      return (0, a.jsx)(l.MenuRadioItem, {
        id: e.id,
        label: e.name,
        subtext: (0, a.jsx)(l.Text, {
          color: "text-muted",
          className: S.actionTextHeader,
          variant: "text-xs/normal",
          children: t.slice(2)
        }),
        group: "automod-rule-selection",
        checked: !1,
        disabled: m,
        action: () => b(e)
      }, e.id)
    }), x && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.MenuSeparator, {}), (0, a.jsx)(l.MenuItem, {
        id: "add-another-rule",
        label: g.default.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
        action: j,
        disabled: m
      })]
    })]
  })), (0, a.jsx)(l.MenuItem, {
    id: "guild-automod-add-selection",
    label: g.default.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({
      keywordCount: N
    }),
    onFocus: () => {
      !h && (A(!0), T())
    },
    children: P
  })
}