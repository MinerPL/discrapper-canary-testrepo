var r = {
    './gg-mono/ggmono-400-normal.woff2': ['349374'],
    './abc-ginto-nord/abcgintonord-800-extrabolditalic.woff2': ['858855'],
    './noto-sans/notosans-600-semibold.woff2': ['381176'],
    './gg-sans/ggsans-700-bold.woff2': ['909671'],
    './gg-sans/ggsans-500-medium.woff2': ['5983'],
    './noto-sans/notosans-500-mediumitalic.woff2': ['390288'],
    './fraunces/fraunces-400-normal.woff2': ['18182', '56837'],
    './gg-sans/ggsans-400-normalitalic.woff2': ['963686'],
    './source-code-pro/sourcecodepro-600-semibold.woff2': ['626025', '49678'],
    './gg-sans/ggsans-400-normal.woff2': ['776764'],
    './gg-mono/ggmono-600-semibold.woff2': ['750499', '44999'],
    './gg-sans/ggsans-800-extrabolditalic.woff2': ['69891'],
    './noto-sans/notosans-600-semibolditalic.woff2': ['530636'],
    './noto-sans/notosans-700-bold.woff2': ['870744'],
    './source-code-pro/sourcecodepro-400-normal.woff2': ['654556'],
    './gg-sans/ggsans-700-bolditalic.woff2': ['228978'],
    './gg-sans/ggsans-500-mediumitalic.woff2': ['811135'],
    './noto-sans/notosans-800-extrabold.woff2': ['514320'],
    './gg-sans/ggsans-800-extrabold.woff2': ['362799'],
    './gg-sans/ggsans-600-semibolditalic.woff2': ['480854'],
    './source-code-pro/sourcecodepro-700-bold.woff2': ['711313'],
    './noto-sans/notosans-400-normal.woff2': ['134131'],
    './abc-ginto-nord/abcgintonord-800-extrabold.woff2': ['814727'],
    './noto-sans/notosans-700-bolditalic.woff2': ['376255'],
    './noto-sans/notosans-800-extrabolditalic.woff2': ['6675'],
    './fraunces/fraunces-vf.woff2': ['894757'],
    './noto-sans/notosans-400-normalitalic.woff2': ['101103'],
    './gg-mono/ggmono-700-bold.woff2': ['757883'],
    './corinthia/corinthia-400-normal.woff2': ['622814'],
    './gg-sans/ggsans-600-semibold.woff2': ['151859'],
    './noto-sans/notosans-500-medium.woff2': ['2149']
};
function i(e) {
    if (!n.o(r, e))
        return Promise.resolve().then(function () {
            var t = Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
    var t = r[e],
        i = t[0];
    return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n.t(i, 17);
    });
}
(i.keys = function () {
    return Object.keys(r);
}),
    (i.id = '959598'),
    (e.exports = i);
