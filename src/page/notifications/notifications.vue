<template>
  <div class="notifications">
    <h2>Уведомления</h2>
    <template v-if="getNotifications && getNotifications.length">
      <ul class="notifications-list">
        <li class="notifications-list__item" v-for="(item, key) in getNotifications" :key="key" >
          <span  @click="goToOrdering(item.orderId)">Заказ #{{item.orderId}} {{item.ordertime}}</span>
          </li>
      </ul>
    </template>
    <template v-else><span>Нет необработанных заказов</span></template>
  </div>
</template>

<script lang="js" src="./notifications.js"></script>
<style src="./notifications.css"></style>