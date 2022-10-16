<template>
  <div
    v-if="gravatarHash.length > 0"
    class="h-[200px] w-[200px] overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 lg:h-[250px] lg:w-[250px]"
  >
    <picture>
      <source
        media="(max-width: 1023px)"
        :srcSet="`https://www.gravatar.com/avatar/${gravatarHash}.jpg?s=${MOBILE_SQUARE_SIDE}`"
      />
      <source
        media="(min-width: 1024px)"
        :srcSet="`https://www.gravatar.com/avatar/${gravatarHash}.jpg?s=${DESKTOP_SQUARE_SIDE}`"
      />
      <img
        :src="`https://www.gravatar.com/avatar/${gravatarHash}.jpg?s=${DESKTOP_SQUARE_SIDE}`"
        alt="Simón Oroño's profile picture"
        className="u-photo"
      />
    </picture>
  </div>
</template>

<script lang="ts" setup>
const DESKTOP_SQUARE_SIDE = 250
const MOBILE_SQUARE_SIDE = 200

const config = useRuntimeConfig()
const gravatarHash = config.public.gravatarHash
</script>
