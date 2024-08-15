n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(442837),
	a = n(704215),
	s = n(524437),
	r = n(381499),
	l = n(433517),
	o = n(581364),
	c = n(536442),
	d = n(592125),
	u = n(915486),
	_ = n(48481),
	E = n(981631),
	h = n(71509);
function m(e, t) {
	let n = !1;
	return (
		null == e.userContent &&
			(e.userContent = {
				dismissedContents: new Uint8Array(),
				lastReceivedChangelogId: '0',
				recurringDismissibleContentStates: {}
			}),
		null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
		!(0, u.jl)(e.userContent.dismissedContents, t) && ((e.userContent.dismissedContents = (0, u.GV)(e.userContent.dismissedContents, t)), (n = !0)),
		n
	);
}
function I(e, t, n) {
	return !!c.qc.hasHiddenHotspot(t) && m(e, n);
}
let g = [
	{
		version: 2,
		run(e) {
			var t, n, i;
			let a;
			if ((((i = a || (a = {})).Mentions = 'Recent Mentions'), (i.Unreads = 'Inbox'), null != e.inbox)) return !1;
			let r = !1,
				o = s.f9.create();
			(e.inbox = o), l.K.get('seenInboxTutorial', !1) && ((o.viewedTutorial = !0), (r = !0));
			let c = l.K.get('recentsButtonTab2');
			null != c && ((o.currentTab = 'Recent Mentions' === c ? s.X.MENTIONS : s.X.UNREADS), (r = !0));
			let u = null !== (t = l.K.get('unread-messages-collapsed-channels')) && void 0 !== t ? t : {};
			for (let t in u) {
				if (!u[t]) continue;
				let i = d.Z.getChannel(t);
				null != i &&
					((r = !0),
					(0, _.i7)(e, null !== (n = i.guild_id) && void 0 !== n ? n : '0', i.id, (e) => {
						e.collapsedInInbox = !0;
					}));
			}
			return r;
		},
		cleanup() {
			l.K.remove('seenInboxTutorial'), l.K.remove('recentsButtonTab2'), l.K.remove('unread-messages-collapsed-channels');
		}
	},
	{
		version: 3,
		run(e) {
			let { state: t } = i.ZP.PersistedStore.migrateAndReadStoreState('EmojiStore', [() => ({ diversitySurrogate: l.K.get('EmojiDiversitySurrogate') || '' })]);
			if (null == t) return !1;
			let n = !1;
			return null != t.diversitySurrogate && '' !== t.diversitySurrogate && (null == e.textAndImages && (e.textAndImages = s.Me.create()), null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = r.Gm.create()), (e.textAndImages.diversitySurrogate.value = t.diversitySurrogate), (n = !0)), n;
		},
		cleanup() {}
	},
	{
		version: 4,
		run(e) {
			let t = !1;
			return (!0 === l.K.get('HAS_SEEN_HUB_UPSELL') || c.qc.hasHiddenHotspot(c.v6.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) && (t = m(e, a.z.HUB_WAITLIST_UPSELL)), t;
		},
		cleanup() {
			l.K.remove('HAS_SEEN_HUB_UPSELL');
		}
	},
	{
		version: 5,
		run(e) {
			var t, n, i, a, o, c, d;
			let u = !1;
			(e.textAndImages = null !== (t = e.textAndImages) && void 0 !== t ? t : s.Me.create()), (e.notifications = null !== (n = e.notifications) && void 0 !== n ? n : s.sf.create()), (e.privacy = null !== (i = e.privacy) && void 0 !== i ? i : s.bE.create()), (e.voiceAndVideo = null !== (a = e.voiceAndVideo) && void 0 !== a ? a : s.v_.create()), (e.gameLibrary = null !== (o = e.gameLibrary) && void 0 !== o ? o : s.Fm.create()), (e.debug = null !== (c = e.debug) && void 0 !== c ? c : s.tA.create());
			let _ = null !== (d = l.K.get('UserSettingsStore')) && void 0 !== d ? d : {};
			return 'boolean' == typeof _.useRichChatTextBox && ((e.textAndImages.useRichChatInput = r.D5.create({ value: _.useRichChatTextBox })), (u = !0)), 'string' == typeof _.renderSpoilers && ((e.textAndImages.renderSpoilers = r.Gm.create({ value: _.renderSpoilers })), (u = !0)), 'boolean' == typeof _.useThreadSidebar && ((e.textAndImages.useThreadSidebar = r.D5.create({ value: _.useThreadSidebar })), (u = !0)), 'boolean' == typeof _.showInAppNotifications && ((e.notifications.showInAppNotifications = r.D5.create({ value: _.showInAppNotifications })), (u = !0)), _.emojiPickerCollapsedSections instanceof Array && ((e.textAndImages.emojiPickerCollapsedSections = _.emojiPickerCollapsedSections), (u = !0)), _.stickerPickerCollapsedSections instanceof Array && ((e.textAndImages.stickerPickerCollapsedSections = _.stickerPickerCollapsedSections), (u = !0)), 'boolean' == typeof _.viewImageDescriptions && ((e.textAndImages.viewImageDescriptions = r.D5.create({ value: _.viewImageDescriptions })), (u = !0)), 'boolean' == typeof _.showCommandSuggestions && ((e.textAndImages.showCommandSuggestions = r.D5.create({ value: _.showCommandSuggestions })), (u = !0)), 'boolean' == typeof _.alwaysPreviewVideo && ((e.voiceAndVideo.alwaysPreviewVideo = r.D5.create({ value: _.alwaysPreviewVideo })), (u = !0)), 'boolean' == typeof _.notifyFriendsOnGoLive && ((e.notifications.notifyFriendsOnGoLive = r.D5.create({ value: _.notifyFriendsOnGoLive })), (u = !0)), 'boolean' == typeof _.installShortcutDesktop && ((e.gameLibrary.installShortcutDesktop = r.D5.create({ value: _.installShortcutDesktop })), (u = !0)), 'boolean' == typeof _.installShortcutStartMenu && ((e.gameLibrary.installShortcutStartMenu = r.D5.create({ value: _.installShortcutStartMenu })), (u = !0)), 'boolean' == typeof _.allowActivityPartyPrivacyFriends && ((e.privacy.allowActivityPartyPrivacyFriends = r.D5.create({ value: _.allowActivityPartyPrivacyFriends })), (u = !0)), 'boolean' == typeof _.allowActivityPartyPrivacyVoiceChannel && ((e.privacy.allowActivityPartyPrivacyVoiceChannel = r.D5.create({ value: _.allowActivityPartyPrivacyVoiceChannel })), (u = !0)), 'boolean' == typeof _.rtcPanelShowVoiceStates && ((e.debug.rtcPanelShowVoiceStates = r.D5.create({ value: _.rtcPanelShowVoiceStates })), (u = !0)), u;
		},
		cleanup() {}
	},
	{
		version: 7,
		run: (e) => I(e, c.v6.APPLICATION_COMMAND_TOOLTIP, a.z.APPLICATION_COMMAND_TOOLTIP),
		cleanup() {}
	},
	{
		version: 8,
		run: (e) => I(e, c.v6.CHANNEL_BANNER_MEMBER_LIST_NOTICE, a.z.CHANNELINFO_CHANNELBANNER_NOTICE),
		cleanup() {}
	},
	{
		version: 9,
		run: (e) => (c.qc.hasHiddenHotspot(c.v6.MULTI_ACCOUNT_TOOLTIP) && l.K.set(h.Ip, 'true'), I(e, c.v6.MULTI_ACCOUNT_TOOLTIP, a.z.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
		cleanup() {}
	},
	{
		version: 10,
		run(e) {
			var t;
			let n = I(e, c.v6.HUB_LINK_CHANNEL_NOTICE, a.z.CHANNEL_NOTICE_HUBLINK),
				i = null !== (t = l.K.get('channelNotices')) && void 0 !== t ? t : {};
			return !1 === i[E.vID.INVITE] && m(e, a.z.CHANNEL_NOTICE_INVITE) && (n = !0), !1 === i[E.vID.QUICKSWITCHER] && m(e, a.z.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0), !1 === i[E.vID.GUILD_BOOSTING] && m(e, a.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0), n;
		},
		cleanup() {
			l.K.remove('channelNotices');
		}
	},
	{
		version: 11,
		run(e) {
			let t = !1;
			return I(e, c.v6.GUILD_EVENT_UPSELL, a.z.GUILD_HEADER_EVENT_UPSELL) && (t = !0), I(e, c.v6.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP, a.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS) && (t = !0), I(e, c.v6.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, a.z.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = !0), t;
		},
		cleanup() {}
	},
	{
		version: 12,
		run(e) {
			let t = !1;
			return l.K.get('hideNag') && m(e, a.z.NAGBAR_NOTICE_DOWNLOAD) && (t = !0), l.K.get('hideConnectSpotify') && m(e, a.z.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0), l.K.get('hideConnectPlayStation') && m(e, a.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0), l.K.get('hideMFASMSNotice') && m(e, a.z.NAGBAR_NOTICE_MFA_SMS_BACKUP) && (t = !0), t;
		},
		cleanup() {
			l.K.remove('hideNag'), l.K.remove('hideConnectSpotify'), l.K.remove('hideConnectPlayStation'), l.K.remove('hideMFASMSNotice');
		}
	},
	{
		version: 13,
		run(e) {
			let t = !1;
			return l.K.get('hidePremiumPromo') && m(e, a.z.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0), l.K.get('hidePremiumTier2TrialEnding') && m(e, a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = !0), l.K.get('hidePremiumReactivateNotice') && m(e, a.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0), I(e, c.v6.INVITE_SPLASH_GUILD_HEADER_TOOLTIP, a.z.GUILD_HEADER_INVITE_SPLASH) && (t = !0), t;
		},
		cleanup() {
			l.K.remove('hidePremiumPromo'), l.K.remove('hidePremiumTier2TrialEnding'), l.K.remove('hidePremiumReactivateNotice');
		}
	},
	{
		version: 14,
		run: (e) => I(e, c.v6.ACTIVITY_BEB_TUTORIAL, a.z.ACTIVITIES_TUTORIAL_COACH_MARK),
		cleanup() {}
	},
	{
		version: 15,
		run: (e) => I(e, c.v6.NOW_PLAYING_CONSENT_CARD, a.z.NOW_PLAYING_CONSENT_CARD),
		cleanup() {}
	},
	{
		version: 16,
		run(e) {
			let t = l.K.get('PromotionsPersistedStore');
			if (null == t) return !1;
			let n = t._state.lastDismissedOutboundPromotionStartDate;
			return null != n && (null == e.userContent && (e.userContent = s.az.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && ((e.userContent.lastDismissedOutboundPromotionStartDate = r.Gm.create({ value: n })), !0);
		},
		cleanup() {}
	},
	{
		version: 17,
		run(e) {
			let { state: t } = i.ZP.PersistedStore.migrateAndReadStoreState('ExpressionSuggestionsPersistedStore', null);
			if (null == t) return !1;
			let n = t.expressionSuggestionsEnabled;
			return null != n && (null == e.textAndImages && (e.textAndImages = s.Me.create()), null == e.textAndImages.expressionSuggestionsEnabled) && ((e.textAndImages.expressionSuggestionsEnabled = r.D5.create({ value: n })), !0);
		},
		cleanup() {
			l.K.remove('ExpressionSuggestionsPersistedStore');
		}
	},
	{
		version: 18,
		run(e) {
			let t = !1;
			return I(e, c.v6.GUILD_DELETE_FEEDBACK, a.z.GUILD_DELETE_FEEDBACK) && (t = !0), I(e, c.v6.GUILD_LEAVE_FEEDBACK, a.z.GUILD_LEAVE_FEEDBACK) && (t = !0), t;
		},
		cleanup() {}
	},
	{
		version: 19,
		run(e) {
			var t;
			let n = !1;
			return null !== (t = l.K.get('forumHelperCardStorageKey')) && void 0 !== t && t && (n = m(e, a.z.FORUM_CHANNEL_HELPER_CARD)), n;
		},
		cleanup() {
			l.K.remove('forumHelperCardStorageKey');
		}
	},
	{
		version: 20,
		run(e) {
			let t = l.K.get('lastChangeLogId');
			if (null == t) return !1;
			if (!(0, o.BH)(t)) return l.K.remove('lastChangeLogId'), !1;
			if (null == e.userContent) e.userContent = s.az.create();
			else if (null != e.userContent && null != e.userContent.lastReceivedChangelogId && '0' !== e.userContent.lastReceivedChangelogId) return l.K.remove('lastChangeLogId'), !1;
			return (e.userContent.lastReceivedChangelogId = t), !0;
		},
		cleanup() {
			l.K.remove('lastChangeLogId');
		}
	}
];
t.Z = g;
