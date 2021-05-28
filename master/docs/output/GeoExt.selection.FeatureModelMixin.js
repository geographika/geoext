Ext.data.JsonP.GeoExt_selection_FeatureModelMixin({"tagname":"class","name":"GeoExt.selection.FeatureModelMixin","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"FeatureModelMixin.js","href":"FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Mixin","mixins":[],"requires":[],"uses":[],"members":[{"name":"layer","tagname":"cfg","owner":"GeoExt.selection.FeatureModelMixin","id":"cfg-layer","meta":{}},{"name":"map","tagname":"cfg","owner":"GeoExt.selection.FeatureModelMixin","id":"cfg-map","meta":{}},{"name":"mapSelection","tagname":"cfg","owner":"GeoExt.selection.FeatureModelMixin","id":"cfg-mapSelection","meta":{}},{"name":"selectStyle","tagname":"cfg","owner":"GeoExt.selection.FeatureModelMixin","id":"cfg-selectStyle","meta":{}},{"name":"selectedFeatureAttr","tagname":"cfg","owner":"GeoExt.selection.FeatureModelMixin","id":"cfg-selectedFeatureAttr","meta":{"readonly":true}},{"name":"existingFeatStyles","tagname":"property","owner":"GeoExt.selection.FeatureModelMixin","id":"property-existingFeatStyles","meta":{"private":true}},{"name":"mapClickRegistered","tagname":"property","owner":"GeoExt.selection.FeatureModelMixin","id":"property-mapClickRegistered","meta":{"private":true}},{"name":"mixinConfig","tagname":"property","owner":"GeoExt.selection.FeatureModelMixin","id":"property-mixinConfig","meta":{"private":true}},{"name":"selectedFeatures","tagname":"property","owner":"GeoExt.selection.FeatureModelMixin","id":"property-selectedFeatures","meta":{}},{"name":"beforeSelectChange","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-beforeSelectChange","meta":{"private":true}},{"name":"bindFeatureModel","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-bindFeatureModel","meta":{"private":true}},{"name":"bindOlEvents","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-bindOlEvents","meta":{"private":true}},{"name":"getLayer","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-getLayer","meta":{}},{"name":"getMap","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-getMap","meta":{}},{"name":"getMapSelection","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-getMapSelection","meta":{}},{"name":"getRandomFid","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-getRandomFid","meta":{"private":true}},{"name":"getSelectStyle","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-getSelectStyle","meta":{}},{"name":"onConstruct","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-onConstruct","meta":{"private":true}},{"name":"onFeatureClick","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-onFeatureClick","meta":{"private":true}},{"name":"onSelectFeatAdd","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-onSelectFeatAdd","meta":{"private":true}},{"name":"onSelectFeatRemove","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-onSelectFeatRemove","meta":{"private":true}},{"name":"selectMapFeature","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-selectMapFeature","meta":{"private":true}},{"name":"setLayer","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-setLayer","meta":{}},{"name":"setMap","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-setMap","meta":{}},{"name":"setMapSelection","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-setMapSelection","meta":{}},{"name":"setSelectStyle","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-setSelectStyle","meta":{}},{"name":"unbindOlEvents","tagname":"method","owner":"GeoExt.selection.FeatureModelMixin","id":"method-unbindOlEvents","meta":{"private":true}}],"code_type":"ext_define","id":"class-GeoExt.selection.FeatureModelMixin","short_doc":"A mixin for selection model which enables automatic selection of features\nin the map when rows are selected in the gr...","component":false,"superclasses":["Ext.Mixin"],"subclasses":[],"mixedInto":["GeoExt.selection.FeatureCheckboxModel"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Mixin<div class='subclass '><strong>GeoExt.selection.FeatureModelMixin</strong></div></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/GeoExt.selection.FeatureCheckboxModel' rel='GeoExt.selection.FeatureCheckboxModel' class='docClass'>GeoExt.selection.FeatureCheckboxModel</a></div><h4>Files</h4><div class='dependency'><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin' target='_blank'>FeatureModelMixin.js</a></div></pre><div class='doc-contents'><p>A mixin for selection model which enables automatic selection of features\nin the map when rows are selected in the grid and vice-versa.</p>\n\n<p><strong>CAUTION: This class is only usable in applications using the classic\ntoolkit of ExtJS 6.</strong></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-layer' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-cfg-layer' class='name expandable'>layer</a> : ol.layer.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The connected vector layer.</p>\n</div><div class='long'><p>The connected vector layer.</p>\n</div></div></div><div id='cfg-map' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-cfg-map' class='name expandable'>map</a> : ol.Map<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The OpenLayers map we work with</p>\n</div><div class='long'><p>The OpenLayers map we work with</p>\n</div></div></div><div id='cfg-mapSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-mapSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-cfg-mapSelection' class='name expandable'>mapSelection</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Set to true to create a click handler on the map selecting a clicked\nobject in the layer. ...</div><div class='long'><p>Set to true to create a click handler on the map selecting a clicked\nobject in the <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-layer\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-layer\" class=\"docClass\">layer</a>.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-selectStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-selectStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-cfg-selectStyle' class='name expandable'>selectStyle</a> : ol.style.Style<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The default style for the selected features.</p>\n</div><div class='long'><p>The default style for the selected features.</p>\n</div></div></div><div id='cfg-selectedFeatureAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-selectedFeatureAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-cfg-selectedFeatureAttr' class='name expandable'>selectedFeatureAttr</a> : String<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The attribute key to mark an OL feature as selected. ...</div><div class='long'><p>The attribute key to mark an OL feature as selected.</p>\n<p>Defaults to: <code>&#39;gx_selected&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-existingFeatStyles' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-property-existingFeatStyles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-property-existingFeatStyles' class='name expandable'>existingFeatStyles</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Lookup to preserve existing feature styles. ...</div><div class='long'><p>Lookup to preserve existing feature styles. Used to restore feature style\nwhen select style is removed.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-mapClickRegistered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-property-mapClickRegistered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-property-mapClickRegistered' class='name expandable'>mapClickRegistered</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Indicates if a map click handler has been registered on init. ...</div><div class='long'><p>Indicates if a map click handler has been registered on init.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-mixinConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-property-mixinConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-property-mixinConfig' class='name expandable'>mixinConfig</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{after: {destroy: &#39;unbindOlEvents&#39;, bindComponent: &#39;bindFeatureModel&#39;}, before: {constructor: &#39;onConstruct&#39;, onSelectChange: &#39;beforeSelectChange&#39;}}</code></p></div></div></div><div id='property-selectedFeatures' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-property-selectedFeatures' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-property-selectedFeatures' class='name expandable'>selectedFeatures</a> : ol.Collection<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The currently selected features (<code>ol.Collection</code> containing <code>ol.Feature</code>\ninstances).</p>\n</div><div class='long'><p>The currently selected features (<code>ol.Collection</code> containing <code>ol.Feature</code>\ninstances).</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-beforeSelectChange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-beforeSelectChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-beforeSelectChange' class='name expandable'>beforeSelectChange</a>( <span class='pre'>record, isSelected</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Is called before the onSelectChange function of the parent class. ...</div><div class='long'><p>Is called before the onSelectChange function of the parent class.\nEnsures that the selected feature is added / removed to / from</p>\n\n<h1>selectedFeatures lookup object.</h1>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/GeoExt.data.model.Feature\" rel=\"GeoExt.data.model.Feature\" class=\"docClass\">GeoExt.data.model.Feature</a><div class='sub-desc'><p>Selected / deselected record</p>\n</div></li><li><span class='pre'>isSelected</span> : Boolean<div class='sub-desc'><p>Record is selected or deselected</p>\n</div></li></ul></div></div></div><div id='method-bindFeatureModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-bindFeatureModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-bindFeatureModel' class='name expandable'>bindFeatureModel</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Prepare several connected objects once the selection model is ready. ...</div><div class='long'><p>Prepare several connected objects once the selection model is ready.</p>\n</div></div></div><div id='method-bindOlEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-bindOlEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-bindOlEvents' class='name expandable'>bindOlEvents</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Binds several events on the OL objects used in this class. ...</div><div class='long'><p>Binds several events on the OL objects used in this class.</p>\n</div></div></div><div id='method-getLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-getLayer' class='name expandable'>getLayer</a>( <span class='pre'></span> ) : ol.layer.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of layer. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-layer\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-layer\" class=\"docClass\">layer</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.layer.Vector</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-getMap' class='name expandable'>getMap</a>( <span class='pre'></span> ) : ol.Map<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of map. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-map\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.Map</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMapSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-mapSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-getMapSelection' class='name expandable'>getMapSelection</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of mapSelection. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-mapSelection\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-mapSelection\" class=\"docClass\">mapSelection</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRandomFid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-getRandomFid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-getRandomFid' class='name expandable'>getRandomFid</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns a random feature ID. ...</div><div class='long'><p>Returns a random feature ID.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Random feature ID</p>\n</div></li></ul></div></div></div><div id='method-getSelectStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-selectStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-getSelectStyle' class='name expandable'>getSelectStyle</a>( <span class='pre'></span> ) : ol.style.Style<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of selectStyle. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-selectStyle\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-selectStyle\" class=\"docClass\">selectStyle</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>ol.style.Style</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onConstruct' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-onConstruct' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-onConstruct' class='name expandable'>onConstruct</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onFeatureClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-onFeatureClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-onFeatureClick' class='name expandable'>onFeatureClick</a>( <span class='pre'>evt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handles the 'singleclick' event of the map. ...</div><div class='long'><p>Handles the 'singleclick' event of the <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-map\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-map\" class=\"docClass\">map</a>.\nDetects if a feature of the connected <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-layer\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-layer\" class=\"docClass\">layer</a> has been clicked and selects\nthis feature by selecting its corresponding grid row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : ol.MapBrowserEvent<div class='sub-desc'><p>OL event object</p>\n</div></li></ul></div></div></div><div id='method-onSelectFeatAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-onSelectFeatAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-onSelectFeatAdd' class='name expandable'>onSelectFeatAdd</a>( <span class='pre'>evt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handles 'add' event of selectedFeatures. ...</div><div class='long'><p>Handles 'add' event of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-property-selectedFeatures\" rel=\"GeoExt.selection.FeatureModelMixin-property-selectedFeatures\" class=\"docClass\">selectedFeatures</a>.\nEnsures that added feature gets the <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-selectStyle\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-selectStyle\" class=\"docClass\">selectStyle</a> and preserves an\npossibly existing feature style.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : ol.Collection.Event<div class='sub-desc'><p>OL event object</p>\n</div></li></ul></div></div></div><div id='method-onSelectFeatRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-onSelectFeatRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-onSelectFeatRemove' class='name expandable'>onSelectFeatRemove</a>( <span class='pre'>evt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handles 'remove' event of selectedFeatures. ...</div><div class='long'><p>Handles 'remove' event of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-property-selectedFeatures\" rel=\"GeoExt.selection.FeatureModelMixin-property-selectedFeatures\" class=\"docClass\">selectedFeatures</a>.\nEnsures that the <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-selectStyle\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-selectStyle\" class=\"docClass\">selectStyle</a> is reset on the removed feature.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : ol.Collection.Event<div class='sub-desc'><p>OL event object</p>\n</div></li></ul></div></div></div><div id='method-selectMapFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-selectMapFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-selectMapFeature' class='name expandable'>selectMapFeature</a>( <span class='pre'>feature</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Selects / deselects a feature by triggering the corresponding actions in\nthe grid (e.g. ...</div><div class='long'><p>Selects / deselects a feature by triggering the corresponding actions in\nthe grid (e.g. selecting / deselecting a grid row).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : ol.Feature<div class='sub-desc'><p>The feature to select</p>\n</div></li></ul></div></div></div><div id='method-setLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-setLayer' class='name expandable'>setLayer</a>( <span class='pre'>layer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of layer. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-layer\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-layer\" class=\"docClass\">layer</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : ol.layer.Vector<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-map' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-setMap' class='name expandable'>setMap</a>( <span class='pre'>map</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of map. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-map\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-map\" class=\"docClass\">map</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>map</span> : ol.Map<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMapSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-mapSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-setMapSelection' class='name expandable'>setMapSelection</a>( <span class='pre'>mapSelection</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of mapSelection. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-mapSelection\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-mapSelection\" class=\"docClass\">mapSelection</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mapSelection</span> : Boolean<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setSelectStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-cfg-selectStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-setSelectStyle' class='name expandable'>setSelectStyle</a>( <span class='pre'>selectStyle</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of selectStyle. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-cfg-selectStyle\" rel=\"GeoExt.selection.FeatureModelMixin-cfg-selectStyle\" class=\"docClass\">selectStyle</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selectStyle</span> : ol.style.Style<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-unbindOlEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.selection.FeatureModelMixin'>GeoExt.selection.FeatureModelMixin</span><br/><a href='source/FeatureModelMixin.html#GeoExt-selection-FeatureModelMixin-method-unbindOlEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.selection.FeatureModelMixin-method-unbindOlEvents' class='name expandable'>unbindOlEvents</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Unbinds several events that were registered on the OL objects in this\nclass (see bindOlEvents). ...</div><div class='long'><p>Unbinds several events that were registered on the OL objects in this\nclass (see <a href=\"#!/api/GeoExt.selection.FeatureModelMixin-method-bindOlEvents\" rel=\"GeoExt.selection.FeatureModelMixin-method-bindOlEvents\" class=\"docClass\">bindOlEvents</a>).</p>\n</div></div></div></div></div></div></div>","meta":{}});