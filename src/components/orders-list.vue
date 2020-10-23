<template>
  <div class="orders">
    <h2>Список заказов</h2>
    <div class="orders-table__wrapper">
      <table class="orders-table">
        <thead class="orders-table__head">
          <tr class="orders-table__head-row">
            <td class="orders-table__head-row-cell">id Заказа</td>
            <td class="orders-table__head-row-cell">Список блюд</td>
            <td class="orders-table__head-row-cell">Сумма заказа</td>
            <td class="orders-table__head-row-cell">id Клиента</td>
          </tr>
        </thead>
        <tbody class="orders-table__body">
           <tr class="orders-table__body-row" v-for="(order,key) in orders" :key="key">
             <td class="orders-table__body-row-cell">{{order.orderId}}</td>
             <td class="orders-table__body-row-cell">{{order.dishes}}</td>
             <td class="orders-table__body-row-cell">{{order.orderPrice}}</td>
             <td class="orders-table__body-row-cell">{{order.clientId}}</td>
           </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="js" src="./orders-list.js"></script>

<style src="./orders-list.css"></style>
