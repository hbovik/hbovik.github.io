var d = new webkitAudioContext();
node = d.createScriptProcessor(4096,1,1);
node.onaudioprocess = function (e) {
  var output = e.outputBuffer.getChannelData(0);
  for (var i = 0; i < output.length; i++) {
    output[i] = Math.random();
    // Math.random() sends random numbers, but you can make
    // that be anything you want
  }
}
node.connect(d.destination);
$(document).on('click', function() {
  node.disconnect(0);
});