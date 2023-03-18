<template>
  <SEO title="Daily macros" url="localhost:3000" type="website"
    description="Get the best results by tracking your food macro intake, be the best version of you" />
  <div class="mx-auto px-4 xl:px-0 md:max-w-4xl lg:max-w-6xl xl:max-w-7xl py-6">
    <Navbar />
    <div class="mt-4 lg:mt-48 flex flex-col lg:flex-row lg:justify-between">
      <div class="sm:w-673 order-2 lg:order-1 self-center lg:self-auto pt-6 lg:pt-0">
        <Hero title="Empower your health journey and achieve your dream body "
          description="Unleash the full potential of your body with our Macro Counter app. Take charge of your nutrition and achieve your dream body" />
      </div>
      <!-- Athletic Girl -->
      <div class="relative order-1 flex justify-center lg:justify-start lg:order-2 mt-12 lg:mt-0">
        <figure class="relative z-10 w-72 lg:w-[357px] h-full lg:h-[600px]">
          <img width="100%" height="auto" src="/img/AthleticGirl.png" alt="Image of athletic girl" />
        </figure>

        <!-- Blob -->
        <div class="absolute top-0 z-0 w-[400px] h-[400px] sm:w-[450px] xl:w-[500px] lg:h-96">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#A7F0BA"
              d="M46.4,-79.9C60.8,-72,73.6,-60.9,81.6,-47.1C89.6,-33.3,92.7,-16.6,91.3,-0.9C89.8,14.9,83.7,29.9,75.9,44.2C68.2,58.5,58.9,72.1,46,81.2C33,90.2,16.5,94.5,0.4,93.9C-15.8,93.3,-31.6,87.7,-45,79C-58.4,70.2,-69.3,58.3,-77.9,44.6C-86.6,30.9,-92.9,15.4,-92.3,0.3C-91.8,-14.8,-84.2,-29.5,-75.1,-42.3C-65.9,-55.1,-55.1,-65.9,-42.3,-74.8C-29.5,-83.7,-14.8,-90.6,0.6,-91.6C16,-92.7,32,-87.9,46.4,-79.9Z"
              transform="translate(100 100)" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>