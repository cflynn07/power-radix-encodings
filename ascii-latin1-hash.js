/**
 * ASCII ISO-latin-1 (ISO 8859-1) encoding
 * Scraped from these tables
 * https://en.wikipedia.org/wiki/ISO/IEC_8859-1#Codepage_layout
 * http://www.theasciicode.com.ar/extended-ascii-code/lowercase-letter-a-acute-accent-ascii-code-160.html
 * http://www.ascii-code.com/
 * @module ascii-latin1-hash
 */
module.exports = {
  // Control characters [0 - 31]
  0: 0x00, // Null char
  1: 0x01, // Start of Heading
  2: 0x02, // Start of Text
  3: 0x03, // End of Text
  4: 0x04, // End of Transmission
  5: 0x05, // Enquiry
  6: 0x06, // Acknowledgment
  7: 0x07, // Bell
  8: 0x08, // Back Space
  9: 0x09, // Horizontal Tab
  10: 0x0A, // Line Feed
  11: 0x0B, // Vertical Tab
  12: 0x0C, // Form Feed
  13: 0x0D, // Carriage Return
  14: 0x0E, // Shift Out / X-On
  15: 0x0F, // Shift In / X-Off
  16: 0x10, // Data Line Escape
  17: 0x11, // Device Control 1 (oft. XON)
  18: 0x12, // Device Control 2
  19: 0x13, // Device Control 3 (oft. XOFF)
  20: 0x14, // Device Control 4
  21: 0x15, // Negative Acknowledgement
  22: 0x16, // Synchronous Idle
  23: 0x17, // End of Transmit Block
  24: 0x18, // Cancel
  25: 0x19, // End of Medium
  26: 0x1A, // Substitute
  27: 0x1B, // Escape
  28: 0x1C, // File Separator
  29: 0x1D, // Group Separator
  30: 0x1E, // Record Separator
  31: 0x1F, // Unit Separator

  // Printable Characters [32 - 127]
  32: " ", // Space
  33: "!", // Exclamation mark
  34: "\"", // Double quotes (or speech marks)
  35: "#", // Number
  36: "$", // Dollar
  37: "%", // Procenttecken
  38: "&", // Ampersand
  39: "'", // Single quote
  40: "(", // Open parenthesis (or open bracket)
  41: ")", // Close parenthesis (or close bracket)
  42: "*", // Asterisk
  43: "+", // Plus
  44: ",", // Comma
  45: "-", // Hyphen
  46: ".", // Period, dot or full stop
  47: "/", // Slash or divide
  48: "0", // Zero
  49: "1", // One
  50: "2", // Two
  51: "3", // Three
  52: "4", // Four
  53: "5", // Five
  54: "6", // Six
  55: "7", // Seven
  56: "8", // Eight
  57: "9", // Nine
  58: ":", // Colon
  59: ";", // Semicolon
  60: "<", // Less than (or open angled bracket)
  61: "=", // Equals
  62: ">", // Greater than (or close angled bracket)
  63: "?", // Question mark
  64: "@", // At symbol
  65: "A", // Uppercase A
  66: "B", // Uppercase B
  67: "C", // Uppercase C
  68: "D", // Uppercase D
  69: "E", // Uppercase E
  70: "F", // Uppercase F
  71: "G", // Uppercase G
  72: "H", // Uppercase H
  73: "I", // Uppercase I
  74: "J", // Uppercase J
  75: "K", // Uppercase K
  76: "L", // Uppercase L
  77: "M", // Uppercase M
  78: "N", // Uppercase N
  79: "O", // Uppercase O
  80: "P", // Uppercase P
  81: "Q", // Uppercase Q
  82: "R", // Uppercase R
  83: "S", // Uppercase S
  84: "T", // Uppercase T
  85: "U", // Uppercase U
  86: "V", // Uppercase V
  87: "W", // Uppercase W
  88: "X", // Uppercase X
  89: "Y", // Uppercase Y
  90: "Z", // Uppercase Z
  91: "[", // Opening bracket
  92: "\\", // Backslash
  93: "]", // Closing bracket
  94: "^", // Caret - circumflex
  95: "_", // Underscore
  96: "`", // Grave accent
  97: "a", // Lowercase a
  98: "b", // Lowercase b
  99: "c", // Lowercase c
  100: "d", // Lowercase d
  101: "e", // Lowercase e
  102: "f", // Lowercase f
  103: "g", // Lowercase g
  104: "h", // Lowercase h
  105: "i", // Lowercase i
  106: "j", // Lowercase j
  107: "k", // Lowercase k
  108: "l", // Lowercase l
  109: "m", // Lowercase m
  110: "n", // Lowercase n
  111: "o", // Lowercase o
  112: "p", // Lowercase p
  113: "q", // Lowercase q
  114: "r", // Lowercase r
  115: "s", // Lowercase s
  116: "t", // Lowercase t
  117: "u", // Lowercase u
  118: "v", // Lowercase v
  119: "w", // Lowercase w
  120: "x", // Lowercase x
  121: "y", // Lowercase y
  122: "z", // Lowercase z
  123: "{", // Opening brace
  124: "|", // Vertical bar
  125: "}", // Closing brace
  126: "~", // Equivalency sign - tilde
  127: "", // Delete

  // Extended ASCII [128 - 255]
  128: "€", // Euro sign
  129: "ü", // letter u with umlaut or diaeresis
  130: "‚", // Single low-9 quotation mark
  131: "ƒ", // Latin small letter f with hook
  132: "„", // Double low-9 quotation mark
  133: "…", // Horizontal ellipsis
  134: "†", // Dagger
  135: "‡", // Double dagger
  136: "ˆ", // Modifier letter circumflex accent
  137: "‰", // Per mille sign
  138: "Š", // Latin capital letter S with caron
  139: "‹", // Single left-pointing angle quotation
  140: "Œ", // Latin capital ligature OE
  141: "ì", // letter i with grave accent
  142: "Ž", // Latin captial letter Z with caron
  143: "Å", // Capital letter A with a ring
  144: "É", // Capital letter E with acute accent or E-acute
  145: "‘", // Left single quotation mark
  146: "’", // Right single quotation mark
  147: "“", // Left double quotation mark
  148: "”", // Right double quotation mark
  149: "•", // Bullet
  150: "–", // En dash
  151: "—", // Em dash
  152: "˜", // Small tilde
  153: "™", // Trade mark sign
  154: "š", // Latin small letter S with caron
  155: "›", // Single right-pointing angle quotation mark
  156: "œ", // Latin small ligature oe
  157: "Ø", // Uppercase slashed zero or empty set
  158: "ž", // Latin small letter z with caron
  159: "Ÿ", // Latin capital letter Y with diaeresis
  160: "á", // Lowercase letter a with acute accent or a-acute
  161: "¡", // Inverted exclamation mark
  162: "¢", // Cent sign
  163: "£", // Pound sign
  164: "¤", // Currency sign
  165: "¥", // Yen sign
  166: "¦", // Pipe, Broken vertical bar
  167: "§", // Section sign
  168: "¨", // Spacing diaeresis - umlaut
  169: "©", // Copyright sign
  170: "ª", // Feminine ordinal indicator
  171: "«", // Left double angle quotes
  172: "¬", // Not sign
  173: "­", // Soft hyphen
  174: "®", // Registered trade mark sign
  175: "¯", // Spacing macron - overline
  176: "°", // Degree sign
  177: "±", // Plus-or-minus sign
  178: "²", // Superscript two - squared
  179: "³", // Superscript three - cubed
  180: "´", // Acute accent - spacing acute
  181: "µ", // Micro sign
  182: "¶", // Pilcrow sign - paragraph sign
  183: "·", // Middle dot - Georgian comma
  184: "¸", // Spacing cedilla
  185: "¹", // Superscript one
  186: "º", // Masculine ordinal indicator
  187: "»", // Right double angle quotes
  188: "¼", // Fraction one quarter
  189: "½", // Fraction one half
  190: "¾", // Fraction three quarters
  191: "¿", // Inverted question mark
  192: "À", // Latin capital letter A with grave
  193: "Á", // Latin capital letter A with acute
  194: "Â", // Latin capital letter A with circumflex
  195: "Ã", // Latin capital letter A with tilde
  196: "Ä", // Latin capital letter A with diaeresis
  197: "Å", // Latin capital letter A with ring above
  198: "Æ", // Latin capital letter AE
  199: "Ç", // Latin capital letter C with cedilla
  200: "È", // Latin capital letter E with grave
  201: "É", // Latin capital letter E with acute
  202: "Ê", // Latin capital letter E with circumflex
  203: "Ë", // Latin capital letter E with diaeresis
  204: "Ì", // Latin capital letter I with grave
  205: "Í", // Latin capital letter I with acute
  206: "Î", // Latin capital letter I with circumflex
  207: "Ï", // Latin capital letter I with diaeresis
  208: "Ð", // Latin capital letter ETH
  209: "Ñ", // Latin capital letter N with tilde
  210: "Ò", // Latin capital letter O with grave
  211: "Ó", // Latin capital letter O with acute
  212: "Ô", // Latin capital letter O with circumflex
  213: "Õ", // Latin capital letter O with tilde
  214: "Ö", // Latin capital letter O with diaeresis
  215: "×", // Multiplication sign
  216: "Ø", // Latin capital letter O with slash
  217: "Ù", // Latin capital letter U with grave
  218: "Ú", // Latin capital letter U with acute
  219: "Û", // Latin capital letter U with circumflex
  220: "Ü", // Latin capital letter U with diaeresis
  221: "Ý", // Latin capital letter Y with acute
  222: "Þ", // Latin capital letter THORN
  223: "ß", // Latin small letter sharp s - ess-zed
  224: "à", // Latin small letter a with grave
  225: "á", // Latin small letter a with acute
  226: "â", // Latin small letter a with circumflex
  227: "ã", // Latin small letter a with tilde
  228: "ä", // Latin small letter a with diaeresis
  229: "å", // Latin small letter a with ring above
  230: "æ", // Latin small letter ae
  231: "ç", // Latin small letter c with cedilla
  232: "è", // Latin small letter e with grave
  233: "é", // Latin small letter e with acute
  234: "ê", // Latin small letter e with circumflex
  235: "ë", // Latin small letter e with diaeresis
  236: "ì", // Latin small letter i with grave
  237: "í", // Latin small letter i with acute
  238: "î", // Latin small letter i with circumflex
  239: "ï", // Latin small letter i with diaeresis
  240: "ð", // Latin small letter eth
  241: "ñ", // Latin small letter n with tilde
  242: "ò", // Latin small letter o with grave
  243: "ó", // Latin small letter o with acute
  244: "ô", // Latin small letter o with circumflex
  245: "õ", // Latin small letter o with tilde
  246: "ö", // Latin small letter o with diaeresis
  247: "÷", // Division sign
  248: "ø", // Latin small letter o with slash
  249: "ù", // Latin small letter u with grave
  250: "ú", // Latin small letter u with acute
  251: "û", // Latin small letter u with circumflex
  252: "ü", // Latin small letter u with diaeresis
  253: "ý", // Lute
  234: "ê", // Latin small letter e with circumflex
  235: "ë", // Latin small letter e with diaeresis
  236: "ì", // Latin small letter i with grave
  237: "í", // Latin small letter i with acute
  238: "î", // Latin small letter i with circumflex
  239: "ï", // Latin small letter i with diaeresis
  240: "ð", // Latin small letter eth
  241: "ñ", // Latin small letter n with tilde
  242: "ò", // Latin small letter o with grave
  243: "ó", // Latin small letter o with acute
  244: "ô", // Latin small letter o with circumflex
  245: "õ", // Latin small letter o with tilde
  246: "ö", // Latin small letter o with diaeresis
  247: "÷", // Division sign
  248: "ø", // Latin small letter o with slash
  249: "ù", // Latin small letter u with grave
  250: "ú", // Latin small letter u with acute
  251: "û", // Latin small letter u with circumflex
  252: "ü", // Latin small letter u with diaeresis
  253: "ý", // Latin small letter y with acute
  254: "þ", // Latin small letter thorn
  255: "ÿ" // Latin small letter y with diaeresis
}
