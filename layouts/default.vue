<template>
  <div>
    <div class="flex min-h-screen flex-col">
      <PageTopBanner />

      <PageHeader />

      <slot name="breadcrumbs" />
      <div class="flex w-full flex-1 flex-col">
        <slot />
      </div>

      <PageFooter />
    </div>
    <slot name="app-after" />
    <div id="app-after" />
  </div>
</template>
