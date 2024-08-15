_.d(E, {
	AG: function () {
		return g;
	},
	MY: function () {
		return n;
	},
	Mu: function () {
		return r;
	},
	Of: function () {
		return U;
	},
	QH: function () {
		return A;
	},
	TX: function () {
		return b;
	},
	Wz: function () {
		return w;
	},
	YC: function () {
		return i;
	},
	_6: function () {
		return a;
	},
	_w: function () {
		return V;
	},
	dG: function () {
		return s;
	},
	f2: function () {
		return G;
	},
	i0: function () {
		return p;
	},
	iB: function () {
		return Z;
	},
	ip: function () {
		return P;
	},
	ix: function () {
		return v;
	},
	ne: function () {
		return I;
	},
	tx: function () {
		return m;
	},
	vH: function () {
		return h;
	},
	zE: function () {
		return y;
	}
}),
	_(47120);
var t,
	T,
	I,
	n,
	s,
	A,
	r,
	a,
	i,
	C,
	N,
	o,
	u,
	S,
	M,
	R,
	l,
	d,
	L,
	D,
	Y,
	c,
	O = _(860911),
	f = _(70956),
	F = _(689938);
let U = 30 * f.Z.Millis.SECOND,
	g = 8,
	p = 3,
	y = 26,
	P = 64,
	V = (e, E) => 'https://discord.com/feature/family-center/my-family/'.concat(e, '/').concat(E),
	Z = 4,
	G = 5 * f.Z.Millis.MINUTE,
	h = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	v = (0, O.F)(
		Object.freeze({
			FAMILY_CENTER_SETTINGS: '/family-center/settings',
			FAMILY_CENTER_MY_FAMILY: '/family-center/my-family'
		}),
		[':', '?', '@']
	);
((o = t || (t = {}))[(o.DM_MESSAGE_SEND = 1)] = 'DM_MESSAGE_SEND'), (o[(o.GDM_MESSAGE_SEND = 2)] = 'GDM_MESSAGE_SEND'), (o[(o.MESSAGE_REACT = 3)] = 'MESSAGE_REACT'), (o[(o.ADD_FRIEND = 4)] = 'ADD_FRIEND'), (o[(o.SEND_CALL = 5)] = 'SEND_CALL'), (o[(o.CALL_JOIN = 6)] = 'CALL_JOIN'), (o[(o.GUILD_JOIN = 7)] = 'GUILD_JOIN'), (o[(o.GUILD_MESSAGE_SEND = 8)] = 'GUILD_MESSAGE_SEND'), (o[(o.GUILD_VC_JOIN = 9)] = 'GUILD_VC_JOIN'), ((u = T || (T = {}))[(u.PARENT = 1)] = 'PARENT'), (u[(u.CHILD = 2)] = 'CHILD'), ((S = I || (I = {}))[(S.PENDING = 1)] = 'PENDING'), (S[(S.ACTIVE = 2)] = 'ACTIVE'), (S[(S.INACTIVE = 3)] = 'INACTIVE'), (S[(S.DECLINED = 4)] = 'DECLINED'), (S[(S.EXPIRED = 5)] = 'EXPIRED'), ((M = n || (n = {}))[(M.USER_ADD = 1)] = 'USER_ADD'), (M[(M.GUILD_ADD = 2)] = 'GUILD_ADD'), (M[(M.USER_INTERACTION = 3)] = 'USER_INTERACTION'), (M[(M.GUILD_INTERACTION = 4)] = 'GUILD_INTERACTION'), (M[(M.USER_CALLED = 5)] = 'USER_CALLED'), ((R = s || (s = {})).ACTIVITY = 'ACTIVITY'), (R.REQUESTS = 'REQUESTS'), (R.SETTINGS = 'SETTINGS'), ((l = A || (A = {}))[(l.ACTIVITY = 0)] = 'ACTIVITY'), (l[(l.REQUESTS = 1)] = 'REQUESTS'), (l[(l.SETTINGS = 2)] = 'SETTINGS'), ((d = r || (r = {})).SIDENAV = 'SIDENAV'), (d.SETTINGS = 'SETTINGS'), ((L = a || (a = {}))[(L.SIDENAV = 0)] = 'SIDENAV'), (L[(L.SETTINGS = 1)] = 'SETTINGS'), ((D = i || (i = {}))[(D.TabChange = 0)] = 'TabChange'), (D[(D.ShowQRCodeModal = 1)] = 'ShowQRCodeModal'), (D[(D.RevealQRCode = 2)] = 'RevealQRCode'), (D[(D.ScanQRCodeButton = 3)] = 'ScanQRCodeButton'), (D[(D.ScanQRCode = 4)] = 'ScanQRCode'), (D[(D.LoadMore = 5)] = 'LoadMore'), (D[(D.SelectTeen = 6)] = 'SelectTeen'), (D[(D.HideQRCode = 7)] = 'HideQRCode');
let m = new Map([
	[
		3,
		{
			tooltipHeader: () => F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_HEADER,
			tooltipDescription: (e) => (e ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT : F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN),
			sectionHeader: (e) => F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_SECTION_HEADER.format({ count: e }),
			sectionDescription: (e) => (e ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_PARENT : F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_INTERACTION_TOOLTIP_TEEN),
			timestampFormatter: () => ({
				today: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_TODAY,
				yesterday: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_YESTERDAY,
				days: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_MESSAGED_TIMESTAMP_DAYS
			})
		}
	],
	[
		5,
		{
			tooltipHeader: () => F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_HEADER,
			tooltipDescription: (e) => (e ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT : F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN),
			sectionHeader: (e) => F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_SECTION_HEADER.format({ count: e }),
			sectionDescription: (e) => (e ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_PARENT : F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TOOLTIP_TEEN),
			timestampFormatter: () => ({
				today: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_TODAY,
				yesterday: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_YESTERDAY,
				days: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_CALLED_TIMESTAMP_DAYS
			})
		}
	],
	[
		1,
		{
			tooltipHeader: () => F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_HEADER,
			tooltipDescription: (e) => (e ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT : F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN),
			sectionHeader: (e) => F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_SECTION_HEADER.format({ count: e }),
			sectionDescription: (e) => (e ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_PARENT : F.Z.Messages.FAMILY_CENTER_ACTIVITY_ADD_FRIENDS_TOOLTIP_TEEN),
			timestampFormatter: () => ({
				today: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_TODAY,
				yesterday: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_YESTERDAY,
				days: F.Z.Messages.FAMILY_CENTER_ACTIVITY_USER_ADDED_TIMESTAMP_DAYS
			})
		}
	],
	[
		2,
		{
			tooltipHeader: () => F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_HEADER,
			tooltipDescription: (e) => (e ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT : F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN),
			sectionHeader: (e) => F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_SECTION_HEADER.format({ count: e }),
			sectionDescription: (e) => (e ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_PARENT : F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_JOIN_TOOLTIP_TEEN)
		}
	],
	[
		4,
		{
			tooltipHeader: () => F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_HEADER,
			tooltipDescription: H,
			sectionHeader: (e) => F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_SECTION_HEADER.format({ count: e }),
			sectionDescription: H
		}
	]
]);
function H(e, E) {
	return e ? (E ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT_WITH_VC : F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_PARENT) : E ? F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN_WITH_VC : F.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_INTERACTION_TOOLTIP_TEEN;
}
((Y = C || (C = {}))[(Y.CHECK = 0)] = 'CHECK'), (Y[(Y.X = 1)] = 'X'), ((c = N || (N = {}))[(c.GENERIC_ERROR = 0)] = 'GENERIC_ERROR'), (c[(c.INELIGIBLE_FOR_FAMILY_CENTER = 1)] = 'INELIGIBLE_FOR_FAMILY_CENTER'), (c[(c.PENDING_REQUEST_EXISTS = 2)] = 'PENDING_REQUEST_EXISTS'), (c[(c.MAX_CONNECTIONS_REACHED = 3)] = 'MAX_CONNECTIONS_REACHED');
let b = () => ({
		seconds: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_SECONDS,
		minutes: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_MINUTES,
		hours: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_HOURS,
		yesterday: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_YESTERDAY,
		days: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DAYS,
		date: F.Z.Messages.FAMILY_CENTER_PENDING_TIMESTAMP_DATE
	}),
	w = () => ({
		seconds: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_SECONDS,
		minutes: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_MINUTES,
		hours: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_HOURS,
		yesterday: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_YESTERDAY,
		days: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DAYS,
		date: F.Z.Messages.FAMILY_CENTER_ACCEPTED_TIMESTAMP_DATE
	});
