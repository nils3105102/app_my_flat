<template>
    <div class="rules">
        <div class="container">
            <div class="rules__page">
                <router-link to="/" tag="div" class="rules__home">
                    <img src="https://176428.selcdn.ru/MyApartment/myapartment-logo-full.jpg" alt="Моя квартира" width="212" />
                </router-link>
                <article>
                    <div class="rules__header">
                        Инструкция для собственника помещения в МКД по голосованию на общем собрании собственников жилья в многоквартирном доме с использованием информационной системы «Моя Квартира»
                    </div>
                    <div class="rules__content">
                        <div class="rules__intro">
                            Эта инструкция объясняет, как <a href="https://play.google.com/store/apps/details?id=ru.roskvartal.myapartment" class="rules__link">скачать мобильное приложение «Моя Квартира»</a> и пользоваться им для голосования на общем собрании собственников жилья в многоквартирном доме с использованием информационной системы.
                        </div>
                         <div class="rules__text">
                            Зайдите в Google Play и <a href="https://play.google.com/store/apps/details?id=ru.roskvartal.myapartment" class="rules__link">скачайте мобильное приложение «Моя Квартира»</a> .
                        </div>
                         <div class="rules__text">
                            Приложение «Моя Квартира» установится автоматически.
                        </div>
                         <div class="rules__text">
                            Добавьте в приложение адрес своего дома: наберите адрес вручную или дайте согласие на определение адреса по вашему местоположению.
                        </div>
                         <div class="rules__text">
                            Добавьте в приложение номер своей квартиры (помещения).
                        </div>
                         <div class="rules__text">
                           Войдите в раздел «Голосования», чтобы увидеть список голосований на ОСС.
                           <img data-v-548dfeee="" src="https://176428.selcdn.ru/MyApartment/instruction/01.png" alt="Пункт меню. Раздел Голосования" class="rules__img">
                        </div>
                        <div class="rules__text">
                           Выберите нужное голосование и подтвердите вашу личность, написав номер телефона или адрес электронной почты, которые вы указали в заявлении.
                           <img data-v-548dfeee="" src="https://176428.selcdn.ru/MyApartment/instruction/02.png" alt="Список голосований" class="rules__img">
                        </div>
                        <div class="rules__text">
                           Введите код, который вы получили по смс или email.
                           <img data-v-548dfeee="" src="https://176428.selcdn.ru/MyApartment/instruction/05.png" alt="Авторизация" class="rules__img">
                        </div>
                        <div class="rules__text">
                           Ознакомьтесь с вопросами, включёнными в повестку дня.
                           <img data-v-548dfeee="" src="https://176428.selcdn.ru/MyApartment/instruction/06.png" alt="Список вопросов" class="rules__img">
                        </div>
                        <div class="rules__text">
                           Изучите прикреплённые к отдельным вопросам или ко всему собранию документы.
                           <img data-v-548dfeee="" src="https://176428.selcdn.ru/MyApartment/instruction/07.png" alt="Прикрепленные документы к собранию" class="rules__img">
                        </div>
                        <div class="rules__text">
                           Проголосуйте по всем вопросам сразу или пропустите какой-либо вопрос, чтобы вернуться к нему позже. Промежуточные результаты голосования сохраняются.
                           <img data-v-548dfeee="" src="https://176428.selcdn.ru/MyApartment/instruction/09.png" alt="Раздел голосования" class="rules__img">
                        </div>
                        <div class="rules__text">
                           После принятия решения по всем вопросам вы можете посмотреть промежуточные результаты и отправить результаты голосования администратору ОСС. Для этого нажмите кнопку «Подтвердить». Приложение покажет, что ваш голос учтён.
                           <img data-v-548dfeee="" src="https://176428.selcdn.ru/MyApartment/instruction/14.png" alt="Завершение голосования" class="rules__img">
                        </div>
                        <div class="rules__intro">
                            После того, как собрание закончится, вы сможете посмотреть результаты голосования.
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .rules {
        font-family: "PT Sans", sans-serif;
        counter-reset: block;
        .container {
            width: 100%;
            max-width: 960px;
            padding-right: 15px;
            padding-left: 15px;
            margin: 0 auto;
        }
        &__intro {
            margin: 24px 0;
        }
        &__link {
            color: #0f6cbc;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        &__img {
            display: block;
            max-width: 205px;
            margin: 24px auto;
        }
        &__page {
            margin: 30px 0;
            padding: 30px 50px;
            background-color: $white-color;
            box-shadow: 0 0 20px -3px;
        }
        &__home {
            width: 212px;
            cursor: pointer;
        }
        &__header {
            font-weight: bold;
            font-size: 18px;
            text-align: center;
            margin-top: 60px;
        }
        &__content {
            text-align: justify;
            line-height: 1.5em;
            font-size: 16px;
            margin-top: 30px;
            color: #333;
        }
        &__text{
            display: block;
            margin-top: 8px;
            margin-bottom: 8px;
            
            ul {
                list-style-position: inside;
                li {
                    margin-top: 8px;
                    margin-bottom: 8px;
                }
            }
            &::before {
                counter-increment: block;
                content: counter(block) ". ";
            }
        }
        &__link {
            color: #0f6cbc;
            text-decoration: none;
        }
    }
</style>