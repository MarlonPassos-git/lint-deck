import type { BiomeRule } from './types'

export const biomeRules = [
  {
    "group": "a11y",
    "name": "noAccessKey",
    "title": "No Access Key",
    "summary": "Enforce that the accesskey attribute is not used on any HTML element.",
    "url": "https://biomejs.dev/linter/rules/no-access-key"
  },
  {
    "group": "a11y",
    "name": "noAriaHiddenOnFocusable",
    "title": "No Aria Hidden On Focusable",
    "summary": "Enforce that aria-hidden=\"true\" is not set on focusable elements.",
    "url": "https://biomejs.dev/linter/rules/no-aria-hidden-on-focusable"
  },
  {
    "group": "a11y",
    "name": "noAriaUnsupportedElements",
    "title": "No Aria Unsupported Elements",
    "summary": "Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.",
    "url": "https://biomejs.dev/linter/rules/no-aria-unsupported-elements"
  },
  {
    "group": "a11y",
    "name": "noAutofocus",
    "title": "No Autofocus",
    "summary": "Enforce that the autofocus attribute is not used on elements.",
    "url": "https://biomejs.dev/linter/rules/no-autofocus"
  },
  {
    "group": "a11y",
    "name": "noDistractingElements",
    "title": "No Distracting Elements",
    "summary": "Enforces that no distracting elements are used.",
    "url": "https://biomejs.dev/linter/rules/no-distracting-elements"
  },
  {
    "group": "a11y",
    "name": "noHeaderScope",
    "title": "No Header Scope",
    "summary": "The scope prop should be used only on \\<th> elements.",
    "url": "https://biomejs.dev/linter/rules/no-header-scope"
  },
  {
    "group": "a11y",
    "name": "noInteractiveElementToNoninteractiveRole",
    "title": "No Interactive Element To Noninteractive Role",
    "summary": "Enforce that non-interactive ARIA roles are not assigned to interactive HTML elements.",
    "url": "https://biomejs.dev/linter/rules/no-interactive-element-to-noninteractive-role"
  },
  {
    "group": "a11y",
    "name": "noLabelWithoutControl",
    "title": "No Label Without Control",
    "summary": "Enforce that a label element or component has a text label and an associated input.",
    "url": "https://biomejs.dev/linter/rules/no-label-without-control"
  },
  {
    "group": "a11y",
    "name": "noNoninteractiveElementInteractions",
    "title": "No Noninteractive Element Interactions",
    "summary": "Disallow use event handlers on non-interactive elements.",
    "url": "https://biomejs.dev/linter/rules/no-noninteractive-element-interactions"
  },
  {
    "group": "a11y",
    "name": "noNoninteractiveElementToInteractiveRole",
    "title": "No Noninteractive Element To Interactive Role",
    "summary": "Enforce that interactive ARIA roles are not assigned to non-interactive HTML elements.",
    "url": "https://biomejs.dev/linter/rules/no-noninteractive-element-to-interactive-role"
  },
  {
    "group": "a11y",
    "name": "noNoninteractiveTabindex",
    "title": "No Noninteractive Tabindex",
    "summary": "Enforce that tabIndex is not assigned to non-interactive HTML elements.",
    "url": "https://biomejs.dev/linter/rules/no-noninteractive-tabindex"
  },
  {
    "group": "a11y",
    "name": "noPositiveTabindex",
    "title": "No Positive Tabindex",
    "summary": "Prevent the usage of positive integers on tabindex attribute.",
    "url": "https://biomejs.dev/linter/rules/no-positive-tabindex"
  },
  {
    "group": "a11y",
    "name": "noRedundantAlt",
    "title": "No Redundant Alt",
    "summary": "Enforce img alt prop does not contain the word \"image\", \"picture\", or \"photo\".",
    "url": "https://biomejs.dev/linter/rules/no-redundant-alt"
  },
  {
    "group": "a11y",
    "name": "noRedundantRoles",
    "title": "No Redundant Roles",
    "summary": "Enforce explicit role property is not the same as implicit/default role property on an element.",
    "url": "https://biomejs.dev/linter/rules/no-redundant-roles"
  },
  {
    "group": "a11y",
    "name": "noStaticElementInteractions",
    "title": "No Static Element Interactions",
    "summary": "Enforce that static, visible elements (such as \\<div>) that have click handlers use the valid role attribute.",
    "url": "https://biomejs.dev/linter/rules/no-static-element-interactions"
  },
  {
    "group": "a11y",
    "name": "noSvgWithoutTitle",
    "title": "No Svg Without Title",
    "summary": "Enforces the usage of the title element for the svg element.",
    "url": "https://biomejs.dev/linter/rules/no-svg-without-title"
  },
  {
    "group": "a11y",
    "name": "useAltText",
    "title": "Use Alt Text",
    "summary": "Enforce that all elements that require alternative text have meaningful information to relay back to the end user.",
    "url": "https://biomejs.dev/linter/rules/use-alt-text"
  },
  {
    "group": "a11y",
    "name": "useAnchorContent",
    "title": "Use Anchor Content",
    "summary": "Enforce that anchors have content and that the content is accessible to screen readers.",
    "url": "https://biomejs.dev/linter/rules/use-anchor-content"
  },
  {
    "group": "a11y",
    "name": "useAriaActivedescendantWithTabindex",
    "title": "Use Aria Activedescendant With Tabindex",
    "summary": "Enforce that tabIndex is assigned to non-interactive HTML elements with aria-activedescendant.",
    "url": "https://biomejs.dev/linter/rules/use-aria-activedescendant-with-tabindex"
  },
  {
    "group": "a11y",
    "name": "useAriaPropsForRole",
    "title": "Use Aria Props For Role",
    "summary": "Enforce that elements with ARIA roles must have all required ARIA attributes for that role.",
    "url": "https://biomejs.dev/linter/rules/use-aria-props-for-role"
  },
  {
    "group": "a11y",
    "name": "useAriaPropsSupportedByRole",
    "title": "Use Aria Props Supported By Role",
    "summary": "Enforce that ARIA properties are valid for the roles that are supported by the element.",
    "url": "https://biomejs.dev/linter/rules/use-aria-props-supported-by-role"
  },
  {
    "group": "a11y",
    "name": "useButtonType",
    "title": "Use Button Type",
    "summary": "Enforces the usage and validity of the attribute type for the element button.",
    "url": "https://biomejs.dev/linter/rules/use-button-type"
  },
  {
    "group": "a11y",
    "name": "useFocusableInteractive",
    "title": "Use Focusable Interactive",
    "summary": "Elements with an interactive role and interaction handlers must be focusable.",
    "url": "https://biomejs.dev/linter/rules/use-focusable-interactive"
  },
  {
    "group": "a11y",
    "name": "useGenericFontNames",
    "title": "Use Generic Font Names",
    "summary": "Disallow a missing generic family keyword within font families.",
    "url": "https://biomejs.dev/linter/rules/use-generic-font-names"
  },
  {
    "group": "a11y",
    "name": "useHeadingContent",
    "title": "Use Heading Content",
    "summary": "Enforce that heading elements (h1, h2, etc.) have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the aria-hidden prop.",
    "url": "https://biomejs.dev/linter/rules/use-heading-content"
  },
  {
    "group": "a11y",
    "name": "useHtmlLang",
    "title": "Use Html Lang",
    "summary": "Enforce that html element has lang attribute.",
    "url": "https://biomejs.dev/linter/rules/use-html-lang"
  },
  {
    "group": "a11y",
    "name": "useIframeTitle",
    "title": "Use Iframe Title",
    "summary": "Enforces the usage of the attribute title for the element iframe.",
    "url": "https://biomejs.dev/linter/rules/use-iframe-title"
  },
  {
    "group": "a11y",
    "name": "useKeyWithClickEvents",
    "title": "Use Key With Click Events",
    "summary": "Enforce onClick is accompanied by at least one of the following: onKeyUp, onKeyDown, onKeyPress.",
    "url": "https://biomejs.dev/linter/rules/use-key-with-click-events"
  },
  {
    "group": "a11y",
    "name": "useKeyWithMouseEvents",
    "title": "Use Key With Mouse Events",
    "summary": "Enforce onMouseOver / onMouseOut are accompanied by onFocus / onBlur.",
    "url": "https://biomejs.dev/linter/rules/use-key-with-mouse-events"
  },
  {
    "group": "a11y",
    "name": "useMediaCaption",
    "title": "Use Media Caption",
    "summary": "Enforces that audio and video elements must have a track for captions.",
    "url": "https://biomejs.dev/linter/rules/use-media-caption"
  },
  {
    "group": "a11y",
    "name": "useSemanticElements",
    "title": "Use Semantic Elements",
    "summary": "It detects the use of role attributes in JSX elements and suggests using semantic elements instead.",
    "url": "https://biomejs.dev/linter/rules/use-semantic-elements"
  },
  {
    "group": "a11y",
    "name": "useValidAnchor",
    "title": "Use Valid Anchor",
    "summary": "Enforce that all anchors are valid, and they are navigable elements.",
    "url": "https://biomejs.dev/linter/rules/use-valid-anchor"
  },
  {
    "group": "a11y",
    "name": "useValidAriaProps",
    "title": "Use Valid Aria Props",
    "summary": "Ensures that ARIA properties aria-* are all valid.",
    "url": "https://biomejs.dev/linter/rules/use-valid-aria-props"
  },
  {
    "group": "a11y",
    "name": "useValidAriaRole",
    "title": "Use Valid Aria Role",
    "summary": "Elements with ARIA roles must use a valid, non-abstract ARIA role.",
    "url": "https://biomejs.dev/linter/rules/use-valid-aria-role"
  },
  {
    "group": "a11y",
    "name": "useValidAriaValues",
    "title": "Use Valid Aria Values",
    "summary": "Enforce that ARIA state and property values are valid.",
    "url": "https://biomejs.dev/linter/rules/use-valid-aria-values"
  },
  {
    "group": "a11y",
    "name": "useValidAutocomplete",
    "title": "Use Valid Autocomplete",
    "summary": "Use valid values for the autocomplete attribute on input elements.",
    "url": "https://biomejs.dev/linter/rules/use-valid-autocomplete"
  },
  {
    "group": "a11y",
    "name": "useValidLang",
    "title": "Use Valid Lang",
    "summary": "Ensure that the attribute passed to the lang attribute is a correct ISO language and/or country.",
    "url": "https://biomejs.dev/linter/rules/use-valid-lang"
  },
  {
    "group": "complexity",
    "name": "noAdjacentSpacesInRegex",
    "title": "No Adjacent Spaces In Regex",
    "summary": "Disallow unclear usage of consecutive space characters in regular expression literals.",
    "url": "https://biomejs.dev/linter/rules/no-adjacent-spaces-in-regex"
  },
  {
    "group": "complexity",
    "name": "noArguments",
    "title": "No Arguments",
    "summary": "Disallow the use of arguments.",
    "url": "https://biomejs.dev/linter/rules/no-arguments"
  },
  {
    "group": "complexity",
    "name": "noBannedTypes",
    "title": "No Banned Types",
    "summary": "Disallow primitive type aliases and misleading types.",
    "url": "https://biomejs.dev/linter/rules/no-banned-types"
  },
  {
    "group": "complexity",
    "name": "noCommaOperator",
    "title": "No Comma Operator",
    "summary": "Disallow comma operator.",
    "url": "https://biomejs.dev/linter/rules/no-comma-operator"
  },
  {
    "group": "complexity",
    "name": "noEmptyTypeParameters",
    "title": "No Empty Type Parameters",
    "summary": "Disallow empty type parameters in type aliases and interfaces.",
    "url": "https://biomejs.dev/linter/rules/no-empty-type-parameters"
  },
  {
    "group": "complexity",
    "name": "noExcessiveCognitiveComplexity",
    "title": "No Excessive Cognitive Complexity",
    "summary": "Disallow functions that exceed a given Cognitive Complexity score.",
    "url": "https://biomejs.dev/linter/rules/no-excessive-cognitive-complexity"
  },
  {
    "group": "complexity",
    "name": "noExcessiveLinesPerFunction",
    "title": "No Excessive Lines Per Function",
    "summary": "Restrict the number of lines of code in a function.",
    "url": "https://biomejs.dev/linter/rules/no-excessive-lines-per-function"
  },
  {
    "group": "complexity",
    "name": "noExcessiveNestedTestSuites",
    "title": "No Excessive Nested Test Suites",
    "summary": "This rule enforces a maximum depth to nested describe() in test files.",
    "url": "https://biomejs.dev/linter/rules/no-excessive-nested-test-suites"
  },
  {
    "group": "complexity",
    "name": "noExtraBooleanCast",
    "title": "No Extra Boolean Cast",
    "summary": "Disallow unnecessary boolean casts.",
    "url": "https://biomejs.dev/linter/rules/no-extra-boolean-cast"
  },
  {
    "group": "complexity",
    "name": "noFlatMapIdentity",
    "title": "No Flat Map Identity",
    "summary": "Disallow to use unnecessary callback on flatMap.",
    "url": "https://biomejs.dev/linter/rules/no-flat-map-identity"
  },
  {
    "group": "complexity",
    "name": "noForEach",
    "title": "No For Each",
    "summary": "Prefer for...of statement instead of Array.forEach.",
    "url": "https://biomejs.dev/linter/rules/no-for-each"
  },
  {
    "group": "complexity",
    "name": "noImplicitCoercions",
    "title": "No Implicit Coercions",
    "summary": "Disallow shorthand type conversions.",
    "url": "https://biomejs.dev/linter/rules/no-implicit-coercions"
  },
  {
    "group": "complexity",
    "name": "noImportantStyles",
    "title": "No Important Styles",
    "summary": "Disallow the use of the !important style.",
    "url": "https://biomejs.dev/linter/rules/no-important-styles"
  },
  {
    "group": "complexity",
    "name": "noStaticOnlyClass",
    "title": "No Static Only Class",
    "summary": "This rule reports when a class has no non-static members, such as for a class used exclusively as a static namespace.",
    "url": "https://biomejs.dev/linter/rules/no-static-only-class"
  },
  {
    "group": "complexity",
    "name": "noThisInStatic",
    "title": "No This In Static",
    "summary": "Disallow this and super in static contexts.",
    "url": "https://biomejs.dev/linter/rules/no-this-in-static"
  },
  {
    "group": "complexity",
    "name": "noUselessCatch",
    "title": "No Useless Catch",
    "summary": "Disallow unnecessary catch clauses.",
    "url": "https://biomejs.dev/linter/rules/no-useless-catch"
  },
  {
    "group": "complexity",
    "name": "noUselessCatchBinding",
    "title": "No Useless Catch Binding",
    "summary": "Disallow unused catch bindings.",
    "url": "https://biomejs.dev/linter/rules/no-useless-catch-binding"
  },
  {
    "group": "complexity",
    "name": "noUselessConstructor",
    "title": "No Useless Constructor",
    "summary": "Disallow unnecessary constructors.",
    "url": "https://biomejs.dev/linter/rules/no-useless-constructor"
  },
  {
    "group": "complexity",
    "name": "noUselessContinue",
    "title": "No Useless Continue",
    "summary": "Avoid using unnecessary continue.",
    "url": "https://biomejs.dev/linter/rules/no-useless-continue"
  },
  {
    "group": "complexity",
    "name": "noUselessEmptyExport",
    "title": "No Useless Empty Export",
    "summary": "Disallow empty exports that don't change anything in a module file.",
    "url": "https://biomejs.dev/linter/rules/no-useless-empty-export"
  },
  {
    "group": "complexity",
    "name": "noUselessEscapeInRegex",
    "title": "No Useless Escape In Regex",
    "summary": "Disallow unnecessary escape sequence in regular expression literals.",
    "url": "https://biomejs.dev/linter/rules/no-useless-escape-in-regex"
  },
  {
    "group": "complexity",
    "name": "noUselessFragments",
    "title": "No Useless Fragments",
    "summary": "Disallow unnecessary fragments.",
    "url": "https://biomejs.dev/linter/rules/no-useless-fragments"
  },
  {
    "group": "complexity",
    "name": "noUselessLabel",
    "title": "No Useless Label",
    "summary": "Disallow unnecessary labels.",
    "url": "https://biomejs.dev/linter/rules/no-useless-label"
  },
  {
    "group": "complexity",
    "name": "noUselessLoneBlockStatements",
    "title": "No Useless Lone Block Statements",
    "summary": "Disallow unnecessary nested block statements.",
    "url": "https://biomejs.dev/linter/rules/no-useless-lone-block-statements"
  },
  {
    "group": "complexity",
    "name": "noUselessRename",
    "title": "No Useless Rename",
    "summary": "Disallow renaming import, export, and destructured assignments to the same name.",
    "url": "https://biomejs.dev/linter/rules/no-useless-rename"
  },
  {
    "group": "complexity",
    "name": "noUselessStringConcat",
    "title": "No Useless String Concat",
    "summary": "Disallow unnecessary concatenation of string or template literals.",
    "url": "https://biomejs.dev/linter/rules/no-useless-string-concat"
  },
  {
    "group": "complexity",
    "name": "noUselessStringRaw",
    "title": "No Useless String Raw",
    "summary": "Disallow unnecessary String.raw function in template string literals without any escape sequence.",
    "url": "https://biomejs.dev/linter/rules/no-useless-string-raw"
  },
  {
    "group": "complexity",
    "name": "noUselessSwitchCase",
    "title": "No Useless Switch Case",
    "summary": "Disallow useless case in switch statements.",
    "url": "https://biomejs.dev/linter/rules/no-useless-switch-case"
  },
  {
    "group": "complexity",
    "name": "noUselessTernary",
    "title": "No Useless Ternary",
    "summary": "Disallow ternary operators when simpler alternatives exist.",
    "url": "https://biomejs.dev/linter/rules/no-useless-ternary"
  },
  {
    "group": "complexity",
    "name": "noUselessThisAlias",
    "title": "No Useless This Alias",
    "summary": "Disallow useless this aliasing.",
    "url": "https://biomejs.dev/linter/rules/no-useless-this-alias"
  },
  {
    "group": "complexity",
    "name": "noUselessTypeConstraint",
    "title": "No Useless Type Constraint",
    "summary": "Disallow using any or unknown as type constraint.",
    "url": "https://biomejs.dev/linter/rules/no-useless-type-constraint"
  },
  {
    "group": "complexity",
    "name": "noUselessUndefined",
    "title": "No Useless Undefined",
    "summary": "Disallow the use of useless undefined.",
    "url": "https://biomejs.dev/linter/rules/no-useless-undefined"
  },
  {
    "group": "complexity",
    "name": "noUselessUndefinedInitialization",
    "title": "No Useless Undefined Initialization",
    "summary": "Disallow initializing variables to undefined.",
    "url": "https://biomejs.dev/linter/rules/no-useless-undefined-initialization"
  },
  {
    "group": "complexity",
    "name": "noVoid",
    "title": "No Void",
    "summary": "Disallow the use of void operators, which is not a familiar operator.",
    "url": "https://biomejs.dev/linter/rules/no-void"
  },
  {
    "group": "complexity",
    "name": "useArrowFunction",
    "title": "Use Arrow Function",
    "summary": "Use arrow functions over function expressions.",
    "url": "https://biomejs.dev/linter/rules/use-arrow-function"
  },
  {
    "group": "complexity",
    "name": "useDateNow",
    "title": "Use Date Now",
    "summary": "Use Date.now() to get the number of milliseconds since the Unix Epoch.",
    "url": "https://biomejs.dev/linter/rules/use-date-now"
  },
  {
    "group": "complexity",
    "name": "useFlatMap",
    "title": "Use Flat Map",
    "summary": "Promotes the use of .flatMap() when map().flat() are used together.",
    "url": "https://biomejs.dev/linter/rules/use-flat-map"
  },
  {
    "group": "complexity",
    "name": "useIndexOf",
    "title": "Use Index Of",
    "summary": "Prefer Array#{indexOf,lastIndexOf}() over Array#{findIndex,findLastIndex}() when looking for the index of an item.",
    "url": "https://biomejs.dev/linter/rules/use-index-of"
  },
  {
    "group": "complexity",
    "name": "useLiteralKeys",
    "title": "Use Literal Keys",
    "summary": "Enforce the usage of a literal access to properties over computed property access.",
    "url": "https://biomejs.dev/linter/rules/use-literal-keys"
  },
  {
    "group": "complexity",
    "name": "useMaxParams",
    "title": "Use Max Params",
    "summary": "Enforce a maximum number of parameters in function definitions.",
    "url": "https://biomejs.dev/linter/rules/use-max-params"
  },
  {
    "group": "complexity",
    "name": "useNumericLiterals",
    "title": "Use Numeric Literals",
    "summary": "Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals.",
    "url": "https://biomejs.dev/linter/rules/use-numeric-literals"
  },
  {
    "group": "complexity",
    "name": "useOptionalChain",
    "title": "Use Optional Chain",
    "summary": "Enforce using concise optional chain instead of chained logical expressions.",
    "url": "https://biomejs.dev/linter/rules/use-optional-chain"
  },
  {
    "group": "complexity",
    "name": "useRegexLiterals",
    "title": "Use Regex Literals",
    "summary": "Enforce the use of the regular expression literals instead of the RegExp constructor if possible.",
    "url": "https://biomejs.dev/linter/rules/use-regex-literals"
  },
  {
    "group": "complexity",
    "name": "useSimpleNumberKeys",
    "title": "Use Simple Number Keys",
    "summary": "Disallow number literal object member names which are not base 10 or use underscore as separator.",
    "url": "https://biomejs.dev/linter/rules/use-simple-number-keys"
  },
  {
    "group": "complexity",
    "name": "useSimplifiedLogicExpression",
    "title": "Use Simplified Logic Expression",
    "summary": "Discard redundant terms from logical expressions.",
    "url": "https://biomejs.dev/linter/rules/use-simplified-logic-expression"
  },
  {
    "group": "complexity",
    "name": "useWhile",
    "title": "Use While",
    "summary": "Enforce the use of while loops instead of for loops when the initializer and update expressions are not needed.",
    "url": "https://biomejs.dev/linter/rules/use-while"
  },
  {
    "group": "correctness",
    "name": "noChildrenProp",
    "title": "No Children Prop",
    "summary": "Prevent passing of children as props.",
    "url": "https://biomejs.dev/linter/rules/no-children-prop"
  },
  {
    "group": "correctness",
    "name": "noConstAssign",
    "title": "No Const Assign",
    "summary": "Prevents from having const variables being re-assigned.",
    "url": "https://biomejs.dev/linter/rules/no-const-assign"
  },
  {
    "group": "correctness",
    "name": "noConstantCondition",
    "title": "No Constant Condition",
    "summary": "Disallow constant expressions in conditions.",
    "url": "https://biomejs.dev/linter/rules/no-constant-condition"
  },
  {
    "group": "correctness",
    "name": "noConstantMathMinMaxClamp",
    "title": "No Constant Math Min Max Clamp",
    "summary": "Disallow the use of Math.min and Math.max to clamp a value where the result itself is constant.",
    "url": "https://biomejs.dev/linter/rules/no-constant-math-min-max-clamp"
  },
  {
    "group": "correctness",
    "name": "noConstructorReturn",
    "title": "No Constructor Return",
    "summary": "Disallow returning a value from a constructor.",
    "url": "https://biomejs.dev/linter/rules/no-constructor-return"
  },
  {
    "group": "correctness",
    "name": "noEmptyCharacterClassInRegex",
    "title": "No Empty Character Class In Regex",
    "summary": "Disallow empty character classes in regular expression literals.",
    "url": "https://biomejs.dev/linter/rules/no-empty-character-class-in-regex"
  },
  {
    "group": "correctness",
    "name": "noEmptyPattern",
    "title": "No Empty Pattern",
    "summary": "Disallows empty destructuring patterns.",
    "url": "https://biomejs.dev/linter/rules/no-empty-pattern"
  },
  {
    "group": "correctness",
    "name": "noGlobalDirnameFilename",
    "title": "No Global Dirname Filename",
    "summary": "Disallow the use of __dirname and __filename in the global scope.",
    "url": "https://biomejs.dev/linter/rules/no-global-dirname-filename"
  },
  {
    "group": "correctness",
    "name": "noGlobalObjectCalls",
    "title": "No Global Object Calls",
    "summary": "Disallow calling global object properties as functions.",
    "url": "https://biomejs.dev/linter/rules/no-global-object-calls"
  },
  {
    "group": "correctness",
    "name": "noInnerDeclarations",
    "title": "No Inner Declarations",
    "summary": "Disallow function and var declarations that are accessible outside their block.",
    "url": "https://biomejs.dev/linter/rules/no-inner-declarations"
  },
  {
    "group": "correctness",
    "name": "noInvalidBuiltinInstantiation",
    "title": "No Invalid Builtin Instantiation",
    "summary": "Ensure that builtins are correctly instantiated.",
    "url": "https://biomejs.dev/linter/rules/no-invalid-builtin-instantiation"
  },
  {
    "group": "correctness",
    "name": "noInvalidConstructorSuper",
    "title": "No Invalid Constructor Super",
    "summary": "Prevents the incorrect use of super() inside classes. It also checks whether a call super() is missing from classes that extends other constructors.",
    "url": "https://biomejs.dev/linter/rules/no-invalid-constructor-super"
  },
  {
    "group": "correctness",
    "name": "noInvalidDirectionInLinearGradient",
    "title": "No Invalid Direction In Linear Gradient",
    "summary": "Disallow non-standard direction values for linear gradient functions.",
    "url": "https://biomejs.dev/linter/rules/no-invalid-direction-in-linear-gradient"
  },
  {
    "group": "correctness",
    "name": "noInvalidGridAreas",
    "title": "No Invalid Grid Areas",
    "summary": "Disallows invalid named grid areas in CSS Grid Layouts.",
    "url": "https://biomejs.dev/linter/rules/no-invalid-grid-areas"
  },
  {
    "group": "correctness",
    "name": "noInvalidPositionAtImportRule",
    "title": "No Invalid Position At Import Rule",
    "summary": "Disallow the use of @import at-rules in invalid positions.",
    "url": "https://biomejs.dev/linter/rules/no-invalid-position-at-import-rule"
  },
  {
    "group": "correctness",
    "name": "noInvalidUseBeforeDeclaration",
    "title": "No Invalid Use Before Declaration",
    "summary": "Disallow the use of variables, function parameters, classes, and enums before their declaration.",
    "url": "https://biomejs.dev/linter/rules/no-invalid-use-before-declaration"
  },
  {
    "group": "correctness",
    "name": "noMissingVarFunction",
    "title": "No Missing Var Function",
    "summary": "Disallow missing var function for css variables.",
    "url": "https://biomejs.dev/linter/rules/no-missing-var-function"
  },
  {
    "group": "correctness",
    "name": "noNestedComponentDefinitions",
    "title": "No Nested Component Definitions",
    "summary": "Disallows defining React components inside other components.",
    "url": "https://biomejs.dev/linter/rules/no-nested-component-definitions"
  },
  {
    "group": "correctness",
    "name": "noNextAsyncClientComponent",
    "title": "No Next Async Client Component",
    "summary": "Prevent client components from being async functions.",
    "url": "https://biomejs.dev/linter/rules/no-next-async-client-component"
  },
  {
    "group": "correctness",
    "name": "noNodejsModules",
    "title": "No Nodejs Modules",
    "summary": "Forbid the use of Node.js builtin modules.",
    "url": "https://biomejs.dev/linter/rules/no-nodejs-modules"
  },
  {
    "group": "correctness",
    "name": "noNonoctalDecimalEscape",
    "title": "No Nonoctal Decimal Escape",
    "summary": "Disallow \\8 and \\9 escape sequences in string literals.",
    "url": "https://biomejs.dev/linter/rules/no-nonoctal-decimal-escape"
  },
  {
    "group": "correctness",
    "name": "noPrecisionLoss",
    "title": "No Precision Loss",
    "summary": "Disallow literal numbers that lose precision.",
    "url": "https://biomejs.dev/linter/rules/no-precision-loss"
  },
  {
    "group": "correctness",
    "name": "noPrivateImports",
    "title": "No Private Imports",
    "summary": "Restrict imports of private exports.",
    "url": "https://biomejs.dev/linter/rules/no-private-imports"
  },
  {
    "group": "correctness",
    "name": "noProcessGlobal",
    "title": "No Process Global",
    "summary": "Disallow the use of process global.",
    "url": "https://biomejs.dev/linter/rules/no-process-global"
  },
  {
    "group": "correctness",
    "name": "noQwikUseVisibleTask",
    "title": "No Qwik Use Visible Task",
    "summary": "Disallow useVisibleTask$() functions in Qwik components.",
    "url": "https://biomejs.dev/linter/rules/no-qwik-use-visible-task"
  },
  {
    "group": "correctness",
    "name": "noReactPropAssignments",
    "title": "No React Prop Assignments",
    "summary": "Disallow assigning to React component props.",
    "url": "https://biomejs.dev/linter/rules/no-react-prop-assignments"
  },
  {
    "group": "correctness",
    "name": "noRenderReturnValue",
    "title": "No Render Return Value",
    "summary": "Prevent the usage of the return value of React.render.",
    "url": "https://biomejs.dev/linter/rules/no-render-return-value"
  },
  {
    "group": "correctness",
    "name": "noRestrictedElements",
    "title": "No Restricted Elements",
    "summary": "Disallow the use of configured elements.",
    "url": "https://biomejs.dev/linter/rules/no-restricted-elements"
  },
  {
    "group": "correctness",
    "name": "noSelfAssign",
    "title": "No Self Assign",
    "summary": "Disallow assignments where both sides are exactly the same.",
    "url": "https://biomejs.dev/linter/rules/no-self-assign"
  },
  {
    "group": "correctness",
    "name": "noSetterReturn",
    "title": "No Setter Return",
    "summary": "Disallow returning a value from a setter.",
    "url": "https://biomejs.dev/linter/rules/no-setter-return"
  },
  {
    "group": "correctness",
    "name": "noSolidDestructuredProps",
    "title": "No Solid Destructured Props",
    "summary": "Disallow destructuring props inside JSX components in Solid projects.",
    "url": "https://biomejs.dev/linter/rules/no-solid-destructured-props"
  },
  {
    "group": "correctness",
    "name": "noStringCaseMismatch",
    "title": "No String Case Mismatch",
    "summary": "Disallow comparison of expressions modifying the string case with non-compliant value.",
    "url": "https://biomejs.dev/linter/rules/no-string-case-mismatch"
  },
  {
    "group": "correctness",
    "name": "noSwitchDeclarations",
    "title": "No Switch Declarations",
    "summary": "Disallow lexical declarations in switch clauses.",
    "url": "https://biomejs.dev/linter/rules/no-switch-declarations"
  },
  {
    "group": "correctness",
    "name": "noUndeclaredDependencies",
    "title": "No Undeclared Dependencies",
    "summary": "Disallow the use of dependencies that aren't specified in the package.json.",
    "url": "https://biomejs.dev/linter/rules/no-undeclared-dependencies"
  },
  {
    "group": "correctness",
    "name": "noUndeclaredVariables",
    "title": "No Undeclared Variables",
    "summary": "Prevents the usage of variables that haven't been declared inside the document.",
    "url": "https://biomejs.dev/linter/rules/no-undeclared-variables"
  },
  {
    "group": "correctness",
    "name": "noUnknownFunction",
    "title": "No Unknown Function",
    "summary": "Disallow unknown CSS value functions.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-function"
  },
  {
    "group": "correctness",
    "name": "noUnknownMediaFeatureName",
    "title": "No Unknown Media Feature Name",
    "summary": "Disallow unknown media feature names.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-media-feature-name"
  },
  {
    "group": "correctness",
    "name": "noUnknownProperty",
    "title": "No Unknown Property",
    "summary": "Disallow unknown properties.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-property"
  },
  {
    "group": "correctness",
    "name": "noUnknownPseudoClass",
    "title": "No Unknown Pseudo Class",
    "summary": "Disallow unknown pseudo-class selectors.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-pseudo-class"
  },
  {
    "group": "correctness",
    "name": "noUnknownPseudoElement",
    "title": "No Unknown Pseudo Element",
    "summary": "Disallow unknown pseudo-element selectors.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-pseudo-element"
  },
  {
    "group": "correctness",
    "name": "noUnknownTypeSelector",
    "title": "No Unknown Type Selector",
    "summary": "Disallow unknown type selectors.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-type-selector"
  },
  {
    "group": "correctness",
    "name": "noUnknownUnit",
    "title": "No Unknown Unit",
    "summary": "Disallow unknown CSS units.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-unit"
  },
  {
    "group": "correctness",
    "name": "noUnmatchableAnbSelector",
    "title": "No Unmatchable Anb Selector",
    "summary": "Disallow unmatchable An+B selectors.",
    "url": "https://biomejs.dev/linter/rules/no-unmatchable-anb-selector"
  },
  {
    "group": "correctness",
    "name": "noUnreachable",
    "title": "No Unreachable",
    "summary": "Disallow unreachable code.",
    "url": "https://biomejs.dev/linter/rules/no-unreachable"
  },
  {
    "group": "correctness",
    "name": "noUnreachableSuper",
    "title": "No Unreachable Super",
    "summary": "Ensures the super() constructor is called exactly once on every code  path in a class constructor before this is accessed if the class has a superclass.",
    "url": "https://biomejs.dev/linter/rules/no-unreachable-super"
  },
  {
    "group": "correctness",
    "name": "noUnresolvedImports",
    "title": "No Unresolved Imports",
    "summary": "Warn when importing non-existing exports.",
    "url": "https://biomejs.dev/linter/rules/no-unresolved-imports"
  },
  {
    "group": "correctness",
    "name": "noUnsafeFinally",
    "title": "No Unsafe Finally",
    "summary": "Disallow control flow statements in finally blocks.",
    "url": "https://biomejs.dev/linter/rules/no-unsafe-finally"
  },
  {
    "group": "correctness",
    "name": "noUnsafeOptionalChaining",
    "title": "No Unsafe Optional Chaining",
    "summary": "Disallow the use of optional chaining in contexts where the undefined value is not allowed.",
    "url": "https://biomejs.dev/linter/rules/no-unsafe-optional-chaining"
  },
  {
    "group": "correctness",
    "name": "noUnusedFunctionParameters",
    "title": "No Unused Function Parameters",
    "summary": "Disallow unused function parameters.",
    "url": "https://biomejs.dev/linter/rules/no-unused-function-parameters"
  },
  {
    "group": "correctness",
    "name": "noUnusedImports",
    "title": "No Unused Imports",
    "summary": "Disallow unused imports.",
    "url": "https://biomejs.dev/linter/rules/no-unused-imports"
  },
  {
    "group": "correctness",
    "name": "noUnusedLabels",
    "title": "No Unused Labels",
    "summary": "Disallow unused labels.",
    "url": "https://biomejs.dev/linter/rules/no-unused-labels"
  },
  {
    "group": "correctness",
    "name": "noUnusedPrivateClassMembers",
    "title": "No Unused Private Class Members",
    "summary": "Disallow unused private class members.",
    "url": "https://biomejs.dev/linter/rules/no-unused-private-class-members"
  },
  {
    "group": "correctness",
    "name": "noUnusedVariables",
    "title": "No Unused Variables",
    "summary": "Disallow unused variables.",
    "url": "https://biomejs.dev/linter/rules/no-unused-variables"
  },
  {
    "group": "correctness",
    "name": "noVoidElementsWithChildren",
    "title": "No Void Elements With Children",
    "summary": "This rules prevents void elements (AKA self-closing elements) from having children.",
    "url": "https://biomejs.dev/linter/rules/no-void-elements-with-children"
  },
  {
    "group": "correctness",
    "name": "noVoidTypeReturn",
    "title": "No Void Type Return",
    "summary": "Disallow returning a value from a function with the return type 'void'.",
    "url": "https://biomejs.dev/linter/rules/no-void-type-return"
  },
  {
    "group": "correctness",
    "name": "noVueDataObjectDeclaration",
    "title": "No Vue Data Object Declaration",
    "summary": "Enforce that Vue component data options are declared as functions.",
    "url": "https://biomejs.dev/linter/rules/no-vue-data-object-declaration"
  },
  {
    "group": "correctness",
    "name": "noVueDuplicateKeys",
    "title": "No Vue Duplicate Keys",
    "summary": "Disallow duplicate keys in Vue component data, methods, computed properties, and other options.",
    "url": "https://biomejs.dev/linter/rules/no-vue-duplicate-keys"
  },
  {
    "group": "correctness",
    "name": "noVueReservedKeys",
    "title": "No Vue Reserved Keys",
    "summary": "Disallow reserved keys in Vue component data and computed properties.",
    "url": "https://biomejs.dev/linter/rules/no-vue-reserved-keys"
  },
  {
    "group": "correctness",
    "name": "noVueReservedProps",
    "title": "No Vue Reserved Props",
    "summary": "Disallow reserved names to be used as props.",
    "url": "https://biomejs.dev/linter/rules/no-vue-reserved-props"
  },
  {
    "group": "correctness",
    "name": "noVueSetupPropsReactivityLoss",
    "title": "No Vue Setup Props Reactivity Loss",
    "summary": "Disallow destructuring of props passed to setup in Vue projects.",
    "url": "https://biomejs.dev/linter/rules/no-vue-setup-props-reactivity-loss"
  },
  {
    "group": "correctness",
    "name": "useExhaustiveDependencies",
    "title": "Use Exhaustive Dependencies",
    "summary": "Enforce correct dependency usage within React hooks.",
    "url": "https://biomejs.dev/linter/rules/use-exhaustive-dependencies"
  },
  {
    "group": "correctness",
    "name": "useGraphqlNamedOperations",
    "title": "Use Graphql Named Operations",
    "summary": "Enforce specifying the name of GraphQL operations.",
    "url": "https://biomejs.dev/linter/rules/use-graphql-named-operations"
  },
  {
    "group": "correctness",
    "name": "useHookAtTopLevel",
    "title": "Use Hook At Top Level",
    "summary": "Enforce that all React hooks are being called from the Top Level component functions.",
    "url": "https://biomejs.dev/linter/rules/use-hook-at-top-level"
  },
  {
    "group": "correctness",
    "name": "useImageSize",
    "title": "Use Image Size",
    "summary": "Enforces that \\<img> elements have both width and height attributes.",
    "url": "https://biomejs.dev/linter/rules/use-image-size"
  },
  {
    "group": "correctness",
    "name": "useImportExtensions",
    "title": "Use Import Extensions",
    "summary": "Enforce file extensions for relative imports.",
    "url": "https://biomejs.dev/linter/rules/use-import-extensions"
  },
  {
    "group": "correctness",
    "name": "useIsNan",
    "title": "Use Is Nan",
    "summary": "Require calls to isNaN() when checking for NaN.",
    "url": "https://biomejs.dev/linter/rules/use-is-nan"
  },
  {
    "group": "correctness",
    "name": "useJsonImportAttributes",
    "title": "Use Json Import Attributes",
    "summary": "Enforces the use of with { type: \"json\" } for JSON module imports.",
    "url": "https://biomejs.dev/linter/rules/use-json-import-attributes"
  },
  {
    "group": "correctness",
    "name": "useJsxKeyInIterable",
    "title": "Use Jsx Key In Iterable",
    "summary": "Disallow missing key props in iterators/collection literals.",
    "url": "https://biomejs.dev/linter/rules/use-jsx-key-in-iterable"
  },
  {
    "group": "correctness",
    "name": "useParseIntRadix",
    "title": "Use Parse Int Radix",
    "summary": "Enforce the consistent use of the radix argument when using parseInt().",
    "url": "https://biomejs.dev/linter/rules/use-parse-int-radix"
  },
  {
    "group": "correctness",
    "name": "useQwikClasslist",
    "title": "Use Qwik Classlist",
    "summary": "Prefer using the class prop as a classlist over the classnames helper.",
    "url": "https://biomejs.dev/linter/rules/use-qwik-classlist"
  },
  {
    "group": "correctness",
    "name": "useQwikMethodUsage",
    "title": "Use Qwik Method Usage",
    "summary": "Disallow use* hooks outside of component$ or other use* hooks in Qwik applications.",
    "url": "https://biomejs.dev/linter/rules/use-qwik-method-usage"
  },
  {
    "group": "correctness",
    "name": "useQwikValidLexicalScope",
    "title": "Use Qwik Valid Lexical Scope",
    "summary": "Disallow unserializable expressions in Qwik dollar ($) scopes.",
    "url": "https://biomejs.dev/linter/rules/use-qwik-valid-lexical-scope"
  },
  {
    "group": "correctness",
    "name": "useSingleJsDocAsterisk",
    "title": "Use Single Js Doc Asterisk",
    "summary": "Enforce JSDoc comment lines to start with a single asterisk, except for the first one.",
    "url": "https://biomejs.dev/linter/rules/use-single-js-doc-asterisk"
  },
  {
    "group": "correctness",
    "name": "useUniqueElementIds",
    "title": "Use Unique Element Ids",
    "summary": "Prevent the usage of static string literal id attribute on elements.",
    "url": "https://biomejs.dev/linter/rules/use-unique-element-ids"
  },
  {
    "group": "correctness",
    "name": "useValidForDirection",
    "title": "Use Valid For Direction",
    "summary": "Enforce \"for\" loop update clause moving the counter in the right direction.",
    "url": "https://biomejs.dev/linter/rules/use-valid-for-direction"
  },
  {
    "group": "correctness",
    "name": "useValidTypeof",
    "title": "Use Valid Typeof",
    "summary": "This rule checks that the result of a typeof expression is compared to a valid value.",
    "url": "https://biomejs.dev/linter/rules/use-valid-typeof"
  },
  {
    "group": "correctness",
    "name": "useYield",
    "title": "Use Yield",
    "summary": "Require generator functions to contain yield.",
    "url": "https://biomejs.dev/linter/rules/use-yield"
  },
  {
    "group": "nursery",
    "name": "noAmbiguousAnchorText",
    "title": "No Ambiguous Anchor Text",
    "summary": "Disallow ambiguous anchor descriptions.",
    "url": "https://biomejs.dev/linter/rules/no-ambiguous-anchor-text"
  },
  {
    "group": "nursery",
    "name": "noBaseToString",
    "title": "No Base To String",
    "summary": "Require stringification to avoid values that only use the default object representation.",
    "url": "https://biomejs.dev/linter/rules/no-base-to-string"
  },
  {
    "group": "nursery",
    "name": "noBeforeInteractiveScriptOutsideDocument",
    "title": "No Before Interactive Script Outside Document",
    "summary": "Prevent usage of next/script's beforeInteractive strategy outside of pages/_document.js in a Next.js project.",
    "url": "https://biomejs.dev/linter/rules/no-before-interactive-script-outside-document"
  },
  {
    "group": "nursery",
    "name": "noComponentHookFactories",
    "title": "No Component Hook Factories",
    "summary": "Disallows defining React components or custom hooks inside other functions.",
    "url": "https://biomejs.dev/linter/rules/no-component-hook-factories"
  },
  {
    "group": "nursery",
    "name": "noConditionalExpect",
    "title": "No Conditional Expect",
    "summary": "Disallow conditional expect() calls inside tests.",
    "url": "https://biomejs.dev/linter/rules/no-conditional-expect"
  },
  {
    "group": "nursery",
    "name": "noContinue",
    "title": "No Continue",
    "summary": "Disallow continue statements.",
    "url": "https://biomejs.dev/linter/rules/no-continue"
  },
  {
    "group": "nursery",
    "name": "noDeprecatedMediaType",
    "title": "No Deprecated Media Type",
    "summary": "Disallow deprecated media types.",
    "url": "https://biomejs.dev/linter/rules/no-deprecated-media-type"
  },
  {
    "group": "nursery",
    "name": "noDivRegex",
    "title": "No Div Regex",
    "summary": "Disallow equal signs explicitly at the beginning of regular expressions.",
    "url": "https://biomejs.dev/linter/rules/no-div-regex"
  },
  {
    "group": "nursery",
    "name": "noDrizzleDeleteWithoutWhere",
    "title": "No Drizzle Delete Without Where",
    "summary": "Require .where() to be called when using .delete() with Drizzle ORM.",
    "url": "https://biomejs.dev/linter/rules/no-drizzle-delete-without-where"
  },
  {
    "group": "nursery",
    "name": "noDrizzleUpdateWithoutWhere",
    "title": "No Drizzle Update Without Where",
    "summary": "Require .where() to be called when using .update() with Drizzle ORM.",
    "url": "https://biomejs.dev/linter/rules/no-drizzle-update-without-where"
  },
  {
    "group": "nursery",
    "name": "noDuplicateArgumentNames",
    "title": "No Duplicate Argument Names",
    "summary": "Require all argument names for fields & directives to be unique.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-argument-names"
  },
  {
    "group": "nursery",
    "name": "noDuplicateAttributes",
    "title": "No Duplicate Attributes",
    "summary": "Disallow duplication of attributes.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-attributes"
  },
  {
    "group": "nursery",
    "name": "noDuplicateEnumValueNames",
    "title": "No Duplicate Enum Value Names",
    "summary": "Require all enum value names to be unique.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-enum-value-names"
  },
  {
    "group": "nursery",
    "name": "noDuplicateEnumValues",
    "title": "No Duplicate Enum Values",
    "summary": "Disallow duplicate enum member values.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-enum-values"
  },
  {
    "group": "nursery",
    "name": "noDuplicateFieldDefinitionNames",
    "title": "No Duplicate Field Definition Names",
    "summary": "Require all fields of a type to be unique.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-field-definition-names"
  },
  {
    "group": "nursery",
    "name": "noDuplicateGraphqlOperationName",
    "title": "No Duplicate Graphql Operation Name",
    "summary": "Enforce unique operation names across a GraphQL document.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-graphql-operation-name"
  },
  {
    "group": "nursery",
    "name": "noDuplicateInputFieldNames",
    "title": "No Duplicate Input Field Names",
    "summary": "Require fields within an input object to be unique.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-input-field-names"
  },
  {
    "group": "nursery",
    "name": "noDuplicateSelectors",
    "title": "No Duplicate Selectors",
    "summary": "Disallow duplicate selectors.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-selectors"
  },
  {
    "group": "nursery",
    "name": "noDuplicateVariableNames",
    "title": "No Duplicate Variable Names",
    "summary": "Require all variable definitions to be unique.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-variable-names"
  },
  {
    "group": "nursery",
    "name": "noDuplicatedSpreadProps",
    "title": "No Duplicated Spread Props",
    "summary": "Disallow JSX prop spreading the same identifier multiple times.",
    "url": "https://biomejs.dev/linter/rules/no-duplicated-spread-props"
  },
  {
    "group": "nursery",
    "name": "noEmptyObjectKeys",
    "title": "No Empty Object Keys",
    "summary": "Disallow empty keys in JSON objects.",
    "url": "https://biomejs.dev/linter/rules/no-empty-object-keys"
  },
  {
    "group": "nursery",
    "name": "noEqualsToNull",
    "title": "No Equals To Null",
    "summary": "Require the use of === or !== for comparison with null.",
    "url": "https://biomejs.dev/linter/rules/no-equals-to-null"
  },
  {
    "group": "nursery",
    "name": "noExcessiveClassesPerFile",
    "title": "No Excessive Classes Per File",
    "summary": "Enforce a maximum number of classes per file.",
    "url": "https://biomejs.dev/linter/rules/no-excessive-classes-per-file"
  },
  {
    "group": "nursery",
    "name": "noExcessiveLinesPerFile",
    "title": "No Excessive Lines Per File",
    "summary": "Restrict the number of lines in a file.",
    "url": "https://biomejs.dev/linter/rules/no-excessive-lines-per-file"
  },
  {
    "group": "nursery",
    "name": "noExcessiveNestedCallbacks",
    "title": "No Excessive Nested Callbacks",
    "summary": "Enforce a maximum depth that callbacks can be nested.",
    "url": "https://biomejs.dev/linter/rules/no-excessive-nested-callbacks"
  },
  {
    "group": "nursery",
    "name": "noExcessiveSelectorClasses",
    "title": "No Excessive Selector Classes",
    "summary": "Limit the number of classes in a selector.",
    "url": "https://biomejs.dev/linter/rules/no-excessive-selector-classes"
  },
  {
    "group": "nursery",
    "name": "noFloatingClasses",
    "title": "No Floating Classes",
    "summary": "Disallow new operators outside of assignments or comparisons.",
    "url": "https://biomejs.dev/linter/rules/no-floating-classes"
  },
  {
    "group": "nursery",
    "name": "noFloatingPromises",
    "title": "No Floating Promises",
    "summary": "Require Promise-like statements to be handled appropriately.",
    "url": "https://biomejs.dev/linter/rules/no-floating-promises"
  },
  {
    "group": "nursery",
    "name": "noForIn",
    "title": "No For In",
    "summary": "Disallow iterating using a for-in loop.",
    "url": "https://biomejs.dev/linter/rules/no-for-in"
  },
  {
    "group": "nursery",
    "name": "noHexColors",
    "title": "No Hex Colors",
    "summary": "Disallow hex colors.",
    "url": "https://biomejs.dev/linter/rules/no-hex-colors"
  },
  {
    "group": "nursery",
    "name": "noIdenticalTestTitle",
    "title": "No Identical Test Title",
    "summary": "Disallow identical titles in test suites and test cases.",
    "url": "https://biomejs.dev/linter/rules/no-identical-test-title"
  },
  {
    "group": "nursery",
    "name": "noImpliedEval",
    "title": "No Implied Eval",
    "summary": "Disallow the use of eval()-like methods.",
    "url": "https://biomejs.dev/linter/rules/no-implied-eval"
  },
  {
    "group": "nursery",
    "name": "noIncrementDecrement",
    "title": "No Increment Decrement",
    "summary": "Disallows the usage of the unary operators ++ and --.",
    "url": "https://biomejs.dev/linter/rules/no-increment-decrement"
  },
  {
    "group": "nursery",
    "name": "noInlineStyles",
    "title": "No Inline Styles",
    "summary": "Disallow the use of inline styles.",
    "url": "https://biomejs.dev/linter/rules/no-inline-styles"
  },
  {
    "group": "nursery",
    "name": "noJsxLeakedDollar",
    "title": "No Jsx Leaked Dollar",
    "summary": "Flags text nodes with a trailing $ before a JSX expression.",
    "url": "https://biomejs.dev/linter/rules/no-jsx-leaked-dollar"
  },
  {
    "group": "nursery",
    "name": "noJsxNamespace",
    "title": "No Jsx Namespace",
    "summary": "Disallow JSX namespace syntax.",
    "url": "https://biomejs.dev/linter/rules/no-jsx-namespace"
  },
  {
    "group": "nursery",
    "name": "noJsxPropsBind",
    "title": "No Jsx Props Bind",
    "summary": "Disallow .bind(), arrow functions, or function expressions in JSX props.",
    "url": "https://biomejs.dev/linter/rules/no-jsx-props-bind"
  },
  {
    "group": "nursery",
    "name": "noLeakedRender",
    "title": "No Leaked Render",
    "summary": "Prevent problematic leaked values from being rendered.",
    "url": "https://biomejs.dev/linter/rules/no-leaked-render"
  },
  {
    "group": "nursery",
    "name": "noLoopFunc",
    "title": "No Loop Func",
    "summary": "Disallow functions declared inside loops that capture unsafe outer variables.",
    "url": "https://biomejs.dev/linter/rules/no-loop-func"
  },
  {
    "group": "nursery",
    "name": "noMisleadingReturnType",
    "title": "No Misleading Return Type",
    "summary": "Detect return type annotations that are misleadingly wider than what the implementation actually returns.",
    "url": "https://biomejs.dev/linter/rules/no-misleading-return-type"
  },
  {
    "group": "nursery",
    "name": "noMisusedPromises",
    "title": "No Misused Promises",
    "summary": "Disallow Promises to be used in places where they are almost certainly a mistake.",
    "url": "https://biomejs.dev/linter/rules/no-misused-promises"
  },
  {
    "group": "nursery",
    "name": "noMultiAssign",
    "title": "No Multi Assign",
    "summary": "Disallow use of chained assignment expressions.",
    "url": "https://biomejs.dev/linter/rules/no-multi-assign"
  },
  {
    "group": "nursery",
    "name": "noMultiStr",
    "title": "No Multi Str",
    "summary": "Disallow creating multiline strings by escaping newlines.",
    "url": "https://biomejs.dev/linter/rules/no-multi-str"
  },
  {
    "group": "nursery",
    "name": "noNestedPromises",
    "title": "No Nested Promises",
    "summary": "Disallow nested .then() or .catch() promise calls.",
    "url": "https://biomejs.dev/linter/rules/no-nested-promises"
  },
  {
    "group": "nursery",
    "name": "noParametersOnlyUsedInRecursion",
    "title": "No Parameters Only Used In Recursion",
    "summary": "Disallow function parameters that are only used in recursive calls.",
    "url": "https://biomejs.dev/linter/rules/no-parameters-only-used-in-recursion"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightElementHandle",
    "title": "No Playwright Element Handle",
    "summary": "Disallow usage of element handles (page.$() and page.$$()).",
    "url": "https://biomejs.dev/linter/rules/no-playwright-element-handle"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightEval",
    "title": "No Playwright Eval",
    "summary": "Disallow usage of page.$eval() and page.$$eval().",
    "url": "https://biomejs.dev/linter/rules/no-playwright-eval"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightForceOption",
    "title": "No Playwright Force Option",
    "summary": "Disallow usage of the { force: true } option.",
    "url": "https://biomejs.dev/linter/rules/no-playwright-force-option"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightMissingAwait",
    "title": "No Playwright Missing Await",
    "summary": "Enforce Playwright async APIs to be awaited or returned.",
    "url": "https://biomejs.dev/linter/rules/no-playwright-missing-await"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightNetworkidle",
    "title": "No Playwright Networkidle",
    "summary": "Disallow usage of the networkidle option.",
    "url": "https://biomejs.dev/linter/rules/no-playwright-networkidle"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightPagePause",
    "title": "No Playwright Page Pause",
    "summary": "Disallow using page.pause().",
    "url": "https://biomejs.dev/linter/rules/no-playwright-page-pause"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightUselessAwait",
    "title": "No Playwright Useless Await",
    "summary": "Disallow unnecessary await for Playwright methods that don't return promises.",
    "url": "https://biomejs.dev/linter/rules/no-playwright-useless-await"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightWaitForNavigation",
    "title": "No Playwright Wait For Navigation",
    "summary": "Disallow using page.waitForNavigation().",
    "url": "https://biomejs.dev/linter/rules/no-playwright-wait-for-navigation"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightWaitForSelector",
    "title": "No Playwright Wait For Selector",
    "summary": "Disallow using page.waitForSelector().",
    "url": "https://biomejs.dev/linter/rules/no-playwright-wait-for-selector"
  },
  {
    "group": "nursery",
    "name": "noPlaywrightWaitForTimeout",
    "title": "No Playwright Wait For Timeout",
    "summary": "Disallow using page.waitForTimeout().",
    "url": "https://biomejs.dev/linter/rules/no-playwright-wait-for-timeout"
  },
  {
    "group": "nursery",
    "name": "noProto",
    "title": "No Proto",
    "summary": "Disallow the use of the deprecated __proto__ object property.",
    "url": "https://biomejs.dev/linter/rules/no-proto"
  },
  {
    "group": "nursery",
    "name": "noReactNativeDeepImports",
    "title": "No React Native Deep Imports",
    "summary": "Disallow deep imports from the react-native package.",
    "url": "https://biomejs.dev/linter/rules/no-react-native-deep-imports"
  },
  {
    "group": "nursery",
    "name": "noReactNativeLiteralColors",
    "title": "No React Native Literal Colors",
    "summary": "Disallow color literals in React Native styles.",
    "url": "https://biomejs.dev/linter/rules/no-react-native-literal-colors"
  },
  {
    "group": "nursery",
    "name": "noReactNativeRawText",
    "title": "No React Native Raw Text",
    "summary": "Disallow raw text outside \\<Text> components in React Native.",
    "url": "https://biomejs.dev/linter/rules/no-react-native-raw-text"
  },
  {
    "group": "nursery",
    "name": "noReactStringRefs",
    "title": "No React String Refs",
    "summary": "Disallow string refs in React components.",
    "url": "https://biomejs.dev/linter/rules/no-react-string-refs"
  },
  {
    "group": "nursery",
    "name": "noRedundantDefaultExport",
    "title": "No Redundant Default Export",
    "summary": "Checks if a default export exports the same symbol as a named export.",
    "url": "https://biomejs.dev/linter/rules/no-redundant-default-export"
  },
  {
    "group": "nursery",
    "name": "noReturnAssign",
    "title": "No Return Assign",
    "summary": "Disallow assignments in return statements.",
    "url": "https://biomejs.dev/linter/rules/no-return-assign"
  },
  {
    "group": "nursery",
    "name": "noRootType",
    "title": "No Root Type",
    "summary": "Disallow the usage of specified root types.",
    "url": "https://biomejs.dev/linter/rules/no-root-type"
  },
  {
    "group": "nursery",
    "name": "noScriptUrl",
    "title": "No Script Url",
    "summary": "Disallow javascript: URLs in HTML.",
    "url": "https://biomejs.dev/linter/rules/no-script-url"
  },
  {
    "group": "nursery",
    "name": "noShadow",
    "title": "No Shadow",
    "summary": "Disallow variable declarations from shadowing variables declared in the outer scope.",
    "url": "https://biomejs.dev/linter/rules/no-shadow"
  },
  {
    "group": "nursery",
    "name": "noSyncScripts",
    "title": "No Sync Scripts",
    "summary": "Prevent the usage of synchronous scripts.",
    "url": "https://biomejs.dev/linter/rules/no-sync-scripts"
  },
  {
    "group": "nursery",
    "name": "noTernary",
    "title": "No Ternary",
    "summary": "Disallow ternary operators.",
    "url": "https://biomejs.dev/linter/rules/no-ternary"
  },
  {
    "group": "nursery",
    "name": "noTopLevelLiterals",
    "title": "No Top Level Literals",
    "summary": "Require the JSON top-level value to be an array or object.",
    "url": "https://biomejs.dev/linter/rules/no-top-level-literals"
  },
  {
    "group": "nursery",
    "name": "noUndeclaredEnvVars",
    "title": "No Undeclared Env Vars",
    "summary": "Disallow the use of undeclared environment variables.",
    "url": "https://biomejs.dev/linter/rules/no-undeclared-env-vars"
  },
  {
    "group": "nursery",
    "name": "noUnknownAttribute",
    "title": "No Unknown Attribute",
    "summary": "Disallow unknown DOM properties.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-attribute"
  },
  {
    "group": "nursery",
    "name": "noUnnecessaryConditions",
    "title": "No Unnecessary Conditions",
    "summary": "Disallow unnecessary type-based conditions that can be statically determined as redundant.",
    "url": "https://biomejs.dev/linter/rules/no-unnecessary-conditions"
  },
  {
    "group": "nursery",
    "name": "noUnnecessaryTemplateExpression",
    "title": "No Unnecessary Template Expression",
    "summary": "Disallow unnecessary template expressions.",
    "url": "https://biomejs.dev/linter/rules/no-unnecessary-template-expression"
  },
  {
    "group": "nursery",
    "name": "noUnsafePlusOperands",
    "title": "No Unsafe Plus Operands",
    "summary": "Disallow + operations with operands that are known to be unsafe.",
    "url": "https://biomejs.dev/linter/rules/no-unsafe-plus-operands"
  },
  {
    "group": "nursery",
    "name": "noUntrustedLicenses",
    "title": "No Untrusted Licenses",
    "summary": "Disallow dependencies with untrusted licenses.",
    "url": "https://biomejs.dev/linter/rules/no-untrusted-licenses"
  },
  {
    "group": "nursery",
    "name": "noUselessReturn",
    "title": "No Useless Return",
    "summary": "Disallow redundant return statements.",
    "url": "https://biomejs.dev/linter/rules/no-useless-return"
  },
  {
    "group": "nursery",
    "name": "noUselessTypeConversion",
    "title": "No Useless Type Conversion",
    "summary": "Disallow type conversions that do not change the type of an expression.",
    "url": "https://biomejs.dev/linter/rules/no-useless-type-conversion"
  },
  {
    "group": "nursery",
    "name": "noVueArrowFuncInWatch",
    "title": "No Vue Arrow Func In Watch",
    "summary": "Disallows using arrow functions when defining a watcher.",
    "url": "https://biomejs.dev/linter/rules/no-vue-arrow-func-in-watch"
  },
  {
    "group": "nursery",
    "name": "noVueImportCompilerMacros",
    "title": "No Vue Import Compiler Macros",
    "summary": "Disallow importing Vue compiler macros.",
    "url": "https://biomejs.dev/linter/rules/no-vue-import-compiler-macros"
  },
  {
    "group": "nursery",
    "name": "noVueOptionsApi",
    "title": "No Vue Options Api",
    "summary": "Disallow the use of Vue Options API.",
    "url": "https://biomejs.dev/linter/rules/no-vue-options-api"
  },
  {
    "group": "nursery",
    "name": "noVueRefAsOperand",
    "title": "No Vue Ref As Operand",
    "summary": "Disallow the use of value wrapped by ref()(Composition API) as operand.",
    "url": "https://biomejs.dev/linter/rules/no-vue-ref-as-operand"
  },
  {
    "group": "nursery",
    "name": "noVueVIfWithVFor",
    "title": "No Vue V If With V For",
    "summary": "Disallow using v-if and v-for directives on the same element.",
    "url": "https://biomejs.dev/linter/rules/no-vue-v-if-with-v-for"
  },
  {
    "group": "nursery",
    "name": "noVueVOnNumberValues",
    "title": "No Vue V On Number Values",
    "summary": "Disallow deprecated number modifiers on Vue v-on directives.",
    "url": "https://biomejs.dev/linter/rules/no-vue-v-on-number-values"
  },
  {
    "group": "nursery",
    "name": "useArraySome",
    "title": "Use Array Some",
    "summary": "Prefer Array.prototype.some() over verbose existence checks.",
    "url": "https://biomejs.dev/linter/rules/use-array-some"
  },
  {
    "group": "nursery",
    "name": "useArraySortCompare",
    "title": "Use Array Sort Compare",
    "summary": "Require Array#sort and Array#toSorted calls to always provide a compareFunction.",
    "url": "https://biomejs.dev/linter/rules/use-array-sort-compare"
  },
  {
    "group": "nursery",
    "name": "useAwaitThenable",
    "title": "Use Await Thenable",
    "summary": "Enforce that await is only used on Promise values.",
    "url": "https://biomejs.dev/linter/rules/use-await-thenable"
  },
  {
    "group": "nursery",
    "name": "useBaseline",
    "title": "Use Baseline",
    "summary": "Disallow CSS properties, values, at-rules, functions, and selectors that are not part of the configured Baseline.",
    "url": "https://biomejs.dev/linter/rules/use-baseline"
  },
  {
    "group": "nursery",
    "name": "useConsistentEnumValueType",
    "title": "Use Consistent Enum Value Type",
    "summary": "Disallow enums from having both number and string members.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-enum-value-type"
  },
  {
    "group": "nursery",
    "name": "useConsistentGraphqlDescriptions",
    "title": "Use Consistent Graphql Descriptions",
    "summary": "Require all descriptions to follow the same style (either block or inline) to  maintain consistency and improve readability across the schema.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-graphql-descriptions"
  },
  {
    "group": "nursery",
    "name": "useConsistentMethodSignatures",
    "title": "Use Consistent Method Signatures",
    "summary": "Enforce consistent use of either method signatures or function properties within interfaces and type aliases.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-method-signatures"
  },
  {
    "group": "nursery",
    "name": "useConsistentTestIt",
    "title": "Use Consistent Test It",
    "summary": "Enforce consistent use of it or test for test functions.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-test-it"
  },
  {
    "group": "nursery",
    "name": "useDestructuring",
    "title": "Use Destructuring",
    "summary": "Require destructuring from arrays and/or objects.",
    "url": "https://biomejs.dev/linter/rules/use-destructuring"
  },
  {
    "group": "nursery",
    "name": "useDisposables",
    "title": "Use Disposables",
    "summary": "Detects a disposable object assigned to a variable without using or await using syntax.",
    "url": "https://biomejs.dev/linter/rules/use-disposables"
  },
  {
    "group": "nursery",
    "name": "useDomNodeTextContent",
    "title": "Use Dom Node Text Content",
    "summary": "Prefer .textContent over .innerText for DOM node text.",
    "url": "https://biomejs.dev/linter/rules/use-dom-node-text-content"
  },
  {
    "group": "nursery",
    "name": "useDomQuerySelector",
    "title": "Use Dom Query Selector",
    "summary": "Prefer querySelector() and querySelectorAll() over older DOM query APIs.",
    "url": "https://biomejs.dev/linter/rules/use-dom-query-selector"
  },
  {
    "group": "nursery",
    "name": "useErrorCause",
    "title": "Use Error Cause",
    "summary": "Enforce that new Error() is thrown with the original error as cause.",
    "url": "https://biomejs.dev/linter/rules/use-error-cause"
  },
  {
    "group": "nursery",
    "name": "useExhaustiveSwitchCases",
    "title": "Use Exhaustive Switch Cases",
    "summary": "Require switch-case statements to be exhaustive.",
    "url": "https://biomejs.dev/linter/rules/use-exhaustive-switch-cases"
  },
  {
    "group": "nursery",
    "name": "useExpect",
    "title": "Use Expect",
    "summary": "Ensure that test functions contain at least one expect() or similar assertion.",
    "url": "https://biomejs.dev/linter/rules/use-expect"
  },
  {
    "group": "nursery",
    "name": "useExplicitReturnType",
    "title": "Use Explicit Return Type",
    "summary": "Require explicit return types on functions and class methods.",
    "url": "https://biomejs.dev/linter/rules/use-explicit-return-type"
  },
  {
    "group": "nursery",
    "name": "useExplicitType",
    "title": "Use Explicit Type",
    "summary": "Enforce types in functions, methods, variables, and parameters.",
    "url": "https://biomejs.dev/linter/rules/use-explicit-type"
  },
  {
    "group": "nursery",
    "name": "useFind",
    "title": "Use Find",
    "summary": "Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.",
    "url": "https://biomejs.dev/linter/rules/use-find"
  },
  {
    "group": "nursery",
    "name": "useGlobalThis",
    "title": "Use Global This",
    "summary": "Enforce the use of globalThis over window, self, and global.",
    "url": "https://biomejs.dev/linter/rules/use-global-this"
  },
  {
    "group": "nursery",
    "name": "useIframeSandbox",
    "title": "Use Iframe Sandbox",
    "summary": "Enforce the 'sandbox' attribute for 'iframe' elements.",
    "url": "https://biomejs.dev/linter/rules/use-iframe-sandbox"
  },
  {
    "group": "nursery",
    "name": "useImportsFirst",
    "title": "Use Imports First",
    "summary": "Enforce that all imports appear at the top of the module.",
    "url": "https://biomejs.dev/linter/rules/use-imports-first"
  },
  {
    "group": "nursery",
    "name": "useInlineScriptId",
    "title": "Use Inline Script Id",
    "summary": "Enforce id attribute on next/script components with inline content or dangerouslySetInnerHTML.",
    "url": "https://biomejs.dev/linter/rules/use-inline-script-id"
  },
  {
    "group": "nursery",
    "name": "useInputName",
    "title": "Use Input Name",
    "summary": "Require mutation argument to be always called \"input\".",
    "url": "https://biomejs.dev/linter/rules/use-input-name"
  },
  {
    "group": "nursery",
    "name": "useLoneAnonymousOperation",
    "title": "Use Lone Anonymous Operation",
    "summary": "Disallow anonymous operations when more than one operation specified in document.",
    "url": "https://biomejs.dev/linter/rules/use-lone-anonymous-operation"
  },
  {
    "group": "nursery",
    "name": "useLoneExecutableDefinition",
    "title": "Use Lone Executable Definition",
    "summary": "Require queries, mutations, subscriptions or fragments each to be located in separate files.",
    "url": "https://biomejs.dev/linter/rules/use-lone-executable-definition"
  },
  {
    "group": "nursery",
    "name": "useMathMinMax",
    "title": "Use Math Min Max",
    "summary": "Prefer Math.min() and Math.max() over ternaries for simple comparisons.",
    "url": "https://biomejs.dev/linter/rules/use-math-min-max"
  },
  {
    "group": "nursery",
    "name": "useNamedCaptureGroup",
    "title": "Use Named Capture Group",
    "summary": "Enforce using named capture groups in regular expression.",
    "url": "https://biomejs.dev/linter/rules/use-named-capture-group"
  },
  {
    "group": "nursery",
    "name": "useNullishCoalescing",
    "title": "Use Nullish Coalescing",
    "summary": "Enforce using the nullish coalescing operator (??) instead of logical or (||).",
    "url": "https://biomejs.dev/linter/rules/use-nullish-coalescing"
  },
  {
    "group": "nursery",
    "name": "usePlaywrightValidDescribeCallback",
    "title": "Use Playwright Valid Describe Callback",
    "summary": "Enforce valid describe() callback.",
    "url": "https://biomejs.dev/linter/rules/use-playwright-valid-describe-callback"
  },
  {
    "group": "nursery",
    "name": "useQwikLoaderLocation",
    "title": "Use Qwik Loader Location",
    "summary": "Enforce that Qwik loader functions are declared in the correct location.",
    "url": "https://biomejs.dev/linter/rules/use-qwik-loader-location"
  },
  {
    "group": "nursery",
    "name": "useReactAsyncServerFunction",
    "title": "Use React Async Server Function",
    "summary": "Require functions with the \"use server\" directive to be async.",
    "url": "https://biomejs.dev/linter/rules/use-react-async-server-function"
  },
  {
    "group": "nursery",
    "name": "useReactNativePlatformComponents",
    "title": "Use React Native Platform Components",
    "summary": "Ensure that platform-specific React Native components are only imported in files named for that platform.",
    "url": "https://biomejs.dev/linter/rules/use-react-native-platform-components"
  },
  {
    "group": "nursery",
    "name": "useReduceTypeParameter",
    "title": "Use Reduce Type Parameter",
    "summary": "Enforce using a type parameter on Array#reduce instead of casting the initial value.",
    "url": "https://biomejs.dev/linter/rules/use-reduce-type-parameter"
  },
  {
    "group": "nursery",
    "name": "useRegexpExec",
    "title": "Use Regexp Exec",
    "summary": "Enforce RegExp#exec over String#match if no global flag is provided.",
    "url": "https://biomejs.dev/linter/rules/use-regexp-exec"
  },
  {
    "group": "nursery",
    "name": "useRegexpTest",
    "title": "Use Regexp Test",
    "summary": "Enforce the use of RegExp.prototype.test() over String.prototype.match() and RegExp.prototype.exec() in boolean contexts.",
    "url": "https://biomejs.dev/linter/rules/use-regexp-test"
  },
  {
    "group": "nursery",
    "name": "useRequiredScripts",
    "title": "Use Required Scripts",
    "summary": "Enforce the presence of required scripts in package.json.",
    "url": "https://biomejs.dev/linter/rules/use-required-scripts"
  },
  {
    "group": "nursery",
    "name": "useScopedStyles",
    "title": "Use Scoped Styles",
    "summary": "Enforce that \\<style> blocks in Vue SFCs have the scoped attribute and that \\<style> blocks in Astro components do not have the is:global directive.",
    "url": "https://biomejs.dev/linter/rules/use-scoped-styles"
  },
  {
    "group": "nursery",
    "name": "useSortedClasses",
    "title": "Use Sorted Classes",
    "summary": "Enforce the sorting of CSS utility classes.",
    "url": "https://biomejs.dev/linter/rules/use-sorted-classes"
  },
  {
    "group": "nursery",
    "name": "useSpread",
    "title": "Use Spread",
    "summary": "Enforce the use of the spread operator over .apply().",
    "url": "https://biomejs.dev/linter/rules/use-spread"
  },
  {
    "group": "nursery",
    "name": "useStringStartsEndsWith",
    "title": "Use String Starts Ends With",
    "summary": "Prefer String#startsWith() and String#endsWith() over verbose prefix and suffix checks.",
    "url": "https://biomejs.dev/linter/rules/use-string-starts-ends-with"
  },
  {
    "group": "nursery",
    "name": "useTestHooksInOrder",
    "title": "Use Test Hooks In Order",
    "summary": "Enforce that test lifecycle hooks are declared in the order they execute.",
    "url": "https://biomejs.dev/linter/rules/use-test-hooks-in-order"
  },
  {
    "group": "nursery",
    "name": "useTestHooksOnTop",
    "title": "Use Test Hooks On Top",
    "summary": "Enforce that lifecycle hooks appear before any test cases in the same block.",
    "url": "https://biomejs.dev/linter/rules/use-test-hooks-on-top"
  },
  {
    "group": "nursery",
    "name": "useThisInClassMethods",
    "title": "Use This In Class Methods",
    "summary": "Enforce that class methods utilize this.",
    "url": "https://biomejs.dev/linter/rules/use-this-in-class-methods"
  },
  {
    "group": "nursery",
    "name": "useUnicodeRegex",
    "title": "Use Unicode Regex",
    "summary": "Enforce the use of the u or v flag for regular expressions.",
    "url": "https://biomejs.dev/linter/rules/use-unicode-regex"
  },
  {
    "group": "nursery",
    "name": "useVarsOnTop",
    "title": "Use Vars On Top",
    "summary": "Require var declarations to appear at the top of their containing scope.",
    "url": "https://biomejs.dev/linter/rules/use-vars-on-top"
  },
  {
    "group": "nursery",
    "name": "useVueConsistentDefinePropsDeclaration",
    "title": "Use Vue Consistent Define Props Declaration",
    "summary": "Enforce consistent defineProps declaration style.",
    "url": "https://biomejs.dev/linter/rules/use-vue-consistent-define-props-declaration"
  },
  {
    "group": "nursery",
    "name": "useVueConsistentVBindStyle",
    "title": "Use Vue Consistent V Bind Style",
    "summary": "Enforce a consistent style for v-bind in Vue templates.",
    "url": "https://biomejs.dev/linter/rules/use-vue-consistent-v-bind-style"
  },
  {
    "group": "nursery",
    "name": "useVueConsistentVOnStyle",
    "title": "Use Vue Consistent V On Style",
    "summary": "Enforce a consistent style for v-on in Vue templates.",
    "url": "https://biomejs.dev/linter/rules/use-vue-consistent-v-on-style"
  },
  {
    "group": "nursery",
    "name": "useVueDefineMacrosOrder",
    "title": "Use Vue Define Macros Order",
    "summary": "Enforce specific order of Vue compiler macros.",
    "url": "https://biomejs.dev/linter/rules/use-vue-define-macros-order"
  },
  {
    "group": "nursery",
    "name": "useVueHyphenatedAttributes",
    "title": "Use Vue Hyphenated Attributes",
    "summary": "Enforce hyphenated (kebab-case) attribute names in Vue templates.",
    "url": "https://biomejs.dev/linter/rules/use-vue-hyphenated-attributes"
  },
  {
    "group": "nursery",
    "name": "useVueMultiWordComponentNames",
    "title": "Use Vue Multi Word Component Names",
    "summary": "Enforce multi-word component names in Vue components.",
    "url": "https://biomejs.dev/linter/rules/use-vue-multi-word-component-names"
  },
  {
    "group": "nursery",
    "name": "useVueNextTickPromise",
    "title": "Use Vue Next Tick Promise",
    "summary": "Enforces Promise syntax when using Vue nextTick.",
    "url": "https://biomejs.dev/linter/rules/use-vue-next-tick-promise"
  },
  {
    "group": "nursery",
    "name": "useVueVForKey",
    "title": "Use Vue V For Key",
    "summary": "Enforce that elements using v-for also specify a unique key.",
    "url": "https://biomejs.dev/linter/rules/use-vue-v-for-key"
  },
  {
    "group": "nursery",
    "name": "useVueValidTemplateRoot",
    "title": "Use Vue Valid Template Root",
    "summary": "Enforce valid Vue \\<template> root usage.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-template-root"
  },
  {
    "group": "nursery",
    "name": "useVueValidVBind",
    "title": "Use Vue Valid V Bind",
    "summary": "Forbids v-bind directives with missing values or invalid modifiers.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-bind"
  },
  {
    "group": "nursery",
    "name": "useVueValidVCloak",
    "title": "Use Vue Valid V Cloak",
    "summary": "Enforce valid v-cloak Vue directives.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-cloak"
  },
  {
    "group": "nursery",
    "name": "useVueValidVElse",
    "title": "Use Vue Valid V Else",
    "summary": "Enforce valid usage of v-else.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-else"
  },
  {
    "group": "nursery",
    "name": "useVueValidVElseIf",
    "title": "Use Vue Valid V Else If",
    "summary": "Enforce valid v-else-if directives.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-else-if"
  },
  {
    "group": "nursery",
    "name": "useVueValidVFor",
    "title": "Use Vue Valid V For",
    "summary": "Enforces valid v-for directives in Vue templates.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-for"
  },
  {
    "group": "nursery",
    "name": "useVueValidVHtml",
    "title": "Use Vue Valid V Html",
    "summary": "Enforce valid v-html directives.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-html"
  },
  {
    "group": "nursery",
    "name": "useVueValidVIf",
    "title": "Use Vue Valid V If",
    "summary": "Enforces valid v-if usage for Vue templates.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-if"
  },
  {
    "group": "nursery",
    "name": "useVueValidVOn",
    "title": "Use Vue Valid V On",
    "summary": "Enforce valid v-on directives with proper arguments, modifiers, and handlers.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-on"
  },
  {
    "group": "nursery",
    "name": "useVueValidVOnce",
    "title": "Use Vue Valid V Once",
    "summary": "Enforce valid v-once Vue directives.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-once"
  },
  {
    "group": "nursery",
    "name": "useVueValidVPre",
    "title": "Use Vue Valid V Pre",
    "summary": "Enforce valid v-pre Vue directives.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-pre"
  },
  {
    "group": "nursery",
    "name": "useVueValidVText",
    "title": "Use Vue Valid V Text",
    "summary": "Enforce valid v-text Vue directives.",
    "url": "https://biomejs.dev/linter/rules/use-vue-valid-v-text"
  },
  {
    "group": "nursery",
    "name": "useVueVapor",
    "title": "Use Vue Vapor",
    "summary": "Enforce opting in to Vue Vapor mode in \\<script setup> blocks.",
    "url": "https://biomejs.dev/linter/rules/use-vue-vapor"
  },
  {
    "group": "performance",
    "name": "noAccumulatingSpread",
    "title": "No Accumulating Spread",
    "summary": "Disallow the use of spread (...) syntax on accumulators.",
    "url": "https://biomejs.dev/linter/rules/no-accumulating-spread"
  },
  {
    "group": "performance",
    "name": "noAwaitInLoops",
    "title": "No Await In Loops",
    "summary": "Disallow await inside loops.",
    "url": "https://biomejs.dev/linter/rules/no-await-in-loops"
  },
  {
    "group": "performance",
    "name": "noBarrelFile",
    "title": "No Barrel File",
    "summary": "Disallow the use of barrel file.",
    "url": "https://biomejs.dev/linter/rules/no-barrel-file"
  },
  {
    "group": "performance",
    "name": "noDelete",
    "title": "No Delete",
    "summary": "Disallow the use of the delete operator.",
    "url": "https://biomejs.dev/linter/rules/no-delete"
  },
  {
    "group": "performance",
    "name": "noDynamicNamespaceImportAccess",
    "title": "No Dynamic Namespace Import Access",
    "summary": "Disallow accessing namespace imports dynamically.",
    "url": "https://biomejs.dev/linter/rules/no-dynamic-namespace-import-access"
  },
  {
    "group": "performance",
    "name": "noImgElement",
    "title": "No Img Element",
    "summary": "Prevent usage of \\<img> element in a Next.js project.",
    "url": "https://biomejs.dev/linter/rules/no-img-element"
  },
  {
    "group": "performance",
    "name": "noNamespaceImport",
    "title": "No Namespace Import",
    "summary": "Disallow the use of namespace imports.",
    "url": "https://biomejs.dev/linter/rules/no-namespace-import"
  },
  {
    "group": "performance",
    "name": "noReExportAll",
    "title": "No Re Export All",
    "summary": "Avoid re-export all.",
    "url": "https://biomejs.dev/linter/rules/no-re-export-all"
  },
  {
    "group": "performance",
    "name": "noUnwantedPolyfillio",
    "title": "No Unwanted Polyfillio",
    "summary": "Prevent duplicate polyfills from Polyfill.io.",
    "url": "https://biomejs.dev/linter/rules/no-unwanted-polyfillio"
  },
  {
    "group": "performance",
    "name": "useGoogleFontPreconnect",
    "title": "Use Google Font Preconnect",
    "summary": "Ensure the preconnect attribute is used when using Google Fonts.",
    "url": "https://biomejs.dev/linter/rules/use-google-font-preconnect"
  },
  {
    "group": "performance",
    "name": "useSolidForComponent",
    "title": "Use Solid For Component",
    "summary": "Enforce using Solid's \\<For /> component for mapping an array to JSX elements.",
    "url": "https://biomejs.dev/linter/rules/use-solid-for-component"
  },
  {
    "group": "performance",
    "name": "useTopLevelRegex",
    "title": "Use Top Level Regex",
    "summary": "Require regex literals to be declared at the top level.",
    "url": "https://biomejs.dev/linter/rules/use-top-level-regex"
  },
  {
    "group": "security",
    "name": "noBlankTarget",
    "title": "No Blank Target",
    "summary": "Disallow target=\"_blank\" attribute without rel=\"noopener\".",
    "url": "https://biomejs.dev/linter/rules/no-blank-target"
  },
  {
    "group": "security",
    "name": "noDangerouslySetInnerHtml",
    "title": "No Dangerously Set Inner Html",
    "summary": "Prevent the usage of dangerous JSX props.",
    "url": "https://biomejs.dev/linter/rules/no-dangerously-set-inner-html"
  },
  {
    "group": "security",
    "name": "noDangerouslySetInnerHtmlWithChildren",
    "title": "No Dangerously Set Inner Html With Children",
    "summary": "Report when a DOM element or a component uses both children and dangerouslySetInnerHTML prop.",
    "url": "https://biomejs.dev/linter/rules/no-dangerously-set-inner-html-with-children"
  },
  {
    "group": "security",
    "name": "noGlobalEval",
    "title": "No Global Eval",
    "summary": "Disallow the use of global eval().",
    "url": "https://biomejs.dev/linter/rules/no-global-eval"
  },
  {
    "group": "security",
    "name": "noSecrets",
    "title": "No Secrets",
    "summary": "Disallow usage of sensitive data such as API keys and tokens.",
    "url": "https://biomejs.dev/linter/rules/no-secrets"
  },
  {
    "group": "style",
    "name": "noCommonJs",
    "title": "No Common Js",
    "summary": "Disallow use of CommonJs module system in favor of ESM style imports.",
    "url": "https://biomejs.dev/linter/rules/no-common-js"
  },
  {
    "group": "style",
    "name": "noDefaultExport",
    "title": "No Default Export",
    "summary": "Disallow default exports.",
    "url": "https://biomejs.dev/linter/rules/no-default-export"
  },
  {
    "group": "style",
    "name": "noDescendingSpecificity",
    "title": "No Descending Specificity",
    "summary": "Disallow a lower specificity selector from coming after a higher specificity selector.",
    "url": "https://biomejs.dev/linter/rules/no-descending-specificity"
  },
  {
    "group": "style",
    "name": "noDoneCallback",
    "title": "No Done Callback",
    "summary": "Disallow using a callback in asynchronous tests and hooks.",
    "url": "https://biomejs.dev/linter/rules/no-done-callback"
  },
  {
    "group": "style",
    "name": "noEnum",
    "title": "No Enum",
    "summary": "Disallow TypeScript enum.",
    "url": "https://biomejs.dev/linter/rules/no-enum"
  },
  {
    "group": "style",
    "name": "noExportedImports",
    "title": "No Exported Imports",
    "summary": "Disallow exporting an imported variable.",
    "url": "https://biomejs.dev/linter/rules/no-exported-imports"
  },
  {
    "group": "style",
    "name": "noHeadElement",
    "title": "No Head Element",
    "summary": "Prevent usage of \\<head> element in a Next.js project.",
    "url": "https://biomejs.dev/linter/rules/no-head-element"
  },
  {
    "group": "style",
    "name": "noImplicitBoolean",
    "title": "No Implicit Boolean",
    "summary": "Disallow implicit true values on JSX boolean attributes.",
    "url": "https://biomejs.dev/linter/rules/no-implicit-boolean"
  },
  {
    "group": "style",
    "name": "noInferrableTypes",
    "title": "No Inferrable Types",
    "summary": "Disallow type annotations for variables, parameters, and class properties initialized with a literal expression.",
    "url": "https://biomejs.dev/linter/rules/no-inferrable-types"
  },
  {
    "group": "style",
    "name": "noJsxLiterals",
    "title": "No Jsx Literals",
    "summary": "Disallow string literals inside JSX elements.",
    "url": "https://biomejs.dev/linter/rules/no-jsx-literals"
  },
  {
    "group": "style",
    "name": "noMagicNumbers",
    "title": "No Magic Numbers",
    "summary": "Reports usage of \"magic numbers\" — numbers used directly instead of being assigned to named constants.",
    "url": "https://biomejs.dev/linter/rules/no-magic-numbers"
  },
  {
    "group": "style",
    "name": "noNamespace",
    "title": "No Namespace",
    "summary": "Disallow the use of TypeScript's namespaces.",
    "url": "https://biomejs.dev/linter/rules/no-namespace"
  },
  {
    "group": "style",
    "name": "noNegationElse",
    "title": "No Negation Else",
    "summary": "Disallow negation in the condition of an if statement if it has an else clause.",
    "url": "https://biomejs.dev/linter/rules/no-negation-else"
  },
  {
    "group": "style",
    "name": "noNestedTernary",
    "title": "No Nested Ternary",
    "summary": "Disallow nested ternary expressions.",
    "url": "https://biomejs.dev/linter/rules/no-nested-ternary"
  },
  {
    "group": "style",
    "name": "noNonNullAssertion",
    "title": "No Non Null Assertion",
    "summary": "Disallow non-null assertions using the ! postfix operator.",
    "url": "https://biomejs.dev/linter/rules/no-non-null-assertion"
  },
  {
    "group": "style",
    "name": "noParameterAssign",
    "title": "No Parameter Assign",
    "summary": "Disallow reassigning function parameters.",
    "url": "https://biomejs.dev/linter/rules/no-parameter-assign"
  },
  {
    "group": "style",
    "name": "noParameterProperties",
    "title": "No Parameter Properties",
    "summary": "Disallow the use of parameter properties in class constructors.",
    "url": "https://biomejs.dev/linter/rules/no-parameter-properties"
  },
  {
    "group": "style",
    "name": "noProcessEnv",
    "title": "No Process Env",
    "summary": "Disallow the use of process.env.",
    "url": "https://biomejs.dev/linter/rules/no-process-env"
  },
  {
    "group": "style",
    "name": "noRestrictedGlobals",
    "title": "No Restricted Globals",
    "summary": "This rule allows you to specify global variable names that you don’t want to use in your application.",
    "url": "https://biomejs.dev/linter/rules/no-restricted-globals"
  },
  {
    "group": "style",
    "name": "noRestrictedImports",
    "title": "No Restricted Imports",
    "summary": "Disallow specified modules when loaded by import or require.",
    "url": "https://biomejs.dev/linter/rules/no-restricted-imports"
  },
  {
    "group": "style",
    "name": "noRestrictedTypes",
    "title": "No Restricted Types",
    "summary": "Disallow user defined types.",
    "url": "https://biomejs.dev/linter/rules/no-restricted-types"
  },
  {
    "group": "style",
    "name": "noShoutyConstants",
    "title": "No Shouty Constants",
    "summary": "Disallow the use of constants which its value is the upper-case version of its name.",
    "url": "https://biomejs.dev/linter/rules/no-shouty-constants"
  },
  {
    "group": "style",
    "name": "noSubstr",
    "title": "No Substr",
    "summary": "Enforce the use of String.slice() over String.substr() and String.substring().",
    "url": "https://biomejs.dev/linter/rules/no-substr"
  },
  {
    "group": "style",
    "name": "noUnusedTemplateLiteral",
    "title": "No Unused Template Literal",
    "summary": "Disallow template literals if interpolation and special-character handling are not needed.",
    "url": "https://biomejs.dev/linter/rules/no-unused-template-literal"
  },
  {
    "group": "style",
    "name": "noUselessElse",
    "title": "No Useless Else",
    "summary": "Disallow else block when the if block breaks early.",
    "url": "https://biomejs.dev/linter/rules/no-useless-else"
  },
  {
    "group": "style",
    "name": "noValueAtRule",
    "title": "No Value At Rule",
    "summary": "Disallow use of @value rule in CSS modules.",
    "url": "https://biomejs.dev/linter/rules/no-value-at-rule"
  },
  {
    "group": "style",
    "name": "noYodaExpression",
    "title": "No Yoda Expression",
    "summary": "Disallow the use of yoda expressions.",
    "url": "https://biomejs.dev/linter/rules/no-yoda-expression"
  },
  {
    "group": "style",
    "name": "useArrayLiterals",
    "title": "Use Array Literals",
    "summary": "Disallow Array constructors.",
    "url": "https://biomejs.dev/linter/rules/use-array-literals"
  },
  {
    "group": "style",
    "name": "useAsConstAssertion",
    "title": "Use As Const Assertion",
    "summary": "Enforce the use of as const over literal type and type annotation.",
    "url": "https://biomejs.dev/linter/rules/use-as-const-assertion"
  },
  {
    "group": "style",
    "name": "useAtIndex",
    "title": "Use At Index",
    "summary": "Use at() instead of integer index access.",
    "url": "https://biomejs.dev/linter/rules/use-at-index"
  },
  {
    "group": "style",
    "name": "useBlockStatements",
    "title": "Use Block Statements",
    "summary": "Requires following curly brace conventions.",
    "url": "https://biomejs.dev/linter/rules/use-block-statements"
  },
  {
    "group": "style",
    "name": "useCollapsedElseIf",
    "title": "Use Collapsed Else If",
    "summary": "Enforce using else if instead of nested if in else clauses.",
    "url": "https://biomejs.dev/linter/rules/use-collapsed-else-if"
  },
  {
    "group": "style",
    "name": "useCollapsedIf",
    "title": "Use Collapsed If",
    "summary": "Enforce using single if instead of nested if clauses.",
    "url": "https://biomejs.dev/linter/rules/use-collapsed-if"
  },
  {
    "group": "style",
    "name": "useComponentExportOnlyModules",
    "title": "Use Component Export Only Modules",
    "summary": "Enforce declaring components only within modules that export React Components exclusively.",
    "url": "https://biomejs.dev/linter/rules/use-component-export-only-modules"
  },
  {
    "group": "style",
    "name": "useConsistentArrayType",
    "title": "Use Consistent Array Type",
    "summary": "Require consistently using either T\\[] or Array\\<T>.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-array-type"
  },
  {
    "group": "style",
    "name": "useConsistentArrowReturn",
    "title": "Use Consistent Arrow Return",
    "summary": "Enforce consistent arrow function bodies.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-arrow-return"
  },
  {
    "group": "style",
    "name": "useConsistentBuiltinInstantiation",
    "title": "Use Consistent Builtin Instantiation",
    "summary": "Enforce the use of new for all builtins, except String, Number and Boolean.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-builtin-instantiation"
  },
  {
    "group": "style",
    "name": "useConsistentCurlyBraces",
    "title": "Use Consistent Curly Braces",
    "summary": "This rule enforces consistent use of curly braces inside JSX attributes and JSX children.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-curly-braces"
  },
  {
    "group": "style",
    "name": "useConsistentMemberAccessibility",
    "title": "Use Consistent Member Accessibility",
    "summary": "Require consistent accessibility modifiers on class properties and methods.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-member-accessibility"
  },
  {
    "group": "style",
    "name": "useConsistentObjectDefinitions",
    "title": "Use Consistent Object Definitions",
    "summary": "Require the consistent declaration of object literals.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-object-definitions"
  },
  {
    "group": "style",
    "name": "useConsistentTypeDefinitions",
    "title": "Use Consistent Type Definitions",
    "summary": "Enforce type definitions to consistently use either interface or type.",
    "url": "https://biomejs.dev/linter/rules/use-consistent-type-definitions"
  },
  {
    "group": "style",
    "name": "useConst",
    "title": "Use Const",
    "summary": "Require const declarations for variables that are only assigned once.",
    "url": "https://biomejs.dev/linter/rules/use-const"
  },
  {
    "group": "style",
    "name": "useDefaultParameterLast",
    "title": "Use Default Parameter Last",
    "summary": "Enforce default function parameters and optional function parameters to be last.",
    "url": "https://biomejs.dev/linter/rules/use-default-parameter-last"
  },
  {
    "group": "style",
    "name": "useDefaultSwitchClause",
    "title": "Use Default Switch Clause",
    "summary": "Require the default clause in switch statements.",
    "url": "https://biomejs.dev/linter/rules/use-default-switch-clause"
  },
  {
    "group": "style",
    "name": "useDeprecatedReason",
    "title": "Use Deprecated Reason",
    "summary": "Require specifying the reason argument when using @deprecated directive.",
    "url": "https://biomejs.dev/linter/rules/use-deprecated-reason"
  },
  {
    "group": "style",
    "name": "useEnumInitializers",
    "title": "Use Enum Initializers",
    "summary": "Require that each enum member value be explicitly initialized.",
    "url": "https://biomejs.dev/linter/rules/use-enum-initializers"
  },
  {
    "group": "style",
    "name": "useExplicitLengthCheck",
    "title": "Use Explicit Length Check",
    "summary": "Enforce explicitly comparing the length, size, byteLength or byteOffset property of a value.",
    "url": "https://biomejs.dev/linter/rules/use-explicit-length-check"
  },
  {
    "group": "style",
    "name": "useExponentiationOperator",
    "title": "Use Exponentiation Operator",
    "summary": "Disallow the use of Math.pow in favor of the ** operator.",
    "url": "https://biomejs.dev/linter/rules/use-exponentiation-operator"
  },
  {
    "group": "style",
    "name": "useExportType",
    "title": "Use Export Type",
    "summary": "Promotes the use of export type for types.",
    "url": "https://biomejs.dev/linter/rules/use-export-type"
  },
  {
    "group": "style",
    "name": "useExportsLast",
    "title": "Use Exports Last",
    "summary": "Require that all exports are declared after all non-export statements.",
    "url": "https://biomejs.dev/linter/rules/use-exports-last"
  },
  {
    "group": "style",
    "name": "useFilenamingConvention",
    "title": "Use Filenaming Convention",
    "summary": "Enforce naming conventions for JavaScript and TypeScript filenames.",
    "url": "https://biomejs.dev/linter/rules/use-filenaming-convention"
  },
  {
    "group": "style",
    "name": "useForOf",
    "title": "Use For Of",
    "summary": "Prefer using for...of loops over standard for loops where possible.",
    "url": "https://biomejs.dev/linter/rules/use-for-of"
  },
  {
    "group": "style",
    "name": "useFragmentSyntax",
    "title": "Use Fragment Syntax",
    "summary": "This rule enforces the use of \\<>...\\</> over \\<Fragment>...\\</Fragment>.",
    "url": "https://biomejs.dev/linter/rules/use-fragment-syntax"
  },
  {
    "group": "style",
    "name": "useGraphqlNamingConvention",
    "title": "Use Graphql Naming Convention",
    "summary": "Validates that all enum values are capitalized.",
    "url": "https://biomejs.dev/linter/rules/use-graphql-naming-convention"
  },
  {
    "group": "style",
    "name": "useGroupedAccessorPairs",
    "title": "Use Grouped Accessor Pairs",
    "summary": "Enforce that getters and setters for the same property are adjacent in class and object definitions.",
    "url": "https://biomejs.dev/linter/rules/use-grouped-accessor-pairs"
  },
  {
    "group": "style",
    "name": "useImportType",
    "title": "Use Import Type",
    "summary": "Promotes the use of import type for types.",
    "url": "https://biomejs.dev/linter/rules/use-import-type"
  },
  {
    "group": "style",
    "name": "useLiteralEnumMembers",
    "title": "Use Literal Enum Members",
    "summary": "Require all enum members to be literal values.",
    "url": "https://biomejs.dev/linter/rules/use-literal-enum-members"
  },
  {
    "group": "style",
    "name": "useNamingConvention",
    "title": "Use Naming Convention",
    "summary": "Enforce naming conventions for everything across a codebase.",
    "url": "https://biomejs.dev/linter/rules/use-naming-convention"
  },
  {
    "group": "style",
    "name": "useNodeAssertStrict",
    "title": "Use Node Assert Strict",
    "summary": "Promotes the usage of node:assert/strict over node:assert.",
    "url": "https://biomejs.dev/linter/rules/use-node-assert-strict"
  },
  {
    "group": "style",
    "name": "useNodejsImportProtocol",
    "title": "Use Nodejs Import Protocol",
    "summary": "Enforces using the node: protocol for Node.js builtin modules.",
    "url": "https://biomejs.dev/linter/rules/use-nodejs-import-protocol"
  },
  {
    "group": "style",
    "name": "useNumberNamespace",
    "title": "Use Number Namespace",
    "summary": "Use the Number properties instead of global ones.",
    "url": "https://biomejs.dev/linter/rules/use-number-namespace"
  },
  {
    "group": "style",
    "name": "useNumericSeparators",
    "title": "Use Numeric Separators",
    "summary": "Enforce the use of numeric separators in numeric literals.",
    "url": "https://biomejs.dev/linter/rules/use-numeric-separators"
  },
  {
    "group": "style",
    "name": "useObjectSpread",
    "title": "Use Object Spread",
    "summary": "Prefer object spread over Object.assign() when constructing new objects.",
    "url": "https://biomejs.dev/linter/rules/use-object-spread"
  },
  {
    "group": "style",
    "name": "useReactFunctionComponents",
    "title": "Use React Function Components",
    "summary": "Enforce that components are defined as functions and never as classes.",
    "url": "https://biomejs.dev/linter/rules/use-react-function-components"
  },
  {
    "group": "style",
    "name": "useReadonlyClassProperties",
    "title": "Use Readonly Class Properties",
    "summary": "Enforce marking members as readonly if they are never modified outside the constructor.",
    "url": "https://biomejs.dev/linter/rules/use-readonly-class-properties"
  },
  {
    "group": "style",
    "name": "useSelfClosingElements",
    "title": "Use Self Closing Elements",
    "summary": "Prevent extra closing tags for components without children.",
    "url": "https://biomejs.dev/linter/rules/use-self-closing-elements"
  },
  {
    "group": "style",
    "name": "useShorthandAssign",
    "title": "Use Shorthand Assign",
    "summary": "Require assignment operator shorthand where possible.",
    "url": "https://biomejs.dev/linter/rules/use-shorthand-assign"
  },
  {
    "group": "style",
    "name": "useShorthandFunctionType",
    "title": "Use Shorthand Function Type",
    "summary": "Enforce using function types instead of object type with call signatures.",
    "url": "https://biomejs.dev/linter/rules/use-shorthand-function-type"
  },
  {
    "group": "style",
    "name": "useSingleVarDeclarator",
    "title": "Use Single Var Declarator",
    "summary": "Disallow multiple variable declarations in the same variable statement.",
    "url": "https://biomejs.dev/linter/rules/use-single-var-declarator"
  },
  {
    "group": "style",
    "name": "useSymbolDescription",
    "title": "Use Symbol Description",
    "summary": "Require a description parameter for the Symbol().",
    "url": "https://biomejs.dev/linter/rules/use-symbol-description"
  },
  {
    "group": "style",
    "name": "useTemplate",
    "title": "Use Template",
    "summary": "Prefer template literals over string concatenation.",
    "url": "https://biomejs.dev/linter/rules/use-template"
  },
  {
    "group": "style",
    "name": "useThrowNewError",
    "title": "Use Throw New Error",
    "summary": "Require new when throwing an error.",
    "url": "https://biomejs.dev/linter/rules/use-throw-new-error"
  },
  {
    "group": "style",
    "name": "useThrowOnlyError",
    "title": "Use Throw Only Error",
    "summary": "Disallow throwing non-Error values.",
    "url": "https://biomejs.dev/linter/rules/use-throw-only-error"
  },
  {
    "group": "style",
    "name": "useTrimStartEnd",
    "title": "Use Trim Start End",
    "summary": "Enforce the use of String.trimStart() and String.trimEnd() over String.trimLeft() and String.trimRight().",
    "url": "https://biomejs.dev/linter/rules/use-trim-start-end"
  },
  {
    "group": "style",
    "name": "useUnifiedTypeSignatures",
    "title": "Use Unified Type Signatures",
    "summary": "Disallow overload signatures that can be unified into a single signature.",
    "url": "https://biomejs.dev/linter/rules/use-unified-type-signatures"
  },
  {
    "group": "suspicious",
    "name": "noAlert",
    "title": "No Alert",
    "summary": "Disallow the use of alert, confirm, and prompt.",
    "url": "https://biomejs.dev/linter/rules/no-alert"
  },
  {
    "group": "suspicious",
    "name": "noApproximativeNumericConstant",
    "title": "No Approximative Numeric Constant",
    "summary": "Use standard constants instead of approximated literals.",
    "url": "https://biomejs.dev/linter/rules/no-approximative-numeric-constant"
  },
  {
    "group": "suspicious",
    "name": "noArrayIndexKey",
    "title": "No Array Index Key",
    "summary": "Discourage the usage of Array index in keys.",
    "url": "https://biomejs.dev/linter/rules/no-array-index-key"
  },
  {
    "group": "suspicious",
    "name": "noAssignInExpressions",
    "title": "No Assign In Expressions",
    "summary": "Disallow assignments in expressions.",
    "url": "https://biomejs.dev/linter/rules/no-assign-in-expressions"
  },
  {
    "group": "suspicious",
    "name": "noAsyncPromiseExecutor",
    "title": "No Async Promise Executor",
    "summary": "Disallows using an async function as a Promise executor.",
    "url": "https://biomejs.dev/linter/rules/no-async-promise-executor"
  },
  {
    "group": "suspicious",
    "name": "noBiomeFirstException",
    "title": "No Biome First Exception",
    "summary": "Prevents the misuse of glob patterns inside the files.includes field.",
    "url": "https://biomejs.dev/linter/rules/no-biome-first-exception"
  },
  {
    "group": "suspicious",
    "name": "noBitwiseOperators",
    "title": "No Bitwise Operators",
    "summary": "Disallow bitwise operators.",
    "url": "https://biomejs.dev/linter/rules/no-bitwise-operators"
  },
  {
    "group": "suspicious",
    "name": "noCatchAssign",
    "title": "No Catch Assign",
    "summary": "Disallow reassigning exceptions in catch clauses.",
    "url": "https://biomejs.dev/linter/rules/no-catch-assign"
  },
  {
    "group": "suspicious",
    "name": "noClassAssign",
    "title": "No Class Assign",
    "summary": "Disallow reassigning class members.",
    "url": "https://biomejs.dev/linter/rules/no-class-assign"
  },
  {
    "group": "suspicious",
    "name": "noCommentText",
    "title": "No Comment Text",
    "summary": "Prevent comments from being inserted as text nodes.",
    "url": "https://biomejs.dev/linter/rules/no-comment-text"
  },
  {
    "group": "suspicious",
    "name": "noCompareNegZero",
    "title": "No Compare Neg Zero",
    "summary": "Disallow comparing against -0.",
    "url": "https://biomejs.dev/linter/rules/no-compare-neg-zero"
  },
  {
    "group": "suspicious",
    "name": "noConfusingLabels",
    "title": "No Confusing Labels",
    "summary": "Disallow labeled statements that are not loops.",
    "url": "https://biomejs.dev/linter/rules/no-confusing-labels"
  },
  {
    "group": "suspicious",
    "name": "noConfusingVoidType",
    "title": "No Confusing Void Type",
    "summary": "Disallow void type outside of generic or return types.",
    "url": "https://biomejs.dev/linter/rules/no-confusing-void-type"
  },
  {
    "group": "suspicious",
    "name": "noConsole",
    "title": "No Console",
    "summary": "Disallow the use of console.",
    "url": "https://biomejs.dev/linter/rules/no-console"
  },
  {
    "group": "suspicious",
    "name": "noConstEnum",
    "title": "No Const Enum",
    "summary": "Disallow TypeScript const enum.",
    "url": "https://biomejs.dev/linter/rules/no-const-enum"
  },
  {
    "group": "suspicious",
    "name": "noConstantBinaryExpressions",
    "title": "No Constant Binary Expressions",
    "summary": "Disallow expressions where the operation doesn't affect the value.",
    "url": "https://biomejs.dev/linter/rules/no-constant-binary-expressions"
  },
  {
    "group": "suspicious",
    "name": "noControlCharactersInRegex",
    "title": "No Control Characters In Regex",
    "summary": "Prevents from having control characters and some escape sequences that match control characters in regular expression literals.",
    "url": "https://biomejs.dev/linter/rules/no-control-characters-in-regex"
  },
  {
    "group": "suspicious",
    "name": "noDebugger",
    "title": "No Debugger",
    "summary": "Disallow the use of debugger.",
    "url": "https://biomejs.dev/linter/rules/no-debugger"
  },
  {
    "group": "suspicious",
    "name": "noDeprecatedImports",
    "title": "No Deprecated Imports",
    "summary": "Restrict imports of deprecated exports.",
    "url": "https://biomejs.dev/linter/rules/no-deprecated-imports"
  },
  {
    "group": "suspicious",
    "name": "noDocumentCookie",
    "title": "No Document Cookie",
    "summary": "Disallow direct assignments to document.cookie.",
    "url": "https://biomejs.dev/linter/rules/no-document-cookie"
  },
  {
    "group": "suspicious",
    "name": "noDocumentImportInPage",
    "title": "No Document Import In Page",
    "summary": "Prevents importing next/document outside of pages/_document.jsx in Next.js projects.",
    "url": "https://biomejs.dev/linter/rules/no-document-import-in-page"
  },
  {
    "group": "suspicious",
    "name": "noDoubleEquals",
    "title": "No Double Equals",
    "summary": "Require the use of === and !==.",
    "url": "https://biomejs.dev/linter/rules/no-double-equals"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateAtImportRules",
    "title": "No Duplicate At Import Rules",
    "summary": "Disallow duplicate @import rules.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-at-import-rules"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateCase",
    "title": "No Duplicate Case",
    "summary": "Disallow duplicate case labels.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-case"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateClassMembers",
    "title": "No Duplicate Class Members",
    "summary": "Disallow duplicate class members.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-class-members"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateCustomProperties",
    "title": "No Duplicate Custom Properties",
    "summary": "Disallow duplicate custom properties within declaration blocks.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-custom-properties"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateDependencies",
    "title": "No Duplicate Dependencies",
    "summary": "Prevent the listing of duplicate dependencies. The rule supports the following dependency groups: \"bundledDependencies\", \"bundleDependencies\", \"dependencies\", \"devDependencies\", \"overrides\", \"optionalDependencies\", and \"peerDependencies\".",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-dependencies"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateElseIf",
    "title": "No Duplicate Else If",
    "summary": "Disallow duplicate conditions in if-else-if chains.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-else-if"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateFields",
    "title": "No Duplicate Fields",
    "summary": "No duplicated fields in GraphQL operations.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-fields"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateFontNames",
    "title": "No Duplicate Font Names",
    "summary": "Disallow duplicate names within font families.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-font-names"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateJsxProps",
    "title": "No Duplicate Jsx Props",
    "summary": "Prevents JSX properties to be assigned multiple times.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-jsx-props"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateObjectKeys",
    "title": "No Duplicate Object Keys",
    "summary": "Disallow two keys with the same name inside objects.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-object-keys"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateParameters",
    "title": "No Duplicate Parameters",
    "summary": "Disallow duplicate function parameter name.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-parameters"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateProperties",
    "title": "No Duplicate Properties",
    "summary": "Disallow duplicate properties within declaration blocks.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-properties"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateSelectorsKeyframeBlock",
    "title": "No Duplicate Selectors Keyframe Block",
    "summary": "Disallow duplicate selectors within keyframe blocks.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-selectors-keyframe-block"
  },
  {
    "group": "suspicious",
    "name": "noDuplicateTestHooks",
    "title": "No Duplicate Test Hooks",
    "summary": "A describe block should not contain duplicate hooks.",
    "url": "https://biomejs.dev/linter/rules/no-duplicate-test-hooks"
  },
  {
    "group": "suspicious",
    "name": "noEmptyBlock",
    "title": "No Empty Block",
    "summary": "Disallow CSS empty blocks.",
    "url": "https://biomejs.dev/linter/rules/no-empty-block"
  },
  {
    "group": "suspicious",
    "name": "noEmptyBlockStatements",
    "title": "No Empty Block Statements",
    "summary": "Disallow empty block statements and static blocks.",
    "url": "https://biomejs.dev/linter/rules/no-empty-block-statements"
  },
  {
    "group": "suspicious",
    "name": "noEmptyInterface",
    "title": "No Empty Interface",
    "summary": "Disallow the declaration of empty interfaces.",
    "url": "https://biomejs.dev/linter/rules/no-empty-interface"
  },
  {
    "group": "suspicious",
    "name": "noEmptySource",
    "title": "No Empty Source",
    "summary": "Disallow empty sources.",
    "url": "https://biomejs.dev/linter/rules/no-empty-source"
  },
  {
    "group": "suspicious",
    "name": "noEvolvingTypes",
    "title": "No Evolving Types",
    "summary": "Disallow variables from evolving into any type through reassignments.",
    "url": "https://biomejs.dev/linter/rules/no-evolving-types"
  },
  {
    "group": "suspicious",
    "name": "noExplicitAny",
    "title": "No Explicit Any",
    "summary": "Disallow the any type usage.",
    "url": "https://biomejs.dev/linter/rules/no-explicit-any"
  },
  {
    "group": "suspicious",
    "name": "noExportsInTest",
    "title": "No Exports In Test",
    "summary": "Disallow using export or module.exports in files containing tests.",
    "url": "https://biomejs.dev/linter/rules/no-exports-in-test"
  },
  {
    "group": "suspicious",
    "name": "noExtraNonNullAssertion",
    "title": "No Extra Non Null Assertion",
    "summary": "Prevents the wrong usage of the non-null assertion operator (!) in TypeScript files.",
    "url": "https://biomejs.dev/linter/rules/no-extra-non-null-assertion"
  },
  {
    "group": "suspicious",
    "name": "noFallthroughSwitchClause",
    "title": "No Fallthrough Switch Clause",
    "summary": "Disallow fallthrough of switch clauses.",
    "url": "https://biomejs.dev/linter/rules/no-fallthrough-switch-clause"
  },
  {
    "group": "suspicious",
    "name": "noFocusedTests",
    "title": "No Focused Tests",
    "summary": "Disallow focused tests.",
    "url": "https://biomejs.dev/linter/rules/no-focused-tests"
  },
  {
    "group": "suspicious",
    "name": "noFunctionAssign",
    "title": "No Function Assign",
    "summary": "Disallow reassigning function declarations.",
    "url": "https://biomejs.dev/linter/rules/no-function-assign"
  },
  {
    "group": "suspicious",
    "name": "noGlobalAssign",
    "title": "No Global Assign",
    "summary": "Disallow assignments to native objects and read-only global variables.",
    "url": "https://biomejs.dev/linter/rules/no-global-assign"
  },
  {
    "group": "suspicious",
    "name": "noGlobalIsFinite",
    "title": "No Global Is Finite",
    "summary": "Use Number.isFinite instead of global isFinite.",
    "url": "https://biomejs.dev/linter/rules/no-global-is-finite"
  },
  {
    "group": "suspicious",
    "name": "noGlobalIsNan",
    "title": "No Global Is Nan",
    "summary": "Use Number.isNaN instead of global isNaN.",
    "url": "https://biomejs.dev/linter/rules/no-global-is-nan"
  },
  {
    "group": "suspicious",
    "name": "noHeadImportInDocument",
    "title": "No Head Import In Document",
    "summary": "Prevent using the next/head module in pages/_document.js on Next.js projects.",
    "url": "https://biomejs.dev/linter/rules/no-head-import-in-document"
  },
  {
    "group": "suspicious",
    "name": "noImplicitAnyLet",
    "title": "No Implicit Any Let",
    "summary": "Disallow use of implicit any type on variable declarations.",
    "url": "https://biomejs.dev/linter/rules/no-implicit-any-let"
  },
  {
    "group": "suspicious",
    "name": "noImportAssign",
    "title": "No Import Assign",
    "summary": "Disallow assigning to imported bindings.",
    "url": "https://biomejs.dev/linter/rules/no-import-assign"
  },
  {
    "group": "suspicious",
    "name": "noImportCycles",
    "title": "No Import Cycles",
    "summary": "Prevent import cycles.",
    "url": "https://biomejs.dev/linter/rules/no-import-cycles"
  },
  {
    "group": "suspicious",
    "name": "noImportantInKeyframe",
    "title": "No Important In Keyframe",
    "summary": "Disallow invalid !important within keyframe declarations.",
    "url": "https://biomejs.dev/linter/rules/no-important-in-keyframe"
  },
  {
    "group": "suspicious",
    "name": "noIrregularWhitespace",
    "title": "No Irregular Whitespace",
    "summary": "Disallows the use of irregular whitespace characters.",
    "url": "https://biomejs.dev/linter/rules/no-irregular-whitespace"
  },
  {
    "group": "suspicious",
    "name": "noLabelVar",
    "title": "No Label Var",
    "summary": "Disallow labels that share a name with a variable.",
    "url": "https://biomejs.dev/linter/rules/no-label-var"
  },
  {
    "group": "suspicious",
    "name": "noMisleadingCharacterClass",
    "title": "No Misleading Character Class",
    "summary": "Disallow characters made with multiple code points in character class syntax.",
    "url": "https://biomejs.dev/linter/rules/no-misleading-character-class"
  },
  {
    "group": "suspicious",
    "name": "noMisleadingInstantiator",
    "title": "No Misleading Instantiator",
    "summary": "Enforce proper usage of new and constructor.",
    "url": "https://biomejs.dev/linter/rules/no-misleading-instantiator"
  },
  {
    "group": "suspicious",
    "name": "noMisplacedAssertion",
    "title": "No Misplaced Assertion",
    "summary": "Checks that the assertion function, for example expect, is placed inside an it() function call.",
    "url": "https://biomejs.dev/linter/rules/no-misplaced-assertion"
  },
  {
    "group": "suspicious",
    "name": "noMisrefactoredShorthandAssign",
    "title": "No Misrefactored Shorthand Assign",
    "summary": "Disallow shorthand assign when variable appears on both sides.",
    "url": "https://biomejs.dev/linter/rules/no-misrefactored-shorthand-assign"
  },
  {
    "group": "suspicious",
    "name": "noNonNullAssertedOptionalChain",
    "title": "No Non Null Asserted Optional Chain",
    "summary": "Disallow non-null assertions after optional chaining expressions.",
    "url": "https://biomejs.dev/linter/rules/no-non-null-asserted-optional-chain"
  },
  {
    "group": "suspicious",
    "name": "noOctalEscape",
    "title": "No Octal Escape",
    "summary": "Disallow octal escape sequences in string literals.",
    "url": "https://biomejs.dev/linter/rules/no-octal-escape"
  },
  {
    "group": "suspicious",
    "name": "noPrototypeBuiltins",
    "title": "No Prototype Builtins",
    "summary": "Disallow direct use of Object.prototype builtins.",
    "url": "https://biomejs.dev/linter/rules/no-prototype-builtins"
  },
  {
    "group": "suspicious",
    "name": "noQuickfixBiome",
    "title": "No Quickfix Biome",
    "summary": "Disallow the use if quickfix.biome inside editor settings file.",
    "url": "https://biomejs.dev/linter/rules/no-quickfix-biome"
  },
  {
    "group": "suspicious",
    "name": "noReactForwardRef",
    "title": "No React Forward Ref",
    "summary": "Replaces usages of forwardRef with passing ref as a prop.",
    "url": "https://biomejs.dev/linter/rules/no-react-forward-ref"
  },
  {
    "group": "suspicious",
    "name": "noReactSpecificProps",
    "title": "No React Specific Props",
    "summary": "Prevents React-specific JSX properties from being used.",
    "url": "https://biomejs.dev/linter/rules/no-react-specific-props"
  },
  {
    "group": "suspicious",
    "name": "noRedeclare",
    "title": "No Redeclare",
    "summary": "Disallow variable, function, class, and type redeclarations in the same scope.",
    "url": "https://biomejs.dev/linter/rules/no-redeclare"
  },
  {
    "group": "suspicious",
    "name": "noRedundantUseStrict",
    "title": "No Redundant Use Strict",
    "summary": "Prevents from having redundant \"use strict\".",
    "url": "https://biomejs.dev/linter/rules/no-redundant-use-strict"
  },
  {
    "group": "suspicious",
    "name": "noSelfCompare",
    "title": "No Self Compare",
    "summary": "Disallow comparisons where both sides are exactly the same.",
    "url": "https://biomejs.dev/linter/rules/no-self-compare"
  },
  {
    "group": "suspicious",
    "name": "noShadowRestrictedNames",
    "title": "No Shadow Restricted Names",
    "summary": "Disallow identifiers from shadowing restricted names.",
    "url": "https://biomejs.dev/linter/rules/no-shadow-restricted-names"
  },
  {
    "group": "suspicious",
    "name": "noShorthandPropertyOverrides",
    "title": "No Shorthand Property Overrides",
    "summary": "Disallow shorthand properties that override related longhand properties.",
    "url": "https://biomejs.dev/linter/rules/no-shorthand-property-overrides"
  },
  {
    "group": "suspicious",
    "name": "noSkippedTests",
    "title": "No Skipped Tests",
    "summary": "Disallow disabled tests.",
    "url": "https://biomejs.dev/linter/rules/no-skipped-tests"
  },
  {
    "group": "suspicious",
    "name": "noSparseArray",
    "title": "No Sparse Array",
    "summary": "Prevents the use of sparse arrays (arrays with holes).",
    "url": "https://biomejs.dev/linter/rules/no-sparse-array"
  },
  {
    "group": "suspicious",
    "name": "noSuspiciousSemicolonInJsx",
    "title": "No Suspicious Semicolon In Jsx",
    "summary": "It detects possible \"wrong\" semicolons inside JSX elements.",
    "url": "https://biomejs.dev/linter/rules/no-suspicious-semicolon-in-jsx"
  },
  {
    "group": "suspicious",
    "name": "noTemplateCurlyInString",
    "title": "No Template Curly In String",
    "summary": "Disallow template literal placeholder syntax in regular strings.",
    "url": "https://biomejs.dev/linter/rules/no-template-curly-in-string"
  },
  {
    "group": "suspicious",
    "name": "noThenProperty",
    "title": "No Then Property",
    "summary": "Disallow then property.",
    "url": "https://biomejs.dev/linter/rules/no-then-property"
  },
  {
    "group": "suspicious",
    "name": "noTsIgnore",
    "title": "No Ts Ignore",
    "summary": "Prevents the use of the TypeScript directive @ts-ignore.",
    "url": "https://biomejs.dev/linter/rules/no-ts-ignore"
  },
  {
    "group": "suspicious",
    "name": "noUnassignedVariables",
    "title": "No Unassigned Variables",
    "summary": "Disallow let or var variables that are read but never assigned.",
    "url": "https://biomejs.dev/linter/rules/no-unassigned-variables"
  },
  {
    "group": "suspicious",
    "name": "noUnknownAtRules",
    "title": "No Unknown At Rules",
    "summary": "Disallow unknown at-rules.",
    "url": "https://biomejs.dev/linter/rules/no-unknown-at-rules"
  },
  {
    "group": "suspicious",
    "name": "noUnsafeDeclarationMerging",
    "title": "No Unsafe Declaration Merging",
    "summary": "Disallow unsafe declaration merging between interfaces and classes.",
    "url": "https://biomejs.dev/linter/rules/no-unsafe-declaration-merging"
  },
  {
    "group": "suspicious",
    "name": "noUnsafeNegation",
    "title": "No Unsafe Negation",
    "summary": "Disallow using unsafe negation.",
    "url": "https://biomejs.dev/linter/rules/no-unsafe-negation"
  },
  {
    "group": "suspicious",
    "name": "noUnusedExpressions",
    "title": "No Unused Expressions",
    "summary": "Disallow expression statements that are neither a function call nor an assignment.",
    "url": "https://biomejs.dev/linter/rules/no-unused-expressions"
  },
  {
    "group": "suspicious",
    "name": "noUselessEscapeInString",
    "title": "No Useless Escape In String",
    "summary": "Disallow unnecessary escapes in string literals.",
    "url": "https://biomejs.dev/linter/rules/no-useless-escape-in-string"
  },
  {
    "group": "suspicious",
    "name": "noUselessRegexBackrefs",
    "title": "No Useless Regex Backrefs",
    "summary": "Disallow useless backreferences in regular expression literals that always match an empty string.",
    "url": "https://biomejs.dev/linter/rules/no-useless-regex-backrefs"
  },
  {
    "group": "suspicious",
    "name": "noVar",
    "title": "No Var",
    "summary": "Disallow the use of var.",
    "url": "https://biomejs.dev/linter/rules/no-var"
  },
  {
    "group": "suspicious",
    "name": "noWith",
    "title": "No With",
    "summary": "Disallow with statements in non-strict contexts.",
    "url": "https://biomejs.dev/linter/rules/no-with"
  },
  {
    "group": "suspicious",
    "name": "useAdjacentOverloadSignatures",
    "title": "Use Adjacent Overload Signatures",
    "summary": "Disallow the use of overload signatures that are not next to each other.",
    "url": "https://biomejs.dev/linter/rules/use-adjacent-overload-signatures"
  },
  {
    "group": "suspicious",
    "name": "useAwait",
    "title": "Use Await",
    "summary": "Ensure async functions utilize await.",
    "url": "https://biomejs.dev/linter/rules/use-await"
  },
  {
    "group": "suspicious",
    "name": "useBiomeIgnoreFolder",
    "title": "Use Biome Ignore Folder",
    "summary": "Promotes the correct usage for ignoring folders in the configuration file.",
    "url": "https://biomejs.dev/linter/rules/use-biome-ignore-folder"
  },
  {
    "group": "suspicious",
    "name": "useDefaultSwitchClauseLast",
    "title": "Use Default Switch Clause Last",
    "summary": "Enforce default clauses in switch statements to be last.",
    "url": "https://biomejs.dev/linter/rules/use-default-switch-clause-last"
  },
  {
    "group": "suspicious",
    "name": "useDeprecatedDate",
    "title": "Use Deprecated Date",
    "summary": "Require the @deprecated directive to specify a deletion date.",
    "url": "https://biomejs.dev/linter/rules/use-deprecated-date"
  },
  {
    "group": "suspicious",
    "name": "useErrorMessage",
    "title": "Use Error Message",
    "summary": "Enforce passing a message value when creating a built-in error.",
    "url": "https://biomejs.dev/linter/rules/use-error-message"
  },
  {
    "group": "suspicious",
    "name": "useGetterReturn",
    "title": "Use Getter Return",
    "summary": "Enforce get methods to always return a value.",
    "url": "https://biomejs.dev/linter/rules/use-getter-return"
  },
  {
    "group": "suspicious",
    "name": "useGoogleFontDisplay",
    "title": "Use Google Font Display",
    "summary": "Enforces the use of a recommended display strategy with Google Fonts.",
    "url": "https://biomejs.dev/linter/rules/use-google-font-display"
  },
  {
    "group": "suspicious",
    "name": "useGuardForIn",
    "title": "Use Guard For In",
    "summary": "Require for-in loops to include an if statement.",
    "url": "https://biomejs.dev/linter/rules/use-guard-for-in"
  },
  {
    "group": "suspicious",
    "name": "useIsArray",
    "title": "Use Is Array",
    "summary": "Use Array.isArray() instead of instanceof Array.",
    "url": "https://biomejs.dev/linter/rules/use-is-array"
  },
  {
    "group": "suspicious",
    "name": "useIterableCallbackReturn",
    "title": "Use Iterable Callback Return",
    "summary": "Enforce consistent return values in iterable callbacks.",
    "url": "https://biomejs.dev/linter/rules/use-iterable-callback-return"
  },
  {
    "group": "suspicious",
    "name": "useNamespaceKeyword",
    "title": "Use Namespace Keyword",
    "summary": "Require using the namespace keyword over the module keyword to declare TypeScript namespaces.",
    "url": "https://biomejs.dev/linter/rules/use-namespace-keyword"
  },
  {
    "group": "suspicious",
    "name": "useNumberToFixedDigitsArgument",
    "title": "Use Number To Fixed Digits Argument",
    "summary": "Enforce using the digits argument with Number#toFixed().",
    "url": "https://biomejs.dev/linter/rules/use-number-to-fixed-digits-argument"
  },
  {
    "group": "suspicious",
    "name": "useStaticResponseMethods",
    "title": "Use Static Response Methods",
    "summary": "Use static Response methods instead of new Response() constructor when possible.",
    "url": "https://biomejs.dev/linter/rules/use-static-response-methods"
  },
  {
    "group": "suspicious",
    "name": "useStrictMode",
    "title": "Use Strict Mode",
    "summary": "Enforce the use of the directive \"use strict\" in script files.",
    "url": "https://biomejs.dev/linter/rules/use-strict-mode"
  }
] satisfies BiomeRule[]
