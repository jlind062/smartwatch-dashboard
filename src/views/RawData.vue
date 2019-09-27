<template>
    <div>
        <!-- <h3>Id: {{ user_data["user-id"] }}</h3>
        <h3>Metadata: {{ user_data["metadata"] }}</h3>
        <h3>Time: {{ user_data["time"] }}</h3>
        <h3>Latitude: {{ user_data["location"]["latitude"] }}</h3>
        <h3>Longitude: {{ user_data["location"]["longitude"] }}</h3>
        <h3>Altitude: {{ user_data["location"]["altitude"] }}</h3>
        <h3>Heart Rate: {{ user_data["watch-sensors"]["heart-rate"] }}</h3>
        <h3>Ambient Light: {{ user_data["watch-sensors"]["ambient-light"] }}</h3>
        <h3>Altimeter: {{ user_data["watch-sensors"]["altimeter"] }}</h3>
        <h3>Air Pressure: {{ user_data["watch-sensors"]["air-pressure"] }}</h3> -->
        {{ raw_data }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Raw Data',
  computed: {
    ...mapState([
      'raw_data'
    ])
  }
}
</script>
