Ext.data.JsonP.GeoExt_data_model_Layer({"tagname":"class","name":"GeoExt.data.model.Layer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Layer.js","href":"Layer2.html#GeoExt-data-model-Layer"}],"aliases":{},"alternateClassNames":[],"extends":"GeoExt.data.model.Base","mixins":["GeoExt.mixin.SymbolCheck"],"requires":[],"uses":[],"members":[{"name":"descriptionProperty","tagname":"cfg","owner":"GeoExt.data.model.Layer","id":"cfg-descriptionProperty","meta":{}},{"name":"textProperty","tagname":"cfg","owner":"GeoExt.data.model.Layer","id":"cfg-textProperty","meta":{}},{"name":"unnamedGroupLayerText","tagname":"cfg","owner":"GeoExt.data.model.Layer","id":"cfg-unnamedGroupLayerText","meta":{}},{"name":"unnamedLayerText","tagname":"cfg","owner":"GeoExt.data.model.Layer","id":"cfg-unnamedLayerText","meta":{}},{"name":"fields","tagname":"property","owner":"GeoExt.data.model.Layer","id":"property-fields","meta":{"private":true}},{"name":"identifier","tagname":"property","owner":"GeoExt.data.model.Base","id":"property-identifier","meta":{"private":true}},{"name":"proxy","tagname":"property","owner":"GeoExt.data.model.Layer","id":"property-proxy","meta":{"private":true}},{"name":"schema","tagname":"property","owner":"GeoExt.data.model.Base","id":"property-schema","meta":{"private":true}},{"name":"symbols","tagname":"property","owner":"GeoExt.data.model.Layer","id":"property-symbols","meta":{}},{"name":"_checked","tagname":"property","owner":"GeoExt.mixin.SymbolCheck","id":"static-property-_checked","meta":{"private":true,"static":true}},{"name":"getOlLayer","tagname":"method","owner":"GeoExt.data.model.Layer","id":"method-getOlLayer","meta":{}},{"name":"getOlLayerProp","tagname":"method","owner":"GeoExt.data.model.Layer","id":"method-getOlLayerProp","meta":{}},{"name":"onClassMixedIn","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"method-onClassMixedIn","meta":{"private":true}},{"name":"check","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-check","meta":{"static":true}},{"name":"checkSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-checkSymbol","meta":{"private":true,"static":true}},{"name":"isDefinedSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-isDefinedSymbol","meta":{"private":true,"static":true}},{"name":"loadRawData","tagname":"method","owner":"GeoExt.data.model.Base","id":"static-method-loadRawData","meta":{"static":true}},{"name":"normalizeSymbol","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"static-method-normalizeSymbol","meta":{"private":true,"static":true}}],"code_type":"ext_define","id":"class-GeoExt.data.model.Layer","component":false,"superclasses":["Ext.data.Model","GeoExt.data.model.Base"],"subclasses":["GeoExt.data.model.LayerTreeNode"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><a href='#!/api/GeoExt.data.model.Base' rel='GeoExt.data.model.Base' class='docClass'>GeoExt.data.model.Base</a><div class='subclass '><strong>GeoExt.data.model.Layer</strong></div></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='docClass'>GeoExt.mixin.SymbolCheck</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/GeoExt.data.model.LayerTreeNode' rel='GeoExt.data.model.LayerTreeNode' class='docClass'>GeoExt.data.model.LayerTreeNode</a></div><h4>Files</h4><div class='dependency'><a href='source/Layer2.html#GeoExt-data-model-Layer' target='_blank'>Layer.js</a></div></pre><div class='doc-contents'><p>The layer model class used by the stores.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-descriptionProperty' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-cfg-descriptionProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-cfg-descriptionProperty' class='name expandable'>descriptionProperty</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The layer property that will be used to describe the model in views. ...</div><div class='long'><p>The layer property that will be used to describe the model in views.</p>\n<p>Defaults to: <code>&#39;description&#39;</code></p></div></div></div><div id='cfg-textProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-cfg-textProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-cfg-textProperty' class='name expandable'>textProperty</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The layer property that will be used to label the model in views. ...</div><div class='long'><p>The layer property that will be used to label the model in views.</p>\n<p>Defaults to: <code>&#39;name&#39;</code></p></div></div></div><div id='cfg-unnamedGroupLayerText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-cfg-unnamedGroupLayerText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-cfg-unnamedGroupLayerText' class='name expandable'>unnamedGroupLayerText</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The text label that will be shown in model views representing unnamed\ngroup layers. ...</div><div class='long'><p>The text label that will be shown in model views representing unnamed\ngroup layers.</p>\n<p>Defaults to: <code>&#39;Unnamed Group Layer&#39;</code></p></div></div></div><div id='cfg-unnamedLayerText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-cfg-unnamedLayerText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-cfg-unnamedLayerText' class='name expandable'>unnamedLayerText</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The text label that will be shown in model views representing unnamed\nlayers. ...</div><div class='long'><p>The text label that will be shown in model views representing unnamed\nlayers.</p>\n<p>Defaults to: <code>&#39;Unnamed Layer&#39;</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-fields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-property-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-property-fields' class='name expandable'>fields</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-identifier' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.model.Base' rel='GeoExt.data.model.Base' class='defined-in docClass'>GeoExt.data.model.Base</a><br/><a href='source/Base2.html#GeoExt-data-model-Base-property-identifier' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Base-property-identifier' class='name expandable'>identifier</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;uuid&#39;</code></p></div></div></div><div id='property-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-property-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-property-proxy' class='name expandable'>proxy</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: &#39;memory&#39;, reader: {type: &#39;json&#39;}}</code></p></div></div></div><div id='property-schema' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.model.Base' rel='GeoExt.data.model.Base' class='defined-in docClass'>GeoExt.data.model.Base</a><br/><a href='source/Base2.html#GeoExt-data-model-Base-property-schema' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Base-property-schema' class='name expandable'>schema</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{id: &#39;geoext-schema&#39;, namespace: &#39;GeoExt.data.model&#39;}</code></p></div></div></div><div id='property-symbols' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-property-symbols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-property-symbols' class='name expandable'>symbols</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'><p><debug></p>\n<p>Defaults to: <code>[&#39;ol.layer.Group&#39;, &#39;ol.layer.Base&#39;, &#39;ol.layer.Base#get&#39;]</code></p><p>Overrides: <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">GeoExt.mixin.SymbolCheck.symbols</a></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-_checked' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-property-_checked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-property-_checked' class='name expandable'>_checked</a> : Object<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>An object that we will use to store already looked up references in. ...</div><div class='long'><p>An object that we will use to store already looked up references in.</p>\n\n<p>The key will be a symbol (after it has been normalized by the\nmethod <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalizeSymbol</a>), and the value will be a boolean indicating\nif the symbol was found to be defined when it was checked.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-getOlLayer' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-method-getOlLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-method-getOlLayer' class='name expandable'>getOlLayer</a>( <span class='pre'></span> ) : ol.layer.Base<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the ol.layer.Base object used in this model instance. ...</div><div class='long'><p>Returns the <code>ol.layer.Base</code> object used in this model instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Base</span><div class='sub-desc'><p>The <code>ol.layer.Base</code> object.</p>\n</div></li></ul></div></div></div><div id='method-getOlLayerProp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Layer'>GeoExt.data.model.Layer</span><br/><a href='source/Layer2.html#GeoExt-data-model-Layer-method-getOlLayerProp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Layer-method-getOlLayerProp' class='name expandable'>getOlLayerProp</a>( <span class='pre'>prop, defaultValue</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a property value of the ol.layer.Base object used in this model\ninstance. ...</div><div class='long'><p>Returns a property value of the <code>ol.layer.Base</code> object used in this model\ninstance. If the property is null, the optional default value will  be\nreturned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prop</span> : string<div class='sub-desc'><p>The property key.</p>\n</div></li><li><span class='pre'>defaultValue</span> : Object<div class='sub-desc'><p>The optional default value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The returned property.</p>\n</div></li></ul></div></div></div><div id='method-onClassMixedIn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-method-onClassMixedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-method-onClassMixedIn' class='name expandable'>onClassMixedIn</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Whenever a class mixes in GeoExt.mixin.SymbolCheck, this method will be\ncalled and it actually runs the checks for al...</div><div class='long'><p>Whenever a class mixes in <a href=\"#!/api/GeoExt.mixin.SymbolCheck\" rel=\"GeoExt.mixin.SymbolCheck\" class=\"docClass\">GeoExt.mixin.SymbolCheck</a>, this method will be\ncalled and it actually runs the checks for all the defined <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">symbols</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Class<div class='sub-desc'><p>The class that this mixin is mixed into.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-check' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-check' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-check' class='name expandable'>check</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks whether the required symbols of the given class are defined\nin the global context. ...</div><div class='long'><p>Checks whether the required symbols of the given class are defined\nin the global context. Will log to the console if a symbol cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Base<div class='sub-desc'><p>An ext class defining a property <code>symbols</code> that\n    that this method will check.</p>\n</div></li></ul></div></div></div><div id='static-method-checkSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-checkSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-checkSymbol' class='name expandable'>checkSymbol</a>( <span class='pre'>symbolStr, [clsName]</span> )<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks the passed symbolStr and raises a warning if it cannot be\nfound. ...</div><div class='long'><p>Checks the passed symbolStr and raises a warning if it cannot be\nfound.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li><li><span class='pre'>clsName</span> : String (optional)<div class='sub-desc'><p>The optional name of the class that\n    requires the passed openlayers symbol.</p>\n</div></li></ul></div></div></div><div id='static-method-isDefinedSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-isDefinedSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol' class='name expandable'>isDefinedSymbol</a>( <span class='pre'>symbolStr</span> ) : Boolean<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Checks if the passed symbolStr is defined. ...</div><div class='long'><p>Checks if the passed symbolStr is defined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to check. Usually this string has\n    been <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol\" class=\"docClass\">normalized</a> already.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the symbol is defined or not.</p>\n</div></li></ul></div></div></div><div id='static-method-loadRawData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.model.Base' rel='GeoExt.data.model.Base' class='defined-in docClass'>GeoExt.data.model.Base</a><br/><a href='source/Base2.html#GeoExt-data-model-Base-static-method-loadRawData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Base-static-method-loadRawData' class='name expandable'>loadRawData</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/GeoExt.data.model.Base\" rel=\"GeoExt.data.model.Base\" class=\"docClass\">GeoExt.data.model.Base</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Loads a record from a provided data structure initializing the models\nassociations. ...</div><div class='long'><p>Loads a record from a provided data structure initializing the models\nassociations. Simply calling Ext.create will not utilize the models\nconfigured reader and effectivly sidetrack associations configs.\nThis static helper method makes sure associations are initialized\nproperly and are available with the returned record.</p>\n\n<p>Be aware that the provided data may be modified by the models reader\ninitializing associations.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data the record will be created with.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.model.Base\" rel=\"GeoExt.data.model.Base\" class=\"docClass\">GeoExt.data.model.Base</a></span><div class='sub-desc'><p>The record.</p>\n</div></li></ul></div></div></div><div id='static-method-normalizeSymbol' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-static-method-normalizeSymbol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-static-method-normalizeSymbol' class='name expandable'>normalizeSymbol</a>( <span class='pre'>symbolStr</span> ) : String<span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the isDefinedSymbol method. ...</div><div class='long'><p>Normalizes a short form of a symbol to a canonical one we use to\nstore the results of the <a href=\"#!/api/GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" rel=\"GeoExt.mixin.SymbolCheck-static-method-isDefinedSymbol\" class=\"docClass\">isDefinedSymbol</a> method. The following two\nnormalizations take place:</p>\n\n<ul>\n<li>A <code>#</code> in the symbol is being replaced with <code>.prototype.</code> so that\ne.g. the symbol <code>'ol.Class#methodName'</code> turns into the symbol\n<code>'ol.Class.prototype.methodName'</code></li>\n<li>A <code>::</code> in the symbol is being replaced with <code>.</code> so that\ne.g. the symbol <code>'ol.Class::staticMethodName'</code> turns into the\nsymbol <code>'ol.Class.staticMethodName'</code></li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>symbolStr</span> : String<div class='sub-desc'><p>A string to normalize.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The normalized string.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});