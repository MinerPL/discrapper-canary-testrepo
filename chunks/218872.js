t.d(s, {
    M: function () {
        return a;
    }
}),
    t(757143),
    t(653041);
let n = /[^0-9/]/g;
function a(e) {
    let s = e.replace(n, '').split('/'),
        t = s[0],
        a = s[1],
        i = [];
    return parseInt(t, 10) > 12 && (t = t.substring(0, 1)), i.push(t), (parseInt(t, 10) > 1 || 2 === t.length || (null != a && '' !== a)) && i.push('/'), null != a && '' !== a && parseInt(a, 10) > 99 && (a = (a + '').substring(0, 2)), i.push(a), i.join('');
}
