<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="description" />
      <Meta key="keywords" name="keywords" :content="mappedKeywords" />
      
      <!-- Facebook Meta tags -->
      <Meta key="url" property="og:url" :content="url" />
      <Meta key="type" property="og:type" :content="type" />
      <Meta key="title" property="og:title" :content="title" />
      <Meta key="description" property="og:description" :content="description" />
      <Meta key="image" property="og:image" :content="imageUrl" />
      <!-- Twitter Meta tags -->
      <Meta key="twCard" name="twitter:card" content="summary_large_image" />
      <Meta key="twDomain" property="twitter:domain" :content=twitterDomain />
      <Meta key="twUrl" property="twitter:url" :content=url />
      <Meta key="twTitle" name="twitter:title" :content=title />
      <Meta key="twDesc" name="twitter:description" :content=description />
      <Meta key="twImg" name="twitter:image" :content=imageUrl />
    </Head>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    description: string;
    url: string;
    type: string;
    keywords?: string[];
    imageUrl?: string;
    twitterDomain?: string;
  }

  const {  keywords } = defineProps<Props>();
  const mappedKeywords = computed(() => keywords?.join(', '));

</script>