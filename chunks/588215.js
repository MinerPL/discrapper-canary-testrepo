var r, i;
n.d(t, {
	d$: function () {
		return r;
	},
	rL: function () {
		return a;
	},
	si: function () {
		return s;
	}
});
let a = 2 * n(70956).Z.Millis.DAY;
function s(e) {
	let { joinedAt: t, userId: n } = e;
	return null == t
		? null
		: {
				guild_joined_at: new Date(t).getTime(),
				user_id: n
			};
}
((i = r || (r = {}))[(i.ORDER_BY_UNSPECIFIED = 0)] = 'ORDER_BY_UNSPECIFIED'), (i[(i.ORDER_BY_GUILD_JOINED_AT_DESC = 1)] = 'ORDER_BY_GUILD_JOINED_AT_DESC'), (i[(i.ORDER_BY_GUILD_JOINED_AT_ASC = 2)] = 'ORDER_BY_GUILD_JOINED_AT_ASC'), (i[(i.ORDER_BY_USER_ID_DESC = 3)] = 'ORDER_BY_USER_ID_DESC'), (i[(i.ORDER_BY_USER_ID_ASC = 4)] = 'ORDER_BY_USER_ID_ASC');
