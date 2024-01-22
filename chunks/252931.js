"use strict";
n.r(t), n.d(t, {
  getInventoryGuildPacksUserExperimentConfig: function() {
    return s
  },
  useInventoryGuildPacksUserExperiment: function() {
    return c
  },
  useInventoryGuildSettingsExperiment: function() {
    return E
  }
});
var l = n("65597"),
  i = n("862205"),
  a = n("697218"),
  u = n("719923"),
  o = n("782340");
let d = (0, i.createExperiment)({
    kind: "user",
    id: "2023-05_inventory_guild_packs",
    label: "Inventory Guild Packs Experiment",
    defaultConfig: {
      desktopViewAndUseAndCollectEnabled: !1,
      mobileViewAndUseEnabled: !1,
      mobileAndFreemiumCollectEnabled: !1,
      autoUnfurlReactionTooltip: !1,
      collectOffOverride: !1
    },
    treatments: [{
      id: 1,
      label: "Desktop view/use/collect",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !1,
        mobileAndFreemiumCollectEnabled: !1,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 2,
      label: "Desktop view/use/collect and mobile view/use",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !1,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 3,
      label: "Read-only pack emoji for logged out users",
      config: {
        desktopViewAndUseAndCollectEnabled: !1,
        mobileViewAndUseEnabled: !1,
        mobileAndFreemiumCollectEnabled: !1,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 4,
      label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !0,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 5,
      label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !0,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !1
      }
    }, {
      id: 6,
      label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !0,
        autoUnfurlReactionTooltip: !0,
        collectOffOverride: !1
      }
    }, {
      id: 7,
      label: "Nitro same as bucket 4 + auto-unfurl reactions",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !0,
        autoUnfurlReactionTooltip: !0,
        collectOffOverride: !1
      }
    }, {
      id: 8,
      label: "Collection off everywhere",
      config: {
        desktopViewAndUseAndCollectEnabled: !0,
        mobileViewAndUseEnabled: !0,
        mobileAndFreemiumCollectEnabled: !1,
        autoUnfurlReactionTooltip: !1,
        collectOffOverride: !0
      }
    }]
  }),
  r = e => {
    let {
      user: t,
      config: n
    } = e, {
      desktopViewAndUseAndCollectEnabled: l,
      mobileViewAndUseEnabled: i,
      mobileAndFreemiumCollectEnabled: a,
      autoUnfurlReactionTooltip: o,
      collectOffOverride: d
    } = n, r = u.default.isPremium(t);
    return {
      viewAndUseEnabled: l,
      showTryPacksModalAndV2Copy: a,
      collectEnabled: !d && (r ? l : a),
      autoUnfurlReactionTooltip: o
    }
  },
  s = e => {
    let {
      user: t,
      autoTrackExposure: n = !0
    } = e;
    return null == t ? {
      viewAndUseEnabled: !1,
      showTryPacksModalAndV2Copy: !1,
      collectEnabled: !1,
      autoUnfurlReactionTooltip: !1
    } : r({
      user: t,
      config: d.getCurrentConfig({
        location: "inventory_guild_packs_experiment"
      }, {
        autoTrackExposure: n
      })
    })
  },
  c = function() {
    var e;
    let {
      expressionSourceGuild: t,
      autoTrackExposure: n = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      expressionSourceGuild: void 0,
      autoTrackExposure: !0
    }, i = (0, l.default)([a.default], () => a.default.getCurrentUser()), u = d.useExperiment({
      location: "inventory_guild_setting_experiment"
    }, {
      autoTrackExposure: n
    }), {
      viewAndUseEnabled: o,
      showTryPacksModalAndV2Copy: s,
      collectEnabled: c,
      autoUnfurlReactionTooltip: f
    } = r({
      user: i,
      config: u
    }), E = o && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
    return {
      viewAndUseEnabled: o,
      collectEnabled: E,
      showTryPacksModalAndV2Copy: s,
      autoUnfurlReactionTooltip: f
    }
  },
  f = (0, i.createExperiment)({
    kind: "guild",
    id: "2023-06_inventory_guild_setting",
    label: "Inventory Guild Settings Experiment",
    defaultConfig: {
      showSettingsToggle: !1,
      allowCollection: !1,
      getNewSettingsDescriptionLine1: () => null,
      getNewSettingsDescriptionLine2: () => null
    },
    treatments: [{
      id: 1,
      label: "Show settings toggle, but collection is not allowed.",
      config: {
        showSettingsToggle: !0,
        allowCollection: !1,
        getNewSettingsDescriptionLine1: () => null,
        getNewSettingsDescriptionLine2: () => null
      }
    }, {
      id: 2,
      label: "Show settings toggle, and collection is allowed sometime in August.",
      config: {
        showSettingsToggle: !0,
        allowCollection: !0,
        getNewSettingsDescriptionLine1: () => null,
        getNewSettingsDescriptionLine2: () => null
      }
    }, {
      id: 3,
      label: "Show settings toggle, and collection is allowed in late August.",
      config: {
        showSettingsToggle: !0,
        allowCollection: !0,
        getNewSettingsDescriptionLine1: () => null,
        getNewSettingsDescriptionLine2: () => null
      }
    }, {
      id: 4,
      label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
      config: {
        showSettingsToggle: !0,
        allowCollection: !0,
        getNewSettingsDescriptionLine1: () => o.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
        getNewSettingsDescriptionLine2: () => o.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
      }
    }]
  }),
  E = function() {
    let {
      guildId: e,
      autoTrackExposure: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      guildId: void 0,
      autoTrackExposure: !0
    }, n = f.useExperiment({
      guildId: null != e ? e : "",
      location: "482926_3"
    }, {
      autoTrackExposure: void 0 === t || t
    });
    return {
      showSettingsToggle: n.showSettingsToggle,
      allowCollection: n.allowCollection,
      getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
      getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
    }
  }