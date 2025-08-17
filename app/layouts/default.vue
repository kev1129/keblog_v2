<template>
  <v-app>
    <AppHeader />
      <v-row>
        <v-col class="main-container"> <!-- old setting xs="10" sm="9" md="7" lg="5" -->
          <v-main>
            <slot></slot>
          </v-main>
        </v-col>
      </v-row>
      <AppFooter />
  </v-app>
</template>

<style lang="scss" scoped>
.main-container {
    margin-right: auto;
    margin-left: auto;
    margin-top: 4.9%;
}
</style>