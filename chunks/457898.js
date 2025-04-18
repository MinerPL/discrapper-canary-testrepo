e.exports = function (e) {
    let t = ['string', 'char', 'byte', 'int', 'long', 'bool', 'decimal', 'single', 'double', 'DateTime', 'xml', 'array', 'hashtable', 'void'],
        n = 'Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where',
        r = '-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor',
        i = {
            $pattern: /-?[A-z\.\-]+\b/,
            keyword: 'if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter',
            built_in: 'ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write'
        },
        o = /\w[\w\d]*((-)[\w\d]+)*/,
        a = {
            begin: '`[\\s\\S]',
            relevance: 0
        },
        s = {
            className: 'variable',
            variants: [
                { begin: /\$\B/ },
                {
                    className: 'keyword',
                    begin: /\$this/
                },
                { begin: /\$[\w\d][\w\d_:]*/ }
            ]
        },
        l = {
            className: 'literal',
            begin: /\$(null|true|false)\b/
        },
        c = {
            className: 'string',
            variants: [
                {
                    begin: /"/,
                    end: /"/
                },
                {
                    begin: /@"/,
                    end: /^"@/
                }
            ],
            contains: [
                a,
                s,
                {
                    className: 'variable',
                    begin: /\$[A-z]/,
                    end: /[^A-z]/
                }
            ]
        },
        u = {
            className: 'string',
            variants: [
                {
                    begin: /'/,
                    end: /'/
                },
                {
                    begin: /@'/,
                    end: /^'@/
                }
            ]
        },
        d = {
            className: 'doctag',
            variants: [{ begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/ }, { begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/ }]
        },
        f = e.inherit(e.COMMENT(null, null), {
            variants: [
                {
                    begin: /#/,
                    end: /$/
                },
                {
                    begin: /<#/,
                    end: /#>/
                }
            ],
            contains: [d]
        }),
        _ = {
            className: 'built_in',
            variants: [{ begin: '('.concat(n, ')+(-)[\\w\\d]+') }]
        },
        p = {
            className: 'class',
            beginKeywords: 'class enum',
            end: /\s*[{]/,
            excludeEnd: !0,
            relevance: 0,
            contains: [e.TITLE_MODE]
        },
        h = {
            className: 'function',
            begin: /function\s+/,
            end: /\s*\{|$/,
            excludeEnd: !0,
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    begin: 'function',
                    relevance: 0,
                    className: 'keyword'
                },
                {
                    className: 'title',
                    begin: o,
                    relevance: 0
                },
                {
                    begin: /\(/,
                    end: /\)/,
                    className: 'params',
                    relevance: 0,
                    contains: [s]
                }
            ]
        },
        m = {
            begin: /using\s/,
            end: /$/,
            returnBegin: !0,
            contains: [
                c,
                u,
                {
                    className: 'keyword',
                    begin: /(using|assembly|command|module|namespace|type)/
                }
            ]
        },
        g = {
            variants: [
                {
                    className: 'operator',
                    begin: '('.concat(r, ')\\b')
                },
                {
                    className: 'literal',
                    begin: /(-){1,2}[\w\d-]+/,
                    relevance: 0
                }
            ]
        },
        E = {
            className: 'selector-tag',
            begin: /@\B/,
            relevance: 0
        },
        b = {
            className: 'function',
            begin: /\[.*\]\s*[\w]+[ ]??\(/,
            end: /$/,
            returnBegin: !0,
            relevance: 0,
            contains: [
                {
                    className: 'keyword',
                    begin: '('.concat(i.keyword.toString().replace(/\s/g, '|'), ')\\b'),
                    endsParent: !0,
                    relevance: 0
                },
                e.inherit(e.TITLE_MODE, { endsParent: !0 })
            ]
        },
        y = [b, f, a, e.NUMBER_MODE, c, u, _, s, l, E],
        v = {
            begin: /\[/,
            end: /\]/,
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0,
            contains: [].concat(
                'self',
                y,
                {
                    begin: '(' + t.join('|') + ')',
                    className: 'built_in',
                    relevance: 0
                },
                {
                    className: 'type',
                    begin: /[\.\w\d]+/,
                    relevance: 0
                }
            )
        };
    return (
        b.contains.unshift(v),
        {
            name: 'PowerShell',
            aliases: ['pwsh', 'ps', 'ps1'],
            case_insensitive: !0,
            keywords: i,
            contains: y.concat(p, h, m, g, v)
        }
    );
};
