(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{401:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"條件判斷與列表渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#條件判斷與列表渲染"}},[t._v("#")]),t._v(" 條件判斷與列表渲染")]),t._v(" "),a("h2",{attrs:{id:"條件判斷-v-if-v-show"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#條件判斷-v-if-v-show"}},[t._v("#")]),t._v(" 條件判斷 v-if / v-show")]),t._v(" "),a("h3",{attrs:{id:"v-if-與-key-屬性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if-與-key-屬性"}},[t._v("#")]),t._v(" v-if 與 key 屬性")]),t._v(" "),a("p",[t._v("Vue.js 為了提高網頁渲染的效率，會選擇 "),a("strong",[t._v("重複利用")]),t._v(" 已經存在的元素而不是重新渲染。\n這樣的做法確實能提高效能，不過在某些場景下可能會出現問題，例如：")]),t._v(" "),a("TryBox",[a("basic-condition-IfNoKey")],1),t._v(" "),a("p",[t._v("可以試著在輸入框輸入幾個字，再切換 "),a("code",[t._v("radio")]),t._v(" 選項，會發現雖然在模板是兩組不同的 "),a("code",[t._v("input")]),t._v(" 輸入框，單文字卻被保留下來了。")]),t._v(" "),a("p",[t._v("若要排除這個問題，只需要針對不同的表單元素加上 "),a("code",[t._v("key")]),t._v(" 屬性來表示：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("type === 'userName'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form-title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("User Name"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Enter your user name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form-title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Email"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Enter your email address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("TryBox",[a("basic-condition-IfWithKey")],1),t._v(" "),a("p",[t._v("Vue.js 的 "),a("code",[t._v("v-if")]),t._v(" 會根據 "),a("code",[t._v("key")]),t._v(" 屬性的內容是否相同來決定是否重新渲染元素，\n若是透過 "),a("code",[t._v("v-show")]),t._v(" 指令來切換，則無須加上 "),a("code",[t._v("key")]),t._v(" 屬性，因為兩個元素一直都存在，沒有重新渲染的問題。")]),t._v(" "),a("h3",{attrs:{id:"v-if-和-v-show-的比較"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-if-和-v-show-的比較"}},[t._v("#")]),t._v(" v-if 和 v-show 的比較")]),t._v(" "),a("p",[t._v("若對應的指定的 DOM (或組件) 的 "),a("strong",[t._v("狀態需要被保留")]),t._v("，且狀態可能 "),a("strong",[t._v("頻繁更動")]),t._v(" 時，用 "),a("code",[t._v("v-show")]),t._v(" 會比 "),a("code",[t._v("v-if")]),t._v(" 更適合，\n且由於 DOM 不會被動態增加或刪減，執行時的效能更好。")]),t._v(" "),a("p",[t._v("另一方面，當條件判斷式的結果幾乎不變的時候，則建議使用 "),a("code",[t._v("v-if")]),t._v("。\n像是用來判斷使用者登入與否的區塊，這種情況下，更理想的做法是減少元素的數量來降低瀏覽器渲染成本，無須將不相關的 DOM 節點全部生成。")]),t._v(" "),a("h2",{attrs:{id:"列表渲染-v-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染-v-for"}},[t._v("#")]),t._v(" 列表渲染 v-for")]),t._v(" "),a("p",[t._v("與 "),a("code",[t._v("v-if")]),t._v(" 一樣，"),a("code",[t._v("v-for")]),t._v(" 為了提高網頁渲染的效率，會選擇重複利用已經存在的元素而不是重新渲染。\n換句話說，當陣列的順序被改變時， Vue.js 不會移動實際 DOM 的節點，而是更新現有的 DOM 內容。")]),t._v(" "),a("p",[t._v("但是當 "),a("code",[t._v("v-for")]),t._v(" 內部含有子組件或表單元素的時候，這個時候要是沒有加上 "),a("code",[t._v("key")]),t._v(" 屬性，就可能會出現一些不可預期的錯誤。如下的 todo list 範例：")]),t._v(" "),a("TryBox",[a("basic-condition-ForNoKey")],1),t._v(" "),a("p",[t._v("如果勾選 Todo list 的選項 2 時，會發現 Todo list 的選項 3 也被勾起來。")]),t._v(" "),a("p",[t._v("因為對 Todo list 來說，長度減一，所以對應的元素少了一個，原本在選項 2 的文字更新，但 "),a("code",[t._v("checkbox")]),t._v(" 卻拿來重複使用。")]),t._v(" "),a("p",[t._v("若是要解決這個問題，只要加個「"),a("strong",[t._v("唯一的")]),t._v("」 "),a("code",[t._v("key")]),t._v(" 屬性作為識別，即可確保畫面的重新渲染：")]),t._v(" "),a("TryBox",[a("basic-condition-ForWithKey")],1),t._v(" "),a("h3",{attrs:{id:"v-for-裡的-index-是否可以當作-key-來使用呢？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-for-裡的-index-是否可以當作-key-來使用呢？"}},[t._v("#")]),t._v(" v-for 裡的 index 是否可以當作 key 來使用呢？")]),t._v(" "),a("p",[t._v("答案是 "),a("strong",[t._v("不適合")]),t._v("，由於 "),a("code",[t._v("v-for")]),t._v(" 裡的 "),a("code",[t._v("index")]),t._v(" 是隨著陣列而生成的，\n換句話說，當 "),a("code",[t._v("index")]),t._v(" 沒變的時候，對 Vue.js 來說，它就是一個可以重複使用的元素 (或組件)。")]),t._v(" "),a("p",[t._v("這個時候，即使我們為 "),a("code",[t._v("v-for")]),t._v(" 加上了 "),a("code",[t._v("key")]),t._v(" 屬性，它的作用也會跟沒加一樣。")]),t._v(" "),a("h2",{attrs:{id:"陣列的內容變更，畫面為何沒更新？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#陣列的內容變更，畫面為何沒更新？"}},[t._v("#")]),t._v(" 陣列的內容變更，畫面為何沒更新？")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    book"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由於 book.title 並未重新指定 (re-assigned)")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以不會觸發 setter function，但陣列內容被更新了")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'好棒棒'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 這樣也不會觸發 setter function")]),t._v("\n      book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'好棒棒'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("此時我們發現，只要 "),a("code",[t._v("book.title")]),t._v(" 在沒有被重新賦值的情況下， "),a("code",[t._v("setter")]),t._v(" 是不會被觸發的。")]),t._v(" "),a("p",[t._v("Vue.js 的開發團隊針對了 JavaScript 陣列的幾種方法進行包裝改寫：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("push()")])]),t._v(" "),a("li",[a("code",[t._v("pop()")])]),t._v(" "),a("li",[a("code",[t._v("shift()")])]),t._v(" "),a("li",[a("code",[t._v("unshift()")])]),t._v(" "),a("li",[a("code",[t._v("splice()")])]),t._v(" "),a("li",[a("code",[t._v("sort()")])]),t._v(" "),a("li",[a("code",[t._v("reverse()")])])]),t._v(" "),a("p",[t._v("所以，當開發者呼叫上述提到的陣列中這七種方法，其實是調用被 Vue.js 攔截包裝後的方法，\n既增加了自訂的邏輯，同時也調用陣列原始的方法，所以不會對原本功能產生影響。")]),t._v(" "),a("p",[t._v("於是，在 Vue.js (2.x) 當中，透過上面幾種方法改變陣列的狀態，也會 "),a("strong",[t._v("即時")]),t._v(" 反映到畫面上了。")]),t._v(" "),a("h2",{attrs:{id:"參考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考"}},[t._v("#")]),t._v(" 參考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://book.vue.tw/CH1/1-6.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("條件判斷與列表渲染"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);s.default=e.exports}}]);