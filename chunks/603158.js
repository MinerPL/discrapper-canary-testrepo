n.d(t, {
    F: function () {
        return l;
    }
});
let r = { '|': ' ' },
    i = {
        '[': ' ',
        ']': ' ',
        '(': ' ',
        ')': ' ',
        '|': ' ',
        '~': ' '
    },
    a = {
        '-': '-',
        ' ': ' '
    },
    s = {
        '\u200B': '',
        '‌': '',
        '‍': '',
        '\u200E': '',
        '\uFEFF': ''
    },
    o = {
        ...a,
        ...i,
        ...s,
        ...r
    };
function l(e) {
    let t = '';
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        null != o[r] ? (t += o[r]) : /[\p{Pd}\p{Pc}\p{Po}]/gu.test(r) ? (t += ' ') : (t += r);
    }
    return t.toLowerCase();
}
