(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1ed0"],{"47b9":function(e,t,n){"use strict";n.r(t);var r,i,o,a,u,s,c,d,f,l,g,h,p,m,v,b=12e4,k=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return t._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return t._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){if(this._worker){var e=Date.now()-this._lastUsedTime;e>b&&this._stopWorker()}},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then(function(t){e=t}).then(function(e){return t._worker.withSyncedResources(n)}).then(function(t){return e})},e}();(function(e){function t(e,t){return{line:e,character:t}}function n(e){var t=e;return J.objectLiteral(t)&&J.number(t.line)&&J.number(t.character)}e.create=t,e.is=n})(r||(r={})),function(e){function t(e,t,n,i){if(J.number(e)&&J.number(t)&&J.number(n)&&J.number(i))return{start:r.create(e,t),end:r.create(n,i)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+i+"]")}function n(e){var t=e;return J.objectLiteral(t)&&r.is(t.start)&&r.is(t.end)}e.create=t,e.is=n}(i||(i={})),function(e){function t(e,t){return{uri:e,range:t}}function n(e){var t=e;return J.defined(t)&&i.is(t.range)&&(J.string(t.uri)||J.undefined(t.uri))}e.create=t,e.is=n}(o||(o={})),function(e){function t(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}}function n(e){var t=e;return J.number(t.red)&&J.number(t.green)&&J.number(t.blue)&&J.number(t.alpha)}e.create=t,e.is=n}(a||(a={})),function(e){function t(e,t){return{range:e,color:t}}function n(e){var t=e;return i.is(t.range)&&a.is(t.color)}e.create=t,e.is=n}(u||(u={})),function(e){function t(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}}function n(e){var t=e;return J.string(t.label)&&(J.undefined(t.textEdit)||p.is(t))&&(J.undefined(t.additionalTextEdits)||J.typedArray(t.additionalTextEdits,p.is))}e.create=t,e.is=n}(s||(s={})),function(e){e["Comment"]="comment",e["Imports"]="imports",e["Region"]="region"}(c||(c={})),function(e){function t(e,t,n,r,i){var o={startLine:e,endLine:t};return J.defined(n)&&(o.startCharacter=n),J.defined(r)&&(o.endCharacter=r),J.defined(i)&&(o.kind=i),o}function n(e){var t=e;return J.number(t.startLine)&&J.number(t.startLine)&&(J.undefined(t.startCharacter)||J.number(t.startCharacter))&&(J.undefined(t.endCharacter)||J.number(t.endCharacter))&&(J.undefined(t.kind)||J.string(t.kind))}e.create=t,e.is=n}(d||(d={})),function(e){function t(e,t){return{location:e,message:t}}function n(e){var t=e;return J.defined(t)&&o.is(t.location)&&J.string(t.message)}e.create=t,e.is=n}(f||(f={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(l||(l={})),function(e){function t(e,t,n,r,i,o){var a={range:e,message:t};return J.defined(n)&&(a.severity=n),J.defined(r)&&(a.code=r),J.defined(i)&&(a.source=i),J.defined(o)&&(a.relatedInformation=o),a}function n(e){var t=e;return J.defined(t)&&i.is(t.range)&&J.string(t.message)&&(J.number(t.severity)||J.undefined(t.severity))&&(J.number(t.code)||J.string(t.code)||J.undefined(t.code))&&(J.string(t.source)||J.undefined(t.source))&&(J.undefined(t.relatedInformation)||J.typedArray(t.relatedInformation,f.is))}e.create=t,e.is=n}(g||(g={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return J.defined(n)&&n.length>0&&(i.arguments=n),i}function n(e){var t=e;return J.defined(t)&&J.string(t.title)&&J.string(t.command)}e.create=t,e.is=n}(h||(h={})),function(e){function t(e,t){return{range:e,newText:t}}function n(e,t){return{range:{start:e,end:e},newText:t}}function r(e){return{range:e,newText:""}}function o(e){var t=e;return J.objectLiteral(t)&&J.string(t.newText)&&i.is(t.range)}e.replace=t,e.insert=n,e.del=r,e.is=o}(p||(p={})),function(e){function t(e,t){return{textDocument:e,edits:t}}function n(e){var t=e;return J.defined(t)&&w.is(t.textDocument)&&Array.isArray(t.edits)}e.create=t,e.is=n}(m||(m={})),function(e){function t(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||J.typedArray(t.documentChanges,m.is))}e.is=t}(v||(v={}));var y,w,C,_,x,E,S,I,A,T,M,P,j,F,R,O,L,D=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(p.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(p.replace(e,t))},e.prototype.delete=function(e){this.edits.push(p.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();(function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){var n=new D(e.edits);t._textEditChanges[e.textDocument.uri]=n}):e.changes&&Object.keys(e.changes).forEach(function(n){var r=new D(e.changes[n]);t._textEditChanges[n]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(w.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e,n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new D(r),this._textEditChanges[t.uri]=n}return n}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");n=this._textEditChanges[e];if(!n){r=[];this._workspaceEdit.changes[e]=r,n=new D(r),this._textEditChanges[e]=n}return n}})();(function(e){function t(e){return{uri:e}}function n(e){var t=e;return J.defined(t)&&J.string(t.uri)}e.create=t,e.is=n})(y||(y={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return J.defined(t)&&J.string(t.uri)&&J.number(t.version)}e.create=t,e.is=n}(w||(w={})),function(e){function t(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}}function n(e){var t=e;return J.defined(t)&&J.string(t.uri)&&J.string(t.languageId)&&J.number(t.version)&&J.string(t.text)}e.create=t,e.is=n}(C||(C={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(_||(_={})),function(e){function t(t){var n=t;return n===e.PlainText||n===e.Markdown}e.is=t}(_||(_={})),function(e){function t(e){var t=e;return J.objectLiteral(e)&&_.is(t.kind)&&J.string(t.value)}e.is=t}(x||(x={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(E||(E={})),function(e){e.PlainText=1,e.Snippet=2}(S||(S={})),function(e){function t(e){return{label:e}}e.create=t}(I||(I={})),function(e){function t(e,t){return{items:e||[],isIncomplete:!!t}}e.create=t}(A||(A={})),function(e){function t(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function n(e){var t=e;return J.string(t)||J.objectLiteral(t)&&J.string(t.language)&&J.string(t.value)}e.fromPlainText=t,e.is=n}(T||(T={})),function(e){function t(e){var t=e;return J.objectLiteral(t)&&(x.is(t.contents)||T.is(t.contents)||J.typedArray(t.contents,T.is))&&(void 0===e.range||i.is(e.range))}e.is=t}(M||(M={})),function(e){function t(e,t){return t?{label:e,documentation:t}:{label:e}}e.create=t}(P||(P={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return J.defined(t)&&(i.documentation=t),J.defined(n)?i.parameters=n:i.parameters=[],i}e.create=t}(j||(j={})),function(e){e.Text=1,e.Read=2,e.Write=3}(F||(F={})),function(e){function t(e,t){var n={range:e};return J.number(t)&&(n.kind=t),n}e.create=t}(R||(R={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(O||(O={})),function(e){function t(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}e.create=t}(L||(L={}));var W,N,V,K,U,z=function(){function e(){}return e}();(function(e){function t(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function n(e){var t=e;return t&&J.string(t.name)&&J.number(t.kind)&&i.is(t.range)&&i.is(t.selectionRange)&&(void 0===t.detail||J.string(t.detail))&&(void 0===t.deprecated||J.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))}e.create=t,e.is=n})(z||(z={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(W||(W={})),function(e){function t(e,t){var n={diagnostics:e};return void 0!==t&&null!==t&&(n.only=t),n}function n(e){var t=e;return J.defined(t)&&J.typedArray(t.diagnostics,g.is)&&(void 0===t.only||J.typedArray(t.only,J.string))}e.create=t,e.is=n}(N||(N={})),function(e){function t(e,t,n){var r={title:e};return h.is(t)?r.command=t:r.edit=t,void 0!==n&&(r.kind=n),r}function n(e){var t=e;return t&&J.string(t.title)&&(void 0===t.diagnostics||J.typedArray(t.diagnostics,g.is))&&(void 0===t.kind||J.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||h.is(t.command))&&(void 0===t.edit||v.is(t.edit))}e.create=t,e.is=n}(V||(V={})),function(e){function t(e,t){var n={range:e};return J.defined(t)&&(n.data=t),n}function n(e){var t=e;return J.defined(t)&&i.is(t.range)&&(J.undefined(t.command)||h.is(t.command))}e.create=t,e.is=n}(K||(K={})),function(e){function t(e,t){return{tabSize:e,insertSpaces:t}}function n(e){var t=e;return J.defined(t)&&J.number(t.tabSize)&&J.boolean(t.insertSpaces)}e.create=t,e.is=n}(U||(U={}));var H=function(){function e(){}return e}();(function(e){function t(e,t,n){return{range:e,target:t,data:n}}function n(e){var t=e;return J.defined(t)&&i.is(t.range)&&(J.undefined(t.target)||J.string(t.target))}e.create=t,e.is=n})(H||(H={}));var q,B;(function(e){function t(e,t,n,r){return new $(e,t,n,r)}function n(e){var t=e;return!!(J.defined(t)&&J.string(t.uri)&&(J.undefined(t.languageId)||J.string(t.languageId))&&J.number(t.lineCount)&&J.func(t.getText)&&J.func(t.positionAt)&&J.func(t.offsetAt))}function r(e,t){for(var n=e.getText(),r=i(t,function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n}),o=n.length,a=r.length-1;a>=0;a--){var u=r[a],s=e.offsetAt(u.range.start),c=e.offsetAt(u.range.end);if(!(c<=o))throw new Error("Ovelapping edit");n=n.substring(0,s)+u.newText+n.substring(c,n.length),o=s}return n}function i(e,t){if(e.length<=1)return e;var n=e.length/2|0,r=e.slice(0,n),o=e.slice(n);i(r,t),i(o,t);var a=0,u=0,s=0;while(a<r.length&&u<o.length){var c=t(r[a],o[u]);e[s++]=c<=0?r[a++]:o[u++]}while(a<r.length)e[s++]=r[a++];while(u<o.length)e[s++]=o[u++];return e}e.create=t,e.is=n,e.applyEdits=r})(q||(q={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(B||(B={}));var J,$=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,i=t.length;if(0===i)return r.create(0,e);while(n<i){var o=Math.floor((n+i)/2);t[o]>e?i=o:n=o+1}var a=n-1;return r.create(a,e-t[a])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();(function(e){var t=Object.prototype.toString;function n(e){return"undefined"!==typeof e}function r(e){return"undefined"===typeof e}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===t.call(e)}function a(e){return"[object Number]"===t.call(e)}function u(e){return"[object Function]"===t.call(e)}function s(e){return null!==e&&"object"===typeof e}function c(e,t){return Array.isArray(e)&&e.every(t)}e.defined=n,e.undefined=r,e.boolean=i,e.string=o,e.number=a,e.func=u,e.objectLiteral=s,e.typedArray=c})(J||(J={}));monaco.Uri;var Q=monaco.Range,G=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var i=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return r._doValidate(e.uri,n)},500)}),r._doValidate(e.uri,n))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e),r._resetSchema(e.uri)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model),r._resetSchema(e.model.uri)})),this._disposables.push(n.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){for(var e in monaco.editor.getModels().forEach(o),r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then(function(t){t.resetSchema(e.toString())})},e.prototype._doValidate=function(e,t){this._worker(e).then(function(n){return n.doValidation(e.toString()).then(function(n){var r=n.map(function(t){return Y(e,t)}),i=monaco.editor.getModel(e);i.getModeId()===t&&monaco.editor.setModelMarkers(i,t,r)})}).then(void 0,function(e){console.error(e)})},e}();function X(e){switch(e){case l.Error:return monaco.MarkerSeverity.Error;case l.Warning:return monaco.MarkerSeverity.Warning;case l.Information:return monaco.MarkerSeverity.Info;case l.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function Y(e,t){var n="number"===typeof t.code?String(t.code):t.code;return{severity:X(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}function Z(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ee(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function te(e){if(e)return new Q(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ne(e){var t=monaco.languages.CompletionItemKind;switch(e){case E.Text:return t.Text;case E.Method:return t.Method;case E.Function:return t.Function;case E.Constructor:return t.Constructor;case E.Field:return t.Field;case E.Variable:return t.Variable;case E.Class:return t.Class;case E.Interface:return t.Interface;case E.Module:return t.Module;case E.Property:return t.Property;case E.Unit:return t.Unit;case E.Value:return t.Value;case E.Enum:return t.Enum;case E.Keyword:return t.Keyword;case E.Snippet:return t.Snippet;case E.Color:return t.Color;case E.File:return t.File;case E.Reference:return t.Reference}return t.Property}function re(e){if(e)return{range:te(e.range),text:e.newText}}var ie=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n,r){e.getWordUntilPosition(t);var i=e.uri;return this._worker(i).then(function(e){return e.doComplete(i.toString(),Z(t))}).then(function(e){if(e){var t=e.items.map(function(e){var t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:ne(e.kind)};return e.textEdit&&(t.range=te(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(re)),e.insertTextFormat===S.Snippet&&(t.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),t});return{isIncomplete:e.isIncomplete,suggestions:t}}})},e}();function oe(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function ae(e){return"string"===typeof e?{value:e}:oe(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function ue(e){if(e)return Array.isArray(e)?e.map(ae):[ae(e)]}var se=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.doHover(r.toString(),Z(t))}).then(function(e){if(e)return{range:te(e.range),contents:ue(e.contents)}})},e}();function ce(e){var t=monaco.languages.SymbolKind;switch(e){case O.File:return t.Array;case O.Module:return t.Module;case O.Namespace:return t.Namespace;case O.Package:return t.Package;case O.Class:return t.Class;case O.Method:return t.Method;case O.Property:return t.Property;case O.Field:return t.Field;case O.Constructor:return t.Constructor;case O.Enum:return t.Enum;case O.Interface:return t.Interface;case O.Function:return t.Function;case O.Variable:return t.Variable;case O.Constant:return t.Constant;case O.String:return t.String;case O.Number:return t.Number;case O.Boolean:return t.Boolean;case O.Array:return t.Array}return t.Function}var de=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return this._worker(n).then(function(e){return e.findDocumentSymbols(n.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:ce(e.kind),range:te(e.location.range),selectionRange:te(e.location.range)}})})},e}();function fe(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var le=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.format(r.toString(),null,fe(t)).then(function(e){if(e&&0!==e.length)return e.map(re)})})},e}(),ge=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var i=e.uri;return this._worker(i).then(function(e){return e.format(i.toString(),ee(t),fe(n)).then(function(e){if(e&&0!==e.length)return e.map(re)})})},e}(),he=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return this._worker(n).then(function(e){return e.findDocumentColors(n.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:te(e.range)}})})},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),t.color,ee(t.range))}).then(function(e){if(e)return e.map(function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=re(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(re)),t})})},e}(),pe=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,n){var r=e.uri;return this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),t)}).then(function(e){if(e)return e.map(function(e){var t={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(t.kind=me(e.kind)),t})})},e}();function me(e){switch(e){case c.Comment:return monaco.languages.FoldingRangeKind.Comment;case c.Imports:return monaco.languages.FoldingRangeKind.Imports;case c.Region:return monaco.languages.FoldingRangeKind.Region}}function ve(e,t){void 0===t&&(t=!1);var n=0,r=e.length,i="",o=0,a=16,u=0;function s(t,r){var i=0,o=0;while(i<t||!r){var a=e.charCodeAt(n);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}n++,i++}return i<t&&(o=-1),o}function c(e){n=e,i="",o=0,a=16,u=0}function d(){var t=n;if(48===e.charCodeAt(n))n++;else{n++;while(n<e.length&&ye(e.charCodeAt(n)))n++}if(n<e.length&&46===e.charCodeAt(n)){if(n++,!(n<e.length&&ye(e.charCodeAt(n))))return u=3,e.substring(t,n);n++;while(n<e.length&&ye(e.charCodeAt(n)))n++}var r=n;if(n<e.length&&(69===e.charCodeAt(n)||101===e.charCodeAt(n)))if(n++,(n<e.length&&43===e.charCodeAt(n)||45===e.charCodeAt(n))&&n++,n<e.length&&ye(e.charCodeAt(n))){n++;while(n<e.length&&ye(e.charCodeAt(n)))n++;r=n}else u=3;return e.substring(t,r)}function f(){var t="",i=n;while(1){if(n>=r){t+=e.substring(i,n),u=2;break}var o=e.charCodeAt(n);if(34===o){t+=e.substring(i,n),n++;break}if(92!==o){if(o>=0&&o<=31){if(ke(o)){t+=e.substring(i,n),u=2;break}u=6}n++}else{if(t+=e.substring(i,n),n++,n>=r){u=2;break}switch(o=e.charCodeAt(n++),o){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=s(4,!0);a>=0?t+=String.fromCharCode(a):u=4;break;default:u=5}i=n}}return t}function l(){if(i="",u=0,o=n,n>=r)return o=r,a=17;var t=e.charCodeAt(n);if(be(t)){do{n++,i+=String.fromCharCode(t),t=e.charCodeAt(n)}while(be(t));return a=15}if(ke(t))return n++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(n)&&(n++,i+="\n"),a=14;switch(t){case 123:return n++,a=1;case 125:return n++,a=2;case 91:return n++,a=3;case 93:return n++,a=4;case 58:return n++,a=6;case 44:return n++,a=5;case 34:return n++,i=f(),a=10;case 47:var s=n-1;if(47===e.charCodeAt(n+1)){n+=2;while(n<r){if(ke(e.charCodeAt(n)))break;n++}return i=e.substring(s,n),a=12}if(42===e.charCodeAt(n+1)){n+=2;var c=!1;while(n<r){var l=e.charCodeAt(n);if(42===l&&n+1<r&&47===e.charCodeAt(n+1)){n+=2,c=!0;break}n++}return c||(n++,u=1),i=e.substring(s,n),a=13}return i+=String.fromCharCode(t),n++,a=16;case 45:if(i+=String.fromCharCode(t),n++,n===r||!ye(e.charCodeAt(n)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=d(),a=11;default:while(n<r&&g(t))n++,t=e.charCodeAt(n);if(o!==n){switch(i=e.substring(o,n),i){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),n++,a=16}}function g(e){if(be(e)||ke(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function h(){var e;do{e=l()}while(e>=12&&e<=15);return e}return{setPosition:c,getPosition:function(){return n},scan:t?h:l,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return n-o},getTokenError:function(){return u}}}function be(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function ke(e){return 10===e||13===e||8232===e||8233===e}function ye(e){return e>=48&&e<=57}var we=ve;function Ce(e){return{getInitialState:function(){return new Re(null,null,!1)},tokenize:function(t,n,r,i){return Oe(e,t,n,r,i)}}}var _e="delimiter.bracket.json",xe="delimiter.array.json",Ee="delimiter.colon.json",Se="delimiter.comma.json",Ie="keyword.json",Ae="keyword.json",Te="string.value.json",Me="number.json",Pe="string.key.json",je="comment.block.json",Fe="comment.line.json",Re=function(){function e(e,t,n){this._state=e,this.scanError=t,this.lastWasColon=n}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&(this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}();function Oe(e,t,n,r,i){void 0===r&&(r=0);var o=0,a=!1;switch(n.scanError){case 2:t='"'+t,o=1;break;case 1:t="/*"+t,o=2;break}var u,s,c=we(t),d=n.lastWasColon;s={tokens:[],endState:n.clone()};while(1){var f=r+c.getPosition(),l="";if(u=c.scan(),17===u)break;if(f===r+c.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(c.getPosition(),3));switch(a&&(f-=o),a=o>0,u){case 1:l=_e,d=!1;break;case 2:l=_e,d=!1;break;case 3:l=xe,d=!1;break;case 4:l=xe,d=!1;break;case 6:l=Ee,d=!0;break;case 5:l=Se,d=!1;break;case 8:case 9:l=Ie,d=!1;break;case 7:l=Ae,d=!1;break;case 10:l=d?Te:Pe,d=!1;break;case 11:l=Me,d=!1;break}if(e)switch(u){case 12:l=Fe;break;case 13:l=je;break}s.endState=new Re(n.getStateData(),c.getTokenError(),d),s.tokens.push({startIndex:f,scopes:l})}return s}function Le(e){var t=[],n=new k(e);t.push(n);var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},i=e.languageId;t.push(monaco.languages.registerCompletionItemProvider(i,new ie(r))),t.push(monaco.languages.registerHoverProvider(i,new se(r))),t.push(monaco.languages.registerDocumentSymbolProvider(i,new de(r))),t.push(monaco.languages.registerDocumentFormattingEditProvider(i,new le(r))),t.push(monaco.languages.registerDocumentRangeFormattingEditProvider(i,new ge(r))),t.push(new G(i,r,e)),t.push(monaco.languages.setTokensProvider(i,Ce(!0))),t.push(monaco.languages.setLanguageConfiguration(i,De)),t.push(monaco.languages.registerColorProvider(i,new he(r))),t.push(monaco.languages.registerFoldingRangeProvider(i,new pe(r)))}n.d(t,"setupMode",function(){return Le});var De={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);
//# sourceMappingURL=chunk-2d0c1ed0.23f7793b.js.map