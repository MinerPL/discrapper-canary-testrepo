n.d(t, {
	V1: function () {
		return E;
	},
	ZI: function () {
		return h;
	}
});
var r = n(524437),
	i = n(381499),
	a = n(570140),
	s = n(514361),
	o = n(238514),
	l = n(210887),
	u = n(695346),
	c = n(675478),
	d = n(981631),
	_ = n(874893);
function E(e) {
	return c.hW.updateAsync(
		'guildFolders',
		(t) => {
			t.folders = e.map((e) => {
				let t = r.yX.create({ guildIds: e.guildIds });
				return null != e.folderId && (t.id = i.r1.create({ value: String(e.folderId) })), null != e.folderColor && (t.color = i.wA.create({ value: String(e.folderColor) })), null != e.folderName && '' !== e.folderName && (t.name = i.Gm.create({ value: String(e.folderName) })), t;
			});
		},
		c.fy.FREQUENT_USER_ACTION
	);
}
function f(e) {
	switch (e) {
		case d.BRd.DARK:
			return r.Q2.DARK;
		case d.BRd.LIGHT:
			return r.Q2.LIGHT;
		case d.BRd.DARKER:
			return r.Q2.DARKER;
		case d.BRd.MIDNIGHT:
			return r.Q2.MIDNIGHT;
		default:
			return r.Q2.DARK;
	}
}
function h(e) {
	let { backgroundGradientPresetId: t, theme: n, useSystemTheme: r } = e,
		s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.fy.INFREQUENT_USER_ACTION,
		l = 'system' === n ? _.K.ON : _.K.OFF;
	if (
		(a.Z.dispatch({
			type: 'UNSYNCED_USER_SETTINGS_UPDATE',
			settings: { useSystemTheme: null != r ? r : l }
		}),
		a.Z.dispatch({
			type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
			changes: {
				appearance: {
					settings: {
						clientThemeSettings: { backgroundGradientPresetId: t },
						theme: 'system' === n ? void 0 : n
					}
				}
			}
		}),
		o.Z.shouldSync('appearance'))
	)
		return c.hW.updateAsync(
			'appearance',
			(e) => {
				var r;
				(e.theme = f(n)), (e.clientThemeSettings = { backgroundGradientPresetId: null != (r = { backgroundGradientPresetId: t }).backgroundGradientPresetId ? i.yC.create({ value: r.backgroundGradientPresetId }) : void 0 });
			},
			s
		);
}
t.ZP = {
	overrideLocale(e) {
		a.Z.dispatch({
			type: 'USER_SETTINGS_LOCALE_OVERRIDE',
			locale: e
		});
	},
	updatedUnsyncedSettings(e) {
		a.Z.dispatch({
			type: 'UNSYNCED_USER_SETTINGS_UPDATE',
			settings: e
		});
	},
	setShouldSyncTextSettings(e) {
		a.Z.dispatch({
			type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
			changes: {
				text: {
					shouldSync: e,
					settings: e
						? {}
						: {
								inlineAttachmentMedia: u.x4.getSetting(),
								inlineEmbedMedia: u.RS.getSetting(),
								renderEmbeds: u.NA.getSetting(),
								renderReactions: u.nc.getSetting(),
								animateEmoji: u.Yk.getSetting(),
								animateStickers: u.Wp.getSetting(),
								gifAutoPlay: u.QK.getSetting()
							}
				}
			}
		});
	},
	setShouldSyncAppearanceSettings(e) {
		var t;
		a.Z.dispatch({
			type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
			changes: {
				appearance: {
					shouldSync: e,
					settings: e
						? {}
						: {
								theme: l.Z.theme,
								clientThemeSettings: { backgroundGradientPresetId: null === (t = s.Z.gradientPreset) || void 0 === t ? void 0 : t.id },
								developerMode: u.Sb.getSetting()
							}
				}
			}
		});
	},
	applySettingsOverride(e) {
		a.Z.dispatch({
			type: 'USER_SETTINGS_OVERRIDE_APPLY',
			settings: e
		});
	},
	clearSettingsOverride() {
		for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		a.Z.dispatch({
			type: 'USER_SETTINGS_OVERRIDE_CLEAR',
			settings: t
		});
	},
	updateLocale: (e) =>
		c.hW.updateAsync(
			'localization',
			(t) => {
				t.locale = i.Gm.create({ value: e });
			},
			c.fy.INFREQUENT_USER_ACTION
		),
	updateTheme(e) {
		a.Z.dispatch({
			type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
			changes: { appearance: { settings: { theme: e } } }
		}),
			o.Z.shouldSync('appearance') &&
				c.hW.updateAsync(
					'appearance',
					(t) => {
						t.theme = f(e);
					},
					c.fy.INFREQUENT_USER_ACTION
				);
	}
};
