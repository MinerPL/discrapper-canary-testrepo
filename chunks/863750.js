t(47120);
var r,
	i = t(442837),
	o = t(570140);
function a(e, n, t) {
	return (
		n in e
			? Object.defineProperty(e, n, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[n] = t),
		e
	);
}
let c = {
		disable_alpha_voice_panel: "Disable new Voice Panel UI: Currently the new voice ui is defaulted ON for staff.  It's not feature complete so if there's something you are missing, or you find a problem, you can disable it here.",
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
		disable_channel_list: "Disable channel list -- for performance testing. You probably don't want to turn this on, lol",
		show_icymi_debug_scores: 'Show ICYMI debug scores',
		only_channel_screen: 'Down with PanelsView, rely on only ChannelScreen!'
	},
	l = {};
class s extends (r = i.ZP.DeviceSettingsStore) {
	getUserAgnosticState() {
		return { toggleStates: l };
	}
	initialize(e) {
		for (var n in c) {
			var t, r;
			let i = null !== (r = null == e ? void 0 : null === (t = e.toggleStates) || void 0 === t ? void 0 : t[n]) && void 0 !== r && r;
			l[n] = i;
		}
	}
	get(e) {
		var n;
		return null !== (n = l[e]) && void 0 !== n && n;
	}
	set(e, n) {
		return (l[e] = n), n;
	}
	all() {
		return l;
	}
	allWithDescriptions() {
		return Object.entries(l).map((e) => {
			let [n, t] = e;
			return [n, t, c[n]];
		});
	}
}
a(s, 'displayName', 'DevToolsDesignTogglesStore'),
	a(s, 'persistKey', 'DevToolsDesignTogglesStore'),
	(n.Z = new s(o.Z, {
		DEV_TOOLS_DESIGN_TOGGLE_SET: function (e) {
			l[e.toggle] = e.value;
		}
	}));
