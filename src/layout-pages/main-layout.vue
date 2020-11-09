<template>
  <div id="app">
    <!-- <Header /> -->
    <div class="header">
      <span @click="goToHomepage" class="header__title">Доставка </span>
      <span class="header__notifications" @click="openNotificationsPopup">Уведомления <template v-if="notificationsCount">({{$store.state.notificationsCount}})</template></span>
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
              <button @click="closePopup" class="btn btn-cancel notifications-card__btn">
                Закрыть
              </button>
            </div>
          </template>
          <template v-else>
            <div class="notifications_not-porrocessed-orders">
              Нет необработанных заказов.
              <button @click="closePopup" class="btn btn-cancel notifications-card__btn">
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
import vClickOutside from 'v-click-outside'


export default {
    name: 'MainLayout',
    directives: {
      clickOutside: vClickOutside.directive
    },
    data() {
      return {
      // isNotificationsOpen: false,
      val: 0}
    },
    methods: {
      openNotifications() {
        this.$router.push({ path: 'notifications' })
        this.isNotificationsOpen = false;
      },
      goToHomepage() {
        this.$router.push({ path: '/' })
      },
      countVal() {
        this.val = this.val + 1;
      },
      openNotificationsPopup() {
        this.$store.commit("setOrderOpen", false);
        this.$store.commit("setNotificationOpen", true);
      },
      closePopup() {
        this.$store.commit("setNotificationOpen", false);
      }
    }, 
    computed: {
        notificationsCount: function() {
          return this.$store.state.notificationsCount;
        },
        isNotificationsOpen: function() {
          return this.$store.state.isNotificationOpen;
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
