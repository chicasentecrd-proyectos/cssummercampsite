<template>
  <div>
    <section class="
      col-span-12
      sm:col-span-12
      md:col-span-6
      lg:col-span-6
      xxl:col-span-6
      px-16
      py-6
    ">
  <div class=" relative items-center justify-center">
    <div class="lg:flex items-center container mx-auto my-auto">

      <div class=" lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8 ">
        <image-shadow :width="400" :src="this.src1"></image-shadow>
      </div>
    <div class=" lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8 ">
      <image-shadow :width="400" :src="this.src2"></image-shadow>
    </div>

    <div class=" lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8 ">
      <image-shadow :width="400" :src="this.src3"></image-shadow>
    </div>
      </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8 ">
          <image-shadow :width="400" :src="this.src4"></image-shadow>
        </div>


      </div>

      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        src1: 'https://i.imgur.com/Lg08PPN.jpg',
        src2: 'https://i.imgur.com/IBZzdNY.jpg',
        src3: 'https://i.imgur.com/A3UTvJo.jpg',
        src4: 'https://i.imgur.com/2SvyWog.jpg',
        src5: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
        src6: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
        src7: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
        src8: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
        src9: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
        src10: 'https://github.com/image-component/gallery/blob/main/girl/3.jpg?raw=true',
      }
    }
  }
</script>

<style>

.gallery {
  display: flex;
  padding: 10em;
}
.vue-image-shadow + .vue-image-shadow {
  margin-left: 10px;
}
</style>
