<template>
  <div class="delivery-registration">
    <h2>Оформление доставки</h2>
    <template v-if="order">
        <div class="delivery__info">
            <div class="delivery__info-card">
                <div v-if="order.dishes && order.dishes.length" class="delivery__info-card-item">
                    <span>Состав заказа:&nbsp;</span> <span class="delivery__dishes-item" v-for="(item, key) in order.dishes" :key="key">{{item.name}}</span>
                </div>
                <div v-if="order.orderPrice" class="delivery__info-card-item"><span>Цена:&nbsp;</span><span>{{order.orderPrice}}&nbsp;₽</span></div>
            </div>
            <div class="delivery__info-card">
                <div v-if="order.ordertime" class="delivery__info-card-item"><span>Время заказа:&nbsp;</span>
                    <span>{{order.ordertime}}</span>
                </div>
                <div v-if="order.weight" class="delivery__info-card-item"><span>Вес заказа:&nbsp;</span>
                <span>{{order.weight}}</span></div>
            </div>
        </div>
        <div class="delivery__choice-services">
            <div>Выберите способ доставки:</div>
            <div class="delivery__choice-services-detail">*Примечание: 
                <span class="delivery__choice-services-detail-bold">служба доставки</span>
                 указывается тогда, когда вес заказа превышает 10 кг и адрес заказа не входит в радиус доставки ресторана.
            </div>
            <div class="delivery__services-selector-wrapper">
                <select class="delivery__services-selector" v-model="deliverySelector">
                    <option>Курьер</option>
                    <option>Служба доставки</option>
                    <option>Самовывоз</option>
                </select>
                <button @click="isSelectorConfirm = true" class="btn delivery__btn-ok">Подтвердить</button>
            </div>
            <div v-if="isSelectorConfirm" class="delivery__info delivery__info_font">
                <div class="delivery__info-card">
                    <div class="delivery__info-card-item">
                        <span>Способ доставки:&nbsp;</span> <span class="delivery__dishes-item">{{deliverySelector}}</span>
                    </div>
                    <div class="delivery__info-card-item"><span>Время доставки:&nbsp;</span><span>21:00&nbsp;</span></div>
                </div>
                <div class="delivery__info-card">
                    <template v-if="deliverySelector === 'Курьер'">
                        <div class="delivery__info-card-item"><span>Стоимость доставки:&nbsp;</span>
                            <span>0 ₽</span>
                        </div>
                        <div  class="delivery__info-card-item"><span>Имя курьера:&nbsp;</span>
                            <span>Иванов Михаил</span>
                        </div>
                    </template>
                    <template v-if="deliverySelector === 'Служба доставки'">
                        <div class="delivery__info-card-item"><span>Стоимость доставки:&nbsp;</span>
                            <span>100 ₽</span>
                        </div>
                        <div  class="delivery__info-card-item"><span>Компания:&nbsp;</span>
                            <span>ООО Быстрая доставка</span>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div>
            <button v-if="isSelectorConfirm" @click="isShowDeliveryCard=true" class="btn btn-ok delivery__btn-checkout">Оформить</button>
        </div>
    </template>
    <div v-else>Нет данных о заказе, перейдите в раздел подтверждения заказа и подтвердите заказ.</div>
    <div v-if="isShowDeliveryCard" class="delivery_window">
        <div class="delivery__information">
            <div id="delivery__print">
                <div v-if="order && order.dishes && order.dishes.length" class="delivery-table__wrapper">
                <div class="delivery-table__title">Состав заказа:</div>
                <table class="delivery-table">
                    <thead class="delivery-table__head">
                    <tr class="delivery-table__head-row">
                        <td class="delivery-table__head-row-cell">№</td>
                        <td class="delivery-table__head-row-cell">Наименование</td>
                        <td class="delivery-table__head-row-cell">Вес</td>
                        <td class="delivery-table__head-row-cell">Цена</td>
                    </tr>
                    </thead>
                    <tbody class="delivery-table__body">
                    <tr class="delivery-table__body-row" v-for="(item,key1) in order.dishes" :key="key1">
                        <td class="delivery-table__body-row-cell">{{key1 + 1}}</td>
                        <td class="delivery-table__body-row-cell" >{{item.name}}</td>
                        <td class="delivery-table__body-row-cell">{{item.weight}}</td>
                        <td class="delivery-table__body-row-cell">{{item.price}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="delivery__total-amount">Итого: {{order.orderPrice}}&nbsp;₽</div>
                </div>
                <div class="delivery__info-card-wrapper">
                <template v-if="deliverySelector === 'Курьер'">
                    <div class="delivery__info-card-item"><span>Стоимость доставки:&nbsp;</span>
                        <span>0 ₽</span>
                    </div>
                    <div  class="delivery__info-card-item"><span>Имя курьера:&nbsp;</span>
                        <span>Иванов Михаил</span>
                    </div>
                </template>
                <template v-if="deliverySelector === 'Служба доставки'">
                <div class="delivery__info-card-item"><span>Стоимость доставки:&nbsp;</span>
                    <span>100 ₽</span>
                    </div>
                    <div  class="delivery__info-card-item"><span>Компания:&nbsp;</span>
                            <span>ООО Быстрая доставка</span>
                    </div>
                    </template>
                    <div>Время доставки: 1 час</div>
                </div>
                <div class="delivery__info-card-wrapper">
                <template>
                    <div class="delivery__info-card-item"><span>Менеджер:&nbsp;</span>
                        <span>Цветкова Василина</span>
                    </div>
                </template>
                </div>
            </div>
              <div class="delivery__btn-wrapper">
              <button @click="printDeliveryList" class="btn btn-ok delivery__btn">
                Распечатать
              </button>
              <button @click="goToHomepage"  class="btn btn-ok delivery__btn">
                Завершить
              </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="js" src="./delivery-registration.js"></script>
<style src="./delivery-registration.css"></style>