var Scrollbar = window.Scrollbar;

function ScaleDeltaPlugin() {
  Scrollbar.ScrollbarPlugin.apply(this, arguments);
}

ScaleDeltaPlugin.prototype = Object.create(Scrollbar.ScrollbarPlugin.prototype);

ScaleDeltaPlugin.prototype.transformDelta = function(delta, fromEvent) {
  if (fromEvent.type == 'touchmove' || fromEvent.type == 'touchend') return
  return {
            x: delta.y,
            y: delta.x
        };
};

ScaleDeltaPlugin.pluginName = 'scaleDelta';
ScaleDeltaPlugin.defaultOptions = {
  nothing: [],
};