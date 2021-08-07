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
      bg-pink-400
    "
    >

    <header>
      <div class="flex">
        <div>
          <!-- <img class="logo" src="./assets/logo.png" /> -->
        </div>
        <div>
          <!-- <router-link :to="{ name: 'StudentWork' }">About</router-link> -->
          <!-- <router-view></router-view> -->
          <router-link
            to="/"
            class="text-white font-semibold text-lg hover:text-blue-400"
            >Volver a casa</router-link>

          <!-- <router-link :to="/studentwork" class="text-white font-semibold text-lg hover:text-blue-400"> Student Portfolios</router-link> -->
        </div>
      </div>
    </header>

  <div class=" relative items-center justify-center">
    <h1 class="text-center text-7xl font-bold p-4 text-white pb-8">
      Galería de fotos de verano 2021
    </h1>
    <div class="lg:flex items-center container mx-auto my-auto ">
          <div class=" lg:m-4 my-12 mx-8  ">
            <img class="rounded shadow-md" :width="400" :src="this.src1">
          </div>
        <div class=" lg:m-4 rounded-lg  my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src2">
        </div>
        <div class=" lg:m-4  my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src3">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src4">
        </div>

        <div class=" lg:m-4  my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src5">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src6">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src7">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src8">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src9">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src10">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src11">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src12">
        </div>
    </div>


    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src13">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src14">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src15">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src16">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src17">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src18">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src19">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src20">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src21">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src22">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src23">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src24">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src25">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src26">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src27">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src28">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src29">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src30">
        </div>
    </div>

    <div class="lg:flex items-center container mx-auto my-auto">
        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src31">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src32">
        </div>

        <div class=" lg:m-4 my-12 mx-8 ">
          <img class="rounded shadow-md" :width="400" :src="this.src33">
        </div>
    </div>



      </div>
    </section>

    <section class="h-full bg-gray-800">
      <div class="py-6 px-16 flex justify-between">
        <div>
          <img class="footerlogo" src="../assets/logo.png" />
        </div>
      </div>
      <div class="border-t-2 mx-10 border-gray-500"></div>
      <div class="py-4 py-6 px-16 flex justify-between">
        <div>
          <h1 class="font-semibold text-white text-sm">CSSUMMERDR @ 2021</h1>
        </div>
        <div>
          <a href="#" class="flex space-x-2 text-white hover:text-yellow-400">
            <p class="font-semibold  text-sm">GO TOP</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6  -mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              />
            </svg>
          </a>
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
        src5: 'https://i.imgur.com/aVRsTCj.jpg',
        src6: 'https://i.imgur.com/htIh2tb.jpg',
        src7: 'https://i.imgur.com/b9m87RV.jpg',
        src8: 'https://i.imgur.com/OHiHGwd.jpg',
        src9: 'https://i.imgur.com/Jt79Dau.jpg',
        src10: 'https://i.imgur.com/fz5xZ0x.jpg',
        src11: 'https://i.imgur.com/cu8rzlR.jpg',
        src12: 'https://i.imgur.com/TJWSV68.jpg',
        src13: 'https://i.imgur.com/psmecLH.jpg',
        src14: 'https://i.imgur.com/JrbWr05.jpg',
        src15: 'https://i.imgur.com/DDDgAsn.jpg',
        src16: 'https://i.imgur.com/qXRifVC.jpg',
        src17: 'https://i.imgur.com/VVVqSe8.jpg',
        src18: 'https://i.imgur.com/vwoqpzA.jpg',
        src19: 'https://i.imgur.com/PnBwHab.jpg',
        src20: 'https://i.imgur.com/ezULzLh.jpg',
        src21: 'https://i.imgur.com/MwNLd8W.jpg',
        src22: 'https://i.imgur.com/vqdLd15.jpg',
        src23: 'https://i.imgur.com/NOicq1J.jpg',
        src24: 'https://i.imgur.com/ErjgUDk.jpg',
        src25: 'https://i.imgur.com/f087iaB.jpg',
        src26: 'https://i.imgur.com/gNaR3AU.jpg',
        src27: 'https://i.imgur.com/ZKzvPds.jpg',
        src28: 'https://i.imgur.com/bqo44Uf.jpg',
        src29: 'https://i.imgur.com/elOlwDO.jpg',
        src30: 'https://i.imgur.com/LQtyGtH.jpg',
        src31: 'https://i.imgur.com/DYCTx53.jpg',
        src32: 'https://i.imgur.com/Ouh0ujY.jpg',
        src33: 'https://i.imgur.com/22nSibV.jpg',
        src34: 'https://i.imgur.com/5Ubu2wC.jpg',
        src35: 'https://i.imgur.com/Kg5bFo8.jpg',
        src36: 'https://i.imgur.com/heUKLXR.jpg',
        src37: 'https://i.imgur.com/B066CUn.jpg'
      }
    }
  }
</script>

<style>
.gallery {
  display: flex;

}

</style>
