<template>
  <li class="card">
    <div class="tab-button-wrapper" role="tablist">
      <button v-for="tab in tabs" :key="tab.key" class="tab-button" role="tab" :aria-controls="tab.key + id"
        :aria-selected="currentTab === tab.key" :class="{ active: currentTab === tab.key }"
        @click="currentTab = tab.key">
        {{ tab.label }}
      </button>
    </div>

    <p class="spot-name">{{ spot.name }}</p>
    <div class="card-panel-wrapper">
      <!-- photo -->
      <div class="card-panel" :id="`photo${id}`" role="tabpanel" :aria-labelledby="`photo${id}`"
        v-show="currentTab === 'photo'">
        <img :src="spot.photo" :alt="spot.name" class="spot-img" width="200" height="200">

      </div>
      <!-- info -->
      <div class="card-panel" :id="`info${id}`" role="tabpanel" :aria-labelledby="`info${id}`"
        v-show="currentTab === 'info'">
        <p class="spot-desc">{{ spot.info }}</p>

      </div>
      <!-- Access -->
      <div class="card-panel" :id="`access${id}`" role="tabpanel" :aria-labelledby="`access${id}`"
        v-show="currentTab === 'access'">
        <div class="spot-access">
          <p class="spot-address">{{ spot.address }}</p>
          <p class="spot-route">{{ spot.access }}</p>
        </div>

        <div class="spot-map" v-if="spot.map">
          <iframe :title="spot.name" :src="spot.map" width="400" height="300" style="border:0" allowfullscreen
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  spot: Object,
  id: Number
})

const currentTab = ref('photo')

const tabs = [
  { key: 'photo', label: 'Photo' },
  { key: 'info', label: 'Info' },
  { key: 'access', label: 'Access' }
]
</script>