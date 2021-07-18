<template>
  <div id="app">
    <!-- Header Section -->
    <section class="h-screen px-12 sm:px-24 relative w-full bg-cover" style="background-color: #f8d147">
       <header>
           <div class="flex justify-between items-center ">
               <div>
                 <!-- <img class="logo" src="./assets/logo.png" /> -->
               </div>
               <div class="flex justify-center space-x-9 hidden sm:block my-6">
                   <a href="#" class="text-white font-semibold text-lg hover:text-yellow-400">About Us</a>
                   <a href="#" class="text-white font-semibold text-lg hover:text-yellow-400">Student Portfolios</a>
                   <a href="#" class="text-white font-semibold text-lg hover:text-yellow-400">Contact Us</a>
               </div>
               <div class="flex  hidden sm:block">
                   <button
                       class="bg-gradient-to-b from-green-400 to-green-500 text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-xl">
                       DONATE HERE
                   </button>
               </div>
           </div>
       </header>
           <div class="grid grid-cols-11 gap-6 ">
               <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-12">
                   <div class="w-full">
                       <h1 class="text-5xl sm:text-5xl lg:text-5xl xl:text-9xl text-white font-bold ">Computer Science <br>
                         <!-- <img class="logo" src="./assets/logo.png" /> -->
                           Summer Camp <br> <span class="text-pink-400"> For Girls</span></h1>
                   </div>
               </div>
           </div>
     </section>






    <!-- About Us , Our Donors, Contact Us Section -->

    <section class="text-center">
      <div class="space-y-4">
          <div class="flow-root ...">
            <div class="my-4 ...">

            <div class="bg-indigo-600 rounded-full shadow-xl col-span-1">
         <div class="">

           <h1 class="text-white">About Us</h1>

         </div>
           </div>
        </div>

          </div>
          <div class="flow-root ...">
            <div class="my-4 ..."> Our Donors</div>
          </div>
          <div class="flow-root ...">
            <div class="my-4 ..."> Contact Us</div>
          </div>
      </div>
    </section>

    <!-- Girls Work Section -->

    <section>
    </section>

<!-- Footer Section -->
          <section class="h-full bg-gray-800">
               <div class="py-6 px-16 flex justify-between">
                   <div>
                       <h1 class="font-bold text-white text-xl">CS<span class="text-blue-400">-Summer DR</span></h1>
                   </div>
               </div>
               <div class="border-t-2 mx-10 border-gray-500"></div>
               <div class="py-4 py-6 px-16 flex justify-between">
                   <div>
                       <h1 class="font-semibold text-white text-sm">Copyright @ 2021</h1>
                   </div>
               </div>
           </section>
  </div>
</template>

<style>
.logo{
  height: 20rem;
  width: 20rem;
  float: right;
  margin-left: px;
}


</style>

<script>



</script>
