<template>
  <div class="container">
    <div class="logo">
      <img
        style="width: 400px"
        alt="logo"
        src="../../assets/images/logo.png"
      />
<!--      <div class="logo-text">Arco Design Pro</div>-->
    </div>
<!--    <LoginBanner />-->
    <div class="content login-banner" >
      <div class="fixed-text">
        <p>盛和天成AI培训</p>
        <p>让企业培训更简单</p>
      </div>
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Footer from '@/components/footer/index.vue';
  import LoginBanner from './components/banner.vue';
  import LoginForm from './components/login-form.vue';
</script>

<style lang="less" scoped>
  .container {
    display: flex;
    height: 100vh;
    .banner {
      width: 550px;
      background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    }

    .content {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: end;
      padding-bottom: 40px;
      padding-right: 15vw;

    }
    .content-inner{
      z-index: 1999;
    }
    .footer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
    }
  }

  .logo {
    position: fixed;
    top: 24px;
    left: 22px;
    z-index: 1;
    display: inline-flex;
    align-items: center;

    &-text {
      margin-right: 4px;
      margin-left: 4px;
      color: var(--color-fill-1);
      font-size: 20px;
    }
  }
  .fixed-text{
    position: fixed;

    left: 1.5vw;
    font-size: 4vw;
    font-weight: bold;
    color: #ffffff;
  }
</style>

<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-lg) {
    .container {
      .banner {
        width: 25%;
      }
    }
  }
</style>
