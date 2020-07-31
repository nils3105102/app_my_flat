<template>
<header class="header">
        <div class="header-logo">
            <div class="header-logo__icon"></div>
            <div class="header-logo__text">Моя Квартира</div>
        </div>
        <div class="header-menu">
            <div class="header-menu__items">
                <router-link to="/правила" tag="div" class="header-menu__item">Правила</router-link>
                <router-link to="/инструкция" tag="div" class="header-menu__item">Инструкция</router-link>
                <router-link to="/соглашение" tag="div" class="header-menu__item">Соглашение</router-link>
                <router-link to="/правила" tag="div" class="header-menu__icon">
                    <font-awesome-icon :icon="['fa', 'exclamation-circle']" />
                </router-link>
                <router-link to="/инструкция" tag="div" class="header-menu__icon">
                    <font-awesome-icon :icon="['fa', 'question-circle']" />
                </router-link>
                <router-link to="/соглашение" tag="div" class="header-menu__icon">
                    <font-awesome-icon :icon="['fa', 'handshake']" />
                </router-link>
            </div>
            <div v-if="isVisible" class="header-menu__block">
                <router-link to="/правила" tag="div" class="header-menu__item">Правила</router-link>
                <router-link to="/инструкция" tag="div" class="header-menu__item">Инструкция</router-link>
                <router-link to="/соглашение" tag="div" class="header-menu__item">Соглашение</router-link>
                
                <div class="header-menu__icons">
                    <router-link to="/правила" tag="div" class="header-menu__icon">
                        <font-awesome-icon :icon="['fa', 'exclamation-circle']" />
                    </router-link>
                    <router-link to="/инструкция" tag="div" class="header-menu__icon">
                        <font-awesome-icon :icon="['fa', 'question-circle']" />
                    </router-link>
                    <router-link to="/соглашение" tag="div" class="header-menu__icon">
                        <font-awesome-icon :icon="['fa', 'handshake']" />
                    </router-link>
                </div>
                <div class="header-menu__sign_icon">
                    <font-awesome-icon :icon="['fa', 'sign-in-alt']" />
                </div>
                <div class="header-menu__sign header-menu_hidden">
                    Войти
                </div>
            </div>
            <div class="header-menu__sign">
                Войти
            </div>
        </div>
        <div class="header-burger" v-on:click="isVisible = !isVisible">
            <div class="header-burger__line"></div>
            <div class="header-burger__line"></div>
            <div class="header-burger__line"></div>
        </div>
    </header>
</template>

<script>
export default {
    data: () =>  ({
        isVisible: false
    })
}
</script>