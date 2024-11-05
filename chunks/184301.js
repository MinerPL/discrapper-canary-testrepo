n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(411104);
var r = n(598077),
    i = n(484459);
function a() {
    let e, t, n;
    for (var a = arguments.length, s = Array(a), o = 0; o < a; o++) s[o] = arguments[o];
    let l = s[0],
        u = s[1];
    if ('string' == typeof l && ('string' == typeof u || null == u)) (e = l), (t = u), (n = s[2]);
    else if (l instanceof r.Z && ('object' == typeof u || null == u)) (e = l.id), (t = l.getAvatarURL(void 0, 80)), (n = u);
    else throw Error('Invalid arguments');
    return null == e
        ? Promise.resolve()
        : (0, i.Z)(e, t, {
              withMutualFriends: !0,
              withMutualGuilds: !0,
              ...n
          });
}
