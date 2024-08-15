var r = n(544891),
	i = n(570140),
	a = n(668781),
	s = n(346479),
	o = n(929991),
	l = n(480739),
	u = n(985518),
	c = n(228392),
	d = n(981631),
	_ = n(689938);
async function E(e, t, n) {
	try {
		return await e();
	} catch (e) {
		var r;
		(null === (r = e.body) || void 0 === r ? void 0 : r.code) === d.evJ.NON_MODERATED_TAG_REQUIRED &&
			a.Z.show({
				title: t,
				body: n
			});
	}
}
t.Z = {
	resort(e) {
		i.Z.dispatch({
			type: 'RESORT_THREADS',
			channelId: e
		});
	},
	createForumTag: (e, t) =>
		r.tn.post({
			url: d.ANM.FORUM_TAGS(t),
			body: {
				name: e.name,
				emoji_id: e.emojiId,
				emoji_name: null != e.emojiId ? void 0 : e.emojiName,
				moderated: e.moderated
			}
		}),
	updateForumTag(e, t) {
		let n = r.tn.put({
			url: d.ANM.FORUM_TAG(t, e.id),
			body: {
				name: e.name,
				emoji_id: e.emojiId,
				emoji_name: null == e.emojiId ? e.emojiName : void 0,
				moderated: e.moderated
			}
		});
		E(() => n, _.Z.Messages.FORUM_TAG_EDIT_ERROR, _.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED);
	},
	deleteForumTag(e, t) {
		let n = r.tn.del({ url: d.ANM.FORUM_TAG(e, t) });
		E(() => n, _.Z.Messages.FORUM_TAG_REMOVE_ERROR, _.Z.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED);
	},
	updateForumPostTags: async (e, t) => (
		await s.Z.unarchiveThreadIfNecessary(e),
		r.tn.patch({
			url: d.ANM.CHANNEL(e),
			body: { applied_tags: t }
		})
	),
	hideAdminOnboarding(e, t) {
		i.Z.dispatch({
			type: 'ADMIN_ONBOARDING_GUIDE_HIDE',
			channelId: e,
			hide: t
		});
	},
	markPostAsSeen(e, t, n) {
		(0, o.a8)((0, u.UP)(e), t, n);
	},
	markPostAsUnseen(e, t, n) {
		(0, o.FL)((0, u.UP)(e), t, n);
	},
	flushSeenItems(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
		(0, o.rS)((0, u.UP)(e), t);
	},
	async searchForumPosts(e, t, n, r) {
		i.Z.dispatch({
			type: 'FORUM_SEARCH_START',
			channelId: t
		});
		try {
			let a = await s.Z.searchThreads(e, t, n, r);
			(0, c.Js)({
				guildId: e,
				channelId: t,
				numSearchResults: a.length
			}),
				i.Z.dispatch({
					type: 'FORUM_SEARCH_SUCCESS',
					channelId: t,
					threadIds: a
				});
		} catch {
			i.Z.dispatch({
				type: 'FORUM_SEARCH_FAILURE',
				channelId: t
			});
		}
	},
	updateForumSearchQuery(e, t) {
		i.Z.dispatch({
			type: 'FORUM_SEARCH_QUERY_UPDATED',
			channelId: e,
			query: t
		});
	},
	clearForumSearch(e) {
		i.Z.dispatch({
			type: 'FORUM_SEARCH_CLEAR',
			channelId: e
		});
	}
};
