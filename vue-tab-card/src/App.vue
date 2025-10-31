<template>
  <main>
    <div class="wrapper">
      <ul class="card-wrapper">
        <SpotCard
        v-for="(spot,index) in spots"
        :key="spot.name"
        :spot="spot"
        :id="index+1"
        ></SpotCard>
      </ul>
    </div>
  </main>
</template>

<script setup>
import {spots} from './data/spots';
import SpotCard from './components/SpotCard.vue';
</script>