<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'StudentWork' }">About</router-link>
    <router-view />

  </div>
</template>
