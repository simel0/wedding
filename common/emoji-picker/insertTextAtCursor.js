let browserSupportsTextareaTextNodes;function canManipulateViaTextNodes(e){if("TEXTAREA"!==e.nodeName)return!1;if(void 0===browserSupportsTextareaTextNodes){const e=document.createElement("textarea");e.value=1,browserSupportsTextareaTextNodes=!!e.firstChild}return browserSupportsTextareaTextNodes}var insertTextAtCursor=function(e,t){if(e.focus(),document.selection){const e=document.selection.createRange();return e.text=t,e.collapse(!1),void e.select()}if(!document.execCommand("insertText",!1,t)){var n=e.selectionStart,o=e.selectionEnd;if("function"==typeof e.setRangeText)e.setRangeText(t);else{const r=document.createRange();var a=document.createTextNode(t);if(canManipulateViaTextNodes(e)){let t=e.firstChild;if(t){let e=0,a=null,i=null;for(;t&&(null===a||null===i);){var s=t.nodeValue.length;n>=e&&n<=e+s&&r.setStart(a=t,n-e),o>=e&&o<=e+s&&r.setEnd(i=t,o-e),e+=s,t=t.nextSibling}n!==o&&r.deleteContents()}else e.appendChild(a)}if(canManipulateViaTextNodes(e)&&"#text"===r.commonAncestorContainer.nodeName)r.insertNode(a);else{const a=e.value;e.value=a.slice(0,n)+t+a.slice(o)}}e.setSelectionRange(n+t.length,n+t.length);const r=document.createEvent("UIEvent");r.initEvent("input",!0,!1),e.dispatchEvent(r)}};