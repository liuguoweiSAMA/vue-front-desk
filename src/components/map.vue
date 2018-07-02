<template>
  <div id="app">
    <h3 class="title"></h3>
    <div class="amap-wrapper">
    	  <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap class="amap-box"   :vid="'amap-vue'" :center="center"  :visible="true"  :zoom="zoom"  >
      	<el-amap-marker v-for="(marker, index) in markers" :position="markers.position" :events="markers.events" :visible="marker.visible" :draggable="markers.draggable" :vid="index"></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
     zoom: 16,
     center:[],
  	 markers: [
            {
              position: [121.5273285, 31.21515044],
              visible: true,
              draggable: false,
              template: '<span>1</span>',
            }
          ]
    }
  },
  created(){
  	var map=this.$route.query.location
  	this.center=map.split(",");
  	this.markers.position=map.split(",");
  },
 methods:{
 	onSearchResult() {
 		console.log(11)
//        let latSum = 0;
//        let lngSum = 0;
//        if (pois.length > 0) {
//          pois.forEach(poi => {
//            let {lng, lat} = poi;
//            lngSum += lng;
//            latSum += lat;
//            this.markers.push([poi.lng, poi.lat]);
//          });
//          let center = {
//            lng: lngSum / pois.length,
//            lat: latSum / pois.length
//          };
//          this.mapCenter = [center.lng, center.lat];
//        }
        }
 }
  
}
</script>

<style>
	#app{
		width: 100%;
		height: 100%;
	}
.amap-wrapper {
  width: 100%;
  height: 100%;
}



    .amap-page-container {
      position: relative;
    }
</style>>