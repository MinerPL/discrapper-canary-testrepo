t.d(n, {
	$Z: function () {
		return T;
	},
	B8: function () {
		return P;
	},
	F4: function () {
		return S;
	},
	HH: function () {
		return x;
	},
	Hd: function () {
		return C;
	},
	Xl: function () {
		return D;
	},
	dF: function () {
		return y;
	},
	eM: function () {
		return R;
	},
	fB: function () {
		return v;
	},
	gK: function () {
		return G;
	},
	mG: function () {
		return L;
	},
	qe: function () {
		return b;
	},
	rY: function () {
		return O;
	},
	ts: function () {
		return j;
	},
	zW: function () {
		return p;
	}
}),
	t(735250),
	t(470079),
	t(481060);
var i = t(332148),
	s = t(904245),
	l = t(257559),
	a = t(143740),
	r = t(912332),
	o = t(434404);
t(726521);
var u = t(623292),
	d = t(324701),
	c = t(488131),
	E = t(314897),
	f = t(592125),
	g = t(626135),
	m = t(934415),
	M = t(572004),
	_ = t(585483),
	h = t(709054),
	N = t(111618),
	I = t(50284),
	Z = t(730954),
	A = t(981631);
function p(e) {
	let n = e.getGuildId();
	null != n && o.Z.open(n, A.pNK.OVERVIEW);
}
function S(e, n, t) {
	(0, M.JG)(t.shiftKey ? ''.concat(n.channel_id, '-').concat(n.id) : n.id);
}
function v(e, n) {
	g.default.track(A.rMx.MESSAGE_LINK_COPIED, {
		message_id: n.id,
		channel: n.channel_id
	}),
		(0, M.JG)((0, m.wR)(e.guild_id, e.id, n.id));
}
function T(e, n, t) {
	n.state === A.yb.SEND_FAILED || t.shiftKey ? s.Z.deleteMessage(e.id, n.id, n.state === A.yb.SEND_FAILED) : l.Z.confirmDelete(e, n);
}
function C(e, n) {
	s.Z.startEditMessage(e.id, n.id, n.content);
}
function P(e, n) {
	(0, I.Z)(e.id, n.id);
}
function O(e, n, t) {
	if (!1 === n.pinned) {
		t.shiftKey ? i.Z.pinMessage(e, n.id) : l.Z.confirmPin(e, n);
		return;
	}
	t.shiftKey ? i.Z.unpinMessage(e, n.id) : l.Z.confirmUnpin(e, n);
}
function D(e, n) {
	(0, a.Z)(e.id, n.id);
}
function L(e, n) {
	(0, Z.Z)(e, n, void 0, N.Z.getOptions(n.id));
}
function x(e, n, t) {
	let i = e.isPrivate(),
		s = n.author.id === E.default.getId();
	(0, u.fE)({
		channel: e,
		message: n,
		shouldMention: !t.shiftKey && !s,
		showMentionToggle: !i && !s
	}),
		_.S.dispatchToLastSubscribed(A.CkL.TEXTAREA_FOCUS);
}
function G(e, n) {
	(0, c.R6)(e, n, 'Message');
}
function b(e, n) {
	let t = f.Z.getChannel(h.default.castMessageIdAsChannelId(n.id));
	null != t && (0, c.ok)(t);
}
function y(e, n) {
	(0, d.z)({
		channelId: e.id,
		messageId: n.id
	});
}
function R(e, n) {
	(0, d.z)({
		channelId: e.id,
		messageId: n.id
	});
}
function j(e, n) {
	(0, r.l8)({
		channelId: e.id,
		messageId: n.id,
		source: 'message-actions'
	});
}
