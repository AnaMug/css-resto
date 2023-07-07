var levels = [
  {
    helpTitle: "Sélectionne les éléments par leur type",
    selectorName: "Sélecteur de Type",
    doThis: "Sélectionne les plats",
    selector: "plat",
    syntax: "A",
    help: "Aides-toi de l'éditeur HTML pour sélectionner tout les éléments du type <strong>A</strong>.<br /> Le type fait référence à la balise, donc des <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des éléments de types différents.<br /> Même s'il y a plusieurs éléments du même type, la balise reste la même pour tous, <tag>div</tag> ne devient pas <tag>divs</tag>.",
    examples: [
      "<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.",
      "<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.",
    ],
    boardMarkup: `
    <plat />
    <plat />
    `,
  },
  {
    doThis: "Sélectionne les boîtes à bento",
    selector: "bento",
    syntax: "A",
    helpTitle: "Sélectionne les éléments par leur type",
    selectorName: "Sélecteur de Type",
    help: "Sélectionne tout les éléments de type <strong>A</strong>.<br /> Le type fait référence à la balise, donc des <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont tous des éléments de types différents.",
    examples: [
      "<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.",
      "<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.",
    ],
    boardMarkup: `
    <bento/>
    <plat/>
    <bento/>
    `,
  },
  {
    doThis: "Sélectionne le plat décoré",
    selector: "#fancy",
    selectorName: "Sélecteur d'ID",
    helpTitle: "Sélectionne les éléments avec une ID",
    syntax: "#id",
    help: "Sélectionne tous les éléments avec une <strong>id</strong> spécifique. Tu peux aussi combiner un sélecteur d'ID selector avec un sélecteur de type. <br /> L'<strong>id</strong> est unique sur la page, il n'y a qu'un seul élément qui peut avoir une certaine <strong>#id</strong>, si un élément possède l'id #rouge.",
    examples: [
      '<strong>#cool</strong> sélectionne tous les éléments <strong>id="cool"</strong>',
      '<strong>ul#long</strong> sélectionne <tag>ul id="long"</tag>',
    ],
    boardMarkup: `
    <plat id="fancy"/>
    <plat/>
    <bento/>
    `,
  },
  {
    helpTitle: "Sélectionne un élément à l'intérieur d'un autre élément",
    selectorName: "Sélecteur d'éléments descendants",
    doThis: "Sélectionne la pomme sur le plat",
    selector: "plat pomme",
    syntax: "A&nbsp;&nbsp;B",
    help: "Sélectionne tous les <strong>B</strong> à l'intérieur des <strong>A</strong>. <strong>B</strong> est appelé un descendant (pas un enfant direct) car il est à l'intérieur d'un autre élément.",
    examples: [
      "<strong>p&nbsp;&nbsp;strong</strong> sélectionne tous les éléments <tag>strong</tag> à l'intérieur de n'importe quel élément <tag>p</tag>",
      "<strong>#fancy&nbsp;&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> à l'intérieur de l'élément avec <strong>id=\"fancy\"</strong>",
    ],
    boardMarkup: `
    <bento/>
    <plat>
      <pomme/>
    </plat>
    <pomme/>
    `,
  },
  {
    doThis: "Sélectionne le cornichon sur le plat décoré",
    selector: "#fancy cornichon",
    helpTitle: "Combine les sélecteurs d'éléments descendants & ID",
    syntax: "#id&nbsp;&nbsp;A",
    help: "Tu peux combiner n'importe quel sélecteur avec le sélecteur d'éléments descendants.",
    examples: [
      '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> à lintérieur des éléments <strong>id="cool"</strong>',
    ],
    boardMarkup: `
    <bento>
    <orange/>
    </bento>
    <plat id="fancy">
      <cornichon/>
    </plat>
    <plat>
      <cornichon/>
    </plat>
    `,
  },
  {
    doThis: "Sélectionne  les petites pommes",
    selector: ".small",
    selectorName: "Sélecteur de classe",
    helpTitle: "Sélectionne les éléments par leurs classes",
    syntax: ".nomDeClasse",
    help: "Le sélecteur par classe sélectionne tous les éléments avec l'attribut de cette classe. Les éléments ne peuvent avoir qu'un <strong>#id</strong>, mais ils peuvent avoir plusieurs <strong>.classes</strong>.",
    examples: [
      '<strong>.super</strong> sélectionne tous les éléments<strong>class="super"</strong>',
    ],
    boardMarkup: `
    <pomme/>
    <pomme class="small"/>
    <plat>
      <pomme class="small"/>
    </plat>
    <plat/>
    `,
  },
  {
    doThis: "Sélectionne les petites oranges",
    selector: "orange.small",
    helpTitle: "Combine le sélecteur par classe",
    syntax: "A.nomDeClasse",
    help: "Tu peux combiner le sélecteur par classe avec les autres sélecteurs comme le selteur par type.",
    examples: [
      '<strong>ul.important</strong> sélectionne tous les éléments <tag>ul</tag> qui ont la classe <strong>class="important"</strong>',
      '<strong>#big.wide</strong> sélectionne tous l\'élément <strong>id="big"</strong> qui a aussi la classe <strong>class="wide"</strong>',
    ],
    boardMarkup: `
    <pomme/>
    <pomme class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plat>
      <orange/>
    </plat>
    <plat>
      <orange class="small"/>
    </plat>`,
  },
  {
    doThis: "Sélectionne les petites oranges dans les bentos",
    selector: "bento orange.small",
    syntax: "Vas-y à fond !",
    helpTitle: "Tu peux le faire...",
    help: "Combine ce que tu as appris jusqu'ici pour résoudre cet exercice!",
    boardMarkup: `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <pomme class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `,
  },
  {
    doThis: "Sélectionne tous les plats et bentos",
    selector: "plat,bento",
    selectorName: "L'associateur par virgule",
    helpTitle: "Combine, les sélecteurs, avec des ... virgules !",
    syntax: "A, B",
    help: 'Grâce à la " Technologie Shatner", cela permet de sélectionner tous les éléments <strong>A</strong> et <strong>B</strong>. De cette façon tu peux combiner n\'importe quel sélecteur, et tu peux en utiliser plus de deux.',
    examples: [
      '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> ainsi que les éléments <strong>class="fun"</strong>',
      "<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>",
    ],
    boardMarkup: `
    <cornichon class="small"/>
    <cornichon/>
    <plat>
      <cornichon/>
    </plat>
    <bento>
      <cornichon/>
    </bento>
    <plat>
      <cornichon/>
    </plat>
    <cornichon/>
    <cornichon class="small"/>
    `,
  },
  {
    doThis: "Sélectionne tout !",
    selector: "*",
    selectorName: "Le sélecteur universel",
    helpTitle: "Tu peux tout sélectionner !",
    syntax: "*",
    help: "Tu peux sélectionner tous les éléments avec le sélecteur universel ! ",
    examples: [
      "<strong>p *</strong> sélectionne tous les éléments à l'intérieur des <tag>p</tag>.",
    ],
    boardMarkup: `
    <pomme/>
    <plat>
      <orange class="small" />
    </plat>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plat id="fancy"/>
    `,
  },
  {
    doThis: "Sélectionne tout ce qui est sur un plat",
    selector: "plat *",
    syntax: "A&nbsp;&nbsp;*",
    helpTitle: "Combine le sélecteur universel",
    help: "Ceci sélectionne tous les éléments à l'intérieur de <strong>A</strong>.",
    examples: [
      "<strong>p *</strong> sélectionne tous les éléments à l'intérieur de tous les <tag>p</tag>.",
      '<strong>ul.fancy *</strong> sélectionne tous les éléments à l\'intérieur de tous les <tag>ul class="fancy"</tag>.',
    ],
    boardMarkup: `
    <plat id="fancy">
      <orange class="small"/>
    </plat>
    <plat>
      <cornichon/>
    </plat>
    <pomme class="small"/>
    <plat>
      <pomme/>
    </plat>`,
  },
  {
    doThis: "Sélectionne chaque pomme à côté d'un plat",
    selector: "plat + pomme",
    helpTitle: "Sélectionne un élément qui suit directement un autre élément",
    selectorName: "Sélecteur de voisin direct",
    syntax: "A + B",
    help: "Ceci sélectionne tous les éléments <strong>B</strong> qui suivent directement <strong>A</strong>. Elements that follow one another are called siblings Les éléments qui suivent un autre élément sont appelés voisins. Ils sont sur le même niveau. <br/><br/>Dans le code HTML de ce niveau, les éléments qui ont la même indentation (le même espacement) sont voisins.",
    examples: [
      '<strong>p + .intro</strong> sélectionne chaque élément avec <strong>class="intro"</strong> qui suit directement une balise <tag>p</tag>',
      "<strong>div + a</strong> sélectionne chaque <tag>a</tag> élément qui suit directement une <tag>div</tag>",
    ],
    boardMarkup: `
    <bento>
      <pomme class="small"/>
    </bento>
    <plat />
    <pomme class="small"/>
    <plat />
    <pomme/>
    <pomme class="small"/>
    <pomme class="small"/>
    `,
  },
  {
    selectorName: "Sélecteur de voisins",
    helpTitle: "Sélectionne les éléments qui suivent un autre élément",
    syntax: "A ~ B",
    doThis: "Sélectionne les cornichons à côté du bento",
    selector: "bento ~ cornichon",
    help: "Vous pouvez sélectionner tous les voisins d'un élément et qui ont le même parent. This is like the Adjacent Selector Ce sélecteur agit de façon similaire au <strong>Sélecteur de voisin direct</strong> (A + B) sauf qu'il prend tous les éléments qui suivent au lieu d'un.",
    examples: [
      "<strong>A ~ B</strong> sélectionne tous les <strong>B</strong> qui suivent un <strong>A</strong>",
    ],
    boardMarkup: `
    <cornichon/>
    <bento>
      <orange class="small"/>
    </bento>
    <cornichon class="small"/>
    <cornichon/>
    <plat>
      <cornichon/>
    </plat>
    <plat>
      <cornichon class="small"/>
    </plat>
    `,
  },
  {
    selectorName: "Sélecteur d'enfants",
    syntax: "A > B&nbsp;",
    doThis: "Sélectionne la pomme posée sur un plat",
    selector: "plat > pomme",
    helpTitle: "Sélectionne les enfants directs d'un élément",
    help: "Tu peux sélectionner les élements qui sont les enfants directs d'autre éléments. Un élément enfant est tout élément qui est inséré directement dans un autre élément. <br><br>Les éléments qui sont insérés plus profondément sont appelés des éléments descendants.",
    examples: [
      "<strong>A > B</strong> sélectionne tous les éléments <strong>B</strong> qui sont des enfants direct de <strong>A</strong>",
    ],
    boardMarkup: `
    <plat>
      <bento>
        <pomme/>
      </bento>
    </plat>
    <plat>
      <pomme/>
    </plat>
    <plat/>
    <pomme/>
    <pomme class="small"/>
    `,
  },
  {
    selectorName: "Le pseudo-sélecteur First Child",
    helpTitle:
      "Sélectionne l'élément qui est le premier enfant à l'intérieur d'un autre élément",
    doThis: "Sélectionne l'orange du dessus",
    selector: "plat :first-child",
    syntax: ":first-child",

    help: "Tu peux sélectionner le premier élément enfant. Un élément enfant est un élément qui est imbriqué directement dans un autre élément. Tu peux combiner ce pseudo-sélecteur avec d'autres sélecteurs.",
    examples: [
      '<strong>:first-child</strong> sélectionne tous les "premiers enfants".',
      '<strong>p:first-child</strong> sélectionne tous les éléments <tag>p</tag> qui sont des "premiers enfants".',
      '<strong>div p:first-child</strong> sélectionne tous les "premiers enfants" <tag>p</tag> qui sont dans des <tag>div</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <plat />
    <plat>
      <orange />
      <orange />
      <orange />
    </plat>
    <cornichon class="small" />
    `,
  },
  {
    selectorName: "Le pseudo-sélecteur Only Child",
    helpTitle:
      "Sélectionne un élément qui est le seul élément à l'intérieur d'un autre.",
    doThis: "Sélectionne la pomme et le cornichon sur les plats",
    selector: "plat :only-child",
    syntax: ":only-child",
    help: "Tu peux sélectionner n'importe quel élément qui est à l'intérieur d'un autre",
    examples: [
      "<strong>span:only-child</strong> sélectionne le <tag>span</tag> qui est le <strong>only child</strong> (seul enfant) d'un autre élément.",
      "<strong>ul li:only-child</strong> sélectionne le seul élément <tag>li</tag> à l'intérieur d'un élément <tag>ul</tag>.",
    ],
    boardMarkup: `
    <plat>
      <pomme/>
    </plat>
    <plat>
      <cornichon />
    </plat>
    <bento>
      <cornichon />
    </bento>
    <plat>
      <orange class="small"/>
      <orange/>
    </plat>
    <cornichon class="small"/>
    `,
  },
  {
    selectorName: "Le pseudo-sélecteur Last Child",
    helpTitle:
      "Sélectionne le dernier élément à l'intérieur d'un autre élément",
    doThis: "Sélectionne la petite pomme et le cornichon",
    selector: ".small:last-child",
    syntax: ":last-child",
    help: "You can use this selector Tu peux utiliser ce sélecteur pour sélectionner un élément qui est le dernier enfant <strong>last child</strong> à l'intérieur d'un autre élément. <br><br>Petit conseil &rarr; Dnas les cas où il n'y a qu'un seul élément, cet élément est considéré comme first-child, only-child et last-child !",
    examples: [
      "<strong>:last-child</strong> sélectionne tous les éléments last-child.",
      "<strong>span:last-child</strong> sélectionne tous les éléments <tag>span</tag> qui sont des last-child.",
      "<strong>ul li:last-child</strong> sélectionne le dernier <tag>li</tag> à l'intérieur de n'importe quel élément <tag>ul</tag>.",
    ],
    boardMarkup: `
    <plat id="fancy">
      <pomme class="small"/>
    </plat>
    <plat/>
    <plat>
      <orange class="small"/>
      <orange>
    </plat>
    <cornichon class="small"/>`,
  },
  {
    selectorName: "Le pseudo-sélecteur Nth Child",
    helpTitle:
      "Séléctionne un élément par son ordre à l'intérieur d'un otre élément",
    doThis: "Sélectionne le 3ème plat",
    selector: ":nth-child(3)",
    syntax: ":nth-child(A)",
    help: "Sélectionne le <strong>nth</strong> (Exemple: 1er, 3ème, 12ème etc.) enfant à l'intérieur d'un autre élément.",
    examples: [
      "<strong>:nth-child(8)</strong> sélectionne l'élément qui est le 8ème enfant d'un autre élément.",
      "<strong>div p:nth-child(2)</strong> sélectionne le 2ème <strong>p</strong> dans chaque <strong>div</strong>",
    ],
    boardMarkup: `
    <plat/>
    <plat/>
    <plat/>
    <plat id="fancy"/>
    `,
  },
  {
    selectorName: "Le sélecteur Nth Last Child",
    helpTitle:
      "Sélectionne un élément par son ordre dans un autre élément, en partant de la fin",
    doThis: "Sélectionne le 1er bento",
    selector: "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help: "Sélectionne les enfants du parent à partir du dernier. De la même manière qu'avec nth-child, mais en partant de la fin !",
    examples: [
      "<strong>:nth-last-child(2)</strong> sélectionne les avant derniers éléments.",
    ],
    boardMarkup: `
    <plat/>
    <bento/>
    <plat>
      <orange/>
      <orange/>
      <orange/>
    </plat>
    <bento/>
    `,
  },
  {
    selectorName: "Le sélecteur First of Type (premier de type)",
    helpTitle: "Sélectionne le premier élément d'un certain type",
    doThis: "Sélectionne la première pomme",
    selector: "pomme:first-of-type",
    syntax: ":first-of-type",
    help: "Sélectionne le premier élément de ce type à l'intérieur d'un autre élément.",
    examples: [
      "<strong>span:first-of-type</strong> sélectionne le premier <tag>span</tag> de n'importe quel élément.",
    ],
    boardMarkup: `
    <orange class="small"/>
    <pomme/>
    <pomme class="small"/>
    <pomme/>
    <pomme class="small"/>
    <plat>
      <orange class="small"/>
      <orange/>
    </plat>
    `,
  },
  {
    selectorName: "Le sélecteur Nth of Type",
    doThis: "Sélectionne tous les plats pairs",
    selector: "plat:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Sélectionne un élément spécifique par son type et son ordre dans un autre élément - mais aussi les instances paires ou impaires de cet élément.",
    examples: [
      "<strong>div:nth-of-type(2)</strong> sélectionne la deuxième instance d'une div.",
      "<strong>.example:nth-of-type(odd)</strong> sélectionne toutes les instances impaires de la classe .example.",
    ],
    boardMarkup: `
    <plat/>
    <plat/>
    <plat/>
    <plat/>
    <plat id="fancy"/>
    <plat/>
    `,
  },
  {
    selectorName: "Le sélecteur Nth-of-type avec formule",
    doThis: "Sélectionne chaque 2ème plat, en partant du 3ème",
    selector: "plat:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "Le sélecteur nth-of-type avec formule sélectionne chaque nth element (énième élément), en commençant a partir d'une instance spécifique de cet élément.",
    examples: [
      "<strong>span:nth-of-type(6n+2)</strong> sélectionne toutes les 6èmes instances d'un <tag>span</tag>, en commençant (et en incluant) la 2ème instance.",
    ],
    boardMarkup: `
    <plat/>
    <plat>
      <cornichon class="small" />
    </plat>
    <plat>
      <pomme class="small" />
    </plat>
    <plat/>
    <plat>
      <pomme />
    </plat>
    <plat/>
    `,
  },
  {
    selectorName: "Le sélecteur Only of Type",
    helpTitle:
      "Sélectionne les éléments qui sont les seuls de leur type au sein de leur parent",
    selector: "pomme:only-of-type",
    syntax: ":only-of-type",
    doThis: "Sélectionne la pomme dans le plat du millieu",
    help: "Sélectionne le seul élément de son type au sein d'un autre élément.",
    examples: [
      "<strong>p span:only-of-type</strong> sélectionne un <tag>span</tag> à l'intérieur de n'importe quel <tag>p</tag> si c'est le seul <tag>span</tag>.",
    ],
    boardMarkup: `
    <plat id="fancy">
      <pomme class="small" />
      <pomme />
    </plat>
    <plat>
      <pomme class="small" />
    </plat>
    <plat>
      <cornichon />
    </plat>
    `,
  },
  {
    selectorName: "Le sélecteur Last of Type",
    helpTitle: "Sélectionne le dernier élément d'un type spécifique",
    doThis: "Sélectionne la dernière pomme et la denière orange",
    selector: ".small:last-of-type",
    syntax: ":last-of-type",
    help: "Sélectionne chaque dernier élément de ce type à l'intérieur d'un autre élément. Le type se rapporte à la balise, donc <tag>p</tag> et <tag>span</tag> sont des types différents. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples: [
      "<strong>div:last-of-type</strong> sélectionne la dernière <tag>div</tag> dans chaque élément.",
      "<strong>p span:last-of-type</strong> sélectionne le dernier <tag>span</tag> dans chaque <tag>p</tag>.",
    ],
    boardMarkup: `
    <orange class="small"/>
    <orange class="small" />
    <cornichon />
    <cornichon />
    <pomme class="small" />
    <pomme class="small" />
    `,
  },
  {
    selectorName: "Le sélecteur Empty (vide)",
    helpTitle: "Sélectionne les éléments qui n'ont pas d'enfants",
    doThis: "Sélectionne les bentos vides",
    selector: "bento:empty",
    syntax: ":empty",
    help: "Sélectionne les éléments qui n'ont pas d'autres éléments imbriqués en eux.",
    examples: [
      "<strong>div:empty</strong> sélectionne les <tag>div</tag> qui sont vides.",
    ],
    boardMarkup: `
    <bento/>
    <bento>
      <cornichon class="small"/>
    </bento>
    <plat/>
    <bento/>`,
  },
  {
    selectorName: "La pseudo classe de Négation",
    helpTitle:
      "Sélectionne tous les éléments qui ne correspondent pas au sélecteur de négation",
    doThis: "Sélectionne les grosses pommes",
    selector: "pomme:not(.small)",
    syntax: ":not(X)",
    help: 'Tu peux utiliser ceci pour séletionner tous les éléments qui ne correspondent pas au sélecteur <strong>"X"</strong>.',
    examples: [
      '<strong>:not(#fancy)</strong> sélectionne tous les éléments qui n\'ont pas <strong>id="fancy"</strong>.',
      "<strong>div:not(:first-child)</strong> sélectionne chaque <tag>div</tag> qui n'est pas une first child.",
      '<strong>:not(.big, .medium)</strong> have sélectionne tous les éléments qui n\'ont pas la classe <strong>class="big"</strong> ou <strong>class="medium"</strong>.',
    ],
    boardMarkup: `
    <plat id="fancy">
      <pomme class="small" />
    </plat>
    <plat>
      <pomme />
    </plat>
    <pomme />
    <plat>
      <orange class="small" />
    </plat>
    <cornichon class="small" />
    `,
  },
  {
    selectorName: "Les sélecteurs d'Attributs",
    helpTitle: "Sélectionne les éléments qui ont un attribut spécifique",
    doThis: "Sélectionne les objets pour quelqu'un",
    selector: "[for]",
    syntax: "[attribut]",
    help: "Les attributs sont inscrits à l'intérieur de la balise ouvrante d'un élément, de cette façon: <tag>span attribut=\"valeur\"</tag>. Un attribut n'a pas toujours une valeur, il peut être vide !",
    examples: [
      "<strong>a[href]</strong> sélectionne tous les éléments <tag>a</tag> qui ont l'attribut <strong>href=\"n'importe quoi\"</strong>.",
      "<strong>[type]</strong> sélectionne tous les éléments qui ont l'attribut <strong>type=\"n'importe quoi\"</strong>.",
    ],
    boardMarkup: `
    <bento><pomme class="small"/></bento>
    <pomme for="Ethan"/>
    <plat for="Alice"><cornichon/></plat>
    <bento for="Clara"><orange/></bento>
    <cornichon/>`,
  },
  {
    selectorName: "Les sélecteurs d'Attributs",
    helpTitle: "Sélectionne les éléments qui ont un attribut spécifique",
    doThis: "Sélectionne les plats qui sont attribués à quelqu'un",
    selector: "plat[for]",
    syntax: "A[attribut]",
    help: "Combine le sélecteur par attribut avec un autre sélecteur (comme le sélecteur de type) en l'ajoutant à la fin.",
    examples: [
      '<strong>[value]</strong> sélectionne tous les éléments qui ont un attribut <strong>value="n\'importe quel valeur"</strong>.',
      '<strong>a[href]</strong> sélectionne chaque <tag>a</tag> qui a un attribut <strong>href="peu importe"</strong>.',
      "<strong>input[disabled]</strong> sélectionne chaque <tag>input</tag> avec l'attribut <strong>disabled</strong> (désactivé).",
    ],
    boardMarkup: `
    <plat for="Sarah"><cornichon/></plat>
    <plat for="Luke"><pomme/></plat>
    <plat/>
    <bento for="Steve"><orange/></bento>
    `,
  },
  {
    selectorName: "Le sélecteur de valeur d'attribut",
    helpTitle:
      "Sélectionne tous les éléments qui ont une valeur d'attribut spécifique",
    doThis: "Sélectionne le plat de Vitaly",
    selector: "[for=Vitaly]",
    syntax: '[attribut="valeur"]',
    help: "Les sélecteurs d'attributs sont sensibles à la casse, chaque caractère doit correspondre exactement.",
    examples: [
      '<strong>input[type="checkbox"]</strong> sélectionne toutes les éléments input de type checkbox.',
    ],
    boardMarkup: `
    <pomme for="Alexei" />
    <bento for="Albina"><pomme /></bento>
    <bento for="Vitaly"><orange/></bento>
    <cornichon/>
    `,
  },
  {
    selectorName: 'Le sélecteur d\'attirbuts "qui commence par"',
    helpTitle:
      "Sélectionne chaque élément avec une valeur d'attribut qui commence avec des caractères spécifiques.",
    doThis: "Choisis les objets pour les gens dont le nom commence par 'Sa'",
    selector: '[for^="Sa"]',
    syntax: '[attribut^="valeur"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples: [
      '<strong>.jouet[catégorie^="Voi"]</strong> sélectionne les éléments avec la classe <strong>jouet</strong> et ayant pour valeur soit <strong>catégorie="Voiture"</strong> soit <strong>catégorie="Voile"</strong>.',
    ],
    boardMarkup: `
    <plat for="Sam"><cornichon/></plat>
    <bento for="Sarah"><pomme class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `,
  },
  {
    selectorName: 'Le sélecteur d\'attributs "qui se termine par"',
    helpTitle:
      "Sélectionne tous les éléments avec une valeure d'attribut qui se termine par des caractères spécifiques",
    doThis:
      "Sélectionne tous les objets qui ont un nom qui se termine par 'ato'",
    selector: '[for$="ato"]',
    syntax: '[attribut$="valeur"]',
    // help: "",
    examples: [
      '<strong>img[src$=".jpg"]</strong> sélectionne toutes les images dont la source est au format <strong>.jpg</strong>.',
    ],
    boardMarkup: `
    <pomme class="small"/>
    <bento for="Hayato"><cornichon/></bento>
    <pomme for="Ryota"></pomme>
    <plat for="Minato"><orange/></plat>
    <cornichon class="small"/>
    `,
  },
  {
    selectorName: "Le sélecteur d'attribut Wildcard (joker)",
    helpTitle:
      "Sélectionne tous les élements avec une valeur d'atribut qui contient un caractère spécifique",
    syntax: '[attribut*="valeur"]',
    doThis: "Sélectionne les repas dont les noms contiennent 'obb'",
    selector: '[for*="obb"]',
    help: "Un sélecteur utile si tu peux identifier un schéma commun dans des objets avec des attributs comme par <strong>class</strong>, <strong>href</strong> or <strong>src</strong>.",
    examples: [
      '<strong>img[src*="/thumbnails/"]</strong> sélectionne chaque élément image qui affiche une image du dossier "thumbnails".',
      '<strong>[class*="heading"]</strong> sélectionne tous les éléments avec "heading" dans leurs classe, comme <strong>class="main-heading"</strong> et <strong>class="sub-heading"</strong>',
    ],
    boardMarkup: `
    <bento for="Robbie"><pomme /></bento>
    <bento for="Timmy"><cornichon /></bento>
    <bento for="Bobby"><orange /></bento>
    `,
  },
];
