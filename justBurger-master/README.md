# justBurger

Простой и лёгкий плагин для кнопки бургер-меню

## Информация

+ __Никаких зависимостей__.  Библиотека написана на чистом JavaScript, для работы не требуются иные библиотеки.
+ __Простота и функциональность__. Вы можете легко и быстро подключить и использовать библиотеку, которая реализует функционал для меню
+ __Доступность__. Функционал библиотеки отвечает правилам доступности.
+ __Настройка с помощью CSS__. Вы можете легко менять внешний вид, расположение с помощью CSS.

1. Скачайте js-библиотеку justBurger.min.js и файл стилей justBurger.min.css
2. Подключите эти файлы к проекту
```html
  <link rel="stylesheet" href="justBurger.min.css">
  <script src="justBurger.min.js" defer></script>
```
3. Поместите в ваш html-документ следующую разметку:
```html
<button class="just-burger" aria-label="Меню" id="justBurger">
  <svg class="just-burger__icon" width="30" viewBox="0 0 50 50" aria-hidden="true">
    <path class="just-burger__line just-burger__line--top"
      d="M7 9.5H43.2105C46.5807 9.5 50 12.2586 50 17.0692C50 21.8798 47.5313 24.5 43.2105 24.5H25" />
    <path class="just-burger__line just-burger__line--middle" d="m 7,25 h 36" />
    <path class="just-burger__line just-burger__line--bottom"
      d="M43 40.5H6.78947C6.78947 40.5 0 39.7451 0 32.6264C0 25.5076 6.78947 24.5 6.78947 24.5H25" />
  </svg>
</button>
```

4. Разместите следующий JS-код для подключения табов:
```javascript
const burger = new justBurger();
```

## Методы и свойства

Библиотека поддерживает некоторые свойства и события

```javascript
const burger = new justBurger({
  animationSpeed: 400,
  activeClass: 'custom-class',
  menuId: 'menuList',
  isOpen: (burger) => {
    console.log(burger);
  },
  isClose: (burger) => {
    console.log(burger);
  }
});
```

1. Событие `isOpen` - срабатывает в момент открытия бургер-меню. Может принимать входной параметр - объект бургер-меню. Пример:
```javascript
  isOpen: (burger) => {
    console.log(burger);
  }
```

2. Событие `isClose` - срабатывает в момент закрытия бургер-меню. Может принимать входной параметр - объект бургер-меню. Пример: 
```javascript
  isClose: (burger) => {
    console.log(burger);
  }
```

3. Установка скорости анимации открытия/закрытия кнопки бургера (по умолчанию 400). Пример:
```javascript
  animationSpeed: 1000
```

4. Установка кастомного класса активности кнопке бургера. Пример:
```javascript
  activeClass: 'custom-class',
```

5. Идентификатор меню, которым управляет кнопка бургера. Указывается для повышения доступности. Пример:
```javascript
  menuId: 'menuList',
```
