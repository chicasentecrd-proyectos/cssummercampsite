<template>
  <div id="app">
    <!-- Header Section -->
    <section class="h-screen px-12 sm:px-24 relative w-full bg-cover" style="background-color: #f8d147">
       <header>
           <div class="flex justify-between items-center ">
               <div>
                 <!-- <img class="logo" src="./assets/logo.png" /> -->
               </div>
               <div class="justify-center space-x-4 hidden sm:block my-3 ml-20">
                   <a href="#aboutus" class="text-white font-semibold text-lg hover:text-blue-400">About Us/Our Donors</a>
                   <a href="#student" class="text-white font-semibold text-lg hover:text-blue-400">Student Portfolios</a>
                   <!-- <router-link :to="Contact" class="text-white font-semibold text-lg hover:text-blue-400"> Contact Us</router-link> -->
                   <a href="#contact" class="text-white font-semibold text-lg hover:text-blue-400"> Contact us </a>
               </div>
               <div class="flex  hidden sm:block">
                   <button
                       class="bg-gradient-to-b from-green-400 to-green-500 text-white font-bold py-2 px-2 rounded-lg uppercase text-sm  shadow-xl">
                       DONATE HERE
                   </button>
               </div>
           </div>
       </header>
           <div class="grid grid-cols-2 ">
               <div class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-12">
                   <div class="w-full">
                       <h1 class="text-5xl sm:text-5xl lg:text-5xl xl:text-9xl text-white font-bold ">Computer <img class="logo " src="../assets/girlclipart.png" />Science <br>
                           Summer Camp <br> <span class="text-pink-400"> For Girls</span> <span class="text-blue-400"> D</span>.<span class="text-red-400">R</span>.</h1>
                   </div>
               </div>
           </div>
     </section>
<!-- About us and Our Donors -->
     <section class="h-full bg-yellow-300 text-center">
           <div class="grid grid-cols-12 gap-0">
               <div
                   class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 h-full px-16 py-6" style="background-color: #7dd959">
                   <div>
                       <h1 class="text-white font-semibold text-7xl" id="aboutus" >About Us</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum justo eu iaculis cursus. Phasellus at accumsan magna, sit amet interdum nisl. Maecenas non dui libero. Maecenas dictum pellentesque euismod. Cras fermentum augue et sodales blandit. Vivamus commodo rhoncus dui, non suscipit risus pretium eu. Nullam sagittis vestibulum tellus in aliquet. Sed maximus lectus id diam maximus, at semper orci scelerisque. Curabitur rutrum luctus tellus quis euismod. Integer ultrices congue vehicula. </p>
                   </div>
               </div>
               <div
                   class="col-span-none sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-blue-400 h-full px-16 py-6 ">
                   <div class="">
                       <h1 class="text-white font-semibold text-7xl">Our Donors</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum justo eu iaculis cursus. Phasellus at accumsan magna, sit amet interdum nisl. Maecenas non dui libero. Maecenas dictum pellentesque euismod. Cras fermentum augue et sodales blandit. Vivamus commodo rhoncus dui, non suscipit risus pretium eu. Nullam sagittis vestibulum tellus in aliquet. Sed maximus lectus id diam maximus, at semper orci scelerisque. Curabitur rutrum luctus tellus quis euismod. Integer ultrices congue vehicula. </p>
                       <button
                           class="my-6 bg-gradient-to-b from-green-400 to-green-500  text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-xl">
                           Donate Here!
                       </button>
                   </div>
               </div>
           </div>
       </section>


<!-- Contact Us -->
<section id="contact">
  <div class="flex items-center " style="background-color: #6c81a5">
      <div class="container mx-auto ">
          <div class="m-14 my-14 bg-white p-5 rounded-md shadow-sm ">
              <div class="text-center">
                  <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact Us</h1>
                  <p class="text-black">Fill out the form below to send us a message.</p>
              </div>
              <div class="m-7">
                  <form action="https://api.web3forms.com/submit" method="POST" id="form">
                      <input type="hidden" name="apikey" value="ad487da6-6a17-4490-9501-ec867a7a4c03">
                      <input type="hidden" name="subject" value="New Submission from CS Summer DR">
                      <input type="checkbox" name="botcheck" id="" style="display: none;">
                      <input type="hidden" name="redirect" value="https://web3forms.com/success">
                      <div class="mb-6">
                          <label for="name" class="font-semibold block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                          <input type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                      </div>
                      <div class="mb-6">
                          <label for="email" class="font-semibold block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                          <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                      </div>
                      <div class="mb-6">
                          <label for="message" class="font-semibold block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>
                          <textarea rows="5" name="message" id="message" placeholder="Send us a note!" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                      </div>
                      <div class="mb-6">
                          <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:outline-none" style="background-color: #7dd959">Send Message</button>
                      </div>
                      <p class="text-base text-center text-gray-400" id="result">
                      </p>
                  </form>
              </div>
          </div>
      </div>
  </div>
</section>


<!-- Footer -->
   <section class="h-full bg-gray-800">
            <div class="py-6 px-16 flex justify-between">
                <div>
                    <img class="footerlogo" src="../assets/logo.png">
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
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  -mt-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
      </div>
</template>

<style>
.footerlogo{
  height: 5rem;
  width: 5rem;
}

.logo{
  height: 30rem;
  width: 30rem;
  float: right;
}

.grouplogo{
  height: 10rem;
  width: 10rem;

}

</style>


<script>




</script>
