define("ace/theme/quad_dark",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-quad-dark",t.cssText=".ace-quad-dark .ace_gutter {background: #273142;color: #7f8fa4}.ace-quad-dark .ace_print-margin {width: 1px;background: #000000}.ace-quad-dark {background-color: #272822;color: #F8F8F2}.ace-quad-dark .ace_cursor {color: #F8F8F0}.ace-quad-dark .ace_marker-layer .ace_selection {background: #49483E}.ace-quad-dark.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-quad-dark .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-quad-dark .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-quad-dark .ace_marker-layer .ace_active-line {background: #171e29}.ace-quad-dark .ace_gutter-active-line {background-color: #1b2431}.ace-quad-dark .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-quad-dark .ace_invisible {color: #52524d}.ace-quad-dark .ace_entity.ace_name.ace_tag,.ace-quad-dark .ace_keyword,.ace-quad-dark .ace_meta.ace_tag,.ace-quad-dark .ace_storage {color: #F92672}.ace-quad-dark .ace_punctuation,.ace-quad-dark .ace_punctuation.ace_tag {color: #fff}.ace-quad-dark .ace_constant.ace_character,.ace-quad-dark .ace_constant.ace_language,.ace-quad-dark .ace_constant.ace_numeric,.ace-quad-dark .ace_constant.ace_other {color: #AE81FF}.ace-quad-dark .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-quad-dark .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-quad-dark .ace_support.ace_constant,.ace-quad-dark .ace_support.ace_function {color: #66D9EF}.ace-quad-dark .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-quad-dark .ace_storage.ace_type,.ace-quad-dark .ace_support.ace_class,.ace-quad-dark .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-quad-dark .ace_entity.ace_name.ace_function,.ace-quad-dark .ace_entity.ace_other,.ace-quad-dark .ace_entity.ace_other.ace_attribute-name,.ace-quad-dark .ace_variable {color: #A6E22E}.ace-quad-dark .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-quad-dark .ace_string {color: #E6DB74}.ace-quad-dark .ace_comment {color: #75715E}.ace-quad-dark .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)});
                (function() {
                    window.require(["ace/theme/quad_dark"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            