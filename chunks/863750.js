n(47120);
var i, o = n(442837),
  a = n(570140);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let c = {
disable_alpha_voice_panel: 'Disable new Voice Panel UI: Currently the new voice ui is defaulted ON for staff.  It\'s not feature complete so if there\'s something you are missing, or you find a problem, you can disable it here.',
enable_recently_active: 'Enable recently active channels',
happening_main_tab: 'Enable Happening tab containing summaries',
enable_recently_active_summaries: 'Enable summaries in recently active view',
disable_theme_key: 'Disable reloading the entire app when the theme changes',
theme_setting_in_account_sheet: 'Show theme settings in the Account action sheet',
cozy_header: 'Cozy header',
mobile_profile_effect_debug_controls: 'mobile_profile_effect_debug_controls',
nav_experiment_server_drawer_enabled: '[NavI] Enable expandable server drawer',
nav_experiment_server_drawer_no_activity: '[NavI] Hide activity in server drawer',
nav_experiment_you_bar_grounded: '[NavI] Grounded you bar',
nav_experiment_you_bar_large_buttons: '[NavI] Small buttons in you bar',
nav_experiment_you_bar_large_messages: '[NavI] Large avatars in messages',
force_channel_list_v2: 'Force channel list V2',
shop_include_unpublished: '[Shop] show unpublished items in shop',
disable_channel_list: 'Disable channel list -- for performance testing. You probably don\'t want to turn this on, lol',
show_icymi_debug_scores: 'Show ICYMI debug scores',
only_channel_screen: 'Down with PanelsView, rely on only ChannelScreen!'
  },
  l = {};
class s extends(i = o.ZP.DeviceSettingsStore) {
  getUserAgnosticState() {
return {
  toggleStates: l
};
  }
  initialize(e) {
for (var t in c) {
  var n, i;
  let o = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
  l[t] = o;
}
  }
  get(e) {
var t;
return null !== (t = l[e]) && void 0 !== t && t;
  }
  set(e, t) {
return l[e] = t, t;
  }
  all() {
return l;
  }
  allWithDescriptions() {
return Object.entries(l).map(e => {
  let [t, n] = e;
  return [
    t,
    n,
    c[t]
  ];
});
  }
}
r(s, 'displayName', 'DevToolsDesignTogglesStore'), r(s, 'persistKey', 'DevToolsDesignTogglesStore'), t.Z = new s(a.Z, {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function(e) {
l[e.toggle] = e.value;
  }
});