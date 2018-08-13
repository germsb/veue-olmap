<template>
    <div id="olMap" style="width: 100%; height: 400px"></div>
</template>
<script>
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
export default {
  name: "ol-map",
  mounted() {
    this.olmap = new Map({
      target: "olMap",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png",
            preload: Infinity
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  },
  destroyed() {
    this.olmap.setTarget(null);
  }
};
</script>
<style>
@import "~ol/ol.css";
</style>
