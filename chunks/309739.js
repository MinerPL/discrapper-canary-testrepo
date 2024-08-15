t.d(s, {
	Z: function () {
		return g;
	}
}),
	t(47120);
var n = t(735250);
t(470079);
var a = t(481060),
	i = t(787740),
	r = t(134598),
	o = t(921801),
	l = t(430824),
	c = t(63063),
	d = t(358085),
	_ = t(709054),
	E = t(695346),
	u = t(726985),
	I = t(981631),
	T = t(689938),
	S = t(359043),
	N = t(224499);
function C() {
	let e = E.G6.useSetting(),
		s = E.Wz.useSetting(),
		t = d.isPlatformEmbedded
			? T.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC_EMBEDDED
			: T.Z.Messages.SHOW_CURRENT_ACTIVITY_DESC,
		i = (e) => {
			E.Wz.updateSetting(e),
				!(function (e) {
					let s = () => {
						E.SE.updateSetting(e ? _.default.keys(l.Z.getGuilds()) : []);
					};
					(0, a.openModal)((e) =>
						(0, n.jsx)(a.ConfirmModal, {
							header: T.Z.Messages.USER_DM_SETTINGS_TITLE,
							confirmText: T.Z.Messages.NO_TEXT,
							cancelText: T.Z.Messages.YES_TEXT,
							onCancel: s,
							confirmButtonColor: a.Button.Colors.BRAND,
							...e,
							children: (0, n.jsx)(a.Text, {
								variant: 'text-md/normal',
								children: T.Z.Messages.ACTIVITY_RESTRICTION_MODAL_DESC
							})
						})
					);
				})(e);
		};
	return (0, n.jsx)(o.F, {
		setting: u.s6.ACTIVITY_PRIVACY_STATUS,
		children: (0, n.jsxs)(a.FormSection, {
			className: N.marginBottom40,
			children: [
				(0, n.jsx)(a.FormTitle, {
					tag: a.FormTitleTags.H5,
					className: N.marginBottom8,
					children: T.Z.Messages.ACTIVITY_STATUS
				}),
				(0, n.jsx)(a.FormSwitch, {
					value: e,
					onChange: (e) => E.G6.updateSetting(e),
					note: t,
					children: T.Z.Messages.SHOW_CURRENT_ACTIVITY
				}),
				(0, n.jsx)(a.FormSwitch, {
					value: !s,
					note: T.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT_NOTE.format({
						helpdeskArticle: c.Z.getArticleURL(I.BhN.ACTIVITY_STATUS_SETTINGS)
					}),
					onChange: (e) => i(!e),
					children: T.Z.Messages.ACTIVITY_RESTRICTION_DEFAULT
				})
			]
		})
	});
}
function m() {
	let e = E.cP.useSetting(),
		s = E.Ou.useSetting();
	return (0, n.jsx)(o.F, {
		setting: u.s6.ACTIVITY_PRIVACY_RICH_PRESENCE,
		children: (0, n.jsxs)(a.FormSection, {
			className: N.marginBottom40,
			children: [
				(0, n.jsx)(a.FormTitle, {
					tag: a.FormTitleTags.H5,
					className: N.marginBottom8,
					children: T.Z.Messages.ACTIVITY_PARTY_PRIVACY
				}),
				(0, n.jsx)(a.FormSwitch, {
					value: e,
					note: T.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS_HELP,
					onChange: (e) => E.cP.updateSetting(e),
					children: T.Z.Messages.ACTIVITY_PARTY_PRIVACY_FRIENDS
				}),
				(0, n.jsx)(a.FormSwitch, {
					value: s,
					note: T.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL_HELP,
					onChange: (e) => E.Ou.updateSetting(e),
					children: T.Z.Messages.ACTIVITY_PARTY_PRIVACY_VOICE_CHANNEL
				})
			]
		})
	});
}
function A() {
	return (0, n.jsx)(o.F, {
		setting: u.s6.ACTIVITY_PRIVACY_BROADCASTING,
		children: (0, n.jsxs)(a.FormSection, {
			className: N.marginBottom40,
			children: [
				(0, n.jsxs)(a.FormTitle, {
					tag: a.FormTitleTags.H5,
					className: N.marginBottom8,
					children: [T.Z.Messages.BROADCASTING_SETTINGS, (0, n.jsx)(i.Z, { className: S.betaTag })]
				}),
				(0, n.jsx)(a.FormText, {
					type: a.FormText.Types.DESCRIPTION,
					className: N.marginBottom20,
					children: T.Z.Messages.BROADCASTING_SETTINGS_DESCRIPTION
				}),
				(0, n.jsx)(a.FormItem, {
					children: (0, n.jsx)(a.Button, {
						onClick: () => (0, r.X)(),
						size: a.ButtonSizes.SMALL,
						children: T.Z.Messages.BROADCASTING_SETTINGS_CTA
					})
				})
			]
		})
	});
}
function O() {
	return (0, n.jsx)(o.F, {
		setting: u.s6.ACTIVITY_PRIVACY_TOS,
		children: (0, n.jsx)(a.FormSection, {
			className: N.marginBottom40,
			children: (0, n.jsx)(a.FormNotice, {
				type: a.FormNotice.Types.PRIMARY,
				body: T.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
					termsLink: I.EYA.TERMS,
					privacyLink: I.EYA.PRIVACY
				})
			})
		})
	});
}
function g(e) {
	let { className: s, showHeader: t = !0 } = e;
	return (0, n.jsxs)(a.FormSection, {
		className: s,
		tag: a.FormTitleTags.H1,
		title: t ? T.Z.Messages.ACTIVITY_PRIVACY : null,
		children: [(0, n.jsx)(C, {}), (0, n.jsx)(m, {}), (0, n.jsx)(A, {}), (0, n.jsx)(O, {})]
	});
}
