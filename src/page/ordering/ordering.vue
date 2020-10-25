<template>
  <div class="ordering">
    <div @click="goToBack" class="bread-crumbs">Назад</div>
    <h2>Оформление заказа</h2>
    <div v-if="customer" class="ordering__customer-card">
        <h5>Заказчик:</h5>
        <div class="ordering__customer-data">
            <div v-if="customer.id">
                <span><span>Заказ#</span>{{customer.id}}</span>
            </div>
            <div v-if="customer.name">
                <span><span>Имя заказчика:</span> {{customer.name}} {{customer.surname}}</span>
            </div>
            <div v-if="customer.phonenumber">
                <span><span>Телефон:</span> {{customer.phonenumber}}</span>
            </div>
            <div v-if="customer.address">
                <span><span>Адрес:</span> {{customer.address}}</span>
            </div>
        </div>
    </div>
    <div v-else>Данные о заказчике отсутствуют. Отклоните заявку.</div>
  </div>
</template>

<script lang="js" src="./ordering.js"></script>
<style src="./ordering.css"></style>