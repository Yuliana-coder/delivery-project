<template>
  <div class="popup">
    <div class="popup__btn-wrapper">
        <button class="btn btn-ok" @click="closePopup">Закрыть</button> 
    </div>
    <div class="popup__info">
            <div v-if="order.dishes && order.dishes.length" class="popup__info-card-item">
                <span>Состав заказа:&nbsp;</span> <span class="popup__dishes-item" v-for="(item, key) in order.dishes" :key="key">{{item.name}}</span>
            </div>
            <div v-if="order.orderPrice" class="popup__info-card-item"><span>Цена:&nbsp;</span><span>{{order.orderPrice}}&nbsp;₽</span></div>
            <div v-if="order.ordertime" class="popup__info-card-item"><span>Время заказа:&nbsp;</span>
                <span>{{order.ordertime}}</span>
            </div>
            <div v-if="order.weight" class="popup__info-card-item"><span>Вес заказа:&nbsp;</span>
            <span>{{order.weight}}</span></div>
            <div v-if="order.weight" class="popup__info-card-item"><span>Статус:&nbsp;
                 <template v-if="order.rejected">Отклонен</template>
             <template v-else-if="order.processed">Подтвержден</template>
             <template v-else-if="!order.processed">Требует обработки</template>
              </span></div>
    </div>
  </div>
</template>

<script lang="js" src="./popup-order.js"></script>

<style src="./popup-order.css"></style>