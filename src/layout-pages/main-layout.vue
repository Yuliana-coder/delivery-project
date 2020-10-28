<template>
  <div id="app">
    <!-- <Header /> -->
    <div class="header">
      <span @click="goToHomepage" class="header__title">Доставка</span>
      <span class="header__notifications" @click="isNotificationsOpen=true">Уведомления <template>({{notificationsCount}})</template></span>
    </div>
    <main class="main">
      <router-view></router-view>
      <div v-if="isNotificationsOpen" class="notifications-card">
        <div class="notifications-card__content">
          <template v-if="notificationsCount">
            <div class="notifications-card__title">Имеется {{notificationsCount}} необработанных заказа</div>
            <div class="notifications-card__btn-wrapper">
              <button @click="openNotifications" class="btn btn-ok notifications-card__btn">
                Перейти к оформлению
              </button>
              <button @click="isNotificationsOpen = false" class="btn btn-cancel notifications-card__btn">
                Закрыть
              </button>
            </div>
          </template>
          <template v-else>
            <div class="notifications_not-porrocessed-orders">
              Нет необработанных заказов.
              <button @click="isNotificationsOpen = false" class="btn btn-cancel notifications-card__btn">
                  Закрыть
              </button>
            </div>
          </template>
        </div>
        </div>
    </main>
  </div>
</template>

<script>

export default {
    name: 'MainLayout',
    data() {
      return {
        //  notificationsCount: 2,
      isNotificationsOpen: false}
    },
    methods: {
      openNotifications() {
        this.$router.push({ path: 'notifications' })
        this.isNotificationsOpen = false;
      },
      goToHomepage() {
        this.$router.push({ path: '/' })
      }
    },
    computed: {
        notificationsCount() {
          let orders = [...JSON.parse(localStorage.getItem("orders"))];
          return orders.filter((item) => {
            return !item.processed && !item.rejected
          }).length;
        }
    }
    
}
</script>

<style>
.main {
  min-height: calc(100vh - 76px);
  background-color:  #f8f0ff;
  position: relative;
}
.header {
  padding: 21px 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b3b3b3;
  /* position: relative; */
}
.header__title {
  font-size: 19px;
  font-weight: bold;
}
.header__title:hover {
  cursor: pointer;
}
.header__notifications:hover {
  cursor: pointer;
  color: red;
}
.notifications-card {
  margin: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -30%);
}
.notifications-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 150px;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0 0 10px #535151;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
}
.notifications-card__title {
  margin-bottom: 30px;
    margin-top: 15px;
}
.notifications-card__btn {
  margin: 10px;
}
.notifications_not-porrocessed-orders {
  display: flex;
  flex-direction: column;
}

</style>
