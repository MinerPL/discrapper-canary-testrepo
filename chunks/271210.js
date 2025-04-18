e.exports = function (e) {
    let t = '\\d(_|\\d)*',
        n = '[eE][-+]?' + t,
        r = t + '(\\.' + t + ')?(' + n + ')?',
        i = '\\w+',
        o = '\\b(' + (t + '#' + i + '(\\.' + i + ')?#(' + n) + ')?|' + r + ')',
        a = '[A-Za-z](_?[A-Za-z0-9.])*',
        s = '[]\\{\\}%#\'"',
        l = e.COMMENT('--', '$'),
        c = {
            begin: '\\s+:\\s+',
            end: '\\s*(:=|;|\\)|=>|$)',
            illegal: s,
            contains: [
                {
                    beginKeywords: 'loop for declare others',
                    endsParent: !0
                },
                {
                    className: 'keyword',
                    beginKeywords: 'not null constant access function procedure in out aliased exception'
                },
                {
                    className: 'type',
                    begin: a,
                    endsParent: !0,
                    relevance: 0
                }
            ]
        };
    return {
        name: 'Ada',
        case_insensitive: !0,
        keywords: {
            keyword: ['abort', 'else', 'new', 'return', 'abs', 'elsif', 'not', 'reverse', 'abstract', 'end', 'accept', 'entry', 'select', 'access', 'exception', 'of', 'separate', 'aliased', 'exit', 'or', 'some', 'all', 'others', 'subtype', 'and', 'for', 'out', 'synchronized', 'array', 'function', 'overriding', 'at', 'tagged', 'generic', 'package', 'task', 'begin', 'goto', 'pragma', 'terminate', 'body', 'private', 'then', 'if', 'procedure', 'type', 'case', 'in', 'protected', 'constant', 'interface', 'is', 'raise', 'use', 'declare', 'range', 'delay', 'limited', 'record', 'when', 'delta', 'loop', 'rem', 'while', 'digits', 'renames', 'with', 'do', 'mod', 'requeue', 'xor'],
            literal: ['True', 'False']
        },
        contains: [
            l,
            {
                className: 'string',
                begin: /"/,
                end: /"/,
                contains: [
                    {
                        begin: /""/,
                        relevance: 0
                    }
                ]
            },
            {
                className: 'string',
                begin: /'.'/
            },
            {
                className: 'number',
                begin: o,
                relevance: 0
            },
            {
                className: 'symbol',
                begin: "'" + a
            },
            {
                className: 'title',
                begin: '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?',
                end: '(is|$)',
                keywords: 'package body',
                excludeBegin: !0,
                excludeEnd: !0,
                illegal: s
            },
            {
                begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+',
                end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
                keywords: 'overriding function procedure with is renames return',
                returnBegin: !0,
                contains: [
                    l,
                    {
                        className: 'title',
                        begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
                        end: '(\\(|\\s+|$)',
                        excludeBegin: !0,
                        excludeEnd: !0,
                        illegal: s
                    },
                    c,
                    {
                        className: 'type',
                        begin: '\\breturn\\s+',
                        end: '(\\s+|;|$)',
                        keywords: 'return',
                        excludeBegin: !0,
                        excludeEnd: !0,
                        endsParent: !0,
                        illegal: s
                    }
                ]
            },
            {
                className: 'type',
                begin: '\\b(sub)?type\\s+',
                end: '\\s+',
                keywords: 'type',
                excludeBegin: !0,
                illegal: s
            },
            c
        ]
    };
};
