/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(2);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Ctitle\u003EDerek Shiller's Website\u003C\u002Ftitle\u003E\u003Cscript src=\"https:\u002F\u002Fuse.fontawesome.com\u002F79ddb5907d.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\".\u002Fbundle.js\" charset=\"utf-8\"\u003E\u003C\u002Fscript\u003E\u003Cscript\u003E(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,'script','https:\u002F\u002Fwww.google-analytics.com\u002Fanalytics.js','ga'); ga('create', 'UA-36693042-1', 'auto'); ga('send', 'pageview');\u003C\u002Fscript\u003E\u003Clink rel=\"stylesheet\" href=\".\u002Fmain.bundle.css\"\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cheader\u003E\u003Cdiv id=\"picturebox\"\u003E\u003Cimg src=\".\u002Fimages\u002Favatar.jpg\" alt=\"\"\u003E\u003C\u002Fdiv\u003E\u003Clabel\u003E\u003Ch1\u003EDerek Shiller\u003C\u002Fh1\u003E\u003Cp id=\"title\"\u003E \u003Cspan class=\"selected\"\u003ESoftware Engineer, \u003C\u002Fspan\u003EPhilosopher\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\u003Cfooter\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca class=\"icon fa fa-2x fa-github\" href=\"http:\u002F\u002Fwww.github.com\u002Fdcshiller\"\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C!--li: a.icon.fa.fa-2x.fa-linkedin(href=\"https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fderek-shiller-3a254b121\")--\u003E\u003Cli\u003E\u003Ca class=\"icon fa fa-2x fa-angellist\" href=\"https:\u002F\u002Fangel.co\u002Fderek-shiller\"\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca class=\"icon fa fa-2x fa-envelope-o\" href=\"mailto:dcshiller@gmail.com\"\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Cdiv\u003E\u003Ca class=\"overlayLink\" href=\"assets\u002Fresume.pdf\"\u003E\u003Cspan class=\"overlay resume\"\u003ER\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Ca class=\"icon fa-2x fa fa-file\" href=\"\u002Fassets\u002Fresume.pdf\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Cdiv\u003E\u003Ca class=\"overlayLink\" href=\"assets\u002FCV.pdf\"\u003E\u003Cspan class=\"overlay cv\"\u003ECV\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Ca class=\"icon fa-2x fa fa-file\" href=\"\u002Fassets\u002FCV.pdf\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Ffooter\u003E\u003C\u002Fheader\u003E\u003Cmain\u003E\u003Ch1\u003EAbout Me\u003C\u002Fh1\u003E\u003Carticle\u003E\u003Cp\u003EI'm a full stack web developer at \u003Ca href=\"http:\u002F\u002Fwww.trydailypay.com\"\u003EDailyPay. \u003C\u002Fa\u003EI come from a background in academic philosophy, where I specialized in metaethics, the philosophy of probability, and the philosophy of mind.\nOn this website, you can find a selection of papers and projects.\u003C\u002Fp\u003E\u003C\u002Farticle\u003E\u003Chr\u003E\u003Ch1\u003EProjects\u003C\u002Fh1\u003E\u003Cspan class=\"linkRow\"\u003E\u003Cbutton id=\"webbutton\"\u003EWeb\u003C\u002Fbutton\u003E\u003Cbutton id=\"philbutton\"\u003EPhilosophy\u003C\u002Fbutton\u003E\u003Cbutton id=\"otherbutton\"\u003EOther\u003C\u002Fbutton\u003E\u003C\u002Fspan\u003E\u003Cdiv class=\"philosophy hidden\"\u003E\u003Ch1\u003EPublished\u003C\u002Fh1\u003E\u003Carticle class=\"project\"\u003E\u003Ch3 class=\"quote\"\u003E\"I propose that the attitudes which are normatively discordant are normatively discordant for no further reason. Most normative theories bottom out somewhere; I suggest that expressivists include the norms governing normative discordance at the bottom level.\"\u003C\u002Fh3\u003E\u003Cdiv class=\"column\"\u003E\u003Ch2\u003EA Primitive Solution to the Negation Problem\u003Ca class=\"icon fa fa-file draft\" href=\"\u002Fdrafts\u002FDerekShiller.APrimitiveSolutiontotheNegationProblem.pdf\"\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\u003Cbr\u003E\u003Cdiv class=\"journal\"\u003EEthical Theory and Moral Practice 2016\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Farticle\u003E\u003Carticle class=\"project\"\u003E\u003Cdiv class=\"column\"\u003E\u003Ch2\u003EIn Defense of Artificial Replacement\u003C\u002Fh2\u003E\u003Cdiv\u003E\u003C\u002Fdiv\u003E\u003Cspan class=\"journal\"\u003EBioethics 2017\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ch3 class=\"quote\"\u003E\"We should choose to create creatures with the best life. The fact that such creatures are made of silicon and do not emerge directly from our genitals is morally irrelevant.\"\u003C!-- p If it is within our power to provide a significantly better world for future generations at a comparatively small cost to ourselves, we have a strong moral reason to do so. One way of providing a significantly better world may involve replacing our species with something better. It is plausible that in the not-too-distant future, we will be able to create artificially intelligent creatures with whatever physical and psychological traits we choose. Granted this assumption, it is argued that we should engineer our extinction so that our planet's resources can be devoted to making artificial creatures with better lives.--\u003E\u003C\u002Fh3\u003E\u003C\u002Farticle\u003E\u003Carticle class=\"project\"\u003E\u003Ch3 class=\"quote\"\u003E\"Should all our qualia be introspectible, introspection would be quite exceptional. Apart from any a priori reason to think introspection should be that much more remarkable than our sensory modalities, we should be doubtful that it is.\"\u003C\u002Fh3\u003E\u003Cdiv class=\"column\"\u003E\u003Ch2\u003EHidden Qualia\u003Ca class=\"icon fa fa-file draft\" href=\"\u002Fdrafts\u002FDerekShiller.HiddenQualia.pdf\"\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\u003Cspan class=\"journal\"\u003EReview of Philosophy and Psychology 2017\u003C!-- p We generally take it for granted that we know what what it feels like to be us. Some conscious experiences may escape our attention, but by and large we are capable of knowing just about anything about our conscious experiences. I offer several arguments against this assumption.--\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Farticle\u003E\u003Carticle class=\"project\"\u003E\u003Cdiv class=\"column\"\u003E\u003Ch2\u003EThe Problem of Other Attitudes \u003C\u002Fh2\u003E\u003Cspan class=\"journal\"\u003EAmerican Philosophical Quarterly 2017\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ch3 class=\"quote\"\u003E\"For every kind of attitude that can take an ordinary propositional object, there exists a moral analogue... These moral analogues are attitudes that most people would naturally be inclined to regard as propositional attitudes... But according to noncognitivism, the appearance is largely illusory.\"\u003C!-- p I argue that noncognitivists face a problem in explaining moral attitudes other than judgment that is somewhat analogous to the Frege\u002FGeach problem.  Noncognitivists have focused on providing analyzes of what it takes to think that an action is wrong. They have been silent on what it takes to hope that an action is wrong, or to intend to do the right thing (whatever that turns out to be). I consider extending several noncognitivist proposals into systematic accounts of the nature of moral attitudes, and argue that none is plausible.--\u003E\u003C\u002Fh3\u003E\u003C\u002Farticle\u003E\u003Carticle class=\"project\"\u003E\u003Ch3 class=\"quote\"\u003E\"Our concept tokens employed in tracking rules and social regulations combine normally with negation, conjunction, quantification, generics, conditionals, tense, and other attitudes. If our moral concepts exapted from these representational concepts, then they could easily continue to share some of their syntactic properties.\"\u003C\u002Fh3\u003E\u003Cdiv class=\"column space-around\"\u003E\u003Cdiv\u003E\u003Ch2\u003EThe Unity of Moral Attitudes:\u003C\u002Fh2\u003E\u003Ch3\u003ERecipe Semantics and Credal Exaptation\u003C\u002Fh3\u003E\u003Cspan class=\"journal\"\u003ECanadian Journal of Philosophy Forthcoming\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C!-- a.icon.fa.fa-file.draft(href=\"\u002Fdrafts\u002FDerekShiller.RecipeSemanticsForNoncognitivism.pdf\")--\u003E\u003C!-- p This paper offers a noncognitivist characterization of moral attitudes, according to which moral attitudes count as such because of their inclusion of moral concepts. Moral concepts are distinguished by their contribution to the functional roles of some  of the attitudes in which they can occur. They have no particular functional role in other attitudes, and should instead be viewed as evolutionary spandrels. In order to make the counter-intuitive implications of the view more palatable, the paper ends with an account of the evolution of normative judgments as exaptations of the cognitive structures that underlie beliefs. --\u003E\u003C\u002Fdiv\u003E\u003C\u002Farticle\u003E\u003Ch1\u003EIn Progress\u003C\u002Fh1\u003E\u003Ch2\u003ESleeping Beauty and the Limits of Conditionalization\u003Ca class=\"icon fa fa-file draft\" href=\"\u002Fdrafts\u002FDerekShiller.SleepingBeautyAndTheLimitsOfConditionalization.pdf\"\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\u003Carticle class=\"project\"\u003E\u003Cdiv\u003E\u003Cspan class=\"journal\"\u003EWork in Progress\u003C\u002Fspan\u003E\u003Cp\u003EThirders have traditionally relied on conditionalizations in arguing for their favored answer to the Sleeping Beauty problem. This paper offers a critique of such applications of conditionalization. It is argued that while conditionalization may be generally appropriate, it's appropriateness is dependent on whether certain evidential features are preserved over time. In the Sleeping Beauty scenario, it appears as if the relevant features are not preserved. Therefore, the major arguments for thirdism should be unconvincing. \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Farticle\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"webdev hidden\"\u003E\u003Ch2\u003ENeural Network Project\u003C\u002Fh2\u003E\u003Carticle class=\"project\"\u003E\u003Cimg src=\".\u002Fimages\u002Fscreenshots\u002Fnnp.png\" alt=\"\"\u003E\u003Cul\u003E\u003Cp\u003EA javascript neural network builder\u003C\u002Fp\u003E\u003Cp\u003E(designed for google's chrome browser)\u003C\u002Fp\u003E\u003Cspan class=\"linkRow\"\u003E\u003Ca href=\"http:\u002F\u002Fwww.derekshiller.com\u002Fnnp\u002Fnnp.html\"\u003ELive\u003C\u002Fa\u003E\u003Ca href=\"http:\u002F\u002Fgithub.com\u002Fdcshiller\u002Fnnp\"\u003EGithub\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Ful\u003E\u003C\u002Farticle\u003E\u003Ch2\u003EWhere Do They Publish?\u003C\u002Fh2\u003E\u003Carticle class=\"project\"\u003E\u003Cimg src=\".\u002Fimages\u002Fscreenshots\u002FWDTP.png\" alt=\"\"\u003E\u003Cul\u003E\u003Cp\u003EA web interface for querying publication metadata\u003C\u002Fp\u003E\u003Cli\u003ELive version written in Go\u003C\u002Fli\u003E\u003Cspan class=\"linkRow\"\u003E\u003Ca href=\"http:\u002F\u002Fwheredotheypublish.derekshiller.com\"\u003ELive\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Ful\u003E\u003C\u002Farticle\u003E\u003Ch2\u003EPhilosophy Data Project\u003C\u002Fh2\u003E\u003Carticle class=\"project\"\u003E\u003Cimg src=\".\u002Fimages\u002Fscreenshots\u002Fpdp.png\" alt=\"\"\u003E\u003Cul\u003E\u003Cp\u003EWeb database for philosophy data\u003C\u002Fp\u003E\u003Cli\u003EWritten in Rails\u003C\u002Fli\u003E\u003Cspan class=\"linkRow\"\u003E\u003Ca href=\"http:\u002F\u002Fpolar-eyrie-33608.herokuapp.com\"\u003ELive\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Ful\u003E\u003C\u002Farticle\u003E\u003Ch2\u003EPiper\u003C\u002Fh2\u003E\u003Carticle class=\"project\"\u003E\u003Cimg src=\".\u002Fimages\u002Fscreenshots\u002FPiper.png\" alt=\"\"\u003E\u003Cul\u003E\u003Cp\u003EFinal project at App Academy\u003C\u002Fp\u003E\u003Cspan class=\"linkRow\"\u003E\u003Ca href=\"http:\u002F\u002Fwww.derekshiller.com\u002Fpiper\u002Fpiper.php\"\u003ELive\u003C\u002Fa\u003E\u003Ca href=\"http:\u002F\u002Fgithub.com\u002Fdcshiller\u002Fpiper\"\u003EGithub\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Ful\u003E\u003C\u002Farticle\u003E\u003Ch2\u003ETuring Machine Simulator\u003C\u002Fh2\u003E\u003Carticle class=\"project\"\u003E\u003Cimg src=\".\u002Fimages\u002Fscreenshots\u002FTuringMachineSimulator.png\" alt=\"\"\u003E\u003Cul\u003E\u003Cp\u003EA terminal program for creating and running Turing machine programs.\u003C\u002Fp\u003E\u003Cli\u003EUses and reuses custom pannelling module to produce complex terminal displays with DRY code\u003C\u002Fli\u003E\u003Cli\u003ESupports creation, editing, and saving programs as YAML objects \u003C\u002Fli\u003E\u003Cspan class=\"linkRow\"\u003E\u003Ca href=\"http:\u002F\u002Fgithub.com\u002Fdcshiller\u002Fturing\"\u003EGithub\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Ful\u003E\u003C\u002Farticle\u003E\u003Ch2\u003EForMu\u003C\u002Fh2\u003E\u003Carticle class=\"project\"\u003E\u003Cimg src=\".\u002Fimages\u002Fscreenshots\u002FForMu.png\" alt=\"\"\u003E\u003Cul\u003E\u003Cp\u003EFinal project at App Academy.\u003C\u002Fp\u003E\u003Cspan class=\"linkRow\"\u003E\u003Ca href=\"http:\u002F\u002Fformu.derekshiller.com\"\u003ELive\u003C\u002Fa\u003E\u003Ca href=\"http:\u002F\u002Fgithub.com\u002Fdcshiller\u002Fformu\"\u003EGithub\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Ful\u003E\u003C\u002Farticle\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"other hidden\"\u003E\u003Cul\u003E\u003Cli\u003E \u003Ca href=\"\u002Fappacademy.html\"\u003EReview of App Academy\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(3).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function setPhil (e) {
  e.preventDefault()
  toggleSelected(e.target)
  let webProjects = document.getElementsByClassName("webdev")[0]
  let philProjects = document.getElementsByClassName("philosophy")[0]
  let otherProjects = document.getElementsByClassName("other")[0]
  webProjects.classList.add("hidden")
  philProjects.classList.remove("hidden")
  otherProjects.classList.add("hidden")
}

function toggleSelected (target) {
  let other = document.querySelector(".selected")
  if(other){other.className = ""}
  target.className = "selected"
}

function setWeb (e) {
  e.preventDefault()
  toggleSelected(e.target)
  let webProjects = document.getElementsByClassName("webdev")[0]
  let philProjects = document.getElementsByClassName("philosophy")[0]
  let otherProjects = document.getElementsByClassName("other")[0]
  philProjects.classList.add("hidden")
  webProjects.classList.remove("hidden")
  otherProjects.classList.add("hidden")
}

function setOther (e) {
  e.preventDefault();
  toggleSelected(e.target);
  let webProjects = document.getElementsByClassName("webdev")[0];
  let philProjects = document.getElementsByClassName("philosophy")[0];
  let otherProjects = document.getElementsByClassName("other")[0];
  philProjects.classList.add("hidden")
  webProjects.classList.add("hidden")
  otherProjects.classList.remove("hidden");
}

let footerInHeader = true//window.innerWidth > 800

function moveFooter(e) {
  let body = document.getElementsByTagName("body")[0]
  let footer = document.getElementsByTagName("footer")[0]
  let header = document.getElementsByTagName("header")[0]
  if (e.target.innerWidth <= 800 && footerInHeader) {
    body.appendChild(footer);
    // header.removeChild(footer);
    footerInHeader = false;
  }  else if (e.target.innerWidth > 800 && !footerInHeader) {
    header.appendChild(footer);
    // body.removeChild(footer);
    footerInHeader = true;
  }
}

document.addEventListener("DOMContentLoaded",
  function(){
    let Philbutton = document.getElementById("philbutton")
    let Webbutton= document.getElementById("webbutton")
    let Otherbutton= document.getElementById("otherbutton")
    Webbutton.addEventListener("click", setWeb)
    Philbutton.addEventListener("click", setPhil)
    Otherbutton.addEventListener("click", setOther)
    window.onresize = moveFooter;
    moveFooter({target: window})
  }
)


/***/ })
/******/ ]);