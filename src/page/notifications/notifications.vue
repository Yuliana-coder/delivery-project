<template>
  <div class="notifications">
    <h2>Уведомления</h2>
    <template v-if="notificationOrders && notificationOrders.length">
      <ul>
        <li v-for="(item, key) in notificationOrders" :key="key"><a>Заказ #{{item.orderId}}</a></li>
      </ul>
    </template>
    <template v-else><span>Нет необработанных заказов</span></template>
  </div>
</template>

<script lang="js" src="./notifications.js"></script>
<style src="./notifications.css"></style>