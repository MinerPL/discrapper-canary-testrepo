var r = n(147018), i = n(581031), a = n(676125), o = n(959318), s = n(714050), l = n(936940), u = i(''.charAt);
r({
    target: 'String',
    proto: !0,
    forced: l(function () {
        return '\uD842' !== '\uD842\uDFB7'.at(-2);
    })
}, {
    at: function (e) {
        var t = s(a(this)), n = t.length, r = o(e), i = r >= 0 ? r : n + r;
        return i < 0 || i >= n ? void 0 : u(t, i);
    }
});
