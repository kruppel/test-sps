(function (window) {

  var Cc = Components.classes,
      Ci = Components.interfaces,
      Cu = Components.utils,
      SERVICEPANE_NS = 'http://songbirdnest.com/rdf/servicepane#',
      test;

  test = {

    load: function (e) {
      var radioFolder,
          sps,
          node,
          el;

      sps = Cc['@songbirdnest.com/servicepane/service;1'].getService(Ci.sbIServicePaneService);
      radioFolder = sps.getNode('SB:RadioStations');
      node = sps.createNode();
      node.id = 'TESTSP';
      node.name = 'Test';
      node.setAttributeNS(SERVICEPANE_NS, 'eventType', 'test');
      radioFolder.appendChild(node);

      window.addEventListener('test', function (e) {
        Cu.reportError(e);
      }, false);
    }

  };

  window.addEventListener('load', test.load, false);
}(window));
