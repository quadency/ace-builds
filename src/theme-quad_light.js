define("ace/theme/quad_light",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

  exports.isDark = false;
  exports.cssClass = "ace-quad-light";
  exports.cssText = "\
.ace-quad-light .ace_gutter {\
background: #ffffff;\
color: #878D98;\
}\
.ace-quad-light  {\
background: #fff;\
color: #000;\
}\
.ace-quad-light .ace_keyword {\
font-weight: bold;\
}\
.ace-quad-light .ace_string {\
color: #D14;\
}\
.ace-quad-light .ace_variable.ace_class {\
color: teal;\
}\
.ace-quad-light .ace_constant.ace_numeric {\
color: #099;\
}\
.ace-quad-light .ace_constant.ace_buildin {\
color: #0086B3;\
}\
.ace-quad-light .ace_support.ace_function {\
color: #0086B3;\
}\
.ace-quad-light .ace_comment {\
color: #998;\
font-style: italic;\
}\
.ace-quad-light .ace_variable.ace_language  {\
color: #0086B3;\
}\
.ace-quad-light .ace_paren {\
font-weight: bold;\
}\
.ace-quad-light .ace_boolean {\
font-weight: bold;\
}\
.ace-quad-light .ace_string.ace_regexp {\
color: #009926;\
font-weight: normal;\
}\
.ace-quad-light .ace_variable.ace_instance {\
color: teal;\
}\
.ace-quad-light .ace_constant.ace_language {\
font-weight: bold;\
}\
.ace-quad-light .ace_cursor {\
color: black;\
}\
.ace-quad-light.ace_focus .ace_marker-layer .ace_active-line {\
background: #e2e2e2;\
}\
.ace-quad-light .ace_marker-layer .ace_active-line {\
background: #e2e2e2;\
}\
.ace-quad-light .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-quad-light.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px white;\
}\
.ace-quad-light.ace_nobold .ace_line > span {\
font-weight: normal !important;\
}\
.ace-quad-light .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-quad-light .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-quad-light .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-quad-light .ace_gutter-active-line {\
background-color: #f5f6fa;\
}\
.ace-quad-light .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-quad-light .ace_invisible {\
color: #BFBFBF\
}\
.ace-quad-light .ace_print-margin {\
width: 1px;\
background:  #ffffff;\
}\
.ace-quad-light .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";

  var dom = require("../lib/dom");
  dom.importCssString(exports.cssText, exports.cssClass);
});
                (function() {
                    window.require(["ace/theme/quad_light"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            