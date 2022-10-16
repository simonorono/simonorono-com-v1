<template>
  <div
    class="h-card flex flex-col items-center justify-center space-y-8 border-b border-slate-300 bg-slate-100 p-10 shadow-lg lg:fixed lg:inset-y-0 lg:w-96 lg:justify-start lg:border-b-0 lg:border-r"
  >
    <NuxtLink to="/" className="u-url u-uid block" rel="me">
      <ProfilePicture />
    </NuxtLink>

    <NuxtLink to="/" class="text-center lg:w-full lg:text-left">
      <component
        :is="useRoute().path === '/' ? 'h1' : 'h2'"
        class="p-name text-xl font-medium"
        >Simón Oroño</component
      >
    </NuxtLink>
  </div>
</template>
