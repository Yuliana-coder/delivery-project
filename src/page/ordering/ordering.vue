<template>
  <div class="ordering">
    <div @click="goToBack" class="bread-crumbs">Назад</div>
    <h2>Оформление заказа</h2>
    <div v-if="customer" class="ordering__customer-card">
        <div class="ordering__customer-card-title">Заказчик:</div>
        <div class="ordering__customer-data">
            <div v-if="customer.id" class="ordering__customer-data-item">
                <span><span>Заказ#</span>{{customer.id}}</span>
            </div>
            <div v-if="customer.name" class="ordering__customer-data-item">
                <span><span class="ordering__customer-data-field">Имя заказчика:</span> {{customer.name}} {{customer.surname}}</span>
            </div>
            <div v-if="customer.phonenumber" class="ordering__customer-data-item">
                <span><span class="ordering__customer-data-field">Телефон:</span>  <a class="ordering__customer-data-phone-link" :href="'tel:' + customer.phonenumber"> {{customer.phonenumber}}</a></span>
            </div>
            <div v-if="customer.address" class="ordering__customer-data-item">
                <span><span class="ordering__customer-data-field">Адрес:</span> {{customer.address}}</span>
            </div>
        </div>
        <div class="ordering__confirmation-btn-wrapper">
            <button class="btn btn-ok ordering__confirmation-btn" :disabled="isReject" @click="isGoConfirm=true; isGoReject=false">
                Подтвердить
            </button>
            <button class="btn btn-cancel ordering__confirmation-btn"
            @click="cancelNotification">
                Отклонить
            </button>
        </div>
        <template v-if="isGoReject">
            <div class="ordering__reject">
                <div class="ordering__reject-title">Укажите причину:</div>
                    <select class="ordering__reject-selector" @change="checkSelect($event)" v-model="currentSelect">
                <option>
                    Нет данных о заказчике
                </option>
                <option>
                    Некорректный номер телефона
                </option>
                <option>Другая причина:</option>
                </select>
                <button class="ordering__reject-other-reason-ok" @click="isReject=true">Подтвердить и отправить</button>
                <div class="ordering__reject-other-reason" v-if="isOtherReason">
                    <input class="ordering__reject-other-reason-input" placeholder="Кратко укажите причину" />
                </div>
            </div>
            <div v-if="isReject">
                Заявка на заказ#{{customer.id}} отклонена.
            </div>
        </template>
        <template v-else-if="isGoConfirm">
            <div class="ordering__confirm-message">Заявка на заказ #{{customer.id}} подтверждена.</div>
            <div class="ordering__confirm-card"><span>Для завершения оформления заказа, передайте заказ на кухню.</span>
            <button @click="sendOrder" class="btn ordering__confirm-btn">Отправить на кухню</button></div>
            <div v-if="isTreatment">Обработка...</div>
        </template>
    </div>
    <div v-else>Данные о заказчике отсутствуют. Отклоните заявку.</div>
  </div>
</template>

<script lang="js" src="./ordering.js"></script>
<style src="./ordering.css"></style>