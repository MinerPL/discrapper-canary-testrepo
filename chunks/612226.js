t.d(n, {
	Q2: function () {
		return i;
	},
	Rv: function () {
		return W;
	},
	U6: function () {
		return F;
	},
	UD: function () {
		return V;
	},
	oT: function () {
		return Y;
	}
}),
	t(411104),
	t(653041);
var i,
	l,
	o = t(346610),
	r = t(186070),
	E = t(185514),
	a = t(395878),
	u = t(321697),
	s = t(775774),
	d = t(570408),
	_ = t(438846),
	c = t(360038),
	C = t(175724),
	I = t(705371),
	A = t(138976),
	S = t(296805),
	T = t(561716),
	N = t(239748),
	L = t(337482),
	O = t(679080),
	h = t(777019),
	g = t(523147),
	D = t(400332),
	R = t(510761),
	f = t(189509),
	p = t(673553),
	P = t(280492),
	Z = t(746887),
	M = t(861007),
	G = t(300644),
	b = t(721383),
	U = t(207234),
	H = t(997292),
	m = t(743810),
	v = t(620212),
	k = t(188051),
	K = t(547420),
	B = t(981631),
	y = t(689938);
function V(e) {
	switch (e) {
		case 'NAVIGATION':
			return y.Z.Messages.USER_SETTINGS_KEYBINDS_NAVIGATION_SECTION_TITLE;
		case 'VOICE_AND_VIDEO':
			return y.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_AND_VIDEO_SECTION_TITLE;
		case 'CHAT':
			return y.Z.Messages.USER_SETTINGS_KEYBINDS_CHAT_SECTION_TITLE;
		case 'MISCELLANEOUS':
			return y.Z.Messages.USER_SETTINGS_KEYBINDS_MISCELLANEOUS_SECTION_TITLE;
		case 'MESSAGE':
			return y.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_SECTION_TITLE;
		case 'DND':
			return y.Z.Messages.USER_SETTINGS_KEYBINDS_DND_SECTION_TITLE;
	}
}
function F(e) {
	switch (e) {
		case 'MESSAGE':
			return y.Z.Messages.USER_SETTINGS_KEYBINDS_MESSAGE_DESCRIPTION;
		case 'DND':
			return y.Z.Messages.USER_SETTINGS_KEYBINDS_DND_DESCRIPTION;
		default:
			return null;
	}
}
function w() {
	for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
	return n.map((e) => {
		let n = Y[e];
		if (null == n) throw Error('getBindsFor(...): No bind for '.concat(n));
		return n.binds[0];
	});
}
((l = i || (i = {})).NAVIGATION = 'NAVIGATION'),
	(l.CHAT = 'CHAT'),
	(l.VOICE_AND_VIDEO = 'VOICE_AND_VIDEO'),
	(l.MISCELLANEOUS = 'MISCELLANEOUS'),
	(l.MESSAGE = 'MESSAGE'),
	(l.DND = 'DND');
let Y = {
	[B.EkH.SERVER_NEXT]: R.nq,
	[B.EkH.SERVER_PREV]: R.X3,
	[B.EkH.CHANNEL_NEXT]: E.tQ,
	[B.EkH.CHANNEL_PREV]: E.x5,
	[B.EkH.NAVIGATE_BACK]: E.Nx,
	[B.EkH.NAVIGATE_FORWARD]: E.On,
	[B.EkH.UNREAD_NEXT]: m.pd,
	[B.EkH.UNREAD_PREV]: m.wk,
	[B.EkH.MENTION_CHANNEL_NEXT]: m.Nv,
	[B.EkH.MENTION_CHANNEL_PREV]: m.uX,
	[B.EkH.TOGGLE_PREVIOUS_GUILD]: E.$c,
	[B.EkH.JUMP_TO_GUILD]: c.u,
	[B.EkH.SUBMIT]: f.z,
	[B.EkH.TEXTAREA_FOCUS]: p.U,
	[B.EkH.MARK_CHANNEL_READ]: C.f,
	[B.EkH.MARK_SERVER_READ]: I.l,
	[B.EkH.TOGGLE_CHANNEL_PINS]: M.u,
	[B.EkH.TOGGLE_INBOX_UNREADS_TAB]: U.P,
	[B.EkH.MARK_TOP_INBOX_CHANNEL_READ]: U.M,
	[B.EkH.TOGGLE_USERS]: H.r,
	[B.EkH.TOGGLE_HELP]: G.O,
	[B.EkH.VIBE_WITH_WUMPUS]: k.w,
	[B.EkH.TOGGLE_MUTE]: P.iN,
	[B.EkH.TOGGLE_DEAFEN]: P.oV,
	[B.EkH.TOGGLE_CATEGORY_COLLAPSED]: Z.u,
	[B.EkH.SEARCH_SOUNDBOARD]: g.Z,
	[B.EkH.SCROLL_UP]: L.B2,
	[B.EkH.SCROLL_DOWN]: L.gN,
	[B.EkH.QUICKSWITCHER_SHOW]: T.$,
	[B.EkH.CREATE_DM_GROUP]: a.K,
	[B.EkH.SEARCH_EMOJIS]: O.S,
	[B.EkH.SEARCH_GIFS]: h.O,
	[B.EkH.SEARCH_STICKERS]: D.U,
	[B.EkH.TOGGLE_HOTKEYS]: b._,
	[B.EkH.JUMP_TO_FIRST_UNREAD]: A.O,
	[B.EkH.CREATE_GUILD]: u.r,
	[B.EkH.UPLOAD_FILE]: v.U,
	[B.EkH.RETURN_TO_AUDIO_CHANNEL]: N.F,
	[B.EkH.CALL_ACCEPT]: r.IL,
	[B.EkH.CALL_START]: r.FI,
	[B.EkH.FOCUS_SEARCH]: d.I,
	[B.EkH.JUMP_TO_CURRENT_CALL]: _.K,
	[B.EkH.ZOOM_IN]: K.UF,
	[B.EkH.ZOOM_OUT]: K.RC,
	[B.EkH.ZOOM_RESET]: K.MY,
	[B.EkH.OPEN_APP_DIRECTORY]: S.T,
	[B.EkH.BROWSER_DEVTOOLS]: s.p
};
function W() {
	let e = [
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_SERVERS,
			binds: w(B.EkH.SERVER_PREV, B.EkH.SERVER_NEXT),
			group: 'NAVIGATION'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_CHANNELS,
			binds: w(B.EkH.CHANNEL_PREV, B.EkH.CHANNEL_NEXT),
			group: 'NAVIGATION'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_BACK_FORWARD,
			binds: w(B.EkH.NAVIGATE_BACK, B.EkH.NAVIGATE_FORWARD),
			group: 'NAVIGATION'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_CHANNELS,
			binds: w(B.EkH.UNREAD_PREV, B.EkH.UNREAD_NEXT),
			group: 'NAVIGATION'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UNREAD_MENTION_CHANNELS,
			binds: w(B.EkH.MENTION_CHANNEL_PREV, B.EkH.MENTION_CHANNEL_NEXT),
			group: 'NAVIGATION'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_NAVIGATE_TO_CALL,
			binds: w(B.EkH.JUMP_TO_CURRENT_CALL),
			group: 'NAVIGATION'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PREVIOUS_GUILD,
			binds: w(B.EkH.TOGGLE_PREVIOUS_GUILD),
			group: 'NAVIGATION'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_QUICKSWITCHER,
			binds: w(B.EkH.QUICKSWITCHER_SHOW),
			group: 'NAVIGATION'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_GUILD,
			binds: w(B.EkH.CREATE_GUILD),
			group: 'NAVIGATION',
			groupEnd: !0
		},
		{
			description: y.Z.Messages.DND_OPERATION_LABEL_START,
			binds: ['mod+d'],
			group: 'DND'
		},
		{
			description: y.Z.Messages.DND_OPERATION_LABEL_MOVE,
			binds: ['up', 'down'],
			group: 'DND'
		},
		{
			description: y.Z.Messages.DND_OPERATION_LABEL_DROP,
			binds: ['spacebar', 'enter'],
			group: 'DND'
		},
		{
			description: y.Z.Messages.DND_OPERATION_LABEL_CANCEL,
			binds: ['esc'],
			group: 'DND',
			groupEnd: !0
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_SERVER_READ,
			binds: w(B.EkH.MARK_SERVER_READ),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_CHANNEL_READ,
			binds: w(B.EkH.MARK_CHANNEL_READ),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CREATE_DM_GROUP,
			binds: w(B.EkH.CREATE_DM_GROUP),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_PINS,
			binds: w(B.EkH.TOGGLE_CHANNEL_PINS),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_INBOX,
			binds: w(B.EkH.TOGGLE_INBOX_UNREADS_TAB),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_MARK_TOP_INBOX_CHANNEL_READ,
			binds: w(B.EkH.MARK_TOP_INBOX_CHANNEL_READ),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_USERS,
			binds: w(B.EkH.TOGGLE_USERS),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_EMOJIS,
			binds: w(B.EkH.SEARCH_EMOJIS),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_GIFS,
			binds: w(B.EkH.SEARCH_GIFS),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_STICKERS,
			binds: w(B.EkH.SEARCH_STICKERS),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SCROLL_CHAT,
			binds: w(B.EkH.SCROLL_UP, B.EkH.SCROLL_DOWN),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_JUMP_TO_FIRST_UNREAD,
			binds: w(B.EkH.JUMP_TO_FIRST_UNREAD),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
			binds: w(B.EkH.TEXTAREA_FOCUS),
			group: 'CHAT'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_UPLOAD_FILE,
			binds: w(B.EkH.UPLOAD_FILE),
			group: 'CHAT',
			groupEnd: !0
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_MUTE,
			binds: w(B.EkH.TOGGLE_MUTE),
			group: 'VOICE_AND_VIDEO'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_DEAFEN,
			binds: w(B.EkH.TOGGLE_DEAFEN),
			group: 'VOICE_AND_VIDEO'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_ACCEPT,
			binds: w(B.EkH.CALL_ACCEPT),
			group: 'VOICE_AND_VIDEO'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_DECLINE,
			binds: w(B.EkH.MARK_CHANNEL_READ),
			group: 'VOICE_AND_VIDEO'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_CALL_START,
			binds: w(B.EkH.CALL_START),
			group: 'VOICE_AND_VIDEO',
			groupEnd: !0
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH_SOUNDBOARD,
			binds: w(B.EkH.SEARCH_SOUNDBOARD),
			group: 'VOICE_AND_VIDEO'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TOGGLE_HELP,
			binds: w(B.EkH.TOGGLE_HELP),
			group: 'MISCELLANEOUS'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SEARCH,
			binds: w(B.EkH.FOCUS_SEARCH),
			group: 'MISCELLANEOUS'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG,
			binds: ['h+h+right+n+k'],
			group: 'MISCELLANEOUS',
			groupEnd: !0
		},
		{
			description: y.Z.Messages.EDIT_MESSAGE,
			binds: ['e'],
			group: 'MESSAGE'
		},
		{
			description: y.Z.Messages.DELETE_MESSAGE,
			binds: ['backspace'],
			group: 'MESSAGE'
		},
		{
			description: y.Z.Messages.PIN_MESSAGE,
			binds: ['p'],
			group: 'MESSAGE'
		},
		{
			description: y.Z.Messages.ADD_REACTION,
			binds: ['plus'],
			group: 'MESSAGE'
		},
		{
			description: y.Z.Messages.MESSAGE_ACTION_REPLY,
			binds: ['r'],
			group: 'MESSAGE'
		},
		{
			description: y.Z.Messages.COPY_TEXT,
			binds: ['mod+c'],
			group: 'MESSAGE'
		},
		{
			description: y.Z.Messages.MARK_UNREAD,
			binds: ['alt+enter'],
			group: 'MESSAGE'
		},
		{
			description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FOCUS_TEXT_AREA,
			binds: ['escape'],
			group: 'MESSAGE',
			groupEnd: !0
		},
		{
			description: y.Z.Messages.USER_SETTINGS_KEYBIND_VIBE_WITH_WUMPUS_DESCRIPTION,
			binds: w(B.EkH.VIBE_WITH_WUMPUS),
			group: 'MISCELLANEOUS'
		}
	];
	return (
		(0, o.WT)({ location: 'keybinds' }, { autoTrackExposure: !1 }).canForwardMessages &&
			e.push({
				description: y.Z.Messages.KEYBIND_DESCRIPTION_MODAL_FORWARD_MESSAGE,
				binds: ['f'],
				group: 'MESSAGE'
			}),
		e
	);
}
n.ZP = 12633 == t.j ? Y : null;
