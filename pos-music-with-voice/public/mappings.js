
// adj = 1
// noun = 2
// verb = 3
// ? = 4
// pronouns = 5

var POS2Music = {
	'CC' : undefined, // Coord Conjuncn           and,but,or
	'CD' : 1, // Cardinal number          one,two
	'DT' : undefined, // Determiner               the,some
	'EX' : undefined, // Existential there        there
	'FW' : 4, // Foreign Word             mon dieu
	'IN' : undefined, // Preposition              of,in,by
	'JJ' : 1, // Adjective                big
	'JJR': 1, // Adj., comparative       bigger
	'JJS': 1, // Adj., superlative       biggest
	'LS': undefined, // List item marker         1,One
	'MD': undefined, // Modal                    can,should
	'NN': 2, // Noun, sing. or mass      dog
	'NNP': 2, // Proper noun, sing.      Edinburgh
	'NNPS': 2, // Proper noun, plural    Smiths
	'NNS': 2, // Noun, plural            dogs
	'POS': undefined, // Possessive ending       Õs
	'PDT': undefined, // Predeterminer           all, both
	'PP$': 5, // Possessive pronoun      my,oneÕs
	'PRP': 5, // Personal pronoun         I,you,she
	'RB': 12, // Adverb                   quickly
	'RBR': 13, // Adverb, comparative     faster
	'RBS': 13, // Adverb, superlative     fastest
	'RP': 14, // Particle                 up,off
	'SYM': 15, // Symbol                  +,%,&
	'TO': 16, // ÒtoÓ                     to
	'UH': 17, // Interjection             oh, oops
	'VB': 17, // verb, base form          eat
	'VBD': 18, // verb, past tense        ate
	'VBG': 18, // verb, gerund            eating
	'VBN': 18, // verb, past part         eaten
	'VBP': 18, // Verb, present           eat
	'VBZ': 18, // Verb, present           eats
	'WDT': 19, // Wh-determiner           which,that
	'WP': 19, // Wh pronoun               who,what
	'WP$': 19, // Possessive-Wh           whose
	'WRB': 19, // Wh-adverb               how,where
	",": 'rest', // Comma                     ,
	".": 'rest', // Sent-final punct          . ! ?
	":": 'rest', // Mid-sent punct.           : ; Ñ
	"$": 'rest', // Dollar sign               $
	"#": 'rest', // Pound sign                #
	'"': 'rest', // quote                     "
	'(': 'rest', // Left paren                (
	')': 'rest' // Right paren               )
};